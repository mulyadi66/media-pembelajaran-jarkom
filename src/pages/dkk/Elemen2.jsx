import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Shield, Heart, AlertTriangle, CheckCircle, Star } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '2.1 Pengertian K3LH' },
  { id: 's2', label: '2.2 Alat Pelindung Diri (APD)' },
  { id: 's3', label: '2.3 Prosedur Keselamatan Kerja' },
  { id: 's4', label: '2.4 Budaya Kerja 5S' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Elemen2() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('dkk_elemen2'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="dkk_elemen2" sections={sections} />

      <MateriCard icon={Shield} title="2.1 Pengertian dan Pentingnya K3LH">
        <p><strong>K3LH</strong> adalah singkatan dari <strong>Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup</strong>. Ini adalah upaya untuk melindungi pekerja, aset perusahaan, dan lingkungan dari risiko kecelakaan dan penyakit akibat kerja.</p>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Mengapa K3LH Penting?</strong>
          <p>Data BPJS Ketenagakerjaan mencatat ribuan kasus kecelakaan kerja setiap tahun di Indonesia. Penerapan K3LH dapat mencegah kerugian jiwa, biaya pengobatan, dan kerusakan peralatan.</p>
        </div>
        <h3 style={{marginTop: 20}}>Tujuan Utama K3LH:</h3>
        <ul>
          <li>Melindungi keselamatan dan kesehatan pekerja</li>
          <li>Mencegah dan mengurangi kecelakaan kerja</li>
          <li>Menciptakan lingkungan kerja yang aman dan nyaman</li>
          <li>Meningkatkan produktivitas kerja</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Heart} title="2.2 Alat Pelindung Diri (APD)">
        <p>APD adalah kelengkapan yang wajib digunakan oleh teknisi saat bekerja untuk melindungi dari potensi bahaya. Berikut adalah APD utama untuk teknisi jaringan:</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>APD</th><th>Fungsi</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>Helm Safety</strong></td><td>Melindungi kepala dari benturan dan benda jatuh</td><td>Helm proyek dengan standar SNI</td></tr>
              <tr><td><strong>Sarung Tangan</strong></td><td>Melindungi tangan dari sengatan listrik dan goresan</td><td>Sarung tangan karet listrik</td></tr>
              <tr><td><strong>Sepatu Safety</strong></td><td>Melindungi kaki dari benda tajam dan listrik</td><td>Safety shoes dengan sol karet</td></tr>
              <tr><td><strong>Kacamata Safety</strong></td><td>Melindungi mata dari debu dan percikan</td><td>Kacamata goggles bening</td></tr>
              <tr><td><strong>Rompi Reflektif</strong></td><td>Meningkatkan visibilitas di lokasi kerja</td><td>Rompi safety warna oranye</td></tr>
              <tr><td><strong>Masker</strong></td><td>Melindungi pernapasan dari debu</td><td>Masker kain/N95</td></tr>
              <tr><td><strong>Safety Harness</strong></td><td>Pengaman saat bekerja di ketinggian</td><td>Full body harness + lanyard</td></tr>
            </tbody>
          </table>
        </div>
      </MateriCard>

      <MateriCard icon={AlertTriangle} title="2.3 Prosedur Keselamatan Kerja">
        <h3>A. Prosedur Kelistrikan</h3>
        <ul>
          <li>Pastikan perangkat dalam kondisi mati sebelum diperbaiki</li>
          <li>Gunakan alat dengan isolasi yang baik</li>
          <li>Jangan bekerja sendirian pada instalasi listrik bertegangan tinggi</li>
          <li>Terapkan Lockout Tagout (LOTO) saat perbaikan</li>
        </ul>
        <div className="info-box">
          <strong><CheckCircle size={14} /> Lockout Tagout (LOTO)</strong>
          <p>Prosedur mengunci sumber energi (listrik) dan memberi label peringatan agar tidak ada yang menghidupkan peralatan selama perbaikan.</p>
          <ol style={{marginTop: 8}}>
            <li>Identifikasi sumber energi</li>
            <li>Matikan perangkat dan kunci sumber energi</li>
            <li>Pasang label peringatan</li>
            <li>Verifikasi energi sudah benar-benar mati</li>
            <li>Lakukan perbaikan</li>
            <li>Lepaskan kunci dan label setelah selesai</li>
          </ol>
        </div>
        <h3 style={{marginTop: 20}}>B. Prosedur Darurat</h3>
        <ul>
          <li>Kenali jalur evakuasi dan titik kumpul</li>
          <li>Selalu sedia kotak P3K di area kerja</li>
          <li>Laporkan setiap kecelakaan meskipun kecil</li>
          <li>Jangan panik, ikuti prosedur evakuasi</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Star} title="2.4 Budaya Kerja 5S">
        <p>5S adalah metode penataan tempat kerja yang berasal dari Jepang. Penerapan 5S menciptakan lingkungan kerja yang efisien, aman, dan produktif.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>No</th><th>Bahasa Jepang</th><th>Bahasa Indonesia</th><th>Pengertian</th><th>Contoh di Lab</th></tr></thead>
            <tbody>
              <tr><td>1</td><td><strong>Seiri</strong></td><td>Ringkas</td><td>Memisahkan barang yang perlu dan tidak perlu</td><td>Buang kabel bekas, simpan alat yang jarang dipakai</td></tr>
              <tr><td>2</td><td><strong>Seiton</strong></td><td>Rapi</td><td>Setiap barang memiliki tempat tetap</td><td>Label laci, rak alat sesuai kategori</td></tr>
              <tr><td>3</td><td><strong>Seiso</strong></td><td>Resik</td><td>Membersihkan tempat kerja secara rutin</td><td>Sapu lab, lap debu perangkat setiap hari</td></tr>
              <tr><td>4</td><td><strong>Seiketsu</strong></td><td>Rawat</td><td>Mempertahankan standar kebersihan</td><td>Cek list kebersihan harian, jadwal piket</td></tr>
              <tr><td>5</td><td><strong>Shitsuke</strong></td><td>Rajin</td><td>Menjadikan 5S sebagai kebiasaan</td><td>Disiplin, saling mengingatkan</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><CheckCircle size={14} /> Manfaat 5S</strong>
          <p>Meningkatkan efisiensi kerja, mengurangi kecelakaan, memperpanjang umur peralatan, dan menciptakan lingkungan kerja yang nyaman.</p>
        </div>
      </MateriCard>
    </div>
  );
}
