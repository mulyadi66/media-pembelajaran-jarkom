# Context Save — Media Pembelajaran Jarkom

**Terakhir diupdate:** 29 September 2026
**Branch:** master
**Status:** Bersih (no uncommitted changes — tip terakhir `148385b`)

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
- Lint: `oxlint` (`npm run lint`); build: `npm run build` — keduanya harus lolos sebelum push

## Design Tokens & Aksesibilitas (`src/App.css`)
Semua styling terpusat di `src/App.css` (~2500 baris) + `index.css` (kosong, tidak dipakai).

**Token warna — WAJIB pakai yang benar:**
- `--primary` (#5b5ed6 light / #6063e0 dark) → khusus **fill/gradien/border**, bukan untuk teks
- `--primary-text` (#4f46e5 light / #a5b4fc dark) → khusus **warna teks** accent
- Alasannya: `--primary` lama (#6366f1) dipakai untuk fill dan teks sekaligus, tradeoff-nya bertentangan (fill butuh gelap agar teks putih terbaca, teks accent butuh terang agar terbaca di atas putih). Kalau butuh warna accent untuk teks, pakai `--primary-text`, jangan `--primary`.
- `--text` / `--text-light` / `--text-lighter`: tiga tingkat hierarki teks, semua sudah lolos WCAG AA
- **Jangan tambah hex mentah** untuk warna teks/border; pakai token agar dark mode otomatis ikut

**Aturan aksesibilitas yang sudah ditegakkan (jaga saat edit baru):**
- Kontras teks min 4.5:1, komponen UI/border min 3:1
- `:focus-visible` global sudah ada — **dilarang** menambah `outline: none` tanpa cincin fokus pengganti
- Semua target sentuh min 44×44px. Untuk elemen kecil yang harus tetap tampil kecil (titik navigasi flashcard), pakai `::after` 44×44px sebagai area sentuh
- `@media (prefers-reduced-motion: reduce)` sudah ada di atas file — animasi `float`/`pulse`/spinner/skeleton dimatikan. Kalau menambah animasi baru, daftarkan di blok itu
- Verifikasi kontras: hitung rasio WCAG sebelum pilih warna, jangan menebak

## MPK 1 — Post Test & Rekap Nilai Guru
- **Mapel:** Perencanaan & Pengalamatan Jaringan, rute `/mpk1/` (dashboard) + modul 1/2/3 + rekap.
- **Post Test tiap modul kini 25 soal** (bank: `src/data/modulPostTests.js`), level C2–C6 sesuai materi masing-masing modul (1.1–1.4, topologi, IP/subnetting). Soal diacak per siswa & tersimpan.
- **Alur ujian:** Token ujian (`VITE_EXAM_TOKEN`, default `TKJ235`) → Identitas (Nama + NIS validasi numerik, cek NIS terverifikasi di server) → soal + timer dinamis (±1,5 menit/soal) → submit sekali (retake dikunci server) → review jawaban + penjelasan.
- **Perangkat bersama:** tombol "Reset Identitas" membersihkan identitas + hasil lokal agar siswa lain bisa mengerjakan.
- **Anti-contek ringan:** banner peringatan saat pindah tab (≥3× merah) + konfirmasi browser saat menutup/merefresh saat ujian. Tidak memblokir nilai.
- **Rekap Nilai guru** (`/mpk1/rekap`, PIN = `VITE_REKAP_PIN`, default `2468`): tabel nilai per siswa + kolom **Kelas, Status (Selesai/Sebagian/Belum), Durasi** pengerjaan, filter/pencarian nama-NIS + filter kelas, statistik rata-rata per modul + rerata kelas, export CSV (ikut kolom baru), cetak (print A4), dan tombol Reset (server + lokal; validasi PIN).
- **Roster siswa**: panel "Daftar Siswa" di Rekap — tempel teks `NIS;Nama;Kelas` per baris → tersimpan lokal (key `jarkomlab_roster`); siswa roster yang belum mengerjakan tampil berstatus **Belum** (row disorot, tidak perlu sudah submit).
- **Durasi pengerjaan**: waktu mulai dicatat di `jarkomlab_${key}_startedAt` saat ujian mulai; saat submit dikirim `started_at`/`finished_at`, server menghitung `durasi_detik` (kolom baru) → tampil per modul + total di Rekap & CSV.
- **Supabase:**
  - URL `https://ogrlegwzktrelokhwoyg.supabase.co`; tabel `exam_results` dengan `unique (nis, modul)` → submit kedua ditolak server (HTTP 409).
  - **Kolom baru:** `kelas`, `started_at`, `finished_at`, `durasi_detik` — jalankan blok `ALTER TABLE ... ADD COLUMN IF NOT EXISTS` di `supabase/schema.sql` (idempotent). Tanpa migrasi pun aplikasi tetap jalan (fallback kolom dasar saat error `42703`), hanya kolom baru yang kosong.
  - Fungsi `reset_exam_results(pin)` (TRUNCATE + SECURITY DEFINER, PostgREST menolak DELETE tanpa WHERE) — definisi di `supabase/schema.sql`; PIN di fungsi (`2468`) harus sama dengan `VITE_REKAP_PIN`.
  - Env di Vercel WAJIB type **Non-sensitive** — VITE_* hanya ter-inline saat build jika non-sensitive.
- **State keys:** `mpk1_modul1_posttest`, `mpk1_modul2_posttest`, `mpk1_modul3_posttest` (jawaban/order/deadline/submitted/unlocked + `_startedAt`), `jarkomlab_identity`, `jarkomlab_examHistory`, `jarkomlab_examSubmitted`, `jarkomlab_pendingSync`, `jarkomlab_roster`.
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
4. Kolom **Akses** (tombol "Buka Akses") dipindah ke depan (sebelah Kelas) — tadinya di pojok kanan tabel tersembunyi di balik scroll horizontal
5. `vercel.json` + header `Cache-Control: no-cache` untuk `index.html` — update fitur langsung terlihat tanpa hard refresh (deploy ini perlu dipantau sampai chunk baru live, sebelumnya sempat rollover gagal 404)
6. **UI/UX overhaul** (`079375d`): kontras warna WCAG AA, focus keyboard, target sentuh 44px — detail di bagian Design Tokens & Aksesibilitas
7. **Pre-Test KKA XI** dipecah per modul (`1211c91`): 4 × 30 soal, kunci storage per modul
8. **Pre-Test KKA** dipecah per elemen (`a1599c8`): 5 × 30 soal, bank lama 20 soal campur dibuang
9. **Halaman Hasil KKA** (`c2a551d`, `c32e26f`): Post-Test yang sudah mati dibuang dari ringkasan,
   Detail Penilaian, dan `checkBadges`; `Leaderboard` diberi `examAvg` supaya kolom kedua
   berbunyi "Rata-rata Ujian" dan bukan "Post-Test 0" selamanya
10. **Post-Test KKA dihapus total** (`cd1a3c7`) dan `PostTestUjianKKA.jsx` di-rename jadi
    `UjianKKALanding.jsx` (`148385b`) karena namanya menyesatkan (sebenarnya landing Ujian)

## Catatan Review UI/UX (28 Sep 2026) — belum dikerjakan
Temuan dari review, sengaja ditunda karena di luar 3 prioritas yang sudah diperbaiki:
- `overflow-x: hidden` di `body` (`App.css:65`) — menutupi gejala, bukan memperbaiki. Kandidat akar masalah kalau tabel Rekap bermasalah di HP
- 14 file masih pakai emoji sebagai ikon (`📡` di Modul2/Modul3MPK2, `⚙️` di Modul2, `🔌`/`📞`/`📶` di simulator MPK2) — project sudah konsisten pakai Lucide, tinggal ganti
- Sidebar MPK1 punya 19 item nav datar tanpa pengelompokan; saat collapsed teksnya hilang tanpa `title`/`aria-label` per item
- 249 hex mentah masih ada di `App.css` (dark mode masih ditulis manual per-kelas)
- `aria-live` hanya dipakai di `Quiz.jsx`, padahal ada timer countdown; heading `h1`→`h2` skipping di beberapa halaman

## Pre-Test Terpisah per Elemen/Modul (KKA & KKA XI)
Pola yang dipakai di dua mapel KKA: pre-test dipecah per unit, bukan satu paket campur.
- **Kenapa:** siswa bisa mengukur pemahaman awal tiap unit sebelum belajar, dan satu unit
  yang belum dikerjakan tidak menghalangi unit lain. Bank lama yang campur semua elemen
  (KKA) dibuang total.
- **Komposisi tiap unit:** 30 soal = 10 Mudah (C2) + 10 Sedang (C3) + 10 Sulit (C5).
  Kunci jawaban wajib tersebar merata 6/6/6/6/6 per indeks 0-4 (dicek saat menulis bank).
  Field per soal: `id`, `level` (`'Mudah · C2 - Memahami'`), `diff` (`'Mudah'`),
  `elemen`, `question`, `options` (5, berprefiks `"A. "`..`"E. "`), `answer` (indeks 0-based),
  `explanation`.
- **Tidak pakai token guru dan boleh diulang** — tujuannya diagnostik, bukan nilai rapor.
  Bandingkan dengan Ujian (bertoken, submit sekali).
- **Nilai ganda per unit + agregat:** nilai tiap unit disimpan di key sendiri untuk halaman
  Hasil, lalu rata-rata unit yang sudah dikerjakan disimpan di key agregat lama supaya badge,
  leaderboard, dan growth tidak perlu diubah.
- **Landing + halaman per unit:** `/kka/pretest` (daftar elemen) dan `/kka/pretest/:slug`;
  `/kka-xi/pretest` dan `/kka-xi/pretest/:slug`. `Quiz` diberi `key={bank.key}` supaya
  remount saat pindah unit — tanpa itu state soal/timer mewarisi unit sebelumnya.
- CSS: `.pretest-tingkat-list` / `-item` / `-badge` + `.ujian-elemen-list` / `-card` di `App.css`
  (dipakai bersama oleh pre-test dan landing ujian).
- `getNilaiPretest()` dan `getRataPretest()` di file index tiap mapel: nilai 0 ikut dihitung
  (siswa tetap sudah mengerjakan unit itu), `null` = belum.

### KKA — Pre-Test per Elemen (5 × 30 = 150 soal)
- Bank: `src/data/kka/pretestElemen1KKA.js` .. `pretestElemen5KKA.js` (materi: berpikir
  komputasional, literasi digital, algoritma pemrograman, analisis data, literasi & etika AI).
- Index: `src/data/kka/pretestKKA.js` → `PRETEST_KKA`, `PRETEST_KKA_SOAL_PER_ELEMEN=30`,
  `PRETEST_KKA_TOTAL=150`, `PRETEST_KKA_TINGKAT`, `getPretestBySlug`, `getNilaiPretest`, `getRataPretest`.
- Halaman: `src/pages/kka/PreTestKKA.jsx` (landing) + `PreTestElemenKKA.jsx` (per elemen).
- **State keys:** `kka_elemen{1..5}_pretest` (jawaban/order/deadline/submitted per elemen)
  + agregat `kka_pretest`. Key lama `kka_pretestAnswers` sudah tidak dipakai.
- Elemen 3 (algoritma) punya soal kode Python — nomor soal memakai `for i in range(2, 11, 2): print(i)`
  dst. Format satu baris WAJIB: `for ...: print(...)` memang SyntaxError di Python, dan
  `print("Tinggi" if nilai > 80 else "Cukup")` dipakai untuk if-else satu baris. **Jalankan
  kodenya dengan Python sebelum menetapkan kunci.** `.question-text` sudah `white-space: pre-line`
  jadi `\n` di soal tampil rapi.

### KKA XI — Pre-Test per Modul (4 × 30 = 120 soal)
- Bank: `src/data/kka-xi/pretestModul1KKAXI.js` .. `pretestModul4KKAXI.js`.
- Index: `src/data/kka-xi/pretestKKAXI.js` → `PRETEST_KKA_XI`, `PRETEST_KKA_XI_SOAL_PER_MODUL=30`,
  `PRETEST_KKA_XI_TOTAL=120`.
- Halaman: `src/pages/kka-xi/PreTestKKAXI.jsx` + `PreTestModulKKAXI.jsx`.
- **State keys:** `kka_xi_modul{1..4}_pretest` + agregat `kka_xi_pretest`.
  Key lama `kka_xi_pretestAnswers` sudah tidak dipakai; `kka_xi_posttest`/`_posttestAnswers` masih aktif.

## Post Test Terpisah per Modul
- Post Test Modul 1/2/3 masing-masing di halaman khusus: `/mpk1/posttest-modul1`, `/mpk1/posttest-modul2`, `/mpk1/posttest-modul3` (lazy-route di `App.jsx`, item + titles/descs di `Layout.jsx`, kartu CTA di halaman materi; storage/score keys tetap `mpk1_modul{1,2,3}_posttest`)
- Fitur ujian tetap sama: token gate + kunci layar otomatis + timer + auto-grade + review + anti-contek

## Anti-Contek: Kunci Soal setelah 3× Pelanggaran
- 3× pindah tab/keluar kunci layar → **soal dikunci** (screensaver "Ujian Dikunci", bukan cuma peringatan). Jawaban tidak bisa dilihat/diubah sampai dibuka guru.
- Pelanggaran disimpan di `jarkomlab_${storageKey}_warns` (localStorage) → tidak hilang saat refresh.
- Guru membuka lewat **tombol "Buka Akses"** di Rekap Nilai (kolom Akses) → modal berisi Kode Buka Akses per modul.
- Kode = `unlockCode(nis, modulKey)` di `src/lib/examLib.js` (hash NIS+modul+PIN guru) → diverifikasi client-side, deterministik; siswa tidak bisa membuka tanpa guru.

## Fitur Lengkap
- Dashboard, Modul 1-3 (materi + video + section tracker), Post Test ujian per modul (exam-only: token gate + timer + auto-grade + review + anti-contek)
- Rekap Nilai guru (PIN, filter/pencarian, filter kelas, statistik per modul, kolom Kelas/Status/Durasi, roster siswa, CSV, cetak, reset server+lokal)
- Flashcard (35 istilah), Glossary (35 istilah + search), Worksheet (24 essay), Challenge mode (30 soal timed)
- Device Simulator (drag & drop), Certificate generator, Badges, Streak, Leaderboard
- Dark mode, PWA, Print styles, Error boundary

## Ujian KKA (Koding & Kecerdasan Artifisial) — `src/pages/kka/`
- **Rute:** `/kka` (dashboard), `/kka/elemen1..5`, `/kka/ujian` (landing), `/kka/ujian/elemen1..5`, `/kka/rekap`, `/kka/pretest` + `/kka/pretest/:slug`
- **5 Elemen**, tiap elemen 25 soal (total 125), bank di `src/data/kka/ujianKKA.js` (`UJIAN_KKA_TOTAL=125`, `UJIAN_KKA_SOAL_PER_ELEMEN=25`)
- Alur sama seperti Post Test MPK 1: token → identitas → soal + timer → submit → review
- **State keys:** `kka_elemen{1..5}_ujian` (satu key per elemen)
- Rekap `/kka/rekap` (PIN via `getRekapPin`, flag sessionStorage `rekapPinKkaOk`)
- **Post-Test KKA sudah dihapus total** (`cd1a3c7`): file `PostTestKKA.jsx` + `posttestKKA.js`
  dan route `/kka/posttest` dibuang. Sertifikat + badge + leaderboard **tidak** lagi membaca
  `kka_posttest`; syaratnya hanya Ujian KKA (5 elemen selesai, rerata ≥ 70). Nilai `kka_posttest`
  yang tertinggal di storage siswa lawas diabaikan diam-diam, tidak dihapus.
- **Nama file jebakan:** landing `/kka/ujian` ada di `UjianKKALanding.jsx`. Semula bernama
  `PostTestUjianKKA.jsx` dan sudah di-rename (`148385b`) karena terlihat seperti file mati.
  Kalau menambah file Ujian KKA, jangan salah hapus yang namanya mengandung "PostTest".
- `Leaderboard` untuk KKA/KKA XI **wajib** diberi `examAvg` (rata-rata Ujian) — kalau tidak,
  kolom kedua jatuh ke `posttestKey` dan tampil "Post-Test 0" selamanya.

## KKA XI (Koding & Kecerdasan Artifisial XI)
- **Kode:** KKA XI, rute `/kka-xi/`
- **4 Modul:** (1) Menyaring Fakta, Identitas Digital & Kolaborasi Konten, (2) Algoritma & Struktur Data, (3) Algoritma Pemograman, (4) Pengembangan Web Responsif & Interaktif
- **Fitur:** Dashboard, Modul1-4 (materi + section tracker), Flashcard (35 istilah), Glossary (35 + search), Worksheet (20 essay), PreTest/PostTest (20 HOTS), Challenge (30 soal cepat), Kasus (3 studi kasus), Hasil (ringkasan + reset)
- **Data:** `src/data/kka-xi/`, halaman: `src/pages/kka-xi/`
- **State keys:** `kka_xi_modul{1..4}_pretest`, `kka_xi_pretest` (agregat), `kka_xi_posttest`, `kka_xi_posttestAnswers`

## Potensi Lanjutan
- [x] Post Test Modul 1/2/3 → 25 soal sesuai materi masing-masing; timer dinamis (±1,5 menit/soal)
- [x] Validasi NIS (numerik) + cek NIS terverifikasi di server saat simpan identitas; tombol Reset Identitas untuk perangkat bersama
- [x] Rekap nilai: filter/pencarian nama-NIS, statistik rata-rata per modul, reset server (RPC TRUNCATE) + reset lokal
- [x] Kolom Kelas/Grup opsional di identitas → filter kelas + statistik per kelas di Rekap
- [x] Durasi pengerjaan per siswa per modul (started_at/finished_at/durasi_detik) → kolom Durasi di Rekap + CSV
- [x] Roster siswa (NIS;Nama;Kelas, tersimpan lokal) → siswa yang belum mengerjakan tampil status Belum
- [x] Token ujian + peringatan anti-contek (pindah tab, tutup/merefresh tab) saat ujian berlangsung
- [x] Verifikasi device simulator — touch-action:none + e.preventDefault() untuk mobile drag
- [x] Modul Ajar filter Modul 1/2/3 via tabs
- [x] PDF download Modul Ajar (html2canvas + jsPDF)
- [x] Bank soal pretest/posttest MPK1 & DKK (15→20 soal per bank)
- [x] Export leaderboard ke PNG (html2canvas)
- [x] Aksesibilitas — ARIA labels, keyboard nav, aria-hidden dekoratif
- [x] Kontras warna WCAG AA (token `--primary-text` dipisah dari `--primary`)
- [x] Focus keyboard global (`:focus-visible`, tanpa `outline: none` telanjang)
- [x] `prefers-reduced-motion: reduce` untuk animasi float/pulse/spinner/skeleton
- [x] Target sentuh min 44×44px di tombol, nav, dan chip
- [x] Pre-Test KKA XI dipecah per modul (4 × 30 = 120 soal) + pre-test tak bertoken, boleh diulang
- [x] Pre-Test KKA dipecah per elemen (5 × 30 = 150 soal); bank lama 20 soal campur dibuang
- [x] Audit bank soal KKA: kunci diverifikasi, snippet Python dijalankan, perhitungan statistik dihitung ulang
- [x] Post-Test KKA dihapus total (route, file, bank soal) + fallback sertifikat/badge/leaderboard
- [x] Audit bank soal KKA XI: 120 soal diverifikasi, 3 bug kunci soal diperbaiki
