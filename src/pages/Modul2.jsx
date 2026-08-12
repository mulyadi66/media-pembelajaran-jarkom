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
  { id: 'star', label: 'Star', icon: Star },
  { id: 'bus', label: 'Bus', icon: Minus },
  { id: 'ring', label: 'Ring', icon: Circle },
  { id: 'mesh', label: 'Mesh', icon: Network },
  { id: 'tree', label: 'Tree', icon: GitBranch },
  { id: 'hybrid', label: 'Hybrid', icon: GitBranch },
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

      <div className="materi-card">
        <h3><Info size={18} /> 2.1 Pengertian Topologi Jaringan</h3>
        <p>Topologi jaringan adalah cara atau metode pengaturan dan penghubungan antara satu komputer dengan komputer lainnya dalam sebuah jaringan.</p>
        <div className="info-box">
          <strong>Dua Jenis Topologi</strong>
          <p><strong>Fisik:</strong> Layout kabel dan perangkat secara fisik.<br/><strong>Logika:</strong> Cara data mengalir dalam jaringan.</p>
        </div>
        <ContohSoal data={[
          { soal: 'Jelaskan perbedaan topologi fisik dan topologi logis, lengkap dengan satu contoh!',
            penyelesaian: 'Topologi fisik menggambarkan susunan kabel dan perangkat yang sebenarnya, sedangkan topologi logis menggambarkan jalur aliran data. Contoh: jaringan yang memakai Hub tersusun fisik seperti bintang (semua kabel menuju hub), tetapi secara logis berperilaku seperti bus karena hub menyiarkan data ke semua port.' },
          { soal: 'Mengapa jaringan yang menggunakan Hub dianggap boros bandwidth?',
            penyelesaian: 'Karena Hub meneruskan setiap data ke SEMUA port (broadcast). Semakin banyak perangkat, semakin besar lalu lintas data yang tidak perlu sehingga tabrakan (collision) makin sering terjadi dan bandwidth terbuang.' },
        ]} />
        <Tugas data={[
          'Tuliskan pengertian topologi jaringan dengan bahasamu sendiri (1–2 kalimat)!',
          'Berikan contoh jaringan yang topologi fisiknya berbeda dengan topologi logisnya, lalu jelaskan keduanya!',
        ]} />
      </div>

      {[
        { title: '2.2 Topologi Bus', pros: 'Murah, hemat kabel, cocok untuk jaringan kecil', cons: 'Satu kabel putus = seluruh jaringan mati, sulit debugging', use: 'Jaringan kecil sementara', proto: 'CSMA/CD' },
        { title: '2.3 Topologi Star', pros: 'Mudah dikelola, satu kabel rusak hanya 1 node, mudah ditambah', cons: 'Switch rusak = semua node terganggu, butuh lebih banyak kabel', use: 'LAN kantor, sekolah, warnet' },
        { title: '2.4 Topologi Ring', pros: 'Tidak ada tabrakan data (token passing), performa stabil', cons: 'Satu node rusak bisa memutus jaringan, sulit diubah', use: 'Token Ring, FDDI', proto: 'Token Passing' },
        { title: '2.5 Topologi Mesh', pros: 'Sangat handal, redundant path, keamanan tinggi', cons: 'Sangat mahal, banyak kabel, kompleks', use: 'Backbone internet, WAN, jaringan kritis' },
        { title: '2.6 Topologi Tree', pros: 'Mudah berkembang, terstruktur, cocok untuk jaringan besar', cons: 'Root node rusak = seluruh jaringan mati', use: 'Gedung bertingkat, universitas' },
        { title: '2.7 Topologi Hybrid', pros: 'Fleksibel, scalable, menggabungkan kelebihan beberapa topologi', cons: 'Desain kompleks, biaya tinggi', use: 'Internet, WAN, perusahaan besar' },
      ].map((t, i) => (
        <div className="materi-card" key={i}>
          <h3><Projector size={18} /> {t.title}</h3>
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
        </div>
      ))}

      <ContohSoal data={[
        { soal: 'Jaringan bus 10 PC, kabel utama (backbone) putus di tengah. Apa dampaknya dan mengapa?',
          penyelesaian: 'Seluruh jaringan mati. Semua PC berbagi satu jalur utama; saat kabel putus, tidak ada jalur alternatif sehingga dua segmen kehilangan terminasi yang benar dan komunikasi antar PC gagal total.' },
        { soal: 'Hitung jumlah kabel yang dibutuhkan untuk topologi full mesh dengan 5 node!',
          penyelesaian: 'Rumus full mesh: n(n−1)/2 = 5×4/2 = 10 kabel. Inilah mengapa mesh sangat mahal untuk jaringan besar — setiap node terhubung langsung ke semua node lain.' },
        { soal: 'Pada topologi star, kabel dari satu PC ke switch putus. Bagaimana dampaknya terhadap PC lain?',
          penyelesaian: 'Tidak ada dampak. Hanya PC yang kabelnya putus yang kehilangan koneksi; node lain tetap normal karena masing-masing memiliki jalur terpisah ke switch. Inilah keunggulan utama topologi star.' },
      ]} />
      <Tugas data={[
        'Hitung jumlah kabel full mesh untuk jaringan 4 node dan 6 node, lalu bandingkan dengan kebutuhan kabel topologi bus!',
        'Buat tabel kelebihan dan kekurangan topologi Star dibandingkan topologi Ring!',
        'Pada topologi ring, apa yang terjadi jika satu node mati? Bagaimana teknologi seperti FDDI (dual ring) mengatasinya?',
      ]} />

      <div className="materi-card">
        <h3><Info size={18} /> Topologi Fisik vs Logis</h3>
        <p>Jangan tertukar: topologi <strong>fisik</strong> menggambarkan susunan kabel dan perangkat yang sebenarnya, sedangkan topologi <strong>logis</strong> adalah cara data benar-benar mengalir di dalam jaringan.</p>
        <div className="info-box">
          <strong>Contoh Jebakan Ujian</strong>
          <p><strong>Hub:</strong> secara fisik berbentuk <em>star</em> (semua kabel ke hub), tetapi secara logis bertingkah seperti <em>bus</em> karena menyiarkan data ke semua port.<br/>
          <strong>Token Ring:</strong> kabelnya menuju satu perangkat pusat (MAU) sehingga fisiknya <em>star</em>, tetapi data berputar dari titik ke titik sehingga logisnya <em>ring</em>.</p>
        </div>
      </div>

      <div className="materi-card">
        <h3><Info size={18} /> Kapan Memilih Topologi Apa?</h3>
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
      </div>

      <div className="materi-card">
        <h3><Info size={18} /> 2.8 Perbandingan Semua Topologi</h3>
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
      </div>

      <div className="materi-card">
        <h3><Calculator size={18} /> 2.9 Simulasi Topologi Interaktif</h3>
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
      </div>

      <div className="materi-card">
        <h3><Projector size={18} /> Video Pembelajaran</h3>
        <VideoEmbed videoId="QGykYWbdf0A" title="Topologi Jaringan - Bus, Ring, Star, Mesh, Tree" />
        <VideoEmbed videoId="7Ut4u8qVwRU" title="Topologi Jaringan Lengkap (Star, Bus, Ring, Mesh, Wireless) - Bahasa Indonesia" />
      </div>
    </div>
  );
}
