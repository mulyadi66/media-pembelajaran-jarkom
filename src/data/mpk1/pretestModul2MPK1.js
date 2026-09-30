export default [
  {
    id: 1,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Topologi jaringan dalam arti yang paling tepat adalah...',
    options: [
      'A. Susunan atau bentuk hubungan antar node di dalam jaringan',
      'B. Perangkat lunak untuk mengukur lebar pita',
      'C. Jenis kabel tembaga yang dipakai jaringan',
      'D. Luas area geografis cakupan jaringan',
      'E. Urutan langkah pemasangan perangkat jaringan'
    ],
    answer: 0,
    explanation: 'Topologi menggambarkan bentuk dan pola hubungan antar perangkat, bukan produk fisik, luas area, maupun urutan langkah pemasangan.'
  },
  {
    id: 2,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Pada topologi bus, seluruh node dihubungkan ke...',
    options: [
      'A. Satu perangkat pusat',
      'B. Satu kabel utama atau backbone',
      'C. Seluruh node lain secara langsung',
      'D. Beberapa switch yang disusun berlapis',
      'E. Satu access point'
    ],
    answer: 1,
    explanation: 'Semua node pada topologi bus berbagi satu kabel utama. Data mengalir sepanjang kabel itu dan hanya node dengan alamat sesuai yang menerimanya.'
  },
  {
    id: 3,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Topologi yang setiap node terhubung ke dua node lain sehingga membentuk lingkaran tertutup disebut...',
    options: [
      'A. Star',
      'B. Bus',
      'C. Ring',
      'D. Tree',
      'E. Hybrid'
    ],
    answer: 2,
    explanation: 'Pada topologi ring setiap node tersambung ke dua tetangga sehingga membentuk jalur tertutup. Data bergerak searah melingkar antar node.'
  },
  {
    id: 4,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Pada topologi star, perangkat pusat yang umumnya dipakai adalah...',
    options: [
      'A. Modem',
      'B. Repeater',
      'C. Bridge',
      'D. Switch atau hub',
      'E. Printer jaringan'
    ],
    answer: 3,
    explanation: 'Topologi star berpusat pada satu switch atau hub. Saat ini switch lebih umum karena hanya meneruskan data ke port tujuan, bukan menyiarkan ke semua port.'
  },
  {
    id: 5,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Topologi yang setiap node terhubung langsung ke semua node yang lain disebut...',
    options: [
      'A. Bus',
      'B. Star',
      'C. Ring',
      'D. Tree',
      'E. Mesh'
    ],
    answer: 4,
    explanation: 'Full mesh menghubungkan setiap node ke semua node lainnya sehingga menyediakan banyak jalur cadangan bila salah satu jalur terputus.'
  },
  {
    id: 6,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Komponen yang dipasang di kedua ujung kabel utama topologi bus disebut...',
    options: [
      'A. Terminator',
      'B. Konektor',
      'C. Splitter',
      'D. Repeater',
      'E. Bridge'
    ],
    answer: 0,
    explanation: 'Terminator mengakhiri sinyal di kedua ujung kabel bus supaya pantulan sinyal tidak mengganggu dan merusak data yang dikirim.'
  },
  {
    id: 7,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Topologi yang tersusun berjenjang dengan satu node akar di puncak disebut...',
    options: [
      'A. Mesh',
      'B. Tree',
      'C. Ring',
      'D. Bus',
      'E. Star tunggal'
    ],
    answer: 1,
    explanation: 'Tree adalah rangkaian star berlapis. Akar berada di puncak lalu bercabang ke beberapa switch, dan setiap switch menghubungkan node di bawahnya.'
  },
  {
    id: 8,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Metode akses yang dipakai topologi ring agar tidak terjadi tabrakan data adalah...',
    options: [
      'A. CSMA/CD',
      'B. DHCP',
      'C. Token passing',
      'D. NAT',
      'E. DNS'
    ],
    answer: 2,
    explanation: 'Token passing memberi hak kirim berupa token yang berputar mengelilingi ring. Hanya pemilik token yang boleh mengirim sehingga tidak terjadi tabrakan.'
  },
  {
    id: 9,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Gabungan dua atau lebih topologi berbeda dalam satu jaringan disebut...',
    options: [
      'A. Bus',
      'B. Star',
      'C. Ring',
      'D. Hybrid',
      'E. Mesh'
    ],
    answer: 3,
    explanation: 'Topologi hybrid menggabungkan beberapa bentuk, misalnya star-to-star atau star-to-bus. Pola ini umum dipakai pada jaringan perusahaan besar.'
  },
  {
    id: 10,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 2',
    question: 'Jalur utama berkapasitas besar yang menghubungkan beberapa segmen jaringan disebut...',
    options: [
      'A. Node',
      'B. Terminator',
      'C. Port',
      'D. Collision domain',
      'E. Backbone'
    ],
    answer: 4,
    explanation: 'Backbone adalah jalur utama berkecepatan tinggi yang menghubungkan segmen-segmen jaringan dan menjadi tulang punggung lalu lintasnya.'
  },
  {
    id: 11,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Pada topologi star, berapa kabel yang dibutuhkan untuk menghubungkan 6 PC ke satu switch?',
    options: [
      'A. 6 kabel',
      'B. 12 kabel',
      'C. 15 kabel',
      'D. 21 kabel',
      'E. 30 kabel'
    ],
    answer: 0,
    explanation: 'Tiap PC membutuhkan satu kabel menuju switch pusat sehingga totalnya 6 kabel. Bandingkan dengan full mesh yang membutuhkan 15 kabel untuk jumlah node sama.'
  },
  {
    id: 12,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Berapa jumlah kabel yang dibutuhkan untuk membangun topologi full mesh dengan 5 node?',
    options: [
      'A. 5 kabel',
      'B. 10 kabel',
      'C. 15 kabel',
      'D. 20 kabel',
      'E. 25 kabel'
    ],
    answer: 1,
    explanation: 'Rumus full mesh adalah n dikali n-1 dibagi 2. Untuk 5 node: 5 x 4 dibagi 2 = 10 kabel.'
  },
  {
    id: 13,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Varian topologi mesh yang hanya menghubungkan node yang dianggap penting disebut...',
    options: [
      'A. Full mesh',
      'B. Star',
      'C. Partial mesh',
      'D. Ring',
      'E. Bus'
    ],
    answer: 2,
    explanation: 'Partial mesh mengurangi jumlah kabel dengan tidak menghubungkan semua pasang node, tetapi jalur menuju node penting tetap memiliki cadangan.'
  },
  {
    id: 14,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Sekolah membangun jaringan lokal 30 komputer dengan dana terbatas dan mudah dirawat. Topologi yang paling tepat adalah...',
    options: [
      'A. Full mesh',
      'B. Ring',
      'C. Bus',
      'D. Star',
      'E. Partial mesh'
    ],
    answer: 3,
    explanation: 'Topologi star paling mudah dipasang dan dirawat. Kegagalan satu kabel tidak membuat node lain ikut mati, dan menambah komputer baru cukup satu kabel.'
  },
  {
    id: 15,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Kelemahan utama topologi star adalah...',
    options: [
      'A. Kabel yang dibutuhkan sangat banyak',
      'B. Semua node saling terhubung langsung',
      'C. Sulit menentukan perangkat pusatnya',
      'D. Hanya bisa dipakai untuk maksimal sepuluh node',
      'E. Jika perangkat pusat rusak, seluruh jaringan ikut lumpuh'
    ],
    answer: 4,
    explanation: 'Seluruh komunikasi bergantung pada satu titik pusat, sehingga kondisi itu disebut sebagai single point of failure bagi jaringan.'
  },
  {
    id: 16,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Metode yang dipakai topologi bus untuk menangani tabrakan data adalah...',
    options: [
      'A. CSMA/CD',
      'B. Token passing',
      'C. Circuit switching',
      'D. Store and forward',
      'E. Leased line'
    ],
    answer: 0,
    explanation: 'CSMA/CD berarti Carrier Sense Multiple Access dengan Collision Detection. Perangkat mendengarkan, mengirim, dan bila terjadi tabrakan lalu berhenti lalu mengirim sinyal tabrakan.'
  },
  {
    id: 17,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Topologi mesh jarang dipakai pada jaringan lokal kecil dengan banyak node karena...',
    options: [
      'A. Data tidak dapat mengalir di dalamnya',
      'B. Kabel yang dibutuhkan sangat banyak sehingga biayanya mahal',
      'C. Tidak menyediakan jalur cadangan',
      'D. Harus memakai token passing',
      'E. Hanya mendukung lima node'
    ],
    answer: 1,
    explanation: 'Jumlah kabel bertambah secara kuadratik. Untuk sepuluh node saja sudah dibutuhkan 45 kabel, dan setiap sambungan baru menambah beban pemeliharaan.'
  },
  {
    id: 18,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Fiber Distributed Data Interface atau FDDI merupakan contoh topologi...',
    options: [
      'A. Star',
      'B. Bus',
      'C. Ring ganda',
      'D. Tree',
      'E. Mesh'
    ],
    answer: 2,
    explanation: 'FDDI memakai dua cincin dengan arah putaran berlawanan. Bila salah satu cincin terputus, cincin kedua masih dapat meneruskan data.'
  },
  {
    id: 19,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Pada topologi tree, jika salah satu switch di tengah cabang rusak, yang terjadi adalah...',
    options: [
      'A. Seluruh jaringan langsung mati',
      'B. Kabel menuju semua node lain ikut terputus',
      'C. Jaringan otomatis berubah menjadi mesh',
      'D. Hanya cabang di bawah switch itu yang kehilangan koneksi',
      'E. Terminator pada ujung backbone harus diganti'
    ],
    answer: 3,
    explanation: 'Tree bersifat hierarkis sehingga kerusakan sebuah switch hanya memengaruhi cabang di bawahnya. Cabang lain tetap berjalan karena jalurnya berbeda.'
  },
  {
    id: 20,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 2',
    question: 'Sebuah toko memiliki tiga kasir dan satu server di dalam satu ruangan. Topologi paling sederhana yang tetap andal adalah...',
    options: [
      'A. Full mesh',
      'B. Ring',
      'C. Bus',
      'D. Partial mesh',
      'E. Star'
    ],
    answer: 4,
    explanation: 'Star dengan satu switch memberi jalur terpisah dari tiap kasir ke server, kabel mudah dikelola, dan kasir baru cukup disambungkan satu kabel.'
  },
  {
    id: 21,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Bandingkan kebutuhan kabel untuk enam node pada topologi star dan full mesh. Pernyataan yang benar adalah...',
    options: [
      'A. Star butuh enam kabel, full mesh butuh 15 kabel',
      'B. Star butuh enam kabel, full mesh butuh 21 kabel',
      'C. Star butuh 15 kabel, full mesh butuh enam kabel',
      'D. Star butuh 21 kabel, full mesh butuh 15 kabel',
      'E. Star butuh lima kabel, full mesh butuh 15 kabel'
    ],
    answer: 0,
    explanation: 'Star hanya butuh satu kabel per node menuju pusat yaitu enam. Full mesh memakai rumus n dikali n-1 dibagi 2 sehingga 6 x 5 dibagi 2 = 15 kabel.'
  },
  {
    id: 22,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Kantor pusat di kota A terhubung dengan empat cabang di kota berbeda, dan setiap cabang memakai jaringan lokal star. Topologi keseluruhan jaringan tersebut adalah...',
    options: [
      'A. Satu bus tunggal',
      'B. Hybrid',
      'C. Satu ring tunggal',
      'D. Full mesh pada masing-masing cabang saja',
      'E. Mesh penuh di antara seluruh kantor'
    ],
    answer: 1,
    explanation: 'Hubungan antar kantor melalui WAN yang setiap cabangnya memakai topologi star membentuk pola hybrid, yaitu gabungan beberapa topologi berbeda.'
  },
  {
    id: 23,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Konsep dua cincin pada FDDI meningkatkan keandalan jaringan karena...',
    options: [
      'A. Kedua cincin berjalan searah agar bandwidth bertambah',
      'B. Kedua cincin diletakkan di gedung yang berbeda',
      'C. Kedua cincin berjalan berlawanan arah sebagai jalur cadangan',
      'D. Kedua cincin hanya khusus untuk data suara',
      'E. Kedua cincin tidak memakai token passing'
    ],
    answer: 2,
    explanation: 'Dua cincin dengan arah berlawanan membuat data selalu punya jalur alternatif, sehingga satu cincin yang terputus tidak menghentikan layanan.'
  },
  {
    id: 24,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Sebuah jaringan punya delapan node. Bandingkan jumlah kabel full mesh dengan topologi star yang memakai satu switch. Pernyataan yang tepat adalah...',
    options: [
      'A. Full mesh 56 kabel, star 8 kabel',
      'B. Full mesh 8 kabel, star 28 kabel',
      'C. Full mesh 28 kabel, star 56 kabel',
      'D. Full mesh 28 kabel, star 8 kabel',
      'E. Full mesh 24 kabel, star 8 kabel'
    ],
    answer: 3,
    explanation: 'Full mesh untuk delapan node memakai rumus 8 x 7 dibagi 2 = 28 kabel. Star cukup delapan kabel karena setiap node hanya satu jalur ke switch pusat.'
  },
  {
    id: 25,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Sebuah akademi memiliki empat ruangan dengan lima belas komputer di tiap ruangan dan ingin jaringan terpusat yang mudah dikelola. Rancangan paling tepat adalah...',
    options: [
      'A. Empat jaringan bus yang tidak saling terhubung',
      'B. Empat jaringan full mesh terpisah',
      'C. Satu jaringan mesh penuh untuk seluruh ruangan',
      'D. Satu bus tunggal tanpa perangkat penghubung',
      'E. Pola star-to-star atau tree dengan switch pusat'
    ],
    answer: 4,
    explanation: 'Star-to-star menyambungkan tiap ruangan lewat switch, lalu seluruh switch disambung ke satu switch pusat sebagai jalur utama yang mudah dikelola.'
  },
  {
    id: 26,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Pada topologi star, titik yang disebut sebagai single point of failure adalah...',
    options: [
      'A. Switch pusat',
      'B. Kabel dari satu komputer ke switch',
      'C. Salah satu node pengguna',
      'D. Terminator di ujung kabel',
      'E. Monitor server'
    ],
    answer: 0,
    explanation: 'Seluruh node bergantung pada switch pusat, sehingga apabila switch itu mati seluruh jaringan terputus. Inilah kelemahan star yang paling sering dibahas.'
  },
  {
    id: 27,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Bandingkan luas collision domain pada topologi bus dan topologi star yang memakai switch. Pernyataan yang benar adalah...',
    options: [
      'A. Keduanya sama karena sama-sama memakai satu media',
      'B. Pada bus satu domain, pada star satu domain per port switch',
      'C. Pada bus satu domain per node, pada star satu domain',
      'D. Keduanya tidak memiliki collision domain',
      'E. Hanya topologi bus yang memiliki collision domain'
    ],
    answer: 1,
    explanation: 'Semua komputer pada bus berbagi satu domain tabrakan. Pada switch, setiap port punya domain tabrakan sendiri sehingga tabrakan tidak merambat ke port lain.'
  },
  {
    id: 28,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Mengapa topologi bus disebut memiliki collision domain yang besar?',
    options: [
      'A. Karena memakai token passing',
      'B. Karena menggunakan media fiber optik',
      'C. Karena semua node berbagi satu media sehingga bisa mengirim bersamaan',
      'D. Karena setiap node memiliki switch pribadi',
      'E. Karena jaringan disusun berlapis'
    ],
    answer: 2,
    explanation: 'Bila dua node mengirim data pada saat bersamaan, sinyalnya bertabrakan. Karena semua node berbagi media yang sama, dampaknya mengenai seluruh jaringan.'
  },
  {
    id: 29,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Sebuah jaringan lokal dimigrasikan dari hub ke switch. Perubahan paling penting yang dirasakan pengguna adalah...',
    options: [
      'A. Tidak ada perubahan sama sekali',
      'B. Nama perangkat berubah dari hub menjadi switch',
      'C. Kabel harus diganti menjadi fiber optik',
      'D. Tabrakan data berkurang drastis karena tiap port punya domain sendiri',
      'E. Semua komputer harus memasang ulang sistem operasinya'
    ],
    answer: 3,
    explanation: 'Pada hub semua port berbagi satu domain tabrakan sehingga lalu lintas turun. Switch mengisolasi tiap port sehingga tabrakan antar komputer tidak saling mengganggu.'
  },
  {
    id: 30,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 2',
    question: 'Sebuah organisasi butuh ketersediaan tinggi karena empat kantor cabang harus tetap saling terhubung meski salah satu jalur utama terputus. Topologi paling tepat adalah...',
    options: [
      'A. Bus tunggal',
      'B. Ring tunggal tanpa cadangan',
      'C. Star tanpa perangkat cadangan',
      'D. Satu kabel backbone tunggal',
      'E. Partial mesh dengan jalur cadangan'
    ],
    answer: 4,
    explanation: 'Partial mesh dengan jalur cadangan menyediakan opsi rute alternatif, sehingga satu jalur yang putus tidak langsung menghentikan komunikasi antar kantor.'
  }
];
