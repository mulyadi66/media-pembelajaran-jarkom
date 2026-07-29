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
  { to: '/mpk1', icon: Home, label: 'Dashboard' },
  { to: '/mpk1/modul1', icon: Server, label: 'Modul 1: Peralatan Jaringan' },
  { to: '/mpk1/modul2', icon: Projector, label: 'Modul 2: Topologi Jaringan' },
  { to: '/mpk1/modul3', icon: CreditCard, label: 'Modul 3: Pengalamatan Jaringan' },
  { to: '/mpk1/modul-ajar', icon: FileText, label: 'Modul Ajar' },
  { to: '/mpk1/flashcard', icon: BookOpen, label: 'Flashcard' },
  { to: '/mpk1/simulator', icon: Network, label: 'Simulator Jaringan' },
  { to: '/mpk1/dragdrop', icon: Puzzle, label: 'Drag & Drop Subnetting' },
  { to: '/mpk1/challenge', icon: Zap, label: 'Latihan Cepat' },
  { to: '/mpk1/kasus', icon: Briefcase, label: 'Studi Kasus' },
  { to: '/mpk1/pretest', icon: ClipboardCheck, label: 'Pre-Test' },
  { to: '/mpk1/posttest', icon: FileText, label: 'Post-Test' },
  { to: '/mpk1/worksheet', icon: FileDown, label: 'Lembar Kerja' },
  { to: '/mpk1/glossary', icon: BookA, label: 'Glossarium' },
  { to: '/mpk1/hasil', icon: BarChart3, label: 'Hasil & Sertifikat' },
];

const pageTitles = {
  '/mpk1': 'Dashboard', '/mpk1/modul1': 'Modul 1: Peralatan Jaringan',
  '/mpk1/modul2': 'Modul 2: Topologi Jaringan', '/mpk1/modul3': 'Modul 3: Pengalamatan Jaringan',
  '/mpk1/modul-ajar': 'Modul Ajar',
  '/mpk1/flashcard': 'Flashcard Interaktif', '/mpk1/simulator': 'Simulator Jaringan',
  '/mpk1/dragdrop': 'Drag & Drop Subnetting', '/mpk1/challenge': 'Latihan Cepat',
  '/mpk1/kasus': 'Studi Kasus', '/mpk1/pretest': 'Pre-Test', '/mpk1/posttest': 'Post-Test',
  '/mpk1/worksheet': 'Lembar Kerja', '/mpk1/glossary': 'Glossarium Jaringan',
  '/mpk1/hasil': 'Hasil & Sertifikat',
};

const pageDescriptions = {
  '/mpk1': 'Media Pembelajaran Perencanaan & Pengalamatan Jaringan',
  '/mpk1/modul1': 'Kebutuhan teknis pengguna dan peralatan jaringan',
  '/mpk1/modul2': 'Perancangan dan simulasi berbagai topologi jaringan',
  '/mpk1/modul3': 'IP Address, Subnetting, CIDR, dan VLSM',
  '/mpk1/modul-ajar': 'Modul Ajar Perencanaan & Pengalamatan Jaringan — Fase F',
  '/mpk1/flashcard': 'Kartu interaktif istilah jaringan komputer',
  '/mpk1/simulator': 'Simulasi jaringan drag & drop',
  '/mpk1/dragdrop': 'Latihan interaktif drag & drop',
  '/mpk1/challenge': 'Latihan cepat subnetting melawan waktu',
  '/mpk1/kasus': 'Terapkan pemahaman dalam permasalahan nyata',
  '/mpk1/pretest': 'Uji pemahaman awal sebelum mempelajari materi',
  '/mpk1/posttest': 'Evaluasi pemahaman setelah belajar. Target: ≥70',
  '/mpk1/worksheet': 'Lembar kerja praktik offline',
  '/mpk1/glossary': 'Daftar istilah penting dalam jaringan komputer',
  '/mpk1/hasil': 'Ringkasan, pencapaian, dan sertifikat',
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
            <span>MPK 1</span>
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

        {path === '/mpk1' ? null : (
          <div className="page-header">
            <div className="breadcrumb">
              <NavLink to="/">Portal</NavLink>
              <span className="sep">/</span>
              <NavLink to="/mpk1">MPK 1</NavLink>
              {path !== '/mpk1' && (
                <><span className="sep">/</span><span>{pageTitles[path] || ''}</span></>
              )}
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
