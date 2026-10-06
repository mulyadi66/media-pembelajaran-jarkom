// ============================================================================
// BANK SOAL UJIAN TENGAH SEMESTER (UTS) DKK
// ----------------------------------------------------------------------------
//ISI FILE INI SAJA. Struktur tiap soal:
//
// {
//   id: 1,
//   topik: 'Perakitan Komputer',
//   level: 'C3 - Menerapkan',
//   question: 'Teks soal di sini...',
//   options: [
//     'A. Opsi pertama',
//     'B. Opsi kedua',
//     'C. Opsi ketiga',
//     'D. Opsi keempat',
//     'E. Opsi kelima',
//   ],
//   answer: 2,            // INDEKS 0-based: 0=A, 1=B, 2=C, 3=D, 4=E
//   explanation: 'Penjelasan kenapa jawaban itu benar.',
// }
//
// ATURAN WAJIB (kalau dilanggar, soal bisa merusak nilai rapor siswa):
// 1. `options` selalu 5, dan tiap opsi sudah berprefiks 'A. ' .. 'E. '.
//    Jangan wrote prefiks sendiri di teks soal.
// 2. `answer` adalah INDEKS, bukan huruf. 0=A, 1=B, 2=C, 3=D, 4=E.
// 3. Jangan isi jawaban dengan 'C' atau 'C. ...' â€” itu akan salah baca.
// 4. `explanation` jangan pernah menyebut huruf opsi ("opsi B mengabaikan...").
//    Kalau nanti opsi digeser, penjelasan itu diam-diam jadi salah.
//    Tulis yang mengacu ke isi opsi.
// 5. `topik` harus salah satu dari daftar di bawah supaya rekap bisa dikelompokkan.
// 6. Usahakan kunci A-E tersebar merata. Bank soal dengan kunci didominasi
//    satu huruf mengukur "tebak huruf", bukan pemahaman.
// ============================================================================

/** Daftar topik yang sah. Dipakai halaman UTS & Rekap untuk mengelompokkan. */
export const TOPIK_UTS_DKK = [
  'Proses Bisnis',
  'K3LH',
  'Kewirausahaan',
  'Perakitan Komputer',
  'Setting IP Address Windows',
];

/** Bank soal UTS DKK. Isi di bawah `export const utsDKK = [` */
export const utsDKK = [];

/** Jumlah soal â€” dibaca otomatis dari bank, jangan diubah manual. */
export const UTS_DKK_SOAL = 0;
