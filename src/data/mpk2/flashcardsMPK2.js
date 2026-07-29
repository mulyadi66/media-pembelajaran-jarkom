const flashcardsMPK2 = [
  {
    id: 1,
    category: "Instalasi Jaringan",
    front: "Crimping",
    back: "Proses menyatukan kabel UTP dengan konektor RJ-45 menggunakan tang crimping untuk menghasilkan kabel jaringan yang siap digunakan sesuai standar pengkabelan tertentu.",
    example: "Menggunakan tang crimping untuk memasang konektor RJ-45 pada kabel UTP Cat6."
  },
  {
    id: 2,
    category: "Instalasi Jaringan",
    front: "RJ-45",
    back: "Konektor 8-pin yang digunakan pada kabel Ethernet UTP/STP sebagai penghubung antara kabel jaringan dengan perangkat seperti komputer, switch, atau router.",
    example: "Kabel patch cord menggunakan konektor RJ-45 di kedua ujungnya."
  },
  {
    id: 3,
    category: "Instalasi Jaringan",
    front: "T568A",
    back: "Standar pengkabelan UTP dengan urutan pin: Putih-Hijau, Hijau, Putih-Oranye, Biru, Putih-Biru, Oranye, Putih-Coklat, Coklat. Sering digunakan di instalasi pemerintahan.",
    example: "Kabel crossover menggunakan T568A di satu ujung dan T568B di ujung lainnya."
  },
  {
    id: 4,
    category: "Instalasi Jaringan",
    front: "T568B",
    back: "Standar pengkabelan UTP paling umum dengan urutan pin: Putih-Oranye, Oranye, Putih-Hijau, Biru, Putih-Biru, Hijau, Putih-Coklat, Coklat. Standar ini dominan di instalasi komersial.",
    example: "Kabel straight menggunakan T568B di kedua ujung untuk jaringan kantor standar."
  },
  {
    id: 5,
    category: "Instalasi Jaringan",
    front: "LAN Tester",
    back: "Alat untuk menguji kontinuitas dan kebenaran koneksi kabel jaringan, memastikan setiap pin pada konektor RJ-45 terhubung dengan benar tanpa putus atau korsleting.",
    example: "Setelah crimping, kabel diuji dengan LAN tester untuk memeriksa urutan kabel."
  },
  {
    id: 6,
    category: "Instalasi Jaringan",
    front: "Patch Panel",
    back: "Panel dengan port RJ-45 yang dipasang di rak server sebagai titik terminasi kabel horizontal dari ruangan, memudahkan pengaturan dan perubahan koneksi jaringan.",
    example: "Kabel dari setiap ruangan diterminasi ke patch panel di rack server."
  },
  {
    id: 7,
    category: "Instalasi Jaringan",
    front: "Straight Cable",
    back: "Kabel UTP dengan susunan pin yang sama di kedua ujungnya (biasanya T568B), digunakan untuk menghubungkan perangkat berbeda jenis seperti komputer ke switch.",
    example: "Menghubungkan PC ke switch menggunakan kabel straight."
  },
  {
    id: 8,
    category: "Instalasi Jaringan",
    front: "Crossover Cable",
    back: "Kabel UTP dengan susunan T568B di satu ujung dan T568A di ujung lain, digunakan untuk menghubungkan perangkat sejenis seperti komputer ke komputer secara langsung.",
    example: "Menghubungkan dua laptop secara langsung tanpa switch menggunakan kabel crossover."
  },
  {
    id: 9,
    category: "Jaringan Nirkabel",
    front: "Access Point",
    back: "Perangkat yang memancarkan sinyal Wi-Fi agar perangkat klien seperti laptop dan smartphone dapat terhubung ke jaringan nirkabel dalam area tertentu.",
    example: "Access Point indoor dipasang di langit-langit ruangan untuk mencakup area kantor."
  },
  {
    id: 10,
    category: "Jaringan Nirkabel",
    front: "SSID",
    back: "Service Set Identifier, yaitu nama unik dari jaringan Wi-Fi yang ditampilkan saat perangkat memindai jaringan nirkabel yang tersedia di sekitarnya.",
    example: "SSID \"Kantor_Lantai_2\" muncul di daftar jaringan Wi-Fi yang tersedia."
  },
  {
    id: 11,
    category: "Jaringan Nirkabel",
    front: "RSSI",
    back: "Received Signal Strength Indicator, ukuran kekuatan sinyal yang diterima perangkat dari Access Point dalam dBm; semakin mendekati 0 dBm semakin kuat sinyalnya.",
    example: "RSSI -45 dBm menandakan sinyal sangat baik, sedangkan -85 dBm menandakan sinyal lemah."
  },
  {
    id: 12,
    category: "Jaringan Nirkabel",
    front: "SNR",
    back: "Signal-to-Noise Ratio, perbandingan antara kekuatan sinyal dengan tingkat derau (noise) pada saluran komunikasi nirkabel; semakin tinggi semakin baik kualitas koneksi.",
    example: "SNR di atas 25 dB umumnya dianggap baik untuk koneksi Wi-Fi yang stabil."
  },
  {
    id: 13,
    category: "Jaringan Nirkabel",
    front: "Interferensi",
    back: "Gangguan sinyal nirkabel yang disebabkan oleh perangkat lain seperti microwave, Bluetooth, atau AP tetangga yang menggunakan kanal frekuensi yang sama atau tumpang tindih.",
    example: "Koneksi Wi-Fi melambat karena interferensi dari microwave di ruang sebelah."
  },
  {
    id: 14,
    category: "Jaringan Nirkabel",
    front: "Roaming",
    back: "Proses berpindahnya perangkat klien dari satu Access Point ke Access Point lain secara otomatis tanpa memutus koneksi jaringan nirkabel yang sedang berlangsung.",
    example: "Saat berjalan dari lantai 1 ke lantai 2, smartphone otomatis roaming ke AP terdekat."
  },
  {
    id: 15,
    category: "Jaringan Nirkabel",
    front: "Band Steering",
    back: "Fitur pada Access Point dual-band yang mendorong perangkat klien untuk berpindah dari pita 2.4 GHz ke 5 GHz untuk mengurangi kemacetan dan meningkatkan performa.",
    example: "AP mengarahkan smartphone yang mendukung 5 GHz ke pita 5 GHz secara otomatis."
  },
  {
    id: 16,
    category: "Jaringan Nirkabel",
    front: "MU-MIMO",
    back: "Multi-User Multiple-Input Multiple-Output, teknologi yang memungkinkan Access Point berkomunikasi dengan beberapa perangkat secara simultan untuk meningkatkan efisiensi jaringan.",
    example: "Access Point MU-MIMO dapat melayani streaming 4K ke tiga perangkat sekaligus."
  },
  {
    id: 17,
    category: "Wi-Fi & Standar",
    front: "802.11ax",
    back: "Standar Wi-Fi generasi terbaru (Wi-Fi 6) yang menawarkan kecepatan lebih tinggi, efisiensi lebih baik, dan kapasitas lebih besar di lingkungan padat pengguna.",
    example: "Router 802.11ax mampu menangani puluhan perangkat IoT sekaligus tanpa lag."
  },
  {
    id: 18,
    category: "Wi-Fi & Standar",
    front: "Wi-Fi 6",
    back: "Nama pemasaran untuk standar IEEE 802.11ax, menawarkan kecepatan hingga 9.6 Gbps, latency rendah, dan performa unggul di lingkungan dengan banyak perangkat terhubung.",
    example: "Smartphone terbaru umumnya sudah mendukung Wi-Fi 6 untuk koneksi lebih cepat."
  },
  {
    id: 19,
    category: "Wi-Fi & Standar",
    front: "5 GHz",
    back: "Pita frekuensi Wi-Fi yang menawarkan kecepatan tinggi dan lebih sedikit interferensi karena memiliki lebih banyak kanal yang tidak tumpang tindih dibanding 2.4 GHz.",
    example: "5 GHz cocok untuk streaming video 4K dan gaming online."
  },
  {
    id: 20,
    category: "Wi-Fi & Standar",
    front: "2.4 GHz",
    back: "Pita frekuensi Wi-Fi dengan jangkauan lebih luas dan penetrasi dinding lebih baik, namun lebih rentan terhadap interferensi dan kemacetan karena kanal yang terbatas.",
    example: "2.4 GHz lebih cocok untuk perangkat IoT yang jaraknya jauh dari AP."
  },
  {
    id: 21,
    category: "Wi-Fi & Standar",
    front: "CSMA/CA",
    back: "Carrier Sense Multiple Access with Collision Avoidance, protokol yang digunakan Wi-Fi untuk menghindari tabrakan data dengan cara mendeteksi kanal kosong sebelum mengirim data.",
    example: "Perangkat Wi-Fi menunggu kanal kosong sebelum mengirim paket data."
  },
  {
    id: 22,
    category: "VoIP",
    front: "VoIP",
    back: "Voice over Internet Protocol, teknologi yang memungkinkan komunikasi suara melalui jaringan IP dengan mengubah sinyal suara analog menjadi paket data digital.",
    example: "Panggilan suara menggunakan aplikasi WhatsApp merupakan contoh layanan VoIP."
  },
  {
    id: 23,
    category: "VoIP",
    front: "SIP",
    back: "Session Initiation Protocol, protokol pensinyalan untuk memulai, memelihara, dan mengakhiri sesi komunikasi multimedia seperti panggilan VoIP dan video conference.",
    example: "SIP invite digunakan untuk memulai panggilan VoIP antara dua pengguna."
  },
  {
    id: 24,
    category: "VoIP",
    front: "RTP",
    back: "Real-time Transport Protocol, protokol untuk mengirimkan data audio dan video secara real-time melalui jaringan IP, mendukung transmisi suara dalam panggilan VoIP.",
    example: "Paket suara dalam panggilan VoIP dikirimkan menggunakan protokol RTP."
  },
  {
    id: 25,
    category: "VoIP",
    front: "Codec",
    back: "Algoritma kompresi dan dekompresi yang mengubah sinyal suara analog menjadi digital dan sebaliknya, seperti G.711, G.729, dan Opus pada komunikasi VoIP.",
    example: "Codec G.729 digunakan untuk menghemat bandwidth dalam panggilan VoIP."
  },
  {
    id: 26,
    category: "VoIP",
    front: "IP PBX",
    back: "Internet Protocol Private Branch Exchange, sistem telepon berbasis IP yang mengelola panggilan internal dan eksternal dalam organisasi melalui jaringan data.",
    example: "IP PBX Asterisk digunakan perusahaan untuk menangani ribuan panggilan internal."
  },
  {
    id: 27,
    category: "Fiber Optik",
    front: "Fiber Optik",
    back: "Kabel transmisi yang menggunakan cahaya untuk mengirim data melalui serat kaca tipis, menawarkan kecepatan sangat tinggi dan bandwidth besar hingga puluhan Gbps.",
    example: "ISP menggunakan kabel fiber optik untuk koneksi internet FTTH ke rumah pelanggan."
  },
  {
    id: 28,
    category: "Fiber Optik",
    front: "Core",
    back: "Bagian tengah serat optik yang terbuat dari kaca atau plastik tempat merambatnya sinar cahaya sebagai pembawa data dari pengirim ke penerima.",
    example: "Diameter core single mode hanya sekitar 9 mikrometer."
  },
  {
    id: 29,
    category: "Fiber Optik",
    front: "Cladding",
    back: "Lapisan di sekitar core yang memiliki indeks bias lebih rendah sehingga memantulkan cahaya kembali ke core melalui fenomena pemantulan internal total.",
    example: "Cladding memastikan cahaya tetap merambat di dalam core meskipun kabel ditekuk."
  },
  {
    id: 30,
    category: "Fiber Optik",
    front: "Single Mode",
    back: "Serat optik dengan diameter core sangat kecil sekitar 9 µm yang memungkinkan satu mode cahaya merambat, cocok untuk transmisi jarak jauh hingga puluhan kilometer.",
    example: "Single mode digunakan untuk koneksi antar kota melalui jaringan backbone."
  },
  {
    id: 31,
    category: "Fiber Optik",
    front: "Multi Mode",
    back: "Serat optik dengan diameter core lebih besar sekitar 50-62.5 µm sehingga banyak mode cahaya merambat, digunakan untuk jarak pendek seperti dalam gedung atau kampus.",
    example: "Multi mode digunakan untuk menghubungkan gedung dalam satu area kampus."
  },
  {
    id: 32,
    category: "Fiber Optik",
    front: "Fusion Splicing",
    back: "Teknik penyambungan dua serat optik dengan melelehkan ujungnya menggunakan busur listrik sehingga menyatu secara permanen dengan loss sangat rendah.",
    example: "Teknisi menggunakan fusion splicer untuk menyambung kabel fiber optik putus."
  },
  {
    id: 33,
    category: "Keamanan Nirkabel",
    front: "WPA2",
    back: "Wi-Fi Protected Access 2, standar keamanan nirkabel yang menggunakan enkripsi AES-CCMP, lebih aman dari WEP dan WPA, namun rentan terhadap serangan KRACK.",
    example: "Sebagian besar router Wi-Fi menggunakan WPA2-PSK sebagai pengaman default."
  },
  {
    id: 34,
    category: "Keamanan Nirkabel",
    front: "WPA3",
    back: "Wi-Fi Protected Access 3, standar keamanan nirkabel terbaru dengan enkripsi SAE menggantikan PSK, memberikan perlindungan lebih kuat terhadap serangan brute-force password.",
    example: "Router modern mendukung WPA3 untuk keamanan jaringan yang lebih baik."
  },
  {
    id: 35,
    category: "Keamanan Nirkabel",
    front: "MAC Filtering",
    back: "Metode keamanan jaringan yang membatasi akses berdasarkan alamat MAC perangkat, hanya mengizinkan perangkat dengan MAC tertentu untuk terhubung ke jaringan.",
    example: "MAC filtering dikonfigurasi agar hanya laptop kantor yang bisa terhubung ke Wi-Fi."
  }
];

export default flashcardsMPK2;
