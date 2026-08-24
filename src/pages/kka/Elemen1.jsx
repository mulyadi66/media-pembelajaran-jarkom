import { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Brain, Puzzle, GitBranch, Layers, ListOrdered, CheckSquare, Info, Lightbulb, Eye, Repeat, Workflow, GraduationCap } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';

const sections = [
  { id: 's1', label: '1.1 Konsep Berpikir Komputasional' },
  { id: 's2', label: '1.2 Dekomposisi' },
  { id: 's3', label: '1.3 Pengenalan Pola' },
  { id: 's4', label: '1.4 Abstraksi' },
  { id: 's5', label: '1.5 Algoritma' },
  { id: 's6', label: '1.6 Manfaat dalam Kehidupan' },
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

export default function Elemen1() {
  const { markModuleRead } = useApp();
  useEffect(() => { markModuleRead('kka_elemen1'); }, [markModuleRead]);

  return (
    <div className="content-section">
      <SectionTracker moduleId="kka_elemen1" sections={sections} />

      <MateriCard icon={Brain} title="1.1 Konsep Berpikir Komputasional">
        <p><strong>Berpikir komputasional (computational thinking)</strong> adalah cara berpikir yang terstruktur dan logis untuk merumuskan masalah serta menemukan solusinya, sehingga solusi tersebut dapat dijalankan oleh manusia maupun oleh komputer.</p>
        <p>Istilah ini dipopulerkan oleh <strong>Jeanette Wing</strong>, profesor ilmu komputer, pada tahun 2006. Ia menyatakan bahwa berpikir komputasional adalah keterampilan dasar yang seharusnya dimiliki oleh semua orang — bukan hanya programmer — sama pentingnya dengan membaca, menulis, dan berhitung.</p>

        <div className="info-box">
          <strong><Info size={14} /> Berpikir Komputasional ≠ Harus Pakai Komputer</strong>
          <p>Berpikir komputasional lebih menekankan pada <strong>cara berpikir</strong>, bukan perangkatnya. Kita bisa berpikir komputasional tanpa menyentuh komputer sama sekali, misalnya saat mengatur jadwal harian, menyusun langkah memasak, atau merencanakan perjalanan.</p>
        </div>

        <h3>Karakteristik Berpikir Komputasional:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Karakteristik</th><th>Penjelasan</th></tr></thead>
            <tbody>
              <tr><td><strong>Terstruktur</strong></td><td>Masalah dipecah secara runtut dan sistematis</td></tr>
              <tr><td><strong>Logis</strong></td><td>Setiap langkah masuk akal dan dapat dipertanggungjawabkan</td></tr>
              <tr><td><strong>Rasional</strong></td><td>Keputusan didasarkan pada data, bukan perasaan</td></tr>
              <tr><td><strong>Dapat digeneralisasi</strong></td><td>Solusi yang ditemukan bisa dipakai untuk masalah serupa</td></tr>
              <tr><td><strong>Berorientasi solusi</strong></td><td>Fokus pada cara mencapai hasil yang diinginkan</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Empat Pilar Berpikir Komputasional:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Pilar</th><th>Konsep</th><th>Contoh Sederhana</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Dekomposisi</strong></td>
                <td>Memecah masalah besar menjadi bagian kecil</td>
                <td>Menyusun acara → dibagi: persiapan, logistik, acara</td>
              </tr>
              <tr>
                <td><strong>Pengenalan Pola</strong></td>
                <td>Mencari kesamaan/keteraturan dari masalah</td>
                <td>Deret 2, 4, 6, 8 → pola +2</td>
              </tr>
              <tr>
                <td><strong>Abstraksi</strong></td>
                <td>Menyaring informasi penting, buang yang tidak relevan</td>
                <td>Membuat rangkuman bab → ambil poin penting saja</td>
              </tr>
              <tr>
                <td><strong>Algoritma</strong></td>
                <td>Menyusun langkah-langkah penyelesaian</td>
                <td>Resep masakan → langkah urut dari awal sampai akhir</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="info-box success">
          <strong><Lightbulb size={14} /> Contoh Berpikir Komputasional dalam Sehari-hari:</strong>
          <p>Bayangkan kamu akan menyebrang jalan raya yang ramai. Tanpa sadar kamu berpikir komputasional: <strong>dekomposisi</strong> (cari tempat menyeberang, perhatikan arus kiri, perhatikan arus kanan, jalan), <strong>pola</strong> (kendaraan biasanya ramai di jam berangkat/pulang sekolah), <strong>abstraksi</strong> (fokus pada kendaraan yang melaju, bukan warna mobil), dan <strong>algoritma</strong> (tunggu sepi → lihat kiri → lihat kanan → menyeberang).</p>
        </div>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <ol>
            <li>Tuliskan satu masalah yang kamu hadapi akhir-akhir ini (misalnya bangun kesiangan, kehabisan uang saku).</li>
            <li>Jelaskan bagaimana keempat pilar berpikir komputasional (dekomposisi, pola, abstraksi, algoritma) bisa diterapkan untuk menyelesaikannya.</li>
            <li>Sebutkan satu perbedaan antara berpikir komputasional dan sekadar "bisa menggunakan komputer".</li>
          </ol>
        </div>
      </MateriCard>

      <MateriCard icon={Puzzle} title="1.2 Dekomposisi (Decomposition)">
        <p><strong>Dekomposisi</strong> adalah kemampuan memecah masalah yang besar dan kompleks menjadi bagian-bagian yang lebih kecil, sederhana, dan mudah dikelola. Prinsipnya: <em>"bagi masalah besar menjadi tugas-tugas kecil yang bisa dikerjakan satu per satu"</em>.</p>

        <h3>Mengapa Dekomposisi Penting?</h3>
        <ul>
          <li>Masalah kecil lebih <strong>mudah dipahami</strong> daripada masalah besar</li>
          <li>Bisa <strong>dibagi ke tim</strong> — setiap orang mengerjakan bagiannya</li>
          <li>Memudahkan <strong>pencarian sumber masalah</strong> saat ada yang salah</li>
          <li>Membantu <strong>menyelesaikan masalah bertahap</strong> tanpa kewalahan</li>
        </ul>

        <h3>Langkah Melakukan Dekomposisi:</h3>
        <ol>
          <li>Identifikasi masalah utama secara jelas</li>
          <li>Pecah menjadi beberapa bagian besar</li>
          <li>Pecah lagi setiap bagian bila masih terlalu besar</li>
          <li>Urutkan bagian mana yang harus dikerjakan lebih dulu</li>
          <li>Selesaikan satu per satu sampai tuntas</li>
        </ol>

        <h3>Contoh Dekomposisi — Menyelenggarakan Acara Sekolah:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Bagian Besar</th><th>Sub-bagian Kecil</th></tr></thead>
            <tbody>
              <tr><td><strong>Persiapan</strong></td><td>Izin sekolah, proposal, anggaran dana, panitia</td></tr>
              <tr><td><strong>Logistik</strong></td><td>Tempat, sound system, dekorasi, konsumsi</td></tr>
              <tr><td><strong>Acara</strong></td><td>Rundown, MC, penampilan, dokumentasi</td></tr>
              <tr><td><strong>Purna acara</strong></td><td>Pembongkaran, laporan kegiatan, evaluasi</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Contoh Dekomposisi dalam Pemrograman:</h3>
        <p>Membangun aplikasi <strong>kalkulator</strong> dipecah menjadi modul: input angka, pemilihan operasi, perhitungan, dan tampilan hasil. Setiap modul dikerjakan dan diuji sendiri-sendiri, lalu digabungkan.</p>

        <div className="info-box warning">
          <strong>Penting:</strong> Dekomposisi yang baik akan membuat pekerjaan tim menjadi jelas. Setiap anggota tim tahu persis bagian yang menjadi tanggung jawabnya.
        </div>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <p>Pecahkan masalah <strong>"Membuat Website Kelas"</strong> menjadi minimal 5 bagian kecil. Tuliskan juga urutan pengerjaannya (bagian mana yang dikerjakan pertama kali).</p>
        </div>
      </MateriCard>

      <MateriCard icon={GitBranch} title="1.3 Pengenalan Pola (Pattern Recognition)">
        <p><strong>Pengenalan pola</strong> adalah kemampuan mengidentifikasi kesamaan, perbedaan, dan keteraturan dari data atau masalah yang dihadapi. Dengan menemukan pola, kita bisa:</p>
        <ul>
          <li><strong>Memprediksi</strong> apa yang akan terjadi berikutnya</li>
          <li><strong>Menggunakan kembali</strong> solusi yang sudah terbukti berhasil</li>
          <li><strong>Mengelompokkan</strong> hal-hal yang sejenis</li>
          <li><strong>Menemukan hubungan</strong> antara berbagai informasi</li>
        </ul>

        <h3>Jenis-Jenis Pola:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Jenis Pola</th><th>Penjelasan</th><th>Contoh</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Pola Angka</strong></td>
                <td>Keteraturan dalam deret bilangan</td>
                <td>1, 3, 5, 7 → +2; 2, 4, 8, 16 → ×2</td>
              </tr>
              <tr>
                <td><strong>Pola Visual</strong></td>
                <td>Keteraturan pada gambar, warna, bentuk</td>
                <td>Batik, motif lantai, logo aplikasi</td>
              </tr>
              <tr>
                <td><strong>Pola Perilaku</strong></td>
                <td>Kebiasaan atau rutinitas yang berulang</td>
                <td>Jam ramai di kantin, pola belanja bulanan</td>
              </tr>
              <tr>
                <td><strong>Pola Data</strong></td>
                <td>Keteraturan dalam kumpulan data</td>
                <td>Nilai siswa cenderung naik setelah remedial</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Contoh Pengenalan Pola:</h3>
        <ul>
          <li>Deret angka 2, 4, 6, 8 → pola: <strong>+2</strong> setiap langkah, angka berikutnya 10</li>
          <li>Jam pelajaran selalu dimulai pukul 07.00 → pola rutinitas sekolah</li>
          <li>Harga ongkir dihitung dari jarak → pola perhitungan tetap</li>
          <li>Kucing memiliki pola umum: berkaki empat, berekor, bertelinga runcing → berguna untuk mengenali hewan</li>
          <li>Pada game: musuh selalu muncul di titik yang sama → pemain mempelajari polanya untuk menang</li>
        </ul>

        <div className="info-box">
          <strong><Eye size={14} /> Hubungan dengan Kecerdasan Artifisial:</strong>
          <p>Pengenalan pola adalah dasar dari <strong>machine learning</strong>. AI dilatih dengan jutaan data untuk menemukan pola (misalnya pola wajah manusia), lalu memakai pola itu untuk mengenali wajah baru yang belum pernah dilihat.</p>
        </div>

        <h3>Cara Melatih Pengenalan Pola:</h3>
        <ol>
          <li>Sering mengerjakan soal deret dan logika</li>
          <li>Amati rutinitas di sekitarmu (lalu lintas, cuaca, belanja)</li>
          <li>Bandingkan hal-hal yang mirip dan cari perbedaannya</li>
          <li>Tekan kebiasaan: setiap ketemu masalah, tanya <em>"pernah lihat masalah seperti ini?"</em></li>
        </ol>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <p>Tentukan pola dan angka/simbol berikutnya:</p>
          <ol>
            <li>3, 6, 9, 12, ...</li>
            <li>1, 1, 2, 3, 5, 8, ... <em>(petunjuk: tiap angka = jumlah dua angka sebelumnya)</em></li>
            <li>▲, ●, ■, ▲, ●, ...</li>
          </ol>
        </div>
      </MateriCard>

      <MateriCard icon={Layers} title="1.4 Abstraksi (Abstraction)">
        <p><strong>Abstraksi</strong> adalah kemampuan menyaring informasi yang paling penting dan mengabaikan detail yang tidak relevan untuk memecahkan masalah. Abstraksi membuat masalah menjadi lebih sederhana tanpa kehilangan esensinya.</p>

        <div className="info-box">
          <strong><Info size={14} /> Kunci Abstraksi: TANYA "APA YANG PENTING?"</strong>
          <p>Sebelum bekerja, tanyakan: <em>informasi apa yang benar-benar dibutuhkan untuk menyelesaikan masalah ini? Detail apa yang bisa saya abaikan?</em></p>
        </div>

        <h3>Contoh Abstraksi — Peta Lokasi:</h3>
        <p>Saat menggunakan aplikasi peta, kita tidak perlu tahu setiap pohon atau rumah di sepanjang jalan. Kita cukup fokus pada: <strong>jalan utama, arah, dan tujuan</strong>. Detail lain diabstraksikan agar peta mudah dibaca.</p>

        <h3>Contoh Abstraksi Lainnya:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Konteks</th><th>Yang Dipertahankan</th><th>Yang Diabstraksikan (dibuang)</th></tr></thead>
            <tbody>
              <tr><td><strong>Membuat rangkuman</strong></td><td>Poin penting bab</td><td>Kalimat penjelas panjang</td></tr>
              <tr><td><strong>Menggunakan ATM</strong></td><td>Menu yang tersedia</td><td>Cara kerja internal mesin</td></tr>
              <tr><td><strong>Berkendara</strong></td><td>Rambu, jalan, tujuan</td><td>Detail mesin kendaraan</td></tr>
              <tr><td><strong>Data siswa</strong></td><td>Nama, NIS, nilai</td><td>Warna rambut, hobi (jika tidak dibutuhkan)</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Abstraksi dalam Pemrograman — Fungsi:</h3>
        <p>Dalam coding, abstraksi diwujudkan dengan <strong>fungsi (function)</strong>. Kita tidak perlu tahu cara kerja internalnya setiap kali memakai; cukup panggil namanya. Contoh: fungsi <code>print()</code> di Python — kita tinggal menggunakannya tanpa tahu cara kerja di balik layar.</p>

        <div className="info-box warning">
          <strong>Hati-hati:</strong> Abstraksi yang salah (membuang informasi penting) bisa membuat solusi jadi salah. Seimbangkan antara <strong>kesederhanaan</strong> dan <strong>kelengkapan informasi</strong>.
        </div>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <p>Buatlah rangkuman materi sub bab ini (1.4) dalam maksimal 3 kalimat. Perhatikan: kalimat mana yang kamu pilih, dan kalimat mana yang kamu buang.</p>
        </div>
      </MateriCard>

      <MateriCard icon={ListOrdered} title="1.5 Algoritma">
        <p><strong>Algoritma</strong> adalah urutan langkah-langkah logis, jelas, dan terstruktur untuk menyelesaikan suatu masalah. Setiap langkah tidak boleh ambigu, harus memiliki awal dan akhir yang pasti.</p>

        <h3>Ciri-Ciri Algoritma yang Baik:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Ciri</th><th>Penjelasan</th></tr></thead>
            <tbody>
              <tr><td><strong>Logis</strong></td><td>Setiap langkah dapat diikuti dengan akal sehat</td></tr>
              <tr><td><strong>Jelas / tidak ambigu</strong></td><td>Satu langkah tidak boleh menimbulkan dua penafsiran</td></tr>
              <tr><td><strong>Terbatas</strong></td><td>Memiliki awal dan akhir, berhenti setelah selesai</td></tr>
              <tr><td><strong>Efektif</strong></td><td>Menghasilkan solusi yang benar dan tepat guna</td></tr>
              <tr><td><strong>Terurut</strong></td><td>Urutan langkah tidak boleh ditukar sembarangan</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Tiga Struktur Dasar Algoritma:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Struktur</th><th>Fungsi</th><th>Contoh dalam Sehari-hari</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Urutan (Sequence)</strong></td>
                <td>Langkah dijalankan berurutan dari atas ke bawah</td>
                <td>Resep masakan: potong → cuci → tumis → sajikan</td>
              </tr>
              <tr>
                <td><strong>Percabangan (Selection)</strong></td>
                <td>Memilih di antara beberapa kemungkinan</td>
                <td>Jika hujan, pakai jas hujan; jika tidak, jalan biasa</td>
              </tr>
              <tr>
                <td><strong>Perulangan (Iteration)</strong></td>
                <td>Mengulang langkah selama kondisi terpenuhi</td>
                <td>Menghafal kosakata sampai hafal</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Contoh Algoritma — Membuat Teh Manis:</h3>
        <ol>
          <li>Mulai</li>
          <li>Siapkan gelas, teh celup, gula, dan air panas</li>
          <li>Masukkan teh celup ke dalam gelas</li>
          <li>Tuang air panas ke dalam gelas</li>
          <li>Tambahkan gula sesuai selera</li>
          <li>Aduk hingga merata</li>
          <li>Selesai</li>
        </ol>

        <h3>Contoh Algoritma dengan Percabangan — Memutuskan Berangkat ke Sekolah:</h3>
        <ol>
          <li>Mulai</li>
          <li>Bangun dan bersiap</li>
          <li>Periksa cuaca</li>
          <li><strong>Jika</strong> hujan → bawa payung/jas hujan</li>
          <li><strong>Jika tidak</strong> hujan → tidak perlu membawanya</li>
          <li>Berangkat ke sekolah</li>
          <li>Selesai</li>
        </ol>

        <div className="info-box warning">
          <strong>Perhatikan:</strong> Urutan sangat menentukan hasil. Algoritma "tuang air dulu, baru masukkan teh celup" dan "masukkan teh celup dulu, baru tuang air" menghasilkan cara berbeda — meski hasil akhirnya mirip, salah satu urutan bisa saja salah dalam konteks lain.
        </div>

        <div className="info-box success">
          <strong><CheckSquare size={14} /> Tugas:</strong>
          <p>Tuliskan algoritma untuk <strong>"Menghidupkan Komputer"</strong> minimal 5 langkah secara urut. Kemudian tambahkan satu <strong>percabangan</strong>: apa yang dilakukan jika komputer tidak menyala saat tombol daya ditekan?</p>
        </div>
      </MateriCard>

      <MateriCard icon={GraduationCap} title="1.6 Manfaat Berpikir Komputasional dalam Kehidupan">
        <p>Berpikir komputasional membantu kita menjadi pemecah masalah yang lebih baik — bukan hanya di bidang teknologi, tetapi juga di sekolah, pekerjaan, dan kehidupan sehari-hari.</p>

        <h3>Manfaat di Bidang Pendidikan:</h3>
        <ul>
          <li>Membantu memahami materi pelajaran lain yang menuntut logika (matematika, IPA)</li>
          <li>Melatih cara belajar terstruktur: pecah materi → cari pola → ringkas → pahami urutan</li>
          <li>Menyiapkan diri menghadapi soal-soal penalaran dan HOTS</li>
        </ul>

        <h3>Manfaat di Bidang Pekerjaan:</h3>
        <div className="table-responsive">
          <table className="materi-table">
            <thead><tr><th>Manfaat</th><th>Contoh Penerapan</th></tr></thead>
            <tbody>
              <tr><td><strong>Memecahkan masalah kompleks</strong></td><td>Menyusun rencana kerja kelompok besar</td></tr>
              <tr><td><strong>Meningkatkan efisiensi</strong></td><td>Menata rute pengiriman terpendek</td></tr>
              <tr><td><strong>Membuat keputusan lebih baik</strong></td><td>Membandingkan harga sebelum membeli</td></tr>
              <tr><td><strong>Dasar kemampuan coding</strong></td><td>Semua bahasa pemrograman memakai logika ini</td></tr>
              <tr><td><strong>Bekal karir masa depan</strong></td><td>Diperlukan di banyak profesi digital</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Manfaat dalam Kehidupan Sehari-hari:</h3>
        <ul>
          <li><strong>Mengatur uang saku</strong> — dekomposisi pengeluaran, cari pola boros, buat anggaran</li>
          <li><strong>Merencanakan perjalanan</strong> — urutkan langkah, pilih rute terbaik (algoritma)</li>
          <li><strong>Belajar lebih efisien</strong> — pecah materi, temukan pola soal ujian</li>
          <li><strong>Menyusun kamar</strong> — kelompokkan barang sejenis, buang yang tidak penting</li>
        </ul>

        <div className="info-box">
          <strong><Repeat size={14} /> Ringkasan Empat Pilar:</strong>
          <p><strong>Dekomposisi</strong> memecah masalah → <strong>Pengenalan Pola</strong> mencari kesamaan → <strong>Abstraksi</strong> menyaring yang penting → <strong>Algoritma</strong> menyusun langkah penyelesaian. Keempatnya bekerja bersama untuk menyelesaikan masalah secara sistematis.</p>
        </div>

        <div className="info-box warning">
          <strong>Catatan:</strong> Berpikir komputasional adalah fondasi dari semua materi KKA selanjutnya: algoritma pemrograman, analisis data, dan kecerdasan artifisial. Kuasai keempat pilarnya dengan baik.
        </div>

        <div className="info-box success">
          <strong><Workflow size={14} /> Tugas Refleksi:</strong>
          <p>Pilih satu masalah yang pernah kamu alami (misalnya telat terus ke sekolah). Jelaskan bagaimana kamu menyelesaikannya menggunakan keempat pilar berpikir komputasional: dekomposisi, pengenalan pola, abstraksi, dan algoritma.</p>
        </div>
      </MateriCard>
    </div>
  );
}
