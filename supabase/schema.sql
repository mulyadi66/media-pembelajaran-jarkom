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