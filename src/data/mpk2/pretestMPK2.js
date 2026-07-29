export const pretestMPK2 = [
  // === MODUL 1: Instalasi & Perawatan Jaringan (4 soal) ===
  {
    id: 1, level: 'L1',
    question: 'Alat yang digunakan untuk mengupas kulit luar kabel UTP sebelum melakukan crimping adalah?',
    options: ['A. Tang crimping', 'B. Cable tester', 'C. Stripper kabel', 'D. Multimeter', 'E. Soldering iron'],
    answer: 2,
    explanation: 'Stripper kabel (pengupas kabel) berfungsi mengupas kulit luar kabel UTP tanpa merusak kabel di dalamnya sebelum proses crimping.'
  },
  {
    id: 2, level: 'L1',
    question: 'Standar wiring kabel UTP yang umum digunakan untuk jaringan LAN straight-through adalah?',
    options: ['A. T568A dan T568B', 'B. T569A dan T569B', 'C. IEEE 802.11', 'D. ISO 11801', 'E. ANSI/TIA-607'],
    answer: 0,
    explanation: 'T568A dan T568B adalah dua standar wiring untuk kabel UTP yang menentukan urutan warna kabel pada konektor RJ45.'
  },
  {
    id: 3, level: 'L2',
    question: 'Seorang teknisi membuat kabel crossover tetapi salah satu ujung menggunakan standar T568A dan ujung lain T568A juga. Akibat yang paling mungkin terjadi adalah?',
    options: ['A. Kabel tetap berfungsi sebagai crossover', 'B. Kabel menjadi straight-through dan tidak cocok untuk koneksi peer-to-peer', 'C. Kabel tidak berfungsi sama sekali', 'D. Kecepatan turun dari 1Gbps menjadi 100Mbps', 'E. Tidak ada dampak karena semua standar kompatibel'],
    answer: 1,
    explanation: 'Kabel crossover memerlukan T568A di satu ujung dan T568B di ujung lain. Jika kedua ujung sama (T568A/T568A), kabel menjadi straight-through, bukan crossover.'
  },
  {
    id: 4, level: 'L3',
    question: 'Seorang teknisi melakukan crimping kabel UTP Cat6, setelah diuji dengan cable tester semua LED menyala tetapi urutan LED 1-2-3-6 mati bergantian tidak stabil. Analisis penyebab paling mungkin:',
    options: ['A. Kabel terlalu panjang melebihi 100 meter', 'B. Pisau pada connector RJ45 tidak menembus isolasi kabel secara sempurna', 'C. Kabel menggunakan standar T568B yang salah', 'D. Kabel terlilit medan magnet dari kabel listrik', 'E. Network adapter komputer tidak kompatibel dengan Cat6'],
    answer: 1,
    explanation: 'LED yang mati tidak stabil menandakan kontak tidak sempurna. Pisau pada RJ45 harus menembus isolasi kabel hingga menyentuh konduktor tembaga. Jika tidak tembus sempurna, koneksi terputus-putus (intermittent).'
  },
  // === MODUL 2: Dasar Jaringan Nirkabel (4 soal) ===
  {
    id: 5, level: 'L1',
    question: 'Frekuensi yang digunakan oleh standar Wi-Fi 802.11b/g/n adalah?',
    options: ['A. 900 MHz', 'B. 2.4 GHz', 'C. 5 GHz', 'D. 60 GHz', 'E. 700 MHz'],
    answer: 1,
    explanation: '802.11b/g/n beroperasi pada pita frekuensi 2.4 GHz. 802.11a/n/ac/ax dapat menggunakan 5 GHz, dan 802.11ad menggunakan 60 GHz.'
  },
  {
    id: 6, level: 'L2',
    question: 'Perbedaan utama antara standar 802.11ac dan 802.11ax (Wi-Fi 6) dalam hal efisiensi jaringan adalah?',
    options: ['A. 802.11ax hanya bekerja di 2.4 GHz', 'B. 802.11ax menggunakan OFDMA dan MU-MIMO yang lebih efisien dibanding 802.11ac', 'C. 802.11ac lebih cepat dari 802.11ax', 'D. 802.11ax tidak kompatibel dengan 802.11ac', 'E. 802.11ac menggunakan teknologi spread spectrum yang lebih baru'],
    answer: 1,
    explanation: '802.11ax (Wi-Fi 6) memperkenalkan OFDMA (Orthogonal Frequency Division Multiple Access) yang membagi kanal menjadi sub-kanal kecil untuk melayani banyak perangkat simultan, serta MU-MIMO uplink yang lebih efisien dibanding 802.11ac.'
  },
  {
    id: 7, level: 'L3',
    question: 'Di area perkantoran padat dengan 50+ perangkat nirkabel per lantai, semua terkoneksi ke AP 2.4 GHz. Koneksi sering terputus dan throughput sangat rendah. Analisis akar masalah dan solusi terbaik:',
    options: ['A. Frekuensi 2.4 GHz hanya memiliki 3 kanal non-overlapping, terlalu padat — solusi: pindah ke 5 GHz dengan AP dual-band', 'B. AP terlalu dekat dengan server — solusi: pindahkan AP ke ruang server', 'C. Masalah broadcast storm — solusi: tambahkan switch Layer 3', 'D. Kabel backbone UTP tidak mendukung — solusi: upgrade ke fiber optik', 'E. Daya pancar AP terlalu rendah — solusi: ganti antenna omni dengan directional'],
    answer: 0,
    explanation: '2.4 GHz hanya memiliki 3 kanal non-overlapping (1, 6, 11). Di lingkungan padat, perangkat saling berebut kanal, menyebabkan interferensi ko-kanal dan penurunan throughput. 5 GHz memiliki 23 kanal non-overlapping sehingga lebih cocok untuk lingkungan padat.'
  },
  {
    id: 8, level: 'L2',
    question: 'Faktor yang PALING mempengaruhi redaman (attenuation) sinyal nirkabel di dalam ruangan adalah?',
    options: ['A. Jenis antenna AP', 'B. Frekuensi, material dinding, dan jarak', 'C. Merek perangkat nirkabel', 'D. Versi firmware access point', 'E. Jumlah perangkat yang terkoneksi'],
    answer: 1,
    explanation: 'Redaman sinyal dipengaruhi oleh frekuensi (semakin tinggi semakin mudah teredam), material penghalang (beton, logam, kaca mempengaruhi berbeda), dan jarak (semakin jauh semakin lemah).'
  },
  // === MODUL 3: Instalasi Perangkat Nirkabel (4 soal) ===
  {
    id: 9, level: 'L1',
    question: 'Perangkat yang digunakan untuk menghubungkan dua jaringan LAN yang terpisah secara geografis menggunakan gelombang radio adalah?',
    options: ['A. Access Point', 'B. Wireless Bridge', 'C. Router', 'D. Switch Managed', 'E. Repeater'],
    answer: 1,
    explanation: 'Wireless Bridge berfungsi menghubungkan dua segmen jaringan yang terpisah secara geografis melalui koneksi point-to-point nirkabel.'
  },
  {
    id: 10, level: 'L2',
    question: 'Proses site survey dalam instalasi jaringan nirkabel bertujuan untuk?',
    options: ['A. Menentukan harga perangkat yang paling murah', 'B. Mengukur coverage, interferensi, dan jumlah AP yang dibutuhkan', 'C. Memeriksa ketersediaan kabel UTP', 'D. Menguji kecepatan internet dari ISP', 'E. Menentukan lokasi server utama'],
    answer: 1,
    explanation: 'Site survey adalah proses pengukuran coverage area, deteksi interferensi dari AP tetangga, dan perencanaan jumlah serta posisi AP untuk mendapatkan cakupan optimal tanpa dead spot.'
  },
  {
    id: 11, level: 'L3',
    question: 'Sebuah gedung 10 lantai akan dipasang jaringan nirkabel. AP dipasang di lantai genap saja (2, 4, 6, 8, 10). Hasil site survey menunjukkan lantai ganjil mendapat sinyal lemah. Tindakan korektif yang PALING efektif:',
    options: ['A. Meninggikan daya pancar (tx power) AP ke maksimum', 'B. Memasang AP di setiap lantai dengan kanal yang direncanakan agar tidak overlap vertikal', 'C. Mengganti semua AP dengan merek yang lebih mahal', 'D. Menambah antenna omni di setiap lorong lantai ganjil', 'E. Memindahkan semua AP ke tengah bangunan'],
    answer: 1,
    explanation: 'Sinyal vertikal antar lantai sangat teredam oleh plat beton. Solusi terbaik adalah memasang AP di setiap lantai dengan perencanaan kanal yang baik untuk menghindari interferensi co-channel dan adjacent-channel antar lantai.'
  },
  {
    id: 12, level: 'L2',
    question: 'Mode operasi pada access point yang memungkinkan client nirkabel terhubung ke jaringan kabel melalui AP disebut?',
    options: ['A. Repeater mode', 'B. Bridge mode', 'C. Infrastructure mode', 'D. Ad-hoc mode', 'E. Mesh mode'],
    answer: 2,
    explanation: 'Infrastructure mode adalah mode dimana AP bertindak sebagai jembatan antara client nirkabel dan jaringan kabel (infrastruktur). Ad-hoc adalah koneksi peer-to-peer langsung antar perangkat.'
  },
  // === MODUL 4: VoIP (4 soal) ===
  {
    id: 13, level: 'L2',
    question: 'Protokol yang digunakan untuk signaling dalam komunikasi VoIP, termasuk inisiasi, modifikasi, dan terminasi sesi panggilan adalah?',
    options: ['A. RTP', 'B. SIP', 'C. RTCP', 'D. TCP', 'E. SNMP'],
    answer: 1,
    explanation: 'SIP (Session Initiation Protocol) adalah protokol signaling yang mengatur pembentukan, modifikasi, dan pengakhiran sesi komunikasi multimedia termasuk panggilan VoIP.'
  },
  {
    id: 14, level: 'L1',
    question: 'Fungsi dari codec dalam komunikasi VoIP adalah?',
    options: ['A. Mengirimkan paket data melalui internet', 'B. Mengompresi dan mendekompresi sinyal suara digital', 'C. Menyediakan koneksi internet', 'D. Menyimpan riwayat panggilan', 'E. Mengatur routing panggilan'],
    answer: 1,
    explanation: 'Codec (coder-decoder) berfungsi mengompresi suara analog yang sudah di-digitalisasi agar ukurannya lebih kecil untuk transmisi, kemudian mendekompresinya kembali di sisi penerima.'
  },
  {
    id: 15, level: 'L3',
    question: 'Dalam sebuah kantor dengan IP PBX, panggilan internal terdengar putus-putus (jitter) meskipun bandwidth mencukupi. Analisis penyebab dan solusi teknis yang tepat:',
    options: ['A. Codec terlalu efisien — solusi: ganti codec dengan bitrate lebih rendah', 'B. Jitter buffer terlalu kecil — solusi: konfigurasi jitter buffer di IP PBX atau endpoint', 'C. Router tidak mendukung NAT — solusi: ganti router', 'D. Kabel UTP tidak standar — solusi: ganti ke STP', 'E. Server terlalu panas — solusi: pasang AC di ruang server'],
    answer: 1,
    explanation: 'Jitter (variasi delay antar paket) menyebabkan suara terputus-putus. Jitter buffer menyimpan sementara paket yang tiba untuk meratakan variasi delay. Jika jitter buffer terlalu kecil, banyak paket dibuang karena dianggap terlambat.'
  },
  {
    id: 16, level: 'L2',
    question: 'Keuntungan utama menggunakan IP PBX dibandingkan PBX konvensional (analog) adalah?',
    options: ['A. Tidak memerlukan listrik', 'B. Menggunakan kabel tembaga yang lebih murah', 'C. Integrasi layanan suara, data, dan video dalam satu infrastruktur IP', 'D. Suara lebih jernih karena analog', 'E. Tidak perlu maintenance'],
    answer: 2,
    explanation: 'IP PBX memungkinkan konvergensi layanan suara, data, dan video melalui jaringan IP yang sama, sehingga lebih efisien dari segi infrastruktur dan biaya operasional dibanding PBX analog terpisah.'
  },
  // === MODUL 5: Fiber Optik (4 soal) ===
  {
    id: 17, level: 'L1',
    question: 'Perbedaan utama antara fiber optik single-mode (SM) dan multi-mode (MM) adalah?',
    options: ['A. SM lebih murah daripada MM', 'B. SM memiliki inti lebih kecil (9 mikron) dan menggunakan sumber laser, MM inti lebih besar (50/62.5 mikron) dengan LED', 'C. MM hanya digunakan untuk jarak di atas 40 km', 'D. SM menggunakan LED, MM menggunakan laser', 'E. Tidak ada perbedaan signifikan'],
    answer: 1,
    explanation: 'Single-mode memiliki inti ~9 mikron dengan sumber laser untuk transmisi jarak jauh. Multi-mode memiliki inti 50-62.5 mikron dengan sumber LED/VCSEL untuk jarak pendek hingga 550m.'
  },
  {
    id: 18, level: 'L2',
    question: 'Proses penyambungan dua serat optik secara permanen menggunakan panas listrik (arc fusion) disebut?',
    options: ['A. Splicing mekanis', 'B. Fusion splicing', 'C. Terminating', 'D. Polishing', 'E. Cleaving'],
    answer: 1,
    explanation: 'Fusion splicing adalah proses melelehkan ujung dua serat optik dengan busur listrik (arc fusion) sehingga menyatu secara permanen. Hasilnya memiliki redaman yang sangat rendah dibanding splicing mekanis.'
  },
  {
    id: 19, level: 'L3',
    question: 'Seorang teknisi mengukur link fiber optik dengan OTDR dan menemukan event reflection tinggi di titik sambungan dengan redaman 2.5 dB. Evaluasi hasil ini dan tindakan yang tepat:',
    options: ['A. Redaman 2.5 dB masih normal, tidak perlu tindakan', 'B. Ada konektor kotor atau splicing buruk — redaman ideal <0.3 dB, perlu dibersihkan dan disambung ulang', 'C. Redaman tinggi karena kabel terlalu panjang — solusi: gunakan amplifier', 'D. Refleksi tinggi adalah hal yang baik karena menandakan koneksi bagus', 'E. OTDR rusak — solusi: kalibrasi ulang OTDR'],
    answer: 1,
    explanation: 'Redaman sambungan fiber optik yang baik untuk fusion splicing adalah <0.1 dB, dan maksimal <0.3 dB. Redaman 2.5 dB sangat tinggi, menunjukkan splicing buruk atau konektor kotor. Refleksi tinggi (Fresnel reflection) menandakan celah udara pada sambungan.'
  },
  {
    id: 20, level: 'L2',
    question: 'Alat yang digunakan untuk memotong serat optik dengan presisi tinggi sebelum proses splicing adalah?',
    options: ['A. Stripper', 'B. Cleaver', 'C. Fusion splicer', 'D. Visual Fault Locator', 'E. Power meter'],
    answer: 1,
    explanation: 'Cleaver (pemotong serat optik) digunakan untuk memotong ujung serat dengan permukaan yang sangat rata dan presisi sehingga siap untuk disambung (splicing). Potongan yang tidak rata menyebabkan redaman tinggi pada sambungan.'
  }
];
