export const pretestKKAXI = [
  {
    id: 1, level: 'C2 - Memahami',
    question: 'Apa yang dimaksud dengan literasi digital?',
    options: ['A. Kemampuan mengetik dengan cepat', 'B. Kemampuan menggunakan TIK secara efektif dan bertanggung jawab', 'C. Kemampuan membuat program komputer', 'D. Kemampuan menggunakan media sosial', 'E. Kemampuan memperbaiki komputer'],
    answer: 1, explanation: 'Literasi digital adalah kemampuan menggunakan teknologi informasi dan komunikasi (TIK) secara efektif, kritis, dan bertanggung jawab dalam kehidupan sehari-hari.'
  },
  {
    id: 2, level: 'C2 - Memahami',
    question: 'Struktur data yang menggunakan prinsip LIFO (Last In, First Out) adalah?',
    options: ['A. Queue', 'B. Array', 'C. Stack', 'D. Linked List', 'E. Tree'],
    answer: 2, explanation: 'Stack menggunakan prinsip LIFO — elemen terakhir yang dimasukkan (top of stack) pertama kali dikeluarkan.'
  },
  {
    id: 3, level: 'C2 - Memahami',
    question: 'Dalam flowchart, simbol diamond (belah ketupat) digunakan untuk?',
    options: ['A. Proses/perhitungan', 'B. Input/output', 'C. Keputusan (kondisi)', 'D. Awal/akhir', 'E. Koneksi antar halaman'],
    answer: 2, explanation: 'Simbol diamond digunakan untuk keputusan (percabangan) yang memiliki dua kemungkinan hasil: benar/salah atau ya/tidak.'
  },
  {
    id: 4, level: 'C2 - Memahami',
    question: 'Bahasa yang digunakan untuk mengatur tampilan halaman web adalah?',
    options: ['A. HTML', 'B. CSS', 'C. JavaScript', 'D. Python', 'E. PHP'],
    answer: 1, explanation: 'CSS (Cascading Style Sheets) digunakan untuk mengontrol tampilan, warna, font, layout, dan aspek visual halaman web.'
  },
  {
    id: 5, level: 'C3 - Menerapkan',
    question: 'Seorang siswa menulis pseudocode untuk menghitung rata-rata nilai. Manakah yang benar?',
    options: ['A. IF nilai >= 70 THEN lulus', 'B. INPUT nilai1, nilai2, nilai3; HITUNG rata = (n1+n2+n3)/3; OUTPUT rata', 'C. FOR i = 1 TO 10; PRINT i', 'D. WHILE x < 10; x = x + 1', 'E. RETURN nilai'],
    answer: 1, explanation: 'Pseudocode yang benar harus menjelaskan langkah input, proses (hitung), dan output secara jelas.'
  },
  {
    id: 6, level: 'C3 - Menerapkan',
    question: 'Untuk membuat teks pada halaman web menjadi warna merah dan tebal, CSS yang tepat adalah?',
    options: ['A. text-color: red; font-weight: bold;', 'B. color: red; font-weight: bold;', 'C. style: red bold;', 'D. font: red bold;', 'E. color: red; text: bold;'],
    answer: 1, explanation: 'Property CSS untuk warna teks adalah "color" dan untuk tebal adalah "font-weight: bold".'
  },
  {
    id: 7, level: 'C2 - Memahami',
    question: 'Phishing adalah?',
    options: ['A. Teknik optimasi website', 'B. Teknik penipuan digital untuk mencuri data sensitif', 'C. Jenis malware', 'D. Protokol jaringan', 'E. Bahasa pemrograman'],
    answer: 1, explanation: 'Phishing adalah teknik penipuan di mana pelaku menyamar sebagai entitas tepercaya untuk mencuri data sensitif seperti password.'
  },
  {
    id: 8, level: 'C4 - Menganalisis',
    question: 'Sebuah algoritma memiliki kompleksitas O(n²). Jika input digandakan dari 10 menjadi 20, berapa kali lipat waktu eksekusinya?',
    options: ['A. 2 kali lipat', 'B. 4 kali lipat', 'C. 10 kali lipat', 'D. 20 kali lipat', 'E. Tidak berubah'],
    answer: 1, explanation: 'Dengan O(n²), jika n digandakan (×2), waktu eksekusi menjadi 2² = 4 kali lipat.'
  },
  {
    id: 9, level: 'C2 - Memahami',
    question: 'Bagaimana cara kerja searching (pencarian) biner (binary search)?',
    options: ['A. Memeriksa satu per satu dari awal', 'B. Memeriksa dari akhir ke awal', 'C. Membagi data menjadi dua bagian dan mengecek bagian tengah', 'D. Mengacak data lalu mencari', 'E. Mengurutkan data lalu mencari dari awal'],
    answer: 2, explanation: 'Binary search membagi data menjadi dua bagian, membandingkan target dengan elemen tengah, lalu mencari di bagian yang sesuai.'
  },
  {
    id: 10, level: 'C3 - Menerapkan',
    question: 'Untuk membuat elemen HTML yang merupakan tautan (link) ke halaman lain, tag yang digunakan adalah?',
    options: ['A. <link>', 'B. <a href="url">', 'C. <ref>', 'D. <nav>', 'E. <redirect>'],
    answer: 1, explanation: 'Tag <a> dengan atribut href digunakan untuk membuat hyperlink/tautan ke halaman atau resource lain.'
  },
  {
    id: 11, level: 'C2 - Memahami',
    question: 'Apa kepanjangan dari DOM dalam konteks web development?',
    options: ['A. Data Object Manager', 'B. Document Object Model', 'C. Digital Online Mode', 'D. Document Oriented Mapping', 'E. Dynamic Object Method'],
    answer: 1, explanation: 'DOM (Document Object Model) adalah representasi tree dari struktur halaman web yang dapat dimanipulasi oleh JavaScript.'
  },
  {
    id: 12, level: 'C4 - Menganalisis',
    question: 'Seorang pengembang membuat website yang tidak bisa dibuka di smartphone. Masalah utamanya adalah?',
    options: ['A. Kode JavaScript error', 'B. Server down', 'C. Tidak menggunakan responsive design', 'D. Koneksi internet lambat', 'E. File CSS corrupt'],
    answer: 2, explanation: 'Website yang tidak bisa dibuka di smartphone kemungkinan besar tidak menggunakan responsive design, sehingga tidak menyesuaikan dengan layar kecil.'
  },
  {
    id: 13, level: 'C2 - Memahami',
    question: 'Dalam pemrograman Python, pernyataan untuk menampilkan teks ke layar adalah?',
    options: ['A. echo()', 'B. write()', 'C. print()', 'D. display()', 'E. show()'],
    answer: 2, explanation: 'Fungsi print() digunakan di Python untuk menampilkan output/teks ke layar konsol.'
  },
  {
    id: 14, level: 'C3 - Menerapkan',
    question: 'Diberikan array: [5, 3, 8, 1, 9]. Setelah dilakukan sorting menaik dengan bubble sort satu pass, hasilnya adalah?',
    options: ['A. [3, 5, 1, 8, 9]', 'B. [1, 3, 5, 8, 9]', 'C. [5, 3, 8, 1, 9]', 'D. [3, 1, 5, 8, 9]', 'E. [5, 8, 3, 1, 9]'],
    answer: 0, explanation: 'Bubble sort satu pass membandingkan dan menukar elemen bersebelahan: [3,5,1,8,9] → [3,1,5,8,9]. Namun jawaban terdekat dari opsi yang tersedia adalah A.'
  },
  {
    id: 15, level: 'C2 - Memahami',
    question: 'Yang bukan merupakan jenis tipe data primitif dalam pemrograman adalah?',
    options: ['A. Integer', 'B. String', 'C. Boolean', 'D. Array', 'E. Float'],
    answer: 3, explanation: 'Array adalah struktur data non-primitif (composite). Integer, String, Boolean, dan Float adalah tipe data primitif.'
  },
  {
    id: 16, level: 'C4 - Menganalisis',
    question: 'Sebuah website menampilkan konten dengan benar di desktop tetapi berantakan di tablet. Solusi terbaik adalah?',
    options: ['A. Membuat website terpisah untuk tablet', 'B. Menggunakan media queries CSS', 'C. Menghapus fitur tertentu', 'D. Memaksa pengguna menggunakan desktop', 'E. Menggunakan ukuran font lebih kecil'],
    answer: 1, explanation: 'Media queries CSS memungkinkan penyesuaian style berdasarkan ukuran layar, sehingga tampilan optimal di berbagai perangkat.'
  },
  {
    id: 17, level: 'C3 - Menerapkan',
    question: 'Struktur data Queue (antrian) cocok digunakan untuk mensimulasikan?',
    options: ['A. Tumpukan buku', 'B. Undo pada text editor', 'C. Antrian kasir supermarket', 'D. Riwayat kunjungan browser', 'E. Stack of plates'],
    answer: 2, explanation: 'Queue menggunakan FIFO — cocok untuk antrian kasir di mana pelanggan yang datang lebih dulu dilayani lebih dulu.'
  },
  {
    id: 18, level: 'C2 - Memahami',
    question: 'Rekursi dalam pemrograman adalah?',
    options: ['A. Perulangan menggunakan for loop', 'B. Fungsi yang memanggil dirinya sendiri', 'C. Proses kompilasi kode', 'D. Penghapusan variabel', 'E. Penggabungan dua array'],
    answer: 1, explanation: 'Rekursi adalah teknik di mana fungsi memanggil dirinya sendiri dengan input yang lebih kecil sampai mencapai base case.'
  },
  {
    id: 19, level: 'C5 - Menciptakan',
    question: 'Untuk membangun website portofolio pribadi yang responsif, kombinasi teknologi yang paling tepat adalah?',
    options: ['A. HTML + CSS + JavaScript', 'B. Python + Django', 'C. Java + Spring', 'D. PHP + MySQL', 'E. C++ + OpenGL'],
    answer: 0, explanation: 'HTML untuk struktur, CSS untuk tampilan responsif, dan JavaScript untuk interaktivitas — kombinasi standar untuk website frontend.'
  },
  {
    id: 20, level: 'C4 - Menganalisis',
    question: 'Mengapa penting bagi siswa TI untuk memahami etika digital?',
    options: ['A. Agar mendapat nilai bagus', 'B. Agar bisa menghormati hak cipta dan privasi serta menggunakan teknologi secara bertanggung jawab', 'C. Agar bisa menjadi programmer', 'D. Agar bisa membuat virus', 'E. Agar lebih cepat mengetik'],
    answer: 1, explanation: 'Etika digital memastikan penggunaan teknologi yang bertanggung jawab, menghormati hak orang lain, dan menjaga keamanan di dunia digital.'
  },
];
