import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { checkBadges } from '../data/badges';
import { Server, Projector, CreditCard, Briefcase, ClipboardCheck, FileText, BarChart3, BookOpen, Trophy, Network, Monitor, Puzzle, Award, BookA, Zap, FileDown, ExternalLink } from 'lucide-react';

export default function Dashboard() {
  const { modulesRead, scores } = useApp();
  const earnedBadges = checkBadges(scores, modulesRead);

  const modules = [
    { to: '/mpk1/modul1', icon: Server, title: 'Peralatan Jaringan', desc: 'Kebutuhan teknis, peralatan, dan teknologi', color: ['#667eea', '#764ba2'] },
    { to: '/mpk1/modul2', icon: Projector, title: 'Topologi Jaringan', desc: 'Star, bus, ring, mesh + simulasi SVG', color: ['#f093fb', '#f5576c'] },
    { to: '/mpk1/modul3', icon: CreditCard, title: 'Pengalamatan Jaringan', desc: 'IP, Subnetting, CIDR, VLSM + kalkulator', color: ['#4facfe', '#00f2fe'] },
  ];

  const quickActions = [
    { to: '/mpk1/flashcard', icon: BookOpen, title: 'Flashcard', desc: 'Hafal istilah jaringan', color: ['#8b5cf6', '#6d28d9'] },
    { to: '/mpk1/simulator', icon: Network, title: 'Simulator', desc: 'Bangun jaringan sendiri', color: ['#6366f1', '#818cf8'] },
    { to: '/mpk1/dragdrop', icon: Puzzle, title: 'Drag & Drop', desc: 'Latihan interaktif', color: ['#ec4899', '#db2777'] },
    { to: '/mpk1/challenge', icon: Zap, title: 'Latihan Cepat', desc: 'Subnetting race', color: ['#f59e0b', '#f97316'] },
    { to: '/mpk1/kasus', icon: Briefcase, title: 'Studi Kasus', desc: 'Skenario nyata', color: ['#10b981', '#059669'] },
    { to: '/mpk1/pretest', icon: ClipboardCheck, title: 'Pre-Test', desc: 'Uji awal', color: ['#06b6d4', '#0891b2'] },
    { to: '/mpk1/posttest', icon: FileText, title: 'Post-Test', desc: 'Evaluasi akhir', color: ['#ef4444', '#dc2626'] },
    { to: '/mpk1/worksheet', icon: FileDown, title: 'Lembar Kerja', desc: 'Soal offline', color: ['#7c3aed', '#6d28d9'] },
    { to: '/mpk1/glossary', icon: BookA, title: 'Glossarium', desc: 'Istilah jaringan', color: ['#0ea5e9', '#0284c7'] },
    { to: '/mpk1/hasil', icon: BarChart3, title: 'Hasil', desc: 'Pencapaian & sertifikat', color: ['#f43f5e', '#e11d48'] },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Kelas XI TJKT</div>
          <h1>Perencanaan & Pengalamatan Jaringan</h1>
          <p>Mata Pelajaran Kejuruan Teknik Jaringan Komputer dan Telekomunikasi</p>
          <div className="hero-stats">
            <div className="stat"><BookOpen size={18} /> <span>3 Modul</span></div>
            <div className="stat"><Briefcase size={18} /> <span>Studi Kasus</span></div>
            <div className="stat"><Puzzle size={18} /> <span>Drag & Drop</span></div>
              <div className="stat"><ClipboardCheck size={18} /> <span>Pre & Post Test</span></div>
            </div>
            <a href="https://tjkt.smkn2-kng.sch.id/" className="hero-back-btn">
              <ExternalLink size={16} /> Kembali ke Website TJKT
            </a>
          </div>
        <div className="hero-visual">
          <div className="network-animation">
            <div className="node center-node"><Monitor size={28} /></div>
            <div className="node node-1"><Server size={18} /></div>
            <div className="node node-2"><Monitor size={18} /></div>
            <div className="node node-3"><Network size={18} /></div>
            <div className="node node-4"><Projector size={18} /></div>
            <svg className="lines" viewBox="0 0 300 300">
              <line x1="150" y1="150" x2="50" y2="50" stroke="rgba(99,102,241,0.4)" strokeWidth="2"/>
              <line x1="150" y1="150" x2="250" y2="50" stroke="rgba(99,102,241,0.4)" strokeWidth="2"/>
              <line x1="150" y1="150" x2="50" y2="250" stroke="rgba(99,102,241,0.4)" strokeWidth="2"/>
              <line x1="150" y1="150" x2="250" y2="250" stroke="rgba(99,102,241,0.4)" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="section-block">
        <h2><Trophy size={20} /> Tujuan Pembelajaran</h2>
        <div className="objectives-grid">
          {[
            'Memahami kebutuhan teknis pengguna dan peralatan jaringan dengan teknologi yang sesuai',
            'Memahami perancangan topologi jaringan',
            'Memahami perancangan pengalamatan jaringan'
          ].map((text, i) => (
            <div className="objective-card" key={i}>
              <div className="obj-number">{i + 1}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2><BookOpen size={20} /> Modul Pembelajaran</h2>
        <div className="modules-grid">
          {modules.map(({ to, icon: Icon, title, desc, color }) => (
            <Link to={to} className="module-card" key={to}>
              <div className="module-icon" style={{background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`}}>
                <Icon size={24} color="white" />
              </div>
              <div className="module-info">
                <span className="module-tag">Modul {to.split('/modul').pop()}</span>
                <h3>{title}</h3><p>{desc}</p>
                <div className="module-progress">
                  <div className="progress-bar"><div className="progress-fill" style={{width: modulesRead[to.split('/').pop()] ? '100' : '0' + '%'}} /></div>
                  <span>{modulesRead[to.split('/').pop()] ? '100%' : '0%'}</span>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color:'var(--text-lighter)', flexShrink:0}}><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2><Briefcase size={20} /> Akses Cepat</h2>
        <div className="actions-grid">
          {quickActions.map(({ to, icon: Icon, title, desc, color }) => (
            <Link to={to} className="action-card" key={to}>
              <div className="action-icon" style={{background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`}}>
                <Icon size={22} color="white" />
              </div>
              <h4>{title}</h4><p>{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {earnedBadges.length > 0 && (
        <section className="section-block">
          <h2><Award size={20} /> Pencapaian Terbaru</h2>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            {earnedBadges.slice(0, 4).map(id => (
              <div key={id} className="badge-item earned" style={{flex:'0 0 auto'}}>
                <div className="badge-icon" style={{width:40,height:40}}>
                  <Award size={18} />
                </div>
                <span style={{fontSize:'0.8rem',fontWeight:600}}>{id.replace(/_/g, ' ')}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="footer"><p>&copy; 2026 TJKT SMKN 2 KUNINGAN</p></footer>
    </>
  );
}
