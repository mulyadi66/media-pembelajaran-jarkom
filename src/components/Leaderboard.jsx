import { Trophy, Medal, Download } from 'lucide-react';
import { useRef, useState } from 'react';

export default function Leaderboard({ scores = {}, pretestKey = 'pretest', posttestKey = 'posttest' }) {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const pretest = scores[pretestKey] || 0;
  const posttest = scores[posttestKey] || 0;
  const total = pretest + posttest;
  const avg = (pretest + posttest) > 0 ? Math.round(total / ((pretest > 0 ? 1 : 0) + (posttest > 0 ? 1 : 0) || 1)) : 0;

  const entries = [
    { name: 'Pre-Test', score: pretest, color: '#f59e0b' },
    { name: 'Post-Test', score: posttest, color: '#10b981' },
  ].filter(e => e.score > 0).sort((a, b) => b.score - a.score);

  const exportImage = async () => {
    setLoading(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const el = ref.current;
      if (!el) return;
      const canvas = await html2canvas(el, { scale: 2, backgroundColor: '#ffffff' });
      const link = document.createElement('a');
      link.download = 'leaderboard-jarkom.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="leaderboard" ref={ref}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
        <h3 style={{margin:0}}><Trophy size={18} /> Leaderboard</h3>
        <button className="btn btn-secondary" onClick={exportImage} disabled={loading}
          style={{padding:'6px 12px',fontSize:'0.8rem'}} aria-label="Download leaderboard sebagai gambar">
          <Download size={14} /> {loading ? '...' : 'Export PNG'}
        </button>
      </div>
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
