const flashcardData = [
  // === MODUL 1: Peralatan Jaringan ===
  {
    id: 1,
    category: 'Peralatan Jaringan',
    front: 'Router',
    back: 'Perangkat yang menghubungkan dua jaringan berbeda (misal LAN ke Internet). Bekerja pada layer 3 (Network) OSI, menggunakan IP address untuk menentukan jalur paket data terbaik.',
    example: 'Router MikroTik, Cisco ISR, TP-Link Archer'
  },
  {
    id: 2,
    category: 'Peralatan Jaringan',
    front: 'Switch',
    back: 'Perangkat yang menghubungkan beberapa perangkat dalam satu jaringan lokal (LAN). Bekerja pada layer 2 (Data Link) OSI, menggunakan MAC address untuk meneruskan data ke perangkat yang tepat.',
    example: 'Cisco Catalyst, HP ProCurve, D-Link DGS'
  },
  {
    id: 3,
    category: 'Peralatan Jaringan',
    front: 'Hub',
    back: 'Perangkat lama yang menghubungkan perangkat dalam jaringan. Bekerja pada layer 1 (Physical) OSI. Mengirim semua data ke semua port tanpa filter — kurang efisien dibanding switch.',
    example: 'Sudah jarang digunakan, digantikan oleh switch'
  },
  {
    id: 4,
    category: 'Peralatan Jaringan',
    front: 'Access Point (AP)',
    back: 'Perangkat yang menyediakan koneksi wireless (Wi-Fi) ke jaringan. Mengubah sinyal data dari kabel menjadi gelombang radio dan sebaliknya. Standar umum: 802.11ac (Wi-Fi 5), 802.11ax (Wi-Fi 6).',
    example: 'Ubiquiti UniFi, Cisco Meraki, TP-Link EAP'
  },
  {
    id: 5,
    category: 'Peralatan Jaringan',
    front: 'Modem',
    back: 'Modulator-Demodulator. Mengubah sinyal digital dari komputer menjadi sinyal analog untuk transmisi melalui kabel telepon/kabel, dan sebaliknya. Menghubungkan jaringan lokal ke ISP.',
    example: 'Modem ADSL, Modem Kabel, ONT (Modem Fiber)'
  },
  {
    id: 6,
    category: 'Peralatan Jaringan',
    front: 'NIC (Network Interface Card)',
    back: 'Kartu jaringan yang dipasang pada komputer agar bisa terhubung ke jaringan. Bisa berupa perangkat keras terpisah (PCI card) atau terintegrasi di motherboard (onboard). Memiliki MAC address unik.',
    example: 'Intel I219-V, Realtek RTL8111, TP-Link TG-3468'
  },
  {
    id: 7,
    category: 'Peralatan Jaringan',
    front: 'Firewall',
    back: 'Perangkat atau perangkat lunak keamanan yang memantau lalu lintas jaringan masuk/keluar. Memfilter paket berdasarkan aturan (rule) untuk mencegah akses tidak sah. Bekerja pada layer 3–7 OSI.',
    example: 'Cisco ASA, pfSense, Fortinet FortiGate, Windows Firewall'
  },
  {
    id: 8,
    category: 'Peralatan Jaringan',
    front: 'Kabel UTP (Unshielded Twisted Pair)',
    back: 'Kabel jaringan paling umum dengan 4 pasang kabel yang dipelintir. Kategori: Cat5e (100 Mbps), Cat6 (1 Gbps), Cat6a (10 Gbps). Menggunakan konektor RJ-45.',
    example: 'Kabel Cat5e/Cat6 untuk jaringan kabel lokal'
  },
  {
    id: 9,
    category: 'Peralatan Jaringan',
    front: 'Fiber Optic',
    back: 'Kabel yang mentransmisikan data menggunakan cahaya melalui serat kaca/plastik. Keunggulan: kecepatan sangat tinggi (sampai Tbps), jarak jauh (km), tahan gangguan elektromagnetik.',
    example: 'Single-mode (jarak jauh), Multi-mode (jarak pendek)'
  },
  {
    id: 10,
    category: 'Peralatan Jaringan',
    front: 'Patch Panel',
    back: 'Panel yang menjadi titik pusat pengkabelan jaringan. Semua kabel dari ruangan/kantor dihubungkan ke patch panel, lalu dikoneksikan ke switch menggunakan patch cord. Memudahkan manajemen.',
    example: 'Patch panel 24 port, 48 port di rack server'
  },

  // === MODUL 2: Topologi Jaringan ===
  {
    id: 11,
    category: 'Topologi Jaringan',
    front: 'Topologi Star (Bintang)',
    back: 'Semua perangkat terhubung ke satu pusat (switch/hub). Kelebihan: mudah dikelola, satu kabel rusak hanya mempengaruhi satu perangkat. Kekurangan: jika pusat rusak, seluruh jaringan mati.',
    example: 'Jaringan kantor, warnet, lab komputer'
  },
  {
    id: 12,
    category: 'Topologi Jaringan',
    front: 'Topologi Bus',
    back: 'Semua perangkat terhubung ke satu kabel utama (backbone). Data dikirim ke sepanjang kabel. Kelebihan: hemat kabel. Kekurangan: sulit ditelusuri masalahnya, satu kabel putus seluruh jaringan mati.',
    example: 'Jaringan Ethernet lama (10BASE2, 10BASE5)'
  },
  {
    id: 13,
    category: 'Topologi Jaringan',
    front: 'Topologi Ring',
    back: 'Perangkat saling terhubung membentuk lingkaran. Data mengalir satu arah (single ring) atau dua arah (dual ring). Kelebihan: performa stabil. Kekurangan: satu titik rusak bisa mempengaruhi seluruh ring.',
    example: 'IBM Token Ring, FDDI'
  },
  {
    id: 14,
    category: 'Topologi Jaringan',
    front: 'Topologi Mesh',
    back: 'Setiap perangkat terhubung langsung ke semua perangkat lainnya. Full mesh: semua terhubung. Partial mesh: beberapa terhubung. Kelebihan: sangat andal, ada banyak jalur alternatif. Kekurangan: mahal, kompleks.',
    example: 'Internet backbone, jaringan militer, data center'
  },
  {
    id: 15,
    category: 'Topologi Jaringan',
    front: 'Topologi Tree (Pohon)',
    back: 'Gabungan dari topologi star. Grup star dihubungkan ke switch pusat membentuk hierarki. Kelebihan: scalable, mudah diperluas. Kekurangan: jika switch pusat rusak, seluruh jaringan terpengaruh.',
    example: 'Jaringan universitas, gedung bertingkat'
  },
  {
    id: 16,
    category: 'Topologi Jaringan',
    front: 'Topologi Hybrid',
    back: 'Gabungan dua atau lebih topologi yang berbeda. Misalnya star + mesh. Disesuaikan dengan kebutuhan organisasi. Fleksibel tetapi kompleks dalam perancangan.',
    example: 'Jaringan perusahaan besar dengan banyak cabang'
  },
  {
    id: 17,
    category: 'Topologi Jaringan',
    front: 'LAN (Local Area Network)',
    back: 'Jaringan area lokal yang mencakup area kecil seperti rumah, kantor, atau gedung. Cakupan biasanya < 1 km. Kecepatan tinggi (100 Mbps – 10 Gbps).',
    example: 'Jaringan lab komputer sekolah'
  },
  {
    id: 18,
    category: 'Topologi Jaringan',
    front: 'WAN (Wide Area Network)',
    back: 'Jaringan area luas yang mencakup wilayah geografis besar (kota, negara, benua). Menggunakan infrastruktur telekomunikasi. Kecepatan bervariasi.',
    example: 'Internet adalah WAN terbesar di dunia'
  },

  // === MODUL 3: Pengalamatan Jaringan ===
  {
    id: 19,
    category: 'Pengalamatan Jaringan',
    front: 'IPv4 (Internet Protocol version 4)',
    back: 'Sistem alamat 32-bit, ditulis dalam notasi desimal bertitik: 4 oktet (contoh: 192.168.1.1). Jumlah total: 2^32 ≈ 4,3 miliar alamat. Sudah hampir habis, digantikan secara bertahap oleh IPv6.',
    example: '192.168.1.1, 10.0.0.1, 172.16.0.1'
  },
  {
    id: 20,
    category: 'Pengalamatan Jaringan',
    front: 'IPv6 (Internet Protocol version 6)',
    back: 'Sistem alamat 128-bit, ditulis dalam hexadecimal dengan dua titik: 8 grup (contoh: 2001:0db8::1). Jumlah total: 2^128 ≈ 340 undecillion alamat. Mengatasi kehabisan IPv4.',
    example: '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
  },
  {
    id: 21,
    category: 'Pengalamatan Jaringan',
    front: 'Subnet Mask',
    back: 'Bilangan 32-bit yang memisahkan bagian network ID dari host ID dalam sebuah IP address. Contoh: 255.255.255.0 berarti 24 bit untuk network, 8 bit untuk host (total 256 alamat, 254 host usable).',
    example: '/24 = 255.255.255.0, /16 = 255.255.0.0, /8 = 255.0.0.0'
  },
  {
    id: 22,
    category: 'Pengalamatan Jaringan',
    front: 'CIDR (Classless Inter-Domain Routing)',
    back: 'Metode pengalamatan fleksibel yang menggantikan sistem class (A, B, C). Ditulis dengan IP + slash + angka bit network (contoh: 192.168.1.0/24). Memungkinkan subnetting tanpa batasan class.',
    example: '10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16'
  },
  {
    id: 23,
    category: 'Pengalamatan Jaringan',
    front: 'VLSM (Variable Length Subnet Mask)',
    back: 'Teknik subnetting yang memungkinkan pembagian subnet dengan ukuran berbeda dalam satu jaringan. Berguna untuk menghemat alamat IP — subnet besar untuk departemen banyak, subnet kecil untuk Point-to-Point.',
    example: '/26 untuk 62 host, /30 untuk 2 host (link-to-link)'
  },
  {
    id: 24,
    category: 'Pengalamatan Jaringan',
    front: 'Classful Addressing',
    back: 'Sistem pembagian IP address berdasarkan kelas: Class A (1-126, /8), Class B (128-191, /16), Class C (192-223, /24). Class D (multicast), Class E (reserved). Sudah digantikan oleh CIDR.',
    example: 'Class A: 10.0.0.1, Class B: 172.16.0.1, Class C: 192.168.1.1'
  },
  {
    id: 25,
    category: 'Pengalamatan Jaringan',
    front: 'Private IP Address',
    back: 'Alamat IP yang tidak bisa diakses dari Internet, hanya untuk jaringan lokal. Tiga range yang direserved: 10.0.0.0/8 (Class A), 172.16.0.0/12 (Class B), 192.168.0.0/16 (Class C).',
    example: '192.168.1.x di rumah, 10.0.0.x di kantor'
  },
  {
    id: 26,
    category: 'Pengalamatan Jaringan',
    front: 'Public IP Address',
    back: 'Alamat IP yang bisa diakses dari Internet, diberikan oleh ISP. Setiap perangkat di Internet harus memiliki public IP yang unik. Digunakan oleh router untuk berkomunikasi ke luar.',
    example: '203.0.113.50 (contoh public IP dari ISP)'
  },
  {
    id: 27,
    category: 'Pengalamatan Jaringan',
    front: 'Network Address',
    back: 'Alamat pertama dalam sebuah subnet, digunakan untuk merepresentasikan jaringan itu sendiri. Semua bit host = 0. Tidak bisa digunakan sebagai alamat host.',
    example: 'Pada 192.168.1.0/24 → Network: 192.168.1.0'
  },
  {
    id: 28,
    category: 'Pengalamatan Jaringan',
    front: 'Broadcast Address',
    back: 'Alamat terakhir dalam sebuah subnet, digunakan untuk mengirim data ke semua perangkat dalam subnet. Semua bit host = 1. Tidak bisa digunakan sebagai alamat host.',
    example: 'Pada 192.168.1.0/24 → Broadcast: 192.168.1.255'
  },
  {
    id: 29,
    category: 'Pengalamatan Jaringan',
    front: 'Default Gateway',
    back: 'Router yang menghubungkan jaringan lokal ke jaringan lain (misal Internet). Saat komputer ingin mengirim data ke luar jaringan lokal, data dikirim ke default gateway terlebih dahulu.',
    example: 'Biasanya 192.168.1.1 atau 192.168.0.1'
  },
  {
    id: 30,
    category: 'Pengalamatan Jaringan',
    front: 'DNS (Domain Name System)',
    back: 'Sistem yang menerjemahkan nama domain (misal: google.com) menjadi IP address (misal: 142.250.185.78). Tanpa DNS, kita harus menghafal angka IP untuk membuka website.',
    example: 'Google DNS: 8.8.8.8, Cloudflare DNS: 1.1.1.1'
  },
  {
    id: 31,
    category: 'Pengalamatan Jaringan',
    front: 'DHCP (Dynamic Host Configuration Protocol)',
    back: 'Protokol yang secara otomatis memberikan IP address dan konfigurasi jaringan lainnya (subnet mask, gateway, DNS) ke perangkat saat terhubung ke jaringan.',
    example: 'Router di rumah biasanya sudah jadi DHCP server'
  },
  {
    id: 32,
    category: 'Pengalamatan Jaringan',
    front: 'Wildcard Mask',
    back: 'Kebalikan dari subnet mask, digunakan dalam ACL (Access Control List) Cisco. Dihitung: 255.255.255.255 - subnet mask. Contoh: subnet mask 255.255.255.0 → wildcard 0.0.0.255.',
    example: '/24 → wildcard 0.0.0.255, /30 → wildcard 0.0.0.3'
  },
  {
    id: 33,
    category: 'Pengalamatan Jaringan',
    front: 'NAT (Network Address Translation)',
    back: 'Teknik yang mengubah IP address saat paket melewati router. Memungkinkan banyak perangkat dengan private IP berbagi satu public IP untuk akses Internet.',
    example: 'Router rumah: 192.168.1.100 → 203.0.113.50'
  },
  {
    id: 34,
    category: 'Pengalamatan Jaringan',
    front: 'Supernetting',
    back: 'Kebalikan dari subnetting — menggabungkan beberapa subnet menjadi satu jaringan yang lebih besar. Biasanya menggunakan mask yang lebih pendek dari class default.',
    example: 'Menggabungkan 192.168.0.0/24 + 192.168.1.0/24 → 192.168.0.0/23'
  },
  {
    id: 35,
    category: 'Pengalamatan Jaringan',
    front: 'OSI Model (7 Layer)',
    back: 'Model referensi jaringan dengan 7 lapisan: 7-Application, 6-Presentation, 5-Session, 4-Transport, 3-Network, 2-Data Link, 1-Physical. Setiap layer punya fungsi spesifik dalam komunikasi data.',
    example: 'HTTP (L7), TCP (L4), IP (L3), Ethernet (L2), Kabel (L1)'
  },
];

export default flashcardData;
