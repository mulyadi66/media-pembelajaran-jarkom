import { BookOpen, Star, Target, Award, Zap, Trophy, Flame, Clock } from 'lucide-react';

/**
 * Nilai "pencapaian akhir" untuk badge akhir.
 * Mapel yang masih memakai post-test -> posttestScore.
 * Mapel KKA (post-test dihapus) -> rata-rata nilai Ujian KKA per elemen.
 */
function nilaiAkhir(s) {
  return s.examAvg != null ? s.examAvg : (s.posttestScore || 0);
}

export const ALL_BADGES = [
  { id: 'first_module', icon: BookOpen, label: 'First Step', desc: 'Selesaikan modul pertama', color: '#6366f1', check: (s) => s.modulesReadCount >= 1 },
  { id: 'all_modules', icon: Star, label: 'Scholar', desc: 'Baca semua modul (minimal 3)', color: '#f59e0b', check: (s) => s.modulesReadCount >= 3 },
  { id: 'pretest_done', icon: Target, label: 'Challenger', desc: 'Selesaikan pre-test', color: '#06b6d4', check: (s) => s.pretestScore !== undefined },
  {
    id: 'posttest_done', icon: Award, label: 'Achiever', desc: 'Selesaikan post-test',
    examLabel: 'Achiever', examDesc: (nama) => `Selesaikan seluruh ${nama}`,
    color: '#10b981',
    check: (s) => (s.examAvg != null ? !!s.examDone : s.posttestScore !== undefined),
  },
  { id: 'pass_pretest', icon: Zap, label: 'Sharp Mind', desc: 'Lulus pre-test (≥70)', color: '#8b5cf6', check: (s) => (s.pretestScore || 0) >= 70 },
  {
    id: 'pass_posttest', icon: Trophy, label: 'Network Pro', desc: 'Lulus post-test (≥70)',
    examLabel: 'Network Pro', examDesc: (nama) => `Rata-rata ${nama} minimal 70`,
    color: '#f97316',
    check: (s) => nilaiAkhir(s) >= 70,
  },
  {
    id: 'perfect_posttest', icon: Flame, label: 'Perfect Score', desc: 'Nilai post-test 100',
    examLabel: 'Perfect Score', examDesc: (nama) => `Rata-rata ${nama} 100`,
    color: '#ef4444',
    check: (s) => nilaiAkhir(s) >= 100,
  },
  {
    id: 'growth', icon: Clock, label: 'Growing', desc: 'Skor post-test lebih tinggi dari pre-test',
    examLabel: 'Growing', examDesc: (nama) => `Rata-rata ${nama} lebih tinggi dari pre-test`,
    color: '#10b981',
    check: (s) => nilaiAkhir(s) > (s.pretestScore || 0),
  },
];

export function checkBadges(scores, modulesRead, opts = {}) {
  const {
    pretestKey = 'pretest',
    posttestKey = 'posttest',
    moduleIds = [],
    // Mapel tanpa post-test (KKA) mengirim rata-rata nilai ujian + status selesai.
    examAvg = null,
    examDone = false,
  } = opts;
  const state = {
    modulesReadCount: moduleIds.filter(id => modulesRead[id]).length,
    pretestScore: scores[pretestKey],
    posttestScore: scores[posttestKey],
    examAvg,
    examDone,
  };
  return ALL_BADGES.filter(b => b.check(state)).map(b => b.id);
}
