import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Cable, Wrench, Activity, Star, AlertTriangle } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';
import CableCrimpingSimulator from '../../components/mpk2/CableCrimpingSimulator';

const sections = [
  { id: 's1', label: '1.1 Peralatan & Perlengkapan' },
  { id: 's2', label: '1.2 Crimping & Pengkabelan' },
  { id: 's3', label: '1.3 Instalasi Perangkat Nirkabel' },
  { id: 's4', label: '1.4 Perawatan & Troubleshooting' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Modul1MPK2() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('mpk2_modul1'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="mpk2_modul1" sections={sections} />

      <MateriCard icon={Wrench} title="1.1 Peralatan dan Perlengkapan Jaringan">
        <p>Seorang teknisi jaringan harus memiliki peralatan yang lengkap untuk instalasi, perawatan, dan perbaikan jaringan. Berikut adalah tools utama yang digunakan:</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Tool</th><th>Fungsi</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>Crimping Tool</strong></td><td>Memasang konektor RJ-45 ke kabel UTP/STP</td><td>HT-210, HT-568</td></tr>
              <tr><td><strong>Cable Stripper</strong></td><td>Mengupas kulit luar kabel</td><td>Cable stripper UTP</td></tr>
              <tr><td><strong>LAN Tester</strong></td><td>Menguji kontinuitas kabel setelah crimping</td><td>LAN Tester 8P</td></tr>
              <tr><td><strong>Punch Down Tool</strong></td><td>Memasang kabel ke patch panel / jack dinding</td><td>Punch down 110/66 block</td></tr>
              <tr><td><strong>Cable Tester</strong></td><td>Menguji kabel lebih detail (jarak, crosstalk)</td><td>Fluke LinkRunner</td></tr>
              <tr><td><strong>Multimeter</strong></td><td>Mengukur tegangan, arus, dan hambatan</td><td>Multimeter digital</td></tr>
              <tr><td><strong>Toner Probe</strong></td><td>Melacak kabel dalam instalasi padat</td><td>Toner probe kit</td></tr>
            </tbody>
          </table>
        </div>
      </MateriCard>

      <MateriCard icon={Cable} title="1.2 Crimping dan Pengkabelan">
        <p>Crimping adalah proses memasang konektor RJ-45 ke ujung kabel UTP/STP. Kualitas crimping sangat mempengaruhi performa jaringan.</p>
        <div className="info-box">
          <strong><Star size={14} /> Standar Wiring T568A dan T568B</strong>
          <p>Dua standar urutan kabel yang umum digunakan. T568B lebih umum di Indonesia.</p>
        </div>
        <h3>Langkah Crimping:</h3>
        <ol>
          <li>Kupas kulit luar kabel sekitar 2 cm menggunakan cable stripper</li>
          <li>Urutkan kabel sesuai standar (T568A atau T568B)</li>
          <li>Ratakan ujung kabel dengan cutting blade</li>
          <li>Masukkan kabel ke konektor RJ-45 hingga ujung kabel mencapai bagian depan konektor</li>
          <li>Pastikan urutan kabel benar dan semua kabel masuk sempurna</li>
          <li>Press crimping tool hingga terkunci</li>
          <li>Uji dengan LAN tester — semua LED harus menyala berurutan (1-8)</li>
        </ol>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Pin</th><th>T568A</th><th>T568B</th><th>Warna</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Putih Hijau</td><td>Putih Oranye</td><td>Tx+</td></tr>
              <tr><td>2</td><td>Hijau</td><td>Oranye</td><td>Tx-</td></tr>
              <tr><td>3</td><td>Putih Oranye</td><td>Putih Hijau</td><td>Rx+</td></tr>
              <tr><td>4</td><td>Biru</td><td>Biru</td><td>-</td></tr>
              <tr><td>5</td><td>Putih Biru</td><td>Putih Biru</td><td>-</td></tr>
              <tr><td>6</td><td>Oranye</td><td>Hijau</td><td>Rx-</td></tr>
              <tr><td>7</td><td>Putih Coklat</td><td>Putih Coklat</td><td>-</td></tr>
              <tr><td>8</td><td>Coklat</td><td>Coklat</td><td>-</td></tr>
            </tbody>
          </table>
        </div>
      </MateriCard>

      <MateriCard icon={Wrench} title="1.3 Instalasi Perangkat Nirkabel">
        <p>Instalasi perangkat nirkabel memerlukan perencanaan dan teknik yang tepat agar coverage optimal dan interferensi minimal.</p>
        <h3>A. Persiapan Instalasi</h3>
        <ul>
          <li>Lakukan survey lokasi untuk menentukan posisi AP</li>
          <li>Identifikasi sumber interferensi (tembok, perangkat elektronik)</li>
          <li>Siapkan perangkat: Access Point, POE Injector, kabel UTP</li>
          <li>Pastikan sumber listrik tersedia di lokasi</li>
        </ul>
        <h3>B. Langkah Instalasi</h3>
        <ol>
          <li>Pasang bracket AP di lokasi yang sudah ditentukan (tinggi 2-3 meter)</li>
          <li>Sambungkan kabel UTP dari switch ke POE Injector</li>
          <li>Sambungkan kabel UTP dari POE Injector ke AP</li>
          <li>Hubungkan POE Injector ke sumber listrik</li>
          <li>Konfigurasi SSID, keamanan, dan pengaturan lainnya via web browser</li>
          <li>Uji koneksi dari berbagai titik menggunakan smartphone/laptop</li>
        </ol>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Penting!</strong>
          <p>Jangan memasang AP terlalu dekat dengan perangkat listrik besar (AC, generator) karena dapat menyebabkan interferensi sinyal.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Activity} title="1.4 Perawatan dan Troubleshooting">
        <h3>A. Perawatan Berkala</h3>
        <ul>
          <li>Bersihkan debu dari perangkat secara rutin (setiap 3 bulan)</li>
          <li>Periksa konektor RJ-45 dari korosi dan kerusakan fisik</li>
          <li>Cek firmware perangkat dan update jika perlu</li>
          <li>Monitor performa jaringan (bandwidth, latency, packet loss)</li>
          <li>Backup konfigurasi perangkat secara berkala</li>
        </ul>
        <h3>B. Troubleshooting Umum</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Masalah</th><th>Penyebab</th><th>Solusi</th></tr></thead>
            <tbody>
              <tr><td>Tidak ada koneksi</td><td>Kabel putus, konektor longgar</td><td>Cek dengan LAN tester, ganti kabel</td></tr>
              <tr><td>Koneksi lambat</td><td>Kabel terlalu panjang, interferensi</td><td>Gunakan kabel max 100m, hindari sumber interferensi</td></tr>
              <tr><td>Koneksi putus-nyambung</td><td>Konektor tidak sempurna</td><td>Potong dan crimping ulang</td></tr>
              <tr><td>Wi-Fi lemah</td><td>Posisi AP kurang tepat</td><td>Pindahkan AP ke posisi lebih sentral</td></tr>
              <tr><td>IP conflict</td><td>IP duplikat</td><td>Gunakan DHCP server</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><Wrench size={14} /> Tips</strong>
          <p>Selalu dokumentasi instalasi: label kabel, catat panjang kabel, foto panel/rack. Ini sangat membantu saat troubleshooting.</p>
        </div>
      </MateriCard>

      <div className="materi-card">
        <h3>🛠️ Simulasi Crimping Kabel</h3>
        <p style={{ marginBottom: 16, color: '#94a3b8' }}>Praktikkan urutan kabel standar T568A dan T568B dengan drag-and-drop.</p>
        <CableCrimpingSimulator />
      </div>
    </div>
  );
}