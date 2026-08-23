import { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, Shield, Users, Lightbulb, Target, AlertTriangle, Eye, UserCheck } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';
import { ContohSoal, Tugas } from '../../components/ContohSoal';

const sections = [
  { id: 's1', label: 'A. Menyaring Fakta di Dunia Maya' },
  { id: 's2', label: 'B. Identitas Digital sebagai Fondasi Reputasi Online' },
  { id: 's3', label: 'C. Kolaborasi Menciptakan Konten Digital' },
];

function MateriCard({ icon: Icon, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="materi-card" style={{marginBottom: 16}}>
      <button
        onClick={() => setOpen(!open)}
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
        }} />
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

export default function Modul1KKAXI() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_xi_modul1'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_xi_modul1" sections={sections} />

      {/* ================================================================ */}
      {/*  A. MENYARING FAKTA DI DUNIA MAYA                                */}
      {/* ================================================================ */}
      <MateriCard icon={Globe} title="A. Menyaring Fakta di Dunia Maya">

        {/* A.1 Pengertian dan Konteks */}
        <h4 style={{marginTop: 0}}>A.1 Information Overload dan Hoaks</h4>
        <p>Di era digital saat ini, setiap orang terpapar ratusan hingga ribuan informasi setiap hari melalui media sosial, messenger, dan portal berita. Fenomena ini disebut <strong>information overload</strong> — kondisi di mana volume informasi yang diterima melebihi kemampuan otak untuk memprosesnya secara efektif. Akibatnya, banyak orang yang menerima informasi tanpa memverifikasinya terlebih dahulu.</p>
        <p>Hoaks sendiri memiliki beberapa definisi dalam terminologi resmi:</p>
        <ul>
          <li><strong>Misinformasi</strong> — Informasi palsu yang disebarkan tanpa niat jahat (misalnya karena ketidaktahuan). Contoh: seseorang membagikan artikel palsu tentang obat herbal karena percaya itu manjur.</li>
          <li><strong>Disinformasi</strong> — Informasi palsu yang disebarkan secara sengaja untuk menipu atau memanipulasi. Contoh: kampanye hitam oleh kandidat politik menggunakan berita bohong.</li>
          <li><strong>Malinformasi</strong> — Informasi benar yang dibagikan untuk menyakiti atau merugikan seseorang. Contoh: membocorkan data pribadi seseorang untuk balas dendam.</li>
          <li><strong>Hoaks</strong> — Istilah umum di Indonesia untuk segala jenis informasi palsu atau menyesatkan, baik misinformasi maupun disinformasi.</li>
        </ul>
        <div className="info-box">
          <strong><Target size={14} /> Fakta Penting</strong>
          <p>Berdasarkan data Kementerian Kominfo RI, lebih dari 2.000 hoaks ditangani setiap tahunnya. Di media sosial, hoaks tentang kesehatan dan politik menjadi yang paling banyak beredar. Siswa SMK termasuk kelompok usia yang paling aktif di media sosial sehingga sangat rentan terpapar hoaks.</p>
        </div>

        {/* A.2 Jenis-jenis Hoaks */}
        <h4 style={{marginTop: 24}}>A.2 Jenis-jenis Hoaks</h4>
        <p>Memahami jenis hoaks membantu kita mengenali dan mengkategorikan informasi yang mencurigakan. Berikut adalah 5 jenis hoaks berdasarkan klasifikasi internasional:</p>
        <ul>
          <li><strong>Fabricated (Dibuat dari Nol)</strong> — Konten sepenuhnya palsu dan tidak memiliki dasar fakta sama sekali. Contoh: artikel berita tentang "ilmuwan menemukan planet baru yang akan menabrak bumi dalam 3 hari" — tidak pernah ada berita resmi tentang hal ini. Jenis ini paling berbahaya karena bisa dibuat dengan sangat meyakinkan.</li>
          <li><strong>Manipulated (Dimanipulasi)</strong> — Konten asli yang sudah diedit atau dimanipulasi sehingga memiliki makna berbeda. Contoh: foto asli seorang pejabat yang sedang tertidur di rapat, padahal sebenarnya foto itu diambil saat ia sedang beristirahat setelah lembur 12 jam. Atau video yang dipotong bagian tertentu sehingga ucapan seseorang terdengar berbeda dari konteks aslinya.</li>
          <li><strong>Misleading Context (Konteks Menyesatkan)</strong> — Fakta yang disajikan dengan konteks yang salah. Contoh: foto banjir besar di Jakarta tahun 2020 diklaim sebagai banjir yang terjadi "tadi malam" di tahun 2024. Foto memang nyata, tapi konteksnya salah.</li>
          <li><strong>Satire/Parody</strong> — Konten humor atau sindiran yang disalahartikan sebagai berita serius. Contoh: artikel satir dari situs seperti "The Onion" atau "Becus" yang sering dianggap serius oleh pembaca yang tidak mengetahui asal-usul situsnya.</li>
          <li><strong>False Connection (Judul Tidak Sesuai)</strong> — Judul atau gambar tidak mencerminkan isi konten sebenarnya (clickbait ekstrem). Contoh: judul "MENGEJUTKAN! Artis Ini Ternyata..." tapi isi artikel hanyalah gosip tanpa bukti.</li>
        </ul>

        {/* A.3 Mengapa Hoaks Menyebar Cepat */}
        <h4 style={{marginTop: 24}}>A.3 Mengapa Hoaks Menyebar Cepat — Perspektif Psikologi</h4>
        <p>Hoaks tidak menyebar karena kebetulan. Ada beberapa mekanisme psikologis yang membuat hoaks lebih viral dibandingkan berita benar:</p>
        <ul>
          <li><strong>Confirmation Bias</strong> — Manusia cenderung percaya dan membagikan informasi yang sesuai dengan keyakinan atau pandangan yang sudah dimiliki. Jika seseorang sudah tidak suka pada tokoh tertentu, ia lebih mudah percaya hoaks negatif tentang tokoh tersebut tanpa verifikasi.</li>
          <li><strong>Bandwagon Effect</strong> — Efek gerbong. Ketika seseorang melihat banyak orang membagikan suatu informasi, ia akan merasa informasi itu benar dan ikut membagikannya. "Kok banyak yang share, berarti bener dong?" — inilah pola pikir yang dimanfaatkan oleh penyebar hoaks.</li>
          <li><strong>Emotional Contagion</strong> — Konten yang memancing emosi kuat (marah, takut, terkejut, geli) 6 kali lebih mungkin dibagikan dibandingkan konten netral. Penyebar hoaks sengaja membuat konten yang memancing emosi agar viral.</li>
          <li><strong>Algoritma Media Sosial</strong> — Platform seperti Instagram, TikTok, dan Facebook menggunakan algoritma berbasis engagement (keterlibatan). Konten yang banyak dikomentari, di-like, dan di-share akan ditampilkan ke lebih banyak orang. Sayangnya, hoaks yang memancing emosi mendapatkan engagement lebih tinggi.</li>
        </ul>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Analogi Sederhana</strong>
          <p>Bayangkan hoaks seperti virus: ia menyebar dari satu orang ke orang lain, dan semakin banyak orang yang terpapar, semakin sulit dibendung. Bedanya, virus digital menyebar melalui klik "share" — yang artinya kita memiliki kekuatan untuk memutus rantai penyebarannya dengan tidak ikut membagikan.</p>
        </div>

        {/* A.4 Tools dan Metode Verifikasi */}
        <h4 style={{marginTop: 24}}>A.4 Tools dan Metode Verifikasi Fakta</h4>
        <p>Ada beberapa metode dan alat yang bisa digunakan untuk memverifikasi kebenaran suatu informasi:</p>
        <ul>
          <li><strong>5W+1H</strong> — Metode dasar bertanya: Who (siapa pembuatnya?), What (klaim apa?), When (kapan?), Where (dari mana?), Why (mengapa dibagikan?), How (bagaimana memverifikasinya?). Metode ini efektif untuk verifikasi awal.</li>
          <li><strong>Reverse Image Search</strong> — Menggunakan Google Images, TinEye, atau Yandex untuk menelusuri asal-usul sebuah foto. Caranya: upload foto atau paste URL foto ke mesin pencari gambar. Ini sangat berguna untuk mengecek apakah foto yang beredar adalah foto lama yang didaur ulang atau foto dari kejadian berbeda.</li>
          <li><strong>Cek Fakta Indonesia</strong> — TurnBackHoax.id (inisiatif masyarakat sipil), CekFakta.com (kumpulan counter narasi), dan situs resmi kominfo.go.id/kominfo.go.id menyediakan database hoaks yang sudah diverifikasi.</li>
          <li><strong>WHOIS Lookup</strong> — Memeriksa kapan domain situs web didaftarkan melalui tool seperti who.is. Situs berita yang baru dibuat beberapa hari lalu tapi klaimnya sangat bombastis adalah tanda mencurigakan.</li>
          <li><strong>Lateral Reading</strong> — Teknik yang digunakan oleh fact-checker profesional: buka tab baru di browser dan cari informasi tentang sumber/penulis berita tersebut. Apakah sumber ini dikenal kredibel? Apakah penulisnya nyata? Apakah ada media lain yang melaporkan hal serupa?</li>
        </ul>

        {/* A.5 Echo Chamber dan Filter Bubble */}
        <h4 style={{marginTop: 24}}>A.5 Echo Chamber dan Filter Bubble</h4>
        <p>Dua konsep penting yang harus dipahami di era digital:</p>
        <ul>
          <li><strong>Echo Chamber (Ruang Gema)</strong> — Kondisi di mana seseorang hanya terpapar informasi dan opini yang sejalan dengan keyakinannya sendiri. Terjadi karena mem-follow akun yang satu pandangan, bergabung di grup yang homogen, dan algoritma yang terus menampilkan konten serupa. Akibatnya, seseorang merasa keyakinannya adalah "fakta" karena tidak pernah melihat sudut pandang berbeda.</li>
          <li><strong>Filter Bubble (Gelembung Filter)</strong> — Istilah yang dicetuskan oleh Eli Pariser (2011). Algoritma platform digital mempelajari apa yang kita sukai dan terus menampilkan konten serupa, sehingga kita terperangkap dalam "gelembung" informasi yang memperkuat bias kita sendiri. Kita tidak melihat informasi yang berbeda atau menantang keyakinan kita.</li>
        </ul>
        <p><strong>Cara Keluar dari Filter Bubble:</strong></p>
        <ul>
          <li>Secara sadar follow akun-akun dengan sudut pandang berbeda</li>
          <li>Membaca berita dari berbagai sumber (nasional dan internasional)</li>
          <li>Menggunakan mode incognito/private untuk pencarian netral</li>
          <li>Bertanya: "Apakah saya pernah membaca pandangan berlawanan tentang topik ini?"</li>
          <li>Membiasakan diskusi dengan orang yang memiliki pandangan berbeda secara santun</li>
        </ul>

        <ContohSoal data={[
          { soal: 'Berikut ini beredar di WhatsApp grup sekolah:\n\n"PERINGATAN!!! Semua jenis mi instan mengandung bahan pengawet formalin yang menyebabkan kanker. Sudah 3 orang meninggal di Rumah Sakit X kota kita. SEBARKAN SECEPATNYA!!!"\n\nAnalisis berita tersebut menggunakan metode 5W+1H. Tuliskan hasil analisis lengkapmu dan simpulkan: apakah informasi ini hoaks atau fakta? Berikan alasan!',
            penyelesaian: [
              'Who: Tidak ada nama penulis atau lembaga resmi yang mencantumkan berita ini. Siapa yang pertama kali membagikan?',
              'What: Klaim bahwa "semua mi instan mengandung formalin" adalah generalisasi berlebihan. BPOM sebagai lembaga pengawas pangan resmi tidak pernah mengeluarkan peringatan seperti ini.',
              'When: Tidak ada tanggal atau waktu kejadian yang spesifik. Hoaks sering kali tidak mencantumkan kapan peristiwa terjadi.',
              'Where: Tidak disebutkan secara spesifik rumah sakit mana dan kota mana. "Rumah Sakit X kota kita" adalah frasa umum yang digunakan untuk membuat hoaks terasa relevan dengan penerima.',
              'Why: Tujuannya adalah membuat panik agar orang cepat membagikan (share) tanpa berpikir. Penggunaan huruf kapital dan tanda seru berlebihan adalah ciri khas clickbait emosional.',
              'How: Verifikasi bisa dilakukan dengan mengecek situs BPOM (bpom.go.id), mencari berita resmi di media terpercaya, dan menggunakan TurnBackHoax.id.',
              'KESIMPULAN: Ini adalah HOAKS (fabricated). Tidak ada dasar fakta, sumber tidak kredibel, dan memancing emosi panik. Mi instan yang beredar di Indonesia sudah mendapat izin edar dari BPOM dan aman dikonsumsi dalam batas wajar.'
            ]
          },
          { soal: 'Sebuah foto beredar di media sosial menunjukkan banjir besar di sebuah kota. Caption-nya: "Banjir parah di kota kita tadi malam!". Temanmu menyuruhmu untuk segera membagikannya. Langkah-langkah verifikasi apa yang akan kamu lakukan sebelum memutuskan untuk membagikan foto tersebut? Jelaskan minimal 3 langkah!',
            penyelesaian: [
              'Langkah 1 — Reverse Image Search: Upload foto tersebut ke Google Images atau TinEye untuk mengecek apakah foto itu adalah foto lama dari kejadian berbeda. Jika muncul hasil yang sama dari tahun lalu, berarti foto sudah didaur ulang.',
              'Langkah 2 — Cek Sumber: Cari tahu siapa yang pertama kali membagikan foto tersebut. Apakah akun resmi (pemerintah, BPBD, media berita) atau akun anonim/akun gosip? Foto dari akun tidak dikenal perlu dicurigai.',
              'Langkah 3 — Verifikasi Lokasi: Bandingkan landmarks (gedung, jalan, patung) di foto dengan kondisi aktual kota. Jika perlu, cek Google Street View atau tanyakan ke orang yang tinggal di daerah tersebut.',
              'Langkah 4 — Cek Berita Resmi: Cari di portal berita terpercaya (Kompas, Detik, CNN Indonesia) atau situs resmi BPBD setempat apakah ada laporan banjir di daerah tersebut.',
              'Langkah 5 — Tunda Share: Jangan langsung membagikan. Lebih baik menunggu konfirmasi daripada ikut menyebarkan informasi yang belum tentu benar.'
            ]
          },
        ]} />

        <Tugas data={[
          'Verifikasi Berita — Temukan 1 berita atau hoaks yang beredar di media sosial (WhatsApp, Instagram, TikTok). Lakukan verifikasi menggunakan metode 5W+1H + reverse image search (jika ada foto). Tuliskan hasil analisis dalam format: (a) Klaim berita, (b) Hasil verifikasi per aspek 5W+1H, (c) Kesimpulan (hoaks/fakta/partially true) beserta alasannya.',
          'Infografis Ciri Hoaks — Buat infografis sederhana (manual di kertas A4 atau digital menggunakan Canva) yang memuat minimal 7 ciri-ciri hoaks. Sertakan contoh nyata untuk setiap ciri. Infografis harus menarik dan mudah dipahami anak SMK.',
          'Diskusi Kelompok — Diskusikan dalam kelompok 4 orang: "Mengapa hoaks tentang kesehatan lebih cepat menyebar daripada hoaks tentang politik?" Sertakan minimal 3 argumen yang didukung oleh konsep psikologi atau sosiologi. Presentasikan hasil diskusi di kelas (maksimal 10 menit).',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  B. IDENTITAS DIGITAL SEBAGAI FONDASI REPUTASI ONLINE             */}
      {/* ================================================================ */}
      <MateriCard icon={Shield} title="B. Identitas Digital sebagai Fondasi Reputasi Online">

        {/* B.1 Pengertian Identitas Digital */}
        <h4 style={{marginTop: 0}}>B.1 Pengertian Identitas Digital</h4>
        <p>Identitas digital adalah representasi diri kita di dunia online — bagaimana orang lain mengenali dan menilai kita berdasarkan aktivitas digital kita. Identitas digital terbentuk dari kombinasi semua jejak digital yang kita tinggalkan: profil media sosial, postingan, komentar, riwayat pencarian, dan bahkan metadata dari foto yang kita unggah.</p>
        <p>Perbedaan penting antara identitas fisik dan identitas digital:</p>
        <ul>
          <li><strong>Permanen</strong> — Identitas fisik bisa berubah seiring waktu (tampilan, penampilan), tapi identitas digital sangat sulit dihapus sepenuhnya. Screenshots, cache, dan arsip web membuat konten lama tetap bisa diakses.</li>
          <li><strong>Publik</strong> — Identitas fisik hanya terlihat oleh orang di sekitar kita, tapi identitas digital bisa diakses oleh siapa saja di seluruh dunia, termasuk guru, calon majikan, dan orang tua calon pasangan.</li>
          <li><strong>Terkontrol Sebagian</strong> — Kita bisa mengontrol apa yang kita posting (active footprint), tapi kita tidak bisa mengontrol data yang dikumpulkan tanpa kita sadari (passive footprint).</li>
        </ul>

        {/* B.2 Digital Footprint: Aktif vs Pasif */}
        <h4 style={{marginTop: 24}}>B.2 Digital Footprint: Aktif vs Pasif</h4>
        <p><strong>Digital footprint</strong> adalah jejak digital yang kita tinggalkan saat menggunakan internet. Jejak ini terbagi menjadi dua kategori:</p>
        <p><strong>Active Footprint (Jejak Aktif)</strong> — Data yang kita sengaja bagikan atau ciptakan di internet:</p>
        <ul>
          <li>Postingan media sosial (foto, video, teks, cerita)</li>
          <li>Komentar di postingan orang lain</li>
          <li>Profil yang kita buat di berbagai platform</li>
          <li>Email yang kita kirim</li>
          <li>Review atau ulasan yang kita tulis</li>
          <li>Upload dokumen, foto, atau karya ke internet</li>
        </ul>
        <p><strong>Passive Footprint (Jejak Pasif)</strong> — Data yang terkumpul tanpa kita sadari atau tanpa kita sengaja ciptakan:</p>
        <ul>
          <li>Lokasi GPS dari foto yang kita bagikan (metadata/EXIF data)</li>
          <li>Riwayat pencarian di Google atau mesin pencari lain</li>
          <li>Cookies yang tersimpan di browser</li>
          <li>Data pembelian atau aktivitas di e-commerce</li>
          <li>IP address dan data perangkat yang tercatat oleh website</li>
          <li>Data yang dikumpulkan oleh aplikasi (daftar kontak, aktivitas, preferensi)</li>
        </ul>
        <div className="info-box">
          <strong><Eye size={14} /> Contoh Nyata</strong>
          <p>Saat kamu memposting foto liburan di Instagram: <strong>Active footprint</strong> = foto, caption, hashtag, lokasi yang kamu tag. <strong>Passive footprint</strong> = metadata GPS exact lokasi, waktu tepat posting, device yang digunakan (iPhone/Android), durasi kamu melihat foto sebelum posting (engagement tracking), dan bahkan foto-foto serupa yang ada di galerimu (untuk rekomendasi). Semua passive footprint ini dikumpulkan oleh Instagram tanpa kamu sadari.</p>
        </div>

        {/* B.3 Digital Permanence */}
        <h4 style={{marginTop: 24}}>B.3 Digital Permanence — Kenapa Sulit Dihapus?</h4>
        <p>Ketika kamu memposting sesuatu di internet, konten tersebut berpotensi permanen dan bisa diakses kapan saja oleh siapa saja. Beberapa alasan mengapa konten online sulit dihapus sepenuhnya:</p>
        <ul>
          <li><strong>Wayback Machine</strong> — Internet Archive (archive.org) secara berkala mengarsipkan halaman web di seluruh dunia. Bahkan setelah konten dihapus dari situs aslinya, versi arsipnya masih bisa diakses.</li>
          <li><strong>Screenshots</strong> — Sekali seseorang mengambil screenshot postinganmu, kamu sudah tidak bisa mengontrol penyebarannya.</li>
          <li><strong>Cache dan Backup</strong> — Mesin pencari seperti Google menyimpan cache (salinan) halaman web. Konten yang sudah dihapus mungkin masih muncul di Google search selama beberapa hari atau minggu.</li>
          <li><strong>Data Sharing antar Platform</strong> — Beberapa platform berbagi data dengan pihak ketiga. Konten yang kamu hapus di satu platform mungkin masih tersedia di platform lain.</li>
        </ul>
        <p><strong>Kasus Nyata:</strong> Pada tahun 2023, beberapa selebriti dan public figure Indonesia mengalami "dugout" — postingan lama mereka dari 5-10 tahun yang lalu diungkap kembali oleh netizen dan menjadi viral. Postingan yang mereka anggap sudah "hilang" ternyata masih tersimpan dalam arsip digital.</p>

        {/* B.4 Personal Branding untuk Siswa SMK */}
        <h4 style={{marginTop: 24}}>B.4 Personal Branding untuk Siswa SMK</h4>
        <p>Personal branding adalah usaha sadar untuk membangun citra diri di dunia digital agar dikenal dengan keahlian dan minat tertentu. Bagi siswa SMK, personal branding yang baik dapat membuka peluang magang, beasiswa, dan karir.</p>
        <h3 style={{marginTop: 12}}>Platform untuk Personal Branding:</h3>
        <ul>
          <li><strong>LinkedIn</strong> — Platform profesional untuk terhubung dengan perusahaan dan rekruter. Tips: gunakan foto profesional, tulis bio yang menjual (contoh: "Siswa XI TJKT | Tertarik di Networking & Cybersecurity | Sedang belajar Python"), unggah proyek dan sertifikasi.</li>
          <li><strong>GitHub</strong> — Portofolio untuk siswa yang belajar coding. Unggah proyek-proyek sekolah, buat README yang baik, dan tunjukkan aktivitas coding (commit history).</li>
          <li><strong>Blog/Website Pribadi</strong> — Showcase tulisan, tutorial, atau portofolio. Bisa menggunakan platform gratis seperti WordPress, Medium, atau GitHub Pages.</li>
          <li><strong>Portofolio Digital</strong> — Kumpulan karya terbaik (desain, coding, tulisan, video) yang bisa diakses melalui satu link. Gunakan Canva, Figma, atau website pribadi untuk membuatnya.</li>
        </ul>
        <div className="info-box">
          <strong><UserCheck size={14} /> Tips Konsistensi</strong>
          <p>Gunakan nama pengguna yang sama di semua platform profesional. Misalnya: "budi-tjkt" atau "budi.network" di LinkedIn, GitHub, dan blog. Ini memudahkan orang menemukan semua jejak digital profesionalmu dalam satu identitas yang konsisten.</p>
        </div>

        {/* B.5 Risiko Pelanggaran Privasi */}
        <h4 style={{marginTop: 24}}>B.5 Risiko Pelanggaran Privasi</h4>
        <p>Sebagai pengguna internet yang bertanggung jawab, kita harus memahami berbagai risiko pelanggaran privasi:</p>
        <ul>
          <li><strong>Doxing</strong> — Tindakan mengungkap data pribadi seseorang secara publik tanpa izin (alamat rumah, nomor telepon, tempat kerja) dengan tujuan mengintimidasi atau mengancam. Doxing bisa terjadi pada siapa saja yang informasinya tersebar di internet.</li>
          <li><strong>Data Breach</strong> — Kebocoran data dari layanan atau platform digital. Contoh: data jutaan pengguna Tokopedia bocor dan dijual di dark web pada tahun 2020. Data yang bocor meliputi email, password, dan data transaksi.</li>
          <li><strong>Phishing</strong> — Teknik penipuan di mana pelaku menyamar sebagai entitas tepercaya (bank, media sosial, sekolah) untuk mencuri data sensitif. Contoh: email palsu yang mengatasnamakan bank dan meminta kita login melalui link palsu.</li>
          <li><strong>Penyalahgunaan Data</strong> — Data yang kita berikan kepada aplikasi digunakan untuk tujuan lain tanpa sepengetahuan kita. Contoh: aplikasi yang meminta akses kontak, lokasi, dan galeri padahal tidak relevan dengan fungsinya.</li>
        </ul>
        <h3 style={{marginTop: 16}}>Tips Melindungi Privasi:</h3>
        <ul>
          <li>Atur pengaturan privasi di setiap media sosial: siapa yang bisa melihat postingan, mengirim pesan, atau melihat profil</li>
          <li>Hindari membagikan data pribadi sensitif (alamat rumah, nomor telepon, data sekolah) di ruang publik</li>
          <li>Gunakan password yang kuat dan berbeda untuk setiap akun; gunakan password manager</li>
          <li>Aktifkan autentikasi dua faktor (2FA) di semua akun yang mendukung</li>
          <li>Baca kebijakan privasi aplikasi sebelum menginstal; perhatikan data apa saja yang diminta</li>
          <li>Berhati-hati saat menggunakan Wi-Fi publik; hindari login ke akun penting di jaringan yang tidak aman</li>
        </ul>

        {/* B.6 Mengelola Reputasi Digital */}
        <h4 style={{marginTop: 24}}>B.6 Mengelola Reputasi Digital</h4>
        <p>Reputasi digital adalah penilaian orang lain terhadap kita berdasarkan jejak digital kita. Reputasi ini dapat mempengaruhi peluang karir, hubungan sosial, dan kepercayaan orang lain. Berikut cara mengelolanya:</p>
        <ul>
          <li><strong>Google Namamu Sendiri</strong> — Cek secara berkala apa yang muncul saat orang mencari namamu di Google. Ini membantumu mengetahui apa yang terlihat oleh publik.</li>
          <li><strong>Bangun Konten Positif</strong> — Unggah konten yang menunjukkan keahlian, minat, dan kontribusi positif. Ini akan mendominasi hasil pencarian dan menggeser konten negatif (jika ada).</li>
          <li><strong>Hapus atau Arsipkan Konten Lama</strong> — Tinjau postingan lama dan hapus atauarsipkan yang sudah tidak relevan atau bisa merugikan.</li>
          <li><strong>Gunakan Nama Profesional</strong> — Nama pengguna yang konsisten dan profesional di semua platform membantu membangun citra yang terorganisir.</li>
          <li><strong>Berikan Kontribusi Positif</strong> — Ikut serta dalam komunitas digital, berikan komentar yang membangun, dan tunjukkan karakter yang baik melalui interaksi online.</li>
        </ul>

        <ContohSoal data={[
          { soal: 'Rina adalah siswi kelas XI yang aktif di Instagram. Ia memposting foto liburan dengan tag lokasi real-time, menggunakan nama akun yang sama dengan email sekolah, dan sering memberikan komentar pedas di postingan orang lain.\n\nAnalisis aktivitas digital Rina dari aspek:\n(a) Active footprint — data apa saja yang Rina sengaja bagikan?\n(b) Passive footprint — data apa saja yang terkumpul tanpa Rina sadari?\n(c) Reputasi digital — bagaimana profil Rina akan terlihat oleh guru atau calon majikan?',
            penyelesaian: [
              '(a) Active footprint: Foto liburan yang diposting, caption, tag lokasi real-time, nama akun, dan komentar-komentar pedas yang ditulisnya. Semua ini adalah data yang Rina sengaja buat dan bagikan.',
              '(b) Passive footprint: Metadata GPS lokasi foto (bukan hanya kota, tapi koordinat exact), waktu tepat foto diambil dan diposting, device yang digunakan, riwayat pencarian Instagram sebelum posting, data engagement (berapa lama Rina melihat foto lain sebelum posting), dan data kontak/akun yang terhubung.',
              '(c) Reputasi digital: Saat calon majikan atau guru Googling nama Rina, mereka akan menemukan: (1) postingan yang menunjukkan lokasi real-time (risiko keamanan), (2) komentar pedas yang bisa mencerminkan karakter negatif, (3) tidak ada konten yang menunjukkan keahlian atau prestasi. Profil Rina tidak akan terlihat profesional di mata rekruter.'
            ]
          },
          { soal: 'Berikut adalah dua profil LinkedIn siswa SMK:\n\nProfil A: Foto selfie di kamar, bio kosong, tidak ada pengalaman atau proyek yang dicantumkan. Username: "ganteng_skm4n1".\n\nProfil B: Foto profesional dengan latar bersih, bio: "Siswa XI TJKT SMKN 2 Kuningan | Tertarik di Networking & Cybersecurity | Sedang belajar Python & Linux | GitHub: @budi-dev", sertakan 3 proyek GitHub dengan screenshot hasil kerja.\n\nSeorang rekruter IT sedang mencari calon magang. Profil mana yang lebih menarik perhatiannya? Jelaskan 5 alasan berdasarkan prinsip personal branding!',
            penyelesaian: [
              'Profil B jelas lebih menarik. Berikut 5 alasannya:',
              '1. Foto Profesional: Profil B menggunakan foto yang layak untuk konteks profesional, menunjukkan keseriusan. Profil A menggunakan selfie yang tidak profesional.',
              '2. Bio Informatif: Profil B menjelaskan identitas, minat, dan keahlian dalam 2 kalimat. Profil A tidak memiliki bio sama sekali — rekruter tidak tahu siapa dia dan apa keahliannya.',
              '3. Username Profesional: "budi-dev" terlihat profesional dan mudah diingat. "ganteng_skm4n1" terkesan tidak serius dan sulit dicari.',
              '4. Portofolio Terlihat: Profil B menampilkan 3 proyek GitHub — bukti konkret keahlian coding. Profil A tidak menunjukkan apapun.',
              '5. Konsistensi dan Searchability: Profil B menggunakan nama yang konsisten dan bisa ditemukan di berbagai platform. Rekruter bisa langsung mengecek GitHub-nya.'
            ]
          },
        ]} />

        <Tugas data={[
          'Audit Jejak Digital — Google namamu sendiri (atau nama akun media sosialmu). Screenshot hasil pencarian minimal 5 hasil teratas. Identifikasi: (a) Informasi apa yang terlihat publik? (b) Apakah ada yang perlu diperbaiki atau dihapus? (c) Buat rencana perbaikan profil digitalmu (3 langkah konkret yang akan kamu lakukan minggu ini).',
          'Buat atau Perbarui Profil Profesional — Buat atau perbarui profil LinkedIn atau GitHub. Pastikan memiliki: (a) Foto profil profesional, (b) Bio yang menjual minimal 2 kalimat (sebutkan kelas, minat, dan keahlian yang sedang dipelajari), (c) Minimal 1 proyek atau karya yang diunggah. Screenshot profil sebelum dan sesudah perubahan, lalu kirimkan ke guru.',
          'Tulis Aturan Pribadi Digital — Buat daftar "Aturan Digital Pribadiku" minimal 10 poin tentang apa yang boleh dan tidak boleh diposting di media sosial. Sertakan alasan untuk setiap aturan. Contoh: "Aku tidak akan membagikan lokasi real-time saat masih di lokasi tersebut — karena bisa membahayakan keamanan pribadi."',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  C. KOLABORASI MENCIPTAKAN KONTEN DIGITAL                        */}
      {/* ================================================================ */}
      <MateriCard icon={Users} title="C. Kolaborasi Menciptakan Konten Digital">

        {/* C.1 Apa itu Konten Digital */}
        <h4 style={{marginTop: 0}}>C.1 Apa itu Konten Digital?</h4>
        <p>Konten digital adalah informasi yang disajikan dalam format digital (teks, gambar, audio, video, atau interaktif) dan dapat diakses, dibagikan, atau didistribusikan melalui internet. Di era digital, konten menjadi sarana komunikasi, pendidikan, hiburan, dan pemasaran yang sangat powerful.</p>
        <p>Peran konten digital dalam kehidupan sehari-hari:</p>
        <ul>
          <li><strong>Pendidikan</strong> — Video tutorial di YouTube, artikel edukatif, kursus online (Google Classroom, Ruangguru)</li>
          <li><strong>Pemasaran</strong> — Iklan digital, konten media sosial bisnis, email marketing</li>
          <li><strong>Hiburan</strong> — Video streaming (Netflix, YouTube), musik (Spotify), game online</li>
          <li><strong>Komunikasi</strong> — Pesan instan, email, video call, postingan media sosial</li>
          <li><strong>Kolaborasi</strong> — Dokumen bersama, proyek tim, presentasi virtual</li>
        </ul>

        {/* C.2 Jenis-jenis Konten Digital */}
        <h4 style={{marginTop: 24}}>C.2 Jenis-jenis Konten Digital</h4>
        <p>Setiap jenis konten memiliki karakteristik, kelebihan, dan tantangan tersendiri. Pemilihan jenis konten yang tepat tergantung pada tujuan, target audiens, dan sumber daya yang tersedia:</p>
        <ul>
          <li><strong>Artikel/Tulisan</strong> — Blog post, artikel website, newsletter, atau essay. <strong>Kelebihan:</strong> SEO-friendly (mudah ditemukan di Google), fleksibel untuk panjang pendek, mudah di-update. <strong>Kekurangan:</strong> Membutuhkan kemampuan meniasa yang baik, pembaca harus meluangkan waktu membaca.</li>
          <li><strong>Infografis</strong> — Visualisasi data dan informasi dalam bentuk gambar. <strong>Kelebihan:</strong> Mudah dicerna, shareable, menarik secara visual. <strong>Kekurangan:</strong> Membutuhkan kemampuan desain, informasi kompleks sulit disajikan dalam satu gambar.</li>
          <li><strong>Video</strong> — Tutorial, vlog, dokumenter, animasi, reel/TikTok. <strong>Kelebihan:</strong> Paling engaging, mudah dipahami (visual + audio), algoritma platform mendukung. <strong>Kekurangan:</strong> Butuh editing yang cukup memakan waktu, file besar, membutuhkan perangkat yang memadai.</li>
          <li><strong>Podcast</strong> — Konten audio berformat serial. <strong>Kelebihan:</strong> Bisa didengarkan sambil aktivitas lain (memasak, perjalanan), intim dan personal. <strong>Kekurangan:</strong> Tidak visual, butuh peralatan audio yang baik, distribusi lebih terbatas.</li>
          <li><strong>Microlearning</strong> — Konten pendek dan padat: reels, TikTok, Instagram stories, carousel. <strong>Kelebihan:</strong> Viral, mudah dikonsumsi, reach tinggi. <strong>Kekurangan:</strong> Kedalaman informasi terbatas, konten mudah tenggelam (ephemeral).</li>
          <li><strong>Konten Interaktif</strong> — Quiz, simulasi, game edukatif, kalkulator online. <strong>Kelebihan:</strong> Melibatkan pengguna secara aktif, meningkatkan retensi. <strong>Kekurangan:</strong> Membutuhkan skill programming dan desain, waktu pengerjaan lebih lama.</li>
        </ul>

        {/* C.3 Workflow Kolaborasi Digital */}
        <h4 style={{marginTop: 24}}>C.3 Workflow Kolaborasi Digital</h4>
        <p>Kolaborasi digital yang efektif membutuhkan alur kerja (workflow) yang terstruktur. Berikut adalah tahapan yang umum digunakan dalam proyek konten digital kolaboratif:</p>
        <ul>
          <li><strong>1. Brainstorming</strong> — Pengumpulan ide dari semua anggota tim. Bisa dilakukan secara virtual menggunakan Miro, Google Jamboard, atau sekadar grup WhatsApp. Jangan menilai ide saat brainstorming — biarkan mengalir seluas mungkin.</li>
          <li><strong>2. Perencanaan</strong> — Menentukan: (a) Topik spesifik, (b) Format konten, (c) Target audiens, (d) Deadline untuk setiap tahap, (e) Tools yang akan digunakan.</li>
          <li><strong>3. Pembagian Tugas</strong> — Menyesuaikan peran dengan keahlian masing-masing anggota. Contoh: siswa yang jago menulis menulis naskah, yang jago desain membuat visual, yang jago presentasi menjadi narator.</li>
          <li><strong>4. Eksekusi</strong> — Mengerjakan tugas masing-masing dengan koordinasi via chat/grup. Gunakan tool kolaborasi agar semua anggota bisa melihat progress.</li>
          <li><strong>5. Review</strong> — Saling mengoreksi dan memberikan feedback konstruktif. Setiap anggota harus terbuka terhadap kritik yang membangun.</li>
          <li><strong>6. Publikasi</strong> — Mengunggah konten ke platform yang sesuai dan mempromosikannya. Diskusikan strategi distribusi: kapan posting, di platform mana, bagaimana cara mempromosikannya.</li>
        </ul>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Tips Koordinasi Tim</strong>
          <p>Buatlah grup khusus untuk proyek (WhatsApp/Telegram/Discord). Gunakan pinned message untuk deadline dan pembagian tugas. Setiap minggu, adakan check-in singkat (5-10 menit) untuk membahas progress dan kendala. Komunikasi yang konsisten adalah kunci keberhasilan kolaborasi digital.</p>
        </div>

        {/* C.4 Tools Kolaborasi */}
        <h4 style={{marginTop: 24}}>C.4 Tools Kolaborasi Digital (Perbandingan)</h4>
        <p>Pemilihan tools yang tepat akan mempercepat dan mempermudah kerja sama tim. Berikut perbandingan tools populer berdasarkan kegunaannya:</p>
        <ul>
          <li><strong>Google Workspace (Docs, Slides, Sheets)</strong> — Gratis, bisa diakses dari browser, edit real-time bersama tim, otomatis tersimpan di cloud. Cocok untuk menulis artikel bersama, menyusun presentasi, atau membuat spreadsheet data.</li>
          <li><strong>Canva</strong> — Platform desain grafis berbasis template. Ribuan template gratis untuk infografis, poster, presentasi, dan media sosial. Bisa kolaborasi tim. Cocok untuk siswa yang belum bisa menggunakan software desain profesional.</li>
          <li><strong>Figma</strong> — Tool desain UI/UX berbasis browser. Sangat powerful untuk mendesain antarmuka website atau aplikasi secara kolaboratif. Gratis untuk akun personal dan tim kecil.</li>
          <li><strong>GitHub</strong> — Platform version control untuk kode. Fitur pull request memungkinkan tim saling review kode sebelum digabungkan. Wajib bagi siswa yang belajar programming.</li>
          <li><strong>Notion</strong> — All-in-one workspace: manajemen proyek, wiki, database, dan dokumentasi. Cocok untuk mengelola todo list tim, membuat dokumentasi proyek, dan menyimpan catatan bersama.</li>
          <li><strong>CapCut</strong> — Edit video sederhana dan gratis, sangat populer untuk konten TikTok/Reels. Fitur template dan auto-caption mempercepat proses editing.</li>
        </ul>

        {/* C.5 Lisensi dan Hak Cipta Konten */}
        <h4 style={{marginTop: 24}}>C.5 Lisensi dan Hak Cipta Konten</h4>
        <p>Saat membuat konten digital, kita harus memahami hak cipta agar tidak melanggar hukum dan memberikan pengakuan yang layak kepada kreator lain.</p>
        <ul>
          <li><strong>Creative Commons (CC)</strong> — Lisensi yang memungkinkan kreator berbagi karya dengan syarat tertentu. Jenis-jenis: CC BY (harus mencantumkan sumber), CC BY-SA (harus mencantumkan sumber + menggunakan lisensi yang sama), CC BY-NC (tidak untuk komersial), CC0 (public domain, bebas digunakan tanpa syarat).</li>
          <li><strong>Royalty-Free</strong> — Konten yang bisa digunakan tanpa membayar royalti per penggunaan, tetapi biasanya ada syarat tertentu (contoh: tidak boleh dijual ulang). Contoh: foto dari Unsplash, musik dari YouTube Audio Library.</li>
          <li><strong>Fair Use (Penggunaan Wajar)</strong> — Penggunaan konten orang lain untuk tujuan edukasi, kritik, atau komentar dengan batasan tertentu. Harus memenuhi 4 faktor: tujuan penggunaan, sifat karya, jumlah yang digunakan, dan dampak terhadap nilai pasar karya asli.</li>
          <li><strong>Atribusi</strong> — Cara memberikan pengakuan kepada kreator asli. Format atribusi yang benar: Judul Karya — [Nama Kreter] — [Lisensi]. Contoh: "Sunset Photo — [John Doe] — CC BY 2.0"</li>
        </ul>
        <div className="info-box">
          <strong><AlertTriangle size={14} /> Penting untuk Dipahami</strong>
          <p>Pelanggaran hak cipta bukan hanya masalah etika, tapi juga hukum. Di Indonesia, UU Hak Cipta No. 28 Tahun 2014 melindungi karya kreatif dari penggunaan tanpa izin. Pelanggaran bisa berakibat denda dan/atau pidana. Sebagai siswa TJKT, memahami lisensi konten adalah bagian dari kompetensi digital yang harus dikuasai.</p>
        </div>

        <ContohSoal data={[
          { soal: 'Sebuah tim yang terdiri dari 4 siswa TJKT diminta membuat video edukatif berdurasi 3-5 menit tentang "Cara Memverifikasi Hoaks" untuk diunggah ke YouTube sekolah. Anggota tim:\n- Andi: jago editing video\n- Budi: jago menulis naskah\n- Citra: jago desain/grafis\n- Dian: jago presentasi/depan kamera\n\nRencanakan:\n(a) Pembagian tugas yang optimal berdasarkan keahlian masing-masing\n(b) Timeline pengerjaan selama 2 minggu\n(c) Tools digital yang akan digunakan untuk koordinasi\n(d) Alur kerja dari awal hingga video terpublikasi',
            penyelesaian: [
              '(a) Pembagian tugas:\n- Budi: Menulis naskah script video + storyboard (alur visual per shot)\n- Citra: Mendesain grafis pendukung (judul, lower third, infografis dalam video)\n- Dian: Menjadi narator/pembawa acara di depan kamera\n- Andi: Mengedit video, menambahkan efek, musik, dan mengekspor final',
              '(b) Timeline 2 minggu:\n- Hari 1-2: Brainstorming dan perencanaan (semua anggota)\n- Hari 3-5: Budi menulis naskah, Citra mulai mendesain grafis\n- Hari 6-7: Review naskah bersama, perbaikan\n- Hari 8-9: Dian merekam narasi, Andi mulai mengedit kasar\n- Hari 10-11: Andi mengedit video, Citra menyelesaikan grafis\n- Hari 12-13: Review bersama, perbaikan\n- Hari 14: Finalisasi dan publikasi',
              '(c) Tools:\n- Google Docs: Menyusun naskah secara kolaboratif\n- WhatsApp Group: Komunikasi harian dan koordinasi\n- Canva: Citra mendesain grafis\n- CapCut/DaVinci Resolve: Andi mengedit video\n- YouTube: Platform publikasi',
              '(d) Alur kerja:\nBrainstorming → Perencanaan → Penulisan Naskah → Review Naskah → Perekaman → Editing → Review Video → Finalisasi → Publikasi YouTube'
            ]
          },
          { soal: 'Kamu ingin membuat presentasi tentang "Tips Anti Hoaks" untuk presentasi di kelas. Kamu menemukan:\n- Foto A: dari situs berita (tidak ada keterangan lisensi)\n- Foto B: dari Unsplash (lisensi CC0)\n- Musik C: dari YouTube Audio Library (royalty-free)\n- Infografis D: dari akun Instagram orang lain\n\nJelaskan untuk masing-masing foto/musik: bolehkah digunakan? Bagaimana cara penggunaannya yang benar? Apa risiko jika digunakan tanpa izin?',
            penyelesaian: [
              'Foto A (situs berita, tanpa lisensi): TIDAK BOLEH digunakan tanpa izin. Situs berita memiliki hak cipta atas foto-foto yang mereka publikasikan. Cara yang benar: minta izin kepada pemilik foto, gunakan foto berita lain yang berlisensi, atau gunakan foto sendiri. Risiko: pelanggaran hak cipta, bisa kena teguran hukum.',
              'Foto B (Unsplash, CC0): BOLEH digunakan tanpa syarat. Lisensi CC0 berarti kreator melepaskan semua hak cipta. Tidak perlu mencantumkan atribusi, tapi sangat disarankan untuk memberikan pengakuan. Cara yang benar: tuliskan "Photo by [Nama] on Unsplash" di slide. Risiko: tidak ada.',
              'Musik C (YouTube Audio Library, royalty-free): BOLEH digunakan. YouTube Audio Library menyediakan musik gratis untuk konten creator. Perlu diperhatikan: beberapa lagu membutuhkan atribusi (cek keterangan di halaman musik). Cara yang benar: cantumkan nama artis dan judul lagu di deskripsi video. Risiko: jika tidak mencantumkan atribusi yang diminta, bisa kena klaim hak cipta.',
              'Infografis D (Instagram orang lain): TIDAK BOLEH digunakan tanpa izin. Infografis adalah karya kreatif yang dilindungi hak cipta. Cara yang benar: minta izin langsung kepada pemilik akun, repost dengan kredit yang jelas, atau buat infografis sendiri. Risiko: pelanggaran hak cipta, akun kamu bisa dilaporkan.'
            ]
          },
        ]} />

        <Tugas data={[
          'Rencana Proyek Konten — Buat rencana proyek konten digital sederhana untuk tugas kelompok 3 orang. Tentukan: (a) Topik (sesuai materi Modul 1: hoaks, identitas digital, atau kolaborasi), (b) Format konten (pilih salah satu: artikel, infografis, atau video pendek), (c) Pembagian tugas per anggota, (d) Timeline pengerjaan 1 minggu (hari per hari), (e) Tools yang akan digunakan.',
          'Buat Konten Digital — Buat minimal 1 konten digital tentang topik Modul 1 (hoaks, identitas digital, atau kolaborasi). Bisa berupa: artikel blog, infografis, video pendek (reels/TikTok), atau presentasi. Unggah ke platform yang sesuai dan kirimkan link-nya ke guru. Sertakan sumber/referensi yang digunakan.',
          'Refleksi Kolaborasi — Setelah mengerjakan tugas kolaboratif, tuliskan refleksi: (a) Tantangan terbesar saat bekerja sama secara digital, (b) Cara mengatasi tantangan tersebut, (c) Pelajaran yang didapat tentang kolaborasi digital, (d) Rencana perbaikan untuk proyek kolaboratif berikutnya. Minimal 200 kata.',
        ]} />

      </MateriCard>

    </div>
  );
}
