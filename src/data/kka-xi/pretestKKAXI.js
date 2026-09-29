/**
 * Index bank soal Pre-Test KKA XI.
 *
 * Pre-Test dipecah menjadi 4 pre-test terpisah, satu per modul, masing-masing
 * 30 soal (total 120 soal). Tiap modul punya kunci storage sendiri
 * (kka_xi_modul1_pretest .. kka_xi_modul4_pretest) supaya:
 * - siswa bisa mengukur pemahaman awal tiap modul sebelum belajar;
 * - nilai tiap modul tercatat terpisah di halaman Hasil;
 * - satu modul yang belum dikerjakan tidak menghalangi modul lain.
 *
 * Setiap bank berisi tiga tingkat kesulitan berimbang:
 * 10 soal Mudah (C2), 10 soal Sedang (C3), 10 soal Sulit (C5).
 *
 * Berbeda dengan Ujian KKA XI (/kka-xi/ujian/:slug), pre-test tidak memakai
 * token guru dan boleh diulang karena tujuannya murni diagnostik.
 *
 * Halaman: /kka-xi/pretest (daftar modul) dan /kka-xi/pretest/:slug.
 */
import modul1 from './pretestModul1KKAXI.js';
import modul2 from './pretestModul2KKAXI.js';
import modul3 from './pretestModul3KKAXI.js';
import modul4 from './pretestModul4KKAXI.js';

/** Jumlah soal per modul. */
export const PRETEST_KKA_XI_SOAL_PER_MODUL = 30;

/** Total soal seluruh modul (4 x 30 = 120). */
export const PRETEST_KKA_XI_TOTAL = PRETEST_KKA_XI_SOAL_PER_MODUL * 4;

/**
 * Komposisi kesulitan per modul. Dipakai untuk ringkasan di halaman pre-test
 * dan untuk membingkai ekspektasi siswa sebelum mulai.
 */
export const PRETEST_KKA_XI_TINGKAT = [
  { diff: 'Mudah', level: 'C2 - Memahami', color: '#16a34a', desc: 'Pengenalan istilah dan konsep dasar' },
  { diff: 'Sedang', level: 'C3 - Menerapkan', color: '#d97706', desc: 'Menerapkan konsep pada situasi nyata' },
  { diff: 'Sulit', level: 'C5 - Menganalisis', color: '#dc2626', desc: 'Menganalisis dan menilai kasus nyata' },
];

/** Kunci storage jawaban per modul (dipakai Quiz sebagai storageKey). */
export const PRETEST_KKA_XI = [
  {
    no: 1,
    slug: 'modul1',
    key: 'kka_xi_modul1_pretest',
    label: 'Modul 1',
    judul: 'Menyaring Fakta, Identitas Digital & Kolaborasi Konten',
    desc: 'Literasi digital, hoaks, jejak digital, reputasi online, dan hak cipta',
    questions: modul1,
  },
  {
    no: 2,
    slug: 'modul2',
    key: 'kka_xi_modul2_pretest',
    label: 'Modul 2',
    judul: 'Algoritma & Struktur Data',
    desc: 'Rekursi, dynamic programming, tree, graph, searching, dan kompleksitas',
    questions: modul2,
  },
  {
    no: 3,
    slug: 'modul3',
    key: 'kka_xi_modul3_pretest',
    label: 'Modul 3',
    judul: 'Algoritma Pemrograman Berorientasi Objek',
    desc: 'Class dan object, inheritance, polymorphism, encapsulation, dan GUI',
    questions: modul3,
  },
  {
    no: 4,
    slug: 'modul4',
    key: 'kka_xi_modul4_pretest',
    label: 'Modul 4',
    judul: 'Pengembangan Web Responsif & Interaktif',
    desc: 'Semantic HTML, Flexbox, prompting AI, deployment, dan testing',
    questions: modul4,
  },
];

/** Kunci seluruh storage pre-test (untuk reset lokal). */
export const PRETEST_KKA_XI_KEYS = PRETEST_KKA_XI.map(b => b.key);

/** Kunci score agregat (rata-rata semua modul) — dipakai badge & leaderboard. */
export const PRETEST_KKA_XI_SKOR_KEY = 'kka_xi_pretest';

/** @param {string} slug contoh "modul3" */
export function getPretestBySlug(slug) {
  return PRETEST_KKA_XI.find(b => b.slug === slug) || null;
}

/** @param {number} no contoh 1 */
export function getPretestModul(no) {
  return PRETEST_KKA_XI.find(b => b.no === Number(no)) || null;
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
  return PRETEST_KKA_XI.map(b => ({
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
  if (!nilai.length) return { rata: null, selesai: 0, total: PRETEST_KKA_XI.length };
  return {
    rata: Math.round(nilai.reduce((a, b) => a + b, 0) / nilai.length),
    selesai: nilai.length,
    total: PRETEST_KKA_XI.length,
  };
}
