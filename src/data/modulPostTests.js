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
];