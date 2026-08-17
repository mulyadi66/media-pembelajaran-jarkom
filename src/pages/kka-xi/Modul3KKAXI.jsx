import { useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Code2, Box, Layers, Palette, Puzzle, Monitor, FileCode, Target, Award, Lightbulb, AlertTriangle } from 'lucide-react';
import SectionTracker from '../../components/SectionTracker';
import { ContohSoal, Tugas } from '../../components/ContohSoal';

const sections = [
  { id: 's1', label: 'A. Dasar-Dasar Pemrograman Berorientasi Objek' },
  { id: 's2', label: 'B. Pengembangan Aplikasi Berbasis OOP dengan GUI' },
  { id: 's3', label: 'C. Proyek Mini OOP' },
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

      {/* ================================================================ */}
      {/*  A. DASAR-DASAR PEMROGRAMAN BERORIENTASI OBJEK                  */}
      {/* ================================================================ */}
      <MateriCard icon={Code2} title="A. Dasar-Dasar Pemrograman Berorientasi Objek">

        {/* A.1 Pengertian OOP */}
        <h4 style={{marginTop: 0}}>A.1 Apa itu OOP?</h4>
        <p>OOP (Object-Oriented Programming) adalah paradigma pemrograman yang menyusun program sebagai kumpulan objek yang saling berinteraksi. Berbeda dengan pemrograman prosedural yang menulis langkah-langkah secara berurutan, OOP memodelkan dunia nyata ke dalam kode.</p>
        <h3 style={{marginTop: 12}}>Mengapa OOP Penting?</h3>
        <ul>
          <li><strong>Modular</strong> — Program dipecah menjadi bagian-bagian independen (class). Mudah dikelola dan dipelihara.</li>
          <li><strong>Reusable</strong> — Class bisa digunakan kembali di bagian program lain atau proyek berbeda tanpa menulis ulang kode.</li>
          <li><strong>Scalable</strong> — Mudah ditambah fitur baru tanpa mengubah kode yang sudah ada. Cocok untuk proyek besar.</li>
          <li><strong>Mirip Dunia Nyata</strong> — Memodelkan objek nyata (Siswa, Buku, Mobil) dengan properti dan perilaku.</li>
        </ul>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Analogi Sederhana</strong>
          <p>Bayangkan membuat resep masakan: Pemrograman prosedural seperti menulis resep langkah demi langkah dari awal sampai akhir. OOP seperti punya "cetakan kue" (class) yang bisa kamu gunakan berulang kali untuk membuat banyak kue (objek) dengan rasa dan bentuk berbeda.</p>
        </div>

        {/* A.2 Class dan Object */}
        <h4 style={{marginTop: 24}}>A.2 Class dan Object</h4>
        <p><strong>Class</strong> adalah cetakan/konstruk/rancangan ( blueprint ) untuk membuat objek. Class mendefinisikan atribut (data) dan metode (fungsi) yang dimiliki setiap objek.</p>
        <p><strong>Object</strong> adalah instance (contoh nyata) dari class. Dari satu class, bisa dibuat banyak objek.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`class Siswa:
    # Atribut class (dibagikan semua objek)
    sekolah = "SMKN 2 Kuningan"

    # Constructor - dipanggil saat objek dibuat
    def __init__(self, nama, kelas):
        # Atribut instance (unik per objek)
        self.nama = nama
        self.kelas = kelas
        self.nilai = []

    # Metode
    def perkenalan(self):
        return f"Halo, saya {nama} dari kelas {self.kelas}"

    def tambah_nilai(self, n):
        self.nilai.append(n)

    def rata_rata(self):
        if not self.nilai:
            return 0
        return sum(self.nilai) / len(self.nilai)

# Membuat objek dari class Siswa
siswa1 = Siswa("Budi", "XI TJKT")
siswa2 = Siswa("Andi", "XI TJKT")

siswa1.tambah_nilai(85)
siswa1.tambah_nilai(90)
print(siswa1.rata_rata())  # Output: 87.5
print(Siswa.sekolah)       # Output: SMKN 2 Kuningan`}
        </pre>
        <h3 style={{marginTop: 12}}>Istilah Penting:</h3>
        <ul>
          <li><strong>self</strong> — Referensi ke objek itu sendiri. Selalu parameter pertama di setiap metode.</li>
          <li><strong>__init__</strong> — Constructor. Metode khusus yang otomatis dipanggil saat objek dibuat.</li>
          <li><strong>self.nama</strong> — Atribut instance. Setiap objek punya nilai atribut yang berbeda.</li>
          <li><strong>Siswa.sekolah</strong> — Atribut class. Dibagikan ke semua objek dari class yang sama.</li>
        </ul>

        {/* A.3 Encapsulation */}
        <h4 style={{marginTop: 24}}>A.3 Encapsulation — Menyembunyikan Detail</h4>
        <p>Encapsulation adalah prinsip menyembunyikan data internal suatu objek dan hanya meng暴露kan interface yang diperlukan. Ini melindungi data dari akses dan perubahan yang tidak sah.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`class RekeningBank:
    def __init__(self, pemilik, saldo):
        self.pemilik = pemilik        # public
        self._bank = "BCA"            # protected (konvensi)
        self.__saldo = saldo          # private

    def get_saldo(self):
        return self.__saldo

    def setor(self, jumlah):
        if jumlah > 0:
            self.__saldo += jumlah
            return True
        return False

    def tarik(self, jumlah):
        if 0 < jumlah <= self.__saldo:
            self.__saldo -= jumlah
            return True
        return False

rek = RekeningBank("Budi", 1000000)
print(rek.pemilik)         # OK - public
print(rek.get_saldo())     # OK - pakai getter
rek.tarik(500000)          # OK - pakai setter
# print(rek.__saldo)        # ERROR! private tidak bisa diakses langsung`}
        </pre>
        <div className="info-box">
          <strong><AlertTriangle size={14} /> Level Akses di Python</strong>
          <p>Python menggunakan konvensi nama: (1) Public (tanpa underscore) - bisa diakses siapa saja, (2) Protected (satu underscore _nama) - hanya untuk internal class/subclass, (3) Private (dua underscore __nama) - name mangling, sulit diakses dari luar. Python tidak seperti Java/C++ yang ketat access modifier-nya, tapi konvensi ini tetap penting untuk kode yang rapi dan aman.</p>
        </div>

        {/* A.4 Inheritance */}
        <h4 style={{marginTop: 24}}>A.4 Inheritance — Pewarisan Sifat</h4>
        <p>Inheritance memungkinkan class baru (child/subclass) mewarisi atribut dan metode dari class lain (parent/superclass). Ini mengurangi duplikasi kode dan membangun hubungan hierarki.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`class Manusia:
    def __init__(self, nama, umur):
        self.nama = nama
        self.umur = umur

    def perkenalan(self):
        return f"Saya {self.nama}, umur {self.umur} tahun"

class Siswa(Manusia):  # Siswa mewarisi dari Manusia
    def __init__(self, nama, umur, kelas):
        super().__init__(nama, umur)  # panggil constructor parent
        self.kelas = kelas
        self.nilai = []

    def perkenalan(self):  # method overriding
        return f"Saya {self.nama}, siswa kelas {self.kelas}"

    def belajar(self, mata_pelajaran):
        return f"{self.nama} sedang belajar {mata_pelajaran}"

class Guru(Manusia):  # Guru juga mewarisi dari Manusia
    def __init__(self, nama, umur, mata_pelajaran):
        super().__init__(nama, umur)
        self.mata_pelajaran = mata_pelajaran

    def mengajar(self):
        return f"Pak/Bu {self.nama} sedang mengajar {self.mata_pelajaran}"

siswa = Siswa("Budi", 16, "XI TJKT")
guru = Guru("Pak Andi", 35, "Pemrograman")

print(siswa.perkenalan())  # Output: Saya Budi, siswa kelas XI TJKT
print(guru.perkenalan())   # Output: Saya Pak Andi, umur 35 tahun
print(siswa.belajar("Python"))  # Output: Budi sedang belajar Python`}
        </pre>
        <h3 style={{marginTop: 12}}>Konsep Penting Inheritance:</h3>
        <ul>
          <li><strong>super()</strong> — Memanggil constructor atau metode dari class parent.</li>
          <li><strong>Method Overriding</strong> — Child class mengganti implementasi metode dari parent.</li>
          <li><strong>Single Inheritance</strong> — Child hanya mewarisi dari SATU parent.</li>
          <li><strong>Multiple Inheritance</strong> — Child mewarisi dari lebih dari satu parent. (Python mendukung, tapi harus hati-hati dengan Diamond Problem).</li>
        </ul>

        {/* A.5 Polymorphism */}
        <h4 style={{marginTop: 24}}>A.5 Polymorphism — Banyak Bentuk, Satu Interface</h4>
        <p>Polymorphism memungkinkan objek dari class berbeda merespons metode yang sama dengan cara yang berbeda. Ini adalah salah satu kekuatan terbesar OOP.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`class Kucing:
    def suara(self):
        return "Meong!"

class Anjing:
    def suara(self):
        return "Guk guk!"

class Bebek:
    def suara(self):
        return "Kwek kwek!"

# Polymorphism dalam aksi
hewan = [Kucing(), Anjing(), Bebek()]
for h in hewan:
    print(f"{h.__class__.__name__}: {h.suara()}")

# Output:
# Kucing: Meong!
# Anjing: Guk guk!
# Bebek: Kwek kwek!`}
        </pre>
        <p><strong>Duck Typing di Python:</strong> Python menerapkan polymorphism melalui duck typing — "Jika ia berjalan seperti bebek dan berkicau seperti bebek, maka ia adalah bebek." Python tidak peduli tipe objeknya, yang penting objek tersebut punya metode yang dibutuhkan.</p>

        <ContohSoal data={[
          { soal: 'Buatlah class Mahasiswa dengan atribut: nama, nim, prodi, ipk. Sertakan method: (1) __init__ untuk constructor, (2) method untuk menambahkan IPK, (3) method untuk menentukan kategori mahasiswa (berprestasi jika IPK >= 3.5, baik jika >= 3.0, perlu perbaikan jika < 3.0). Lalu buat 2 objek Mahasiswa dan tampilkan informasinya!',
            penyelesaian: [
              'Class Mahasiswa dengan 4 atribut: nama, nim, prodi, ipk (dengan default 0.0)',
              'Method __init__ menerima nama, nim, prodi. IPK default 0.0.',
              'Method set_ipk(ipk) untuk mengupdate IPK dengan validasi 0.0-4.0.',
              'Method kategori() mengembalikan string berdasarkan threshold IPK.',
              'Penggunaan: mhs1 = Mahasiswa("Budi", "12345", "TI"); mhs1.set_ipk(3.75); print(mhs1.kategori()) -> "Berprestasi"'
            ]
          },
          { soal: 'Jelaskan konsep encapsulation dalam OOP. Berikan contoh kasus nyata di mana encapsulation penting digunakan, dan apa yang terjadi jika data tidak di-encapsulate dengan benar!',
            penyelesaian: [
              'Encapsulation adalah prinsip menyembunyikan data internal objek dan hanya menyediakan interface yang terkontrol untuk mengakses/mengubah data.',
              'Kasus nyata: Rekening bank. Saldo rekening harus private. Jika public, siap saja bisa langsung mengubah saldo: rekening.__saldo = 999999999. Dengan encapsulation, saldo hanya bisa diubah melalui method setor() dan tarik() yang memiliki validasi.',
              'Jika tidak di-encapsulate: (1) Data bisa diubah sembarangan, (2) Tidak ada validasi input, (3) Kode menjadi rapuh dan rentan bug, (4) Sulit melakukan logging/audit karena perubahan terjadi di luar kontrol.',
              'Di Python: gunakan __dunder (private) untuk data sensitif, sediakan getter/setter untuk akses terkontrol.'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah class Mobil dengan atribut: merek, tahun, kilometer, bensin. Sertakan method: start(), stop(), isi_bensin(liter), dan jarak_tempuh(). Implementasikan encapsulation untuk attribute bensin (tidak boleh negatif, maksimal 50 liter).',
          'Buatlah class Hewan (parent) dan 3 child class (Kucing, Anjing, Burung) dengan method make_sound() yang berbeda untuk masing-masing. Demonstrasikan polymorphism dengan membuat list 6 hewan campuran dan memanggil make_sound() di loop.',
          'Buatlah class Bank Account dengan encapsulation yang tepat (private __saldo). Tambahkan method transfer(rekening_tujuan, jumlah) yang melakukan validasi saldo cukup sebelum transfer. Test dengan 2 objek rekening.',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  B. PENGEMBANGAN APLIKASI BERBASIS OOP DENGAN GUI               */}
      {/* ================================================================ */}
      <MateriCard icon={Palette} title="B. Pengembangan Aplikasi Berbasis OOP dengan GUI">

        {/* B.1 Pengertian GUI */}
        <h4 style={{marginTop: 0}}>B.1 Apa itu GUI dan Mengapa Tkinter?</h4>
        <p>GUI (Graphical User Interface) adalah antarmuka pengguna grafis yang memungkinkan pengguna berinteraksi dengan program melalui tombol, form, gambar, dan elemen visual lainnya. Berbeda dengan CLI (Command Line Interface) yang hanya berbasis teks.</p>
        <h3 style={{marginTop: 12}}>Mengapa Tkinter?</h3>
        <ul>
          <li><strong>Bawaan Python</strong> — Tidak perlu instalasi tambahan. Sudah ada di setiap instalasi Python.</li>
          <li><strong>Mudah Dipelajari</strong> — Sintaks sederhana, cocok untuk pemula memahami konsep GUI.</li>
          <li><strong>Cross-Platform</strong> — Berjalan di Windows, macOS, dan Linux.</li>
          <li><strong>OOP-Friendly</strong> — Dirancang untuk digunakan dengan pendekatan OOP.</li>
        </ul>

        {/* B.2 Widget Dasar */}
        <h4 style={{marginTop: 24}}>B.2 Widget Dasar Tkinter</h4>
        <p>Widget adalah elemen GUI seperti tombol, label, form input, dll. Berikut widget yang paling sering digunakan:</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`import tkinter as tk
from tkinter import messagebox

# Membuat jendela utama
root = tk.Tk()
root.title("Aplikasi Pertama")
root.geometry("400x300")

# Label - teks statis
label_nama = tk.Label(root, text="Masukkan Nama:")
label_nama.pack(pady=5)

# Entry - input teks
entry_nama = tk.Entry(root, width=30)
entry_nama.pack(pady=5)

# Text area - input teks multi-baris
text_alamat = tk.Text(root, height=3, width=30)
text_alamat.pack(pady=5)

# Button - tombol
def sapa():
    nama = entry_nama.get()
    if nama:
        messagebox.showinfo("Halo", f"Selamat datang, {nama}!")
    else:
        messagebox.showwarning("Peringatan", "Nama harus diisi!")

btn_sapa = tk.Button(root, text="Sapa", command=sapa)
btn_sapa.pack(pady=10)

# Checkbox
var_hobi = tk.BooleanVar()
chk = tk.Checkbutton(root, text="Suka coding", variable=var_hobi)
chk.pack()

# Radio Button
var_gender = tk.StringVar(value="Laki-laki")
tk.Radiobutton(root, text="Laki-laki", variable=var_gender, value="Laki-laki").pack()
tk.Radiobutton(root, text="Perempuan", variable=var_gender, value="Perempuan").pack()

root.mainloop()  # Menjalankan event loop`}
        </pre>
        <div className="info-box">
          <strong><Lightbulb size={14} /> Widget Penting</strong>
          <p>Label (teks statis), Entry (input satu baris), Text (input multi-baris), Button (tombol), Checkbutton (centang), Radiobutton (pilihan tunggal), Listbox (daftar pilihan), Combobox (dropdown dari tkinter.ttk), Frame (wadah pengelompokan widget).</p>
        </div>

        {/* B.3 Layout Manager */}
        <h4 style={{marginTop: 24}}>B.3 Layout Manager — Mengatur Posisi Widget</h4>
        <p>Tkinter menyediakan 3 layout manager untuk mengatur posisi widget di jendela:</p>
        <ul>
          <li><strong>pack()</strong> — Menyusun widget secara berurutan (atas ke bawah atau kiri ke kanan). Paling sederhana. Cocok untuk layout sederhana.</li>
          <li><strong>grid()</strong> — Menyusun widget dalam bentuk tabel (baris x kolom). Paling fleksibel. Cocok untuk form input.</li>
          <li><strong>place()</strong> — Menempatkan widget di posisi absolut (x, y pixel). Sangat presisi tapi susah di-maintain jika ukuran jendela berubah.</li>
        </ul>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`# Contoh layout GRID - Form Login
root = tk.Tk()
root.title("Login")
root.geometry("300x200")

# Label dan Entry di grid
tk.Label(root, text="Username:").grid(row=0, column=0, padx=10, pady=5, sticky="e")
entry_user = tk.Entry(root, width=25)
entry_user.grid(row=0, column=1, padx=10, pady=5)

tk.Label(root, text="Password:").grid(row=1, column=0, padx=10, pady=5, sticky="e")
entry_pass = tk.Entry(root, width=25, show="*")
entry_pass.grid(row=1, column=1, padx=10, pady=5)

# Tombol di grid (span 2 kolom)
tk.Button(root, text="Login", width=20).grid(row=2, column=0, columnspan=2, pady=15)

root.mainloop()`}
        </pre>

        {/* B.4 Integrasi OOP dengan GUI */}
        <h4 style={{marginTop: 24}}>B.4 Integrasi OOP dengan GUI — Pendekatan Bersih</h4>
        <p>Saat aplikasi GUI tumbuh besar, pendekatan procedural menjadi sulit dikelola. OOP membantu mengorganisir kode GUI menjadi class yang terstruktur.</p>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`import tkinter as tk
from tkinter import messagebox

class AppKalkulator:
    def __init__(self, root):
        self.root = root
        self.root.title("Kalkulator Sederhana")
        self.root.geometry("300x250")
        self._buat_widget()

    def _buat_widget(self):
        # Input angka pertama
        tk.Label(self.root, text="Angka 1:").grid(row=0, column=0, padx=10, pady=5)
        self.entry1 = tk.Entry(self.root, width=15)
        self.entry1.grid(row=0, column=1, padx=10, pady=5)

        # Input angka kedua
        tk.Label(self.root, text="Angka 2:").grid(row=1, column=0, padx=10, pady=5)
        self.entry2 = tk.Entry(self.root, width=15)
        self.entry2.grid(row=1, column=1, padx=10, pady=5)

        # Tombol operasi
        frame_btn = tk.Frame(self.root)
        frame_btn.grid(row=2, column=0, columnspan=2, pady=10)

        tk.Button(frame_btn, text="+", width=5, command=self.tambah).pack(side="left", padx=2)
        tk.Button(frame_btn, text="-", width=5, command=self.kurang).pack(side="left", padx=2)
        tk.Button(frame_btn, text="*", width=5, command=self.kali).pack(side="left", padx=2)
        tk.Button(frame_btn, text="/", width=5, command=self.bagi).pack(side="left", padx=2)

        # Label hasil
        self.label_hasil = tk.Label(self.root, text="Hasil: -", font=("Arial", 12, "bold"))
        self.label_hasil.grid(row=3, column=0, columnspan=2, pady=10)

    def _get_angka(self):
        try:
            a = float(self.entry1.get())
            b = float(self.entry2.get())
            return a, b
        except ValueError:
            messagebox.showerror("Error", "Masukkan angka yang valid!")
            return None, None

    def tambah(self):
        a, b = self._get_angka()
        if a is not None:
            self.label_hasil.config(text=f"Hasil: {a + b}")

    def kurang(self):
        a, b = self._get_angka()
        if a is not None:
            self.label_hasil.config(text=f"Hasil: {a - b}")

    def kali(self):
        a, b = self._get_angka()
        if a is not None:
            self.label_hasil.config(text=f"Hasil: {a * b}")

    def bagi(self):
        a, b = self._get_angka()
        if a is not None:
            if b == 0:
                messagebox.showerror("Error", "Tidak bisa bagi nol!")
            else:
                self.label_hasil.config(text=f"Hasil: {a / b}")

root = tk.Tk()
app = AppKalkulator(root)
root.mainloop()`}
        </pre>
        <div className="info-box">
          <strong><Award size={14} /> Pola Desain</strong>
          <p>Perhatikan pola: class AppKalkulator memiliki (1) __init__ untuk setup awal, (2) method _buat_widget() untuk membuat semua elemen GUI, (3) method _get_angka() sebagai helper untuk validasi input, (4) method operasi (tambah, kurang, kali, bagi) yang dipanggil oleh tombol. Pola ini menjadikan kode rapi, terorganisir, dan mudah dipelihara.</p>
        </div>

        <ContohSoal data={[
          { soal: 'Buatlah rancangan class untuk aplikasi GUI pencatatan keuangan sederhana menggunakan Tkinter. Identifikasi: (a) Class apa saja yang dibutuhkan, (b) Atribut dan method setiap class, (c) Widget GUI yang digunakan, (d) Alur interaksi pengguna.',
            penyelesaian: [
              '(a) Class yang dibutuhkan: (1) AppKeuangan (main window + layout), (2) Transaksi (model data: tanggal, keterangan, jumlah, tipe), (3) Database (penyimpanan data sederhana pakai list/JSON).',
              '(b) Class Transaksi: atribut (tanggal, keterangan, jumlah, tipe), method (to_dict(), from_dict()). Class AppKeuangan: atribut (root, entries_list, total), method (__init__, _buat_widget, tambah_transaksi, hapus_transaksi, update_total, simpan_data, muat_data).',
              '(c) Widget: Label (judul, total), Entry (input keterangan, jumlah), Button (Tambah, Hapus, Simpan), Listbox/Treeview (daftar transaksi), Combobox (pilihan pemasukan/pengeluaran).',
              '(d) Alur: Pengguna isi form -> Klik Tambah -> Data masuk ke list + Treeview update -> Klik Simpan -> Data tersimpan ke file JSON. Total otomatis terhitung.'
            ]
          },
          { soal: 'Dalam kode GUI Tkinter berikut, identifikasi 3 kesalahan umum yang harus dihindari:\n\nclass App:\n    def __init__(self):\n        self.entry = Entry()\n        self.entry.pack()\n        self.data = []\n\n    def proses(self):\n        val = self.entry.get()\n        self.data.append(val)\n\nroot = Tk()\napp = App()\napp.entry.pack()  # <-- ini sudah dipanggil di __init__\nroot.mainloop()',
            penyelesaian: [
              'Kesalahan 1 - double pack: app.entry.pack() dipanggil DUA kali (di __init__ dan di luar). Ini akan membuat widget entry muncul dua kali di jendela. Solusi: panggil pack() hanya sekali, idealnya di method _buat_widget().',
              'Kesalahan 2 - root tidak diteruskan: __init__ tidak menerima parameter root. Seharusnya: def __init__(self, root): self.root = root lalu self.entry = Entry(self.root). Tanpa parent, widget tidak akan muncul di jendela yang benar.',
              'Kesalahan 3 - tidak ada error handling: method proses() tidak menangani kasus input kosong atau non-angka. Selalu tambakan validasi sebelum memproses input pengguna. Contoh: if not val: messagebox.showwarning(...).'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah aplikasi GUI sederhana dengan Tkinter: Form Pendaftaran Siswa. Form harus memiliki: Entry (nama, NIS, alamat), Combobox (kelas: X, XI, XII), Radio Button (jenis kelamin), Checkbutton (hobi: coding, desain, jaringan), dan Tombol (Simpan, Reset). Gunakan pendekatan OOP dengan minimal 1 class.',
          'Buatlah kalkulator sederhana GUI yang bisa menghitung: penjumlahan, pengurangan, perkalian, pembagian, dan pangkat. Gunakan class dengan method terpisah untuk setiap operasi. Tambahkan validasi input (hanya angka) dan penanganan error (bagi nol).',
          'Buatlah To-Do List GUI sederhana: Entry untuk menambah tugas, Button Tambah, Listbox untuk menampilkan daftar, Button Hapus untuk menghapus tugas terpilih, dan Label counter jumlah tugas. Simpan data di list dalam class.',
        ]} />

      </MateriCard>

      {/* ================================================================ */}
      {/*  C. PROYEK MINI OOP                                              */}
      {/* ================================================================ */}
      <MateriCard icon={Puzzle} title="C. Proyek Mini OOP">

        {/* C.1 Analisis Kebutuhan */}
        <h4 style={{marginTop: 0}}>C.1 Analisis Kebutuhan — Sistem Perpustakaan Digital</h4>
        <p>Sebelum menulis kode, seorang programmer harus melakukan analisis kebutuhan: memahami masalah, mengidentifikasi entitas, dan merancang solusi. Mari kita bangun Sistem Perpustakaan Digital sederhana menggunakan OOP + GUI.</p>
        <h3 style={{marginTop: 12}}>Fitur yang Dibutuhkan:</h3>
        <ul>
          <li>Menambah buku baru (judul, pengarang, tahun, stok)</li>
          <li>Menampilkan daftar buku</li>
          <li>Meminjam buku (mengurangi stok)</li>
          <li>Mengembalikan buku (menambah stok)</li>
          <li>Mencari buku berdasarkan judul</li>
          <li>Menyimpan dan memuat data dari file</li>
        </ul>

        {/* C.2 Rancangan Class Diagram */}
        <h4 style={{marginTop: 24}}>C.2 Rancangan Class Diagram</h4>
        <p>Class diagram adalah diagram UML yang menunjukkan struktur class dalam sistem: nama class, atribut, method, dan hubungan antar class.</p>
        <ul>
          <li><strong>Class Buku</strong> — atribut: id, judul, pengarang, tahun, stok, dipinjam; method: __str__(), tersedia(), pinjam(), kembalikan()</li>
          <li><strong>Class Perpustakaan</strong> — atribut: nama, daftar_buku; method: tambah_buku(), cari_buku(), get_buku_tersedia(), simpan_ke_file(), muat_dari_file()</li>
          <li><strong>Class AppPerpustakaan (GUI)</strong> — atribut: root, perpustakaan; method: _buat_widget(), tambah_handler(), pinjam_handler(), kembalikan_handler(), cari_handler(), update_list()</li>
        </ul>
        <p><strong>Hubungan:</strong> AppPerpustakaan HAS-A Perpustakaan (composition). Perpustakaan HAS-A Buku (aggregation).</p>

        {/* C.3 Implementasi */}
        <h4 style={{marginTop: 24}}>C.3 Implementasi Kode</h4>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`import tkinter as tk
from tkinter import messagebox
import json

class Buku:
    _counter = 0

    def __init__(self, judul, pengarang, tahun, stok=1):
        Buku._counter += 1
        self.id = Buku._counter
        self.judul = judul
        self.pengarang = pengarang
        self.tahun = tahun
        self.stok = stok
        self.dipinjam = 0

    def tersedia(self):
        return self.stok - self.dipinjam > 0

    def pinjam(self):
        if self.tersedia():
            self.dipinjam += 1
            return True
        return False

    def kembalikan(self):
        if self.dipinjam > 0:
            self.dipinjam -= 1
            return True
        return False

    def to_dict(self):
        return {"id": self.id, "judul": self.judul,
                "pengarang": self.pengarang, "tahun": self.tahun,
                "stok": self.stok, "dipinjam": self.dipinjam}

    def __str__(self):
        status = "Tersedia" if self.tersedia() else "Habis"
        return f"[{self.id}] {self.judul} - {self.pengarang} ({self.tahun}) | {status}"


class Perpustakaan:
    def __init__(self, nama):
        self.nama = nama
        self.daftar_buku = []

    def tambah_buku(self, buku):
        self.daftar_buku.append(buku)

    def cari_buku(self, kata_kunci):
        return [b for b in self.daftar_buku
                if kata_kunci.lower() in b.judul.lower()]

    def get_semua_buku(self):
        return self.daftar_buku

    def simpan_ke_file(self, nama_file="data_perpus.json"):
        data = [b.to_dict() for b in self.daftar_buku]
        with open(nama_file, "w") as f:
            json.dump(data, f, indent=2)

    def muat_dari_file(self, nama_file="data_perpus.json"):
        try:
            with open(nama_file, "r") as f:
                data = json.load(f)
            for d in data:
                b = Buku(d["judul"], d["pengarang"], d["tahun"], d["stok"])
                b.id = d["id"]
                b.dipinjam = d.get("dipinjam", 0)
                self.daftar_buku.append(b)
            Buku._counter = max([b.id for b in self.daftar_buku], default=0)
        except FileNotFoundError:
            pass`}
        </pre>
        <pre style={{background:'var(--bg-secondary)', padding:16, borderRadius:8, overflow:'auto', fontSize:'0.85rem'}}>
{`class AppPerpustakaan:
    def __init__(self, root):
        self.root = root
        self.root.title("Perpustakaan Digital")
        self.root.geometry("600x400")
        self.perpus = Perpustakaan("SMKN 2 Kuningan")
        self.perpus.muat_dari_file()
        self._buat_widget()
        self._update_list()

    def _buat_widget(self):
        # Frame input
        frame_input = tk.LabelFrame(self.root, text="Tambah Buku", padx=10, pady=10)
        frame_input.pack(fill="x", padx=10, pady=5)

        tk.Label(frame_input, text="Judul:").grid(row=0, column=0)
        self.entry_judul = tk.Entry(frame_input, width=25)
        self.entry_judul.grid(row=0, column=1, padx=5)

        tk.Label(frame_input, text="Pengarang:").grid(row=0, column=2)
        self.entry_pengarang = tk.Entry(frame_input, width=20)
        self.entry_pengarang.grid(row=0, column=3, padx=5)

        tk.Label(frame_input, text="Tahun:").grid(row=1, column=0)
        self.entry_tahun = tk.Entry(frame_input, width=10)
        self.entry_tahun.grid(row=1, column=1, padx=5, sticky="w")

        tk.Button(frame_input, text="Tambah Buku", command=self._tambah_handler).grid(row=1, column=3, pady=5)

        # List buku
        self.listbox = tk.Listbox(self.root, width=70, height=10)
        self.listbox.pack(padx=10, pady=5)

        # Frame aksi
        frame_aksi = tk.Frame(self.root)
        frame_aksi.pack(pady=5)
        tk.Button(frame_aksi, text="Pinjam", command=self._pinjam_handler).pack(side="left", padx=5)
        tk.Button(frame_aksi, text="Kembalikan", command=self._kembalikan_handler).pack(side="left", padx=5)
        tk.Button(frame_aksi, text="Cari", command=self._cari_handler).pack(side="left", padx=5)
        tk.Button(frame_aksi, text="Tampilkan Semua", command=self._update_list).pack(side="left", padx=5)

    def _update_list(self, buku_list=None):
        self.listbox.delete(0, tk.END)
        data = buku_list or self.perpus.get_semua_buku()
        for b in data:
            self.listbox.insert(tk.END, str(b))

    def _tambah_handler(self):
        judul = self.entry_judul.get()
        pengarang = self.entry_pengarang.get()
        tahun = self.entry_tahun.get()
        if not (judul and pengarang and tahun):
            messagebox.showwarning("Peringatan", "Semua field wajib diisi!")
            return
        try:
            buku = Buku(judul, pengarang, int(tahun))
            self.perpus.tambah_buku(buku)
            self.perpus.simpan_ke_file()
            self._update_list()
            self.entry_judul.delete(0, tk.END)
            self.entry_pengarang.delete(0, tk.END)
            self.entry_tahun.delete(0, tk.END)
            messagebox.showinfo("Sukses", "Buku berhasil ditambahkan!")
        except ValueError:
            messagebox.showerror("Error", "Tahun harus berupa angka!")

    def _pinjam_handler(self):
        sel = self.listbox.curselection()
        if not sel:
            messagebox.showwarning("Peringatan", "Pilih buku terlebih dahulu!")
            return
        idx = sel[0]
        buku = self.perpus.get_semua_buku()[idx]
        if buku.pinjam():
            self.perpus.simpan_ke_file()
            self._update_list()
            messagebox.showinfo("Sukses", f"Buku '{buku.judul}' berhasil dipinjam!")
        else:
            messagebox.showerror("Gagal", "Stok buku habis!")

    def _kembalikan_handler(self):
        sel = self.listbox.curselection()
        if not sel:
            messagebox.showwarning("Peringatan", "Pilih buku terlebih dahulu!")
            return
        idx = sel[0]
        buku = self.perpus.get_semua_buku()[idx]
        if buku.kembalikan():
            self.perpus.simpan_ke_file()
            self._update_list()
            messagebox.showinfo("Sukses", f"Buku '{buku.judul}' berhasil dikembalikan!")
        else:
            messagebox.showerror("Gagal", "Tidak ada buku yang dipinjam!")

    def _cari_handler(self):
        from tkinter import simpledialog
        kata = simpledialog.askstring("Cari", "Masukkan judul buku:")
        if kata:
            hasil = self.perpus.cari_buku(kata)
            self._update_list(hasil)
            if not hasil:
                messagebox.showinfo("Hasil", "Buku tidak ditemukan.")`}
        </pre>

        {/* C.4 Testing dan Pengembangan Lanjutan */}
        <h4 style={{marginTop: 24}}>C.4 Testing dan Pengembangan Lanjutan</h4>
        <p>Setelah kode selesai, lakukan pengujian untuk memastikan semua fitur berfungsi. Berikut checklist testing:</p>
        <ul>
          <li><strong>Test Tambah Buku</strong> — Tambah buku dengan data lengkap. Pastikan muncul di listbox. Coba tambah tanpa judul (harus muncul peringatan). Coba tambah tahun non-angka (harus muncul error).</li>
          <li><strong>Test Pinjam</strong> — Pilih buku yang tersedia, klik Pinjam. Pastikan status berubah. Coba pinjam buku yang stoknya 0 (harus gagal).</li>
          <li><strong>Test Kembalikan</strong> — Pilih buku yang sedang dipinjam, klik Kembalikan. Pastikan stok bertambah.</li>
          <li><strong>Test Cari</strong> — Cari judul yang ada (pasti hasilnya ada). Cari judul yang tidak ada (pasti "tidak ditemukan").</li>
          <li><strong>Test Persistensi</strong> — Tutup aplikasi, buka lagi. Pastikan data buku masih ada (tersimpan di JSON).</li>
        </ul>
        <div className="info-box">
          <strong><Target size={14} /> Ide Pengembangan Lanjutan</strong>
          <p>Setelah menguasai dasar, kembangkan proyek ini lebih jauh: (1) Tambah class Anggota dengan data peminjam, (2) Tambah fitur laporan peminjaman, (3) Ganti JSON dengan SQLite database, (4) Tambah fitur login admin, (5) Buat sistem notifikasi keterlambatan pengembalian.</p>
        </div>

        <ContohSoal data={[
          { soal: 'Seorang siswa membuat sistem perpustakaan tapi mendapat error saat menjalankan kode:\n\n  File "perpus.py", line 15, in tambah_buku\n    self.daftar_buku.append(buku)\nAttributeError: \'Perpustakaan\' object has no attribute \'daftar_buku\'\n\n(a) Identifikasi penyebab error ini.\n(b) Bagaimana cara memperbaikinya?\n(c) Apa prinsip OOP yang berkaitan dengan error ini?',
            penyelesaian: [
              '(a) Penyebab: Class Perpustakaan tidak memiliki atribut daftar_buku di constructor (__init__). Saat method tambah_buku() dipanggil, Python tidak menemukan attribute daftar_buku pada objek self.',
              '(b) Perbaikan: Tambahkan inisialisasi atribut daftar_buku di constructor: def __init__(self, nama): self.nama = nama; self.daftar_buku = []. Atribut harus didefinisikan SEBELUM digunakan.',
              '(c) Prinsip yang berkaitan: (1) Encapsulation — atribut harus didefinisikan dengan jelas di constructor. (2) Inisialisasi yang benar — constructor harus menginisialisasi SEMUA atribut yang akan digunakan oleh method lain di class tersebut.'
            ]
          },
          { soal: 'Buatlah rancangan class untuk sistem presensi siswa dengan fitur:\n1. Siswa bisa login (cek nama dan NIS)\n2. Siswa bisa melakukan presensi (hadir/izin/sakit)\n3. Guru bisa melihat laporan presensi\n4. Data tersimpan di file\n\nTuliskan: (a) Class diagram (nama class, atribut, method), (b) Hubungan antar class, (c) Alur kerja untuk fitur presensi.',
            penyelesaian: [
              '(a) Class diagram:\n- Siswa(nama, nis, kelas) + login(nis, nama) -> bool\n- Presensi(siswa, tanggal, status, keterangan) + to_dict()\n- KelasPresensi(nama_kelas) + tambah_presensi(), get_laporan(), cari_by_tanggal(), simpan_file(), muat_file()\n- AppPresensi(root) + _buat_widget(), login_handler(), presensi_handler(), laporan_handler()',
              '(b) Hubungan:\n- AppPresensi HAS-A KelasPresensi (composition)\n- KelasPresensi HAS-A list Presensi (aggregation)\n- Presensi REFERENCES Siswa (association)',
              '(c) Alur presensi:\n1. Siswa buka aplikasi -> form login muncul\n2. Siswa masukkan NIS + nama -> dicek di list Siswa\n3. Jika cocok -> form presensi muncul\n4. Siswa pilih status (Hadir/Izin/Sakit) -> objek Presensi dibuat\n5. Presensi ditambah ke KelasPresensi -> data disimpan ke file\n6. Konfirmasi "Presensi berhasil!" ditampilkan'
            ]
          },
        ]} />

        <Tugas data={[
          'Buatlah Sistem Manajemen Siswa dengan OOP + Tkinter. Class yang dibutuhkan: Siswa (nama, nis, kelas, nilai), KelasSiswa (daftar siswa, tambah/hapus/cari siswa, hitung rata-rata kelas), AppSiswa (GUI). Fitur: form tambah siswa, input nilai, tampilkan ranking, cari berdasarkan nama. Simpan data di JSON.',
          'Buatlah Mini Game Tebak Angka menggunakan OOP + Tkinter. Class: Game (angka_rahasia, percobaan, history), AppGame (GUI dengan Entry input, Label feedback, Button tebak, Label percobaan tersisa). Fitur: random angka 1-100, feedback "Terlalu besar/kecil", batas 7 percobaan, tombol "Main Lagi".',
          'Dokumentasikan proyek Sistem Perpustakaan (atau proyek lain yang sudah dibuat) dengan: (a) Class diagram sederhana (tulisan tangan atau digital), (b) Penjelasan setiap class dan method, (c) Screenshot hasil running program, (d) Review code: bagian mana yang sudah menggunakan OOP dengan baik, bagian mana yang masih bisa diperbaiki.',
        ]} />

      </MateriCard>

    </div>
  );
}
