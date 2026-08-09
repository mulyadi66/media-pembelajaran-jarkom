export const worksheetsKKA = {
  elemen1: {
    title: 'Elemen 1: Berpikir Komputasional',
    questions: [
      { id: 1, type: 'essay', question: 'Jelaskan keempat pilar berpikir komputasional: dekomposisi, pengenalan pola, abstraksi, dan algoritma. Beri satu contoh untuk masing-masing.', hint: 'Dekomposisi = memecah masalah; pola = mencari kesamaan; abstraksi = menyaring hal penting; algoritma = urutan langkah.' },
      { id: 2, type: 'essay', question: 'Seorang kasir ingin menghitung kembalian dari uang Rp50.000 untuk pembelian Rp23.500. Tuliskan algoritma penghitungannya dalam bentuk langkah-langkah.', hint: 'Kembalian = 50000 - 23500, lalu pecahan uang dari yang terbesar.' },
      { id: 3, type: 'essay', question: 'Tuliskan pseudocode atau flowchart untuk menentukan apakah sebuah bilangan adalah bilangan ganjil atau genap.', hint: 'Bagi bilangan dengan 2; jika sisa 0 maka genap.' },
      { id: 4, type: 'essay', question: 'Buat flowchart login sederhana: pengguna memasukkan username dan password, jika benar tampilkan "Berhasil", jika salah tampilkan "Gagal".', hint: 'Gunakan simbol keputusan (decision) berbentuk diamond.' },
      { id: 5, type: 'essay', question: 'Apa perbedaan antara flowchart dan pseudocode? Kapan sebaiknya masing-masing digunakan?', hint: 'Flowchart = visual; pseudocode = teks mirip bahasa manusia.' },
    ]
  },
  elemen2: {
    title: 'Elemen 2: Literasi Digital',
    questions: [
      { id: 1, type: 'essay', question: 'Jelaskan apa itu data, informasi, dan pengetahuan. Berikan satu contoh nyata untuk masing-masing.', hint: 'Data: 90, 80, 85. Informasi: rata-rata 85. Pengetahuan: pola belajar yang baik.' },
      { id: 2, type: 'essay', question: 'Sebutkan dan jelaskan jenis-jenis data (data pribadi, data publik, dan lainnya). Mengapa data pribadi perlu dilindungi?', hint: 'Pertimbangkan: nama, alamat, data kesehatan, data keuangan.' },
      { id: 3, type: 'essay', question: 'Jelaskan cara-cara mengevaluasi kredibilitas sebuah informasi di internet sebelum kamu percaya dan membagikannya.', hint: 'Cek sumber, penulis, tanggal, dan bandingkan dengan sumber lain.' },
      { id: 4, type: 'essay', question: 'Apa saja ciri-ciri berita hoaks? Tuliskan langkah-langkah verifikasi menggunakan pencarian gambar terbalik (reverse image search).', hint: 'Judul provokatif, sumber tidak jelas, foto tidak sinkron.' },
      { id: 5, type: 'essay', question: 'Bagaimana cara menjaga jejak digital (digital footprint) yang baik? Sebutkan 5 kebiasaan positif berinternet.', hint: 'Pikirkan: privasi akun, unggahan, komentar, kata sandi, sensor diri.' },
    ]
  },
  elemen3: {
    title: 'Elemen 3: Algoritma Pemrograman',
    questions: [
      { id: 1, type: 'essay', question: 'Tuliskan program Python sederhana untuk mencetak "Halo, Selamat Pagi" sebanyak 5 kali menggunakan perulangan.', hint: 'Gunakan for i in range(5):' },
      { id: 2, type: 'essay', question: 'Buat program Python yang menentukan apakah sebuah angka positif, negatif, atau nol menggunakan percabangan IF-ELIF-ELSE.', hint: 'if a > 0, elif a < 0, else.' },
      { id: 3, type: 'essay', question: 'Tuliskan program Python untuk menghitung luas persegi panjang. Input panjang dan lebar dari pengguna, lalu tampilkan hasilnya.', hint: 'Gunakan input() dan int() lalu luas = p * l.' },
      { id: 4, type: 'essay', question: 'Apa fungsi perintah break dan continue dalam perulangan Python? Berikan contoh penggunaan masing-masing.', hint: 'break = menghentikan loop; continue = melewati iterasi.' },
      { id: 5, type: 'essay', question: 'Buat program Python untuk mencetak bilangan genap dari 1 sampai 20 menggunakan perulangan dan percabangan.', hint: 'Gunakan range(1, 21) lalu if n % 2 == 0.' },
    ]
  },
  elemen4: {
    title: 'Elemen 4: Analisis Data',
    questions: [
      { id: 1, type: 'essay', question: 'Data nilai ulangan: 70, 80, 80, 90, 100. Hitunglah mean, median, dan modus dari data tersebut.', hint: 'Mean = 84, median = 80, modus = 80.' },
      { id: 2, type: 'essay', question: 'Jelaskan perbedaan antara data kualitatif dan data kuantitatif. Berikan 3 contoh untuk masing-masing.', hint: 'Kualitatif: kategori/warna; kuantitatif: angka/jumlah.' },
      { id: 3, type: 'essay', question: 'Kapan sebaiknya menggunakan diagram batang, diagram garis, diagram lingkaran, dan histogram?', hint: 'Bandingkan antar kategori, tren waktu, proporsi, distribusi.' },
      { id: 4, type: 'essay', question: 'Jelaskan langkah-langkah dalam proses analisis data mulai dari pengumpulan hingga penyajian.', hint: 'Kumpulkan → bersihkan → olah → analisis → visualisasi → kesimpulan.' },
      { id: 5, type: 'essay', question: 'Sebuah toko mencatat penjualan selama 6 hari: 12, 15, 10, 18, 22, 13. Berapa rata-rata penjualan per hari? Jelaskan caranya.', hint: 'Jumlahkan semua lalu bagi 6.' },
    ]
  },
  elemen5: {
    title: 'Elemen 5: Literasi & Etika Kecerdasan Artifisial',
    questions: [
      { id: 1, type: 'essay', question: 'Jelaskan sejarah perkembangan kecerdasan artifisial dari era simbolik hingga deep learning. Sebutkan satu tokoh penting.', hint: '1950 Turing, 1956 Dartmouth, era expert system, deep learning modern.' },
      { id: 2, type: 'essay', question: 'Apa perbedaan antara AI sempit (narrow AI), AI umum (general AI), dan AI super (superintelligence)? Berikan contoh AI yang ada sekarang.', hint: 'Narrow AI: chatbot, rekomendasi. General AI: belum ada. Super AI: hipotetis.' },
      { id: 3, type: 'essay', question: 'Jelaskan 5 prinsip etika AI yang harus diperhatikan saat mengembangkan teknologi AI.', hint: 'Keamanan, keadilan, transparansi, privasi, akuntabilitas.' },
      { id: 4, type: 'essay', question: 'Bagaimana cara menulis prompt yang baik agar hasil AI sesuai harapan? Tuliskan contoh prompt efektif untuk membuat esai.', hint: 'Berikan konteks, peran, format, dan batasan.' },
      { id: 5, type: 'essay', question: 'Apa itu bias dalam AI? Jelaskan bagaimana bias bisa terjadi dan cara memitigasi bias dalam data dan model.', hint: 'Data tidak representatif, labeling, algoritma; mitiasi: audit data, diverse dataset.' },
    ]
  }
};
