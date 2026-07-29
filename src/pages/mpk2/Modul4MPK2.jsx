import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Phone, Mic, Server, Settings, Star, AlertTriangle, CheckCircle } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';
import CallFlowSimulator from '../../components/mpk2/CallFlowSimulator';
import CodecComparison from '../../components/mpk2/CodecComparison';

const sections = [
  { id: 's1', label: '4.1 Konsep Dasar VoIP' },
  { id: 's2', label: '4.2 Protokol VoIP' },
  { id: 's3', label: '4.3 Perangkat VoIP' },
  { id: 's4', label: '4.4 Konfigurasi VoIP' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Modul4MPK2() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('mpk2_modul4'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="mpk2_modul4" sections={sections} />

      <MateriCard icon={Phone} title="4.1 Konsep Dasar VoIP">
        <p><strong>Voice over Internet Protocol (VoIP)</strong> adalah teknologi yang memungkinkan komunikasi suara melalui jaringan IP (Internet Protocol). VoIP mengubah suara analog menjadi data digital yang dikirim dalam bentuk paket.</p>
        <div className="info-box">
          <strong><Star size={14} /> Keunggulan VoIP</strong>
          <p><strong>Biaya rendah</strong> — Panggilan via internet lebih murah dari PSTN.<br/>
          <strong>Integrasi</strong> — Suara, video, dan data dalam satu jaringan.<br/>
          <strong>Fleksibilitas</strong> — Bisa digunakan dari mana saja dengan koneksi internet.<br/>
          <strong>Fitur lengkap</strong> — Voice mail, call forwarding, conference call.</p>
        </div>
        <h3>Perbandingan VoIP vs PSTN:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Aspek</th><th>VoIP</th><th>PSTN</th></tr></thead>
            <tbody>
              <tr><td>Media</td><td>Jaringan IP (internet)</td><td>Kabel telepon (sirkuit)</td></tr>
              <tr><td>Biaya</td><td>Murah, bahkan gratis antar pengguna</td><td>Mahal, apalagi interlokal/internasional</td></tr>
              <tr><td>Kualitas</td><td>Tergantung koneksi internet</td><td>Stabil dan konsisten</td></tr>
              <tr><td>Fitur</td><td>Video call, screen sharing, conference</td><td>Terbatas suara saja</td></tr>
              <tr><td>Mobilitas</td><td>Bisa di mana saja</td><td>Terikat lokasi</td></tr>
            </tbody>
          </table>
        </div>
      </MateriCard>

      <MateriCard icon={Mic} title="4.2 Protokol VoIP">
        <p>VoIP menggunakan beberapa protokol untuk signaling, transport suara, dan pengaturan sesi komunikasi.</p>
        <h3>A. Signaling Protocol</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Protokol</th><th>Fungsi</th><th>Port</th></tr></thead>
            <tbody>
              <tr><td><strong>SIP</strong> (Session Initiation Protocol)</td><td>Membuat, mengelola, dan mengakhiri sesi komunikasi</td><td>5060 (UDP/TCP)</td></tr>
              <tr><td><strong>H.323</strong></td><td>Standar ITU-T untuk komunikasi multimedia</td><td>1720</td></tr>
              <tr><td><strong>IAX</strong> (Inter-Asterisk eXchange)</td><td>Protokol Asterisk untuk trunking</td><td>4569</td></tr>
            </tbody>
          </table>
        </div>
        <h3>B. Transport Protocol</h3>
        <ul>
          <li><strong>RTP</strong> (Real-time Transport Protocol) — Membawa data suara/video digital</li>
          <li><strong>RTCP</strong> — Memberikan informasi kualitas panggilan</li>
          <li><strong>SRTP</strong> — RTP dengan enkripsi untuk keamanan</li>
        </ul>
        <div className="info-box">
          <strong><Star size={14} /> Codec VoIP</strong>
          <p>Codec mengkompresi suara digital untuk menghemat bandwidth. Codec umum: G.711 (64 kbps, kualitas terbaik), G.729 (8 kbps, hemat bandwidth), GSM (13 kbps), Opus (6-510 kbps).</p>
        </div>
      </MateriCard>

      <MateriCard icon={Server} title="4.3 Perangkat VoIP">
        <p>Implementasi VoIP memerlukan beberapa perangkat keras dan lunak:</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Perangkat</th><th>Fungsi</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>IP Phone</strong></td><td>Telepon khusus yang terhubung ke jaringan IP</td><td>Grandstream GXP, Yealink T4</td></tr>
              <tr><td><strong>Softphone</strong></td><td>Aplikasi VoIP di PC/smartphone</td><td>Zoiper, Linphone, MicroSIP</td></tr>
              <tr><td><strong>ATA</strong> (Analog Telephone Adapter)</td><td>Menghubungkan telepon analog ke jaringan IP</td><td>Linksys PAP2, Grandstream HT</td></tr>
              <tr><td><strong>VoIP Gateway</strong></td><td>Menghubungkan VoIP ke PSTN</td><td>Cisco, AudioCodes</td></tr>
              <tr><td><strong>PBX/IP PBX</strong></td><td>Server telepon untuk routing panggilan internal</td><td>Asterisk, FreePBX, 3CX</td></tr>
              <tr><td><strong>VoIP Server</strong></td><td>Registrasi dan manajemen pengguna VoIP</td><td>Kamailio, OpenSIPS</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Kebutuhan Bandwidth</strong>
          <p>Setiap panggilan VoIP membutuhkan bandwidth minimal: G.711 = 64 kbps, G.729 = 8 kbps. Untuk 10 panggilan simultan dengan G.711, perlu bandwidth minimal 640 kbps + overhead.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Settings} title="4.4 Konfigurasi VoIP">
        <h3>A. Instalasi IP PBX (Asterisk/FreePBX)</h3>
        <ol>
          <li>Siapkan server (bisa PC/Linux) dengan OS CentOS/Debian</li>
          <li>Install FreePBX: <code>yum install -y freePBX</code></li>
          <li>Akses web interface via browser: http://[IP-server]</li>
          <li>Buat ekstensi (Extension) untuk setiap pengguna (contoh: 1001, 1002)</li>
          <li>Buat trunk untuk menghubungkan ke provider VoIP atau PSTN</li>
        </ol>
        <h3>B. Konfigurasi Ekstensi SIP (Contoh di FreePBX)</h3>
        <ol>
          <li>Masuk menu Applications → Extensions → Add Extension</li>
          <li>Pilih tipe: SIP (chan_sip) atau PJSIP</li>
          <li>Isi User Extension: 1001, Display Name: User1</li>
          <li>Set Secret (password): ****</li>
          <li>Konfigurasi codec dan transport (UDP/TCP/TLS)</li>
          <li>Submit dan Apply Config</li>
        </ol>
        <h3>C. Konfigurasi IP Phone / Softphone</h3>
        <ol>
          <li>Masukkan IP server VoIP di field "SIP Server"</li>
          <li>Isi Username: nomor ekstensi (contoh: 1001)</li>
          <li>Isi Password: secret yang sudah dikonfigurasi</li>
          <li>Set transport: UDP (port 5060)</li>
          <li>Simpan dan lakukan test panggilan ke ekstensi lain</li>
        </ol>
        <div className="info-box success">
          <strong><CheckCircle size={14} /> Test Panggilan</strong>
          <p>Setelah konfigurasi, lakukan panggilan antar ekstensi. Jika berhasil, lanjutkan dengan konfigurasi trunk untuk panggilan ke luar (PSTN/mobile).</p>
        </div>
      </MateriCard>

      <div className="materi-card">
        <h3>📞 Simulasi Alur Panggilan VoIP</h3>
        <p style={{ marginBottom: 16, color: '#94a3b8' }}>Pelajari tahapan panggilan VoIP dari idle hingga hang up secara interaktif.</p>
        <CallFlowSimulator />
      </div>

      <div className="materi-card">
        <h3>🎛️ Perbandingan Codec VoIP</h3>
        <p style={{ marginBottom: 16, color: '#94a3b8' }}>Bandingkan berbagai codec VoIP berdasarkan bitrate, bandwidth, MOS, dan latency.</p>
        <CodecComparison />
      </div>
    </div>
  );
}