# Context Save — Media Pembelajaran Jarkom

**Terakhir diupdate:** 30 September 2026
**Branch:** master
**Status:** Semua bank Post Test MPK 1 (Modul 1/2/3) sudah diaudit & diperbaiki.

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
- **Post-Test legacy sudah dihapus total** (`PostTest.jsx` + `posttestQuestions.js`, route `/mpk1/posttest`). Satu-satunya nilai akhir MPK 1 = rerata tiga Post-Test per modul. Sertifikat & badge hanya muncul kalau **ketiga modul selesai** dengan rerata ≥ 70. Nilai `posttest` sisa di storage siswa lawas sengaja tidak dibaca.
- **Badge wajib pakai `pretestKey` + `examAvg`/`examDone` eksplisit.** `checkBadges` masih default ke `pretestKey: 'pretest'` dan `posttestKey: 'posttest'` — kalau lupa, badge Challenger/Sharp Mind/Achiever/Growing mati diam-diam tanpa error. Semua mapel sudah mengirimnya eksplisit.
- **Alur ujian:** Identitas (Nama + NIS validasi numerik, cek NIS terverifikasi di server) → Token ujian (per mapel, ada masa berlaku) → soal + timer dinamis (±1,5 menit/soal) → submit sekali (retake dikunci server) → review jawaban + penjelasan. (Catatan: identitas muncul lebih dulu dari token, jadi kalimat di halaman Ujian yang berbunyi "token guru → identitas" belum sesuai urutan sebenarnya.)
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
  - Tabel `exam_tokens` + fungsi `set_exam_token` / `clear_exam_token` (lihat bagian Token Ujian di bawah).

## Token Ujian per Mapel + Masa Berlaku
- **Kenapa diubah:** sebelumnya semua mapel (MPK 1, KKA, KKA XI) memakai satu `VITE_EXAM_TOKEN` yang sama, jadi mengacak token KKA ikut mengubah MPK 1. Dan karena `VITE_*` di-inline saat build, **setiap** penggantian token wajib redeploy Vercel. Sekarang token + tanggal kedaluwarsa disimpan di tabel `exam_tokens` dan bisa dirotasi dari halaman Rekap **tanpa deploy**.
- **Sumber token (urutan fallback)** — `loadExamToken()` di `src/lib/examLib.js`:
  1. Tabel `exam_tokens` (server, `source: 'server'`)
  2. `VITE_EXAM_TOKEN_<SUBJECT>` per mapel, lalu `VITE_EXAM_TOKEN` lama (hanya untuk MPK 1) (`source: 'env'`)
  3. Hardcoded `TKJ235` / `KKA235` / `KXI235` (`source: 'default'`)
  Fungsi ini **tidak pernah melempar error** — Supabase mati atau blok SQL belum dijalankan pun halaman ujian tetap jalan. Itu disengaja: migrasi server tidak boleh memblokir ujian.
- **Petakan modul → mapel** (`subjectFromStorageKey`). Prefix WAJIB tidak tumpang tindih: `mpk1_`, `kka_elemen`, `kka_xi_`. **Jebakan:** `'kka_xi_modul1_ujian'.startsWith('kka_')` → `true`, jadi prefix KKA reguler harus `kka_elemen` (tepat di titik pembeda), bukan `kka`. Sama seperti `SUBJECT_LEGACY_PREFIX`.
- **Keamanan tulis:** anon **hanya boleh SELECT**. Menulis hanya lewat `set_exam_token(pin, subject, token, expires_at)` / `clear_exam_token(pin, subject)` yang SECURITY DEFINER + validasi PIN. **Jangan pernah menambah policy INSERT/UPDATE/DELETE anon di `exam_tokens`** — kalau ada, siapa pun bisa menimpa token dari console browser dan gerbang token jadi tidak berarti. (Token sendiri sudah bocor dari bundle JS sejak awal, jadi read-anon tidak menambah risiko baru; yang dilindungi adalah hak *mengganti*.)
- **PIN di fungsi SQL harus sama dengan `VITE_REKAP_PIN`** — sama seperti ketiga fungsi `reset_exam_results*`.
- **Editor di Rekap:** `src/components/TokenUjianPanel.jsx`, dipasang di ketiga halaman Rekap (ganti kartu `.exam-token-card` yang dulu read-only). Form hanya aktif kalau `source === 'server'`; kalau masih env/default, panel menampilkan read-only + penjelasan cara mengaktifkannya.
- **Prop `examGate` (bukan `examToken`) di `Quiz.jsx`.** Bentuk: `{ loading, token, expiresAt, subject, label }`. Penentu gerbang adalah **keberadaan objek gate** (`gated`), BUKAN `token` berisi — kalau gate hanya dirender saat `token` truthy, fase loading akan sempat membuka soal tanpa token, dan timer ikut jalan sebelum verifikasi. `ModulPostTest.jsx` yang resolve token lalu meneruskan; `loading: true` sampai `loadExamToken` selesai.
- **Makna masa berlaku = batas MULAI, bukan batas selesai.** Token kedaluwarsa menolak siswa yang belum membuka soal. Siswa yang **sudah** lolos gate tetap boleh menyelesaikan — masa berlaku tidak memutus timer di tengah jalan. Alasannya: kicking siswa yang sedang ujian lebih merusak daripada membiarkan satu siswa menyelesaikan. Kolom `_unlocked` di localStorage sengaja dibiarkan permanen untuk alasan yang sama, dan dihapus lewat "Reset Identitas" untuk perangkat bersama.
- `isTokenExpired()` berlaku **fail-open**: `null`/kosong = tidak kedaluwarsa, dan string tanggal yang tidak bisa diparse dianggap tidak kedaluwarsa. Salah baca tanggal = semua siswa terkunci, itu jauh lebih buruk daripada satu mapel sedikit terbebas dari batas.
- `VITE_EXAM_TOKEN*` hanya cadangan. Kalau nanti dihapus dari Vercel, pastikan tabel `exam_tokens` sudah terisi untuk ketiga mapel — kalau tidak, semua token jatuh ke hardcoded dan sama untuk semua mapel lagi.

- **State keys:** `mpk1_modul1_posttest`, `mpk1_modul2_posttest`, `mpk1_modul3_posttest` (jawaban/order/deadline/submitted/unlocked + `_startedAt`), `jarkomlab_identity`, `jarkomlab_examHistory`, `jarkomlab_examSubmitted`, `jarkomlab_pendingSync`, `jarkomlab_roster`.
- **Env vars (prod):** `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` (lokal di `.env.local` gitignored), `VITE_REKAP_PIN=2468`. `VITE_EXAM_TOKEN*` sekarang hanya cadangan — token yang dipakai disimpan di tabel `exam_tokens`.

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

## Pre-Test Terpisah per Elemen/Modul (KKA, KKA XI, MPK 1)
Pola yang dipakai di tiga mapel: pre-test dipecah per unit, bukan satu paket campur.
- **Kenapa:** siswa bisa mengukur pemahaman awal tiap unit sebelum belajar, dan satu unit
  yang belum dikerjakan tidak menghalangi unit lain. Bank lama yang campur semua elemen
  (KKA) dibuang total.
- **Komposisi tiap unit:** 30 soal = 10 Mudah (C2) + 10 Sedang (C3) + 10 Sulit (C5).
  Kunci jawaban wajib tersebar merata 6/6/6/6/6 per indeks 0-4 (dicek saat menulis bank).
  Field per soal: `id`, `level` (`'Mudah · C2 - Memahami'`), `diff` (`'Mudah'`),
  `elemen` (KKA) atau `modul` (KKA XI & MPK 1), `question`, `options`
  (5, berprefiks `"A. "`..`"E. "`), `answer` (indeks 0-based), `explanation`.
- **Tidak pakai token guru dan boleh diulang** — tujuannya diagnostik, bukan nilai rapor.
  Bandingkan dengan Ujian (bertoken, submit sekali).
- **Nilai ganda per unit + agregat:** nilai tiap unit disimpan di key sendiri untuk halaman
  Hasil, lalu rata-rata unit yang sudah dikerjakan disimpan di key agregat lama supaya badge,
  leaderboard, dan growth tidak perlu diubah.
- **Landing + halaman per unit:** `/kka/pretest` (daftar elemen) dan `/kka/pretest/:slug`;
  `/kka-xi/pretest` dan `/kka-xi/pretest/:slug`; `/mpk1/pretest` dan `/mpk1/pretest/:slug`.
  `Quiz` diberi `key={bank.key}` supaya remount saat pindah unit — tanpa itu state
  soal/timer mewarisi unit sebelumnya.
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

### MPK 1 — Pre-Test per Modul (3 × 30 = 90 soal)
- Bank: `src/data/mpk1/pretestModul1MPK1.js` (peralatan/kabel/media), `pretestModul2MPK1.js`
  (topologi), `pretestModul3MPK1.js` (IP & subnetting).
- Index: `src/data/mpk1/pretestMPK1.js` → `PRETEST_MPK1`, `PRETEST_MPK1_SOAL_PER_MODUL=30`,
  `PRETEST_MPK1_TOTAL=90`, `PRETEST_MPK1_SKOR_KEY='mpk1_pretest'`.
- Halaman: `src/pages/PreTestMPK1.jsx` (landing) + `PreTestModulMPK1.jsx` (per modul).
  Keduanya di root `src/pages/` — **bukan** subfolder seperti KKA, jadi import-nya pakai `../data/...`.
- **State keys:** `mpk1_modul{1..3}_pretest` + agregat `mpk1_pretest`.
  Key lama `pretest`/`jarkomlab_pretestAnswers` + `PreTest.jsx` + `pretestQuestions.js` (25 soal campur) sudah dihapus total.
- `Hasil.jsx` membaca pre-test lewat `getNilaiPretest`/`getRataPretest`, bukan `scores.pretest`.
  Kartu "Pre-Test MPK 1 per Modul" ditambahkan di bawah blok post-test.
- **Soal subnetting wajib dihitung ulang dengan skrip**, jangan dikunci dari feeling.
  Semua network/broadcast/host-count/prefix di Modul 3 sudah diverifikasi programatik
  (20 titik). Corners yang mudah salah: `tightest(need)` = prefix **terbesar** yang
  masih muat (bukan terkecil), dan jumlah subnet = `2 ** (child - parent)`.

## Post Test Terpisah per Modul (landing + slug, mirip KKA)
- Pola disamakan dengan **Ujian KKA**: satu landing berisi daftar modul, lalu satu rute
  bertipe `:slug`. Bukan tiga file halaman terpisah.
- **Rute:** `/mpk1/posttest` (landing, kartu modul + status Selesai/Belum) dan
  `/mpk1/posttest/:slug` (`modul1` | `modul2` | `modul3`). Nav sidebar dirapatkan jadi
  **satu item** "Post Test (3 x 25 soal)" — sebelumnya 3 item yang interleaved di tiap modul.
- **Halaman:** `src/pages/PostTestMPK1.jsx` (landing) + `src/pages/PostTestModulMPK1.jsx`
  (per modul). Ketiga `PostTestModul{1,2,3}.jsx` yang lama dihapus.
- **Data:** index ditambahkan di `src/data/modulPostTests.js` → `MODUL_POSTTEST`
  (metadata slug/label/judul/desc + bank), `MODUL_POSTTEST_TOTAL` (75),
  `getPostTestBySlug(slug)`. `modul{1,2,3}PostTest` tetap diekspor (dipakai `Hasil.jsx`).
- **Backward compatible:** rute lama `/mpk1/posttest-modul{1,2,3}` tetap ada sebagai
  `<Navigate replace>` ke slug baru, supaya bookmark siswa yang sudah dibuka tidak jadi
  halaman kosong. Kalau sudah yakin tidak ada yang memakai, hapus saja.
- **Status landing** dibaca dari `isModulLocked(key)` (submit sudah terkunci), bukan dari
  nilai di storage — badge "Selesai" harus akurat walau syncing ke server gagal.
- **`meta` WAJIB difilter per modul.** `ModulPostTest` memakai `meta` untuk cek NIS di
  server (`findNisRecords`). Kalau `meta` berisi ketiga modul, siswa yang sudah selesai
  Modul 1 lalu mau lanjut Modul 2 akan **ditolak** karena NIS-nya sudah terverifikasi di
  Modul 1. `PostTestModulMPK1.jsx` mengirim `MODUL_META.filter(m => m.key === bank.key)`
  — sama seperti `UjianElemenKKA.jsx`. Jangan dihapus filter ini.
- Fitur ujian tetap sama: token gate + kunci layar otomatis + timer + auto-grade +
  review + anti-contek. Storage/score keys tetap `mpk1_modul{1,2,3}_posttest`
  (tidak berubah, jadi nilai siswa yang sudah ada tetap terbaca).
- Bank soal: 25 soal/modul, level C2–C6 (HOTS), komposisi tidak seragam antar modul —
  jangan samakan dengan komposisi 10/10/10 milik Pre-Test.

### Audit Bank Post Test: sebaran kunci WAJIB 5/5/5/5/5
Ditemukan saat memodernisasi Modul 1 (30 Sep 2026): seluruh bank Post Test punya
sebaran kunci yang parah, sehingga mengukur "tebak B", bukan pemahaman.
Temuan awal (sebelum perbaikan):

| Bank | A | B | C | D | E |
|---|---|---|---|---|---|
| Modul 1 | 2 | 12 | 9 | 2 | 0 |
| Modul 2 | 1 | **16** | 4 | 4 | 0 |
| Modul 3 | 5 | 13 | 7 | 0 | 0 |

Gabungan 75 soal: 41 jawabannya B (55%), dan **opsi E tidak pernah jadi kunci sama sekali**.
Karena nilai Post Test menentukan sertifikat + badge (syarat rerata ≥ 70), bias ini
langsung tercermin di rapor. **Ketiga bank sekarang sudah diperbaiki.**

Hasil akhir (semua tepat `A=5 B=5 C=5 D=5 E=5`, deviasi 0):

| Bank | Level akhir | HOTS (C4+C5+C6) |
|---|---|---|
| Modul 1 | C2=4 C3=7 C4=8 C5=4 C6=2 | 14/25 (56%) |
| Modul 2 | C2=4 C3=7 C4=9 C5=3 C6=2 | 14/25 (56%) |
| Modul 3 | C2=5 C3=7 C4=8 C5=3 C6=2 | 13/25 (52%) |

- **Soal yang ditulis ulang dari hafalan jadi aplikatif** (C2/C3 → C4/C5/C6). Modul 2:
  Q6 (CSMA/CD dari "metode akses apa?" jadi skenario tabrakan), Q7, Q12 (istilah SPOF jadi
  perbandingan dua topologi), Q13, Q16 (istilah partial mesh jadi hitung kabel), Q18,
  Q22, Q24. Modul 3: Q8, Q9, Q11, Q13, Q14, Q22.
- **Dua label C6 palsu dibongkar.** Modul 2 Q7 tadinya berlabel C6 padahal isinya
  *"gabungan topologi disebut…"* (= C2, hafalan istilah), sekarang jadi tugas desain
  kampus 4 gedung dengan kendala. Modul 3 Q6 berlabel C5 padahal cuma hafalan
  network/broadcast address, diturunkan ke C3. Sebaliknya Modul 3 Q24 diturunkan
  C3 → C2 karena memang hafalan.
- **Dua soal kembar Modul 3 dibubarkan.** Q4 (/26 → 62 host) dan Q22 (/25 → 126 host)
  itu type sama, Q22 diganti jadi soal alamat broadcast. Q8 dan Q20 sama-sama
  C6 VLSM "pilih prefix" — Q8 diubah jadi menghitung network address subnet kedua,
  jadi keduanya benar-benar berbeda.
- **Cara meratakan kunci: geser posisi OPSI, jangan mengacak jawaban.** Isi dan
  makna tiap opsi tidak boleh berubah — hanya urutan hurufnya yang ditata ulang supaya
  tiap huruf jadi kunci 5×. Memindahkan jawaban acak hanya menyembunyikan pola, tidak
  memperbaikinya.
- **Kunci soal yang opsinya terurut natural (mis. `Cat 3 > Cat 5 > Cat 5e > Cat 6a > Cat 7`
  atau `10 Mbps > 100 Mbps > 1 Gbps > 10 Gbps > 100 Gbps`) TIDAK boleh digeser**, karena
  mengacak urutan angka terlihat seperti salah ketik dan membingungkan. Di Modul 1 ini
  soal 10 dan 19 dikunci di slot C. Prinsipnya: sapu kunci soal natural dulu, soal lain
  yang mengisi sisa kuota.
- **Jumlah soal "terkunci natural"(itulah yang membatasi sebaran kunci.** Modul 3 punya
  10 soal yang opsi naturally berurutan dan tidak boleh digeser, dan **6 di antaranya
  kunci natural-nya semua C** (`Kelas A..E`, `128/168/192/224/240`, `/26../30`,
  `4/8/16/32/64`, `30/62/126/254/510`, `.16/.32/.64/.128/.192`) — kuota C cuma 5.
  Q22 sengaja ditulis ulang (lihat di atas) supaya wrestle ini hilang; tanpa itu
  spread Modul 3 mustahil 5/5/5/5/5 tanpa merusak soal.
- **`explanation` jangan pernah mengacu huruf opsi** ("B mengabaikan...", "E terbalik...").
  menggeser urutan opsi = explanation itu diam-diam jadi salah. Tulis mengacu isi opsi
  ("memilih switch termurah...", "6 GHz adalah Wi-Fi 6E..."). Di Modul 1 soal 7, 11, 13,
  dan 22 sudah dibetulkan. Opsi tidak diacak saat runtime (`ModulPostTest.jsx` tidak
  punya `shuffle`), tapi explanation sebaiknya tidak bergantung pada huruf apa pun.
- **Level harus jujur, bukan kejar kuota.** C6 (Menciptakan) = meminta siswa merancang
  sesuatu, bukan "pilih kombinasi terbaik". Q7 lama berlabel C6 padahal hanya pertanyaan
  memilih kombinasi — sudah ditulis ulang jadi tugas desain dengan kendala anggaran.
  Menaikkan label saja tanpa mengganti isi akan mengarang klaim dan menjatuhkan validitas bank.
- Saat menulis bank baru: cek dulu `explanation` soal lain yang menyebut huruf opsi
  sebelum mengacak urutan, dan jalankan skrip audit (spread kunci + spread level +
  pastikan isi opsi utuh) sebelum commit.
- **Skrip auditnya ada di temp, bukan di repo** (`%TEMP%\opencode\`): `audit-kunci.mjs`
  (spread kunci + level per bank), `cek-kualitas-bank.mjs` (karakter non-Latin, kata
  dobel, explanation yang menyebut huruf opsi, opsi duplikat, prefiks A–E),
  `verifikasi-opsi-utuh.mjs` (bandingkan bank vs backup: himpunan isi opsi harus sama,
  hanya urutan berubah), `verifikasi-m3-math.mjs` (34 titik hitungan subnetting/biner
  dihitung ulang dari definisi), `sim-skor.mjs` (30 skenario stabilitas skor).
  Kalau temp dibersih, skripnya hilang — yang penting polanya, bukan filenya.
- **Hati-hati bikin regex deteksi "kata dobel"** untuk bank soal. Pola generik
  `(\w{3,})\1` akan menandai kata sah seperti "cincin" (cin+cin) dan "memakai" sebagai
  bug, lalu nanti kamu "memperbaiki" teks yang sebenarnya sudah benar. Pakai pola
  konservatif, dan selalu konfirmasi temuan manual sebelum diedit.

### Bug skor: layar hasil menghitung ulang dari bank soal
`Quiz.jsx` dulu menyimpan `submitted` + `answers` saja. Layar hasil menghitung
ulang `answers[i] === q.answer` terhadap bank **saat render**. Begitu bank diedit
(kunci digeser saat rebalance), siswa yang sudah submit lalu me-reload melihat
nilai yang **berbeda dari nilai di Rekap guru** — rapor benar, layar siswa salah.
Simulasi: submit dapat 60, bank digeser, reload → tampil 56.

- **Nilai di `AppContext` aman** — `saveQuizScore` menyimpan angka dan tidak pernah
  menghitung ulang, jadi rapor/Rekap/leaderboard/sertifikat tidak berubah. Yang
  salah hanya tampilan di layar siswa.
- **Perbaikan:** `handleSubmit` menyimpan `{score, correct, total, fingerprint}` ke
  `jarkomlab_${storageKey}_result`; layar hasil membacanya. `clearQuizStorage`
  (`examLib.js`) ikut menghapus `_result` — kalau tidak, di perangkat bersama sisa
  nilai ujian sebelumnya bisa terbaca siswa berikutnya.
- **Fingerprint = `bankFingerprint(qs)`**, satu fungsi di `Quiz.jsx` supaya tempat
  tulis dan baca tidak bisa berbeda. Cakupannya `id:answer:question:isiOpsi`, bukan
  cuma `id:answer`: versi awal buta terhadap penulisan ulang teks soal pada indeks
  jawaban yang sama, sehingga review menampilkan kunci yang tidak lagi cocok tanpa
  peringatan. Isi opsi dinormalisasi awalan `A. `..`E. ` supaya menggeser huruf
  (rebalance sah) tidak memicu peringatan palsu.
- **Fallback ke hitung ulang hanya untuk data lama tanpa `_result`.** Bank hasil lama
  yang sudah terlanjur submit tidak punya snapshot, jadi review-nya masih bisa
  tidak cocok — yang dijaga adalah **nilainya** tetap sama dengan rapor.
- **Yang BELUM aman: attempt yang belum submit saat bank diganti.** `_order` hanya
  divalidasi jumlah + rentang indeks, jadi siswa yang sudah menjawab sebagian lalu
  bank digeser akan dinilai dengan kunci versi baru. Jangan push di tengah jam
  ujian berlangsung.

### Jebakan regex saat memproses bank soal dengan skrip
Tiga bug yang sama-sama merusak file tapi lolos karena JS masih valid:
- `\n\s*` **memakan newline**, jadi pola seperti `/\n\s*'([^']*)'/g` hanya menangkap
  opsi ke-1, 3, dan 5 (baris kedua dan keempat dilewati karena `\s` sudah memakan
  newline-nya). Pakai `\n[ \t]*`.
- Mengganti `options: [...]` dengan teks pengganti yang **tidak menyertakan newline
  pembuka** akan menyatukan baris `question:` dan `options:` jadi satu baris
  (`question: '...',    options: [`). Tetap valid JS, tapi formatnya rusak. Awali teks
  pengganti dengan `\n` kalau pola yang diganti diawali newline.
- Untuk newline **penutup**, pakai lookahead `,?(?=\n)`, bukan `\n` yang dimakan. Kalau
  dimakan, match berikutnya tidak akan menemukan `\n` dan hanya id ganjil yang kena.


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
- [x] Post-Test MPK 1 legacy dihapus total (route `/mpk1/posttest`, `PostTest.jsx`, `posttestQuestions.js`)
- [x] Sertifikat & badge MPK 1 berbasis rerata 3 Post-Test modul (bukan nilai `posttest` lama)
- [x] Route stale `/mpk1/topologi-arsitektur` dihapus
- [x] Badge MPK 1 kirim `pretestKey` + `examAvg`/`examDone` eksplisit (default `checkBadges` pasti mati)
- [x] Pre-Test MPK 1 dipecah per modul (3 × 30 = 90 soal) + hapus bank legacy 25 soal campur
- [x] Post Test MPK 1 diseragamkan ke pola KKA: landing `/mpk1/posttest` + `:slug`, nav 3 item jadi 1
- [x] Bug `meta` Post Test MPK 1 diperbaiki (filter per modul, tidak lagi ketiga modul sekaligus)
- [x] Audit bank Post Test MPK 1 ketiga modul: sebaran kunci diratakan ke 5/5/5/5/5
- [x] Modul 2: 8 soal hafalan ditulis ulang jadi aplikatif, C6 palsu Q7 dibongkar, C2 turun 10 → 4
- [x] Modul 3: 6 soal ditulis ulang, 2 label level palsu dibetulkan, 2 soal kembar dibubarkan
- [x] SemuaExplanation referring ke huruf opsi dibetulkan (aman saat opsi digeser)
- [x] Bug skor: layar hasil tidak lagi menghitung ulang dari bank soal (snapshot `_result`)
- [x] Fingerprint bank diperkuat sampai mencakup teks soal + isi opsi
