export const pretestDKK = [
  {
    id: 1, level: 'C2 - Memahami',
    question: 'Apa fungsi utama dari multimeter dalam pekerjaan teknisi jaringan?',
    options: ['A. Mengukur kecepatan internet', 'B. Mengukur tegangan, arus, dan hambatan listrik', 'C. Menguji koneksi Wi-Fi', 'D. Mengukur panjang kabel', 'E. Mendeteksi interferensi RF'],
    answer: 1, explanation: 'Multimeter adalah alat ukur listrik yang dapat mengukur tegangan (volt), arus (ampere), dan hambatan (ohm).'
  },
  {
    id: 2, level: 'C2 - Memahami',
    question: 'Apa kepanjangan dari K3LH?',
    options: ['A. Keamanan, Kesehatan, dan Keselamatan Lingkungan Hidup', 'B. Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup', 'C. Keamanan dan Kesejahteraan Karyawan Lingkungan Hidup', 'D. Keselamatan Kerja dan Kesejahteraan Hidup', 'E. Kecelakaan Kerja, Kesehatan dan Lingkungan Hidup'],
    answer: 1, explanation: 'K3LH adalah singkatan dari Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup.'
  },
  {
    id: 3, level: 'C2 - Memahami',
    question: 'Media transmisi yang menggunakan cahaya untuk mentransmisikan data adalah?',
    options: ['A. Kabel UTP', 'B. Kabel Coaxial', 'C. Kabel STP', 'D. Fiber Optik', 'E. Kabel Telepon'],
    answer: 3, explanation: 'Fiber optik menggunakan cahaya yang merambat melalui serat kaca untuk mentransmisikan data dengan kecepatan tinggi.'
  },
  {
    id: 4, level: 'C3 - Menerapkan',
    question: 'Seorang teknisi akan melakukan instalasi kabel fiber optik di tiang listrik. APD yang WAJIB digunakan adalah?',
    options: ['A. Topi saja', 'B. Helm safety, sarung tangan listrik, sepatu safety, dan rompi reflektif', 'C. Kacamata dan masker', 'D. Sarung tangan kain', 'E. Sepatu biasa dan topi'],
    answer: 1, explanation: 'Pekerjaan di ketinggian dekat instalasi listrik membutuhkan perlindungan lengkap: helm, sarung tangan listrik, sepatu safety, dan rompi reflektif.'
  },
  {
    id: 5, level: 'C3 - Menerapkan',
    question: 'Alat yang digunakan untuk menguji kontinuitas dan kebenaran wiring kabel UTP adalah?',
    options: ['A. Multimeter', 'B. OTDR', 'C. Cable Tester', 'D. Spectrum Analyzer', 'E. Power Meter'],
    answer: 2, explanation: 'Cable tester atau LAN tester digunakan khusus untuk menguji kontinuitas, wiring, dan kondisi kabel UTP.'
  },
  {
    id: 6, level: 'C2 - Memahami',
    question: 'Sertifikasi apa yang relevan untuk teknisi jaringan tingkat pemula yang diakui secara internasional?',
    options: ['A. MTCRE', 'B. CompTIA Network+', 'C. CCIE', 'D. JNCIS', 'E. AWS Architect'],
    answer: 1, explanation: 'CompTIA Network+ adalah sertifikasi entry-level yang diakui global untuk pengetahuan dasar jaringan komputer.'
  },
  {
    id: 7, level: 'C3 - Menerapkan',
    question: 'Prinsip budaya kerja 5S yang berarti "membersihkan tempat kerja dari kotoran dan debu" disebut?',
    options: ['A. Seiri', 'B. Seiton', 'C. Seiso', 'D. Seiketsu', 'E. Shitsuke'],
    answer: 2, explanation: 'Seiso (Resik) adalah prinsip membersihkan tempat kerja secara rutin agar lingkungan kerja tetap bersih dan nyaman.'
  },
  {
    id: 8, level: 'C2 - Memahami',
    question: 'Satuan yang digunakan untuk mengukur kekuatan sinyal pada fiber optik adalah?',
    options: ['A. dB', 'B. dBm', 'C. Watt', 'D. Volt', 'E. Hertz'],
    answer: 1, explanation: 'dBm adalah satuan logaritmik yang mengukur level daya relatif terhadap 1 miliwatt, umum digunakan dalam pengukuran fiber optik.'
  },
  {
    id: 9, level: 'C3 - Menerapkan',
    question: 'Prosedur Lockout Tagout (LOTO) dilakukan untuk?',
    options: ['A. Mempercepat instalasi jaringan', 'B. Mengunci peralatan dan memberi tanda agar tidak dihidupkan saat perbaikan', 'C. Menandai kabel yang sudah diuji', 'D. Mengunci rack server', 'E. Memberi label pada perangkat'],
    answer: 1, explanation: 'LOTO adalah prosedur keselamatan untuk mengunci sumber energi dan memasang label peringatan agar peralatan tidak dihidupkan selama perbaikan.'
  },
  {
    id: 10, level: 'C4 - Menganalisis',
    question: 'Seorang teknisi mengukur redaman kabel fiber optik sebesar 0.4 dB/km. Jika daya yang dikirim 0 dBm dan setelah 10 km dayanya menjadi -4 dBm, analisis apakah redaman ini normal?',
    options: ['A. Tidak normal, seharusnya -2 dBm', 'B. Normal, 0.4 dB/km x 10 km = 4 dB redaman = -4 dBm', 'C. Tidak normal, seharusnya 0 dBm', 'D. Normal karena fiber optik selalu seperti itu', 'E. Tidak bisa dianalisis tanpa alat OTDR'],
    answer: 1, explanation: 'Redaman total = 0.4 dB/km x 10 km = 4 dB. Daya terima = 0 dBm - 4 dB = -4 dBm. Ini sesuai perhitungan dan normal.'
  },
  {
    id: 11, level: 'C2 - Memahami',
    question: 'Apa yang dimaksud dengan bandwidth dalam jaringan telekomunikasi?',
    options: ['A. Jarak maksimal kabel', 'B. Kapasitas maksimum transfer data dalam bps', 'C. Kecepatan prosesor router', 'D. Jumlah perangkat yang terhubung', 'E. Waktu yang dibutuhkan untuk ping'],
    answer: 1, explanation: 'Bandwidth adalah kapasitas maksimum saluran komunikasi untuk mentransfer data, diukur dalam bit per second (bps).'
  },
  {
    id: 12, level: 'C3 - Menerapkan',
    question: 'Jika sebuah kabel UTP diuji dengan cable tester dan indicator LED nomor 3 tidak menyala, apa interpretasinya?',
    options: ['A. Kabel bagus semua', 'B. Pin nomor 3 putus atau tidak terhubung', 'C. Kabel crossover', 'D. Kabel terlalu panjang', 'E. Tester rusak'],
    answer: 1, explanation: 'Cable tester menguji kontinuitas setiap pin. Jika LED nomor 3 tidak menyala, berarti pin 3 pada konektor RJ-45 tidak terhubung atau kabel putus.'
  },
  {
    id: 13, level: 'C2 - Memahami',
    question: 'Teknologi akses internet yang menggunakan kabel serat optik langsung ke rumah pelanggan disebut?',
    options: ['A. ADSL', 'B. FTTH', 'C. WiMAX', 'D. HSPA', 'E. LTE'],
    answer: 1, explanation: 'FTTH (Fiber to the Home) adalah teknologi yang menghubungkan provider internet langsung ke rumah pelanggan menggunakan kabel fiber optik.'
  },
  {
    id: 14, level: 'C4 - Menganalisis',
    question: 'Seorang teknisi mendapat laporan bahwa koneksi internet sering putus-nyambung. Setelah dicek, spektrum Wi-Fi menunjukkan banyak interferensi di kanal 1, 6, dan 11. Analisis penyebab dan solusinya:',
    options: ['A. Ganti router karena rusak', 'B. Interferensi dari AP tetangga, solusi: pilih kanal yang paling bersih atau gunakan kanal 5 GHz', 'C. Tambah bandwidth dari ISP', 'D. Ganti kabel UTP', 'E. Pasang antena eksternal'],
    answer: 1, explanation: 'Wi-Fi 2.4 GHz hanya memiliki 3 kanal non-overlapping (1, 6, 11). Jika ketiganya padat, terjadi interferensi. Solusinya pindah ke kanal yang paling rendah interferensinya atau gunakan frekuensi 5 GHz yang lebih lega.'
  },
  {
    id: 15, level: 'C2 - Memahami',
    question: 'Apa tugas utama dari seorang network administrator?',
    options: ['A. Membuat aplikasi website', 'B. Mengelola dan memelihara jaringan komputer perusahaan', 'C. Menjual perangkat jaringan', 'D. Mengajar di sekolah', 'E. Merakit komputer'],
    answer: 1, explanation: 'Network administrator bertanggung jawab mengelola operasional jaringan sehari-hari, termasuk konfigurasi, monitoring, backup, dan troubleshooting.'
  },
  {
    id: 16, level: 'C3 - Menerapkan',
    question: 'Seorang teknisi akan melakukan krimping kabel UTP dengan standar T568B. Urutan warna yang benar dari pin 1 sampai 8 adalah?',
    options: ['A. Putih-Oranye, Oranye, Putih-Hijau, Biru, Putih-Biru, Hijau, Putih-Coklat, Coklat', 'B. Putih-Hijau, Hijau, Putih-Oranye, Biru, Putih-Biru, Oranye, Putih-Coklat, Coklat', 'C. Oranye, Putih-Oranye, Hijau, Putih-Hijau, Biru, Putih-Biru, Coklat, Putih-Coklat', 'D. Putih-Biru, Biru, Putih-Oranye, Oranye, Putih-Hijau, Hijau, Putih-Coklat, Coklat', 'E. Coklat, Putih-Coklat, Hijau, Putih-Hijau, Biru, Putih-Biru, Oranye, Putih-Oranye'],
    answer: 0, explanation: 'Standar T568B: Pin 1=Putih-Oranye, 2=Oranye, 3=Putih-Hijau, 4=Biru, 5=Putih-Biru, 6=Hijau, 7=Putih-Coklat, 8=Coklat.'
  },
  {
    id: 17, level: 'C3 - Menerapkan',
    question: 'Seorang teknisi mendapat tugas memasang access point di langit-langit ruangan. APD yang harus digunakan saat bekerja di ketinggian 3 meter adalah:',
    options: ['A. Topi saja', 'B. Helm safety, safety harness/body harness, sepatu safety, dan sarung tangan', 'C. Kacamata safety dan masker', 'D. Sarung tangan kain dan sepatu biasa', 'E. Rompi saja'],
    answer: 1, explanation: 'Bekerja di ketinggian ≥ 1.8 meter membutuhkan: helm safety (jatuhan benda), safety harness (mencegah jatuh fatal), sepatu safety (pijakan stabil), dan sarung tangan (perlindungan tangan).'
  },
  {
    id: 18, level: 'C2 - Memahami',
    question: 'Apa perbedaan utama antara kabel STP dan UTP?',
    options: ['A. STP lebih murah dari UTP', 'B. STP memiliki pelindung (shielding) foil atau anyaman tembaga yang mengurangi interferensi elektromagnetik', 'C. UTP lebih cepat dari STP', 'D. STP hanya untuk fiber optik', 'E. Tidak ada perbedaan'],
    answer: 1, explanation: 'STP (Shielded Twisted Pair) memiliki pelindung logam di sekeliling pasangan kabel yang mengurangi EMI/RFI, cocok untuk lingkungan dengan interferensi tinggi. UTP tidak memiliki pelindung sehingga lebih ringan dan murah.'
  },
  {
    id: 19, level: 'C5 - Mengevaluasi',
    question: 'Sebuah perusahaan membutuhkan media transmisi untuk backbone antar gedung jarak 2 km dengan kecepatan minimal 10 Gbps. Evaluasi pilihan terbaik:',
    options: ['A. Kabel UTP Cat6a — 10Gbps maks 100m, tidak bisa untuk 2 km', 'B. Kabel Coaxial — bandwidth rendah', 'C. Fiber optik single-mode — 100Gbps hingga 40km, paling sesuai', 'D. Wi-Fi 6 — jarak terbatas', 'E. Kabel telepon — terlalu lambat'],
    answer: 2, explanation: 'Fiber optik single-mode adalah satu-satunya yang memenuhi spesifikasi: kecepatan hingga 100Gbps dan jarak hingga 40km. UTP Cat6a terbatas 100m, coaxial dan Wi-Fi tidak mencapai 10Gbps di jarak 2 km.'
  },
  {
    id: 20, level: 'C4 - Menganalisis',
    question: 'Hasil pengukuran dengan OTDR menunjukkan ada spike reflektif tinggi di jarak 1.5 km pada kabel fiber optik 3 km. Analisis kemungkinan penyebab:',
    options: ['A. Kabel bagus tidak ada masalah', 'B. Ada konektor atau sambungan (splice) di jarak 1.5 km yang menyebabkan refleksi — perlu diperiksa kebersihan konektor atau kualitas splice', 'C. OTDR rusak', 'D. Kabel putus total', 'E. Daya laser terlalu rendah'],
    answer: 1, explanation: 'Spike reflektif pada OTDR menandakan adanya perubahan impedansi — biasanya di konektor, splice, atau titik patah. Di jarak 1.5 km, kemungkinan ada sambungan kabel atau konektor yang kotor atau tidak presisi.'
  }
];
