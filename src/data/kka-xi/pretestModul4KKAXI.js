export default [
  {
    id: 1,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Sebuah website berita memuat beberapa artikel yang masing-masing bisa dibaca dan dibagikan secara mandiri. Elemen HTML semantik paling tepat untuk membungkus setiap artikel tersebut adalah.',
    options: [
      'A. <div>',
      'B. <aside>',
      'C. <article>',
      'D. <span>',
      'E. <main>'
    ],
    answer: 2,
    explanation: 'Elemen article menandai konten yang berdiri sendiri dan bisa dikirim ulang sendiri, misalnya artikel berita atau tulisan blog. Elemen div hanya container tanpa makna.'
  },
  {
    id: 2,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Menurut modul, fungsi elemen <main> pada sebuah halaman web adalah.',
    options: [
      'A. Menandai konten utama halaman dan hanya boleh ada satu elemen <main> dalam satu halaman',
      'B. Menyimpan daftar tautan navigasi',
      'C. Menampilkan informasi di bagian bawah halaman',
      'D. Menyisipkan video atau audio',
      'E. Mendefinisikan aturan tampilan di dalam halaman'
    ],
    answer: 0,
    explanation: 'Elemen main menandai konten utama halaman sehingga pembaca layar dapat langsung melompat ke bagian itu. Elemen ini hanya boleh muncul satu kali per halaman.'
  },
  {
    id: 3,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Tag HTML yang dipakai untuk menyatakan tanggal atau waktu dalam format yang bisa dibaca mesin adalah.',
    options: [
      'A. <date>',
      'B. <clock>',
      'C. <post>',
      'D. <time>',
      'E. <moment>'
    ],
    answer: 3,
    explanation: 'Elemen time menyatakan tanggal atau waktu, misalnya <time datetime="2026-08-17">17 Agustus 2026</time>, sehingga mesin pencari memahami kapan konten dibuat.'
  },
  {
    id: 4,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Menurut modul, alasan utama memilih elemen semantik seperti <section> dan <article> alih-alih hanya memakai <div> adalah.',
    options: [
      'A. Supaya halaman selesai dimuat lebih cepat',
      'B. Supaya makna tiap bagian dipahami oleh mesin pencari dan pembaca layar',
      'C. Supaya tidak perlu menulis aturan CSS sama sekali',
      'D. Supaya ukuran file menjadi lebih kecil',
      'E. Supaya browser otomatis memakai tampilan gelap'
    ],
    answer: 1,
    explanation: 'Elemen div bersifat netral tanpa makna, sedangkan elemen semantik menjelaskan fungsi bagian halaman. Makna itu membantu mesin pencari memahami struktur halaman dan membantu pembaca layar menavigasinya.'
  },
  {
    id: 5,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Menurut modul, sistem tata letak yang cocok untuk mengatur baris dan kolom sekaligus dalam dua dimensi adalah.',
    options: [
      'A. Flexbox',
      'B. Penempatan absolut dengan position',
      'C. Properti float',
      'D. Tabel HTML',
      'E. CSS Grid'
    ],
    answer: 4,
    explanation: 'CSS Grid mengendalikan baris dan kolom sekaligus, cocok untuk layout halaman, dasbor, galeri, dan portofolio. Flexbox hanya menangani satu dimensi.'
  },
  {
    id: 6,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Aturan CSS berikut dipakai pada sebuah galeri kartu: .portfolio { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); } Pengaruh dari aturan grid-template-columns tersebut adalah.',
    options: [
      'A. Jumlah kolom menyesuaikan sendiri sesuai lebar layar, tiap kolom minimal 280px dan sisa ruang dibagi rata',
      'B. Selalu tepat tiga kolom dengan lebar tetap 280px',
      'C. Semua kartu selalu ditampilkan dalam satu baris tanpa berpindah',
      'D. Tinggi setiap baris grid dikunci pada nilai tertentu',
      'E. Jarak antar kolom otomatis dinonaktifkan'
    ],
    answer: 0,
    explanation: 'Kombinasi auto-fit dengan minmax membuat jumlah kolom menyesuaikan lebar container, selama tiap kolom masih muat minimal 280px.'
  },
  {
    id: 7,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Fungsi sebuah file .gitignore di dalam folder project adalah.',
    options: [
      'A. Menyimpan seluruh riwayat kode ke GitHub',
      'B. Mengganti nama file secara otomatis saat deploy',
      'C. Menghapus file dari computer setiap kali program dijalankan',
      'D. Mendaftarkan file atau folder yang tidak boleh ikut di-push, misalnya .env dan node_modules/',
      'E. Menyembunyikan file agar tidak bisa dibuka siapa pun'
    ],
    answer: 3,
    explanation: '.gitignore berisi daftar pola file yang diabaikan Git, seperti .env, node_modules/, dan dist/. Dengan begitu file rahasia tidak ikut terunggah ke repository.'
  },
  {
    id: 8,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Menurut modul, GitHub berfungsi sebagai.',
    options: [
      'A. Layanan hosting yang menerbitkan website beserta sertifikat HTTPS-nya',
      'B. Editor kode daring yang dipakai langsung di browser',
      'C. Tempat menyimpan kode dan riwayat perubahannya secara online',
      'D. Server basis data untuk menyimpan data pengguna',
      'E. Alat untuk menguji kecepatan dan aksesibilitas website'
    ],
    answer: 2,
    explanation: 'GitHub menyimpan kode dan riwayat perubahannya (version control). Penyipan website ke internet dilakukan oleh layanan hosting seperti Vercel.'
  },
  {
    id: 9,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Setelah repository GitHub sudah dihubungkan ke Vercel, setiap kali kode di-push ke branch main, yang terjadi adalah.',
    options: [
      'A. Vercel menghapus versi website sebelumnya',
      'B. GitHub otomatis menutup repository tersebut',
      'C. Vercel menunggu persetujuan manual sebelum menerbitkannya',
      'D. Kode hanya tersimpan di komputer lokal sampai disalin manual',
      'E. Vercel otomatis membangun dan menerbitkan versi terbaru website'
    ],
    answer: 4,
    explanation: 'Vercel memiliki fitur auto-deploy, sehingga setiap push ke branch main langsung memicu proses build dan deploy baru tanpa perlu aksi manual.'
  },
  {
    id: 10,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 4',
    question: 'Dalam alur kerja Git, urutan perintah yang benar setelah selesai mengubah kode di folder project adalah.',
    options: [
      'A. git push, lalu git init, lalu git commit',
      'B. git add ., lalu git commit, lalu git push',
      'C. git init, lalu git push, lalu git add .',
      'D. git remote add, lalu git commit, lalu git init',
      'E. git add ., lalu git push, lalu git commit'
    ],
    answer: 1,
    explanation: 'git add . menandai file yang berubah, git commit menyimpan snapshot dengan pesan, dan git push mengunggah snapshot itu ke repository online.'
  },
  {
    id: 11,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Perhatikan kode CSS berikut: .kartu { background: #3b82f6; } .kartu { background: #10b981; } Warna latar yang benar-benar tampil pada elemen ber-class kartu adalah.',
    options: [
      'A. Warna biru, karena aturan yang ditulis lebih dulu selalu menang',
      'B. Warna hijau, karena selector .kartu memiliki tingkat prioritas lebih tinggi',
      'C. Warna hijau, karena kedua aturan memiliki prioritas sama dan aturan terakhir yang menang',
      'D. Kedua warna muncul sekaligus secara bertumpuk',
      'E. Warna biru, karena warna biru lebih gelap sehingga selalu lebih kuat'
    ],
    answer: 2,
    explanation: 'Kedua aturan memakai selector yang sama sehingga tingkat prioritasnya sama. Pada kondisi itu, aturan yang ditulis paling akhir yang dipakai.'
  },
  {
    id: 12,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Diberikan kode JavaScript berikut: const angka = [10, 15, 20, 25, 30]; const hasil = angka.filter(n => n % 2 === 0); Nilai variabel hasil adalah.',
    options: [
      'A. [10, 20, 30]',
      'B. [15, 25]',
      'C. [20, 30]',
      'D. 60',
      'E. [10, 15, 20, 25, 30]'
    ],
    answer: 0,
    explanation: 'Method filter menyisakan hanya elemen yang kondisinya benar. Angka 10, 20, dan 30 habis dibagi 2, sedangkan 15 dan 25 tidak.'
  },
  {
    id: 13,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Perhatikan kode berikut: const res = await fetch("https://contoh.id/api/siswa"); const data = await res.json(); according to modul, arti dari await res.json() adalah.',
    options: [
      'A. Mengirim data dari browser menuju server',
      'B. Menghapus respons yang diterima dari server',
      'C. Mengubah respons server menjadi teks biasa tanpa memprosesnya',
      'D. Menunggu respons server selesai diterima lalu mengubahnya menjadi objek JavaScript',
      'E. Menjalankan animasi pada halaman sambil menunggu server'
    ],
    answer: 3,
    explanation: 'Method json() mengubah body respons server yang berupa teks JSON menjadi objek JavaScript. Karena prosesnya asynchronous, perintah ini perlu di-await.'
  },
  {
    id: 14,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Siswa menyimpan daftar tugas di localStorage dengan kode: localStorage.setItem("tugas", JSON.stringify(["Belajar", "Coding"])); const tugas = JSON.parse(localStorage.getItem("tugas")); Bentuk nilai variabel tugas setelah kode itu dijalankan adalah.',
    options: [
      'A. Objek { "0": "Belajar", "1": "Coding" } karena JSON.stringify mengubah array menjadi objek',
      'B. Objek berisi dua pasangan kunci dan nilai, sehingga perulangan forEach tidak bisa dipakai',
      'C. Pesan error permanen karena localStorage tidak boleh menyimpan array',
      'D. Teks mentah ["Belajar", "Coding"] tanpa tanda kurung siku sebagai array',
      'E. Array ["Belajar", "Coding"] karena JSON.stringify mengubah array menjadi teks lalu JSON.parse mengubah teks itu kembali menjadi array'
    ],
    answer: 4,
    explanation: 'localStorage hanya menyimpan teks. JSON.stringify mengubah array menjadi teks, dan JSON.parse mengubah teks JSON itu kembali menjadi array JavaScript.'
  },
  {
    id: 15,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Diberikan kode CSS berikut: .hero { display: flex; flex-direction: row; } @media (max-width: 768px) { .hero { flex-direction: column; } } Tampilan section hero pada layar seluler selebar 480 piksel adalah.',
    options: [
      'A. Tetap mendatar karena aturan di luar media query tidak bisa ditimpa',
      'B. Teks dan gambar tersusun ke bawah karena aturan di dalam media query berlaku pada lebar di bawah 768px dan ditulis setelah aturan sebelumnya',
      'C. Gambar otomatis disembunyikan karena media query tidak bisa menangani gambar',
      'D. Tampilan tidak berubah karena media query hanya berfungsi untuk mengganti warna',
      'E. Halaman otomatis dialihkan ke versi situs seluler yang berbeda'
    ],
    answer: 1,
    explanation: 'Media query max-width: 768px berlaku pada layar selebar 480px. Aturan di dalamnya ditulis setelah aturan awal, sehingga flex-direction berubah dari row menjadi column.'
  },
  {
    id: 16,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Sebuah halaman memiliki lima elemen <h1>, satu untuk setiap section. Berdasarkan checklist pengujian pada modul, perbaikan yang tepat adalah.',
    options: [
      'A. Menambah satu elemen <h1> lagi di dalam setiap section',
      'B. Mengganti seluruh elemen <h1> dengan tag <b>',
      'C. Menjadikan hanya satu <h1> sebagai judul utama halaman dan menurunkan heading section lain ke <h2> atau <h3>',
      'D. Menghapus semua heading karena heading membuat halaman lambat',
      'E. Mengubah seluruh elemen <h1> menjadi paragraf biasa'
    ],
    answer: 2,
    explanation: 'Hierarki heading yang benar hanya memiliki satu <h1> sebagai judul utama halaman. Bagian berikutnya memakai <h2> atau <h3> sesuai tingkatnya.'
  },
  {
    id: 17,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Repository sudah dibuat di GitHub dan kode sudah ada di folder lokal. Perintah Git yang menghubungkan folder lokal tersebut ke repository itu adalah.',
    options: [
      'A. git remote add origin https://github.com/username/portofolio.git',
      'B. git upload https://github.com/username/portofolio.git',
      'C. git push https://github.com/username/portofolio.git',
      'D. git connect https://github.com/username/portofolio.git',
      'E. git save https://github.com/username/portofolio.git'
    ],
    answer: 0,
    explanation: 'git remote add origin menyimpan alamat repository sebagai remote bernama origin, lalu kode dapat diunggah dengan git push -u origin main.'
  },
  {
    id: 18,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Saat mengimpor project HTML statis ke Vercel, pengaturan yang sesuai dengan modul adalah.',
    options: [
      'A. Framework: Next.js dan Output Directory: dist',
      'B. Framework: Create React App dan Output Directory: src',
      'C. Framework: Vite dan Output Directory: folder assets',
      'D. Framework: Other dan Output Directory: . (folder utama project)',
      'E. Framework: Nuxt dan Output Directory: out'
    ],
    answer: 3,
    explanation: 'Untuk project HTML statis, Vercel tidak mengenali framework tertentu sehingga dipilih Other, dan folder keluaran diambil dari folder utama project.'
  },
  {
    id: 19,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Sebuah proyek React memakai React Router. Mengapa modul menyatakan bahwa file vercel.json diperlukan pada proyek seperti ini?',
    options: [
      'A. Agar file JavaScript hasil build menjadi lebih kecil',
      'B. Agar permintaan rute seperti /kontak diarahkan ke index.html sehingga tidak terjadi error 404 saat halaman di-refresh',
      'C. Agar website otomatis memakai koneksi HTTPS',
      'D. Agar kode otomatis di-push ke GitHub setiap kali diubah',
      'E. Agar website lebih cepat dibuka di jaringan seluler'
    ],
    answer: 1,
    explanation: 'Aplikasi satu halaman seperti React menulis rute di sisi browser, sedangkan server hanya mengenal file. Aturan rewrites di vercel.json mengarahkan semua permintaan ke index.html.'
  },
  {
    id: 20,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 4',
    question: 'Agar pesan error JavaScript dapat diamati ketika sebuah program diuji di browser, langkah yang benar adalah.',
    options: [
      'A. Menutup DevTools sebelum menjalankan kode',
      'B. Menghapus seluruh isi file HTML lalu mengetik ulang',
      'C. Menjalankan program di Command Prompt tanpa membuka browser',
      'D. Memilih semua kode lalu menghapusnya agar error ikut terhapus',
      'E. Membuka DevTools (F12) lalu melihat tab Console ketika kode dijalankan'
    ],
    answer: 4,
    explanation: 'Tab Console pada DevTools menampilkan pesan error dan nilai variabel saat program berjalan, sehingga sumber masalah lebih mudah ditemukan.'
  },
  {
    id: 21,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Perhatikan kode CSS berikut: .kartu { flex: 1 1 300px; } @media (max-width: 600px) { .kartu { flex: 1 1 100%; } } Dengan parent memakai display: flex dan flex-wrap: wrap, apa yang terjadi pada tiga kartu di dalam parent selebar 400 piksel?',
    options: [
      'A. Ketiga kartu tetap selebar 300px dan meluber keluar dari area parent',
      'B. Ketiga kartu tetap berada dalam satu baris karena aturan di luar media query masih berlaku',
      'C. Cada kartu memenuhi lebar baris sehingga tersusun satu per satu ke bawah',
      'D. Kartu tidak tampil karena tidak memiliki properti height',
      'E. Lebar setiap kartu menjadi 100px karena nilai 100% dibaca sebagai satuan piksel'
    ],
    answer: 2,
    explanation: 'Pada lebar 400px aturan media query aktif sehingga flex-basis tiap kartu menjadi 100% dari lebar parent. Karena tidak cukup ruang untuk dua kartu sekaligus, flex-wrap membuat tiap kartu turun ke baris berikutnya.'
  },
  {
    id: 22,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Counter pada landing page tidak pernah bertambah meskipun tombol Daftar sudah diklik. Kode JavaScript yang dipakai adalah: form.addEventListener("submit", () => { count = count + 1; counterEl.textContent = count + " orang sudah mendaftar"; }); Apa penjelasan dan perbaikannya?',
    options: [
      'A. Variabel count tidak boleh bertambah, sehingga harus diganti dengan variabel baru',
      'B. Elemen form tidak boleh dipakai bersama JavaScript',
      'C. Tombol submit harus diganti menjadi elemen <div>',
      'D. localStorage tidak boleh dipakai di dalam formulir',
      'E. Form melakukan perilaku bawaan yang memuat ulang halaman sehingga nilai kembali ke awal, dan perbaikannya menambahkan e.preventDefault() di dalam penangan submit'
    ],
    answer: 4,
    explanation: 'Tanpa e.preventDefault(), form tetap berjalan dengan perilaku bawaan browser, yaitu memuat ulang halaman dan mengulang nilai. Memanggil e.preventDefault() membatalkan perilaku itu sehingga JavaScript bisa memproses data formulir.'
  },
  {
    id: 23,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Diberikan layout CSS berikut: .layout { display: grid; grid-template-areas: "header header" "sidebar content"; grid-template-columns: 200px 1fr; } Pendekatan yang paling tepat agar layout ini tetap nyaman dibaca di layar ponsel adalah.',
    options: [
      'A. Menambah banyak elemen <div> kosong di dalam sidebar',
      'B. Menghapus seluruh aturan grid lalu menggantinya dengan tabel HTML',
      'C. Mengganti setiap area dengan gambar latar berukuran besar',
      'D. Menambahkan media query yang menyusun ulang grid-template-areas menjadi satu kolom dan mengubah grid-template-columns menjadi 1fr',
      'E. Menambahkan atribut height pada setiap area agar konten tidak saling tumpang tindih'
    ],
    answer: 3,
    explanation: 'Pendekatan mobile-first yang dipakai modul adalah mengubah susunan area dan jumlah kolom di dalam media query, sehingga sidebar dan konten turun ke bawah pada layar sempit.'
  },
  {
    id: 24,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Diberikan kode CSS berikut: :root { --bg: #ffffff; --text: #1e293b; } body.dark { --bg: #0f172a; --text: #f1f5f9; } body { background: var(--bg); color: var(--text); } Mengapa aturan background: var(--bg) tetap bekerja ketika mode gelap dinyalakan, tanpa menulis ulang warnanya?',
    options: [
      'A. Nilai variabel dihitung ulang pada elemen yang memakainya, sehingga aturan tersebut otomatis mengikuti nilai baru ketika body mendapat class dark',
      'B. Aturan body.dark hanya mengubah warna teks browser sehingga latar tidak terpengaruh',
      'C. JavaScript menulis ulang seluruh file CSS setiap kali mode gelap dinyalakan',
      'D. Variabel CSS hanya dibaca satu kali pada saat halaman pertama kali dimuat',
      'E. Mode gelap diaktifkan dengan menghapus seluruh isi elemen body'
    ],
    answer: 0,
    explanation: 'Variabel CSS yang ditulis ulang pada body.dark berlaku turun ke seluruh elemen di dalamnya. Karena background ditulis memakai var(--bg), warnanya ikut berubah tanpa perlu menulis aturan warna baru.'
  },
  {
    id: 25,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Hasil audit Lighthouse untuk sebuah landing page menunjukkan skor Performance rendah, sementara skor Accessibility sudah tinggi. Analisis dan tindakan yang paling tepat adalah.',
    options: [
      'A. Skor rendah karena Lighthouse tidak mendukung HTML semantik, sehingga mengganti <section> dengan <div> akan menaikkan skor',
      'B. Aset yang terlalu besar, terutama gambar berukuran besar, membuat halaman lambat, sehingga optimalkan ukuran aset, tambahkan lazy loading, dan perbaiki poin yang ditunjukkan Lighthouse',
      'C. Ganti seluruh gambar dengan teks agar tidak ada aset yang perlu diunduh',
      'D. Matikan semua JavaScript agar halaman tidak mungkin gagal saat dimuat',
      'E. Persingkat nama file gambar karena panjang nama memengaruhi kecepatan'
    ],
    answer: 1,
    explanation: 'Lighthouse memisahkan penilaian performa dan aksesibilitas. Skor Performance yang rendah umumnya berasal dari aset yang terlalu besar atau sumber daya yang memblokir render, dan Lighthouse memberi rekomendasi spesifik untuk memperbaikinya.'
  },
  {
    id: 26,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Seorang siswa meminta AI membuat seluruh landing page (hero, fitur, testimoni, footer) dalam satu prompt, tetapi hasilnya tidak responsif dan warnanya tidak konsisten. Tindak lanjut yang paling tepat adalah.',
    options: [
      'A. Mengulang prompt yang sama persis beberapa kali sambil berharap hasilnya berbeda',
      'B. Meminta AI membuat website yang lebih besar dalam satu prompt yang sama',
      'C. Menguji hasil di browser, lalu memberi prompt perbaikan yang spesifik untuk tiap masalah, misalnya menambahkan media query max-width 768px dan menyatukan warna memakai CSS variables',
      'D. Menyalin hasil AI langsung ke Vercel tanpa diuji karena kode dari AI selalu benar',
      'E. Menghapus seluruh hasil dan memulai website baru tanpa menguji kode yang sudah ada'
    ],
    answer: 2,
    explanation: 'Kode hasil AI harus diuji dulu di browser. Setelah masalahnya diketahui dengan jelas, prompt perbaikan bisa dibuat spesifik per masalah, sama seperti strategi prompting bertingkat pada modul.'
  },
  {
    id: 27,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Setelah domain sendiri ditambahkan di pengaturan Vercel, Vercel menampilkan dua catatan DNS, yaitu satu A record dan satu CNAME. Mengapa data itu harus disalin ke panel registrar?',
    options: [
      'A. Agar nama domain diarahkan ke server Vercel, dan setelah propagasi DNS selesai sertifikat SSL otomatis aktif',
      'B. Agar kode di GitHub ikut terkirim ke registrar',
      'C. Agar biaya hosting di Vercel menjadi gratis selamanya',
      'D. Agar website tidak bisa lagi diakses melalui domain bawaan Vercel',
      'E. Agar GitHub otomatis membuat sertifikat SSL untuk domain tersebut'
    ],
    answer: 0,
    explanation: 'A record dan CNAME memberi tahu sistem DNS server mana yang menangani nama domain tersebut, sehingga nama itu diarahkan ke server Vercel. Setelah propagasi selesai, Vercel memasang sertifikat SSL secara otomatis.'
  },
  {
    id: 28,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Kode seorang siswa sudah di-push ke GitHub dan Vercel sudah berhasil menerbitkannya, tetapi belum pernah diuji di layar selebar 320px dan belum ada satu pun interaksi yang dicoba. Penilaian yang paling tepat adalah.',
    options: [
      'A. Website sudah pasti benar karena proses deploy Vercel berhasil',
      'B. Website cukup diuji di satu perangkat terbaru saja karena perangkat lama sudah usang',
      'C. Website dianggap selesai karena kodenya sudah tersimpan di GitHub',
      'D. Deploy yang berhasil tidak menjamin tampilan dan interaksi benar, sehingga pengujian responsif serta interaktif di berbagai ukuran layar dan peramban tetap wajib',
      'E. Masalah responsif hanya akan muncul di komputer desktop, bukan di ponsel'
    ],
    answer: 3,
    explanation: 'Deploy hanya berarti kode berhasil diterbitkan, bukan berarti website sudah benar. Checklist testing pada modul tetap meminta pemeriksaan tampilan, responsivitas, interaksi, performa, SEO, dan tautan.'
  },
  {
    id: 29,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Perhatikan aturan CSS berikut: .navbar { display: flex; justify-content: space-between; gap: 2rem; } Nilai justify-content dan gap bekerja secara bersamaan. Manakah deskripsi yang tepat?',
    options: [
      'A. gap menggantikan fungsi space-between sehingga ruang tersisa diabaikan',
      'B. gap menyediakan jarak minimal 2rem antar item, sedangkan space-between tetap membagi ruang tersisa, sehingga jarak akhir bisa lebih lebar dari 2rem',
      'C. Semua item akan saling menempel di tengah container',
      'D. flex-direction otomatis berubah menjadi column karena ada gap',
      'E. justify-content otomatis dinonaktifkan ketika gap digunakan'
    ],
    answer: 1,
    explanation: 'Kedua properti itu berbeda tugas. gap memberi jarak minimal antar item, sedangkan space-between menambahkan pembagian ruang tersisa, sehingga jarak akhir bisa melebihi 2rem.'
  },
  {
    id: 30,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 4',
    question: 'Seorang siswa memakai AI untuk membuat landing page. Semua bagian terlihat sesuai permintaan, tetapi belum pernah diuji di browser dan satu tombol tidak berfungsi ketika diklik. Penilaian yang paling tepat adalah.',
    options: [
      'A. Kode sudah pasti benar karena diminta langsung oleh AI',
      'B. Tombol yang tidak berfungsi membuktikan bahwa AI tidak boleh dipakai untuk membuat kode',
      'C. Masalah pada satu tombol tidak penting selama halaman secara visual sudah tampil',
      'D. Menurut modul, AI hanya boleh dipakai untuk mengatur tampilan, bukan untuk logika',
      'E. Hasil AI tetap harus diuji dan diperbaiki sendiri karena AI dapat membuat asumsi yang tidak sesuai dengan kebutuhan sebenarnya'
    ],
    answer: 4,
    explanation: 'AI mempercepat proses menulis kode, tetapi hasilnya bisa keliru atau tidak sesuai konteks. Karena itu kode harus dipahami, diuji di browser, dan diperbaiki sendiri oleh siswa.'
  }
];
