import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import DarkModeToggle from './DarkModeToggle';
import StreakCounter from './StreakCounter';
import {
  Home, Server, Projector, CreditCard, Briefcase,
  ClipboardCheck, FileText, BarChart3, Menu, X, Trophy, User, Search,
  Network, Puzzle, BookOpen, BookA, Zap, FileDown, PanelLeftClose, PanelLeft,
  ArrowLeft, Globe, Shield, Radio, Ruler
} from 'lucide-react';

const subjects = {
  mpk1: {
    prefix: '/mpk1',
    label: 'MPK 1',
    logo: Network,
    title: 'Perencanaan & Pengalamatan Jaringan',
    items: [
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
    ],
    titles: {
      '/mpk1': 'Dashboard', '/mpk1/modul1': 'Modul 1: Peralatan Jaringan',
      '/mpk1/modul2': 'Modul 2: Topologi Jaringan', '/mpk1/modul3': 'Modul 3: Pengalamatan Jaringan',
      '/mpk1/modul-ajar': 'Modul Ajar',
      '/mpk1/flashcard': 'Flashcard Interaktif', '/mpk1/simulator': 'Simulator Jaringan',
      '/mpk1/dragdrop': 'Drag & Drop Subnetting', '/mpk1/challenge': 'Latihan Cepat',
      '/mpk1/kasus': 'Studi Kasus', '/mpk1/pretest': 'Pre-Test', '/mpk1/posttest': 'Post-Test',
      '/mpk1/worksheet': 'Lembar Kerja', '/mpk1/glossary': 'Glossarium Jaringan',
      '/mpk1/hasil': 'Hasil & Sertifikat',
    },
    descs: {
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
    },
  },
  dkk: {
    prefix: '/dkk',
    label: 'DKK',
    logo: Globe,
    title: 'Dasar Keahlian Komunikasi',
    items: [
      { to: '/dkk', icon: Home, label: 'Dashboard' },
      { to: '/dkk/elemen1', icon: Globe, label: 'Elemen 1: Wawasan Dunia Kerja' },
      { to: '/dkk/elemen2', icon: Shield, label: 'Elemen 2: K3LH & Budaya Kerja' },
      { to: '/dkk/elemen3', icon: Radio, label: 'Elemen 3: Media & Jaringan Telekom' },
      { to: '/dkk/elemen4', icon: Ruler, label: 'Elemen 4: Pengukuran Alat' },
      { to: '/dkk/flashcard', icon: BookOpen, label: 'Flashcard' },
      { to: '/dkk/challenge', icon: Zap, label: 'Latihan Cepat' },
      { to: '/dkk/kasus', icon: Briefcase, label: 'Studi Kasus' },
      { to: '/dkk/pretest', icon: ClipboardCheck, label: 'Pre-Test' },
      { to: '/dkk/posttest', icon: FileText, label: 'Post-Test' },
      { to: '/dkk/worksheet', icon: FileDown, label: 'Lembar Kerja' },
      { to: '/dkk/glossary', icon: BookA, label: 'Glossarium' },
      { to: '/dkk/hasil', icon: BarChart3, label: 'Hasil & Sertifikat' },
    ],
    titles: {
      '/dkk': 'Dashboard DKK',
      '/dkk/elemen1': 'Elemen 1: Wawasan Dunia Kerja TJKT',
      '/dkk/elemen2': 'Elemen 2: Kecakapan Kerja Dasar, K3LH & Budaya Kerja',
      '/dkk/elemen3': 'Elemen 3: Media & Jaringan Telekomunikasi',
      '/dkk/elemen4': 'Elemen 4: Pengukuran Alat Telekomunikasi',
      '/dkk/flashcard': 'Flashcard Interaktif DKK',
      '/dkk/challenge': 'Latihan Cepat DKK',
      '/dkk/kasus': 'Studi Kasus DKK',
      '/dkk/pretest': 'Pre-Test DKK',
      '/dkk/posttest': 'Post-Test DKK',
      '/dkk/worksheet': 'Lembar Kerja DKK',
      '/dkk/glossary': 'Glossarium DKK',
      '/dkk/hasil': 'Hasil & Sertifikat DKK',
    },
    descs: {
      '/dkk': 'Media Pembelajaran Dasar Keahlian Komunikasi',
      '/dkk/elemen1': 'Profesi, sertifikasi, dan peluang karir di bidang TJKT',
      '/dkk/elemen2': 'APD, prosedur keselamatan, dan budaya kerja 5S',
      '/dkk/elemen3': 'Media transmisi kabel, nirkabel, dan jaringan telekomunikasi',
      '/dkk/elemen4': 'Multimeter, cable tester, OTDR, dan spectrum analyzer',
      '/dkk/flashcard': 'Kartu interaktif istilah Dasar Keahlian Komunikasi',
      '/dkk/challenge': 'Latihan cepat DKK melawan waktu',
      '/dkk/kasus': 'Terapkan pemahaman DKK dalam permasalahan nyata',
      '/dkk/pretest': 'Uji pemahaman awal DKK',
      '/dkk/posttest': 'Evaluasi pemahaman DKK. Target: ≥70',
      '/dkk/worksheet': 'Lembar kerja praktik offline DKK',
      '/dkk/glossary': 'Daftar istilah penting dalam DKK',
      '/dkk/hasil': 'Ringkasan, pencapaian, dan sertifikat DKK',
    },
  },
};

function getSubject(path) {
  if (path.startsWith('/dkk')) return subjects.dkk;
  return subjects.mpk1;
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { totalScore, streak } = useApp();
  const location = useLocation();
  const path = location.pathname;
  const subject = getSubject(path);
  const { prefix, label, logo: Logo, items, titles, descs } = subject;
  const isDashboard = path === prefix;

  return (
    <div className={`app-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} role="button" tabIndex={0} aria-label="Tutup menu navigasi" onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSidebarOpen(false); }}} />}

      <nav className={`sidebar ${sidebarOpen ? 'mobile-open' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`} aria-label="Navigasi utama">
        <div className="sidebar-header">
          <div className="logo">
            <Logo size={24} />
            <span>{label}</span>
          </div>
          <button className="sidebar-close-mobile" onClick={() => setSidebarOpen(false)} aria-label="Tutup menu navigasi">
            <X size={20} />
          </button>
        </div>
        <ul className="nav-menu" role="list">
          <li role="listitem">
            <NavLink to="/" className="nav-link back-link"
              onClick={() => setSidebarOpen(false)} title={sidebarCollapsed ? 'Portal' : undefined}>
              <ArrowLeft size={18} /><span>Portal</span>
            </NavLink>
          </li>
          {items.map(({ to, icon: Icon, label: navLabel }) => (
            <li key={to} role="listitem">
              <NavLink to={to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)} title={sidebarCollapsed ? navLabel : undefined}>
                <Icon size={18} /><span>{navLabel}</span>
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
            <div className="avatar" aria-hidden="true"><User size={18} /></div>
          </div>
        </header>

        {isDashboard ? null : (
          <div className="page-header">
            <div className="breadcrumb">
              <NavLink to="/">Portal</NavLink>
              <span className="sep">/</span>
              <NavLink to={prefix}>{label}</NavLink>
              {path !== prefix && (
                <><span className="sep">/</span><span>{titles[path] || ''}</span></>
              )}
            </div>
            <h1>{titles[path] || ''}</h1>
            <p>{descs[path] || ''}</p>
          </div>
        )}

        <Outlet />
      </main>
    </div>
  );
}
