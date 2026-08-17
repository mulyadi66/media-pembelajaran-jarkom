import { Code2, Globe, Brain } from 'lucide-react';

export const kasusKKAXI = [
  {
    id: 'kka_xi_kasus1',
    icon: Globe,
    tag: 'Kasus 1 — Literasi Digital',
    title: 'Tantangan Informasi Hoaks di Media Sosial',
    desc: 'Seorang siswa SMK menemukan berita viral di grup WhatsApp yang menyatakan bahwa "semua makanan kemasan mengandung zat berbahaya". Berita ini menyebabkan kepanikan di kalangan warga sekolah.',
    details: [
      'Berita tersebut berasal dari akun tidak dikenal tanpa sumber resmi',
      'Sudah dibagikan ke 15 grup WhatsApp dan mendapat ratusan转发',
      'Beberapa orang tua siswa mulai memboikot makanan kantin sekolah',
      'Kepala sekolah meminta bantuan siswa TI untuk mengecek kebenaran berita'
    ],
    tasks: [
      'Analisis mengapa berita tersebut dapat dengan cepat menyebar di media sosial',
      'Buatlah langkah-langkah verifikasi fakta (fact-checking) untuk mengecek kebenaran berita tersebut',
      'Susunlah edukasi singkat tentang literasi digital yang bisa disampaikan ke seluruh siswa',
      'Tulislah langkah-langkah pencegahan agar siswa tidak mudah termakan hoaks'
    ]
  },
  {
    id: 'kka_xi_kasus2',
    icon: Brain,
    tag: 'Kasus 2 — Algoritma & Pemograman',
    title: 'Optimalisasi Jadwal Piket Kelas',
    desc: 'Seorang wali kelas meminta bantuan siswa untuk membuat program yang menghasilkan jadwal piket otomatis untuk 30 siswa dalam 6 hari (Senin-Sabtu), di mana setiap siswa piket tepat 1 kali dalam 1 siklus.',
    details: [
      'Terdapat 30 siswa yang harus dibagi ke 6 hari',
      'Setiap hari harus ada 5 siswa yang bertugas',
      'Tidak boleh ada siswa yang piket lebih dari 1 kali dalam 1 siklus',
      'Program harus bisa dijalankan ulang untuk menghasilkan jadwal baru (acak)'
    ],
    tasks: [
      'Buatlah pseudocode untuk algoritma pembagian jadwal piket tersebut',
      'Jelaskan struktur data apa yang paling cocok untuk menampung data siswa dan jadwal',
      'Implementasikan algoritma tersebut dalam bahasa Python (atau pseudocode detail)',
      'Bagaimana jika ada 2 siswa yang izin tidak bisa piket di hari tertentu? Modifikasi algoritmanya'
    ]
  },
  {
    id: 'kka_xi_kasus3',
    icon: Code2,
    tag: 'Kasus 3 — Pengembangan Web',
    title: 'Membangun Website Profil Sekolah yang Responsif',
    desc: 'Sekolah ingin membuat website profil baru yang dapat diakses dengan baik dari komputer desktop, tablet, dan smartphone. Website harus menampilkan informasi sekolah, galeri foto, dan form kontak.',
    details: [
      'Target pengguna: orang tua siswa, calon siswa, dan masyarakat umum',
      'Harus tampil optimal di layar 320px (HP) hingga 1920px (desktop)',
      'Form kontak harus validasi di sisi klien sebelum dikirim',
      'Galeri foto harus bisa dilihat dalam format grid yang responsif'
    ],
    tasks: [
      'Rencanakan struktur halaman (wireframe deskriptif) untuk homepage, profil, galeri, dan kontak',
      'Bagaimana menerapkan responsive design menggunakan CSS media queries dan flexbox/grid?',
      'Buatlah kode HTML + CSS untuk satu bagian (misalnya: bagian galeri) yang responsif',
      'Jelaskan bagaimana JavaScript dapat digunakan untuk validasi form kontak dan interaksi galeri'
    ]
  },
];
