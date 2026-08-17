import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, Layout, Smartphone, Paintbrush, Rocket, GitBranch, Puzzle, Server, Target, Award, Lightbulb, AlertTriangle, ExternalLink } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';
import { ContohSoal, Tugas } from '../../components/ContohSoal';

const sections = [
  { id: 's1', label: 'A. Pengembangan Web Responsif & Interaktif' },
  { id: 's2', label: 'B. Deploy Web push GitHub & Vercel' },
  { id: 's3', label: 'C. Proyek Mini Website' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Modul4KKAXI() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_xi_modul4'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_xi_modul4" sections={sections} />

      {/* ================================================================ */}
      {/*  A. PENGEMBANGAN WEB RESPONSIF & INTERAKTIF                     */}
      {/* ================================================================ */}
      <MateriCard icon={Globe} title="A. Pengembangan Web Responsif & Interaktif">

        {/* A.1 HTML5 Semantic */}
        <h4 style={{marginTop: 0}}>A.1 HTML5 Semantic — Struktur yang Bermakna</h4>
        <p>HTML5 introduced semantic elements that describe the meaning of content, not just its appearance. Search engines and screen readers can better understand your page structure.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portofolio Siswa</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <a href="#home">Beranda</a>
      <a href="#about">Tentang</a>
      <a href="#project">Proyek</a>
    </nav>
  </header>

  <main>
    <section id="home">
      <h1>Halo, Saya Budi</h1>
      <p>Siswa TJKT yang passionate di web development</p>
    </section>

    <article id="project">
      <h2>Proyek Terbaru</h2>
      <figure>
        <img src="screenshot.png" alt="Screenshot Aplikasi">
        <figcaption>Sistem Perpustakaan Digital</figcaption>
      </figure>
    </article>

    <aside>
      <h3>Skills</h3>
      <ul>
        <li>HTML5 & CSS3</li>
        <li>JavaScript ES6</li>
        <li>React Basics</li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Budi. All rights reserved.</p>
  </footer>
</body>
</html>`}
        </pre>
        <h3 style={{marginTop: 16}}>Semantic Tags Penting:</h3>
        <ul>
          <li><code>&lt;header&gt;</code> — Bagian atas halaman (logo, navigasi)</li>
          <li><code>&lt;nav&gt;</code> — Kontainer navigasi</li>
          <li><code>&lt;main&gt;</code> — Konten utama halaman (hanya 1 per halaman)</li>
          <li><code>&lt;section&gt;</code> — Bagian tematik konten</li>
          <li><code>&lt;article&gt;</code> — Konten mandiri (blog post, berita)</li>
          <li><code>&lt;aside&gt;</code> — Konten sampingan (sidebar)</li>
          <li><code>&lt;footer&gt;</code> — Bagian bawah halaman</li>
          <li><code>&lt;figure&gt;</code> dan <code>&lt;figcaption&gt;</code> — Gambar dengan caption</li>
        </ul>

        {/* A.2 CSS Flexbox & Grid */}
        <h4 style={{marginTop: 24}}>A.2 CSS Flexbox & Grid — Layout Modern</h4>
        <p><strong>Flexbox</strong> is best for one-dimensional layouts (row OR column). <strong>CSS Grid</strong> is best for two-dimensional layouts (rows AND columns).</p>
        <h3 style={{marginTop: 12}}>Flexbox Example:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`/* Navigation bar with Flexbox */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Card container - wrap cards to next row */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 300px; /* grow, shrink, basis */
  padding: 1.5rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}`}
        </pre>
        <h3 style={{marginTop: 16}}>CSS Grid Example:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`/* Portfolio grid layout */
.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

/* Sidebar + main content layout */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}

@media (max-width: 768px) {
  .dashboard {
    grid-template-columns: 1fr; /* Stack on mobile */
  }
}`}
        </pre>

        {/* A.3 JavaScript ES6+ */}
        <h4 style={{marginTop: 24}}>A.3 JavaScript ES6+ untuk Web Modern</h4>
        <p>ES6 (ECMAScript 2015) introduced many features that make JavaScript cleaner and more powerful. These are essential for modern web development.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// Arrow functions
const sapa = (nama) => \`Halo, \${nama}!\`;
const jumlah = (a, b) => a + b;

// Destructuring
const siswa = { nama: "Budi", kelas: "XI", jurusan: "TJKT" };
const { nama, kelas } = siswa; // nama="Budi", kelas="XI"

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Async/Await + Fetch
async function ambilData() {
  try {
    const res = await fetch("https://api.example.com/siswa");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Gagal mengambil data:", err);
  }
}

// Template literals
const kartu = \`
  <div class="card">
    <h3>\${siswa.nama}</h3>
    <p>Kelas \${siswa.kelas} - \${siswa.jurusan}</p>
  </div>
\`;

// Optional chaining
const alamat = siswa?.alamat?.kota ?? "Tidak diketahui";`}
        </pre>

        {/* A.4 Fetch API & localStorage */}
        <h4 style={{marginTop: 24}}>A.4 Fetch API & localStorage</h4>
        <p>Fetch API allows your website to communicate with servers and external APIs. localStorage enables data persistence in the browser.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// Fetch API - GET request
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  users.forEach(user => {
    console.log(user.name, user.email);
  });
}

// Fetch API - POST request
async function createPost(title, body) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, userId: 1 }),
  });
  return await res.json();
}

// localStorage - Simpan & ambil data
localStorage.setItem("username", "budi_tjkt");
const username = localStorage.getItem("username");
localStorage.removeItem("username");

// localStorage dengan JSON
const todos = ["Belajar HTML", "Kerjakan tugas", "Push GitHub"];
localStorage.setItem("todos", JSON.stringify(todos));
const saved = JSON.parse(localStorage.getItem("todos"));`}
        </pre>

        {/* A.5 Google AI Studio untuk Web Development */}
        <h4 style={{marginTop: 24}}>A.5 Google AI Studio — AI Assistant untuk Developer</h4>
        <p>Google AI Studio (formerly MakerSuite) is a free tool from Google that lets you use Gemini AI models to generate code, debug errors, and accelerate web development. It can help you generate HTML, CSS, JavaScript, and even React components.</p>
        <h3 style={{marginTop: 12}}>Cara Menggunakan Google AI Studio:</h3>
        <ul>
          <li><strong>Buka</strong> aistudio.google.com dan login dengan akun Google</li>
          <li><strong>Pilih model</strong> — Gemini 2.5 Flash (gratis, cepat) atau Gemini 2.5 Pro (lebih powerful)</li>
          <li><strong>Buat prompt</strong> — Jelaskan apa yang ingin kamu buat secara spesifik</li>
          <li><strong>Copy hasil</strong> — AI akan menghasilkan kode yang bisa langsung dipakai</li>
        </ul>
        <h3 style={{marginTop: 16}}>Tips Prompt yang Efektif:</h3>
        <ul>
          <li><strong>Spesifik</strong> — "Buatkan HTML + CSS card profil dengan flexbox, dark mode, responsive" lebih baik dari "Buatkan card"</li>
          <li><strong>Beri context</strong> — "Saya sedang membuat portofolio untuk siswa SMK TJKT" membantu AI memahami kebutuhan</li>
          <li><strong>Minta penjelasan</strong> — Tambahkan "Jelaskan kode ini" agar kamu belajar dari hasil AI</li>
          <li><strong>Iterasi</strong> — Jika hasilnya kurang tepat, berikan feedback: "Tambahkan animasi hover" atau "Ganti warna jadi biru"</li>
        </ul>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Catatan Penting</strong>
          <p>AI adalah alat bantu, bukan pengganti belajar. Kamu tetap harus memahami dasar HTML, CSS, dan JavaScript agar bisa memperbaiki dan memodifikasi kode yang dihasilkan AI. Gunakan AI untuk mempercepat kerja, tapi jangan lupa belajar fondasinya!</p>
        </div>

        <ContohSoal data={[
          { soal: 'Buatkan struktur HTML5 semantic untuk halaman blog sederhana yang berisi: header dengan navigasi (Beranda, Artikel, Kontak), section utama dengan 2 article (masing-masing punya judul, tanggal, excerpt), sidebar dengan daftar kategori, dan footer. Jelaskan mengapa kamu memilih tag semantic tertentu!',
            penyelesaian: [
              'Struktur: <header> berisi <nav> dengan 3 anchor links. <main> berisi <section id="articles"> dengan 2 <article>, masing-masing berisi <h2> judul, <time> tanggal, <p> excerpt. <aside> berisi daftar kategori dalam <ul>. <footer> berisi copyright.',
              'Menggunakan <article> karena setiap blog post adalah konten mandiri. <section> karena semua artikel merupakan satu bagian tematik. <aside> karena sidebar adalah konten sampingan. <time> untuk semantic datetime. <nav> karena itu adalah navigasi.',
              'CSS layout: .container { display: grid; grid-template-columns: 1fr 300px; } untuk layout sidebar. Artikel: article { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #eee; }.'
            ]
          },
          { soal: 'Seorang siswa ingin menampilkan data dari API ke website. Ia belum pernah menggunakan fetch(). Jelaskan langkah-langkah menggunakan Google AI Studio untuk membantunya, termasuk: (a) Prompt apa yang harus ditulis, (b) Bagaimana cara membaca hasilnya, (c) Debug jika terjadi error.',
            penyelesaian: [
              '(a) Prompt yang efektif: "Buatkan kode JavaScript menggunakan async/await dan fetch() untuk mengambil data dari https://jsonplaceholder.typicode.com/users, lalu tampilkan nama dan email setiap user dalam bentuk card HTML. Sertakan error handling dengan try-catch."',
              '(b) Cara membaca hasil: Baca kode yang dihasilkan baris per baris. Pastikan kamu memahami: async/await untuk menunggu response, res.json() untuk mengubah response ke JavaScript object, forEach atau map untuk iterate data, DOM manipulation untuk menampilkan ke HTML.',
              '(c) Debug: Jika error CORS, gunakan API yang mendukung CORS. Jika error "Cannot read property", cek apakah data sudah ter-assign dengan benar. Copy-paste error message ke AI Studio dan minta penjelasan. Jika output kosong, tambahkan console.log(data) untuk melihat apa yang dikembalikan API.'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah halaman web portofolio pribadi menggunakan HTML5 semantic + CSS Flexbox/Grid. Harus memiliki: header, navigasi, section profil (dengan foto placeholder dan bio), section skills (dengan card), section proyek (grid layout 3 card), dan footer. Website harus responsive (mobile-friendly).',
          'Gunakan Google AI Studio untuk membuat form pendaftaran online. Prompt yang harus kamu tulis: "Buatkan form pendaftaran siswa baru yang berisi: nama lengkap, NIS, email, pilihan kelas (X/XI/XI), checkbox hobi (coding, desain, jaringan, gaming), dan tombol submit. Beri validasi JavaScript (semua field wajib diisi, email harus valid). Buatkan dalam HTML + CSS + JavaScript dalam satu file." Copy hasilnya, pahami kode, dan jalankan di browser.',
          'Buatlah halaman web dengan fitur localStorage: To-Do List yang bisa menyimpan tugas. Fitur: input tugas baru, tombol tambah, daftar tugas (bisa dicentang selesai), tombol hapus. Data harus tetap tersimpan saat halaman di-refresh (menggunakan localStorage).',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  B. DEPLOY WEB push GITHUB & VERCEL                              */}
      {/* ================================================================ */}
      <MateriCard icon={Rocket} title="B. Deploy Web push GitHub & Vercel">

        {/* B.1 Pengertian Deploy */}
        <h4 style={{marginTop: 0}}>B.1 Mengapa Deploy itu Penting?</h4>
        <p>Membuat website di komputer lokal (localhost) hanya bisa diakses oleh kamu sendiri. Deploy adalah proses mengunggah website ke server agar bisa diakses oleh siapa saja di seluruh dunia melalui URL publik.</p>
        <h3 style={{marginTop: 12}}>Alur Deploy Modern:</h3>
        <ul>
          <li><strong>1. Kode di Lokal</strong> — Kamu menulis kode di VS Code / editor</li>
          <li><strong>2. Push ke GitHub</strong> — Kode diunggah ke repository GitHub</li>
          <li><strong>3. Vercel Detect</strong> — Vercel mendeteksi push baru secara otomatis</li>
          <li><strong>4. Build & Deploy</strong> — Vercel membangun dan mendeploy website</li>
          <li><strong>5. Live!</strong> — Website bisa diakses via URL seperti myapp.vercel.app</li>
        </ul>
        <div className="info-box">
          <strong><Target size={14} /> Mengapa GitHub + Vercel?</strong>
          <p><strong>GitHub</strong> = version control (riwayat perubahan kode, kolaborasi tim, backup online). <strong>Vercel</strong> = hosting modern (gratis untuk personal, auto-deploy, HTTPS otomatis, edge network global). Keduanya gratis untuk siswa dan sangat populer di industri.</p>
        </div>

        {/* B.2 Git & GitHub Dasar */}
        <h4 style={{marginTop: 24}}>B.2 Git & GitHub Dasar</h4>
        <p>Git adalah version control system yang melacak perubahan kode. GitHub adalah platform hosting Git repository secara online.</p>
        <h3 style={{marginTop: 12}}>Perintah Git Dasar:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`# Inisialisasi Git repo
git init

# Cek status repository
git status

# Tambah file ke staging area
git add filename.ext
git add .  # tambah semua file

# Commit (simpan snapshot)
git commit -m "feat: tambah form login"

# Hubungkan ke remote repository
git remote add origin https://github.com/username/repo.git

# Push ke GitHub
git push -u origin main

# Pull dari GitHub
git pull origin main

# Clone repository
git clone https://github.com/username/repo.git

# Cek history commit
git log --oneline`}
        </pre>
        <h3 style={{marginTop: 16}}>Branching — Bekerja di Fitur Baru:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`# Buat branch baru
git checkout -b fitur-login

# Kerja di branch fitur-login...
git add .
git commit -m "feat: tambah halaman login"

# Push branch baru ke GitHub
git push -u origin fitur-login

# Kembali ke branch main
git checkout main

# Gabungkan fitur ke main
git merge fitur-login

# Hapus branch setelah digabung
git branch -d fitur-login`}
        </pre>

        {/* B.3 Repository GitHub */}
        <h4 style={{marginTop: 24}}>B.3 Membuat Repository GitHub</h4>
        <p>Langkah-langkah membuat repository baru di GitHub:</p>
        <ul>
          <li><strong>1.</strong> Buka github.com, klik tombol "+" di pojok kanan atas, pilih "New repository"</li>
          <li><strong>2.</strong> Isi nama repository (contoh: "portofolio-siswa"), deskripsi, pilih Public/Private</li>
          <li><strong>3.</strong> Centang "Add a README file" untuk repository baru</li>
          <li><strong>4.</strong> Pilih .gitignore template (Node, Python, dll sesuai project)</li>
          <li><strong>5.</strong> Klik "Create repository"</li>
        </ul>
        <h3 style={{marginTop: 16}}>File .gitignore Penting:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`# .gitignore — file yang TIDAK boleh di-push ke GitHub

# Dependencies
node_modules/
__pycache__/

# Environment variables (RAHASIA!)
.env
.env.local

# Build output
dist/
build/

# OS files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/`}
        </pre>
        <div className="info-box">
          <strong><AlertTriangle size={14} /> Keamanan</strong>
          <p>Jangan pernah push file .env, API keys, atau password ke GitHub! File .gitignore membantu mencegah file-file rahasia ini terunggah ke publik. Jika tidak sengaja ter-push, kamu harus segera menghapusnya dan mengganti API keys yang bocor.</p>
        </div>

        {/* B.4 Deploy ke Vercel */}
        <h4 style={{marginTop: 24}}>B.4 Deploy ke Vercel — Step by Step</h4>
        <ul>
          <li><strong>1. Buat Akun Vercel</strong> — Buka vercel.com, klik "Sign Up", pilih "Continue with GitHub" (otomatis terhubung)</li>
          <li><strong>2. Import Repository</strong> — Klik "Add New..." &gt; "Project", pilih repository GitHub yang ingin di-deploy</li>
          <li><strong>3. Konfigurasi</strong> — Vercel otomatis mendeteksi framework (React, Next.js, Vue, atau static HTML). Tidak perlu pengaturan khusus untuk project sederhana.</li>
          <li><strong>4. Deploy</strong> — Klik "Deploy". Vercel akan build dan deploy dalam 30-60 detik.</li>
          <li><strong>5. Selesai!</strong> — Website live di nama-project.vercel.app. Bisa diakses oleh siapa saja.</li>
        </ul>
        <h3 style={{marginTop: 16}}>Fitur Vercel yang powerful:</h3>
        <ul>
          <li><strong>Auto-Deploy</strong> — Setiap push ke branch main otomatis trigger deploy baru</li>
          <li><strong>Preview Deploy</strong> — Setiap pull request mendapat URL preview gratis</li>
          <li><strong>HTTPS Otomatis</strong> — SSL certificate gratis untuk semua domain</li>
          <li><strong>Edge Network</strong> — Website di-cache di server global, akses cepat dari mana saja</li>
          <li><strong>Analytics</strong> — Statistik pengunjung built-in</li>
        </ul>

        {/* B.5 SPA Routing & vercel.json */}
        <h4 style={{marginTop: 24}}>B.5 SPA Routing — vercel.json</h4>
        <p>Jika menggunakan React Router atau framework SPA (Single Page Application), semua rute harus di-rewrite ke index.html. Tanpa ini, refresh halaman di rute selain "/" akan error 404.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// vercel.json — letakkan di root project
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`}
        </pre>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Kapan Butuh vercel.json?</strong>
          <p>Static HTML (tanpa router) &mdash; tidak perlu. React/Vue/Angular dengan React Router &mdash; wajib. Next.js &mdash; tidak perlu (sudah di-handle). Tanpa vercel.json, hanya URL "/" yang berfungsi. Rute lain seperti "/about" akan 404 saat user refresh halaman.</p>
        </div>

        {/* B.6 Custom Domain */}
        <h4 style={{marginTop: 24}}>B.6 Custom Domain (Opsional)</h4>
        <p>Vercel memungkinkan kamu menggunakan domain sendiri (bukan hanya .vercel.app). Langkah-langkahnya:</p>
        <ul>
          <li><strong>1.</strong> Beli domain dari registrar (Namecheap, Google Domains, Niagahoster, dll)</li>
          <li><strong>2.</strong> Di Vercel dashboard, buka project &gt; Settings &gt; Domains</li>
          <li><strong>3.</strong> Masukkan domain yang dibeli, klik Add</li>
          <li><strong>4.</strong> Vercel akan memberikan 2 DNS records (A record dan CNAME) yang harus ditambahkan di panel registrar domain</li>
          <li><strong>5.</strong> Tunggu propagasi DNS (5 menit &mdash; 48 jam, biasanya cepat)</li>
          <li><strong>6.</strong> SSL certificate otomatis di-setup oleh Vercel</li>
        </ul>

        <ContohSoal data={[
          { soal: 'Seorang siswa ingin deploy website portofolionya. Ia sudah punya akun GitHub dan Vercel. Jelaskan langkah-langkah lengkap dari awal sampai website live, termasuk perintah Git yang harus dijalankan di terminal!',
            penyelesaian: [
              'Langkah 1 — Setup lokal: Buka terminal di folder project, jalankan: git init, git add ., git commit -m "initial commit: portofolio website"',
              'Langkah 2 — Buat repo GitHub: Klik "+" di github.com > New repository > nama "portofolio" > Create. Copy URL repository.',
              'Langkah 3 — Hubungkan local ke GitHub: git remote add origin URL_REPO, git push -u origin main',
              'Langkah 4 — Deploy Vercel: Buka vercel.com > Sign in with GitHub > Add New > Project > pilih repo "portofolio" > Deploy',
              'Langkah 5 — Website live: Tunggu 30-60 detik, website sudah bisa diakses di portofolio.vercel.app. Untuk update: cukup git push, Vercel auto-deploy.',
              'Tips: Jika menggunakan React Router, buat file vercel.json di root project dengan rewrites [{"source": "/(.*)", "destination": "/index.html"}] agar semua rute berfungsi.'
            ]
          },
          { soal: 'Jelaskan perbedaan antara: (a) git add, git commit, dan git push, (b) git pull dan git clone, (c) main branch dan feature branch. Berikan analogi untuk memahami masing-masing!',
            penyelesaian: [
              '(a) git add = menandai file yang ingin disimpan (seperti menandai dokumen untuk difotokopi). git commit = menyimpan snapshot ke history lokal (seperti mengambil foto dokumen dan diberi catatan tanggal). git push = mengunggah snapshot ke server GitHub (sepingga mengirim foto ke cloud agar orang lain bisa lihat).',
              '(b) git pull = mengambil perubahan terbaru dari GitHub ke local (seperti sync email). git clone = membuat salinan lengkap repository dari GitHub ke local untuk pertama kali (seperti download seluruh folder).',
              '(c) main branch = branch utama yang berisi kode stabil dan production-ready (seperti buku final yang sudah dicetak). feature branch = branch sementara untuk mengembangkan fitur baru tanpa mengganggu main (seperti draft yang masih diedit sebelum final).'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah repository baru di GitHub untuk portofolio pribadi. Tuliskan langkah-langkah: (a) Inisialisasi Git di folder project, (b) Membuat repo di GitHub, (c) Push kode pertama ke GitHub, (d) Deploy ke Vercel, (e) Verifikasi website sudah live. Sertakan screenshot setiap langkah.',
          'Jelaskan dengan bahasamu sendiri (minimal 10 kalimat): Apa itu Git? Mengapa Git penting untuk developer? Apa yang terjadi jika developer tidak menggunakan version control? Berikan analogi dari kehidupan sehari-hari.',
          'Buatlah .gitignore yang sesuai untuk project React (Vite). Tuliskan minimal 10 item yang harus ada di .gitignore dan jelaskan mengapa setiap item harus di-ignore.',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  C. PROYEK MINI WEBSITE                                          */}
      {/* ================================================================ */}
      <MateriCard icon={Puzzle} title="C. Proyek Mini Website">

        {/* C.1 Perencanaan */}
        <h4 style={{marginTop: 0}}>C.1 Perencanaan — Landing Page Produk Digital</h4>
        <p>Sebelum menulis kode, kita perlu merencanakan website secara sistematis. Proyek ini: buat landing page untuk produk digital (aplikasi, game, atau layanan) yang responsif, interaktif, dan deployed ke Vercel.</p>
        <h3 style={{marginTop: 12}}>Spesifikasi Proyek:</h3>
        <ul>
          <li><strong>Tujuan</strong> — Landing page yang menarik untuk mempromosikan produk digital</li>
          <li><strong>Teknologi</strong> — HTML5 semantic + CSS3 (Flexbox/Grid) + JavaScript ES6+</li>
          <li><strong>Section</strong> — Hero, Fitur Produk, Cara Kerja, Testimonial, CTA (Call to Action), Footer</li>
          <li><strong>Responsif</strong> — Tampil optimal di mobile, tablet, dan desktop</li>
          <li><strong>Interaktif</strong> — Animasi hover, dark mode toggle, form email signup dengan localStorage</li>
          <li><strong>Deploy</strong> — Push ke GitHub, deploy ke Vercel</li>
        </ul>

        {/* C.2 Wireframe & Struktur */}
        <h4 style={{marginTop: 24}}>C.2 Wireframe & Struktur File</h4>
        <p>Wireframe adalah gambar kasar yang menunjukkan tata letak website tanpa desain visual. Ini membantu sebelum mulai coding.</p>
        <h3 style={{marginTop: 12}}>Struktur File:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`landing-page/
  index.html        ← Halaman utama
  style.css         ← Semua styling
  script.js         ← Interaktivitas
  assets/
    logo.svg        ← Logo produk
    hero.png        ← Gambar hero
  .gitignore
  README.md`}
        </pre>
        <h3 style={{marginTop: 16}}>Wireframe (Konsep Visual):</h3>
        <ul>
          <li><strong>Hero Section</strong> — Judul besar, subjudul, tombol CTA, gambar produk. Background gradient atau solid color.</li>
          <li><strong>Features Section</strong> — 3-4 card fitur utama dalam grid layout. Icon + judul + deskripsi singkat.</li>
          <li><strong>How It Works</strong> — 3 langkah dengan nomor/ikon. Penjelasan cara menggunakan produk.</li>
          <li><strong>Testimonial</strong> — 2-3 card testimoni dari pengguna. Nama, foto, rating bintang.</li>
          <li><strong>CTA Section</strong> — Form email signup + tombol "Get Early Access". Counter jumlah pendaftar dari localStorage.</li>
          <li><strong>Footer</strong> — Copyright, social media links, links ke halaman lain.</li>
        </ul>

        {/* C.3 Implementasi */}
        <h4 style={{marginTop: 24}}>C.3 Implementasi — Kode Inti</h4>
        <p>Berikut contoh kode untuk bagian-bagian utama proyek:</p>
        <h3 style={{marginTop: 12}}>index.html (bagian hero & features):</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`<!-- Hero Section -->
<section class="hero">
  <div class="hero-content">
    <h1>Solusi Cerdas untuk <span class="highlight">Belajar Coding</span></h1>
    <p>Platform interaktif yang membantu siswa SMK menguasai programming dengan cara yang menyenangkan.</p>
    <div class="cta-group">
      <a href="#signup" class="btn-primary">Mulai Gratis</a>
      <a href="#features" class="btn-secondary">Lihat Fitur</a>
    </div>
    <p class="counter" id="counter">0 orang sudah mendaftar</p>
  </div>
  <div class="hero-image">
    <img src="assets/hero.png" alt="Platform CodingKu">
  </div>
</section>

<!-- Features Section -->
<section class="features" id="features">
  <h2>Fitur Unggulan</h2>
  <div class="features-grid">
    <div class="feature-card">
      <div class="icon">[Icon]</div>
      <h3>Interaktif</h3>
      <p>Langsung praktik coding di browser tanpa install apapun.</p>
    </div>
    <div class="feature-card">
      <div class="icon">[Icon]</div>
      <h3>AI-Powered</h3>
      <p>Dibantu AI untuk menjelaskan konsep yang sulit.</p>
    </div>
    <div class="feature-card">
      <div class="icon">[Icon]</div>
      <h3>Gratis</h3>
      <p>Semua fitur tersedia gratis untuk siswa SMK.</p>
    </div>
  </div>
</section>`}
        </pre>
        <h3 style={{marginTop: 16}}>style.css (hero & responsive):</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`/* Hero */
.hero {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content { flex: 1; }
.hero-content h1 { font-size: 2.5rem; line-height: 1.2; }
.highlight { color: #6366f1; }
.hero-image { flex: 1; }
.hero-image img { width: 100%; max-width: 500px; }

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.feature-card {
  padding: 2rem;
  border-radius: 12px;
  background: var(--bg-card);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

/* Responsive */
@media (max-width: 768px) {
  .hero { flex-direction: column; text-align: center; padding: 2rem 1rem; }
  .hero-content h1 { font-size: 1.8rem; }
  .cta-group { justify-content: center; }
}`}
        </pre>
        <h3 style={{marginTop: 16}}>script.js (dark mode & counter):</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// Dark mode toggle
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// Signup counter
const counter = document.getElementById("counter");
let count = parseInt(localStorage.getItem("signup_count") || "0");
counter.textContent = \`\${count} orang sudah mendaftar\`;

document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email) {
    count++;
    localStorage.setItem("signup_count", count);
    counter.textContent = \`\${count} orang sudah mendaftar\`;
    alert("Terima kasih! Kamu sudah terdaftar.");
    document.getElementById("email").value = "";
  }
});`}
        </pre>

        {/* C.4 Testing & Deployment */}
        <h4 style={{marginTop: 24}}>C.4 Testing & Deployment</h4>
        <h3 style={{marginTop: 12}}>Checklist Testing:</h3>
        <ul>
          <li><strong>Visual</strong> — Cek tampilan di Chrome, Firefox, Safari. Pastikan tidak ada elemen yang pecah.</li>
          <li><strong>Responsive</strong> — Resize browser dari 320px (mobile) ke 1920px (desktop). Gunakan DevTools (F12) responsive mode.</li>
          <li><strong>Interaktif</strong> — Klik dark mode toggle. Submit form signup. Cek counter bertambah. Refresh halaman &mdash; data harus tersimpan (localStorage).</li>
          <li><strong>Performance</strong> — Buka Lighthouse di DevTools. Target: Performance &gt; 90, Accessibility &gt; 80.</li>
          <li><strong>SEO</strong> — Pastikan ada title, meta description, alt text di gambar, heading hierarchy benar (h1 &gt; h2 &gt; h3).</li>
        </ul>
        <h3 style={{marginTop: 16}}>Deployment Checklist:</h3>
        <ul>
          <li>File .gitignore sudah benar (node_modules, .env, dsb tidak ter-push)</li>
          <li>README.md sudah diisi (deskripsi project, cara menjalankan, screenshots)</li>
          <li>Push ke GitHub: git add . &amp;&amp; git commit -m "feat: landing page selesai" &amp;&amp; git push</li>
          <li>Deploy ke Vercel dari GitHub repository</li>
          <li>Verifikasi: buka URL Vercel, cek semua section tampil, responsive, dan interaktif berfungsi</li>
        </ul>
        <div className="info-box">
          <strong><Award size={14} /> Bonus: Lighthouse Audit</strong>
          <p>Buka Chrome DevTools (F12) &gt; tab Lighthouse &gt; klik "Analyze page load". Lighthouse akan memberikan skor 0-100 untuk Performance, Accessibility, Best Practices, dan SEO. Ini adalah standar industri untuk mengukur kualitas website. Targetkan skor Performance di atas 90!</p>
        </div>

        <ContohSoal data={[
          { soal: 'Seorang siswa membuat landing page dan mendapat masalah: (1) Website tampil bagus di desktop tapi pecah di mobile, (2) Dark mode tidak tersimpan setelah refresh, (3) Counter signup tidak bertambah saat submit form.\n\nUntuk setiap masalah, identifikasi penyebab dan berikan solusi!',
            penyelesaian: [
              '(1) Mobile responsive: Penyebab — Tidak ada media queries atau menggunakan fixed width (px). Solusi: Tambahkan @media (max-width: 768px) dengan flex-direction: column untuk hero section. Gunakan relative units (rem, %) daripada px. Test dengan DevTools responsive mode.',
              '(2) Dark mode tidak persist: Penyebab — Tidak menggunakan localStorage untuk menyimpan preferensi. Solusi: Saat toggle, jalankan localStorage.setItem("theme", "dark/light"). Saat page load, cek localStorage.getItem("theme") dan terapkan class dark jika tersimpan.',
              '(3) Counter tidak bertambah: Penyebab — Form melakukan default submit (reload page), atau counter tidak di-update setelah submit. Solusi: Tambahkan e.preventDefault() di event listener form, lalu update counter dan localStorage di dalam handler submit.'
            ]
          },
          { soal: 'Jelaskan alur lengkap deployment website dari VS Code sampai live di Vercel. Sertakan: (a) 5 perintah Git yang dibutuhkan, (b) 3 langkah di Vercel dashboard, (c) Cara memverifikasi website sudah benar-benar live.',
            penyelesaian: [
              '(a) 5 perintah Git:\n1. git init — inisialisasi repository\n2. git add . — tambahkan semua file\n3. git commit -m "initial commit" — simpan snapshot\n4. git remote add origin URL — hubungkan ke GitHub\n5. git push -u origin main — unggah ke GitHub',
              '(b) 3 langkah Vercel:\n1. Buka vercel.com > Sign in with GitHub\n2. Klik "Add New..." > "Project" > pilih repository yang baru di-push\n3. Klik "Deploy" > tunggu 30-60 detik > website live!',
              '(c) Verifikasi:\n1. Buka URL yang diberikan Vercel (contoh: myapp.vercel.app)\n2. Cek semua section tampil dengan benar\n3. Test responsive (resize browser)\n4. Test interaktif (klik tombol, submit form)\n5. Buka tab Network di DevTools, pastikan tidak ada error merah'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah landing page produk digital (aplikasi/game/layanan buatanmu sendiri). Minimal harus memiliki: (a) Hero section dengan judul + CTA, (b) Features section dengan 3 card, (c) Footer, (d) Responsive design, (e) Deploy ke Vercel. Kirimkan link Vercel.',
          'Buatlah dokumentasi proyek (README.md) untuk landing page yang sudah dibuat. Isi minimal: (a) Judul dan deskripsi proyek, (b) Screenshot hasil website, (c) Teknologi yang digunakan, (d) Cara menjalankan di lokal, (e) Link deploy Vercel. Push ke GitHub dan pastikan README tampil di halaman repo.',
          'Lakukan Lighthouse audit pada website yang sudah di-deploy. Tuliskan hasil skor untuk 4 kategori (Performance, Accessibility, Best Practices, SEO). Jelaskan 3 hal yang perlu diperbaiki berdasarkan rekomendasi Lighthouse, dan implementasikan perbaikannya.',
        ]} />

      </MateriCard>

    </div>
  );
}
