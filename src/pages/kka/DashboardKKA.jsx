import { Code2, Brain, Terminal, BookOpen, Trophy, Cpu, Lock, Sparkles, GitBranch, Database } from 'lucide-react';

export default function DashboardKKA() {
  const elements = [
    { title: 'Elemen 1: Algoritma & Logika Dasar', desc: 'Belum tersedia', icon: GitBranch, color: ['#22c55e', '#16a34a'] },
    { title: 'Elemen 2: Dasar Pemrograman', desc: 'Belum tersedia', icon: Terminal, color: ['#06b6d4', '#0891b2'] },
    { title: 'Elemen 3: Pemrograman Berorientasi Objek', desc: 'Belum tersedia', icon: Database, color: ['#f59e0b', '#d97706'] },
    { title: 'Elemen 4: Dasar Kecerdasan Artifisial', desc: 'Belum tersedia', icon: Brain, color: ['#8b5cf6', '#6d28d9'] },
  ];

  const quickActions = [
    { title: 'Flashcard', desc: 'Segera hadir', icon: BookOpen, color: ['#8b5cf6', '#6d28d9'] },
    { title: 'Latihan Cepat', desc: 'Segera hadir', icon: Cpu, color: ['#f59e0b', '#f97316'] },
    { title: 'Pre-Test', desc: 'Segera hadir', icon: Lock, color: ['#06b6d4', '#0891b2'] },
    { title: 'Post-Test', desc: 'Segera hadir', icon: Sparkles, color: ['#ef4444', '#dc2626'] },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Kelas XI TJKT</div>
          <h1>Koding dan Kecerdasan Artifisial (KKA)</h1>
          <p>Mata Pelajaran Kejuruan — Dasar Pemrograman & Kecerdasan Artifisial</p>
          <div className="hero-stats">
            <div className="stat"><BookOpen size={18} /> <span>4 Elemen</span></div>
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
            'Memahami algoritma, logika, dan struktur dasar pemrograman',
            'Menerapkan pemrograman prosedural dan berorientasi objek',
            'Mengenal konsep dasar kecerdasan artifisial dan aplikasinya',
            'Membangun solusi sederhana berbasis kode dan AI'
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
          {elements.map(({ title, desc, icon: Icon, color }) => (
            <div className="module-card" key={title} style={{opacity: 0.6}}>
              <div className="module-icon" style={{background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`}}>
                <Icon size={24} color="white" />
              </div>
              <div className="module-info">
                <span className="module-tag">Segera hadir</span>
                <h3>{title}</h3><p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="info-box" style={{marginTop: 20}}>
          <strong>Catatan:</strong> Struktur elemen di atas masih placeholder. Materi KKA menyusul.
        </div>
      </section>

      <section className="section-block">
        <h2><Cpu size={20} /> Akses Cepat</h2>
        <div className="actions-grid">
          {quickActions.map(({ title, desc, icon: Icon, color }) => (
            <div className="action-card" key={title} style={{opacity: 0.6, cursor: 'default'}}>
              <div className="action-icon" style={{background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`}}>
                <Icon size={22} color="white" />
              </div>
              <h4>{title}</h4><p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer"><p>&copy; 2026 TJKT SMKN 2 KUNINGAN</p></footer>
    </>
  );
}
