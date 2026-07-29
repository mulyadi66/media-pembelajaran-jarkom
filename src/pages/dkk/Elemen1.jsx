import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, Briefcase, Star, Target, Award, TrendingUp } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '1.1 Profesi Bidang TJKT' },
  { id: 's2', label: '1.2 Sertifikasi Kompetensi' },
  { id: 's3', label: '1.3 Dunia Industri TJKT' },
  { id: 's4', label: '1.4 Prospek Karir' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Elemen1() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('dkk_elemen1'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="dkk_elemen1" sections={sections} />

      <MateriCard icon={Globe} title="1.1 Profesi di Bidang Teknik Jaringan Komputer dan Telekomunikasi">
        <p>Bidang TJKT menawarkan berbagai peluang karir yang menarik. Seiring dengan pertumbuhan digital, kebutuhan akan tenaga ahli jaringan semakin meningkat.</p>
        <div className="info-box">
          <strong><Star size={14} /> Fakta Penting</strong>
          <p>Indonesia membutuhkan lebih dari 600.000 tenaga kerja digital setiap tahunnya, termasuk teknisi jaringan dan telekomunikasi.</p>
        </div>
        <h3 style={{marginTop: 20}}>Profesi Utama di Bidang TJKT:</h3>
        <ul>
          <li><strong>Teknisi Jaringan (Network Technician)</strong> — Instalasi, konfigurasi, dan troubleshooting perangkat jaringan. Entry-level yang cocok untuk lulusan SMK.</li>
          <li><strong>Network Administrator</strong> — Mengelola operasional jaringan sehari-hari, user management, backup konfigurasi, monitoring performa.</li>
          <li><strong>Network Engineer</strong> — Merancang dan membangun infrastruktur jaringan, migrasi teknologi, optimalisasi performa.</li>
          <li><strong>IT Support / Helpdesk</strong> — Memberikan dukungan teknis kepada pengguna, menangani masalah perangkat keras dan lunak.</li>
          <li><strong>Field Technician</strong> — Teknis lapangan yang melakukan instalasi kabel, pemasangan perangkat, dan survey lokasi.</li>
          <li><strong>Network Security Engineer</strong> — Spesialis keamanan jaringan: firewall, IDS/IPS, penetration testing.</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Award} title="1.2 Sertifikasi Kompetensi">
        <p>Sertifikasi membuktikan bahwa seseorang memiliki kompetensi yang diakui secara nasional maupun internasional.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Sertifikasi</th><th>Level</th><th>Penerbit</th><th>Fokus</th></tr></thead>
            <tbody>
              <tr><td><strong>BNSP TJKT</strong></td><td>Nasional</td><td>BNSP Indonesia</td><td>Kompetensi teknisi jaringan Indonesia</td></tr>
              <tr><td><strong>CompTIA Network+</strong></td><td>Internasional</td><td>CompTIA (AS)</td><td>Dasar jaringan, troubleshooting</td></tr>
              <tr><td><strong>CCNA</strong></td><td>Internasional</td><td>Cisco Systems</td><td>Routing & switching Cisco</td></tr>
              <tr><td><strong>MTCNA</strong></td><td>Internasional</td><td>MikroTik (Latvia)</td><td>Konfigurasi Router MikroTik</td></tr>
              <tr><td><strong>JNCIA</strong></td><td>Internasional</td><td>Juniper Networks</td><td>Routing & switching Juniper</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{marginTop: 16}}>Untuk lulusan SMK, sertifikasi BNSP TJKT dan MTCNA adalah langkah awal yang baik karena biaya terjangkau dan relevan dengan kebutuhan industri Indonesia.</p>
      </MateriCard>

      <MateriCard icon={Briefcase} title="1.3 Dunia Industri TJKT">
        <p>Lulusan TJKT dapat bekerja di berbagai sektor industri. Berikut adalah tempat kerja potensial:</p>
        <h3>A. Internet Service Provider (ISP)</h3>
        <ul>
          <li>IndiHome (Telkom) — Instalasi dan maintenance fiber optik</li>
          <li>Biznet — Jaringan fiber untuk enterprise</li>
          <li>MyRepublic, First Media — ISP untuk residensial</li>
        </ul>
        <h3>B. Perusahaan IT & Telekomunikasi</h3>
        <ul>
          <li>Cisco, MikroTik, Huawei — Vendor perangkat jaringan</li>
          <li>Telkomsel, XL, Indosat — Operator seluler</li>
          <li>Integrator jaringan: solusi IT untuk perusahaan</li>
        </ul>
        <h3>C. Sektor Non-IT</h3>
        <ul>
          <li>Perbankan — IT support & network administration</li>
          <li>Pemerintahan — Teknisi jaringan di instansi</li>
          <li>Pendidikan — Laboran/teknisi lab komputer sekolah</li>
        </ul>
      </MateriCard>

      <MateriCard icon={TrendingUp} title="1.4 Prospek Karir dan Pengembangan Diri">
        <div className="info-box">
          <strong><Target size={14} /> Proyeksi Masa Depan</strong>
          <p>Revolusi Industri 4.0 dan transformasi digital mendorong permintaan tinggi untuk tenaga ahli jaringan. IoT, 5G, dan cloud computing akan menciptakan lapangan kerja baru.</p>
        </div>
        <h3>Jenjang Karir TJKT:</h3>
        <ol>
          <li><strong>Tahun 1:</strong> Teknisi Jaringan Junior / IT Support — belajar dasar instalasi dan troubleshooting</li>
          <li><strong>Tahun 2:</strong> Teknisi Madya — mengambil sertifikasi (MTCNA/BNSP), mulai menangani proyek kecil</li>
          <li><strong>Tahun 3:</strong> Network Administrator / Engineer — mengelola jaringan skala menengah, sertifikasi CCNA</li>
          <li><strong>Tahun 4-5:</strong> Senior Engineer / IT Manager — merancang arsitektur jaringan, memimpin tim</li>
        </ol>
        <div className="info-box success">
          <strong><Star size={14} /> Tips Sukses</strong>
          <p>Kuasai 3 pilar: Teknis (instalasi, konfigurasi), Sertifikasi (pengakuan kompetensi), Soft skill (komunikasi, kerja tim).</p>
        </div>
      </MateriCard>
    </div>
  );
}
