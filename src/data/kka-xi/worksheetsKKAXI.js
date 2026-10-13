export const worksheetsKKAXI = {
  modul1: {
    title: 'Modul 1: Literasi Digital',
    questions: [
      { id: 1, type: 'essay', question: 'Jelaskan apa itu literasi digital dan mengapa penting bagi generasi muda di era saat ini.', hint: 'Pertimbangkan: akses informasi, komunikasi, keamanan, etika.' },
      { id: 2, type: 'essay', question: 'Sebutkan dan jelaskan minimal 3 ancaman digital yang sering ditemui di internet beserta cara mengatasinya.', hint: 'Phishing, malware, hoaks, cyberbullying.' },
      { id: 3, type: 'essay', question: 'Buatlah contoh kasus pelanggaran etika digital dan bagaimana seharusnya perilaku yang benar.', hint: 'Contoh: menyebarkan foto tanpa izin, komentar kebencian.' },
      { id: 4, type: 'essay', question: 'Jelaskan konsep digital citizenship dan berikan 3 contoh penerapannya dalam kehidupan sehari-hari.', hint: 'Tanggung jawab, etika, partisipasi positif.' },
      { id: 5, type: 'essay', question: 'Bagaimana cara memverifikasi kebenaran suatu informasi yang ditemukan di media sosial?', hint: 'Cek sumber, bandingkan berita, gunakan fact-checking.' },
    ]
  },
  modul2: {
    title: 'Modul 2: Algoritma & Struktur Data',
    questions: [
      { id: 1, type: 'essay', question: 'Jelaskan cara kerja rekursi menggunakan contoh fungsi faktorial. Identifikasi base case dan recursive case-nya, lalu jelaskan apa yang terjadi jika base case tidak ada.', hint: 'Base case faktorial: n == 0 → 1. Tanpa base case terjadi pemanggilan diri tanpa henti hingga stack overflow.' },
      { id: 2, type: 'essay', question: 'Jelaskan tiga tahap strategi divide and conquer (divide, conquer, combine) dengan contoh merge sort. Bandingkan dengan greedy algorithm — kapan greedy bisa menghasilkan solusi yang tidak optimal?', hint: 'D&C: membagi, mengurutkan secara rekursif, menggabungkan. Greedy: pilih optimal lokal, bisa gagal pada knapsack 0/1.' },
      { id: 3, type: 'essay', question: 'Jelaskan konsep dynamic programming dan mengapa lebih cepat daripada rekursi murni. Buat perbandingan jumlah operasi fibonacci(6) tanpa DP versus dengan DP (menyimpan hasil submasalah).', hint: 'Rekursi murni menghitung submasalah berulang (eksponensial); DP menyimpan hasil sekali sehingga linier.' },
      { id: 4, type: 'essay', question: 'Jelaskan cara kerja teknik backtracking pada masalah N-Queens. Apa yang dimaksud "mundur" (backtrack) dan sebutkan 2 masalah lain yang cocok diselesaikan dengan backtracking.', hint: 'Coba posisi ratu, jika buntu mundur dan coba posisi lain. Contoh: Sudoku solver, maze solver.' },
      { id: 5, type: 'essay', question: 'Jelaskan struktur data tree dan graph beserta istilah kunci (root, parent, child, leaf, node, edge). Apa aturan Binary Search Tree dan bagaimana BFS/DFS bekerja untuk menjelajah graph? Beri 1 penerapan nyata graph.', hint: 'BST: kiri lebih kecil, kanan lebih besar. BFS berlapis, DFS sedalam mungkin. Penerapan: GPS/rute terpendek, penjadwalan.' },
    ]
  },
  modul3: {
    title: 'Modul 3: Algoritma Pemrograman Berorientasi Objek',
    questions: [
      { id: 1, type: 'essay', question: 'Buatlah class Python bernama Buku dengan atribut judul, penulis, dan tahun. Sertakan constructor __init__ dan metode info(). Jelaskan perbedaan atribut class dan atribut instance, serta peran self dan __init__.', hint: 'Atribut instance diawali self. __init__ adalah constructor yang otomatis dipanggil saat objek dibuat.' },
      { id: 2, type: 'essay', question: 'Jelaskan konsep encapsulation dan level akses di Python (public, protected, private). Mengapa data seperti saldo rekening sebaiknya dibuat private dan diakses melalui getter/setter yang memvalidasi input?', hint: 'Private memakai dua underscore (__saldo). Getter get_saldo(), setter setor()/tarik() dengan validasi jumlah.' },
      { id: 3, type: 'essay', question: 'Jelaskan konsep inheritance. Rancang class Karyawan (parent) dengan atribut nama dan gaji, lalu class Manager dan Staff yang mewarisinya. Apa fungsi super().__init__ dan apa yang dimaksud method override?', hint: 'Child mewarisi atribut/metode parent. super() memanggil constructor parent. Override: menulis ulang metode di child.' },
      { id: 4, type: 'essay', question: 'Jelaskan konsep polymorphism dan duck typing di Python. Berikan contoh dua class berbeda dengan metode suara() yang sama tetapi output berbeda, lalu tunjukkan cara memanggil keduanya dalam satu perulangan.', hint: 'Polymorphism: objek beda class merespons metode sama secara berbeda. Duck typing: yang penting objek punya metode yang dibutuhkan.' },
      { id: 5, type: 'essay', question: 'Jelaskan manfaat mengorganisir aplikasi GUI Tkinter dengan pendekatan OOP. Rancang class AppCatatan berisi atribut dan method untuk form input (Entry), tombol Simpan (Button), dan daftar tampilan (Listbox).', hint: 'Pola: __init__ menyiapkan jendela, method _buat_widget(), method handler yang dipanggil tombol.' },
    ]
  },
  modul4: {
    title: 'Modul 4: Pengembangan Web Responsif & Interaktif',
    questions: [
      { id: 1, type: 'essay', question: 'Jelaskan peran masing-masing HTML, CSS, dan JavaScript dalam pengembangan web. Berikan analogi untuk memahaminya.', hint: 'HTML = struktur/tulang, CSS = tampilan/kulit, JS = otak/otot.' },
      { id: 2, type: 'essay', question: 'Apa itu responsive design? Jelaskan 2 teknik CSS yang digunakan untuk membuat layout responsif.', hint: 'Media queries, flexbox/grid, relative units (%, vw, vh).' },
      { id: 3, type: 'essay', question: 'Buatlah contoh kode HTML + CSS sederhana untuk form kontak (nama, email, pesan) yang tampilannya rapi di mobile maupun desktop.', hint: 'Gunakan <form>, <input>, <textarea>, flexbox.' },
      { id: 4, type: 'essay', question: 'Jelaskan apa itu DOM dan bagaimana JavaScript berinteraksi dengannya. Berikan contoh manipulasi DOM sederhana.', hint: 'DOM = tree struktur HTML. getElementById, addEventListener.' },
      { id: 5, type: 'essay', question: 'Seorang siswa ingin membuat website portofolio pribadi. Rencanakan struktur halaman, fitur yang akan ditambahkan, dan teknologi yang digunakan.', hint: 'Halaman: beranda, portofolio, kontak. Fitur: dark mode, animasi.' },
    ]
  },
};
