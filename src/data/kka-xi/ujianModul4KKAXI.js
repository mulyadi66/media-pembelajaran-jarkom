export default [
  {
    id: 1,
    level: 'C2 - Memahami',
    modul: 'Modul 4',
    question: 'Apa tujuan utama menggunakan elemen semantic HTML seperti header, nav, main, dan footer?',
    options: [
      'A. Membuat halaman lebih cepat dimuat',
      'B. Menggantikan seluruh kebutuhan CSS',
      'C. Memberi makna pada struktur konten sehingga lebih dipahami browser, mesin pencari, dan pembaca layar',
      'D. Membuat tampilan otomatis menjadi gelap',
      'E. Menyembunyikan konten dari pengguna'
    ],
    answer: 2,
    explanation: 'Elemen semantic menjelaskan makna bagian halaman, bukan hanya tampilannya. Ini membantu mesin pencari memahami isi dan membantu screen reader saat membaca halaman.'
  },
  {
    id: 2,
    level: 'C2 - Memahami',
    modul: 'Modul 4',
    question: 'Properti CSS apa yang mengaktifkan Flexbox pada sebuah elemen container?',
    options: [
      'A. text-align: center',
      'B. position: absolute',
      'C. float: left',
      'D. display: flex',
      'E. overflow: hidden'
    ],
    answer: 3,
    explanation: 'display: flex mengaktifkan Flexbox pada container. Setelah itu anak-anaknya disusun dengan flex-direction, justify-content, align-items, dan properti lainnya.'
  },
  {
    id: 3,
    level: 'C2 - Memahami',
    modul: 'Modul 4',
    question: 'Properti justify-content pada Flexbox digunakan untuk.',
    options: [
      'A. Mengatur warna latar container',
      'B. Mengatur ukuran tinggi container',
      'C. Mengatur ketebalan garis bawah',
      'D. Mengatur arah bacaan teks',
      'E. Menyusun elemen pada sumbu utama, misalnya center atau space-between'
    ],
    answer: 4,
    explanation: 'justify-content mengatur penyusunan elemen sepanjang sumbu utama, yaitu flex-start, center, flex-end, space-between, dan space-around.'
  },
  {
    id: 4,
    level: 'C2 - Memahami',
    modul: 'Modul 4',
    question: 'Google AI Studio adalah.',
    options: [
      'A. Tool gratis dari Google untuk memakai model AI Gemini dalam membuat dan memperbaiki kode',
      'B. Aplikasi web yang khusus untuk membuat gambar',
      'C. Extension browser untuk memblokir iklan',
      'D. Layanan tempat menyimpan video',
      'E. Program pengolah teks bawaan Windows'
    ],
    answer: 0,
    explanation: 'Google AI Studio di aistudio.google.com adalah tool gratis dari Google yang memakai model Gemini untuk membantu menulis HTML, CSS, JavaScript, dan komponen React dari deskripsi teks.'
  },
  {
    id: 5,
    level: 'C2 - Memahami',
    modul: 'Modul 4',
    question: 'Apa fungsi elemen nav dalam halaman web?',
    options: [
      'A. Menampilkan gambar utama',
      'B. Menyediakan area navigasi dan menu untuk berpindah antar bagian halaman',
      'C. Menyimpan data pengguna di server',
      'D. Mengatur ukuran font halaman',
      'E. Menjalankan animasi otomatis'
    ],
    answer: 1,
    explanation: 'Elemen nav menandai bagian halaman yang berisi tautan navigasi. Pemakaiannya membantu pengguna dan pembaca layar memahami arah halaman tersebut.'
  },
  {
    id: 6,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Sebuah halaman ingin tiga tombol berjejer dengan jarak sama dari kiri ke kanan. Properti Flexbox yang paling tepat adalah.',
    options: [
      'A. flex-direction: column',
      'B. align-items: stretch',
      'C. justify-content: space-between',
      'D. flex-wrap: nowrap',
      'E. gap: 0'
    ],
    answer: 2,
    explanation: 'justify-content: space-between menaruh elemen pertama di kiri dan elemen terakhir di kanan, sehingga ruang tersisa terbagi rata di antaranya.'
  },
  {
    id: 7,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Sebuah container ingin menampilkan lima kartu yang otomatis turun ke baris berikutnya. Properti yang tepat adalah.',
    options: [
      'A. justify-content: flex-end',
      'B. flex-wrap: nowrap',
      'C. flex-direction: row-reverse',
      'D. flex-wrap: wrap',
      'E. position: fixed'
    ],
    answer: 3,
    explanation: 'flex-wrap: wrap membuat elemen flex turun ke baris berikutnya bila tidak muat dalam satu baris. Nilai bawaannya adalah nowrap.'
  },
  {
    id: 8,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Untuk menyusun menu navigasi ke atas dan ke bawah, nilai flex-direction yang benar adalah.',
    options: [
      'A. row',
      'B. row-reverse',
      'C. stretch',
      'D. space-between',
      'E. column'
    ],
    answer: 4,
    explanation: 'flex-direction: column menyusun elemen secara vertikal dari atas ke bawah, sedangkan row menyusunnya mendatar dari kiri ke kanan.'
  },
  {
    id: 9,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Agar pilihan dark mode tetap aktif setelah halaman dimuat ulang, hal yang perlu dilakukan adalah.',
    options: [
      'A. Menyimpan status tema di localStorage lalu membacanya saat halaman dibuka',
      'B. Menulis status tema di dalam nama file gambar',
      'C. Mengganti seluruh isi halaman menjadi gelap',
      'D. Menonaktifkan semua tombol di halaman',
      'E. Meminta pengguna mengetik ulang tema setiap kali membuka'
    ],
    answer: 0,
    explanation: 'Status tema perlu disimpan di localStorage supaya tetap tersedia setelah reload. Saat halaman dibuka, nilai itu dibaca dan diterapkan ke elemen body atau root.'
  },
  {
    id: 10,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Menurut modul, langkah awal memakai Google AI Studio adalah.',
    options: [
      'A. Menginstal aplikasi dari toko aplikasi',
      'B. Membuka aistudio.google.com di browser lalu login dengan akun Google',
      'C. Membuat server sendiri di sekolah',
      'D. Mengunduh file berukuran besar',
      'E. Menjalankan perintah di terminal Windows'
    ],
    answer: 1,
    explanation: 'Cukup buka aistudio.google.com dan login memakai akun Google, lalu mulai menulis prompt sesuai kebutuhan.'
  },
  {
    id: 11,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Properti align-items pada Flexbox berguna untuk.',
    options: [
      'A. Mengubah tag HTML menjadi elemen lain',
      'B. Mengatur jumlah kolom pada layout grid',
      'C. Mengatur penyusunan elemen pada sumbu silang, misalnya center atau stretch',
      'D. Mengatur kecepatan animasi halaman',
      'E. Menghapus semua margin pada elemen'
    ],
    answer: 2,
    explanation: 'align-items mengatur penyusunan pada sumbu silang, yaitu arah yang tegak lurus terhadap sumbu utama.'
  },
  {
    id: 12,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Menurut modul, Flexbox dirancang untuk.',
    options: [
      'A. Layout dua dimensi seperti baris dan kolom sekaligus',
      'B. Menjalankan program di dalam browser',
      'C. Menyimpan data di dalam database',
      'D. Layout satu dimensi, yaitu mendatar atau tegak lurus',
      'E. Mengubah warna teks otomatis'
    ],
    answer: 3,
    explanation: 'Flexbox menangani satu arah saja, yaitu mendatar atau vertikal. Untuk dua dimensi, modul mengarahkan memakai CSS Grid.'
  },
  {
    id: 13,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Apa gunanya atribut lang pada elemen html?',
    options: [
      'A. Menyembunyikan halaman dari mesin pencari',
      'B. Mengatur ukuran huruf pada halaman',
      'C. Memberi warna latar halaman',
      'D. Membuat halaman otomatis menjadi responsif',
      'E. Menentukan bahasa isi halaman agar dapat dibaca dengan benar'
    ],
    answer: 4,
    explanation: 'Atribut lang memberi tahu browser dan pembaca layar bahwa isi halaman memakai bahasa Indonesia sehingga pembacaan lebih tepat.'
  },
  {
    id: 14,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Menurut checklist testing pada modul, pengujian responsif dilakukan dengan.',
    options: [
      'A. Mengubah ukuran browser dari 320px ke 1920px memakai DevTools',
      'B. Mengganti nama folder proyek',
      'C. Menghapus semua gambar di halaman',
      'D. Menjalankan program di terminal',
      'E. Mengganti tema warna browser'
    ],
    answer: 0,
    explanation: 'Pengujian responsif dilakukan dengan mengubah ukuran tampilan browser lewat DevTools lalu mengeceknya di ponsel, tablet, dan desktop.'
  },
  {
    id: 15,
    level: 'C3 - Menerapkan',
    modul: 'Modul 4',
    question: 'Apa gunanya prompt yang spesifik ketika meminta bantuan AI membuat kode?',
    options: [
      'A. Membuat jawaban AI menjadi lebih pendek',
      'B. Membantu AI memahami kebutuhan dan menghasilkan kode yang lebih tepat',
      'C. Menghemat kuota internet',
      'D. Membuat program berjalan tanpa internet',
      'E. Mengganti peran AI menjadi peramban'
    ],
    answer: 1,
    explanation: 'Prompt yang spesifik menjelaskan hasil, warna, jumlah bagian, dan pustaka yang dipakai sehingga hasil AI lebih sesuai kebutuhan.'
  },
  {
    id: 16,
    level: 'C4 - Menganalisis',
    modul: 'Modul 4',
    question: 'Menu navigasi mendatar berubah menjadi susunan vertikal di layar ponsel. Pendekatan CSS yang paling tepat adalah.',
    options: [
      'A. Mengganti seluruh halaman dengan gambar',
      'B. Menambah lebih banyak teks pada setiap menu',
      'C. Mengubah flex-direction menjadi column pada layar kecil',
      'D. Menghapus semua aturan media query',
      'E. Menambahkan animasi putar pada menu'
    ],
    answer: 2,
    explanation: 'Media query memungkinkan aturan berbeda untuk ukuran layar tertentu. Pada layar kecil, flex-direction diubah menjadi column agar menu mudah dibaca.'
  },
  {
    id: 17,
    level: 'C4 - Menganalisis',
    modul: 'Modul 4',
    question: 'Seorang siswa membuat halaman dengan banyak elemen div tanpa heading atau section. Apa risiko utamanya bagi pengguna?',
    options: [
      'A. Halaman menjadi tidak responsif',
      'B. Kode CSS menjadi tidak valid',
      'C. Warna teks otomatis berubah',
      'D. Struktur halaman sulit dipahami pembaca layar dan mesin pencari',
      'E. Halaman gagal dibuka di peramban apa pun'
    ],
    answer: 3,
    explanation: 'Tanpa elemen semantic, makna tiap bagian halaman hilang sehingga pembaca layar tidak tahu bagian mana yang navigasi, konten utama, atau footer.'
  },
  {
    id: 18,
    level: 'C4 - Menganalisis',
    modul: 'Modul 4',
    question: 'Mengapa hasil kode dari AI perlu diperiksa dan diuji sebelum dipakai?',
    options: [
      'A. Karena kode dari AI selalu memiliki kesalahan sintaks',
      'B. Karena kode dari AI tidak bisa disimpan',
      'C. Karena kode dari AI hanya berjalan di satu peramban',
      'D. Karena kode dari AI tidak boleh berisi komentar',
      'E. Karena AI dapat membuat asumsi yang tidak sesuai kebutuhan dan kode tetap perlu diuji'
    ],
    answer: 4,
    explanation: 'AI membantu mempercepat menulis kode, tetapi hasilnya dapat keliru atau tidak sesuai konteks. Kode perlu ditinjau dan diuji.'
  },
  {
    id: 19,
    level: 'C4 - Menganalisis',
    modul: 'Modul 4',
    question: 'Dapatkan sebuah website melambat ketika dibuka di jaringan seluler. Apa yang paling mungkin perlu diperiksa lebih dahulu?',
    options: [
      'A. Ukuran berkas gambar dan aset yang terlalu besar',
      'B. Warna tombol pada halaman',
      'C. Jumlah karakter pada teks footer',
      'D. Nama folder proyek',
      'E. Jumlah baris pada kode CSS'
    ],
    answer: 0,
    explanation: 'Aset besar seperti gambar resolusi tinggi paling sering menjadi penyebab halaman lambat di jaringan seluler. Mengompres aset akan membantu.'
  },
  {
    id: 20,
    level: 'C4 - Menganalisis',
    modul: 'Modul 4',
    question: 'Apa yang dimaksud dengan responsive web design?',
    options: [
      'A. Website yang hanya bisa dibuka di satu ukuran layar',
      'B. Website yang menyesuaikan tampilannya sesuai ukuran dan jenis layar pengguna',
      'C. Website yang selalu menampilkan iklan di layar atas',
      'D. Website yang hanya dapat dibuka dengan koneksi wifi',
      'E. Website yang warnanya berubah otomatis setiap detik'
    ],
    answer: 1,
    explanation: 'Responsive web design membuat satu situs tetap nyaman dibaca dari layar 320px sampai layar besar dengan bantuan media query dan tata letak fleksibel.'
  },
  {
    id: 21,
    level: 'C5 - Menilai',
    modul: 'Modul 4',
    question: 'Sebuah website sudah selesai ditulis tetapi belum diuji sama sekali. Bagaimana penilaian yang tepat?',
    options: [
      'A. Website dianggap selesai karena kodenya sudah ditulis',
      'B. Website otomatis menjadi responsif setelah selesai ditulis',
      'C. Website belum bisa dianggap selesai karena wajib diuji pada beberapa peramban dan ukuran layar',
      'D. Website tidak perlu diperiksa karena peramban sudah pasti benar',
      'E. Website cukup diuji di satu perangkat yang paling baru'
    ],
    answer: 2,
    explanation: 'Kode yang selesai ditulis belum tentu benar. Checklist pengujian pada modul meminta pengecekan tampilan, responsivitas, dan interaksi.'
  },
  {
    id: 22,
    level: 'C5 - Menilai',
    modul: 'Modul 4',
    question: 'Bagaimana penilaian yang tepat tentang penggunaan AI untuk membuat kode dalam tugas sekolah?',
    options: [
      'A. AI selalu menghasilkan kode yang benar tanpa perlu diperiksa',
      'B. AI hanya berguna untuk membuat gambar',
      'C. AI membuat semua pekerjaan students tidak perlu belajar dasar pemrograman',
      'D. AI dapat membantu membuat dan memperbaiki kode, tetapi hasil tetap harus dipahami dan diuji sendiri',
      'E. AI tidak boleh dipakai karena selalu merusak kode'
    ],
    answer: 3,
    explanation: 'AI mempercepat proses menulis kode, tetapi siswa tetap harus memahami, memeriksa, dan menguji hasilnya agar sesuai tugas.'
  },
  {
    id: 23,
    level: 'C5 - Menilai',
    modul: 'Modul 4',
    question: 'Manakah yang paling tepat menggambarkan alur menerbitkan website sekolah dari kode lokal hingga dapat diakses publik?',
    options: [
      'A. Menyalin kode ke dalam dokumen pengantar',
      'B. Cukup mengganti ekstensi berkas menjadi html lalu menunggu situs langsung daring',
      'C. Mengirim berkas melalui pesan pribadi kepada guru',
      'D. Mencetak kode pada kertas lalu difoto',
      'E. Simpan kode ke GitHub, hubungkan repositori dengan layanan hosting, lalu deploy agar situs memiliki alamat internet'
    ],
    answer: 4,
    explanation: 'Kode disimpan di repositori seperti GitHub lalu dihubungkan ke layanan hosting seperti Vercel agar situs dapat diakses lewat alamat internet.'
  },
  {
    id: 24,
    level: 'C5 - Menilai',
    modul: 'Modul 4',
    question: 'Mengapa flexbox lebih mudah dibaca dan dipakai daripada menyejajarkan elemen secara manual dengan margin?',
    options: [
      'A. Karena flexbox menyediakan cara menyusun, mendistribusikan, dan menyejajarkan elemen dalam satu arah tanpa banyak perhitungan manual',
      'B. Karena flexbox membuat halaman tidak responsif',
      'C. Karena flexbox menghapus semua kebutuhan CSS',
      'D. Karena flexbox hanya bekerja pada satu elemen',
      'E. Karena flexbox membuat elemen hilang dari halaman'
    ],
    answer: 0,
    explanation: 'Flexbox menyediakan properti siap pakai untuk susunan, distribusi ruang, dan perataan. Pengembang tidak perlu menghitung margin secara manual.'
  },
  {
    id: 25,
    level: 'C5 - Menilai',
    modul: 'Modul 4',
    question: 'Manakah yang paling tepat menilai sebuah website yang sudah responsif dan memakai semantic HTML?',
    options: [
      'A. Website tersebut otomatis menjadi cepat dan bebas dari kesalahan',
      'B. Website tersebut lebih mudah dibaca, lebih ramah pembaca layar, dan lebih mudah dioptimasi, tetapi tetap perlu diuji dan dipelihara',
      'C. Website tersebut tidak lagi memerlukan JavaScript',
      'D. Website tersebut hanya dapat dibuka di satu jenis perangkat',
      'E. Website tersebut tidak perlu diperbarui selamanya'
    ],
    answer: 1,
    explanation: 'Semantic HTML dan tata letak responsif adalah fondasi yang baik, tetapi kualitas situs tetap bergantung pada pengujian, performa, dan pemeliharaan berkelanjutan.'
  }
];
