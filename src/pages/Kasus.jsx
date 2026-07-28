import { useApp } from '../context/AppContext';
import { Briefcase, Save, Network, Building2, Gamepad2 } from 'lucide-react';

const cases = [
  {
    id: 'kasus1',
    icon: Network,
    tag: 'Kasus 1 - Lab Komputer',
    title: 'Perancangan Jaringan Lab Komputer Sekolah (30 PC)',
    desc: 'SMK ingin merancang jaringan untuk lab komputer 30 PC untuk praktikum, CBT, dan database.',
    details: [
      'Server lokal untuk CBT dan database',
      'Wi-Fi untuk akses guru (laptop/mobile)',
      'Pisahkan jaringan siswa dan server (subnet berbeda)',
      'Budget terbatas tapi reliable'
    ],
    tasks: [
      'Topologi jaringan yang tepat (beserta alasan)',
      'Peralatan yang dibutuhkan (minimal 5 jenis)',
      'Pengalamatan IP menggunakan 192.168.1.0/24 (subnets untuk siswa, server, Wi-Fi)',
      'Buat diagram sederhana'
    ]
  },
  {
    id: 'kasus2',
    icon: Building2,
    tag: 'Kasus 2 - Kantor Bertingkat',
    title: 'Perencanaan Jaringan Kantor 3 Lantai',
    desc: 'Perusahaan IT memiliki gedung kantor 3 lantai dengan kebutuhan berbeda tiap lantai.',
    details: [
      'Lantai 1: Reception & security (5 PC + 2 CCTV IP)',
      'Lantai 2: Marketing & sales (20 PC + printer network)',
      'Lantai 3: IT & server room (10 PC + 3 server)',
      'Setiap lantai harus saling terhubung, server hanya untuk IT staff'
    ],
    tasks: [
      'Topologi jaringan (per lantai & backbone)',
      'Pengalamatan IP menggunakan VLSM dari 172.16.0.0/22',
      'Strategi keamanan yang diterapkan',
      'Daftar peralatan yang dibutuhkan'
    ]
  },
  {
    id: 'kasus3',
    icon: Gamepad2,
    tag: 'Kasus 3 - Warnet Modern',
    title: 'Perancangan Jaringan Warnet 20 Client + 2 VIP',
    desc: 'Seorang pengusaha ingin mendirikan warnet dengan spesifikasi gaming dan VIP.',
    details: [
      'Area reguler: 20 PC gaming (bandwidth besar & latency rendah)',
      'VIP Room: 2 bilik PC premium + headset',
      'Kasir: 1 PC untuk manajemen billing',
      'Wi-Fi untuk pengunjung, bandwidth internet 100 Mbps shared'
    ],
    tasks: [
      'Rancang topologi jaringan warnet',
      'Alokasi bandwidth per grup PC (VIP prioritas)',
      'Pengalamatan IP dengan subnetting dari 10.0.0.0/24',
      'Rekomendasi peralatan dengan pertimbangan harga'
    ]
  }
];

export default function Kasus() {
  const { caseAnswers, saveCaseAnswer } = useApp();

  return (
    <div className="content-section">
      {cases.map(c => (
        <div className="case-card" key={c.id}>
          <span className="case-label"><c.icon size={12} /> {c.tag}</span>
          <h3>{c.title}</h3>
          <p>{c.desc}</p>
          <p><strong>Detail kebutuhan:</strong></p>
          <ul>{c.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
          <p><strong>Tugas:</strong></p>
          <ol>{c.tasks.map((t, i) => <li key={i}>{t}</li>)}</ol>
          <textarea
            className="answer-area"
            placeholder="Tuliskan jawaban kamu di sini..."
            value={caseAnswers[c.id] || ''}
            onChange={e => saveCaseAnswer(c.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
