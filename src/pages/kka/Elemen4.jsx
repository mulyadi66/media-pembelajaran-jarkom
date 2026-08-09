import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { BarChart3, Database, Filter, PieChart, LineChart, Star, CheckSquare, Table2 } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '4.1 Konsep Analisis Data' },
  { id: 's2', label: '4.2 Sumber & Pengumpulan Data' },
  { id: 's3', label: '4.3 Pengolahan Data & Statistik Dasar' },
  { id: 's4', label: '4.4 Visualisasi Data' },
  { id: 's5', label: '4.5 Interpretasi & Pengambilan Keputusan' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Elemen4() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_elemen4'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_elemen4" sections={sections} />

      <MateriCard icon={BarChart3} title="4.1 Konsep Analisis Data">
        <p><strong>Analisis data</strong> adalah proses mengumpulkan, membersihkan, mengolah, dan menafsirkan data untuk menemukan pola, menarik kesimpulan, dan mendukung pengambilan keputusan.</p>
        <div className="info-box">
          <strong><Star size={14} /> Alur Analisis Data:</strong>
          <ol>
            <li><strong>Mengumpulkan</strong> — mengambil data dari sumber yang tepat</li>
            <li><strong>Membersihkan</strong> — menghapus data duplikat, salah, atau tidak lengkap</li>
            <li><strong>Mengolah</strong> — menghitung, mengelompokkan, mengurutkan</li>
            <li><strong>Menganalisis</strong> — mencari pola dan hubungan</li>
            <li><strong>Menyajikan</strong> — membuat kesimpulan & visualisasi</li>
          </ol>
        </div>
        <p>Contoh sederhana: dari daftar nilai ulangan kelas, kita bisa menganalisis berapa siswa yang sudah tuntas dan topik mana yang paling banyak salah.</p>
      </MateriCard>

      <MateriCard icon={Database} title="4.2 Sumber & Pengumpulan Data">
        <h3>A. Jenis Data</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Jenis</th><th>Penjelasan</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>Data Kualitatif</strong></td><td>Data deskriptif, bukan angka</td><td>Warna favorit, pendapat siswa, jenis kelamin</td></tr>
              <tr><td><strong>Data Kuantitatif</strong></td><td>Data berupa angka yang bisa dihitung</td><td>Tinggi badan, nilai ujian, jumlah pengunjung</td></tr>
            </tbody>
          </table>
        </div>
        <h3>B. Metode Pengumpulan Data</h3>
        <ul>
          <li><strong>Kuesioner / angket</strong> — kumpulkan jawaban banyak responden</li>
          <li><strong>Observasi</strong> — mengamati langsung fenomena</li>
          <li><strong>Wawancara</strong> — tanya jawab mendalam</li>
          <li><strong>Studi dokumen</strong> — data dari laporan, arsip, website resmi</li>
        </ul>
        <div className="info-box warning">
          <strong>Hati-hati:</strong> Data harus akurat dan terpercaya. Data yang salah akan menghasilkan kesimpulan yang menyesatkan ("garbage in, garbage out").
        </div>
      </MateriCard>

      <MateriCard icon={Filter} title="4.3 Pengolahan Data & Statistik Dasar">
        <p>Data mentah perlu diolah sebelum dianalisis. Pengolahan dilakukan dengan spreadsheet seperti <strong>Microsoft Excel</strong> atau <strong>Google Sheets</strong>.</p>
        <h3>A. Operasi Pengolahan Dasar</h3>
        <ul>
          <li><strong>Sorting</strong> — mengurutkan data (naik / turun)</li>
          <li><strong>Filtering</strong> — menyaring data berdasarkan kriteria</li>
          <li><strong>Pivot table</strong> — merangkum data menjadi ringkasan</li>
          <li><strong>Fungsi statistik</strong> — sum, average, count, max, min</li>
        </ul>
        <h3>B. Ukuran Statistik Dasar</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Ukuran</th><th>Rumus</th><th>Makna</th></tr></thead>
            <tbody>
              <tr><td><strong>Mean (rata-rata)</strong></td><td>jumlah data ÷ banyak data</td><td>Nilai tengah secara aritmatik</td></tr>
              <tr><td><strong>Median</strong></td><td>nilai tengah data terurut</td><td>Membagi data dua bagian sama</td></tr>
              <tr><td><strong>Modus</strong></td><td>nilai yang paling sering muncul</td><td>Nilai paling umum</td></tr>
              <tr><td><strong>Frekuensi</strong></td><td>jumlah kemunculan</td><td>Seberapa sering suatu nilai muncul</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Latihan:</strong>
          <p>Data nilai: 60, 70, 80, 70, 90. Hitunglah mean, median, dan modusnya.</p>
        </div>
      </MateriCard>

      <MateriCard icon={PieChart} title="4.4 Visualisasi Data">
        <p><strong>Visualisasi data</strong> mengubah angka menjadi grafik agar mudah dipahami. Pemilihan jenis grafik yang tepat sangat penting.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Jenis Grafik</th><th>Paling Cocok Untuk</th></tr></thead>
            <tbody>
              <tr><td><strong>Diagram batang</strong></td><td>Membandingkan antar kategori (misal nilai per kelas)</td></tr>
              <tr><td><strong>Diagram garis</strong></td><td>Menunjukkan tren perubahan waktu (misal penjualan bulanan)</td></tr>
              <tr><td><strong>Diagram lingkaran</strong></td><td>Menunjukkan proporsi / persentase bagian</td></tr>
              <tr><td><strong>Scatter plot</strong></td><td>Menunjukkan hubungan dua variabel</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box">
          <strong><LineChart size={14} /> Tips Visualisasi:</strong>
          <ul>
            <li>Beri judul dan label sumbu yang jelas</li>
            <li>Gunakan warna yang kontras dan konsisten</li>
            <li>Jangan membesar-besarkan skala agar tidak menyesatkan</li>
          </ul>
        </div>
      </MateriCard>

      <MateriCard icon={Table2} title="4.5 Interpretasi & Pengambilan Keputusan">
        <p><strong>Interpretasi</strong> adalah membaca makna dari data dan visualisasi yang sudah dibuat, lalu menyusun kesimpulan.</p>
        <h3>Contoh Kasus — Penjualan Bakso Sekolah:</h3>
        <p>Data penjualan 5 hari: Senin 50, Selasa 40, Rabu 60, Kamis 45, Jumat 80.</p>
        <ul>
          <li><strong>Pola:</strong> penjualan tertinggi di Jumat, terendah di Selasa</li>
          <li><strong>Kesimpulan:</strong> pengunjung lebih banyak di akhir pekan</li>
          <li><strong>Keputusan:</strong> siapkan stok lebih banyak hari Jumat, promosikan pada hari sepi</li>
        </ul>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas Praktik:</strong>
          <ol>
            <li>Kumpulkan data nilai ujian 10 temanmu</li>
            <li>Hitung mean, median, dan modus</li>
            <li>Buat diagram batang di Google Sheets</li>
            <li>Tulis kesimpulan dan satu rekomendasi</li>
          </ol>
        </div>
      </MateriCard>
    </div>
  );
}
