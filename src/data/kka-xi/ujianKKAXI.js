/**
 * Index bank soal Ujian KKA XI.
 *
 * Ujian KKA XI dipecah menjadi 4 ujian terpisah, satu per modul, masing-masing
 * 25 soal (total 100 soal). Setiap modul punya kunci storage sendiri
 * (kka_xi_modul1_ujian .. kka_xi_modul4_ujian) sehingga:
 * - siswa bisa mengerjakan modul 1..4 secara bertahap;
 * - nilai tiap modul tercatat terpisah di server dan rekap guru;
 * - lock submit (anti retake) berlaku per modul, bukan per paket.
 *
 * Halaman: /kka-xi/ujian (daftar modul) dan /kka-xi/ujian/:slug (soal per modul).
 */
import modul1 from './ujianModul1KKAXI.js';
import modul2 from './ujianModul2KKAXI.js';
import modul3 from './ujianModul3KKAXI.js';
import modul4 from './ujianModul4KKAXI.js';

/** Total soal seluruh modul (4 x 25 = 100). */
export const UJIAN_KKA_XI_TOTAL = 100;

/** Jumlah soal per modul. */
export const UJIAN_KKA_XI_SOAL_PER_MODUL = 25;

/**
 * Daftar ujian per modul. `key` harus sama dengan KKA_XI_META di
 * src/lib/examLib.js karena dipakai sebagai storageKey, scoreKey, dan kolom
 * `modul` di Supabase.
 */
export const UJIAN_KKA_XI = [
  {
    no: 1,
    slug: 'modul1',
    key: 'kka_xi_modul1_ujian',
    label: 'Modul 1',
    judul: 'Menyaring Fakta, Identitas Digital & Kolaborasi Konten',
    desc: 'Information overload, hoaks, verifikasi, jejak digital, dan hak cipta',
    questions: modul1,
  },
  {
    no: 2,
    slug: 'modul2',
    key: 'kka_xi_modul2_ujian',
    label: 'Modul 2',
    judul: 'Algoritma & Struktur Data',
    desc: 'Rekursi, dynamic programming, tree, graph, BFS/DFS, dan kompleksitas',
    questions: modul2,
  },
  {
    no: 3,
    slug: 'modul3',
    key: 'kka_xi_modul3_ujian',
    label: 'Modul 3',
    judul: 'Algoritma Pemrograman Berorientasi Objek',
    desc: 'Class dan object, inheritance, polymorphism, encapsulation, dan GUI',
    questions: modul3,
  },
  {
    no: 4,
    slug: 'modul4',
    key: 'kka_xi_modul4_ujian',
    label: 'Modul 4',
    judul: 'Pengembangan Web Responsif & Interaktif',
    desc: 'Semantic HTML, Flexbox, prompting AI, deployment, dan testing',
    questions: modul4,
  },
];

/** @param {string} slug contoh "modul3" */
export function getUjianBySlug(slug) {
  return UJIAN_KKA_XI.find(b => b.slug === slug) || null;
}

/** @param {number} no contoh 1 */
export function getUjianModul(no) {
  return UJIAN_KKA_XI.find(b => b.no === Number(no)) || null;
}

/** Kunci semua modul Ujian KKA XI (untuk reset lokal di examLib). */
export const UJIAN_KKA_XI_KEYS = UJIAN_KKA_XI.map(b => b.key);
