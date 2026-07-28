export const modulAjar = {
  identitas: {
    namaModul: 'Perencanaan dan Pengalamatan Jaringan',
    mataPelajaran: 'Teknik Jaringan Komputer dan Telekomunikasi',
    kode: 'TJKT-XII',
    fase: 'F',
    kelas: 'XI TJKT',
    semester: 'Ganjil',
    alokasiWaktu: '24 JP (8 Pertemuan × 3 JP)',
    tahunPelajaran: '2026/2026',
    penyusun: 'Guru TJKT',
    institusi: 'SMK Negeri 2 Kuningan',
  },

  kompetensiAwal: [
    'Siswa memiliki pengetahuan dasar tentang jaringan komputer dari pembelajaran sebelumnya.',
    'Siswa memahami konsep dasar IP address dan kabel jaringan.',
    'Siswa mampu mengoperasikan komputer dengan sistem operasi yang terinstall.',
    'Siswa telah mempelajari dasar-dasar sistem operasi jaringan.',
  ],

  dimensiProfilLulusan: [
    {
      dimensi: 'Bernalar Kritis',
      deskripsi: 'Siswa mampu menganalisis kebutuhan teknis pengguna, mengevaluasi peralatan jaringan, dan memecahkan masalah pengalamatan jaringan secara logis dan sistematis.',
      contoh: 'Menganalisis kasus jaringan lambat pada kantor, menentukan solusi peralatan yang tepat.',
    },
    {
      dimensi: 'Mandiri',
      deskripsi: 'Siswa mampu belajar secara independen, mengerjakan tugas lab tanpa pengawasan langsung, dan mencari referensi tambahan untuk memperdalam pemahaman.',
      contoh: 'Mengerjakan latihan subnetting secara mandiri dan memverifikasi hasil dengan kalkulator.',
    },
    {
      dimensi: 'Gotong Royong',
      deskripsi: 'Siswa mampu bekerja sama dalam tim untuk merancang jaringan, berdiskusi menyelesaikan studi kasus, dan saling membantu dalam pemahaman materi.',
      contoh: 'Merancang jaringan sekolah bersama dalam kelompok 4-5 siswa.',
    },
    {
      dimensi: 'Berpikir Kreatif',
      deskripsi: 'Siswa mampu mencari solusi inovatif untuk perencanaan jaringan dengan mempertimbangkan efisiensi biaya, keamanan, dan skalabilitas.',
      contoh: 'Mencari alternatif topologi hybrid yang hemat biaya untuk gedung bertingkat.',
    },
    {
      dimensi: 'Berkebinekaan Global',
      deskripsi: 'Siswa memahami dan menerapkan standar internasional dalam perencanaan jaringan seperti IEEE 802.3, TIA/EIA-568, dan protokol TCP/IP.',
      contoh: 'Menerapkan standar kabel TIA/EIA-568B dalam instalasi jaringan.',
    },
  ],

  saranaPrasarana: [
    {
      kategori: 'Perangkat Keras',
      items: ['Komputer/Laptop (1 per siswa)', 'Switch 24/48 port', 'Router (MikroTik/Cisco)', 'Kabel UTP Cat6', 'Konektor RJ-45', 'Crimping tool', 'LAN Tester', 'Patch Panel', 'Access Point Wi-Fi'],
    },
    {
      kategori: 'Perangkat Lunak',
      items: ['Browser (Chrome/Firefox)', 'Aplikasi subnetting calculator', 'Cisco Packet Tracer (opsional)', 'Microsoft Word/Excel'],
    },
    {
      kategori: 'Media Pembelajaran',
      items: ['Media Pembelajaran JarkomLab (web interaktif)', 'Modul Ajar cetak', 'Lembar Kerja Siswa', 'Rubrik Penilaian'],
    },
  ],

  targetPesertaDidik: [
    {
      kategori: 'Peserta Didik Reguler',
      deskripsi: 'Siswa yang mengikuti pembelajaran normal tanpa penyesuaian khusus.',
    },
    {
      kategori: 'Peserta Didik Berkebutuhan Khusus',
      deskripsi: 'Siswa dengan gangguan penglihatan: diberikan materi dalam format larger text dan audio. Siswa dengan gangguan pendengaran: diberikan materi visual dan teks.',
    },
    {
      kategori: 'Peserta Didik Cepat',
      deskripsi: 'Siswa yang sudah memiliki pemahaman dasar jaringan: diberikan pengayaan berupa tantangan VLSM dan konfigurasi router.',
    },
  ],

  modelPembelajaran: [
    {
      model: 'Problem Based Learning (PBL)',
      deskripsi: 'Siswa dihadapkan pada masalah nyata (kasus jaringan) kemudian menganalisis dan mencari solusi secara berkelompok.',
      penerapan: 'Digunakan pada Pertemuan 1-2 (Peralatan Jaringan) dan Pertemuan 5-6 (Pengalamatan Jaringan).',
    },
    {
      model: 'Discovery Learning',
      deskripsi: 'Siswa menemukan konsep sendiri melalui eksplorasi dan observasi topologi jaringan menggunakan simulator interaktif.',
      penerapan: 'Digunakan pada Pertemuan 3-4 (Topologi Jaringan).',
    },
    {
      model: 'Project Based Learning (PjBL)',
      deskripsi: 'Siswa membuat proyek nyata berupa rancangan jaringan lengkap untuk sebuah institusi.',
      penerapan: 'Digunakan pada Pertemuan 7-8 (Proyek Akhir: Rancang Jaringan Sekolah).',
    },
  ],

  tujuanPembelajaran: [
    {
      kode: 'TP-1',
      deskripsi: 'Siswa mampu mengidentifikasi dan menjelaskan fungsi peralatan jaringan beserta OSI layer-nya.',
      aspek: 'Pengetahuan',
      indikator: 'Menyebutkan minimal 7 peralatan jaringan dan fungsinya.',
    },
    {
      kode: 'TP-2',
      deskripsi: 'Siswa mampu menganalisis kebutuhan teknis pengguna dan merekomendasikan peralatan yang sesuai.',
      aspek: 'Keterampilan',
      indikator: 'Menyelesaikan studi kasus perencanaan peralatan dengan tepat.',
    },
    {
      kode: 'TP-3',
      deskripsi: 'Siswa mampu membandingkan dan mengevaluasi berbagai topologi jaringan.',
      aspek: 'Pengetahuan',
      indikator: 'Membuat tabel perbandingan 6 topologi jaringan.',
    },
    {
      kode: 'TP-4',
      deskripsi: 'Siswa mampu melakukan subnetting dan VLSM untuk perencanaan pengalamatan jaringan.',
      aspek: 'Keterampilan',
      indikator: 'Menyelesaikan 5 soal subnetting dengan benar.',
    },
    {
      kode: 'TP-5',
      deskripsi: 'Siswa mampu merancang skema pengalamatan IP untuk jaringan dengan kebutuhan berbeda.',
      aspek: 'Keterampilan',
      indikator: 'Menyelesaikan proyek VLSM untuk 4 departemen.',
    },
    {
      kode: 'TP-6',
      deskripsi: 'Siswa mampu merancang jaringan lengkap (peralatan + topologi + pengalamatan) untuk sebuah institusi.',
      aspek: 'Sikap',
      indikator: 'Menyusun proposal rancangan jaringan secara berkelompok.',
    },
  ],

  pemahamanBermakna: [
    {
      pertanyaan: 'Mengapa pemilihan peralatan jaringan yang tepat sangat penting bagi organisasi?',
      pemahaman: 'Karena peralatan yang salah akan mengakibatkan pemborosan biaya atau kinerja jaringan yang buruk.',
    },
    {
      pertanyaan: 'Bagaimana topologi jaringan mempengaruhi keandalan dan performa sebuah jaringan?',
      pemahaman: 'Setiap topologi memiliki kelebihan dan kekurangan yang mempengaruhi keandalan, biaya, dan kemudahan perawatan.',
    },
    {
      pertanyaan: 'Mengapa subnetting dan VLSM diperlukan dalam perencanaan jaringan?',
      pemahaman: 'Untuk menghemat alamat IP, meningkatkan keamanan, dan memudahkan pengelolaan jaringan.',
    },
  ],

  pertanyaanPemantik: [
    'Pernahkah kamu mengalami jaringan internet yang tiba-tiba lambat? Kira-kira penyebabnya apa ya?',
    'Jika kamu diminta merancang jaringan untuk sekolah dengan 500 siswa, peralatan apa saja yang dibutuhkan?',
    'Mengapa setiap komputer di jaringan harus punya alamat yang berbeda? Apa yang terjadi jika ada dua alamat yang sama?',
    'Bagaimana cara membagi satu jaringan besar menjadi beberapa bagian kecil tanpa membeli router baru?',
    'Topologi apa yang paling cocok untuk jaringan di sekolah kita? Mengapa?',
  ],

  kegiatanPembelajaran: [
    {
      pertemuan: '1-2',
      judul: 'Peralatan Jaringan',
      model: 'Problem Based Learning (PBL)',
      durasi: '6 JP',
      kegiatan: {
        pendahuluan: {
          durasi: '15 menit',
          deskripsi: [
            'Guru membuka pelajaran dengan salam dan doa.',
            'Guru menyampaikan tujuan pembelajaran pertemuan hari ini.',
            'Guru menampilkan pertanyaan pemantik: "Pernahkah kalian mengalami jaringan yang lambat di warnet atau kantor?"',
            'Siswa mendiskusikan pengalaman mereka.',
          ],
        },
        inti: {
          durasi: '100 menit',
          deskripsi: [
            'Fase Orientasi (15 menit): Guru menyampaikan kasus nyata — sebuah kantor mengeluh jaringan lambat. Siswa diminta menganalisis penyebabnya.',
            'Fase Pengorganisasian (10 menit): Siswa dibagi menjadi kelompok 4-5 orang. Setiap kelompok mendapat studi kasus berbeda.',
            'Fase Penyelidikan (30 menit): Setiap kelompok mengeksplorasi materi tentang peralatan jaringan menggunakan JarkomLab (modul 1). Siswa mengidentifikasi peralatan dan fungsinya.',
            'Fase Pengembangan (25 menit): Siswa mempresentasikan hasil analisis kasus. Kelompok lain memberikan tanggapan. Guru memandu diskusi dan memberikan konfirmasi.',
            'Fase Evaluasi (20 menit): Siswa mengerjakan latihan mandiri tentang identifikasi peralatan jaringan.',
          ],
        },
        penutup: {
          durasi: '15 menit',
          deskripsi: [
            'Guru bersama siswa merangkum materi yang telah dipelajari.',
            'Siswa mengisi refleksi: "Apa yang saya pelajari hari ini?"',
            'Guru menyampaikan tindak lanjut: siswa mempelajari topologi jaringan untuk pertemuan berikutnya.',
          ],
        },
      },
      asesmen: 'Observasi diskusi kelompok + Lembar Kerja Siswa (analisis kasus)',
    },
    {
      pertemuan: '3-4',
      judul: 'Topologi Jaringan',
      model: 'Discovery Learning',
      durasi: '6 JP',
      kegiatan: {
        pendahuluan: {
          durasi: '15 menit',
          deskripsi: [
            'Guru membuka dengan pertanyaan: "Bagaimana cara menghubungkan 30 komputer agar bisa saling berkomunikasi?"',
            'Siswa berdiskusi dan memberikan berbagai ide.',
            'Guru menyampaikan tujuan: siswa akan menemukan berbagai cara (topologi) menghubungkan komputer.',
          ],
        },
        inti: {
          durasi: '100 menit',
          deskripsi: [
            'Fase Stimulasi (10 menit): Guru menampilkan gambar/gambaran berbagai topologi tanpa menyebutkan namanya. Siswa diminta mengamati pola-pola yang ada.',
            'Fase Identifikasi Masalah (15 menit): Siswa diminta mengidentifikasi perbedaan dan persamaan antar pola. Pertanyaan: "Apa yang membuat setiap pola unik?"',
            'Fase Pengumpulan Data (20 menit): Siswa mengeksplorasi simulasi topologi interaktif di JarkomLab (modul 2). Mereka mencoba setiap topologi dan mencatat karakteristiknya.',
            'Fase Pengolahan Data (25 menit): Siswa mengolah temuan mereka menjadi tabel perbandingan: kelebihan, kekurangan, biaya, keandalan, skalabilitas.',
            'Fase Verifikasi (15 menit): Guru memfasilitasi presentasi dan verifikasi temuan siswa dengan teori yang benar.',
            'Fase Generalisasi (15 menit): Siswa menyimpulkan kapan menggunakan setiap topologi berdasarkan skenario tertentu.',
          ],
        },
        penutup: {
          durasi: '15 menit',
          deskripsi: [
            'Guru dan siswa merangkum perbandingan semua topologi.',
            'Siswa mengisi jurnal refleksi.',
            'Guru memberikan tindak lanjut: mempelajari pengalamatan jaringan.',
          ],
        },
      },
      asesmen: 'Jurnal eksplorasi + Tabel perbandingan topologi + Lembar observasi',
    },
    {
      pertemuan: '5-6',
      judul: 'Pengalamatan Jaringan',
      model: 'Problem Based Learning (PBL)',
      durasi: '6 JP',
      kegiatan: {
        pendahuluan: {
          durasi: '15 menit',
          deskripsi: [
            'Guru menampilkan kasus: "Perusahaan memiliki 4 departemen dengan jumlah karyawan berbeda-beda. Bagaimana membagi alamat IP agar efisien?"',
            'Siswa mencoba menjawab dan menyadari perlunya konsep subnetting.',
          ],
        },
        inti: {
          durasi: '100 menit',
          deskripsi: [
            'Fase Orientasi (10 menit): Guru menjelaskan pentingnya subnetting dalam perencanaan jaringan.',
            'Fase Pengorganisasian (10 menit): Siswa dibagi kelompok. Setiap kelompok mendapat skenario VLSM berbeda.',
            'Fase Penyelidikan (35 menit): Siswa mempelajari konsep IP Address, Subnetting, CIDR, dan VLSM menggunakan JarkomLab (modul 3). Siswa menggunakan kalkulator subnetting untuk verifikasi.',
            'Fase Pengembangan (25 menit): Setiap kelompok menyelesaikan studi kasus VLSM dan mempresentasikan hasilnya.',
            'Fase Evaluasi (20 menit): Siswa mengerjakan kuis singkat tentang subnetting.',
          ],
        },
        penutup: {
          durasi: '15 menit',
          deskripsi: [
            'Rangkuman bersama tentang langkah-langkah subnetting dan VLSM.',
            'Refleksi siswa.',
            'Tindak lanjut: persiapan proyek akhir merancang jaringan sekolah.',
          ],
        },
      },
      asesmen: 'Hasil presentasi VLSM + Kuis subnetting + Lembar kerja',
    },
    {
      pertemuan: '7-8',
      judul: 'Proyek Akhir: Rancang Jaringan Sekolah',
      model: 'Project Based Learning (PjBL)',
      durasi: '6 JP',
      kegiatan: {
        pendahuluan: {
          durasi: '15 menit',
          deskripsi: [
            'Guru menjelaskan proyek akhir: merancang jaringan untuk sekolah dengan spesifikasi tertentu.',
            'Guru memberikan rubrik penilaian proyek.',
            'Siswa membentuk kelompok dan mendistribusikan peran.',
          ],
        },
        inti: {
          durasi: '100 menit',
          deskripsi: [
            'Fase Rencana (20 menit): Kelompok mendiskusikan kebutuhan jaringan sekolah, menentukan peralatan yang dibutuhkan, memilih topologi, dan merencanakan skema pengalamatan IP.',
            'Fase Desain (30 menit): Siswa membuat rancangan jaringan lengkap: diagram topologi, tabel pengalamatan IP (VLSM), daftar peralatan, dan estimasi biaya.',
            'Fase Simulasi (25 menit): Siswa menggunakan simulator jaringan di JarkomLab untuk memverifikasi rancangan mereka.',
            'Fase Presentasi (25 menit): Setiap kelompok mempresentasikan rancangan jaringan mereka. Kelompok lain memberikan penilaian dan masukan.',
          ],
        },
        penutup: {
          durasi: '15 menit',
          deskripsi: [
            'Guru memberikan apresiasi atas kerja keras siswa.',
            'Refleksi menyeluruh tentang seluruh rangkaian pembelajaran.',
            'Guru menyampaikan harapan: "Ilmu yang dipelajari hari ini akan berguna saat kalian bekerja di industri jaringan."',
          ],
        },
      },
      asesmen: 'Rubrik proyek (diagram + VLSM + daftar peralatan + presentasi)',
    },
  ],

  asesmen: {
    diagnostik: {
      tujuan: 'Mengukur pemahaman awal siswa tentang jaringan komputer.',
      instrumen: 'Kuis 10 soal pilihan ganda tentang dasar jaringan.',
      pelaksanaan: 'Sebelum pertemuan pertama.',
      contohSoal: [
        'Perangkat yang bekerja pada Layer 2 OSI adalah... (A. Hub B. Router C. Switch D. Modem)',
        'Jaringan yang mencakup area gedung disebut... (A. WAN B. MAN C. LAN D. PAN)',
        'Kabel UTP menggunakan konektor... (A. RJ-11 B. RJ-45 C. SC D. ST)',
      ],
    },
    formatif: {
      tujuan: 'Memantau perkembangan pemahaman siswa selama proses pembelajaran.',
      instrumen: [
        'Observasi diskusi kelompok (rubrik)',
        'Lembar kerja siswa',
        'Jurnal refleksi',
        'Kuis singkat pertemuan',
      ],
      frekuensi: 'Setiap pertemuan',
    },
    sumatif: {
      tujuan: 'Mengukur pencapaian tujuan pembelajaran akhir.',
      instrumen: [
        'Post-test 15 soal HOTS (sudah ada di JarkomLab)',
        'Rubrik penilaian proyek akhir',
      ],
      ketentuan: 'Target ketuntasan: ≥70. Proyek dinilai dengan rubrik gabungan.',
      rubrikProyek: [
        { aspek: 'Kesesuaian Peralatan', skor: '25%', deskripsi: 'Peralatan yang dipilih sesuai kebutuhan dan pertimbangan teknis.' },
        { aspek: 'Ketepatan Topologi', skor: '25%', deskripsi: 'Topologi yang dipilih sesuai dengan skenario dan pertimbangan keandalan.' },
        { aspek: 'Akurasi Pengalamatan', skor: '30%', deskripsi: 'Skema VLSM benar, efisien, dan lengkap (network, broadcast, host range).' },
        { aspek: 'Kreativitas & Presentasi', skor: '20%', deskripsi: 'Rancangan inovatif, presentasi jelas, dan documentasi lengkap.' },
      ],
    },
  },

  pengayaanRemedial: {
    pengayaan: [
      'Konfigurasi router MikroTik menggunakan Winbox.',
      'Eksplorasi OSPF dan routing dinamis.',
      'Analisis keamanan jaringan: firewall rule dan ACL.',
      'Tantangan: hitung subnetting dalam waktu 1 menit.',
    ],
    remedial: [
      'Pengulangan materi dengan video pembelajaran di JarkomLab.',
      'Latihan tambahan soal subnetting tingkat dasar.',
      'Bimbingan individual dengan guru.',
      'Penggunaan flashcard untuk menghafal istilah jaringan.',
    ],
  },

  refleksi: {
    siswa: [
      'Apa hal baru yang saya pelajari hari ini?',
      'Bagian mana yang masih sulit saya pahami?',
      'Bagaimana saya bisa menggunakan ilmu ini dalam kehidupan sehari-hari?',
      'Apa yang ingin saya pelajari lebih lanjut?',
    ],
    guru: [
      'Apakah tujuan pembelajaran tercapai?',
      'Model pembelajaran mana yang paling efektif?',
      'Bagaimana tingkat partisipasi siswa?',
      'Apa yang perlu diperbaiki untuk pertemuan berikutnya?',
    ],
  },

  daftarPustaka: [
    'Purbo, O. W. (2021). Deep Learning: Strategi Mengajar di Era Digital. Elex Media Komputindo.',
    'Kementerian Pendidikan dan Kebudayaan. (2023). Panduan Pembelajaran Kurikulum Merdeka.',
    'Forouzan, B. A. (2013). Data Communications and Networking (5th ed.). McGraw-Hill.',
    'Cisco Systems. (2024). Cisco Networking Academy: Introduction to Networks.',
    'Standar TIA/EIA-568: Commercial Building Telecommunications Cabling Standard.',
    'IEEE 802.3: Ethernet Standards.',
  ],

  lampiran: {
    rubrikObservasi: {
      header: ['Aspek', 'Sangat Baik (4)', 'Baik (3)', 'Cukup (2)', 'Kurang (1)'],
      data: [
        ['Partisipasi Diskusi', 'Aktif berkontribusi', 'Sesekali berkontribusi', 'Pasif', 'Tidak berkontribusi'],
        ['Kerja Sama Tim', 'Sangat kooperatif', 'Kooperatif', 'Kurang kooperatif', 'Tidak kooperatif'],
        ['Penguasaan Materi', 'Menguasai seluruh materi', 'Menguasai sebagian besar', 'Menguasai sebagian', 'Belum menguasai'],
        ['Kemandirian', 'Sangat mandiri', 'Mandiri', 'Perlu bimbingan', 'Sangat bergantung'],
      ],
    },
    rubrikProyek: {
      header: ['Aspek', 'Skor', 'Deskripsi Penilaian'],
      data: [
        ['Kesesuaian Peralatan', '25%', 'Peralatan dipilih sesuai kebutuhan dan pertimbangan teknis.'],
        ['Ketepatan Topologi', '25%', 'Topologi sesuai skenario, dipertimbangkan keandalan dan biaya.'],
        ['Akurasi Pengalamatan', '30%', 'VLSM benar, efisien, lengkap (network, broadcast, host range).'],
        ['Kreativitas & Presentasi', '20%', 'Rancangan inovatif, presentasi jelas, dokumentasi lengkap.'],
      ],
    },
    lembarRefleksi: {
      header: ['No', 'Pertanyaan Refleksi', 'Jawaban Siswa'],
      data: [
        ['1', 'Apa hal baru yang saya pelajari hari ini?', ''],
        ['2', 'Bagian mana yang masih sulit?', ''],
        ['3', 'Bagaimana ilmu ini berguna untuk saya?', ''],
        ['4', 'Apa yang ingin saya pelajari lagi?', ''],
      ],
    },
  },
};
