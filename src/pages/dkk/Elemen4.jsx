import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Ruler, Activity, BarChart3, Wrench, Star, AlertTriangle } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '4.1 Multimeter' },
  { id: 's2', label: '4.2 Cable Tester & Toner' },
  { id: 's3', label: '4.3 OTDR & Power Meter' },
  { id: 's4', label: '4.4 Spectrum Analyzer' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Elemen4() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('dkk_elemen4'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="dkk_elemen4" sections={sections} />

      <MateriCard icon={Activity} title="4.1 Multimeter (Multitester)">
        <p>Multimeter adalah alat ukur listrik yang wajib dimiliki setiap teknisi. Fungsinya untuk mengukur tegangan (volt), arus (ampere), dan hambatan (ohm).</p>
        <div className="info-box">
          <strong><Star size={14} /> Jenis Multimeter</strong>
          <p><strong>Analog:</strong> Menggunakan jarum penunjuk, lebih responsif untuk perubahan nilai.<br/>
          <strong>Digital (DMM):</strong> Menampilkan angka digital, lebih akurat dan mudah dibaca.</p>
        </div>
        <h3 style={{marginTop: 20}}>Cara Menggunakan Multimeter:</h3>
        <ol>
          <li>Pilih mode pengukuran (ACV, DCV, Ω, A) dengan selector</li>
          <li>Pasang probe: hitam ke COM, merah ke V/Ω/A</li>
          <li>Untuk tegangan: probe paralel dengan sumber listrik</li>
          <li>Untuk hambatan: probe seri dengan komponen (pastikan tidak ada tegangan)</li>
          <li>Baca nilai pada display</li>
        </ol>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Keselamatan</strong>
          <p>Jangan mengukur hambatan pada rangkaian yang masih dialiri listrik. Selalu mulai dari range tertinggi untuk menghindari kerusakan alat.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Wrench} title="4.2 Cable Tester & Toner Probe">
        <h3>A. Cable Tester (LAN Tester)</h3>
        <p>Alat untuk menguji kabel UTP/STP setelah crimping. Menguji:</p>
        <ul>
          <li><strong>Kontinuitas</strong> — Setiap pin terhubung dengan baik</li>
          <li><strong>Wiring</strong> — Urutan kabel sesuai standar (568A/568B)</li>
          <li><strong>Short Circuit</strong> — Tidak ada korsleting antar pin</li>
          <li><strong>Open Circuit</strong> — Tidak ada pin yang putus</li>
          <li><strong>Crossover Detection</strong> — Mendeteksi kabel crossover</li>
        </ul>
        <h3 style={{marginTop: 20}}>B. Toner Probe</h3>
        <p>Alat untuk melacak dan mengidentifikasi kabel dalam instalasi yang padat. Cara kerja:</p>
        <ol>
          <li>Tempelkan toner (generator nada) ke kabel yang ingin dilacak</li>
          <li>Toner mengirimkan sinyal nada melalui kabel</li>
          <li>Probe (detector) ditempelkan ke kabel-kabel yang dicurigai</li>
          <li>Probe akan mengeluarkan suara nada jika kabel yang ditempeli sesuai dengan toner</li>
        </ol>
      </MateriCard>

      <MateriCard icon={BarChart3} title="4.3 OTDR & Power Meter Fiber Optik">
        <h3>A. OTDR (Optical Time Domain Reflectometer)</h3>
        <p>OTDR adalah alat canggih untuk mengukur karakteristik kabel fiber optik. OTDR mengirim pulsa cahaya dan menganalisis pantulan cahaya untuk:</p>
        <ul>
          <li><strong>Menentukan panjang kabel</strong> — Dari waktu tempuh cahaya</li>
          <li><strong>Mendeteksi kerusakan</strong> — Lokasi putus, tekukan, atau splice jelek</li>
          <li><strong>Mengukur redaman total</strong> — Attenuation dalam dB</li>
          <li><strong>Mengidentifikasi konektor/sambungan</strong> — Melalui reflectance spike</li>
        </ul>
        <div className="info-box">
          <strong><Star size={14} /> Interpretasi Grafik OTDR</strong>
          <p>Grafik OTDR menunjukkan daya pantul sepanjang kabel. Turunan curam = redaman tinggi (kerusakan). Spike ke atas = konektor/sambungan. Ujung grafik turun drastis = ujung kabel atau putus.</p>
        </div>
        <h3 style={{marginTop: 20}}>B. Power Meter (Optical Power Meter)</h3>
        <p>Alat untuk mengukur kekuatan sinyal optik pada fiber optik. Satuan: dBm.</p>
        <ul>
          <li><strong>Daya kirim (Tx)</strong> — Biasanya 0 dBm hingga -10 dBm</li>
          <li><strong>Daya terima (Rx)</strong> — Minimal -25 dBm untuk koneksi stabil</li>
          <li><strong>Redaman (Loss)</strong> = Daya Tx - Daya Rx</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Ruler} title="4.4 Spectrum Analyzer">
        <p>Spectrum analyzer menampilkan kekuatan sinyal pada rentang frekuensi tertentu. Sangat berguna untuk troubleshooting Wi-Fi dan RF.</p>
        <h3>Kegunaan dalam TKJT:</h3>
        <ul>
          <li><strong>Mendeteksi interferensi</strong> — Menemukan sinyal asing pada frekuensi Wi-Fi (2.4/5 GHz)</li>
          <li><strong>Memilih kanal optimal</strong> — Melihat kanal mana yang paling bersih</li>
          <li><strong>Mengukur kekuatan sinyal</strong> — Memastikan coverage area mencukupi</li>
          <li><strong>Mendeteksi rogue AP</strong> — Access Point tidak sah dalam jaringan</li>
        </ul>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Kekuatan Sinyal</th><th>Range dBm</th><th>Kualitas</th></tr></thead>
            <tbody>
              <tr><td><strong>Excellent</strong></td><td>-30 dBm to -50 dBm</td><td>Sangat kuat, ideal</td></tr>
              <tr><td><strong>Good</strong></td><td>-50 dBm to -67 dBm</td><td>Koneksi stabil</td></tr>
              <tr><td><strong>Fair</strong></td><td>-67 dBm to -75 dBm</td><td>Bisa digunakan, kadang lambat</td></tr>
              <tr><td><strong>Poor</strong></td><td>-75 dBm to -85 dBm</td><td>Sering putus, tidak stabil</td></tr>
              <tr><td><strong>Bad</strong></td><td>Below -85 dBm</td><td>Tidak bisa koneksi</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><Star size={14} /> Tips Praktis</strong>
          <p>Untuk survey Wi-Fi, gunakan spectrum analyzer berjalan (walk test) di seluruh area untuk memetakan coverage dan menemukan dead spot.</p>
        </div>
      </MateriCard>
    </div>
  );
}
