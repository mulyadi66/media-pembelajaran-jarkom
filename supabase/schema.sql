-- Rekap nilai ujian per modul (MPK1)
-- Jalankan di Supabase Dashboard > SQL Editor, lalu "Run".
-- Retake dikunci oleh unique constraint (nis, modul): submit kedua untuk
-- NIS + modul yang sama akan ditolak server.

create table if not exists exam_results (
  id uuid primary key default gen_random_uuid(),
  nis text not null,
  nama text not null,
  modul text not null,
  nilai integer not null check (nilai between 0 and 100),
  kelas text,
  started_at timestamptz,
  finished_at timestamptz,
  durasi_detik integer,
  created_at timestamptz not null default now(),
  unique (nis, modul)
);

-- Migrasi tabel lama (sudah ada di prod): tambahkan kolom tanpa error jika sudah ada.
-- Jalankan ulang blok ini di SQL Editor setelah menambah kolom baru.
alter table exam_results add column if not exists kelas text;
alter table exam_results add column if not exists started_at timestamptz;
alter table exam_results add column if not exists finished_at timestamptz;
alter table exam_results add column if not exists durasi_detik integer;

alter table exam_results enable row level security;

-- anon hanya boleh insert & select (aplikasi web). Tidak ada update/delete.
drop policy if exists "insert own result" on exam_results;
create policy "insert own result"
  on exam_results for insert to anon
  with check (true);

drop policy if exists "select results" on exam_results;
create policy "select results"
  on exam_results for select to anon
  using (true);

-- ============================================================================
-- Reset hasil ujian (khusus guru).
-- anon TIDAK boleh delete langsung (RLS), jadi hapus lewat fungsi ini.
-- Fungsi berjalan sebagai pemilik tabel (security definer) sehingga bisa
-- menghapus semua baris, namun tetap memvalidasi PIN terlebih dahulu.
-- Catatan: pakai TRUNCATE, karena PostgREST menolak "delete from ..." tanpa
-- klausa WHERE (error: DELETE requires a WHERE clause).
--
-- PENTING: pin di bawah ('2468') HARUS sama dengan VITE_REKAP_PIN di Vercel.
-- Jika PIN diubah di Vercel, ubah juga nilai di sini lalu jalankan ulang blok ini.
-- ============================================================================
create or replace function public.reset_exam_results(pin text)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare deleted_rows integer;
begin
  if pin is null or pin <> '2468' then
    raise exception 'PIN salah';
  end if;
  select count(*) into deleted_rows from public.exam_results;
  truncate table public.exam_results restart identity;
  return deleted_rows;
end;
$$;

revoke all on function public.reset_exam_results(pin text) from public;
grant execute on function public.reset_exam_results(pin text) to anon;

-- ============================================================================
-- Reset per mata pelajaran dengan DAFTAR KEY PERSIS (dipakai Rekap Nilai KKA
-- dan KKA XI). Ini yang dipakai aplikasi — paling aman karena 'kka_elemen1_ujian'
-- dan 'kka_xi_modul1_ujian' sama-sama diawali 'kka_', sehingga tidak mungkin
-- dibedakan oleh prefix. Jalankan blok ini di SQL Editor Supabase.
-- pin harus sama dengan VITE_REKAP_PIN di Vercel.
-- ============================================================================
create or replace function public.reset_exam_results_keys(pin text, subject_keys text[])
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare deleted_rows integer;
begin
  if pin is null or pin <> '2468' then
    raise exception 'PIN salah';
  end if;
  if subject_keys is null or array_length(subject_keys, 1) is null then
    raise exception 'daftar kunci modul wajib diisi';
  end if;
  delete from public.exam_results
    where modul = any(subject_keys);
  get diagnostics deleted_rows = row_count;
  return deleted_rows;
end;
$$;

revoke all on function public.reset_exam_results_keys(pin text, subject_keys text[]) from public;
grant execute on function public.reset_exam_results_keys(pin text, subject_keys text[]) to anon;

-- ============================================================================
-- Versi lama (prefix, semantik `like prefix || '%'`). Dipakai hanya sebagai
-- cadangan kalau fungsi reset_exam_results_keys di atas belum terpasang.
--
-- Prefix WAJIB tidak tumpang tindih. Karena 'kka_elemen1_ujian' dan
-- 'kka_xi_modul1_ujian' sama-sama diawali 'kka_', prefix 'kka' akan menghapus
-- KKA reguler DAN KKA XI sekaligus. Karena itu prefix KKA reguler memakai
-- 'kka_elemen' (tepat di titik pembeda), bukan 'kka'.
-- Prefix dikirim dari SUBJECT_LEGACY_PREFIX di src/lib/examLib.js:
--   mpk1 -> 'mpk1_'      kka -> 'kka_elemen'      kka_xi -> 'kka_xi_'
-- ============================================================================
create or replace function public.reset_exam_results_subject(pin text, subject_prefix text)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare deleted_rows integer;
begin
  if pin is null or pin <> '2468' then
    raise exception 'PIN salah';
  end if;
  if subject_prefix is null or subject_prefix = '' then
    raise exception 'prefix mapel wajib diisi';
  end if;
  delete from public.exam_results
    where modul like subject_prefix || '%';
  get diagnostics deleted_rows = row_count;
  return deleted_rows;
end;
$$;

revoke all on function public.reset_exam_results_subject(pin text, subject_prefix text) from public;
grant execute on function public.reset_exam_results_subject(pin text, subject_prefix text) to anon;

-- ============================================================================
-- TOKEN UJIAN PER MATA PELAJARAN + MASA BERLAKU
--
-- Jalankan blok ini di Supabase Dashboard > SQL Editor, lalu "Run".
--
-- Kenapa tabel, bukan env var: VITE_* di-inline ke dalam bundle JS saat build,
-- jadi mengganti token selalu butuh redeploy Vercel. Dengan tabel ini guru bisa
-- rotasi token + tanggal kedaluwarsa langsung dari halaman Rekap Nilai.
--
-- Kenapa per mapel: sebelumnya MPK 1, KKA, dan KKA XI semuanya memakai satu
-- VITE_EXAM_TOKEN yang sama, jadi mengacak token KKA ikut mengubah MPK 1.
--
-- Keamanan: anon hanya boleh SELECT. Menulis HANYA lewat set_exam_token yang
-- memvalidasi PIN. Jangan pernah menambah policy INSERT/UPDATE untuk anon di
-- tabel ini — kalau ada, siapa pun bisa menimpa token dari console browser,
-- dan itu membuat gate token jadi tidak berarti sama sekali.
-- (Token sudah bocor lewat bundle JS sejak awal, jadi read-anon tidak menambah
-- risiko baru; yang dilindungi di sini adalah hak MENGGANTI token.)
--
-- Fallback: kalau tabel kosong atau Supabase sedang down, aplikasi memakai
-- VITE_EXAM_TOKEN* per mapel, lalu hardcoded default. Jadi blok ini boleh
-- dijalankan belakangan tanpa memblokir ujian yang sedang berjalan.
--
-- PENTING: pin di bawah ('2468') HARUS sama dengan VITE_REKAP_PIN di Vercel.
-- ============================================================================
create table if not exists exam_tokens (
  subject text primary key check (subject in ('mpk1', 'kka', 'kka_xi')),
  token text not null check (length(trim(token)) >= 4),
  expires_at timestamptz,
  updated_at timestamptz not null default now()
);

alter table exam_tokens enable row level security;

drop policy if exists "select exam tokens" on exam_tokens;
create policy "select exam tokens"
  on exam_tokens for select to anon
  using (true);

-- Guru menyimpan/rotasi token + masa berlaku lewat form di halaman Rekap Nilai.
create or replace function public.set_exam_token(
  pin text,
  p_subject text,
  p_token text,
  p_expires_at timestamptz
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if pin is null or pin <> '2468' then
    raise exception 'PIN salah';
  end if;
  if p_subject is null or p_subject not in ('mpk1', 'kka', 'kka_xi') then
    raise exception 'Mata pelajaran tidak dikenal';
  end if;
  if p_token is null or length(trim(p_token)) < 4 then
    raise exception 'Token minimal 4 karakter';
  end if;

  insert into public.exam_tokens (subject, token, expires_at, updated_at)
  values (p_subject, trim(p_token), p_expires_at, now())
  on conflict (subject) do update
    set token = excluded.token,
        expires_at = excluded.expires_at,
        updated_at = now();
end;
$$;

revoke all on function public.set_exam_token(pin text, p_subject text, p_token text, p_expires_at timestamptz) from public;
grant execute on function public.set_exam_token(pin text, p_subject text, p_token text, p_expires_at timestamptz) to anon;

-- Menghapus baris -> token mapel ini kembali ke VITE_EXAM_TOKEN / default.
create or replace function public.clear_exam_token(pin text, p_subject text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if pin is null or pin <> '2468' then
    raise exception 'PIN salah';
  end if;
  if p_subject is null or p_subject not in ('mpk1', 'kka', 'kka_xi') then
    raise exception 'Mata pelajaran tidak dikenal';
  end if;
  delete from public.exam_tokens where subject = p_subject;
end;
$$;

revoke all on function public.clear_exam_token(pin text, p_subject text) from public;
grant execute on function public.clear_exam_token(pin text, p_subject text) to anon;