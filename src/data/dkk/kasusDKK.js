import { Globe, Shield, Radio } from 'lucide-react';

export const kasusDKK = [
  {
    id: 'dkk_kasus1',
    icon: Globe,
    tag: 'Kasus 1 - Karir TJKT',
    title: 'Perencanaan Karir di Bidang TKJT',
    desc: 'Seorang lulusan SMK TJKT ingin membangun karir di bidang jaringan komputer dan telekomunikasi.',
    details: [
      'Lulusan baru SMK dengan kompetensi dasar jaringan',
      'Target: menjadi network engineer dalam 3 tahun',
      'Budget terbatas untuk sertifikasi',
      'Ingin bekerja di ISP atau perusahaan IT'
    ],
    tasks: [
      'Buat rencana karir 3 tahun (target, sertifikasi, pengalaman)',
      'Sertifikasi apa yang harus diambil dan urutannya?',
      'Keterampilan teknis apa yang harus dikuasai?',
      'Buatlah CV singkat untuk posisi teknisi jaringan'
    ]
  },
  {
    id: 'dkk_kasus2',
    icon: Shield,
    tag: 'Kasus 2 - K3LH Lab',
    title: 'Penerapan K3LH di Laboratorium Komputer',
    desc: 'Lab komputer sekolah sering mengalami masalah listrik dan kebersihan yang mengganggu pembelajaran.',
    details: [
      '5 PC mati mendadak karena tegangan tidak stabil',
      'Kabel berserakan di lantai',
      'Tidak ada grounding yang baik',
      'Tidak ada APD dan kotak P3K'
    ],
    tasks: [
      'Analisis penyebab masalah listrik di lab tersebut',
      'Buat prosedur K3LH untuk lab komputer',
      'Rekomendasi perbaikan instalasi listrik dan grounding',
      'Buat daftar APD yang harus tersedia di lab'
    ]
  },
  {
    id: 'dkk_kasus3',
    icon: Radio,
    tag: 'Kasus 3 - Instalasi Jaringan',
    title: 'Pemilihan Media Transmisi untuk Kantor',
    desc: 'Perusahaan rintisan (startup) ingin membangun jaringan untuk kantor baru mereka.',
    details: [
      'Kantor 2 lantai, jarak antar lantai 5 meter',
      '30 PC, 5 server, Wi-Fi untuk tamu',
      'Budget menengah, butuh kecepatan > 1 Gbps backbone',
      'Masa depan: kemungkinan ekspansi ke 3 lantai'
    ],
    tasks: [
      'Tentukan media transmisi untuk backbone antar lantai',
      'Tentukan media transmisi untuk koneksi per PC',
      'Buat justifikasi pemilihan media transmisi',
      'Gambarkan diagram jaringan sederhana'
    ]
  },
];
