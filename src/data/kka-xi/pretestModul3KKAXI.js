export default [
  {
    id: 1,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Satu class Buku memiliki atribut judul dan pengarang, lalu dibuat dua objek buku1 dan buku2 dari class tersebut dengan judul yang berbeda. Hal ini menunjukkan bahwa.',
    options: [
      'A. Atribut class dapat memiliki nilai berbeda pada setiap objek',
      'B. Atribut instance setiap objek dapat memiliki nilai yang berbeda',
      'C. Class Buku otomatis berubah menjadi dua class yang berbeda',
      'D. Objek hanya bisa dibuat satu kali dari satu class',
      'E. Atribut judul harus ditandai private agar tidak bentrok'
    ],
    answer: 1,
    explanation: 'Atribut yang ditulis di dalam constructor seperti self.judul bersifat instance, sehingga setiap objek punya salinan dengan nilai yang bisa berbeda. Atribut class justru memakai satu nilai yang sama untuk semua objek.'
  },
  {
    id: 2,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Pada setiap metode instance di Python, parameter pertama selalu bernama self. Fungsi dari parameter tersebut adalah.',
    options: [
      'A. Menyimpan nilai yang dikembalikan oleh metode',
      'B. Menghitung panjang nama class secara otomatis',
      'C. Menggantikan nama file program yang sedang dijalankan',
      'D. Menunjuk objek yang sedang memanggil metode tersebut',
      'E. Mengatur lebar dan tinggi jendela aplikasi'
    ],
    answer: 3,
    explanation: 'self adalah referensi ke objek itu sendiri, sehingga di dalam metode kita bisa menulis self.nama untuk mengakses atribut objek pemanggil. Karena itu self selalu menjadi parameter pertama setiap metode instance.'
  },
  {
    id: 3,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Pada class RekeningBank di materi, atribut saldo ditulis dengan dua garis bawah di depan, yaitu __saldo. Manfaat dari penulisan tersebut adalah.',
    options: [
      'A. Atribut disembunyikan dari akses langsung sehingga hanya bisa diubah melalui metode yang disediakan',
      'B. Atribut otomatis menjadi milik bersama semua objek RekeningBank',
      'C. Atribut otomatis terhapus ketika program ditutup',
      'D. Atribut hanya boleh diisi dengan teks, bukan angka',
      'E. Atribut menjadi tidak bisa diubah selamanya'
    ],
    answer: 0,
    explanation: 'Dua garis bawah menandakan atribut private yang mengalami name mangling sehingga sulit diakses langsung dari luar class. Pengubahan saldo hanya bisa lewat method seperti setor() dan tarik() yang sudah memiliki validasi.'
  },
  {
    id: 4,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Pada class Siswa di materi, bagian kode def tambah_nilai(self, n): self.nilai.append(n) termasuk bagian.',
    options: [
      'A. Atribut class',
      'B. Constructor',
      'C. Atribut instance yang bernilai tetap',
      'D. Variabel yang berada di luar class',
      'E. Metode yang menambah nilai ke dalam daftar nilai objek'
    ],
    answer: 4,
    explanation: 'Bagian def ... mendefinisikan sebuah metode. Karena di dalamnya terjadi self.nilai.append(n), tugasnya adalah menambah nilai baru ke daftar nilai milik objek tersebut.'
  },
  {
    id: 5,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Dalam pewarisan sifat pada pemrograman berorientasi objek, class yang menerima warisan atribut dan metode dari class lain disebut.',
    options: [
      'A. Superclass',
      'B. Abstract class',
      'C. Subclass',
      'D. Class atribut',
      'E. Class pembantu'
    ],
    answer: 2,
    explanation: 'Class yang mewarisi disebut subclass atau class anak, sedangkan class yang mewariskan disebut superclass atau class induk. Pada contoh materi, class Siswa dan Guru adalah subclass dari class Manusia.'
  },
  {
    id: 6,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Pada materi, class Guru mewarisi class Manusia tanpa menulis ulang metode perkenalan. Ketika program memanggil guru.perkenalan(), Python akan.',
    options: [
      'A. Menampilkan error karena metode pada class Guru belum lengkap',
      'B. Mengembalikan teks kosong karena belum ada isinya',
      'C. Memanggil metode perkenalan milik class Siswa',
      'D. Memakai metode perkenalan yang diwarisi dari class Manusia',
      'E. Mengulang otomatis constructor __init__ sebanyak dua kali'
    ],
    answer: 3,
    explanation: 'Metode yang tidak ditulis ulang oleh class anak akan diambil dari class induk, sehingga tidak terjadi error. Pemanggilan super() pada constructor class Guru juga memastikan atribut nama dan umur terisi dari induk.'
  },
  {
    id: 7,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Untuk menata widget Tkinter dalam bentuk baris dan kolom pada formulir login, layout manager yang paling tepat dipakai adalah.',
    options: [
      'A. grid()',
      'B. pack()',
      'C. place()',
      'D. mainloop()',
      'E. geometry()'
    ],
    answer: 0,
    explanation: 'grid() menata widget dalam bentuk tabel baris dan kolom sehingga sangat fleksibel untuk form input seperti username dan password. pack() hanya menyusun widget berurutan, sedangkan mainloop() bukan layout manager.'
  },
  {
    id: 8,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Pada formulir pendaftaran, pengguna harus mengetik alamat yang panjang dalam beberapa baris. Widget Tkinter yang paling tepat untuk keperluan itu adalah.',
    options: [
      'A. Label',
      'B. Entry',
      'C. Button',
      'D. Radiobutton',
      'E. Text'
    ],
    answer: 4,
    explanation: 'Text digunakan untuk input teks multi-baris, sedangkan Entry hanya untuk satu baris. Label hanya menampilkan teks statis, Button untuk tombol, dan Radiobutton untuk pilihan tunggal.'
  },
  {
    id: 9,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Pada kode Tkinter, bagian command=simpan di dalam sebuah Button berfungsi untuk.',
    options: [
      'A. Mengubah teks di dalam tombol menjadi "simpan"',
      'B. Menjalankan fungsi simpan ketika tombol tersebut diklik',
      'C. Menghapus seluruh isi jendela aplikasi',
      'D. Mengatur ukuran jendela aplikasi menjadi 400x300',
      'E. Menyimpan berkas kode program ke dalam folder proyek'
    ],
    answer: 1,
    explanation: 'Parameter command menunjuk pada fungsi yang dipanggil saat widget diklik, yang dalam aplikasi nyata berperan sebagai event handler. Nama teks tombol sendiri ditulis pada parameter text, bukan command.'
  },
  {
    id: 10,
    level: 'Mudah · C2 - Memahami',
    diff: 'Mudah',
    modul: 'Modul 3',
    question: 'Pada proyek Sistem Perpustakaan Digital di modul, method to_dict() di dalam class Buku bertujuan untuk.',
    options: [
      'A. Menghitung jumlah buku yang tersimpan di perpustakaan',
      'B. Mengubah judul buku menjadi huruf besar semua',
      'C. Mengubah data buku menjadi bentuk yang siap disimpan ke file JSON',
      'D. Menghapus buku terpilih dari daftar buku',
      'E. Menampilkan pesan kesalahan kepada pengguna'
    ],
    answer: 2,
    explanation: 'Method to_dict() mengubah objek Buku menjadi dictionary karena modul json hanya bisa menyimpan bentuk dasar seperti dictionary, bukan objek. Dari situ Perpustakaan.simpan_ke_file() bisa menyimpan seluruh daftar buku ke file.'
  },
  {
    id: 11,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Kode Python berikut dijalankan: class Dompet: | def __init__(self, s): self.__saldo = s | d = Dompet(50000) | d.saldo = 999999 | print(d.saldo). Nilai yang dicetak adalah.',
    options: [
      'A. Terjadi error AttributeError',
      'B. 0',
      'C. 50000',
      'D. Terjadi error NameError',
      'E. 999999'
    ],
    answer: 4,
    explanation: 'Atribut private __saldo sebenarnya bernama _Dompet__saldo, sedangkan d.saldo adalah nama atribut yang berbeda. Karena itu d.saldo = 999999 hanya membuat atribut baru, sehingga nilai yang dicetak adalah 999999.'
  },
  {
    id: 12,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Kode berikut dijalankan: class Bola: | def __init__(self, warna): self.warna = warna | class BolaSepak(Bola): | def __init__(self, w, b): super().__init__(w); self.berat = b | def info(self): return f"{self.warna} {self.berat} kg" | b = BolaSepak("merah", 0.45); print(b.info()). Teks yang dicetak adalah.',
    options: [
      'A. merah 0.45 kg',
      'B. 0.45 merah kg',
      'C. Bola 0.45 kg',
      'D. Terjadi error karena method info hanya ada di class Bola',
      'E. merah saja tanpa nilai berat'
    ],
    answer: 0,
    explanation: 'Objek BolaSepak mewarisi atribut warna melalui super().__init__(w), lalu menambah atribut berat sendiri, sehingga kedua atribut tersedia saat info() dijalankan. Method info milik BolaSepak yang dipakai, bukan milik Bola.'
  },
  {
    id: 13,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Kode berikut dijalankan: class Kucing: | def suara(self): return "Meong" | class Anjing: | def suara(self): return "Guk guk" | for h in [Anjing(), Kucing()]: print(h.suara()). Urutan teks yang dicetak adalah.',
    options: [
      'A. Meong lalu Guk guk',
      'B. Terjadi error karena kedua class tidak berkerabat',
      'C. Guk guk dua kali',
      'D. Guk guk lalu Meong',
      'E. Meong dua kali'
    ],
    answer: 3,
    explanation: 'Loop diproses sesuai urutan daftar, yaitu Anjing lalu Kucing, dan setiap objek menjalankan versi suara miliknya sendiri. Inilah contoh polymorphism atau duck typing, karena kedua class tidak perlu memiliki class induk yang sama.'
  },
  {
    id: 14,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Pada proyek perpustakaan, objek AppPerpustakaan selalu menyimpan satu objek Perpustakaan di dalam atribut self.perpus, dan keduanya dibuat bersamaan. Hubungan seperti ini disebut.',
    options: [
      'A. Inheritance',
      'B. Composition',
      'C. Polymorphism',
      'D. Method overloading',
      'E. Encapsulation'
    ],
    answer: 1,
    explanation: 'Composition berarti objek milik disimpan sebagai bagian dari objek lain, yang umumnya dibuat bersama dan tidak berdiri sendiri sendiri. Dalam modul, hubungan ini juga ditulis sebagai AppPerpustakaan HAS-A Perpustakaan.'
  },
  {
    id: 15,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Dalam Python, pendekatan yang disebut duck typing bekerja dengan cara.',
    options: [
      'A. Semua variabel harus dideklarasikan lengkap dengan tipe datanya',
      'B. Program hanya boleh menggunakan satu class agar tidak ambigu',
      'C. Sebuah objek dianggap cocok selama punya metode yang dibutuhkan, tanpa perlu class induk yang sama',
      'D. Semua class dalam program wajib memiliki jumlah atribut yang sama',
      'E. Nama variabel harus selalu sama dengan nama class-nya'
    ],
    answer: 2,
    explanation: 'Duck typing menilai objek dari kemampuannya, bukan dari tipe atau hubungan pewarisannya, sehingga objek dari class berbeda bisa dimasukkan ke satu list lalu dipanggil metodenya. Ini membuat kode lebih fleksibel dan mudah dikembangkan.'
  },
  {
    id: 16,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Pada aplikasi kalkulator GUI di modul, pemrogram membungkus pengambilan nilai dari Entry dengan potongan kode: def hitung(self): | try: | a = int(self.entry.get()) | except ValueError: | messagebox.showerror("Error", "Bukan angka"). Tujuannya adalah.',
    options: [
      'A. Mengubah tampilan label hasil menjadi lebih besar',
      'B. Menampilkan seluruh teks yang diketik pengguna di layar',
      'C. Menyimpan nilai input pengguna ke dalam file JSON',
      'D. Mencegah program berhenti ketika pengguna mengetik teks yang bukan angka',
      'E. Mengganti nilai input secara otomatis menjadi angka nol'
    ],
    answer: 3,
    explanation: 'int() akan melempar error ValueError bila input bukan angka, sehingga dibungkus try...except agar aplikasi tidak berhenti dan pengguna diberi tahu. Ini merupakan bentuk penanganan kesalahan pada validasi input pengguna.'
  },
  {
    id: 17,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Diberikan kode class Buku: def __init__(self, stok=1): self.stok = stok; self.dipinjam = 0 | def tersedia(self): return self.stok - self.dipinjam > 0 | def pinjam(self): self.dipinjam += 1. Setelah b = Buku(1) lalu b.pinjam() dijalankan, nilai b.tersedia() adalah.',
    options: [
      'A. Terjadi error AttributeError',
      'B. 0',
      'C. True',
      'D. Terjadi error TypeError',
      'E. False'
    ],
    answer: 4,
    explanation: 'Stok awal 1 dan dipinjam menjadi 1, sehingga 1 - 1 > 0 bernilai False yang berarti buku sedang tidak tersedia. Nilai False inilah yang membuat method pinjam() pada versi lengkap modul menolak peminjaman.'
  },
  {
    id: 18,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Pada class Buku di proyek perpustakaan, method __str__() dibuat untuk.',
    options: [
      'A. Mengubah objek Buku menjadi teks ringkas yang rapi untuk ditampilkan di dalam Listbox',
      'B. Mengurutkan daftar buku berdasarkan judul secara otomatis',
      'C. Menghitung panjang karakter judul buku',
      'D. Menyimpan seluruh data buku ke dalam file JSON',
      'E. Mengubah tipe data judul buku menjadi angka'
    ],
    answer: 0,
    explanation: 'Method __str__ memberi bentuk teks pada objek sehingga bisa langsung ditampilkan, misalnya str(buku) saat mengisi Listbox. Method ini tidak mengubah data buku, hanya menyediakan cara menampilkannya.'
  },
  {
    id: 19,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Sebuah class Perpustakaan menghasilkan error AttributeError: object has no attribute daftar_buku saat method tambah_buku() dipanggil. Perbaikan yang tepat adalah.',
    options: [
      'A. Mengubah nama method tambah_buku menjadi tambahBuku',
      'B. Menjalankan ulang program tanpa melakukan perubahan apa pun',
      'C. Mendefinisikan self.daftar_buku = [] di dalam constructor __init__',
      'D. Menghapus seluruh isi class Perpustakaan lalu menulis ulang dari awal',
      'E. Mengganti nama variabel buku menjadi daftar_buku'
    ],
    answer: 2,
    explanation: 'Atribut harus didefinisikan lebih dulu di dalam constructor sebelum method lain memakainya, karena self.daftar_buku = [] menyiapkan list kosong yang bisa ditambahkan. Mengganti nama variabel tidak menyelesaikan masalah dasarnya.'
  },
  {
    id: 20,
    level: 'Sedang · C3 - Menerapkan',
    diff: 'Sedang',
    modul: 'Modul 3',
    question: 'Dalam satu jendela Tkinter, seorang pemrogram memakai pack() untuk sebuah widget dan grid() untuk widget lain. Apa yang kemungkinan terjadi?',
    options: [
      'A. Program otomatis menutup jendela setelah dijalankan',
      'B. Tkinter menampilkan pesan error karena kedua layout manager itu tidak boleh dipakai pada induk yang sama',
      'C. Kedua widget pasti berada pada posisi yang sama persis',
      'D. Jendela otomatis melebar tanpa batas dan tidak bisa ditutup',
      'E. Widget yang memakai grid() otomatis hilang dari tampilan'
    ],
    answer: 1,
    explanation: 'Satu widget induk hanya boleh dikelola oleh satu layout manager, sehingga mencampur pack() dan grid() pada induk yang sama memicu error. Aturannya: pakai pack() untuk susunan sederhana dan grid() untuk form, tapi jangan mencampur keduanya pada satu induk.'
  },
  {
    id: 21,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Diberikan kode class App: | def __init__(self, root): | self.root = root | self.entry = tk.Entry(self.root) | self.entry.pack() | app = App(root) | app.entry.pack(). Akibat utama dari kode tersebut adalah.',
    options: [
      'A. Entry dapat tampil lebih dari satu kali karena widget yang sama diletakkan dua kali dalam jendela',
      'B. Program gagal berjalan karena modul tk tidak pernah diimpor',
      'C. Entry otomatis terisi dengan teks bawaan dari constructor',
      'D. Jendela otomatis berukuran 300x250 tanpa perlu menuliskan geometry',
      'E. Method __init__ otomatis dipanggil dua kali oleh Python'
    ],
    answer: 0,
    explanation: 'pack() dipanggil dua kali pada objek widget yang sama, sehingga entry yang sama akan diletakkan berulang di dalam jendela. Solusinya cukup memanggil pack() satu kali, idealnya di dalam method khusus pembuatan widget.'
  },
  {
    id: 22,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Diberikan kode class App: | def __init__(self): | self.entry = tk.Entry() | app = App() | app.root.title("Data Siswa"). Program berhenti dengan error AttributeError. Analisis yang paling tepat adalah.',
    options: [
      'A. Widget Entry hanya boleh dibuat setelah semua widget lain selesai dibuat',
      'B. Method title() hanya boleh dipanggil satu kali dalam satu program',
      'C. Objek tidak boleh disimpan di dalam variabel bernama app',
      'D. Objek App harus dibuat sebelum modul tkinter diimpor',
      'E. Constructor tidak menerima dan menyimpan objek root, sehingga atribut root tidak pernah ada pada objek App'
    ],
    answer: 4,
    explanation: 'Atribut root hanya ada jika constructor menerimanya lalu menyimpannya, misalnya def __init__(self, root): self.root = root. Tanpa itu, pemanggilan app.root.title(...) tidak menemukan atribut tersebut dan muncul error.'
  },
  {
    id: 23,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Class A dan class B sama-sama menyediakan method info(). Class C mewarisi A dan B tanpa menulis ulang info(). Ketika c.info() dipanggil, masalah apa yang berpotensi muncul?',
    options: [
      'A. Method info() otomatis hilang dari objek C',
      'B. Program tidak dapat menampilkan teks sama sekali di layar',
      'C. Python tidak dapat menentukan method info() milik A atau milik B yang harus dipakai, sehingga hasilnya ambigu',
      'D. Objek C otomatis berubah menjadi objek A dan kehilangan identitasnya',
      'E. Method info() otomatis dipanggil dua kali untuk setiap perintah print'
    ],
    answer: 2,
    explanation: 'Situasi dua induk menyediakan method dengan nama sama disebut Diamond Problem, sehingga urutan pewarisan menentukan method mana yang dipakai. Cara mengatasinya adalah menulis ulang method info() di class C atau memakai super() agar alurnya jelas.'
  },
  {
    id: 24,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Sebuah class Mobil memiliki atribut bensin. Jika atribut tersebut dibuat publik, program lain bebas menuliskan mobil.bensin = -5. Mengapa pola constructor beserta validasi di dalam class lebih tepat untuk kasus ini?',
    options: [
      'A. Agar program berjalan lebih cepat karena atribut tidak perlu diperiksa',
      'B. Agar atribut bensin menjadi milik bersama semua objek Mobil',
      'C. Agar program yang sama otomatis bisa dijalankan di semua sistem operasi',
      'D. Agar nilai bensin tetap benar karena setiap perubahan harus melewati method yang memeriksa batas 0 sampai 50 liter',
      'E. Agar constructor tidak perlu lagi menerima parameter apa pun'
    ],
    answer: 3,
    explanation: 'Encapsulation membuat atribut private dan menyediakan method yang memvalidasi nilai sebelum menyimpan, sehingga data negatif atau melebihi kapasitas tidak bisa masuk. Aturan validasi juga cukup ditulis satu kali di dalam class, bukan di setiap program.'
  },
  {
    id: 25,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Kode berikut dijalankan: class Diskon: | def hitung(self, h): return h | class Member: | def hitung(self, h): return h * 0.9 | total = 0 | for d in [Diskon(), Member()]: total += d.hitung(100000) | print(int(total)). Nilai yang dicetak adalah.',
    options: [
      'A. 100000',
      'B. 190000',
      'C. 200000',
      'D. 90000',
      'E. Terjadi error karena kedua class tidak berkerabat'
    ],
    answer: 1,
    explanation: 'Putaran pertama menambah 100000 dan putaran kedua menambah 90000, sehingga total 190000.0 yang setelah dikonversi menjadi 190000. Contoh ini menunjukkan polymorphism, karena satu loop memanggil method hitung yang dimiliki tiap objek berbeda.'
  },
  {
    id: 26,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Pada class AppKalkulator di modul, method _buat_widget() sengaja dipisahkan dari method tambah(), kurang(), dan kali(). Pemisahan ini terutama menguntungkan karena.',
    options: [
      'A. Semua kode bisa digabung dalam satu method agar jumlah method berkurang',
      'B. Tombol pada GUI tidak lagi memerlukan parameter command',
      'C. Nilai input dari pengguna tidak perlu divalidasi lagi',
      'D. Tiap method hanya punya satu tanggung jawab sehingga mengubah tampilan tidak merusak logika perhitungan dan sebaliknya',
      'E. Program tidak lagi memerlukan pemanggilan mainloop()'
    ],
    answer: 3,
    explanation: 'Pola yang dipakai di modul adalah memisahkan pembuatan widget, validasi input, dan tiap operasi hitung. Dengan demikian perubahan tampilan tidak menyentuh perhitungan, dan penambahan operasi baru cukup menambah satu method.'
  },
  {
    id: 27,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Dalam rancangan class diagram Sistem Perpustakaan Digital, class Perpustakaan menyimpan kumpulan objek Buku. Hubungan yang tepat digambarkan sebagai.',
    options: [
      'A. Perpustakaan memiliki (HAS-A) sekumpulan objek Buku',
      'B. Buku mewarisi (IS-A) seluruh sifat Perpustakaan',
      'C. Buku menggabungkan (HAS-A) semua method Perpustakaan',
      'D. Perpustakaan menggantikan seluruh class Buku di dalam program',
      'E. Buku dan Perpustakaan tidak memiliki hubungan apa pun'
    ],
    answer: 0,
    explanation: 'Notasi HAS-A dipakai ketika sebuah class menyimpan kumpulan objek class lain, yang dalam modul ini disebut aggregation untuk Perpustakaan dan Buku. Sebaliknya AppPerpustakaan yang memegang objek Perpustakaan disebut composition karena keduanya dibuat bersama.'
  },
  {
    id: 28,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Kode berikut dijalankan: class Bahan: | def __init__(self, n, h): self.nama = n; self.harga = h | class Alat(Bahan): | def __init__(self, n, h, j): super().__init__(n, h); self.jumlah = j | def hitung(self): return self.harga * self.jumlah | a = Alat("Kabel", 5000, 4); print(a.hitung()). Nilai yang dicetak adalah.',
    options: [
      'A. Terjadi error karena atribut harga tidak ada pada objek Alat',
      'B. 5000',
      'C. 4',
      'D. 9',
      'E. 20000'
    ],
    answer: 4,
    explanation: 'Nilai harga 5000 diwarisi dan diisi lewat super().__init__(n, h), sedangkan jumlah 4 berasal dari constructor Alat, sehingga hasil perkaliannya 20000. Ini menunjukkan peran super() menjalankan perilaku constructor induk dari class anak.'
  },
  {
    id: 29,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Sebuah aplikasi CLI berbasis teks diubah menjadi aplikasi GUI dengan tombol dan form, lalu pemrogram memisahkan logika perhitungan ke dalam class khusus. Tujuan utama pemisahan tersebut adalah.',
    options: [
      'A. Agar validasi input tidak lagi diperlukan di dalam program',
      'B. Agar jumlah baris kode aplikasi berkurang drastis sehingga lebih mudah dihafal',
      'C. Agar logika perhitungan tetap utuh dan bisa diuji ulang, sementara bagian tampilan dapat diganti tanpa mengubah logika',
      'D. Agar aplikasi GUI tidak memerlukan event handler pada tombolnya',
      'E. Agar program hanya dapat dijalankan pada satu jenis sistem operasi'
    ],
    answer: 2,
    explanation: 'Pola yang sama seperti pada class AppKalkulator di modul, yaitu memisahkan logika, tampilan, dan data agar setiap bagian bisa diubah atau diuji secara mandiri. Dengan begitu perpindahan dari CLI ke GUI tidak memaksa penulisan ulang seluruh program.'
  },
  {
    id: 30,
    level: 'Sulit · C5 - Menganalisis',
    diff: 'Sulit',
    modul: 'Modul 3',
    question: 'Pada checklist testing proyek perpustakaan, ada uji yang meminta mencoba meminjam buku yang stoknya 0 dan hasilnya harus gagal. Uji tersebut bertujuan untuk.',
    options: [
      'A. Memastikan program berjalan lebih cepat saat dipakai banyak siswa',
      'B. Memastikan validasi di dalam method pinjam() bekerja sehingga jumlah buku yang dipinjam tidak melebihi stok',
      'C. Memastikan seluruh buku langsung terhapus dari daftar setiap kali dipinjam',
      'D. Memastikan file JSON tidak pernah dibuat selama aplikasi berjalan',
      'E. Memastikan antarmuka GUI tidak memiliki tombol tambah buku'
    ],
    answer: 1,
    explanation: 'Uji negatif seperti ini memastikan method pinjam() benar-benar memeriksa ketersediaan stok sebelum mengubah data. Pengujian yang baik selalu mencoba kondisi gagal, bukan hanya kondisi yang diharapkan berjalan.'
  }
];
