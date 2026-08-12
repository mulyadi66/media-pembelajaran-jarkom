import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Wifi, Plug, Settings, Info, AlertTriangle, Star, Cable, Network, ShieldCheck, Layers, Radio, Activity, Cpu } from 'lucide-react';
import VideoEmbed from '../components/VideoEmbed';
import SectionTracker from '../components/SectionTracker';
import { ContohSoal, Tugas } from '../components/ContohSoal';

const sections = [
  { id: 's1', label: '1.1 Kebutuhan Teknis Pengguna' },
  { id: 's2', label: '1.2 Peralatan Jaringan' },
  { id: 's3', label: '1.3 Standar Kabel dan Konektor' },
  { id: 's4', label: '1.4 Teknologi Jaringan' },
];

export default function Modul1() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('modul1'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="modul1" sections={sections} />

      {/* ============================================================ */}
      {/* 1.1 KEBUTUHAN TEKNIS PENGGUNA                                */}
      {/* ============================================================ */}
      <MateriCard icon={Info} title="1.1 Kebutuhan Teknis Pengguna">
        <p>Sebelum merancang jaringan, seorang teknisi harus memahami kebutuhan teknis pengguna. Kebutuhan ini menjadi dasar dalam menentukan peralatan dan teknologi yang akan digunakan. Analisis yang tepat membuat jaringan <strong>efisien, hemat biaya, dan siap berkembang</strong>.</p>

        <div className="info-box">
          <strong><Star size={14} /> Mengapa Penting?</strong>
          <p>Jaringan yang tidak sesuai kebutuhan akan mengakibatkan pemborosan biaya (over-specification) atau kinerja yang buruk (under-specification).</p>
        </div>

        <h3 style={{marginTop: 20}}>Faktor Kebutuhan Teknis:</h3>
        <ul>
          <li><strong>Volume Pengguna</strong> — Berapa banyak perangkat yang akan terhubung? Jumlah pengguna menentukan kapasitas switch, bandwidth, dan skala jaringan.</li>
          <li><strong>Tipe Penggunaan</strong> — Browsing ringan, streaming video, transfer file besar, VoIP, atau video conference? Setiap kebutuhan memiliki parameter bandwidth berbeda.</li>
          <li><strong>Kecepatan (Bandwidth)</strong> — Browsing ±1 Mbps, streaming HD ±5 Mbps, transfer file ±100 Mbps, VoIP ±0,1–0,5 Mbps per percakapan.</li>
          <li><strong>Keamanan</strong> — Firewall, VPN, enkripsi data, atau autentikasi pengguna.</li>
          <li><strong>Skalabilitas</strong> — Apakah jaringan perlu berkembang di masa depan? Sediakan slot port dan bandwidth cadangan.</li>
          <li><strong>Reliability</strong> — Jaringan untuk rumah sakit membutuhkan uptime lebih tinggi (redundansi) daripada warnet.</li>
          <li><strong>Budget</strong> — Anggaran menentukan merek dan tipe peralatan (SOHO vs Enterprise).</li>
        </ul>

        <h3 style={{marginTop: 20}}><Activity size={16} /> Langkah Analisis Kebutuhan Jaringan</h3>
        <ol>
          <li><strong>Identifikasi pengguna</strong> — jumlah, lokasi, dan jenis perangkat (PC, laptop, HP, printer).</li>
          <li><strong>Identifikasi aplikasi</strong> — aplikasi apa saja yang dipakai dan berapa bandwidth yang dibutuhkan per aplikasi.</li>
          <li><strong>Hitung kebutuhan bandwidth</strong> — kalikan jumlah pengguna dengan kebutuhan per pengguna, lalu tambahkan margin.</li>
          <li><strong>Tentukan jenis jaringan</strong> — LAN, WAN, atau kombinasi; kabel atau nirkabel (atau keduanya).</li>
          <li><strong>Pilih peralatan dan keamanan</strong> — switch, router, access point, server, dan firewall sesuai hasil analisis.</li>
        </ol>

        <div className="info-box success">
          <strong><Cpu size={14} /> Rumus Estimasi Bandwidth</strong>
          <p><strong>Total bandwidth = (jumlah pengguna × kebutuhan per pengguna) + margin peak load (±20%).</strong><br/>
          Contoh: 15 pengguna × 5 Mbps (streaming HD) = 75 Mbps + 20% margin = <strong>90 Mbps</strong>.</p>
        </div>

        <ContohSoal data={[
          { soal: 'Kantor kecil dengan 15 karyawan hanya browsing dan email. Perkirakan kebutuhan teknisnya (bandwidth, perangkat, dan keamanan)!',
            penyelesaian: 'Bandwidth: browsing & email ringan ±1–2 Mbps/pengguna → total ±30 Mbps sudah cukup. Perangkat: 1 switch 24-port + 1 router/modem + 1 access point untuk Wi-Fi. Keamanan: password Wi-Fi WPA2/WPA3 + firewall dasar. Anggaran: perangkat kelas SOHO sudah memadai.' },
          { soal: 'Perusahaan dengan 200 karyawan sering video conference (HD) dan transfer file besar. Rancang kebutuhan teknisnya!',
            penyelesaian: 'Bandwidth: video conference HD ±2–4 Mbps/sesi → 200 user minimal ±300 Mbps dengan cadangan peak load. Perangkat: switch 48-port × 4 + router enterprise + server lokal untuk file/backup + firewall. Keamanan: VLAN per departemen + kebijakan akses. Skalabilitas: sediakan port dan bandwidth cadangan.' },
          { soal: 'Toko online memiliki 10 PC dan ingin membuat jaringan. Hitung estimasi bandwidth jika setiap PC melakukan video conference HD (±3 Mbps) bersamaan, lalu tambahkan margin 20%!',
            penyelesaian: 'Kebutuhan dasar = 10 PC × 3 Mbps = 30 Mbps. Margin 20% = 6 Mbps. Total bandwidth yang disarankan = 30 + 6 = 36 Mbps. Dengan asumsi koneksi ISP, pilih paket ±40–50 Mbps agar tetap nyaman saat ada kebutuhan lain.' },
        ]} />
        <Tugas data={[
          'Sebuah lab komputer 40 PC akan dipakai untuk coding dan desain grafis. Tuliskan 5 faktor kebutuhan teknis yang perlu dianalisis beserta contoh nilainya.',
          'Hitung estimasi bandwidth minimal jika 15 PC melakukan streaming video HD (±5 Mbps) bersamaan, lalu tambahkan margin 20% untuk peak load.',
          'Mengapa pemilihan perangkat untuk 50 pengguna berbeda dengan 5 pengguna? Jelaskan dengan contoh perangkatnya.',
          'Lakukan analisis kebutuhan jaringan untuk ruang kelasmu: tuliskan jumlah perangkat, aplikasi yang dipakai, estimasi bandwidth, dan 3 peralatan yang paling dibutuhkan.',
        ]} />
      </MateriCard>

      {/* ============================================================ */}
      {/* 1.2 PERALATAN JARINGAN                                        */}
      {/* ============================================================ */}
      <MateriCard icon={Settings} title="1.2 Peralatan Jaringan">
        <h3>A. Perangkat Penghubung (Connecting Devices)</h3>
        <p>Perangkat yang menghubungkan antar komputer sehingga bisa saling bertukar data di dalam satu jaringan maupun antar jaringan.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Peralatan</th><th>Fungsi</th><th>OSI Layer</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>NIC</strong></td><td>Antarmuka jaringan, mengubah data menjadi sinyal</td><td>L1-2</td><td>Intel I219-V, Realtek RTL</td></tr>
              <tr><td><strong>Kabel UTP/STP</strong></td><td>Media transmisi twisted pair</td><td>L1</td><td>Cat5e, Cat6, Cat6a</td></tr>
              <tr><td><strong>Fiber Optik</strong></td><td>Media transmisi cahaya, kecepatan tinggi</td><td>L1</td><td>Single-mode, Multi-mode</td></tr>
              <tr><td><strong>Repeater</strong></td><td>Memperkuat sinyal agar jarak jangkau lebih jauh</td><td>L1</td><td>Wi-Fi extender, optical repeater</td></tr>
              <tr><td><strong>Hub</strong></td><td>Menghubungkan perangkat, broadcast ke semua port</td><td>L1</td><td>Sudah jarang digunakan</td></tr>
              <tr><td><strong>Bridge</strong></td><td>Menggabungkan 2 segmen LAN, filter berdasarkan MAC</td><td>L2</td><td>Bridge 2 segmen kampus</td></tr>
              <tr><td><strong>Switch</strong></td><td>Filtering berdasarkan MAC address, meneruskan ke port tujuan</td><td>L2</td><td>Cisco Catalyst, TP-Link JetStream</td></tr>
              <tr><td><strong>Router</strong></td><td>Menghubungkan jaringan berbeda, routing paket berdasarkan IP</td><td>L3</td><td>MikroTik, Cisco ISR</td></tr>
              <tr><td><strong>Access Point</strong></td><td>Akses nirkabel (Wi-Fi) untuk perangkat wireless</td><td>L1-2</td><td>Ubiquiti, TP-Link EAP</td></tr>
              <tr><td><strong>Modem</strong></td><td>Mengubah sinyal digital ↔ analog (atau cahaya)</td><td>L1</td><td>Modem ADSL/Fiber ONT</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{marginTop: 20}}>B. Perangkat Akhir (End Devices)</h3>
        <p>Perangkat yang dipakai langsung oleh pengguna untuk mengirim atau menerima data.</p>
        <ul>
          <li><strong>Workstation/PC</strong> — Komputer desktop untuk kantor (mis. HP EliteDesk, Dell OptiPlex)</li>
          <li><strong>Laptop</strong> — Komputer portabel dengan Wi-Fi built-in</li>
          <li><strong>Smartphone/Tablet</strong> — Perangkat mobile via Wi-Fi/seluler</li>
          <li><strong>Printer Network</strong> — Printer terhubung langsung ke jaringan (berbagi pakai printer)</li>
          <li><strong>IP Camera</strong> — Kamera CCTV berbasis IP, bisa diakses lewat jaringan</li>
          <li><strong>Server</strong> — Menyediakan layanan (file, web, database, mail) untuk semua klien</li>
        </ul>

        <h3 style={{marginTop: 20}}><Network size={16} /> C. Media Transmisi</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Jenis</th><th>Media</th><th>Kecepatan</th><th>Kelebihan</th><th>Kekurangan</th></tr></thead>
            <tbody>
              <tr><td rowSpan="2"><strong>Guided (berkabel)</strong></td><td>UTP/STP</td><td>s/d 10 Gbps</td><td>Murah, mudah dipasang</td><td>Rentan interferensi, jarak ±100m</td></tr>
              <tr><td>Fiber Optik</td><td>s/d 100+ Gbps</td><td>Bebas interferensi, jarak jauh</td><td>Mahal, butuh keahlian khusus</td></tr>
              <tr><td rowSpan="3"><strong>Unguided (nirkabel)</strong></td><td>Radio Wi-Fi</td><td>s/d 9,6 Gbps</td><td>Fleksibel, tanpa kabel</td><td>Interferensi, jangkauan terbatas</td></tr>
              <tr><td>Microwave</td><td>Ratusan Mbps</td><td>Point-to-point jarak jauh</td><td>Butuh line-of-sight</td></tr>
              <tr><td>Satelit</td><td>Tergantung ISP</td><td>Menjangkau area luas</td><td>Latensi tinggi, biaya mahal</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{marginTop: 20}}><ShieldCheck size={16} /> D. Perangkat Keamanan &amp; Layanan</h3>
        <ul>
          <li><strong>Firewall</strong> — Menyaring lalu lintas masuk/keluar berdasarkan aturan keamanan (Fortinet, pfSense).</li>
          <li><strong>Proxy Server</strong> — Perantara akses internet; menyimpan cache dan memfilter konten.</li>
          <li><strong>Load Balancer</strong> — Membagi beban trafik ke beberapa server agar tidak overload.</li>
          <li><strong>VPN Gateway</strong> — Membuat koneksi terenkripsi antar kantor cabang / remote worker.</li>
          <li><strong>UPS</strong> — Cadangan listrik agar perangkat jaringan tidak mati mendadak.</li>
        </ul>

        <ContohSoal data={[
          { soal: 'Tentukan perangkat yang tepat untuk kebutuhan berikut: (a) 20 PC di satu ruangan ingin saling terhubung; (b) menghubungkan LAN kantor ke internet; (c) memperluas jangkauan sinyal Wi-Fi di lantai 2; (d) melindungi jaringan dari serangan internet.',
            penyelesaian: '(a) Switch 24-port — menghubungkan banyak perangkat sekaligus. (b) Router — menghubungkan jaringan yang berbeda (LAN ↔ internet). (c) Access Point / Wi-Fi Repeater — memperluas area nirkabel. (d) Firewall — menyaring lalu lintas berdasarkan aturan keamanan.' },
          { soal: 'Di layer OSI manakah Hub, Switch, dan Router bekerja? Jelaskan konsekuensinya!',
            penyelesaian: 'Hub bekerja di Layer 1 (physical): meneruskan data ke semua port (broadcast) sehingga rawan tabrakan. Switch bekerja di Layer 2 (data link): meneruskan berdasarkan MAC address sehingga lebih efisien. Router bekerja di Layer 3 (network): merutekan paket antar jaringan berbeda berdasarkan IP address.' },
          { soal: 'Kantor mulai macet karena banyak PC akses internet lewat 1 jalur. Peralatan apa yang paling tepat ditambahkan?',
            penyelesaian: 'Jawaban: Load Balancer untuk membagi trafik ke beberapa jalur/server, atau mengganti switch/router dengan yang lebih besar kapasitasnya. Jika penyebabnya penggunaan bandwidth per pengguna, bisa ditambahkan bandwidth management / proxy dengan cache.' },
        ]} />
        <Tugas data={[
          'Jelaskan perbedaan cara kerja Hub dan Switch ketika sebuah frame tiba di salah satu port-nya!',
          'Sebuah kantor memiliki 30 PC + 2 server. Susun daftar peralatan jaringan yang dibutuhkan lengkap dengan fungsinya (minimal 6 perangkat)!',
          'Mengapa sebuah jaringan LAN tetap membutuhkan Router agar bisa terhubung ke internet, padahal Switch sudah menghubungkan semua PC?',
          'Bandingkan media transmisi UTP dan Fiber Optik dalam tabel: kecepatan, jarak maksimum, tingkat interferensi, biaya, dan kasus penggunaan yang paling tepat.',
        ]} />
      </MateriCard>

      {/* ============================================================ */}
      {/* 1.3 STANDAR KABEL DAN KONEKTOR                                */}
      {/* ============================================================ */}
      <MateriCard icon={Plug} title="1.3 Standar Kabel dan Konektor">
        <h3>Kategori Kabel UTP</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Kategori</th><th>Mendukung</th><th>Kecepatan</th><th>Fungsi Umum</th></tr></thead>
            <tbody>
              <tr><td><strong>Cat 3</strong></td><td>10BASE-T</td><td>10 Mbps</td><td>Telepon, jaringan lama</td></tr>
              <tr><td><strong>Cat 5</strong></td><td>100BASE-TX</td><td>100 Mbps</td><td>Fast Ethernet</td></tr>
              <tr><td><strong>Cat 5e</strong></td><td>1000BASE-T</td><td>1 Gbps</td><td>Gigabit, standar saat ini</td></tr>
              <tr><td><strong>Cat 6</strong></td><td>1000BASE-T</td><td>1 Gbps (10 Gbps s/d 55m)</td><td>Gigabit dengan margin lebih besar</td></tr>
              <tr><td><strong>Cat 6a</strong></td><td>10GBASE-T</td><td>10 Gbps s/d 100m</td><td>Data center, backbone</td></tr>
              <tr><td><strong>Cat 7</strong></td><td>10GBASE-T</td><td>10 Gbps</td><td>Kabel shielded untuk minim interferensi</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Catatan</strong>
          <p>Meskipun kategori lebih tinggi menawarkan kinerja lebih baik, kecepatan akhir ditentukan oleh <strong>perangkat terlemah</strong>. Kabel Cat6a tetap berjalan 1 Gbps bila switch-nya hanya 1 Gbps.</p>
        </div>

        <h3 style={{marginTop: 20}}>Standar Warna Kabel UTP (TIA/EIA-568)</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Pin</th><th>TIA/EIA-568A</th><th>TIA/EIA-568B (Umum)</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Hijau Putih</td><td>Oranye Putih</td></tr>
              <tr><td>2</td><td>Hijau</td><td>Oranye</td></tr>
              <tr><td>3</td><td>Oranye Putih</td><td>Hijau Putih</td></tr>
              <tr><td>4</td><td>Biru</td><td>Biru</td></tr>
              <tr><td>5</td><td>Biru Putih</td><td>Biru Putih</td></tr>
              <tr><td>6</td><td>Oranye</td><td>Hijau</td></tr>
              <tr><td>7</td><td>Coklat Putih</td><td>Coklat Putih</td></tr>
              <tr><td>8</td><td>Coklat</td><td>Coklat</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Perbedaan Kabel</strong>
          <p><strong>Straight-through:</strong> Kedua ujung sama (568B-568B). Untuk perangkat berbeda (PC ke Switch).<br/>
          <strong>Crossover:</strong> Ujung berbeda (568A-568B). Untuk perangkat sama (PC ke PC).<br/>
          <strong>Catatan:</strong> Switch dan perangkat modern mendukung <em>auto-MDIX</em> sehingga kabel crossover otomatis terdeteksi — tetapi tetap wajib memahami prinsipnya untuk troubleshooting.</p>
        </div>

        <h3 style={{marginTop: 20}}><Layers size={16} /> Pasangan Kabel yang Dipakai</h3>
        <p>Pada 100BASE-TX dan 1000BASE-T, hanya beberapa pasang yang aktif untuk data: pasangan <strong>1-2</strong> dan <strong>3-6</strong> (Fast Ethernet); semua 4 pasang (Gigabit). Pasangan 4-5 dan 7-8 sering dipakai untuk PoE (Power over Ethernet) pada beberapa implementasi.</p>

        <h3 style={{marginTop: 20}}>Jenis Konektor</h3>
        <ul>
          <li><strong>RJ-45</strong> — Konektor utama untuk kabel UTP/STP Ethernet (8 pin)</li>
          <li><strong>RJ-11</strong> — Konektor untuk kabel telepon (6 pin)</li>
          <li><strong>SC/ST/LC</strong> — Konektor untuk Fiber Optik (LC paling umum untuk switch)</li>
        </ul>

        <h3 style={{marginTop: 20}}><Cable size={16} /> Alat dan Bahan Crimping</h3>
        <ul>
          <li>Kabel UTP (sesuai kategori yang dibutuhkan)</li>
          <li>Konektor RJ-45 (secukupnya, cadangkan ekstra)</li>
          <li>Tang Crimping (pemotong, pengupas, dan penjepit dalam satu alat)</li>
          <li>Cable Tester / LAN Tester</li>
        </ul>

        <h3 style={{marginTop: 20}}>Langkah Crimping Kabel UTP (RJ-45)</h3>
        <ol>
          <li><strong>Kupas jaket</strong> kabel UTP sekitar 1,5–2 cm menggunakan cable stripper atau pisau pada tang crimping.</li>
          <li><strong>Susun kabel</strong> sesuai standar 568B di kedua ujung (straight) atau 568A di satu ujung (crossover).</li>
          <li><strong>Ratakan ujung kabel</strong> — sisakan sekitar 1,2–1,5 cm dari pangkal jaket.</li>
          <li><strong>Masukkan kabel</strong> ke konektor RJ-45, pastikan urutan benar, semua kabel mentok, dan jaket ikut masuk ke konektor.</li>
          <li><strong>Crimping</strong> dengan tang crimping hingga terdengar bunyi "klik".</li>
          <li><strong>Uji dengan LAN Tester</strong> — lampu harus menyala berurutan 1-1 sampai 8-8 (straight) atau 1-3, 2-6, 3-1, 6-2 (crossover).</li>
        </ol>
        <div className="info-box warning">
          <strong><AlertTriangle size={14} /> Troubleshooting Kabel</strong>
          <p><strong>Lampu tidak menyala:</strong> urutan warna salah atau kabel tidak mentok.<br/>
          <strong>Jaket tidak terjepit:</strong> kabel mudah putus saat ditarik.<br/>
          <strong>Koneksi tidak stabil:</strong> buka pilinan kabel terlalu panjang atau crimping kurang kuat.</p>
        </div>
        <VideoEmbed videoId="fPIM95D55h8" title="Praktik Membuat Kabel Crossover (Tutorial RJ-45)" />
        <ContohSoal data={[
          { soal: 'Tuliskan urutan warna pin 1–8 kabel UTP untuk standar T568B!',
            penyelesaian: '1 Oranye Putih, 2 Oranye, 3 Hijau Putih, 4 Biru, 5 Biru Putih, 6 Hijau, 7 Coklat Putih, 8 Coklat. Untuk T568A, posisi pasangan oranye dan hijau ditukar (1 Hijau Putih, 2 Hijau, 3 Oranye Putih, 6 Oranye).' },
          { soal: 'Tentukan jenis kabel (straight atau crossover) untuk menghubungkan: (a) PC ke Switch; (b) PC ke PC; (c) Switch ke Router.',
            penyelesaian: '(a) Straight — perangkat berbeda jenis (PC ↔ switch). (b) Crossover — perangkat sejenis (PC ↔ PC). (c) Straight — perangkat berbeda jenis (switch ↔ router), karena pada jaringan modern switch/router sudah mendukung auto-MDIX.' },
          { soal: 'Sebutkan 3 kesalahan umum saat crimping beserta dampaknya!',
            penyelesaian: '1) Urutan warna salah → koneksi gagal atau lampu tester tidak menyala urut. 2) Kabel tidak mentok di ujung konektor → kontak tidak sempurna, koneksi tidak stabil. 3) Jaket tidak ikut terjepit konektor → kabel mudah putus saat ditarik.' },
          { soal: 'Kantor akan memasang 60 titik jaringan dengan jarak maksimum kabel ke switch 40 meter. Tentukan kategori kabel UTP yang tepat dan beri alasan!',
            penyelesaian: 'Cat 5e atau Cat 6 — cukup mendukung Gigabit Ethernet (1 Gbps) untuk kebutuhan perkantoran, jarak 40m masih jauh di bawah batas 100m, dan harganya lebih hemat dibanding Cat 6a/7. Gunakan Cat 6 jika ingin margin kualitas sinyal lebih besar atau potensi upgrade ke 10 Gbps jarak pendek.' },
        ]} />
        <Tugas data={[
          'Bandingkan T568A dan T568B: pasangan warna mana saja yang bertukar posisi?',
          'Praktikkan crimping kabel straight-through, lalu uji dengan LAN tester. Tuliskan hasil pengamatan lampu yang menyala berurutan (1–1 sampai 8–8).',
          'Kabel Cat5e dan Cat6 sama-sama memakai konektor RJ-45. Apa perbedaan dari keduanya yang memengaruhi kinerja jaringan?',
          'Buat satu kabel crossover, lalu hubungkan langsung 2 PC dan uji transfer data. Tuliskan langkah, hasil, dan kesulitan yang kamu temui.',
        ]} />
      </MateriCard>

      {/* ============================================================ */}
      {/* 1.4 TEKNOLOGI JARINGAN                                         */}
      {/* ============================================================ */}
      <MateriCard icon={Wifi} title="1.4 Teknologi Jaringan">
        <h3>A. Ethernet (Kabel)</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Standar</th><th>Nama</th><th>Kecepatan</th><th>Kabel</th><th>Jarak</th></tr></thead>
            <tbody>
              <tr><td>10BASE-T</td><td>Ethernet</td><td>10 Mbps</td><td>Cat3+</td><td>100m</td></tr>
              <tr><td>100BASE-TX</td><td>Fast Ethernet</td><td>100 Mbps</td><td>Cat5</td><td>100m</td></tr>
              <tr><td>1000BASE-T</td><td>Gigabit Ethernet</td><td>1 Gbps</td><td>Cat5e/Cat6</td><td>100m</td></tr>
              <tr><td>10GBASE-T</td><td>10 Gigabit</td><td>10 Gbps</td><td>Cat6a/Cat7</td><td>100m</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{marginTop: 20}}>B. Wireless (Wi-Fi)</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Standar</th><th>Nama</th><th>Kecepatan</th><th>Frekuensi</th></tr></thead>
            <tbody>
              <tr><td>802.11b</td><td>Wi-Fi 1</td><td>11 Mbps</td><td>2.4 GHz</td></tr>
              <tr><td>802.11a</td><td>Wi-Fi 2</td><td>54 Mbps</td><td>5 GHz</td></tr>
              <tr><td>802.11g</td><td>Wi-Fi 3</td><td>54 Mbps</td><td>2.4 GHz</td></tr>
              <tr><td>802.11n</td><td>Wi-Fi 4</td><td>600 Mbps</td><td>2.4/5 GHz</td></tr>
              <tr><td>802.11ac</td><td>Wi-Fi 5</td><td>6.9 Gbps</td><td>5 GHz</td></tr>
              <tr><td>802.11ax</td><td>Wi-Fi 6/6E</td><td>9.6 Gbps</td><td>2.4/5/6 GHz</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{marginTop: 20}}><Cable size={16} /> C. Fiber Optik</h3>
        <p>Media transmisi berbasis cahaya yang memancarkan data lewat serat kaca. Dibedakan menjadi dua jenis:</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Jenis</th><th>Inti Serat</th><th>Sumber Cahaya</th><th>Jarak</th><th>Penggunaan</th></tr></thead>
            <tbody>
              <tr><td><strong>Single-mode</strong></td><td>±9 µm</td><td>Laser</td><td>Puluhan km</td><td>Backbone antar kota/WAN</td></tr>
              <tr><td><strong>Multi-mode</strong></td><td>50/62,5 µm</td><td>LED</td><td>±550 m – 2 km</td><td>LAN gedung, kampus</td></tr>
            </tbody>
          </table>
        </div>

        <h3 style={{marginTop: 20}}><Radio size={16} /> D. Teknologi Nirkabel Lainnya</h3>
        <ul>
          <li><strong>Bluetooth</strong> — Jarak pendek (±10m), untuk perangkat personal (mouse, headset, transfer file kecil).</li>
          <li><strong>LTE/5G</strong> — Jaringan seluler untuk akses internet mobile dan koneksi WAN cadangan.</li>
          <li><strong>Satelit</strong> — Jangkauan sangat luas, cocok untuk daerah terpencil; latensi lebih tinggi.</li>
        </ul>

        <div className="info-box success">
          <strong><Star size={14} /> Tips Memilih</strong>
          <p>Jaringan kantor = minimal Gigabit Ethernet. Mobilitas = Wi-Fi 5/6. Backbone/server = Fiber Optik.</p>
        </div>
        <ContohSoal data={[
          { soal: 'Pilih teknologi yang tepat untuk: (a) koneksi PC ke switch di kantor; (b) perangkat mobile karyawan; (c) koneksi antar gedung berjarak 500 meter!',
            penyelesaian: '(a) Gigabit Ethernet (Cat5e/Cat6) — kecepatan 1 Gbps stabil untuk workstation. (b) Wi-Fi 5/6 (802.11ac/ax) — fleksibel untuk perangkat mobile. (c) Fiber Optik — jarak jauh, kecepatan tinggi, dan kebal terhadap interferensi elektromagnetik.' },
          { soal: 'Sebutkan 3 keunggulan Fiber Optik dibandingkan kabel UTP!',
            penyelesaian: '1) Kecepatan jauh lebih tinggi (hingga puluhan Gbps). 2) Jarak tempuh lebih jauh tanpa degradasi sinyal yang signifikan. 3) Kebal terhadap interferensi elektromagnetik dan tidak memancarkan sinyal sehingga lebih aman dari penyadapan.' },
          { soal: 'Sekolah ingin meng-upgrade Wi-Fi dari 802.11n ke 802.11ax. Sebutkan minimal 2 perangkat yang perlu diganti agar upgrade berhasil!',
            penyelesaian: '1) Access Point lama (harus mendukung 802.11ax/Wi-Fi 6) dan 2) perangkat klien (laptop/HP) yang mendukung Wi-Fi 6 agar bisa menikmati kecepatan barunya. Jika klien masih 802.11n, kecepatan efektif akan turun ke kecepatan 802.11n.' },
        ]} />
        <Tugas data={[
          'Buat tabel perbandingan Fast Ethernet, Gigabit Ethernet, dan 10 Gigabit (kecepatan, jenis kabel, dan jarak maksimum)!',
          'Menurutmu, mengapa backbone server lebih tepat menggunakan Fiber Optik dibandingkan UTP? Jelaskan!',
          'Apa yang dimaksud dengan Wi-Fi 6 (802.11ax)? Sebutkan 2 keunggulannya dibandingkan Wi-Fi 5 (802.11ac)!',
          'Bandingkan Single-mode dan Multi-mode Fiber Optik, lalu tentukan mana yang cocok untuk koneksi antar gedung sekolah (±400m) dan beri alasan.',
        ]} />
      </MateriCard>

      {/* ============================================================ */}
      {/* RANGKUMAN                                                     */}
      {/* ============================================================ */}
      <MateriCard icon={Layers} title="Rangkuman Modul 1">
        <ul>
          <li>Analisis kebutuhan teknis (jumlah pengguna, aplikasi, bandwidth, keamanan, skalabilitas) menjadi dasar pemilihan peralatan.</li>
          <li>Perangkat penghubung bekerja di layer berbeda: Hub (L1), Switch (L2), Router (L3).</li>
          <li>Media transmisi dibedakan menjadi guided (UTP, fiber) dan unguided (Wi-Fi, microwave, satelit).</li>
          <li>Kabel straight-through untuk perangkat berbeda, crossover untuk perangkat sejenis.</li>
          <li>Pemilihan teknologi mengikuti kebutuhan: Gigabit Ethernet untuk kantor, Wi-Fi 5/6 untuk mobilitas, Fiber Optik untuk backbone.</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Wifi} title="Video Pembelajaran">
        <VideoEmbed videoId="LiMdHeaS4zY" title="Network Fundamentals - Peralatan Jaringan (Router, Switch, Hub)" />
      </MateriCard>
    </div>
  );
}

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}
