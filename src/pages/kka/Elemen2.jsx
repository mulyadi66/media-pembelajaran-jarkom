import { useEffect, useState } from 'react';
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
  const [open, setOpen] = useState(false);
  return (
    <div className="materi-card" style={{marginBottom: 16}}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={title}
        style={{
          display:'flex', alignItems:'center', gap:10, width:'100%',
          background:'none', border:'none', cursor:'pointer', padding:'12px 0',
          color:'var(--text)', fontSize:'1.05rem', fontWeight:600, textAlign:'left'
        }}
      >
        <Icon size={18} />
        <span style={{flex:1}}>{title}</span>
        <span style={{
          display:'inline-block', width:0, height:0,
          borderLeft:'5px solid transparent', borderRight:'5px solid transparent',
          borderTop:'6px solid var(--text-light)',
          transition:'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
        }} aria-hidden="true" />
      </button>
      <div style={{
        maxHeight: open ? '99999px' : '0px',
        overflow: open ? 'visible' : 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <div style={{paddingTop:8, paddingBottom:8}}>
          {children}
        </div>
      </div>
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

        <h3>Evolusi dari Generasi Digital:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Generasi</th><th>Ciri Penggunaan Teknologi</th></tr></thead>
            <tbody>
              <tr><td><strong>Digital Immigrant</strong></td><td>Menggunakan teknologi setelah dewasa (generasi orang tua)</td></tr>
              <tr><td><strong>Digital Native</strong></td><td>Lahir dan besar bersama teknologi (generasi siswa saat ini)</td></tr>
              <tr><td><strong>Digital Citizen</strong></td><td>Menggunakan teknologi secara bertanggung jawab dan berkontribusi positif</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box warning">
          <strong>Fakta:</strong> Menjadi digital native (bisa pakai gadget) <strong>bukan jaminan</strong> literasi digital yang baik. Banyak pengguna muda yang masih mudah tertipu hoaks dan penipuan online.
        </div>

        <h3>Empat Kemampuan Dasar Literasi Digital:</h3>
        <ol>
          <li><strong>Mencari (access)</strong> — menemukan informasi yang dibutuhkan</li>
          <li><strong>Mengevaluasi (evaluate)</strong> — menilai kredibilitas dan kebenaran informasi</li>
          <li><strong>Menggunakan (use)</strong> — memanfaatkan informasi secara etis</li>
          <li><strong>Membuat (create)</strong> — menghasilkan konten digital yang bermanfaat</li>
        </ol>
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

        <h3>A. Digital Skills — Cakap Menggunakan Teknologi</h3>
        <ul>
          <li>Mengoperasikan perangkat keras (komputer, smartphone, printer)</li>
          <li>Menggunakan aplikasi perkantoran (dokumen, spreadsheet, presentasi)</li>
          <li>Menavigasi internet dan mesin pencari dengan efektif</li>
          <li>Memanfaatkan cloud dan penyimpanan daring</li>
          <li>Menguasai aplikasi pendukung: email, kalender, video conference</li>
        </ul>

        <h3>B. Digital Culture — Budaya Bermedia yang Sehat</h3>
        <ul>
          <li>Berkomunikasi dengan sopan dan menghargai perbedaan</li>
          <li>Tidak menyebarkan ujaran kebencian, SARA, dan perundungan</li>
          <li>Menyebarkan konten positif dan bermanfaat</li>
          <li>Menjaga identitas nasional di tengah budaya global</li>
          <li>Menghargai karya dan pendapat orang lain</li>
        </ul>

        <h3>C. Digital Ethics — Etika Bermedia Digital</h3>
        <ul>
          <li>Menjaga privasi diri dan orang lain</li>
          <li>Tidak mencuri atau menyalin karya tanpa izin (hak cipta)</li>
          <li>Meminta izin sebelum memakai foto atau data orang lain</li>
          <li>Jujur dan transparan dalam menyebarkan informasi</li>
          <li>Bertanggung jawab atas setiap unggahan kita</li>
        </ul>

        <h3>D. Digital Safety — Aman Beraktivitas di Dunia Digital</h3>
        <ul>
          <li>Menggunakan kata sandi kuat dan berbeda untuk tiap akun</li>
          <li>Mengaktifkan autentikasi dua faktor (2FA)</li>
          <li>Waspada phising, malware, dan penipuan online</li>
          <li>Menjaga data pribadi seperti KTP, rekening, dan PIN</li>
          <li>Berhati-hati saat menggunakan Wi-Fi publik</li>
        </ul>
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

        <h3>B. Netiket (Netiquette) — Etika Berkomunikasi di Internet</h3>
        <ul>
          <li><strong>Jangan mengetik huruf kapital semua</strong> — dianggap berteriak</li>
          <li>Balas pesan dengan tepat waktu dan sopan</li>
          <li>Baca ulang pesan sebelum mengirim agar tidak menyinggung</li>
          <li>Jangan menyebarkan pesan pribadi tanpa izin</li>
          <li>Hindari menyebarkan konten yang merugikan atau mempermalukan orang lain</li>
        </ul>

        <h3>C. Perundungan Siber (Cyberbullying)</h3>
        <p><strong>Cyberbullying</strong> adalah perundungan yang dilakukan melalui media digital, misalnya menyebarkan foto memalukan, mengirim pesan kasar, atau membuat akun palsu untuk mencemarkan nama baik.</p>
        <div className="info-box warning">
          <strong>Yang Harus Dilakukan Jika Menjadi Korban:</strong>
          <ul>
            <li>Jangan membalas dengan emosi — simpan bukti (screenshot)</li>
            <li>Blokir pelaku dan laporkan ke platform</li>
            <li>Ceritakan kepada orang tua, guru, atau orang terpercaya</li>
            <li>Lapor ke pihak berwajib jika mengancam keselamatan</li>
          </ul>
        </div>

        <h3>D. Keamanan Digital</h3>
        <ul>
          <li>Gunakan kata sandi kuat (minimal 8 karakter, kombinasi huruf, angka, simbol)</li>
          <li>Aktifkan autentikasi dua faktor (2FA) pada akun penting</li>
          <li>Waspada phising — jangan klik tautan mencurigakan</li>
          <li>Perbarui perangkat lunak secara rutin</li>
        </ul>

        <h3>E. Mengenal Jenis Ancaman Digital</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Ancaman</th><th>Penjelasan</th><th>Cara Melindungi Diri</th></tr></thead>
            <tbody>
              <tr><td><strong>Virus</strong></td><td>Program jahat yang menyebar lewat file</td><td>Gunakan antivirus, jangan buka file mencurigakan</td></tr>
              <tr><td><strong>Trojan</strong></td><td>Mencuri data dengan menyamar sebagai program baik</td><td>Unduh aplikasi dari sumber resmi saja</td></tr>
              <tr><td><strong>Ransomware</strong></td><td>Mengunci data lalu meminta tebusan</td><td>Backup data rutin, jangan bayar tebusan</td></tr>
              <tr><td><strong>Phising</strong></td><td>Menipu dengan tautan/pesan palsu untuk mencuri data</td><td>Cek alamat situs, jangan klik tautan mencurigakan</td></tr>
              <tr><td><strong>Spyware</strong></td><td>Mata-mata yang merekam aktivitas pengguna</td><td>Perbarui sistem, periksa izin aplikasi</td></tr>
            </tbody>
          </table>
        </div>
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

        <h3>A. Komunikasi Sinkron vs Asinkron</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Jenis</th><th>Penjelasan</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>Sinkron</strong></td><td>Komunikasi terjadi bersamaan (real-time)</td><td>Video call, telepon, chat langsung</td></tr>
              <tr><td><strong>Asinkron</strong></td><td>Komunikasi tidak harus bersamaan</td><td>Email, forum diskusi, komentar dokumen</td></tr>
            </tbody>
          </table>
        </div>

        <h3>B. Alur Kolaborasi Digital yang Efektif</h3>
        <ol>
          <li><strong>Rencanakan</strong> — tentukan tujuan dan pembagian tugas (Google Docs / Trello)</li>
          <li><strong>Kerjakan</strong> — setiap anggota mengerjakan bagiannya secara paralel</li>
          <li><strong>Tinjau</strong> — saling memberi komentar dan masukan (review)</li>
          <li><strong>Finalkan</strong> — gabungkan hasil dan periksa keseluruhan</li>
          <li><strong>Bagikan</strong> — unggah ke cloud dan berbagi tautan ke pihak terkait</li>
        </ol>

        <h3>C. Tips Kolaborasi Digital yang Baik</h3>
        <ul>
          <li>Beri izin akses dokumen yang tepat (bisa lihat, komentar, atau edit)</li>
          <li>Gunakan nama file yang jelas: <em>proyek_bagian_nama_tanggal</em></li>
          <li>Manfaatkan riwayat versi (version history) untuk melacak perubahan</li>
          <li>Berikan tenggat waktu yang jelas untuk setiap tugas anggota</li>
          <li>Komunikasikan kendala segera, jangan menunggu sampai deadline</li>
        </ul>
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

        <h3>B. Teknik Pencarian Efektif di Mesin Pencari</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Teknik</th><th>Contoh</th><th>Kegunaan</th></tr></thead>
            <tbody>
              <tr><td><strong>Kata kunci ganda</strong></td><td><code>sejarah komputer smk</code></td><td>Menyempitkan hasil pencarian</td></tr>
              <tr><td><strong>Tanda kutip</strong></td><td><code>"bahasa pemrograman"</code></td><td>Mencari frasa persis</td></tr>
              <tr><td><strong>Minus (-)</strong></td><td><code>kopi -instan</code></td><td>Mengeluarkan kata tertentu</td></tr>
              <tr><td><strong>Site:</strong></td><td><code>topologi site:ac.id</code></td><td>Mencari di situs tertentu</td></tr>
              <tr><td><strong>Filetype:</strong></td><td><code>modul jaringan filetype:pdf</code></td><td>Mencari jenis file tertentu</td></tr>
            </tbody>
          </table>
        </div>

        <h3>C. Mengevaluasi Kredibilitas Sumber — Metode CRAAP</h3>
        <ul>
          <li><strong>Currency</strong> — apakah informasi masih terbaru?</li>
          <li><strong>Relevance</strong> — apakah sesuai dengan kebutuhan kita?</li>
          <li><strong>Authority</strong> — siapa penulisnya? apakah ahli di bidangnya?</li>
          <li><strong>Accuracy</strong> — apakah didukung bukti dan sumber lain?</li>
          <li><strong>Purpose</strong> — apakah tujuannya memberi info, menjual, atau memengaruhi?</li>
        </ul>

        <h3>D. Produktivitas Digital untuk Siswa</h3>
        <ul>
          <li>Gunakan spreadsheet untuk membuat tabel nilai dan laporan sederhana</li>
          <li>Buat presentasi yang rapi dengan poin ringkas</li>
          <li>Manfaatkan aplikasi pengingat untuk mengatur jadwal belajar</li>
          <li>Simpan file dengan penamaan yang jelas: <em>nama_tugas_tanggal</em></li>
        </ul>

        <h3>E. Tips Membuat Presentasi yang Efektif</h3>
        <ul>
          <li>Satu slide satu ide pokok — jangan menumpuk teks</li>
          <li>Gunakan poin singkat, detail disampaikan secara lisan</li>
          <li>Konsisten dalam font dan warna</li>
          <li>Gunakan gambar/grafik yang relevan, bukan sekadar hiasan</li>
          <li>Latihan presentasi sebelum tampil di depan kelas</li>
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
