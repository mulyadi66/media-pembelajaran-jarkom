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
  created_at timestamptz not null default now(),
  unique (nis, modul)
);

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
  delete from public.exam_results;
  get diagnostics deleted_rows = row_count;
  return deleted_rows;
end;
$$;

revoke all on function public.reset_exam_results(pin text) from public;
grant execute on function public.reset_exam_results(pin text) to anon;