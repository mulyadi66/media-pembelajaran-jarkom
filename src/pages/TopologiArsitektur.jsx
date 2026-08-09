import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Layers, Network, TreePine, Settings, FileText, CheckSquare, AlertTriangle, Star } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import VideoEmbed from '../components/VideoEmbed';

const sections = [
  { id: 's1', label: '2.1 Konsep dan Jenis Topologi Jaringan' },
  { id: 's2', label: '2.2 Karakteristik Topologi' },
  { id: 's3', label: '2.3 Jenis Arsitektur Jaringan' },
  { id: 's4', label: '2.4 Kriteria Pemilihan Topologi & Arsitektur' },
];

export default function TopologiArsitektur() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('topologi-arsitektur'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="topologi-arsitektur" sections={sections} />

      <MateriCard icon={Network} title="2.1 Konsep dan Jenis Topologi Jaringan">
        <p><strong>Topologi jaringan</strong> merujuk pada cara perangkat terhubung secara fisik dan logis dalam sebuah jaringan. Topologi menentukan bagaimana data mengalir dan bagaimana kegagalan dapat terjadi.</p>

        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Topologi</th><th>Jenis</th><th>Karakteristik Utama</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Bus</strong></td>
                <td>Fisik & Logis</td>
                <td>Data mengalir ke kedua arah, satu kegagalan dapat melumpuhkan jaringan, sederhana dan murah</td>
              </tr>
              <tr>
                <td><strong>Star</strong></td>
                <td>Fisik</td>
                <td>Sentralisasi di switch/hub, satu titik kegagalan di switch, mudah diperluas dan dikelola</td>
              </tr>
              <tr>
                <td><strong>Ring</strong></td>
                <td>Fisik & Logis</td>
                <td>Data mengalir satu arah, setiap node meneruskan paket, kegagalan satu node dapat terputuskan</td>
              </tr>
              <tr>
                <td><strong>Mesh</strong></td>
                <td>Fisik & Logis</td>
                <td>Koneksi antar semua node, redundansi tinggi, sangat andal, mahal dan kompleks</td>
              </tr>
              <tr>
                <td><strong>Tree (Hierarchical)</strong></td>
                <td>Fisik</td>
                <td>Kombinasi star dan bus, berjenjang, mudah dikelola, kegagalan pada level dapat terbatas</td>
              </tr>
              <tr>
                <td><strong>Hybrid</strong></td>
                <td>Logis</td>
                <td>Kombinasi beberapa topologi, fleksibel, dapat disesuaikan dengan kebutuhan</td>
              </tr>
              <tr>
                <td><strong>Point-to-Point</strong></td>
                <td>Fisik & Logis</td>
                <td>Koneksi langsung antara dua node, dedicated bandwidth, sederhana untuk jarak jauh</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="info-box">
          <strong><Star size={14} /> Rekomendasi Umum:</strong>
          <ul>
            <li><strong>Rumah/Kantor Kecil:</strong> Star (menggunakan switch)</li>
            <li><strong>Jaringan Besar:</strong> Star atau Hybrid</li>
            <li><strong>Jaringan Kritis:</strong> Mesh dengan redundansi</li>
            <li><strong>Infrastruktur Telekomunikasi:</strong> Ring atau Sonet</li>
          </ul>
        </div>
      </MateriCard>

      <MateriCard icon={TreePine} title="2.2 Karakteristik Topologi">
        <h3>Karakteristik Teknis</h3>

        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Topologi</th><th>Metode Aliran Data</th><th>Redundancy</th><th>Scalability</th><th>Cost</th><th>Reliability</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Bus</strong></td>
                <td>CSMA/CD, collision</td>
                <td>Rendah</td>
                <td>Sedang</td>
                <td>Rendah</td>
                <td>Rendah</td>
              </tr>
              <tr>
                <td><strong>Star</strong></td>
                <td>Switch forwarding</td>
                <td>Medium (switch redundancy)</td>
                <td>Tinggi</td>
                <td>Medium</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td><strong>Ring</strong></td>
                <td>Token passing, FDDI</td>
                <td>Rendah</td>
                <td>Sedang</td>
                <td>Medium</td>
                <td>Rendah</td>
              </tr>
              <tr>
                <td><strong>Mesh</strong></td>
                <td>Multiple paths</td>
                <td>Tinggi</td>
                <td>Rendah (kompleks)</td>
                <td>Tinggi</td>
                <td>Tinggi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Perbandingan Kinerja</h3>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Latihan Praktis:</strong>
          <p>Identifikasi topologi yang paling sesuai untuk:
          <ol>
            <li>Klinik rumah sakit (kebutuhan uptime &gt;99,9%)</li>
            <li>Kantor cabang bank (keamanan & redundansi)</li>
            <li>Warnet dengan 10 komputer</li>
            <li>Cabang perusahaan di kota berbeda</li>
          </ol></p>
        </div>

        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Pertimbangan Penting:</strong>
          <ul>
            <li><strong>Kegagalan</strong> dapat bersifat tunggal (single point of failure)</li>
            <li><strong>Latency</strong> berbeda berdasarkan jarak fisik dan hop</li>
            <li><strong>Bandwidth</strong> per node bervariasi</li>
            <li><strong>Management</strong> complexity meningkat dengan ukuran jaringan</li>
          </ul>
        </div>
      </MateriCard>

      <MateriCard icon={Settings} title="2.3 Jenis Arsitektur Jaringan">
        <p><strong>Arsitektur jaringan</strong> adalah desain keseluruhan, kebijakan, aturan, dan implementasi yang mengatur cara jaringan beroperasi dan berinteraksi. Ini mencakup protokol, topologi, dan desain logical.</p>

        <h3>Arsitektur Layer</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Layer</th><th>Contoh</th><th>Fokus</th><th>Protokol Utama</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Core</strong></td>
                <td>Router utama</td>
                <td>Kecepatan tinggi, aggregated traffic</td>
                <td>Routing, BGP, OSPF</td>
              </tr>
              <tr>
                <td><strong>Distribution</strong></td>
                <td>Aggregation switch</td>
                <td>Policy enforcement, routing</td>
                <td>VLAN, ACL, STP</td>
              </tr>
              <tr>
                <td><strong>Access</strong></td>
                <td>End-user switch</td>
                <td>Direct connection ke device</td>
                <td>Spanning Tree, Port security</td>
              </tr>
              <tr>
                <td><strong>Edge</strong></td>
                <td>Internet connection</td>
                <td>External connectivity</td>
                <td>Firewall, NAT, VPN</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Arsitektur Logical</h3>

        <MateriCard icon={FileText} title="Client-Server Architecture">
          <h3>A. Client-Server</h3>
          <p>Model yang memisahkan penyedia layanan (server) dan peminta layanan (client)</p>
          <ul>
            <li><strong>Web Server</strong> — Apache, Nginx, IIS</li>
            <li><strong>Database Server</strong> — MySQL, PostgreSQL, Oracle</li>
            <li><strong>File Server</strong> — Windows Server, NFS</li>
            <li><strong>Mail Server</strong> — Postfix, Exchange</li>
          </ul>
        </MateriCard>

        <MateriCard icon={Network} title="Peer-to-Peer Architecture">
          <h3>B. Peer-to-Peer</h3>
          <p>Model desentralisasi, tidak ada server utama</p>
          <ul>
            <li><strong>P2P File Sharing</strong> — BitTorrent, eDonkey</li>
            <li><strong>P2P Communication</strong> — SIP, WebRTC</li>
            <li><strong>Distributed Computing</strong> — Hadoop, Blockchain</li>
          </ul>
        </MateriCard>

        <div className="info-box">
          <strong><Star size={14} /> Pilihan Arsitektur:</strong>
          <ul>
            <li><strong>Cloud-based</strong> — AWS, Azure, GCP</li>
            <li><strong>Hybrid</strong> — Kombinasi cloud dan on-premise</li>
            <li><strong>Software-defined</strong> — SD-WAN, OpenFlow</li>
          </ul>
        </div>
      </MateriCard>

      <MateriCard icon={AlertTriangle} title="2.4 Kriteria Pemilihan Topologi & Arsitektur">
        <h3>A. Faktor Teknis</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Faktor</th><th>Star</th><th>Mesh</th><th>Ring</th><th>Tree</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Bandwidth</strong></td>
                <td>1 Gbps per node</td>
                <td>Dedicated per pair</td>
                <td>Shared bandwidth</td>
                <td>Hierarchical bandwidth</td>
              </tr>
              <tr>
                <td><strong>Latency</strong></td>
                <td>Rendah (1 hop)</td>
                <td>Sangat rendah</td>
                <td>Medium (ring panjang)</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td><strong>Reliability</strong></td>
                <td>Medium</td>
                <td>Tinggi</td>
                <td>Rendah</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td><strong>Scalability</strong></td>
                <td>Tinggi</td>
                <td>Rendah (cost)</td>
                <td>Sedang</td>
                <td>Tinggi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>B. Kriteria Pemilihan berdasarkan Industri</h3>

        <div className="info-box">
          <strong>Rumah Sakit/Klinik (HIPAA Compliant):</strong>
          <ul>
            <li><strong>Topologi:</strong> Star dengan redundansi switch</li>
            <li><strong>Arsitektur:</strong> Layered dengan DMZ</li>
            <li><strong>Keamanan:</strong> SSL, VPN, IDS/IPS</li>
            <li><strong>Reliability:</strong> UPS, generator, failover</li>
          </ul>
        </div>

        <div className="info-box">
          <strong>Bank/Financial (SOX Compliant):</strong>
          <ul>
            <li><strong>Topologi:</strong> Hybrid Star-Ring</li>
            <li><strong>Arsitektur:</strong> Multi-tier dengan segregasi</li>
            <li><strong>Keamanan:</strong> Firewall, token authentication</li>
            <li><strong>Audit:</strong> Logging, monitoring</li>
          </ul>
        </div>

        <div className="info-box">
          <strong>Factory Manufacturing:</strong>
          <ul>
            <li><strong>Topologi:</strong> Bus atau Ring (rugged)</li>
            <li><strong>Arsitektur:</strong> Deterministic Ethernet (PROFINET)</li>
            <li><strong>Real-time:</strong> PLC integration</li>
            <li><strong>Redundancy:</strong> Hot-spare, ring backup</li>
          </ul>
        </div>

        <h3>C. Studi Kasus - Pilihan Topologi</h3>

        <MateriCard icon={Star} title="Studi Kasus 1: Kantor Cabang Bank">
          <h3>Permasalahan:</h3>
          <p>Cabang bank dengan 50 workstation membutuhkan keamanan tinggi dan uptime 99,9%</p>
          <h3>Pilihan:</h3>
          <ul>
            <li><strong>Star</strong> — sederhana, cost-effective</li>
            <li><strong>Hybrid Star-Ring</strong> — redundant, failover</li>
            <li><strong>Mesh</strong> — sangat reliable, cost prohibitive</li>
          </ul>
          <h3><strong>Keputusan:</strong> Hybrid Star-Ring Architecture</h3>
          <p>Alasan: Kombinasi kesederhanaan star dengan redundancy ring untuk failover, memenuhi kebutuhan SLA bank.</p>
        </MateriCard>

        <MateriCard icon={Star} title="Studi Kasus 2: Rumah Sakit Umum">
          <h3>Permasalahan:</h3>
          <p>Rumah sakit dengan 200+ perangkat medis membutuhkan uptime 99,99% dan compliance HIPAA</p>
          <h3>Pilihan:</h3>
          <ul>
            <li><strong>Star dengan switch redundant</strong> — simple, manageable</li>
            <li><strong>Mesh</strong> — sangat reliable tapi mahal</li>
            <li><strong>Tree</strong> — scalable, hierarchical</li>
          </ul>
          <h3><strong>Keputusan:</strong> Star dengan Redundant Core Switches</h3>
          <p>Alasan: Balance antara reliability (redundant core), cost, dan manageability untuk lingkungan medis yang kritis.</p>
        </MateriCard>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <p><strong>Bab 2 Tugas Praktis:</strong> Analisis kebutuhan jaringan untuk:
          <ol>
            <li>Kost dengan 10 penghuni (budget terbatas)</li>
            <li>Data center (uptime 99,999%)</li>
            <li>Kantor sales mobile (wanita, kerja lapangan)</li>
            <li>Lab teknologi SMK (pembelajaran praktis)</li>
          </ol>
          <strong>Tuliskan:</strong> Topologi yang dipilih, alasan pemilihan, arsitektur yang digunakan, dan perkiraan biaya.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Layers} title="Video Pembelajaran">
        <VideoEmbed videoId="7Ut4u8qVwRU" title="Topologi Jaringan Lengkap (Star, Bus, Ring, Mesh, Wireless) - Bahasa Indonesia" />
        <VideoEmbed videoId="QGykYWbdf0A" title="Topologi Jaringan - Bus, Ring, Star, Mesh, Tree" />
      </MateriCard>
    </div>
  );
}

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon size={24} aria-hidden="true" />
        <h3 style={{ margin: 0 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}
