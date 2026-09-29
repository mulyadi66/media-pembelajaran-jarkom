/**
 * Index bank soal Pre-Test KKA (Kelas X).
 *
 * Pre-Test dipecah menjadi 5 pre-test terpisah, satu per elemen, masing-masing
 * 30 soal (total 150 soal). Tiap elemen punya kunci storage sendiri
 * (kka_elemen1_pretest .. kka_elemen5_pretest) supaya:
 * - siswa bisa mengukur pemahaman awal tiap elemen sebelum belajar;
 * - nilai tiap elemen tercatat terpisah di halaman Hasil;
 * - satu elemen yang belum dikerjakan tidak menghalangi elemen lain.
 *
 * Setiap bank berisi tiga tingkat kesulitan berimbang:
 * 10 soal Mudah (C2), 10 soal Sedang (C3), 10 soal Sulit (C5).
 *
 * Berbeda dengan Ujian KKA (/kka/ujian/:slug), pre-test tidak memakai token
 * guru dan boleh diulang karena tujuannya murni diagnostik.
 *
 * Nilai agregat tetap disimpan di `kka_pretest` (rata-rata elemen yang sudah
 * dikerjakan) supaya badge, leaderboard, dan growth di halaman Hasil tidak
 * perlu diubah.
 *
 * Halaman: /kka/pretest (daftar elemen) dan /kka/pretest/:slug.
 */
import elemen1 from './pretestElemen1KKA.js';
import elemen2 from './pretestElemen2KKA.js';
import elemen3 from './pretestElemen3KKA.js';
import elemen4 from './pretestElemen4KKA.js';
import elemen5 from './pretestElemen5KKA.js';

/** Jumlah soal per elemen. */
export const PRETEST_KKA_SOAL_PER_ELEMEN = 30;

/** Total soal seluruh elemen (5 x 30 = 150). */
export const PRETEST_KKA_TOTAL = PRETEST_KKA_SOAL_PER_ELEMEN * 5;

/**
 * Komposisi kesulitan per elemen. Dipakai untuk ringkasan di halaman pre-test
 * dan untuk membingkai ekspektasi siswa sebelum mulai.
 */
export const PRETEST_KKA_TINGKAT = [
  { diff: 'Mudah', level: 'C2 - Memahami', color: '#16a34a', desc: 'Pengenalan istilah dan konsep dasar' },
  { diff: 'Sedang', level: 'C3 - Menerapkan', color: '#d97706', desc: 'Menerapkan konsep pada situasi nyata' },
  { diff: 'Sulit', level: 'C5 - Menganalisis', color: '#dc2626', desc: 'Menganalisis dan menilai kasus nyata' },
];

/** Kunci storage jawaban per elemen (dipakai Quiz sebagai storageKey). */
export const PRETEST_KKA = [
  {
    no: 1,
    slug: 'elemen1',
    key: 'kka_elemen1_pretest',
    label: 'Elemen 1',
    judul: 'Berpikir Komputasional',
    desc: 'Dekomposisi, pengenalan pola, abstraksi, dan algoritma',
    questions: elemen1,
  },
  {
    no: 2,
    slug: 'elemen2',
    key: 'kka_elemen2_pretest',
    label: 'Elemen 2',
    judul: 'Literasi Digital',
    desc: 'Etika, keamanan, privasi data, dan kolaborasi digital',
    questions: elemen2,
  },
  {
    no: 3,
    slug: 'elemen3',
    key: 'kka_elemen3_pretest',
    label: 'Elemen 3',
    judul: 'Algoritma Pemrograman',
    desc: 'Flowchart, pseudocode, percabangan, perulangan, dan Python',
    questions: elemen3,
  },
  {
    no: 4,
    slug: 'elemen4',
    key: 'kka_elemen4_pretest',
    label: 'Elemen 4',
    judul: 'Analisis Data',
    desc: 'Pengolahan data, statistik dasar, dan visualisasi data',
    questions: elemen4,
  },
  {
    no: 5,
    slug: 'elemen5',
    key: 'kka_elemen5_pretest',
    label: 'Elemen 5',
    judul: 'Literasi & Etika Kecerdasan Artifisial',
    desc: 'Konsep AI, etika penggunaan, dan bias algoritma',
    questions: elemen5,
  },
];

/** Kunci seluruh storage pre-test (untuk reset lokal). */
export const PRETEST_KKA_KEYS = PRETEST_KKA.map(b => b.key);

/** Kunci score agregat (rata-rata semua elemen) — dipakai badge & leaderboard. */
export const PRETEST_KKA_SKOR_KEY = 'kka_pretest';

/** @param {string} slug contoh "elemen3" */
export function getPretestBySlug(slug) {
  return PRETEST_KKA.find(b => b.slug === slug) || null;
}

/** @param {number} no contoh 1 */
export function getPretestElemen(no) {
  return PRETEST_KKA.find(b => b.no === Number(no)) || null;
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
 * Baca nilai pre-test per elemen dari objek scores di localStorage.
 * Nilai 0 ikut dihitung karena siswa tetap sudah mengerjakan elemen itu.
 * @param {object} scores objek scores dari AppContext
 * @returns {Array<{key: string, label: string, nilai: number|null}>}
 */
export function getNilaiPretest(scores = {}) {
  return PRETEST_KKA.map(b => ({
    key: b.key,
    label: `${b.label}: ${b.judul}`,
    nilai: Number.isFinite(Number(scores[b.key])) && scores[b.key] !== undefined
      ? Number(scores[b.key])
      : null,
  }));
}

/**
 * Rata-rata nilai pre-test dari elemen-elemen yang sudah dikerjakan.
 * @param {object} scores objek scores dari AppContext
 * @returns {{rata: number|null, selesai: number, total: number}}
 */
export function getRataPretest(scores = {}) {
  const nilai = getNilaiPretest(scores).map(m => m.nilai).filter(n => n !== null);
  if (!nilai.length) return { rata: null, selesai: 0, total: PRETEST_KKA.length };
  return {
    rata: Math.round(nilai.reduce((a, b) => a + b, 0) / nilai.length),
    selesai: nilai.length,
    total: PRETEST_KKA.length,
  };
}
