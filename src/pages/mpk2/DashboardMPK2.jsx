import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { checkBadges } from '../../data/badges';
import { Wifi, Cable, Radio, Phone, Circle, BookOpen, Trophy, Award, BookA, Zap, FileDown, BarChart3, Briefcase, ClipboardCheck, FileText, RotateCcw, Monitor, Globe } from 'lucide-react';
import ConfirmModal from '../../components/ConfirmModal';

export default function DashboardMPK2() {
  const { modulesRead, scores, resetAll } = useApp();
  const [showReset, setShowReset] = useState(false);
  const earnedBadges = checkBadges(scores, modulesRead);

  const moduls = [
    { to: '/mpk2/modul1', icon: Cable, title: 'Instalasi & Perawatan Jaringan', desc: 'Tools, crimping, instalasi nirkabel, troubleshooting', color: ['#06b6d4', '#0891b2'] },
    { to: '/mpk2/modul2', icon: Wifi, title: 'Dasar Jaringan Nirkabel', desc: 'Konsep wireless, standar Wi-Fi, keamanan, antena', color: ['#10b981', '#059669'] },
    { to: '/mpk2/modul3', icon: Radio, title: 'Instalasi Perangkat Nirkabel', desc: 'Site survey, konfigurasi AP, bridge, pengujian', color: ['#f59e0b', '#d97706'] },
    { to: '/mpk2/modul4', icon: Phone, title: 'Voice over IP (VoIP)', desc: 'SIP, RTP, perangkat VoIP, konfigurasi', color: ['#ef4444', '#dc2626'] },
    { to: '/mpk2/modul5', icon: Circle, title: 'Jaringan Fiber Optik', desc: 'Prinsip fiber, SM/MM, splicing, OTDR', color: ['#8b5cf6', '#6d28d9'] },
  ];

  const quickActions = [
    { to: '/mpk2/flashcard', icon: BookA, title: 'Flashcard', desc: 'Hafal istilah MPK 2', color: ['#8b5cf6', '#6d28d9'] },
    { to: '/mpk2/challenge', icon: Zap, title: 'Latihan Cepat', desc: 'Tes kecepatan', color: ['#f59e0b', '#f97316'] },
    { to: '/mpk2/kasus', icon: Briefcase, title: 'Studi Kasus', desc: 'Skenario nyata', color: ['#10b981', '#059669'] },
    { to: '/mpk2/pretest', icon: ClipboardCheck, title: 'Pre-Test', desc: 'Uji awal', color: ['#06b6d4', '#0891b2'] },
    { to: '/mpk2/posttest', icon: FileText, title: 'Post-Test', desc: 'Evaluasi akhir', color: ['#ef4444', '#dc2626'] },
    { to: '/mpk2/worksheet', icon: FileDown, title: 'Lembar Kerja', desc: 'Soal offline', color: ['#7c3aed', '#6d28d9'] },
    { to: '/mpk2/glossary', icon: BookOpen, title: 'Glossarium', desc: 'Istilah MPK 2', color: ['#0ea5e9', '#0284c7'] },
    { to: '/mpk2/hasil', icon: BarChart3, title: 'Hasil', desc: 'Pencapaian & sertifikat', color: ['#f43f5e', '#e11d48'] },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Kelas XI TJKT</div>
          <h1>Teknologi Jaringan Kabel dan Nirkabel</h1>
          <p>Mata Pelajaran Kejuruan — MPK 2 TJKT</p>
          <div className="hero-stats">
            <div className="stat"><Cable size={18} /> <span>5 Modul</span></div>
            <div className="stat"><Wifi size={18} /> <span>Nirkabel</span></div>
            <div className="stat"><Phone size={18} /> <span>VoIP</span></div>
            <div className="stat"><Circle size={18} /> <span>Fiber Optik</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="network-animation">
            <div className="node center-node" aria-hidden="true"><Monitor size={28} /></div>
            <div className="node node-1" aria-hidden="true"><Cable size={18} /></div>
            <div className="node node-2" aria-hidden="true"><Wifi size={18} /></div>
            <div className="node node-3" aria-hidden="true"><Phone size={18} /></div>
            <div className="node node-4" aria-hidden="true"><Circle size={18} /></div>
            <svg className="lines" viewBox="0 0 300 300" aria-hidden="true">
              <line x1="150" y1="150" x2="50" y2="50" stroke="rgba(6,182,212,0.4)" strokeWidth="2"/>
              <line x1="150" y1="150" x2="250" y2="50" stroke="rgba(16,185,129,0.4)" strokeWidth="2"/>
              <line x1="150" y1="150" x2="50" y2="250" stroke="rgba(239,68,68,0.4)" strokeWidth="2"/>
              <line x1="150" y1="150" x2="250" y2="250" stroke="rgba(139,92,246,0.4)" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </section>

      <section className="section-block" style={{paddingTop: 30}}>
        <h2><Trophy size={20} /> Tujuan Pembelajaran</h2>
        <div className="objectives-grid">
          {[
            'Melakukan instalasi, perawatan, dan perbaikan jaringan kabel serta nirkabel',
            'Memahami dasar dan teknologi jaringan nirkabel',
            'Melakukan instalasi dan pengujian perangkat jaringan nirkabel',
            'Menerapkan Voice over Internet Protocol (VoIP)',
            'Memahami dan menginstalasi jaringan fiber optik'
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
          {moduls.map(({ to, icon: Icon, title, desc, color }) => (
            <Link to={to} className="module-card" key={to}>
              <div className="module-icon" style={{background: `linear-gradient(135deg, ${color[0]}, ${color[1]})`}}>
                <Icon size={24} color="white" />
              </div>
              <div className="module-info">
                <span className="module-tag">Modul {to.split('/mpk2/modul').pop()}</span>
                <h3>{title}</h3><p>{desc}</p>
                <div className="module-progress">
                  <div className="progress-bar"><div className="progress-fill" style={{width: (modulesRead['mpk2_' + to.split('/').pop()] ? '100' : '0') + '%'}} /></div>
                  <span>{modulesRead['mpk2_' + to.split('/').pop()] ? '100%' : '0%'}</span>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{color:'var(--text-lighter)', flexShrink:0}} aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
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

      <section className="section-block" style={{textAlign:'center', marginTop:40}}>
        <button className="reset-btn" onClick={() => setShowReset(true)}>
          <RotateCcw size={16} /> Reset Pengerjaan
        </button>
        <ConfirmModal
          open={showReset}
          title="Reset Semua Pengerjaan?"
          message="Semua progress, nilai, jawaban pretest/posttest, dan data lainnya akan dihapus permanen."
          confirmLabel="Ya, Reset"
          cancelLabel="Batal"
          onConfirm={() => { resetAll(); setShowReset(false); }}
          onCancel={() => setShowReset(false)}
        />
      </section>

      <footer className="footer"><p>&copy; 2026 TJKT SMKN 2 KUNINGAN</p></footer>
    </>
  );
}