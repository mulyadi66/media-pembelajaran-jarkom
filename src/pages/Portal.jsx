import { Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';
import {
  Network, Server, Globe, Wifi, Cpu, HardDrive, Lock, Smartphone,
  ChevronRight, School, BookOpen, Briefcase, Puzzle, ClipboardCheck,
  ExternalLink, Monitor, Projector, BookA, FileText, FileDown, BarChart3,
  Zap
} from 'lucide-react';

const subjects = [
  { id: 'dkk', label: 'DKK', title: 'Dasar Keahlian Komunikasi', icon: Globe, color: '#06b6d4', active: false },
  { id: 'mpk1', label: 'MPK 1', title: 'Perencanaan & Pengalamatan Jaringan', icon: Network, color: '#6366f1', active: true, path: '/mpk1' },
  { id: 'mpk2', label: 'MPK 2', title: 'Teknologi Jaringan', icon: Wifi, color: '#8b5cf6', active: false },
  { id: 'mpk3', label: 'MPK 3', title: 'Administrasi Jaringan', icon: Server, color: '#f59e0b', active: false },
  { id: 'mpk4', label: 'MPK 4', title: 'Keamanan Jaringan', icon: Lock, color: '#ef4444', active: false },
  { id: 'mpk5', label: 'MPK 5', title: 'Pemeliharaan Jaringan', icon: HardDrive, color: '#10b981', active: false },
  { id: 'mpp-it', label: 'MPP IT', title: 'MPP IT Essential', icon: Cpu, color: '#ec4899', active: false },
  { id: 'mpp-iot', label: 'MPP IoT', title: 'MPP Internet of Things', icon: Smartphone, color: '#14b8a6', active: false },
];

export default function Portal() {

  return (
    <div className="portal">
      <header className="portal-header">
        <div className="portal-header-inner">
          <div className="portal-logo">
            <School size={28} />
            <div>
              <h1>Media Pembelajaran TJKT</h1>
              <p>SMK Negeri 2 Kuningan</p>
            </div>
          </div>
          <DarkModeToggle />
        </div>
      </header>

      <main className="portal-main">
        {/* Hero Section */}
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

        <div className="portal-hero">
          <h2>Pilih Mata Pelajaran</h2>
          <p>Mata Pelajaran Kejuruan — Teknik Jaringan Komputer dan Telekomunikasi</p>
        </div>

        <div className="portal-grid">
          {subjects.map(s => {
            const Icon = s.icon;
            return s.active ? (
              <Link key={s.id} to={s.path} className="portal-card active" style={{'--card-color': s.color}}>
                <div className="portal-card-icon" style={{background: `linear-gradient(135deg, ${s.color}, ${s.color}dd)`}}>
                  <Icon size={28} />
                </div>
                <div className="portal-card-body">
                  <span className="portal-card-badge">{s.label}</span>
                  <h3>{s.title}</h3>
                </div>
                <ChevronRight size={20} className="portal-card-arrow" />
              </Link>
            ) : (
              <div key={s.id} className="portal-card disabled">
                <div className="portal-card-icon" style={{background: `linear-gradient(135deg, ${s.color}44, ${s.color}22)`}}>
                  <Icon size={28} />
                </div>
                <div className="portal-card-body">
                  <span className="portal-card-badge">{s.label}</span>
                  <h3>{s.title}</h3>
                  <span className="portal-card-coming">Segera hadir</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Akses Cepat */}
        <section className="section-block" style={{marginTop: 40}}>
          <h2><Zap size={20} /> Akses Cepat MPK 1</h2>
          <div className="actions-grid">
            {[
              { to: '/mpk1/flashcard', icon: BookA, title: 'Flashcard', desc: 'Hafal istilah', color: ['#8b5cf6', '#6d28d9'] },
              { to: '/mpk1/simulator', icon: Network, title: 'Simulator', desc: 'Bangun jaringan', color: ['#6366f1', '#818cf8'] },
              { to: '/mpk1/dragdrop', icon: Puzzle, title: 'Drag & Drop', desc: 'Latihan interaktif', color: ['#ec4899', '#db2777'] },
              { to: '/mpk1/challenge', icon: Zap, title: 'Latihan Cepat', desc: 'Subnetting race', color: ['#f59e0b', '#f97316'] },
              { to: '/mpk1/kasus', icon: Briefcase, title: 'Studi Kasus', desc: 'Skenario nyata', color: ['#10b981', '#059669'] },
              { to: '/mpk1/pretest', icon: ClipboardCheck, title: 'Pre-Test', desc: 'Uji awal', color: ['#06b6d4', '#0891b2'] },
              { to: '/mpk1/posttest', icon: FileText, title: 'Post-Test', desc: 'Evaluasi akhir', color: ['#ef4444', '#dc2626'] },
              { to: '/mpk1/worksheet', icon: FileDown, title: 'Lembar Kerja', desc: 'Soal offline', color: ['#7c3aed', '#6d28d9'] },
              { to: '/mpk1/glossary', icon: BookOpen, title: 'Glossarium', desc: 'Istilah jaringan', color: ['#0ea5e9', '#0284c7'] },
              { to: '/mpk1/hasil', icon: BarChart3, title: 'Hasil', desc: 'Pencapaian', color: ['#f43f5e', '#e11d48'] },
            ].map(({ to, icon: Icon, title, desc, color }) => (
              <Link to={to} className="action-card" key={to}>
                <div className="action-icon" style={{background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`}}>
                  <Icon size={22} color="white" />
                </div>
                <h4>{title}</h4><p>{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Website TJKT */}
        <section className="section-block" style={{textAlign: 'center', marginTop: 20, marginBottom: 40}}>
          <a href="https://tjkt.smkn2-kng.sch.id/" target="_blank" rel="noopener noreferrer"
            className="hero-back-btn" style={{display: 'inline-flex'}}>
            <ExternalLink size={18} /> Kembali ke Website TJKT
          </a>
        </section>
      </main>

      <footer className="portal-footer">
        <p>&copy; 2026 TJKT SMKN 2 KUNINGAN</p>
      </footer>
    </div>
  );
}
