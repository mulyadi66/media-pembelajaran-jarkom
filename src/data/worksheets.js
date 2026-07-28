export const worksheetData = {
  modul1: {
    title: 'Modul 1: Peralatan Jaringan',
    questions: [
      {
        id: 1,
        type: 'essay',
        question: 'Sebuah kantor memiliki 100 PC. Jelaskan peralatan jaringan apa saja yang dibutuhkan dan mengapa. Sertakan minimal 5 peralatan.',
        hint: 'Pikirkan: perangkat penghubung, kabel, keamanan, akses wireless.'
      },
      {
        id: 2,
        type: 'essay',
        question: 'Jelaskan perbedaan antara Hub dan Switch dari segi cara kerja, OSI layer, dan efisiensi. Mengapa Switch lebih baik?',
        hint: 'Bandingkan: broadcast vs unicast, collision domain, layer OSI.'
      },
      {
        id: 3,
        type: 'essay',
        question: 'Suatu jaringan sekolah membutuhkan konektivitas internet dan Wi-Fi untuk 50 siswa + 20 guru. Rancanglah peralatan jaringan yang dibutuhkan beserta alasannya.',
        hint: 'Pertimbangkan: kapasitas pengguna, bandwidth, keamanan, biaya.'
      },
      {
        id: 4,
        type: 'essay',
        question: 'Apa perbedaan kabel UTP Straight-through dan Crossover? Kapan masing-masing digunakan? Jelaskan berdasarkan standar TIA/EIA-568.',
        hint: 'Lihat: perbedaan warna kabel, jenis perangkat yang dihubungkan.'
      },
      {
        id: 5,
        type: 'essay',
        question: 'Bandingkan teknologi Ethernet kabel (Fast/Gigabit) dengan Wi-Fi (802.11ac/ax) dari segi kecepatan, jarak, keamanan, dan keandalan. Kapan harus menggunakan masing-masing?',
        hint: 'Pertimbangkan: kecepatan, interferensi, keamanan data, biaya.'
      },
      {
        id: 6,
        type: 'essay',
        question: 'Jelaskan fungsi Firewall dalam sebuah jaringan. Apa yang terjadi jika jaringan TIDAK menggunakan Firewall? Berikan contoh ancaman.',
        hint: 'Pikirkan: serangan DDoS, malware, akses tidak sah.'
      },
      {
        id: 7,
        type: 'essay',
        question: 'Suatu perusahaan ingin membangun jaringan kantor baru. Buatlah rekomendasi peralatan lengkap beserta estimasi jumlah untuk jaringan dengan 3 lantai, masing-masing 30 PC.',
        hint: 'Pertimbangkan: router, switch per lantai, patch panel, kabel, AP.'
      },
      {
        id: 8,
        type: 'essay',
        question: 'Apa itu Fiber Optik? Jelaskan keunggulan dan kekurangannya dibanding kabel UTP. Untuk skenario jaringan apa Fiber Optik paling cocok?',
        hint: 'Bandingkan: kecepatan, jarak, gangguan elektromagnetik, biaya.'
      }
    ]
  },
  modul2: {
    title: 'Modul 2: Topologi Jaringan',
    questions: [
      {
        id: 1,
        type: 'essay',
        question: 'Gambar dan jelaskan 4 topologi jaringan utama (Bus, Star, Ring, Mesh). Untuk masing-masing, sebutkan kelebihan, kekurangan, dan contoh penggunaan.',
        hint: 'Gunakan tabel perbandingan untuk memudahkan.'
      },
      {
        id: 2,
        type: 'essay',
        question: 'Sebuah sekolah ingin membangun jaringan untuk 6 lab komputer + perpustakaan + 3 ruang guru. Topologi apa yang paling cocok? Jelaskan alasannya dan gambarkan skema jaringannya.',
        hint: 'Pertimbangkan: skalabilitas, biaya, kemudahan maintenance.'
      },
      {
        id: 3,
        type: 'essay',
        question: 'Apa perbedaan antara topologi fisik dan topologi logika? Berikan contoh kasus di mana keduanya berbeda.',
        hint: 'Contoh: Token Ring bisa fisik star tapi logika ring.'
      },
      {
        id: 4,
        type: 'essay',
        question: 'Bandingkan topologi Tree dan Hybrid dari segi: struktur, skalabilitas, biaya, dan kompleksitas. Kapan harus menggunakan masing-masing?',
        hint: 'Tree = hierarkis, Hybrid = fleksibel campuran.'
      },
      {
        id: 5,
        type: 'essay',
        question: 'Jelaskan mengapa topologi Mesh cocok untuk backbone Internet tetapi jarang digunakan untuk jaringan lokal kantor.',
        hint: 'Pertimbangkan: jumlah kabel, biaya, redundansi, kebutuhan.'
      },
      {
        id: 6,
        type: 'essay',
        question: 'Suatu perusahaan memiliki kantor pusat dan 3 cabang. Rancanglah skema jaringan yang menghubungkan ketiganya. Topologi apa yang digunakan untuk masing-masing level?',
        hint: 'Pertimbangkan: WAN antar cabang, LAN di dalam kantor.'
      },
      {
        id: 7,
        type: 'essay',
        question: 'Apa itu LAN dan WAN? Bandingkan keduanya dari segi cakupan geografis, kecepatan, biaya, dan contoh penggunaan.',
        hint: 'LAN = lokal, WAN = luas.'
      },
      {
        id: 8,
        type: 'essay',
        question: 'Seorang teknisi menemukan bahwa satu switch di ruang server mengalami overheating. Analisis dampaknya terhadap jaringan berdasarkan topologi yang digunakan, dan usulkan solusi.',
        hint: 'Pikirkan: single point of failure, backup, redundant power.'
      }
    ]
  },
  modul3: {
    title: 'Modul 3: Pengalamatan Jaringan',
    questions: [
      {
        id: 1,
        type: 'essay',
        question: 'Jelaskan langkah-langkah melakukan subnetting pada jaringan 192.168.1.0/24 menjadi 4 subnet. Hitung: subnet mask baru, jumlah host per subnet, network address, broadcast, first & last host untuk setiap subnet.',
        hint: 'Pinjam 2 bit untuk 4 subnet → /26'
      },
      {
        id: 2,
        type: 'essay',
        question: 'Sebuah perusahaan memiliki 4 departemen yang membutuhkan: HRD (30 PC), Marketing (60 PC), IT (15 PC), Finance (5 PC). Diberikan jaringan 192.168.10.0/24, rancanglah alokasi VLSM untuk keempat departemen.',
        hint: 'Urutkan dari terbesar: Marketing(60) → HRD(30) → IT(15) → Finance(5)'
      },
      {
        id: 3,
        type: 'essay',
        question: 'Apa perbedaan IPv4 dan IPv6? Jelaskan kenapa dunia perlu beralih ke IPv6 meskipun IPv4 masih bisa digunakan dengan NAT.',
        hint: 'Pertimbangkan: jumlah alamat, keamanan, mobilitas, header complexity.'
      },
      {
        id: 4,
        type: 'essay',
        question: 'Jelaskan konsep NAT (Network Address Translation). Mengapa NAT sangat penting untuk jaringan saat ini? Gambarkan bagaimana NAT bekerja.',
        hint: 'Pikirkan: kehabisan IPv4, private IP sharing, PAT overload.'
      },
      {
        id: 5,
        type: 'essay',
        question: 'Sebuah ISP memberikan blok IP 203.0.113.0/27. Hitung berapa jumlah subnet yang bisa dibuat, berapa host per subnet, dan tentukan network address serta broadcast untuk setiap subnet.',
        hint: '/27 = 32 alamat per subnet, 30 usable host'
      },
      {
        id: 6,
        type: 'essay',
        question: 'Apa itu Default Gateway dan DNS? Jelaskan peran masing-masing dalam komunikasi jaringan. Apa yang terjadi jika DNS server tidak berfungsi?',
        hint: 'Gateway = pintu keluar jaringan, DNS = penerjemah nama domain.'
      },
      {
        id: 7,
        type: 'essay',
        question: 'Bandingkan Classful Addressing dan CIDR (Classless Inter-Domain Routing). Mengapa CIDR lebih fleksibel? Berikan contoh kasus.',
        hint: 'Classful = rigid (A/B/C), CIDR = fleksibel (/n).'
      },
      {
        id: 8,
        type: 'essay',
        question: 'Sebuah jaringan 10.0.0.0/8 akan dibagi menjadi beberapa kantor cabang di seluruh Indonesia. Buatlah rencana pengalamatan untuk 5 kota besar, masing-masing dengan 3 subnet untuk: kantor, gudang, dan karyawan remote.',
        hint: 'Gunakan subnetting bertingkat: /8 → /16 per kota → /24 per fungsi.'
      }
    ]
  }
};
