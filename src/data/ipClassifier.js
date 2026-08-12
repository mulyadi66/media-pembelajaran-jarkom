export const ipRounds = [
  // === Kelas IP ===
  { id: 1, type: 'kelas', q: '10.1.2.3 termasuk kelas IP apa?', answer: 'A', options: ['A', 'B', 'C'], info: 'Oktet pertama 10 berada di range kelas A (1–126). Default mask /8.' },
  { id: 2, type: 'kelas', q: '172.20.5.1 termasuk kelas IP apa?', answer: 'B', options: ['A', 'B', 'C'], info: 'Oktet pertama 172 berada di range kelas B (128–191). Default mask /16.' },
  { id: 3, type: 'kelas', q: '192.168.1.1 termasuk kelas IP apa?', answer: 'C', options: ['A', 'B', 'C'], info: 'Oktet pertama 192 berada di range kelas C (192–223). Default mask /24.' },
  { id: 4, type: 'kelas', q: '11.0.0.5 termasuk kelas IP apa?', answer: 'A', options: ['A', 'B', 'C'], info: 'Oktet pertama 11 berada di range kelas A (1–126).' },
  { id: 5, type: 'kelas', q: '130.0.0.1 termasuk kelas IP apa?', answer: 'B', options: ['A', 'B', 'C'], info: 'Oktet pertama 130 berada di range kelas B (128–191).' },
  { id: 6, type: 'kelas', q: '220.10.0.1 termasuk kelas IP apa?', answer: 'C', options: ['A', 'B', 'C'], info: 'Oktet pertama 220 berada di range kelas C (192–223).' },
  // === Private vs Public ===
  { id: 7, type: 'jenis', q: '10.0.0.1 termasuk IP?', answer: 'Private', options: ['Private', 'Public'], info: '10.0.0.0/8 adalah range private — tidak bisa diakses langsung dari internet tanpa NAT.' },
  { id: 8, type: 'jenis', q: '172.16.5.10 termasuk IP?', answer: 'Private', options: ['Private', 'Public'], info: '172.16.0.0/12 adalah range private (172.16.0.0 – 172.31.255.255).' },
  { id: 9, type: 'jenis', q: '192.168.100.50 termasuk IP?', answer: 'Private', options: ['Private', 'Public'], info: '192.168.0.0/16 adalah range private — paling umum di jaringan rumah/kantor.' },
  { id: 10, type: 'jenis', q: '8.8.8.8 termasuk IP?', answer: 'Public', options: ['Private', 'Public'], info: '8.8.8.8 adalah DNS publik milik Google, dapat diakses dari internet.' },
  { id: 11, type: 'jenis', q: '203.0.113.5 termasuk IP?', answer: 'Public', options: ['Private', 'Public'], info: '203.0.113.0/24 adalah range dokumentasi/example — berupa alamat publik.' },
  { id: 12, type: 'jenis', q: '1.1.1.1 termasuk IP?', answer: 'Public', options: ['Private', 'Public'], info: '1.1.1.1 adalah DNS publik milik Cloudflare.' },
  // === Usable Host ===
  { id: 13, type: 'host', q: 'Subnet /24 menyediakan berapa usable host?', answer: '254', options: ['254', '256', '128', '62'], info: '2^(32−24) − 2 = 256 − 2 = 254 (dikurangi network & broadcast).' },
  { id: 14, type: 'host', q: 'Subnet /25 menyediakan berapa usable host?', answer: '126', options: ['126', '128', '62', '254'], info: '2^7 − 2 = 128 − 2 = 126 usable host.' },
  { id: 15, type: 'host', q: 'Subnet /26 menyediakan berapa usable host?', answer: '62', options: ['62', '64', '30', '126'], info: '2^6 − 2 = 64 − 2 = 62 usable host.' },
  { id: 16, type: 'host', q: 'Subnet /27 menyediakan berapa usable host?', answer: '30', options: ['30', '32', '14', '62'], info: '2^5 − 2 = 32 − 2 = 30 usable host.' },
  { id: 17, type: 'host', q: 'Subnet /28 menyediakan berapa usable host?', answer: '14', options: ['14', '16', '6', '30'], info: '2^4 − 2 = 16 − 2 = 14 usable host.' },
  { id: 18, type: 'host', q: 'Subnet /30 menyediakan berapa usable host?', answer: '2', options: ['2', '4', '6', '8'], info: '2^2 − 2 = 4 − 2 = 2 usable host — pas untuk link point-to-point.' },
  // === Subnetting dari /24 ===
  { id: 19, type: 'subnet', q: 'Dari /24 dibagi /26 menghasilkan berapa subnet?', answer: '4', options: ['4', '2', '8', '16'], info: '2^(26−24) = 2² = 4 subnet, masing-masing 62 host.' },
  { id: 20, type: 'subnet', q: 'Dari /24 dibagi /27 menghasilkan berapa subnet?', answer: '8', options: ['8', '4', '16', '32'], info: '2^(27−24) = 2³ = 8 subnet, masing-masing 30 host.' },
  { id: 21, type: 'subnet', q: 'Dari /24 dibagi /28 menghasilkan berapa subnet?', answer: '16', options: ['16', '8', '32', '64'], info: '2^(28−24) = 2⁴ = 16 subnet, masing-masing 14 host.' },
  { id: 22, type: 'subnet', q: 'Dari /24 dibagi /25 menghasilkan berapa subnet?', answer: '2', options: ['2', '4', '8', '16'], info: '2^(25−24) = 2¹ = 2 subnet, masing-masing 126 host.' },
];

export const ipTypeLabels = {
  kelas: 'Kelas IP',
  jenis: 'Private / Public',
  host: 'Usable Host',
  subnet: 'Subnetting',
};
