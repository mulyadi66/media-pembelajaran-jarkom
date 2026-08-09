import { Brain, Cpu, Database } from 'lucide-react';

export const kasusKKA = [
  {
    id: 'kka_kasus1',
    icon: Brain,
    tag: 'Kasus 1 - Etika Kecerdasan Artifisial',
    title: 'AI Deepfake di Lingkungan Sekolah',
    desc: 'Seorang siswa menemukan video deepfake dirinya yang diedit memalukan dan disebarkan di grup WhatsApp kelas.',
    details: [
      'Video dibuat menggunakan aplikasi AI deepfake tanpa izin',
      'Konten disebarkan cepat ke grup kelas dan sekolah',
      'Korban mengalami tekanan psikologis dan malu',
      'Pelaku menganggap ini hanya lelucon'
    ],
    tasks: [
      'Analisis pelanggaran etika dan legal apa saja yang terjadi dalam kasus ini',
      'Jelaskan langkah verifikasi untuk mendeteksi konten deepfake',
      'Buat langkah penanganan yang tepat bagi korban dan pihak sekolah',
      'Susun aturan kelas mengenai penggunaan AI dalam konten media'
    ]
  },
  {
    id: 'kka_kasus2',
    icon: Cpu,
    tag: 'Kasus 2 - Berpikir Komputasional',
    title: 'Optimasi Antrean Kantin Sekolah',
    desc: 'Antrean di kantin sekolah selalu panjang saat jam istirahat sehingga banyak siswa kehabisan waktu istirahat.',
    details: [
      'Jam istirahat hanya 20 menit',
      '3 lapak dengan menu berbeda tapi antrean tidak merata',
      'Sistem pembayaran manual membuat transaksi lambat',
      'Pesanan disiapkan setelah pembayaran selesai'
    ],
    tasks: [
      'Identifikasi masalah dan breakdown menjadi bagian-bagian kecil (decomposition)',
      'Rancang algoritma sistem antrean baru dalam bentuk pseudocode',
      'Gunakan pola (pattern) dari data antrean untuk usulan solusi',
      'Jelaskan bagaimana solusi tersebut menghemat waktu antrean'
    ]
  },
  {
    id: 'kka_kasus3',
    icon: Database,
    tag: 'Kasus 3 - Analisis Data',
    title: 'Analisis Nilai Ujian Digital',
    desc: 'Guru ingin mengetahui efektivitas pembelajaran daring vs luring dengan menganalisis data nilai kelas.',
    details: [
      'Data nilai 36 siswa untuk 2 metode pembelajaran',
      'Guru ingin tahu rata-rata, nilai tengah, dan nilai yang paling sering muncul',
      'Perlu visualisasi agar mudah dipahami siswa',
      'Kesimpulan digunakan untuk memilih metode semester depan'
    ],
    tasks: [
      'Jelaskan jenis data yang digunakan dan alat yang cocok untuk mengolahnya',
      'Hitung mean, median, dan modus dari data yang diberikan',
      'Pilih jenis visualisasi yang tepat dan jelaskan alasannya',
      'Tulis kesimpulan dan rekomendasi berdasarkan hasil analisis'
    ]
  },
];
