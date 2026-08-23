import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Layers, BookOpen, Cable, ShieldCheck, ArrowDownUp, GitCompare, Network, Star, AlertTriangle, CheckSquare, Info } from 'lucide-react';
import SectionTracker from '../components/SectionTracker';

const sections = [
  { id: 's1', label: 'A. Pengenalan Model OSI' },
  { id: 's2', label: 'B. Tujuh Layer Model OSI' },
  { id: 's3', label: 'C. Layer Bawah (1-4)' },
  { id: 's4', label: 'D. Layer Atas (5-7)' },
  { id: 's5', label: 'E. Enkapsulasi Data dan PDU' },
  { id: 's6', label: 'F. Model OSI vs TCP/IP' },
  { id: 's7', label: 'G. Komunikasi Antar Host' },
];

/* ================= DIAGRAM SVG ================= */

function OSIStackDiagram() {
  const rows = [
    ['7', 'Application', 'HTTP · DNS · FTP · SMTP', '#4f46e5', 'Data'],
    ['6', 'Presentation', 'SSL/TLS · JPEG · ASCII', '#6d28d9', 'Data'],
    ['5', 'Session', 'NetBIOS · RPC', '#7c3aed', 'Data'],
    ['4', 'Transport', 'TCP · UDP', '#db2777', 'Segment'],
    ['3', 'Network', 'Router · IP · ICMP', '#ea580c', 'Packet'],
    ['2', 'Data Link', 'Switch · Ethernet · MAC', '#059669', 'Frame'],
    ['1', 'Physical', 'Kabel · Hub · Sinyal', '#0284c7', 'Bit'],
  ];
  return (
    <div style={{marginTop: 14}}>
      <svg viewBox="0 0 580 400" role="img" aria-label="Diagram tujuh layer model OSI" style={{width:'100%', height:'auto', maxWidth: 580}}>
        <text x={44} y={16} fontSize={12} fontWeight="bold" fill="var(--text-light)">LAYER ATAS — dekat pengguna</text>
        {rows.map(([no, nama, contoh, warna, pdu], i) => (
          <g key={no}>
            <rect x={40} y={i * 50 + 26} width={350} height={42} rx={8} fill={warna} />
            <text x={56} y={i * 50 + 52} fontSize={15} fontWeight="bold" fill="#fff">{no}. {nama}</text>
            <text x={200} y={i * 50 + 51} fontSize={11} fill="#ffffffcc">{contoh}</text>
            <rect x={402} y={i * 50 + 32} width={86} height={30} rx={6} fill="var(--surface-light, #eef2f7)" stroke="var(--border, #d5dbe3)" />
            <text x={445} y={i * 50 + 52} fontSize={12} fontWeight="bold" fill="var(--text)" textAnchor="middle">{pdu}</text>
          </g>
        ))}
        <text x={44} y={388} fontSize={12} fontWeight="bold" fill="var(--text-light)">LAYER BAWAH — dekat media fisik</text>
      </svg>
    </div>
  );
}

function EncapsulationDiagram() {
  const steps = [
    ['Data', 'L7-L5', '#4f46e5'],
    ['Segment', '+ Port (L4)', '#db2777'],
    ['Packet', '+ IP (L3)', '#ea580c'],
    ['Frame', '+ MAC + FCS (L2)', '#059669'],
    ['Bit', 'Sinyal (L1)', '#0284c7'],
  ];
  return (
    <div style={{marginTop: 14}}>
      <svg viewBox="0 0 640 150" role="img" aria-label="Proses enkapsulasi data dari layer 7 ke layer 1" style={{width:'100%', height:'auto', maxWidth: 640}}>
        <defs>
          <marker id="arrowE" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-light)" />
          </marker>
        </defs>
        {steps.map(([nama, ket, warna], i) => {
          const x = i * 126 + 8;
          return (
            <g key={nama}>
              <rect x={x} y={62} width={104} height={46} rx={8} fill={warna} />
              <text x={x + 52} y={82} fontSize={13} fontWeight="bold" fill="#fff" textAnchor="middle">{nama}</text>
              <text x={x + 52} y={99} fontSize={10} fill="#ffffffcc" textAnchor="middle">{ket}</text>
              {i < steps.length - 1 && (
                <line x1={x + 106} y1={85} x2={x + 124} y2={85} stroke="var(--text-light)" strokeWidth={1.5} markerEnd="url(#arrowE)" />
              )}
            </g>
          );
        })}
        <text x={320} y={36} fontSize={12.5} fontWeight="bold" fill="var(--text)" textAnchor="middle">Pengirim: tiap layer menambah header (enkapsulasi)</text>
        <text x={320} y={132} fontSize={12.5} fontWeight="bold" fill="var(--text)" textAnchor="middle">Penerima: proses terbalik membuka header satu per satu (de-enkapsulasi)</text>
      </svg>
    </div>
  );
}

function OsiTcpIpDiagram() {
  const osi = [['7 Application', '#4f46e5'], ['6 Presentation', '#6d28d9'], ['5 Session', '#7c3aed'], ['4 Transport', '#db2777'], ['3 Network', '#ea580c'], ['2 Data Link', '#059669'], ['1 Physical', '#0284c7']];
  const tcp = [
    ['Application', '#4f46e5', 26, 118],
    ['Transport', '#db2777', 146, 38],
    ['Internet', '#ea580c', 186, 38],
    ['Network Access', '#0284c7', 226, 78],
  ];
  return (
    <div style={{marginTop: 14}}>
      <svg viewBox="0 0 520 310" role="img" aria-label="Pemetaan model OSI tujuh layer ke model TCP/IP empat layer" style={{width:'100%', height:'auto', maxWidth: 520}}>
        <text x={105} y={18} fontSize={13} fontWeight="bold" fill="var(--text)" textAnchor="middle">Model OSI</text>
        <text x={400} y={18} fontSize={13} fontWeight="bold" fill="var(--text)" textAnchor="middle">Model TCP/IP</text>
        {osi.map(([nama, warna], i) => (
          <g key={nama}>
            <rect x={30} y={26 + i * 40} width={150} height={34} rx={7} fill={warna} />
            <text x={105} y={48 + i * 40} fontSize={12.5} fontWeight="bold" fill="#fff" textAnchor="middle">{nama}</text>
          </g>
        ))}
        {tcp.map(([nama, warna, y, h]) => (
          <g key={nama}>
            <rect x={325} y={y} width={150} height={h} rx={7} fill={warna} opacity={0.92} />
            <text x={400} y={y + h / 2 + 5} fontSize={12.5} fontWeight="bold" fill="#fff" textAnchor="middle">{nama}</text>
          </g>
        ))}
        {[['26', '146'], ['186'], ['226'], ['266']].flat().filter((v, i, a) => a.indexOf(v) === i && v !== undefined).map((y) => (
          <line key={'ln' + y} x1={182} y1={Number(y) + 17} x2={323} y2={Number(y) + 17} stroke="var(--border, #cbd5e1)" strokeWidth={1.5} strokeDasharray="4 3" />
        ))}
      </svg>
    </div>
  );
}

function PeerCommunicationDiagram() {
  const layers = ['7', '6', '5', '4', '3', '2', '1'];
  return (
    <div style={{marginTop: 14}}>
      <svg viewBox="0 0 560 360" role="img" aria-label="Komunikasi peer-to-peer antara dua host pada layer yang sama" style={{width:'100%', height:'auto', maxWidth: 560}}>
        <defs>
          <marker id="arrowD" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="var(--text-light)" />
          </marker>
        </defs>
        <text x={90} y={18} fontSize={13} fontWeight="bold" fill="var(--text)" textAnchor="middle">Host A (Pengirim)</text>
        <text x={470} y={18} fontSize={13} fontWeight="bold" fill="var(--text)" textAnchor="middle">Host B (Penerima)</text>
        {layers.map((no, i) => (
          <g key={no}>
            <rect x={30} y={28 + i * 36} width={120} height={30} rx={6} fill={['#4f46e5','#6d28d9','#7c3aed','#db2777','#ea580c','#059669','#0284c7'][i]} />
            <text x={90} y={48 + i * 36} fontSize={11.5} fontWeight="bold" fill="#fff" textAnchor="middle">Layer {no}</text>
            <rect x={410} y={28 + i * 36} width={120} height={30} rx={6} fill={['#4f46e5','#6d28d9','#7c3aed','#db2777','#ea580c','#059669','#0284c7'][i]} />
            <text x={470} y={48 + i * 36} fontSize={11.5} fontWeight="bold" fill="#fff" textAnchor="middle">Layer {no}</text>
            <line x1={152} y1={43 + i * 36} x2={408} y2={43 + i * 36} stroke="var(--text-light)" strokeWidth={1} strokeDasharray="5 4" opacity={0.7} />
          </g>
        ))}
        <line x1={22} y1={70} x2={22} y2={262} stroke="var(--success, #10b981)" strokeWidth={2} markerEnd="url(#arrowD)" />
        <line x1={280} y1={290} x2={280} y2={290} stroke="none" />
        <line x1={24} y1={292} x2={536} y2={292} stroke="var(--success, #10b981)" strokeWidth={2} markerEnd="url(#arrowD)" />
        <line x1={538} y1={262} x2={538} y2={70} stroke="var(--success, #10b981)" strokeWidth={2} markerEnd="url(#arrowD)" />
        <text x={280} y={282} fontSize={12} fontWeight="bold" fill="var(--text)" textAnchor="middle">Media transmisi (kabel / gelombang radio)</text>
        <text x={14} y={168} fontSize={11} fill="var(--text)" textAnchor="middle" transform="rotate(-90 14 168)">Enkapsulasi turun</text>
        <text x={550} y={168} fontSize={11} fill="var(--text)" textAnchor="middle" transform="rotate(90 550 168)">De-enkapsulasi naik</text>
      </svg>
    </div>
  );
}

export default function OSILayer() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('osi-layer'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="osi-layer" sections={sections} />

      <MateriCard icon={BookOpen} title="A. Pengenalan Model OSI">
        <p><strong>OSI (Open Systems Interconnection)</strong> adalah model referensi konseptual yang membagi proses komunikasi jaringan menjadi <strong>7 layer (lapisan)</strong>. Setiap layer punya tugas spesifik dan "berbicara" dengan layer di atas dan di bawahnya. Model ini diterbitkan oleh <strong>ISO (International Organization for Standardization)</strong> pada tahun <strong>1984</strong>.</p>

        <h3 style={{marginTop: 20}}>Sejarah Singkat</h3>
        <p>Pada akhir tahun 1970-an, jaringan komputer tumbuh cepat tetapi setiap produsen memakai sistem yang berbeda-beda — perangkat IBM sulit berkomunikasi dengan perangkat DEC, dan seterusnya. ISO membentuk tim kerja pada tahun 1977 untuk membuat standar komunikasi terbuka (<em>open</em> = tidak dikunci pada satu vendor), dan hasilnya dipublikasikan tahun 1984 sebagai model OSI. Sejak itu, perangkat lintas merek dapat saling terhubung selama mengikuti standar yang sama.</p>

        <h3 style={{marginTop: 20}}>Tujuan Model OSI:</h3>
        <ul>
          <li><strong>Standarisasi (interoperabilitas)</strong> — perangkat lintas vendor (Cisco, MikroTik, TP-Link, dll.) dapat berkomunikasi.</li>
          <li><strong>Pembagian tugas yang jelas</strong> — fungsi jaringan kompleks dipecah menjadi bagian kecil yang mudah dikembangkan.</li>
          <li><strong>Mudah troubleshooting</strong> — masalah dapat dilokalisasi per layer secara sistematis.</li>
          <li><strong>Fleksibilitas teknologi</strong> — teknologi di satu layer boleh berganti tanpa mengubah layer lain. Contoh: ganti kabel UTP ke Wi-Fi, aplikasi browser tidak perlu diubah sama sekali.</li>
          <li><strong>Kerangka pembelajaran</strong> — cara berpikir bertahap untuk memahami cara kerja jaringan dari sinyal fisik sampai tampilan aplikasi.</li>
        </ul>

        <div className="info-box">
          <strong><Star size={14} /> Analogi Kantor Pos</strong>
          <p>Mengirim dokumen ke teman di kota lain: kamu menulis surat (data), memasukkan amplop lalu menulis alamat penerima (header), staf pos menimbang dan memberi stempel tarif (kontrol pengiriman), paket diangkut truck/pesawat (media transmisi), dan pihak penerima membuka amplop lapis demi lapis sampai suratnya terbaca. Proses ini mirip cara layer-layer OSI bekerja bersama.</p>
        </div>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Prinsip Penting: Abstraksi Berlapis</strong>
          <p>Tiap layer <strong>tidak perlu tahu detail cara kerja layer lain</strong> — cukup tahu layanan apa yang harus diberikan ke layer atasnya dan layanan apa yang ia terima dari layer bawahnya. Inilah yang disebut <em>abstraksi</em>: programmer aplikasi tak perlu paham detail sinyal listrik di kabel; teknisi kabel tak perlu paham kode program aplikasi.</p>
        </div>

        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Cara Mengingat Urutan Layer</strong>
          <p>Dari layer 7 ke 1 (arah pengiriman data): "<strong>A</strong>ll <strong>P</strong>eople <strong>S</strong>eem <strong>T</strong>o <strong>N</strong>eed <strong>D</strong>ata <strong>P</strong>rocessing" → <strong>A</strong>pplication, <strong>P</strong>resentation, <strong>S</strong>ession, <strong>T</strong>ransport, <strong>N</strong>etwork, <strong>D</strong>ata Link, <strong>P</strong>hysical.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Layers} title="B. Tujuh Layer Model OSI">
        <p>Perhatikan gambar berikut: tujuh layer tersusun dari yang paling dekat dengan pengguna (layer 7) sampai yang paling dekat dengan media transmisi (layer 1). Di sisi kanan tertera <strong>PDU</strong>, yaitu bentuk data pada layer tersebut.</p>

        <OSIStackDiagram />

        <div className="table-responsive" style={{marginTop: 16}}>
          <table className="materi-table">
            <thead><tr><th>No</th><th>Layer</th><th>Fungsi Utama</th><th>PDU</th><th>Perangkat/Protokol</th></tr></thead>
            <tbody>
              <tr><td>7</td><td><strong>Application</strong></td><td>Antarmuka jaringan bagi aplikasi pengguna</td><td>Data</td><td>HTTP/S, DNS, FTP, SMTP, DHCP</td></tr>
              <tr><td>6</td><td><strong>Presentation</strong></td><td>Format data, enkripsi, kompresi</td><td>Data</td><td>SSL/TLS, JPEG, ASCII, MPEG</td></tr>
              <tr><td>5</td><td><strong>Session</strong></td><td>Membuat, mengelola, mengakhiri sesi</td><td>Data</td><td>NetBIOS, RPC, PPTP</td></tr>
              <tr><td>4</td><td><strong>Transport</strong></td><td>Komunikasi end-to-end, segmentasi, reliabilitas</td><td>Segment</td><td>TCP, UDP</td></tr>
              <tr><td>3</td><td><strong>Network</strong></td><td>Pemilihan jalur (routing), alamat logis IP</td><td>Packet</td><td>Router, IP, ICMP</td></tr>
              <tr><td>2</td><td><strong>Data Link</strong></td><td>Alamat fisik MAC, framing, error detection</td><td>Frame</td><td>Switch, NIC, Ethernet, ARP</td></tr>
              <tr><td>1</td><td><strong>Physical</strong></td><td>Transmisi bit melalui media fisik/nirkabel</td><td>Bit</td><td>Kabel, hub, repeater, sinyal</td></tr>
            </tbody>
          </table>
        </div>

        <div className="info-box">
          <strong><Info size={14} /> Dua Kelompok Besar</strong>
          <p><strong>Layer atas (5-7):</strong> berkaitan dengan <em>aplikasi dan pengguna</em> — umumnya dikerjakan oleh software/operating system.<br/>
          <strong>Layer bawah (1-4):</strong> berkaitan dengan <em>pengiriman data</em> — melibatkan OS, driver, hingga perangkat keras jaringan.</p>
        </div>

        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Trik Hafalan PDU</strong>
          <p>Layer 7-5 PDU-nya sama-sama <strong>Data</strong>, lalu turunnya berurutan: <strong>S</strong>egment (L4) → <strong>P</strong>acket (L3) → <strong>F</strong>rame (L2) → <strong>B</strong>it (L1). Ingat: "<strong>S</strong>ome <strong>P</strong>eople <strong>F</strong>ear <strong>B</strong>irthdays".</p>
        </div>
      </MateriCard>

      <MateriCard icon={Cable} title="C. Layer Bawah (1-4)">
        <h4 style={{marginTop: 0}}>Layer 1 — Physical (Fisik)</h4>
        <p>Bertanggung jawab mengirimkan <strong>bit (0 dan 1)</strong> secara mentah melalui media transmisi: kabel tembaga (sinyal listrik), fiber optik (cahaya), atau udara (gelombang radio). Layer ini mendefinisikan semua spesifikasi fisik: jenis kabel dan konektor, level sinyal, kecepatan data, jarak maksimum, serta arah transmisi.</p>
        <ul>
          <li><strong>Arah transmisi:</strong> simplex (satu arah, seperti radio FM), half-duplex (bolak-balik bergantian, seperti walkie-talkie), full-duplex (dua arah bersamaan, seperti telepon).</li>
          <li><strong>Media guided:</strong> kabel UTP/STP, coaxial, fiber optik. <strong>Media unguided:</strong> radio Wi-Fi, microwave, satelit.</li>
          <li><strong>Perangkat:</strong> kabel + konektor RJ-45, hub, repeater, media converter.</li>
          <li><strong>Masalah tipikal:</strong> kabel putus atau terlalu tertarik, konektor rusak, lampu link padam, redaman sinyal (attenuation), interferensi elektromagnetik.</li>
        </ul>

        <h4 style={{marginTop: 20}}>Layer 2 — Data Link</h4>
        <p>Mengemas bit menjadi <strong>frame</strong> dan memberi identitas fisik perangkat melalui <strong>MAC address</strong> — angka heksadesimal 48-bit yang dibakar di kartu jaringan oleh pabrikan. Contoh format: A4:5E:60:B2:1C:3D (3 oktet pertama = kode vendor, sisanya nomor unik perangkat).</p>
        <ul>
          <li><strong>Framing:</strong> menandai awal dan akhir frame serta memisahkan header–data–trailer.</li>
          <li><strong>Dua sublayer:</strong> <em>LLC</em> (Logical Link Control) — jembatan ke layer atas; <em>MAC</em> — pengalamatan fisik dan aturan akses media (CSMA/CD pada Ethernet).</li>
          <li><strong>Error detection:</strong> trailer FCS berisi nilai CRC; jika hitungan penerima tidak cocok, frame dianggap rusak dan dibuang.</li>
          <li><strong>Cara switch bekerja:</strong> mencatat port asal setiap MAC yang lewat ke dalam <em>MAC address table</em>, lalu frame hanya diteruskan ke port tujuan — jauh lebih efisien daripada hub yang menyiarkan ke semua port.</li>
          <li><strong>Protokol penting — ARP:</strong> menerjemahkan IP address menjadi MAC address di jaringan lokal ("Siapa pemilik IP 192.168.1.10? Balas dengan MAC-mu!").</li>
          <li><strong>Masalah tipikal:</strong> collision, broadcast storm akibat loop kabel, VLAN mismatch antar switch.</li>
        </ul>

        <h4 style={{marginTop: 20}}>Layer 3 — Network</h4>
        <p>Mengemas data menjadi <strong>packet</strong>, memberi <strong>alamat IP logis</strong> (dapat dikonfigurasi, tidak permanen seperti MAC), dan menentukan <strong>jalur terbaik</strong> menuju jaringan tujuan — proses ini disebut <strong>routing</strong>.</p>
        <ul>
          <li><strong>Tabel routing:</strong> router memegang daftar "menuju jaringan X lewat jalur Y"; jalur terbaik dipilih berdasarkan metric (jarak, bandwidth, cost).</li>
          <li><strong>TTL (Time To Live):</strong> angka yang berkurang satu di setiap router; saat mencapai nol, paket dibuang — mencegah paket berputar selamanya jika ada loop.</li>
          <li><strong>Fragmentasi:</strong> jika packet melebihi MTU media tujuan, ia dipecah lalu dirakit ulang di penerima.</li>
          <li><strong>ICMP:</strong> protokol pesan kontrol — dasar perintah ping (uji keterjangkauan) dan tracert (melacak jalur/hop yang dilewati).</li>
          <li><strong>Perangkat:</strong> router dan layer-3 switch. <strong>Protokol:</strong> IPv4, IPv6, ICMP, protokol routing (OSPF, RIP, EIGRP, BGP).</li>
          <li><strong>Masalah tipikal:</strong> IP salah/konflik, default gateway salah, subnet mask tidak cocok, routing table keliru.</li>
        </ul>

        <h4 style={{marginTop: 20}}>Layer 4 — Transport</h4>
        <p>Komunikasi <strong>end-to-end</strong>: menghubungkan aplikasi di host sumber dengan aplikasi di host tujuan. Tugasnya segmentasi data, penomoran urutan, kontrol keandalan, dan pembedaan aplikasi lewat <strong>nomor port</strong>.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Port</th><th>Layanan</th><th>Transport</th></tr></thead>
            <tbody>
              <tr><td>20/21</td><td>FTP (transfer file)</td><td>TCP</td></tr>
              <tr><td>22</td><td>SSH (remote access aman)</td><td>TCP</td></tr>
              <tr><td>25</td><td>SMTP (kirim email)</td><td>TCP</td></tr>
              <tr><td>53</td><td>DNS (terjemahan domain)</td><td>UDP/TCP</td></tr>
              <tr><td>67/68</td><td>DHCP (IP otomatis)</td><td>UDP</td></tr>
              <tr><td>80 / 443</td><td>HTTP / HTTPS (web)</td><td>TCP</td></tr>
              <tr><td>110 / 143</td><td>POP3 / IMAP (terima email)</td><td>TCP</td></tr>
            </tbody>
          </table>
        </div>
        <ul style={{marginTop: 14}}>
          <li><strong>TCP (Transmission Control Protocol):</strong> andal dan <em>connection-oriented</em>. Sebelum bertukar data terjadi <strong>three-way handshake</strong>: SYN → SYN-ACK → ACK. Setiap segment diberi nomor urut, penerima membalas ACK; segment yang hilang dikirim ulang (<em>retransmisi</em>); laju kirim diatur dengan flow control (<em>windowing</em>) agar penerima tidak kewalahan. Dipakai: web, email, transfer file.</li>
          <li><strong>UDP (User Datagram Protocol):</strong> cepat, ringan, tanpa koneksi dan tanpa jaminan pengiriman — cocok untuk data real-time yang lebih baik kehilangan sedikit frame daripada menunggu. Dipakai: streaming video, VoIP, game online, DNS query.</li>
          <li><strong>Analogi:</strong> TCP seperti mengirim paket tercatat (ada konfirmasi tiap tahap), UDP seperti berteriak dari atas bukit — cepat, tapi tak ada jaminan semua pesan sampai.</li>
          <li><strong>Masalah tipikal:</strong> port diblokir firewall, timeout akibat packet loss tinggi.</li>
        </ul>
      </MateriCard>

      <MateriCard icon={ShieldCheck} title="D. Layer Atas (5-7)">
        <h4 style={{marginTop: 0}}>Layer 5 — Session</h4>
        <p>Bertugas <strong>membuat, mengelola, dan mengakhiri sesi</strong> (dialog) antara dua aplikasi. Menjaga agar pertukaran data tetap tersinkron dan sesi antar aplikasi tidak tercampur.</p>
        <ul>
          <li><strong>Pembatasan dialog:</strong> mengatur giliran siapa yang boleh mengirim (full-duplex, half-duplex).</li>
          <li><strong>Sinkronisasi:</strong> menyisipkan checkpoint pada transfer file besar; jika koneksi putus di tengah, transfer bisa lanjut dari checkpoint terakhir — bukan mulai dari nol.</li>
          <li><strong>Pemisahan sesi:</strong> saat kamu membuka tiga tab browser sekaligus, layer ini menjaga data tiap tab tetap terpisah.</li>
          <li><strong>Contoh protokol:</strong> NetBIOS, RPC, PPTP.</li>
        </ul>

        <h4 style={{marginTop: 20}}>Layer 6 — Presentation</h4>
        <p>"Penerjemah" jaringan: memastikan data dikirim dalam format yang <strong>saling dipahami kedua pihak</strong>. Tiga tugas utamanya:</p>
        <ul>
          <li><strong>Format/representasi data</strong> — konversi karakter (ASCII, UTF-8), gambar (JPEG, PNG, GIF), suara/video (MPEG, MP4). Data dari aplikasi diubah ke format baku untuk ditransmisikan.</li>
          <li><strong>Enkripsi/dekripsi</strong> — SSL/TLS mengacak data agar tidak terbaca penyadap; contoh nyata: gembok di browser saat membuka situs https://.</li>
          <li><strong>Kompresi</strong> — memperkecil ukuran data sehingga transfer lebih cepat dan hemat bandwidth.</li>
        </ul>

        <h4 style={{marginTop: 20}}>Layer 7 — Application</h4>
        <p>Layer paling dekat dengan pengguna: menyediakan <strong>antarmuka jaringan bagi aplikasi</strong>. Perlu dibedakan dengan tepat — yang bekerja di layer ini adalah <em>protokolnya</em>, bukan programnya. Chrome adalah aplikasi; protokol HTTP-lah yang berada di layer 7.</p>
        <ul>
          <li><strong>Web:</strong> HTTP (permintaan-respon halaman), HTTPS (HTTP + enkripsi TLS).</li>
          <li><strong>Nama domain:</strong> DNS — menerjemahkan google.com menjadi IP address 142.250.4.100, karena manusia hafal nama sedangkan komputer butuh angka.</li>
          <li><strong>Email:</strong> SMTP untuk mengirim; POP3/IMAP untuk menerima (IMAP menyinkronkan email di server, POP3 umumnya mengunduh lalu hapus).</li>
          <li><strong>Transfer file:</strong> FTP (tanpa enkripsi), SFTP/FTPS (terenkripsi).</li>
          <li><strong>Remote access:</strong> SSH (aman, menggantikan Telnet yang mengirim data polos).</li>
          <li><strong>Pengalamatan otomatis:</strong> DHCP memberi IP address secara dinamis lewat proses <em>DORA</em>: Discover → Offer → Request → Acknowledge.</li>
        </ul>

        <div className="info-box">
          <strong><Star size={14} /> Alur Membuka Website (Sudut Pandang Layer Atas)</strong>
          <p>Ketik www.sekolah.sch.id → <strong>DNS</strong> (L7) menerjemahkan domain ke IP → browser membuat permintaan <strong>HTTPS</strong> (L7) → <strong>TLS</strong> (L6) mengenkripsinya → <strong>sesi</strong> dibuat dan dikelola (L5). Baru setelah itu data turun ke layer transport untuk dikirim.</p>
        </div>
      </MateriCard>

      <MateriCard icon={ArrowDownUp} title="E. Enkapsulasi Data dan PDU">
        <p><strong>Enkapsulasi</strong> adalah proses membungkus data dengan <strong>header</strong> (dan trailer) tambahan di setiap layer saat data bergerak dari layer atas ke layer bawah di komputer pengirim. Setiap header berisi informasi kontrol yang nantinya dibaca oleh layer yang sama di penerima.</p>

        <EncapsulationDiagram />

        <div className="info-box" style={{marginTop: 16}}>
          <strong><Star size={14} /> Istilah Penting</strong>
          <p><strong>PDU (Protocol Data Unit)</strong> = sebutan bentuk data pada suatu layer. Namanya berubah sesuai layer: Data → Segment → Packet → Frame → Bit. <strong>Header</strong> = informasi kontrol yang ditempelkan di depan data; <strong>trailer</strong> = tambahan di belakang (dipakai layer 2 untuk FCS).</p>
        </div>

        <h3 style={{marginTop: 20}}>Proses Enkapsulasi (di Komputer Pengirim):</h3>
        <ol>
          <li><strong>L7-L5:</strong> pengguna mengetik pesan → aplikasi menghasilkan <strong>data</strong>.</li>
          <li><strong>L4 Transport:</strong> data dipecah menjadi <strong>segment</strong> + header TCP/UDP (port sumber & tujuan, nomor urut).</li>
          <li><strong>L3 Network:</strong> segment dibungkus menjadi <strong>packet</strong> + header IP (IP sumber & tujuan, TTL).</li>
          <li><strong>L2 Data Link:</strong> packet dibungkus menjadi <strong>frame</strong> + header MAC + trailer FCS untuk deteksi error.</li>
          <li><strong>L1 Physical:</strong> frame dikonversi menjadi <strong>bit</strong> — sinyal listrik, cahaya, atau radio — lalu ditransmisikan lewat media.</li>
        </ol>

        <h3 style={{marginTop: 20}}>Proses De-Enkapsulasi (di Komputer Penerima):</h3>
        <p>Kebalikan arah di atas: bit → frame → packet → segment → data. Setiap layer penerima <strong>membuka header-nya sendiri dan melakukan tindakan sesuai isinya</strong>: L1 mengubah sinyal jadi bit; L2 memeriksa MAC tujuan & FCS (buang jika rusak); L3 memeriksa alamat IP; L4 memeriksa port lalu menyusun ulang segment sesuai nomor urut; hingga aplikasi menerima data utuh.</p>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Analogi Amplop Berlapis</strong>
          <p>Data = suratmu. Segment = surat dimasukkan amplop dengan kode cabang penerima. Packet = amplop luar diberi alamat kota/provinsi. Frame = diberi alamat lengkap nama jalan + nomor rumah, plus segel integritas. Bit = paket diangkut motor/truk/pesawat. Penerima membuka amplop dari lapisan terluar sampai membaca surat aslinya.</p>
        </div>
      </MateriCard>

      <MateriCard icon={GitCompare} title="F. Model OSI vs TCP/IP">
        <p><strong>TCP/IP</strong> adalah model yang benar-benar dipakai internet saat ini. Terdiri dari <strong>4 layer</strong>: Application, Transport, Internet, dan Network Access. Model OSI tetap dipelajari karena menjadi <em>referensi teori</em> standar untuk troubleshooting dan pembelajaran.</p>

        <OsiTcpIpDiagram />

        <div className="table-responsive" style={{marginTop: 16}}>
          <table className="materi-table">
            <thead><tr><th>Aspek</th><th>Model OSI</th><th>Model TCP/IP</th></tr></thead>
            <tbody>
              <tr><td>Jumlah layer</td><td>7 layer</td><td>4 layer</td></tr>
              <tr><td>Dikembangkan oleh</td><td>ISO (publikasi 1984)</td><td>DoD/ARPANET (1970-an)</td></tr>
              <tr><td>Sifat model</td><td>Referensi teoritis/konseptual</td><td>Praktis — dipakai internet nyata</td></tr>
              <tr><td>Pendekatan</td><td>Model dibuat dulu, protokol menyusul</td><td>Protokol sudah ada, model mendeskripsikannya</td></tr>
              <tr><td>Kegunaan utama</td><td>Standar pembelajaran & troubleshooting</td><td>Implementasi komunikasi internet</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{marginTop: 20}}>Troubleshooting dengan OSI — Metode Bottom-Up</h3>
        <p>Kekuatan terbesar model OSI adalah menjadikan pencarian masalah <strong>sistematis</strong>. Cek dari layer terbawah naik ke atas:</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Layer</th><th>Yang Dicek</th><th>Perintah/Tindakan</th></tr></thead>
            <tbody>
              <tr><td>L1 Physical</td><td>Kabel, konektor, lampu link, sinyal Wi-Fi</td><td>Cek fisik, ganti kabel/port switch</td></tr>
              <tr><td>L2 Data Link</td><td>NIC aktif, MAC, VLAN</td><td>Cek driver NIC, cek konfigurasi VLAN</td></tr>
              <tr><td>L3 Network</td><td>IP address, subnet mask, gateway</td><td>ipconfig / ip a → ping gateway → ping 8.8.8.8</td></tr>
              <tr><td>L4 Transport</td><td>Port layanan, firewall</td><td>Telnet/tes port 80/443, cek aturan firewall</td></tr>
              <tr><td>L5-L7 Atas</td><td>DNS, aplikasi, sertifikat TLS</td><td>nslookup domain, buka via browser lain</td></tr>
            </tbody>
          </table>
        </div>

        <div className="info-box warning" style={{marginTop: 16}}>
          <strong><AlertTriangle size={14} /> Contoh Penerapan</strong>
          <p>"Tidak bisa browsing" itu gejala yang sama untuk banyak penyakit: kabel lepas (L1), IP salah (L3), DNS mati (L7), atau firewall memblokir port 443 (L4). Dengan bottom-up check, kamu tahu persis di layer mana masalahnya berhenti — misal ping 8.8.8.8 sukses tapi buka google.com gagal → pasti masalahnya di DNS, bukan di jaringan fisik.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Network} title="G. Komunikasi Antar Host">
        <p>Gambar berikut menunjukkan prinsip terpenting dalam model berlapis: data mengalir <strong>turun</strong> melalui stack host pengirim, melewati media transmisi, lalu <strong>naik</strong> di host penerima. Garis putus-putus horizontal menyatakan bahwa layer yang sama saling "berbicara" menggunakan protokol yang sama — konsep ini disebut <strong>peer-to-peer communication</strong>.</p>

        <PeerCommunicationDiagram />

        <h3 style={{marginTop: 20}}>Dua Konsep Kunci:</h3>
        <ul>
          <li><strong>Peer communication:</strong> header yang ditambahkan layer X pengirim hanya dibaca oleh layer X penerima. Header TCP dibaca TCP lawannya, header IP dibaca router (layer 3), dst. Mereka "berkomunikasi" secara logis meski tidak pernah bertemu langsung.</li>
          <li><strong>Adjacent-layer service:</strong> di dalam satu host, layer N memberikan layanan kepada layer N+1 dan meminta layanan dari layer N-1. Transport tidak bisa bekerja tanpa Network; Network bergantung pada Data Link.</li>
        </ul>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Simulasi Lengkap: Siswa Mengirim Email</strong>
          <ol style={{marginBottom: 0}}>
            <li>Siswa A menulis email lalu klik Send → aplikasi email membentuk data (L7), format & enkripsi disiapkan (L6), sesi dengan server email dibuka (L5).</li>
            <li>Data dipecah segment + port tujuan 25 SMTP (L4), dibungkus packet + IP server email (L3), dibungkus frame + MAC gateway (L2).</li>
            <li>Bit dikirim lewat kabel/Wi-Fi (L1) → melewati switch (baca MAC, L2) → melewati beberapa router (baca IP, L3).</li>
            <li>Di server email, proses terbalik: de-enkapsulasi layer demi layer hingga aplikasi email server membaca isi pesan.</li>
          </ol>
        </div>

        <div className="info-box">
          <strong><Star size={14} /> Perangkat dan Layer Kerjanya</strong>
          <p><strong>Hub/Repeater</strong> = L1 (sekadar menguatkan/menyebarkan sinyal). <strong>Switch/Bridge</strong> = L2 (baca MAC). <strong>Router</strong> = L3 (baca IP, routing). <strong>Firewall berbasis aplikasi/proxy</strong> = sampai L7 (baca konten). Semakin tinggi perangkat "berpikir", semakin cerdas keputusannya — tetapi juga semakin berat prosesnya.</p>
        </div>
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
