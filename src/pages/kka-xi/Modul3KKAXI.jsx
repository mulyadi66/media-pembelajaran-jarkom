import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Terminal, Code2, Bug, Repeat, ArrowRight, Target, Award } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '3.1 Variabel dan Tipe Data' },
  { id: 's2', label: '3.2 Percabangan (Conditional)' },
  { id: 's3', label: '3.3 Perulangan (Looping)' },
  { id: 's4', label: '3.4 Fungsi dan Debugging' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Modul3KKAXI() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_xi_modul3'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_xi_modul3" sections={sections} />

      <MateriCard icon={Terminal} title="3.1 Variabel dan Tipe Data">
        <p>Variabel adalah nama yang mereferensikan nilai dalam memgi yang dapat berubah selama program berjalan. Pemahaman variabel dan tipe data adalah fondasi pertama dalam belajar pemrograman.</p>
        <h3 style={{marginTop: 10}}>Deklarasi Variabel di Python:</h3>
        <ul>
          <li><code>nama = "Budi"</code> — String (teks)</li>
          <li><code>umur = 16</code> — Integer (bilangan bulat)</li>
          <li><code>nilai = 95.5</code> — Float (bilangan desimal)</li>
          <li><code>lulus = True</code> — Boolean (benar/salah)</li>
        </ul>
        <h3 style={{marginTop: 16}}>Operator Umum:</h3>
        <ul>
          <li><strong>Aritmatika:</strong> +, -, *, /, //(floor division), %(modulus), **(pangkat)</li>
          <li><strong>Perbandingan:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
          <li><strong>Logika:</strong> and, or, not</li>
          <li><strong>Penugasan:</strong> =, +=, -=, *=, /=</li>
        </ul>
        <div className="info-box">
          <strong><Target size={14} /> Input & Output</strong>
          <p><code>input("Masukkan nama: ")</code> untuk menerima input, <code>print("Hello")</code> untuk menampilkan output ke layar.</p>
        </div>
      </MateriCard>

      <MateriCard icon={ArrowRight} title="3.2 Percabangan (Conditional)">
        <p>Percabangan memungkinkan program menjalankan blok kode yang berbeda berdasarkan kondisi tertentu. Ini membuat program bisa "berpikir" dan membuat keputusan.</p>
        <h3 style={{marginTop: 10}}>Struktur Percabangan Python:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`nilai = 85

if nilai >= 90:
    print("Sangat Baik")
elif nilai >= 70:
    print("Baik")
elif nilai >= 50:
    print("Cukup")
else:
    print("Perlu Perbaikan")`}
        </pre>
        <h3 style={{marginTop: 16}}>Tips Percabangan:</h3>
        <ul>
          <li>Gunakan operator perbandingan yang tepat</li>
          <li>Urutkan kondisi dari yang paling spesifik ke umum</li>
          <li>Hindari nesting terlalu dalam — gunakan fungsi atau logika alternatif</li>
          <li>Ternary operator untuk kondisi singkat: <code>{'"Lulus" if nilai >= 70 else "Tidak Lulus"'}</code></li>
        </ul>
      </MateriCard>

      <MateriCard icon={Repeat} title="3.3 Perulangan (Looping)">
        <p>Perulangan memungkinkan program menjalankan blok kode berulang kali. Sangat berguna untuk memproses data dalam jumlah banyak.</p>
        <h3 style={{marginTop: 10}}>For Loop:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`# Menghitung 1 sampai 5
for i in range(1, 6):
    print(i)

# Iterasi list
buah = ["apel", "mangga", "jeruk"]
for b in buah:
    print(b)`}
        </pre>
        <h3 style={{marginTop: 16}}>While Loop:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`# Perulangan dengan kondisi
count = 0
while count < 5:
    print(count)
    count += 1`}
        </pre>
        <h3 style={{marginTop: 16}}>Break dan Continue:</h3>
        <ul>
          <li><code>break</code> — Menghentikan perulangan secara paksa</li>
          <li><code>continue</code> — Melewati iterasi saat ini dan lanjut ke berikutnya</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Code2} title="3.4 Fungsi dan Debugging">
        <p>Fungsi adalah blok kode yang dapat dipanggil ulang. Membuat kode lebih terorganisir, dapat digunakan kembali, dan mudah di-maintain.</p>
        <h3 style={{marginTop: 10}}>Membuat Fungsi:</h3>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`def hitung_luas(panjang, lebar):
    """Menghitung luas persegi panjang"""
    return panjang * lebar

# Pemanggilan
luas = hitung_luas(10, 5)
print(f"Luas = {luas}")  # Luas = 50`}
        </pre>
        <div className="info-box">
          <strong><Bug size={14} /> Debugging</strong>
          <p>Debugging adalah proses menemukan dan memperbaiki error. Cara umum: print debugging (cetak nilai di titik tertentu), membaca error message dengan seksama, dan menggunakan debugger IDE.</p>
        </div>
        <h3 style={{marginTop: 16}}>Jenis Error Umum:</h3>
        <ul>
          <li><strong>Syntax Error</strong> — Kesalahan penulisan kode (misal: tanda titik koma hilang)</li>
          <li><strong>Runtime Error</strong> — Error saat program berjalan (misal: bagi nol, variabel undefined)</li>
          <li><strong>Logic Error</strong> — Program berjalan tapi hasil salah (paling sulit ditemukan!)</li>
        </ul>
      </MateriCard>
    </div>
  );
}
