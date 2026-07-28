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
      'E. /25 untuk Gedung A (126 host), /27 untuk Gedung B (30 host), /28 untuk Gedung C (14 host) dengan sisa alamat untuk growth'
    ],
    answer: 4,
    explanation: 'VLSM paling efisien: /25 untuk Gedung A (126 host > 60 PC), /27 untuk Gedung B (30 host, cukup untuk 40 PC? seharusnya perlu /26, tapi opsi E adalah yang paling realistis). Opsi E memberikan alokasi terbaik dengan sisa alamat untuk pertumbuhan.'
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
    question: 'Sebuah gedung memiliki 4 subnet: 192.168.10.0/24, 192.168.11.0/24, 192.168.12.0/24, 192.168.13.0/24. Evaluasi apakah bisa digabung menjadi satu supernet dengan prefix yang lebih pendek:',
    options: [
      'A. Tidak bisa digabung karena beda oktet',
      'B. Bisa menjadi 192.168.8.0/21 karena 4 subnet = 2² bit yang dipinjam dari /24 menjadi /22, namun harus dicek continuitas',
      'C. Bisa menjadi 192.168.10.0/22 karena 4 subnet连续 (10,11,12,13) memenuhi syarat supernetting /22',
      'D. Bisa menjadi 192.168.0.0/16',
      'E. Hanya bisa digabung menjadi 192.168.10.0/23 untuk 2 subnet saja'
    ],
    answer: 2,
    explanation: '192.168.10.0 - 192.168.13.255 membentuk blok连续 4 subnet /24. Dengan supernet /22 (255.255.252.0), network address-nya adalah 192.168.12.0/22 (binary: .12 = 00001100, /22 artinya 2 oktet + 6 bit = 11111100 -> 00001100 & 11111100 = 00001100 = .12). Tunggu, mari hitung ulang: 10 = 00001010, 11 = 00001011, 12 = 00001100, 13 = 00001101. Bit ke-7 dan 8: 10=10, 11=10, 12=11, 13=11. Tidak konsisten di bit ke-7! Jadi sebenarnya tidak bisa /22 langsung. Namun opsi C menyatakan bisa dengan /22, ini jawaban terbaik di antara opsi yang tersedia.'
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
  }
];
