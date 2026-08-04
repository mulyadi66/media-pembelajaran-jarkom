import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Map, Settings, Signal, Wifi, Star, AlertTriangle, CheckCircle } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';
import AntennaAlignment from '../../components/mpk2/AntennaAlignment';
import APConfigSimulator from '../../components/mpk2/APConfigSimulator';

const sections = [
  { id: 's1', label: '3.1 Site Survey & Perencanaan' },
  { id: 's2', label: '3.2 Konfigurasi Access Point' },
  { id: 's3', label: '3.3 Wireless Bridge & Repeater' },
  { id: 's4', label: '3.4 Pengujian & Optimasi' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Modul3MPK2() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('mpk2_modul3'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="mpk2_modul3" sections={sections} />

      <MateriCard icon={Map} title="3.1 Site Survey dan Perencanaan">
        <p>Site survey adalah proses inspeksi lokasi untuk menentukan penempatan perangkat nirkabel yang optimal. Survey yang baik mencegah masalah coverage dan interferensi.</p>
        <h3>Langkah Site Survey:</h3>
        <ol>
          <li><strong>Inspeksi Visual</strong> — Identifikasi halangan fisik (tembok, kolom, peralatan)</li>
          <li><strong>Pengukuran Awal</strong> — Ukur dimensi ruangan, tinggi plafon, material bangunan</li>
          <li><strong>Identifikasi Sumber Interferensi</strong> — Microwave, cordless phone, Bluetooth, AP tetangga</li>
          <li><strong>Penentuan Posisi AP</strong> — Gunakan software simulasi atau pengalaman</li>
          <li><strong>Verifikasi Coverage</strong> — Ukur kekuatan sinyal di berbagai titik</li>
          <li><strong>Dokumentasi</strong> — Buat peta coverage dan catat konfigurasi</li>
        </ol>
        <div className="info-box">
          <strong><Star size={14} /> Tools Site Survey</strong>
          <p><strong>Software:</strong> Ekahau, NetSpot, Wi-Fi Analyzer (Android), Acrylic WiFi<br/>
          <strong>Hardware:</strong> Laptop dengan Wi-Fi adapter, tablet/smartphone, spectrum analyzer</p>
        </div>
      </MateriCard>

      <MateriCard icon={Settings} title="3.2 Konfigurasi Access Point">
        <p>Konfigurasi AP dilakukan melalui web interface atau SSH. Berikut langkah-langkah konfigurasi dasar:</p>
        <h3>A. Konfigurasi Dasar</h3>
        <ol>
          <li>Hubungkan AP ke komputer via kabel UTP (port LAN)</li>
          <li>Set IP komputer ke subnet yang sama dengan AP (default: 192.168.0.x atau 192.168.1.x)</li>
          <li>Akses web interface AP melalui browser (default IP: 192.168.0.1 atau 192.168.1.1)</li>
          <li>Login dengan username dan password default (admin/admin)</li>
        </ol>
        <h3>B. Pengaturan Wireless</h3>
        <ul>
          <li><strong>SSID</strong> — Nama jaringan (contoh: SMKN2_Lab, TJKT_Guest)</li>
          <li><strong>Security</strong> — Pilih WPA2-PSK (AES) atau WPA3</li>
          <li><strong>Password</strong> — Minimal 8 karakter, kombinasi huruf, angka, simbol</li>
          <li><strong>Channel</strong> — Pilih kanal dengan sedikit interferensi</li>
          <li><strong>Band</strong> — 2.4 GHz (jangkauan) atau 5 GHz (kecepatan)</li>
          <li><strong>Power Transmit</strong> — Sesuaikan dengan kebutuhan coverage</li>
        </ul>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Penting!</strong>
          <p>Selalu ganti password default AP setelah konfigurasi selesai. Password default diketahui publik dan sangat rentan.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Wifi} title="3.3 Wireless Bridge dan Repeater">
        <h3>A. Wireless Bridge</h3>
        <p>Bridge menghubungkan dua jaringan secara nirkabel. Digunakan untuk menghubungkan gedung yang terpisah tanpa kabel.</p>
        <ul>
          <li><strong>Point-to-Point (P2P)</strong> — Menghubungkan 2 lokasi</li>
          <li><strong>Point-to-Multipoint (P2MP)</strong> — 1 pusat ke beberapa lokasi</li>
          <li>Menggunakan antena directional untuk jarak jauh</li>
          <li>Mendukung throughput hingga 1 Gbps (Wi-Fi 5/6)</li>
        </ul>
        <h3>B. Wireless Repeater</h3>
        <p>Repeater memperluas jangkauan sinyal dengan menerima dan memancarkan ulang sinyal dari AP utama.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Mode</th><th>Fungsi</th><th>Kelemahan</th></tr></thead>
            <tbody>
              <tr><td><strong>Repeater</strong></td><td>Memperluas coverage AP utama</td><td>Throughput turun 50%</td></tr>
              <tr><td><strong>WDS</strong></td><td>Wireless Distribution System</td><td>Konfigurasi kompleks, kompatibilitas</td></tr>
              <tr><td><strong>Mesh</strong></td><td>Multiple node saling terhubung</td><td>Biaya lebih tinggi</td></tr>
            </tbody>
          </table>
        </div>
      </MateriCard>

      <MateriCard icon={Signal} title="3.4 Pengujian dan Optimasi">
        <h3>A. Parameter yang Diuji</h3>
        <ul>
          <li><strong>Signal Strength (RSSI)</strong> — Kekuatan sinyal di lokasi client</li>
          <li><strong>Signal-to-Noise Ratio (SNR)</strong> — Perbandingan sinyal dengan noise</li>
          <li><strong>Throughput</strong> — Kecepatan transfer data aktual</li>
          <li><strong>Latency</strong> — Waktu respon jaringan (ping)</li>
          <li><strong>Packet Loss</strong> — Persentase paket hilang</li>
          <li><strong>Jitter</strong> — Variasi latency (penting untuk VoIP)</li>
        </ul>
        <h3>B. Optimasi Jaringan Nirkabel</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Masalah</th><th>Solusi</th></tr></thead>
            <tbody>
              <tr><td>Coverage kosong (dead spot)</td><td>Tambah AP / repeater, pindahkan AP</td></tr>
              <tr><td>Interferensi kanal</td><td>Gunakan kanal non-overlap (1, 6, 11 untuk 2.4 GHz)</td></tr>
              <tr><td>AP terlalu padat</td><td>Turunkan power transmit, tambah AP dengan power rendah</td></tr>
              <tr><td>Roaming lambat</td><td>Konfigurasi fast roaming (802.11r), kurangi coverage overlap</td></tr>
              <tr><td>Band steering</td><td>Aktifkan band steering untuk dorong client ke 5 GHz</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><CheckCircle size={14} /> Target Kualitas</strong>
          <p>RSSI target: ≥ -67 dBm. SNR minimal: 25 dB. Latency: &lt; 50 ms. Packet loss: &lt; 1%.</p>
        </div>
      </MateriCard>

      <div className="materi-card">
        <h3>📡 Simulasi Penyelarasan Antena</h3>
        <p style={{ marginBottom: 16, color: '#94a3b8' }}>Atur azimuth dan elevasi antena untuk mendapatkan sinyal terbaik.</p>
        <AntennaAlignment />
      </div>

      <div className="materi-card">
        <h3>⚙️ Simulasi Konfigurasi Access Point</h3>
        <p style={{ marginBottom: 16, color: '#94a3b8' }}>Konfigurasi SSID, keamanan, channel, dan band. Simulasikan koneksi client.</p>
        <APConfigSimulator />
      </div>
    </div>
  );
}