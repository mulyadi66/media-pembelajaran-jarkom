# Context Save — Media Pembelajaran Jarkom

**Terakhir diupdate:** 28 Juli 2026
**Branch:** master
**Status:** Bersih (no uncommitted changes)

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

## Modul Ajar
- File: `src/data/modulAjar.js` + `src/pages/ModulAjarPage.jsx`
- Rute: `/modul-ajar`
- Identitas: Fase F, Kelas XI TJKT, 2026/2026, SMK Negeri 2 Kuningan
- Sidebar navigasi internal + accordion sections + print A4

## Video Embeds (sudah diganti ke video yang works)
| Modul | Video ID | Judul |
|---|---|---|
| Modul 1 | `LiMdHeaS4zY` | Network Fundamentals - Peralatan Jaringan |
| Modul 2 | `QGykYWbdf0A` | Topologi Jaringan - Bus, Ring, Star, Mesh, Tree |
| Modul 3 | `9GtL8dW8rYY` | IP Subnetting Lengkap - Binary, Class, VLSM & CIDR |

## Bug Fixes Terakhir
1. `vercel.json` dibuat untuk SPA rewrite — semua rute React Router sekarang jalan di Vercel
2. Video embed IDs diganti ke YouTube videos yang verified aktif
3. `.sim-canvas` ditambah `position: relative` — device simulator seharusnya sudah bisa drag & drop

## Fitur Lengkap
- Dashboard, Modul 1-3 (materi + video + section tracker), Quiz (practice/exam mode, auto-grade, timer, explanations)
- Flashcard (35 istilah), Glossary (35 istilah + search), Worksheet (24 essay), Challenge mode (30 soal timed)
- Device Simulator (drag & drop), Certificate generator, Badges, Streak, Leaderboard
- Dark mode, PWA, Print styles, Error boundary

## Potensi Lanjutan
- [x] Verifikasi device simulator — touch-action:none + e.preventDefault() untuk mobile drag
- [x] Modul Ajar filter Modul 1/2/3 via tabs
- [x] PDF download Modul Ajar (html2canvas + jsPDF)
- [x] Bank soal pretest/posttest MPK1 & DKK (15→20 soal per bank)
- [x] Export leaderboard ke PNG (html2canvas)
- [x] Aksesibilitas — ARIA labels, keyboard nav, aria-hidden dekoratif
