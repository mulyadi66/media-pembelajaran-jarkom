export const modul1PostTest = [
  {
    id: 1,
    level: 'C4 - Menganalisis',
    question: 'Sebuah lab komputer memiliki 40 PC dan setiap PC melakukan streaming video HD (±5 Mbps). Jika ditambahkan margin 20% untuk peak load, berapa total bandwidth minimal yang perlu disediakan?',
    options: [
      'A. 40 Mbps',
      'B. 200 Mbps',
      'C. 240 Mbps',
      'D. 220 Mbps',
      'E. 260 Mbps'
    ],
    answer: 2,
    explanation: '40 PC × 5 Mbps = 200 Mbps. Margin 20% = 40 Mbps. Total = 200 + 40 = 240 Mbps.'
  },
  {
    id: 2,
    level: 'C2 - Memahami',
    question: 'Perangkat yang meneruskan paket antar jaringan berbeda berdasarkan alamat IP adalah…',
    options: [
      'A. Hub',
      'B. Switch',
      'C. Router',
      'D. Bridge',
      'E. NIC'
    ],
    answer: 2,
    explanation: 'Router bekerja di Layer 3 (network) dan merutekan paket antar jaringan berbeda berdasarkan alamat IP.'
  },
  {
    id: 3,
    level: 'C3 - Menerapkan',
    question: 'Urutan warna pin 1–8 standar T568B yang benar adalah…',
    options: [
      'A. Hijau Putih, Hijau, Oranye Putih, Biru, Biru Putih, Oranye, Coklat Putih, Coklat',
      'B. Oranye Putih, Oranye, Hijau Putih, Biru, Biru Putih, Hijau, Coklat Putih, Coklat',
      'C. Oranye Putih, Oranye, Hijau Putih, Hijau, Biru Putih, Biru, Coklat Putih, Coklat',
      'D. Hijau Putih, Hijau, Oranye Putih, Oranye, Biru Putih, Biru, Coklat Putih, Coklat',
      'E. Biru Putih, Biru, Oranye Putih, Oranye, Hijau Putih, Hijau, Coklat Putih, Coklat'
    ],
    answer: 1,
    explanation: 'T568B: 1 Oranye Putih, 2 Oranye, 3 Hijau Putih, 4 Biru, 5 Biru Putih, 6 Hijau, 7 Coklat Putih, 8 Coklat.'
  },
  {
    id: 4,
    level: 'C3 - Menerapkan',
    question: 'Kabel yang tepat untuk menghubungkan langsung dua PC (PC ke PC) tanpa switch adalah…',
    options: [
      'A. Straight-through',
      'B. Crossover',
      'C. Rollover',
      'D. Serial',
      'E. Coaxial'
    ],
    answer: 1,
    explanation: 'Perangkat sejenis (PC ke PC) memakai kabel crossover (ujung A: 568A, ujung B: 568B). Perangkat berbeda jenis (PC ke Switch) memakai straight-through.'
  },
  {
    id: 5,
    level: 'C4 - Menganalisis',
    question: 'Dalam instalasi jaringan, media transmisi yang bebas dari interferensi elektromagnetik dan mampu menjangkau jarak jauh adalah…',
    options: [
      'A. Kabel UTP Cat 5e',
      'B. Kabel STP',
      'C. Fiber Optik',
      'D. Kabel Coaxial',
      'E. Kabel telepon RJ-11'
    ],
    answer: 2,
    explanation: 'Fiber optik menggunakan cahaya, sehingga bebas interferensi elektromagnetik dan dapat menjangkau jarak jauh (hingga puluhan km) tanpa kehilangan sinyal berarti.'
  },
  {
    id: 6,
    level: 'C2 - Memahami',
    question: 'Kecepatan akhir sebuah segmen jaringan ditentukan oleh…',
    options: [
      'A. Kabel dengan kategori tertinggi',
      'B. Perangkat terlemah dalam jalur',
      'C. Panjang kabel',
      'D. Jumlah konektor',
      'E. Merek switch'
    ],
    answer: 1,
    explanation: 'Kategori kabel lebih tinggi tidak menjamin kecepatan lebih tinggi — kecepatan akhir dibatasi perangkat terlemah (mis. kabel Cat6a tetap 1 Gbps jika switch hanya 1 Gbps).'
  },
  {
    id: 7,
    level: 'C6 - Menciptakan',
    question: 'Sebuah kantor ingin menghubungkan 25 PC ke internet dengan keamanan memadai dan cadangan listrik. Kombinasi perangkat yang paling tepat adalah…',
    options: [
      'A. Hanya 1 hub besar tanpa router',
      'B. Switch 24 port, router, firewall, dan UPS',
      'C. Switch + laptop',
      'D. Router saja tanpa switch',
      'E. Kabel coaxial + repeater'
    ],
    answer: 1,
    explanation: 'Switch menghubungkan PC dalam LAN, router menghubungkan ke internet, firewall menjaga keamanan, dan UPS mencegah mati mendadak.'
  },
  {
    id: 8,
    level: 'C5 - Mengevaluasi',
    question: 'Saat crimping, lampu LAN tester tidak menyala di urutan yang benar. Analisis penyebab yang paling mungkin adalah…',
    options: [
      'A. Urutan warna salah atau kabel tidak mentok',
      'B. Kabel terlalu panjang',
      'C. Menggunakan konektor RJ-11',
      'D. Kategori kabel terlalu tinggi',
      'E. Port switch penuh'
    ],
    answer: 0,
    explanation: 'Urutan warna salah atau kabel tidak mentok di ujung konektor menyebabkan kontak tidak sempurna sehingga lampu tester tidak menyala urut.'
  },
  {
    id: 9,
    level: 'C2 - Memahami',
    question: 'ALat yang digunakan untuk memotong, mengupas, dan menjepit konektor RJ-45 ke kabel UTP dalam satu perangkat adalah…',
    options: [
      'A. Cable tester',
      'B. Tang Crimping',
      'C. Obeng',
      'D. Tang potong',
      'E. Multimeter'
    ],
    answer: 1,
    explanation: 'Tang crimping memiliki fungsi pemotong, pengupas jaket, dan penjepit konektor dalam satu alat.'
  },
  {
    id: 10,
    level: 'C4 - Menganalisis',
    question: '1000BASE-T (Gigabit Ethernet) menggunakan kabel minimal kategori…',
    options: [
      'A. Cat 3',
      'B. Cat 5',
      'C. Cat 5e',
      'D. Cat 7',
      'E. Cat 6a'
    ],
    answer: 2,
    explanation: '1000BASE-T membutuhkan minimal Cat5e untuk mendukung 1 Gbps, meskipun Cat6 juga umum dipakai.'
  },
  {
    id: 11,
    level: 'C2 - Memahami',
    question: 'Dalam analisis kebutuhan jaringan, faktor yang paling menentukan kapasitas switch dan kebutuhan bandwidth adalah…',
    options: [
      'A. Jumlah pengguna dan tipe penggunaan',
      'B. Merek perangkat jaringan',
      'C. Warna kabel UTP',
      'D. Ukuran ruang server',
      'E. Jumlah monitor di setiap PC'
    ],
    answer: 0,
    explanation: 'Volume pengguna menentukan kapasitas switch (jumlah port) dan tipe penggunaan menentukan besaran bandwidth yang harus disediakan.'
  },
  {
    id: 12,
    level: 'C4 - Menganalisis',
    question: 'Di antara aplikasi berikut, yang membutuhkan bandwidth paling besar per pengguna adalah…',
    options: [
      'A. Browsing web',
      'B. Email',
      'C. Chat teks',
      'D. Streaming video HD',
      'E. VoIP telepon'
    ],
    answer: 3,
    explanation: 'Streaming video HD membutuhkan ±5 Mbps per pengguna — jauh lebih besar daripada browsing (±1 Mbps), email/chat, dan VoIP (±0,1–0,5 Mbps).'
  },
  {
    id: 13,
    level: 'C2 - Memahami',
    question: 'Membeli switch dan router dengan spesifikasi jauh di atas kebutuhan pengguna disebut over-specification. Dampaknya adalah…',
    options: [
      'A. Jaringan berjalan lebih lambat',
      'B. Pemborosan biaya',
      'C. Perangkat cepat rusak',
      'D. Listrik lebih hemat',
      'E. Tidak ada dampak'
    ],
    answer: 1,
    explanation: 'Over-specification = spesifikasi perangkat melebihi kebutuhan, yang berakibat pemborosan biaya tanpa manfaat nyata. Kebalikannya, under-specification, menyebabkan kinerja buruk.'
  },
  {
    id: 14,
    level: 'C3 - Menerapkan',
    question: 'Perangkat yang mengubah sinyal digital dari komputer menjadi sinyal analog/optik agar dapat dikirim melalui jalur ISP (ADSL/fiber) adalah…',
    options: [
      'A. Switch',
      'B. Router',
      'C. Modem',
      'D. Repeater',
      'E. Access Point'
    ],
    answer: 2,
    explanation: 'Modem (modulator-demodulator) mengubah sinyal digital ↔ analog (atau cahaya untuk fiber ONT). Contoh: modem ADSL, ONT fiber.'
  },
  {
    id: 15,
    level: 'C2 - Memahami',
    question: 'Perangkat keamanan/layanan yang membagi trafik ke beberapa server agar beban tidak menumpuk di satu server adalah…',
    options: [
      'A. Firewall',
      'B. Proxy Server',
      'C. VPN Gateway',
      'D. Load Balancer',
      'E. UPS'
    ],
    answer: 3,
    explanation: 'Load balancer membagi beban trafik ke beberapa server agar tidak overload sehingga ketersediaan layanan tetap terjaga. Firewall menyaring lalu lintas, proxy memfilter/menyerap konten.'
  },
  {
    id: 16,
    level: 'C3 - Menerapkan',
    question: 'Dua segmen LAN di kampus disambungkan melalui sebuah perangkat yang menyaring frame berdasarkan MAC address. Perangkat tersebut adalah…',
    options: [
      'A. Hub',
      'B. Bridge',
      'C. Router',
      'D. Repeater',
      'E. Access Point'
    ],
    answer: 1,
    explanation: 'Bridge bekerja di Layer 2 (data link): menggabungkan dua segmen LAN dan melakukan filtering berdasarkan MAC address.'
  },
  {
    id: 17,
    level: 'C4 - Menganalisis',
    question: 'Koneksi point-to-point antar gedung memakai teknologi nirkabel dengan antena searah yang memerlukan line-of-sight tanpa halangan. Teknologi tersebut adalah…',
    options: [
      'A. Wi-Fi',
      'B. Bluetooth',
      'C. Microwave',
      'D. Satelit',
      'E. LTE'
    ],
    answer: 2,
    explanation: 'Microwave memakai frekuensi tinggi untuk point-to-point jarak jauh dan membutuhkan line-of-sight (pandangan lurus tanpa halangan) antara kedua antena.'
  },
  {
    id: 18,
    level: 'C2 - Memahami',
    question: 'Konektor yang digunakan pada kabel UTP/STP untuk jaringan Ethernet adalah…',
    options: [
      'A. RJ-11',
      'B. RJ-45',
      'C. SC',
      'D. ST',
      'E. BNC'
    ],
    answer: 1,
    explanation: 'RJ-45 adalah konektor 8 pin standar Ethernet untuk UTP/STP. RJ-11 untuk telepon (6 pin), SC/ST/LC untuk fiber optik, BNC untuk coaxial.'
  },
  {
    id: 19,
    level: 'C2 - Memahami',
    question: 'Kabel UTP Category 5e (Cat5e) mendukung kecepatan maksimal hingga…',
    options: [
      'A. 10 Mbps',
      'B. 100 Mbps',
      'C. 1 Gbps',
      'D. 10 Gbps',
      'E. 100 Gbps'
    ],
    answer: 2,
    explanation: 'Cat5e mendukung 1000BASE-T (Gigabit Ethernet) yaitu 1 Gbps. Cat3 = 10 Mbps, Cat5 = 100 Mbps, Cat6a/Cat7 = 10 Gbps.'
  },
  {
    id: 20,
    level: 'C3 - Menerapkan',
    question: 'Pada koneksi 100BASE-TX (Fast Ethernet), pasangan kabel yang aktif untuk mengirim dan menerima data adalah…',
    options: [
      'A. 1-2 dan 4-5',
      'B. 1-2 dan 3-6',
      'C. 3-6 dan 7-8',
      'D. 4-5 dan 7-8',
      'E. Semua 4 pasangan'
    ],
    answer: 1,
    explanation: 'Fast Ethernet hanya memakai pasangan pin 1-2 (transmit) dan 3-6 (receive). Gigabit (1000BASE-T) memakai keempat pasangan kabel.'
  },
  {
    id: 21,
    level: 'C3 - Menerapkan',
    question: 'Kabel straight-through dibuat dengan kedua ujung sama (mis. T568B–T568B). Fungsinya adalah menghubungkan…',
    options: [
      'A. PC ke PC',
      'B. Switch ke Switch',
      'C. PC ke Switch',
      'D. Hub ke Hub',
      'E. Router ke Router'
    ],
    answer: 2,
    explanation: 'Straight-through dipakai untuk perangkat berbeda jenis (PC ke Switch). Perangkat sejenis (PC ke PC) memakai crossover. Switch/router modern mendukung auto-MDIX.'
  },
  {
    id: 22,
    level: 'C2 - Memahami',
    question: 'Standar 802.11ac (Wi-Fi 5) bekerja pada frekuensi…',
    options: [
      'A. 2.4 GHz saja',
      'B. 5 GHz',
      'C. 900 MHz',
      'D. 6 GHz',
      'E. 1.8 GHz'
    ],
    answer: 1,
    explanation: '802.11ac (Wi-Fi 5) menggunakan 5 GHz dengan kecepatan hingga 6,9 Gbps. Band 6 GHz mulai dipakai pada 802.11ax (Wi-Fi 6E).'
  },
  {
    id: 23,
    level: 'C4 - Menganalisis',
    question: 'Backbone fiber optik antar kota (WAN) paling tepat menggunakan jenis…',
    options: [
      'A. Multi-mode dengan LED',
      'B. Single-mode dengan laser',
      'C. Multi-mode 50 µm',
      'D. Single-mode dengan LED',
      'E. UTP Cat 6a'
    ],
    answer: 1,
    explanation: 'Single-mode (inti ±9 µm) dengan sumber laser mampu menjangkau puluhan kilometer — cocok untuk backbone antar kota. Multi-mode (±550 m–2 km) untuk LAN gedung/kampus.'
  },
  {
    id: 24,
    level: 'C4 - Menganalisis',
    question: 'Untuk jaringan kantor standar dengan 30 PC, teknologi yang paling tepat untuk koneksi kabel antar workstation adalah…',
    options: [
      'A. 10BASE-T',
      'B. Fast Ethernet',
      'C. Gigabit Ethernet (Cat5e/Cat6)',
      'D. 10GBASE-T',
      'E. Dial-up modem'
    ],
    answer: 2,
    explanation: 'Gigabit Ethernet (1000BASE-T) dengan Cat5e/Cat6 adalah standar minimal jaringan kantor saat ini: cepat, murah, dan mendukung hingga 100 m. 10GBASE-T berlebihan untuk workstation.'
  },
  {
    id: 25,
    level: 'C5 - Mengevaluasi',
    question: 'Jangkauan Wi-Fi lantai 1 tidak sampai ke lantai 2 di gedung 2 lantai. Solusi perangkat yang paling tepat adalah…',
    options: [
      'A. Menambah LAN tester',
      'B. Memasang Access Point tambahan atau Wi-Fi repeater di lantai 2',
      'C. Mengganti semua kabel dengan Cat 7',
      'D. Menambah konektor RJ-45',
      'E. Memakai kabel crossover antar lantai'
    ],
    answer: 1,
    explanation: 'Access Point tambahan atau repeater memperluas area nirkabel ke lantai 2. LAN tester/crimping tidak menambah sinyal, dan mengganti kabel tidak menyelesaikan masalah jangkauan Wi-Fi.'
  },
];

export const modul2PostTest = [
  {
    id: 1,
    level: 'C4 - Menganalisis',
    question: 'Dalam topologi star, jika salah satu kabel dari PC ke switch putus, dampaknya adalah…',
    options: [
      'A. Seluruh jaringan mati',
      'B. Hanya PC yang kabelnya putus yang terputus',
      'C. Semua PC tidak bisa internet',
      'D. Switch ikut rusak',
      'E. Jaringan menjadi topologi ring'
    ],
    answer: 1,
    explanation: 'Topologi star memiliki jalur independen tiap node ke pusat, sehingga satu kabel putus hanya memengaruhi node itu saja.'
  },
  {
    id: 2,
    level: 'C3 - Menerapkan',
    question: 'Jumlah kabel yang dibutuhkan untuk topologi full mesh dengan 6 node adalah… (rumus n(n−1)/2)',
    options: [
      'A. 12 kabel',
      'B. 15 kabel',
      'C. 18 kabel',
      'D. 20 kabel',
      'E. 30 kabel'
    ],
    answer: 1,
    explanation: '6×(6−1)/2 = 15 kabel. Full mesh menghubungkan setiap node ke semua node lain.'
  },
  {
    id: 3,
    level: 'C4 - Menganalisis',
    question: 'Jenis topologi yang menggunakan token passing sehingga data tidak pernah bertabrakan adalah…',
    options: [
      'A. Bus',
      'B. Star',
      'C. Mesh',
      'D. Ring',
      'E. Tree'
    ],
    answer: 3,
    explanation: 'Pada topologi ring, token (paket khusus) beredar dari node ke node — hanya pemegang token yang boleh mengirim, sehingga tabrakan data tidak terjadi.'
  },
  {
    id: 4,
    level: 'C5 - Mengevaluasi',
    question: 'Untuk jaringan kritis yang membutuhkan keandalan tinggi dengan banyak jalur cadangan, topologi paling sesuai adalah…',
    options: [
      'A. Bus',
      'B. Ring',
      'C. Mesh',
      'D. Star',
      'E. Linear'
    ],
    answer: 2,
    explanation: 'Mesh menyediakan banyak jalur redundansi antar node, sehingga bila satu jalur gagal masih ada jalur alternatif — cocok untuk backbone WAN dan jaringan kritis.'
  },
  {
    id: 5,
    level: 'C2 - Memahami',
    question: 'Perangkat pusat pada topologi star (mis. switch/hub) menjadi titik lemah karena…',
    options: [
      'A. Kabelnya murah',
      'B. Jika perangkat pusat rusak, seluruh node terganggu',
      'C. Tidak mendukung broadcast',
      'D. Mudah ditambahkan node',
      'E. Cepat panas'
    ],
    answer: 1,
    explanation: 'Topologi star bergantung pada perangkat pusat. Jika switch/hub rusak, semua node yang terhubung padanya tidak bisa berkomunikasi.'
  },
  {
    id: 6,
    level: 'C2 - Memahami',
    question: 'Metode akses yang digunakan pada topologi bus untuk menangani tabrakan data adalah…',
    options: [
      'A. Token passing',
      'B. CSMA/CD',
      'C. Polling',
      'D. Frequency hopping',
      'E. Time division'
    ],
    answer: 1,
    explanation: 'CSMA/CD (Carrier Sense Multiple Access with Collision Detection): setiap node mendengar jalur sebelum mengirim; jika terjadi tabrakan, node mengirim ulang setelah jeda acak.'
  },
  {
    id: 7,
    level: 'C6 - Menciptakan',
    question: 'Desain topologi yang menggabungkan dua atau lebih topologi berbeda dalam satu jaringan disebut…',
    options: [
      'A. Star',
      'B. Mesh',
      'C. Tree',
      'D. Hybrid',
      'E. Bus'
    ],
    answer: 3,
    explanation: 'Topologi hybrid adalah gabungan beberapa topologi, misalnya star-to-star atau star-to-bus — umum di perusahaan besar.'
  },
  {
    id: 8,
    level: 'C4 - Menganalisis',
    question: 'Topologi tree tersusun sebagai hierarki nested star. Titik single point of failure utama pada topologi ini adalah…',
    options: [
      'A. Semua PC',
      'B. Node root (server/switch utama) di puncak',
      'C. Kabel antar switch',
      'D. Pendingin ruangan',
      'E. Setiap PC yang berada di level bawah'
    ],
    answer: 1,
    explanation: 'Pada tree, node root di puncak menjadi tulang punggung — jika rusak, seluruh turunan di bawahnya ikut terganggu.'
  },
  {
    id: 9,
    level: 'C2 - Memahami',
    question: 'Topologi yang paling hemat kabel untuk jaringan kecil sementara (misal beberapa PC bertukar data) adalah…',
    options: [
      'A. Star',
      'B. Mesh',
      'C. Bus',
      'D. Ring',
      'E. Hybrid'
    ],
    answer: 2,
    explanation: 'Bus hanya memakai satu kabel backbone, sehingga paling hemat — meski kelemahannya satu kabel putus memutus seluruh jaringan.'
  },
  {
    id: 10,
    level: 'C4 - Menganalisis',
    question: 'Pada topologi ring, jika salah satu node rusak, jaringan akan…',
    options: [
      'A. Tetap normal',
      'B. Terputus karena aliran data melingkar terhenti',
      'C. Otomatis menjadi star',
      'D. Hanya node itu yang terputus',
      'E. Berpindah ke switch'
    ],
    answer: 1,
    explanation: 'Ring bersifat melingkar berurutan — kegagalan satu node dapat memutus lingkaran dan menghentikan aliran data (jaringan ring klasik seperti Token Ring).'
  },
  {
    id: 11,
    level: 'C2 - Memahami',
    question: 'Jaringan memakai Hub sebagai pusat: kabelnya tersusun seperti bintang, tetapi data disiarkan ke semua port. Yang benar tentang jaringan ini adalah…',
    options: [
      'A. Fisiknya bus, logisnya star',
      'B. Fisiknya star, logisnya bus',
      'C. Fisik dan logis sama-sama bus',
      'D. Fisik dan logis sama-sama star',
      'E. Fisiknya ring, logisnya mesh'
    ],
    answer: 1,
    explanation: 'Hub menyiarkan data ke semua port (perilaku bus) tetapi semua kabel menuju satu pusat (bentuk fisik star). Inilah contoh klasik topologi fisik berbeda dari topologi logis.'
  },
  {
    id: 12,
    level: 'C2 - Memahami',
    question: 'Istilah jaringan untuk satu titik yang jika rusak akan memutus seluruh jaringan adalah…',
    options: [
      'A. Backbone',
      'B. Segment',
      'C. Link',
      'D. Single Point of Failure (SPOF)',
      'E. Node'
    ],
    answer: 3,
    explanation: 'SPOF adalah satu titik yang jika gagal membuat seluruh jaringan tidak berfungsi — contoh: kabel utama bus, switch pusat star, dan root pada tree.'
  },
  {
    id: 13,
    level: 'C2 - Memahami',
    question: 'Jalur utama berkapasitas besar yang menampung lalu lintas antar segmen dalam jaringan disebut…',
    options: [
      'A. Backbone',
      'B. Segment',
      'C. Terminator',
      'D. Node',
      'E. Collision domain'
    ],
    answer: 0,
    explanation: 'Backbone adalah jalur utama berkapasitas besar yang menghubungkan antar segmen, misalnya kabel utama topologi bus atau link antar switch pada tree.'
  },
  {
    id: 14,
    level: 'C3 - Menerapkan',
    question: 'Fungsi terminator yang dipasang di kedua ujung kabel utama topologi bus adalah…',
    options: [
      'A. Mempercepat transfer data',
      'B. Menyerap sinyal agar tidak memantul kembali ke kabel',
      'C. Menambah jumlah node',
      'D. Mengubah data menjadi sinyal',
      'E. Menyimpan cache data'
    ],
    answer: 1,
    explanation: 'Terminator berfungsi menyerap sinyal di ujung kabel sehingga sinyal tidak memantul kembali dan menabrak sinyal lain. Jika terminator dilepas, komunikasi terganggu.'
  },
  {
    id: 15,
    level: 'C4 - Menganalisis',
    question: 'Semakin banyak node pada topologi bus, kinerja semakin menurun. Alasan utamanya adalah…',
    options: [
      'A. Kabel cepat aus',
      'B. Sering terjadi tabrakan data (collision) karena semua node berbagi satu jalur',
      'C. Perangkat keras makin panas',
      'D. Terminator penuh',
      'E. Broadcast address berubah'
    ],
    answer: 1,
    explanation: 'Pada bus, semua node berbagi satu medium dan memakai CSMA/CD. Makin banyak node makin sering dua node mengirim bersamaan → collision makin sering → kinerja menurun.'
  },
  {
    id: 16,
    level: 'C2 - Memahami',
    question: 'Topologi mesh yang hanya menghubungkan node-node yang dianggap penting disebut…',
    options: [
      'A. Full mesh',
      'B. Partial mesh',
      'C. Hybrid mesh',
      'D. Star mesh',
      'E. Logical mesh'
    ],
    answer: 1,
    explanation: 'Partial mesh hanya menghubungkan node-node penting secara langsung; full mesh menghubungkan setiap node ke semua node lain (rumus n(n−1)/2 kabel).'
  },
  {
    id: 17,
    level: 'C4 - Menganalisis',
    question: 'Alasan utama topologi mesh jarang dipakai pada LAN kecil dengan banyak perangkat adalah…',
    options: [
      'A. Kecepatannya rendah',
      'B. Biaya kabel sangat tinggi karena tiap node terhubung ke semua node',
      'C. Sulit mendapat kabel',
      'D. Tidak mendukung switch',
      'E. Hanya untuk jaringan nirkabel'
    ],
    answer: 1,
    explanation: 'Full mesh n node membutuhkan n(n−1)/2 kabel — sangat mahal dan kompleks. Karena itu mesh dicadangkan untuk jaringan kritis/WAN yang membutuhkan keandalan tinggi.'
  },
  {
    id: 18,
    level: 'C2 - Memahami',
    question: 'FDDI (Fiber Distributed Data Interface) memakai dua cincin dengan arah berlawanan. Tujuannya adalah…',
    options: [
      'A. Menambah kecepatan dua kali lipat',
      'B. Menyediakan jalur cadangan jika satu cincin putus',
      'C. Mengganti kabel fiber dengan tembaga',
      'D. Menghilangkan token passing',
      'E. Menambah jumlah node'
    ],
    answer: 1,
    explanation: 'Dual ring FDDI memberi redundansi — bila satu cincin putus, cincin kedua bisa mengambil alih sehingga komunikasi tetap berjalan.'
  },
  {
    id: 19,
    level: 'C5 - Mengevaluasi',
    question: 'Sekolah membangun LAN 60 PC di 3 ruangan, dana terbatas, mudah dikelola, dan jumlah PC bertambah tiap tahun. Topologi yang paling tepat adalah…',
    options: [
      'A. Bus',
      'B. Full mesh',
      'C. Ring',
      'D. Tree (star bertingkat)',
      'E. Point-to-point'
    ],
    answer: 3,
    explanation: 'Tree (star bertingkat): 1 switch utama + 1 switch per ruangan. Biaya menengah, mudah dikelola per ruangan, skalabilitas tinggi, dan kegagalan switch satu ruangan tidak mematikan seluruh jaringan.'
  },
  {
    id: 20,
    level: 'C2 - Memahami',
    question: 'Jaringan yang menggunakan Hub dianggap boros bandwidth karena Hub…',
    options: [
      'A. Menyimpan data',
      'B. Meneruskan setiap data ke SEMUA port (broadcast)',
      'C. Membatasi kecepatan',
      'D. Hanya menghubungkan 2 perangkat',
      'E. Memakai token passing'
    ],
    answer: 1,
    explanation: 'Hub menyiarkan data ke semua port sehingga menimbulkan lalu lintas tak perlu dan tabrakan makin sering — beda dengan switch yang meneruskan hanya ke port tujuan.'
  },
  {
    id: 21,
    level: 'C4 - Menganalisis',
    question: 'Bandingkan kebutuhan kabel untuk 5 node: full mesh vs star. Pernyataan yang benar adalah…',
    options: [
      'A. Mesh 15 kabel, star 10 kabel',
      'B. Mesh 10 kabel, star 5 kabel',
      'C. Mesh 5 kabel, star 10 kabel',
      'D. Mesh 8 kabel, star 8 kabel',
      'E. Mesh 20 kabel, star 4 kabel'
    ],
    answer: 1,
    explanation: 'Full mesh 5 node = 5×4/2 = 10 kabel. Star 5 node (tiap node langsung ke pusat) = 5 kabel. Mesh selalu jauh lebih boros kabel.'
  },
  {
    id: 22,
    level: 'C6 - Menciptakan',
    question: 'Perpustakaan sekolah dengan 25 PC di satu ruangan ingin jaringan yang murah, mudah dirawat, dan mudah ditambah PC. Rancangan terbaik adalah…',
    options: [
      'A. Bus tanpa switch dengan terminator',
      'B. Star dengan 1 switch 24/48 port',
      'C. Full mesh antar semua PC',
      'D. Ring dengan token passing',
      'E. Koneksi serial berantai'
    ],
    answer: 1,
    explanation: 'Star dengan 1 switch: harga wajar, mudah troubleshooting (satu kabel rusak hanya memengaruhi 1 PC), dan mudah bertambah (tinggal menambah kabel ke switch).'
  },
  {
    id: 23,
    level: 'C3 - Menerapkan',
    question: 'Pada topologi ring dengan token passing, node yang berhak mengirim data adalah…',
    options: [
      'A. Semua node secara bersamaan',
      'B. Node yang sedang memegang token',
      'C. Node tercepat',
      'D. Node dengan alamat terbesar',
      'E. Node yang di tengah lingkaran'
    ],
    answer: 1,
    explanation: 'Hanya pemegang token yang boleh mengirim. Karena satu token berputar dari node ke node, tidak pernah ada dua node mengirim bersamaan → tidak ada tabrakan.'
  },
  {
    id: 24,
    level: 'C2 - Memahami',
    question: 'Bagian jaringan yang terpisah dan biasanya dihubungkan oleh bridge atau router disebut…',
    options: [
      'A. Backbone',
      'B. Link',
      'C. Segment',
      'D. Terminator',
      'E. Node'
    ],
    answer: 2,
    explanation: 'Segment adalah bagian jaringan yang terpisah; bridge/router (atau switch) menghubungkan antar segmen. Contoh: segment lab A dan segment lab B.'
  },
  {
    id: 25,
    level: 'C5 - Mengevaluasi',
    question: 'Kantor pusat + 3 cabang di kota berbeda, setiap cabang punya LAN 20 PC. Topologi backbone antar kota yang paling sesuai untuk keandalan adalah…',
    options: [
      'A. Bus satu kabel',
      'B. Ring',
      'C. Mesh antar router cabang',
      'D. Star sederhana tanpa router',
      'E. Point-to-point tunggal'
    ],
    answer: 2,
    explanation: 'Mesh antar router cabang menyediakan beberapa jalur redundan — bila satu link antar kota putus, komunikasi tetap berjalan lewat jalur lain. Cocok untuk WAN kritis.'
  },
];

export const modul3PostTest = [
  {
    id: 1,
    level: 'C2 - Memahami',
    question: 'IP address 192.168.1.10 termasuk kelas…',
    options: [
      'A. Kelas A',
      'B. Kelas B',
      'C. Kelas C',
      'D. Kelas D',
      'E. Kelas E'
    ],
    answer: 2,
    explanation: 'Oktet pertama 192 berada di range kelas C (192–223), default mask /24.'
  },
  {
    id: 2,
    level: 'C4 - Menganalisis',
    question: 'Manakah daftar berikut yang semuanya merupakan IP privat?',
    options: [
      'A. 10.0.0.1, 172.20.0.1, 192.168.1.1',
      'B. 8.8.8.8, 1.1.1.1, 203.0.113.5',
      'C. 10.0.0.1, 172.32.0.1, 192.168.1.1',
      'D. 11.0.0.1, 172.31.5.1, 223.0.0.1',
      'E. 127.0.0.1, 0.0.0.0, 255.255.255.255'
    ],
    answer: 0,
    explanation: 'IP privat: 10.0.0.0/8, 172.16.0.0–172.31.255.255, 192.168.0.0/16. 172.32.x.x bukan privat (di luar 172.16–172.31).'
  },
  {
    id: 3,
    level: 'C3 - Menerapkan',
    question: 'Konversi biner 11000000 ke desimal menghasilkan…',
    options: [
      'A. 128',
      'B. 168',
      'C. 192',
      'D. 224',
      'E. 240'
    ],
    answer: 2,
    explanation: '11000000 = 128 + 64 = 192. Nilai bit: 128 64 32 16 8 4 2 1.'
  },
  {
    id: 4,
    level: 'C3 - Menerapkan',
    question: 'Jumlah host usable pada jaringan /26 adalah…',
    options: [
      'A. 62',
      'B. 64',
      'C. 30',
      'D. 126',
      'E. 254'
    ],
    answer: 0,
    explanation: 'Host usable = 2^(32−26) − 2 = 2^6 − 2 = 62 (network + broadcast tidak dipakai).'
  },
  {
    id: 5,
    level: 'C4 - Menganalisis',
    question: '192.168.1.0/24 dibagi menjadi 4 subnet sama besar. Prefix baru dan mask yang benar adalah…',
    options: [
      'A. /25 — 255.255.255.128',
      'B. /26 — 255.255.255.192',
      'C. /27 — 255.255.255.224',
      'D. /28 — 255.255.255.240',
      'E. /30 — 255.255.255.252'
    ],
    answer: 1,
    explanation: 'Butuh 4 subnet → 2^n ≥ 4 → n = 2 bit dipinjam → prefix 24+2 = /26 → mask 255.255.255.192, 62 host/subnet.'
  },
  {
    id: 6,
    level: 'C5 - Mengevaluasi',
    question: 'Dua alamat yang selalu dicadangkan di setiap subnet sehingga mengurangi jumlah host yang bisa dipakai adalah…',
    options: [
      'A. Gateway dan DNS',
      'B. Network address dan Broadcast address',
      'C. Loopback dan APIPA',
      'D. Private dan Public',
      'E. Subnet mask dan wildcard'
    ],
    answer: 1,
    explanation: 'Network address (semua bit host 0) dan broadcast address (semua bit host 1). Itulah mengapa host usable = 2^h − 2.'
  },
  {
    id: 7,
    level: 'C4 - Menganalisis',
    question: '255.255.255.240 dalam notasi CIDR adalah…',
    options: [
      'A. /26',
      'B. /27',
      'C. /28',
      'D. /29',
      'E. /30'
    ],
    answer: 2,
    explanation: '240 = 11110000 → 4 bit 1 di oktet terakhir → total bit network = 8+8+8+4 = /28, host = 2^4 − 2 = 14.'
  },
  {
    id: 8,
    level: 'C6 - Menciptakan',
    question: 'Rancang VLSM untuk 192.168.1.0/24 dengan kebutuhan 60, 30, dan 10 host. Alokasi prefix yang benar adalah…',
    options: [
      'A. 60→/26, 30→/27, 10→/28',
      'B. 60→/27, 30→/27, 10→/27',
      'C. 60→/25, 30→/25, 10→/26',
      'D. 60→/28, 30→/28, 10→/28',
      'E. 60→/24, 30→/25, 10→/30'
    ],
    answer: 0,
    explanation: '60 host butuh 62 usable → /26; 30 host butuh 30 usable → /27; 10 host butuh 14 usable → /28. Alokasi mulai dari terbesar.'
  },
  {
    id: 9,
    level: 'C2 - Memahami',
    question: 'Keunggulan CIDR dibanding sistem classful adalah…',
    options: [
      'A. Menghapus aturan kaku kelas A/B/C agar alamat bisa dibagi sesuai kebutuhan',
      'B. Mempercepat internet',
      'C. Mengganti IPv4 menjadi IPv6',
      'D. Menambah jumlah kelas IP',
      'E. Menghilangkan kebutuhan subnet mask'
    ],
    answer: 0,
    explanation: 'CIDR memakai notasi /n (jumlah bit network) dan menghapus pembagian kaku kelas — dasar dari subnetting dan VLSM.'
  },
  {
    id: 10,
    level: 'C3 - Menerapkan',
    question: 'Alamat khusus yang berfungsi sebagai loopback (menguji NIC sendiri) adalah…',
    options: [
      'A. 0.0.0.0',
      'B. 127.0.0.1',
      'C. 255.255.255.255',
      'D. 169.254.x.x',
      'E. 224.0.0.1'
    ],
    answer: 1,
    explanation: '127.0.0.1 adalah loopback untuk menguji NIC sendiri. 0.0.0.0 = semua jaringan, 255.255.255.255 = broadcast lokal, 169.254.x.x = APIPA.'
  },
  {
    id: 11,
    level: 'C2 - Memahami',
    question: 'Panjang alamat IPv6 adalah…',
    options: [
      'A. 32 bit',
      'B. 64 bit',
      'C. 128 bit',
      'D. 256 bit',
      'E. 16 bit'
    ],
    answer: 2,
    explanation: 'IPv6 sepanjang 128 bit (contoh: 2001:0db8:...) dengan jumlah alamat ±3,4×10³⁸ — mengatasi keterbatasan IPv4 (32 bit, ±4,3 miliar).'
  },
  {
    id: 12,
    level: 'C3 - Menerapkan',
    question: 'Konversi biner 10101000 ke desimal menghasilkan…',
    options: [
      'A. 128',
      'B. 168',
      'C. 192',
      'D. 200',
      'E. 232'
    ],
    answer: 1,
    explanation: '10101000 = 128 + 32 + 8 = 168. Nilai bit: 128 64 32 16 8 4 2 1.'
  },
  {
    id: 13,
    level: 'C2 - Memahami',
    question: 'Fungsi utama subnet mask adalah untuk menentukan…',
    options: [
      'A. Kecepatan jaringan',
      'B. Bagian alamat yang menunjukkan network dan bagian yang menunjukkan host',
      'C. Nama komputer di jaringan',
      'D. Password router',
      'E. Jumlah kabel yang dipakai'
    ],
    answer: 1,
    explanation: 'Subnet mask memisahkan bit network dari bit host (bit 1 = network, bit 0 = host). Contoh mask /24 = 255.255.255.0 → 24 bit network, 8 bit host.'
  },
  {
    id: 14,
    level: 'C4 - Menganalisis',
    question: 'Jaringan /30 sering dipakai untuk link antar router (point-to-point) karena…',
    options: [
      'A. Menyediakan 254 host',
      'B. Menyediakan tepat 2 host usable yang pas untuk dua ujung link',
      'C. Tidak memerlukan subnet mask',
      'D. Berkecepatan paling tinggi',
      'E. Menggunakan IPv6'
    ],
    answer: 1,
    explanation: '/30 = 2^2 − 2 = 2 host usable — pas untuk satu ujung di tiap sisi link. Tidak boros alamat dibanding /24.'
  },
  {
    id: 15,
    level: 'C4 - Menganalisis',
    question: 'Jaringan 172.16.0.0/16 dibagi menjadi 8 subnet. Prefix baru dan host per subnet adalah…',
    options: [
      'A. /18 — 16382 host',
      'B. /19 — 8190 host',
      'C. /20 — 4094 host',
      'D. /24 — 254 host',
      'E. /26 — 62 host'
    ],
    answer: 1,
    explanation: '8 subnet → 2^n ≥ 8 → n = 3 bit dipinjam → prefix 16+3 = /19. Host = 2^(32−19) − 2 = 2^13 − 2 = 8190.'
  },
  {
    id: 16,
    level: 'C2 - Memahami',
    question: 'Komputer terlanjur memakai alamat 169.254.x.x ketika gagal mendapat IP dari DHCP. Alamat ini dikenal sebagai…',
    options: [
      'A. Loopback',
      'B. APIPA (Automatic Private IP Addressing)',
      'C. Broadcast',
      'D. Multicast',
      'E. Default gateway'
    ],
    answer: 1,
    explanation: '169.254.x.x adalah APIPA — dipakai otomatis oleh Windows saat DHCP tidak merespons, sehingga komputer tidak benar-benar tersambung internet.'
  },
  {
    id: 17,
    level: 'C2 - Memahami',
    question: 'Alamat 224.0.0.1 termasuk kelas D yang digunakan untuk…',
    options: [
      'A. Loopback',
      'B. Multicast',
      'C. Broadcast terbatas',
      'D. IP privat',
      'E. Default route'
    ],
    answer: 1,
    explanation: 'Kelas D (224.0.0.0–239.255.255.255) digunakan untuk multicast — mengirim satu paket ke sekelompok host, misalnya protokol routing OSPF.'
  },
  {
    id: 18,
    level: 'C3 - Menerapkan',
    question: 'Pada jaringan /28, besar block (kelipatan) subnet adalah…',
    options: [
      'A. 4',
      'B. 8',
      'C. 16',
      'D. 32',
      'E. 64'
    ],
    answer: 2,
    explanation: 'Block = 256 − mask oktet terakhir. /28 = 255.255.255.240 → block = 256 − 240 = 16, sehingga subnet dimulai dari kelipatan 16 (.0, .16, .32, dst).'
  },
  {
    id: 19,
    level: 'C4 - Menganalisis',
    question: 'Wildcard dari subnet mask 255.255.255.224 adalah…',
    options: [
      'A. 0.0.0.15',
      'B. 0.0.0.31',
      'C. 0.0.0.63',
      'D. 0.0.0.127',
      'E. 0.0.0.255'
    ],
    answer: 1,
    explanation: 'Wildcard = kebalikan bit mask (255 − nilai oktet). 224 → 255 − 224 = 31 → 0.0.0.31, dipakai ACL router untuk mencocokkan rentang alamat (blok /27).'
  },
  {
    id: 20,
    level: 'C6 - Menciptakan',
    question: 'Rancang VLSM untuk 192.168.0.0/24 dengan kebutuhan 100 host, 50 host, dan 2 host. Alokasi prefix yang benar adalah…',
    options: [
      'A. 100→/25, 50→/26, 2→/30',
      'B. 100→/26, 50→/26, 2→/26',
      'C. 100→/24, 50→/24, 2→/24',
      'D. 100→/28, 50→/29, 2→/30',
      'E. 100→/30, 50→/30, 2→/30'
    ],
    answer: 0,
    explanation: '100 host butuh 126 usable → /25; 50 host butuh 62 usable → /26; 2 host butuh 2 usable → /30. Alokasi dari kebutuhan terbesar.'
  },
  {
    id: 21,
    level: 'C2 - Memahami',
    question: 'Perangkat/fungsi pada router yang menerjemahkan IP privat menjadi IP publik untuk akses internet adalah…',
    options: [
      'A. DHCP',
      'B. NAT (Network Address Translation)',
      'C. DNS',
      'D. Firewall',
      'E. Proxy'
    ],
    answer: 1,
    explanation: 'NAT menerjemahkan alamat privat (mis. 192.168.1.10) menjadi IP publik saat data keluar ke internet, sehingga banyak perangkat privat bisa berbagi satu IP publik.'
  },
  {
    id: 22,
    level: 'C4 - Menganalisis',
    question: 'Jumlah host usable pada jaringan /25 adalah…',
    options: [
      'A. 30',
      'B. 62',
      'C. 126',
      'D. 254',
      'E. 510'
    ],
    answer: 2,
    explanation: 'Host = 2^(32−25) − 2 = 2^7 − 2 = 128 − 2 = 126 (network + broadcast dicadangkan).'
  },
  {
    id: 23,
    level: 'C3 - Menerapkan',
    question: '192.168.1.0/24 ditulis dengan mask baru /26. Alamat network subnet ke-2 adalah…',
    options: [
      'A. 192.168.1.16',
      'B. 192.168.1.32',
      'C. 192.168.1.64',
      'D. 192.168.1.128',
      'E. 192.168.1.192'
    ],
    answer: 2,
    explanation: '/26 → block 64, subnet kelipatan 64: .0 (1), .64 (2), .128 (3), .192 (4). Subnet ke-2 = 192.168.1.64, range .64–.127.'
  },
  {
    id: 24,
    level: 'C3 - Menerapkan',
    question: 'Alamat 8.8.8.8 (DNS Google) termasuk…',
    options: [
      'A. IP privat',
      'B. IP publik',
      'C. Loopback',
      'D. APIPA',
      'E. Multicast'
    ],
    answer: 1,
    explanation: '8.8.8.8 adalah IP publik yang dapat diakses dari internet. IP privat seperti 192.168.1.1 dan 10.0.0.1 hanya berlaku di jaringan lokal.'
  },
  {
    id: 25,
    level: 'C5 - Mengevaluasi',
    question: 'Mengapa VLSM lebih hemat alamat IP dibanding subnetting dengan ukuran subnet seragam?',
    options: [
      'A. VLSM menghapus network dan broadcast',
      'B. VLSM memberi subnet mask berbeda sesuai kebutuhan nyata tiap subnet',
      'C. VLSM memakai IPv6',
      'D. VLSM tidak butuh subnet mask',
      'E. VLSM menggandakan jumlah host'
    ],
    answer: 1,
    explanation: 'VLSM mengalokasikan prefix sesuai kebutuhan (60→/26, 30→/27, 15→/28, dst) sehingga tidak ada alamat terbuang besar seperti membagi rata 5×/27.'
  },
];