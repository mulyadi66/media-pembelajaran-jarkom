export const wiringCables = {
  OP: { short: 'OP', name: 'Oranye Putih', color: '#fbbf24', stripe: true },
  O: { short: 'O', name: 'Oranye', color: '#f97316', stripe: false },
  HP: { short: 'HP', name: 'Hijau Putih', color: '#86efac', stripe: true },
  B: { short: 'B', name: 'Biru', color: '#60a5fa', stripe: false },
  BP: { short: 'BP', name: 'Biru Putih', color: '#bfdbfe', stripe: true },
  H: { short: 'H', name: 'Hijau', color: '#22c55e', stripe: false },
  CP: { short: 'CP', name: 'Coklat Putih', color: '#fcd34d', stripe: true },
  C: { short: 'C', name: 'Coklat', color: '#92400e', stripe: false },
};

export const wiringMissions = [
  {
    id: 'w1',
    title: 'Misi 1: T568B',
    mission: 'Susun 8 kabel ke urutan pin 1–8 sesuai standar T568B (paling umum dipakai).',
    correct: ['OP', 'O', 'HP', 'B', 'BP', 'H', 'CP', 'C'],
    tip: 'Mnemonik T568B: Oranye(Oranye) · Hijau-Biru-Biru · Hijau · Coklat(Coklat). Pasangan pin 1-2 dan 3-6, sisanya berurutan.',
    pair: 'Standar ini dipakai untuk kabel straight (perangkat berbeda: PC → Switch).',
  },
  {
    id: 'w2',
    title: 'Misi 2: T568A',
    mission: 'Susun 8 kabel ke urutan pin 1–8 sesuai standar T568A.',
    correct: ['HP', 'H', 'OP', 'B', 'BP', 'O', 'CP', 'C'],
    tip: 'T568A hanya menukar pasangan pin 1-2 dengan 3-6 dibanding T568B.',
    pair: 'Standar alternatif yang umum di instalasi pemerintah/kabel telepon lama.',
  },
  {
    id: 'w3',
    title: 'Misi 3: Crossover',
    mission: 'Kabel crossover memakai T568B di ujung 1 dan T568A di ujung 2. Susun urutan ujung 2!',
    correct: ['HP', 'H', 'OP', 'B', 'BP', 'O', 'CP', 'C'],
    tip: 'Ujung 2 crossover = urutan T568A (Hijau-Putih, Hijau, Oranye-Putih, ..., Oranye).',
    pair: 'Crossover dipakai untuk perangkat sejenis: PC → PC, Switch → Switch.',
  },
  {
    id: 'w4',
    title: 'Misi 4: T568B Speedrun',
    mission: 'Susun urutan T568B secepat mungkin sebelum waktu habis!',
    correct: ['OP', 'O', 'HP', 'B', 'BP', 'H', 'CP', 'C'],
    tip: 'Hafalkan: Oranye-Putih, Oranye, Hijau-Putih, Biru, Biru-Putih, Hijau, Coklat-Putih, Coklat.',
    pair: 'Uji hasil crimping dengan LAN tester: lampu menyala berurutan 1-1 sampai 8-8.',
    timed: true,
    timeLimit: 45,
  },
];

export const standardsReference = [
  { standard: 'T568A', order: ['HP', 'H', 'OP', 'B', 'BP', 'O', 'CP', 'C'] },
  { standard: 'T568B', order: ['OP', 'O', 'HP', 'B', 'BP', 'H', 'CP', 'C'] },
];
