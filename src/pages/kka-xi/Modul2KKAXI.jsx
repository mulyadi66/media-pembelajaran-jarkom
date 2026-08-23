import { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GitBranch, Network, Puzzle, ArrowRightLeft, Target, Award, TrendingUp, Lightbulb, AlertTriangle } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';
import { ContohSoal, Tugas } from '../../components/ContohSoal';

const sections = [
  { id: 's1', label: 'A. Pengembangan Algoritma yang Kompleks' },
  { id: 's2', label: 'B. Struktur Data Tree dan Graph' },
  { id: 's3', label: 'C. Penerapan Algoritma & Struktur Data' },
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

export default function Modul2KKAXI() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_xi_modul2'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_xi_modul2" sections={sections} />

      {/* ================================================================ */}
      {/*  A. PENGEMBANGAN ALGORITMA YANG KOMPLEKS                         */}
      {/* ================================================================ */}
      <MateriCard icon={GitBranch} title="A. Pengembangan Algoritma yang Kompleks">

        {/* A.1 Pengertian dan Motivasi */}
        <h4 style={{marginTop: 0}}>A.1 Dari Algoritma Dasar ke Algoritma Kompleks</h4>
        <p>Di Modul 1 kamu telah mempelajari algoritma dasar: sequential, conditional, dan iterative. Sekarang kita masuk ke algoritma yang mampu menyelesaikan masalah jauh lebih besar dan kompleks. Perbedaan utamanya:</p>
        <ul>
          <li><strong>Algoritma Dasar</strong> — Menyelesaikan masalah sederhana: menghitung rata-rata, mencari nilai maksimum, mengurutkan array kecil.</li>
          <li><strong>Algoritma Kompleks</strong> — Menyelesaikan masalah yang melibatkan banyak keputusan, kombinasi besar, atau struktur data bersarang: menemukan rute terpendek di peta, menjadwalkan ribuan tugas, atau mengoptimalkan penggunaan memori.</li>
        </ul>
        <div className="info-box">
          <strong><Target size={14} /> Mengapa Penting?</strong>
          <p>Bayangkan Google Maps harus menemukan rute tercepat dari rumahmu ke tempat tujuan dari jutaan kemungkinan jalan. Ini membutuhkan algoritma kompleks seperti Dijkstra yang berjalan di struktur data Graph. Atau Netflix yang harus merekomendasikan film dari jutaan judul — ini membutuhkan algoritma traversal Graph yang kompleks.</p>
        </div>

        {/* A.2 Rekursi */}
        <h4 style={{marginTop: 24}}>A.2 Rekursi — Memanggil Diri Sendiri</h4>
        <p>Rekursi adalah teknik di mana fungsi memanggil dirinya sendiri untuk memecah masalah menjadi sub-masalah yang lebih kecil hingga mencapai base case yang bisa diselesaikan langsung.</p>
        <h3 style={{marginTop: 12}}>Komponen Rekursi:</h3>
        <ul>
          <li><strong>Base Case</strong> — Kondisi berhenti rekursi. Tanpa base case, fungsi akan terus memanggil diri sendiri hingga stack overflow.</li>
          <li><strong>Recursive Case</strong> — Fungsi memanggil dirinya sendiri dengan input yang lebih kecil, mendekati base case.</li>
        </ul>
        <p><strong>Contoh: Faktorial secara Rekursif</strong></p>
        <ul>
          <li>factorial(5) = 5 * factorial(4)</li>
          <li>factorial(4) = 4 * factorial(3)</li>
          <li>factorial(3) = 3 * factorial(2)</li>
          <li>factorial(2) = 2 * factorial(1)</li>
          <li>factorial(1) = 1 * factorial(0)</li>
          <li>factorial(0) = 1 (base case)</li>
          <li>Hasil: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120</li>
        </ul>
        <p><strong>Pseudocode:</strong> fungsi factorial(n): jika n==0 kembalikan 1; jika tidak kembalikan n * factorial(n-1)</p>
        <div className="info-box">
          <strong><AlertTriangle size={14} /> Perhatian</strong>
          <p>Rekursi tanpa base case yang benar menyebabkan stack overflow — program terus memanggil diri sendiri hingga memori habis. Selalu pastikan: (1) base case JELAS, (2) input MENDEKATI base case di setiap langkah.</p>
        </div>

        {/* A.3 Divide and Conquer */}
        <h4 style={{marginTop: 24}}>A.3 Divide and Conquer — Bagi, Taklukkan, Gabungkan</h4>
        <p>Strategi ini membagi masalah besar menjadi sub-masalah kecil, menyelesaikan masing-masing secara rekursif, lalu menggabungkan hasilnya.</p>
        <h3 style={{marginTop: 12}}>Tahapan:</h3>
        <ul>
          <li><strong>Divide</strong> — Pecah masalah menjadi 2 atau lebih sub-masalah yang lebih kecil.</li>
          <li><strong>Conquer</strong> — Selesaikan sub-masalah secara rekursif. Jika sudah cukup kecil, selesaikan langsung.</li>
          <li><strong>Combine</strong> — Gabungkan hasil sub-masalah untuk mendapatkan solusi masalah asli.</li>
        </ul>
        <p><strong>Contoh Nyata: Merge Sort</strong></p>
        <ul>
          <li>Input: [38, 27, 43, 3, 9, 82, 10]</li>
          <li>Divide: [38, 27, 43, 3] dan [9, 82, 10]</li>
          <li>Conquer: Urutkan masing-masing bagian secara rekursif</li>
          <li>Combine: Gabungkan dua array terurut menjadi [3, 9, 10, 27, 38, 43, 82]</li>
        </ul>

        {/* A.4 Greedy Algorithm */}
        <h4 style={{marginTop: 24}}>A.4 Greedy Algorithm — Ambil yang Terbaik di Setiap Langkah</h4>
        <p>Greedy algorithm selalu memilih opsi yang paling menguntungkan (optimal) di setiap langkah, tanpa mempertimbangkan dampak ke depan. Cocok untuk masalah di mana pilihan lokal yang optimal menghasilkan solusi global yang optimal.</p>
        <h4 style={{marginTop: 12}}>Contoh: Uang Kembalian Greedy</h4>
        <ul>
          <li>Masalah: Berikan kembalian Rp 67.000 dengan jumlah lembar paling sedikit.</li>
          <li>Langkah 1: Ambil pecahan terbesar Rp 50.000 &rarr; sisa Rp 17.000</li>
          <li>Langkah 2: Ambil Rp 10.000 &rarr; sisa Rp 7.000</li>
          <li>Langkah 3: Ambil Rp 5.000 &rarr; sisa Rp 2.000</li>
          <li>Langkah 4: Ambil Rp 1.000 (2x) &rarr; sisa Rp 0</li>
          <li>Hasil: 1x50rb + 1x10rb + 1x5rb + 2x1rb = 5 lembar</li>
        </ul>
        <p><strong>Kelebihan:</strong> Sederhana, cepat, mudah diimplementasikan. <strong>Kekurangan:</strong> Tidak selalu menghasilkan solusi global optimal untuk semua masalah. Untuk masalah tertentu (seperti knapsack fractional), greedy works. Tapi untuk knapsack 0/1, greedy bisa gagal.</p>

        {/* A.5 Dynamic Programming */}
        <h4 style={{marginTop: 24}}>A.5 Dynamic Programming — Ingat Hasil Sebelumnya</h4>
        <p>Dynamic Programming (DP) adalah teknik yang menyimpan hasil sub-masalah yang sudah diselesaikan sehingga tidak perlu dihitung ulang. Cocok untuk masalah dengan <strong>optimal substructure</strong> dan <strong>overlapping subproblems</strong>.</p>
        <h3 style={{marginTop: 12}}>Contoh: Fibonacci dengan DP</h3>
        <ul>
          <li>Fibonacci tanpa DP (rekursi murni): fibonacci(5) akan menghitung fibonacci(3) DUA kali dan fibonacci(2) TIGA kali. Banyak perhitungan yang terbuang.</li>
          <li>Fibonacci dengan DP: Simpan setiap hasil fibonacci yang sudah dihitung di array. Saat dibutuhkan lagi, langsung ambil dari array tanpa menghitung ulang.</li>
          <li>Hasil: fibonacci(5) hanya menghitung SETIAP angka fibonacci SATU kali saja.</li>
        </ul>
        <p><strong>Perbandingan:</strong> Rekursi murni untuk fibonacci(40) butuh miliaran operasi (eksponensial). Dengan DP, hanya 40 operasi (linier). Ini perbedaan antara program yang selesai dalam 1 detik vs program yang berjalan berjam-jam.</p>

        {/* A.6 Backtracking */}
        <h4 style={{marginTop: 24}}>A.6 Backtracking — Coba, Gagal, Mundur, Coba Lagi</h4>
        <p>Backtracking adalah teknik eksplorasi yang mencoba semua kemungkinan solusi secara sistematis. Jika suatu jalur tidak menghasilkan solusi yang valid, program mundur (backtrack) dan mencoba jalur lain. Ini adalah pendekatan brute force yang dioptimasi.</p>
        <h3 style={{marginTop: 12}}>Contoh: N-Queens Problem</h3>
        <ul>
          <li>Masalah: Letakkan N ratu di papan N x N agar tidak ada ratu yang saling mengancam.</li>
          <li>Alur: Letakkan ratu di baris 1, coba baris 2. Jika tidak ada posisi aman, mundur (backtrack) ke baris 1 dan geser ratu. Ulangi sampai semua ratu terletak atau semua kemungkinan habis.</li>
        </ul>
        <p><strong>Penggunaan Backtracking:</strong> Sudoku solver, maze solver, permutation generator, constraint satisfaction problems.</p>

        <ContohSoal data={[
          { soal: 'Seorang siswa diminta menulis pseudocode untuk menghitung nilai pangkat dari sebuah bilangan secara rekursif (contoh: 2^5 = 32).\n\nBuatlah pseudocode fungsi power(basis, pangkat) secara rekursif! Identifikasi base case dan recursive case-nya!',
            penyelesaian: [
              'Pseudocode:\nfungsi power(basis, pangkat):\n  jika pangkat == 0:\n    kembalikan 1\n  jika tidak:\n    kembalikan basis * power(basis, pangkat - 1)',
              'Base case: power(basis, 0) = 1 (setiap bilangan dipangkatkan 0 selalu bernilai 1)',
              'Recursive case: power(basis, n) = basis * power(basis, n-1) — mengurangi pangkat 1 di setiap langkah hingga mencapai 0',
              'Trace: power(2, 3) = 2 * power(2, 2) = 2 * 2 * power(2, 1) = 2 * 2 * 2 * power(2, 0) = 2 * 2 * 2 * 1 = 8'
            ]
          },
          { soal: 'Tentukan pendekatan algoritmik yang paling sesuai untuk setiap masalah berikut. Jelaskan alasanmu!\n\n(a) Menemukan rute terpendek dari kota A ke kota Z dengan banyak persimpangan\n(b) Mengurutkan buku di perpustakaan berdasarkan nama\n(c) Menyelesaikan puzzle Sudoku yang kosong',
            penyelesaian: [
              '(a) Graph Algorithm (Dijkstra/BFS/DFS): Karena masalah ini melibatkan jaringan persimpangan (node) dan jalan (edge) yang membentuk Graph. Dijkstra cocok karena ada bobot jarak. BFS cocok jika semua jarak sama.',
              '(b) Divide and Conquer (Merge Sort/Quick Sort): Karena ini adalah masalah sorting klasik. Merge Sort memberikan O(n log n) yang konsisten. Quick Sort lebih cepat rata-ratanya.',
              '(c) Backtracking: Karena Sudoku adalah constraint satisfaction problem — setiap cell harus berisi angka 1-9 tanpa duplikasi di baris, kolom, dan kotak 3x3. Backtracking akan mencoba angka, jika melanggar constraint, mundur dan coba angka lain.'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah pseudocode rekursif untuk menghitung angka Fibonacci ke-n. Lalu buatlah tabel trace untuk fibonacci(7) yang menunjukkan setiap panggilan fungsi dan hasilnya. Bandingkan jumlah langkah dengan versi tanpa rekursi (iteratif).',
          'Buatlah tabel perbandingan 4 pendekatan algoritmik: Divide and Conquer, Greedy, Dynamic Programming, dan Backtracking. Untuk masing-masing, tuliskan: (a) Definisi, (b) 2 contoh algoritma, (c) Kelebihan, (d) Kekurangan, (e) Kapan cocok digunakan.',
          'Diskusikan dalam kelompok: "Kapan Greedy Algorithm bisa menghasilkan solusi yang salah?" Berikan contoh kasus nyata di mana greedy tidak optimal, dan jelaskan pendekatan apa yang lebih cocok digunakan sebagai gantinya.',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  B. STRUKTUR DATA TREE DAN GRAPH                                 */}
      {/* ================================================================ */}
      <MateriCard icon={Network} title="B. Struktur Data Tree dan Graph">

        {/* B.1 Pengertian Tree */}
        <h4 style={{marginTop: 0}}>B.1 Struktur Data Tree</h4>
        <p>Tree adalah struktur data non-linier yang menyimpan data secara hierarkis (bertingkat). Setiap node (simpul) memiliki hubungan parent-child — satu node parent bisa memiliki banyak child, tapi setiap child hanya memiliki SATU parent.</p>
        <h3 style={{marginTop: 12}}>Istilah Penting dalam Tree:</h3>
        <ul>
          <li><strong>Root</strong> — Node paling atas, tidak memiliki parent. Ini adalah titik awal tree.</li>
          <li><strong>Parent</strong> — Node yang memiliki child (anak).</li>
          <li><strong>Child</strong> — Node yang memiliki parent (orang tua).</li>
          <li><strong>Leaf (Daun)</strong> — Node yang tidak memiliki child. Ini adalah node di ujung-ujung tree.</li>
          <li><strong>Edge</strong> — Garis penghubung antara parent dan child.</li>
          <li><strong>Level</strong> — Kedalaman node dari root. Root berada di level 0.</li>
          <li><strong>Height (Tinggi)</strong> — Jumlah edge terpanjang dari root ke leaf. Tree dengan 1 node punya height = 0.</li>
          <li><strong>Subtree</strong> — Sebuah tree kecil yang terbentuk dari node tertentu dan semua child-nya.</li>
        </ul>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Analogi Sederhana</strong>
          <p>Bayangkan struktur organisasi perusahaan: Direktur (root) &rarr; Manager (parent) &rarr; Staff (child) &rarr; Magang (leaf). Setiap orang punya SATU atasan langsung, tapi satu atasan bisa punya banyak bawahan. Inilah konsep Tree.</p>
        </div>

        {/* B.2 Binary Tree dan BST */}
        <h4 style={{marginTop: 24}}>B.2 Binary Tree dan Binary Search Tree (BST)</h4>
        <p><strong>Binary Tree</strong> adalah tree di mana setiap node memiliki maksimal 2 child (kiri dan kanan). Binary tree menjadi sangat powerful ketika ditambahkan aturan pengurutan:</p>
        <p><strong>Binary Search Tree (BST)</strong> — Binary tree dengan aturan: semua nilai di kiri lebih kecil dari parent, semua nilai di kanan lebih besar dari parent. Ini memungkinkan pencarian sangat cepat.</p>
        <h3 style={{marginTop: 12}}>Contoh BST untuk data [8, 3, 10, 1, 6, 14, 4, 7, 13]:</h3>
        <ul>
          <li>Root: 8</li>
          <li>Anak kiri 8: 3 | Anak kanan 8: 10</li>
          <li>Anak kiri 3: 1 | Anak kanan 3: 6 (anak kiri: 4, anak kanan: 7)</li>
          <li>Anak kiri 10: tidak ada | Anak kanan 10: 14 (anak kiri: 13)</li>
        </ul>
        <h3 style={{marginTop: 16}}>Operasi pada BST:</h3>
        <ul>
          <li><strong>Search (Cari)</strong> — Mulai dari root, bandingkan dengan target. Jika lebih kecil, ke kiri. Jika lebih besar, ke kanan. Ulangi sampai ketemu atau mencapai leaf. Kompleksitas: O(log n) untuk tree seimbang, O(n) untuk tree miring.</li>
          <li><strong>Insert (Tambah)</strong> — Cari posisi yang tepat berdasarkan aturan BST, lalu sisipkan node baru sebagai leaf.</li>
          <li><strong>Delete (Hapus)</strong> — Paling kompleks: (1) Jika leaf, langsung hapus. (2) Jika punya 1 child, ganti dengan child-nya. (3) Jika punya 2 child, cari in-order successor (node terkecil di subtree kanan) untuk menggantikannya.</li>
        </ul>

        {/* B.3 AVL Tree */}
        <h4 style={{marginTop: 24}}>B.3 AVL Tree — BST yang Seimbang</h4>
        <p>Masalah BST biasa: jika data diurutkan (1,2,3,4,5), tree akan menjadi miring seperti linked list (O(n) untuk search). AVL Tree menyelesaikan ini dengan melakukan <strong>rotasi</strong> setiap kali insert atau delete agar tree tetap seimbang.</p>
        <h3 style={{marginTop: 12}}>Konsep Balance Factor:</h3>
        <ul>
          <li>Balance factor = tinggi subtree kiri - tinggi subtree kanan</li>
          <li>AVL Tree menjaga balance factor selalu -1, 0, atau 1</li>
          <li>Jika balance factor melenceng (lebih dari 1 atau kurang dari -1), dilakukan rotasi untuk mengembalikan keseimbangan</li>
        </ul>
        <p><strong>Jenis Rotasi:</strong> LL Rotation (kiri-kiri), RR Rotation (kanan-kanan), LR Rotation (kiri-kanan), RL Rotation (kanan-kiri). Setiap jenis rotasi menyelesaikan kondisi imbalance yang berbeda.</p>
        <div className="info-box">
          <strong><Award size={14} /> Mengapa AVL Penting?</strong>
          <p>AVL Tree memastikan pencarian SELALU O(log n), tidak peduli urutan data yang dimasukkan. Tanpa AVL, BST biasa bisa menjadi O(n) pada kondisi terburuk (data sudah urut). AVL digunakan dalam database index dan sistem file untuk performa konsisten.</p>
        </div>

        {/* B.4 Struktur Data Graph */}
        <h4 style={{marginTop: 24}}>B.4 Struktur Data Graph</h4>
        <p>Graph adalah struktur data yang merepresentasikan hubungan antar objek. Tidak seperti Tree yang hierarkis, Graph memiliki hubungan yang fleksibel — sebuah node bisa terhubung ke banyak node lain tanpa batasan hirarki.</p>
        <h3 style={{marginTop: 12}}>Istilah Penting dalam Graph:</h3>
        <ul>
          <li><strong>Vertex (Node)</strong> — Titik atau objek dalam graph (contoh: kota, pengguna media sosial, halaman website).</li>
          <li><strong>Edge (Link)</strong> — Garis penghubung antara dua vertex (contoh: jalan antar kota, pertemanan, hyperlink).</li>
          <li><strong>Directed Graph (Digraph)</strong> — Edge memiliki arah. Contoh: follower di Instagram (A follow B, tapi B belum tentu follow A).</li>
          <li><strong>Undirected Graph</strong> — Edge tidak memiliki arah. Contoh: pertemanan di Facebook (jika A teman B, maka B teman A).</li>
          <li><strong>Weighted Graph</strong> — Setiap edge memiliki bobot/nilai. Contoh: jarak antar kota, biaya transportasi, latensi jaringan.</li>
          <li><strong>Unweighted Graph</strong> — Semua edge memiliki bobot yang sama.</li>
        </ul>

        {/* B.5 Traversal Graph */}
        <h4 style={{marginTop: 24}}>B.5 Traversal Graph — BFS dan DFS</h4>
        <p>Traversal adalah proses mengunjungi semua vertex dalam graph secara sistematis. Ada dua pendekatan utama:</p>
        <p><strong>BFS (Breadth-First Search) — Jelajahi Level per Level</strong></p>
        <ul>
          <li>Mulai dari vertex awal, kunjungi SEMUA tetangga langsung terlebih dahulu.</li>
          <li>Baru setelah itu, kunjungi tetangga dari tetangga (level berikutnya).</li>
          <li>Menggunakan struktur data <strong>Queue</strong> (FIFO).</li>
          <li>Cocok untuk: menemukan rute terpendek (dalam graph unweighted), pencarian level, social network degree-of-connection.</li>
        </ul>
        <p><strong>DFS (Depth-First Search) — Jelajahi Sampai Ujung Dulu</strong></p>
        <ul>
          <li>Mulai dari vertex awal, ikuti satu jalur sampai mentok (leaf/dead end), lalu mundur dan coba jalur lain.</li>
          <li>Menggunakan struktur data <strong>Stack</strong> (LIFO) atau rekursi.</li>
          <li>Cocok untuk: deteksi cycle, topological sorting, maze solving, menemukan connected components.</li>
        </ul>
        <div className="info-box">
          <strong><ArrowRightLeft size={14} /> Perbandingan BFS vs DFS</strong>
          <p>BFS menemukan rute terpendek di unweighted graph. DFS lebih hemat memori untuk graph besar. BFS menggunakan Queue, DFS menggunakan Stack. Untuk pencarian di peta jalan raya (unweighted), pakai BFS. Untuk pencarian di labirin atau deteksi siklus, pakai DFS.</p>
        </div>

        {/* B.6 Shortest Path Algorithm */}
        <h4 style={{marginTop: 24}}>B.6 Algoritma Shortest Path</h4>
        <p>Salah satu aplikasi paling penting dari Graph adalah menemukan jalur terpendek antara dua vertex.</p>
        <ul>
          <li><strong>Dijkstra's Algorithm</strong> — Menemukan jalur terpendek dari satu source ke semua vertex lain. Cocok untuk weighted graph dengan bobot non-negatif. Kompleksitas: O((V + E) log V) dengan priority queue.</li>
          <li><strong>BFS (Unweighted)</strong> — Untuk graph tanpa bobot, BFS otomatis menemukan jalur terpendek karena menjelajahi level per level.</li>
          <li><strong>Floyd-Warshall</strong> — Menemukan jalur terpendek antar SEMUA pasangan vertex. Kompleksitas: O(V^3). Cocok untuk graph kecil yang membutuhkan all-pairs shortest path.</li>
        </ul>
        <p><strong>Contoh Dijkstra:</strong> Dari kota A, hitung jarak ke B(3), C(7), D(2). Langkah 1: A=0, B=3, C=7, D=2. Langkah 2: D paling dekat (2). Periksa D: ke E(5). Update: E=2+5=7. Langkah 3: B paling dekat (3). Periksa B: tidak ada tetangga baru. Lanjutkan sampai semua vertex dikunjungi.</p>

        <ContohSoal data={[
          { soal: 'Berikut ini adalah tree biner berikut:\n\n         50\n       /    \\\n     30      70\n    /  \\    /  \\\n  20   40  60   80\n\n(a) Identifikasi: root, parent dari 40, child dari 70, leaf nodes, tinggi tree\n(b) Jika dilakukan pencarian angka 60 pada BST ini, langkah-langkah apa saja yang dilakukan?\n(c) Berapa jumlah maksimum comparison yang diperlukan untuk pencarian di tree ini?',
            penyelesaian: [
              '(a) Root = 50. Parent dari 40 = 30. Child dari 70 = 60 dan 80. Leaf nodes = 20, 40, 60, 80. Tinggi tree = 2 (dari root ke leaf paling jauh ada 2 edge).',
              '(b) Langkah pencarian 60:\n1. Bandingkan 60 dengan root (50): 60 > 50, pindah ke kanan\n2. Bandingkan 60 dengan 70: 60 < 70, pindah ke kiri\n3. Bandingkan 60 dengan 60: cocok! Ditemukan.',
              '(c) Jumlah maksimum comparison = 3 (karena tree punya tinggi 2, pencarian maksimal melewati 3 level dari root ke leaf). Secara umum: O(log n) untuk tree seimbang dengan n node.'
            ]
          },
          { soal: 'Sebuah jaringan kota terhubung seperti weighted undirected graph berikut:\n\n    A ---3--- B ---2--- C\n    |         |         |\n    4         1         5\n    |         |         |\n    D ---6--- E ---3--- F\n\nGunakan BFS untuk menemukan rute terpendek (dalam jumlah edge) dari A ke F. Lalu gunakan Dijkstra untuk menemukan rute terpendek berdasarkan bobot.',
            penyelesaian: [
              'BFS (jumlah edge terpendek):\n- Level 0: A (start)\n- Level 1: B (via A-B), D (via A-D)\n- Level 2: C (via B-C), E (via B-E)\n- Level 3: F (via E-F)\n- Rute: A -> B -> E -> F (3 edge)\n- Catatan: BFS menemukan rute dengan edge paling sedikit, bukan bobot terkecil.',
              'Dijkstra (bobot terkecil):\n- Mulai A=0\n- Dari A: B=3, D=4\n- Dari B (3): C=3+2=5, E=3+1=4\n- Dari D (4): E=min(4, 4+6)=4 (tidak berubah)\n- Dari E (4): F=4+3=7\n- Dari C (5): F=min(7, 5+5)=7 (tidak berubah)\n- Rute terpendek: A -> B -> E -> F dengan bobot 7\n- Catatan: Dijkstra mempertimbangkan bobot edge, bukan jumlah edge.'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah Binary Search Tree dari data berikut (sisipkan satu per satu): [15, 8, 22, 4, 11, 19, 25]. Gambar tree hasilnya. Lalu jelaskan langkah pencarian angka 11 dan berapa comparison yang dilakukan.',
          'Gambarlah weighted undirected graph dengan 6 vertex (A-F) dan minimal 8 edge dengan bobot acak. Gunakan BFS untuk menemukan rute terpendek (jumlah edge) dari A ke F, dan Dijkstra untuk menemukan rute terpendek (bobot) dari A ke F. Bandingkan hasilnya.',
          'Buatlah tabel perbandingan Tree vs Graph: (a) Definisi, (b) Hubungan antar node, (c) Contoh penggunaan nyata, (d) Algoritma traversal yang umum digunakan, (e) Kelebihan dan kekurangan masing-masing.',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  C. PENERAPAN ALGORITMA & STRUKTUR DATA                          */}
      {/* ================================================================ */}
      <MateriCard icon={Puzzle} title="C. Penerapan Algoritma & Struktur Data">

        {/* C.1 Analisis Kompleksitas */}
        <h4 style={{marginTop: 0}}>C.1 Analisis Kompleksitas Algoritma — Big O Notation</h4>
        <p>Big O Notation adalah cara standar untuk mengukur efisiensi algoritma dari segi waktu dan ruang seiring bertambahnya jumlah input. Ini memungkinkan programmer membandingkan dua algoritma secara objektif.</p>
        <h3 style={{marginTop: 12}}>Peringkat Kompleksitas (terbaik ke terburuk):</h3>
        <ul>
          <li><strong>O(1)</strong> — Konstan. Waktu tetap berapa pun input. Contoh: akses array dengan indeks, push/pop stack.</li>
          <li><strong>O(log n)</strong> — Logaritmik. Input dibagi dua setiap langkah. Contoh: binary search, BST search (seimbang).</li>
          <li><strong>O(n)</strong> — Linier. Waktu sebanding input. Contoh: linear search, traversal array sekali.</li>
          <li><strong>O(n log n)</strong> — Linearithmic. Contoh: merge sort, quick sort rata-rata, heap sort.</li>
          <li><strong>O(n^2)</strong> — Kuadratik. Nested loop. Contoh: bubble sort, selection sort, perbandingan semua pasangan.</li>
          <li><strong>O(2^n)</strong> — Eksponensial. Contoh: brute force subset enumeration, recursive fibonacci tanpa memoization.</li>
          <li><strong>O(n!)</strong> — Faktorial. Contoh: brute force traveling salesman, generate semua permutasi.</li>
        </ul>
        <div className="info-box">
          <strong><TrendingUp size={14} /> Contoh Nyata: Dampak Kompleksitas</strong>
          <p>Jika O(n^2) membutuhkan 1 detik untuk n=1.000, maka untuk n=10.000 dibutuhkan 100 detik. Tapi O(n log n) untuk n=10.000 hanya butuh ~14 detik. Untuk n=1.000.000, O(n^2) butuh ~11 hari, sedangkan O(n log n) hanya ~20 detik. Pemilihan algoritma yang tepat bisa mengubah waktu dari hari menjadi detik.</p>
        </div>

        {/* C.2 Kasus: Pathfinding di GPS */}
        <h4 style={{marginTop: 24}}>C.2 Kasus 1: Pathfinding di GPS dan Peta Digital</h4>
        <p>Setiap kali kamu menggunakan Google Maps atau Waze untuk menemukan rute, kamu menggunakan kombinasi Graph + Shortest Path Algorithm.</p>
        <h3 style={{marginTop: 12}}>Bagaimana GPS Bekerja:</h3>
        <ul>
          <li><strong>Data</strong> — Seluruh jalan di dunia direpresentasikan sebagai Graph: setiap persimpangan adalah vertex, setiap jalan segment adalah edge dengan bobot jarak/waktu.</li>
          <li><strong>Algoritma</strong> — Dijkstra atau A* (Dijkstra yang dioptimasi dengan heuristik) digunakan untuk menemukan rute terpendek dari lokasi kamu ke tujuan.</li>
          <li><strong>Tantangan</strong> — Dengan jutaan vertex, Dijkstra murni terlalu lambat. Google menggunakan teknik seperti contraction hierarchies dan edge contraction untuk mempercepat pencarian.</li>
          <li><strong>Dynamic Update</strong> — Ketika ada kemacetan, bobot edge berubah secara real-time, dan rute dihitung ulang secara dinamis.</li>
        </ul>

        {/* C.3 Kasus: Search Engine */}
        <h4 style={{marginTop: 24}}>C.3 Kasus 2: Search Engine (Google Search)</h4>
        <p>Ketika kamu mengetik "cara belajar Python" di Google, dalam hitungan milidetik Google harus: (1) menemukan miliaran halaman yang relevan, (2) mengurutkan dari yang paling relevan, (3) menampilkan 10 hasil teratas.</p>
        <h3 style={{marginTop: 12}}>Struktur Data dan Algoritma yang Digunakan:</h3>
        <ul>
          <li><strong>Inverted Index (Hash Table)</strong> — Google membangun indeks terbalik: setiap kata dikaitkan dengan daftar halaman web yang mengandung kata tersebut. Ini seperti kamus terbalik — dari kata, langsung tahu halaman mana yang mengandung kata itu.</li>
          <li><strong>Graph (PageRank)</strong> — Setiap halaman web dianggap sebagai vertex, setiap hyperlink adalah edge. Google menggunakan algoritma PageRank (variasi DFS/BFS + Matrix) untuk menentukan halaman mana yang paling penting berdasarkan jumlah dan kualitas link yang mengarah ke halaman tersebut.</li>
          <li><strong>Sorting Algorithm</strong> — Hasil pencarian diurutkan berdasarkan relevansi menggunakan kombinasi ratusan faktor, bukan hanya satu algoritma sorting.</li>
        </ul>

        {/* C.4 Kasus: Scheduling */}
        <h4 style={{marginTop: 24}}>C.4 Kasus 3: Penjadwalan (Scheduling) di OS dan Sekolah</h4>
        <p>Sistem operasi komputer harus menjadwalkan ratusan proses untuk berjalan di CPU yang hanya satu (atau beberapa). Ini adalah masalah scheduling yang menggunakan algoritma dan struktur data tree.</p>
        <h3 style={{marginTop: 12}}>Algoritma Scheduling:</h3>
        <ul>
          <li><strong>Round Robin</strong> — Setiap proses mendapat giliran waktu yang sama (time slice). Menggunakan Queue: proses yang selesai giliran masuk belakang antrean. Adil tapi tidak efektif untuk proses yang butuh waktu lama.</li>
          <li><strong>Priority Scheduling</strong> — Proses dengan prioritas tertinggi dijalankan terlebih dahulu. Menggunakan Priority Queue (heap). Efisien tapi bisa terjadi starvation (proses berprioritas rendah tidak pernah dijalankan).</li>
          <li><strong>SJF (Shortest Job First)</strong> — Proses terpendek dijalankan terlebih dahulu. Menggunakan Min-Heap. Optimal untuk average waiting time, tapi sulit memprediksi durasi proses.</li>
        </ul>
        <p><strong>Penerapan di Sekolah:</strong> Algoritma serupa digunakan untuk menjadwal ujian, penugasan, dan kegiatan. BST/Tree digunakan untuk menyimpan jadwal hierarchical: Tahun &rarr; Semester &rarr; Minggu &rarr; Hari &rarr; Jam. Pencarian jadwal kosong menggunakan traversal tree.</p>

        {/* C.5 Analisis dan Pemilihan Algoritma */}
        <h4 style={{marginTop: 24}}>C.5 Kapan Menggunakan Algoritma yang Mana?</h4>
        <p>Memilih algoritma yang tepat membutuhkan pemahaman tentang karakteristik masalah dan batasan sistem:</p>
        <ul>
          <li><strong>Data terurut + pencarian cepat?</strong> Gunakan BST/AVL Tree &rarr; O(log n) search.</li>
          <li><strong>Data tidak terurut + cari semua tetangga?</strong> Gunakan Graph + BFS/DFS.</li>
          <li><strong>Jalur terpendek di peta?</strong> Gunakan Dijkstra (weighted) atau BFS (unweighted).</li>
          <li><strong>Urutkan data besar?</strong> Gunakan Merge Sort/Quick Sort &rarr; O(n log n).</li>
          <li><strong>Optimasi dengan sub-masalah overlap?</strong> Gunakan Dynamic Programming.</li>
          <li><strong>Eksplorasi semua kemungkinan?</strong> Gunakan Backtracking (jika perlu prunning) atau Brute Force.</li>
        </ul>

        <ContohSoal data={[
          { soal: 'Sebuah aplikasi ride-haring (seperti Gojek/Grab) perlu:\n1. Menemukan driver terdekat dari lokasi penumpang\n2. Menghitung rute tercepat dari driver ke penumpang\n3. Menampilkan estimasi waktu kedatangan\n\nUntuk setiap fitur, tentukan struktur data DAN algoritma yang paling tepat. Jelaskan alasan pemilihanmu!',
            penyelesaian: [
              'Fitur 1 — Driver terdekat: Struktur data = Quadtree atau k-d tree (spatial indexing). Algoritma = Nearest Neighbor Search. Alasan: Lokasi driver adalah koordinat 2D (x, y). Linear search O(n) terlalu lambat untuk jutaan driver. Spatial tree membagi area menjadi region, sehingga pencarian jauh lebih cepat.',
              'Fitur 2 — Rute tercepat: Struktur data = Graph (jaringan jalan). Algoritma = A* (A-star) atau Dijkstra. Alasan: Jalan-jalan kota membentuk weighted graph. A* lebih cepat dari Dijkstra karena menggunakan heuristik (jarak lurus ke tujuan) untuk memprioritaskan pencarian ke arah tujuan.',
              'Fitur 3 — Estimasi waktu: Struktur data = Array atau tabel lookup. Algoritma = Perhitungan sederhana: waktu = jarak / kecepatan_rata_rata + waktu_tunggu. Bisa ditambahkan faktor lalu lintas real-time (data streaming). Tidak membutuhkan algoritma kompleks.'
            ]
          },
          { soal: 'Sebuah perpustakaan digital memiliki 1 juta buku. Bandingkan 2 pendekatan untuk sistem pencarian buku:\n\nPendekatan A: Linear search melalui semua buku setiap kali ada pencarian.\nPendekatan B: BST seimbang (AVL Tree) yang sudah diurutkan berdasarkan judul.\n\n(a) Berapa comparison maksimum untuk masing-masing pendekatan?\n(b) Jika rata-rata 100 pencarian per detik, berapa lama waktu total untuk masing-masing?\n(c) Pendekatan mana yang lebih baik? Jelaskan!',
            penyelesaian: [
              '(a) Pendekatan A (Linear Search): Maksimum 1.000.000 comparison (semua buku diperiksa satu per satu). Pendekatan B (AVL BST): Maksimum log2(1.000.000) = ~20 comparison (karena tree seimbang, setiap langkah membagi data dua).',
              '(b) Pendekatan A: 100 pencarian x 1.000.000 comparison = 100.000.000 comparison per detik. Pendekatan B: 100 pencarian x 20 comparison = 2.000 comparison per detik. Perbandingan: Pendekatan A 50.000x lebih lambat dari Pendekatan B.',
              '(c) Pendekatan B (AVL BST) JAUH lebih baik. Dengan 1 juta buku, linear search membutuhkan 1 juta comparison per pencarian, sedangkan AVL hanya butuh ~20. Untuk sistem yang melayani banyak pencarian, perbedaan ini sangat krusial. Kekurangan AVL: butuh waktu untuk maintain keseimbangan saat insert/delete, tapi untuk sistem pencarian (read-heavy), ini sangat worth it.'
            ]
          },
        ]} />

        <Tugas data={[
          'Analisis Kompleksitas — Untuk setiap skenario berikut, tentukan algoritma/struktur data yang paling tepat dan analisis kompleksitas Big O-nya: (a) Cari nama kontak di phonebook 10.000 nama, (b) Urutkan 500 siswa berdasarkan nilai ujian, (c) Cari rute terpendek di peta kota dengan 200 persimpangan, (d) Cek apakah sebuah kata palindrome.',
          'Studi Kasus: Toko Online — Sebuah toko online memiliki 100.000 produk. Buatlah rancangan sistem pencarian produk yang mencakup: (a) Struktur data untuk menyimpan dan mencari produk, (b) Algoritma untuk pencarian berdasarkan nama, (c) Algoritma untuk sorting berdasarkan harga, (d) Algoritma untuk rekomendasi produk (suggestion), (e) Analisis Big O untuk setiap komponen.',
          'Refleksi Pemrograman — Setelah mempelajari Modul 1 dan Modul 2, buatlah refleksi: (a) Algoritma kompleks mana yang paling menarik bagimu dan mengapa, (b) Kasus nyata di sekitarmu yang bisa diselesaikan dengan Tree atau Graph, (c) Rencana belajar algoritma lanjutan apa yang ingin kamu pelajari selanjutnya.',
        ]} />

      </MateriCard>

    </div>
  );
}
