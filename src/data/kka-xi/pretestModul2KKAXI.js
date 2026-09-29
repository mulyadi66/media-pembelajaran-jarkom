export default [
  {
    id: 1,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Manakah yang paling tepat menggambarkan teknik rekursi (recursion)?',
    options: [
      'A. Teknik sebuah fungsi memanggil dirinya sendiri untuk memecah masalah hingga mencapai kondisi dasar (base case)',
      'B. Teknik membagi masalah menjadi dua bagian sama besar lalu menggabungkan hasil masing-masing bagian',
      'C. Teknik mencoba semua kemungkinan solusi lalu menyimpan yang paling murah',
      'D. Teknik menyimpan hasil perhitungan yang sudah selesai agar tidak dihitung ulang',
      'E. Teknik mengurutkan data dengan menukar dua elemen yang berada posisinya bersebelahan'
    ],
    answer: 0,
    explanation: 'Rekursi adalah pemanggilan fungsi oleh dirinya sendiri dengan masalah yang lebih kecil sampai tercapai base case. Pilihan B menggambarkan divide and conquer, C backtracking, D dynamic programming, dan E bubble sort.'
  },
  {
    id: 2,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Pada strategi divide and conquer, tahap setelah sub-masalah selesai diselesaikan satu per satu disebut apa?',
    options: [
      'A. Divide, yaitu memecah masalah menjadi sub-masalah yang lebih kecil',
      'B. Combine, yaitu menggabungkan hasil seluruh sub-masalah menjadi solusi masalah asli',
      'C. Conquer, yaitu menyelesaikan sub-masalah secara rekursif',
      'D. Pruning, yaitu memangkas cabang yang tidak mungkin menghasilkan solusi',
      'E. Memoization, yaitu menyimpan hasil perhitungan agar tidak dihitung ulang'
    ],
    answer: 1,
    explanation: 'Tiga tahap divide and conquer adalah divide (pecah), conquer (selesaikan sub-masalah), dan combine (gabungkan hasil). Tahap terakhir inilah yang menyusun kembali jawaban utuh.'
  },
  {
    id: 3,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Pernyataan yang paling tepat menggambarkan greedy algorithm adalah.',
    options: [
      'A. Menyimpan semua hasil sub-masalah agar tidak perlu dihitung ulang',
      'B. Mencoba seluruh kombinasi yang mungkin lalu memilih yang paling sedikit langkahnya',
      'C. Memilih opsi yang paling menguntungkan pada setiap langkah tanpa mempertimbangkan dampak jangka panjang',
      'D. Membagi masalah menjadi dua bagian sama besar lalu menggabungkan hasilnya',
      'E. Mengikuti satu jalur sampai mentok lalu mundur ke titik sebelumnya untuk mencoba jalur lain'
    ],
    answer: 2,
    explanation: 'Greedy selalu mengambil pilihan terbaik saat ini tanpa melihat konsekuensi langkah berikutnya, berbeda dengan dynamic programming (A), backtracking (B dan E), serta divide and conquer (D).'
  },
  {
    id: 4,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Contoh masalah yang paling tepat diselesaikan dengan backtracking adalah.',
    options: [
      'A. Mencari satu nilai dalam array yang sudah terurut',
      'B. Mengurutkan data nilai siswa dari yang tertinggi',
      'C. Mencari jalur terpendek antar kota yang jaraknya berbeda-beda',
      'D. Menyusun puzzle sudoku kosong tanpa angka yang sama berulang',
      'E. Menghitung rata-rata sekumpulan nilai ujian'
    ],
    answer: 3,
    explanation: 'Sudoku merupakan masalah pembatasan (constraint) yang diselesaikan dengan mencoba angka lalu mundur (backtrack) saat aturan baris, kolom, atau kotak dilanggar. Pencarian biner (A), sorting (B), Dijkstra (C), dan rata-rata (E) tidak memerlukan pola mundur.'
  },
  {
    id: 5,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Apa fungsi utama notasi Big O dalam analisis algoritma?',
    options: [
      'A. Menghitung banyaknya baris kode yang harus ditulis seorang programmer',
      'B. Menentukan tipe data apa yang sebaiknya dipakai untuk setiap variabel',
      'C. Mengukur efisiensi algoritma dari sisi waktu dan ruang seiring bertambahnya jumlah input',
      'D. Mengurutkan daftar algoritma dari yang paling sederhana ke yang paling rumit',
      'E. Menentukan langsung berapa detik sebuah program akan selesai berjalan'
    ],
    answer: 2,
    explanation: 'Big O hanya menyatakan pola pertumbuhan biaya waktu dan ruang seiring bertambahnya jumlah data, bukan angka detik konkret. Karena itu programmer dapat membandingkan dua algoritma secara objektif sebelum mengimplementasikannya.'
  },
  {
    id: 6,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Contoh hubungan yang tepat menggambarkan directed graph (graph berarah) adalah.',
    options: [
      'A. Hubungan mengikuti di media sosial, karena A dapat mengikuti B tanpa harus diikuti B',
      'B. Hubungan berteman di media sosial',
      'C. Hubungan antarsudut pada satu meja belajar kelompok',
      'D. Hubungan dua komputer yang terhubung ke satu switch yang sama',
      'E. Hubungan dua orang yang tinggal di gedung sekolah yang sama'
    ],
    answer: 0,
    explanation: 'Pada directed graph setiap edge memiliki arah, sehingga hubungan A ke B tidak otomatis berarti B ke A. Semua pilihan lain merupakan hubungan dua arah dan membentuk undirected graph.'
  },
  {
    id: 7,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Pernyataan yang benar tentang struktur data yang dipakai oleh BFS dan DFS adalah.',
    options: [
      'A. BFS memakai stack, sedangkan DFS memakai queue',
      'B. BFS memakai queue (FIFO), sedangkan DFS memakai stack (LIFO) atau rekursi',
      'C. Keduanya sama-sama memakai queue agar tidak mengulang simpul',
      'D. Keduanya sama-sama memakai stack agar hemat memori',
      'E. BFS hanya bisa dipakai pada tree, sedangkan DFS hanya pada graph'
    ],
    answer: 1,
    explanation: 'BFS memakai antrean (FIFO) untuk menjelajah melebar per level, sedangkan DFS memakai stack (LIFO) atau pemanggilan rekursif untuk menjelajah sedalam mungkin. Keduanya sama-sama dapat bekerja pada tree maupun graph.'
  },
  {
    id: 8,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Sebuah tree terdiri dari node A (root) yang terhubung ke B, lalu B terhubung ke C. Berapa tinggi (height) tree tersebut?',
    options: [
      'A. 1',
      'B. 3',
      'C. 2',
      'D. 0',
      'E. Tidak dapat ditentukan karena data belum lengkap'
    ],
    answer: 2,
    explanation: 'Height adalah jumlah edge terpanjang dari root menuju leaf. Jalur A menuju B menuju C memiliki dua edge, sehingga tinggi tree bernilai 2. Leaf pada tree ini adalah node C.'
  },
  {
    id: 9,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Aturan penempatan nilai pada binary search tree (BST) adalah.',
    options: [
      'A. Semua nilai di sebelah kiri node harus lebih besar daripada nilai pada node itu',
      'B. Semua nilai di sebelah kanan node harus lebih kecil daripada nilai pada node itu',
      'C. Nilai pada leaf bebas lebih besar maupun lebih kecil dari nilai node di atasnya',
      'D. Semua nilai di sebelah kiri lebih kecil dan semua nilai di sebelah kanan lebih besar daripada nilai pada node',
      'E. Node harus diisi sesuai urutan data dimasukkan, tanpa aturan tambahan'
    ],
    answer: 3,
    explanation: 'Aturan BST membuat data terurut secara alami: nilai di subtree kiri selalu lebih kecil dan di subtree kanan selalu lebih besar dari nilai node. Inilah yang membuat pencarian pada BST menjadi cepat.'
  },
  {
    id: 10,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Algoritma yang kompleksitas waktunya O(n kuadrat) adalah.',
    options: [
      'A. Pencarian biner pada data yang sudah terurut',
      'B. Pencarian linear pada array belum terurut',
      'C. Pengurutan dengan algoritma merge sort',
      'D. Mengakses elemen array berdasarkan indeks tertentu',
      'E. Pengurutan bubble sort yang terus menukar pasangan elemen bersebelahan'
    ],
    answer: 4,
    explanation: 'Bubble sort memakai dua perulangan bertumpuk sehingga biayanya O(n kuadrat). Pencarian biner O(log n), pencarian linear O(n), merge sort O(n log n), dan akses berdasarkan indeks O(1).'
  },
  {
    id: 11,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Diberikan fungsi rekursif power(basis, pangkat) = basis * power(basis, pangkat - 1) dengan base case power(basis, 0) = 1. Berapa nilai power(3, 4)?',
    options: [
      'A. 64',
      'B. 27',
      'C. 12',
      'D. 36',
      'E. 81'
    ],
    answer: 4,
    explanation: 'Rumus itu sama dengan menghitung pangkat, sehingga power(3, 4) = 3 x 3 x 3 x 3 = 81. Jejak pemanggilannya: 3 * power(3,3) = 3 * 3 * power(3,2) = 3 * 3 * 3 * power(3,1) = 3 * 3 * 3 * 3 * power(3,0).'
  },
  {
    id: 12,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Mengapa dynamic programming membuat perhitungan Fibonacci jauh lebih cepat daripada rekursi murni?',
    options: [
      'A. Karena dynamic programming selalu dijalankan pada perangkat yang lebih cepat',
      'B. Karena dynamic programming hanya menghitung suku Fibonacci yang bernilai genap',
      'C. Karena hasil setiap sub-masalah yang sama disimpan lalu dipakai ulang, sehingga tidak dihitung berulang kali',
      'D. Karena dynamic programming membuang semua suku yang bernilai kecil',
      'E. Karena dynamic programming melakukan sebanyak mungkin pengulangan untuk memastikan hasil benar'
    ],
    answer: 2,
    explanation: 'Rekursi murni menghitung ulang sub-masalah yang sama berkali-kali sehingga kompleksitasnya eksponensial. Dengan menyimpan hasil tiap sub-masalah, kompleksitasnya turun menjadi O(n) atau linear.'
  },
  {
    id: 13,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Sebuah kasir hanya memiliki pecahan Rp20.000, Rp10.000, Rp5.000, Rp2.000, dan Rp1.000. Untuk kembalian Rp47.000, algoritma greedy yang selalu mengambil pecahan terbesar yang masih bisa dipakai akan memberikan.',
    options: [
      'A. 7 lembar, karena setiap pecahan besar harus dipakai sebelum pecahan kecil',
      'B. 4 lembar, tetapi algoritma greedy tidak pernah menghasilkan jumlah lembar paling sedikit',
      'C. 5 lembar, karena pecahan Rp5.000 ternyata tidak pernah dipakai',
      'D. 4 lembar berupa 2x Rp20.000, 1x Rp5.000, dan 1x Rp2.000, sekaligus jumlah lembar paling sedikit',
      'E. 3 lembar, karena seluruh nilai dapat dibayar dengan satu pecahan besar saja'
    ],
    answer: 3,
    explanation: 'Jejak greedy: 47.000 - 20.000 = 27.000, dikurangi 20.000 menjadi 7.000, dikurangi 5.000 menjadi 2.000, lalu dikurangi 2.000 menjadi 0. Totalnya 4 lembar dan jumlah ini memang yang paling sedikit untuk nilai tersebut.'
  },
  {
    id: 14,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Pada algoritma merge sort, tahap yang disebut combine adalah.',
    options: [
      'A. Membagi array menjadi dua bagian yang sama besar',
      'B. Mengurutkan masing-masing bagian secara rekursif sampai ukurannya satu elemen',
      'C. Mengganti nilai terbesar dengan nilai tengah array',
      'D. Menghapus semua elemen duplikat dari dalam array',
      'E. Menggabungkan dua array yang sudah terurut menjadi satu array terurut'
    ],
    answer: 4,
    explanation: 'Combine adalah tahap menggabungkan dua bagian yang sudah terurut menjadi satu barisan terurut. Tahap awal membagi data (A) dan tahap conquer mengurutkan tiap bagian (B).'
  },
  {
    id: 15,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Data 50, 30, 70, lalu 20 disisipkan berurutan ke dalam BST yang masih kosong. Node yang menjadi anak kiri dari node 50 adalah.',
    options: [
      'A. 30',
      'B. 70',
      'C. 20',
      'D. 50',
      'E. 20 dan 30 sekaligus'
    ],
    answer: 0,
    explanation: 'Angka pertama yang masuk menjadi root yaitu 50. Angka 30 lebih kecil dari 50 sehingga menjadi anak kiri, 70 lebih besar menjadi anak kanan, dan 20 lebih kecil dari 30 sehingga menjadi anak kiri dari 30.'
  },
  {
    id: 16,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Pada BST seimbang yang memuat 1.000 node, jumlah perbandingan maksimum untuk menemukan satu data kira-kira.',
    options: [
      'A. 1.000 perbandingan',
      'B. Sekitar 10 perbandingan',
      'C. Sekitar 500 perbandingan',
      'D. Sekitar 100 perbandingan',
      'E. Sekitar 1 perbandingan'
    ],
    answer: 1,
    explanation: 'Pencarian pada BST seimbang berkompleksitas O(log n). Karena log basis 2 dari 1.000 sekitar 10, jumlah perbandingan maksimumnya hanya sekitar 10 kali, bukan 1.000 kali seperti linear search.'
  },
  {
    id: 17,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Mengapa BST biasa bisa berubah menjadi tidak seimbang dan menyerupai linked list?',
    options: [
      'A. Karena BST selalu menyimpan data secara acak',
      'B. Karena BST tidak memiliki node paling atas',
      'C. Karena data disisipkan dalam urutan yang sudah terurut, sehingga setiap node hanya memiliki satu sisi anak',
      'D. Karena BST hanya dapat menyimpan nilai berupa teks',
      'E. Karena setiap node dalam BST hanya diperbolehkan memiliki satu child'
    ],
    answer: 2,
    explanation: 'Jika data masuk sudah terurut, setiap nilai baru selalu menjadi anak kanan sehingga membentuk rantai satu arah. BST seperti ini membuat pencarian O(n), dan tree seimbang seperti AVL menutup masalah tersebut lewat rotasi.'
  },
  {
    id: 18,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Untuk mencari rute terpendek dari satu simpul ke semua simpul lain pada graph yang tidak memiliki bobot, traversal yang paling tepat adalah.',
    options: [
      'A. DFS, karena selalu mengikuti satu jalur sampai mentok',
      'B. Merge sort, karena mengurutkan simpul berdasarkan jarak dari titik awal',
      'C. Binary search, karena membagi simpul menjadi dua bagian setiap langkah',
      'D. BFS, karena mengunjungi semua tetangga pada satu level sebelum masuk ke level berikutnya',
      'E. Greedy, karena selalu memilih sisi dengan bobot terbesar lebih dulu'
    ],
    answer: 3,
    explanation: 'BFS menjelajah melebar per level, sehingga pertama kali mencapai suatu simpul lewat jumlah sisi paling sedikit. Hal ini berlaku pada graph tanpa bobot; jika ada bobot jarak, gunakan Dijkstra.'
  },
  {
    id: 19,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Algoritma Dijkstra paling sesuai digunakan untuk.',
    options: [
      'A. Graph berarah yang memiliki bobot edge negatif',
      'B. Mengurutkan nama-nama siswa berdasarkan abjad',
      'C. Mencari jalur terpendek untuk semua pasangan simpul sekaligus',
      'D. Menemukan semua siklus pada sebuah graph berarah',
      'E. Graph berbobot yang semua bobotnya tidak negatif, untuk mencari jalur terpendek dari satu sumber'
    ],
    answer: 4,
    explanation: 'Dijkstra selalu memilih simpul dengan jarak terkecil yang sudah pasti, sehingga mensyaratkan bobot tidak negatif. Mencari jalur terpendek semua pasangan sekaligus adalah tugas Floyd-Warshall (C).'
  },
  {
    id: 20,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Sebuah graph kecil dengan 8 persimpangan harus dapat menampilkan jalur terpendek untuk semua pasangan persimpangan. Algoritma yang paling tepat adalah.',
    options: [
      'A. Floyd-Warshall, karena menghitung jalur terpendek untuk seluruh pasangan simpul sekaligus',
      'B. Binary search, karena membagi daftar persimpangan menjadi dua bagian setiap langkah',
      'C. Merge sort, karena mengurutkan persimpangan berdasarkan jarak dari titik awal',
      'D. Linear search, karena memeriksa seluruh persimpangan satu per satu',
      'E. Greedy, karena selalu memilih jalan terdekat yang tersedia'
    ],
    answer: 0,
    explanation: 'Floyd-Warshall menghitung jalur terpendek antar semua pasangan simpul dengan kompleksitas O(V pangkat tiga). Karena graph-nya kecil (8 simpul), perhitungan ini masih sangat cepat.'
  },
  {
    id: 21,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Pada masalah memilih koin untuk mencapai nilai tertentu, greedy bisa gagal menghasilkan jumlah koin paling sedikit. Kasus yang menunjukkan kegagalan tersebut adalah.',
    options: [
      'A. Pecahan 1.000, 5.000, 10.000, dan 25.000 untuk nilai 30.000',
      'B. Pecahan 10.000, 20.000, dan 50.000 untuk nilai 60.000',
      'C. Pecahan 1.000, 3.000, dan 4.000 untuk nilai 6.000',
      'D. Pecahan 5.000, 10.000, dan 25.000 untuk nilai 50.000',
      'E. Pecahan 1.000, 5.000, dan 10.000 untuk nilai 20.000'
    ],
    answer: 2,
    explanation: 'Greedy memilih 4.000 lalu 1.000 lalu 1.000 sehingga butuh 3 koin, sedangkan pilihan optimal 3.000 + 3.000 hanya butuh 2 koin. Pada kasus lain, pilihan greedy kebetulan sama dengan pilihan optimal.'
  },
  {
    id: 22,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Data 1, 2, lalu 3 disisipkan berurutan sehingga node 1 menjadi root, 2 menjadi anak kanan, dan 3 menjadi anak kanan dari 2. Untuk mengembalikan keseimbangan, jenis rotasi yang sesuai adalah.',
    options: [
      'A. Rotasi kiri-kanan (LR), karena node 1 miring ke kanan sementara anak kanannya justru miring ke kiri',
      'B. Rotasi kiri-kiri (LL), karena sisi kiri node 1 kosong sehingga tree tidak seimbang',
      'C. Tidak diperlukan rotasi, karena tree dengan tiga node masih dianggap seimbang',
      'D. Rotasi kanan-kanan (RR), karena node 1 miring ke kanan dan anak kanannya juga miring ke kanan',
      'E. Rotasi dengan arah mana pun, karena semua jenis rotasi menghasilkan tree yang sama'
    ],
    answer: 3,
    explanation: 'Node 1 memiliki balance factor minus 2 dan anak kanannya juga miring ke kanan, sehingga termasuk kondisi kanan-kanan (RR). Solusinya adalah rotasi kanan agar node 2 naik menjadi root baru.'
  },
  {
    id: 23,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Pernyataan yang paling tepat mengenai algoritma SJF (Shortest Job First) dalam penjadwalan proses adalah.',
    options: [
      'A. Setiap proses mendapat giliran waktu yang sama sehingga hasilnya adil bagi semua proses',
      'B. Proses dengan prioritas tertinggi selalu dijalankan lebih dahulu',
      'C. Semua proses dijalankan sekaligus tanpa perlu giliran',
      'D. Proses yang baru dibuat selalu harus menunggu semua proses lama selesai',
      'E. Proses yang diperkirakan paling singkat dijalankan lebih dahulu sehingga rata-rata waktu tunggunya menjadi optimal'
    ],
    answer: 4,
    explanation: 'SJF selalu menjalankan proses dengan durasi paling pendek lebih dulu sehingga rata-rata waktu tunggu menjadi minimum. Round robin memakai giliran waktu sama (A), sedangkan prioritas tertinggi adalah priority scheduling (B).'
  },
  {
    id: 24,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Pada mesin pencari, setiap kata kunci dikaitkan dengan daftar halaman web yang memuat kata tersebut. Struktur data yang paling sesuai untuk menyimpan hubungan ini adalah.',
    options: [
      'A. Inverted index (indeks terbalik), yaitu daftar halaman yang terhubung dengan setiap kata kunci',
      'B. Array yang hanya menyimpan daftar kata kunci tanpa hubungan ke halaman mana pun',
      'C. Graph tidak berarah yang menghubungkan setiap kata dengan semua kata lain di kamus',
      'D. Stack yang disusun berdasarkan urutan frekuensi kemunculan kata',
      'E. Binary tree yang hanya menyimpan satu halaman untuk setiap kata kunci'
    ],
    answer: 0,
    explanation: 'Inverted index berfungsi seperti kamus terbalik: dari sebuah kata langsung diketahui halaman mana saja yang memuatnya, sehingga pencarian tidak perlu menyisir seluruh halaman. Pencarian kata di dalamnya sangat cepat, sekitar O(1) bila memakai hash table.'
  },
  {
    id: 25,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Sebuah algoritma pengurutan berkompleksitas O(n log n). Jika jumlah data naik dari 10.000 menjadi 20.000, secara pendekatan jumlah operasinya menjadi.',
    options: [
      'A. Sekitar 4 kali, seperti pada algoritma O(n kuadrat)',
      'B. Sekitar 2 kali, karena faktor n naik dua kali sedangkan faktor logaritmanya hanya naik sedikit',
      'C. Sekitar 1.000 kali, karena logaritma tumbuh sangat cepat',
      'D. Tetap sama, karena kompleksitas algoritma tidak dipengaruhi jumlah data',
      'E. Sekitar 8 kali, karena jumlah data naik dua kali lipat'
    ],
    answer: 1,
    explanation: 'Hitungannya: 10.000 x log(10.000) sekitar 133.000, sedangkan 20.000 x log(20.000) sekitar 286.000, jadi hanya naik sekitar 2,1 kali. Pada O(n kuadrat) kenaikannya 4 kali karena n dipangkatkan.'
  },
  {
    id: 26,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Pada priority scheduling, proses berprioritas rendah berisiko tidak pernah dijalankan (starvation). Cara paling tepat untuk mengatasinya adalah.',
    options: [
      'A. Menghapus seluruh nilai prioritas dan menjalankan semua proses sekaligus',
      'B. Menaikkan prioritas semua proses secara berkala agar proses yang lama menunggu tidak terus tertinggal',
      'C. Mengganti priority queue dengan stack agar giliran lebih adil',
      'D. Memberi durasi time slice tidak terbatas pada setiap proses',
      'E. Menghentikan semua proses berprioritas rendah secara permanen'
    ],
    answer: 1,
    explanation: 'Teknik yang dikenal sebagai aging menaikkan prioritas proses secara bertahap seiring waktu tunggu, sehingga proses yang lama menunggu akhirnya mendapat giliran. Stack (C) justru membuat urutan giliran tidak terjamin adil.'
  },
  {
    id: 27,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Pasangan masalah dan pendekatan algoritmik yang paling tepat adalah.',
    options: [
      'A. Mencari rute terpendek di peta tanpa bobot dengan divide and conquer',
      'B. Mengurutkan daftar nama siswa dengan dynamic programming',
      'C. Menyusun sudoku yang kosong dengan greedy algorithm',
      'D. Mencari rute terpendek pada peta jalan yang setiap ruasnya punya bobot jarak, memakai Dijkstra pada weighted graph',
      'E. Mencari satu nilai dalam array terurut dengan backtracking'
    ],
    answer: 3,
    explanation: 'Peta jalan adalah weighted graph karena tiap ruas punya bobot berupa jarak atau waktu, dan Dijkstra memang dirancang untuk itu. Tanpa bobot, rute terpendek cukup dengan BFS, sedangkan pencarian pada array terurut memakai binary search.'
  },
  {
    id: 28,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Algoritma A berkompleksitas O(n log n) dan membutuhkan waktu 1 detik untuk 1.000.000 data. Jika jumlah data menjadi 10.000.000, perkiraan waktunya.',
    options: [
      'A. Sekitar 10.000 detik, karena kompleksitasnya setara algoritma kuadrat',
      'B. Tetap 1 detik, karena jumlah data yang diproses tidak memengaruhi waktu',
      'C. Sekitar 100 detik, karena setiap data harus dibandingkan satu per satu',
      'D. Sekitar 25 detik, karena faktor logaritma naik dua kali lipat',
      'E. Sekitar 10 detik, karena jumlah data naik sepuluh kali lipat sedangkan faktor logaritmanya hanya naik sedikit'
    ],
    answer: 4,
    explanation: 'Untuk n = 1.000.000, n x log(n) sekitar 19,9 juta, sedangkan n = 10.000.000 sekitar 232,5 juta, atau naik sekitar 11,7 kali. Jadi waktu yang dibutuhkan sekitar 12 detik, bukan berlipat secara kuadrat seperti pada O(n kuadrat).'
  },
  {
    id: 29,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Untuk memeriksa apakah sebuah graph berarah memiliki siklus sekaligus mengurutkan simpul sesuai urutan pengerjaannya, metode yang tepat adalah.',
    options: [
      'A. BFS, karena selalu menjelajah simpul level per level',
      'B. DFS, karena mengikuti satu jalur sampai mentok lalu mundur sehingga dapat menemukan jalur yang kembali ke simpul awal',
      'C. Binary search, karena membagi simpul menjadi dua bagian setiap langkah',
      'D. Merge sort, karena mengurutkan simpul berdasarkan nilai labelnya',
      'E. Greedy, karena selalu memilih simpul dengan degree tertinggi'
    ],
    answer: 1,
    explanation: 'DFS menelusuri satu jalur sampai mentok lalu mundur, sehingga dapat menemukan simpul yang sudah dikunjungi kembali ke titik awal, yaitu tanda adanya siklus. Urutan DFS juga bisa dimanfaatkan untuk menghasilkan topological sorting.'
  },
  {
    id: 30,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Sebuah aplikasi peta harus memperbarui rute tercepat setiap kali kondisi lalu lintas berubah. Strategi yang paling tepat berdasarkan materi adalah.',
    options: [
      'A. Menyimpan jalan sebagai weighted graph lalu menghitung ulang rute dengan Dijkstra atau A* setiap kali bobot edge berubah',
      'B. Menyimpan nama jalan dalam array dan mengurutkannya dengan bubble sort setiap detik',
      'C. Menyimpan jalan dalam tree karena tree dijamin selalu lebih cepat daripada graph',
      'D. Menggunakan binary search pada daftar jalan karena membagi data menjadi dua bagian',
      'E. Menggunakan backtracking karena mencoba seluruh rute secara otomatis setiap kali ada perubahan'
    ],
    answer: 0,
    explanation: 'Jalan membentuk weighted graph karena tiap ruas punya bobot jarak atau waktu, dan Dijkstra atau A* menghitung rute terpendek dari bobot tersebut. Ketika bobot berubah karena macet, perhitungan cukup diulang dengan data bobot terbaru.'
  }
];
