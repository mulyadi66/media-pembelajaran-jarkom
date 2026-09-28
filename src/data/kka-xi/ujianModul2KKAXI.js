export default [
  {
    id: 1,
    level: 'C2 - Memahami',
    modul: 'Modul 2',
    question: 'Dalam struktur data tree, node paling atas yang tidak memiliki parent disebut.',
    options: [
      'A. Leaf',
      'B. Subtree',
      'C. Edge',
      'D. Root',
      'E. Level'
    ],
    answer: 3,
    explanation: 'Root adalah node paling atas yang tidak memiliki parent dan menjadi titik awal tree. Leaf adalah node tanpa child, Edge adalah garis penghubung, dan Subtree adalah pohon kecil dari suatu node beserta seluruh keturunannya.'
  },
  {
    id: 2,
    level: 'C2 - Memahami',
    modul: 'Modul 2',
    question: 'Apa kepanjangan dan arti dari Balance Factor pada pohon yang seimbang?',
    options: [
      'A. Urutan node menurut urutan saat masuk ke tree',
      'B. Jumlah total node dalam tree',
      'C. Jumlah edge dari root menuju leaf',
      'D. Nilai yang menyimpan data pada setiap node',
      'E. Selisih tinggi subtree kiri dan kanan, yang harus bernilai 0 atau 1'
    ],
    answer: 4,
    explanation: 'Balance Factor adalah selisih tinggi subtree kiri dengan tinggi subtree kanan. Pohon disebut seimbang bila nilai ini bernilai -1, 0, atau 1 pada setiap node.'
  },
  {
    id: 3,
    level: 'C2 - Memahami',
    modul: 'Modul 2',
    question: 'Manakah yang BUKAN merupakan istilah penting dalam graph?',
    options: [
      'A. Subtree',
      'B. Edge',
      'C. Vertex',
      'D. Directed Graph',
      'E. Weighted Graph'
    ],
    answer: 0,
    explanation: 'Istilah graph meliputi Vertex, Edge, Directed Graph, Undirected Graph, Weighted Graph, dan Unweighted Graph. Subtree adalah istilah tree, bukan graph.'
  },
  {
    id: 4,
    level: 'C2 - Memahami',
    modul: 'Modul 2',
    question: 'Kompleksitas waktu O(n log n) merupakan contoh khas dari algoritma berikut.',
    options: [
      'A. Linear search',
      'B. Quick sort',
      'C. Bubble sort',
      'D. Pencarian pada array yang belum terurut',
      'E. Akses array berdasarkan indeks'
    ],
    answer: 1,
    explanation: 'Quick sort memiliki kompleksitas rata-rata O(n log n). Bubble sort berupa O(n^2), linear search O(n), sedangkan akses array berdasarkan indeks adalah O(1).'
  },
  {
    id: 5,
    level: 'C2 - Memahami',
    modul: 'Modul 2',
    question: 'Apa yang dimaksud dengan traversal pada sebuah graph?',
    options: [
      'A. Menghapus seluruh node dari graph',
      'B. Menambah bobot pada setiap edge',
      'C. Proses mengunjungi semua vertex dalam graph secara sistematis',
      'D. Mengurutkan node dari besar ke kecil',
      'E. Menggabungkan dua graph menjadi satu'
    ],
    answer: 2,
    explanation: 'Traversal adalah proses mengunjungi seluruh vertex dalam graph secara sistematis. Contohnya BFS (Breadth-First Search) dan DFS (Depth-First Search).'
  },
  {
    id: 6,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Dika perlu memasukkan data [8, 3, 10, 1, 6, 14, 4, 7, 13] ke dalam Binary Search Tree. Nilai yang menjadi root adalah.',
    options: [
      'A. 3',
      'B. 6',
      'C. 10',
      'D. 8',
      'E. 14'
    ],
    answer: 3,
    explanation: 'Pada BST, nilai pertama yang dimasukkan menjadi root. Karena data 8 dimasukkan paling awal, 8 menjadi root, lalu nilai di bawah 8 ke kiri dan di atas 8 ke kanan.'
  },
  {
    id: 7,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Pada BST yang sudah terbentuk dari data [8, 3, 10, 1, 6, 14, 4, 7, 13], pencarian nilai 13 memerlukan berapa langkah perbandingan?',
    options: [
      'A. Satu langkah langsung di root',
      'B. Dua langkah',
      'C. Tiga langkah',
      'D. Lima langkah atau lebih',
      'E. Empat langkah'
    ],
    answer: 4,
    explanation: 'Dengan root 8, pencarian 13 proceeds ke kanan menuju node 10, lalu ke kanan lagi menuju node 14, lalu ke kiri ke node 13. Totalnya empat perbandingan.'
  },
  {
    id: 8,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Apa yang dimaksud dengan algoritma Dynamic Programming?',
    options: [
      'A. Menyimpan hasil perhitungan sub-masalah agar tidak dihitung berulang kali',
      'B. Mengurutkan data secara acak setiap kali dijalankan',
      'C. Menghapus semua data yang tidak diperlukan',
      'D. Menggandakan data menjadi dua salinan',
      'E. Mencari data secara linier'
    ],
    answer: 0,
    explanation: 'Dynamic Programming menyimpan hasil perhitungan sub-masalah yang sudah selesai lalu memakainya kembali, sehingga perhitungan berulang dapat dihindari dan waktu komputasi berkurang.'
  },
  {
    id: 9,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Pada algoritma scheduling dalam sistem operasi, proses yang diprioritaskan adalah.',
    options: [
      'A. Proses yang paling lama berjalan',
      'B. Proses dengan prioritas tertinggi atau paling mendesak',
      'C. Proses yang paling baru dibuat',
      'D. Proses yang paling banyak memakai memori',
      'E. Proses yang paling sedikit melakukan I/O'
    ],
    answer: 1,
    explanation: 'Scheduling memilih proses berdasarkan prioritas, umumnya proses dengan prioritas tertinggi atau paling mendesak untuk dilayani lebih dulu agar sistem tetap responsif.'
  },
  {
    id: 10,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Mengapa pencarian pada Binary Search Tree yang seimbang lebih cepat daripada linear search?',
    options: [
      'A. Karena linear search selalu gagal',
      'B. Karena BST tidak memerlukan perbandingan sama sekali',
      'C. Karena setiap perbandingan menyisakan setengah data, sehingga jumlah langkahnya berkurang drastis',
      'D. Karena BST selalu menyimpan data secara acak',
      'E. Karena BST hanya bisa digunakan pada data kecil'
    ],
    answer: 2,
    explanation: 'Pada BST seimbang, setiap perbandingan mengeliminasi sekitar separuh data tersisa, sehingga kompleksitasnya O(log n), jauh lebih baik dibanding linear search yang O(n).'
  },
  {
    id: 11,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Pada graph tidak berarah, contoh yang sesuai dalam kehidupan sehari-hari adalah.',
    options: [
      'A. Pengikut pada media sosial, karena A mengikuti B tetapi B tidak mengikuti A',
      'B. Urutan pewarisan sifat pada pemrograman berorientasi objek',
      'C. Jalur berjenjang dalam organisasi',
      'D. Pertemanan, karena bila A berteman dengan B maka B juga berteman dengan A',
      'E. Hubungan sebab-akibat pada pemberitaan'
    ],
    answer: 3,
    explanation: 'Graph tidak berarah memiliki edge tanpa arah, sehingga hubungan bersifat simetris. Pertemanan adalah contoh khasnya, sedangkan pengikut media sosial membentuk Directed Graph.'
  },
  {
    id: 12,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Apa yang dimaksud dengan leaf atau daun dalam sebuah tree?',
    options: [
      'A. Node paling atas yang tidak memiliki parent',
      'B. Node yang menghubungkan dua subtree',
      'C. Node yang selalu berada di tengah tree',
      'D. Node yang menyimpan nilai paling besar',
      'E. Node yang tidak memiliki child, yaitu berada di ujung tree'
    ],
    answer: 4,
    explanation: 'Leaf atau daun adalah node yang tidak memiliki child dan berada di ujung-ujung tree. Node paling atas tanpa parent adalah root.'
  },
  {
    id: 13,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Berapa tinggi (height) sebuah tree yang hanya terdiri dari satu node?',
    options: [
      'A. 0',
      'B. 2',
      'C. 1',
      'D. 3',
      'E. Tidak dapat ditentukan'
    ],
    answer: 0,
    explanation: 'Height adalah jumlah edge terpanjang dari root menuju leaf. Tree dengan satu node tidak memiliki edge sama sekali, sehingga tingginya bernilai 0.'
  },
  {
    id: 14,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Algoritma yang bekerja dengan membagi data menjadi dua bagian yang lebih kecil setiap langkahnya adalah.',
    options: [
      'A. Linear search',
      'B. Binary search',
      'C. Bubble sort',
      'D. Pencarian sekuensial',
      'E. Pencarian pada stack'
    ],
    answer: 1,
    explanation: 'Binary search membagi rentang data menjadi dua bagian setiap langkah, sehingga kompleksitasnya O(log n). Linear search dan pencarian sekuensial keduanya O(n).'
  },
  {
    id: 15,
    level: 'C3 - Menerapkan',
    modul: 'Modul 2',
    question: 'Apa yang dimaksud dengan edge dalam sebuah graph?',
    options: [
      'A. Titik atau objek dalam graph',
      'B. Node paling atas pada tree',
      'C. Garis penghubung antara dua vertex',
      'D. Urutan node dalam traversal',
      'E. Bobot yang selalu bernilai satu'
    ],
    answer: 2,
    explanation: 'Edge adalah garis penghubung antara dua vertex, misalnya jalan antar kota, pertemanan, atau tautan. Vertex adalah titik atau objeknya.'
  },
  {
    id: 16,
    level: 'C4 - Menganalisis',
    modul: 'Modul 2',
    question: 'Sebuah tree dipakai untuk menyimpan data siswa berdasarkan nomor induk. Mengapa BST lebih baik daripada array yang belum terurut ketika data sering dicari?',
    options: [
      'A. Karena BST tidak memerlukan perbandingan saat mencari data',
      'B. Karena BST hanya bisa digunakan pada data angka',
      'C. Karena BST selalu menyimpan data secara acak',
      'D. Karena setiap perbandingan pada BST menyisakan opsi yang jauh lebih sedikit, sehingga pencarian lebih cepat',
      'E. Karena BST tidak memerlukan struktur data'
    ],
    answer: 3,
    explanation: 'Pada BST, setiap perbandingan langsung memangkas separuh data yang mungkin menjadi jawaban, sehingga pencarian berlangsung O(log n). Array yang belum terurut memaksa pemeriksaan satu per satu atau O(n).'
  },
  {
    id: 17,
    level: 'C4 - Menganalisis',
    modul: 'Modul 2',
    question: 'Andi memetakan jaringan pertemanan antar siswa dan ingin mencari apakah dua siswa terhubung melalui jaringan tersebut. Struktur data yang paling tepat adalah.',
    options: [
      'A. Stack, karena dapat menyimpan data sementara',
      'B. Linked list, karena tidak memerlukan pointer',
      'C. Tree, karena hanya boleh memiliki satu root',
      'D. Array, karena cukup untuk menyimpan data siswa',
      'E. Graph tidak berarah, karena pertemanan bersifat dua arah'
    ],
    answer: 4,
    explanation: 'Pertemanan membentuk graph tidak berarah, karena hubungan A dengan B berarti B juga berhubungan dengan A. Konektivitas antar dua vertex diperiksa dengan BFS atau DFS.'
  },
  {
    id: 18,
    level: 'C4 - Menganalisis',
    modul: 'Modul 2',
    question: 'Mengapa masalah N-Queens cocok diselesaikan dengan rekursi?',
    options: [
      'A. Karena masalah ini memiliki sub-masalah yang serupa dan menuntut penelusuran kombinasi penempatan yang mungkin',
      'B. Karena jumlah queen-nya sedikit sehingga tidak perlu algoritma apa pun',
      'C. Karena rekursi selalu memberikan solusi terbaik',
      'D. Karena N-Queens tidak memiliki solusi yang valid',
      'E. Karena masalah ini hanya bisa diselesaikan dengan perulangan'
    ],
    answer: 0,
    explanation: 'N-Queens mencoba menempatkan satu queen pada satu baris, memeriksa apakah penempatan itu bentrok dengan queen sebelumnya, lalu melanjutkan ke baris berikutnya. Sub-masalah yang berulang inilah yang membuatnya cocok untuk rekursi.'
  },
  {
    id: 19,
    level: 'C4 - Menganalisis',
    modul: 'Modul 2',
    question: 'Manakah yang paling tepat membedakan kompleksitas O(1) dari O(n)?',
    options: [
      'A. Keduanya sama karena keduanya termasuk kompleksitas konstan',
      'B. O(1) berarti waktu tetap berapa pun banyaknya data, sedangkan O(n) berarti waktu bertambah seiring bertambahnya data',
      'C. O(n) selalu lebih cepat daripada O(1)',
      'D. O(1) hanya bisa digunakan pada data yang sudah terurut',
      'E. O(n) tidak termasuk algoritma pencarian'
    ],
    answer: 1,
    explanation: 'O(1) adalah kompleksitas konstan, misalnya akses array berdasarkan indeks yang waktunya tetap. O(n) adalah linier, misalnya linear search yang waktunya sebanding dengan banyaknya data.'
  },
  {
    id: 20,
    level: 'C4 - Menganalisis',
    modul: 'Modul 2',
    question: 'Sebuah BTS memetakan jaringan kabel. Jarak antar BTS satu sama lain berbeda-beda. Jenis graph yang tepat untuk memodelkan jaringan ini adalah.',
    options: [
      'A. Undirected Graph, karena jarak tidak memiliki arah',
      'B. Unweighted Graph, karena semua edge dianggap sama',
      'C. Weighted Graph, karena setiap edge memiliki nilai berupa jarak atau latensi',
      'D. Tree, karena jaringan pasti berbentuk pohon',
      'E. Stack, karena jarak membentuk urutan bertingkat'
    ],
    answer: 2,
    explanation: 'Weighted Graph memiliki bobot pada setiap edge-nya, dan pada kasus jaringan bobot itu berupa jarak, biaya, atau latensi. Jaringan pada umumnya tidak selalu berbentuk tree.'
  },
  {
    id: 21,
    level: 'C5 - Menilai',
    modul: 'Modul 2',
    question: 'Seorang developer berkata: \'Menggunakan struktur data yang lebih rumit selalu membuat program lebih cepat.\' Bagaimana penilaian yang tepat?',
    options: [
      'A. Benar, semakin rumit struktur data semakin cepat program',
      'B. Salah, karena struktur data tidak berpengaruh pada kecepatan program',
      'C. Benar, karena struktur rumit selalu menggunakan lebih sedikit memori',
      'D. Salah, pemilihan struktur data harus sesuai dengan kebutuhan; struktur yang lebih rumit menambah biaya implementasi dan tidak selalu lebih cepat',
      'E. Benar, jika programnya menggunakan bahasa pemrograman modern'
    ],
    answer: 3,
    explanation: 'Struktur data sebaiknya dipilih sesuai kebutuhan dan jenis operasi. Struktur yang lebih rumit memang bisa lebih cepat untuk operasi tertentu, tetapi menambah biaya pengembangan dan pemeliharaan.'
  },
  {
    id: 22,
    level: 'C5 - Menilai',
    modul: 'Modul 2',
    question: 'Manakah pernyataan yang paling tepat membedakan stack dan queue?',
    options: [
      'A. Keduanya bekerja dengan prinsip yang sama',
      'B. Queue bekerja dengan prinsip LIFO, sedangkan stack bekerja dengan prinsip FIFO',
      'C. Stack hanya bisa menyimpan data angka, sedangkan queue hanya menyimpan teks',
      'D. Keduanya hanya bisa digunakan pada data yang sudah terurut',
      'E. Stack bekerja dengan prinsip LIFO, sedangkan queue bekerja dengan prinsip FIFO'
    ],
    answer: 4,
    explanation: 'Stack mengikuti prinsip LIFO atau masuk-keluar terakhir, misalnya pembatalan aksi pada aplikasi. Queue bekerja dengan prinsip FIFO atau masuk-keluar pertama, misalnya antrean pemrosesan print job.'
  },
  {
    id: 23,
    level: 'C5 - Menilai',
    modul: 'Modul 2',
    question: 'Bagaimana cara terbaik membuktikan bahwa sebuah algoritma pengurutan lebih baik daripada yang lain?',
    options: [
      'A. Dengan membandingkan kompleksitas waktu dan kebutuhan memorinya pada ukuran data yang wajar dan kasus terburuk',
      'B. Dengan melihat kode programnya',
      'C. Dengan menghitung jumlah baris kode paling sedikit',
      'D. Dengan melihat nama algoritmanya',
      'E. Dengan bertanya kepada teman yang lebih senior'
    ],
    answer: 0,
    explanation: 'Algoritma yang lebih baik ditentukan dari analisis kompleksitas waktu (big O) dan penggunaan memori, termasuk kasus terbaik dan terburuk. Nama algoritma dan panjang kode bukan ukuran kualitas.'
  },
  {
    id: 24,
    level: 'C5 - Menilai',
    modul: 'Modul 2',
    question: 'Manakah yang paling tepat menggambarkan hubungan antara breadth-first search dan depth-first search?',
    options: [
      'A. Keduanya mengunjungi node dengan urutan yang persis sama',
      'B. Keduanya sama-sama traversal graph, tetapi BFS mengunjungi secara melebar sedangkan DFS menelusuri sedalam mungkin',
      'C. BFS hanya bisa dipakai pada tree, sedangkan DFS hanya pada graph',
      'D. DFS selalu lebih cepat daripada BFS untuk semua kasus',
      'E. BFS tidak dapat digunakan untuk mencari jalur terpendek'
    ],
    answer: 1,
    explanation: 'BFS mengeksplorasi node per level atau melebar, sedangkan DFS mengikuti satu cabang sedalam mungkin lalu kembali. BFS sering dipakai untuk mencari jalur terpendek pada graph berbobot sama.'
  },
  {
    id: 25,
    level: 'C5 - Menilai',
    modul: 'Modul 2',
    question: 'Manakah yang paling tepat menilai kualitas sebuah algoritma?',
    options: [
      'A. Algoritma yang kodenya terpendek dan paling banyak spasi kosong',
      'B. Algoritma yang menggunakan teknik paling rumit',
      'C. Algoritma yang langkah-langkahnya jelas, dapat diuji, dan sesuai untuk masalah yang ditangani',
      'D. Algoritma yang hanya bisa dijalankan satu kali',
      'E. Algoritma yang tidak menghasilkan keluaran apa pun'
    ],
    answer: 2,
    explanation: 'Kualitas algoritma dinilai dari kejelasan langkah, dapat diuji kebenarannya, dan kesesuaiannya dengan masalah. Panjang kode dan banyaknya spasi kosong tidak menentukan kualitas.'
  }
];
