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
//    Jangan tulis prefiks sendiri di teks soal.
// 2. `answer` adalah INDEKS, bukan huruf. 0=A, 1=B, 2=C, 3=D, 4=E.
// 3. Jangan isi jawaban dengan 'C' atau 'C. ...' — itu akan salah baca.
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

/** Bank soal UTS DKK. */
export const utsDKK = [
  {
    id: 1,
    level: 'C3 - Menerapkan',
    question:
      'Wadah atau tempat melindungi motherboard, control board, power supply, disk drive dan komponen-komponen lainnya disebut dengan...',
    options: ['A. Casing', 'B. Wadah', 'C. Bungkusan', 'D. Dudukan', 'E. Kerangka'],
    answer: 0,
    explanation: 'Casing adalah wadah pelindung seluruh komponen di dalamnya.',
  },
  {
    id: 2,
    level: 'C3 - Menerapkan',
    question:
      'Papan rangkaian komputer tempat semua komponen elektronik komputer terangkai disebut dengan...',
    options: [
      'A. Keyboard',
      'B. Motherboard',
      'C. Casing',
      'D. Peripheral',
      'E. Faterboard',
    ],
    answer: 1,
    explanation: 'Motherboard atau mainboard adalah papan rangkaian utama.',
  },
  {
    id: 3,
    level: 'C3 - Menerapkan',
    question: 'Apakah kepanjangan dari RAM ...',
    options: [
      'A. Random Access Memory',
      'B. Run Access Memory',
      'C. Random Access Manage',
      'D. Random Alien Memory',
      'E. Remote Access Memory',
    ],
    answer: 0,
    explanation: 'RAM adalah kepanjangan dari Random Access Memory.',
  },
  {
    id: 4,
    level: 'C3 - Menerapkan',
    question: 'Berikut ini yang merupakan tugas dari CPU adalah....',
    options: [
      'A. Merupakan otak komputer',
      'B. Untuk Menyimpan Data dan Program',
      'C. Memasukkan data dan mengambil data',
      'D. Mengetik dan memasukkan data',
      'E. Mengetik dan menyimpan data',
    ],
    answer: 0,
    explanation: 'CPU adalah otak pemrosesan komputer yang mengolah seluruh instruksi.',
  },
  {
    id: 5,
    level: 'C4 - Menganalisis',
    question:
      'Untuk memberi IP address manual pada Windows 10 atau 11, urutan langkah yang benar adalah...',
    options: [
      'A. Control Panel - Network - IPv4 - Use the following IP address',
      'B. Settings - Network & internet - pilih adapter - Properties - IPv4 - Use the following IP address',
      'C. Command Prompt - ipconfig - lalu ketik IP address baru',
      'D. Device Manager - Network adapter - Properties - isi kolom IP address',
      'E. Control Panel - System and Security - masukkan IP address',
    ],
    answer: 1,
    explanation:
      'Di Windows 10/11 urutan IP manual lewat Settings - Network & internet - pilih adapter - Properties - IPv4 - Use the following IP address.',
  },
  {
    id: 6,
    level: 'C3 - Menerapkan',
    question: 'Manakah urutan tahapan proses bisnis yang benar dalam sebuah perusahaan?',
    options: [
      'A. Perencanaan - Organisasi - Pelaksanaan - Pengawasan',
      'B. Organisasi - Perencanaan - Pengawasan - Pelaksanaan',
      'C. Pelaksanaan - Perencanaan - Organisasi - Pengawasan',
      'D. Pengawasan - Pelaksanaan - Organisasi - Perencanaan',
      'E. Perencanaan - Pelaksanaan - Organisasi - Pengawasan',
    ],
    answer: 0,
    explanation:
      'Urutan proses bisnis adalah perencanaan, organisasi, pelaksanaan, dan pengawasan.',
  },
  {
    id: 7,
    level: 'C3 - Menerapkan',
    question:
      'Sebelum memulai usaha, wirausaha perlu menyusun rencana usaha (business plan) terutama untuk...',
    options: [
      'A. Menentukan harga jual dan biaya promosi',
      'B. Memilih jenis kendaraan operasional',
      'C. Menganalisis kelayakan usaha dari aspek pasar, biaya, dan risiko',
      'D. Menetapkan struktur organisasi perusahaan',
      'E. Mengajukan perizinan operasional perusahaan',
    ],
    answer: 2,
    explanation:
      'Business plan dipakai untuk menganalisis kelayakan usaha dari aspek pasar, biaya, dan risiko sebelum mulai berjalan.',
  },
  {
    id: 8,
    level: 'C3 - Menerapkan',
    question:
      'Di Indonesia, setiap institusi, lembaga, perusahaan, dan industri rumahan harus menyelenggarakan syarat dan ketentuan tentang keselamatan kerja. Regulasi tersebut telah ditetapkan dalam peraturan ....',
    options: [
      'A. Pancasila',
      'B. UU No. 1 Tahun 1970',
      'C. UU No. 1 Tahun 1971',
      'D. UU No. 7 Tahun 1990',
      'E. UU No. 23 Tahun 1992',
    ],
    answer: 1,
    explanation:
      'UU No. 1 Tahun 1970 tentang Keselamatan Kerja adalah dasar hukum keselamatan dan kesehatan kerja di Indonesia.',
  },
  {
    id: 9,
    level: 'C3 - Menerapkan',
    question:
      'Untuk mendukung proses pembelajaran yang aman, nyaman, dan memenuhi standar ketentuan K3LH, laboratorium komputer harus memiliki beberapa perangkat K3LH. Berikut yang bukan merupakan standar K3LH yang sesuai untuk diterapkan pada laboratorium komputer adalah...',
    options: [
      'A. Tabung APAR',
      'B. Mesin pendingin ruangan',
      'C. Lampu proyektor LCD masih dalam kondisi baik',
      'D. Jarak antarmeja komputer sesuai dengan ketentuan UU',
      'E. Lampu dengan pencahayaan yang tinggi di setiap sudut ruangan',
    ],
    answer: 4,
    explanation:
      'Lampu dengan pencahayaan yang tinggi di setiap sudut ruangan bukan standar K3LH, karena pencahayaan berlebih justru menyebabkan silau dan kelelahan mata.',
  },
  {
    id: 10,
    level: 'C3 - Menerapkan',
    question:
      'Bekerja di tempat tinggi adalah pekerjaan yang dilakukan di permukaan tanah atau perairan yang memiliki perbedaan ketinggian dan potensi terjatuh. Penjelasan tersebut merupakan definisi bekerja pada ketinggian menurut regulasi pemerintah. Regulasi yang dijadikan acuan dalam prosedur kerja di tempat tinggi adalah...',
    options: [
      'A. UU No. 1 Tahun 1970',
      'B. UU No. 7 Tahun 1990',
      'C. UU No. 23 Tahun 1992',
      'D. Permenaker No. 9 Tahun 2016',
      'E. Permenaker No. 5 Tahun 2018',
    ],
    answer: 3,
    explanation:
      'Permenaker No. 9 Tahun 2016 merupakan dasar dari prosedur kerja di tempat tinggi.',
  },
  {
    id: 11,
    level: 'C3 - Menerapkan',
    question: 'Di bawah ini pernyataan yang benar mengenai E-commerce adalah...',
    options: [
      'A. Bisnis penjualan dengan tujuan mencari laba',
      'B. Penjualan barang/jasa dengan menggunakan jaringan internet',
      'C. Bisnis penjualan barang/jasa melalui toko',
      'D. Penjualan barang/jasa dengan menggunakan sistem kredit',
      'E. Bisnis barang/jasa dalam untuk kebutuhan dijual kembali',
    ],
    answer: 1,
    explanation:
      'E-commerce adalah penjualan barang atau jasa yang dilakukan melalui jaringan internet.',
  },
  {
    id: 12,
    level: 'C3 - Menerapkan',
    question:
      'Sekelompok orang atau individu yang melakukan kegiatan produksi termasuk barang ataupun jasa adalah...',
    options: ['A. Pelanggan', 'B. Konsumen', 'C. Produsen', 'D. Distributor', 'E. Pengecer'],
    answer: 2,
    explanation: 'Produsen adalah pihak yang melakukan kegiatan produksi barang atau jasa.',
  },
  {
    id: 13,
    level: 'C3 - Menerapkan',
    question: 'Pelanggan adalah...',
    options: [
      'A. Seseorang individu atau sekelompok orang yang membeli produk/jasa',
      'B. Seseorang individu atau sekelompok orang yang membeli produk/jasa berkali-kali',
      'C. Orang yang memakai produk barang/jasa',
      'D. Orang yang membeli produk dengan tujuan untuk dijual kembali',
      'E. Orang yang melakukan kegiatan produksi termasuk barang/jasa',
    ],
    answer: 1,
    explanation:
      'Pelanggan adalah orang yang membeli produk atau jasa secara berkali-kali sehingga berinteraksi rutin dengan penjual.',
  },
  {
    id: 14,
    level: 'C3 - Menerapkan',
    question:
      'Dokumen atau pernyataan tertulis yang berisi gambaran bisnis, strategi bisnis, produk atau layanan di masa mendatang, dengan tujuan untuk mencapai visi dan misi bisnis merupakan pengertian dari...',
    options: [
      'A. Proses Bisnis',
      'B. Perencanaan Bisnis',
      'C. Bisnis',
      'D. Analisa Kebutuhan Pelanggan',
      'E. Perencanaan Konsumen',
    ],
    answer: 1,
    explanation:
      'Perencanaan bisnis adalah gambaran tertulis mengenai strategi dan rencana produk atau layanan ke depan untuk mencapai visi dan misi bisnis.',
  },
  {
    id: 15,
    level: 'C3 - Menerapkan',
    question: 'Di bawah ini yang tidak termasuk dalam jenis-jenis proses bisnis adalah...',
    options: [
      'A. Proses Operasional',
      'B. Proses Dukungan',
      'C. Proses Primer',
      'D. Proses Tersier',
      'E. Proses Sekunder',
    ],
    answer: 3,
    explanation:
      'Jenis-jenis proses bisnis meliputi proses operasional, proses dukungan, proses primer, dan proses sekunder, bukan proses tersier.',
  },
  {
    id: 16,
    level: 'C3 - Menerapkan',
    question:
      'Sebuah kegiatan yang dilakukan baik perorangan atau kelompok atau organisasi yang menjual barang atau jasa untuk mendapatkan keuntungan atau laba adalah...',
    options: ['A. E-commerce', 'B. Bisnis', 'C. Produsen', 'D. Konsumen', 'E. Distributor'],
    answer: 1,
    explanation:
      'Bisnis adalah kegiatan menjual barang atau jasa untuk memperoleh keuntungan atau laba.',
  },
  {
    id: 17,
    level: 'C3 - Menerapkan',
    question: 'Syarat yang harus dipenuhi sebelum mengoperasikan komputer adalah....',
    options: [
      'A. Hardware, software, dan brainware',
      'B. Brainware, hardware, software, dan processor',
      'C. Brainware, hardware, dan media penyimpanan data',
      'D. Hardware, software, dan processor',
      'E. Hardware, Brainware dan Processor',
    ],
    answer: 0,
    explanation:
      'Agar komputer dapat dioperasikan, diperlukan hardware, software, dan brainware.',
  },
  {
    id: 18,
    level: 'C3 - Menerapkan',
    question: 'Apa itu IP Address statis?',
    options: [
      'A. Alamat IP yang diberikan secara otomatis',
      'B. Alamat IP yang berubah-ubah',
      'C. Alamat IP yang ditetapkan secara manual',
      'D. Alamat MAC perangkat',
      'E. Alamat IP yang sama untuk semua perangkat dalam jaringan',
    ],
    answer: 2,
    explanation:
      'IP address statis adalah alamat IP yang ditetapkan secara manual dan tetap, bukan dari DHCP.',
  },
  {
    id: 19,
    level: 'C3 - Menerapkan',
    question: 'Apa itu IP Address DHCP ?',
    options: [
      'A. Alamat IP yang diberikan secara otomatis oleh server DHCP',
      'B. Alamat IP yang ditetapkan secara manual oleh administrator',
      'C. Alamat IP yang tetap selamanya dan tidak pernah berubah',
      'D. Alamat IP yang hanya berlaku pada jaringan lokal tanpa router',
      'E. Alamat MAC perangkat',
    ],
    answer: 0,
    explanation:
      'DHCP atau Dynamic Host Configuration Protocol adalah sistem yang memberikan alamat IP secara otomatis kepada perangkat yang meminta.',
  },
  {
    id: 20,
    level: 'C3 - Menerapkan',
    question: 'Apa yang terjadi jika dua perangkat memiliki IP statis yang sama?',
    options: [
      'A. Koneksi menjadi lebih cepat',
      'B. Tidak terjadi apa-apa',
      'C. Terjadi konflik IP',
      'D. Otomatis berganti IP',
      'E. Kedua perangkat tetap dapat saling diakses dengan normal',
    ],
    answer: 2,
    explanation:
      'Jika dua perangkat memakai alamat IP statis yang sama, maka terjadi konflik IP dan keduanya bisa saling gagal diakses.',
  },
];

/** Jumlah soal — dibaca otomatis dari bank, jangan diubah manual. */
export const UTS_DKK_SOAL = utsDKK.length;
