import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Code2, Layout, Smartphone, Globe, Paintbrush, Target, Award } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '4.1 Dasar HTML dan CSS' },
  { id: 's2', label: '4.2 JavaScript untuk Interaktivitas' },
  { id: 's3', label: '4.3 Responsive Design' },
  { id: 's4', label: '4.4 DOM Manipulation' },
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

      <MateriCard icon={Layout} title="4.1 Dasar HTML dan CSS">
        <p>HTML (HyperText Markup Language) dan CSS (Cascading Style Sheets) adalah dua teknologi fundamental dalam pengembangan web. HTML menyediakan struktur, CSS mengatur tampilan.</p>
        <h3 style={{marginTop: 10}}>Struktur Dasar HTML:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`<!DOCTYPE html>
<html>
<head>
  <title>Website Pertamaku</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Ini adalah website pertama saya.</p>
</body>
</html>`}
        </pre>
        <h3 style={{marginTop: 16}}>Tag HTML Penting:</h3>
        <ul>
          <li><code>&lt;h1&gt; - &lt;h6&gt;</code> — Heading (judul)</li>
          <li><code>&lt;p&gt;</code> — Paragraf</li>
          <li><code>&lt;a href="url"&gt;</code> — Tautan/link</li>
          <li><code>&lt;img src="url" alt="teks"&gt;</code> — Gambar</li>
          <li><code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code> — Daftar</li>
          <li><code>&lt;div&gt;, &lt;span&gt;</code> — Container</li>
          <li><code>&lt;form&gt;, &lt;input&gt;, &lt;button&gt;</code> — Formulir</li>
        </ul>
        <h3 style={{marginTop: 16}}>CSS Dasar:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`h1 {
  color: #2563eb;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}`}
        </pre>
      </MateriCard>

      <MateriCard icon={Paintbrush} title="4.2 JavaScript untuk Interaktivitas">
        <p>JavaScript adalah bahasa pemrograman yang membuat halaman web interaktif. Bisa merespons aksi pengguna, mengubah konten dinamis, dan berkomunikasi dengan server.</p>
        <h3 style={{marginTop: 10}}>Dasar JavaScript:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// Variabel
let nama = "Siswa";
const PI = 3.14;

// Fungsi
function sapa>Nama) {
  return "Halo, " + nama + "!";
}

// Event listener
document.getElementById("btn").addEventListener("click", function() {
  alert(sapa(nama));
});`}
        </pre>
        <h3 style={{marginTop: 16}}>Event yang Sering Digunakan:</h3>
        <ul>
          <li><code>click</code> — Klik mouse pada elemen</li>
          <li><code>submit</code> — Formulir dikirim</li>
          <li><code>keydown</code> — Tombol keyboard ditekan</li>
          <li><code>mouseover</code> — Mouse di atas elemen</li>
          <li><code>load</code> — Halaman selesai dimuat</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Smartphone} title="4.3 Responsive Design">
        <p>Responsive design memastikan website tampil optimal di berbagai ukuran layar — dari smartphone hingga desktop. Ini penting karena lebih dari 50% traffic web berasal dari mobile.</p>
        <h3 style={{marginTop: 10}}>Teknik Responsive Design:</h3>
        <ul>
          <li><strong>Mobile-First Approach</strong> — Desain untuk layar kecil dulu, lalu perbesar dengan media queries.</li>
          <li><strong>Media Queries CSS</strong> — Aturan style yang diterapkan berdasarkan ukuran layar.</li>
          <li><strong>Flexbox</strong> — Layout fleksibel yang otomatis menyesuaikan.</li>
          <li><strong>CSS Grid</strong> — Layout dua dimensi yang powerful.</li>
          <li><strong>Relative Units</strong> — Gunakan %, vw, vh, rem, em daripada px.</li>
        </ul>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`/* Mobile-first */
.container {
  display: flex;
  flex-direction: column;
}

/* Tablet dan lebih besar */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}`}
        </pre>
      </MateriCard>

      <MateriCard icon={Globe} title="4.4 DOM Manipulation">
        <p>DOM (Document Object Model) adalah representasi tree dari struktur halaman web. JavaScript dapat membaca dan memanipulasi DOM untuk mengubah konten, style, dan struktur halaman secara dinamis.</p>
        <h3 style={{marginTop: 10}}>Manipulasi DOM Dasar:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`// Memilih elemen
const judul = document.getElementById("judul");
const items = document.querySelectorAll(".item");

// Mengubah konten
judul.textContent = "Judul Baru";
judul.innerHTML = "<em>Judul Italic</em>";

// Mengubah style
judul.style.color = "blue";

// Menambah/hapus class
judul.classList.add("active");
judul.classList.remove("hidden");

// Membuat elemen baru
const baru = document.createElement("p");
baru.textContent = "Paragraf baru";
document.body.appendChild(baru);`}
        </pre>
        <div className="info-box">
          <strong><Award size={14} /> API (Application Programming Interface)</strong>
          <p>API memungkinkan website berkomunikasi dengan server/layanan lain. Dengan <code>fetch()</code>, JavaScript bisa mengambil data dari API dan menampilkannya di halaman web secara real-time.</p>
        </div>
      </MateriCard>
    </div>
  );
}
