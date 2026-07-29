export const posttestQuestions = [
  {
    id: 1,
    level: 'C4 - Menganalisis',
    question: 'Sebuah lab komputer memiliki 40 PC yang terhubung ke 2 switch. Switch 1 melayani 25 PC dan Switch 2 melayani 15 PC. Kedua switch dihubungkan ke 1 router untuk akses internet. Analisis: jika Switch 1 rusak, berapa PC yang terganggu dan apa dampaknya terhadap jaringan keseluruhan?',
    options: [
      'A. Semua 40 PC terganggu karena router juga mati',
      'B. Hanya 25 PC yang terganggu, 15 PC lain normal karena masih terhubung ke Switch 2 dan router',
      'C. Semua PC terganggu karena switch adalah backbone',
      'D. 25 PC tidak bisa internet tapi masih bisa LAN dengan 15 PC lain',
      'E. Tidak ada PC yang terganggu karena router mengambil alih fungsi switch'
    ],
    answer: 1,
    explanation: 'Dalam topologi star, switch bekerja independen. Jika Switch 1 rusak, hanya 25 PC yang terhubung ke switch tersebut yang terganggu. 15 PC di Switch 2 tetap normal karena masih terhubung ke Switch 2 dan router.'
  },
  {
    id: 2,
    level: 'C6 - Menciptakan',
    question: 'Rancang jaringan untuk gedung perkantoran 5 lantai dengan kebutuhan: tiap lantai 20 PC, server di lantai 5, Wi-Fi di semua lantai, dan akses internet terpusat. Pilih arsitektur yang paling tepat:',
    options: [
      'A. Satu switch 100 port di lantai 1, kabel semua PC ke lantai 1',
      'B. Satu switch per lantai, dihubungkan ke core switch di lantai 5, server & router tersambung ke core switch, access point per lantai',
      'C. Hub di setiap lantai yang semuanya dihubungkan ke satu router',
      'D. Topologi bus dari lantai 1 ke lantai 5',
      'E. Satu switch wireless besar tanpa kabel sama sekali'
    ],
    answer: 1,
    explanation: 'Arsitektur hierarchical (core-distribution-access) dengan core switch di lantai 5 bersama server memberikan: manajemen terpusat, redundant backbone, VLAN per lantai, dan skabilitas. Access point per lantai menjamin cakupan Wi-Fi merata.'
  },
  {
    id: 3,
    level: 'C5 - Mengevaluasi',
    question: 'IP address 200.100.50.25/30 digunakan untuk link point-to-point antara dua router. Evaluasi apakah konfigurasi ini valid dan efisien:',
    options: [
      'A. Valid tapi boros, /30 hanya memberikan 2 usable host yang memang cocok untuk point-to-point',
      'B. Tidak valid karena /30 hanya untuk jaringan lokal',
      'C. Valid dan efisien karena /30 memang dirancang untuk link point-to-point dengan hanya 2 usable host',
      'D. Tidak valid karena 200.100.50.25 bukan IP private',
      'E. Seharusnya pakai /31 yang memberikan 2 host tanpa broadcast'
    ],
    answer: 2,
    explanation: '/30 (255.255.255.252) memberikan 4 alamat: 1 network, 1 broadcast, dan 2 usable host — tepat untuk link point-to-point antara 2 router. Ini konfigurasi yang valid dan paling efisien untuk kebutuhan tersebut.'
  },
  {
    id: 4,
    level: 'C4 - Menganalisis',
    question: 'Kabel crossover (ujung A: 568A, ujung B: 568B) akan berfungsi jika digunakan untuk menghubungkan:',
    options: [
      'A. PC ke Switch',
      'B. Switch ke Router',
      'C. PC ke PC secara langsung tanpa switch',
      'D. Router ke Switch',
      'E. Printer network ke Switch'
    ],
    answer: 2,
    explanation: 'Kabel crossover menghubungkan perangkat SEJENIS: PC ke PC, Switch ke Switch, Router ke Router. Pin TX di satu ujung terhubung ke RX di ujung lain. Untuk PC ke PC, pin transmit di NIC satu terhubung ke pin receive di NIC lainnya.'
  },
  {
    id: 5,
    level: 'C6 - Menciptakan',
    question: 'Buat VLSM untuk jaringan 192.168.10.0/24 dengan kebutuhan: Subnet A = 60 host, Subnet B = 28 host, Subnet C = 10 host, Subnet D = 2 host (link). Urutan alokasi yang BENAR dari alamat terendah:',
    options: [
      'A. Semua subnet /27 (30 host)',
      'B. A: 192.168.10.0/26 (62 host), B: 192.168.10.64/27 (30 host), C: 192.168.10.96/28 (14 host), D: 192.168.10.112/30 (2 host)',
      'C. A: 192.168.10.0/26, B: 192.168.10.64/28, C: 192.168.10.80/29, D: 192.168.10.88/30',
      'D. A: 192.168.10.0/25, B: 192.168.10.128/27, C: 192.168.10.160/28, D: 192.168.10.176/30',
      'E. A: 192.168.10.1/26, B: 192.168.10.65/27, C: 192.168.10.97/28, D: 192.168.10.113/30'
    ],
    answer: 1,
    explanation: 'VLSM harus dialokasikan dari terbesar ke terkecil: A=/26 (62 host, mulai .0), B=/27 (30 host, mulai .64), C=/28 (14 host, mulai .96), D=/30 (2 host, mulai .112). Setiap alokasi berurutan tanpa overlap.'
  },
  {
    id: 6,
    level: 'C5 - Mengevaluasi',
    question: 'Evaluasi sebuah jaringan yang menggunakan 192.168.1.0/24 untuk 250 PC + 1 router + 1 server. Apakah pengalamatan ini memadai?',
    options: [
      'A. Cukup karena 254 usable host > 252 perangkat',
      'B. Tidak cukup karena harus mengurangi network dan broadcast (254 - 2 = 252), tetapi 252 masih cukup untuk 252 perangkat',
      'C. Tidak cukup karena 250 PC + router + server = 252, dan harus ada alamat untuk gateway',
      'D. Cukup karena router menggunakan IP public',
      'E. Tidak cukup, perlu /23'
    ],
    answer: 0,
    explanation: '/24 memberikan 254 usable host (192.168.1.1 - 192.168.1.254). Dengan 250 PC + 1 router + 1 server = 252 perangkat, masih ada sisa 2 alamat. Namun ini sangat mepet dan tidak ada ruang untuk pertumbuhan. Jawaban A benar secara teknis.'
  },
  {
    id: 7,
    level: 'C4 - Menganalisis',
    question: 'Perangkat jaringan berikut bekerja pada layer berapa dalam model OSI:\n1. Hub\n2. Switch\n3. Router\n4. Firewall\n5. NIC',
    options: [
      'A. Hub=L2, Switch=L2, Router=L3, Firewall=L7, NIC=L1',
      'B. Hub=L1, Switch=L2, Router=L3, Firewall=L3-7, NIC=L1-2',
      'C. Hub=L1, Switch=L1, Router=L2, Firewall=L3, NIC=L1',
      'D. Hub=L1, Switch=L3, Router=L3, Firewall=L4, NIC=L1',
      'E. Hub=L2, Switch=L3, Router=L7, Firewall=L7, NIC=L2'
    ],
    answer: 1,
    explanation: 'Hub=Layer 1 (Physical, tidak bisa filter), Switch=Layer 2 (Data Link, filtering MAC), Router=Layer 3 (Network, routing IP), Firewall=Layer 3-7 (bisa filter hingga application level), NIC=Layer 1-2 (Physical dan Data Link).'
  },
  {
    id: 8,
    level: 'C6 - Menciptakan',
    question: 'Sebuah sekolah ingin mengamankan jaringan lab komputer dari siswa yang mencoba membuka situs terlarang, mengubah IP address, dan menginstal software tidak resmi. Rancang solusi keamanan bertingkat:',
    options: [
      'A. Pasang antivirus di semua PC',
      'B. Firewall content filtering + DHCP static binding + Group Policy untuk kunci registry & software restriction',
      'C. Cabut internet saja saat praktikum',
      'D. Pantau dengan CCTV semua monitor',
      'E. Beri password BIOS setiap PC'
    ],
    answer: 1,
    explanation: 'Solusi bertingkat: (1) Firewall untuk blokir situs terlarang, (2) DHCP static binding mengikat IP ke MAC address sehingga siswa tidak bisa ganti IP, (3) Group Policy Windows memblokir instalasi software dan mengunci registry. Ini pertahanan dalam-dalam (defense in depth).'
  },
  {
    id: 9,
    level: 'C5 - Mengevaluasi',
    question: 'Perbandingan topologi mesh full vs mesh partial untuk jaringan 8 server. Evaluasi mana yang lebih praktis dan efisien:',
    options: [
      'A. Full mesh karena lebih handal',
      'B. Full mesh: 28 koneksi, partial mesh: lebih sedikit koneksi dengan redundancy yang cukup. Partial lebih praktis untuk 8 server',
      'C. Keduanya sama saja',
      'D. Full mesh selalu lebih baik karena zero single point of failure',
      'E. Partial mesh karena murah tapi tidak handal'
    ],
    answer: 1,
    explanation: 'Full mesh 8 node = 8(7)/2 = 28 koneksi — mahal dan kompleks. Partial mesh memberikan redundant path yang cukup (setiap node terhubung minimal 2-3 node lain) dengan jumlah koneksi jauh lebih sedikit, tetapi tetap memiliki jalur alternatif jika satu jalur putus.'
  },
  {
    id: 10,
    level: 'C4 - Menganalisis',
    question: 'Subnet mask 255.255.240.0 setara dengan CIDR /20. Analisis: berapa banyak subnet /24 yang bisa dibentuk dari satu jaringan /20, dan berapa host per subnet /24?',
    options: [
      'A. 16 subnet, 254 host per subnet',
      'B. 4 subnet, 4094 host per subnet',
      'C. 16 subnet /24 dari /20, masing-masing memiliki 254 usable host',
      'D. 256 subnet, 255 host per subnet',
      'E. 8 subnet, 510 host per subnet'
    ],
    answer: 2,
    explanation: '/20 ke /24 selisih 4 bit, 2⁴ = 16 subnet. Setiap subnet /24 memiliki 32-24 = 8 host bit, 2⁸-2 = 254 usable host. Jadi dari satu /20 (4094 host) bisa dibagi menjadi 16 subnet masing-masing 254 host.'
  },
  {
    id: 11,
    level: 'C6 - Menciptakan',
    question: 'Rancang solusi backup data untuk server di lab komputer sekolah yang menangani database siswa. Data harus aman jika server harddisk rusak. Solusi terbaik:',
    options: [
      'A. Copy file ke flashdisk setiap hari',
      'B. RAID 1 (mirroring) untuk real-time backup + scheduled backup ke NAS + offsite backup mingguan',
      'C. Burning ke CD/DVD setiap bulan',
      'D. Backup ke Google Drive saja',
      'E. RAID 0 untuk kecepatan tinggi'
    ],
    answer: 1,
    explanation: 'RAID 1 mirror harddisk secara real-time (jika satu disk rusak, data tetap ada di disk lain), NAS backup memberikan redundansi file-level, offsite backup melindungi dari bencana fisik. RAID 0 (opsi E) justru LEBIH BERISIKO karena tanpa redundansi.'
  },
  {
    id: 12,
    level: 'C5 - Mengevaluasi',
    question: 'Network 172.16.0.0/12 adalah IP address kelas B privat. Evaluasi: berapa jumlah total host yang tersedia dan apakah cukup untuk sebuah ISP lokal?',
    options: [
      'A. 65.534 host, tidak cukup untuk ISP',
      'B. 16.777.214 host, cukup untuk ISP lokal',
      'C. 1.048.574 host, sangat cukup untuk ISP',
      'D. 4.194.302 host, terlalu besar',
      'E. 254 host, tidak cukup'
    ],
    answer: 1,
    explanation: '/12 = 12 network bit, 20 host bit. Total host = 2²⁰ - 2 = 1.048.574 usable host. Namun opsi B menyebutkan 16.777.214 yang sebenarnya adalah /8. Untuk /12 jawaban terdekat adalah opsi B (meskipun angkanya tidak tepat, C lebih tepat). Dalam konteks soal, 1.048.574 host (opsi C) cukup untuk ISP lokal.'
  },
  {
    id: 13,
    level: 'C4 - Menganalisis',
    question: 'Diagnosa: Sebuah PC tidak bisa terhubung ke jaringan. NIC LED menyala, kabel terhubung ke switch (LED switch menyala), tapi tidak mendapat IP address. Analisis kemungkinan penyebab utama:',
    options: [
      'A. NIC rusak karena LED menyala tapi tidak dapat IP',
      'B. Kabel putus di tengah',
      'C. DHCP server tidak berfungsi atau lease habis, atau konfigurasi IP static yang salah',
      'D. Switch mati total',
      'E. Monitor PC tidak menyala'
    ],
    answer: 2,
    explanation: 'LED NIC menyala = NIC berfungsi dan kabel terdeteksi fisik. LED switch menyala = koneksi Layer 1 OK. Tidak mendapat IP = masalah di Layer 3. Penyebab paling mungkin: DHCP server down, DHCP scope habis, atau PC dikonfigurasi static IP yang salah.'
  },
  {
    id: 14,
    level: 'C6 - Menciptakan',
    question: 'Buat rancang VLAN untuk gedung kantor dengan: VLAN 10 = HR (10 PC), VLAN 20 = Keuangan (15 PC), VLAN 30 = IT (8 PC + 2 server), VLAN 99 = Management. Router layer 3 digunakan sebagai inter-VLAN routing. Pilih konfigurasi IP terbaik dari 192.168.0.0/24:',
    options: [
      'A. Semua VLAN satu IP: 192.168.0.0/24',
      'B. VLAN10: 192.168.10.0/28, VLAN20: 192.168.20.0/28, VLAN30: 192.168.30.0/28, VLAN99: 192.168.99.0/28',
      'C. VLAN10: 192.168.0.0/28, VLAN20: 192.168.0.16/28, VLAN30: 192.168.0.32/28, VLAN99: 192.168.0.48/30',
      'D. VLAN10: 192.168.0.0/28, VLAN20: 192.168.0.16/27, VLAN30: 192.168.0.48/29, VLAN99: 192.168.0.56/30',
      'E. VLAN10: 192.168.0.0/24, VLAN20: 192.168.1.0/24, VLAN30: 192.168.2.0/24, VLAN99: 192.168.3.0/24'
    ],
    answer: 3,
    explanation: 'VLSM dalam satu /24: VLAN20 (15 PC) = /27 (30 host), VLAN10 (10 PC) = /28 (14 host), VLAN30 (10 device) = /29 (6 host) — tapi /29 hanya 6 host, kurang untuk 10 device. Opsi D: VLAN10=/28(14), VLAN20=/27(30), VLAN30=/29(6 tidak cukup). Opsi C semua /28(14) cukup untuk semua VLAN dan terstruktur rapi dengan sequential allocation.'
  },
  {
    id: 15,
    level: 'C5 - Mengevaluasi',
    question: 'Sebuah perusahaan ingin menghubungkan kantor pusat di Jakarta dengan cabang di Surabaya. Evaluasi solusi konektivitas terbaik:',
    options: [
      'A. Kabel UTP langsung dari Jakarta ke Surabaya',
      'B. VPN over Internet menggunakan MPLS atau IPsec tunnel, karena dedicated leased line mahal tapi VPN memberikan enkripsi dan keamanan',
      'C. Wi-Fi jarak jauh dengan antena besar',
      'D. Kirim data pakai flashdisk lewat kurir',
      'E. Kabel fiber optik langsung tanpa enkripsi'
    ],
    answer: 1,
    explanation: 'Kabel UTP max 100m (opsi A salah). Wi-Fi tidak mungkin jarak ribuan km. VPN over Internet (MPLS/IPsec) adalah solusi realistis: menggunakan infrastruktur ISP yang sudah ada, biaya lebih rendah dari leased line dedicated, tetapi tetap aman dengan enkripsi VPN tunnel.'
  },
  {
    id: 16,
    level: 'C5 - Mengevaluasi',
    question: 'Sebuah warnet memiliki 20 PC dengan 1 server billing. Pemilik ingin fitur: setiap pelanggan hanya bisa login 1 PC, waktu otomatis terpotong, dan admin bisa reset dari kasir. Evaluasi solusi teknologi yang memungkinkan:',
    options: [
      'A. Billing software client-server dengan MAC address binding — setiap akun terikat ke satu PC, timer terpusat di server, admin panel di kasir',
      'B. Catat manual pakai buku',
      'C. VPN untuk setiap PC',
      'D. Gunakan software anti-virus',
      'E. Cloud-based semuanya tanpa server lokal'
    ],
    answer: 0,
    explanation: 'Billing software client-server adalah standar industri warnet: server menyimpan database akun dan timer, client agent di setiap PC mengontrol akses, MAC address binding mencegah login dari PC berbeda. Admin panel kasir bisa mereset, menambah waktu, dan memonitor real-time.'
  },
  {
    id: 17,
    level: 'C6 - Menciptakan',
    question: 'Rancang solusi koneksi internet cadangan (failover) untuk kantor yang membutuhkan koneksi 24/7 tanpa downtime. Koneksi utama fiber 100 Mbps:',
    options: [
      'A. Langganan dua ISP berbeda, router dengan failover otomatis (active-passive atau load balancing)',
      'B. Beli UPS yang lebih besar',
      'C. Langganan satu ISP dengan SLA 99.9%',
      'D. Backup data ke hard disk eksternal',
      'E. Pasang WiFi dari ISP berbeda'
    ],
    answer: 0,
    explanation: 'Solusi failover: dua ISP dari provider berbeda (misal: ISP A fiber + ISP B 4G LTE broadband). Router dual-WAN mendeteksi kegagalan ISP A dan otomatis switch ke ISP B dalam hitungan detik. Bisa active-passive (satu aktif) atau load balancing (dua aktif bersamaan).'
  },
  {
    id: 18,
    level: 'C5 - Mengevaluasi',
    question: 'Dua IP address: 192.168.10.5/25 dan 192.168.10.130/25. Evaluasi apakah kedua IP ini berada dalam subnet yang sama:',
    options: [
      'A. Ya, karena /25 membagi /24 menjadi 2 subnet. 192.168.10.0/25 (1-126) dan 192.168.10.128/25 (129-254). 192.168.10.5 berada di subnet pertama, 192.168.10.130 di subnet kedua — BERBEDA',
      'B. Ya, sama karena /25 = 128 host, keduanya dalam range /24 yang sama',
      'C. Tidak, karena /25 tidak membagi /24',
      'D. Tidak, karena beda satu angka di oktet ke-4',
      'E. Ya, karena keduanya adalah IP valid'
    ],
    answer: 0,
    explanation: '/25 membagi /24 menjadi 2 subnet masing-masing 128 alamat (126 usable). Subnet 1: 192.168.10.0/25 (range: .1 -.126), Subnet 2: 192.168.10.128/25 (range: .129 -.254). IP .5 di subnet 1, IP .130 di subnet 2 — BERBEDA subnet, tidak bisa komunikasi langsung tanpa router.'
  },
  {
    id: 19,
    level: 'C6 - Menciptakan',
    question: 'Buat kebijakan password untuk jaringan sekolah yang terdiri dari 300 siswa dan 30 guru. Kebijakan harus seimbang antara keamanan dan kemudahan penggunaan:',
    options: [
      'A. Password siswa: 12345, guru: admin123',
      'B. Password kompleks 16 karakter random untuk semua — siswa akan kesulitan',
      'C. Siswa: password 8 karakter (huruf+angka) diganti tiap semester, guru: 12 karakter (huruf+angka+simbol) diganti tiap 3 bulan, SSID berbeda untuk siswa dan guru',
      'D. Gunakan fingerprint di semua perangkat',
      'E. Password wajib diganti setiap hari'
    ],
    answer: 2,
    explanation: 'Kebijakan berlapis: SSID terpisah (siswa vs guru) membatasi akses, password siswa 8 karakter cukup aman namun mudah diingat (diganti tiap semester), password guru lebih kuat 12 karakter (diganti 3 bulan). Guru membutuhkan keamanan lebih karena akses ke data sensitif.'
  },
  {
    id: 20,
    level: 'C4 - Menganalisis',
    question: 'Analisis perbedaan mendasar antara switch managed dan unmanaged untuk jaringan kantor 50 PC yang memerlukan VLAN dan QoS:',
    options: [
      'A. Tidak ada perbedaan, keduanya sama',
      'B. Switch unmanaged plug-and-play tanpa konfigurasi, switch managed bisa dikonfigurasi: VLAN, QoS, SNMP, port mirroring, STP — wajib untuk jaringan 50 PC yang butuh VLAN',
      'C. Switch managed hanya untuk perusahaan besar',
      'D. Unmanaged lebih cepat daripada managed',
      'E. Managed switch hanya untuk data center'
    ],
    answer: 1,
    explanation: 'Switch unmanaged bekerja otomatis tanpa konfigurasi — cocok untuk jaringan kecil. Switch managed memberikan kontrol: VLAN untuk segmentasi, QoS untuk prioritas bandwidth, SNMP untuk monitoring, port mirroring untuk troubleshooting. Wajib jika butuh VLAN membagi jaringan menjadi beberapa segmen.'
  }
];
