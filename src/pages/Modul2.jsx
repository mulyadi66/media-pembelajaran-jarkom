import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Projector, Star, Minus, Circle, GitBranch, Network, Info, Calculator } from 'lucide-react';
import VideoEmbed from '../components/VideoEmbed';
import SectionTracker from '../components/SectionTracker';
import { ContohSoal, Tugas } from '../components/ContohSoal';

const sections = [
  { id: 's1', label: '2.1 Pengertian Topologi' },
  { id: 's2', label: '2.2 - 2.7 Jenis Topologi' },
  { id: 's3', label: '2.8 Perbandingan' },
  { id: 's4', label: '2.9 Simulasi Interaktif' },
];

const topologies = [
  { id: 'star', label: 'Star', icon: Star, desc: 'Semua node terhubung langsung ke perangkat pusat (switch/hub). Setiap node memiliki jalur kabel sendiri menuju pusat sehingga kegagalan satu kabel tidak memengaruhi node lain.',
    tugas: 'Gambarkan topologi star dengan 6 PC di bukumu, lalu hitung panjang kabel yang dibutuhkan jika tiap PC berjarak 3 meter dari switch!' },
  { id: 'bus', label: 'Bus', icon: Minus, desc: 'Semua node terhubung pada satu kabel utama (backbone) dengan terminator di kedua ujung. Data menyebar sepanjang kabel dan hanya node dengan alamat yang sesuai yang menerimanya.',
    tugas: 'Gambarkan topologi bus dengan 5 PC dan 2 terminator, lalu jelaskan apa yang terjadi jika terminator di salah satu ujung dilepas!' },
  { id: 'ring', label: 'Ring', icon: Circle, desc: 'Setiap node terhubung ke dua node lain membentuk lingkaran tertutup. Data bergerak searah jarum jam dari node ke node hingga sampai tujuan (menggunakan token passing).',
    tugas: 'Pada topologi ring, mengapa token passing membuat data tidak pernah bertabrakan? Jelaskan dengan bahasamu sendiri!' },
  { id: 'mesh', label: 'Mesh', icon: Network, desc: 'Setiap node terhubung langsung ke semua node lain (full mesh) atau hanya ke node yang dianggap penting (partial mesh). Menyediakan banyak jalur cadangan.',
    tugas: 'Hitung jumlah kabel full mesh untuk 6 node dengan rumus n(n−1)/2, lalu bandingkan dengan kebutuhan kabel topologi star untuk 6 node!' },
  { id: 'tree', label: 'Tree', icon: GitBranch, desc: 'Hierarki topologi star berlapis: satu node root di puncak bercabang ke beberapa switch, lalu tiap switch menghubungkan node-node di bawahnya.',
    tugas: 'Buat sketsa topologi tree untuk gedung 2 lantai (tiap lantai 1 switch + 4 PC) dan tandai titik single point of failure-nya!' },
  { id: 'hybrid', label: 'Hybrid', icon: GitBranch, desc: 'Gabungan dua atau lebih topologi berbeda dalam satu jaringan, misalnya star-to-star, star-to-bus, atau ring-to-mesh. Umum dipakai di perusahaan besar.',
    tugas: 'Desain topologi hybrid untuk sekolah: 2 gedung (masing-masing star) yang dihubungkan dengan backbone bus antar gedung. Gambarkan dan beri label!' },
];

function drawTopology(svgEl, type) {
  if (!svgEl) return;
  const w = 600, h = 400, cx = w / 2, cy = h / 2;
  let content = '';
  const nodes = [], connections = [];

  const addNode = (x, y, icon, label, bg, border, iconC) =>
    nodes.push({ x, y, icon, label, bg: bg || '#fff', border: border || '#6366f1', iconC: iconC || '#4f46e5' });
  const addLine = (x1, y1, x2, y2, color, dashed) =>
    connections.push({ x1, y1, x2, y2, color: color || '#6366f1', dashed });

  if (type === 'star') {
    addNode(cx, cy, '⚙', 'Switch/Hub', '#eef2ff', '#6366f1', '#4f46e5');
    const pos = [
      [cx-140,cy-100],[cx+140,cy-100],[cx-140,cy+100],[cx+140,cy+100],[cx,cy-140]
    ];
    pos.forEach(([x,y], i) => {
      addNode(x, y, '▣', `PC ${i+1}`, '#fff', '#06b6d4', '#0891b2');
      addLine(cx, cy, x, y, '#06b6d4');
    });
  } else if (type === 'bus') {
    const busY = cy, sx = 80, ex = w - 80;
    addLine(sx, busY, ex, busY, '#f59e0b');
    addNode(sx, busY, '●', 'Terminator', '#fef3c7', '#f59e0b', '#d97706');
    addNode(ex, busY, '●', 'Terminator', '#fef3c7', '#f59e0b', '#d97706');
    [0.2, 0.35, 0.5, 0.65, 0.8].forEach((f, i) => {
      const px = sx + (ex - sx) * f;
      addNode(px, busY - 80, '▣', `PC ${i+1}`, '#fff', '#06b6d4', '#0891b2');
      addLine(px, busY, px, busY - 80 + 22, '#06b6d4', true);
    });
  } else if (type === 'ring') {
    const r = Math.min(w, h) / 2 - 60;
    const pos = [];
    for (let i = 0; i < 6; i++) {
      const a = (2 * Math.PI * i) / 6 - Math.PI / 2;
      pos.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
    pos.forEach(([x, y], i) => {
      addNode(x, y, '▣', `PC ${i+1}`, '#fff', '#10b981', '#059669');
      const [nx, ny] = pos[(i + 1) % 6];
      addLine(x, y, nx, ny, '#10b981');
    });
  } else if (type === 'mesh') {
    const pos = [[cx,70],[w-80,cy-40],[w-120,h-80],[120,h-80],[80,cy-40]];
    pos.forEach(([x,y], i) => addNode(x, y, '▣', `Node ${i+1}`, '#fff', '#8b5cf6', '#7c3aed'));
    for (let i = 0; i < pos.length; i++)
      for (let j = i + 1; j < pos.length; j++)
        addLine(pos[i][0], pos[i][1], pos[j][0], pos[j][1], '#8b5cf6');
  } else if (type === 'tree') {
    addNode(cx, 60, '⚙', 'Server Utama', '#fef3c7', '#f59e0b', '#d97706');
    const sw = [[cx-150,cy-20],[cx+150,cy-20]];
    sw.forEach(([x,y], i) => {
      addNode(x, y, '⚙', `Switch ${i+1}`, '#eef2ff', '#6366f1', '#4f46e5');
      addLine(cx, 82, x, y-22, '#f59e0b');
    });
    sw.forEach(([sx,sy], si) => {
      for (let i = 0; i < 3; i++) {
        const px = sx - 60 + i * 60, py = cy + 100;
        addNode(px, py, '▣', `PC${si*3+i+1}`, '#fff', '#06b6d4', '#0891b2');
        addLine(sx, sy+22, px, py-22, '#06b6d4', true);
      }
    });
  } else if (type === 'hybrid') {
    addNode(cx, 60, '⚙', 'Server', '#fef3c7', '#f59e0b', '#d97706');
    addNode(cx, cy-40, '⚡', 'Router', '#eef2ff', '#6366f1', '#4f46e5');
    addLine(cx, 82, cx, cy-62, '#f59e0b');
    addNode(cx-180, cy+60, '⚙', 'Switch A', '#eef2ff', '#6366f1', '#4f46e5');
    addLine(cx, cy-18, cx-180, cy+38, '#8b5cf6');
    [[cx-260,h-80],[cx-180,h-80],[cx-100,h-80]].forEach(([x,y], i) => {
      addNode(x, y, '▣', `PC ${i+1}`, '#fff', '#06b6d4', '#0891b2');
      addLine(cx-180, cy+82, x, y-22, '#06b6d4', true);
    });
    addNode(cx+180, cy+20, '━', 'Bus Backbone', '#fef3c7', '#f59e0b', '#d97706');
    addLine(cx, cy-18, cx+180, cy-2, '#f59768');
    [[cx+100,h-60],[cx+180,h-60],[cx+260,h-60]].forEach(([x,y], i) => {
      addNode(x, y, '▣', `PC ${i+4}`, '#fff', '#06b6d4', '#0891b2');
      addLine(cx+180, cy+42, x, y-22, '#f59e0b', true);
    });
  }

  connections.forEach(c => {
    content += `<line x1="${c.x1}" y1="${c.y1}" x2="${c.x2}" y2="${c.y2}" stroke="${c.color}" stroke-width="2" stroke-dasharray="${c.dashed ? '6,4' : 'none'}" opacity="0.6"/>`;
  });
  nodes.forEach(n => {
    content += `<g transform="translate(${n.x-22},${n.y-22})"><rect width="44" height="44" rx="10" fill="${n.bg}" stroke="${n.border}" stroke-width="2"/><text x="22" y="28" text-anchor="middle" font-size="18" fill="${n.iconC}">${n.icon}</text></g><text x="${n.x}" y="${n.y+36}" text-anchor="middle" font-size="11" fill="#64748b" fontFamily="Inter,sans-serif" fontWeight="600">${n.label}</text>`;
  });
  content += `<text x="${cx}" y="28" text-anchor="middle" font-size="14" fill="#1e293b" fontFamily="Inter,sans-serif" fontWeight="700">${type.charAt(0).toUpperCase() + type.slice(1)} Topology</text>`;
  svgEl.innerHTML = content;
}

export default function Modul2() {
  const { markModuleRead } = useApp();
  const [activeTopo, setActiveTopo] = useState('star');

  useEffect(() => { markModuleRead('modul2'); }, [markModuleRead]);

  useEffect(() => {
    const svg = document.getElementById('topoSvg');
    drawTopology(svg, activeTopo);
  }, [activeTopo]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="modul2" sections={sections} />

      <MateriCard icon={Info} title="2.1 Pengertian Topologi Jaringan">
        <p>Topologi jaringan adalah cara atau metode pengaturan dan penghubungan antara satu komputer dengan komputer lainnya dalam sebuah jaringan.</p>
        <div className="info-box">
          <strong>Dua Jenis Topologi</strong>
          <p><strong>Fisik:</strong> Layout kabel dan perangkat secara fisik.<br/><strong>Logika:</strong> Cara data mengalir dalam jaringan.</p>
        </div>
        <h3 style={{marginTop: 20}}>Istilah Penting dalam Topologi</h3>
        <ul>
          <li><strong>Node / Host</strong> — perangkat yang terhubung (PC, printer, server) dan bisa mengirim/menerima data.</li>
          <li><strong>Link</strong> — jalur/media penghubung antara dua node (kabel UTP, fiber, atau sinyal Wi-Fi).</li>
          <li><strong>Backbone</strong> — jalur utama berkapasitas besar yang menampung lalu lintas antar segment.</li>
          <li><strong>Segment</strong> — bagian jaringan yang terpisah, biasanya dihubungkan oleh perangkat seperti bridge/router.</li>
          <li><strong>Single Point of Failure (SPOF)</strong> — satu titik yang jika rusak akan memutus seluruh jaringan.</li>
        </ul>
        <div className="info-box warning">
          <strong>Faktor Pemilihan Topologi</strong>
          <p>Biaya kabel &amp; perangkat, kemudahan instalasi, kemudahan perawatan (troubleshooting), keandalan, dan rencana pengembangan (skalabilitas) menjadi pertimbangan utama.</p>
        </div>
        <ContohSoal data={[
          { soal: 'Jelaskan perbedaan topologi fisik dan topologi logis, lengkap dengan satu contoh!',
            penyelesaian: 'Topologi fisik menggambarkan susunan kabel dan perangkat yang sebenarnya, sedangkan topologi logis menggambarkan jalur aliran data. Contoh: jaringan yang memakai Hub tersusun fisik seperti bintang (semua kabel menuju hub), tetapi secara logis berperilaku seperti bus karena hub menyiarkan data ke semua port.' },
          { soal: 'Mengapa jaringan yang menggunakan Hub dianggap boros bandwidth?',
            penyelesaian: 'Karena Hub meneruskan setiap data ke SEMUA port (broadcast). Semakin banyak perangkat, semakin besar lalu lintas data yang tidak perlu sehingga tabrakan (collision) makin sering terjadi dan bandwidth terbuang.' },
          { soal: 'Di topologi bus, jika kabel utama terputus di tengah, apa dampaknya pada semua node? Konsep apa yang berkaitan dengan hal ini?',
            penyelesaian: 'Semua node kehilangan komunikasi karena hanya ada satu jalur. Ini disebut single point of failure (SPOF): satu kabel backbone menjadi titik tunggal yang jika rusak mematikan seluruh jaringan.' },
        ]} />
        <Tugas data={[
          'Tuliskan pengertian topologi jaringan dengan bahasamu sendiri (1–2 kalimat)!',
          'Berikan contoh jaringan yang topologi fisiknya berbeda dengan topologi logisnya, lalu jelaskan keduanya!',
          'Buat tabel istilah: node, link, backbone, segment, dan SPOF lengkap dengan contoh masing-masing!',
        ]} />
      </MateriCard>

      {[
        { title: '2.2 Topologi Bus', pros: 'Murah, hemat kabel, cocok untuk jaringan kecil', cons: 'Satu kabel putus = seluruh jaringan mati, sulit debugging', use: 'Jaringan kecil sementara', proto: 'CSMA/CD', protoDesc: 'CSMA/CD (Carrier Sense Multiple Access with Collision Detection): setiap node mendengarkan jalur terlebih dahulu sebelum mengirim. Jika dua node mengirim bersamaan, terjadi tabrakan (collision), lalu kedua node berhenti dan mengirim ulang setelah jeda acak. Inilah mengapa semakin banyak node, kinerja bus semakin menurun.' },
        { title: '2.3 Topologi Star', pros: 'Mudah dikelola, satu kabel rusak hanya 1 node, mudah ditambah', cons: 'Switch rusak = semua node terganggu, butuh lebih banyak kabel', use: 'LAN kantor, sekolah, warnet' },
        { title: '2.4 Topologi Ring', pros: 'Tidak ada tabrakan data (token passing), performa stabil', cons: 'Satu node rusak bisa memutus jaringan, sulit diubah', use: 'Token Ring, FDDI', proto: 'Token Passing', protoDesc: 'Token passing menggunakan token (paket data khusus) yang beredar dari node ke node searah lingkaran. Hanya node yang memegang token yang berhak mengirim data, sehingga tidak pernah ada dua node mengirim bersamaan dan tabrakan data tidak mungkin terjadi.' },
        { title: '2.5 Topologi Mesh', pros: 'Sangat handal, redundant path, keamanan tinggi', cons: 'Sangat mahal, banyak kabel, kompleks', use: 'Backbone internet, WAN, jaringan kritis' },
        { title: '2.6 Topologi Tree', pros: 'Mudah berkembang, terstruktur, cocok untuk jaringan besar', cons: 'Root node rusak = seluruh jaringan mati', use: 'Gedung bertingkat, universitas' },
        { title: '2.7 Topologi Hybrid', pros: 'Fleksibel, scalable, menggabungkan kelebihan beberapa topologi', cons: 'Desain kompleks, biaya tinggi', use: 'Internet, WAN, perusahaan besar' },
      ].map((t, i) => (
        <MateriCard key={i} icon={Projector} title={t.title}>
          <p>{t.desc}</p>
          <div className="table-responsive">
            <table className="materi-table">
              <thead><tr><th>Aspek</th><th>Penjelasan</th></tr></thead>
              <tbody>
                <tr><td><strong>Kelebihan</strong></td><td>{t.pros}</td></tr>
                <tr><td><strong>Kekurangan</strong></td><td>{t.cons}</td></tr>
                <tr><td><strong>Cocok untuk</strong></td><td>{t.use}</td></tr>
                {t.proto && <tr><td><strong>Protokol</strong></td><td>{t.proto}</td></tr>}
              </tbody>
            </table>
          </div>
          {t.protoDesc && (
            <div className="info-box" style={{marginTop: 12}}>
              <strong>Cara Kerja: {t.proto}</strong>
              <p>{t.protoDesc}</p>
            </div>
          )}
          <Tugas data={[t.tugas]} />
        </MateriCard>
      ))}

      <ContohSoal data={[
        { soal: 'Jaringan bus 10 PC, kabel utama (backbone) putus di tengah. Apa dampaknya dan mengapa?',
          penyelesaian: 'Seluruh jaringan mati. Semua PC berbagi satu jalur utama; saat kabel putus, tidak ada jalur alternatif sehingga dua segmen kehilangan terminasi yang benar dan komunikasi antar PC gagal total.' },
        { soal: 'Hitung jumlah kabel yang dibutuhkan untuk topologi full mesh dengan 5 node!',
          penyelesaian: 'Rumus full mesh: n(n−1)/2 = 5×4/2 = 10 kabel. Inilah mengapa mesh sangat mahal untuk jaringan besar — setiap node terhubung langsung ke semua node lain.' },
        { soal: 'Pada topologi star, kabel dari satu PC ke switch putus. Bagaimana dampaknya terhadap PC lain?',
          penyelesaian: 'Tidak ada dampak. Hanya PC yang kabelnya putus yang kehilangan koneksi; node lain tetap normal karena masing-masing memiliki jalur terpisah ke switch. Inilah keunggulan utama topologi star.' },
        { soal: 'Sekolah memilih topologi tree untuk LAN-nya. Mengapa kerusakan switch lantai 1 tidak membuat seluruh jaringan mati, tetapi kerusakan switch utama (root) justru mematikannya?',
          penyelesaian: 'Karena pada tree, switch lantai (switch level bawah) hanya melayani node di segmennya sendiri — kegagalannya hanya memengaruhi lantai tersebut. Sebaliknya switch utama (root) menjadi single point of failure: semua segmen mengandalkannya sebagai jalur tunggal ke server/root, sehingga jika rusak seluruh jaringan terganggu.' },
      ]} />
      <Tugas data={[
        'Hitung jumlah kabel full mesh untuk jaringan 4 node dan 6 node, lalu bandingkan dengan kebutuhan kabel topologi bus!',
        'Buat tabel kelebihan dan kekurangan topologi Star dibandingkan topologi Ring!',
        'Pada topologi ring, apa yang terjadi jika satu node mati? Bagaimana teknologi seperti FDDI (dual ring) mengatasinya?',
        'Dari semua topologi yang dipelajari, manakah yang paling tahan terhadap kegagalan satu link? Jelaskan kelemahannya!',
      ]} />

      <MateriCard icon={Info} title="Topologi Fisik vs Logis">
        <p>Jangan tertukar: topologi <strong>fisik</strong> menggambarkan susunan kabel dan perangkat yang sebenarnya, sedangkan topologi <strong>logis</strong> adalah cara data benar-benar mengalir di dalam jaringan.</p>
        <div className="info-box">
          <strong>Contoh Jebakan Ujian</strong>
          <p><strong>Hub:</strong> secara fisik berbentuk <em>star</em> (semua kabel ke hub), tetapi secara logis bertingkah seperti <em>bus</em> karena menyiarkan data ke semua port.<br/>
          <strong>Token Ring:</strong> kabelnya menuju satu perangkat pusat (MAU) sehingga fisiknya <em>star</em>, tetapi data berputar dari titik ke titik sehingga logisnya <em>ring</em>.</p>
        </div>
        <Tugas data={[
          'Berikan contoh jaringan lain (selain hub dan token ring) di mana topologi fisik dan logisnya berbeda, lalu jelaskan keduanya!',
        ]} />
      </MateriCard>

      <MateriCard icon={Info} title="Kapan Memilih Topologi Apa?">
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Kebutuhan</th><th>Topologi</th><th>Alasan</th></tr></thead>
            <tbody>
              <tr><td>Kantor / sekolah kecil</td><td><strong>Star</strong></td><td>Mudah dikelola, satu kabel putus tidak mematikan jaringan</td></tr>
              <tr><td>Biaya sangat terbatas</td><td><strong>Bus</strong></td><td>Paling hemat kabel untuk jaringan kecil sementara</td></tr>
              <tr><td>Keandalan tinggi (WAN / jaringan kritis)</td><td><strong>Mesh</strong></td><td>Banyak jalur cadangan, tetap hidup saat satu link putus</td></tr>
              <tr><td>Gedung bertingkat / kampus</td><td><strong>Tree</strong></td><td>Hirarki jelas dan mudah dikembangkan</td></tr>
              <tr><td>Jaringan besar dengan kebutuhan beragam</td><td><strong>Hybrid</strong></td><td>Gabungan kelebihan beberapa topologi</td></tr>
            </tbody>
          </table>
        </div>
        <Tugas data={[
          'Perpustakaan sekolah dengan 25 PC di satu ruangan akan membangun LAN dengan dana sangat terbatas. Topologi mana yang kamu pilih? Berikan alasan berdasarkan tabel di atas!',
        ]} />
      </MateriCard>

      <MateriCard icon={Info} title="2.8 Perbandingan Semua Topologi">
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Topologi</th><th>Biaya</th><th>Keandalan</th><th>Instalasi</th><th>Skalabilitas</th></tr></thead>
            <tbody>
              <tr><td><strong>Bus</strong></td><td>Rendah</td><td>Rendah</td><td>Mudah</td><td>Sulit</td></tr>
              <tr><td><strong>Star</strong></td><td>Sedang</td><td>Sedang</td><td>Mudah</td><td>Mudah</td></tr>
              <tr><td><strong>Ring</strong></td><td>Sedang</td><td>Sedang</td><td>Sedang</td><td>Sedang</td></tr>
              <tr><td><strong>Mesh</strong></td><td>Tinggi</td><td>Sangat Tinggi</td><td>Sulit</td><td>Sedang</td></tr>
              <tr><td><strong>Tree</strong></td><td>Sedang</td><td>Sedang</td><td>Sedang</td><td>Mudah</td></tr>
              <tr><td><strong>Hybrid</strong></td><td>Bervariasi</td><td>Tinggi</td><td>Sedang</td><td>Mudah</td></tr>
            </tbody>
          </table>
        </div>
        <ContohSoal data={[
          { soal: 'Sebuah sekolah membangun LAN 60 PC di 3 ruangan. Dana terbatas, jaringan harus mudah dikelola, dan jumlah PC akan bertambah tiap tahun. Topologi apa yang paling tepat? Berikan alasannya!',
            penyelesaian: 'Topologi Tree (star bertingkat): satu switch utama di pusat + satu switch per ruangan. Alasannya: biaya menengah, mudah dikelola per ruangan, skalabilitas tinggi (tambah switch = tambah port), dan kegagalan satu switch ruangan tidak mematikan seluruh jaringan.' },
          { soal: 'Kapan Anda memilih topologi mesh walaupun biayanya tinggi?',
            penyelesaian: 'Ketika keandalan adalah prioritas utama dan downtime sangat mahal, misalnya jaringan kritis seperti router backbone ISP, server keuangan, data center, atau jaringan rumah sakit. Banyak jalur redundan membuat jaringan tetap hidup saat satu link putus.' },
        ]} />
        <Tugas data={[
          'Berdasarkan tabel perbandingan, urutkan topologi dari yang paling murah sampai paling mahal dari sisi kabel dan perangkat!',
          'Studi kasus: kantor pusat + 3 cabang tersebar di kota berbeda, setiap cabang punya LAN 20 PC. Rancang topologi backbone antar cabang dan topologi di dalam cabang, sertakan alasannya!',
          'Jelaskan konsep "single point of failure" dan di mana titik tersebut berada pada topologi bus, star, dan tree!',
        ]} />
      </MateriCard>

      <MateriCard icon={Calculator} title="2.9 Simulasi Topologi Interaktif">
        <p>Pilih jenis topologi untuk melihat visualisasinya:</p>
        <div className="simulator-container" style={{marginTop: 16}}>
          <div className="simulator-toolbar">
            {topologies.map(({ id, label, icon: Icon }) => (
              <button key={id} className={`sim-btn ${activeTopo === id ? 'active' : ''}`} onClick={() => setActiveTopo(id)}>
                <Icon size={14} /> {label}
              </button>
            ))}
          </div>
          <div className="sim-canvas">
            <svg id="topoSvg" viewBox="0 0 600 400" />
          </div>
        </div>
        <Tugas data={[
          'Jalankan simulasi di atas: pilih setiap topologi (star, bus, ring, mesh, tree, hybrid) dan amati cara node saling terhubung. Catat perbedaan pola kabel yang paling jelas.',
          'Pada simulasi mesh, hitung jumlah koneksi antar node yang terlihat, lalu cocokkan dengan rumus n(n−1)/2!',
        ]} />
      </MateriCard>

      <MateriCard icon={Projector} title="Video Pembelajaran">
        <VideoEmbed videoId="QGykYWbdf0A" title="Topologi Jaringan - Bus, Ring, Star, Mesh, Tree" />
        <VideoEmbed videoId="7Ut4u8qVwRU" title="Topologi Jaringan Lengkap (Star, Bus, Ring, Mesh, Wireless) - Bahasa Indonesia" />
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
