import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, Shield, Users, Lightbulb, Target, Award, TrendingUp } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: 'A. Menyaring Fakta di Dunia Maya' },
  { id: 's2', label: 'B. Identitas Digital sebagai Fondasi Reputasi Online' },
  { id: 's3', label: 'C. Kolaborasi Menciptakan Konten Digital' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Modul1KKAXI() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_xi_modul1'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_xi_modul1" sections={sections} />

      <MateriCard icon={Globe} title="A. Menyaring Fakta di Dunia Maya">
        <p>Di era informasi, kita dibanjiri konten dari berbagai sumber setiap hari. Kemampuan menyaring fakta dari informasi palsu (hoaks) adalah keterampilan dasar literasi digital yang wajib dimiliki setiap siswa.</p>
        <div className="info-box">
          <strong><Target size={14} /> Mengapa Penting?</strong>
          <p>Hoaks dapat menimbulkan kepanikan, memecah belah masyarakat, dan merugikan reputasi seseorang. Siswa yang mampu menyaring fakta akan menjadi pengguna internet yang bertanggung jawab dan kritis.</p>
        </div>
        <h3 style={{marginTop: 20}}>Ciri-ciri Informasi Hoaks:</h3>
        <ul>
          <li><strong>Judul Sensasional</strong> — Judul yang provokatif, memancing emosi, atau mengandung huruf kapital berlebihan.</li>
          <li><strong>Sumber Tidak Jelas</strong> — Tidak menyebutkan penulis, lembaga, atau sumber yang dapat diverifikasi.</li>
          <li><strong>Tidak Ada Tanggal</strong> — Berita palsu sering kali tidak mencantumkan waktu kejadian yang spesifik.</li>
          <li><strong>Memancing Emosi</strong> — Sengaja membuat pembaca marah, takut, atau terkejut agar cepat dibagikan.</li>
          <li><strong>Foto/Video Manipulasi</strong> — Gambar yang sudah diedit atau diambil dari konteks berbeda.</li>
        </ul>
        <h3 style={{marginTop: 16}}>Langkah Verifikasi Fakta (5W+1H):</h3>
        <ul>
          <li><strong>Who</strong> — Siapa yang membuat konten? Apakah sumbernya kredibel?</li>
          <li><strong>What</strong> — Apa klaim yang dibuat? Apakah ada bukti pendukung?</li>
          <li><strong>When</strong> — Kapan informasi ini dibuat atau dipublikasikan?</li>
          <li><strong>Where</strong> — Dari mana informasi ini berasal?</li>
          <li><strong>Why</strong> — Mengapa informasi ini dibagikan? Apa tujuannya?</li>
          <li><strong>How</strong> — Bagaimana cara memverifikasinya? Gunakan fact-checker seperti TurnBackHoax atau kominfo.go.id</li>
        </ul>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Tips Praktis</strong>
          <p>Sebelum membagikan informasi, tanyakan pada diri sendiri: "Apakah saya sudah membaca artikelnya sampai tuntas?" Banyak hoaks menyebar karena orang hanya membaca judulnya saja.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Shield} title="B. Identitas Digital sebagai Fondasi Reputasi Online">
        <p>Identitas digital adalah jejak digital yang kita tinggalkan saat menggunakan internet. Setiap postingan, komentar, dan interaksi online membentuk citra diri yang dapat dilihat oleh orang lain, termasuk guru, calon majikan, dan masyarakat luas.</p>
        <h3 style={{marginTop: 10}}>Komponen Identitas Digital:</h3>
        <ul>
          <li><strong>Profil Publik</strong> — Foto profil, bio, nama pengguna yang terlihat oleh publik di media sosial.</li>
          <li><strong>Konten yang Dibagikan</strong> — Postingan, foto, video, dan komentar yang menjadi jejak digital permanen.</li>
          <li><strong>Interaksi Online</strong> — Cara berkomunikasi di kolom komentar, chat, dan forum yang mencerminkan karakter.</li>
          <li><strong>Riwayat Pencarian</strong> — Aktivitas browsing yang dapat menunjukkan minat dan kebiasaan digital.</li>
        </ul>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Prinsip Digital Footprint</strong>
          <p>Apapun yang kamu posting di internet sulit dihapus sepenuhnya (digital permanence). Selalu tanyakan: "Apakah saya bangga jika orang tua/guru/majikan melihat ini?" sebelum memposting sesuatu.</p>
        </div>
        <h3 style={{marginTop: 16}}>Membangun Reputasi Digital Positif:</h3>
        <ul>
          <li><strong>Konsisten</strong> — Tunjukkan minat dan keahlianmu melalui konten yang berkualitas.</li>
          <li><strong>Profesional</strong> — Gunakan bahasa yang sopan dan santun di ruang digital.</li>
          <li><strong>Kontributif</strong> — Berikan komentar yang membangun, bukan menjelekkan.</li>
          <li><strong>Selektif</strong> — Pilih dengan bijak apa yang layak dibagikan ke publik.</li>
          <li><strong>Aktif</strong> — Ikut serta dalam komunitas digital yang positif dan edukatif.</li>
        </ul>
        <h3 style={{marginTop: 16}}>Tips Mengelola Jejak Digital:</h3>
        <ul>
          <li>Atur pengaturan privasi di setiap platform media sosial</li>
          <li>Gunakan nama pengguna yang konsisten dan profesional</li>
          <li>Hapus atauarsipkan konten lama yang tidak relevan</li>
          <li>Google namamu sendiri secara berkala untuk mengetahui apa yang terlihat publik</li>
          <li>Bangun portofolio digital (blog, GitHub, LinkedIn) yang menunjukkan keahlian</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Users} title="C. Kolaborasi Menciptakan Konten Digital">
        <p>Dunia digital membuka peluang kolaborasi tanpa batas geografis. Siswa dapat bekerja sama secara virtual untuk menciptakan konten digital yang bermakna, mulai dari artikel, video, hingga proyek编程.</p>
        <h3 style={{marginTop: 10}}>Prinsip Kolaborasi Digital yang Efektif:</h3>
        <ul>
          <li><strong>Komunikasi Jelas</strong> — Gunakan bahasa yang mudah dipahami, sampaikan ide secara terstruktur, dan aktif mendengarkan.</li>
          <li><strong>Pembagian Tugas</strong> — Tentukan peran masing-masing berdasarkan keahlian: siapa yang menulis, mengedit, mendesain, atau mengelola.</li>
          <li><strong>Deadline yang Realistis</strong> — Atur jadwal yang dapat dipenuhi semua anggota dan patuhi tenggat waktu.</li>
          <li><strong>Menghargai Perbedaan</strong> — Hargai pendapat dan gaya kerja setiap anggota tim.</li>
        </ul>
        <h3 style={{marginTop: 16}}>Alat Kolaborasi untuk Membuat Konten:</h3>
        <ul>
          <li><strong>Google Docs/Slides</strong> — Menulis dan menyusun konten secara real-time bersama tim.</li>
          <li><strong>Canva</strong> — Membuat desain grafis, poster, infografis secara kolaboratif.</li>
          <li><strong>CapCut / DaVinci Resolve</strong> — Mengedit video bersama untuk konten edukatif.</li>
          <li><strong>GitHub</strong> — Kolaborasi kode dan dokumentasi proyek digital.</li>
          <li><strong>Figma</strong> — Mendesain antarmuka dan prototipe website/aplikasi secara bersama.</li>
        </ul>
        <div className="info-box">
          <strong><Award size={14} /> Refleksi</strong>
          <p>Buatlah konten digital kolaboratif sederhana bersama 2-3 teman: bisa berupa infografis tentang hoaks, video pendek edukatif, atau artikel blog. Diskusikan pembagian tugas dan gunakan alat digital untuk koordinasi!</p>
        </div>
      </MateriCard>
    </div>
  );
}
