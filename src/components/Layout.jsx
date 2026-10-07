import { useState } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { UJIAN_KKA_TOTAL, UJIAN_KKA_SOAL_PER_ELEMEN } from '../data/kka/ujianKKA.js';
import { UJIAN_KKA_XI_TOTAL, UJIAN_KKA_XI_SOAL_PER_MODUL } from '../data/kka-xi/ujianKKAXI.js';
import { PRETEST_KKA_XI_TOTAL, PRETEST_KKA_XI_SOAL_PER_MODUL } from '../data/kka-xi/pretestKKAXI.js';
import { PRETEST_KKA_TOTAL, PRETEST_KKA_SOAL_PER_ELEMEN } from '../data/kka/pretestKKA.js';
import { PRETEST_MPK1_TOTAL, PRETEST_MPK1_SOAL_PER_MODUL } from '../data/mpk1/pretestMPK1.js';
import { MODUL_POSTTEST_SOAL_PER_MODUL } from '../data/modulPostTests.js';
import DarkModeToggle from './DarkModeToggle';
import StreakCounter from './StreakCounter';
import {
  Home, Server, Projector, CreditCard, Briefcase,
  ClipboardCheck, FileText, BarChart3, Menu, X, Trophy, User, Search, ClipboardList,
  Network, Puzzle, BookOpen, BookA, Zap, FileDown, PanelLeftClose, PanelLeft,
  ArrowLeft, Globe, Shield, Radio, Ruler, Wifi, Phone, Circle,
  Wrench, Signal, Antenna, Layers, Code2, Brain, MonitorSmartphone, Terminal,
  Bot
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
      { to: '/mpk1/pretest', icon: ClipboardCheck, label: `Pre-Test (3 x ${PRETEST_MPK1_SOAL_PER_MODUL} soal)` },
      { to: '/mpk1/posttest', icon: ClipboardCheck, label: `Post Test (3 x ${MODUL_POSTTEST_SOAL_PER_MODUL} soal)` },
      { to: '/mpk1/osi-layer', icon: Layers, label: 'Layer OSI' },
      { to: '/mpk1/modul-ajar', icon: FileText, label: 'Modul Ajar' },
      { to: '/mpk1/flashcard', icon: BookOpen, label: 'Flashcard' },
      { to: '/mpk1/simulator', icon: Network, label: 'Simulator Jaringan' },
      { to: '/mpk1/dragdrop', icon: Puzzle, label: 'Drag & Drop Subnetting' },
      { to: '/mpk1/challenge', icon: Zap, label: 'Latihan Cepat' },
      { to: '/mpk1/kasus', icon: Briefcase, label: 'Studi Kasus' },
      { to: '/mpk1/worksheet', icon: FileDown, label: 'Lembar Kerja' },
      { to: '/mpk1/glossary', icon: BookA, label: 'Glossarium' },
      { to: '/mpk1/hasil', icon: BarChart3, label: 'Hasil & Sertifikat' },
    ],
    titles: {
      '/mpk1': 'Dashboard',       '/mpk1/modul1': 'Modul 1: Peralatan Jaringan',
      '/mpk1/modul2': 'Modul 2: Topologi Jaringan',
      '/mpk1/modul3': 'Modul 3: Pengalamatan Jaringan',
      '/mpk1/pretest': 'Pre-Test MPK 1',
      '/mpk1/posttest': 'Post Test MPK 1',
      '/mpk1/osi-layer': 'Layer OSI',
      '/mpk1/modul-ajar': 'Modul Ajar',
      '/mpk1/flashcard': 'Flashcard Interaktif', '/mpk1/simulator': 'Simulator Jaringan',
      '/mpk1/dragdrop': 'Drag & Drop Subnetting', '/mpk1/challenge': 'Latihan Cepat',
      '/mpk1/kasus': 'Studi Kasus',
      '/mpk1/worksheet': 'Lembar Kerja', '/mpk1/glossary': 'Glossarium Jaringan',
      '/mpk1/hasil': 'Hasil & Sertifikat',
    },
    descs: {
      '/mpk1': 'Media Pembelajaran Perencanaan & Pengalamatan Jaringan',
      '/mpk1/modul1': 'Kebutuhan teknis pengguna dan peralatan jaringan',
      '/mpk1/modul2': 'Perancangan dan simulasi berbagai topologi jaringan',
      '/mpk1/modul3': 'IP Address, Subnetting, CIDR, dan VLSM',
      '/mpk1/pretest': `Pre-Test MPK 1 — 3 Pre-Test per Modul (${PRETEST_MPK1_TOTAL} Soal)`,
      '/mpk1/posttest': `Evaluasi akhir tiap modul — 3 x ${MODUL_POSTTEST_SOAL_PER_MODUL} soal HOTS. Sertifikat bila rerata ≥70`,
      '/mpk1/osi-layer': 'Model referensi OSI: 7 layer, enkapsulasi, dan TCP/IP',
      '/mpk1/modul-ajar': 'Modul Ajar Perencanaan & Pengalamatan Jaringan — Fase F',
      '/mpk1/flashcard': 'Kartu interaktif istilah jaringan komputer',
      '/mpk1/simulator': 'Simulasi jaringan drag & drop',
      '/mpk1/dragdrop': 'Latihan interaktif drag & drop',
      '/mpk1/challenge': 'Latihan cepat subnetting melawan waktu',
      '/mpk1/kasus': 'Terapkan pemahaman dalam permasalahan nyata',
      '/mpk1/worksheet': 'Lembar kerja praktik offline',
      '/mpk1/glossary': 'Daftar istilah penting dalam jaringan komputer',
      '/mpk1/hasil': 'Ringkasan, pencapaian, dan sertifikat',
    },
  },
  dkk: {
    prefix: '/dkk',
    label: 'DKK',
    logo: Globe,
    title: 'Dasar Kompetensi Keahlian',
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
      { to: '/dkk/uts', icon: FileText, label: 'UTS' },
      { to: '/dkk/rekap', icon: ClipboardList, label: 'Rekap Nilai (Guru)' },
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
      '/dkk/uts': 'UTS DKK',
      '/dkk/worksheet': 'Lembar Kerja DKK',
      '/dkk/glossary': 'Glossarium DKK',
      '/dkk/hasil': 'Hasil & Sertifikat DKK',
    },
    descs: {
      '/dkk': 'Media Pembelajaran Dasar Kompetensi Keahlian',
      '/dkk/elemen1': 'Profesi, sertifikasi, dan peluang karir di bidang TJKT',
      '/dkk/elemen2': 'APD, prosedur keselamatan, dan budaya kerja 5S',
      '/dkk/elemen3': 'Media transmisi kabel, nirkabel, dan jaringan telekomunikasi',
      '/dkk/elemen4': 'Multimeter, cable tester, OTDR, dan spectrum analyzer',
      '/dkk/flashcard': 'Kartu interaktif istilah Dasar Kompetensi Keahlian',
      '/dkk/challenge': 'Latihan cepat DKK melawan waktu',
      '/dkk/kasus': 'Terapkan pemahaman DKK dalam permasalahan nyata',
      '/dkk/pretest': 'Uji pemahaman awal DKK',
      '/dkk/uts': 'Ujian Tengah Semester DKK — seluruh materi diuji sekaligus',
      '/dkk/worksheet': 'Lembar kerja praktik offline DKK',
      '/dkk/glossary': 'Daftar istilah penting dalam DKK',
      '/dkk/hasil': 'Ringkasan, pencapaian, dan sertifikat DKK',
      '/dkk/rekap': 'Rekap nilai UTS DKK untuk guru. Filter, statistik, ekspor CSV, dan cetak',
    },
  },
  kka: {
    prefix: '/kka',
    label: 'KKA',
    logo: Code2,
    title: 'Koding dan Kecerdasan Artifisial',
    items: [
      { to: '/kka', icon: Home, label: 'Dashboard' },
      { to: '/kka/elemen1', icon: Brain, label: 'Elemen 1: Berpikir Komputasional' },
      { to: '/kka/elemen2', icon: MonitorSmartphone, label: 'Elemen 2: Literasi Digital' },
      { to: '/kka/elemen3', icon: Terminal, label: 'Elemen 3: Algoritma Pemrograman' },
      { to: '/kka/elemen4', icon: BarChart3, label: 'Elemen 4: Analisis Data' },
      { to: '/kka/elemen5', icon: Brain, label: 'Elemen 5: Literasi & Etika AI' },
      { to: '/kka/flashcard', icon: BookOpen, label: 'Flashcard' },
      { to: '/kka/challenge', icon: Zap, label: 'Latihan Cepat' },
      { to: '/kka/pretest', icon: ClipboardCheck, label: `Pre-Test (5 x ${PRETEST_KKA_SOAL_PER_ELEMEN} soal)` },
      { to: '/kka/ujian', icon: ClipboardCheck, label: `Ujian KKA (5 x ${UJIAN_KKA_SOAL_PER_ELEMEN} soal)` },
      { to: '/kka/rekap', icon: ClipboardList, label: 'Rekap Nilai (Guru)' },
      { to: '/kka/hasil', icon: BarChart3, label: 'Hasil & Sertifikat' },
      { to: '/kka/kasus', icon: Briefcase, label: 'Studi Kasus' },
      { to: '/kka/worksheet', icon: FileDown, label: 'Lembar Kerja' },
      { to: '/kka/glossary', icon: BookA, label: 'Glossarium' },
      { to: '/kka/codeblocks', icon: Puzzle, label: 'CodeBlocks Puzzle' },
      { to: '/kka/ai-human', icon: Bot, label: 'AI atau Manusia?' },
    ],
    titles: {
      '/kka': 'Dashboard KKA',
      '/kka/elemen1': 'Elemen 1: Berpikir Komputasional',
      '/kka/elemen2': 'Elemen 2: Literasi Digital',
      '/kka/elemen3': 'Elemen 3: Algoritma Pemrograman',
      '/kka/elemen4': 'Elemen 4: Analisis Data',
      '/kka/elemen5': 'Elemen 5: Literasi & Etika Kecerdasan Artifisial',
      '/kka/flashcard': 'Flashcard Interaktif KKA',
      '/kka/challenge': 'Latihan Cepat KKA',
      '/kka/pretest': `Pre-Test KKA — 5 Pre-Test per Elemen (${PRETEST_KKA_TOTAL} Soal)`,
      '/kka/ujian': `Ujian KKA — 5 Ujian per Elemen (${UJIAN_KKA_TOTAL} Soal)`,
      '/kka/rekap': 'Rekap Nilai Ujian KKA (Guru)',
      '/kka/hasil': 'Hasil & Sertifikat KKA',
      '/kka/kasus': 'Studi Kasus KKA',
      '/kka/worksheet': 'Lembar Kerja KKA',
      '/kka/glossary': 'Glossarium KKA',
      '/kka/codeblocks': 'CodeBlocks Puzzle KKA',
      '/kka/ai-human': 'Game AI atau Manusia?',
    },
    descs: {
      '/kka': 'Media Pembelajaran Koding dan Kecerdasan Artifisial',
      '/kka/elemen1': 'Dekomposisi, pengenalan pola, abstraksi, dan algoritma',
      '/kka/elemen2': 'Etika, keamanan, dan kolaborasi di dunia digital',
      '/kka/elemen3': 'Flowchart, pseudocode, percabangan, perulangan, dan Python',
      '/kka/elemen4': 'Pengolahan data, statistik dasar, dan visualisasi data',
      '/kka/elemen5': 'Konsep AI, etika penggunaan, dan bias',
      '/kka/flashcard': 'Kartu interaktif istilah Koding dan Kecerdasan Artifisial',
      '/kka/challenge': 'Latihan cepat KKA melawan waktu',
      '/kka/pretest': `Uji pemahaman awal per elemen: ${PRETEST_KKA_SOAL_PER_ELEMEN} soal tiap elemen (${PRETEST_KKA_TOTAL} soal), lengkap dengan tingkat kesulitan`,
      '/kka/ujian': `Lima ujian mandiri ${UJIAN_KKA_SOAL_PER_ELEMEN} soal per elemen, dengan token guru, identitas, timer, dan anti-contek`,
      '/kka/rekap': 'Rekap nilai Ujian KKA per siswa (khusus guru)',
      '/kka/hasil': 'Ringkasan, pencapaian, dan sertifikat KKA',
      '/kka/kasus': 'Terapkan pemahaman KKA dalam permasalahan nyata',
      '/kka/worksheet': 'Lembar kerja praktik offline KKA',
      '/kka/glossary': 'Daftar istilah penting dalam KKA',
      '/kka/codeblocks': 'Game susun blok kode Python',
      '/kka/ai-human': 'Tebak konten buatan AI atau manusia',
    },
  },
  mpk2: {
    prefix: '/mpk2',
    label: 'MPK 2',
    logo: Wifi,
    title: 'Teknologi Jaringan Kabel dan Nirkabel',
    items: [
      { to: '/mpk2', icon: Home, label: 'Dashboard' },
      { to: '/mpk2/modul1', icon: Wrench, label: 'Modul 1: Instalasi & Perawatan Jaringan' },
      { to: '/mpk2/modul2', icon: Signal, label: 'Modul 2: Dasar Jaringan Nirkabel' },
      { to: '/mpk2/modul3', icon: Antenna, label: 'Modul 3: Instalasi Perangkat Nirkabel' },
      { to: '/mpk2/modul4', icon: Phone, label: 'Modul 4: Voice over IP (VoIP)' },
      { to: '/mpk2/modul5', icon: Circle, label: 'Modul 5: Jaringan Fiber Optik' },
      { to: '/mpk2/flashcard', icon: BookOpen, label: 'Flashcard' },
      { to: '/mpk2/challenge', icon: Zap, label: 'Latihan Cepat' },
      { to: '/mpk2/kasus', icon: Briefcase, label: 'Studi Kasus' },
      { to: '/mpk2/pretest', icon: ClipboardCheck, label: 'Pre-Test' },
      { to: '/mpk2/posttest', icon: FileText, label: 'Post-Test' },
      { to: '/mpk2/worksheet', icon: FileDown, label: 'Lembar Kerja' },
      { to: '/mpk2/glossary', icon: BookA, label: 'Glossarium' },
      { to: '/mpk2/hasil', icon: BarChart3, label: 'Hasil & Sertifikat' },
    ],
    titles: {
      '/mpk2': 'Dashboard MPK 2',
      '/mpk2/modul1': 'Modul 1: Instalasi, Perawatan & Perbaikan Jaringan',
      '/mpk2/modul2': 'Modul 2: Dasar & Teknologi Jaringan Nirkabel',
      '/mpk2/modul3': 'Modul 3: Instalasi & Pengujian Perangkat Nirkabel',
      '/mpk2/modul4': 'Modul 4: Voice over Internet Protocol (VoIP)',
      '/mpk2/modul5': 'Modul 5: Jaringan Fiber Optik',
      '/mpk2/flashcard': 'Flashcard Interaktif MPK 2',
      '/mpk2/challenge': 'Latihan Cepat MPK 2',
      '/mpk2/kasus': 'Studi Kasus MPK 2',
      '/mpk2/pretest': 'Pre-Test MPK 2',
      '/mpk2/posttest': 'Post-Test MPK 2',
      '/mpk2/worksheet': 'Lembar Kerja MPK 2',
      '/mpk2/glossary': 'Glossarium MPK 2',
      '/mpk2/hasil': 'Hasil & Sertifikat MPK 2',
    },
    descs: {
      '/mpk2': 'Media Pembelajaran Teknologi Jaringan Kabel dan Nirkabel',
      '/mpk2/modul1': 'Instalasi, perawatan, dan perbaikan jaringan kabel serta nirkabel',
      '/mpk2/modul2': 'Konsep dasar, standar, dan teknologi jaringan nirkabel',
      '/mpk2/modul3': 'Instalasi, konfigurasi, dan pengujian perangkat nirkabel',
      '/mpk2/modul4': 'Konsep VoIP, perangkat, dan konfigurasinya',
      '/mpk2/modul5': 'Fiber optik: prinsip kerja, jenis, instalasi, dan pengujian',
      '/mpk2/flashcard': 'Kartu interaktif istilah Teknologi Jaringan Kabel dan Nirkabel',
      '/mpk2/challenge': 'Latihan cepat MPK 2 melawan waktu',
      '/mpk2/kasus': 'Terapkan pemahaman MPK 2 dalam permasalahan nyata',
      '/mpk2/pretest': 'Uji pemahaman awal MPK 2',
      '/mpk2/posttest': 'Evaluasi pemahaman MPK 2. Target: ≥70',
      '/mpk2/worksheet': 'Lembar kerja praktik offline MPK 2',
      '/mpk2/glossary': 'Daftar istilah penting dalam Teknologi Jaringan Kabel dan Nirkabel',
      '/mpk2/hasil': 'Ringkasan, pencapaian, dan sertifikat MPK 2',
    },
  },
  kkaXi: {
    prefix: '/kka-xi',
    label: 'KKA XI',
    logo: Code2,
    title: 'Koding & Kecerdasan Artifisial XI',
    items: [
      { to: '/kka-xi', icon: Home, label: 'Dashboard' },
      { to: '/kka-xi/modul1', icon: Globe, label: 'Modul 1: Menyaring Fakta & Identitas Digital' },
      { to: '/kka-xi/modul2', icon: Brain, label: 'Modul 2: Algoritma & Struktur Data' },
      { to: '/kka-xi/modul3', icon: Terminal, label: 'Modul 3: Algoritma Pemrograman' },
      { to: '/kka-xi/modul4', icon: Code2, label: 'Modul 4: Pengembangan Web' },
      { to: '/kka-xi/flashcard', icon: BookOpen, label: 'Flashcard' },
      { to: '/kka-xi/challenge', icon: Zap, label: 'Latihan Cepat' },
      { to: '/kka-xi/kasus', icon: Briefcase, label: 'Studi Kasus' },
      { to: '/kka-xi/pretest', icon: ClipboardCheck, label: `Pre-Test (4 x ${PRETEST_KKA_XI_SOAL_PER_MODUL} soal)` },
      { to: '/kka-xi/ujian', icon: ClipboardCheck, label: `Ujian KKA XI (4 x ${UJIAN_KKA_XI_SOAL_PER_MODUL} soal)` },
      { to: '/kka-xi/rekap', icon: ClipboardList, label: 'Rekap Nilai (Guru)' },
      { to: '/kka-xi/worksheet', icon: FileDown, label: 'Lembar Kerja' },
      { to: '/kka-xi/glossary', icon: BookA, label: 'Glossarium' },
      { to: '/kka-xi/hasil', icon: BarChart3, label: 'Hasil & Sertifikat' },
    ],
    titles: {
      '/kka-xi': 'Dashboard KKA XI',
      '/kka-xi/modul1': 'Modul 1: Menyaring Fakta, Identitas Digital & Kolaborasi Konten',
      '/kka-xi/modul2': 'Modul 2: Pengembangan Algoritma dan Struktur Data',
      '/kka-xi/modul3': 'Modul 3: Algoritma Pemrograman',
      '/kka-xi/modul4': 'Modul 4: Pengembangan Web yang Responsif dan Interaktif',
      '/kka-xi/flashcard': 'Flashcard Interaktif KKA XI',
      '/kka-xi/challenge': 'Latihan Cepat KKA XI',
      '/kka-xi/kasus': 'Studi Kasus KKA XI',
      '/kka-xi/pretest': `Pre-Test KKA XI — 4 Pre-Test per Modul (${PRETEST_KKA_XI_TOTAL} Soal)`,
      '/kka-xi/ujian': `Ujian KKA XI — 4 Ujian per Modul (${UJIAN_KKA_XI_TOTAL} Soal)`,
      '/kka-xi/rekap': 'Rekap Nilai Ujian KKA XI (Guru)',
      '/kka-xi/worksheet': 'Lembar Kerja KKA XI',
      '/kka-xi/glossary': 'Glossarium KKA XI',
      '/kka-xi/hasil': 'Hasil & Sertifikat KKA XI',
    },
    descs: {
      '/kka-xi': 'Media Pembelajaran Koding & Kecerdasan Artifisial XI',
      '/kka-xi/modul1': 'Verifikasi hoaks, identitas digital sebagai fondasi reputasi, dan kolaborasi kreasi konten',
      '/kka-xi/modul2': 'Array, linked list, stack, queue, sorting, searching, Big O',
      '/kka-xi/modul3': 'Variabel, percabangan, perulangan, fungsi, debugging',
      '/kka-xi/modul4': 'HTML, CSS, JavaScript, responsive design, DOM manipulation',
      '/kka-xi/flashcard': 'Kartu interaktif istilah Koding & Kecerdasan Artifisial XI',
      '/kka-xi/challenge': 'Latihan cepat KKA XI melawan waktu',
      '/kka-xi/kasus': 'Terapkan pemahaman KKA XI dalam permasalahan nyata',
      '/kka-xi/pretest': `Uji pemahaman awal per modul. ${PRETEST_KKA_XI_SOAL_PER_MODUL} soal tiap modul, tingkat mudah, sedang, dan sulit`,
      '/kka-xi/ujian': 'Ujian KKA XI per modul. Token guru, identitas, timer, dan submit sekali per modul',
      '/kka-xi/rekap': 'Rekap nilai Ujian KKA XI untuk guru. Filter, statistik, ekspor CSV, dan cetak',
      '/kka-xi/worksheet': 'Lembar kerja praktik offline KKA XI',
      '/kka-xi/glossary': 'Daftar istilah penting dalam Koding & Kecerdasan Artifisial XI',
      '/kka-xi/hasil': 'Ringkasan, pencapaian, dan sertifikat KKA XI',
    },
  },
};

function getSubject(path) {
  if (path.startsWith('/dkk')) return subjects.dkk;
  if (path.startsWith('/kka-xi')) return subjects.kkaXi;
  if (path.startsWith('/kka')) return subjects.kka;
  if (path.startsWith('/mpk2')) return subjects.mpk2;
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

  // Rute dinamis (mis. /kka-xi/pretest/modul3) mewarisi judul & deskripsi induknya.
  const basePath = ['/kka/ujian/', '/kka/pretest/', '/kka-xi/ujian/', '/kka-xi/pretest/', '/mpk1/pretest/', '/mpk1/posttest/']
    .find(p => path.startsWith(p))?.slice(0, -1) || path;
  const pageTitle = titles[path] || titles[basePath] || '';
  const pageDesc = descs[path] || descs[basePath] || '';

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
              <Link to="/">Portal</Link>
              <span className="sep">/</span>
              <Link to={prefix}>{label}</Link>
              {path !== prefix && (
                <><span className="sep">/</span><span>{pageTitle}</span></>
              )}
            </div>
            <h1>{pageTitle}</h1>
            <p>{pageDesc}</p>
          </div>
        )}

        <Outlet />
      </main>
    </div>
  );
}
