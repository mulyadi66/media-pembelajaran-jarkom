import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, Shield, Users, Lightbulb, Target, Award, TrendingUp } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '1.1 Pengertian Literasi Digital' },
  { id: 's2', label: '1.2 Etika dan Perilaku Digital' },
  { id: 's3', label: '1.3 Keamanan Siber Pribadi' },
  { id: 's4', label: '1.4 Kolaborasi dan Kreativitas Digital' },
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

      <MateriCard icon={Globe} title="1.1 Pengertian Literasi Digital">
        <p>Literasi digital adalah kemampuan untuk menggunakan teknologi informasi dan komunikasi (TIK) secara efektif, kritis, dan bertanggung jawab. Ini bukan sekadar bisa menggunakan gadget, tetapi memahami bagaimana teknologi bekerja dan dampaknya terhadap kehidupan.</p>
        <div className="info-box">
          <strong><Target size={14} /> Mengapa Penting?</strong>
          <p>Era digital menuntut setiap individu mampu memilah informasi, menjaga privasi, dan berkontribusi positif di ruang digital. Siswa yang literat digital akan lebih siap menghadapi dunia kerja dan kehidupan sosial.</p>
        </div>
        <h3 style={{marginTop: 20}}>Aspek Utama Literasi Digital:</h3>
        <ul>
          <li><strong>Kemampuan Teknis</strong> — Mengoperasikan perangkat dan perangkat lunak dasar secara kompeten.</li>
          <li><strong>Berpikir Kritis</strong> — Mengevaluasi kebenaran dan kredibilitas informasi yang ditemukan secara online.</li>
          <li><strong>Komunikasi Digital</strong> — Berkomunikasi secara efektif dan sopan melalui berbagai platform digital.</li>
          <li><strong>Kreativitas</strong> — Membuat konten digital yang bermakna dan inovatif.</li>
          <li><strong>Keselamatan</strong> — Melindungi diri dan orang lain dari ancaman digital.</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Shield} title="1.2 Etika dan Perilaku Digital">
        <p>Etika digital adalah tata tertib norma yang mengatur perilaku seseorang dalam menggunakan teknologi digital. Pelanggaran etika digital dapat berakibat pada kerugian moral, hukum, dan sosial.</p>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Prinsip Etika Digital</strong>
          <p>Hormati hak orang lain, jaga kejujuran, bertanggung jawab atas konten yang dibagikan, dan gunakan teknologi untuk kebaikan bersama.</p>
        </div>
        <h3 style={{marginTop: 20}}>Contoh Pelanggaran Etika Digital:</h3>
        <ul>
          <li><strong>Menyebarkan Hoaks</strong> — Informasi palsu yang dapat menimbulkan kepanikan dan kerugian.</li>
          <li><strong>Cyberbullying</strong> — Pelecehan atau intimidasi melalui media digital.</li>
          <li><strong>Plagiarisme</strong> — Menggunakan karya orang lain tanpa mencantumkan sumber.</li>
          <li><strong>Pelanggaran Privasi</strong> — Membagikan data pribadi orang lain tanpa izin.</li>
          <li><strong>Penggunaan Software Bajakan</strong> — Melanggar hak cipta pembuat software.</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Shield} title="1.3 Keamanan Siber Pribadi">
        <p>Keamanan siber adalah praktik melindungi diri dari serangan digital. Siswa harus memahami ancaman yang ada dan cara perlindungannya.</p>
        <h3 style={{marginTop: 10}}>Ancaman Digital Utama:</h3>
        <ul>
          <li><strong>Phishing</strong> — Penipuan melalui email/situs palsu yang menyamar sebagai entitas tepercaya untuk mencuri data sensitif.</li>
          <li><strong>Malware</strong> — Perangkat lunak berbahaya seperti virus, trojan, dan ransomware yang merusak sistem.</li>
          <li><strong>Social Engineering</strong> — Manipulasi psikologis untuk mendapatkan informasi rahasia.</li>
          <li><strong>Man-in-the-Middle</strong> — Peretasan komunikasi antara dua pihak tanpa sepengetahuan mereka.</li>
        </ul>
        <h3 style={{marginTop: 16}}>Tips Keamanan Dasar:</h3>
        <ul>
          <li>Gunakan password kuat dan unik untuk setiap akun</li>
          <li>Aktifkan autentikasi dua faktor (2FA)</li>
          <li>Jangan mengklik link dari sumber yang tidak dikenal</li>
          <li>Perbarui perangkat lunak secara berkala</li>
          <li>Hati-hati saat menggunakan Wi-Fi publik</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Users} title="1.4 Kolaborasi dan Kreativitas Digital">
        <p>Dunia digital memungkinkan kolaborasi tanpa batas geografis. Siswa dapat belajar bekerja sama secara virtual menggunakan berbagai alat digital.</p>
        <h3 style={{marginTop: 10}}>Alat Kolaborasi Digital:</h3>
        <ul>
          <li><strong>Google Workspace</strong> — Dokumen, spreadsheet, dan presentasi kolaboratif secara real-time.</li>
          <li><strong>GitHub</strong> — Platform kolaborasi pengembangan kode dan version control.</li>
          <li><strong>Slack / Discord</strong> — Komunikasi tim dengan channel terstruktur.</li>
          <li><strong>Trello / Notion</strong> — Manajemen proyek dan tugas tim.</li>
        </ul>
        <div className="info-box">
          <strong><Award size={14} /> Refleksi</strong>
          <p>Cobalah membuat akun GitHub dan unggah proyek pertamamu. Ini adalah langkah awal membangun portofolio digital yang berguna untuk masa depan karirmu!</p>
        </div>
      </MateriCard>
    </div>
  );
}
