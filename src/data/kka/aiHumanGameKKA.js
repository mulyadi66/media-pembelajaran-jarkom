export const aiHumanRounds = [
  {
    id: 1,
    type: 'teks',
    content: 'Tentu! Berikut adalah langkah-langkah membuat keripik pisang. Pertama, siapkan bahan-bahan seperti pisang, tepung, dan minyak goreng. Kedua, iris pisang tipis-tipis. Ketiga, campurkan adonan dan goreng hingga garing. Semoga membantu dan selamat mencoba!',
    answer: 'ai',
    signs: [
      'Dibuka dengan kata "Tentu!" yang khas AI',
      'Selalu terstruktur berurutan (Pertama, Kedua, Ketiga)',
      'Ditutup dengan frasa standar "Semoga membantu"',
    ],
  },
  {
    id: 2,
    type: 'teks',
    content: 'jadi tadi aku nyobain bikin keripik pisang pertama kali, awalnya gosong banget wkwk terus ganti minyak baru baru bisa. tipsnya pake api kecil aja kalau mau garing haha',
    answer: 'manusia',
    signs: [
      'Bahasa santai dan banyak singkatan (nyobain, ganti, pake)',
      'Ada ekspresi seperti "wkwk" dan "haha"',
      'Berisi pengalaman pribadi dan opini',
    ],
  },
  {
    id: 3,
    type: 'teks',
    content: 'Menurut penelitian, tidur yang cukup sangat penting bagi kesehatan. Tidur membantu proses pemulihan tubuh dan meningkatkan fungsi kognitif otak. Oleh karena itu, disarankan untuk tidur selama 7-8 jam setiap malam agar tubuh tetap bugar.',
    answer: 'ai',
    signs: [
      'Kalimat sangat formal dan rapi tanpa salah ketik',
      'Tidak ada opini atau pengalaman pribadi',
      'Kesimpulan bersifat umum dan generik',
    ],
  },
  {
    id: 4,
    type: 'teks',
    content: 'gak nyangka tidur 5 jam malah bikin rempong seharian, padahal kemarin tidur 8 jam rasanya on fire. badan emang unik ya 😴',
    answer: 'manusia',
    signs: [
      'Gaya bahasa media sosial (gak, rempong, emang)',
      'Ada emoji 😴',
      'Pengalaman subjektif yang tidak mungkin "diteliti"',
    ],
  },
  {
    id: 5,
    type: 'kode',
    content: '# Fungsi untuk menghitung luas persegi panjang\n# Panjang dikalikan dengan lebar\ndef hitung_luas_persegi_panjang(panjang, lebar):\n    # Kalikan panjang dengan lebar\n    hasil = panjang * lebar\n    # Kembalikan hasil\n    return hasil',
    answer: 'ai',
    signs: [
      'Komentar berlebihan yang menjelaskan hal yang sudah jelas',
      'Nama fungsi panjang dan deskriptif',
      'Rapi sempurna dan lengkap seperti contoh buku',
    ],
  },
  {
    id: 6,
    type: 'kode',
    content: 'def luas(p, l):\n    return p * l',
    answer: 'manusia',
    signs: [
      'Singkat dan langsung ke inti tanpa komentar',
      'Nama variabel pendek (p, l)',
      'Gaya menulis sesuai kebutuhan, bukan untuk dipamerkan',
    ],
  },
  {
    id: 7,
    type: 'teks',
    content: 'Kepada Yth. Bapak/Ibu Guru, Dengan hormat, Saya ingin menyampaikan bahwa saya berkomitmen penuh untuk mengerjakan tugas yang diberikan dan akan selalu berusaha memberikan yang terbaik dalam setiap pembelajaran. Atas perhatian dan kerja samanya, saya ucapkan terima kasih yang sebesar-besarnya.',
    answer: 'ai',
    signs: [
      'Terlalu formal dan tanpa kejelasan tujuan spesifik',
      'Frasa berulang seperti "selalu berusaha memberikan yang terbaik"',
      'Tidak menyebutkan nama, kelas, atau detail nyata',
    ],
  },
  {
    id: 8,
    type: 'teks',
    content: 'kemarin kelompokku presentasi, lucunya di tengah jalan komputernya mati, jadinya kami improvisasi nulis di papan tulis haha. seru sih walau dag dig dug banget',
    answer: 'manusia',
    signs: [
      'Cerita pengalaman nyata dengan kejadian spesifik',
      'Bahasa santai dan akrab (kelompokku, kami)',
      'Ekspresi perasaan "dag dig dug"',
    ],
  },
  {
    id: 9,
    type: 'kode',
    content: '// Fungsi untuk mengambil data pengguna dari API\n// Mengembalikan objek data pengguna\nasync function ambilDataPenggunaDariApi(idPengguna) {\n    // Kirim permintaan ke server\n    const respons = await fetch(`/api/pengguna/${idPengguna}`);\n    // Ubah respons menjadi objek JavaScript\n    const data = await respons.json();\n    // Kembalikan data pengguna\n    return data;\n}',
    answer: 'ai',
    signs: [
      'Komentar menjelaskan setiap baris yang sebenarnya sudah jelas',
      'Penamaan variabel dan fungsi sangat panjang',
      'Kode selalu ditulis rapi seperti dokumentasi',
    ],
  },
  {
    id: 10,
    type: 'kode',
    content: 'async function get(id){\n  const r = await fetch(\'/api/u/\'+id);\n  return r.json();\n}',
    answer: 'manusia',
    signs: [
      'Singkat dan efisien tanpa komentar',
      'Nama variabel pendek (id, r)',
      'Penulis menulis untuk dirinya sendiri, bukan untuk pembaca',
    ],
  },
  {
    id: 11,
    type: 'teks',
    content: 'Saya mohon maaf atas ketidaknyamanan yang Anda alami. Sebagai asisten virtual, saya akan selalu berusaha memberikan jawaban yang akurat dan membantu Anda semaksimal mungkin. Jika ada pertanyaan lain, silakan hubungi saya kembali.',
    answer: 'ai',
    signs: [
      'Frasa khas asisten virtual: "Saya mohon maaf", "silakan hubungi saya kembali"',
      'Mengakui dirinya "asisten virtual"',
      'Selalu menawarkan bantuan lanjutan dengan sopan',
    ],
  },
  {
    id: 12,
    type: 'teks',
    content: 'capek banget hari ini, dari pagi diajarin adik ngerjain PR matematika, ujungnya malah aku yang stress wkwk. guru ngapain sih kasih PR semalam? 😂',
    answer: 'manusia',
    signs: [
      'Keluhan personal yang khas remaja',
      'Slang dan singkatan (capek, ngerjain, ngapain)',
      'Emoji 😂 dan "wkwk"',
    ],
  },
];
