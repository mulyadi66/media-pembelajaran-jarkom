import { BookOpen, Star, Target, Award, Zap, Trophy, Flame, Clock } from 'lucide-react';

export const ALL_BADGES = [
  { id: 'first_module', icon: BookOpen, label: 'First Step', desc: 'Selesaikan modul pertama', color: '#6366f1', check: (s) => s.modulesReadCount >= 1 },
  { id: 'all_modules', icon: Star, label: 'Scholar', desc: 'Baca semua 3 modul', color: '#f59e0b', check: (s) => s.modulesReadCount >= 3 },
  { id: 'pretest_done', icon: Target, label: 'Challenger', desc: 'Selesaikan pre-test', color: '#06b6d4', check: (s) => s.pretestScore !== undefined },
  { id: 'posttest_done', icon: Award, label: 'Achiever', desc: 'Selesaikan post-test', color: '#10b981', check: (s) => s.posttestScore !== undefined },
  { id: 'pass_pretest', icon: Zap, label: 'Sharp Mind', desc: 'Lulus pre-test (≥70)', color: '#8b5cf6', check: (s) => (s.pretestScore || 0) >= 70 },
  { id: 'pass_posttest', icon: Trophy, label: 'Network Pro', desc: 'Lulus post-test (≥70)', color: '#f97316', check: (s) => (s.posttestScore || 0) >= 70 },
  { id: 'perfect_posttest', icon: Flame, label: 'Perfect Score', desc: 'Nilai post-test 100', color: '#ef4444', check: (s) => (s.posttestScore || 0) === 100 },
  { id: 'growth', icon: Clock, label: 'Growing', desc: 'Skor post-test lebih tinggi dari pre-test', color: '#10b981', check: (s) => (s.posttestScore || 0) > (s.pretestScore || 0) },
];

export function checkBadges(scores, modulesRead) {
  const state = {
    modulesReadCount: Object.values(modulesRead).filter(Boolean).length,
    pretestScore: scores.pretest,
    posttestScore: scores.posttest,
  };
  return ALL_BADGES.filter(b => b.check(state)).map(b => b.id);
}
