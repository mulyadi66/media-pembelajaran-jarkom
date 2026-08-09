import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Brain, Sparkles, Bot, Scale, AlertTriangle, CheckSquare, Star } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '5.1 Konsep Kecerdasan Artifisial' },
  { id: 's2', label: '5.2 Jenis-Jenis AI' },
  { id: 's3', label: '5.3 Aplikasi AI dalam Kehidupan' },
  { id: 's4', label: '5.4 Etika Penggunaan AI' },
  { id: 's5', label: '5.5 Bias & Penggunaan AI yang Bertanggung Jawab' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Elemen5() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_elemen5'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_elemen5" sections={sections} />

      <MateriCard icon={Brain} title="5.1 Konsep Kecerdasan Artifisial">
        <p><strong>Kecerdasan Artifisial (Artificial Intelligence / AI)</strong> adalah kemampuan mesin atau komputer untuk melakukan tugas yang biasanya membutuhkan kecerdasan manusia, seperti belajar, mengenali pola, memahami bahasa, dan mengambil keputusan.</p>
        <div className="info-box">
          <strong><Star size={14} /> Elemen Penting AI:</strong>
          <ul>
            <li><strong>Data</strong> — bahan baku yang digunakan AI untuk belajar</li>
            <li><strong>Algoritma</strong> — aturan/langkah yang dipakai memproses data</li>
            <li><strong>Komputasi</strong> — kekuatan proses untuk menjalankan model</li>
          </ul>
        </div>
        <p>AI berbeda dengan program biasa: program biasa mengikuti aturan yang ditulis manual, sedangkan AI <strong>belajar dari data</strong> untuk menemukan pola sendiri.</p>
      </MateriCard>

      <MateriCard icon={Bot} title="5.2 Jenis-Jenis AI">
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Jenis</th><th>Penjelasan</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>AI Sempit (Narrow AI)</strong></td>
                <td>AI yang ahli di satu tugas spesifik</td>
                <td>Penerjemah bahasa, filter spam, asisten virtual</td>
              </tr>
              <tr>
                <td><strong>AI Umum (General AI)</strong></td>
                <td>AI yang bisa mengerjakan banyak tugas seperti manusia</td>
                <td>Masih dalam tahap penelitian</td>
              </tr>
              <tr>
                <td><strong>AI Super</strong></td>
                <td>AI yang melampaui kecerdasan manusia</td>
                <td>Masih teori / hipotetis</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Teknologi di Balik AI:</h3>
        <ul>
          <li><strong>Machine Learning (ML)</strong> — mesin belajar dari data tanpa diprogram eksplisit</li>
          <li><strong>Deep Learning</strong> — ML menggunakan jaringan saraf tiruan berlapis</li>
          <li><strong>Natural Language Processing (NLP)</strong> — AI memahami dan membuat bahasa manusia</li>
          <li><strong>Computer Vision</strong> — AI mengenali gambar dan video</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Sparkles} title="5.3 Aplikasi AI dalam Kehidupan">
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Bidang</th><th>Contoh Penerapan AI</th></tr></thead>
            <tbody>
              <tr><td><strong>Pendidikan</strong></td><td>Tutor AI, koreksi otomatis, pembelajaran adaptif</td></tr>
              <tr><td><strong>Kesehatan</strong></td><td>Deteksi penyakit dari citra medis, prediksi wabah</td></tr>
              <tr><td><strong>Transportasi</strong></td><td>Navigasi pintar, mobil otonom, prediksi kemacetan</td></tr>
              <tr><td><strong>Komunikasi</strong></td><td>Penerjemah otomatis, asisten virtual, chat bot</td></tr>
              <tr><td><strong>Perdagangan</strong></td><td>Rekomendasi produk, deteksi penipuan</td></tr>
              <tr><td><strong>Keamanan</strong></td><td>Pengenalan wajah, deteksi kejahatan</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box">
          <strong><Star size={14} /> AI Generatif:</strong>
          <p>AI generatif (seperti ChatGPT, Gemini, dan pembuat gambar AI) membuat konten baru — teks, gambar, suara, hingga kode program — berdasarkan perintah pengguna.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Scale} title="5.4 Etika Penggunaan AI">
        <p>Kemampuan AI yang besar harus digunakan secara etis dan bertanggung jawab.</p>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Hal yang Harus Diperhatikan:</strong>
          <ul>
            <li><strong>Plagiarisme</strong> — hasil AI tidak boleh diklaim sebagai karya sendiri tanpa mengakuinya</li>
            <li><strong>Kecanduan</strong> — jangan menggantungkan seluruh pekerjaan pada AI</li>
            <li><strong>Privasi</strong> — jangan memasukkan data pribadi ke aplikasi AI</li>
            <li><strong>Validitas</strong> — hasil AI bisa salah (halusinasi); selalu cek ulang</li>
          </ul>
        </div>
        <h3>Prinsip Etika AI:</h3>
        <ul>
          <li><strong>Transparansi</strong> — pengguna tahu bahwa mereka berinteraksi dengan AI</li>
          <li><strong>Keadilan</strong> — AI tidak boleh mendiskriminasi kelompok tertentu</li>
          <li><strong>Tanggung jawab</strong> — ada manusia yang bertanggung jawab atas dampak AI</li>
          <li><strong>Privasi</strong> — data pribadi dilindungi dan dipakai dengan izin</li>
        </ul>
      </MateriCard>

      <MateriCard icon={AlertTriangle} title="5.5 Bias & Penggunaan AI yang Bertanggung Jawab">
        <h3>A. Bias dalam AI</h3>
        <p><strong>Bias</strong> terjadi ketika AI menghasilkan hasil yang tidak adil atau tidak akurat terhadap kelompok tertentu. Penyebab utamanya adalah data latih yang tidak seimbang atau mengandung prasangka.</p>
        <ul>
          <li>AI rekrutmen menolak kandidat karena data latihnya didominasi kelompok tertentu</li>
          <li>Pengenalan wajah kurang akurat pada kelompok tertentu karena data latih kurang beragam</li>
          <li>Asisten AI menjawab berbeda untuk pertanyaan yang sama karena bias stereotip</li>
        </ul>
        <h3>B. Cara Menggunakan AI yang Bertanggung Jawab</h3>
        <ol>
          <li><strong>Gunakan untuk membantu, bukan menggantikan</strong> pemikiranmu</li>
          <li><strong>Selalu verifikasi</strong> jawaban AI dengan sumber terpercaya</li>
          <li><strong>Jangan membagikan data pribadi</strong> kepada AI</li>
          <li><strong>Nyatakan penggunaan AI</strong> jika diminta (misalnya tugas sekolah)</li>
          <li><strong>Laporkan penyalahgunaan</strong> AI yang merugikan orang lain</li>
        </ol>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas Refleksi:</strong>
          <p>Tuliskan satu contoh penggunaan AI yang kamu lakukan, lalu jelaskan satu keuntungan dan satu risiko dari penggunaannya.</p>
        </div>
      </MateriCard>
    </div>
  );
}
