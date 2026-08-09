export const posttestKKA = [
  {
    id: 1, level: 'C4 - Menganalisis',
    question: 'Seorang siswa meminta AI menuliskan seluruh laporan PKL tanpa mengubah satu kata pun, lalu mengumpulkannya atas nama dirinya sendiri. Prinsip etika AI yang dilanggar adalah?',
    options: ['A. Transparansi dan kejujuran akademik (plagiarisme)', 'B. Keadilan dalam pemrosesan data', 'C. Keamanan siber', 'D. Netiket', 'E. Tidak ada yang dilanggar'],
    answer: 0, explanation: 'Mengklaim karya AI sebagai karya sendiri tanpa mengakuinya adalah plagiarisme dan melanggar kejujuran akademik. AI seharusnya digunakan sebagai alat bantu, bukan pengganti, dengan menyatakan penggunaannya.'
  },
  {
    id: 2, level: 'C5 - Mengevaluasi',
    question: 'Untuk mencetak bilangan genap 2 sampai 20 dalam Python, struktur yang paling tepat adalah?',
    options: ['A. for i in range(2, 21, 2): print(i)', 'B. for i in range(2, 21): print(i)', 'C. while i <= 20: print(1)', 'D. for i in range(1, 20, 2): print(i)', 'E. print(2, 4, 6, 8, 10) saja'],
    answer: 0, explanation: 'range(2, 21, 2) menghasilkan 2, 4, 6, ..., 20 — deret genap dari 2 sampai 20. Nilai akhir 21 membuat 20 ikut tercetak karena range berhenti sebelum 21.'
  },
  {
    id: 3, level: 'C4 - Menganalisis',
    question: 'Dalam program penentu nilai huruf, kondisi diurutkan dari tertinggi (nilai >= 90 → A) sampai terendah. Mengapa urutan ini penting?',
    options: ['A. Agar program lebih cepat', 'B. Python mengecek dari atas ke bawah dan berhenti pada kondisi pertama yang benar, jadi urutan menentukan hasil', 'C. Supaya variabel tidak bentrok', 'D. Agar tidak terjadi infinite loop', 'E. Urutan tidak berpengaruh'],
    answer: 1, explanation: 'Python mengevaluasi kondisi dari atas ke bawah dan menjalankan blok pertama yang benar. Jika dibalik, semua nilai akan masuk kondisi paling bawah dan hasilnya salah.'
  },
  {
    id: 4, level: 'C5 - Mengevaluasi',
    question: 'Program berikut: angka = 5\nwhile angka > 0:\n    print(angka)\nProgram ini akan berjalan terus tanpa henti (infinite loop) karena?',
    options: ['A. Nilai angka tidak pernah berkurang menuju kondisi berhenti', 'B. Print tidak valid di Python', 'C. While tidak bisa dipakai di Python', 'D. Angka terlalu besar', 'E. Kurang tanda titik dua'],
    answer: 0, explanation: 'Tidak ada perintah yang mengubah nilai angka (misalnya angka -= 1), sehingga kondisi angka > 0 selalu benar dan loop tidak pernah berhenti. Ini penyebab infinite loop.'
  },
  {
    id: 5, level: 'C4 - Menganalisis',
    question: 'Dalam grup kelas, Rudi mengetik pesan dengan huruf kapital semua kepada Bu Guru. Analisis reaksi yang tepat:',
    options: ['A. Itu wajar dan sopan', 'B. Huruf kapital semua dianggap berteriak dan tidak sopan menurut netiket — sebaiknya menulis dengan huruf biasa', 'C. Guru pasti senang', 'D. Semakin banyak kapital semakin formal', 'E. Tidak ada hubungannya dengan etika'],
    answer: 1, explanation: 'Menurut netiket, mengetik dengan huruf kapital semua dianggap berteriak dan terkesan tidak sopan. Pesan sebaiknya ditulis dengan huruf biasa.'
  },
  {
    id: 6, level: 'C4 - Menganalisis',
    question: 'Komputer kamu terkena ransomware yang mengunci semua data. Analisis tindakan yang benar:',
    options: ['A. Membayar tebusan segera', 'B. Jangan membayar tebusan, gunakan backup untuk memulihkan data dan laporkan ke pihak berwajib', 'C. Restart komputer berulang kali', 'D. Matikan internet', 'E. Format ulang langsung tanpa berpikir'],
    answer: 1, explanation: 'Membayar tebusan tidak menjamin data kembali dan mendorong kejahatan berlanjut. Solusi terbaik adalah backup rutin, memutus jaringan, dan melaporkan insiden.'
  },
  {
    id: 7, level: 'C6 - Menciptakan',
    question: 'Rancang langkah verifikasi sebuah berita viral yang belum jelas kebenarannya. Urutan paling tepat adalah?',
    options: ['A. Langsung bagikan ke grup', 'B. Cek sumber asli, bandingkan minimal 3 sumber terpercaya, cek tanggal dan penulis, lalu simpulkan sebelum menyebar', 'C. Percaya saja karena ramai', 'D. Blokir semua akun', 'E. Simpan tanpa mengecek'],
    answer: 1, explanation: 'Langkah verifikasi: periksa sumber dan penulis (Authority), cek tanggal terbit (Currency), bandingkan beberapa sumber (Accuracy), dan pertimbangkan tujuannya (Purpose). Jangan menyebar sebelum pasti benar.'
  },
  {
    id: 8, level: 'C4 - Menganalisis',
    question: 'Dalam kolaborasi mengerjakan dokumen bersama, anggota tim di kota berbeda-beda. Untuk memberi masukan tanpa harus bertemu waktu yang sama, alat yang paling tepat adalah?',
    options: ['A. Video call panjang-panjang', 'B. Fitur komentar dan saran di Google Docs (asinkron)', 'C. SMS satu per satu', 'D. Surat tercatat', 'E. Siaran radio'],
    answer: 1, explanation: 'Komentar dan saran di dokumen bersama (Google Docs) adalah komunikasi asinkron yang memungkinkan tim memberi masukan tanpa harus online bersamaan.'
  },
  {
    id: 9, level: 'C5 - Mengevaluasi',
    question: 'Data nilai: 50, 80, 85, 90, 92. Evaluasi pernyataan berikut:',
    options: ['A. Mean dan median sama-sama 79.4', 'B. Mean (79.4) lebih rendah dari median (85) karena nilai 50 menyeret rata-rata turun — median lebih tahan terhadap outlier', 'C. Modus lebih penting dari mean', 'D. Median selalu lebih besar dari mean', 'E. Nilai 50 tidak memengaruhi apa pun'],
    answer: 1, explanation: 'Mean = (50+80+85+90+92)/5 = 79.4. Median dari data terurut = 85. Nilai ekstrem 50 menarik mean turun, sedangkan median tidak terpengaruh — itulah mengapa median lebih tahan terhadap outlier.'
  },
  {
    id: 10, level: 'C4 - Menganalisis',
    question: 'Data absensi siswa selama seminggu: Senin 3, Selasa 2, Rabu 5, Kamis 2, Jumat 8. Berapa mean kehadiran absen per hari?',
    options: ['A. 3', 'B. 4', 'C. 5', 'D. 2', 'E. 6'],
    answer: 1, explanation: 'Mean = (3+2+5+2+8)/5 = 20/5 = 4. Jadi rata-rata siswa absen 4 orang per hari.'
  },
  {
    id: 11, level: 'C5 - Mengevaluasi',
    question: 'Untuk membandingkan nilai rata-rata ulangan antar kelas (X TKJ 1, X TKJ 2, X TKJ 3), grafik yang paling tepat adalah?',
    options: ['A. Diagram lingkaran', 'B. Diagram batang', 'C. Scatter plot', 'D. Diagram garis', 'E. Peta'],
    answer: 1, explanation: 'Membandingkan antar kategori (kelas) paling jelas dengan diagram batang. Diagram garis untuk tren waktu, lingkaran untuk proporsi.'
  },
  {
    id: 12, level: 'C4 - Menganalisis',
    question: 'Data penjualan kantin: Senin 50, Selasa 40, Rabu 60, Kamis 45, Jumat 80. Interpretasi yang paling tepat adalah?',
    options: ['A. Penjualan selalu sama', 'B. Penjualan tertinggi di Jumat dan terendah di Selasa — siapkan stok lebih banyak di akhir pekan', 'C. Rabu adalah hari sepi', 'D. Selasa paling ramai', 'E. Data tidak bisa dianalisis'],
    answer: 1, explanation: 'Dari data terlihat pola: Jumat paling tinggi (80), Selasa terendah (40). Kesimpulan: pengunjung ramai di akhir pekan, sehingga stok perlu lebih banyak di hari Jumat.'
  },
  {
    id: 13, level: 'C5 - Mengevaluasi',
    question: 'Penjualan es krim dan jumlah kasus tenggelam sama-sama naik di musim panas. Evaluasi hubungan keduanya:',
    options: ['A. Es krim menyebabkan orang tenggelam', 'B. Keduanya berkorelasi tetapi tidak ada sebab-akibat — keduanya dipengaruhi faktor ketiga (cuaca panas)', 'C. Tenggelam menyebabkan orang membeli es krim', 'D. Tidak ada hubungan sama sekali', 'E. Korelasi pasti berarti sebab-akibat'],
    answer: 1, explanation: 'Korelasi tidak berarti sebab-akibat. Es krim dan kasus tenggelam sama-sama naik di musim panas karena faktor bersama (cuaca). Jangan menarik kesimpulan sebab-akibat dari sekadar korelasi.'
  },
  {
    id: 14, level: 'C4 - Menganalisis',
    question: 'Perbedaan utama Deep Learning dan Machine Learning adalah?',
    options: ['A. Tidak ada perbedaan', 'B. Deep learning menggunakan jaringan saraf tiruan berlapis yang lebih kompleks, bagian dari machine learning', 'C. Machine learning lebih baru', 'D. Deep learning tidak menggunakan data', 'E. Machine learning tidak pakai algoritma'],
    answer: 1, explanation: 'Deep learning adalah cabang machine learning yang menggunakan jaringan saraf tiruan berlapis (neural network) untuk mempelajari pola yang sangat kompleks.'
  },
  {
    id: 15, level: 'C5 - Mengevaluasi',
    question: 'Evaluasi pernyataan: "General AI sudah tersedia dan bisa digunakan semua orang seperti ChatGPT." Benarkah?',
    options: ['A. Benar, ChatGPT adalah general AI', 'B. Salah — ChatGPT adalah narrow AI; general AI yang bisa mengerjakan banyak tugas seperti manusia masih dalam tahap penelitian', 'C. Benar, sudah lama ada', 'D. Salah, AI tidak ada', 'E. ChatGPT lebih pintar dari manusia'],
    answer: 1, explanation: 'ChatGPT dan AI generatif lain adalah narrow AI yang ahli di tugas tertentu. General AI (setara kecerdasan manusia secara luas) masih menjadi riset dan belum terwujud.'
  },
  {
    id: 16, level: 'C4 - Menganalisis',
    question: 'Untuk mengurangi bias pada AI, langkah yang paling efektif dilakukan pengembang adalah?',
    options: ['A. Menambah kecepatan server', 'B. Menggunakan data latih yang beragam dan seimbang, lalu menguji AI pada berbagai kelompok', 'C. Menghapus semua data lama', 'D. Membatasi pengguna', 'E. Menutup akses publik'],
    answer: 1, explanation: 'Bias muncul dari data latih yang tidak seimbang. Solusinya menggunakan data beragam, menguji pada berbagai kelompok, dan memantau hasil secara rutin.'
  },
  {
    id: 17, level: 'C6 - Menciptakan',
    question: 'Susun algoritma untuk menghitung luas lingkaran dalam Python (π = 3.14). Urutan yang benar adalah?',
    options: ['A. print → input → hitung', 'B. Input jari-jari (r) → luas = 3.14 * r * r → tampilkan luas', 'C. Luas = 3.14 * r * r → input r → print', 'D. Tidak perlu input', 'E. Tampilkan luas → hitung → input'],
    answer: 1, explanation: 'Algoritma yang benar: (1) minta input jari-jari, (2) hitung luas = π × r × r, (3) tampilkan hasil. Variabel harus diisi sebelum dipakai menghitung.'
  },
  {
    id: 18, level: 'C4 - Menganalisis',
    question: 'Saat program error, Python menampilkan traceback. Bagian paling penting untuk dibaca pertama kali adalah?',
    options: ['A. Baris teratas traceback', 'B. Baris terakhir yang menyebutkan jenis error (misal ZeroDivisionError) dan baris yang menunjukkan lokasi', 'C. Nama file saja', 'D. Panjang error', 'E. Tidak perlu dibaca'],
    answer: 1, explanation: 'Baris terakhir traceback menunjukkan jenis kesalahan, dan baris di atasnya menunjukkan lokasi (file dan nomor baris). Perbaiki error paling awal karena error lanjutan biasanya akibat error pertama.'
  },
  {
    id: 19, level: 'C5 - Mengevaluasi',
    question: 'Evaluasi dua cara menampilkan teks di Python:\n\nA) print("Nama: " + nama + ", Umur: " + str(umur))\nB) print(f"Nama: {nama}, Umur: {umur}")',
    options: ['A. Cara A selalu salah', 'B. Cara B (f-string) lebih ringkas dan tidak perlu konversi tipe — lebih disarankan', 'C. Cara A lebih cepat', 'D. Keduanya tidak valid', 'E. f-string hanya untuk angka'],
    answer: 1, explanation: 'F-string (cara B) menyisipkan variabel langsung ke teks tanpa perlu mengubah tipe data. Lebih ringkas dan mudah dibaca dibanding penggabungan string manual.'
  },
  {
    id: 20, level: 'C4 - Menganalisis',
    question: 'Untuk laporan praktikum, kamu memerlukan data persentase siswa yang menyukai tiap genre musik dari 100 responden. Visualisasi yang paling tepat adalah?',
    options: ['A. Diagram lingkaran', 'B. Diagram garis', 'C. Scatter plot', 'D. Tabel tanpa grafik', 'E. Diagram batang saja'],
    answer: 0, explanation: 'Diagram lingkaran paling tepat untuk menunjukkan proporsi/persentase bagian dari keseluruhan (100 responden). Pastikan jumlah bagian tidak terlalu banyak agar mudah dibaca.'
  },
];

export default posttestKKA;
