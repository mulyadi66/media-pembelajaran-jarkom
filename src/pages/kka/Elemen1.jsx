import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Brain, Puzzle, GitBranch, Layers, ListOrdered, Star, CheckSquare } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '1.1 Konsep Berpikir Komputasional' },
  { id: 's2', label: '1.2 Dekomposisi' },
  { id: 's3', label: '1.3 Pengenalan Pola' },
  { id: 's4', label: '1.4 Abstraksi' },
  { id: 's5', label: '1.5 Algoritma' },
  { id: 's6', label: '1.6 Manfaat dalam Kehidupan' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Elemen1() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_elemen1'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_elemen1" sections={sections} />

      <MateriCard icon={Brain} title="1.1 Konsep Berpikir Komputasional">
        <p><strong>Berpikir komputasional (computational thinking)</strong> adalah cara berpikir yang terstruktur dan logis untuk menyelesaikan masalah, dengan cara yang bisa dipahami oleh manusia maupun dijalankan oleh komputer.</p>
        <p>Berpikir komputasional bukan berarti selalu menggunakan komputer. Justru keterampilan ini bisa digunakan dalam kehidupan sehari-hari: mengatur jadwal, menyusun langkah memasak, hingga merencanakan perjalanan.</p>
        <div className="info-box">
          <strong><Star size={14} /> Empat Pilar Berpikir Komputasional:</strong>
          <ol>
            <li><strong>Dekomposisi</strong> — memecah masalah besar menjadi bagian kecil</li>
            <li><strong>Pengenalan Pola</strong> — mencari kesamaan atau pola dari masalah</li>
            <li><strong>Abstraksi</strong> — menyaring informasi penting, mengabaikan yang tidak penting</li>
            <li><strong>Algoritma</strong> — menyusun langkah-langkah penyelesaian secara runtut</li>
          </ol>
        </div>
      </MateriCard>

      <MateriCard icon={Puzzle} title="1.2 Dekomposisi (Decomposition)">
        <p><strong>Dekomposisi</strong> adalah kemampuan memecah masalah yang besar dan kompleks menjadi bagian-bagian yang lebih kecil, sederhana, dan mudah dikelola.</p>
        <h3>Contoh Dekomposisi — Menyelenggarakan Acara Sekolah:</h3>
        <ul>
          <li><strong>Persiapan:</strong> izin, proposal, anggaran</li>
          <li><strong>Logistik:</strong> tempat, sound system, konsumsi</li>
          <li><strong>Acara:</strong> rundown, MC, penampilan</li>
          <li><strong>Purna acara:</strong> dokumentasi, laporan, pembongkaran</li>
        </ul>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Latihan:</strong>
          <p>Pecahkan masalah "Membuat Website Kelas" menjadi minimal 5 bagian kecil.</p>
        </div>
      </MateriCard>

      <MateriCard icon={GitBranch} title="1.3 Pengenalan Pola (Pattern Recognition)">
        <p><strong>Pengenalan pola</strong> adalah kemampuan mengidentifikasi kesamaan, perbedaan, dan keteraturan dari data atau masalah yang dihadapi.</p>
        <p>Ketika kita menemukan pola yang sama dengan masalah sebelumnya, kita bisa menggunakan solusi yang sudah terbukti berhasil (reusability).</p>
        <h3>Contoh Pengenalan Pola:</h3>
        <ul>
          <li>Deret angka 2, 4, 6, 8 → pola: +2 setiap langkah</li>
          <li>Jam pelajaran selalu dimulai pukul 07.00 → pola rutinitas</li>
          <li>Harga ongkir dihitung dari jarak → pola perhitungan</li>
          <li>Gambar kucing memiliki pola: berkaki empat, berekor, bertelinga runcing</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Layers} title="1.4 Abstraksi (Abstraction)">
        <p><strong>Abstraksi</strong> adalah kemampuan menyaring informasi yang paling penting dan mengabaikan detail yang tidak relevan untuk memecahkan masalah.</p>
        <div className="info-box">
          <strong><Star size={14} /> Contoh Abstraksi — Peta Lokasi:</strong>
          <p>Saat menggunakan aplikasi peta, kita tidak perlu tahu setiap pohon atau rumah di sepanjang jalan. Kita cukup fokus pada: jalan utama, arah, dan tujuan. Detail lain diabstraksikan.</p>
        </div>
        <h3>Contoh Abstraksi Lainnya:</h3>
        <ul>
          <li><strong>Membuat rangkuman</strong> — hanya menulis poin penting dari satu bab</li>
          <li><strong>ATM</strong> — kita tidak perlu tahu cara kerja internal mesin, cukup menu yang disediakan</li>
          <li><strong>Berkendara</strong> — cukup fokus pada rambu dan jalan, bukan detail mesin</li>
        </ul>
      </MateriCard>

      <MateriCard icon={ListOrdered} title="1.5 Algoritma">
        <p><strong>Algoritma</strong> adalah urutan langkah-langkah logis dan terstruktur untuk menyelesaikan suatu masalah. Setiap langkah harus jelas, tidak ambigu, dan memiliki awal serta akhir.</p>
        <h3>Contoh Algoritma — Membuat Teh Manis:</h3>
        <ol>
          <li>Mulai</li>
          <li>Siapkan gelas, teh celup, gula, dan air panas</li>
          <li>Masukkan teh celup ke dalam gelas</li>
          <li>Tuang air panas ke dalam gelas</li>
          <li>Tambahkan gula sesuai selera</li>
          <li>Aduk hingga merata</li>
          <li>Selesai</li>
        </ol>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Latihan:</strong>
          <p>Tuliskan algoritma untuk "Menghidupkan Komputer" minimal 5 langkah secara urut.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Star} title="1.6 Manfaat Berpikir Komputasional dalam Kehidupan">
        <p>Berpikir komputasional membantu kita menjadi pemecah masalah yang lebih baik, bukan hanya dalam bidang teknologi tetapi juga kehidupan sehari-hari.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Manfaat</th><th>Contoh Penerapan</th></tr></thead>
            <tbody>
              <tr><td><strong>Memecahkan masalah kompleks</strong></td><td>Menyusun rencana kerja kelompok besar</td></tr>
              <tr><td><strong>Meningkatkan efisiensi</strong></td><td>Menata rute pengiriman terpendek</td></tr>
              <tr><td><strong>Membuat keputusan lebih baik</strong></td><td>Membandingkan harga sebelum membeli</td></tr>
              <tr><td><strong>Dasar kemampuan coding</strong></td><td>Semua bahasa pemrograman memakai logika ini</td></tr>
              <tr><td><strong>Bekal karir masa depan</strong></td><td>Diperlukan di banyak profesi digital</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box warning">
          <strong>Catatan:</strong> Berpikir komputasional adalah fondasi dari semua materi KKA selanjutnya: algoritma pemrograman, analisis data, dan kecerdasan artifisial.
        </div>
      </MateriCard>
    </div>
  );
}
