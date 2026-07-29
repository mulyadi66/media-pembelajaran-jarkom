export const posttestMPK2 = [
  {
    id: 1, level: 'L2',
    question: 'Seorang teknisi melakukan crimping kabel UTP straight dan setelah diuji dengan LAN tester, LED nomor 3 dan 6 mati. Analisis dampak pada jaringan:',
    options: [
      'A. Jaringan tetap berfungsi penuh karena hanya 2 pin mati',
      'B. Koneksi tetap bisa terjadi tetapi kecepatan turun dari 1000 Mbps menjadi 100 Mbps karena pin 3 dan 6 adalah TX/RX pada standar T568B',
      'C. Tidak ada dampak karena pin 3 dan 6 adalah ground',
      'D. Kabel harus segera diganti karena tidak bisa digunakan sama sekali',
      'E. Hanya koneksi power over Ethernet yang terganggu'
    ],
    answer: 1,
    explanation: 'Pada standar T568B, pin 1-2 (TX) dan 3-6 (RX) digunakan untuk transmisi data. Jika pin 3 atau 6 putus, koneksi RX terganggu. Kabel bisa bekerja di 100 Mbps (hanya pakai 2 pasang), tapi tidak bisa 1000 Mbps (membutuhkan 4 pasang).'
  },
  {
    id: 2, level: 'L2',
    question: 'Sebuah kantor kecil menggunakan access point 2.4 GHz. Karyawan sering mengalami putus koneksi saat berada di dekat microwave yang sedang menyala. Analisis penyebab:',
    options: [
      'A. Microwave merusak access point secara permanen',
      'B. Microwave beroperasi pada frekuensi 2.4 GHz, menyebabkan interferensi gelombang radio yang mengganggu sinyal Wi-Fi',
      'C. Microwave menghasilkan panas yang merusak antena laptop',
      'D. Sinyal microwave lebih kuat dan mendorong sinyal Wi-Fi keluar ruangan',
      'E. Microwave hanya mengganggu jaringan 5 GHz'
    ],
    answer: 1,
    explanation: 'Microwave oven beroperasi pada frekuensi ±2.45 GHz, sangat dekat dengan pita 2.4 GHz Wi-Fi. Radiasi elektromagnetik dari microwave menyebabkan noise yang menurunkan signal-to-noise ratio (SNR), mengakibatkan koneksi terputus atau lambat.'
  },
  {
    id: 3, level: 'L1',
    question: 'Alat yang digunakan untuk mengukur redaman (attenuation) kabel fiber optik adalah:',
    options: [
      'A. Multimeter digital',
      'B. LAN tester',
      'C. OTDR (Optical Time Domain Reflectometer) dan Optical Power Meter',
      'D. TDR (Time Domain Reflectometer)',
      'E. Spectrum analyzer'
    ],
    answer: 2,
    explanation: 'OTDR mengukur redaman sepanjang kabel fiber optik dengan mendeteksi backscatter cahaya, menunjukkan lokasi splice, konektor, dan kerusakan. Optical Power Meter mengukur daya cahaya di ujung kabel.'
  },
  {
    id: 4, level: 'L2',
    question: 'Konfigurasi VLAN pada switch managed memisahkan suara dan data. PC di VLAN 10 tidak bisa berkomunikasi dengan IP Phone di VLAN 20 meskipun terhubung ke switch yang sama. Penyebab paling mungkin:',
    options: [
      'A. IP Phone rusak',
      'B. Switch port pada PC dan IP Phone dikonfigurasi di VLAN berbeda, dan belum ada inter-VLAN routing',
      'C. Kabel UTP tidak cocok untuk VoIP',
      'D. Power over Ethernet tidak mencukupi',
      'E. Firewall memblokir semua traffic'
    ],
    answer: 1,
    explanation: 'VLAN secara default mengisolasi traffic antar segmen. PC di VLAN 10 dan IP Phone di VLAN 20 tidak bisa berkomunikasi langsung meskipun satu switch. Inter-VLAN routing via router atau Layer 3 switch diperlukan menghubungkan keduanya.'
  },
  {
    id: 5, level: 'L3',
    question: 'Sebuah gedung 3 lantai akan dipasang jaringan wireless. Site survey menunjukkan lantai 1 butuh 3 AP, lantai 2 butuh 2 AP, lantai 3 butuh 2 AP. Kanal yang tersedia: 1, 6, dan 11 (2.4 GHz). Desain pemetaan kanal paling optimal:',
    options: [
      'A. Semua AP menggunakan kanal 1 agar seragam',
      'B. Atur kanal berselang-seling (1, 6, 11) antar AP yang berdekatan untuk meminimalkan co-channel interference',
      'C. Gunakan kanal 1 untuk semua AP lantai 1, kanal 6 untuk lantai 2, kanal 11 untuk lantai 3',
      'D. Biarkan semua AP otomatis memilih kanal (auto)',
      'E. Gunakan kanal 1 dan 2 saja karena overlapping kanal tidak masalah'
    ],
    answer: 1,
    explanation: 'Kanal 1, 6, 11 adalah satu-satunya kanal non-overlapping di 2.4 GHz. AP yang berdekatan (termasuk vertikal antar lantai) harus menggunakan kanal berbeda untuk menghindari co-channel interference. Pola berselang-seling seperti papan catur adalah optimal.'
  },
  {
    id: 6, level: 'L3',
    question: 'Evaluasi konfigurasi QoS pada jaringan VoIP: bandwidth total 100 Mbps, prioritas suara membutuhkan jaminan 5 Mbps dengan latency <150 ms. Konfigurasi queue mana yang paling tepat?',
    options: [
      'A. FIFO queue — semua paket diperlakukan sama',
      'B. Strict Priority Queue — semua traffic VoIP selalu diproses duluan sampai habis baru traffic lain',
      'C. Custom Queue — VoIP dialokasikan 5 Mbps minimal, sisa 95 Mbps dibagi traffic lain secara proporsional, dengan voice queue prioritas tertinggi',
      'D. Round Robin — semua queue mendapat giliran bergantian tanpa prioritas',
      'E. Weighted Fair Queue — bandwidth dibagi rata semua koneksi'
    ],
    answer: 2,
    explanation: 'Custom Queue (CQ) memungkinkan alokasi bandwidth minimum untuk voice (5 Mbps) dengan prioritas lebih tinggi, namun tidak strict sehingga traffic lain tidak kelaparan. Ini menjamin kualitas VoIP tetap terjaga tanpa memblokir traffic data lainnya.'
  },
  {
    id: 7, level: 'L2',
    question: 'Teknisi melakukan fusion splice pada fiber optik single-mode. Hasil OTDR menunjukkan loss 0.5 dB pada titik sambungan. Evaluasi kualitas sambungan:',
    options: [
      'A. Sangat baik, karena loss < 0.1 dB adalah standar ideal',
      'B. Buruk, standar fusion splice yang baik adalah < 0.1 dB. Loss 0.5 dB menandakan splice tidak optimal, perlu diulang',
      'C. Normal, loss 0.5 dB masih dalam toleransi',
      'D. Fusion splice tidak perlu diukur loss-nya',
      'E. Loss 0.5 dB bagus untuk single-mode'
    ],
    answer: 1,
    explanation: 'Fusion splice yang baik memiliki loss sangat rendah, idealnya < 0.05 dB, standar maksimal 0.1 dB. Loss 0.5 dB menandakan alignment serat tidak sempurna, kotor, atau suhu splicing tidak sesuai. Sambungan harus diulang untuk menjaga kualitas link.'
  },
  {
    id: 8, level: 'L1',
    question: 'Fungsi dari DHCP server dalam jaringan kantor adalah:',
    options: [
      'A. Menerjemahkan alamat IP ke nama domain',
      'B. Memberikan alamat IP secara otomatis kepada perangkat dalam jaringan',
      'C. Melindungi jaringan dari serangan luar',
      'D. Menghubungkan dua jaringan berbeda',
      'E. Menyimpan file-file penting'
    ],
    answer: 1,
    explanation: 'DHCP (Dynamic Host Configuration Protocol) server secara otomatis memberikan konfigurasi IP (alamat IP, subnet mask, gateway, DNS) ke perangkat klien, sehingga teknisi tidak perlu konfigurasi manual satu per satu.'
  },
  {
    id: 9, level: 'L2',
    question: 'Analisis: Kabel fiber optik multimode 50/125 μm digunakan untuk koneksi gedung berjarak 2 km. Setelah instalasi, power meter menunjukkan loss total 6 dB. Evaluasi kelayakan link:',
    options: [
      'A. Normal, fiber optik selalu memiliki loss besar',
      'B. Tidak layak, loss 3 dB (3 dBm/km) terlalu tinggi. Standar multimode 50/125 μm memiliki redaman ~3 dB/km, jadi untuk 2 km redaman total maksimal ~6 dB — masih di batas tapi perlu investigasi kualitas konektor',
      'C. Layak karena masih bisa digunakan',
      'D. Tidak masalah, power meter bisa salah baca',
      'E. Harusnya loss 0 dB untuk jarak 2 km'
    ],
    answer: 1,
    explanation: 'Redaman standar multimode 50/125 μm adalah sekitar 2.5–3.5 dB/km. Untuk 2 km, loss 6 dB berarti redaman ~3 dB/km — di batas atas standar. Bisa disebabkan konektor kotor, splice jelek, atau kabel terjepit. Perlu diperiksa lagi.'
  },
  {
    id: 10, level: 'L3',
    question: 'Sebuah server VoIP (Asterisk/PBX) dikonfigurasi dengan codec G.729. Setiap panggilan membutuhkan bandwidth ~31 kbps. Jika kantor memiliki bandwidth internet 20 Mbps dan rata-rata 200 panggilan simultan, evaluasi kecukupan bandwidth:',
    options: [
      'A. Cukup, 200 x 31 kbps = 6.2 Mbps, masih di bawah 20 Mbps',
      'B. Tidak cukup, karena bandwidth VoIP harus dihitung dengan overhead RTP/UDP/IP dan Ethernet, total ~88 kbps per panggilan x 200 = 17.6 Mbps — masih cukup dengan sisa 2.4 Mbps untuk data',
      'C. Tidak cukup sama sekali',
      'D. Codec G.729 menggunakan 8 kbps, jadi 200 x 8 = 1.6 Mbps',
      'E. Bandwidth VoIP dihitung dari durasi panggilan bukan jumlah panggilan'
    ],
    answer: 1,
    explanation: 'G.729 bitrate dasar 8 kbps, tapi dengan overhead Layer 2 (Ethernet 38 byte), IP (20 byte), UDP (8 byte), RTP (12 byte), total per paket ~78 byte. Dengan 50 pps (paket per detik), bandwidth aktual ~31 kbps. Overhead sesungguhnya lebih besar: header Ethernet + IP + UDP + RTP = 54 byte + payload 20 byte = 74 byte per paket. Dengan 50 pps, bandwidth ~29.6 kbps, plus L2 header, total ~40-50 kbps per panggilan. Perhitungan opsi B lebih mendekati kenyataan.'
  },
  {
    id: 11, level: 'L1',
    question: 'SSID pada jaringan nirkabel berfungsi sebagai:',
    options: [
      'A. Kata sandi untuk mengakses jaringan',
      'B. Nama identifier jaringan Wi-Fi yang membedakan satu jaringan dengan jaringan lain',
      'C. Alamat MAC access point',
      'D. Frekuensi gelombang radio yang digunakan',
      'E. Tipe enkripsi jaringan'
    ],
    answer: 1,
    explanation: 'SSID (Service Set Identifier) adalah nama unik yang mengidentifikasi jaringan Wi-Fi. Perangkat klien menggunakan SSID untuk membedakan dan memilih jaringan nirkabel yang akan dituju.'
  },
  {
    id: 12, level: 'L3',
    question: 'Sebuah kantor memiliki 2 router yang terhubung ke ISP berbeda untuk failover. Router A (utama) gagal total. Router B mengambil alih tetapi semua koneksi TCP terputus dan harus reconnect manual. Analisis akar masalah:',
    options: [
      'A. Router B rusak juga',
      'B. IP address berubah setelah failover — koneksi TCP yang sudah established terputus karena session state tidak tersinkronisasi antar router. Solusi: gunakan stateful failover atau session synchronization',
      'C. Kabel jaringan putus',
      'D. ISP kedua tidak memberikan layanan',
      'E. DNS server tidak bisa diakses'
    ],
    answer: 1,
    explanation: 'Koneksi TCP bersifat stateful: klien dan server menyimpan state koneksi (sequence number, port, IP). Saat failover ke router B dengan IP berbeda, state koneksi tidak tersinkronisasi sehingga TCP connection dianggap invalid. Solusinya adalah stateful failover (sinkronisasi session table antar router) atau menggunakan floating IP.'
  },
  {
    id: 13, level: 'L2',
    question: 'Perbedaan utama antara kabel UTP Cat5e dan Cat6 dalam instalasi jaringan 1 Gbps adalah:',
    options: [
      'A. Cat6 lebih murah daripada Cat5e',
      'B. Cat6 memiliki spesifikasi lebih ketat untuk crosstalk dan redaman, mendukung frekuensi lebih tinggi (250 MHz vs 100 MHz), dan bisa 10 Gbps di jarak terbatas',
      'C. Tidak ada perbedaan, keduanya identik',
      'D. Cat5e menggunakan konektor RJ-45 sedangkan Cat6 menggunakan RJ-11',
      'E. Cat6 tidak bisa digunakan untuk 1 Gbps'
    ],
    answer: 1,
    explanation: 'Cat6 memiliki spesifikasi lebih tinggi: frekuensi 250 MHz (Cat5e: 100 MHz), crosstalk lebih rendah, dan bisa mendukung 10 Gbps hingga 55m. Untuk 1 Gbps di 100m, keduanya bisa bekerja, tapi Cat6 memberikan margin kualitas lebih baik.'
  },
  {
    id: 14, level: 'L3',
    question: 'Konfigurasi inter-VLAN routing menggunakan Router-on-a-Stick: switch trunk port terhubung ke router dengan 4 VLAN (10, 20, 30, 99). Evaluasi: apa yang terjadi jika trunk port menggunakan native VLAN 99 yang berbeda di kedua sisi (router: VLAN 99, switch: VLAN 1)?',
    options: [
      'A. Tidak ada masalah, trunk akan tetap berfungsi',
      'B. VLAN 99 traffic akan bocor ke VLAN 1 atau sebaliknya karena native VLAN tidak diberi tag (untagged). Perbedaan native VLAN menyebabkan kegagalan komunikasi VLAN 99 dan potensi serangan VLAN hopping',
      'C. Semua VLAN akan berfungsi normal',
      'D. Switch akan otomatis menyesuaikan native VLAN',
      'E. Router akan menolak semua traffic dari switch'
    ],
    answer: 1,
    explanation: 'Native VLAN adalah VLAN yang tidak diberi tag 802.1Q pada trunk. Jika switch dan router memiliki native VLAN berbeda, traffic native VLAN akan diterima sebagai VLAN yang salah oleh sisi lain. Ini bisa menyebabkan kegagalan komunikasi dan celah keamanan VLAN hopping.'
  },
  {
    id: 15, level: 'L1',
    question: 'Jenis konektor yang paling umum digunakan pada kabel UTP untuk jaringan Ethernet adalah:',
    options: [
      'A. Konektor BNC',
      'B. Konektor SC',
      'C. Konektor RJ-45',
      'D. Konektor USB',
      'E. Konektor ST'
    ],
    answer: 2,
    explanation: 'RJ-45 (Registered Jack 45) adalah konektor 8P8C standar untuk kabel UTP yang digunakan pada jaringan Ethernet 10/100/1000 Mbps.'
  },
  {
    id: 16, level: 'L3',
    question: 'Sebuah perusahaan menggunakan VoIP dengan codec G.711 (64 kbps) dan G.729 (8 kbps). Evaluasi trade-off penggunaan kedua codec pada jaringan WAN dengan bandwidth terbatas 2 Mbps untuk 20 panggilan simultan:',
    options: [
      'A. G.729 selalu lebih baik karena bandwidth kecil',
      'B. G.711 memberikan kualitas suara lebih baik (PSTN-like) tapi boros bandwidth (~87 kbps per panggilan). Dengan 20 panggilan simultan = 1.74 Mbps, masih muat di 2 Mbps. G.729 menghemat bandwidth dengan kualitas lebih rendah — cocok untuk bandwidth sangat terbatas',
      'C. G.711 dan G.729 memiliki kualitas suara yang sama',
      'D. G.711 tidak bisa digunakan untuk VoIP',
      'E. Lebih baik menggunakan video call daripada voice call'
    ],
    answer: 1,
    explanation: 'G.711 (64 kbps + overhead = ~87 kbps per panggilan, 20 x 87 = 1.74 Mbps) memberikan kualitas PSTN dan masih cukup di 2 Mbps. G.729 (8 kbps + overhead = ~31 kbps) menghemat bandwidth signifikan namun dengan kualitas lebih rendah karena kompresi lossy. Pilihan codec bergantung pada ketersediaan bandwidth dan kebutuhan kualitas.'
  },
  {
    id: 17, level: 'L2',
    question: 'Analisis troubleshooting: Sebuah area kantor tidak mendapat sinyal Wi-Fi meskipun access point terpasang 30 meter dengan dinding beton di antaranya. Tindakan perbaikan paling efektif:',
    options: [
      'A. Ganti access point dengan merek lain',
      'B. Tambah access point baru di area tersebut atau gunakan wireless repeater/mesh AP untuk memperluas jangkauan',
      'C. Upgrade ke kartu jaringan nirkabel terbaru',
      'D. Gunakan kabel antena eksternal yang panjang',
      'E. Matikan semua perangkat wireless lain'
    ],
    answer: 1,
    explanation: 'Dinding beton (terutama dengan tulangan besi) sangat meredam sinyal 2.4/5 GHz. Menambah AP atau repeater di area yang tidak terjangkau adalah solusi paling efektif. Wireless mesh AP juga bisa menjadi alternatif tanpa kabel tambahan.'
  },
  {
    id: 18, level: 'L3',
    question: 'Sebuah perusahaan menggunakan 3 ISP dengan load balancing. ISP1: 50 Mbps, ISP2: 30 Mbps, ISP3: 20 Mbps. Metode load balancing yang dipilih adalah per-connection (setiap koneksi baru dialokasikan berdasarkan bobot bandwidth). Hitung persentase pembagian traffic dan evaluasi keadilan (fairness):',
    options: [
      'A. Digabung jadi 100 Mbps — semua koneksi berbagi total',
      'B. 50:30:20 — ISP1 mendapat 50% koneksi, ISP2 30%, ISP3 20%. Ini per-connection dengan bobot WRR (Weighted Round Robin). Cukup adil karena proporsional dengan kapasitas, namun satu koneksi besar bisa membuat satu link penuh sementara link lain idle',
      'C. Semua koneksi lewat ISP1, ISP2/3 sebagai backup',
      'D. Round robin 33.3% masing-masing',
      'E. Hanya ISP1 yang dipakai, yang lain idle'
    ],
    answer: 1,
    explanation: 'WRR dengan bobot 5:3:2 memastikan distribusi proporsional terhadap kapasitas. Tapi per-connection load balancing memiliki keterbatasan: satu koneksi (misal download file besar) hanya menggunakan satu ISP, bisa memenuhi link ISP1 sementara ISP2 dan ISP3 underutilized. Solusi lebih baik adalah per-packet load balancing atau session-level.'
  },
  {
    id: 19, level: 'L2',
    question: 'Setelah instalasi Access Point baru, pengguna Wi-Fi di lantai 2 kadang terhubung ke AP lantai 1 yang sinyalnya lemah. Analisis penyebab dan solusi:',
    options: [
      'A. Tidak masalah, biarkan saja',
      'B. Masalah sticky client — perangkat klien tetap terikat ke AP meskipun sinyal melemah. Solusi: atur minimum RSSI pada AP agar klien dengan sinyal lemah di-disconnect, atau aktifkan fast roaming (802.11r/k)',
      'C. Matikan AP lantai 1',
      'D. Pindahkan semua pengguna ke jaringan kabel',
      'E. Turunkan daya TX AP lantai 2'
    ],
    answer: 1,
    explanation: 'Sticky client terjadi karena perangkat klien cenderung bertahan ke AP yang sudah terhubung meskipun sinyal melemah. Solusi teknis: (1) Minimum RSSI — AP memutus klien jika sinyal di bawah threshold, (2) 802.11r/k/v mempercepat proses handover antar AP, (3) Sesuaikan daya TX AP agar overlap coverage tidak terlalu besar.'
  },
  {
    id: 20, level: 'L2',
    question: 'Analisis perbedaan antara fusion splice dan mechanical splice pada fiber optik dari segi biaya, loss, dan keandalan:',
    options: [
      'A. Fusion splice dan mechanical splice identik dalam semua aspek',
      'B. Mechanical splice lebih murah dan cepat tanpa alat mahal, tapi loss lebih tinggi (0.2-1.0 dB) dan kurang andal. Fusion splice membutuhkan splicer (mahal), loss sangat rendah (0.01-0.1 dB), dan lebih andal untuk jangka panjang',
      'C. Mechanical splice lebih baik dalam segala hal',
      'D. Fusion splice lebih murah daripada mechanical splice',
      'E. Keduanya memiliki loss yang sama besar'
    ],
    answer: 1,
    explanation: 'Fusion splice melebur serat fiber dengan busur listrik, menghasilkan sambungan permanen dengan loss minimal. Mechanical splice menggunakan alignment guide dan index-matching gel, lebih cepat dan murah namun loss lebih tinggi dan rentan terhadap getaran/perubahan suhu. Untuk backbone, fusion splice adalah standar.'
  }
];
