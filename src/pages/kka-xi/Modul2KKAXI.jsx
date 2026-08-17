import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Brain, Database, Layers, Search, BarChart3, Target, Award } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '2.1 Konsep Algoritma' },
  { id: 's2', label: '2.2 Jenis-jenis Struktur Data' },
  { id: 's3', label: '2.3 Sorting dan Searching' },
  { id: 's4', label: '2.4 Analisis Kompleksitas Algoritma' },
];

function MateriCard({ icon: Icon, title, children }) {
  return (
    <div className="materi-card">
      <h3><Icon size={18} /> {title}</h3>
      {children}
    </div>
  );
}

export default function Modul2KKAXI() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_xi_modul2'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_xi_modul2" sections={sections} />

      <MateriCard icon={Brain} title="2.1 Konsep Algoritma">
        <p>Algoritma adalah urutan langkah-langkah logis dan sistematis untuk menyelesaikan masalah. Algoritma menjadi fondasi dalam pemrograman karena menentukan bagaimana masalah dipecahkan secara efisien.</p>
        <div className="info-box">
          <strong><Target size={14} /> Karakteristik Algoritma yang Baik</strong>
          <p>Memiliki input yang jelas, output yang tepat, langkah yang pasti (definite), efisien (finite), dan memiliki base case untuk rekursi.</p>
        </div>
        <h3 style={{marginTop: 20}}>Notasi Algoritmik:</h3>
        <ul>
          <li><strong>Pseudocode</strong> — Penulisan algoritma dalam bahasa manusia yang terstruktur.</li>
          <li><strong>Flowchart</strong> — Diagram grafis yang memvisualisasikan langkah-langkah algoritma.</li>
          <li><strong>Bahasa Pemrograman</strong> — Implementasi algoritma dalam kode yang dieksekusi komputer.</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Database} title="2.2 Jenis-jenis Struktur Data">
        <p>Struktur data adalah cara mengorganisasi dan menyimpan data agar dapat diakses dan dimanipulasi secara efisien. Pemilihan struktur data yang tepat sangat mempengaruhi performa program.</p>
        <h3 style={{marginTop: 10}}>Struktur Data Primitif:</h3>
        <ul>
          <li><strong>Integer</strong> — Bilangan bulat (contoh: 42, -7, 0)</li>
          <li><strong>Float</strong> — Bilangan desimal (contoh: 3.14, -0.5)</li>
          <li><strong>String</strong> — Teks/karakter (contoh: "Hello", 'Budi')</li>
          <li><strong>Boolean</strong> — Nilai benar/salah (true/false)</li>
        </ul>
        <h3 style={{marginTop: 16}}>Struktur Data Kompleks:</h3>
        <ul>
          <li><strong>Array</strong> — Koleksi elemen dengan indeks tetap. Akses cepat O(1) tapi ukuran tetap.</li>
          <li><strong>Linked List</strong> — Elemen (node) terhubung melalui pointer. Fleksibel tapi akses lambat O(n).</li>
          <li><strong>Stack</strong> — LIFO (Last In, First Out). Digunakan untuk undo, recursive call, expression evaluation.</li>
          <li><strong>Queue</strong> — FIFO (First In, First Out). Digunakan untuk antrian, scheduling, print queue.</li>
        </ul>
      </MateriCard>

      <MateriCard icon={Search} title="2.3 Sorting dan Searching">
        <p>Dua operasi fundamental dalam pengolahan data: mengurutkan (sorting) dan mencari (searching).</p>
        <h3 style={{marginTop: 10}}>Algoritma Sorting:</h3>
        <ul>
          <li><strong>Bubble Sort</strong> — Menukar elemen bersebelahan jika urutan salah. Kompleksitas O(n²). Sederhana tapi lambat.</li>
          <li><strong>Selection Sort</strong> — Mencari elemen minimum, lalu menukarnya ke posisi awal. O(n²).</li>
          <li><strong>Insertion Sort</strong> — Menyisipkan elemen ke posisi yang benar. O(n²) tapi efisien untuk data hampir terurut.</li>
          <li><strong>Merge Sort</strong> — Divide and conquer: membagi, mengurutkan, menggabungkan. O(n log n). Stabil.</li>
          <li><strong>Quick Sort</strong> — Divide and conquer dengan pivot. Rata-rata O(n log n), worst case O(n²).</li>
        </ul>
        <h3 style={{marginTop: 16}}>Algoritma Searching:</h3>
        <ul>
          <li><strong>Linear Search</strong> — Memeriksa satu per satu dari awal. O(n). Cocok untuk data tidak terurut.</li>
          <li><strong>Binary Search</strong> — Membagi data dua bagian, mengecek tengah. O(log n). Hanya untuk data terurut.</li>
        </ul>
      </MateriCard>

      <MateriCard icon={BarChart3} title="2.4 Analisis Kompleksitas Algoritma">
        <p>Big O Notation digunakan untuk mengukur efisiensi algoritma dari segi waktu dan ruang seiring bertambahnya input.</p>
        <h3 style={{marginTop: 10}}>Peringkat Kompleksitas (dari terbaik ke terburuk):</h3>
        <ul>
          <li><strong>O(1)</strong> — Konstan. Waktu tetap berapa pun inputnya. Contoh: akses array dengan indeks.</li>
          <li><strong>O(log n)</strong> — Logaritmik. Input dibagi dua di setiap langkah. Contoh: binary search.</li>
          <li><strong>O(n)</strong> — Linier. Waktu sebanding dengan input. Contoh: linear search.</li>
          <li><strong>O(n log n)</strong> — Linearithmic. Contoh: merge sort, quick sort rata-rata.</li>
          <li><strong>O(n²)</strong> — Kuadratik. Nested loop. Contoh: bubble sort, selection sort.</li>
          <li><strong>O(2ⁿ)</strong> — Eksponensial. Contoh: brute force subset enumeration.</li>
        </ul>
        <div className="info-box">
          <strong><Award size={14} /> Contoh Kasus</strong>
          <p>Jika O(n²) membutuhkan 10 detik untuk 100 data, maka untuk 200 data dibutuhkan 40 detik (4× lipat). Memilih algoritma yang tepat sangat berpengaruh pada performa program besar.</p>
        </div>
      </MateriCard>
    </div>
  );
}
