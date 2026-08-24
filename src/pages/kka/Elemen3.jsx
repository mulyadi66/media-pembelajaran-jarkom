import { useEffect, useState } from 'react';
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
  const [open, setOpen] = useState(false);
  return (
    <div className="materi-card" style={{marginBottom: 16}}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={title}
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
        }} aria-hidden="true" />
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

        <h3>Sejarah Singkat Algoritma</h3>
        <p>Kata <strong>algoritma</strong> berasal dari nama ilmuwan Persia, <strong>Al-Khwarizmi</strong>, yang hidup pada abad ke-9. Ia menulis buku tentang aturan berhitung yang menjadi dasar aritmatika. Sejak saat itu, istilah algoritma digunakan untuk langkah-langkah penyelesaian masalah secara sistematis.</p>

        <h3>Level Bahasa Pemrograman</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Level</th><th>Penjelasan</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr><td><strong>Bahasa tingkat rendah</strong></td><td>Dekat dengan bahasa mesin, sulit dibaca manusia</td><td>Assembly, Machine Code</td></tr>
              <tr><td><strong>Bahasa tingkat menengah</strong></td><td>Campuran, dekat dengan perangkat keras</td><td>C, C++</td></tr>
              <tr><td><strong>Bahasa tingkat tinggi</strong></td><td>Mirip bahasa manusia, mudah dipahami</td><td>Python, Java, JavaScript</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Kompiler vs Interpreter</h3>
        <ul>
          <li><strong>Kompiler</strong> — menerjemahkan seluruh kode sekaligus menjadi program. Contoh: C, Java</li>
          <li><strong>Interpreter</strong> — menerjemahkan dan menjalankan kode baris per baris. Contoh: Python, JavaScript</li>
        </ul>
        <div className="info-box warning">
          <strong>Catatan:</strong> Bahasa tingkat tinggi (seperti Python) dipilih untuk pembelajaran karena lebih mudah dipahami, walau kecepatan eksekusinya lebih lambat daripada bahasa rendah.
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Tuliskan algoritma untuk <strong>"meminjam buku di perpustakaan"</strong> minimal 6 langkah.</li>
            <li>Berikan tanda (✓) pada setiap ciri algoritma baik yang terpenuhi oleh algoritmamu (logis, jelas, terbatas, efektif).</li>
            <li>Jelaskan perbedaan algoritma dan pemrograman dengan bahasamu sendiri.</li>
          </ol>
        </div>
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
        <h3>B. Simbol Tambahan yang Perlu Diketahui</h3>
        <ul>
          <li><strong>Segi enam (Preparation)</strong> — inisialisasi atau pemberian nilai awal</li>
          <li><strong>Lingkaran kecil (Connector)</strong> — penghubung aliran pada halaman yang sama</li>
          <li><strong>Lembaran (Document)</strong> — output berupa dokumen atau laporan</li>
          <li><strong>Paralelogram sisi (Data)</strong> — tempat input/output data</li>
        </ul>

        <h3>C. Contoh Flowchart — Mencetak Nama</h3>
        <div className="network-animation">
          <ul>
            <li><strong>Mulai</strong> (oval)</li>
            <li><strong>Input nama</strong> (jajaran genjang)</li>
            <li><strong>Tampilkan nama</strong> (jajaran genjang)</li>
            <li><strong>Selesai</strong> (oval)</li>
          </ul>
        </div>

        <h3>D. Contoh Pseudocode — Menghitung Rata-rata</h3>
        <CodeBlock>{`MULAI
  INPUT nilai1, nilai2, nilai3
  total = nilai1 + nilai2 + nilai3
  rata_rata = total / 3
  TAMPILKAN rata_rata
SELESAI`}</CodeBlock>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Buatlah pseudocode untuk menghitung luas persegi panjang (panjang × lebar).</li>
            <li>Gambarlah flowchart-nya menggunakan simbol yang benar (termasuk simbol mulai dan selesai).</li>
            <li>Jelaskan fungsi dari simbol belah ketupat dan berikan satu contoh keputusannya.</li>
          </ol>
        </div>
      </MateriCard>

      <MateriCard icon={Braces} title="3.3 Variabel, Tipe Data & Operator">
        <h3>A. Variabel</h3>
        <p><strong>Variabel</strong> adalah tempat penyimpanan data di memori yang bisa diubah nilainya. Contoh: <code>nama = "Budi"</code>, <code>umur = 16</code>.</p>
        <div className="info-box warning">
          <strong>Aturan Penamaan Variabel yang Baik:</strong>
          <ul>
            <li>Mulai dengan huruf atau garis bawah (<code>_</code>), bukan angka</li>
            <li>Tidak boleh mengandung spasi — gunakan garis bawah: <code>rata_rata</code></li>
            <li>Tidak boleh memakai kata kunci Python seperti <code>if</code>, <code>for</code>, <code>while</code></li>
            <li>Bersifat <em>case sensitive</em>: <code>nama</code> dan <code>Nama</code> berbeda</li>
            <li>Gunakan nama yang menggambarkan isinya: <code>jumlah_siswa</code> lebih baik daripada <code>js</code></li>
          </ul>
        </div>
        <h3>B. Tipe Data Dasar</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Tipe Data</th><th>Penjelasan</th><th>Contoh</th><th>Di Python</th></tr></thead>
            <tbody>
              <tr><td><strong>Integer</strong></td><td>Bilangan bulat</td><td>16, -5, 100</td><td><code>int</code></td></tr>
              <tr><td><strong>Float</strong></td><td>Bilangan desimal</td><td>3.14, 2.5</td><td><code>float</code></td></tr>
              <tr><td><strong>String</strong></td><td>Teks</td><td>"Halo", "SMKN 2"</td><td><code>str</code></td></tr>
              <tr><td><strong>Boolean</strong></td><td>Benar / salah</td><td>True, False</td><td><code>bool</code></td></tr>
            </tbody>
          </table>
        </div>
        <h3>C. Operator Dasar</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Operator</th><th>Simbol</th><th>Contoh</th><th>Hasil</th></tr></thead>
            <tbody>
              <tr><td rowSpan="4"><strong>Aritmatika</strong></td><td>+</td><td>5 + 3</td><td>8</td></tr>
              <tr><td>-</td><td>5 - 3</td><td>2</td></tr>
              <tr><td>*</td><td>5 * 3</td><td>15</td></tr>
              <tr><td>%</td><td>5 % 3</td><td>2 (sisa bagi)</td></tr>
              <tr><td rowSpan="3"><strong>Perbandingan</strong></td><td>&gt;</td><td>5 &gt; 3</td><td>True</td></tr>
              <tr><td>==</td><td>5 == 3</td><td>False</td></tr>
              <tr><td>!=</td><td>5 != 3</td><td>True</td></tr>
              <tr><td rowSpan="3"><strong>Logika</strong></td><td>and</td><td>True and False</td><td>False</td></tr>
              <tr><td>or</td><td>True or False</td><td>True</td></tr>
              <tr><td>not</td><td>not True</td><td>False</td></tr>
            </tbody>
          </table>
        </div>
        <div className="info-box">
          <strong><Star size={14} /> Ingat:</strong>
          <p>Operator <code>==</code> (sama dengan) dibedakan dengan <code>=</code> (penugasan). <code>=</code> menyimpan nilai ke variabel, sedangkan <code>==</code> membandingkan dua nilai.</p>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Buat tabel berisi data <strong>3 siswa</strong> dengan variabel: nama (string), NIS (integer), nilai rata-rata (float), dan status lulus (boolean).</li>
            <li>Tentukan tipe data yang tepat untuk setiap kolom.</li>
            <li>Tuliskan satu contoh penggunaan operator perbandingan dan satu contoh operator logika.</li>
          </ol>
        </div>
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

        <h3>Percabangan Berjenjang (IF...ELIF...ELSE)</h3>
        <p>Untuk lebih dari dua pilihan, gunakan <code>ELIF</code>. Contoh menentukan nilai huruf:</p>
        <CodeBlock>{`nilai = int(input("Masukkan nilai: "))
if nilai >= 90:
    print("A")
elif nilai >= 80:
    print("B")
elif nilai >= 70:
    print("C")
else:
    print("D")`}</CodeBlock>
        <div className="info-box warning">
          <strong>Urutan Kondisi Penting:</strong>
          <p>Python mengecek kondisi dari atas ke bawah, lalu berhenti pada kondisi pertama yang benar. Maka urutkan dari kondisi tertinggi ke terendah agar hasilnya tepat.</p>
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Tulis pseudocode dan program Python untuk menentukan apakah sebuah bilangan <strong>genap atau ganjil</strong>.</li>
            <li>Tulis pseudocode dan program Python untuk menentukan <strong>nilai huruf</strong>: ≥90 = A, ≥80 = B, ≥70 = C, selainnya = D.</li>
            <li>Uji programmu dengan minimal 3 nilai berbeda dan catat hasilnya.</li>
          </ol>
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
        <h3>Memahami Fungsi range()</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Penulisan</th><th>Hasil</th><th>Keterangan</th></tr></thead>
            <tbody>
              <tr><td><code>range(5)</code></td><td>0, 1, 2, 3, 4</td><td>Mulai dari 0, berhenti sebelum 5</td></tr>
              <tr><td><code>range(1, 6)</code></td><td>1, 2, 3, 4, 5</td><td>Mulai dari 1, berhenti sebelum 6</td></tr>
              <tr><td><code>range(2, 11, 2)</code></td><td>2, 4, 6, 8, 10</td><td>Lompat 2 setiap langkah</td></tr>
              <tr><td><code>range(10, 0, -1)</code></td><td>10, 9, ..., 1</td><td>Menghitung mundur</td></tr>
            </tbody>
          </table>
        </div>
        <h3>Break dan Continue</h3>
        <ul>
          <li><strong>break</strong> — menghentikan perulangan secara paksa</li>
          <li><strong>continue</strong> — melewati satu iterasi, lalu lanjut ke iterasi berikutnya</li>
        </ul>
        <CodeBlock>{`for i in range(1, 10):
    if i == 5:
        break
    print(i)   # mencetak 1 2 3 4, berhenti di 5`}</CodeBlock>
        <CodeBlock>{`for i in range(1, 6):
    if i == 3:
        continue
    print(i)   # mencetak 1 2 4 5, melewati 3`}</CodeBlock>
        <div className="info-box warning">
          <strong>Peringatan:</strong> Pastikan kondisi perulangan WHILE pada akhirnya berhenti (loop berubah menuju kondisi berhenti), jika tidak akan terjadi <em>infinite loop</em> (program berjalan terus tanpa henti).
        </div>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Tulis pseudocode dan program Python untuk mencetak <strong>bilangan genap dari 2 sampai 20</strong>.</li>
            <li>Tulis pseudocode dan program Python untuk menjumlahkan <strong>1 + 2 + 3 + ... + N</strong> (N dimasukkan pengguna).</li>
            <li>Tuliskan satu contoh kondisi yang menyebabkan infinite loop, lalu bagaimana cara memperbaikinya.</li>
          </ol>
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

        <h3>Cara Menjalankan Python</h3>
        <ol>
          <li>Unduh dan instal Python dari situs resminya, atau gunakan editor online (contoh: <strong>Replit</strong>, <strong>Google Colab</strong>)</li>
          <li>Tulis kode pada editor teks dan simpan dengan ekstensi <code>.py</code></li>
          <li>Jalankan melalui terminal: <code>python nama_file.py</code></li>
          <li>Di Google Colab, tinggal klik tombol <em>Run</em> pada setiap sel kode</li>
        </ol>

        <h3>Komentar dan f-string</h3>
        <CodeBlock>{`# Ini adalah komentar, tidak akan dieksekusi
nama = "Budi"
umur = 16
print(f"Nama saya {nama}, umur {umur} tahun")  # f-string`}</CodeBlock>
        <div className="info-box">
          <strong><Star size={14} /> Catatan:</strong>
          <p>Komentar ditulis dengan tanda <code>#</code> dan berguna untuk menjelaskan maksud kode. <strong>f-string</strong> memudahkan menyisipkan variabel ke dalam teks dengan kurung kurawal <code>{'{...}'}</code>.</p>
        </div>

        <h3>Program Pertama — "Halo Dunia"</h3>
        <CodeBlock>{`print("Halo Dunia!")
nama = input("Siapa namamu? ")
print("Halo,", nama)`}</CodeBlock>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Tulis program Python yang menerima <strong>nama dan umur</strong>, lalu menampilkan sapaan beserta kategori umur (anak, remaja, dewasa).</li>
            <li>Tulis program Python yang menghitung <strong>luas lingkaran</strong> (π × r × r, gunakan r = 3.14).</li>
            <li>Jalankan kedua program dan sertakan tangkapan layar hasilnya.</li>
          </ol>
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

        <h3>Teknik Menemukan Bug — Tracing dengan print()</h3>
        <p>Salah satu cara sederhana melacak bug adalah menampilkan nilai variabel pada setiap tahap:</p>
        <CodeBlock>{`total = 0
for i in range(1, 5):
    total = total + i
    print(f"i = {i}, total sekarang = {total}")
print("Hasil akhir:", total)`}</CodeBlock>

        <h3>Membaca Pesan Error (Traceback)</h3>
        <ul>
          <li><strong>Baris terakhir</strong> — jenis kesalahan (misal: <code>ZeroDivisionError</code>, <code>NameError</code>)</li>
          <li><strong>Baris di atasnya</strong> — lokasi file dan nomor baris yang bermasalah</li>
          <li>Perbaiki bagian paling awal yang bermasalah, karena error lanjutan biasanya disebabkan error pertama</li>
        </ul>

        <h3>Menguji Program dengan Batasan (Boundary Test)</h3>
        <ul>
          <li>Uji dengan nilai terkecil dan terbesar yang mungkin</li>
          <li>Uji dengan nilai tepi (contoh: nilai = 69, 70, 71 untuk batas KKM 70)</li>
          <li>Uji dengan input kosong atau tidak valid</li>
        </ul>
        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <p>Perhatikan program berikut yang <strong>sengaja mengandung bug</strong>:</p>
          <CodeBlock>{`nama = input("Masukkan nama: ")
if nama == "admin"
    print("Selamat datang, admin!")
else
    print("Halo,", nama)`}</CodeBlock>
          <ol>
            <li>Temukan dan perbaiki bug pada program di atas.</li>
            <li>Uji dengan dua input berbeda dan catat hasilnya.</li>
            <li>Sebutkan jenis kesalahan yang kamu temukan (sintaks, logika, atau runtime).</li>
          </ol>
        </div>
      </MateriCard>
    </div>
  );
}
