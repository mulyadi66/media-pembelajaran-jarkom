# Context Save — Media Pembelajaran Jarkom

**Terakhir diupdate:** 10 September 2026
**Branch:** master
**Status:** Bersih (no uncommitted changes — tip terakhir `56a8a78`)

---

## Goal
Media pembelajaran interaktif React untuk siswa SMK TJKT Kelas XI, Fase F — Perencanaan & Pengalamatan Jaringan.

## Deploy
- **GitHub:** `mulyadi66/media-pembelajaran-jarkom`
- **Vercel:** `media-pembelajaran-jarkom-react.vercel.app`
- Auto-deploy dari branch `master` via GitHub integration
- `vercel.json` sudah ditambahkan untuk SPA rewrite (React Router)

## Tech Stack
- React 19 + Vite, React Router, Lucide React, html2canvas + jsPDF
- State: Context API (AppContext), localStorage persistence
- PWA: manifest.json + service worker

## MPK 1 — Post Test & Rekap Nilai Guru
- **Mapel:** Perencanaan & Pengalamatan Jaringan, rute `/mpk1/` (dashboard) + modul 1/2/3 + rekap.
- **Post Test tiap modul kini 25 soal** (bank: `src/data/modulPostTests.js`), level C2–C6 sesuai materi masing-masing modul (1.1–1.4, topologi, IP/subnetting). Soal diacak per siswa & tersimpan.
- **Alur ujian:** Token ujian (`VITE_EXAM_TOKEN`, default `TKJ235`) → Identitas (Nama + NIS validasi numerik, cek NIS terverifikasi di server) → soal + timer dinamis (±1,5 menit/soal) → submit sekali (retake dikunci server) → review jawaban + penjelasan.
- **Perangkat bersama:** tombol "Reset Identitas" membersihkan identitas + hasil lokal agar siswa lain bisa mengerjakan.
- **Anti-contek ringan:** banner peringatan saat pindah tab (≥3× merah) + konfirmasi browser saat menutup/merefresh saat ujian. Tidak memblokir nilai.
- **Rekap Nilai guru** (`/mpk1/rekap`, PIN = `VITE_REKAP_PIN`, default `2468`): tabel nilai per siswa, filter/pencarian nama-NIS, statistik rata-rata per modul + rerata kelas, export CSV, cetak (print A4), dan tombol Reset (server + lokal; validasi PIN).
- **Supabase:**
  - URL `https://ogrlegwzktrelokhwoyg.supabase.co`; tabel `exam_results` dengan `unique (nis, modul)` → submit kedua ditolak server (HTTP 409).
  - Fungsi `reset_exam_results(pin)` (TRUNCATE + SECURITY DEFINER, PostgREST menolak DELETE tanpa WHERE) — definisi di `supabase/schema.sql`; PIN di fungsi (`2468`) harus sama dengan `VITE_REKAP_PIN`.
  - Env di Vercel WAJIB type **Non-sensitive** — VITE_* hanya ter-inline saat build jika non-sensitive.
- **State keys:** `mpk1_modul1_posttest`, `mpk1_modul2_posttest`, `mpk1_modul3_posttest` (jawaban/order/deadline/submitted/unlocked), `jarkomlab_identity`, `jarkomlab_examHistory`, `jarkomlab_examSubmitted`, `jarkomlab_pendingSync`.
- **Env vars (prod):** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (lokal di `.env.local` gitignored), `VITE_REKAP_PIN=2468`, `VITE_EXAM_TOKEN=TKJ235`.

## MPK 2
- **Mapel:** Teknologi Jaringan Kabel dan Nirkabel
- **Akronim:** MPK 2, rute `/mpk2/`
- **5 Modul:** (1) Instalasi & Perawatan Jaringan, (2) Dasar Jaringan Nirkabel, (3) Instalasi Perangkat Nirkabel, (4) VoIP, (5) Fiber Optik
- **Fitur:** Dashboard, Modul1-5 (materi + video + section tracker), Flashcard (35 istilah), Glossary (35 + search), Worksheet (25 essay), PreTest/PostTest (20 HOTS), Challenge (50 soal cepat), Kasus (3 studi kasus), Hasil (ringkasan + reset)
- **Data:** `src/data/mpk2/`, halaman: `src/pages/mpk2/`

## Modul Ajar
- File: `src/data/modulAjar.js` + `src/pages/ModulAjarPage.jsx`
- Rute: `/modul-ajar`
- Identitas: Fase F, Kelas XI TJKT, 2026/2026, SMK Negeri 2 Kuningan
- Sidebar navigasi internal + accordion sections + print A4

## Video Embeds (sudah diganti ke video yang works)
| Modul | Video ID | Judul |
|---|---|---|
| Modul 1 (1.3) | `fPIM95D55h8` | Praktik Membuat Kabel Crossover (Tutorial RJ-45) |
| Modul 1 | `LiMdHeaS4zY` | Network Fundamentals - Peralatan Jaringan |
| Modul 2 | `7Ut4u8qVwRU` | Topologi Jaringan Lengkap (Star, Bus, Ring, Mesh, Wireless) - Bahasa Indonesia |
| Modul 2 | `QGykYWbdf0A` | Topologi Jaringan - Bus, Ring, Star, Mesh, Tree |
| Modul 3 (3.1) | `ZxgytoBVEaE` | Pembagian Kelas IP Address (A, B, C) - Bahasa Indonesia |
| Modul 3 (3.2) | `VVd5xkTnPZ0` | Praktik IP Address & Subnetting di Cisco Packet Tracer |
| Modul 3 (3.4) | `N7BEDtZ7G4g` | VLSM (Variable Length Subnet Mask) - Solved Problem |
| Modul 3 | `9GtL8dW8rYY` | IP Subnetting Lengkap - Binary, Class, VLSM & CIDR |

## Bug Fixes Terakhir
1. `vercel.json` dibuat untuk SPA rewrite — semua rute React Router sekarang jalan di Vercel
2. Video embed IDs diganti ke YouTube videos yang verified aktif
3. `.sim-canvas` ditambah `position: relative` — device simulator seharusnya sudah bisa drag & drop

## Fitur Lengkap
- Dashboard, Modul 1-3 (materi + video + section tracker), Post Test ujian per modul (exam-only: token gate + timer + auto-grade + review + anti-contek)
- Rekap Nilai guru (PIN, filter/pencarian, statistik per modul, CSV, cetak, reset server+lokal)
- Flashcard (35 istilah), Glossary (35 istilah + search), Worksheet (24 essay), Challenge mode (30 soal timed)
- Device Simulator (drag & drop), Certificate generator, Badges, Streak, Leaderboard
- Dark mode, PWA, Print styles, Error boundary

## KKA XI (Koding & Kecerdasan Artifisial XI)
- **Kode:** KKA XI, rute `/kka-xi/`
- **4 Modul:** (1) Menyaring Fakta, Identitas Digital & Kolaborasi Konten, (2) Algoritma & Struktur Data, (3) Algoritma Pemograman, (4) Pengembangan Web Responsif & Interaktif
- **Fitur:** Dashboard, Modul1-4 (materi + section tracker), Flashcard (35 istilah), Glossary (35 + search), Worksheet (20 essay), PreTest/PostTest (20 HOTS), Challenge (30 soal cepat), Kasus (3 studi kasus), Hasil (ringkasan + reset)
- **Data:** `src/data/kka-xi/`, halaman: `src/pages/kka-xi/`
- **State keys:** `kka_xi_pretest`, `kka_xi_posttest`, `kka_xi_pretestAnswers`, `kka_xi_posttestAnswers`

## Potensi Lanjutan
- [x] Post Test Modul 1/2/3 → 25 soal sesuai materi masing-masing; timer dinamis (±1,5 menit/soal)
- [x] Validasi NIS (numerik) + cek NIS terverifikasi di server saat simpan identitas; tombol Reset Identitas untuk perangkat bersama
- [x] Rekap nilai: filter/pencarian nama-NIS, statistik rata-rata per modul, reset server (RPC TRUNCATE) + reset lokal
- [x] Token ujian + peringatan anti-contek (pindah tab, tutup/merefresh tab) saat ujian berlangsung
- [x] Verifikasi device simulator — touch-action:none + e.preventDefault() untuk mobile drag
- [x] Modul Ajar filter Modul 1/2/3 via tabs
- [x] PDF download Modul Ajar (html2canvas + jsPDF)
- [x] Bank soal pretest/posttest MPK1 & DKK (15→20 soal per bank)
- [x] Export leaderboard ke PNG (html2canvas)
- [x] Aksesibilitas — ARIA labels, keyboard nav, aria-hidden dekoratif
