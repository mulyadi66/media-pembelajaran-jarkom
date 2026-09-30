export default [
  {
    id: 1,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Fungsi utama alamat IP pada sebuah jaringan adalah...',
    options: [
      'A. Memberi identitas unik agar perangkat dapat saling mengenali dan berkomunikasi',
      'B. Menentukan kecepatan fisik kabel jaringan',
      'C. Menyimpan seluruh data pengguna di dalam komputer',
      'D. Mengatur tampilan layar monitor',
      'E. Menghitung biaya listrik perangkat'
    ],
    answer: 0,
    explanation: 'Setiap perangkat yang terhubung ke jaringan memerlukan alamat IP yang unik agar dapat saling mengenali dan berkomunikasi satu sama lain.'
  },
  {
    id: 2,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Alamat IPv4 terdiri dari berapa bit?',
    options: [
      'A. 16 bit',
      'B. 32 bit',
      'C. 48 bit',
      'D. 64 bit',
      'E. 128 bit'
    ],
    answer: 1,
    explanation: 'IPv4 memakai 32 bit yang ditulis sebagai empat oktet desimal dipisahkan titik, misalnya 192.168.1.1.'
  },
  {
    id: 3,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Alamat IPv4 dipecah menjadi berapa oktet?',
    options: [
      'A. Satu oktet',
      'B. Dua oktet',
      'C. Tiga oktet',
      'D. Empat oktet',
      'E. Delapan oktet'
    ],
    answer: 2,
    explanation: 'Empat oktet, masing-masing berisi delapan bit, disusun dari oktet paling tingginilainya sampai oktet paling rendah.'
  },
  {
    id: 4,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Manakah contoh alamat IP privat di bawah ini?',
    options: [
      'A. 8.8.8.8',
      'B. 1.1.1.1',
      'C. 200.5.5.5',
      'D. 192.168.1.10',
      'E. 224.0.0.1'
    ],
    answer: 3,
    explanation: 'Rentang privat adalah 10.0.0.0/8, 172.16.0.0/12, dan 192.168.0.0/16. Alamat di luar rentang itu bersifat publik.'
  },
  {
    id: 5,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Peran default gateway pada konfigurasi jaringan adalah...',
    options: [
      'A. Menyimpan halaman web untuk mempercepat akses',
      'B. Mengatur printer yang terhubung ke jaringan',
      'C. Mengubah alamat IP menjadi alamat MAC',
      'D. Memeriksa kekuatan sinyal nirkabel',
      'E. Meneruskan data ke jaringan lain di luar jaringan lokal'
    ],
    answer: 4,
    explanation: 'Default gateway adalah pintu keluar dari jaringan lokal, yaitu router yang meneruskan data ke jaringan lain seperti internet.'
  },
  {
    id: 6,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Pada jaringan 192.168.1.0/24, alamat 192.168.1.255 berfungsi sebagai...',
    options: [
      'A. Alamat broadcast untuk seluruh node dalam jaringan',
      'B. Alamat gateway',
      'C. Alamat loopback',
      'D. Alamat network',
      'E. Alamat DNS publik'
    ],
    answer: 0,
    explanation: 'Alamat broadcast dipakai untuk mengirim data ke semua perangkat sekaligus dalam satu jaringan, bukan untuk komunikasi dua arah antar node.'
  },
  {
    id: 7,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Alamat 127.0.0.1 dikenal sebagai...',
    options: [
      'A. Broadcast address',
      'B. Loopback',
      'C. Default gateway',
      'D. Subnet mask',
      'E. MAC address'
    ],
    answer: 1,
    explanation: '127.0.0.1 adalah loopback, yaitu alamat yang selalu menunjuk ke komputer itu sendiri untuk menguji apakah perangkat jaringan berfungsi.'
  },
  {
    id: 8,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Manakah network address dari jaringan 192.168.1.10/24?',
    options: [
      'A. 192.168.1.10',
      'B. 192.168.1.255',
      'C. 192.168.1.0',
      'D. 192.168.0.10',
      'E. 192.168.1.1'
    ],
    answer: 2,
    explanation: 'Pada /24, dua puluh empat bit pertama menjadi bagian network. Semua host di oktet keempat bernilai nol membentuk network address.'
  },
  {
    id: 9,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Perbandingan antara IP address dan MAC address yang tepat adalah...',
    options: [
      'A. Keduanya identik dan selalu bernilai sama',
      'B. IP address bekerja di Layer 2, MAC address di Layer 3',
      'C. MAC address hanya dipakai pada jaringan nirkabel',
      'D. IP address bekerja di Layer 3, MAC address di Layer 2',
      'E. IP address hanya dipakai pada jaringan kabel'
    ],
    answer: 3,
    explanation: 'IP address bekerja pada Layer 3 untuk pengalamatan logis antar jaringan, sedangkan MAC address bekerja pada Layer 2 dalam satu segmen.'
  },
  {
    id: 10,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Subnet mask 255.255.255.0 dalam notasi CIDR ditulis sebagai...',
    options: [
      'A. /8',
      'B. /16',
      'C. /30',
      'D. /32',
      'E. /24'
    ],
    answer: 4,
    explanation: 'Jumlah angka satu pada mask menunjukkan jumlah bit network. 255.255.255.0 memiliki dua puluh empat bit satu sehingga ditulis /24.'
  },
  {
    id: 11,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Subnet mask 255.255.0.0 dalam notasi CIDR adalah...',
    options: [
      'A. /8',
      'B. /16',
      'C. /20',
      'D. /24',
      'E. /28'
    ],
    answer: 0,
    explanation: 'Mask 255.255.0.0 memiliki enam belas bit satu pada dua oktet pertama, sehingga notasi CIDR-nya adalah /16.'
  },
  {
    id: 12,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Berapa jumlah host yang bisa dipakai pada jaringan dengan prefix /25?',
    options: [
      'A. 30 host',
      'B. 62 host',
      'C. 126 host',
      'D. 254 host',
      'E. 510 host'
    ],
    answer: 1,
    explanation: 'Tersedia tujuh bit host sehingga ada 2 pangkat 7 = 128 alamat. Dikurangi network address dan broadcast address menyisakan 126 host.'
  },
  {
    id: 13,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Subnet mask 255.255.255.224 setara dengan prefix...',
    options: [
      'A. /24',
      'B. /25',
      'C. /26',
      'D. /27',
      'E. /28'
    ],
    answer: 2,
    explanation: 'Oktet keempat pada 224 adalah 11100000 biner, sehingga ada tiga bit satu tambahan. Totalnya 24 tambah 3 = 27 bit, jadi prefix /27.'
  },
  {
    id: 14,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Network address subnet kedua pada jaringan 192.168.1.0/26 adalah...',
    options: [
      'A. 192.168.1.0',
      'B. 192.168.1.128',
      'C. 192.168.1.192',
      'D. 192.168.1.64',
      'E. 192.168.1.255'
    ],
    answer: 3,
    explanation: 'Pada /26 tiap subnet berukuran 64 alamat. Subnet pertama dimulai dari 0, sehingga subnet kedua dimulai pada 64 yaitu 192.168.1.64.'
  },
  {
    id: 15,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Jaringan 10.0.0.0/8 dibagi menjadi dua subnet sama besar. Prefix subnet tersebut adalah...',
    options: [
      'A. /10',
      'B. /11',
      'C. /12',
      'D. /16',
      'E. /9'
    ],
    answer: 4,
    explanation: 'Membagi menjadi dua subnet sama besar berarti meminjam satu bit. Delapan bit awal ditambah satu bit tersebut menjadi sembilan bit, sehingga prefixnya /9.'
  },
  {
    id: 16,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Default subnet mask untuk alamat IP kelas A adalah...',
    options: [
      'A. 255.0.0.0',
      'B. 255.255.0.0',
      'C. 255.255.255.0',
      'D. 255.255.255.255',
      'E. 0.0.0.0'
    ],
    answer: 0,
    explanation: 'Sistem classful memberi mask 255.0.0.0 untuk kelas A, 255.255.0.0 untuk kelas B, dan 255.255.255.0 untuk kelas C.'
  },
  {
    id: 17,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Alamat 172.16.5.10/24 berada pada network address...',
    options: [
      'A. 172.16.0.0',
      'B. 172.16.5.0',
      'C. 172.16.0.10',
      'D. 172.0.5.0',
      'E. 172.16.5.255'
    ],
    answer: 1,
    explanation: 'Dengan prefix /24, tiga oktet pertama menentukan network. Oktet keempat berisi identitas host, sehingga network address-nya adalah 172.16.5.0.'
  },
  {
    id: 18,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Berapa jumlah subnet yang terbentuk dari 192.168.1.0/24 bila dipecah dengan mask /27?',
    options: [
      'A. 4 subnet',
      'B. 16 subnet',
      'C. 8 subnet',
      'D. 32 subnet',
      'E. 64 subnet'
    ],
    answer: 2,
    explanation: 'Tiga bit dipinjam dari bagian host, sehingga jumlah subnet adalah 2 pangkat 3 = 8 subnet, masing-masing berkapasitas 30 host.'
  },
  {
    id: 19,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Alamat yang paling lazim dipakai sebagai default gateway pada jaringan 192.168.5.0/26 adalah...',
    options: [
      'A. 192.168.5.0',
      'B. 192.168.5.63',
      'C. 192.168.5.1',
      'D. 192.168.5.64',
      'E. 192.168.255.1'
    ],
    answer: 3,
    explanation: 'Subnet /26 berada pada rentang 0 sampai 63, dan alamat 192.168.5.1 adalah host pertama yang lazim dipakai router sebagai default gateway.'
  },
  {
    id: 20,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Subnet mask 255.255.255.128 setara dengan prefix...',
    options: [
      'A. /26',
      'B. /27',
      'C. /28',
      'D. /29',
      'E. /25'
    ],
    answer: 4,
    explanation: 'Oktet keempat pada 128 adalah 10000000 biner, ada satu bit satu tambahan. Totalnya 24 tambah 1 = 25 bit sehingga prefixnya /25.'
  },
  {
    id: 21,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Sebuah departemen memerlukan 50 host dalam satu jaringan. Prefix terkecil yang masih muat adalah...',
    options: [
      'A. /24',
      'B. /25',
      'C. /26',
      'D. /27',
      'E. /28'
    ],
    answer: 0,
    explanation: 'Butuh 52 alamat karena network dan broadcast. Pada /26 tersedia 64 alamat sehingga 62 host, cukup untuk 50. Prefix /27 hanya menyisakan 30 host.'
  },
  {
    id: 22,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Jaringan 192.168.0.0/22 dipecah menjadi subnet /27. Jumlah subnet yang dihasilkan adalah...',
    options: [
      'A. 8 subnet',
      'B. 16 subnet',
      'C. 32 subnet',
      'D. 64 subnet',
      'E. 128 subnet'
    ],
    answer: 1,
    explanation: 'Selisih prefix 27 dikurangi 22 = 5 bit, sehingga jumlah subnet adalah 2 pangkat 5 = 32 subnet.'
  },
  {
    id: 23,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Network address dari alamat 172.16.35.20/22 adalah...',
    options: [
      'A. 172.16.35.0',
      'B. 172.16.32.4',
      'C. 172.16.32.0',
      'D. 172.16.0.0',
      'E. 172.16.34.0'
    ],
    answer: 2,
    explanation: 'Pada /22, oktet ketiga di-mask dengan 252 sehingga 35 berubah menjadi 32. Network address-nya adalah 172.16.32.0.'
  },
  {
    id: 24,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Perusahaan punya 100 host. Dibagi dari 192.168.1.0/24 dengan VLSM, prefix yang tepat untuk blok 100 host adalah...',
    options: [
      'A. /25',
      'B. /26',
      'C. /27',
      'D. /28',
      'E. /29'
    ],
    answer: 3,
    explanation: 'Butuh 102 alamat. Prefix /25 menyediakan 128 alamat dengan 126 host, sehingga cukup. Prefix /26 hanya menyisakan 62 host.'
  },
  {
    id: 25,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Rancang VLSM dari 192.168.1.0/24 untuk kebutuhan 50 host, 25 host, dan 5 host. Prefix yang tepat berturut-turut adalah...',
    options: [
      'A. /26, /27, /29',
      'B. /25, /27, /28',
      'C. /26, /28, /30',
      'D. /24, /27, /29',
      'E. /27, /28, /30'
    ],
    answer: 4,
    explanation: '50 host butuh 52 alamat jadi /26, 25 host butuh 26 alamat jadi /27, dan 5 host butuh 6 alamat jadi /29. Urutannya dari besar ke kecil.'
  },
  {
    id: 26,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Broadcast address subnet keempat dari pembagian 192.168.1.0/26 adalah...',
    options: [
      'A. 192.168.1.255',
      'B. 192.168.1.63',
      'C. 192.168.1.127',
      'D. 192.168.1.191',
      'E. 192.168.1.192'
    ],
    answer: 0,
    explanation: 'Setiap subnet /26 berukuran 64 alamat: 0-63, 64-127, 128-191, dan 192-255. Subnet keempat berakhir pada 255.'
  },
  {
    id: 27,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Subnet mask 255.255.252.0 dalam notasi CIDR adalah...',
    options: [
      'A. /20',
      'B. /21',
      'C. /22',
      'D. /23',
      'E. /24'
    ],
    answer: 1,
    explanation: 'Oktet ketiga pada 252 adalah 11111100, ada enam bit satu. Dengan 16 bit dari dua oktet pertama totalnya 22 sehingga prefixnya /22.'
  },
  {
    id: 28,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Jaringan 10.1.1.1/22 memiliki network address...',
    options: [
      'A. 10.1.1.0',
      'B. 10.1.0.0',
      'C. 10.0.0.0',
      'D. 10.1.4.0',
      'E. 10.1.2.0'
    ],
    answer: 2,
    explanation: 'Pada /22, dua bit terakhir oktet ketiga diabaikan. Oktet ketiga bernilai 1 dengan dua bit diabaikan menjadi 0, sehingga network address-nya 10.1.0.0.'
  },
  {
    id: 29,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Tiga komputer berada pada 192.168.0.10/24, 192.168.0.11/24, dan 192.168.0.12/24. Ketiganya dapat saling berkomunikasi langsung karena...',
    options: [
      'A. Alamat oktet keempat mereka berbeda',
      'B. Mereka berada pada network address dan subnet mask yang sama',
      'C. Alamat default gateway mereka sama',
      'D. Merek kartu ethernet mereka sama',
      'E. Subnet mask mereka sengaja dibuat berbeda'
    ],
    answer: 3,
    explanation: 'Perangkat dapat berkomunikasi langsung bila network address dan subnet mask-nya sama. Oktet keempat hanya membedakan identitas host dalam satu jaringan.'
  },
  {
    id: 30,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Jaringan 172.16.4.0/24 merupakan subnet ke berapa dari pembagian 172.16.0.0/16 dengan mask /24?',
    options: [
      'A. Subnet kedua',
      'B. Subnet ketiga',
      'C. Subnet keempat',
      'D. Subnet kedelapan',
      'E. Subnet kelima'
    ],
    answer: 4,
    explanation: 'Dengan mask /24 tiap subnet bertambah satu pada oktet ketiga, dimulai dari 0. Oktet ketiga bernilai 4 menandakan subnet kelima.'
  }
];
