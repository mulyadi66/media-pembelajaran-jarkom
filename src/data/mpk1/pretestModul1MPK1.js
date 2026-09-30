export default [
  {
    id: 1,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Perangkat jaringan yang bekerja pada Layer 2 OSI dan meneruskan data berdasarkan MAC address adalah...',
    options: [
      'A. Switch',
      'B. Hub',
      'C. Router',
      'D. Repeater',
      'E. Modem'
    ],
    answer: 0,
    explanation: 'Switch membaca MAC address tujuan lalu meneruskan frame hanya ke port yang sesuai, sehingga bekerja pada Layer 2 atau Data Link.'
  },
  {
    id: 2,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Fungsi utama sebuah router adalah...',
    options: [
      'A. Memperkuat sinyal listrik pada kabel',
      'B. Menghubungkan jaringan berbeda dengan merutekan paket berdasarkan alamat IP',
      'C. Meneruskan seluruh data ke semua port sekaligus',
      'D. Menyaring konten website yang diakses pengguna',
      'E. Menyediakan cadangan listrik saat PLN padam'
    ],
    answer: 1,
    explanation: 'Router bekerja pada Layer 3 atau Network dan memilih rute paket berdasarkan alamat IP. Memperkuat sinyal adalah tugas repeater, sedangkan menyaring konten tugas firewall atau proxy.'
  },
  {
    id: 3,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Menurut standar TIA/EIA-568B, warna pada pin nomor 2 adalah...',
    options: [
      'A. Hijau',
      'B. Biru Putih',
      'C. Oranye',
      'D. Coklat Putih',
      'E. Hijau Putih'
    ],
    answer: 2,
    explanation: 'Urutan TIA/EIA-568B adalah 1 Oranye Putih, 2 Oranye, 3 Hijau Putih, 4 Biru, 5 Biru Putih, 6 Hijau, 7 Coklat Putih, 8 Coklat.'
  },
  {
    id: 4,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Kabel straight-through adalah kabel yang...',
    options: [
      'A. Digunakan untuk menghubungkan PC langsung ke PC',
      'B. Digunakan untuk menghubungkan switch ke switch',
      'C. Digunakan untuk menghubungkan router ke router',
      'D. Digunakan untuk menghubungkan PC ke switch, dengan urutan pin sama di kedua ujung',
      'E. Tidak memiliki konektor sama sekali'
    ],
    answer: 3,
    explanation: 'Straight-through memakai urutan pin identik di kedua ujung, misalnya 568B-568B, dan dipakai untuk perangkat berbeda fungsi seperti PC ke switch.'
  },
  {
    id: 5,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Perangkat yang bekerja murni pada Layer 1 dan menyiarkan sinyal ke seluruh port tanpa memeriksa alamat tujuan adalah...',
    options: [
      'A. Switch',
      'B. Bridge',
      'C. Router',
      'D. Firewall',
      'E. Hub'
    ],
    answer: 4,
    explanation: 'Hub hanya mengulang sinyal listrik ke semua port. Karena tidak memeriksa MAC maupun IP, seluruh jaringan berbagi satu collision domain sehingga boros bandwidth.'
  },
  {
    id: 6,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Komponen di dalam komputer yang mengubah data menjadi sinyal agar bisa dikirim melalui kabel disebut...',
    options: [
      'A. Network Interface Card (NIC)',
      'B. Switch',
      'C. Hub',
      'D. Repeater',
      'E. Access point'
    ],
    answer: 0,
    explanation: 'NIC adalah antarmuka jaringan pada perangkat akhir yang mengubah data menjadi sinyal dan sebaliknya. Contohnya Intel I219-V atau Realtek RTL.'
  },
  {
    id: 7,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Media transmisi yang bebas dari interferensi listrik karena membawa data sebagai cahaya adalah...',
    options: [
      'A. Kabel UTP',
      'B. Fiber optik',
      'C. Kabel STP',
      'D. Gelombang radio',
      'E. Gelombang microwave'
    ],
    answer: 1,
    explanation: 'Fiber optik menyalurkan cahaya sehingga tidak terpengaruh interferensi elektromagnetik dan dapat menjangkau jarak jauh dibanding kabel tembaga.'
  },
  {
    id: 8,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Perangkat yang mengubah sinyal digital komputer menjadi sinyal analog atau cahaya disebut...',
    options: [
      'A. Repeater',
      'B. Firewall',
      'C. Modem',
      'D. Load balancer',
      'E. VPN gateway'
    ],
    answer: 2,
    explanation: 'Modem adalah singkatan modulator-demodulator, misalnya modem ADSL atau ONT fiber optik. Repeater hanya memperkuat sinyal tanpa mengubah bentuknya.'
  },
  {
    id: 9,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Ciri utama kabel crossover dibanding kabel straight-through adalah...',
    options: [
      'A. Kedua ujungnya sama-sama memakai urutan 568A',
      'B. Kedua ujungnya sama-sama memakai urutan 568B',
      'C. Kabelnya sama sekali tidak memakai konektor',
      'D. Urutan pin di kedua ujung ditukar, yaitu 568A dan 568B',
      'E. Media transmisi digantikan menjadi koaksial'
    ],
    answer: 3,
    explanation: 'Crossover menukar urutan pin antar ujung agar pasangan Tx dan Rx tidak berhadapan langsung, sehingga dipakai untuk menghubungkan dua perangkat sejenis.'
  },
  {
    id: 10,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 1',
    question: 'Dua puluh PC di satu ruangan ingin saling bertukar data. Perangkat yang paling tepat adalah...',
    options: [
      'A. Hub',
      'B. Repeater',
      'C. Bridge',
      'D. Modem',
      'E. Switch'
    ],
    answer: 4,
    explanation: 'Switch memberi setiap PC jalur dan collision domain sendiri sehingga 20 PC dapat berkomunikasi tanpa tabrakan. Hub juga bisa menghubungkan banyak PC, tetapi semuanya berbagi bandwidth.'
  },
  {
    id: 11,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Apa perbedaan paling menentukan antara hub dan switch dalam jaringan yang sama?',
    options: [
      'A. Hub menyiarkan data ke semua port, sedangkan switch meneruskan hanya ke port sesuai MAC tujuan',
      'B. Switch menyiarkan data ke semua port, sedangkan hub meneruskan sesuai MAC tujuan',
      'C. Keduanya bekerja dengan cara yang sama persis',
      'D. Hub bekerja pada Layer 3, sedangkan switch pada Layer 1',
      'E. Switch tidak membutuhkan sumber listrik untuk beroperasi'
    ],
    answer: 0,
    explanation: 'Inilah alasan switch menggantikan hub: dengan membaca tabel MAC, switch membatasi tabrakan hanya di port yang sedang mengirim.'
  },
  {
    id: 12,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Sebuah instalasi memakai kabel UTP Category 5e. Kecepatan maksimal yang dijamin kabel tersebut adalah...',
    options: [
      'A. 10 Mbps',
      'B. 1 Gbps',
      'C. 10 Gbps',
      'D. 100 Gbps',
      'E. 40 Gbps'
    ],
    answer: 1,
    explanation: 'Cat5e mendukung 1000BASE-T sampai 100 meter. Untuk 10 Gbps diperlukan Cat6a, dan untuk 40 atau 100 Gbps dibutuhkan Cat8 atau fiber optik.'
  },
  {
    id: 13,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Pada koneksi 100BASE-TX, berapa pasangan kabel yang benar-benar dipakai untuk membawa data?',
    options: [
      'A. Satu pasang',
      'B. Tiga pasang',
      'C. Dua pasang, yaitu 1-2 dan 3-6',
      'D. Empat pasang',
      'E. Delapan pasang'
    ],
    answer: 2,
    explanation: '100BASE-TX hanya memakai pasangan 1-2 dan 3-6. Keempat pasangan baru dipakai semuanya pada 1000BASE-T.'
  },
  {
    id: 14,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Alat yang paling tepat untuk memeriksa urutan crimping konektor RJ-45 sudah benar adalah...',
    options: [
      'A. Multimeter',
      'B. OTDR',
      'C. Spectrum analyzer',
      'D. Cable tester',
      'E. Crimping tool'
    ],
    answer: 3,
    explanation: 'Cable tester menyalakan lampu secara berurutan di kedua ujung sehingga urutan pin yang terpasang langsung terlihat. OTDR dipakai untuk jaringan optik.'
  },
  {
    id: 15,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Saat menganalisis kebutuhan jaringan untuk sekolah, faktor yang paling menentukan besar kecilnya kapasitas jaringan adalah...',
    options: [
      'A. Panjang nama ruang kelas',
      'B. Warna cat dinding',
      'C. Jumlah rak buku di perpustakaan',
      'D. Merek monitor yang dipakai siswa',
      'E. Jumlah pengguna dan jenis aplikasi yang dijalankan'
    ],
    answer: 4,
    explanation: 'Kapasitas jaringan ditentukan jumlah pengguna sekaligus jenis aplikasinya. Streaming video membutuhkan bandwidth jauh lebih besar daripada browsing teks biasa.'
  },
  {
    id: 16,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Perangkat yang menjadi perantara akses internet, menyimpan cache, dan menyaring konten yang diminta pengguna adalah...',
    options: [
      'A. Proxy server',
      'B. Repeater',
      'C. Load balancer',
      'D. UPS',
      'E. Access point'
    ],
    answer: 0,
    explanation: 'Proxy menerima permintaan dari klien lalu meneruskannya ke internet. Halaman yang sering diakses bisa diambil dari cache sehingga lebih cepat dan hemat bandwidth.'
  },
  {
    id: 17,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Jaringan memakai kabel Cat6a, switch 10 Gbps, dan komputer yang hanya mendukung 1 Gbps. Kecepatan akhir yang dirasakan pengguna adalah...',
    options: [
      'A. 10 Gbps, karena kabelnya mendukung',
      'B. 1 Gbps, karena dibatasi perangkat paling lambat',
      'C. 5 Gbps, yaitu rata-rata antara kapasitas kabel dan komputer',
      'D. 100 Mbps, standar minimum semua perangkat',
      'E. Tidak dapat ditentukan tanpa mengetahui merek kabel'
    ],
    answer: 1,
    explanation: 'Kecepatan selalu mengikuti komponen terlemah dalam jalur tersebut. Kabel yang lebih baik tidak menambah kecepatan jika perangkat lainnya masih lambat.'
  },
  {
    id: 18,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Manakah yang termasuk media transmisi unguided atau tanpa kabel?',
    options: [
      'A. Kabel UTP',
      'B. Kabel STP',
      'C. Gelombang radio',
      'D. Serat optik',
      'E. Kabel koaksial'
    ],
    answer: 2,
    explanation: 'Unguided berarti sinyal rambat bebas di udara, misalnya radio Wi-Fi, microwave, dan satelit. UTP, STP, koaksial, dan fiber optik adalah media terk pandu.'
  },
  {
    id: 19,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Perangkat yang tugasnya menyediakan akses nirkabel atau Wi-Fi bagi laptop dan smartphone di dalam area tertentu adalah...',
    options: [
      'A. Router',
      'B. Firewall',
      'C. Load balancer',
      'D. Access point',
      'E. Repeater optik'
    ],
    answer: 3,
    explanation: 'Access point menyediakan layanan Wi-Fi dan biasanya terhubung ke switch menggunakan kabel, berbeda dengan router yang mengarahkan lalu lintas paket.'
  },
  {
    id: 20,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 1',
    question: 'Batas jarak maksimum satu segmen kabel UTP dalam jaringan Ethernet lokal adalah...',
    options: [
      'A. 10 meter',
      'B. 50 meter',
      'C. 75 meter',
      'D. 90 meter',
      'E. 100 meter'
    ],
    answer: 4,
    explanation: 'Standar Ethernet membatasi satu segmen tembaga sampai 100 meter karena kekuatan sinyal menurun seiring bertambahnya panjang kabel. Jarak lebih jauh butuh repeater atau media optik.'
  },
  {
    id: 21,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Perbedaan teknis utama antara 100BASE-TX dan 1000BASE-T pada media kabel tembaga terletak pada...',
    options: [
      'A. 1000BASE-T memakai keempat pasangan kabel sekaligus, sedangkan 100BASE-TX hanya dua pasang',
      'B. 1000BASE-T hanya memakai satu pasangan kabel, sedangkan 100BASE-TX memakai dua pasang',
      'C. Keduanya memakai pasangan kabel yang persis sama',
      'D. 1000BASE-T harus memakai fiber optik, sedangkan 100BASE-TX memakai UTP',
      'E. 100BASE-TX mendukung 100 meter, sedangkan 1000BASE-T hanya 10 meter'
    ],
    answer: 0,
    explanation: '1000BASE-T memakai keempat pasangan secara simultan dengan teknik encoding multilevel, sehingga 1 Gbps tetap tercapai dalam jarak 100 meter.'
  },
  {
    id: 22,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Pada instalasi switch yang mendukung Power over Ethernet, pasangan kabel 4-5 dan 7-8 umumnya digunakan untuk...',
    options: [
      'A. Menambah bandwidth data pada 100BASE-TX',
      'B. Membawa tegangan listrik sebagai bagian dari standar PoE',
      'C. Menyalin data dari satu port ke port lain secara otomatis',
      'D. Mengganti fungsi switch menjadi hub',
      'E. Menyiarkan sinyal ke seluruh port sekaligus'
    ],
    answer: 1,
    explanation: 'Pasangan 4-5 dan 7-8 tidak dipakai data pada Fast Ethernet, sehingga bisa dipakai membawa tegangan PoE bersamaan dengan data dalam satu kabel.'
  },
  {
    id: 23,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Teknologi auto-MDIX pada switch modern berfungsi untuk...',
    options: [
      'A. Mempercepat transfer data menjadi sepuluh kali lipat',
      'B. Mengubah fungsi firewall menjadi proxy server',
      'C. Mendeteksi otomatis apakah kabel yang terpasang straight-through atau crossover',
      'D. Memperpanjang jangkauan kabel tembaga menjadi 200 meter',
      'E. Mengubah kabel UTP menjadi fiber optik secara otomatis'
    ],
    answer: 2,
    explanation: 'Auto-MDIX membuat perangkat modern menyesuaikan sendiri jenis kabelnya. Prinsip straight-through dan crossover tetap perlu dikuasai untuk troubleshooting.'
  },
  {
    id: 24,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Dua segmen LAN yang terpisah di dalam kampus perlu disatukan agar komputer di keduanya bisa saling mengakses file. Perangkat yang paling tepat adalah...',
    options: [
      'A. Access point',
      'B. Repeater',
      'C. Hub',
      'D. Bridge',
      'E. Modem'
    ],
    answer: 3,
    explanation: 'Bridge menggabungkan dua segmen LAN dengan menyaring frame berdasarkan MAC address. Repeater hanya memperkuat sinyal, sedangkan modem mengubah bentuk sinyal untuk jalur telekomunikasi.'
  },
  {
    id: 25,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Sebuah toko online memiliki tiga server identik. Agar tidak ada server yang kewalahan saat ramai pembeli, perangkat yang paling tepat adalah...',
    options: [
      'A. Firewall',
      'B. Proxy server',
      'C. VPN gateway',
      'D. Repeater',
      'E. Load balancer'
    ],
    answer: 4,
    explanation: 'Load balancer membagi trafik permintaan ke beberapa server agar bebannya merata dan layanan tetap berjalan ketika satu server bermasalah.'
  },
  {
    id: 26,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Gangguan listrik sesaat membuat switch utama mati dan seluruh jaringan ikut down. Untuk mencegah hal itu, yang perlu ditambahkan adalah...',
    options: [
      'A. UPS',
      'B. Proxy server',
      'C. Access point',
      'D. Load balancer',
      'E. Bridge'
    ],
    answer: 0,
    explanation: 'UPS menyimpan cadangan listrik sehingga perangkat jaringan tetap menyala ketika PLN padam atau tegangan turun sesaat.'
  },
  {
    id: 27,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Urutan warna pin 1, 2, dan 3 pada standar TIA/EIA-568B adalah...',
    options: [
      'A. Hijau Putih, Hijau, Oranye Putih',
      'B. Oranye Putih, Oranye, Hijau Putih',
      'C. Biru Putih, Biru, Oranye Putih',
      'D. Coklat Putih, Coklat, Oranye Putih',
      'E. Oranye, Oranye Putih, Hijau Putih'
    ],
    answer: 1,
    explanation: 'Urutan 568B adalah 1 Oranye Putih, 2 Oranye, 3 Hijau Putih. Opsi A justru urutan 568A, sedangkan opsi E tertukar antara pin 1 dan pin 2.'
  },
  {
    id: 28,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Kantor pusat perlu mengambil data dari tiga cabang di kota lain melalui internet publik, dan datanya harus tidak bisa dibaca pihak lain. Perangkat yang tepat adalah...',
    options: [
      'A. Hub',
      'B. Repeater',
      'C. VPN gateway',
      'D. Load balancer',
      'E. Access point'
    ],
    answer: 2,
    explanation: 'VPN gateway membuat terowongan terenkripsi sehingga data yang melintasi internet publik tetap aman. Hub dan repeater bekerja di lapisan fisik, sedangkan access point untuk akses nirkabel.'
  },
  {
    id: 29,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Gedung tiga lantai tidak boleh menarik kabel ke lantai atas, dan sebagian besar pengguna memakai laptop. Solusi paling hemat biaya untuk memberi akses jaringan di semua lantai adalah...',
    options: [
      'A. Menambah port pada switch yang sudah ada',
      'B. Mengganti switch dengan hub',
      'C. Memasang bridge antar lantai',
      'D. Memasang access point di setiap lantai',
      'E. Mengganti seluruh kabel UTP menjadi fiber optik'
    ],
    answer: 3,
    explanation: 'Access point di setiap lantai memberi cakupan Wi-Fi tanpa perlu menarik kabel ke atas. Fiber optik memang menjangkau jauh, tetapi biayanya jauh lebih tinggi dan tidak memberi layanan nirkabel.'
  },
  {
    id: 30,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 1',
    question: 'Dua komputer sejenis dihubungkan langsung tanpa perangkat penghubung, dan switch tersebut tidak mendukung auto-MDIX. Kabel yang tepat adalah...',
    options: [
      'A. Straight-through, karena kedua ujung harus memakai urutan pin yang sama',
      'B. Straight-through, karena jarak sambungan selalu lebih dari 100 meter',
      'C. Fiber optik, karena koneksi langsung selalu berjarak jauh',
      'D. Kabel koaksial, karena lebih kuat terhadap gangguan',
      'E. Crossover, karena yang dihubungkan adalah dua perangkat sejenis'
    ],
    answer: 4,
    explanation: 'Dua perangkat sejenis membutuhkan crossover agar pasangan Tx dan Rx tidak berhadapan langsung. Pada perangkat modern, auto-MDIX dapat mendeteksi keduanya secara otomatis.'
  }
];
