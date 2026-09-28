/**
 * Bank soal Ujian (Post Test) KKA — 25 soal, level C2–C5.
 * Dipakai halaman ujian (/kka/ujian): token guru + identitas + timer + auto-grade.
 * Tiap elemen (1–5) mendapat 5 soal. Opsi wajib berawalan "A. ", "B. ", ...
 * karena Quiz memotong 3 karakter pertama saat merender.
 */
export const posttestUjianKKA = [
  // ===== Elemen 1 — Berpikir Komputasional =====
  {
    id: 1, level: 'C2 - Memahami', elemen: 'Elemen 1',
    question: 'Manakah yang BUKAN termasuk empat pilar berpikir komputasional?',
    options: [
      'A. Dekomposisi',
      'B. Pengenalan Pola',
      'C. Abstraksi',
      'D. Optimasi perangkat keras',
      'E. Algoritma',
    ],
    answer: 3,
    explanation: 'Empat pilar berpikir komputasional adalah dekomposisi, pengenalan pola, abstraksi, dan algoritma. Optimasi perangkat keras bukan pilar berpikir komputasional.',
  },
  {
    id: 2, level: 'C3 - Menerapkan', elemen: 'Elemen 1',
    question: 'Dika ingin menyelesaikan soal "jumlahkan 5 nilai siswa, lalu tentukan nilai tertinggi". Langkah dekomposisi paling tepat adalah.',
    options: [
      'A. Mengganti aplikasi yang dipakai',
      'B. Memecah menjadi: catat 5 nilai, tentukan nilai terbesar, tampilkan hasilnya',
      'C. Menghafal semua nilai sekaligus',
      'D. Menyalin nilai dari teman',
      'E. Mengganti bahasa pemrograman',
    ],
    answer: 1,
    explanation: 'Dekomposisi memecah masalah besar menjadi sub-masalah kecil yang lebih mudah diselesaikan, lalu menyatukan kembali hasilnya menjadi solusi utuh.',
  },
  {
    id: 3, level: 'C3 - Menerapkan', elemen: 'Elemen 1',
    question: 'Pengenalan pola (pattern recognition) dalam pemrograman terlihat pada contoh berikut, KECUALI.',
    options: [
      'A. Menggunakan perulangan untuk mencetak angka 1 sampai 10',
      'B. Membuat fungsi yang dipakai berulang untuk menghitung luas balok',
      'C. Mengambil data dari sensor setiap 5 detik',
      'D. Menginstal aplikasi chat terbaru',
      'E. Menggunakan variabel yang sama untuk menyimpan nilai tengah',
    ],
    answer: 3,
    explanation: 'Menginstal aplikasi bukan pengenalan pola. Pengenalan pola adalah melihat kesamaan atau pengulangan struktur lalu memanfaatkannya lewat perulangan, fungsi, dan variabel bersama.',
  },
  {
    id: 4, level: 'C3 - Menerapkan', elemen: 'Elemen 1',
    question: 'Sebuah program menghitung luas balok dengan panjang 5, lebar 3, tinggi 2. Cara menulis kode yang paling baik menunjukkan abstraksi adalah.',
    options: [
      'A. print(5 * 3 * 2)',
      'B. p = 5; w = 3; t = 2; print(p * w * t)',
      'C. Menghapus semua variabel lalu langsung menampilkan teks "30"',
      'D. Menyimpan hasil perhitungan di dalam file gambar',
      'E. Mengubah angka menjadi huruf agar lebih menarik',
    ],
    answer: 1,
    explanation: 'Abstraksi menyembunyikan detail perhitungan dan hanya menampilkan bagian penting (panjang, lebar, tinggi), sehingga program mudah diubah tanpa menyentuh logika intinya.',
  },
  {
    id: 5, level: 'C4 - Menganalisis', elemen: 'Elemen 1',
    question: 'Dari pilihan berikut, algoritma yang paling TIDAK memenuhi ciri algoritma yang baik adalah.',
    options: [
      'A. Langkahnya berhenti pada langkah ke-5',
      'B. Langkah-langkahnya tertulis berurutan dan jelas',
      'C. Setiap langkah hanya punya satu makna, tidak ambigu',
      'D. "Buatlah program yang menyelesaikan soal PAT" tanpa langkah detail',
      'E. Terdiri dari langkah yang dapat dijalankan siapa saja',
    ],
    answer: 3,
    explanation: 'Algoritma harus berupa langkah-langkah terbatas dan berurutan. Perintah "buatlah program yang menyelesaikan soal PAT" tidak berurutan, tidak terbatas, dan ambigu sehingga bukan algoritma.',
  },

  // ===== Elemen 2 — Literasi Digital =====
  {
    id: 6, level: 'C2 - Memahami', elemen: 'Elemen 2',
    question: 'Dari empat kemampuan dasar literasi digital, yang berkaitan dengan aman beraktivitas di internet adalah.',
    options: [
      'A. Digital Culture',
      'B. Digital Safety',
      'C. Digital Ethics',
      'D. Digital Skills',
      'E. Digital Identity',
    ],
    answer: 1,
    explanation: 'Digital Safety adalah kemampuan melindungi data, privasi, dan perangkat dari ancaman siber di internet.',
  },
  {
    id: 7, level: 'C3 - Menerapkan', elemen: 'Elemen 2',
    question: 'Vina menerima pesan dari "admin bank" di media sosial yang meminta PIN dan kode OTP. Tindakan paling tepat adalah.',
    options: [
      'A. Membalas dengan data yang diminta agar cepat selesai',
      'B. Mengabaikan pesan tersebut karena bank tidak meminta PIN atau OTP lewat pesan',
      'C. Meneruskan ke teman agar mereka boleh menjawab',
      'D. Mengirim PIN tetapi menyalin kode OTP menjadi 0000',
      'E. Mengirim data pribadi teman sebagai ganti',
    ],
    answer: 1,
    explanation: 'Penipuan digital (phishing) sering mengaku sebagai pihak resmi. PIN dan OTP tidak boleh dibagikan kepada siapa pun, termasuk yang mengaku sebagai bank.',
  },
  {
    id: 8, level: 'C3 - Menerapkan', elemen: 'Elemen 2',
    question: 'Menurut etika bermedia digital, tindakan paling tepat saat memakai karya orang lain dalam tugas sekolah adalah.',
    options: [
      'A. Mengubah nama penulis lalu menyalin karyanya',
      'B. Mengambil gambar dari internet tanpa keterangan sumber',
      'C. Mencantumkan sumber kutipan dan mengakui nama kreator',
      'D. Menyembunyikan sumber agar tidak ketahuan',
      'E. Menghapus kalimat pembuka karya asli',
    ],
    answer: 2,
    explanation: 'Mencantumkan sumber menghormati hak cipta dan menunjukkan kejujuran akademik. Menyalin tanpa sumber merupakan pelanggaran hak cipta.',
  },
  {
    id: 9, level: 'C4 - Menganalisis', elemen: 'Elemen 2',
    question: 'Seorang siswa menemukan artikel berita tanpa nama penulis, tanpa tanggal, dan dari situs yang kredibilitasnya tidak jelas. Berdasarkan cara pandang CRAAP, kesimpulan paling tepat adalah.',
    options: [
      'A. Artikel pasti benar karena sudah bisa diakses',
      'B. Artikel perlu diperiksa kredibilitasnya sebelum dipakai sebagai rujukan',
      'C. Artikel pasti hoaks karena tidak mencantumkan penulis',
      'D. Jumlah share di media sosial menentukan kebenaran artikel',
      'E. Artikel boleh dipakai asal kalimatnya diubah sedikit',
    ],
    answer: 1,
    explanation: 'CRAAP menilai Currentness, Relevance, Authority, Accuracy, dan Purpose. Artikel tanpa penulis dan tanggal perlu diperiksa kredibilitasnya, tetapi belum tentu hoaks.',
  },
  {
    id: 10, level: 'C4 - Menganalisis', elemen: 'Elemen 2',
    question: 'Kelompok tugas harus bekerja sama membuat presentasi dari jarak jauh. Cara kolaborasi digital paling efektif adalah.',
    options: [
      'A. Semua anggota mengedit berkas yang sama tanpa komunikasi sampai selesai',
      'B. Membagi tugas per bagian, menyepakati jadwal, dan memakai folder bersama untuk versi final',
      'C. Hanya satu anggota yang bekerja tanpa memberi tahu anggota lain',
      'D. Mengirim lima versi berkas berbeda dengan nama "final"',
      'E. Melakukan briefing presentasi hanya secara luring',
    ],
    answer: 1,
    explanation: 'Kolaborasi efektif membutuhkan pembagian peran, komunikasi terjadwal, dan pengelolaan versi berkas yang jelas agar tidak terjadi tumpang tindih.',
  },

  // ===== Elemen 3 — Algoritma Pemrograman =====
  {
    id: 11, level: 'C2 - Memahami', elemen: 'Elemen 3',
    question: 'Pernyataan yang benar tentang compiler dan interpreter adalah.',
    options: [
      'A. Keduanya mengubah seluruh kode menjadi satu berkas sekali jalan',
      'B. Compiler menerjemahkan seluruh kode lalu menghasilkan program yang dapat dijalankan, sedangkan interpreter menerjemahkan baris demi baris saat program berjalan',
      'C. Interpreter selalu lebih cepat daripada compiler untuk semua program',
      'D. Compiler hanya bisa dipakai untuk bahasa Python',
      'E. Interpreter tidak memerlukan perangkat keras',
    ],
    answer: 1,
    explanation: 'Compiler menerjemahkan seluruh program sebelum dijalankan sehingga hasilnya dapat berdiri sendiri, sedangkan interpreter menerjemahkan per baris ketika program dijalankan.',
  },
  {
    id: 12, level: 'C3 - Menerapkan', elemen: 'Elemen 3',
    question: 'Sebuah flowchart memiliki lingkaran (perulangan) dengan kondisi "nilai lebih dari 80", lalu menampilkan "Lulus". Algoritma pada flowchart tersebut berfungsi untuk.',
    options: [
      'A. Menghitung jumlah seluruh nilai',
      'B. Menentukan status kelulusan siswa',
      'C. Mengurutkan data nilai',
      'D. Mencari nilai terbesar',
      'E. Menghapus nilai duplikat',
    ],
    answer: 1,
    explanation: 'Alur "cek nilai lebih dari 80 lalu tampilkan Lulus" adalah algoritma penentuan kelulusan, yaitu percabangan yang diulang sampai semua nilai diperiksa.',
  },
  {
    id: 13, level: 'C3 - Menerapkan', elemen: 'Elemen 3',
    question: 'Perhatikan kode Python berikut:\n\nnilai = 85\nif nilai >= 80:\n    print("A")\nelse:\n    print("B")\n\nHasil yang dicetak adalah.',
    options: [
      'A. A',
      'B. B',
      'C. 80',
      'D. Error, karena nama variabel harus huruf besar',
      'E. Tidak ada output',
    ],
    answer: 0,
    explanation: 'Nilai 85 memenuhi kondisi nilai >= 80 sehingga blok if dijalankan dan mencetak "A".',
  },
  {
    id: 14, level: 'C3 - Menerapkan', elemen: 'Elemen 3',
    question: 'Perhatikan kode Python berikut:\n\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i, end=" ")\n\nOutput yang dihasilkan adalah.',
    options: [
      'A. 1 2 3 4 5',
      'B. 1 2 4 5',
      'C. 3',
      'D. 1 2 3',
      'E. 1 2 3 4',
    ],
    answer: 1,
    explanation: 'continue melewati sisa perintah pada iterasi tersebut. Karena i bernilai 3, angka 3 tidak dicetak sehingga hasilnya "1 2 4 5".',
  },
  {
    id: 15, level: 'C4 - Menganalisis', elemen: 'Elemen 3',
    question: 'Program menghasilkan error "NameError: name nilai is not defined". Langkah debugging paling tepat adalah.',
    options: [
      'A. Menjalankan perintah yang sama tanpa membaca pesan error',
      'B. Membaca traceback untuk mengetahui baris yang salah, lalu mengecek apakah variabel sudah dideklarasikan sebelum dipakai',
      'C. Menghapus seluruh isi program',
      'D. Mengganti interpreter dengan browser',
      'E. Menambah spasi secara acak di dalam kode',
    ],
    answer: 1,
    explanation: 'NameError muncul karena variabel belum dideklarasikan atau salah ejaan. Traceback menunjukkan baris masalah; periksa deklarasi variabel dan urutan penggunaannya.',
  },

  // ===== Elemen 4 — Analisis Data =====
  {
    id: 16, level: 'C2 - Memahami', elemen: 'Elemen 4',
    question: 'Pernyataan yang paling tepat membedakan data dan informasi adalah.',
    options: [
      'A. Data dan informasi tidak ada bedanya karena keduanya sama',
      'B. Data adalah bahan mentah, sedangkan informasi adalah data yang sudah diolah dan bermakna untuk pengambilan keputusan',
      'C. Data selalu berupa angka, sedangkan informasi selalu berupa gambar',
      'D. Informasi selalu lebih besar ukurannya daripada data',
      'E. Data hanya bisa disimpan di komputer',
    ],
    answer: 1,
    explanation: 'Data adalah catatan atau observasi mentah. Informasi adalah hasil pengolahan data yang memberikan makna, misalnya "penjualan naik 20 persen sehingga stok ditambah".',
  },
  {
    id: 17, level: 'C3 - Menerapkan', elemen: 'Elemen 4',
    question: 'Nilai ulangan 5 siswa: 80, 90, 85, 75, 70. Nilai mean (rata-rata) adalah.',
    options: [
      'A. 75',
      'B. 78',
      'C. 80',
      'D. 85',
      'E. 90',
    ],
    answer: 2,
    explanation: 'Jumlah nilai = 80 + 90 + 85 + 75 + 70 = 400. Mean = 400 : 5 = 80.',
  },
  {
    id: 18, level: 'C3 - Menerapkan', elemen: 'Elemen 4',
    question: 'Data penjualan bakso sekolah selama 5 hari: 120, 150, 130, 180, 140. Hari dengan penjualan tertinggi adalah hari ke-4 dengan 180 porsi. Ukuran statistik yang paling tepat digunakan adalah.',
    options: [
      'A. Median',
      'B. Mean',
      'C. Rentang',
      'D. Modus',
      'E. Simpangan baku',
    ],
    answer: 1,
    explanation: 'Rata-rata (mean) dari data tersebut adalah (120 + 150 + 130 + 180 + 140) : 5 = 720 : 5 = 144, yaitu nilai penjualan rata-rata per hari yang menggambarkan keseluruhan data.',
  },
  {
    id: 19, level: 'C4 - Menganalisis', elemen: 'Elemen 4',
    question: 'Sebuah grafik batang menampilkan jumlah siswa yang memilih mata pelajaran favorit. Agar grafik lebih mudah dipahami, langkah pertama paling tepat adalah.',
    options: [
      'A. Menambah warna acak pada setiap batang',
      'B. Memberi judul grafik yang jelas, label sumbu, dan keterangan sumber data',
      'C. Menghapus semua angka pada sumbu',
      'D. Mengubah batang menjadi bentuk 3D',
      'E. Menyamakan tinggi semua batang',
    ],
    answer: 1,
    explanation: 'Visualisasi harus punya konteks: judul, label sumbu, dan sumber data. Tanpa itu pembaca tidak tahu apa yang digambarkan.',
  },
  {
    id: 20, level: 'C4 - Menganalisis', elemen: 'Elemen 4',
    question: 'Jumlah siswa: XI TJKT 1 = 12 orang, XI TJKT 2 = 15 orang, XI TJKT 3 = 14 orang. Kesimpulan yang benar adalah.',
    options: [
      'A. XI TJKT 1 paling banyak siswanya',
      'B. XI TJKT 2 paling banyak siswanya',
      'C. Semua kelas sama banyak siswanya',
      'D. XI TJKT 3 paling banyak siswanya',
      'E. Data tersebut tidak bisa dianalisis',
    ],
    answer: 1,
    explanation: 'XI TJKT 2 memiliki 15 siswa, paling banyak dibanding 12 dan 14, sehingga kelas tersebut paling banyak siswanya.',
  },

  // ===== Elemen 5 — Literasi & Etika AI =====
  {
    id: 21, level: 'C2 - Memahami', elemen: 'Elemen 5',
    question: 'Pernyataan paling tepat tentang machine learning (pembelajaran mesin) adalah.',
    options: [
      'A. Komputer diberi aturan yang sangat detail untuk setiap kondisi',
      'B. Komputer belajar pola dari data untuk membuat prediksi atau keputusan tanpa aturan eksplisit untuk tiap kasus',
      'C. Komputer hanya bisa meniru suara manusia',
      'D. Machine learning sama dengan internet berkecepatan tinggi',
      'E. Semua program otomatis adalah machine learning',
    ],
    answer: 1,
    explanation: 'Machine learning menemukan pola dari data latih lalu memakainya untuk prediksi atau keputusan, berbeda dari pemrograman tradisional yang menulis semua aturan secara manual.',
  },
  {
    id: 22, level: 'C2 - Memahami', elemen: 'Elemen 5',
    question: 'Perbedaan pembelajaran mesin terawasi dan tidak terawasi yang benar adalah.',
    options: [
      'A. Terawasi tidak memakai data, sedangkan tidak terawasi memakai data berlabel',
      'B. Terawasi dilatih dengan data yang sudah diberi label, sedangkan tidak terawasi mencari pola sendiri dari data tanpa label',
      'C. Keduanya identik',
      'D. Terawasi hanya untuk gambar, sedangkan tidak terawasi hanya untuk teks',
      'E. Tidak terawasi selalu lebih akurat',
    ],
    answer: 1,
    explanation: 'Pembelajaran terawasi belajar dari data berlabel untuk memprediksi label, sedangkan pembelajaran tidak terawasi mengelompokkan atau meringkas data tanpa label, misalnya segmentasi pelanggan.',
  },
  {
    id: 23, level: 'C3 - Menerapkan', elemen: 'Elemen 5',
    question: 'Aisy ingin memakai AI generatif untuk membuat ringkasan materi. Cara paling tepat dan bertanggung jawab adalah.',
    options: [
      'A. Menyalin hasil AI langsung sebagai tugas pribadi tanpa dibaca atau diperbaiki',
      'B. Menggunakan AI sebagai alat bantu, lalu memeriksa kebenaran, membaca ulang, dan mencantumkan penggunaan AI sesuai aturan sekolah',
      'C. Meminta AI mengerjakan seluruh tugas lalu mengirim apa adanya',
      'D. Menyembunyikan fakta bahwa AI digunakan agar tidak dinilai',
      'E. Mengubah identitas AI menjadi nama sendiri',
    ],
    answer: 1,
    explanation: 'AI adalah alat bantu, bukan pengganti berpikir. Hasil AI bisa keliru (hallusinasi) sehingga wajib diverifikasi, diperbaiki, dan penggunaannya disampaikan secara jujur sesuai aturan sekolah.',
  },
  {
    id: 24, level: 'C4 - Menganalisis', elemen: 'Elemen 5',
    question: 'Sebuah video berita memakai wajah dan suara tokoh terkenal untuk menyatakan hal yang tidak pernah dikatakan tokoh itu. Istilah untuk konten semacam itu adalah.',
    options: [
      'A. Deepfake',
      'B. Machine learning',
      'C. Big data',
      'D. Kompresi video',
      'E. Cloud computing',
    ],
    answer: 0,
    explanation: 'Deepfake adalah konten sintetis (gambar, video, atau audio) yang menggunakan AI untuk meniru identitas seseorang sehingga menyesatkan dan dapat melanggar hak individu.',
  },
  {
    id: 25, level: 'C5 - Menilai', elemen: 'Elemen 5',
    question: 'Sebuah model AI untuk memprediksi kelulusan siswa dilatih hanya dengan data siswa dari satu sekolah. Bias paling mungkin yang muncul adalah.',
    options: [
      'A. Model menjadi terlalu lambat saat memproses data',
      'B. Model hanya mengenal pola sekolah tersebut sehingga hasilnya tidak berlaku baik di sekolah lain',
      'C. Model tidak bisa menyimpan data',
      'D. Model selalu menghasilkan jawaban yang benar',
      'E. Model otomatis menjadi gratis',
    ],
    answer: 1,
    explanation: 'Data yang tidak beragam membuat model hanya mengenal pola kelompok tertentu. Ini bias data, sehingga perlu data dari berbagai sekolah agar model lebih adil dan bisa digeneralisasi.',
  },
];

export const POSTTEST_UJIAN_KKA_META = {
  key: 'kka_posttest_ujian',
  title: 'Ujian KKA — Post Test',
  jumlah: posttestUjianKKA.length,
  waktu: 'sekitar 1,5 menit per soal',
};
