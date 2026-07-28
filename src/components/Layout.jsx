import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import DarkModeToggle from './DarkModeToggle';
import StreakCounter from './StreakCounter';
import {
  Home, Server, Projector, CreditCard, Briefcase,
  ClipboardCheck, FileText, BarChart3, Menu, X, Trophy, User, Search,
  Network, Puzzle, BookOpen, BookA
} from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Dashboard' },
  { to: '/modul1', icon: Server, label: 'Modul 1: Peralatan Jaringan' },
  { to: '/modul2', icon: Projector, label: 'Modul 2: Topologi Jaringan' },
  { to: '/modul3', icon: CreditCard, label: 'Modul 3: Pengalamatan Jaringan' },
  { to: '/flashcard', icon: BookOpen, label: 'Flashcard' },
  { to: '/dragdrop', icon: Puzzle, label: 'Drag & Drop Subnetting' },
  { to: '/kasus', icon: Briefcase, label: 'Studi Kasus' },
  { to: '/pretest', icon: ClipboardCheck, label: 'Pre-Test' },
  { to: '/posttest', icon: FileText, label: 'Post-Test' },
  { to: '/glossary', icon: BookA, label: 'Glossarium' },
  { to: '/hasil', icon: BarChart3, label: 'Hasil & Sertifikat' },
];

const pageTitles = {
  '/': 'Dashboard', '/modul1': 'Modul 1: Peralatan Jaringan',
  '/modul2': 'Modul 2: Topologi Jaringan', '/modul3': 'Modul 3: Pengalamatan Jaringan',
  '/flashcard': 'Flashcard Interaktif', '/dragdrop': 'Drag & Drop Subnetting',
  '/kasus': 'Studi Kasus', '/pretest': 'Pre-Test', '/posttest': 'Post-Test',
  '/glossary': 'Glossarium Jaringan', '/hasil': 'Hasil & Sertifikat',
};

const pageDescriptions = {
  '/': 'Media Pembelajaran Perencanaan & Pengalamatan Jaringan',
  '/modul1': 'Kebutuhan teknis pengguna dan peralatan jaringan',
  '/modul2': 'Perancangan dan simulasi berbagai topologi jaringan',
  '/modul3': 'IP Address, Subnetting, CIDR, dan VLSM',
  '/dragdrop': 'Latihan interaktif drag & drop',
  '/flashcard': 'Kartu interaktif istilah jaringan komputer',
  '/kasus': 'Terapkan pemahaman dalam permasalahan nyata',
  '/pretest': 'Uji pemahaman awal sebelum mempelajari materi',
  '/posttest': 'Evaluasi pemahaman setelah belajar. Target: ≥70',
  '/glossary': 'Daftar istilah penting dalam jaringan komputer',
  '/hasil': 'Ringkasan, pencapaian, dan sertifikat',
};

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { totalScore, streak } = useApp();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="app-layout">
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      <nav className={`sidebar ${sidebarOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Network size={24} />
            <span>JarkomLab</span>
          </div>
          <button className="sidebar-close-mobile" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <ul className="nav-menu">
          {navItems.map(({ to, icon: Icon, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}>
                <Icon size={18} /><span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)}>
            <Menu size={22} />
          </button>
          <div className="search-box">
            <Search size={16} />
            <input type="text" placeholder="Cari materi..." readOnly />
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
