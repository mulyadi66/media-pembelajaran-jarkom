export default [
  {
    id: 1,
    level: 'C2 - Memahami',
    modul: 'Modul 3',
    question: 'Dalam pemrograman berorientasi objek, class diibaratkan sebagai.',
    options: [
      'A. Objek nyata yang sudah jadi',
      'B. Cetakan atau rancangan untuk membuat objek',
      'C. Fungsi yang mengembalikan nilai',
      'D. Variabel yang menyimpan data',
      'E. Perpustakaan kode yang dapat dipakai ulang'
    ],
    answer: 1,
    explanation: 'Class adalah cetakan atau rancangan (blueprint) yang mendefinisikan sifat dan perilaku. Objek adalah wujud nyata yang dibuat dari class tersebut.'
  },
  {
    id: 2,
    level: 'C2 - Memahami',
    modul: 'Modul 3',
    question: 'Metode khusus yang otomatis dipanggil ketika sebuah objek dibuat dalam Python bernama.',
    options: [
      'A. perkenalan',
      'B. rata_rata',
      'C. __init__',
      'D. main',
      'E. tambah_nilai'
    ],
    answer: 2,
    explanation: '__init__ adalah constructor, yaitu metode khusus yang dipanggil otomatis saat objek dibuat. Metode ini biasanya digunakan untuk menginisialisasi atribut instance.'
  },
  {
    id: 3,
    level: 'C2 - Memahami',
    modul: 'Modul 3',
    question: 'Manakah yang BUKAN termasuk istilah penting dalam pemrograman berorientasi objek?',
    options: [
      'A. self',
      'B. Atribut instance',
      'C. Atribut class',
      'D. Bridge',
      'E. Constructor'
    ],
    answer: 3,
    explanation: 'Istilah penting OOP meliputi self, atribut instance, atribut class, dan constructor. Bridge adalah istilah jaringan, bukan pemrograman berorientasi objek.'
  },
  {
    id: 4,
    level: 'C2 - Memahami',
    modul: 'Modul 3',
    question: 'Apa yang dimaksud dengan self pada pemrograman berorientasi objek?',
    options: [
      'A. Atribut class yang dibagi ke semua objek',
      'B. Fungsi untuk mengimpor modul',
      'C. Nama file program',
      'D. Tipe data dari sebuah variabel',
      'E. Referensi ke objek itu sendiri'
    ],
    answer: 4,
    explanation: 'self adalah referensi ke objek itu sendiri dan selalu menjadi parameter pertama pada setiap metode instance. self.nama adalah contoh atribut instance.'
  },
  {
    id: 5,
    level: 'C2 - Memahami',
    modul: 'Modul 3',
    question: 'Apa yang dimaksud dengan inheritance dalam pemrograman berorientasi objek?',
    options: [
      'A. Sifat class anak yang mewarisi sifat dan metode dari class induk',
      'B. Penyimpanan data di dalam database',
      'C. Pembagian program menjadi beberapa berkas',
      'D. Penjadwalan proses pada sistem operasi',
      'E. Pengurutan data dari besar ke kecil'
    ],
    answer: 0,
    explanation: 'Inheritance adalah mekanisme agar class anak mewarisi sifat dan metode dari class induk, sehingga kode tidak perlu ditulis ulang.'
  },
  {
    id: 6,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Perbedaan utama antara atribut instance dan atribut class adalah.',
    options: [
      'A. Atribut instance hanya bisa berisi angka, sedangkan atribut class bisa berisi teks',
      'B. Atribut instance nilai-nya berbeda pada setiap objek, sedangkan atribut class dibagi ke semua objek dari class yang sama',
      'C. Atribut instance hanya berlaku di dalam constructor, sedangkan atribut class berlaku setelahnya',
      'D. Keduanya tidak memiliki perbedaan apa pun',
      'E. Atribut class hanya bisa diisi secara manual'
    ],
    answer: 1,
    explanation: 'Atribut instance seperti self.nama memiliki nilai yang berbeda pada tiap objek. Atribut class seperti Siswa.sekolah dibacakan bersama oleh semua objek dari class tersebut.'
  },
  {
    id: 7,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Fungsi super() pada pemrograman berorientasi objek digunakan untuk.',
    options: [
      'A. Menghapus seluruh atribut pada objek',
      'B. Mengurutkan daftar objek',
      'C. Memanggil constructor atau metode dari class induk',
      'D. Mencetak keluaran ke layar',
      'E. Mengganti nama class menjadi huruf kecil'
    ],
    answer: 2,
    explanation: 'super() dipakai untuk memanggil constructor atau metode milik class induk, sehingga inisialisasi dari induk tidak perlu ditulis ulang pada class anak.'
  },
  {
    id: 8,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Seorang mendefinisikan class Persegi yang memiliki sisi dan metode luas, lalu membuat class Kotak yang hanya memanggil metode milik Persegi tanpa menulis ulang perhitungan. Konsep yang digunakan adalah.',
    options: [
      'A. Method Overriding',
      'B. Polymorphism',
      'C. Encapsulation',
      'D. Inheritance',
      'E. Abstraksi data'
    ],
    answer: 3,
    explanation: 'Kelas Kotak mewarisi sifat dan metode kelas Persegi lalu memakainya tanpa menulis ulang perhitungan luas. Pemakaian ulang seperti ini disebut inheritance.'
  },
  {
    id: 9,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Manakah yang mendeskripsikan Method Overriding?',
    options: [
      'A. Metode yang hanya bisa dipanggil dari luar class',
      'B. Class anak membuat metode baru yang namanya sama sekali berbeda',
      'C. Class induk menghapus seluruh metode pada class anak',
      'D. Sebuah metode dipanggil dua kali berturut-turut',
      'E. Class anak mengganti implementasi metode yang diwarisi dari class induk'
    ],
    answer: 4,
    explanation: 'Method Overriding terjadi ketika class anak menyediakan versi sendiri dari metode yang diwarisi, sehingga implementasi milik anak yang dipakai.'
  },
  {
    id: 10,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Menurut modul, keistimewaan Tkinter sebagai tool pembuatan GUI adalah.',
    options: [
      'A. Sudah tersedia bawaan Python, mudah dipelajari, lintas platform, dan cocok dengan OOP',
      'B. Harus dipasang secara terpisah dan hanya berjalan di satu sistem operasi',
      'C. Hanya dapat membuat tampilan berbasis teks tanpa tombol',
      'D. Membutuhkan koneksi internet untuk berjalan',
      'E. Tidak mendukung penggunaan class sama sekali'
    ],
    answer: 0,
    explanation: 'Modul menyebut Tkinter sudah ada di setiap instalasi Python, sintaksnya sederhana, berjalan di Windows, macOS, maupun Linux, serta dirancang untuk pendekatan berorientasi objek.'
  },
  {
    id: 11,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Apa yang dimaksud dengan encapsulation dalam pemrograman berorientasi objek?',
    options: [
      'A. Menyalin seluruh kode program ke dalam class yang sama',
      'B. Menyembunyikan data internal suatu objek dan hanya menyediakan akses melalui metode yang ditentukan',
      'C. Mengganti nama variabel agar lebih pendek',
      'D. Menjalankan dua program secara bersamaan',
      'E. Menghapus semua metode pada sebuah class'
    ],
    answer: 1,
    explanation: 'Encapsulation melindungi data internal objek dengan menyembunyikannya di balik metode-metode yang tersedia, sehingga data tidak diubah sembarangan dari luar.'
  },
  {
    id: 12,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Apa yang dimaksud dengan polymorphism dalam pemrograman berorientasi objek?',
    options: [
      'A. Kemampuan program berjalan pada dua sistem operasi sekaligus',
      'B. Kemampuan membuat banyak objek dari satu class dalam waktu bersamaan',
      'C. Kemampuan satu nama metode bekerja berbeda pada tipe objek yang berbeda',
      'D. Kemampuan menyimpan data di dalam berkas terpisah',
      'E. Kemampuan mengubah kode program tanpa menutup editor'
    ],
    answer: 2,
    explanation: 'Polymorphism memungkinkan satu nama metode memberikan perilaku berbeda tergantung tipe objeknya, sehingga program lebih fleksibel.'
  },
  {
    id: 13,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Apa perbedaan antara GUI dan CLI?',
    options: [
      'A. GUI berbasis teks, sedangkan CLI berbasis gambar',
      'B. CLI selalu lebih cepat daripada GUI',
      'C. Keduanya identik dan tidak ada bedanya',
      'D. GUI menyediakan antarmuka visual seperti tombol dan form, sedangkan CLI berbasis teks di terminal',
      'E. GUI hanya dapat digunakan di sistem operasi Windows'
    ],
    answer: 3,
    explanation: 'GUI adalah antarmuka pengguna grafis dengan elemen visual, sedangkan CLI adalah antarmuka baris perintah berbasis teks. Keduanya punya kelebihan masing-masing.'
  },
  {
    id: 14,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Class Siswa memiliki atribut sekolah yang nilainya sama untuk semua objek. Jenis atribut tersebut adalah.',
    options: [
      'A. Atribut instance',
      'B. Parameter fungsi',
      'C. Metode statis',
      'D. Variabel lokal',
      'E. Atribut class'
    ],
    answer: 4,
    explanation: 'Atribut class ditulis di dalam definisi class dan dibagi ke seluruh objek dari class tersebut, berbeda dengan atribut instance yang nilainya bisa berbeda tiap objek.'
  },
  {
    id: 15,
    level: 'C3 - Menerapkan',
    modul: 'Modul 3',
    question: 'Mengapa OOP disebut lebih scalable untuk proyek besar?',
    options: [
      'A. Karena fitur baru mudah ditambahkan lewat class baru tanpa mengubah kode yang sudah ada',
      'B. Karena program menjadi lebih pendek tanpa perlu diuji',
      'C. Karena semua kode harus ditulis dalam satu berkas',
      'D. Karena program tidak membutuhkan dokumentasi',
      'E. Karena class dan modul dapat diunduh dari internet'
    ],
    answer: 0,
    explanation: 'Karena modularitas dan reusability, penambahan fitur cukup lewat class baru atau perubahan terbatas tanpa mengganggu bagian program yang sudah berjalan.'
  },
  {
    id: 16,
    level: 'C4 - Menganalisis',
    modul: 'Modul 3',
    question: 'Sebuah class Balok memiliki atribut panjang dan lebar, tetapi pemrogram menuliskan rumus luas secara manual di setiap kelas yang berbeda. Masalah utamanya adalah.',
    options: [
      'A. Kode menjadi terlalu sulit dibaca oleh manusia',
      'B. Terjadi pengulangan kode yang seharusnya dihindari dengan inheritance atau method yang dapat dipakai ulang',
      'C. Program tidak dapat dikompilasi sama sekali',
      'D. Atribut yang digunakan terlalu banyak',
      'E. Class tidak memiliki constructor'
    ],
    answer: 1,
    explanation: 'Menuliskan rumus yang sama berulang di banyak kelas menimbulkan duplikasi kode yang rawan tidak konsisten. Rumus sebaiknya dibuat satu kali lalu dipakai ulang melalui method atau inheritance.'
  },
  {
    id: 17,
    level: 'C4 - Menganalisis',
    modul: 'Modul 3',
    question: 'Class Siswa dan class Guru sama-sama memiliki atribut nama dan metode perkenalan. Manakah cara paling tepat untuk menghindari pengulangan kode?',
    options: [
      'A. Menyalin kode nama dan perkenalan ke setiap class secara manual',
      'B. Menggabungkan seluruh kode ke dalam satu class yang sangat besar',
      'C. Membuat class induk yang menyimpan atribut dan metode tersebut, lalu mewariskannya',
      'D. Menghapus atribut nama dari seluruh class',
      'E. Mengubah setiap kode menjadi variabel lokal'
    ],
    answer: 2,
    explanation: 'Atribut dan metode yang sama paling tepat ditaruh pada class induk lalu diwarisi oleh class anak. Dengan begitu kode ditulis satu kali dan mudah dipelihara.'
  },
  {
    id: 18,
    level: 'C4 - Menganalisis',
    modul: 'Modul 3',
    question: 'Mengapa Python mendukung multiple inheritance tetapi harus digunakan dengan hati-hati?',
    options: [
      'A. Karena multiple inheritance membuat program berjalan lambat',
      'B. Karena multiple inheritance hanya tersedia pada Java',
      'C. Karena Python tidak dapat membuat class anak',
      'D. Karena pewarisan dari beberapa induk dapat menimbulkan ambiguitas, misalnya pada Diamond Problem',
      'E. Karena class anak harus selalu kosong'
    ],
    answer: 3,
    explanation: 'Bila satu class anak mewarisi dua induk yang sama-sama menyediakan metode dengan nama sama, muncul kebingungan metode mana yang dipakai. Inilah Diamond Problem.'
  },
  {
    id: 19,
    level: 'C4 - Menganalisis',
    modul: 'Modul 3',
    question: 'Ketika class Anak overriding metode perkenalan milik class induk, apa yang terjadi ketika program memanggil metode tersebut?',
    options: [
      'A. Selalu memanggil versi milik class induk',
      'B. Metode akan dihapus dari kedua class',
      'C. Program berhenti berjalan',
      'D. Metode akan dipanggil dua kali',
      'E. Selalu memanggil versi milik class anak'
    ],
    answer: 4,
    explanation: 'Saat objek bertipe Anak dipanggil, versi metode milik Anak yang dipakai, bukan milik Induk. Inilah polimorfisme, yaitu perilaku berbeda meski nama metodenya sama.'
  },
  {
    id: 20,
    level: 'C4 - Menganalisis',
    modul: 'Modul 3',
    question: 'Manakah yang paling tepat menjelaskan hubungan antara class dan object?',
    options: [
      'A. Class adalah rancangan, sedangkan object adalah wujud nyata yang dibuat dari rancangan tersebut',
      'B. Class dan object adalah dua hal yang sama',
      'C. Object adalah rancangan, sedangkan class adalah hasil akhirnya',
      'D. Keduanya hanya berbeda nama untuk hal yang sama',
      'E. Class hanya dapat membuat satu object'
    ],
    answer: 0,
    explanation: 'Satu class dapat membuat banyak object dengan nilai atribut yang berbeda-beda. Object adalah wujud konkret yang bisa digunakan dalam program.'
  },
  {
    id: 21,
    level: 'C5 - Menilai',
    modul: 'Modul 3',
    question: 'Seorang pemrogram mengklaim: \'Dengan memakai OOP, program dijamin bebas dari kesalahan.\' Bagaimana penilaian yang tepat?',
    options: [
      'A. Benar, karena OOP membuat program tidak mungkin salah',
      'B. Salah, OOP meningkatkan reuseability kode dan memudahkan pemeliharaan, tetapi program tetap perlu diuji',
      'C. Benar, karena setiap objek otomatis memeriksa dirinya sendiri',
      'D. Salah, karena OOP membuat kode lebih sulit dibaca',
      'E. Benar, jika programnya ditulis dalam satu berkas'
    ],
    answer: 1,
    explanation: 'OOP memberi modularitas, reusability, dan pemodelan yang lebih dekat pada dunia nyata, tetapi tetap tidak menjamin bebas kesalahan. Pengujian tetap diperlukan.'
  },
  {
    id: 22,
    level: 'C5 - Menilai',
    modul: 'Modul 3',
    question: 'Manakah yang paling tepat menilai pemilihan OOP sebuah proyek?',
    options: [
      'A. OOP selalu lebih baik untuk setiap jenis program',
      'B. OOP hanya cocok untuk program yang memakai gambar',
      'C. OOP paling tepat untuk program yang besar, kompleks, dan punya banyak objek yang saling berinteraksi, sedangkan program sederhana cukup dengan pendekatan prosedural',
      'D. OOP tidak layak dipelajari karena sudah usang',
      'E. OOP hanya berguna untuk program yang berjalan di satu perangkat'
    ],
    answer: 2,
    explanation: 'OOP unggul untuk sistem yang besar dan kompleks karena memudahkan pemecahan program menjadi bagian-bagian terpisah. Untuk program kecil dan sederhana, pendekatan prosedural lebih ringkas.'
  },
  {
    id: 23,
    level: 'C5 - Menilai',
    modul: 'Modul 3',
    question: 'Manakah yang paling tepat menggambarkan ciri class yang baik?',
    options: [
      'A. Semua atribut dibuat publik agar mudah diubah dari mana saja',
      'B. Setiap class hanya boleh memiliki satu metode',
      'C. Class dibuat sebanyak mungkin sekecil mungkin tanpa perlu',
      'D. Data internal disembunyikan dan perubahan dilakukan lewat metode yang dirancang dengan jelas',
      'E. Nama variabel sebaiknya sesingkat mungkin demi kepraktisan kode'
    ],
    answer: 3,
    explanation: 'Class yang baik melindungi data internal dan menyediakan antarmuka/metode yang jelas, sehingga perubahan di dalam class tidak merusak bagian program yang memakainya.'
  },
  {
    id: 24,
    level: 'C5 - Menilai',
    modul: 'Modul 3',
    question: 'Ketika membangun aplikasi GUI sederhana untuk tugas sekolah, mengapa OOP tetap menjadi pilihan yang layak meskipun programnya kecil?',
    options: [
      'A. Karena OOP otomatis membuat tampilan menjadi lebih indah',
      'B. Karena OOP membuat program tidak perlu diuji lagi',
      'C. Karena program kecil tidak memerlukan test case',
      'D. Karena Tkinter hanya bisa dipakai dengan OOP',
      'E. Karena memisahkan bagian antarmuka, logika, dan data membuat program lebih mudah dikembangkan dan diperbaiki'
    ],
    answer: 4,
    explanation: 'Pemisahan tanggung jawab lewat class membuat program lebih rapi dan mudah diubah, termasuk saat bertambah besar. Tkinter memang dirancang agar nyaman dipakai bersama OOP.'
  },
  {
    id: 25,
    level: 'C5 - Menilai',
    modul: 'Modul 3',
    question: 'Manakah pernyataan yang paling tepat tentang penggunaan inheritance yang baik?',
    options: [
      'A. Warisan yang benar hubungan parent dan child jelas, memakai super() dengan benar, dan tidak menimbulkan ambiguitas',
      'B. Warisan yang benar membuat kode Anak bergantung penuh pada Induk sehingga sulit diubah',
      'C. Warisan selalu membuat program berjalan lambat',
      'D. Warisan hanya berlaku pada satu kelas saja',
      'E. Warisan tidak dapat digunakan bersama dengan method statis'
    ],
    answer: 0,
    explanation: 'Hubungan antara induk dan anak pada inheritance yang baik harus jelas, memanggil super() dengan benar, dan tidak menimbulkan ambiguitas atau ketergantungan yang berlebihan.'
  }
];
