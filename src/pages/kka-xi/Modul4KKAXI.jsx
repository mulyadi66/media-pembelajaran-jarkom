import { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, Layout, Smartphone, Paintbrush, Rocket, GitBranch, Puzzle, Server, Target, Award, Lightbulb, AlertTriangle, ExternalLink, Wand2, Code2, FileCode, Copy } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';
import { ContohSoal, Tugas } from '../../components/ContohSoal';

const sections = [
  { id: 's1', label: 'A. Pengembangan Web Responsif & Interaktif' },
  { id: 's2', label: 'B. Deploy Web push GitHub & Vercel' },
  { id: 's3', label: 'C. Proyek Mini Website' },
];

function MateriCard({ icon: Icon, title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="materi-card" style={{marginBottom: 16}}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display:'flex', alignItems:'center', gap:10, width:'100%',
          background:'none', border:'none', cursor:'pointer', padding:'12px 0',
          color:'var(--text)', fontSize:'1.05rem', fontWeight:600, textAlign:'left'
        }}
      >
        <Icon size={18} />
        <span style={{flex:1}}>{title}</span>
        <span style={{
          display:'inline-block', width:0, height:0,
          borderLeft:'5px solid transparent', borderRight:'5px solid transparent',
          borderTop:'6px solid var(--text-light)',
          transition:'transform 0.3s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
        }} />
      </button>
      <div style={{
        maxHeight: open ? '99999px' : '0px',
        overflow: open ? 'visible' : 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <div style={{paddingTop:8, paddingBottom:8}}>
          {children}
        </div>
      </div>
    </div>
  );
}

function PromptCard({ title, prompt, hasil }) {
  return (
    <div style={{border:'1px solid var(--border)', borderRadius:10, padding:16, margin:'12px 0', background:'var(--bg-card)'}}>
      <h4 style={{marginTop:0, fontSize:'0.95rem', color:'var(--primary)'}}>{title}</h4>
      <div style={{background:'#0f172a', color:'#e2e8f0', padding:'12px 16px', borderRadius:8, fontSize:'0.82rem', lineHeight:1.6, whiteSpace:'pre-wrap', fontFamily:'ui-monospace, Consolas, monospace', marginBottom:8}}>
        {prompt}
      </div>
      {hasil && (
        <div style={{fontSize:'0.85rem', color:'var(--text-light)', lineHeight:1.6}}>
          <strong>Yang dihasilkan:</strong> {hasil}
        </div>
      )}
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
        <h4 style={{marginTop: 0}}>A.1 HTML5 Semantic - Struktur yang Bermakna</h4>
        <p>HTML5 menyediakan elemen-elemen semantic yang menjelaskan makna konten, bukan hanya tampilannya. Mesin pencari (Google) dan screen reader (untuk penyandang disabilitas) bisa lebih memahami struktur halaman kamu. Website yang menggunakan semantic HTML lebih mudah dioptimasi untuk SEO (Search Engine Optimization).</p>
        <h3 style={{marginTop: 12}}>Struktur Dasar HTML5 yang Benar:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Deskripsi website untuk SEO">
  <title>Judul Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <a href="#home">Beranda</a>
      <a href="#about">Tentang</a>
      <a href="#contact">Kontak</a>
    </nav>
  </header>

  <main>
    <section id="home">
      <h1>Judul Utama Halaman</h1>
      <p>Paragraf pengantar singkat.</p>
    </section>

    <section id="about">
      <h2>Tentang Kami</h2>
      <article>
        <h3>Artikel Pertama</h3>
        <p>Isi artikel...</p>
        <time datetime="2026-08-17">17 Agustus 2026</time>
      </article>
    </section>

    <aside>
      <h3>Informasi Tambahan</h3>
      <ul><li>Item 1</li><li>Item 2</li></ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 Nama Kamu</p>
  </footer>
</body>
</html>`}
        </pre>
        <h3 style={{marginTop: 16}}>Semantic Tags dan Fungsinya:</h3>
        <ul>
          <li><code>&lt;header&gt;</code> - Bagian atas halaman: logo, navigasi, judul. Bisa ada di setiap section, bukan hanya di atas.</li>
          <li><code>&lt;nav&gt;</code> - Kontainer navigasi khusus. Google mengenali ini sebagai menu navigasi.</li>
          <li><code>&lt;main&gt;</code> - Konten UTAMA halaman. Hanya boleh ada 1 per halaman. Screen reader bisa langsung lompat ke sini.</li>
          <li><code>&lt;section&gt;</code> - Bagian tematik konten. Harus punya heading (h2/h3) sendiri. Beda dengan div yang netral.</li>
          <li><code>&lt;article&gt;</code> - Konten MANDIRI yang bisa berdiri sendiri: blog post, berita, komentar, card.</li>
          <li><code>&lt;aside&gt;</code> - Konten sampingan: sidebar, widget, iklan. Tidak terkait langsung dengan konten utama.</li>
          <li><code>&lt;footer&gt;</code> - Bagian bawah: copyright, social media, links.</li>
          <li><code>&lt;figure&gt;</code> dan <code>&lt;figcaption&gt;</code> - Gambar/video dengan caption deskriptif.</li>
          <li><code>&lt;time&gt;</code> - Tanggal/waktu dalam format machine-readable. Membantu Google memahami kapan konten dibuat.</li>
        </ul>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Kenapa Bukan &lt;div&gt; Saja?</strong>
          <p>&lt;div&gt; adalah container netral tanpa makna. &lt;section&gt; bilang "ini bagian konten". &lt;article&gt; bilang "ini konten mandiri". Perbedaan ini penting untuk SEO (Google mengerti struktur) dan aksesibilitas (screen reader bisa navigate dengan benar). Gunakan semantic tags saat makna kontennya jelas.</p>
        </div>

        {/* A.2 CSS Flexbox */}
        <h4 style={{marginTop: 24}}>A.2 CSS Flexbox - Layout Satu Dimensi</h4>
        <p>Flexbox dirancang untuk layout SATU dimensi:either horizontal (row) ATAU vertical (column). Sangat powerful untuk menyejajarkan, mendistribusikan, dan menyusun elemen dalam satu arah.</p>
        <h3 style={{marginTop: 12}}>Properti Flexbox Penting:</h3>
        <ul>
          <li><strong>display: flex</strong> - Mengaktifkan flexbox pada container</li>
          <li><strong>flex-direction</strong> - Arah susunan: row (default), column, row-reverse, column-reverse</li>
          <li><strong>justify-content</strong> - Penyusunan di sumbu utama: flex-start, center, flex-end, space-between, space-around, space-evenly</li>
          <li><strong>align-items</strong> - Penyusunan di sumbu silang: flex-start, center, flex-end, stretch, baseline</li>
          <li><strong>flex-wrap</strong> - wrap (elemen pindah baris jika tidak muat), nowrap (default)</li>
          <li><strong>gap</strong> - Jarak antar elemen flex</li>
        </ul>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`/* Navbar - items sejajar, logo kiri, menu kanan */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Card container - wrap ke baris baru jika tidak muat */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 300px; /* grow:1, shrink:1, basis:300px */
  padding: 1.5rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-4px);
}

/* Hero section - konten di tengah */
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  gap: 3rem;
  padding: 2rem;
}`}
        </pre>

        {/* A.3 CSS Grid */}
        <h4 style={{marginTop: 24}}>A.3 CSS Grid - Layout Dua Dimensi</h4>
        <p>CSS Grid dirancang untuk layout DUA dimensi: mengontrol baris DAN kolom secara bersamaan. Cocok untuk layout halaman utama, dashboard, gallery, dan portfolio.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`/* Portfolio grid - otomatis responsif */
.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

/* Dashboard: sidebar + main content */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}
.dashboard sidebar { background: #1e293b; color: white; }
.dashboard main { padding: 2rem; }

/* Grid dengan nama area */
.layout {
  display: grid;
  grid-template-areas:
    "header  header  header"
    "sidebar content aside"
    "footer  footer  footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.aside   { grid-area: aside; }
.footer  { grid-area: footer; }

/* Responsive - mobile first */
@media (max-width: 768px) {
  .dashboard { grid-template-columns: 1fr; }
  .layout {
    grid-template-areas:
      "header"
      "content"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}`}
        </pre>

        {/* A.4 JavaScript ES6+ */}
        <h4 style={{marginTop: 24}}>A.4 JavaScript ES6+ untuk Web Modern</h4>
        <p>ES6 (ECMAScript 2015) membawa banyak fitur baru yang membuat JavaScript lebih bersih, powerful, dan mudah dibaca. Ini adalah standar yang wajib dikuasai untuk web development modern.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// 1. Arrow Functions - lebih ringkas
const sapa = (nama) => \`Halo, \${nama}!\`;
const tambah = (a, b) => a + b;
const kuadrat = x => x * x;

// 2. Destructuring - ekstrak nilai dari array/object
const siswa = { nama: "Budi", kelas: "XI", jurusan: "TJKT" };
const { nama, kelas } = siswa;  // nama="Budi", kelas="XI"

const angka = [10, 20, 30];
const [pertama, kedua] = angka;  // pertama=10, kedua=20

// 3. Spread & Rest Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a:1, b:2, c:3 }

// 4. Template Literals - string dengan variabel
const umur = 16;
const msg = \`Saya \${nama}, umur \${umur} tahun\`;

// 5. Optional Chaining & Nullish Coalescing
const alamat = siswa?.alamat?.kota ?? "Tidak diketahui";

// 6. Array Methods powerful
const angka2 = [1, 2, 3, 4, 5, 6];
const genap = angka2.filter(n => n % 2 === 0);  // [2, 4, 6]
const kali2 = angka2.map(n => n * 2);           // [2, 4, 6, 8, 10, 12]
const total = angka2.reduce((acc, n) => acc + n, 0);  // 21`}
        </pre>

        {/* A.5 Fetch API & localStorage */}
        <h4 style={{marginTop: 24}}>A.5 Fetch API & localStorage - Komunikasi & Penyimpanan</h4>
        <p>Fetch API memungkinkan website berkomunikasi dengan server (mengambil/mengirim data). localStorage menyimpan data di browser yang tetap ada meskipun halaman di-refresh.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// === FETCH API ===

// GET - mengambil data dari server
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  users.forEach(u => console.log(u.name, u.email));
}

// POST - mengirim data ke server
async function createPost(title, body) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, body, userId: 1 }),
  });
  return await res.json();
}

// === LOCALSTORAGE ===

// Simpan data
localStorage.setItem("username", "budi_tjkt");
localStorage.setItem("theme", "dark");
localStorage.setItem("todos", JSON.stringify(["Belajar", "Coding", "Push"]));

// Ambil data
const username = localStorage.getItem("username");
const theme = localStorage.getItem("theme");
const todos = JSON.parse(localStorage.getItem("todos"));

// Hapus data
localStorage.removeItem("username");
localStorage.clear(); // hapus semua`}
        </pre>

        {/* A.6 Google AI Studio */}
        <h4 style={{marginTop: 24}}>A.6 Google AI Studio - AI Assistant untuk Developer</h4>
        <p>Google AI Studio (aistudio.google.com) adalah tool gratis dari Google yang memungkinkan kamu menggunakan model AI Gemini untuk generate kode, debug error, dan mempercepat pengembangan web. AI bisa menghasilkan HTML, CSS, JavaScript, dan komponen React dari deskripsi teks (prompt).</p>

        <h3 style={{marginTop: 16}}>Cara Menggunakan Google AI Studio:</h3>
        <ol>
          <li><strong>Buka</strong> aistudio.google.com di browser</li>
          <li><strong>Login</strong> dengan akun Google (Gmail)</li>
          <li><strong>Pilih model</strong>: Gemini 2.5 Flash (gratis, cepat, cocok untuk kode) atau Gemini 2.5 Pro (lebih detail, lebih lambat)</li>
          <li><strong>Tulis prompt</strong> di kolom chat. Jelaskan SEPERLUNYA apa yang ingin kamu buat</li>
          <li><strong>Tekan Enter</strong> dan tunggu AI generate kode</li>
          <li><strong>Copy kode</strong> hasilnya, paste ke file .html lalu buka di browser</li>
          <li><strong>Iterasi</strong>: Jika hasilnya kurang tepat, tulis perubahan yang diinginkan di chat yang sama</li>
        </ol>

        <h3 style={{marginTop: 20}}>Tips Menulis Prompt yang Efektif:</h3>
        <ul>
          <li><strong>Spesifik</strong> - Semakin detail prompt, semakin akurat hasilnya. "Buatkan card profil dengan foto, nama, bio, tombol follow" lebih baik dari "Buat card"</li>
          <li><strong>Sebutkan teknologi</strong> - "Gunakan HTML + CSS Flexbox + JavaScript vanilla" atau "Buat dalam satu file .html"</li>
          <li><strong>Beri contoh visual</strong> - "Seperti profil Instagram: foto bulat di atas, nama di bawah, tombol Follow biru"</li>
          <li><strong>Minta penjelasan</strong> - Tambahkan "Jelaskan kode ini setelah generate" agar kamu belajar</li>
          <li><strong>Iterasi</strong> - Mulai dari versi sederhana, lalu tambah fitur: "Tambahkan dark mode", "Buat responsive"</li>
        </ul>

        <h3 style={{marginTop: 20}}>Contoh Prompt untuk Membuat Website:</h3>

        <PromptCard
          title="Prompt 1: Landing Page Sederhana"
          prompt={`Buatkan landing page produk digital bernama "CodeMaster" dalam satu file HTML.
Yang harus ada:
1. Hero section dengan judul "Belajar Coding dengan CodeMaster", subjudul, dan tombol "Mulai Gratis" berwarna biru (#3b82f6)
2. Features section dengan 3 card (Interactive Learning, AI Assistant, Free Forever) dalam layout flexbox
3. Testimonial section dengan 2 card testimonial
4. Footer dengan copyright

Gunakan CSS internal (di dalam <style>), warna dominan biru-ungu, modern, responsive. Tambahkan animasi hover di card.`}
          hasil="HTML + CSS lengkap dengan hero, 3 feature cards, testimonial, footer. Responsive dan ada hover animation."
        />

        <PromptCard
          title="Prompt 2: Form Pendaftaran"
          prompt={`Buatkan halaman form pendaftaran online untuk workshop "AI for Students" dengan:
- Judul form di tengah
- Field: Nama Lengkap (text), Email (email), Asal Sekolah (text), Pilihan Workshop (dropdown: AI Basics, Web Dev, Data Science), Checkbox persetujuan
- Tombol "Daftar Sekarang" dengan gradient biru-ungu
- Validasi JavaScript: semua field wajib diisi, email harus mengandung @
- Jika berhasil, tampilkan alert "Pendaftaran berhasil!"
- Desain modern, card dengan shadow, responsive

Satu file HTML dengan CSS dan JavaScript internal.`}
          hasil="Form lengkap dengan validasi JS, dropdown, checkbox, gradient button, dan error handling."
        />

        <PromptCard
          title="Prompt 3: Portfolio Pribadi"
          prompt={`Buatkan halaman portfolio pribadi untuk siswa SMK bernama "Budi" jurusan TJKT. Satu file HTML.

Section:
1. Hero: "Hi, I'm Budi" dengan teks animasi typing effect sederhana
2. About: bio singkat + foto placeholder (gambar kotak abu-abu)
3. Skills: grid 6 card skill (HTML, CSS, JavaScript, Python, React, Git) dengan icon emoji dan progress bar
4. Projects: 3 card proyek dengan gambar placeholder, judul, deskripsi singkat, tombol "Lihat"
5. Contact: form (nama, email, pesan) + social media links
6. Footer

CSS: dark mode, color accent #6366f1 (indigo), smooth scroll, responsive. JavaScript: dark mode toggle yang tersimpan di localStorage.`}
          hasil="Portfolio lengkap dark mode dengan typing effect, progress bars, project cards, contact form, dan dark mode localStorage."
        />

        <PromptCard
          title="Prompt 4: Dashboard Sederhana"
          prompt={`Buatkan dashboard admin sederhana dalam satu file HTML dengan layout:
- Sidebar kiri (250px): logo, menu (Dashboard, Users, Settings, Logout)
- Header atas: judul "Admin Dashboard" + tombol notifikasi
- Main content: 4 statistic cards (Total Users: 1,234, Revenue: Rp 45.6M, Orders: 89, Rating: 4.8) dalam grid
- Di bawah stats: tabel data users sederhana (5 baris)

Gunakan CSS Grid untuk layout. Warna sidebar #1e293b (gelap), main content background #f8fafc. Responsive: di mobile sidebar jadi hamburger menu. Tambahkan JavaScript untuk toggle sidebar.`}
          hasil="Dashboard dengan sidebar, 4 stat cards dalam grid, data table, dan JavaScript toggle sidebar."
        />

        <PromptCard
          title="Prompt 5: To-Do List App"
          prompt={`Buatkan aplikasi To-Do List yang fungsional dalam satu file HTML:

Fitur:
- Input field + tombol "Tambah" untuk menambah tugas baru
- Daftar tugas dalam list, masing-masing ada checkbox (selesai/belum) dan tombol hapus (X)
- Tugas yang selesai dicoret (line-through) dan warna abu-abu
- Counter "X tugas tersisa" di bawah
- Tombol "Hapus Selesai" untuk menghapus semua tugas yang sudah selesai
- DATA TERSIMPAN di localStorage (tetap ada saat refresh halaman)

Desain: minimalis, clean, warna putih dengan shadow card, tombol biru. Responsive.`}
          hasil="Aplikasi to-do list fungsional dengan localStorage persistence, checkbox, delete, dan counter."
        />

        <PromptCard
          title="Prompt 6: Landing Page + Dark Mode + Animasi"
          prompt={`Buatkan landing page untuk aplikasi mobile "FoodTracker" (app pelacak kalori makanan) dalam satu file HTML.

Yang harus ada:
1. Navbar: logo teks "FoodTracker", menu (Home, Fitur, Download), tombol dark mode toggle (ikon matahari/bulan)
2. Hero: judul besar "Pantau Makananmu Setiap Hari", subjudul, tombol "Download Gratis" + "Pelajari Lebih Lanjut"
3. Features: 3 card dengan icon emoji (Kalori Tracker, Water Reminder, Progress Chart)
4. How It Works: 3 langkah dengan nomor (Download, Input Makanan, Lihat Hasil)
5. Download section: tombol App Store + Google Play (fake, hanya UI)
6. Footer

CSS: mobile-first, Flexbox + Grid, smooth scroll, transition dark mode 0.3s. JavaScript: dark mode toggle + localStorage + smooth scroll ke section saat klik menu navbar. Animasi: card hover naik, fade-in saat scroll (gunakan IntersectionObserver).`}
          hasil="Landing page lengkap dengan navbar, dark mode, smooth scroll, fade-in animation, dan mobile responsive."
        />

        <PromptCard
          title="Prompt 7: Debug & Perbaiki Kode"
          prompt={`Saya punya kode HTML ini tapi ada error:

<pre><code>&lt;div class="card"&gt;
  &lt;h2&gt;Judul&lt;/h2&gt;
  &lt;p&gt;Deskripsi&lt;/p&gt;
  &lt;button onclick="alert('Halo')"&gt;Klik&lt;/button&gt;
&lt;/div&gt;

&lt;style&gt;
.card { background: white; padding: 20px; }
.card h2 { color: blue; }
&lt;/style&gt;
</code></pre>

Masalahnya:
1. Card tidak punya border radius dan shadow
2. Tombol tidak ada styling (default browser)
3. Tidak responsive di mobile

Tolong perbaiki dan jelaskan setiap perubahan!`}
         hasil="Kode yang diperbaiki dengan penjelasan: border-radius, box-shadow, button styling, dan media query responsive."
        />

        <PromptCard
          title="Prompt 8: Eksplorasi CSS Flexbox"
          prompt={`Buatkan halaman demonstrasi CSS Flexbox dalam satu file HTML. Halaman ini untuk belajar Flexbox.

Isi halaman:
1. Judul "Flexbox Playground"
2. 6 contoh layout berbeda:
   - Centering: konten di tengah horizontal + vertical
   - Space between: 3 box dengan jarak merata
   - Card wrap: 5 card yang wrap ke baris berikutnya
   - Holy grail layout: header + sidebar-left + content + sidebar-right + footer
   - Navbar responsive: logo kiri, menu kanan
   - Image gallery: grid gambar dengan gap

Setiap contoh ada label nama teknik Flexbox yang digunakan dan kode CSS-nya ditampilkan di bawah contoh. Beri warna berbeda untuk setiap box agar terlihat jelas.`}
         hasil="Halaman edukasi Flexbox dengan 6 demonstrasi interaktif, setiap contoh ada label + kode CSS."
        />

        <div className="info-box">
          <strong><Wand2 size={14} /> Strategi Prompt Bertingkat (Iterative Prompting)</strong>
          <p>Jangan langsung minta AI buat website kompleks dalam satu prompt. Gunakan pendekatan bertingkat:</p>
          <ul style={{marginTop: 8}}>
            <li><strong>Step 1</strong> - Minta versi sederhana dulu: "Buatkan hero section sederhana dengan judul dan tombol"</li>
            <li><strong>Step 2</strong> - Tambah section: "Tambahkan features section dengan 3 card di bawah hero"</li>
            <li><strong>Step 3</strong> - Tambah styling: "Buat responsive, tambahkan animasi hover, gunakan warna biru-ungu"</li>
            <li><strong>Step 4</strong> - Tambah interaktivitas: "Tambahkan dark mode toggle dengan localStorage"</li>
            <li><strong>Step 5</strong> - Polish: "Perbaiki spacing, tambahkan shadow, sesuaikan font size"</li>
          </ul>
        </div>

        <ContohSoal data={[
          { soal: 'Kamu ingin membuat website portofolio menggunakan Google AI Studio. Tuliskan 2 prompt berbeda yang bisa kamu gunakan: (a) Prompt pertama untuk membuat hero section portofolio, (b) Prompt kedua untuk menambahkan section skills setelah hero. Jelaskan strategi iterative prompting yang kamu gunakan!',
            penyelesaian: [
              '(a) Prompt hero: "Buatkan hero section untuk portofolio siswa SMK bernama Budi. Di kiri: teks Hi, I\'m Budi, subjudul Siswa TJKT yang passionate di web development, tombol Contact Me biru dan Download CV outline. Di kanan: foto placeholder kotak dengan border-radius. Background gradient ungu-biru. Responsive: di mobile teks di tengah, gambar di bawah."',
              '(b) Prompt skills: "Tambahkan section Skills di bawah hero. 6 card skill dalam grid 3 kolom: HTML, CSS, JavaScript, Python, React, Git. Setiap card ada icon emoji, nama skill, dan progress bar (persentase acak 60-95%). Warna progress bar sesuai skill. Card ada hover effect naik 4px. Responsive: 2 kolom di tablet, 1 kolom di mobile."',
              'Strategi iterative: Mulai dari hero (komponen paling penting), pastikan hasilnya bagus, baru tambah section berikutnya. Ini lebih mudah di-debug daripada minta semua sekaligus. Setiap prompt fokus di 1 section dengan detail spesifik.'
            ]
          },
          { soal: 'Seorang siswa menggunakan Google AI Studio dan mendapat kode hasil generate. Kode itu berfungsi tapi ada beberapa masalah: (1) Tidak responsive di mobile, (2) Warna tidak konsisten, (3) Ada elemen yang tumpang tindih. Jelaskan cara memperbaiki setiap masalah menggunakan prompt di Google AI Studio!',
            penyelesaian: [
              '(1) Responsive: Prompt perbaikan: "Buat kode ini responsive. Tambahkan media query untuk max-width: 768px. Di mobile, ubah layout flex-direction column, kurangi font size, dan pastikan semua elemen tidak overflow. Gunakan viewport unit (vw, vh) dan rem untuk sizing."',
              '(2) Warna konsisten: Prompt: "Standarisasi warna website. Gunakan palette: primary #6366f1 (indigo), secondary #8b5cf6 (violet), background #f8fafc, text #1e293b, border #e2e8f0. Ganti semua warna yang tidak sesuai dengan palette ini. Gunakan CSS variables di :root."',
              '(3) Elemen tumpang tindih: Prompt: "Perbaiki elemen yang tumpang tindih. Cek z-index, position, dan margin/padding. Pastikan setiap card punya margin-bottom yang cukup (minimal 1rem). Jika ada position absolute, pastikan parent-nya punya position relative."',
              'Tips: Selalu copy-paste kode hasil AI ke file .html, test di browser dulu, baru identifikasi masalah spesifik untuk prompt perbaikan berikutnya.'
            ]
          },
        ]} />

        <Tugas data={[
          'Gunakan Google AI Studio untuk membuat landing page lengkap. Gunakan strategi iterative prompting (minimal 5 prompt bertahap): (1) Hero section, (2) Features section, (3) Testimonial/About, (4) Contact form, (5) Responsive + dark mode. Copy hasilnya ke file .html, test di browser, dan screenshot hasilnya.',
          'Buatlah form pendaftaran online menggunakan Google AI Studio. Tuliskan prompt yang kamu gunakan, copy hasilnya, lalu modifikasi manual: (a) Ganti warna tombol, (b) Tambahkan 1 field baru, (c) Perbaiki validasi. Bandingkan hasil AI vs modifikasi manual kamu.',
          'Buatlah portfolio pribadi dengan Google AI Studio (prompt: "Buatkan portfolio siswa SMK dengan dark mode, hero, skills progress bar, 3 project cards, contact form"). Deploy hasilnya ke Vercel. Kirimkan link Vercel + screenshot prompt yang kamu gunakan.',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  B. DEPLOY WEB push GITHUB & VERCEL                              */}
      {/* ================================================================ */}
      <MateriCard icon={Rocket} title="B. Deploy Web push GitHub & Vercel">

        {/* B.1 Mengapa Deploy Penting */}
        <h4 style={{marginTop: 0}}>B.1 Mengapa Deploy itu Penting?</h4>
        <p>Membuat website di komputer lokal (localhost) hanya bisa diakses oleh kamu sendiri. Deploy adalah proses mengunggah website ke server agar bisa diakses oleh siapa saja di seluruh dunia melalui URL publik. Tanpa deploy, tidak ada orang yang bisa melihat hasil kerja kamu.</p>
        <h3 style={{marginTop: 12}}>Alur Deploy Modern (GitHub + Vercel):</h3>
        <ul>
          <li><strong>1. Kode di Lokal</strong> - Kamu menulis kode di VS Code / editor</li>
          <li><strong>2. Git Init</strong> - Inisialisasi version control di folder project</li>
          <li><strong>3. Push ke GitHub</strong> - Kode diunggah ke repository GitHub</li>
          <li><strong>4. Vercel Detect</strong> - Vercel mendeteksi push baru secara otomatis</li>
          <li><strong>5. Build & Deploy</strong> - Vercel membangun dan mendeploy website</li>
          <li><strong>6. Live!</strong> - Website bisa diakses via URL seperti myapp.vercel.app</li>
        </ul>
        <div className="info-box">
          <strong><Target size={14} /> Mengapa GitHub + Vercel?</strong>
          <p><strong>GitHub</strong> = version control (riwayat perubahan kode, kolaborasi tim, backup online gratis). <strong>Vercel</strong> = hosting modern (gratis untuk personal, auto-deploy setiap push, HTTPS otomatis, edge network global, analytics built-in). Keduanya gratis dan sangat populer di industri web development.</p>
        </div>

        {/* B.2 Membuat Akun GitHub */}
        <h4 style={{marginTop: 0}}>B.2 Membuat Akun GitHub & Repository Baru</h4>
        <p>GitHub adalah platform kolaborasi开发 berbasis Git. Semua kode project disimpan di repository (folder online) yang bisa diakses dari mana saja. Ikuti langkah berikut untuk membuat akun dan repository baru.</p>

        {/* Step 1 */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #6366f1, #8b5cf6)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>1</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Buka GitHub & Klik Sign Up</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Buka browser, ketik <code>github.com</code> di address bar. Di halaman utama GitHub, klik tombol <strong>"Sign up"</strong> di pojok kanan atas.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace'}}>
              {'->'} Buka github.com<br/>
              {'->'} Klik tombol <span style={{color:'#a78bfa'}}>Sign up</span> (pojok kanan atas)<br/>
              {'->'} Masukkan email, buat password, pilih username unik<br/>
              {'->'} Selesaikan verifikasi (captcha) lalu klik "Create account"
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Halaman utama github.com dengan tombol Sign up yang terlihat jelas
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #6366f1, #8b5cf6)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>2</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Klik "+" lalu Pilih "New Repository"</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Setelah login, di pojok kanan atas halaman GitHub ada tombol <strong>"+"</strong> (plus). Klik tombol itu, lalu pilih <strong>"New repository"</strong> dari dropdown.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace'}}>
              {'->'} Login ke github.com<br/>
              {'->'} Klik tombol <span style={{color:'#a78bfa'}}>+</span> di pojok kanan atas<br/>
              {'->'} Pilih <span style={{color:'#a78bfa'}}>New repository</span> dari dropdown menu
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Tombol "+" di pojok kanan atas yang sudah diklik, dropdown terbuka dengan opsi "New repository" terlihat
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #6366f1, #8b5cf6)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>3</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Isi Form Repository</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Isi form pembuatan repository dengan informasi project kamu:</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace', lineHeight:1.8}}>
              <strong style={{color:'#a78bfa'}}>Repository name:</strong> <span style={{color:'#fbbf24'}}>portofolio-siswa</span> (nama bebas, tanpa spasi)<br/>
              <strong style={{color:'#a78bfa'}}>Description:</strong> Website portofolio pribadi (opsional)<br/>
              <strong style={{color:'#a78bfa'}}>Visibility:</strong> <span style={{color:'#34d399'}}>Public</span> (gratis, bisa dilihat semua orang) atau <span style={{color:'#fb923c'}}>Private</span> (hanya kamu)<br/>
              <strong style={{color:'#a78bfa'}}>Initialize:</strong> Centang <span style={{color:'#34d399'}}>"Add a README file"</span> sebagai file awal
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Form "Create a new repository" yang sudah terisi (repository name, description, Public dipilih, README dicentang)
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #6366f1, #8b5cf6)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>4</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Klik "Create Repository"</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Setelah semua terisi, klik tombol <strong>"Create repository"</strong> di bawah form. GitHub akan membuat repository baru dan kamu akan dibawa ke halaman repository.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace'}}>
              {'->'} Klik tombol <span style={{color:'#a78bfa'}}>Create repository</span> (hijau)<br/>
              {'->'} Tunggu beberapa detik<br/>
              {'->'} Kamu akan dibawa ke halaman repository baru
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Halaman repository baru dengan nama "portofolio-siswa", file README.md terlihat, dan tombol "Code" hijau di pojok kanan
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #6366f1, #8b5cf6)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>5</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Copy URL Repository</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Di halaman repository, klik tombol <strong>"{'<>'} Code"</strong> (hijau) di pojok kanan. Pilih tab <strong>"HTTPS"</strong>, lalu copy URL yang muncul. URL inilah yang akan kamu gunakan untuk menghubungkan project lokal ke GitHub.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace', lineHeight:1.8}}>
              <strong style={{color:'#a78bfa'}}>Klik tombol Code {'</>'} (hijau):</strong><br/>
              {'->'} Pilih tab <span style={{color:'#34d399'}}>HTTPS</span><br/>
              {'->'} Copy URL: <span style={{color:'#fbbf24'}}>https://github.com/username/portofolio-siswa.git</span><br/>
              {'->'} Klik ikon 📋 (copy) di sebelah URL
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Dropdown Code terbuka, tab HTTPS aktif, URL terlihat dengan ikon copy di sebelahnya
            </div>
          </div>
        </div>

        <div className="info-box">
          <strong><AlertTriangle size={14} /> Keamanan: Jangan Push File Rahasia!</strong>
          <p>Jangan pernah push file .env, API keys, password, atau token ke GitHub! Buat file <code>.gitignore</code> di folder project untuk mencegah file rahasia ter-push. Contoh isi .gitignore: <code>.env</code>, <code>node_modules/</code>, <code>__pycache__/</code>, <code>.DS_Store</code>, <code>dist/</code>.</p>
        </div>

        {/* B.3 Mengkoneksikan Project Google AI Studio ke GitHub */}
        <h4 style={{marginTop: 24}}>B.3 Mengkoneksikan Project Google AI Studio ke GitHub</h4>
        <p>Sekarang kita akan menghubungkan website yang sudah kamu buat di <strong>Google AI Studio</strong> ke <strong>GitHub</strong> agar bisa di-push (disimpan online) dan nantinya di-deploy ke Vercel. Pastikan <strong>Git</strong> sudah terinstall di komputer kamu (download di <code>git-scm.com</code> jika belum).</p>

        <div className="info-box" style={{marginBottom:20}}>
          <strong><Target size={14} /> Alur Lengkap: Google AI Studio {'->'} Lokal {'->'} GitHub {'->'} Vercel</strong>
          <p><strong>1.</strong> Buat website di Google AI Studio (generate kode pakai prompt) {'->'} <strong>2.</strong> Copy kode hasil AI ke file lokal (VS Code) {'->'} <strong>3.</strong> Init Git + push ke GitHub {'->'} <strong>4.</strong> Deploy dari GitHub ke Vercel {'->'} <strong>5.</strong> Website live! Kami sekarang di langkah <strong>2 dan 3</strong>.</p>
        </div>

        {/* Step 1 — Generate Kode di Google AI Studio */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #6366f1, #8b5cf6)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>1</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Generate Kode Website di Google AI Studio</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Buka <code>aistudio.google.com</code>, login pakai akun Google, lalu tulis prompt untuk membuat website. AI akan menghasilkan kode HTML + CSS + JavaScript.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace', lineHeight:1.8}}>
              <strong style={{color:'#a78bfa'}}>Contoh prompt yang bisa kamu tulis:</strong><br/>
              <span style={{color:'#fbbf24'}}>"Buatkan landing page sederhana dalam satu file HTML. Isi: hero section dengan judul 'My Portfolio', 3 feature cards, dan footer. Gunakan CSS internal, warna biru-ungu, responsive."</span>
              <br/><br/>
              <strong style={{color:'#a78bfa'}}>Yang terjadi:</strong><br/>
              {'->'} AI generate kode HTML lengkap + CSS internal<br/>
              {'->'} Kode muncul di chat panel sebelah kanan<br/>
              {'->'} Klik tombol <span style={{color:'#34d399'}}>Copy</span> (ikon 📋) untuk copy semua kode
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Halaman Google AI Studio yang menunjukkan prompt di kolom kiri dan kode hasil generate di kolom kanan
            </div>
          </div>
        </div>

        {/* Step 2 — Buat Folder & Simpan File */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #6366f1, #8b5cf6)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>2</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Buat Folder Project & Simpan File</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Buat folder baru di komputer kamu, lalu paste kode hasil AI Studio ke file-file yang sesuai. Buka VS Code atau text editor lainnya.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace', lineHeight:1.8}}>
              <strong style={{color:'#fbbf24'}}>Langkah:</strong><br/>
              {'->'} Buka File Explorer, buat folder baru: <span style={{color:'#a78bfa'}}>portofolio-ai</span><br/>
              {'->'} Buka folder itu di VS Code (File {'>'} Open Folder)<br/>
              {'->'} Buat file baru: klik ikon New File, nama: <span style={{color:'#34d399'}}>index.html</span><br/>
              {'->'} <strong>Paste</strong> kode hasil AI Studio (Ctrl+V) ke file index.html<br/>
              {'->'} <strong>Save</strong> file (Ctrl+S)
            </div>
            <div style={{background:'#0f172a', color:'#e2e8f0', padding:12, borderRadius:8, fontSize:'0.82rem', fontFamily:'monospace', lineHeight:1.8, marginTop:8}}>
              <strong style={{color:'#fbbf24'}}>Struktur folder seharusnya:</strong><br/>
              <span style={{color:'#94a3b8'}}>portofolio-ai/</span><br/>
              <span style={{color:'#94a3b8'}}>  {'└── '}index.html</span> <span style={{color:'#64748b'}}>{'<-- kode hasil AI Studio'}</span>
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> VS Code yang menunjukkan folder portofolio-ai dengan file index.html terbuka, kode HTML terlihat
            </div>
          </div>
        </div>

        {/* Step 3 — Buka Terminal */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #6366f1, #8b5cf6)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>3</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Buka Terminal di Folder Project</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Buka terminal di dalam folder project kamu. Terminal ini akan menjalankan semua perintah Git.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace', lineHeight:1.8}}>
              <strong style={{color:'#fbbf24'}}>Cara 1 - VS Code (Recommended):</strong><br/>
              {'->'} Klik menu <span style={{color:'#a78bfa'}}>Terminal {'>'} New Terminal</span><br/>
              {'->'} Atau tekan shortcut <span style={{color:'#a78bfa'}}>Ctrl + {'`'}</span> (backtick)<br/>
              {'->'} Terminal terbuka di bagian bawah VS Code<br/>
              <br/>
              <strong style={{color:'#fbbf24'}}>Cara 2 - Command Prompt / PowerShell:</strong><br/>
              {'->'} Buka File Explorer, navigasi ke folder project<br/>
              {'->'} Klik address bar (bagian atas), ketik <span style={{color:'#a78bfa'}}>cmd</span>, tekan Enter<br/>
              {'->'} Command Prompt terbuka di folder project<br/>
              <br/>
              <strong style={{color:'#fbbf24'}}>Cara 3 - Git Bash (jika sudah install Git):</strong><br/>
              {'->'} Klik kanan di dalam folder project<br/>
              {'->'} Pilih <span style={{color:'#a78bfa'}}>Open Git Bash here</span>
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> VS Code dengan terminal terbuka di bagian bawah, path terminal menunjukkan folder portofolio-ai
            </div>
          </div>
        </div>

        {/* Step 4 — Git Init */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #f59e0b, #f97316)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>4</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Inisialisasi Git (git init)</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Jalankan <code>git init</code> di terminal untuk mengubah folder project menjadi Git repository lokal. Ini seperti menyalakan "riwayat perubahan" untuk folder ini. Cukup dilakukan <strong>SEKALI</strong> saja.</p>
            <div style={{background:'#0f172a', color:'#e2e8f0', padding:12, borderRadius:8, fontSize:'0.82rem', fontFamily:'monospace', lineHeight:1.8}}>
              <span style={{color:'#64748b'}}>$</span> <span style={{color:'#34d399'}}>git init</span><br/>
              <span style={{color:'#94a3b8'}}>Initialized empty Git repository in C:/Users/.../portofolio-ai/.git/</span>
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Terminal dengan perintah <code>git init</code> dan pesan "Initialized empty Git repository"
            </div>
          </div>
        </div>

        {/* Step 5 — Git Add + Commit */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #f59e0b, #f97316)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>5</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Tambah & Simpan File (git add + commit)</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Jalankan <code>git add .</code> untuk menambahkan semua file ke staging area, lalu <code>git commit</code> untuk menyimpan snapshot pertama kali.</p>
            <div style={{background:'#0f172a', color:'#e2e8f0', padding:12, borderRadius:8, fontSize:'0.82rem', fontFamily:'monospace', lineHeight:1.8}}>
              <span style={{color:'#64748b'}}>$</span> <span style={{color:'#34d399'}}>git add .</span><br/>
              <span style={{color:'#94a3b8'}}>(Tidak ada output = berhasil!)</span><br/>
              <br/>
              <span style={{color:'#64748b'}}>$</span> <span style={{color:'#34d399'}}>git commit -m "feat: buat landing page dari Google AI Studio"</span><br/>
              <span style={{color:'#94a3b8'}}>[main (root-commit) a1b2c3d] feat: buat landing page dari Google AI Studio</span><br/>
              <span style={{color:'#94a3b8'}}> 1 file changed, 85 insertions(+)</span>
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Terminal dengan kedua perintah sudah dijalankan, pesan commit menunjukkan "1 file changed"
            </div>
          </div>
        </div>

        {/* Step 6 — Buat Repo di GitHub */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #f59e0b, #f97316)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>6</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Buat Repository Baru di GitHub</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Buka <code>github.com</code> di browser, buat repository baru untuk project ini. Repository = folder online tempat kode kamu disimpan.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace', lineHeight:1.8}}>
              <strong style={{color:'#a78bfa'}}>Langkah di GitHub:</strong><br/>
              {'->'} Buka <span style={{color:'#fbbf24'}}>github.com</span>, login<br/>
              {'->'} Klik tombol <span style={{color:'#a78bfa'}}>+</span> (pojok kanan atas) {'>'} <span style={{color:'#a78bfa'}}>New repository</span><br/>
              {'->'} Repository name: <span style={{color:'#34d399'}}>portofolio-ai</span> (sesuaikan nama)<br/>
              {'->'} Description: <span style={{color:'#94a3b8'}}>"Website portofolio dari Google AI Studio"</span><br/>
              {'->'} Visibility: <span style={{color:'#34d399'}}>Public</span><br/>
              {'->'} <strong>Jangan centang</strong> apapun di bagian "Initialize" (kita sudah punya kode)<br/>
              {'->'} Klik <span style={{color:'#34d399'}}>Create repository</span>
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Halaman "Create a new repository" di GitHub yang sudah terisi (nama portofolio-ai, Public, tanpa centang Initialize)
            </div>
          </div>
        </div>

        {/* Step 7 — Copy URL + Remote Add */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #f59e0b, #f97316)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>7</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Copy URL Repository & Hubungkan ke Lokal</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Setelah repository dibuat, copy URL repository-nya, lalu jalankan <code>git remote add origin</code> di terminal untuk menghubungkan folder lokal ke GitHub.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace', lineHeight:1.8}}>
              <strong style={{color:'#a78bfa'}}>Di GitHub (browser):</strong><br/>
              {'->'} Di halaman repository baru, klik tombol <span style={{color:'#34d399'}}>{'<>'} Code</span> (hijau)<br/>
              {'->'} Pilih tab <span style={{color:'#a78bfa'}}>HTTPS</span><br/>
              {'->'} Klik ikon 📋 untuk copy URL: <span style={{color:'#fbbf24'}}>https://github.com/username/portofolio-ai.git</span><br/>
              <br/>
              <strong style={{color:'#a78bfa'}}>Di Terminal (VS Code / Command Prompt):</strong><br/>
              <span style={{color:'#64748b'}}>$</span> <span style={{color:'#34d399'}}>git remote add origin https://github.com/username/portofolio-ai.git</span><br/>
              <span style={{color:'#94a3b8'}}>(Tidak ada output = berhasil!)</span>
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Dua screenshot disamping: (kiri) GitHub halaman Code yang terbuka dengan URL terlihat, (kanan) Terminal dengan perintah git remote add origin
            </div>
          </div>
        </div>

        {/* Step 8 — Git Push */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #f59e0b, #f97316)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>8</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Unggah ke GitHub (git push)</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Jalankan <code>git push -u origin main</code> untuk mengunggah kode ke GitHub. Flag <code>-u</code> hanya perlu sekali saja agar Git mengingat branch.</p>
            <div style={{background:'#0f172a', color:'#e2e8f0', padding:12, borderRadius:8, fontSize:'0.82rem', fontFamily:'monospace', lineHeight:1.8}}>
              <span style={{color:'#64748b'}}>$</span> <span style={{color:'#34d399'}}>git push -u origin main</span><br/>
              <span style={{color:'#94a3b8'}}>Enumerating objects: 5, done.</span><br/>
              <span style={{color:'#94a3b8'}}>Counting objects: 100% (5/5), done.</span><br/>
              <span style={{color:'#94a3b8'}}>To https://github.com/username/portofolio-ai.git</span><br/>
              <span style={{color:'#34d399'}}> * [new branch]      main {'->'} main</span><br/>
              <span style={{color:'#34d399'}}>branch 'main' set up to track 'origin/main'.</span>
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Terminal dengan output push yang menunjukkan "main {'->'} main" dan "branch 'main' set up to track"
            </div>
          </div>
        </div>

        {/* Step 9 — Verifikasi */}
        <div style={{display:'flex', gap:16, alignItems:'flex-start', margin:'20px 0', padding:16, background:'var(--bg-secondary)', borderRadius:10, border:'1px solid var(--border)'}}>
          <div style={{flexShrink:0, width:48, height:48, borderRadius:'50%', background:'linear-gradient(135deg, #22c55e, #16a34a)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', fontWeight:700}}>✓</div>
          <div style={{flex:1}}>
            <h4 style={{margin:'0 0 8px'}}>Verifikasi di GitHub - Kode Sudah Online!</h4>
            <p style={{margin:'0 0 8px', fontSize:'0.9rem'}}>Buka halaman repository kamu di GitHub. Refresh halaman. File <code>index.html</code> seharusnya sudah terlihat di repository online! Kode dari Google AI Studio sekarang sudah tersimpan di GitHub.</p>
            <div style={{background:'#1e293b', padding:12, borderRadius:8, fontSize:'0.82rem', color:'#e2e8f0', fontFamily:'monospace', lineHeight:1.8}}>
              <strong style={{color:'#a78bfa'}}>Yang harus terlihat di GitHub:</strong><br/>
              {'->'} File <span style={{color:'#34d399'}}>index.html</span> terlihat di daftar file<br/>
              {'->'} Klik file untuk melihat kode HTML di dalamnya<br/>
              {'->'} Commit message: "feat: buat landing page dari Google AI Studio"<br/>
              {'->'} Branch: main<br/>
              <br/>
              <strong style={{color:'#34d399'}}>Website dari Google AI Studio sekarang sudah online di GitHub! 🎉</strong>
            </div>
            <div style={{marginTop:8, padding:'8px 12px', background:'#f1f5f9', borderRadius:6, fontSize:'0.82rem', color:'#64748b', fontStyle:'italic'}}>
              📸 <strong>Screenshot:</strong> Halaman GitHub repository portofolio-ai yang menunjukkan file index.html, commit message, dan branch main
            </div>
          </div>
        </div>



        <div className="info-box">
          <strong><Lightbulb size={14} /> Troubleshooting: Perintah Git Tidak Dikenali?</strong>
          <p>Jika terminal menampilkan <code>"git: command not found"</code>, berarti Git belum terinstall. Download dan install dari <strong>git-scm.com</strong>. Pilih versi untuk Windows, lalu install dengan pengaturan default. Setelah install, tutup terminal lama, buka terminal baru, lalu coba lagi.</p>
        </div>

        {/* B.4 Deploy ke Vercel */}
        <h4 style={{marginTop: 24}}>B.4 Deploy ke Vercel - Step by Step</h4>
        <ul>
          <li><strong>1. Buat Akun</strong> - Buka vercel.com, klik "Sign Up", pilih "Continue with GitHub"</li>
          <li><strong>2. Import Repository</strong> - Klik "Add New..." &gt; "Project" &gt; pilih repo GitHub</li>
          <li><strong>3. Konfigurasi</strong> - Vercel auto-detect framework. Untuk project static HTML, pilih "Other"</li>
          <li><strong>4. Build Settings</strong> - Output Directory: "." (root) atau "dist" (untuk Vite/React)</li>
          <li><strong>5. Deploy</strong> - Klik "Deploy". Tunggu 30-60 detik.</li>
          <li><strong>6. Live!</strong> - Website bisa diakses di nama-project.vercel.app</li>
        </ul>
        <h3 style={{marginTop: 16}}>Fitur Vercel:</h3>
        <ul>
          <li><strong>Auto-Deploy</strong> - Setiap push ke branch main otomatis trigger deploy baru</li>
          <li><strong>Preview Deploy</strong> - Setiap pull request mendapat URL preview gratis</li>
          <li><strong>HTTPS Otomatis</strong> - SSL certificate gratis untuk semua domain</li>
          <li><strong>Edge Network</strong> - Website di-cache di server global, akses cepat dari mana saja</li>
          <li><strong>Analytics</strong> - Statistik pengunjung built-in (page views, visitors, performance)</li>
        </ul>

        {/* B.5 SPA Routing */}
        <h4 style={{marginTop: 24}}>B.5 SPA Routing - vercel.json</h4>
        <p>Single Page Application (SPA) seperti React/Vue menggunakan client-side routing. Tanpa konfigurasi tambahan, refresh halaman di rute selain "/" akan error 404. Solusinya: vercel.json.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// vercel.json - letakkan di root project
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}`}
        </pre>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Kapan Butuh vercel.json?</strong>
          <p>Static HTML biasa (tanpa router) - tidak perlu. React/Vue dengan React Router - wajib. Next.js - tidak perlu (sudah di-handle otomatis). Tanpa vercel.json, hanya URL "/" yang berfungsi. Rute seperti "/about" atau "/contact" akan 404 saat user refresh.</p>
        </div>

        {/* B.6 Custom Domain */}
        <h4 style={{marginTop: 24}}>B.6 Custom Domain (Opsional)</h4>
        <p>Gunakan domain sendiri (bukan hanya .vercel.app) untuk tampilan lebih profesional:</p>
        <ul>
          <li><strong>1.</strong> Beli domain dari registrar: Namecheap, Google Domains, Niagahoster, domainesia</li>
          <li><strong>2.</strong> Di Vercel: Project &gt; Settings &gt; Domains &gt; masukkan domain &gt; Add</li>
          <li><strong>3.</strong> Vercel berikan 2 DNS records (A record + CNAME) yang harus ditambahkan di panel registrar</li>
          <li><strong>4.</strong> Tunggu propagasi DNS (5 menit s/d 48 jam, biasanya 15-30 menit)</li>
          <li><strong>5.</strong> SSL certificate otomatis di-setup oleh Vercel. Website sudah live di domain sendiri!</li>
        </ul>

        <ContohSoal data={[
          { soal: 'Seorang siswa ingin deploy website portofolionya ke Vercel. Ia sudah punya akun GitHub dan Vercel. Tuliskan L LENGKAP dari awal sampai live, termasuk semua perintah Git yang harus dijalankan!',
            penyelesaian: [
              'Langkah 1 - Setup lokal:\nBuka terminal di folder project:\ngit init\ngit add .\ngit commit -m "initial commit: portofolio website"',
              'Langkah 2 - Buat repo GitHub:\nBuka github.com > "+" > New repository > nama "portofolio" > Create repository\nCopy URL repository (https://github.com/username/portofolio.git)',
              'Langkah 3 - Push ke GitHub:\ngit remote add origin https://github.com/username/portofolio.git\ngit push -u origin main',
              'Langkah 4 - Deploy Vercel:\nBuka vercel.com > Sign in with GitHub\nAdd New... > Project > pilih repo "portofolio"\nFramework: Other (untuk static HTML)\nOutput Directory: . (titik = root)\nKlik Deploy > tunggu 30-60 detik',
              'Langkah 5 - Verifikasi:\nBuka URL yang diberikan Vercel (portofolio.vercel.app)\nCek semua section tampil, test responsive, test link\nJika ada error: cek Build Logs di Vercel dashboard',
              'Update selanjutnya: Cukup git add . > git commit -m "update: ..." > git push. Vercel auto-deploy dalam 30 detik!'
            ]
          },
          { soal: 'Jelaskan perbedaan: (a) git add vs git commit vs git push, (b) git pull vs git clone, (c) main branch vs feature branch. Berikan analogi untuk masing-masing!',
            penyelesaian: [
              '(a) git add = Menandai file yang ingin disimpan (seperti menandai dokumen untuk difotokopi). git commit = Menyimpan snapshot ke history lokal dengan pesan (seperti mengambil foto + menulis catatan). git push = Mengunggah snapshot ke GitHub server (seperti upload foto ke cloud).',
              '(b) git pull = Mengambil perubahan terbaru dari GitHub ke local (seperti sync email). git clone = Membuat salinan LENGKAP repository dari GitHub untuk pertama kali (seperti download seluruh folder project).',
              '(c) main branch = Branch utama berisi kode STABIL dan production-ready (seperti buku final yang sudah dicetak). feature branch = Branch sementara untuk mengembangkan fit BARU tanpa ganggu main (seperti draft yang masih diedit sebelum final).'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah repository baru di GitHub untuk portofolio pribadi. Tuliskan dokumentasi lengkap (minimal 7 langkah): (a) Inisialisasi Git, (b) Membuat repo di GitHub, (c) Push kode, (d) Deploy ke Vercel, (e) Verifikasi live. Sertakan screenshot setiap langkah.',
          'Buatlah .gitignore lengkap untuk 3 jenis project: (1) React + Vite, (2) Node.js + Express, (3) Python Flask. Untuk setiap project, tuliskan minimal 8 item yang harus di-ignore dan jelaskan alasannya.',
          'Jelaskan dengan bahasamu sendiri (minimal 15 kalimat): Apa itu Git? Mengapa Git penting? Apa yang terjadi jika developer TIDAK menggunakan version control? Berikan 2 analogi dari kehidupan nyata.',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  C. PROYEK MINI WEBSITE                                          */}
      {/* ================================================================ */}
      <MateriCard icon={Puzzle} title="C. Proyek Mini Website">

        {/* C.1 Perencanaan */}
        <h4 style={{marginTop: 0}}>C.1 Perencanaan - Landing Page Produk Digital</h4>
        <p>Sebelum menulis kode satu baris pun, seorang developer profesional selalu merencanakan terlebih dahulu. Perencanaan yang baik menghemat waktu debugging dan menghasilkan website yang lebih terstruktur.</p>
        <h3 style={{marginTop: 12}}>Spesifikasi Proyek:</h3>
        <ul>
          <li><strong>Nama Produk</strong> - "CodeMaster" (platform belajar coding untuk siswa SMK)</li>
          <li><strong>Tujuan</strong> - Landing page yang menarik untuk menarik calon pengguna mendaftar</li>
          <li><strong>Teknologi</strong> - HTML5 semantic + CSS3 (Flexbox/Grid) + JavaScript ES6+</li>
          <li><strong>Section Wajib</strong> - Hero, Fitur, Cara Kerja, Testimonial, CTA (email signup), Footer</li>
          <li><strong>Responsif</strong> - Tampil optimal di mobile (320px), tablet (768px), desktop (1200px+)</li>
          <li><strong>Interaktif</strong> - Dark mode toggle, animasi hover, form signup dengan localStorage</li>
          <li><strong>Deploy</strong> - Push ke GitHub, deploy ke Vercel, website live</li>
        </ul>

        {/* C.2 Wireframe */}
        <h4 style={{marginTop: 24}}>C.2 Wireframe & Struktur File</h4>
        <p>Wireframe adalah gambar kasar tata letak website tanpa warna dan gambar detail. Ini seperti peta sebelum membangun rumah.</p>
        <h3 style={{marginTop: 12}}>Struktur File:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`landing-page/
  index.html        <- Halaman utama (struktur konten)
  style.css         <- Semua styling (warna, layout, responsive)
  script.js         <- Interaktivitas (dark mode, form, counter)
  assets/
    logo.svg        <- Logo produk
    hero.png        <- Gambar hero section
  .gitignore        <- File yang di-ignore
  README.md         <- Deskripsi project`}
        </pre>
        <h3 style={{marginTop: 16}}>Wireframe per Section:</h3>
        <ul>
          <li><strong>Hero</strong> - Layout 2 kolom: kiri teks (judul, subjudul, 2 tombol CTA), kanan gambar produk. Background gradient. Counter "X orang sudah mendaftar".</li>
          <li><strong>Features</strong> - Grid 3 card: icon + judul + deskripsi. Setiap card ada hover effect. Background putih/abu muda.</li>
          <li><strong>How It Works</strong> - 3 langkah berurutan dengan nomor/ikon. Penjelasan singkat per langkah. Centered layout.</li>
          <li><strong>Testimonial</strong> - 2-3 card: foto bulat, nama, jabatan, rating bintang, quote. Background berbeda dari section sebelumnya.</li>
          <li><strong>CTA/Signup</strong> - Form email + tombol signup. Counter pendaftar. Background gelap/gradient.</li>
          <li><strong>Footer</strong> - 3 kolom: brand info, quick links, social media. Copyright di bawah.</li>
        </ul>

        {/* C.3 Implementasi */}
        <h4 style={{marginTop: 24}}>C.3 Implementasi - Kode Inti</h4>
        <p>Berikut kode untuk bagian-bagian utama. Kamu bisa langsung copy ke file dan modifikasi sesuai kebutuhan.</p>
        <h3 style={{marginTop: 12}}>style.css - CSS Variables + Dark Mode:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --bg: #ffffff;
  --bg-alt: #f8fafc;
  --text: #1e293b;
  --text-light: #64748b;
  --card-bg: #ffffff;
  --border: #e2e8f0;
}

body.dark {
  --bg: #0f172a;
  --bg-alt: #1e293b;
  --text: #f1f5f9;
  --text-light: #94a3b8;
  --card-bg: #1e293b;
  --border: #334155;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }

/* Hero */
.hero {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem 0;
  min-height: 80vh;
}
.hero-text { flex: 1; }
.hero-text h1 { font-size: 2.8rem; line-height: 1.2; margin-bottom: 1rem; }
.hero-text .highlight { color: var(--primary); }
.hero-text p { font-size: 1.1rem; color: var(--text-light); margin-bottom: 2rem; }
.btn-primary {
  display: inline-block;
  padding: 12px 28px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(99,102,241,.3);
}
.hero-image { flex: 1; }
.hero-image img { width: 100%; max-width: 500px; }

/* Features Grid */
.features {
  padding: 4rem 0;
  background: var(--bg-alt);
}
.features h2 { text-align: center; font-size: 2rem; margin-bottom: 2rem; }
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.feature-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

/* Responsive */
@media (max-width: 768px) {
  .hero { flex-direction: column; text-align: center; min-height: auto; padding: 2rem 0; }
  .hero-text h1 { font-size: 1.8rem; }
  .btn-group { justify-content: center; }
}`}
        </pre>
        <h3 style={{marginTop: 16}}>script.js - Dark Mode + Signup Counter:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// Dark mode toggle
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggle.textContent = isDark ? "\u2600" : "\u263E";
});

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "\u2600";
}

// Signup counter with localStorage
const counter = document.getElementById("counter");
let count = parseInt(localStorage.getItem("signup_count") || "0");
counter.textContent = \`\${count} orang sudah mendaftar\`;

document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  if (email && email.includes("@")) {
    count++;
    localStorage.setItem("signup_count", count);
    counter.textContent = \`\${count} orang sudah mendaftar\`;
    alert("Terima kasih! Kamu sudah terdaftar.");
    document.getElementById("email").value = "";
  } else {
    alert("Masukkan email yang valid!");
  }
});`}
        </pre>

        {/* C.4 Testing & Deployment */}
        <h4 style={{marginTop: 24}}>C.4 Testing & Deployment</h4>
        <h3 style={{marginTop: 12}}>Checklist Testing Lengkap:</h3>
        <ul>
          <li><strong>Visual</strong> - Buka di Chrome, Firefox, Safari. Cek semua section tampil, tidak ada elemen pecah/overlap.</li>
          <li><strong>Responsive</strong> - Resize browser dari 320px ke 1920px. Gunakan DevTools (F12) responsive mode. Cek di iPhone, iPad, Desktop.</li>
          <li><strong>Interaktif</strong> - Klik dark mode toggle, pastikan berubah dan tersimpan. Submit form signup, cek counter bertambah. Refresh halaman, data harus tetap ada.</li>
          <li><strong>Performance</strong> - Buka Lighthouse (F12 &gt; tab Lighthouse). Target: Performance &gt; 90, Accessibility &gt; 80.</li>
          <li><strong>SEO</strong> - Pastikan ada title, meta description, alt text gambar, heading hierarchy benar (h1 cuma 1).</li>
          <li><strong>Link</strong> - Klik semua link di navbar, pastikan smooth scroll ke section yang benar.</li>
        </ul>
        <h3 style={{marginTop: 16}}>Deployment:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`# Terminal - Push ke GitHub
git init
git add .
git commit -m "feat: landing page CodeMaster selesai"
git remote add origin https://github.com/username/codemaster.git
git push -u origin main

# Vercel - Auto-deploy
# Buka vercel.com > Import Project > pilih repo > Deploy
# Website live di codemaster.vercel.app!`}
        </pre>
        <div className="info-box">
          <strong><Award size={14} /> Bonus: Lighthouse Audit</strong>
          <p>Buka Chrome DevTools (F12) &gt; tab Lighthouse &gt; klik "Analyze page load". Lighthouse memberikan skor 0-100 untuk Performance, Accessibility, Best Practices, dan SEO. Ini standar industri untuk mengukur kualitas website. Jika skor rendah, Lighthouse juga memberikan rekomendasi perbaikan spesifik.</p>
        </div>

        <ContohSoal data={[
          { soal: 'Seorang siswa membuat landing page dan mendapat 3 masalah:\n(1) Website tampil bagus di desktop tapi pecah di mobile\n(2) Dark mode tidak tersimpan setelah refresh\n(3) Counter signup tidak bertambah\n\nUntuk setiap masalah: identifikasi penyebab dan berikan solusi lengkap!',
            penyelesaian: [
              '(1) Mobile responsive: Penyebab - Tidak ada media queries atau menggunakan fixed width (px). Solusi: Tambahkan @media (max-width: 768px) { .hero { flex-direction: column; } }. Gunakan relative units (rem, %, vw) daripada px. Test dengan DevTools responsive mode.',
              '(2) Dark mode tidak persist: Penyebab - Tidak menggunakan localStorage. Solusi: Di event listener toggle, tambahkan localStorage.setItem("theme", "dark/light"). Saat page load, cek: if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark").',
              '(3) Counter tidak bertambah: Penyebab - Form melakukan default submit (reload page), atau counter tidak di-update. Solusi: Tambahkan e.preventDefault() di handler form submit, lalu update counter + localStorage di dalam handler.'
            ]
          },
          { soal: 'Tulislah 3 prompt Google AI Studio untuk membantu debugging landing page:\n(a) Prompt untuk memperbaiki layout yang pecah di mobile\n(b) Prompt untuk memperbaiki dark mode\n(c) Prompt untuk optimasi performance\n\nJelaskan apa yang harus kamu lakukan SETELAH mendapat hasil dari AI!',
            penyelesaian: [
              '(a) Prompt mobile: "Tolong perbaiki CSS ini agar responsive di mobile. Tambahkan media query untuk max-width: 768px. Di mobile: hero flex-direction column, font size kurangi, padding kurangi, card grid 1 kolom. Berikan kode CSS lengkap."',
              '(b) Prompt dark mode: "Tolong buatkan fitur dark mode dengan CSS variables dan JavaScript. Gunakan localStorage untuk persist theme. Tambahkan smooth transition 0.3s saat toggle. Berikan kode HTML + CSS + JS lengkap."',
              '(c) Prompt performance: "Berikut kode HTML saya. Tolong optimasi untuk Lighthouse Performance score > 90. Sarankan: lazy loading images, minify CSS/JS, gunakan font-display: swap, kurangi render-blocking resources."',
              'Setelah mendapat hasil AI: (1) Copy ke file, test di browser. (2) Baca dan pahami setiap baris kode. (3) Jangan copy-paste mentah, modifikasi sesuai kebutuhan. (4) Test di berbagai ukuran layar. (5) Bandingkan sebelum vs sesudah di Lighthouse.'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah landing page produk digital (aplikasi/game/layanan buatanmu sendiri). Minimal harus punya: (a) Hero section dengan judul + CTA, (b) Features section 3 card dalam grid, (c) Testimonial 2 card, (d) Footer. Responsive, deploy ke Vercel. Kirimkan link Vercel + screenshot Lighthouse.',
          'Buatlah dokumentasi proyek (README.md) lengkap untuk landing page yang sudah dibuat. Isi minimal: (a) Judul + deskripsi, (b) Screenshot 2 view (desktop + mobile), (c) Tech stack, (d) Cara run di lokal, (e) Link Vercel live, (f) Fitur yang ada. Push ke GitHub.',
          'Lakukan Lighthouse audit pada website yang sudah di-deploy. Tuliskan: (a) Skor 4 kategori, (b) 3 rekomendasi perbaikan, (c) Implementasikan perbaikannya, (d) Audit ulang dan bandingkan skor sebelum vs sesudah. Sertakan screenshot.',
        ]} />

      </MateriCard>

    </div>
  );
}
