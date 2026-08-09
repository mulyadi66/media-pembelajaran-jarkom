import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { MonitorSmartphone, Shield, Users, MessageCircle, Share2, Star, CheckSquare } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '2.1 Konsep Literasi Digital' },
  { id: 's2', label: '2.2 Komponen Literasi Digital' },
  { id: 's3', label: '2.3 Etika & Keamanan Digital' },
  { id: 's4', label: '2.4 Komunikasi & Kolaborasi Digital' },
  { id: 's5', label: '2.5 Platform Digital & Produktivitas' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Elemen2() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_elemen2'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_elemen2" sections={sections} />

      <MateriCard icon={MonitorSmartphone} title="2.1 Konsep Literasi Digital">
        <p><strong>Literasi digital</strong> adalah kemampuan untuk menggunakan teknologi informasi dan komunikasi secara efektif, cerdas, aman, dan bertanggung jawab dalam kehidupan sehari-hari.</p>
        <p>Literasi digital bukan hanya bisa mengoperasikan gadget, tetapi juga memahami bagaimana mencari, mengevaluasi, menggunakan, dan membuat informasi digital dengan bijak.</p>
        <div className="info-box">
          <strong><Star size={14} /> Mengapa Literasi Digital Penting?</strong>
          <ul>
            <li>Informasi di internet sangat banyak — kita harus bisa menyaring berita palsu (hoaks)</li>
            <li>Ancaman siber seperti penipuan online semakin marak</li>
            <li>Dunia kerja modern menuntut kolaborasi berbasis digital</li>
            <li>Melindungi data pribadi menjadi keharusan</li>
          </ul>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Daftarkan minimal 3 contoh informasi hoaks yang pernah kamu lihat di media sosial.</li>
            <li>Untuk setiap hoaks, tuliskan langkah yang kamu lakukan untuk memverifikasi kebenarannya.</li>
            <li>Tuliskan pendapatmu: mengapa literasi digital penting bagi pelajar SMK?</li>
          </ol>
        </div>
      </MateriCard>

      <MateriCard icon={Share2} title="2.2 Komponen Literasi Digital">
        <p>Kementerian Kominfo merangkum empat pilar literasi digital (cakap digital):</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Pilar</th><th>Penjelasan</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Digital Skills</strong></td>
                <td>Kemampuan teknis menggunakan perangkat & aplikasi</td>
                <td>Menggunakan laptop, spreadsheet, aplikasi editing</td>
              </tr>
              <tr>
                <td><strong>Digital Culture</strong></td>
                <td>Nilai dan budaya dalam berinteraksi di dunia digital</td>
                <td>Berprilaku sopan, menghargai keberagaman, tidak menyebar hoaks</td>
              </tr>
              <tr>
                <td><strong>Digital Ethics</strong></td>
                <td>Etika bermedia digital</td>
                <td>Menjaga privasi, tidak mencuri karya, izin sebelum memakai foto</td>
              </tr>
              <tr>
                <td><strong>Digital Safety</strong></td>
                <td>Keamanan diri dan data di ruang digital</td>
                <td>Kata sandi kuat, 2FA, mengenali phising</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <p>Lakukan <strong>self-assessment</strong> kemampuan digitalmu pada keempat pilar (Digital Skills, Culture, Ethics, Safety). Beri nilai 1–5 untuk setiap pilar, lalu tuliskan satu langkah nyata untuk meningkatkan pilar yang nilainya paling rendah.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Shield} title="2.3 Etika & Keamanan Digital">
        <h3>A. Etika Bermedia Digital</h3>
        <ul>
          <li>Gunakan bahasa yang sopan dan santun di media sosial</li>
          <li>Jangan menyebarkan informasi yang belum jelas kebenarannya</li>
          <li>Hormati hak cipta — beri kredit pada karya orang lain</li>
          <li>Jangan membagikan foto atau data orang lain tanpa izin</li>
        </ul>
        <h3>B. Keamanan Digital</h3>
        <ul>
          <li>Gunakan kata sandi kuat (minimal 8 karakter, kombinasi huruf, angka, simbol)</li>
          <li>Aktifkan autentikasi dua faktor (2FA) pada akun penting</li>
          <li>Waspada phising — jangan klik tautan mencurigakan</li>
          <li>Perbarui perangkat lunak secara rutin</li>
        </ul>
        <div className="info-box warning">
          <strong>Contoh Phising:</strong> Email atau pesan yang berpura-pura dari bank meminta kata sandi. Bank tidak pernah meminta kata sandi lewat pesan.
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Periksa pengaturan privasi dan keamanan pada satu akun yang kamu gunakan (email, media sosial, atau game).</li>
            <li>Perbaiki kata sandi menjadi kata sandi kuat bila belum memenuhi kriteria (8+ karakter, kombinasi huruf/angka/simbol).</li>
            <li>Tuliskan laporan singkat: pengaturan apa yang kamu ubah dan alasannya.</li>
          </ol>
        </div>
      </MateriCard>

      <MateriCard icon={Users} title="2.4 Komunikasi & Kolaborasi Digital">
        <p>Dunia kerja modern menggunakan banyak alat kolaborasi digital. Kemampuan ini menjadi bekal penting bagi siswa SMK.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Kategori</th><th>Contoh Alat</th><th>Fungsi</th></tr></thead>
            <tbody>
              <tr><td><strong>Komunikasi</strong></td><td>WhatsApp, Telegram, Zoom, Google Meet</td><td>Chat dan rapat jarak jauh</td></tr>
              <tr><td><strong>Dokumen bersama</strong></td><td>Google Docs, Google Sheets, Canva</td><td>Mengerjakan tugas secara kolaboratif</td></tr>
              <tr><td><strong>Manajemen tugas</strong></td><td>Trello, Notion, Google Calendar</td><td>Menjadwalkan dan membagi tugas</td></tr>
              <tr><td><strong>Cloud storage</strong></td><td>Google Drive, OneDrive</td><td>Menyimpan dan berbagi file</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Etika Rapat Virtual:</strong>
          <p>Matikan mikrofon jika tidak berbicara, gunakan kamera bila dimungkinkan, jangan berbicara bersamaan, dan siapkan materi sebelum rapat.</p>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Bentuk kelompok 3–4 orang lalu buat rencana kerja proyek menggunakan aplikasi kolaborasi (Google Docs, Trello, atau Google Calendar).</li>
            <li>Bagi tugas masing-masing anggota dan tetapkan tenggat waktu.</li>
            <li>Sertakan tangkapan layar (screenshot) hasil pekerjaan kelompokmu.</li>
          </ol>
        </div>
      </MateriCard>

      <MateriCard icon={MessageCircle} title="2.5 Platform Digital & Produktivitas">
        <h3>A. Mesin Pencari & Evaluasi Informasi</h3>
        <ul>
          <li>Gunakan kata kunci yang spesifik agar hasil pencarian tepat</li>
          <li>Cek kredibilitas sumber (domain .go.id, .ac.id lebih terpercaya untuk data resmi)</li>
          <li>Bandingkan minimal 3 sumber sebelum mempercayai informasi</li>
          <li>Waspadai judul berlebihan dan akun anonim</li>
        </ul>
        <h3>B. Produktivitas Digital untuk Siswa</h3>
        <ul>
          <li>Gunakan spreadsheet untuk membuat tabel nilai dan laporan sederhana</li>
          <li>Buat presentasi yang rapi dengan poin ringkas</li>
          <li>Manfaatkan aplikasi pengingat untuk mengatur jadwal belajar</li>
          <li>Simpan file dengan penamaan yang jelas: <em>nama_tugas_tanggal</em></li>
        </ul>
        <div className="info-box">
          <strong><Star size={14} /> Tips Verifikasi Hoaks:</strong>
          <p>Gunakan mesin pencari dengan kata kunci "fakta + topik", cek situs resmi, dan gunakan layanan cek fakta (seperti Cek Fakta Liputan6 / TurnBackHoax).</p>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Pilih satu berita viral di media sosial.</li>
            <li>Verifikasi kebenarannya dengan metode di atas (bandingkan minimal 3 sumber).</li>
            <li>Tulis hasil verifikasi: <strong>benar</strong>, <strong>sebagian benar</strong>, atau <strong>hoaks</strong>, beserta bukti dan sumbernya.</li>
          </ol>
        </div>
      </MateriCard>
    </div>
  );
}
