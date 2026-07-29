import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Wifi, Radio, Shield, Antenna, Star, Activity } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';
import SignalStrengthVisualizer from '../../components/mpk2/SignalStrengthVisualizer';
import InterferenceSimulator from '../../components/mpk2/InterferenceSimulator';

const sections = [
  { id: 's1', label: '2.1 Konsep Dasar Wireless' },
  { id: 's2', label: '2.2 Standar Wi-Fi 802.11' },
  { id: 's3', label: '2.3 Keamanan Jaringan Nirkabel' },
  { id: 's4', label: '2.4 Antena & Propagasi Sinyal' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Modul2MPK2() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('mpk2_modul2'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="mpk2_modul2" sections={sections} />

      <MateriCard icon={Wifi} title="2.1 Konsep Dasar Wireless">
        <p>Jaringan nirkabel (wireless) menggunakan gelombang elektromagnetik frekuensi radio (RF) untuk mentransmisikan data tanpa media kabel fisik.</p>
        <div className="info-box">
          <strong><Star size={14} /> Komponen Utama Wireless</strong>
          <p><strong>Access Point (AP)</strong> — Perangkat yang memancarkan sinyal wireless.<br/>
          <strong>Wireless NIC</strong> — Kartu jaringan nirkabel pada perangkat client.<br/>
          <strong>Antena</strong> — Memperkuat dan mengarahkan sinyal.<br/>
          <strong>SSID</strong> — Nama jaringan yang terlihat oleh pengguna.</p>
        </div>
        <h3>Frekuensi Wireless:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Frekuensi</th><th>Keunggulan</th><th>Kekurangan</th></tr></thead>
            <tbody>
              <tr><td><strong>2.4 GHz</strong></td><td>Jangkauan lebih jauh, tembus halangan</td><td>Mudah interferensi, kanal terbatas (3 non-overlap)</td></tr>
              <tr><td><strong>5 GHz</strong></td><td>Kecepatan tinggi, lebih banyak kanal</td><td>Jangkauan pendek, kurang tembus halangan</td></tr>
              <tr><td><strong>6 GHz (Wi-Fi 6E)</strong></td><td>Sangat cepat, minim interferensi</td><td>Perangkat masih terbatas, jarak pendek</td></tr>
            </tbody>
          </table>
        </div>
      </MateriCard>

      <MateriCard icon={Radio} title="2.2 Standar Wi-Fi 802.11">
        <p>Institute of Electrical and Electronics Engineers (IEEE) mengeluarkan standar 802.11 untuk jaringan nirkabel. Setiap generasi menawarkan peningkatan kecepatan dan keandalan.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Generasi</th><th>Standar</th><th>Kecepatan Max</th><th>Frekuensi</th><th>Tahun</th></tr></thead>
            <tbody>
              <tr><td>Wi-Fi 1</td><td>802.11b</td><td>11 Mbps</td><td>2.4 GHz</td><td>1999</td></tr>
              <tr><td>Wi-Fi 2</td><td>802.11a</td><td>54 Mbps</td><td>5 GHz</td><td>1999</td></tr>
              <tr><td>Wi-Fi 3</td><td>802.11g</td><td>54 Mbps</td><td>2.4 GHz</td><td>2003</td></tr>
              <tr><td>Wi-Fi 4</td><td>802.11n</td><td>600 Mbps</td><td>2.4/5 GHz</td><td>2009</td></tr>
              <tr><td>Wi-Fi 5</td><td>802.11ac</td><td>3.5 Gbps</td><td>5 GHz</td><td>2013</td></tr>
              <tr><td>Wi-Fi 6</td><td>802.11ax</td><td>9.6 Gbps</td><td>2.4/5/6 GHz</td><td>2019</td></tr>
              <tr><td>Wi-Fi 7</td><td>802.11be</td><td>46 Gbps</td><td>2.4/5/6 GHz</td><td>2024</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><Activity size={14} /> Wi-Fi 6 (802.11ax)</strong>
          <p>Wi-Fi 6 menghadirkan OFDMA, MU-MIMO, dan Target Wake Time (TWT) untuk efisiensi lebih tinggi di lingkungan padat pengguna.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Shield} title="2.3 Keamanan Jaringan Nirkabel">
        <p>Jaringan nirkabel memiliki risiko keamanan lebih tinggi karena sinyal menyebar di udara. Penting untuk menerapkan keamanan yang tepat.</p>
        <h3>Metode Keamanan Wi-Fi:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Metode</th><th>Enkripsi</th><th>Keamanan</th><th>Keterangan</th></tr></thead>
            <tbody>
              <tr><td><strong>WEP</strong></td><td>RC4 (64/128 bit)</td><td>Sangat Lemah</td><td>Jangan digunakan — mudah diretas</td></tr>
              <tr><td><strong>WPA</strong></td><td>TKIP</td><td>Lemah</td><td>Pengganti WEP, sudah tidak aman</td></tr>
              <tr><td><strong>WPA2</strong></td><td>AES (CCMP)</td><td>Aman</td><td>Standar saat ini, masih cukup aman</td></tr>
              <tr><td><strong>WPA3</strong></td><td>AES (GCMP)</td><td>Sangat Aman</td><td>Terbaru, lebih tahan brute force</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box warning">
          <strong><Star size={14} /> Tips Keamanan</strong>
          <p>Gunakan WPA2/WPA3, nonaktifkan SSID broadcast jika perlu, aktifkan MAC filtering, ganti password default, dan update firmware secara rutin.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Antenna} title="2.4 Antena dan Propagasi Sinyal">
        <p>Antena mengubah sinyal listrik menjadi gelombang elektromagnetik dan sebaliknya. Pemilihan antena yang tepat sangat mempengaruhi kualitas jaringan nirkabel.</p>
        <h3>Jenis-jenis Antena:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Jenis</th><th>Pola Radiasi</th><th>Penggunaan</th></tr></thead>
            <tbody>
              <tr><td><strong>Omni-directional</strong></td><td>360°</td><td>Dalam ruangan, coverage merata</td></tr>
              <tr><td><strong>Directional (Yagi)</strong></td><td>Sempit (30-60°)</td><td>Point-to-point jarak jauh</td></tr>
              <tr><td><strong>Patch / Panel</strong></td><td>Lebar (60-180°)</td><td>Coverage area spesifik</td></tr>
              <tr><td><strong>Parabolic Grid</strong></td><td>Sangat sempit</td><td>Point-to-point jarak sangat jauh</td></tr>
              <tr><td><strong>Omni Outdoor</strong></td><td>360°</td><td>Coverage outdoor luas</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Faktor Propagasi Sinyal:</h3>
        <ul>
          <li><strong>Free Space Path Loss (FSPL)</strong> — Sinyal melemah seiring jarak</li>
          <li><strong>Absorpsi</strong> — Tembok, kaca, air menyerap sinyal</li>
          <li><strong>Refleksi</strong> — Sinyal memantul dari permukaan logam</li>
          <li><strong>Difraksi</strong> — Sinyal membelok di tepi halangan</li>
          <li><strong>Interferensi</strong> — Perangkat lain pada frekuensi sama</li>
        </ul>
        <div className="info-box">
          <strong><Star size={14} /> dBm dan dBi</strong>
          <p><strong>dBm</strong> — Satuan kekuatan sinyal absolut. Range: -30 dBm (sangat kuat) sampai -90 dBm (sangat lemah).<br/>
          <strong>dBi</strong> — Satuan gain antena. Semakin tinggi dBi, semakin fokus sinyal.</p>
        </div>
      </MateriCard>

      <div className="materi-card">
        <h3>📡 Simulasi Kekuatan Sinyal</h3>
        <p style={{ marginBottom: 16, color: '#94a3b8' }}>Geser AP dan Client untuk melihat perubahan RSSI dan kualitas sinyal secara real-time.</p>
        <SignalStrengthVisualizer />
      </div>

      <div className="materi-card">
        <h3>⚠️ Simulasi Interferensi</h3>
        <p style={{ marginBottom: 16, color: '#94a3b8' }}>Tambahkan sumber interferensi dan lihat dampaknya terhadap kualitas sinyal.</p>
        <InterferenceSimulator />
      </div>
    </div>
  );
}