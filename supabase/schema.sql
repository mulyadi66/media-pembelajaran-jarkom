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