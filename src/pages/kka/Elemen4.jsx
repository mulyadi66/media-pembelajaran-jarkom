import { useEffect, useState } from 'react';
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
  const [open, setOpen] = useState(false);
  return (
    <div className="materi-card" style={{marginBottom: 16}}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={title}
        style={{
          display:'flex', alignItems:'center', gap:10, width:'100%',
          background:'none', border:'none', cursor:'pointer', padding:'12px 0',
          color:'var(--text)', fontSize:'1.05rem', fontWeight:600, textAlign:'left'
        }}
      >
        <Icon size={18} />
        <span style={{flex:1}}>{title}</span>
        <span style={{
          display:'inline-block', width:0, height:0,
          borderLeft:'5px solid transparent', borderRight:'5px solid transparent',
          borderTop:'6px solid var(--text-light)',
          transition:'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
        }} aria-hidden="true" />
      </button>
      <div style={{
        maxHeight: open ? '99999px' : '0px',
        overflow: open ? 'visible' : 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <div style={{paddingTop:8, paddingBottom:8}}>
          {children}
        </div>
      </div>
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

        <h3>Data vs Informasi</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Istilah</th><th>Penjelasan</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>Data</strong></td><td>Fakta mentah yang belum diolah</td><td>Nilai 78, 85, 90, 72</td></tr>
              <tr><td><strong>Informasi</strong></td><td>Data yang sudah diolah sehingga bermakna</td><td>Rata-rata nilai kelas adalah 81,25</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Jenis Analisis Data</h3>
        <ul>
          <li><strong>Analisis deskriptif</strong> — menjawab "apa yang terjadi?" (contoh: jumlah siswa lulus)</li>
          <li><strong>Analisis diagnostik</strong> — menjawab "mengapa itu terjadi?" (contoh: banyak yang salah di materi subnetting)</li>
          <li><strong>Analisis prediktif</strong> — memperkirakan "apa yang akan terjadi?" (contoh: memprediksi kelulusan berdasarkan nilai harian)</li>
          <li><strong>Analisis preskriptif</strong> — menyarankan "apa yang harus dilakukan?" (contoh: tambah jam belajar subnetting)</li>
        </ul>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Pilih satu kasus nyata (misalnya: menu favorit kantin, tingkat ketidakhadiran siswa, atau penggunaan HP di kelas).</li>
            <li>Jelaskan bagaimana alur analisis data (kumpulkan → bersihkan → olah → analisis → sajikan) diterapkan pada kasus tersebut.</li>
            <li>Sebutkan satu contoh keputusan yang bisa diambil dari hasil analisis kasusmu.</li>
          </ol>
        </div>
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

        <h3>C. Sumber Data</h3>
        <ul>
          <li><strong>Data primer</strong> — dikumpulkan langsung oleh peneliti (kuesioner, wawancara, observasi)</li>
          <li><strong>Data sekunder</strong> — diperoleh dari pihak lain (BPS, laporan sekolah, jurnal)</li>
        </ul>

        <h3>D. Jenis Pertanyaan Kuesioner</h3>
        <ul>
          <li><strong>Terbuka</strong> — responden menjawab bebas (mendalam tapi sulit diringkas)</li>
          <li><strong>Tertutup</strong> — jawaban sudah disediakan (mudah diolah dengan angka)</li>
          <li><strong>Skala likert</strong> — tingkat kesetujuan 1–5 (sangat tidak setuju s.d. sangat setuju)</li>
        </ul>
        <div className="info-box warning">
          <strong>Hati-hati:</strong> Data harus akurat dan terpercaya. Data yang salah akan menghasilkan kesimpulan yang menyesatkan ("garbage in, garbage out").
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Buat kuesioner sederhana berisi <strong>5 pertanyaan</strong> tentang kebiasaan belajar teman sekelas.</li>
            <li>Kumpulkan data dari <strong>minimal 5 responden</strong>.</li>
            <li>Klasifikasikan data yang kamu peroleh: mana yang kualitatif dan mana yang kuantitatif.</li>
          </ol>
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

        <h3>C. Contoh Perhitungan</h3>
        <p>Data nilai: <code>70, 85, 70, 90, 75</code></p>
        <ul>
          <li><strong>Mean:</strong> (70 + 85 + 70 + 90 + 75) ÷ 5 = 390 ÷ 5 = <strong>78</strong></li>
          <li><strong>Median:</strong> urutkan 70, 70, 75, 85, 90 → nilai tengah = <strong>75</strong></li>
          <li><strong>Modus:</strong> nilai yang paling sering muncul = <strong>70</strong> (muncul 2 kali)</li>
          <li><strong>Maksimum / minimum:</strong> <strong>90</strong> dan <strong>70</strong></li>
        </ul>
        <div className="info-box">
          <strong><Star size={14} /> Rumus di Spreadsheet:</strong>
          <ul>
            <li><code>=AVERAGE(A1:A10)</code> untuk mean</li>
            <li><code>=MEDIAN(A1:A10)</code> untuk median</li>
            <li><code>=MODE(A1:A10)</code> untuk modus</li>
            <li><code>=MAX(A1:A10)</code> dan <code>=MIN(A1:A10)</code></li>
          </ul>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Gunakan data hasil kuesionermu (dari tugas 4.2) atau data baru berupa 10 angka.</li>
            <li>Masukkan data ke Google Sheets / Excel, lalu hitung mean, median, modus, maksimum, dan minimum menggunakan rumus.</li>
            <li>Terapkan sorting dan filtering pada data tersebut.</li>
            <li>Sertakan tangkapan layar hasil pengolahannya.</li>
          </ol>
        </div>
      </MateriCard>

      <MateriCard icon={PieChart} title="4.4 Visualisasi Data">
        <p><strong>Visualisasi data</strong> mengubah angka menjadi grafik agar mudah dipahami. Pemilihan jenis grafik yang tepat sangat penting.</p>
        <h3>Mengapa Visualisasi Penting?</h3>
        <ul>
          <li>Data angka ratusan baris sulit dipahami, grafik memadatkannya jadi pandangan sekali lihat</li>
          <li>Mempercepat menemukan pola, tren, dan nilai menyimpang (outlier)</li>
          <li>Memudahkan komunikasi hasil analisis ke orang lain</li>
        </ul>

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
        <div className="info-box warning">
          <strong>Menyesatkan:</strong> Diagram lingkaran sulit dibaca jika terlalu banyak bagian (lebih dari 5-6) atau nilainya hampir sama. Pilih diagram batang sebagai gantinya.
        </div>
        <div className="info-box">
          <strong><LineChart size={14} /> Tips Visualisasi:</strong>
          <ul>
            <li>Beri judul dan label sumbu yang jelas</li>
            <li>Gunakan warna yang kontras dan konsisten</li>
            <li>Jangan membesar-besarkan skala agar tidak menyesatkan</li>
            <li>Pilih grafik sesuai tujuan, bukan karena tampilannya bagus</li>
          </ul>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Buat <strong>2 jenis grafik yang berbeda</strong> dari data yang sama (misalnya diagram batang dan diagram lingkaran).</li>
            <li>Beri judul dan label pada setiap grafik.</li>
            <li>Bandingkan: grafik mana yang lebih mudah dibaca untuk data tersebut, dan mengapa?</li>
          </ol>
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

        <h3>Langkah Interpretasi yang Baik</h3>
        <ol>
          <li>Lihat kembali tujuan awal analisis — apa pertanyaan yang ingin dijawab?</li>
          <li>Cari pola atau tren dari data dan grafik</li>
          <li>Periksa data yang menyimpang dari pola (outlier)</li>
          <li>Tulis kesimpulan yang didukung data, bukan opini</li>
          <li>Buat rekomendasi yang bisa ditindaklanjuti</li>
        </ol>

        <div className="info-box warning">
          <strong>Hindari:</strong> Korelasi bukan berarti sebab-akibat. Nilai es krim dan kasus tenggelam naik bersamaan di musim panas, tetapi es krim bukan penyebab tenggelam — keduanya dipengaruhi cuaca.
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Kumpulkan data nilai ujian 10 temanmu</li>
            <li>Hitung mean, median, dan modus</li>
            <li>Buat diagram batang di Google Sheets</li>
            <li>Tulis kesimpulan dan satu rekomendasi</li>
            <li>Tuliskan laporan lengkap: latar belakang, data, pengolahan, visualisasi, kesimpulan, dan rekomendasi</li>
          </ol>
        </div>
      </MateriCard>
    </div>
  );
}
