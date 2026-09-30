/**
 * Index bank soal Pre-Test MPK 1.
 *
 * Pre-Test dipecah menjadi 3 pre-test terpisah, satu per modul, masing-masing
 * 30 soal (total 90 soal). Tiap modul punya kunci storage sendiri
 * (mpk1_modul1_pretest .. mpk1_modul3_pretest) supaya:
 * - siswa bisa mengukur pemahaman awal tiap modul sebelum belajar;
 * - nilai tiap modul tercatat terpisah di halaman Hasil;
 * - satu modul yang belum dikerjakan tidak menghalangi modul lain.
 *
 * Setiap bank berisi tiga tingkat kesulitan berimbang:
 * 10 soal Mudah (C2), 10 soal Sedang (C3), 10 soal Sulit (C5).
 *
 * Berbeda dengan Post Test MPK 1 (/mpk1/posttest-modul{n}), pre-test tidak
 * memakai token guru dan boleh diulang karena tujuannya murni diagnostik.
 *
 * Halaman: /mpk1/pretest (daftar modul) dan /mpk1/pretest/:slug.
 */
import modul1 from './pretestModul1MPK1.js';
import modul2 from './pretestModul2MPK1.js';
import modul3 from './pretestModul3MPK1.js';

/** Jumlah soal per modul. */
export const PRETEST_MPK1_SOAL_PER_MODUL = 30;

/** Total soal seluruh modul (3 x 30 = 90). */
export const PRETEST_MPK1_TOTAL = PRETEST_MPK1_SOAL_PER_MODUL * 3;

/**
 * Komposisi kesulitan per modul. Dipakai untuk ringkasan di halaman pre-test
 * dan untuk membingkai ekspektasi siswa sebelum mulai.
 */
export const PRETEST_MPK1_TINGKAT = [
  { diff: 'Mudah', level: 'C2 - Memahami', color: '#16a34a', desc: 'Pengenalan istilah dan konsep dasar' },
  { diff: 'Sedang', level: 'C3 - Menerapkan', color: '#d97706', desc: 'Menerapkan konsep pada situasi nyata' },
  { diff: 'Sulit', level: 'C5 - Menganalisis', color: '#dc2626', desc: 'Menganalisis dan menilai kasus nyata' },
];

/** Kunci storage jawaban per modul (dipakai Quiz sebagai storageKey). */
export const PRETEST_MPK1 = [
  {
    no: 1,
    slug: 'modul1',
    key: 'mpk1_modul1_pretest',
    label: 'Modul 1',
    judul: 'Peralatan Jaringan',
    desc: 'Kabel UTP, konektor RJ-45, crimping, switch, hub, dan media transmisi',
    questions: modul1,
  },
  {
    no: 2,
    slug: 'modul2',
    key: 'mpk1_modul2_pretest',
    label: 'Modul 2',
    judul: 'Topologi Jaringan',
    desc: 'Bus, star, ring, mesh, tree, hybrid, backbone, dan perbandingannya',
    questions: modul2,
  },
  {
    no: 3,
    slug: 'modul3',
    key: 'mpk1_modul3_pretest',
    label: 'Modul 3',
    judul: 'Pengalamatan Jaringan',
    desc: 'IP address, subnet mask, kelas IP, CIDR, dan VLSM',
    questions: modul3,
  },
];

/** Kunci seluruh storage pre-test (untuk reset lokal). */
export const PRETEST_MPK1_KEYS = PRETEST_MPK1.map(b => b.key);

/** Kunci score agregat (rata-rata semua modul) — dipakai badge & leaderboard. */
export const PRETEST_MPK1_SKOR_KEY = 'mpk1_pretest';

/** @param {string} slug contoh "modul3" */
export function getPretestBySlug(slug) {
  return PRETEST_MPK1.find(b => b.slug === slug) || null;
}

/** @param {number} no contoh 1 */
export function getPretestModul(no) {
  return PRETEST_MPK1.find(b => b.no === Number(no)) || null;
}

/**
 * Hitung jumlah soal per tingkat kesulitan untuk satu bank soal.
 * @param {Array} questions
 * @returns {{Mudah: number, Sedang: number, Sulit: number}}
 */
export function hitungTingkatSoal(questions) {
  return questions.reduce((acc, q) => {
    if (acc[q.diff] !== undefined) acc[q.diff] += 1;
    return acc;
  }, { Mudah: 0, Sedang: 0, Sulit: 0 });
}

/**
 * Baca nilai pre-test per modul dari objek scores di localStorage.
 * Nilai 0 ikut dihitung karena siswa tetap sudah mengerjakan modul itu.
 * @param {object} scores objek scores dari AppContext
 * @returns {Array<{key: string, label: string, nilai: number|null}>}
 */
export function getNilaiPretest(scores = {}) {
  return PRETEST_MPK1.map(b => ({
    key: b.key,
    label: b.label,
    nilai: Number.isFinite(Number(scores[b.key])) && scores[b.key] !== undefined
      ? Number(scores[b.key])
      : null,
  }));
}

/**
 * Rata-rata nilai pre-test dari modul-modul yang sudah dikerjakan.
 * @param {object} scores objek scores dari AppContext
 * @returns {{rata: number|null, selesai: number, total: number}}
 */
export function getRataPretest(scores = {}) {
  const nilai = getNilaiPretest(scores).map(m => m.nilai).filter(n => n !== null);
  if (!nilai.length) return { rata: null, selesai: 0, total: PRETEST_MPK1.length };
  return {
    rata: Math.round(nilai.reduce((a, b) => a + b, 0) / nilai.length),
    selesai: nilai.length,
    total: PRETEST_MPK1.length,
  };
}
