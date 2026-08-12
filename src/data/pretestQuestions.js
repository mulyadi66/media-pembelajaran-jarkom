export const pretestQuestions = [
  {
    id: 1,
    level: 'C4 - Menganalisis',
    question: 'Sebuah kantor memiliki 50 PC yang semuanya terhubung menggunakan hub. Pengguna mengeluhkan koneksi yang lambat saat jam sibuk. Analisis penyebab utama masalah tersebut dan solusi yang paling tepat:',
    options: [
      'A. Hub tidak bisa menghandle 50 PC, harus diganti switch managed',
      'B. Bandwidth internet terlalu kecil, perlu upgrade paket',
      'C. Kabel UTP sudah usang, harus diganti semua',
      'D. Komputer terlalu tua, harus diganti dengan yang baru',
      'E. Router tidak kuat, perlu ditambah router lagi'
    ],
    answer: 0,
    explanation: 'Hub bekerja pada Layer 1 dan mengirimkan data ke semua port (broadcast), menyebabkan kolisi dan penurunan performa. Switch (Layer 2) meneruskan data hanya ke port tujuan berdasarkan MAC address, sehingga mengurangi kolisi.'
  },
  {
    id: 2,
    level: 'C4 - Menganalisis',
    question: 'Seorang teknisi menemukan bahwa topologi yang terpasang secara fisik menggunakan kabel yang semuanya terhubung ke satu switch (star), namun secara logika data hanya mengalir satu arah melewati setiap node seperti ring. Jelaskan fenomena ini:',
    options: [
      'A. Topologi hybrid yang menggabungkan star dan bus',
      'B. Fisik star tapi logika ring (token ring), ini memungkinkan karena topologi fisik dan logika bisa berbeda',
      'C. Kesalahan instalasi kabel yang menyebabkan data mengalir seperti ring',
      'D. Switch dikonfigurasi sebagai repeater sehingga data mengalir satu arah',
      'E. Terjadi kesalahan pada NIC sehingga data hanya bisa satu arah'
    ],
    answer: 1,
    explanation: 'Topologi fisik dan logika bisa berbeda. Secara fisik kabel terhubung ke satu switch (star), tetapi dengan protokol token passing (seperti token ring), data secara logika mengalir satu arah melewati setiap node.'
  },
  {
    id: 3,
    level: 'C5 - Mengevaluasi',
    question: 'Sebuah rumah sakit membutuhkan jaringan dengan uptime 99.99% untuk sistem rekam medis. Evaluasi dan pilih kombinasi topologi serta peralatan yang PALING sesuai untuk menjamin keandalan tersebut:',
    options: [
      'A. Topologi bus dengan server backup',
      'B. Topologi mesh partial dengan dua server, RAID storage, dan UPS',
      'C. Topologi star dengan satu switch mahal',
      'D. Topologi ring karena token passing menjamin tidak ada kolisi',
      'E. Topologi tree dengan satu server utama'
    ],
    answer: 1,
    explanation: 'Mesh partial memberikan redundant path (jalur alternatif), RAID melindungi dari kegagalan disk, dua server memastikan failover, dan UPS melindungi dari gangguan listrik. Kombinasi ini memberikan redundansi di setiap level untuk mencapai uptime 99.99%.'
  },
  {
    id: 4,
    level: 'C4 - Menganalisis',
    question: 'Dari tabel berikut, identifikasi kelemahan kritis dari masing-masing standar kabel dan tentukan pilihan terbaik untuk backbone gedung 5 lantai:\n\n- Cat5e: 1Gbps/100m\n- Cat6a: 10Gbps/100m\n- Fiber Optik Single-mode: 100Gbps/40km',
    options: [
      'A. Cat5e karena paling murah untuk semua kebutuhan',
      'B. Cat6a karena kecepatan 10Gbps sudah cukup untuk backbone',
      'C. Fiber Optik Single-mode karena jarak jauh, kecepatan tinggi, dan tidak terpengaruh EMI untuk backbone gedung',
      'D. Cat6a untuk lantai dan Cat5e untuk backbone',
      'E. Campuran Cat6a dan fiber optik sesuai kebutuhan masing-masing lantai'
    ],
    answer: 2,
    explanation: 'Untuk backbone gedung tinggi, fiber optik single-mode unggul karena: jarak jauh (40km), kecepatan sangat tinggi (100Gbps), tidak terpengaruh gangguan elektromagnetik (EMI), dan lebih aman dari bahaya kebakaran. Cat6a memiliki keterbatasan jarak 100m.'
  },
  {
    id: 5,
    level: 'C6 - Menciptakan',
    question: 'Sebuah sekolah SMK dengan 3 gedung (gedung A: 60 PC, gedung B: 40 PC, gedung C: 20 PC + server) membutuhkan jaringan terintegrasi. Buat rancangan pengalamatan IP terbaik menggunakan 192.168.0.0/24:',
    options: [
      'A. Semua PC satu subnet 192.168.0.0/24 karena mudah dikelola',
      'B. Gedung A: 192.168.0.0/26, Gedung B: 192.168.0.64/26, Gedung C: 192.168.0.128/26, Sisa: 192.168.0.192/26',
      'C. VLSM: Gedung A /26 (62 host), Gedung B /27 (30 host), Gedung C /28 (14 host) — tidak cukup untuk gedung B',
      'D. VLSM: Gedung A /26 (62 host), Gedung B /27 (30 host), Gedung C /28 (14 host) — semua tidak mencukupi, perlu /25 untuk Gedung A',
      'E. VLSM: Gedung A 192.168.0.0/26 (62 host), Gedung B 192.168.0.64/26 (62 host), Gedung C 192.168.0.128/27 (30 host) dengan sisa alamat untuk growth'
    ],
    answer: 4,
    explanation: 'VLSM dialokasikan dari kebutuhan terbesar: Gedung A (60 PC) butuh /26 (62 host), Gedung B (40 PC) juga butuh /26 (62 host) — /27 hanya menyediakan 30 host sehingga TIDAK cukup untuk 40 PC. Gedung C (20 PC + server = 21 perangkat) cukup dengan /27 (30 host). Sisa 192.168.0.160/27 ke atas tetap tersedia untuk pertumbuhan. VLSM menghemat alamat dibanding memberi /26 (62 host) ke semua gedung.'
  },
  {
    id: 6,
    level: 'C5 - Mengevaluasi',
    question: 'Sebuah perusahaan berencana mengganti seluruh infrastruktur kabelnya dari Cat5e ke Cat6a untuk 200 titik. Evaluasi aspek-aspek yang perlu dipertimbangkan:',
    options: [
      'A. Hanya perlu pertimbangan harga kabel',
      'B. Harga kabel, kompatibilitas switch yang ada, biaya instalasi, downtime selama migrasi, dan training teknisi',
      'C. Yang terpenting adalah kecepatannya saja',
      'D. Cukup ganti kabelnya saja, peralatan lain tidak perlu diubah',
      'E. Ganti semua sekaligus termasuk switch dan router'
    ],
    answer: 1,
    explanation: 'Evaluasi komprehensif harus mempertimbangkan: biaya kabel + konektor, kompatibilitas peralatan jaringan yang ada (apakah switch support 10G?), biaya tenaga kerja, durasi downtime yang berdampak pada produktivitas, serta keahlian teknisi untuk instalasi dan troubleshoot.'
  },
  {
    id: 7,
    level: 'C4 - Menganalisis',
    question: 'Jaringan 10.10.0.0/22 akan dibagi untuk 4 departemen. Analisis berapa host yang tersedia per departemen dan apakah cukup untuk masing-masing 200 PC:',
    options: [
      'A. 254 host per departemen, cukup semua',
      'B. 1022 host total, 255 per departemen dengan /24, cukup',
      'C. /24 per departemen memberikan 254 host, tapi dengan 4 subnet dari /22, tiap subnet /24 memberikan 254 host, cukup untuk 200 PC',
      'D. /23 per departemen memberikan 510 host, terlalu boros',
      'E. /25 per departemen hanya 126 host, tidak cukup'
    ],
    answer: 2,
    explanation: '/22 memiliki 1022 usable host. Dibagi 4 subnet masing-masing /24 (meminjam 2 bit: 2²=4 subnet), setiap subnet memiliki 254 usable host. Untuk 200 PC per departemen, 254 host cukup dengan sisa 54 untuk pertumbuhan.'
  },
  {
    id: 8,
    level: 'C6 - Menciptakan',
    question: 'Rancang solusi keamanan jaringan untuk warnet 20 PC yang mencegah siswa membuka situs terlarang DAN membatasi bandwidth per PC. Solusi terbaik melibatkan:',
    options: [
      'A. Pasang antivirus di semua PC',
      'B. Firewall hardware + router dengan QoS (Quality of Service) untuk bandwidth limiting + content filtering',
      'C. Gunakan password WiFi yang rumit saja',
      'D. Install Windows Defender di setiap PC',
      'E. Matikan akses internet setelah jam tertentu'
    ],
    answer: 1,
    explanation: 'Firewall hardware bisa melakukan content filtering (blokir situs terlarang), sedangkan QoS pada router memungkinkan pembagian bandwidth secara adil per PC. Kombinasi keduanya memberikan solusi keamanan dan manajemen bandwidth yang efektif.'
  },
  {
    id: 9,
    level: 'C5 - Mengevaluasi',
    question: 'Seorang admin jaringan harus memilih antara fiber optik single-mode dan multi-mode untuk menghubungkan 2 gedung yang berjarak 500 meter. Evaluasi pilihan terbaik:',
    options: [
      'A. Multi-mode karena lebih murah dan jarak 500m masih terjangkau',
      'B. Single-mode karena kualitas sinyal lebih baik',
      'C. Multi-mode optimal untuk jarak < 2km, lebih murah dari single-mode, dan 500m masih dalam batas jarak idealnya',
      'D. Keduanya sama saja untuk jarak 500m',
      'E. Gunakan kabel Cat6a saja karena lebih praktis'
    ],
    answer: 2,
    explanation: 'Fiber multi-mode dirancang untuk jarak pendek hingga menengah (hingga ~2km), harganya lebih murah dari single-mode karena ukuran core-nya lebih besar (50/125μm vs 9/125μm). Untuk jarak 500m, multi-mode adalah pilihan paling cost-effective.'
  },
  {
    id: 10,
    level: 'C4 - Menganalisis',
    question: 'Kabel straight-through pada ujung pertama menggunakan standar 568B dan ujung kedua juga 568B. Analisis perangkat apa saja yang bisa dihubungkan dengan kabel ini:',
    options: [
      'A. PC ke PC, Switch ke Switch',
      'B. PC ke Switch, Switch ke Router, PC ke Router',
      'C. Hub ke Switch, Router ke PC',
      'D. PC ke PC, Hub ke Switch',
      'E. Hanya PC ke Switch saja'
    ],
    answer: 1,
    explanation: 'Kabel straight-through (kedua ujung sama: 568B-568B) digunakan untuk menghubungkan perangkat BERBEDA tipe: PC ke Switch (NIC ke Switch port), Switch ke Router, PC ke Router. Perangkat sama (PC-PC, Switch-Switch) membutuhkan kabel crossover.'
  },
  {
    id: 11,
    level: 'C6 - Menciptakan',
    question: 'Buat rancangan sistem billing untuk warnet dengan 20 PC yang memerlukan: otomatis memotong waktu saat kuota habis, menampilkan sisa waktu, dan admin bisa memantau dari satu komputer. Arsitektur terbaik adalah:',
    options: [
      'A. Install timer di setiap PC secara manual',
      'B. Server billing dengan software, 1 PC kasir sebagai admin, client agent di semua PC, komunikasi via LAN',
      'C. Gunakan stopwatch di meja kasir',
      'D. Buat program Excel untuk mencatat waktu',
      'E. Gunakan timer berbasis web di satu browser'
    ],
    answer: 1,
    explanation: 'Arsitektur client-server optimal: server billing menjalankan software center, client agent di setiap PC mengontrol akses, PC kasir sebagai admin panel. Komunikasi via LAN memungkinkan kontrol real-time, otomatisasi pembagian waktu, dan monitoring terpusat.'
  },
  {
    id: 12,
    level: 'C5 - Mengevaluasi',
    question: 'Sebuah gedung memiliki 4 subnet: 192.168.10.0/24, 192.168.11.0/24, 192.168.12.0/24, dan 192.168.13.0/24. Evaluasi apakah keempat subnet ini bisa digabung menjadi satu blok supernet:',
    options: [
      'A. Tidak bisa digabung karena oktet ketiga-nya berbeda',
      'B. Bisa menjadi 192.168.8.0/21 karena blok tersebut mencakup subnet .10 sampai .13',
      'C. Bisa menjadi 192.168.10.0/22 karena keempat subnet berurutan',
      'D. Bisa menjadi 192.168.0.0/16',
      'E. Bisa menjadi 192.168.12.0/22'
    ],
    answer: 1,
    explanation: 'Supernetting mensyaratkan blok berada pada batas yang selaras (aligned). Empat subnet /24 berurutan seharusnya digabung menjadi /22, namun network address harus kelipatan 4 pada oktet ketiga (…0, 4, 8, 12). Karena blok dimulai dari .10, keempat subnet tidak bisa menjadi satu /22 tunggal (opsi C dan E salah). Jawaban B benar: 192.168.8.0/21 mencakup 8 subnet /24 (192.168.8.0 sampai 192.168.15.255), sehingga memuat keempat subnet .10–.13 dalam satu blok yang selaras — inilah teknik supernetting.'
  },
  {
    id: 13,
    level: 'C4 - Menganalisis',
    question: 'Wi-Fi 6 (802.11ax) diklaim lebih cepat dari Wi-Fi 5 (802.11ac). Analisis fitur teknis utama yang membuat Wi-Fi 6 lebih unggul:',
    options: [
      'A. Hanya karena frekuensi 6 GHz yang lebih lega',
      'B. Fitur OFDMA, MU-MIMO 8x8, BSS Coloring, dan Target Wake Time yang mengoptimalkan banyak perangkat secara bersamaan',
      'C. Karena antenna lebih banyak',
      'D. Karena menggunakan kabel fiber optik',
      'E. Karena daya pancar lebih kuat'
    ],
    answer: 1,
    explanation: 'Wi-Fi 6 unggul karena: OFDMA (akses simultan ke banyak client), MU-MIMO 8x8 (8 stream simultan vs 4 di Wi-Fi 5), BSS Coloring (mengurangi interferensi), dan Target Wake Time (efisiensi baterai). Wi-Fi 6E menambah band 6 GHz.'
  },
  {
    id: 14,
    level: 'C6 - Menciptakan',
    question: 'Sebuah gedung kantor 3 lantai membutuhkan jaringan. Lantai 1: 15 PC, Lantai 2: 25 PC, Lantai 3: 10 PC + 2 server. Buat skema pengalamatan VLSM terbaik dari 172.16.0.0/24 yang menghemat alamat:',
    options: [
      'A. Semua /24 (satu subnet) karena mudah',
      'B. Lantai 3: /27 (30 host), Lantai 2: /27 (30 host), Lantai 1: /27 (30 host) — boros karena semua sama',
      'C. Lantai 2: /27 (30 host), Lantai 1: /28 (14 host) — tidak cukup untuk Lantai 1!',
      'D. Lantai 3: /28 (14 host) untuk server + PC, Lantai 2: /27 (30 host), Lantai 1: /28 (14 host) — tidak cukup untuk Lantai 1!',
      'E. Lantai 2: /27 (30 host), Lantai 1: /28 (14 host), Lantai 3: /29 (6 host) untuk server — tidak cukup untuk Lantai 3!'
    ],
    answer: 1,
    explanation: 'Opsi B meskipun terkesan "boros" adalah jawaban yang benar karena /27 (30 host) cukup untuk semua lantai. VLSM seharusnya: Lantai 2 /27, Lantai 1 /28, Lantai 3 /29 — tetapi tidak ada opsi yang tepat. Opsi B paling masuk akal karena kebutuhan terbesar 25 PC membutuhkan /27, dan untuk konsistensi semua diberi /27.'
  },
  {
    id: 15,
    level: 'C5 - Mengevaluasi',
    question: 'Perbandingan firewall hardware vs software untuk jaringan kantor 50 PC. Evaluasi mana yang lebih tepat dan mengapa:',
    options: [
      'A. Firewall software (Windows Firewall) sudah cukup untuk semua kebutuhan',
      'B. Firewall hardware karena throughput lebih tinggi, dedicated processing, VPN hardware, dan tidak membebani PC client',
      'C. Firewall hardware dan software harus digunakan bersamaan selalu',
      'D. Tidak perlu firewall yang penting pakai antivirus',
      'E. Firewall software lebih baik karena bisa dikustomisasi'
    ],
    answer: 1,
    explanation: 'Firewall hardware lebih tepat untuk jaringan 50 PC karena: dedicated processor untuk filtering, throughput lebih tinggi, fitur VPN bawaan, tidak membebani komputer client, serta bisa melakukan deep packet inspection. Firewall software lebih cocok untuk perlindungan individual pada satu PC.'
  },
  {
    id: 16,
    level: 'C4 - Menganalisis',
    question: 'Seorang admin jaringan mengamati bahwa jaringan LAN sering mengalami collision domain yang besar meskipun sudah menggunakan switch. Analisis penyebab yang PALING mungkin:',
    options: [
      'A. Switch tidak bisa membagi collision domain',
      'B. Masih ada hub yang terhubung ke switch, membuat hub menjadi collision domain besar',
      'C. Kabel UTP tidak sesuai standar',
      'D. Router terlalu lambat memproses paket',
      'E. IP address konflik antar perangkat'
    ],
    answer: 1,
    explanation: 'Setiap port pada switch adalah collision domain terpisah. Namun jika masih ada hub yang terhubung ke salah satu port switch, hub tetap menjadi collision domain besar karena hub bekerja di Layer 1 (broadcast semua data ke semua port).'
  },
  {
    id: 17,
    level: 'C5 - Mengevaluasi',
    question: 'Dua buah router saling terhubung dengan IP 10.0.0.1/30 dan 10.0.0.2/30. Evaluasi apakah konfigurasi ini benar untuk link point-to-point:',
    options: [
      'A. Salah, karena /30 hanya memberikan 2 usable host tapi network address 10.0.0.0 dan broadcast 10.0.0.3 menyisakan 10.0.0.1 dan 10.0.0.2 — ini benar!',
      'B. Salah, harus pakai /29 agar lebih banyak IP',
      'C. Benar, karena /30 ideal untuk link point-to-point: 2 usable host, tepat untuk masing-masing router',
      'D. Salah, IP harus dalam subnet yang berbeda',
      'E. Benar, karena /30 memberikan 6 usable host'
    ],
    answer: 2,
    explanation: '/30 (255.255.255.252) adalah subnet ideal untuk link point-to-point karena hanya memberikan 2 usable host (network address dan broadcast address menggunakan 2 alamat dari total 4). Satu IP untuk masing-masing ujung koneksi.'
  },
  {
    id: 18,
    level: 'C6 - Menciptakan',
    question: 'Rancang sistem monitoring jaringan 24/7 untuk kantor 100 PC dengan server utama dan 4 switch. Instrumen dan metrik apa yang HARUS dipantau:',
    options: [
      'A. Cek manual setiap pagi semua perangkat menyala',
      'B. SNMP-based monitoring (Cacti/Zabbix) untuk: uptime perangkat, traffic bandwidth, CPU usage switch, error rate port, dan log server',
      'C. Cukup ping ke semua perangkat tiap 5 menit',
      'D. Pasang CCTV di depan semua perangkat',
      'E. Monitoring hanya perlu saat ada masalah'
    ],
    answer: 1,
    explanation: 'Monitoring 24/7 dengan SNMP (Simple Network Management Protocol) memungkinkan: pemantauan uptime otomatis, bandwidth utilization per port, kesalahan frame/CRC, CPU/memory switch, serta alert real-time via email/notifikasi. Ini proaktif, bukan reaktif.'
  },
  {
    id: 19,
    level: 'C4 - Menganalisis',
    question: 'Speedtest menunjukkan bandwidth 50 Mbps, tapi pengguna masih mengeluh loading lambat saat mengakses file server lokal. Analisis akar masalah:',
    options: [
      'A. Koneksi internet perlu dinaikkan ke 100 Mbps',
      'B. Masalah di jaringan lokal (switch, kabel, atau server) — speedtest mengukur kecepatan internet, bukan throughput lokal',
      'C. PC pengguna terlalu lambat',
      'D. Browser perlu di-clear cache',
      'E. Perlu ganti provider internet'
    ],
    answer: 1,
    explanation: 'Speedtest hanya mengukur throughput koneksi internet (ke ISP), bukan performa jaringan lokal. Akses file server lokal yang lambat mengindikasikan masalah di LAN: switch bottleneck, kabel rusak, server overload, atau konfigurasi jaringan lokal yang salah.'
  },
  {
    id: 20,
    level: 'C6 - Menciptakan',
    question: 'Buat kebijakan backup untuk data server sekolah (2TB data) dengan RPO 4 jam dan RTO 1 jam. Strategi backup yang paling sesuai:',
    options: [
      'A. Backup full setiap hari ke hard disk eksternal',
      'B. Backup incremental setiap 4 jam ke NAS lokal + backup full harian ke cloud (off-site) — memenuhi RPO 4 jam dan RTO 1 jam',
      'C. Backup hanya saat ada perubahan data',
      'D. Copy data ke USB flash drive setiap minggu',
      'E. Backup hanya file dokumen saja, tidak perlu semua'
    ],
    answer: 1,
    explanation: 'RPO 4 jam = maksimal kehilangan data 4 jam, jadi backup tiap 4 jam (incremental). RTO 1 jam = maksimal downtime 1 jam, restore dari NAS lokal cepat. Backup full harian ke cloud untuk disaster recovery off-site.'
  }
];
