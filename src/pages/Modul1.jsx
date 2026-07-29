import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Wifi, Plug, Settings, Info, AlertTriangle, Star } from 'lucide-react';
import VideoEmbed from '../components/VideoEmbed';
import SectionTracker from '../components/SectionTracker';

const sections = [
  { id: 's1', label: '1.1 Kebutuhan Teknis Pengguna' },
  { id: 's2', label: '1.2 Peralatan Jaringan' },
  { id: 's3', label: '1.3 Standar Kabel dan Konektor' },
  { id: 's4', label: '1.4 Teknologi Jaringan' },
];

export default function Modul1() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('modul1'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="modul1" sections={sections} />

      <MateriCard icon={Info} title="1.1 Kebutuhan Teknis Pengguna">
        <p>Sebelum merancang jaringan, seorang teknisi harus memahami kebutuhan teknis pengguna. Kebutuhan ini menjadi dasar dalam menentukan peralatan dan teknologi yang akan digunakan.</p>
        <div className="info-box">
          <strong><Star size={14} /> Mengapa Penting?</strong>
          <p>Jaringan yang tidak sesuai kebutuhan akan mengakibatkan pemborosan biaya atau kinerja yang buruk.</p>
        </div>
        <h3 style={{marginTop: 20}}>Faktor Kebutuhan Teknis:</h3>
        <ul>
          <li><strong>Volume Pengguna</strong> — Berapa banyak perangkat yang akan terhubung? Jumlah pengguna menentukan kapasitas switch, bandwidth, dan skala jaringan.</li>
          <li><strong>Tipe Penggunaan</strong> — Browsing ringan, streaming video, transfer file besar, VoIP, atau video conference? Setiap kebutuhan memiliki parameter bandwidth berbeda.</li>
          <li><strong>Kecepatan (Bandwidth)</strong> — Browsing ~1 Mbps, streaming HD ~5 Mbps, transfer file ~100 Mbps.</li>
          <li><strong>Keamanan</strong> — Firewall, VPN, enkripsi data, atau autentikasi pengguna.</li>
          <li><strong>Skalabilitas</strong> — Jaringan perlu berkembang di masa depan?</li>
          <li><strong>Reliability</strong> — Jaringan untuk rumah sakit membutuhkan uptime lebih tinggi dari warnet.</li>
          <li><strong>Budget</strong> — Anggaran menentukan merek dan tipe peralatan.</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Settings} title="1.2 Peralatan Jaringan">
        <h3>A. Perangkat Penghubung (Connecting Devices)</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Peralatan</th><th>Fungsi</th><th>OSI Layer</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>NIC</strong></td><td>Antarmuka jaringan, mengubah data menjadi sinyal</td><td>L1-2</td><td>Intel I219-V</td></tr>
              <tr><td><strong>Kabel UTP/STP</strong></td><td>Media transmisi twisted pair</td><td>L1</td><td>Cat5e, Cat6, Cat6a</td></tr>
              <tr><td><strong>Fiber Optik</strong></td><td>Media transmisi cahaya, kecepatan tinggi</td><td>L1</td><td>Single-mode, Multi-mode</td></tr>
              <tr><td><strong>Hub</strong></td><td>Menghubungkan perangkat, broadcast ke semua port</td><td>L1</td><td>Sudah jarang</td></tr>
              <tr><td><strong>Switch</strong></td><td>Filtering berdasarkan MAC address</td><td>L2</td><td>Cisco Catalyst</td></tr>
              <tr><td><strong>Router</strong></td><td>Menghubungkan jaringan berbeda, routing paket</td><td>L3</td><td>MikroTik, Cisco ISR</td></tr>
              <tr><td><strong>Access Point</strong></td><td>Akses nirkabel (Wi-Fi)</td><td>L1-2</td><td>Ubiquiti, TP-Link</td></tr>
              <tr><td><strong>Modem</strong></td><td>Mengubah sinyal digital ↔ analog</td><td>L1</td><td>Modem ADSL/Fiber</td></tr>
              <tr><td><strong>Firewall</strong></td><td>Keamanan, filter lalu lintas</td><td>L3-7</td><td>Fortinet, pfSense</td></tr>
            </tbody>
          </table>
        </div>
        <h3 style={{marginTop: 20}}>B. Perangkat Akhir (End Devices)</h3>
        <ul>
          <li><strong>Workstation/PC</strong> — Komputer desktop untuk kantor</li>
          <li><strong>Laptop</strong> — Komputer portabel dengan Wi-Fi built-in</li>
          <li><strong>Smartphone/Tablet</strong> — Perangkat mobile via Wi-Fi/seluler</li>
          <li><strong>Printer Network</strong> — Printer terhubung langsung ke jaringan</li>
          <li><strong>IP Camera</strong> — Kamera CCTV berbasis IP</li>
          <li><strong>Server</strong> — Menyediakan layanan (file, web, database)</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Plug} title="1.3 Standar Kabel dan Konektor">
        <h3>Standar Warna Kabel UTP (TIA/EIA-568)</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Pin</th><th>TIA/EIA-568A</th><th>TIA/EIA-568B (Umum)</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Hijau Putih</td><td>Oranye Putih</td></tr>
              <tr><td>2</td><td>Hijau</td><td>Oranye</td></tr>
              <tr><td>3</td><td>Oranye Putih</td><td>Hijau Putih</td></tr>
              <tr><td>4</td><td>Biru</td><td>Biru</td></tr>
              <tr><td>5</td><td>Biru Putih</td><td>Biru Putih</td></tr>
              <tr><td>6</td><td>Oranye</td><td>Hijau</td></tr>
              <tr><td>7</td><td>Coklat Putih</td><td>Coklat Putih</td></tr>
              <tr><td>8</td><td>Coklat</td><td>Coklat</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Perbedaan Kabel</strong>
          <p><strong>Straight-through:</strong> Kedua ujung sama (568B-568B). Untuk perangkat berbeda (PC ke Switch).<br/>
          <strong>Crossover:</strong> Ujung berbeda (568A-568B). Untuk perangkat sama (PC ke PC).</p>
        </div>
        <h3 style={{marginTop: 20}}>Jenis Konektor</h3>
        <ul>
          <li><strong>RJ-45</strong> — Konektor utama untuk kabel UTP/STP Ethernet</li>
          <li><strong>RJ-11</strong> — Konektor untuk kabel telepon</li>
          <li><strong>SC/ST/LC</strong> — Konektor untuk Fiber Optik</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Wifi} title="1.4 Teknologi Jaringan">
        <h3>A. Ethernet (Kabel)</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Standar</th><th>Kecepatan</th><th>Kabel</th><th>Jarak</th></tr></thead>
            <tbody>
              <tr><td>Fast Ethernet</td><td>100 Mbps</td><td>Cat5</td><td>100m</td></tr>
              <tr><td>Gigabit Ethernet</td><td>1 Gbps</td><td>Cat5e/Cat6</td><td>100m</td></tr>
              <tr><td>10 Gigabit</td><td>10 Gbps</td><td>Cat6a/Cat7</td><td>100m</td></tr>
            </tbody>
          </table>
        </div>
        <h3 style={{marginTop: 20}}>B. Wireless (Wi-Fi)</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Standar</th><th>Nama</th><th>Kecepatan</th><th>Frekuensi</th></tr></thead>
            <tbody>
              <tr><td>802.11n</td><td>Wi-Fi 4</td><td>600 Mbps</td><td>2.4/5 GHz</td></tr>
              <tr><td>802.11ac</td><td>Wi-Fi 5</td><td>6.9 Gbps</td><td>5 GHz</td></tr>
              <tr><td>802.11ax</td><td>Wi-Fi 6/6E</td><td>9.6 Gbps</td><td>2.4/5/6 GHz</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><Star size={14} /> Tips Memilih</strong>
          <p>Jaringan kantor = minimal Gigabit Ethernet. Mobilitas = Wi-Fi 5/6. Backbone/server = Fiber Optik.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Wifi} title="Video Pembelajaran">
        <VideoEmbed videoId="LiMdHeaS4zY" title="Network Fundamentals - Peralatan Jaringan (Router, Switch, Hub)" />
      </MateriCard>
    </div>
  );
}

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}
