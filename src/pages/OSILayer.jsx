import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Layers, BookOpen, Cable, ShieldCheck, ArrowDownUp, GitCompare, Star, AlertTriangle, CheckSquare } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';
import { ContohSoal, Tugas } from '../components/ContohSoal';

const sections = [
  { id: 's1', label: 'A. Pengenalan Model OSI' },
  { id: 's2', label: 'B. Tujuh Layer Model OSI' },
  { id: 's3', label: 'C. Layer Bawah (1-4)' },
  { id: 's4', label: 'D. Layer Atas (5-7)' },
  { id: 's5', label: 'E. Enkapsulasi Data dan PDU' },
  { id: 's6', label: 'F. Model OSI vs TCP/IP' },
];

export default function OSILayer() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('osi-layer'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="osi-layer" sections={sections} />

      {/* ================================================================ */}
      {/* A. PENGENALAN MODEL OSI                                          */}
      {/* ================================================================ */}
      <MateriCard icon={BookOpen} title="A. Pengenalan Model OSI">
        <p><strong>OSI (Open Systems Interconnection)</strong> adalah model referensi konseptual yang membagi proses komunikasi jaringan menjadi <strong>7 layer (lapisan)</strong>. Model ini diterbitkan oleh <strong>ISO (International Organization for Standardization)</strong> pada tahun 1984.</p>

        <div className="info-box">
          <strong><Star size={14} /> Mengapa OSI Dibutuhkan?</strong>
          <p>Tanpa standar yang sama, perangkat dari produsen berbeda tidak bisa saling berkomunikasi. OSI membuat komunikasi menjadi <strong>terstandar dan terstruktur</strong> — vendor Cisco, MikroTik, TP-Link, hingga software developer mengacu pada model yang sama.</p>
        </div>

        <h3 style={{marginTop: 20}}>Tujuan Model OSI:</h3>
        <ul>
          <li><strong>Standarisasi</strong> — perangkat lintas vendor dapat berkomunikasi.</li>
          <li><strong>Pembagian tugas yang jelas</strong> — setiap layer punya fungsi spesifik dan independen.</li>
          <li><strong>Mudah troubleshooting</strong> — masalah dapat dilokalisasi per layer (bottom-up atau top-down).</li>
          <li><strong>Fleksibilitas teknologi</strong> — teknologi di satu layer boleh berganti tanpa mengubah layer lain (misal ganti Wi-Fi ke kabel tanpa mengubah aplikasi).</li>
          <li><strong>Dasar pembelajaran</strong> — kerangka berpikir untuk memahami cara kerja jaringan secara keseluruhan.</li>
        </ul>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Cara Mengingat Urutan Layer</strong>
          <p>Dari layer 7 ke 1 (arah pengiriman data): "<strong>A</strong>ll <strong>P</strong>eople <strong>S</strong>eem <strong>T</strong>o <strong>N</strong>eed <strong>D</strong>ata <strong>P</strong>rocessing" (<strong>A</strong>pplication, <strong>P</strong>resentation, <strong>S</strong>ession, <strong>T</strong>ransport, <strong>N</strong>etwork, <strong>D</strong>ata Link, <strong>P</strong>hysical).</p>
        </div>

        <ContohSoal data={[
          { soal: 'Jelaskan apa yang dimaksud dengan model OSI dan siapa yang menerbitkannya!',
            penyelesaian: 'Model OSI (Open Systems Interconnection) adalah model referensi konseptual yang membagi proses komunikasi data dalam jaringan menjadi 7 layer. Diterbitkan oleh ISO (International Organization for Standardization) tahun 1984 sebagai standar agar perangkat lintas vendor dapat saling berkomunikasi.' },
          { soal: 'Mengapa model referensi seperti OSI penting dalam dunia jaringan komputer?',
            penyelesaian: 'Karena OSI menyediakan standar umum: (1) perangkat beda vendor bisa interoperabel, (2) fungsi jaringan terbagi jelas per layer sehingga pengembangan lebih mudah, (3) troubleshooting lebih sistematis karena masalah bisa dilokalisasi per layer, (4) perubahan teknologi di satu layer tidak mengganggu layer lain.' },
        ]} />
        <Tugas data={[
          'Tuliskan tujuh layer OSI berurutan dari layer 1 sampai layer 7 beserta fungsi utamanya dalam satu kalimat!',
          'Buatlah mnemonic (kalimat pengingat) versimu sendiri untuk urutan 7 layer OSI!',
          'Jelaskan dengan bahasamu sendiri mengapa dua komputer dengan merek berbeda (misal Lenovo dan Asus) tetap bisa saling bertukar data!',
        ]} />
      </MateriCard>

      {/* ================================================================ */}
      {/* B. TUJUH LAYER MODEL OSI                                         */}
      {/* ================================================================ */}
      <MateriCard icon={Layers} title="B. Tujuh Layer Model OSI">
        <p>Berikut ringkasan ketujuh layer OSI dari yang terbawah ke teratas, termasuk PDU (Protocol Data Unit) dan perangkat yang bekerja di tiap layer:</p>

        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>No</th><th>Layer</th><th>Fungsi Utama</th><th>PDU</th><th>Perangkat/Protokol</th></tr></thead>
            <tbody>
              <tr><td>7</td><td><strong>Application</strong></td><td>Antarmuka jaringan bagi aplikasi pengguna</td><td>Data</td><td>HTTP, HTTPS, DNS, FTP, SMTP</td></tr>
              <tr><td>6</td><td><strong>Presentation</strong></td><td>Format data, enkripsi, kompresi</td><td>Data</td><td>SSL/TLS, JPEG, ASCII, MPEG</td></tr>
              <tr><td>5</td><td><strong>Session</strong></td><td>Membuat, mengelola, mengakhiri sesi</td><td>Data</td><td>NetBIOS, RPC, PPTP</td></tr>
              <tr><td>4</td><td><strong>Transport</strong></td><td>Komunikasi end-to-end, segmentasi, reliabilitas</td><td>Segment</td><td>TCP, UDP</td></tr>
              <tr><td>3</td><td><strong>Network</strong></td><td>Pemilihan jalur (routing), alamat logis IP</td><td>Packet</td><td>Router, IP, ICMP</td></tr>
              <tr><td>2</td><td><strong>Data Link</strong></td><td>Alamat fisik MAC, framing, error detection</td><td>Frame</td><td>Switch, NIC, Ethernet, ARP</td></tr>
              <tr><td>1</td><td><strong>Physical</strong></td><td>Transmisi bit melalui media fisik/nirkabel</td><td>Bit</td><td>Kabel, hub, repeater, sinyal</td></tr>
            </tbody>
          </table>
        </div>

        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Trik Hafalan PDU</strong>
          <p>Layer 7-5 PDU-nya sama-sama <strong>Data</strong>, lalu turunnya berurutan: <strong>S</strong>egment (L4) → <strong>P</strong>acket (L3) → <strong>F</strong>rame (L2) → <strong>B</strong>it (L1). Ingat: "<strong>S</strong>ome <strong>P</strong>eople <strong>F</strong>ear <strong>B</strong>irthdays".</p>
        </div>

        <ContohSoal data={[
          { soal: 'Sebutkan PDU dari layer Transport, Network, Data Link, dan Physical!',
            penyelesaian: 'Transport = Segment. Network = Packet. Data Link = Frame. Physical = Bit. Untuk layer 5-7 (Session, Presentation, Application) PDU-nya adalah Data.' },
          { soal: 'Pada layer manakah switch dan router masing-masing bekerja?',
            penyelesaian: 'Switch bekerja di layer 2 (Data Link) karena meneruskan frame berdasarkan MAC address. Router bekerja di layer 3 (Network) karena melakukan routing paket berdasarkan alamat IP.' },
        ]} />
        <Tugas data={[
          'Buat tabel 7 layer OSI berisi: nomor layer, nama, PDU, dan satu contoh protokol/perangkat!',
          'Dengan mnemonic "Some People Fear Birthdays", jelaskan maksud masing-masing huruf dan layernya!',
        ]} />
      </MateriCard>

      {/* ================================================================ */}
      {/* C. LAYER BAWAH (1-4)                                             */}
      {/* ================================================================ */}
      <MateriCard icon={Cable} title="C. Layer Bawah (1-4)">
        <h4 style={{marginTop: 0}}>Layer 1 — Physical (Fisik)</h4>
        <p>Bertanggung jawab mengirimkan <strong>bit (0 dan 1)</strong> secara mentah melalui media transmisi: kabel tembaga (sinyal listrik), fiber optik (cahaya), atau udara (gelombang radio). Layer ini juga mendefinisikan spesifikasi fisik: jenis kabel, konektor, tegangan, frekuensi sinyal, dan jangkauan.</p>
        <ul>
          <li><strong>Perangkat:</strong> kabel UTP/fiber, konektor RJ-45, hub, repeater, media converter.</li>
          <li><strong>Masalah tipikal:</strong> kabel putus, konektor rusak, lampu link padam, redaman sinyal lemah.</li>
        </ul>

        <h4 style={{marginTop: 20}}>Layer 2 — Data Link</h4>
        <p>Mengemas bit menjadi <strong>frame</strong>, memberi identitas fisik perangkat melalui <strong>MAC address</strong> (48 bit, contoh: A4:5E:60:B2:1C:3D), mendeteksi kesalahan transmisi dengan FCS/CRC, dan mengatur akses perangkat ke media.</p>
        <ul>
          <li><strong>Dua sublayer:</strong> LLC (Logical Link Control) — komunikasi dengan layer atas; MAC (Media Access Control) — pengalamatan fisik dan akses media.</li>
          <li><strong>Perangkat:</strong> switch, bridge, NIC (kartu jaringan). <strong>Protokol:</strong> Ethernet, ARP, PPP.</li>
          <li><strong>Masalah tipikal:</strong> collision, broadcast storm akibat loop, VLAN mismatch.</li>
        </ul>

        <h4 style={{marginTop: 20}}>Layer 3 — Network</h4>
        <p>Mengemas data menjadi <strong>packet</strong> dan menentukan <strong>jalur terbaik</strong> antar jaringan menggunakan <strong>alamat IP logis</strong>. Di sinilah routing, fragmentasi, dan TTL (mencegah paket berputar selamanya) bekerja.</p>
        <ul>
          <li><strong>Perangkat:</strong> router, layer-3 switch. <strong>Protokol:</strong> IPv4, IPv6, ICMP (ping), protokol routing (OSPF, RIP, EIGRP, BGP).</li>
          <li><strong>Masalah tipikal:</strong> IP salah/konflik, default gateway salah, routing table keliru, subnet mask tidak cocok.</li>
        </ul>

        <h4 style={{marginTop: 20}}>Layer 4 — Transport</h4>
        <p>Komunikasi <strong>end-to-end</strong> antara aplikasi sumber dan tujuan. Membagi data besar menjadi <strong>segment</strong>, memakai <strong>nomor port</strong> untuk membedakan aplikasi (80=HTTP, 443=HTTPS, 53=DNS, 25=SMTP), serta menjaga keandalan pengiriman.</p>
        <ul>
          <li><strong>TCP:</strong> andal — three-way handshake (SYN, SYN-ACK, ACK), acknowledgment, retransmisi jika data hilang. Dipakai HTTP/S, FTP, email.</li>
          <li><strong>UDP:</strong> cepat tanpa jaminan pengiriman. Dipakai streaming, VoIP, game online, DNS query.</li>
          <li><strong>Masalah tipikal:</strong> port diblokir firewall, timeout karena packet loss.</li>
        </ul>

        <ContohSoal data={[
          { soal: 'Sebuah kabel UTP putus sehingga PC tidak bisa akses internet. Di layer berapa masalahnya dan apa gejalanya?',
            penyelesaian: 'Masalah di Layer 1 (Physical). Gejalanya: lampu link LED pada NIC dan switch mati, tidak ada carrier signal, ping ke gateway gagal total (Request timed out / Destination host unreachable).' },
          { soal: 'Mengapa video call lebih cocok memakai UDP daripada TCP? Jelaskan dari sifat keduanya!',
            penyelesaian: 'Video call butuh latensi rendah dan data real-time. UDP mengirim tanpa handshake dan retransmisi sehingga cepat; segmen yang hilang cukup dilewati. TCP akan menunggu retransmisi paket hilang sehingga aliran video delay dan patah-patah — lebih mengganggu daripada kehilangan sebagian frame video.' },
          { soal: 'Jelaskan proses three-way handshake pada TCP!',
            penyelesaian: '(1) Klien mengirim SYN — meminta koneksi. (2) Server membalas SYN-ACK — menerima permintaan dan menyatakan siap. (3) Klien mengirim ACK — koneksi resmi terbentuk dan transfer data dimulai. Proses ini memastikan kedua sisi siap dan sinkron sebelum bertukar data.' },
        ]} />
        <Tugas data={[
          'Bandingkan hub dan switch dari sudut pandang layer tempat mereka bekerja. Mengapa switch dianggap lebih pintar daripada hub?',
          'Sebutkan nomor port untuk: HTTP, HTTPS, DNS, SMTP, dan FTP beserta protokol transport (TCP/UDP) yang dipakainya!',
          'Seorang siswa bisa ping ke gateway tetapi tidak bisa membuka website. Menurutmu layer mana yang bermasalah? Jelaskan analisismu!',
        ]} />
      </MateriCard>

      {/* ================================================================ */}
      {/* D. LAYER ATAS (5-7)                                              */}
      {/* ================================================================ */}
      <MateriCard icon={ShieldCheck} title="D. Layer Atas (5-7)">
        <h4 style={{marginTop: 0}}>Layer 5 — Session</h4>
        <p>Bertugas <strong>membuat, mengelola, dan mengakhiri sesi</strong> (dialog) antara dua aplikasi. Menjaga agar pertukaran data tetap tersinkron dan sesi antar aplikasi terpisah — misalnya saat kamu membuka dua akun berbeda di browser yang sama, layer inilah yang menjaga keduanya tidak tercampur. Contoh protokol: NetBIOS, RPC, PPTP.</p>

        <h4 style={{marginTop: 20}}>Layer 6 — Presentation</h4>
        <p>"Penerjemah" jaringan: memastikan data dikirim dan dibaca dalam <strong>format yang sama</strong> oleh kedua pihak. Tugas utamanya:</p>
        <ul>
          <li><strong>Format/representasi data</strong> — konversi karakter (ASCII, UTF-8), gambar (JPEG, PNG, GIF), video (MPEG, MP4).</li>
          <li><strong>Enkripsi/dekripsi</strong> — SSL/TLS pada website https:// agar data aman di perjalanan.</li>
          <li><strong>Kompresi</strong> — memperkecil ukuran data supaya transfer lebih efisien.</li>
        </ul>

        <h4 style={{marginTop: 20}}>Layer 7 — Application</h4>
        <p>Layer paling dekat dengan pengguna: menyediakan <strong>antarmuka jaringan bagi aplikasi</strong>. Perlu dibedakan — yang menjadi layer 7 adalah <em>protokolnya</em>, bukan aplikasinya. Browser adalah aplikasi; protokol HTTP-lah yang bekerja di layer ini.</p>
        <ul>
          <li><strong>Web:</strong> HTTP, HTTPS. <strong>Email:</strong> SMTP (kirim), POP3/IMAP (terima).</li>
          <li><strong>Transfer file:</strong> FTP, SFTP. <strong>Nama domain:</strong> DNS.</li>
          <li><strong>Remote access:</strong> Telnet, SSH. <strong>Pengalamatan otomatis:</strong> DHCP.</li>
        </ul>

        <ContohSoal data={[
          { soal: 'Saat mengakses website https://www.sekolah.sch.id, protokol apa saja yang bekerja di layer atas (5-7)? Jelaskan perannya!',
            penyelesaian: 'DNS (L7) menerjemahkan nama domain menjadi IP address. HTTPS bekerja di L7 sebagai protokol permintaan/respon web, dan TLS di L6 melakukan enkripsi agar data login tidak bisa disadap. Session management di L5 menjaga sesi browsing tetap terhubung selama interaksi berlangsung.' },
          { soal: 'Mengapa enkripsi termasuk tugas Layer 6 (Presentation), bukan Layer 7 (Application)?',
            penyelesaian: 'Karena enkripsi berkaitan dengan representasi/format data — bagaimana data "ditulis" sebelum ditransmisikan dan "dibaca" setelah diterima — bukan tentang fungsi layanan aplikasi itu sendiri. Layer 6 memastikan format data (termasuk bentuk terenkripsi dan terkompresi) dapat dipahami kedua belah pihak.' },
        ]} />
        <Tugas data={[
          'Buat tabel berisi 5 aktivitas harianmu (browsing, email, streaming, chat, download file) beserta protokol layer aplikasi yang dipakai!',
          'Jelaskan perbedaan fungsi Session, Presentation, dan Application layer dengan contoh masing-masing!',
        ]} />
      </MateriCard>

      {/* ================================================================ */}
      {/* E. ENKAPSULASI DATA DAN PDU                                      */}
      {/* ================================================================ */}
      <MateriCard icon={ArrowDownUp} title="E. Enkapsulasi Data dan PDU">
        <p><strong>Enkapsulasi</strong> adalah proses membungkus data dengan header (dan trailer) tambahan di setiap layer saat data dikirim dari pengirim ke penerima. Setiap layer menambahkan informasi kontrol yang dibutuhkan layer yang sama di sisi penerima.</p>

        <div className="info-box">
          <strong><Star size={14} /> Istilah Penting</strong>
          <p><strong>PDU (Protocol Data Unit)</strong> = bentuk data pada suatu layer. Namanya berubah sesuai layer: Data → Segment → Packet → Frame → Bit.</p>
        </div>

        <h3 style={{marginTop: 20}}>Proses Enkapsulasi (di Komputer Pengirim):</h3>
        <ol>
          <li><strong>L7-L5:</strong> pengguna mengetik pesan → aplikasi menghasilkan <strong>data</strong>.</li>
          <li><strong>L4 Transport:</strong> data dipecah menjadi <strong>segment</strong>, ditambah header TCP/UDP (port sumber & tujuan).</li>
          <li><strong>L3 Network:</strong> segment dibungkus menjadi <strong>packet</strong>, ditambah header IP (IP sumber & tujuan).</li>
          <li><strong>L2 Data Link:</strong> packet dibungkus menjadi <strong>frame</strong>, ditambah header MAC + trailer FCS untuk deteksi error.</li>
          <li><strong>L1 Physical:</strong> frame diubah menjadi <strong>bit</strong> (sinyal listrik/cahaya/radio) dan dikirim lewat media.</li>
        </ol>

        <h3 style={{marginTop: 20}}>Proses De-Enkapsulasi (di Komputer Penerima):</h3>
        <p>Kebalikan arah di atas: bit → frame → packet → segment → data. Setiap layer penerima <strong>membuka header-nya sendiri</strong>: L1 membaca sinyal menjadi bit, L2 cek MAC & FCS, L3 cek IP tujuan, L4 cek port lalu menyusun ulang segment, hingga aplikasi menampilkan data utuh.</p>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Analogi Surat</strong>
          <p>Data = suratmu. Segment = amplop berisi surat dengan kode cabang. Packet = amplop diberi alamat kota/provinsi. Frame = amplop diberi alamat lengkap jalan. Bit = surat dikirim pakai motor/kapal/pesawat. Penerima membuka amplop lapis demi lapis sampai menemukan surat aslinya.</p>
        </div>

        <ContohSoal data={[
          { soal: 'Urutkan PDU berikut sesuai proses enkapsulasi dari layer tertinggi ke terendah: Frame, Segment, Bit, Data, Packet!',
            penyelesaian: 'Data (L7-5) → Segment (L4) → Packet (L3) → Frame (L2) → Bit (L1). Setiap turun satu layer, data dibungkus header tambahan sesuai fungsi layer tersebut.' },
          { soal: 'Informasi apa yang terdapat pada header di layer Transport dan Network? Mengapa keduanya sama-sama diperlukan?',
            penyelesaian: 'Header Transport berisi nomor port (menunjukkan aplikasi tujuan, misal web = 80/443). Header Network berisi alamat IP sumber-tujuan (menunjukkan host/jaringan tujuan). Keduanya diperlukan karena port mengarahkan data sampai ke aplikasi yang tepat di dalam host, sedangkan IP mengantar packet melewati jaringan sampai ke host yang tepat.' },
        ]} />
        <Tugas data={[
          'Gambarkan diagram enkapsulasi data dari L7 sampai L1 beserta nama PDU tiap tahap!',
          'Sebuah file 3 MB dipecah menjadi banyak segment. Jelaskan bagaimana penerima menyusun ulang segment menjadi file utuh!',
          'Apa fungsi trailer FCS pada frame di layer Data Link? Apa yang terjadi jika nilainya tidak cocok saat diterima?',
        ]} />
      </MateriCard>

      {/* ================================================================ */}
      {/* F. MODEL OSI vs TCP/IP                                           */}
      {/* ================================================================ */}
      <MateriCard icon={GitCompare} title="F. Model OSI vs TCP/IP">
        <p><strong>TCP/IP</strong> adalah model yang benar-benar dipakai di internet saat ini. Terdiri dari <strong>4 layer</strong>: Application, Transport, Internet, dan Network Access. Model OSI tetap diajarkan karena jadi <em>referensi teori</em> untuk troubleshooting dan pembelajaran.</p>

        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>OSI (7 Layer)</th><th>TCP/IP (4 Layer)</th></tr></thead>
            <tbody>
              <tr><td>7. Application<br/>6. Presentation<br/>5. Session</td><td><strong>Application</strong> — HTTP/S, DNS, FTP, SMTP, SSH</td></tr>
              <tr><td>4. Transport</td><td><strong>Transport</strong> — TCP, UDP</td></tr>
              <tr><td>3. Network</td><td><strong>Internet</strong> — IP, ICMP, ARP* (*sering dipetakan di sini)</td></tr>
              <tr><td>2. Data Link<br/>1. Physical</td><td><strong>Network Access</strong> — Ethernet, Wi-Fi, driver NIC</td></tr>
            </tbody>
          </table>
        </div>

        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Aspek</th><th>Model OSI</th><th>Model TCP/IP</th></tr></thead>
            <tbody>
              <tr><td>Jumlah layer</td><td>7 layer</td><td>4 layer</td></tr>
              <tr><td>Sifat model</td><td>Referensi teoritis/konseptual</td><td>Praktis — dipakai internet nyata</td></tr>
              <tr><td>Dikembangkan oleh</td><td>ISO (1984)</td><td>DoD/ARPANET (1970-an)</td></tr>
              <tr><td>Pendekatan</td><td>Dibuat dulu, protokol menyusul</td><td>Protokol dulu, model mendeskripsikannya</td></tr>
              <tr><td>Kegunaan utama</td><td>Standar pembelajaran & troubleshooting</td><td>Implementasi komunikasi internet</td></tr>
            </tbody>
          </table>
        </div>

        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Troubleshooting dengan OSI (Metode Bottom-Up)</strong>
          <p>Cek berlapis dari bawah: <strong>L1</strong> kabel/lampu link → <strong>L2</strong> MAC/VLAN → <strong>L3</strong> ping IP & gateway → <strong>L4</strong> port/firewall → <strong>L7</strong> aplikasi/browser. Metode ini memastikan masalah ditemukan sistematis, tidak menebak-nebak.</p>
        </div>

        <ContohSoal data={[
          { soal: 'Bandingkan jumlah layer model OSI dan TCP/IP beserta padanannya!',
            penyelesaian: 'TCP/IP 4 layer = gabungan layer OSI: Application TCP/IP ≈ OSI L5-7; Transport TCP/IP = OSI L4; Internet TCP/IP = OSI L3; Network Access TCP/IP ≈ OSI L1-L2. Jadi OSI 7 layer diringkas menjadi 4 layer dalam TCP/IP.' },
          { soal: 'Komputer user tidak bisa browsing. Tuliskan langkah troubleshooting bottom-up minimal 4 langkah!',
            penyelesaian: '(1) L1: cek kabel terpasang & lampu link menyala (atau Wi-Fi tersambung). (2) L2: cek NIC aktif, cek MAC/VLAN. (3) L3: jalankan ipconfig pastikan IP valid, ping gateway, lalu ping 8.8.8.8. (4) L7/L4: ping domain google.com (uji DNS) dan buka browser; jika IP jalan tapi domain gagal, masalahnya di DNS.' },
        ]} />
        <Tugas data={[
          'Buat tabel pemetaan lengkap 7 layer OSI ke dalam 4 layer TCP/IP beserta contoh protokolnya!',
          'Menurutmu, mengapa model TCP/IP yang dipakai di dunia nyata padahal OSI yang lebih rinci? Tuliskan analisismu!',
          'Praktik: jalankan tracert google.com di CMD. Analisis hasilnya — hop-hop tersebut melewati perangkat layer apa saja?',
        ]} />
      </MateriCard>
    </div>
  );
}

function MateriCard({ icon: Icon, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
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
