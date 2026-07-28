import { Trophy, Medal } from 'lucide-react';

export default function Leaderboard({ scores = {} }) {
  const pretest = scores.pretest || 0;
  const posttest = scores.posttest || 0;
  const total = pretest + posttest;
  const avg = (pretest + posttest) > 0 ? Math.round(total / ((pretest > 0 ? 1 : 0) + (posttest > 0 ? 1 : 0) || 1)) : 0;

  const entries = [
    { name: 'Pre-Test', score: pretest, color: '#f59e0b' },
    { name: 'Post-Test', score: posttest, color: '#10b981' },
  ].filter(e => e.score > 0).sort((a, b) => b.score - a.score);

  const rank = ['Emas', 'Perak', 'Perunggu'];

  return (
    <div className="leaderboard">
      <h3><Trophy size={18} /> Leaderboard</h3>
      <div className="leaderboard-avg">
        <span>Rata-rata Skor</span>
        <strong>{avg}</strong>
      </div>
      <div className="leaderboard-list">
        {entries.map((e, i) => (
          <div className="leaderboard-item" key={i}>
            <div className="leaderboard-rank" style={{ background: e.color + '20', color: e.color }}>
              {i < 3 ? <Medal size={14} /> : <span>#{i + 1}</span>}
            </div>
            <div className="leaderboard-name">{e.name}</div>
            <div className="leaderboard-score" style={{ color: e.color }}>{e.score}</div>
          </div>
        ))}
        {entries.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-lighter)', padding: 20, fontSize: '0.85rem' }}>
            Kerjakan pre-test atau post-test untuk mulai!
          </p>
        )}
      </div>
    </div>
  );
}
