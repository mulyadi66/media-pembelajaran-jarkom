import { Wifi, Radio, Cable } from 'lucide-react';

export const kasusMPK2 = [
  {
    id: 'mpk2_kasus1',
    icon: Wifi,
    tag: 'Kasus 1 - Instalasi Jaringan',
    title: 'Instalasi Jaringan Nirkabel Kantor',
    desc: 'Sebuah perusahaan swasta yang bergerak di bidang konsultan IT berencana memasang jaringan Wi-Fi untuk mendukung operasional kantor mereka. Gedung kantor terdiri dari 3 lantai dengan luas masing-masing sekitar 400 m². Saat ini jaringan masih menggunakan kabel LAN dan sering terjadi bottleneck karena mobilitas karyawan yang tinggi. Perusahaan ingin seluruh area kantor, termasuk ruang rapat dan lounge, mendapat coverage Wi-Fi yang stabil.',
    details: [
      'Gedung 3 lantai, masing-masing 400 m²',
      'Total ±120 karyawan tetap',
      'Kebutuhan bandwidth: 50 Mbps per lantai',
      'Dinding interior: drywall dan beton ringan',
      'Anggaran terbatas untuk 6-8 unit AP',
    ],
    tasks: [
      'Rencanakan posisi pemasangan Access Point (AP) di setiap lantai beserta alasannya.',
      'Pilih frekuensi yang tepat (2.4 GHz / 5 GHz / dual-band) untuk masing-masing area dan jelaskan pertimbangannya.',
      'Estimasi jumlah AP yang dibutuhkan berdasarkan luas gedung, material dinding, dan jumlah pengguna.',
      'Buat konfigurasi SSID (nama jaringan, keamanan, VLAN) yang sesuai untuk kebutuhan perusahaan.',
    ],
  },
  {
    id: 'mpk2_kasus2',
    icon: Cable,
    tag: 'Kasus 2 - Migrasi ke Fiber Optik',
    title: 'Migrasi ke Fiber Optik',
    desc: 'Sebuah sekolah menengah kejuruan ingin meng-upgrade infrastruktur jaringan mereka dari kabel UTP Cat5e menjadi fiber optik untuk menghubungkan 3 gedung utama: Gedung A (administrasi), Gedung B (teori), dan Gedung C (bengkel praktik). Jarak antar gedung berkisar 150-300 meter. Sekolah membutuhkan koneksi yang lebih stabil dan bandwidth besar untuk mendukung pembelajaran berbasis digital dan video conference.',
    details: [
      '3 gedung: A (admin), B (teori), C (bengkel)',
      'Jarak antar gedung: 150-300 meter',
      'Kebutuhan bandwidth: 1 Gbps backbone',
      'Melewati area luar gedung (exposed)',
      'Anggaran tersedia untuk media converter / switch fiber',
    ],
    tasks: [
      'Tentukan tipe fiber optik (single-mode / multi-mode) yang paling cocok untuk kondisi ini beserta alasannya.',
      'Rencanakan routing kabel fiber optik dari gedung A ke B dan A ke C dengan mempertimbangkan jalur aman.',
      'Hitung loss budget untuk setiap segmen kabel dengan asumsi panjang kabel, jumlah sambungan, dan margin sistem.',
      'Buat SOP instalasi fiber optik mulai dari persiapan alat, penarikan kabel, termination, hingga pengujian.',
    ],
  },
  {
    id: 'mpk2_kasus3',
    icon: Radio,
    tag: 'Kasus 3 - Implementasi VoIP',
    title: 'Implementasi VoIP',
    desc: 'Sebuah perusahaan rintisan (startup) di bidang teknologi dengan 50 karyawan ingin beralih dari telepon konvensional (PSTN) ke sistem VoIP untuk menekan biaya komunikasi. Perusahaan memiliki 2 lantai kantor, masing-masing 25 karyawan. Mereka membutuhkan fitur panggilan internal gratis, voicemail, konferensi, dan integrasi dengan CRM yang sudah berjalan.',
    details: [
      '50 karyawan tersebar di 2 lantai',
      'Kebutuhan: panggilan internal, voicemail, conference, integrasi CRM',
      'Jaringan LAN existing: Gigabit Ethernet',
      'QoS harus diaktifkan untuk prioritas trafik suara',
      'Anggaran tersedia untuk PBX server dan 50 IP Phone',
    ],
    tasks: [
      'Rancang arsitektur jaringan VoIP yang meliputi PBX, IP Phone, gateway, dan koneksi ke PSTN.',
      'Pilih perangkat VoIP (PBX server, IP Phone, gateway) yang sesuai dengan kebutuhan perusahaan.',
      'Hitung kebutuhan bandwidth untuk 50 karyawan dengan asumsi codec G.711 dan G.729.',
      'Buat konfigurasi ekstensi (extension number) untuk masing-masing karyawan beserta fitur yang diaktifkan.',
    ],
  },
];
