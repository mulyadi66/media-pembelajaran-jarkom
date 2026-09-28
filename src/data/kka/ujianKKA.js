/**
 * Index bank soal Ujian KKA.
 *
 * Ujian KKA dipecah menjadi 5 ujian terpisah, satu per elemen, masing-masing
 * 25 soal (total 125 soal). Setiap elemen punya kunci storage sendiri
 * (kka_elemen1_ujian .. kka_elemen5_ujian) sehingga:
 * - siswa bisa mengerjakan elemen 1..5 secara bertahap;
 * - nilai tiap elemen tercatat terpisah di server dan rekap guru;
 * - lock submit (anti retake) berlaku per elemen, bukan per paket.
 *
 * Halaman: /kka/ujian (daftar elemen) dan /kka/ujian/:slug (soal per elemen).
 */
import elemen1 from './ujianElemen1KKA.js';
import elemen2 from './ujianElemen2KKA.js';
import elemen3 from './ujianElemen3KKA.js';
import elemen4 from './ujianElemen4KKA.js';
import elemen5 from './ujianElemen5KKA.js';

/** Total soal seluruh elemen (5 x 25 = 125). */
export const UJIAN_KKA_TOTAL = 125;

/** Jumlah soal per elemen. */
export const UJIAN_KKA_SOAL_PER_ELEMEN = 25;

/**
 * Daftar ujian per elemen. `key` harus sama dengan KKA_META di src/lib/examLib.js
 * karena dipakai sebagai storageKey, scoreKey, dan kolom `modul` di Supabase.
 */
export const UJIAN_KKA = [
  {
    no: 1,
    slug: 'elemen1',
    key: 'kka_elemen1_ujian',
    label: 'Elemen 1',
    judul: 'Berpikir Komputasional',
    desc: 'Dekomposisi, pengenalan pola, abstraksi, dan algoritma',
    questions: elemen1,
  },
  {
    no: 2,
    slug: 'elemen2',
    key: 'kka_elemen2_ujian',
    label: 'Elemen 2',
    judul: 'Literasi Digital',
    desc: 'Etika, keamanan, privasi, dan kolaborasi digital',
    questions: elemen2,
  },
  {
    no: 3,
    slug: 'elemen3',
    key: 'kka_elemen3_ujian',
    label: 'Elemen 3',
    judul: 'Algoritma Pemrograman',
    desc: 'Flowchart, variabel, percabangan, perulangan, fungsi, dan debugging',
    questions: elemen3,
  },
  {
    no: 4,
    slug: 'elemen4',
    key: 'kka_elemen4_ujian',
    label: 'Elemen 4',
    judul: 'Analisis Data',
    desc: 'Statistik dasar, visualisasi data, dan interpretasi',
    questions: elemen4,
  },
  {
    no: 5,
    slug: 'elemen5',
    key: 'kka_elemen5_ujian',
    label: 'Elemen 5',
    judul: 'Literasi dan Etika AI',
    desc: 'Konsep AI, etika penggunaan, dan bias algoritma',
    questions: elemen5,
  },
];

/** @param {string} slug contoh "elemen3" */
export function getUjianBySlug(slug) {
  return UJIAN_KKA.find(b => b.slug === slug) || null;
}

/** @param {number} no contoh 1 */
export function getUjianElemen(no) {
  return UJIAN_KKA.find(b => b.no === Number(no)) || null;
}

/** Kunci semua modul Ujian KKA (untuk reset lokal di examLib). */
export const UJIAN_KKA_KEYS = UJIAN_KKA.map(b => b.key);
