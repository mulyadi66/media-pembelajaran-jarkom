import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Circle, Cable, Radio, Activity, Star, AlertTriangle, CheckCircle } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '5.1 Prinsip Dasar Fiber Optik' },
  { id: 's2', label: '5.2 Jenis Fiber Optik' },
  { id: 's3', label: '5.3 Penyambungan & Konektor' },
  { id: 's4', label: '5.4 Pengujian Fiber Optik' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Modul5MPK2() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('mpk2_modul5'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="mpk2_modul5" sections={sections} />

      <MateriCard icon={Circle} title="5.1 Prinsip Dasar Fiber Optik">
        <p>Fiber optik adalah media transmisi yang menggunakan cahaya (laser/LED) untuk mentransmisikan data melalui serat kaca atau plastik. Kecepatan transmisi sangat tinggi hingga ratusan Gbps.</p>
        <div className="info-box">
          <strong><Star size={14} /> Keunggulan Fiber Optik</strong>
          <p><strong>Kecepatan Tinggi</strong> — Puluhan Gbps, masa depan hingga Tbps.<br/>
          <strong>Jarak Jauh</strong> — Puluhan kilometer tanpa repeater.<br/>
          <strong>Anti Interferensi</strong> — Tidak terpengaruh EMI/RFI.<br/>
          <strong>Aman</strong> — Sulit disadap tanpa deteksi.<br/>
          <strong>Ringan</strong> — Lebih ringan dari kabel tembaga.</p>
        </div>
        <h3>Komponen Utama Fiber Optik:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Bagian</th><th>Fungsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Core (Inti)</strong></td><td>Media perambatan cahaya, terbuat dari kaca/silika murni</td></tr>
              <tr><td><strong>Cladding (Selubung)</strong></td><td>Memantulkan cahaya kembali ke core (indeks bias lebih rendah)</td></tr>
              <tr><td><strong>Coating / Buffer</strong></td><td>Melindungi core dan cladding dari kerusakan fisik</td></tr>
              <tr><td><strong>Strength Members</strong></td><td>Serat aramid (Kevlar) untuk kekuatan tarik</td></tr>
              <tr><td><strong>Outer Jacket</strong></td><td>Lapisan luar pelindung dari lingkungan</td></tr>
            </tbody>
          </table>
        </div>
      </MateriCard>

      <MateriCard icon={Cable} title="5.2 Jenis Fiber Optik">
        <p>Terdapat dua jenis utama fiber optik berdasarkan mode propagasi cahaya:</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Karakteristik</th><th>Single Mode (SM)</th><th>Multi Mode (MM)</th></tr></thead>
            <tbody>
              <tr><td>Diameter Core</td><td>9 µm (sangat kecil)</td><td>50 atau 62.5 µm</td></tr>
              <tr><td>Sumber Cahaya</td><td>Laser (ILC/DFB)</td><td>LED / VCSEL</td></tr>
              <tr><td>Jarak Maks</td><td>&gt; 40 km</td><td>550 m (10 Gbps) / 2 km (1 Gbps)</td></tr>
              <tr><td>Bandwidth</td><td>Sangat tinggi (100+ Gbps)</td><td>Tinggi (10 Gbps)</td></tr>
              <tr><td>Biaya</td><td>Lebih mahal (komponen optik)</td><td>Lebih murah</td></tr>
              <tr><td>Warna Jacket</td><td>Kuning</td><td>Aqua (OM3/OM4) atau Oranye (OM1/OM2)</td></tr>
              <tr><td>Aplikasi</td><td>WAN, backbone, telekomunikasi jarak jauh</td><td>LAN, data center, koneksi dalam gedung</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box">
          <strong><Star size={14} /> Kelas Multi Mode</strong>
          <p>OM1 (62.5 µm) — 1 Gbps hingga 275m. OM2 (50 µm) — 1 Gbps hingga 550m. OM3 (50 µm laser-optimized) — 10 Gbps hingga 300m. OM4 — 10 Gbps hingga 550m. OM5 — SWDM untuk 40/100 Gbps.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Radio} title="5.3 Penyambungan dan Konektor">
        <h3>A. Fusion Splicing (Penyambungan)</h3>
        <p>Menyambung dua serat fiber secara permanen menggunakan fusion splicer. Proses ini melelehkan ujung serat dan menggabungkannya.</p>
        <ol>
          <li>Strip coating kabel fiber (sekitar 3-5 cm)</li>
          <li>Cleave (potong) ujung serat dengan presisi tinggi</li>
          <li>Masukkan serat ke fusion splicer</li>
          <li>Alignment otomatis oleh mesin</li>
          <li>Proses fusion (laser melelehkan ujung serat)</li>
          <li>Estimasi loss biasanya &lt; 0.05 dB per sambungan</li>
          <li>Lindungi sambungan dengan protective sleeve</li>
        </ol>
        <h3>B. Konektor Fiber Optik</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Tipe</th><th>Bentuk</th><th>Aplikasi</th></tr></thead>
            <tbody>
              <tr><td><strong>SC</strong> (Subscriber Connector)</td><td>Push-pull, persegi</td><td>Patch panel, ONT (indoor)</td></tr>
              <tr><td><strong>LC</strong> (Lucent Connector)</td><td>Small form factor, kecil</td><td>Transceiver SFP, data center</td></tr>
              <tr><td><strong>FC</strong> (Ferrule Connector)</td><td>Screw-on, putar</td><td>ODF, aplikasi outdoor</td></tr>
              <tr><td><strong>ST</strong> (Straight Tip)</td><td>Bayonet, twist-lock</td><td>Jaringan lama, industri</td></tr>
            </tbody>
          </table>
        </div>
      </MateriCard>

      <MateriCard icon={Activity} title="5.4 Pengujian Fiber Optik">
        <p>Pengujian fiber optik penting untuk memastikan kualitas instalasi dan mengidentifikasi kerusakan.</p>
        <h3>A. OTDR (Optical Time Domain Reflectometer)</h3>
        <p>OTDR mengirim pulsa cahaya dan menganalisis pantulan untuk mengukur karakteristik fiber:</p>
        <ul>
          <li><strong>Total Loss</strong> — Redaman total sepanjang fiber (dB)</li>
          <li><strong>Event Loss</strong> — Loss di titik sambungan/konektor</li>
          <li><strong>Reflectance</strong> — Pantulan di konektor</li>
          <li><strong>Orphan</strong> — Lokasi kerusakan atau ujung fiber</li>
          <li><strong>Length</strong> — Panjang fiber</li>
        </ul>
        <h3>B. Optical Power Meter & Light Source</h3>
        <p>Metode pengujian loss menggunakan power meter dan light source:</p>
        <ol>
          <li>Hubungkan light source ke salah satu ujung fiber</li>
          <li>Hubungkan power meter ke ujung fiber lainnya</li>
          <li>Catat daya terima (dBm)</li>
          <li>Hitung loss: Loss = Daya Tx - Daya Rx</li>
        </ol>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Standar Acceptable Loss</strong>
          <p>Sambungan fusion: &lt; 0.1 dB. Konektor: &lt; 0.5 dB. Total loss link: tergantung panjang dan jumlah sambungan.</p>
        </div>
        <div className="info-box success">
          <strong><CheckCircle size={14} /> Tips Praktis</strong>
          <p>Selalu bersihkan konektor fiber dengan alcohol swab atau KSC (Kleen Stick Cleaner) sebelum pengujian. Kotoran pada konektor adalah penyebab utama loss tinggi.</p>
        </div>
      </MateriCard>
    </div>
  );
}