import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Home, Server, Projector, CreditCard, Briefcase,
  ClipboardCheck, FileText, BarChart3, Menu, X, Trophy, User, Search
} from 'lucide-react';

const navItems = [
  { to: '/', icon: Home, label: 'Dashboard' },
  { to: '/modul1', icon: Server, label: 'Modul 1: Peralatan Jaringan' },
  { to: '/modul2', icon: Projector, label: 'Modul 2: Topologi Jaringan' },
  { to: '/modul3', icon: CreditCard, label: 'Modul 3: Pengalamatan Jaringan' },
  { to: '/kasus', icon: Briefcase, label: 'Studi Kasus' },
  { to: '/pretest', icon: ClipboardCheck, label: 'Pre-Test' },
  { to: '/posttest', icon: FileText, label: 'Post-Test' },
  { to: '/hasil', icon: BarChart3, label: 'Hasil Penilaian' },
];

const pageTitles = {
  '/': 'Dashboard',
  '/modul1': 'Modul 1: Peralatan Jaringan',
  '/modul2': 'Modul 2: Topologi Jaringan',
  '/modul3': 'Modul 3: Pengalamatan Jaringan',
  '/kasus': 'Studi Kasus',
  '/pretest': 'Pre-Test',
  '/posttest': 'Post-Test',
  '/hasil': 'Hasil Penilaian',
};

const pageDescriptions = {
  '/': 'Media Pembelajaran Perencanaan & Pengalamatan Jaringan',
  '/modul1': 'Kebutuhan teknis pengguna dan peralatan jaringan dengan teknologi yang sesuai',
  '/modul2': 'Perancangan dan simulasi berbagai topologi jaringan komputer',
  '/modul3': 'IP Address, Subnetting, CIDR, dan VLSM',
  '/kasus': 'Terapkan pemahaman dalam menyelesaikan permasalahan jaringan nyata',
  '/pretest': 'Uji pemahaman awal sebelum mempelajari materi',
  '/posttest': 'Evaluasi pemahaman setelah mempelajari materi. Target minimum: 70',
  '/hasil': 'Ringkasan hasil pre-test, post-test, dan progres belajar',
};

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { totalScore } = useApp();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="app-layout">
      {/* Mobile overlay */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <nav className={`sidebar ${sidebarOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <Server size={24} />
            <span>JarkomLab</span>
          </div>
          <button className="sidebar-close-mobile" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>
        <ul className="nav-menu">
          {navItems.map(({ to, icon: Icon, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main */}
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
            <div className="progress-badge">
              <Trophy size={16} />
              <span>{totalScore}</span> pts
            </div>
            <div className="avatar">
              <User size={18} />
            </div>
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
