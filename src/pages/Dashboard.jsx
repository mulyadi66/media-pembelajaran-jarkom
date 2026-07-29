import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { checkBadges } from '../data/badges';
import { Server, Projector, CreditCard, BookOpen, Trophy, Award } from 'lucide-react';

export default function Dashboard() {
  const { modulesRead, scores } = useApp();
  const earnedBadges = checkBadges(scores, modulesRead);

  const modules = [
    { to: '/mpk1/modul1', icon: Server, title: 'Peralatan Jaringan', desc: 'Kebutuhan teknis, peralatan, dan teknologi', color: ['#667eea', '#764ba2'] },
    { to: '/mpk1/modul2', icon: Projector, title: 'Topologi Jaringan', desc: 'Star, bus, ring, mesh + simulasi SVG', color: ['#f093fb', '#f5576c'] },
    { to: '/mpk1/modul3', icon: CreditCard, title: 'Pengalamatan Jaringan', desc: 'IP, Subnetting, CIDR, VLSM + kalkulator', color: ['#4facfe', '#00f2fe'] },
  ];

  return (
    <>
      <section className="section-block" style={{paddingTop: 30}}>
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
