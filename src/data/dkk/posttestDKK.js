export const posttestDKK = [
  {
    id: 1, level: 'C4 - Menganalisis',
    question: 'Seorang teknisi mengukur tegangan pada catu daya router dan mendapatkan nilai 11.8V DC, sementara spesifikasi router membutuhkan 12V DC. Analisis dampak dari kondisi ini:',
    options: ['A. Tidak masalah, masih dalam toleransi', 'B. Router bisa mati mendadak atau tidak stabil karena tegangan di bawah spesifikasi', 'C. Router akan bekerja lebih cepat', 'D. Tegangan akan naik sendiri', 'E. Router otomatis meningkatkan tegangan'],
    answer: 1, explanation: 'Tegangan 11.8V (turun 0.2V dari 12V) bisa menyebabkan router tidak stabil, restart mendadak, atau bahkan kerusakan komponen karena regulator tegangan bekerja di luar spesifikasi.'
  },
  {
    id: 2, level: 'C5 - Mengevaluasi',
    question: 'Seorang teknisi dihadapkan pada dua pilihan kabel: UTP Cat6 (1 Gbps, max 100m) dan fiber optik multi-mode (10 Gbps, max 2km) untuk menghubungkan 2 gedung berjarak 300m. Evaluasi pilihan terbaik:',
    options: ['A. UTP Cat6 karena lebih murah', 'B. Fiber optik karena jarak 300m masih dalam jangkauan, kecepatan lebih tinggi, dan tahan EMI', 'C. Keduanya sama baik', 'D. UTP Cat6 karena mudah instalasi', 'E. Fiber optik terlalu mahal untuk jarak 300m'],
    answer: 1, explanation: 'Meskipun UTP Cat6 bisa mencapai 300m dengan repeater, fiber optik multi-mode lebih unggul untuk jarak tersebut: kecepatan 10x lipat, tahan interferensi, dan tidak perlu repeater.'
  },
  {
    id: 3, level: 'C4 - Menganalisis',
    question: 'Pengukuran dengan power meter menunjukkan daya sinyal fiber optik -28 dBm. Standar yang diizinkan adalah maksimal -25 dBm. Analisis kondisi jaringan:',
    options: ['A. Normal, masih dalam batas', 'B. Sinyal terlalu lemah (di bawah threshold), perlu pembersihan konektor atau splice ulang', 'C. Sinyal terlalu kuat', 'D. Power meter rusak', 'E. Kabel terlalu pendek'],
    answer: 1, explanation: 'Daya -28 dBm lebih rendah dari batas -25 dBm, artinya redaman berlebih. Penyebab bisa konektor kotor, splice jelek, atau kabel terjepit. Perlu dibersihkan atau diperbaiki.'
  },
  {
    id: 4, level: 'C6 - Menciptakan',
    question: 'Buat prosedur keselamatan untuk instalasi perangkat jaringan di luar gedung yang melibatkan pekerjaan di ketinggian 5 meter:',
    options: ['A. Pakai helm saja', 'B. Gunakan safety harness, helm, sepatu safety, pastikan tangga stabil, kerja tim minimal 2 orang, dan periksa cuaca', 'C. Kerja sendirian biar cepat', 'D. Pakai sepatu biasa dan naik saja', 'E. Tidak perlu prosedur khusus'],
    answer: 1, explanation: 'Pekerjaan di ketinggian memerlukan prosedur ketat: safety harness terpasang ke anchor point, helm, sepatu safety, tangga distabilkan, minimal 2 orang (safety buddy), dan cuaca mendukung.'
  },
  {
    id: 5, level: 'C5 - Mengevaluasi',
    question: 'Seorang teknisi menggunakan multimeter untuk mengukur tegangan listrik di stopkontak dan mendapatkan hasil 245V AC. Evaluasi kondisi ini:',
    options: ['A. Normal, standar listrik Indonesia 220V ±10%', 'B. Terlalu tinggi, berbahaya untuk perangkat dan teknisi', 'C. Tidak masalah karena perangkat punya adaptor', 'D. Multimeter pasti rusak', 'E. Harusnya 380V karena 3 phase'],
    answer: 0, explanation: 'Standar PLN adalah 220V dengan toleransi ±10% (198V - 242V). Nilai 245V sedikit di atas toleransi, masih dalam batas wajar untuk kebanyakan perangkat.'
  },
  {
    id: 6, level: 'C4 - Menganalisis',
    question: 'Setelah membersihkan konektor fiber optik dengan alkohol, daya sinyal meningkat dari -30 dBm menjadi -22 dBm. Analisis penyebab awal masalah:',
    options: ['A. Kabel putus', 'B. Konektor kotor menyebabkan redaman tinggi, pembersihan mengembalikan kualitas sinyal', 'C. OTDR tidak kalibrasi', 'D. Power meter bermasalah', 'E. Suhu ruangan terlalu panas'],
    answer: 1, explanation: 'Peningkatan daya 8 dB setelah pembersihan menunjukkan penyebabnya adalah konektor kotor. Debu atau minyak pada konektor menyebabkan redaman tinggi. Pembersihan rutin sangat penting untuk fiber optik.'
  },
  {
    id: 7, level: 'C3 - Menerapkan',
    question: 'Prinsip 5S yang memastikan setiap barang memiliki tempat yang tetap dan mudah dijangkau adalah?',
    options: ['A. Seiri (Ringkas)', 'B. Seiton (Rapi)', 'C. Seiso (Resik)', 'D. Seiketsu (Rawat)', 'E. Shitsuke (Rajin)'],
    answer: 1, explanation: 'Seiton (Rapi) adalah prinsip mengatur barang-barang di tempat kerja sehingga mudah ditemukan, digunakan, dan dikembalikan.'
  },
  {
    id: 8, level: 'C4 - Menganalisis',
    question: 'Sebuah kantor menggunakan kabel coaxial untuk CCTV. Kualitas gambar sering terganggu. Analisis penyebab paling mungkin:',
    options: ['A. Kabel coaxial rentan interferensi elektromagnetik jika tidak di-grounding dengan benar', 'B. Kamera terlalu murah', 'C. Monitor bermasalah', 'D. Kabel terlalu pendek', 'E. DVR tidak support'],
    answer: 0, explanation: 'Kabel coaxial membutuhkan grounding yang baik. Tanpa grounding, interferensi elektromagnetik bisa mengganggu sinyal video, menyebabkan gambaran terganggu.'
  },
  {
    id: 9, level: 'C5 - Mengevaluasi',
    question: 'Evaluasi pernyataan: "Semakin tinggi bandwidth, semakin cepat koneksi internet." Apakah pernyataan ini selalu benar?',
    options: ['A. Benar, bandwidth tinggi selalu berarti internet cepat', 'B. Tidak selalu, karena latency, QoS, dan kondisi jaringan juga mempengaruhi kecepatan aktual', 'C. Salah, bandwidth tidak berpengaruh', 'D. Benar, itu satu-satunya faktor', 'E. Salah, yang penting adalah latency saja'],
    answer: 1, explanation: 'Bandwidth tinggi memungkinkan transfer data besar, tetapi kecepatan aktual dipengaruhi juga oleh latency, packet loss, congestion, dan QoS dari ISP.'
  },
  {
    id: 10, level: 'C6 - Menciptakan',
    question: 'Rancang sistem grounding untuk rack server di lab komputer sekolah. Komponen apa saja yang diperlukan dan bagaimana cara pemasangannya?',
    options: ['A. Cukup colokkan ke stopkontak biasa', 'B. Kabel grounding dari rack ke grounding rod, ground bar, dan pastikan semua perangkat terhubung ke ground bar', 'C. Tidak perlu grounding untuk rack', 'D. Cukup cat anti karat', 'E. Pasang karet di kaki rack'],
    answer: 1, explanation: 'Grounding rack membutuhkan: ground rod (batang tembaga) ditanam di tanah, kabel BC (Bare Copper) dari rod ke ground bar di rack, dan semua perangkat di-ground-kan ke ground bar via kabel grounding.'
  },
  {
    id: 11, level: 'C3 - Menerapkan',
    question: 'Jika OTDR menunjukkan adanya reflectance spike di titik 5.2 km, apa interpretasinya?',
    options: ['A. Kabel putus total di 5.2 km', 'B. Ada sambungan atau konektor di 5.2 km yang memantulkan cahaya', 'C. Daya terlalu tinggi', 'D. Kabel terlalu panjang', 'E. OTDR error'],
    answer: 1, explanation: 'Reflectance spike pada OTDR menunjukkan adanya perubahan indeks bias, biasanya disebabkan oleh konektor atau sambungan (splice). Ini normal dan menunjukkan lokasi sambungan.'
  },
  {
    id: 12, level: 'C4 - Menganalisis',
    question: 'Seorang teknisi menemukan grounding rack server memiliki resistansi 10 ohm. Standar yang baik adalah <5 ohm. Analisis risikonya:',
    options: ['A. Aman, masih di bawah 50 ohm', 'B. Resistansi terlalu tinggi, risiko: gagal mengalirkan arus listrik berlebih, bisa menyebabkan sengatan listrik', 'C. Tidak masalah', 'D. Semakin tinggi resistansi semakin baik', 'E. 10 ohm adalah standar yang benar'],
    answer: 1, explanation: 'Grounding dengan resistansi >5 ohm kurang efektif mengalirkan arus listrik ke tanah. Risiko: tegangan tinggi tertahan di rack, berpotensi menyengat teknisi dan merusak perangkat.'
  },
  {
    id: 13, level: 'C2 - Memahami',
    question: 'Apa fungsi dari toner probe dalam instalasi jaringan?',
    options: ['A. Mengukur tegangan listrik', 'B. Melacak dan mengidentifikasi kabel dalam instalasi yang padat', 'C. Mengukur kecepatan internet', 'D. Menguji koneksi Wi-Fi', 'E. Memperkuat sinyal'],
    answer: 1, explanation: 'Toner probe digunakan untuk melacak kabel tertentu di antara kumpulan kabel yang banyak. Toner mengirim sinyal nada, probe menangkap nada untuk identifikasi.'
  },
  {
    id: 14, level: 'C4 - Menganalisis',
    question: 'Sebuah ISP menerima keluhan pelanggan bahwa internet lambat saat jam 19.00-22.00. Analisis penyebab paling mungkin:',
    options: ['A. Modem rusak', 'B. Congestion/sharing bandwidth karena banyak pengguna aktif di jam tersebut', 'C. Kabel putus', 'D. DNS bermasalah', 'E. Cuaca buruk'],
    answer: 1, explanation: 'Jam 19.00-22.00 adalah prime time penggunaan internet. Banyak pengguna aktif menyebabkan congestion/sharing bandwidth yang berakibat pada perlambatan kecepatan.'
  },
  {
    id: 15, level: 'C3 - Menerapkan',
    question: 'Cara yang benar untuk membersihkan konektor fiber optik adalah?',
    options: ['A. Ditiup dengan mulut', 'B. Lap dengan tisu basah', 'C. Gunakan alcohol wipe khusus fiber optik atau pembersih konektor sekali pakai', 'D. Gosok dengan kain biasa', 'E. Cuci dengan air sabun'],
    answer: 2, explanation: 'Konektor fiber optik sangat sensitif terhadap debu dan goresan. Pembersihan harus menggunakan alcohol wipe khusus fiber optik atau one-click cleaner untuk menghindari kerusakan.'
  },
];
