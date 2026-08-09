import { Link } from 'react-router-dom';
import { Code2, Brain, Terminal, BookOpen, Trophy, Cpu, Zap, ClipboardCheck, FileText, BarChart3, GitBranch, Database, MonitorSmartphone, Briefcase, FileDown, BookA, Puzzle } from 'lucide-react';

export default function DashboardKKA() {
  const elements = [
    { to: '/kka/elemen1', icon: Brain, title: 'Berpikir Komputasional', desc: 'Dekomposisi, pola, abstraksi & algoritma', color: ['#22c55e', '#16a34a'] },
    { to: '/kka/elemen2', icon: MonitorSmartphone, title: 'Literasi Digital', desc: 'Etika, keamanan & kolaborasi digital', color: ['#06b6d4', '#0891b2'] },
    { to: '/kka/elemen3', icon: Terminal, title: 'Algoritma Pemrograman', desc: 'Flowchart, percabangan, perulangan, Python', color: ['#f59e0b', '#d97706'] },
    { to: '/kka/elemen4', icon: BarChart3, title: 'Analisis Data', desc: 'Statistik dasar, visualisasi & interpretasi', color: ['#ef4444', '#dc2626'] },
    { to: '/kka/elemen5', icon: Brain, title: 'Literasi & Etika AI', desc: 'Konsep AI, etika & bias', color: ['#8b5cf6', '#6d28d9'] },
  ];

  const quickActions = [
    { to: '/kka/flashcard', title: 'Flashcard', desc: 'Hafal istilah KKA', icon: BookOpen, color: ['#8b5cf6', '#6d28d9'] },
    { to: '/kka/challenge', title: 'Latihan Cepat', desc: 'Tes kecepatan', icon: Zap, color: ['#f59e0b', '#f97316'] },
    { to: '/kka/pretest', title: 'Pre-Test', desc: 'Uji awal', icon: ClipboardCheck, color: ['#06b6d4', '#0891b2'] },
    { to: '/kka/posttest', title: 'Post-Test', desc: 'Evaluasi akhir', icon: FileText, color: ['#ef4444', '#dc2626'] },
    { to: '/kka/hasil', title: 'Hasil & Sertifikat', desc: 'Pencapaian & sertifikat', icon: BarChart3, color: ['#f43f5e', '#e11d48'] },
    { to: '/kka/kasus', title: 'Studi Kasus', desc: 'Terapkan pemahaman', icon: Briefcase, color: ['#14b8a6', '#0d9488'] },
    { to: '/kka/worksheet', title: 'Lembar Kerja', desc: 'Latihan offline', icon: FileDown, color: ['#84cc16', '#65a30d'] },
    { to: '/kka/glossary', title: 'Glossarium', desc: 'Kamus istilah KKA', icon: BookA, color: ['#0ea5e9', '#0284c7'] },
    { to: '/kka/codeblocks', title: 'CodeBlocks Puzzle', desc: 'Game susun blok kode', icon: Puzzle, color: ['#f59e0b', '#b45309'] },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Kelas XI TJKT</div>
          <h1>Koding dan Kecerdasan Artifisial (KKA)</h1>
          <p>Mata Pelajaran Kejuruan — Dasar Pemrograman & Kecerdasan Artifisial</p>
          <div className="hero-stats">
            <div className="stat"><BookOpen size={18} /> <span>5 Elemen</span></div>
            <div className="stat"><Code2 size={18} /> <span>Koding</span></div>
            <div className="stat"><Brain size={18} /> <span>AI</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="network-animation">
            <div className="node center-node" aria-hidden="true"><Code2 size={28} /></div>
            <div className="node node-1" aria-hidden="true"><GitBranch size={18} /></div>
            <div className="node node-2" aria-hidden="true"><Terminal size={18} /></div>
            <div className="node node-3" aria-hidden="true"><Brain size={18} /></div>
            <div className="node node-4" aria-hidden="true"><Database size={18} /></div>
            <svg className="lines" viewBox="0 0 300 300" aria-hidden="true">
              <line x1="150" y1="150" x2="50" y2="50" stroke="rgba(34,197,94,0.4)" strokeWidth="2"/>
              <line x1="150" y1="150" x2="250" y2="50" stroke="rgba(6,182,212,0.4)" strokeWidth="2"/>
              <line x1="150" y1="150" x2="50" y2="250" stroke="rgba(139,92,246,0.4)" strokeWidth="2"/>
              <line x1="150" y1="150" x2="250" y2="250" stroke="rgba(245,158,11,0.4)" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="section-block" style={{paddingTop: 30}}>
        <h2><Trophy size={20} /> Tujuan Pembelajaran</h2>
        <div className="objectives-grid">
          {[
            'Mampu berpikir komputasional untuk memecahkan masalah',
            'Cakap digital: etis, aman, dan produktif',
            'Menguasai dasar algoritma dan pemrograman',
            'Menganalisis data dan menyajikan hasilnya',
            'Menggunakan AI secara etis dan bertanggung jawab'
          ].map((text, i) => (
            <div className="objective-card" key={i}>
              <div className="obj-number">{i + 1}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2><BookOpen size={20} /> Elemen Pembelajaran</h2>
        <div className="modules-grid">
          {elements.map(({ to, icon: Icon, title, desc, color }) => (
            <Link to={to} className="module-card" key={to}>
              <div className="module-icon" style={{background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`}}>
                <Icon size={24} color="white" />
              </div>
              <div className="module-info">
                <span className="module-tag">Elemen {to.split('/kka/elemen').pop()}</span>
                <h3>{title}</h3><p>{desc}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color:'var(--text-lighter)', flexShrink:0}} aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block">
        <h2><Cpu size={20} /> Akses Cepat</h2>
        <div className="actions-grid">
          {quickActions.map(({ to, title, desc, icon: Icon, color }) => (
            <Link to={to} className="action-card" key={to}>
              <div className="action-icon" style={{background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`}}>
                <Icon size={22} color="white" />
              </div>
              <h4>{title}</h4><p>{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer"><p>&copy; 2026 TJKT SMKN 2 KUNINGAN</p></footer>
    </>
  );
}
