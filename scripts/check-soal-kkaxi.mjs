/**
 * Validator bank soal Ujian KKA XI.
 *
 * Menyorot dua jenis cacat yang sering muncul saat data soal ditulis:
 *  1. karakter non-ASCII (sisa teks asing / teks rusak) di dalam berkas;
 *  2. soal yang tidak valid: jumlah opsi bukan 5, indeks answer di luar range,
 *     field wajib hilang, atau label opsi tidak urut A-E.
 *
 * Jalankan: node scripts/check-soal-kkaxi.mjs
 */
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const DIR = 'src/data/kka-xi';
const FILES = [
  'ujianModul1KKAXI.js',
  'ujianModul2KKAXI.js',
  'ujianModul3KKAXI.js',
  'ujianModul4KKAXI.js',
];
const PER_FILE = 25;

/**
 * Kata acuan bahasa Inggris yang tidak dipakai di teks soal Indonesia.
 * Kata serapan umum (share, video, online, login, web) sengaja tidak
 * dimasukkan karena memang dipakai di materi.
 */
const KATA_ASING = [
  'creedibility', 'DslahRule', 'reviewers', 'checked', 'default', 'forward',
  'mentors', 'spread', 'spreading', 'upload', 'uploads', 'download',
  'comment', 'comments', 'feedback', 'workshop', 'seminar',
  'understands', 'understandably', 'become', 'using', 'must', 'should',
  'make', 'makes', 'made', 'have', 'does', 'were', 'these', 'those',
];

/** Kata dengan huruf besar yang nyambung di tengah, mis. "iniDslahRule". */
const RE_ZHUR = /[a-z]{2}[A-Z][a-z]+/g;

/**
 * Nama proper / istilah teknis yang memang huruf besar nyambung sehingga
 * akan salah dibaca sebagai kata menempel. Dicoret dulu sebelum diperiksa.
 */
const NAMA_PROPER = [
  'WhatsApp', 'YouTube', 'GitHub', 'LinkedIn', 'Google', 'Canva', 'Notion',
  'CapCut', 'Figma', 'Vercel', 'JavaScript', 'TypeScript', 'ArrayList',
  'BigInteger', 'N-Queens', 'Creative Commons', 'Google AI Studio',
  'localStorage', 'sessionStorage', 'classList', 'forEach', 'innerHTML',
  'querySelector', 'addEventListener', 'textContent', 'setItem', 'DevTools',
];

let total = 0;
let masalah = 0;
const laporkan = (f, pesan) => {
  masalah += 1;
  console.log(`  [MASALAH] ${f}: ${ pesan}`);
};

for (const f of FILES) {
  const p = path.join(DIR, f);
  if (!fs.existsSync(p)) {
    console.log(`\n=== ${f} === belum ada, dilewati`);
    continue;
  }

  const src = fs.readFileSync(p, 'utf8');

  // 1) karakter non-ASCII di berkas mana pun (termasuk komentar)
  const nonAscii = [...src].filter((ch) => ch.charCodeAt(0) > 127);
  if (nonAscii.length) {
    const unik = [...new Set(nonAscii)];
    laporkan(
      f,
      `${nonAscii.length} karakter non-ASCII [${unik.join(' ')}] - teks perlu diperbaiki manual`,
    );
  }

  // 2) impor untuk memeriksa sintaks + struktur tiap soal
  let soal = [];
  try {
    const mod = await import(pathToFileURL(path.resolve(p)).href);
    soal = mod.default;
    if (!Array.isArray(soal)) throw new Error('export default bukan array');
  } catch (e) {
    laporkan(f, `gagal diimpor (sintaks) - ${String(e.message).split('\n')[0]}`);
    continue;
  }

  // 3) periksa isi teks soal: kata asing & kata menempel
  for (const q of soal) {
    const strings = [q.question, q.explanation, ...(q.options || [])].filter(Boolean);
    for (const raw of strings) {
      // coret nama proper dulu supaya tidak salah dibaca kata menempel
      const t = NAMA_PROPER.reduce((s, nama) => s.split(nama).join(' '), raw);
      for (const k of KATA_ASING) {
        if (new RegExp(`\\b${k}\\b`, 'i').test(t)) {
          laporkan(f, `soal #${q.id}: kata asing "${k}" -> "${raw.slice(0, 50)}"`);
        }
      }
      for (const z of t.match(RE_ZHUR) || []) {
        laporkan(f, `soal #${q.id}: kata menempel "${z}" -> "${raw.slice(0, 50)}"`);
      }
    }
  }

  console.log(`\n=== ${f} (${soal.length} soal${soal.length === PER_FILE ? '' : `, harapan ${PER_FILE}`}) ===`);

  const seen = new Map();
  soal.forEach((q, i) => {
    const no = i + 1;
    if (q.id !== no) laporkan(f, `soal #${no}: field id = ${q.id}, seharusnya ${no}`);
    if (!q.level) laporkan(f, `soal #${no}: field level hilang`);
    if (!q.modul) laporkan(f, `soal #${no}: field modul hilang`);
    if (!q.question) laporkan(f, `soal #${no}: field question hilang`);

    if (!Array.isArray(q.options)) {
      laporkan(f, `soal #${no}: options bukan array`);
    } else {
      if (q.options.length !== 5) {
        laporkan(f, `soal #${no}: jumlah opsi ${q.options.length} (harus 5)`);
      }
      q.options.forEach((o, k) => {
        const label = 'ABCDE'[k];
        if (typeof o !== 'string') return laporkan(f, `soal #${no}: opsi ${k + 1} bukan string`);
        if (!o.startsWith(`${label}. `)) {
          laporkan(f, `soal #${no}: opsi ${k + 1} harus berawalan "${label}. " -> "${o.slice(0, 40)}"`);
        }
      });
      const unik = new Set(q.options);
      if (unik.size !== q.options.length) laporkan(f, `soal #${no}: ada opsi duplikat`);
    }

    if (typeof q.answer !== 'number') laporkan(f, `soal #${no}: answer bukan angka`);
    else if (Array.isArray(q.options) && (q.answer < 0 || q.answer >= q.options.length)) {
      laporkan(f, `soal #${no}: answer ${q.answer} di luar range 0-${q.options.length - 1}`);
    }

    if (!q.explanation) laporkan(f, `soal #${no}: field explanation hilang`);

    // duplikasi pertanyaan dalam satu berkas
    const key = String(q.question || '').trim().toLowerCase();
    if (key && seen.has(key)) {
      laporkan(f, `soal #${no}: pertanyaan duplikat dengan soal #${seen.get(key)}`);
    } else if (key) {
      seen.set(key, no);
    }
  });

  // 4) ringkasan: sebaran level & posisi kunci jawaban
  const level = {};
  const kunci = [0, 0, 0, 0, 0];
  for (const q of soal) {
    const lv = String(q.level || '?').slice(0, 2);
    level[lv] = (level[lv] || 0) + 1;
    if (typeof q.answer === 'number' && kunci[q.answer] != null) kunci[q.answer] += 1;
  }
  const sebaran = Object.keys(level).sort().map((k) => `${k}=${level[k]}`).join(' ');
  console.log(`  level: ${sebaran}`);
  console.log(`  kunci jawaban A/B/C/D/E: ${kunci.join(' / ')}`);

  total += soal.length;
}

console.log('\n----------------------------------------');
console.log(`Total soal: ${total}`);
console.log(masalah === 0 ? 'STATUS: BERSIH' : `STATUS: ${masalah} masalah ditemukan`);
process.exit(masalah === 0 ? 0 : 1);
