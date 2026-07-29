import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import DarkModeToggle from './DarkModeToggle';
import StreakCounter from './StreakCounter';
import {
  Home, Server, Projector, CreditCard, Briefcase,
  ClipboardCheck, FileText, BarChart3, Menu, X, Trophy, User, Search,
  Network, Puzzle, BookOpen, BookA, Zap, FileDown, PanelLeftClose, PanelLeft
} from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Dashboard' },
  { to: '/modul1', icon: Server, label: 'Modul 1: Peralatan Jaringan' },
  { to: '/modul2', icon: Projector, label: 'Modul 2: Topologi Jaringan' },
  { to: '/modul3', icon: CreditCard, label: 'Modul 3: Pengalamatan Jaringan' },
  { to: '/modul-ajar', icon: FileText, label: 'Modul Ajar' },
  { to: '/flashcard', icon: BookOpen, label: 'Flashcard' },
  { to: '/simulator', icon: Network, label: 'Simulator Jaringan' },
  { to: '/dragdrop', icon: Puzzle, label: 'Drag & Drop Subnetting' },
  { to: '/challenge', icon: Zap, label: 'Latihan Cepat' },
  { to: '/kasus', icon: Briefcase, label: 'Studi Kasus' },
  { to: '/pretest', icon: ClipboardCheck, label: 'Pre-Test' },
  { to: '/posttest', icon: FileText, label: 'Post-Test' },
  { to: '/worksheet', icon: FileDown, label: 'Lembar Kerja' },
  { to: '/glossary', icon: BookA, label: 'Glossarium' },
  { to: '/hasil', icon: BarChart3, label: 'Hasil & Sertifikat' },
];

const pageTitles = {
  '/': 'Dashboard', '/modul1': 'Modul 1: Peralatan Jaringan',
  '/modul2': 'Modul 2: Topologi Jaringan', '/modul3': 'Modul 3: Pengalamatan Jaringan',
  '/modul-ajar': 'Modul Ajar',
  '/flashcard': 'Flashcard Interaktif', '/simulator': 'Simulator Jaringan',
  '/dragdrop': 'Drag & Drop Subnetting', '/challenge': 'Latihan Cepat',
  '/kasus': 'Studi Kasus', '/pretest': 'Pre-Test', '/posttest': 'Post-Test',
  '/worksheet': 'Lembar Kerja', '/glossary': 'Glossarium Jaringan',
  '/hasil': 'Hasil & Sertifikat',
};

const pageDescriptions = {
  '/': 'Media Pembelajaran Perencanaan & Pengalamatan Jaringan',
  '/modul1': 'Kebutuhan teknis pengguna dan peralatan jaringan',
  '/modul2': 'Perancangan dan simulasi berbagai topologi jaringan',
  '/modul3': 'IP Address, Subnetting, CIDR, dan VLSM',
  '/modul-ajar': 'Modul Ajar Perencanaan & Pengalamatan Jaringan — Fase F',
  '/flashcard': 'Kartu interaktif istilah jaringan komputer',
  '/simulator': 'Simulasi jaringan drag & drop',
  '/dragdrop': 'Latihan interaktif drag & drop',
  '/challenge': 'Latihan cepat subnetting melawan waktu',
  '/kasus': 'Terapkan pemahaman dalam permasalahan nyata',
  '/pretest': 'Uji pemahaman awal sebelum mempelajari materi',
  '/posttest': 'Evaluasi pemahaman setelah belajar. Target: ≥70',
  '/worksheet': 'Lembar kerja praktik offline',
  '/glossary': 'Daftar istilah penting dalam jaringan komputer',
  '/hasil': 'Ringkasan, pencapaian, dan sertifikat',
};

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { totalScore, streak } = useApp();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className={`app-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      <nav className={`sidebar ${sidebarOpen ? 'mobile-open' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`} aria-label="Navigasi utama">
        <div className="sidebar-header">
          <div className="logo">
            <Network size={24} />
            <span>MPK 2</span>
          </div>
          <button className="sidebar-close-mobile" onClick={() => setSidebarOpen(false)} aria-label="Tutup menu navigasi">
            <X size={20} />
          </button>
        </div>
        <ul className="nav-menu" role="list">
          {navItems.map(({ to, icon: Icon, label }) => (
            <li key={to} role="listitem">
              <NavLink to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)} title={sidebarCollapsed ? label : undefined}>
                <Icon size={18} /><span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)}
            aria-label="Buka menu navigasi" aria-expanded={sidebarOpen}>
            <Menu size={22} />
          </button>
          <button className="sidebar-toggle" onClick={() => setSidebarCollapsed(prev => !prev)}
            aria-label={sidebarCollapsed ? 'Perluas sidebar' : 'Ciutkan sidebar'} title={sidebarCollapsed ? 'Perluas sidebar' : 'Ciutkan sidebar'}>
            {sidebarCollapsed ? <PanelLeft size={20} /> : <PanelLeftClose size={20} />}
          </button>
          <div className="search-box" role="search" aria-label="Pencarian">
            <Search size={16} />
            <input type="text" placeholder="Cari materi..." readOnly aria-label="Cari materi" />
          </div>
          <div className="user-info">
            <StreakCounter streak={streak.count} />
            <DarkModeToggle />
            <div className="progress-badge">
              <Trophy size={16} />
              <span>{totalScore}</span> pts
            </div>
            <div className="avatar"><User size={18} /></div>
          </div>
        </header>

        {path === '/' ? null : (
          <div className="page-header">
            <div className="breadcrumb">
              <NavLink to="/">Dashboard</NavLink>
              <span className="sep">/</span>
              <span>{pageTitles[path] || ''}</span>
            </div>
            <h1>{pageTitles[path] || ''}</h1>
            <p>{pageDescriptions[path] || ''}</p>
          </div>
        )}

        <Outlet />
      </main>
    </div>
  );
}
