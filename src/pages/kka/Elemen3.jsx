import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Terminal, Workflow, Braces, Split, RefreshCw, Bug, Star, CheckSquare } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '3.1 Konsep Dasar Algoritma & Pemrograman' },
  { id: 's2', label: '3.2 Flowchart & Pseudocode' },
  { id: 's3', label: '3.3 Variabel, Tipe Data & Operator' },
  { id: 's4', label: '3.4 Percabangan' },
  { id: 's5', label: '3.5 Perulangan' },
  { id: 's6', label: '3.6 Pengenalan Bahasa Python' },
  { id: 's7', label: '3.7 Debugging & Pengujian' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

function CodeBlock({ children }) {
  return <pre className="code-block"><code>{children}</code></pre>;
}

export default function Elemen3() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_elemen3'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_elemen3" sections={sections} />

      <MateriCard icon={Terminal} title="3.1 Konsep Dasar Algoritma & Pemrograman">
        <p><strong>Algoritma</strong> adalah langkah-langkah logis untuk menyelesaikan masalah, sedangkan <strong>pemrograman</strong> adalah proses menerjemahkan algoritma ke dalam bahasa yang bisa dimengerti komputer.</p>
        <div className="info-box">
          <strong><Star size={14} /> Ciri-ciri Algoritma yang Baik:</strong>
          <ul>
            <li><strong>Logis</strong> — setiap langkah masuk akal dan runtut</li>
            <li><strong>Jelas</strong> — tidak ambigu atau menimbulkan dua penafsiran</li>
            <li><strong>Terbatas</strong> — memiliki awal dan akhir</li>
            <li><strong>Efektif</strong> — menghasilkan solusi yang tepat</li>
          </ul>
        </div>
        <p>Hubungan keduanya: <strong>Algoritma = resep masakan</strong>, <strong>Pemrograman = memasak mengikuti resep tersebut</strong> menggunakan alat dan bahan (bahasa pemrograman).</p>
      </MateriCard>

      <MateriCard icon={Workflow} title="3.2 Flowchart & Pseudocode">
        <p>Ada dua cara umum menulis algoritma: <strong>flowchart</strong> (diagram alir) dan <strong>pseudocode</strong> (menyerupai kode namun bahasa manusia).</p>
        <h3>A. Simbol Dasar Flowchart</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Simbol</th><th>Nama</th><th>Fungsi</th></tr></thead>
            <tbody>
              <tr><td>Oval</td><td>Terminator</td><td>Mulai / selesai</td></tr>
              <tr><td>Jajaran genjang</td><td>Input / Output</td><td>Membaca data / menampilkan hasil</td></tr>
              <tr><td>Persegi panjang</td><td>Proses</td><td>Melakukan perhitungan / penugasan</td></tr>
              <tr><td>Belah ketupat</td><td>Keputusan</td><td>Percabangan (ya / tidak)</td></tr>
              <tr><td>Panah</td><td>Flow line</td><td>Menghubungkan simbol, arah aliran</td></tr>
            </tbody>
          </table>
        </div>
        <h3>B. Contoh Pseudocode — Menghitung Rata-rata</h3>
        <CodeBlock>{`MULAI
  INPUT nilai1, nilai2, nilai3
  total = nilai1 + nilai2 + nilai3
  rata_rata = total / 3
  TAMPILKAN rata_rata
SELESAI`}</CodeBlock>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Latihan:</strong>
          <p>Buatlah pseudocode untuk menghitung luas persegi panjang (panjang × lebar).</p>
        </div>
      </MateriCard>

      <MateriCard icon={Braces} title="3.3 Variabel, Tipe Data & Operator">
        <h3>A. Variabel</h3>
        <p><strong>Variabel</strong> adalah tempat penyimpanan data di memori yang bisa diubah nilainya. Contoh: <code>nama = "Budi"</code>, <code>umur = 16</code>.</p>
        <h3>B. Tipe Data Dasar</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Tipe Data</th><th>Penjelasan</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>Integer</strong></td><td>Bilangan bulat</td><td>16, -5, 100</td></tr>
              <tr><td><strong>Float</strong></td><td>Bilangan desimal</td><td>3.14, 2.5</td></tr>
              <tr><td><strong>String</strong></td><td>Teks</td><td>"Halo", "SMKN 2"</td></tr>
              <tr><td><strong>Boolean</strong></td><td>Benar / salah</td><td>True, False</td></tr>
            </tbody>
          </table>
        </div>
        <h3>C. Operator Dasar</h3>
        <ul>
          <li><strong>Aritmatika:</strong> + − × ÷ dan modulo (%)</li>
          <li><strong>Perbandingan:</strong> &gt;, &lt;, ≥, ≤, ==, !=</li>
          <li><strong>Logika:</strong> AND, OR, NOT</li>
          <li><strong>Penugasan:</strong> = (simpan nilai ke variabel)</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Split} title="3.4 Percabangan (Branching)">
        <p><strong>Percabangan</strong> membuat program mengambil keputusan berdasarkan kondisi. Struktur utamanya adalah <code>IF...ELSE</code>.</p>
        <h3>Contoh Algoritma Percabangan — Nilai Lulus</h3>
        <CodeBlock>{`INPUT nilai
JIKA nilai >= 70 MAKA
  TAMPILKAN "LULUS"
SEBALIKNYA
  TAMPILKAN "TIDAK LULUS"
AKHIR JIKA`}</CodeBlock>
        <p>Dalam Python, percabangan ditulis sebagai:</p>
        <CodeBlock>{`nilai = int(input("Masukkan nilai: "))
if nilai >= 70:
    print("LULUS")
else:
    print("TIDAK LULUS")`}</CodeBlock>
        <div className="info-box">
          <strong><Star size={14} /> Ingat:</strong>
          <p>Pada Python, blok kode di dalam IF harus di-indent (beri jarak/enter). Indentasi menentukan bagian mana yang termasuk dalam kondisi.</p>
        </div>
      </MateriCard>

      <MateriCard icon={RefreshCw} title="3.5 Perulangan (Looping)">
        <p><strong>Perulangan</strong> menjalankan blok kode berulang kali selama kondisi terpenuhi. Dua jenis utama: <code>FOR</code> (jumlah pengulangan diketahui) dan <code>WHILE</code> (berhenti berdasarkan kondisi).</p>
        <h3>Contoh FOR — Mencetak Angka 1 sampai 5</h3>
        <CodeBlock>{`FOR i = 1 SAMPAI 5
  TAMPILKAN i
AKHIR FOR`}</CodeBlock>
        <p>Dalam Python:</p>
        <CodeBlock>{`for i in range(1, 6):
    print(i)`}</CodeBlock>
        <h3>Contoh WHILE — Menghitung Mundur</h3>
        <CodeBlock>{`angka = 5
SELAGI angka > 0 MAKA
  TAMPILKAN angka
  angka = angka - 1
AKHIR SELAGI`}</CodeBlock>
        <div className="info-box warning">
          <strong>Peringatan:</strong> Pastikan kondisi perulangan WHILE pada akhirnya berhenti (loop berubah menuju kondisi berhenti), jika tidak akan terjadi <em>infinite loop</em> (program berjalan terus tanpa henti).
        </div>
      </MateriCard>

      <MateriCard icon={Terminal} title="3.6 Pengenalan Bahasa Python">
        <p><strong>Python</strong> adalah bahasa pemrograman populer yang mudah dipelajari, banyak digunakan untuk data science, kecerdasan artifisial, dan pengembangan web.</p>
        <h3>Kelebihan Python:</h3>
        <ul>
          <li>Mudah dibaca karena sintaksnya mirip bahasa Inggris</li>
          <li>Memiliki banyak pustaka (library) untuk berbagai keperluan</li>
          <li>Gratis dan lintas platform (Windows, Linux, macOS)</li>
          <li>Banyak dipakai di industri kecerdasan artifisial</li>
        </ul>
        <h3>Program Pertama — "Halo Dunia"</h3>
        <CodeBlock>{`print("Halo Dunia!")
nama = input("Siapa namamu? ")
print("Halo,", nama)`}</CodeBlock>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Latihan:</strong>
          <p>Tulis program Python yang menerima dua angka lalu menampilkan hasil penjumlahan dan perkaliannya.</p>
        </div>
      </MateriCard>

      <MateriCard icon={Bug} title="3.7 Debugging & Pengujian">
        <p><strong>Debugging</strong> adalah proses mencari dan memperbaiki kesalahan (bug) dalam program. <strong>Pengujian</strong> adalah memastikan program bekerja sesuai yang diharapkan.</p>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Jenis Kesalahan</th><th>Penjelasan</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Sintaks</strong></td>
                <td>Penulisan kode salah sehingga program tidak bisa dijalankan</td>
                <td>Lupa tanda titik dua setelah <code>if</code>, tanda kurung tidak seimbang</td>
              </tr>
              <tr>
                <td><strong>Logika</strong></td>
                <td>Program berjalan tetapi hasil salah</td>
                <td>Menulis + padahal maksudnya −</td>
              </tr>
              <tr>
                <td><strong>Runtime</strong></td>
                <td>Kesalahan saat program berjalan</td>
                <td>Membagi dengan nol, mengakses data yang tidak ada</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Langkah Debugging:</h3>
        <ol>
          <li>Baca pesan error dengan teliti</li>
          <li>Temukan baris yang bermasalah</li>
          <li>Cek nilai variabel pada titik tersebut</li>
          <li>Perbaiki, lalu uji ulang dengan berbagai input</li>
        </ol>
      </MateriCard>
    </div>
  );
}
