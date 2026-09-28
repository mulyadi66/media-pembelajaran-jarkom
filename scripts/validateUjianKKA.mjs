/**
 * Validator bank soal Ujian KKA.
 * Memeriksa: jumlah soal per elemen, opsi berawalan "A. "–"E. ", kunci jawaban
 * valid, explanation terisi, level C2–C5, serta mendeteksi teks yang korup
 * (karakter non-ASCII, huruf campur tak wajar, placeholder sisa).
 *
 * Jalankan: node scripts/validateUjianKKA.mjs
 */
import { UJIAN_KKA, UJIAN_KKA_TOTAL, UJIAN_KKA_SOAL_PER_ELEMEN, getUjianElemen } from '../src/data/kka/ujianKKA.js';

const errors = [];
const warnings = [];

for (const bank of UJIAN_KKA) {
  const qs = bank.questions;
  if (qs.length !== UJIAN_KKA_SOAL_PER_ELEMEN) {
    errors.push(`${bank.slug}: jumlah soal ${qs.length}, harusnya ${UJIAN_KKA_SOAL_PER_ELEMEN}`);
  }

  qs.forEach((q, i) => {
    const at = `${bank.slug}#${q.id ?? i}`;

    if (!q.question || !/[?.]$/.test(q.question.trim())) {
      warnings.push(`${at}: pertanyaan tidak diakhiri tanda tanya atau titik`);
    }
    if (!Array.isArray(q.options) || q.options.length !== 5) {
      errors.push(`${at}: opsi harus 5, ditemukan ${q?.options?.length}`);
      return;
    }
    q.options.forEach((o, j) => {
      if (!new RegExp(`^${'ABCDE'[j]}\\. `).test(o)) {
        errors.push(`${at}: opsi ${j + 1} tidak berawalan "${'ABCDE'[j]}. " -> "${o}"`);
      }
    });
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 4) {
      errors.push(`${at}: kunci jawaban tidak valid -> ${q.answer}`);
    }
    if (!q.explanation || q.explanation.length < 30) {
      errors.push(`${at}: explanation kosong atau terlalu pendek`);
    }
    if (!/^C[2-6] - /.test(q.level || '')) {
      errors.push(`${at}: level tidak valid -> "${q.level}"`);
    }
    if (q.elemen !== bank.label) {
      errors.push(`${at}: field elemen "${q.elemen}" tidak cocok dengan ${bank.label}`);
    }

    // Deteksi teks korup / sisa placeholder.
    const texts = [q.question, ...q.options, q.explanation];
    for (const t of texts) {
      if (Array.from(t).some(ch => ch.codePointAt(0) > 127)) {
        errors.push(`${at}: karakter non-ASCII (kemungkinan teks korup) -> ${JSON.stringify(t)}`);
      }
      if (/(ZHAT|Replacement|leveraged|estration|violated|understandut|knowing|reinforces|faced|receives)/.test(t)) {
        errors.push(`${at}: suspected korup -> ${JSON.stringify(t)}`);
      }
      if (/[–—²³…“”‘’•]/.test(t)) {
        errors.push(`${at}: pakai karakter typografis, ganti dengan ASCII -> ${JSON.stringify(t)}`);
      }
      if (/\?\?/.test(t)) {
        errors.push(`${at}: ada "??" (teks korup) -> ${JSON.stringify(t)}`);
      }
    }

    // Deteksi huruf besar di tengah kata (kecuali camelCase yang sah).
    for (const t of texts) {
      const m = t.match(/[a-z]{2}[A-Z][a-z]{2}/g);
      if (m) {
        const allowed = ['hitungDiskon', 'hitungRataRata', 'getName', 'NameError', 'ZeroDivision', 'Traceback', 'SyntaxError', 'Link', 'Else', 'If', 'For', 'While', 'Return', 'Print'];
        const suspicious = m.filter((x) => !allowed.some((w) => w.includes(x)));
        if (suspicious.length) {
          warnings.push(`${at}: camelCode mencurigakan -> ${suspicious.join(', ')}`);
        }
      }
    }
  });

  // Kunci jawaban sebaiknya tidak selalu di posisi yang sama.
  const spread = new Set(qs.map((q) => q.answer));
  if (spread.size < 3) warnings.push(`${bank.slug}: kunci jawaban kurang bervariasi (${spread.size} posisi)`);
}

const total = UJIAN_KKA.reduce((a, b) => a + b.questions.length, 0);
if (total !== UJIAN_KKA_TOTAL) errors.push(`total soal ${total} tidak cocok UJIAN_KKA_TOTAL ${UJIAN_KKA_TOTAL}`);
if (total !== 125) errors.push(`total soal harus 125, ditemukan ${total}`);
if (getUjianElemen(0) !== undefined && getUjianElemen(6) !== null) {
  errors.push('getUjianElemen(6) seharusnya null');
}

console.log(`Total: ${total} soal di ${UJIAN_KKA.length} elemen`);
for (const b of UJIAN_KKA) {
  const lv = b.questions.reduce((a, q) => { a[q.level.slice(0, 2)] = (a[q.level.slice(0, 2)] || 0) + 1; return a; }, {});
  console.log(`  ${b.slug.padEnd(9)} ${b.questions.length} soal  ${JSON.stringify(lv)}  key=${b.key}`);
}
if (warnings.length) { console.log('\nPERINGATAN:'); warnings.forEach((w) => console.log('  - ' + w)); }
if (errors.length) { console.log('\nERROR:'); errors.forEach((e) => console.log('  - ' + e)); process.exit(1); }
console.log('\nSemua bank soal valid.');
