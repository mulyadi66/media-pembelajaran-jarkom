export const modul1PostTest = [
  {
    id: 1,
    level: 'C4 - Menganalisis',
    question: 'Sebuah lab komputer memiliki 40 PC dan setiap PC melakukan streaming video HD (±5 Mbps). Jika ditambahkan margin 20% untuk peak load, berapa total bandwidth minimal yang perlu disediakan?',
    options: [
      'A. 240 Mbps',
      'B. 40 Mbps',
      'C. 200 Mbps',
      'D. 220 Mbps',
      'E. 260 Mbps'
    ],
    answer: 0,
    explanation: '40 PC × 5 Mbps = 200 Mbps. Margin 20% = 40 Mbps. Total = 200 + 40 = 240 Mbps.'
  },
  {
    id: 2,
    level: 'C2 - Memahami',
    question: 'Perangkat yang meneruskan paket antar jaringan berbeda berdasarkan alamat IP adalah…',
    options: [
      'A. Hub',
      'B. Router',
      'C. Switch',
      'D. Bridge',
      'E. NIC'
    ],
    answer: 1,
    explanation: 'Router bekerja di Layer 3 (network) dan merutekan paket antar jaringan berbeda berdasarkan alamat IP.'
  },
  {
    id: 3,
    level: 'C3 - Menerapkan',
    question: 'Urutan warna pin 1–8 standar T568B yang benar adalah…',
    options: [
      'A. Hijau Putih, Hijau, Oranye Putih, Biru, Biru Putih, Oranye, Coklat Putih, Coklat',
      'B. Oranye Putih, Oranye, Hijau Putih, Hijau, Biru Putih, Biru, Coklat Putih, Coklat',
      'C. Hijau Putih, Hijau, Oranye Putih, Oranye, Biru Putih, Biru, Coklat Putih, Coklat',
      'D. Oranye Putih, Oranye, Hijau Putih, Biru, Biru Putih, Hijau, Coklat Putih, Coklat',
      'E. Biru Putih, Biru, Oranye Putih, Oranye, Hijau Putih, Hijau, Coklat Putih, Coklat'
    ],
    answer: 3,
    explanation: 'T568B: 1 Oranye Putih, 2 Oranye, 3 Hijau Putih, 4 Biru, 5 Biru Putih, 6 Hijau, 7 Coklat Putih, 8 Coklat.'
  },
  {
    id: 4,
    level: 'C3 - Menerapkan',
    question: 'Kabel yang tepat untuk menghubungkan langsung dua PC (PC ke PC) tanpa switch adalah…',
    options: [
      'A. Crossover',
      'B. Straight-through',
      'C. Rollover',
      'D. Serial',
      'E. Coaxial'
    ],
    answer: 0,
    explanation: 'Perangkat sejenis (PC ke PC) memakai kabel crossover (ujung A: 568A, ujung B: 568B). Perangkat berbeda jenis (PC ke Switch) memakai straight-through.'
  },
  {
    id: 5,
    level: 'C4 - Menganalisis',
    question: 'Media transmisi yang benar-benar kebal interferensi elektromagnetik karena membawa sinyal dalam bentuk cahaya, bukan arus listrik, adalah…',
    options: [
      'A. Kabel UTP Cat 5e',
      'B. Kabel STP',
      'C. Kabel Coaxial',
      'D. Fiber Optik',
      'E. Kabel telepon RJ-11'
    ],
    answer: 3,
    explanation: 'Fiber optik membawa sinyal dalam bentuk cahaya, bukan arus listrik, sehingga sama sekali tidak terpengaruh interferensi elektromagnetik dan dapat menjangkau puluhan kilometer tanpa kehilangan berarti. UTP dan STP tetap membawa arus listrik sehingga masih rentan gangguan meski STP berpelindung, dan coaxial juga menggunakan listrik.'
  },
  {
    id: 6,
    level: 'C2 - Memahami',
    question: 'Kecepatan akhir sebuah segmen jaringan ditentukan oleh…',
    options: [
      'A. Kabel dengan kategori tertinggi',
      'B. Panjang kabel',
      'C. Jumlah konektor',
      'D. Merek switch',
      'E. Perangkat terlemah dalam jalur'
    ],
    answer: 4,
    explanation: 'Kategori kabel lebih tinggi tidak menjamin kecepatan lebih tinggi — kecepatan akhir dibatasi perangkat terlemah (mis. kabel Cat6a tetap 1 Gbps jika switch hanya 1 Gbps).'
  },
  {
    id: 7,
    level: 'C6 - Menciptakan',
    question: 'Sekolah memiliki anggaran Rp15 juta untuk menghubungkan 30 komputer di ruang lab ke internet dengan uplink minimal 100 Mbps, dan sisa anggaran harus dipakai untuk perangkat cadangan. Rancangan jaringan yang paling memenuhi seluruh persyaratan itu adalah…',
    options: [
      'A. Switch 24-port unmanaged tanpa router',
      'B. Switch 48-port managed, router, firewall, dan satu switch cadangan',
      'C. Router saja tanpa switch',
      'D. Switch 48-port, hub 16-port, dan access point',
      'E. Kabel coaxial menuju seluruh komputer'
    ],
    answer: 1,
    explanation: 'Butuh minimal 48 port untuk 30 komputer, uplink 100 Mbps ditangani router, keamanan dijaga firewall, dan satu unit cadangan memenuhi syarat anggaran cadangan. Switch 24-port tanpa router tidak cukup untuk 30 komputer, pilihan yang hanya memakai router atau menambah hub tetapi tanpa router tidak bisa melakukan uplink ke internet, dan coaxial bukan media LAN yang lazim dipakai.'
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
    level: 'C3 - Menerapkan',
    question: 'Petugas ingin memasang enam konektor RJ-45 pada kabel UTP Cat 6 sekaligus agar jaket terpotong rapi dan tidak ada pin yang tertekuk. Urutan pekerjaan beserta alat yang tepat adalah…',
    options: [
      'A. Cable tester untuk memotong jaket, lalu obeng untuk menjepit konektor',
      'B. Tang potong untuk mengupas untai, lalu tang crimping untuk menjepit konektor',
      'C. Multimeter untuk memotong jaket, lalu obeng untuk mengupas untai',
      'D. Tang crimping: potong jaket, kupas untai, masukkan konektor, lalu jepit sampai terdengar bunyi lock',
      'E. Tang crimping: masukkan konektor ke dalam jaket terlebih dahulu, baru kupas untai'
    ],
    answer: 3,
    explanation: 'Tang crimping satu perangkat untuk memotong, mengupas, dan menjepit. Urutannya benar: potong jaket, kupas untai sesuai urutan warna, masukkan konektor, lalu jepit sampai terdengar bunyi lock. Tester hanya memverifikasi hasil, bukan memasang.'
  },
  {
    id: 10,
    level: 'C4 - Menganalisis',
    question: '1000BASE-T (Gigabit Ethernet) menggunakan kabel minimal kategori…',
    options: [
      'A. Cat 3',
      'B. Cat 5',
      'C. Cat 5e',
      'D. Cat 6a',
      'E. Cat 7'
    ],
    answer: 2,
    explanation: '1000BASE-T membutuhkan minimal Cat5e agar mendukung 1 Gbps. Cat3 hanya sampai 10 Mbps dan Cat5 sampai 100 Mbps, sedangkan Cat6a dan Cat7 memang mendukung 1 Gbps tetapi bukan kategori minimum yang diminta.'
  },
  {
    id: 11,
    level: 'C5 - Mengevaluasi',
    question: 'Administrator harus memilih switch untuk 42 komputer yang kebetulan hanya melakukan browsing, email, dan cetak dokumen. Pertimbangan mana yang paling tepat untuk menentukan jumlah port dan kapasitas yang perlu disediakan?',
    options: [
      'A. Gunakan switch 48-port karena cukup untuk 42 komputer dan menyisakan port untuk perluasan',
      'B. Pilih switch termurah karena jumlah komputer sudah pasti dan tidak akan bertambah',
      'C. Gunakan switch 24-port lalu menambah hub 24-port untuk menutup kekurangan port',
      'D. Tentukan jumlah port dari jumlah komputer saja, karena bandwidth tidak perlu dihitung untuk aktivitas ringan',
      'E. Gunakan switch 48-port managed tanpa kalkulasi kebutuhan bandwidth karena port sudah lebih dari cukup'
    ],
    answer: 0,
    explanation: '42 komputer butuh minimal satu port masing-masing, dan switch 48-port menyisakan ruang perluasan tanpa langsung over-specification. Memilih switch termurah karena jumlah komputer dianggap sudah pasti mengabaikan kemungkinan bertambahnya pengguna, menutup kekurangan port dengan hub membuat bandwidth terbagi sehingga menekan performa di seluruh segmen, dan menentukan jumlah port dari jumlah komputer saja tanpa menghitung bandwidth serta headroom tetap berisiko ketika aktivitas meningkat.'
  },
  {
    id: 12,
    level: 'C4 - Menganalisis',
    question: 'Di antara aplikasi berikut, yang membutuhkan bandwidth paling besar per pengguna adalah…',
    options: [
      'A. Browsing web',
      'B. Email',
      'C. Chat teks',
      'D. VoIP telepon',
      'E. Streaming video HD'
    ],
    answer: 4,
    explanation: 'Streaming video HD membutuhkan ±5 Mbps per pengguna — jauh lebih besar daripada browsing (±1 Mbps), email/chat, dan VoIP (±0,1–0,5 Mbps).'
  },
  {
    id: 13,
    level: 'C5 - Mengevaluasi',
    question: 'Sekolah hanya punya 20 komputer, tetapi kepala sekolah memutuskan membeli switch 48-port termurah karena ia menganggap "nanti bisa dipakai untuk menambah siswa". Penilaian yang paling tepat terhadap keputusan tersebut adalah…',
    options: [
      'A. Salah, karena over-specification membuang anggaran tanpa manfaat nyata; switch unmanaged 24-port yang sesuai kebutuhan lebih hemat',
      'B. Benar, karena switch berkapasitas besar memberi ruang perluasan untuk jangka panjang',
      'C. Salah, karena perangkat yang melebihi kebutuhan akan lebih cepat rusak',
      'D. Benar, karena perangkat besar otomatis lebih hemat listrik',
      'E. Tidak dapat dinilai sebelum ada data pasti jumlah memori server di sekolah'
    ],
    answer: 0,
    explanation: 'Over-specification berarti spesifikasi jauh melebihi kebutuhan sehingga anggaran terbuang tanpa manfaat nyata. Menganggap ruang perluasan selalu menguntungkan keliru karena port tersebut belum dipakai, anggapan bahwa over-specification membuat perangkat cepat rusak tidak benar, anggapan bahwa perangkat besar lebih hemat listrik justru terbalik, dan jawaban yang menyangkut memori server tidak relevan karena keputusan tetap bisa dinilai dari jumlah komputer yang ada.'
  },
  {
    id: 14,
    level: 'C3 - Menerapkan',
    question: 'Perangkat yang mengubah sinyal digital dari komputer menjadi sinyal analog/optik agar dapat dikirim melalui jalur ISP (ADSL/fiber) adalah…',
    options: [
      'A. Switch',
      'B. Modem',
      'C. Router',
      'D. Repeater',
      'E. Access Point'
    ],
    answer: 1,
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
      'D. UPS',
      'E. Load Balancer'
    ],
    answer: 4,
    explanation: 'Load balancer membagi beban trafik ke beberapa server agar tidak overload sehingga ketersediaan layanan tetap terjaga. Firewall menyaring lalu lintas, proxy memfilter/menyerap konten.'
  },
  {
    id: 16,
    level: 'C3 - Menerapkan',
    question: 'Dua segmen LAN di kampus disambungkan melalui sebuah perangkat yang menyaring frame berdasarkan MAC address. Perangkat tersebut adalah…',
    options: [
      'A. Hub',
      'B. Router',
      'C. Bridge',
      'D. Repeater',
      'E. Access Point'
    ],
    answer: 2,
    explanation: 'Bridge bekerja di Layer 2 (data link): menggabungkan dua segmen LAN dan melakukan filtering berdasarkan MAC address.'
  },
  {
    id: 17,
    level: 'C4 - Menganalisis',
    question: 'Koneksi point-to-point antar gedung perkantoran yang berjarak sekitar 3 km memakai antena searah dan wajib tanpa halangan (line-of-sight). Teknologi nirkabel yang tepat untuk koneksi tersebut adalah…',
    options: [
      'A. Wi-Fi',
      'B. Bluetooth',
      'C. Satelit',
      'D. Microwave',
      'E. LTE'
    ],
    answer: 3,
    explanation: 'Microwave bekerja pada frekuensi tinggi untuk point-to-point jarak jauh antar gedung dan membutuhkan line-of-sight (pandangan lurus tanpa halangan) antara kedua antena. Satelit memang juga memerlukan line-of-sight, tetapi layanan itu disesuaikan ke orbit dan bukan untuk sambungan antar gedung sedekat 3 km; Bluetooth hanya untuk jarak sangat dekat dan Wi-Fi untuk area lokal.'
  },
  {
    id: 18,
    level: 'C4 - Menganalisis',
    question: 'Anda harus menghubungkan tiga perangkat berikut: PC ke switch, router ke ONT, dan server ke NAS. Konektor yang dibutuhkan berurutan adalah…',
    options: [
      'A. RJ-11, RJ-45, RJ-45',
      'B. RJ-45, RJ-11, SC',
      'C. BNC, RJ-45, RJ-11',
      'D. RJ-45, RJ-45, SC',
      'E. RJ-45, SC, RJ-45'
    ],
    answer: 4,
    explanation: 'PC ke switch adalah Ethernet berpasangan tembaga memakai RJ-45. Router ke ONT berjalan di media fiber optik yang memakai konektor SC (atau LC). Server ke NAS kembali ke Ethernet tembaga memakai RJ-45. Jadi urutannya RJ-45, SC, RJ-45.'
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
    level: 'C6 - Menciptakan',
    question: 'Anda diminta merancang jangkauan Wi-Fi untuk gedung sekolah 3 lantai, masing-masing 300 m2, dengan satu uplink fiber 1 Gbps dan target 60 pengguna sekaligus per lantai. Rancangan yang paling tepat adalah…',
    options: [
      'A. Satu access point di lantai 1 pada frekuensi 2,4 GHz agar sinyalnya menjangkau semua lantai',
      'B. Minimal satu access point per lantai pada frekuensi 5 GHz, memakai SSID berbeda per lantai untuk mengurangi interferensi',
      'C. Satu access point berdaya besar di atap gedung pada frekuensi 5 GHz agar sinyal turun ke semua lantai',
      'D. Tiga access point pada frekuensi 2,4 GHz dengan kanal identik agar pengguna bisa roam dengan mulus',
      'E. Access point pada frekuensi 6 GHz karena 802.11ac tidak mendukung 5 GHz'
    ],
    answer: 1,
    explanation: 'Frekuensi 5 GHz menyediakan kapasitas lebih tinggi untuk 60 pengguna sekaligus, dan penempatan satu access point per lantai menghindari sinyal yang harus menembus lantai beton. SSID berbeda per lantai mengurangi interferensi antar access point. Satu access point di lantai 1 tidak akan menjangkau tiga lantai, access point di atap tidak efektif karena lantai beton meredam sinyal, kanal identik justru memicu interferensi, dan 6 GHz adalah Wi-Fi 6E sehingga 802.11ac tetap memakai 5 GHz.'
  },
  {
    id: 23,
    level: 'C4 - Menganalisis',
    question: 'Backbone fiber optik antar kota (WAN) paling tepat menggunakan jenis…',
    options: [
      'A. Multi-mode dengan LED',
      'B. Multi-mode 50 µm',
      'C. Single-mode dengan LED',
      'D. Single-mode dengan laser',
      'E. UTP Cat 6a'
    ],
    answer: 3,
    explanation: 'Single-mode (inti ±9 µm) dengan sumber laser mampu menjangkau puluhan kilometer — cocok untuk backbone antar kota. Multi-mode (±550 m–2 km) untuk LAN gedung/kampus.'
  },
  {
    id: 24,
    level: 'C4 - Menganalisis',
    question: 'Untuk jaringan kantor standar dengan 30 PC, teknologi yang paling tepat untuk koneksi kabel antar workstation adalah…',
    options: [
      'A. 10BASE-T',
      'B. Fast Ethernet',
      'C. 10GBASE-T',
      'D. Dial-up modem',
      'E. Gigabit Ethernet (Cat5e/Cat6)'
    ],
    answer: 4,
    explanation: 'Gigabit Ethernet (1000BASE-T) dengan Cat5e/Cat6 adalah standar minimal jaringan kantor saat ini: cepat, murah, dan mendukung hingga 100 m. 10GBASE-T berlebihan untuk workstation.'
  },
  {
    id: 25,
    level: 'C5 - Mengevaluasi',
    question: 'Jangkauan Wi-Fi lantai 1 tidak sampai ke lantai 2 di gedung 2 lantai. Solusi perangkat yang paling tepat adalah…',
    options: [
      'A. Menambah LAN tester',
      'B. Mengganti semua kabel dengan Cat 7',
      'C. Memasang Access Point tambahan atau Wi-Fi repeater di lantai 2',
      'D. Menambah konektor RJ-45',
      'E. Memakai kabel crossover antar lantai'
    ],
    answer: 2,
    explanation: 'Access Point tambahan atau repeater memperluas area nirkabel ke lantai 2. LAN tester/crimping tidak menambah sinyal, dan mengganti kabel tidak menyelesaikan masalah jangkauan Wi-Fi.'
  },
];

export const modul2PostTest = [
  {
    id: 1,
    level: 'C4 - Menganalisis',
    question: 'Dalam topologi star, jika salah satu kabel dari PC ke switch putus, dampaknya adalah…',
    options: [
      'A. Hanya PC yang kabelnya putus yang terputus',
      'B. Seluruh jaringan mati',
      'C. Semua PC tidak bisa internet',
      'D. Switch ikut rusak',
      'E. Jaringan menjadi topologi ring'
    ],
    answer: 0,
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
      'B. Ring',
      'C. Star',
      'D. Mesh',
      'E. Tree'
    ],
    answer: 1,
    explanation: 'Pada topologi ring, token (paket khusus) beredar dari node ke node — hanya pemegang token yang boleh mengirim, sehingga tabrakan data tidak terjadi.'
  },
  {
    id: 4,
    level: 'C5 - Mengevaluasi',
    question: 'Untuk jaringan kritis yang membutuhkan keandalan tinggi dengan banyak jalur cadangan, topologi paling sesuai adalah…',
    options: [
      'A. Bus',
      'B. Ring',
      'C. Star',
      'D. Mesh',
      'E. Linear'
    ],
    answer: 3,
    explanation: 'Mesh menyediakan banyak jalur redundansi antar node, sehingga bila satu jalur gagal masih ada jalur alternatif — cocok untuk backbone WAN dan jaringan kritis.'
  },
  {
    id: 5,
    level: 'C2 - Memahami',
    question: 'Perangkat pusat pada topologi star (mis. switch/hub) menjadi titik lemah karena…',
    options: [
      'A. Kabelnya murah',
      'B. Tidak mendukung broadcast',
      'C. Mudah ditambahkan node',
      'D. Cepat panas',
      'E. Jika perangkat pusat rusak, seluruh node terganggu'
    ],
    answer: 4,
    explanation: 'Topologi star bergantung pada perangkat pusat. Jika switch/hub rusak, semua node yang terhubung padanya tidak bisa berkomunikasi.'
  },
  {
    id: 6,
    level: 'C4 - Menganalisis',
    question:
      'Pada topologi bus, dua komputer sekaligus mulai mengirim data sehingga terjadi tabrakan, lalu keduanya menghentikan pengiriman. Langkah berikutnya yang benar menurut CSMA/CD adalah…',
    options: [
      'A. Keduanya menunggu jeda acak, lalu komputer yang lebih dulu selesai menunggu mengirim ulang',
      'B. Salah satu komputer memutus sambungan dan komputer lain melanjutkan mengulang',
      'C. Keduanya mengirim ulang bersamaan tepat setelah menunggu satu detik penuh',
      'D. Frame tersebut diteruskan switch hanya ke port tujuan',
      'E. Kedua komputer bergantian mengirim setiap lima menit'
    ],
    answer: 0,
    explanation:
      'CSMA/CD (Carrier Sense Multiple Access with Collision Detection): node mendengarkan jalur sebelum mengirim, dan ketika tabrakan terdeteksi node berhenti, menunggu jeda acak, lalu mengirim ulang. Jeda acak inilah yang mencegah kedua node mengirim bersamaan lagi. Mengirim ulang serempak setelah waktu yang sama persis justru memicu tabrakan berulang, sedangkan memutus sambungan bukan langkah protokol.'
  },
  {
    id: 7,
    level: 'C6 - Menciptakan',
    question:
      'Anda merancang jaringan untuk kampus dengan 4 gedung. Tiap gedung harus punya jaringan lokal yang mudah dikontrol per lantai, dan keempat gedung harus saling terhubung lewat jalur utama yang tetap berjalan bila satu jalur utama putus. Rancangan yang Anda pilih adalah…',
    options: [
      'A. Full mesh antar seluruh PC di keempat gedung',
      'B. Bus tunggal yang menghubungkan keempat gedung dengan terminator',
      'C. Star bertingkat: switch utama di gedung pusat, tiap gedung terhubung ke switch sendiri, ditambah satu jalur cadangan',
      'D. Ring tunggal yang melewati keempat gedung',
      'E. Star di tiap gedung tanpa satu pun jalur penghubung antargegedung'
    ],
    answer: 2,
    explanation:
      'Rancangan yang memenuhi semua kendala sekaligus adalah star bertingkat dengan jalur cadangan. Jaringan lokal tiap gedung memakai star sehingga mudah dikontrol per lantai, keempat gedung dihubungkan switch utama sebagai tulang punggung, dan jalur cadangan menjaga layanan tetap berjalan saat satu jalur putus. Full mesh membutuhkan n(n−1)/2 kabel sehingga boros, bus dan ring sama-sama kehilangan seluruh jaringan begitu satu bagiannya putus, sedangkan star di tiap gedung tanpa jalur penghubung justru tidak menghubungkan antargegedung sama sekali.'
  },
  {
    id: 8,
    level: 'C4 - Menganalisis',
    question: 'Topologi tree tersusun sebagai hierarki nested star. Titik single point of failure utama pada topologi ini adalah…',
    options: [
      'A. Semua PC',
      'B. Kabel antar switch',
      'C. Pendingin ruangan',
      'D. Node root (server/switch utama) di puncak',
      'E. Setiap PC yang berada di level bawah'
    ],
    answer: 3,
    explanation: 'Pada tree, node root di puncak menjadi tulang punggung — jika rusak, seluruh turunan di bawahnya ikut terganggu.'
  },
  {
    id: 9,
    level: 'C2 - Memahami',
    question: 'Topologi yang paling hemat kabel untuk jaringan kecil sementara (misal beberapa PC bertukar data) adalah…',
    options: [
      'A. Star',
      'B. Bus',
      'C. Mesh',
      'D. Ring',
      'E. Hybrid'
    ],
    answer: 1,
    explanation: 'Bus hanya memakai satu kabel backbone, sehingga paling hemat — meski kelemahannya satu kabel putus memutus seluruh jaringan.'
  },
  {
    id: 10,
    level: 'C4 - Menganalisis',
    question: 'Pada topologi ring, jika salah satu node rusak, jaringan akan…',
    options: [
      'A. Tetap normal',
      'B. Otomatis menjadi star',
      'C. Hanya node itu yang terputus',
      'D. Berpindah ke switch',
      'E. Terputus karena aliran data melingkar terhenti'
    ],
    answer: 4,
    explanation: 'Ring bersifat melingkar berurutan — kegagalan satu node dapat memutus lingkaran dan menghentikan aliran data (jaringan ring klasik seperti Token Ring).'
  },
  {
    id: 11,
    level: 'C2 - Memahami',
    question: 'Jaringan memakai Hub sebagai pusat: kabelnya tersusun seperti bintang, tetapi data disiarkan ke semua port. Yang benar tentang jaringan ini adalah…',
    options: [
      'A. Fisiknya star, logisnya bus',
      'B. Fisiknya bus, logisnya star',
      'C. Fisik dan logis sama-sama bus',
      'D. Fisik dan logis sama-sama star',
      'E. Fisiknya ring, logisnya mesh'
    ],
    answer: 0,
    explanation: 'Hub menyiarkan data ke semua port (perilaku bus) tetapi semua kabel menuju satu pusat (bentuk fisik star). Inilah contoh klasik topologi fisik berbeda dari topologi logis.'
  },
  {
    id: 12,
    level: 'C4 - Menganalisis',
    question:
      'Dua jaringan dibandingkan: (1) star dengan satu switch pusat untuk 20 PC, (2) full mesh 5 node. Pada jaringan mana titik gagal tunggal paling menentukan kelangsungan layanan?',
    options: [
      'A. Pada (2), karena jaringan penuh kabel sehingga titik gagalnya paling banyak',
      'B. Pada keduanya sama-sama fatal',
      'C. Pada (1), karena jaringan star selalu punya banyak jalur alternatif',
      'D. Pada (1), karena satu switch pusat melayani seluruh node',
      'E. Tidak ada pada keduanya, karena keduanya sudah redundan'
    ],
    answer: 3,
    explanation:
      'Pada star, seluruh node bergantung pada satu switch pusat: begitu switch itu rusak, 20 PC sekaligus kehilangan koneksi. Full mesh 5 node punya 10 jalur antar node, sehingga satu jalur atau satu node yang gagal masih disisakan jalur alternatif. Menyebut mesh sebagai jaringan yang paling rapuh terbalik arah, sebab redundansi justru membuat mesh tahan gangguan. Star memang tidak punya jalur alternatif, dan justru di situlah titik gagal tunggalnya berada.'
  },
  {
    id: 13,
    level: 'C3 - Menerapkan',
    question:
      'Pada topologi bus, 20 PC disambungkan ke satu kabel utama yang membentang dari ujung ke ujung ruangan, dan kedua ujung kabel diberi terminator. Komponen yang berfungsi sebagai jalur utama pembawa lalu lintas antar node adalah…',
    options: [
      'A. Kabel pendek dari masing-masing PC ke kabel utama',
      'B. Terminator yang dipasang di kedua ujung kabel',
      'C. Kabel utama yang membentang dari satu ujung ke ujung lain',
      'D. Adapter jaringan pada setiap PC',
      'E. Port pada hub yang menghubungkan semua PC'
    ],
    answer: 2,
    explanation:
      'Kabel utama sepanjang ruangan itulah yang berfungsi sebagai backbone, yaitu jalur berkapasitas besar sebagai tulang punggung lalu lintas. Kabel pendek dari PC ke kabel main disebut tap, bukan backbone; terminator hanya menyerap sinyal di ujung supaya tidak memantul; dan hub tidak dipakai pada topologi bus.'
  },
  {
    id: 14,
    level: 'C3 - Menerapkan',
    question: 'Fungsi terminator yang dipasang di kedua ujung kabel utama topologi bus adalah…',
    options: [
      'A. Mempercepat transfer data',
      'B. Menambah jumlah node',
      'C. Mengubah data menjadi sinyal',
      'D. Menyimpan cache data',
      'E. Menyerap sinyal agar tidak memantul kembali ke kabel'
    ],
    answer: 4,
    explanation: 'Terminator berfungsi menyerap sinyal di ujung kabel sehingga sinyal tidak memantul kembali dan menabrak sinyal lain. Jika terminator dilepas, komunikasi terganggu.'
  },
  {
    id: 15,
    level: 'C4 - Menganalisis',
    question: 'Semakin banyak node pada topologi bus, kinerja semakin menurun. Alasan utamanya adalah…',
    options: [
      'A. Sering terjadi tabrakan data (collision) karena semua node berbagi satu jalur',
      'B. Kabel cepat aus',
      'C. Perangkat keras makin panas',
      'D. Terminator penuh',
      'E. Broadcast address berubah'
    ],
    answer: 0,
    explanation: 'Pada bus, semua node berbagi satu medium dan memakai CSMA/CD. Makin banyak node makin sering dua node mengirim bersamaan → collision makin sering → kinerja menurun.'
  },
  {
    id: 16,
    level: 'C3 - Menerapkan',
    question:
      'Sebuah kantor memutuskan 6 komputer yang dianggap penting saling terhubung langsung satu sama lain, sedangkan 4 komputer lain cukup terhubung ke salah satu komputer utama saja. Jumlah kabel yang dibutuhkan untuk mesh sebagian tersebut adalah…',
    options: [
      'A. 10 kabel',
      'B. 15 kabel',
      'C. 19 kabel',
      'D. 25 kabel',
      'E. 30 kabel'
    ],
    answer: 2,
    explanation:
      'Enam node yang saling terhubung penuh membutuhkan 6×(6−1)/2 = 15 kabel. Empat node sekunder masing-masing memakai satu kabel ke node utama, jadi 4 kabel. Totalnya 15 + 4 = 19 kabel. Inilah sebabnya mesh sebagian dipakai di kantor-kantor besar: tidak semua node harus saling terhubung.'
  },
  {
    id: 17,
    level: 'C4 - Menganalisis',
    question: 'Alasan utama topologi mesh jarang dipakai pada LAN kecil dengan banyak perangkat adalah…',
    options: [
      'A. Kecepatannya rendah',
      'B. Sulit mendapat kabel',
      'C. Tidak mendukung switch',
      'D. Biaya kabel sangat tinggi karena tiap node terhubung ke semua node',
      'E. Hanya untuk jaringan nirkabel'
    ],
    answer: 3,
    explanation: 'Full mesh n node membutuhkan n(n−1)/2 kabel — sangat mahal dan kompleks. Karena itu mesh dicadangkan untuk jaringan kritis/WAN yang membutuhkan keandalan tinggi.'
  },
  {
    id: 18,
    level: 'C3 - Menerapkan',
    question:
      'Jaringan FDDI memakai dua cincin fiber dengan arah aliran berlawanan. Bila salah satu cincin terputus di tengah jalur, yang terjadi adalah…',
    options: [
      'A. Jaringan langsung mati karena kedua cincin bergantung pada satu jalur fisik yang sama',
      'B. Semua node harus dimatikan lalu dinyalakan ulang',
      'C. Komunikasi tetap berjalan karena cincin kedua mengambil alih jalur yang terputus',
      'D. Hanya node tepat di lokasi putus yang kehilangan koneksi',
      'E. Antrean data pada kedua cincin hilang sebagian'
    ],
    answer: 2,
    explanation:
      'FDDI dirancang dengan dua cincin berlawanan arah khusus untuk redundansi: satu cincin menjadi jalur cadangan, sehingga saat satu cincin putus, cincin lain masih membawa data dan komunikasi tidak terhenti. Inilah beda FDDI dengan ring Token Ring biasa yang hanya punya satu jalur.'
  },
  {
    id: 19,
    level: 'C5 - Mengevaluasi',
    question: 'Sekolah membangun LAN 60 PC di 3 ruangan, dana terbatas, mudah dikelola, dan jumlah PC bertambah tiap tahun. Topologi yang paling tepat adalah…',
    options: [
      'A. Bus',
      'B. Tree (star bertingkat)',
      'C. Full mesh',
      'D. Ring',
      'E. Point-to-point'
    ],
    answer: 1,
    explanation: 'Tree (star bertingkat): 1 switch utama + 1 switch per ruangan. Biaya menengah, mudah dikelola per ruangan, skalabilitas tinggi, dan kegagalan switch satu ruangan tidak mematikan seluruh jaringan.'
  },
  {
    id: 20,
    level: 'C2 - Memahami',
    question: 'Jaringan yang menggunakan Hub dianggap boros bandwidth karena Hub…',
    options: [
      'A. Menyimpan data',
      'B. Membatasi kecepatan',
      'C. Hanya menghubungkan 2 perangkat',
      'D. Memakai token passing',
      'E. Meneruskan setiap data ke SEMUA port (broadcast)'
    ],
    answer: 4,
    explanation: 'Hub menyiarkan data ke semua port sehingga menimbulkan lalu lintas tak perlu dan tabrakan makin sering — beda dengan switch yang meneruskan hanya ke port tujuan.'
  },
  {
    id: 21,
    level: 'C4 - Menganalisis',
    question: 'Bandingkan kebutuhan kabel untuk 5 node: full mesh vs star. Pernyataan yang benar adalah…',
    options: [
      'A. Mesh 10 kabel, star 5 kabel',
      'B. Mesh 15 kabel, star 10 kabel',
      'C. Mesh 5 kabel, star 10 kabel',
      'D. Mesh 8 kabel, star 8 kabel',
      'E. Mesh 20 kabel, star 4 kabel'
    ],
    answer: 0,
    explanation: 'Full mesh 5 node = 5×4/2 = 10 kabel. Star 5 node (tiap node langsung ke pusat) = 5 kabel. Mesh selalu jauh lebih boros kabel.'
  },
  {
    id: 22,
    level: 'C6 - Menciptakan',
    question:
      'Perpustakaan sekolah punya 25 PC dalam satu ruangan. Anggaran hanya cukup untuk satu perangkat jaringan, jaringan harus mudah dirawat, dan jumlah PC bertambah tiap semester. Rancangan yang paling tepat adalah…',
    options: [
      'A. Full mesh antar semua PC di ruangan',
      'B. Bus tanpa switch dengan terminator di kedua ujung',
      'C. Ring dengan token passing',
      'D. Star dengan satu switch 48 port',
      'E. Hub 24 port dengan transceiver pada setiap PC'
    ],
    answer: 3,
    explanation:
      'Satu switch 48 port memenuhi semua kendala: hanya satu perangkat sesuai anggaran, mudah dirawat karena semua PC tersambung ke satu titik, menyediakan 23 port kosong untuk penambahan semester berikutnya, dan satu kabel yang putus hanya menurunkan satu PC. Full mesh 25 PC membutuhkan 25×24/2 = 300 kabel, bus dan ring kehilangan seluruh jaringan begitu satu bagiannya putus, dan hub menyiarkan data ke semua port sehingga boros bandwidth.'
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
    level: 'C3 - Menerapkan',
    question:
      'Jaringan sekolah dengan 60 PC mulai melambat. Guru ingin memecah jaringan menjadi 3 bagian agar lalu lintas tiap bagian tidak saling mengganggu. Perangkat dan istilah hasil pemecahan tersebut adalah…',
    options: [
      'A. 3 segment, setiap bagian dipisahkan repeater',
      'B. 1 segment dengan 3 kabel',
      'C. 3 segment, setiap bagian dipisahkan switch',
      'D. 3 loop yang disambung repeater',
      'E. 1 bus yang dipecah menjadi 3 bagian oleh terminator'
    ],
    answer: 2,
    explanation:
      'Switch memisahkan domain tabrakan sehingga tiap bagian menjadi segment tersendiri dan PC dalam satu bagian tidak lagi berebut jalur. Repeater hanya menguatkan sinyal tanpa memisahkan domain tabrakan, jadi memisahkan bagian dengan repeater keliru dan tidak menghasilkan segment baru. Istilah segment memang dipakai untuk bagian jaringan yang terpisah.'
  },
  {
    id: 25,
    level: 'C5 - Mengevaluasi',
    question: 'Kantor pusat + 3 cabang di kota berbeda, setiap cabang punya LAN 20 PC. Topologi backbone antar kota yang paling sesuai untuk keandalan adalah…',
    options: [
      'A. Bus satu kabel',
      'B. Ring',
      'C. Star sederhana tanpa router',
      'D. Point-to-point tunggal',
      'E. Mesh antar router cabang'
    ],
    answer: 4,
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
      'A. 8.8.8.8, 1.1.1.1, 203.0.113.5',
      'B. 10.0.0.1, 172.32.0.1, 192.168.1.1',
      'C. 11.0.0.1, 172.31.5.1, 223.0.0.1',
      'D. 10.0.0.1, 172.20.0.1, 192.168.1.1',
      'E. 127.0.0.1, 0.0.0.0, 255.255.255.255'
    ],
    answer: 3,
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
    level: 'C3 - Menerapkan',
    question: 'Dua alamat yang selalu dicadangkan di setiap subnet sehingga mengurangi jumlah host yang bisa dipakai adalah…',
    options: [
      'A. Gateway dan DNS',
      'B. Loopback dan APIPA',
      'C. Private dan Public',
      'D. Subnet mask dan wildcard',
      'E. Network address dan Broadcast address'
    ],
    answer: 4,
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
    question:
      'Anda merancang VLSM untuk 192.168.1.0/24 dengan kebutuhan 60, 30, dan 10 host. Setelah alokasi untuk 60 host selesai, network address beserta prefix untuk subnet 30 host adalah…',
    options: [
      'A. 192.168.1.64/27',
      'B. 192.168.1.32/27',
      'C. 192.168.1.96/27',
      'D. 192.168.1.0/27',
      'E. 192.168.1.64/28'
    ],
    answer: 0,
    explanation:
      'VLSM dialokasikan dari kebutuhan terbesar. 60 host butuh 62 usable, yaitu /26 dengan blok 64, sehingga subnet pertama menempati 192.168.1.0 sampai .63. Alokasi berikutnya mulai dari .64. Karena 30 host butuh 30 usable, prefix-nya /27 dengan blok 32, hasilnya 192.168.1.64 sampai .95. Prefix /28 tidak cukup karena hanya memberi 14 usable.'
  },
  {
    id: 9,
    level: 'C5 - Mengevaluasi',
    question:
      'Sebuah perusahaan memakai jaringan 192.168.0.0/16 yang hanya dibagi ke 4 departemen dengan kebutuhan 300, 60, 30, dan 10 host. Dengan CIDR, pembagian yang paling tepat adalah…',
    options: [
      'A. Masing-masing departemen mendapat satu blok /24 yang sama besar',
      'B. Masing-masing departemen mendapat satu blok /16 agar tidak pernah penuh',
      'C. Keempat departemen berbagi satu blok /24 agar hemat alamat',
      'D. Tiap departemen mendapat blok /30 agar tidak ada alamat terbuang',
      'E. Tiap departemen mendapat blok sesuai kebutuhannya: 300→/23, 60→/26, 30→/27, 10→/28'
    ],
    answer: 4,
    explanation:
      'CIDR menghapus pembagian kaku kelas sehingga blok diberikan sesuai kebutuhan nyata tiap departemen, bukan ukuran yang sama untuk semua. Pilihan yang memberi /24 sama besar gagal karena /24 hanya menyediakan 254 usable, jadi tidak bisa menampung 300 host. Memberi /16 ke tiap departemen justru boros, berbagi satu /24 membuat keempat departemen berebut, dan /30 hanya menyisakan 2 usable sehingga mustahil untuk 300 host.'
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
    level: 'C4 - Menganalisis',
    question:
      'Perusahaan memiliki 30.000 perangkat IoT yang harus masing-masing diberi alamat unik. Jumlah perangkat yang terhubung ke internet terus bertambah, sedangkan IPv4 hanya menyediakan sekitar 4,3 miliar alamat. Solusi yang tepat beserta alasannya adalah…',
    options: [
      'A. Pakai IPv6 yang panjangnya 128 bit sehingga ruang alamatnya jauh lebih besar',
      'B. Pakai IPv4 kelas A, karena kelas A paling banyak jumlah alamatnya',
      'C. Pakai IPv4 kelas E, karena kelas itu memang dirancang untuk perangkat IoT',
      'D. Pakai satu alamat IPv4 yang dibagikan bergilir kepada seluruh perangkat',
      'E. Pakai subnet mask /8 agar setiap perangkat mendapat satu alamat penuh'
    ],
    answer: 0,
    explanation:
      'IPv6 sepanjang 128 bit menyediakan sekitar 3,4×10³⁸ alamat, jauh melampaui 4,3 miliar alamat IPv4. Kelas A IPv4 tetap berada di dalam batas 4,3 miliar, kelas E (240–255) dicadangkan untuk keperluan eksperimen, sedangkan berbagi satu alamat maupun /8 bukan cara menambah ruang alamat.'
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
    level: 'C4 - Menganalisis',
    question:
      'Komputer A memakai 192.168.1.10 dan komputer B memakai 192.168.2.20, keduanya memakai subnet mask 255.255.255.0 (/24). Manakah yang dapat berkomunikasi langsung dengan A tanpa harus lewat router?',
    options: [
      'A. Komputer 192.168.2.20, karena masih satu jaringan fisik',
      'B. Komputer 192.168.1.30, karena nomor IP-nya lebih kecil',
      'C. Komputer 192.168.2.20, karena masih satu kelas IP',
      'D. Komputer 192.168.1.30, karena network ID-nya sama',
      'E. Keduanya dapat, karena berasal dari kelas yang sama'
    ],
    answer: 3,
    explanation:
      'Subnet mask /24 memisahkan tiga oktet pertama sebagai bagian network, sehingga 192.168.1.10 dan 192.168.1.30 sama-sama memiliki network ID 192.168.1.0 dan berada di satu segment. Sebaliknya 192.168.2.20 memiliki network ID 192.168.2.0, jadi berbeda segment dan harus lewat router. Yang menentukan bukan nomor IP yang lebih kecil dan bukan kelas IP, melainkan hasil network ID setelah dipotong dengan subnet mask.'
  },
  {
    id: 14,
    level: 'C5 - Mengevaluasi',
    question:
      'Sebuah router punya 5 link point-to-point menuju 5 router lain, semuanya berada di dalam 192.168.0.0/24. Agar alamat tidak terbuang, prefix yang paling tepat untuk setiap link adalah…',
    options: [
      'A. /24, karena paling mudah dikonfigurasi',
      'B. /25, karena cukup untuk kelima link sekaligus',
      'C. /22, karena memberi ruang untuk link tambahan',
      'D. /32, karena tiap link cukup satu alamat saja',
      'E. /30, karena tiap link hanya butuh tepat 2 host'
    ],
    answer: 4,
    explanation:
      'Link point-to-point hanya menghubungkan dua ujung, jadi butuh tepat 2 alamat usable. Prefix /30 menghasilkan 2^2 − 2 = 2 usable, pas tanpa sisa. Memberi /24 per link membutuhkan 254 usable masing-masing sehingga total 1.270 alamat dan tidak muat di dalam /24 yang hanya punya 256. Prefix /32 hanya menyisakan 1 usable sehingga tidak bisa membentuk link. Dengan /30, kelima link memakai 20 dari 256 alamat.'
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
      'B. Broadcast',
      'C. Multicast',
      'D. APIPA (Automatic Private IP Addressing)',
      'E. Default gateway'
    ],
    answer: 3,
    explanation: '169.254.x.x adalah APIPA — dipakai otomatis oleh Windows saat DHCP tidak merespons, sehingga komputer tidak benar-benar tersambung internet.'
  },
  {
    id: 17,
    level: 'C2 - Memahami',
    question: 'Alamat 224.0.0.1 termasuk kelas D yang digunakan untuk…',
    options: [
      'A. Loopback',
      'B. Broadcast terbatas',
      'C. IP privat',
      'D. Default route',
      'E. Multicast'
    ],
    answer: 4,
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
      'B. DNS',
      'C. Firewall',
      'D. NAT (Network Address Translation)',
      'E. Proxy'
    ],
    answer: 3,
    explanation: 'NAT menerjemahkan alamat privat (mis. 192.168.1.10) menjadi IP publik saat data keluar ke internet, sehingga banyak perangkat privat bisa berbagi satu IP publik.'
  },
  {
    id: 22,
    level: 'C4 - Menganalisis',
    question: 'Pada subnet 192.168.1.64/26, alamat yang merupakan alamat broadcast subnet tersebut adalah…',
    options: [
      'A. 192.168.1.127',
      'B. 192.168.1.64',
      'C. 192.168.1.126',
      'D. 192.168.1.128',
      'E. 192.168.1.63'
    ],
    answer: 0,
    explanation:
      'Pada /26 berlaku enam bit host, sehingga ukuran blok 64 dan subnet yang dimulai di .64 berakhir di .127. Alamat broadcast ditandai seluruh bit host bernilai 1, yaitu 192.168.1.127. Sementara 192.168.1.64 adalah network address, 192.168.1.126 adalah host terakhir yang masih bisa dipakai, dan .128 sudah termasuk subnet berikutnya.'
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
    level: 'C2 - Memahami',
    question: 'Alamat 8.8.8.8 (DNS Google) termasuk…',
    options: [
      'A. IP privat',
      'B. Loopback',
      'C. APIPA',
      'D. IP publik',
      'E. Multicast'
    ],
    answer: 3,
    explanation: '8.8.8.8 adalah IP publik yang dapat diakses dari internet. IP privat seperti 192.168.1.1 dan 10.0.0.1 hanya berlaku di jaringan lokal.'
  },
  {
    id: 25,
    level: 'C5 - Mengevaluasi',
    question: 'Mengapa VLSM lebih hemat alamat IP dibanding subnetting dengan ukuran subnet seragam?',
    options: [
      'A. VLSM menghapus network dan broadcast',
      'B. VLSM memakai IPv6',
      'C. VLSM tidak butuh subnet mask',
      'D. VLSM menggandakan jumlah host',
      'E. VLSM memberi subnet mask berbeda sesuai kebutuhan nyata tiap subnet'
    ],
    answer: 4,
    explanation: 'VLSM mengalokasikan prefix sesuai kebutuhan (60→/26, 30→/27, 15→/28, dst) sehingga tidak ada alamat terbuang besar seperti membagi rata 5×/27.'
  },
];

/**
 * Jumlah soal tiap Post-Test modul. Diturunkan dari panjang array modul 1
 * supaya tidak bisa meleset kalau bank soal ditambah atau dikurangi.
 * Dipakai halaman Hasil untuk menampilkan "N soal terjawab".
 */
export const MODUL_POSTTEST_SOAL_PER_MODUL = modul1PostTest.length;

/**
 * Daftar Post-Test MPK 1 untuk halaman /mpk1/posttest dan routing
 * /mpk1/posttest/:slug.
 *
 * Bank soal dipisah per modul (25 soal, level C2-C6 / HOTS) dan tiap modul
 * punya kunci storage sendiri, jadi satu modul yang belum dikerjakan tidak
 * menghalangi modul lain. Ketiga modul wajib selesai untuk terbitnya
 * sertifikat (rerata >= 70).
 */
export const MODUL_POSTTEST = [
  {
    no: 1,
    slug: 'modul1',
    key: 'mpk1_modul1_posttest',
    label: 'Modul 1',
    judul: 'Peralatan Jaringan',
    desc: 'Kebutuhan teknis pengguna, jenis kabel, konektor, crimping, dan media transmisi',
    questions: modul1PostTest,
  },
  {
    no: 2,
    slug: 'modul2',
    key: 'mpk1_modul2_posttest',
    label: 'Modul 2',
    judul: 'Topologi Jaringan',
    desc: 'Bus, star, ring, mesh, tree, hybrid, dan pemilihan topologi sesuai kebutuhan',
    questions: modul2PostTest,
  },
  {
    no: 3,
    slug: 'modul3',
    key: 'mpk1_modul3_posttest',
    label: 'Modul 3',
    judul: 'Pengalamatan Jaringan',
    desc: 'IP address, subnet mask, kelas IP, subnetting, CIDR, dan VLSM',
    questions: modul3PostTest,
  },
];

/** Total soal seluruh modul (3 x 25 = 75). */
export const MODUL_POSTTEST_TOTAL = MODUL_POSTTEST_SOAL_PER_MODUL * MODUL_POSTTEST.length;

/** @param {string} slug contoh "modul2" */
export function getPostTestBySlug(slug) {
  return MODUL_POSTTEST.find(b => b.slug === slug) || null;
}