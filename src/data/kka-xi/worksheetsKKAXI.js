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
      { id: 1, type: 'essay', question: 'Bandingkan array, linked list, stack, dan queue dari segi cara kerja, kelebihan, dan kekurangan masing-masing.', hint: 'Buat tabel perbandingan untuk memudahkan.' },
      { id: 2, type: 'essay', question: 'Jelaskan perbedaan antara linear search dan binary search. Kapan masing-masing lebih efektif digunakan?', hint: 'Linear: data unsorted. Binary: data sorted, O(log n).' },
      { id: 3, type: 'essay', question: 'Apa itu Big O Notation? Jelaskan perbedaan O(1), O(n), O(n²), dan O(log n) dengan contoh kasus.', hint: 'O(1) = konstan, O(n) = linier, O(n²) = kuadratik.' },
      { id: 4, type: 'essay', question: 'Buat pseudocode untuk mengurutkan 5 nilai dari terbesar ke terkecil menggunakan selection sort.', hint: 'Bandingkan satu per satu, simpan indeks maksimum.' },
      { id: 5, type: 'essay', question: 'Jelaskan konsep rekursi dengan contoh sederhana. Apa yang terjadi jika tidak ada base case?', hint: 'Faktorial, Fibonacci. Tanpa base case = infinite recursion.' },
    ]
  },
  modul3: {
    title: 'Modul 3: Algoritma Pemograman',
    questions: [
      { id: 1, type: 'essay', question: 'Buatlah program Python sederhana yang menerima input nama dan umur dari pengguna, lalu menentukan apakah sudah boleh memilih (≥17 tahun) atau belum.', hint: 'Gunakan input(), int(), if-elif-else.' },
      { id: 2, type: 'essay', question: 'Jelaskan perbedaan antara variabel, konstanta, dan tipe data. Berikan contoh masing-masing dalam Python.', hint: 'var = nilai, const (Python tidak ada), int/float/str/bool.' },
      { id: 3, type: 'essay', question: 'Buatlah flowchart (deskripsikan langkah-langkahnya) untuk program menghitung diskon belanja: jika belanja > Rp500.000 diskon 20%, jika > Rp300.000 diskon 10%, selain itu tidak ada diskon.', hint: 'Gunakan percabangan if-elif-else.' },
      { id: 4, type: 'essay', question: 'Buatlah fungsi Python bernama hitung_luas_segiempat() yang menerima panjang dan lebar, lalu mengembalikan luasnya. Sertakan contoh pemanggilan.', hint: 'def hitung_luas_segiempat(p, l): return p * l' },
      { id: 5, type: 'essay', question: 'Jelaskan apa itu debugging dan sebutkan minimal 3 cara debugging yang umum dilakukan programmer.', hint: 'Print debugging, breakpoint, stepping, logging.' },
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
