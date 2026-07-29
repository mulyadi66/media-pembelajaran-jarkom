import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Radio, Wifi, Cable, Activity, Star } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '3.1 Media Transmisi Kabel' },
  { id: 's2', label: '3.2 Media Transmisi Nirkabel' },
  { id: 's3', label: '3.3 Jaringan Telekomunikasi' },
  { id: 's4', label: '3.4 Kualitas Layanan (QoS)' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Elemen3() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('dkk_elemen3'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="dkk_elemen3" sections={sections} />

      <MateriCard icon={Cable} title="3.1 Media Transmisi Kabel">
        <p>Media transmisi kabel adalah medium fisik yang menghantarkan data dari satu perangkat ke perangkat lain. Pemilihan media transmisi yang tepat sangat mempengaruhi kualitas jaringan.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Media</th><th>Kecepatan Max</th><th>Jarak Max</th><th>EMI</th><th>Biaya</th><th>Penggunaan</th></tr></thead>
            <tbody>
              <tr><td><strong>UTP Cat5e</strong></td><td>1 Gbps</td><td>100 m</td><td>Rentan</td><td>Rendah</td><td>Jaringan lokal kantor</td></tr>
              <tr><td><strong>UTP Cat6</strong></td><td>1 Gbps</td><td>100 m</td><td>Rentan</td><td>Sedang</td><td>Jaringan kantor menengah</td></tr>
              <tr><td><strong>STP</strong></td><td>1 Gbps</td><td>100 m</td><td>Tahan</td><td>Sedang</td><td>Lingkungan industri</td></tr>
              <tr><td><strong>Coaxial</strong></td><td>10 Mbps+</td><td>500 m</td><td>Cukup tahan</td><td>Rendah</td><td>TV kabel, CCTV</td></tr>
              <tr><td><strong>Fiber Optik SM</strong></td><td>100+ Gbps</td><td>40+ km</td><td>Sangat tahan</td><td>Tinggi</td><td>Backbone, WAN</td></tr>
              <tr><td><strong>Fiber Optik MM</strong></td><td>10 Gbps</td><td>2 km</td><td>Sangat tahan</td><td>Sedang</td><td>Backbone gedung</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box">
          <strong><Star size={14} /> Fiber Optik</strong>
          <p>Fiber optik menggunakan cahaya (laser/LED) yang merambat melalui serat kaca. Keunggulan: kecepatan sangat tinggi, jarak jauh, tahan interferensi elektromagnetik, dan aman dari penyadapan.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Wifi} title="3.2 Media Transmisi Nirkabel (Wireless)">
        <p>Media nirkabel menggunakan gelombang elektromagnetik (RF) untuk mentransmisikan data tanpa kabel fisik.</p>
        <h3>Jenis-jenis Wireless:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Teknologi</th><th>Frekuensi</th><th>Kecepatan</th><th>Jarak</th><th>Aplikasi</th></tr></thead>
            <tbody>
              <tr><td><strong>Wi-Fi</strong></td><td>2.4 / 5 / 6 GHz</td><td>100 Mbps - 9.6 Gbps</td><td>30-100 m</td><td>LAN nirkabel</td></tr>
              <tr><td><strong>Bluetooth</strong></td><td>2.4 GHz</td><td>1-50 Mbps</td><td>10-100 m</td><td>Perangkat jarak dekat</td></tr>
              <tr><td><strong>LTE/4G</strong></td><td>700-2600 MHz</td><td>100 Mbps - 1 Gbps</td><td>km</td><td>Internet seluler</td></tr>
              <tr><td><strong>5G</strong></td><td>600-4700 MHz</td><td>1-20 Gbps</td><td>km</td><td>Internet seluler masa depan</td></tr>
              <tr><td><strong>WiMAX</strong></td><td>2-66 GHz</td><td>70 Mbps</td><td>50 km</td><td>Broadband jarak jauh</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box warning">
          <strong><Star size={14} /> Faktor Pengaruh Sinyal Wireless</strong>
          <p>Kualitas sinyal wireless dipengaruhi oleh: jarak, halangan fisik (tembok), interferensi frekuensi, jumlah pengguna simultan, dan daya pancar perangkat.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Radio} title="3.3 Jaringan Telekomunikasi">
        <p>Jaringan telekomunikasi adalah sistem yang memungkinkan pertukaran informasi jarak jauh melalui media transmisi. Jaringan telekomunikasi modern mencakup suara, data, dan video.</p>
        <h3>A. Jaringan Telepon (PSTN)</h3>
        <p>Public Switched Telephone Network — jaringan telepon tradisional yang menggunakan sirkuit switched. Sekarang banyak digantikan oleh VoIP.</p>
        <h3>B. Jaringan Seluler (Mobile Network)</h3>
        <ul>
          <li><strong>2G (GSM)</strong> — Suara dan SMS, kecepatan rendah</li>
          <li><strong>3G (UMTS)</strong> — Internet mobile, video call</li>
          <li><strong>4G/LTE</strong> — Internet cepat, streaming HD</li>
          <li><strong>5G</strong> — Latency rendah, IoT masif, kecepatan sangat tinggi</li>
        </ul>
        <h3>C. Internet & Broadband</h3>
        <p>Teknologi akses internet broadband meliputi:</p>
        <ul>
          <li><strong>ADSL</strong> — Via kabel telepon, kecepatan terbatas</li>
          <li><strong>FTTH (Fiber to the Home)</strong> — Fiber optik langsung ke rumah, kecepatan simetris hingga 1 Gbps</li>
          <li><strong>Kabel Modem</strong> — Via kabel TV coaxial</li>
          <li><strong>Satelit (VSAT)</strong> — Untuk daerah terpencil</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Activity} title="3.4 Kualitas Layanan (QoS)">
        <p>QoS (Quality of Service) adalah kemampuan jaringan untuk memberikan prioritas dan jaminan kualitas layanan tertentu.</p>
        <div className="info-box">
          <strong><Star size={14} /> Parameter Utama QoS:</strong>
          <p><strong>Bandwidth</strong> — Kapasitas maksimum transfer data (bps)<br/>
          <strong>Latency</strong> — Waktu tunda pengiriman data (ms)<br/>
          <strong>Jitter</strong> — Variasi latency, penting untuk VoIP<br/>
          <strong>Packet Loss</strong> — Persentase paket data yang hilang</p>
        </div>
        <h3>Penerapan QoS:</h3>
        <ul>
          <li><strong>Prioritas Trafik</strong> — VoIP dan video conference mendapat prioritas lebih tinggi dari browsing</li>
          <li><strong>Bandwidth Limiting</strong> — Membatasi bandwidth per pengguna agar adil</li>
          <li><strong>Traffic Shaping</strong> — Mengatur aliran data agar sesuai kapasitas</li>
        </ul>
        <div className="info-box success">
          <strong><Star size={14} /> Contoh Perhitungan</strong>
          <p>Internet 100 Mbps untuk 20 PC = rata-rata 5 Mbps per PC. Dengan QoS, admin bisa membatasi maksimal 10 Mbps per PC dan memberi prioritas untuk server.</p>
        </div>
      </MateriCard>
    </div>
  );
}
