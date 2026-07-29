import { Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';
import {
  Network, Server, Globe, Wifi, Cpu, HardDrive, Lock, Smartphone,
  ChevronRight, School, ExternalLink
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
      </main>

      <footer className="portal-footer">
        <a href="https://tjkt.smkn2-kng.sch.id/" className="footer-tjkt-link">
          <ExternalLink size={16} /> Kembali ke Website TJKT
        </a>
        <p>&copy; 2026 TJKT SMKN 2 KUNINGAN</p>
      </footer>
    </div>
  );
}
