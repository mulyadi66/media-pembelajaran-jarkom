import { useApp } from '../context/AppContext';
import { BarChart3, Trash2, Award, TrendingUp } from 'lucide-react';

export default function Hasil() {
  const { scores, pretestAnswers, posttestAnswers, modulesRead, resetAll } = useApp();
  const pretestScore = scores.pretest || 0;
  const posttestScore = scores.posttest || 0;
  const pretestAnswered = Object.keys(pretestAnswers).length;
  const posttestAnswered = Object.keys(posttestAnswers).length;
  const growth = posttestScore > 0 && pretestScore > 0 ? posttestScore - pretestScore : null;
  const readCount = Object.values(modulesRead).filter(Boolean).length;

  return (
    <div className="content-section">
      <div className="result-card fade-in">
        <h2 style={{marginBottom: 20}}><TrendingUp size={20} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Ringkasan Perkembangan</h2>
        <div className="result-details" style={{marginTop: 0}}>
          <div className="result-detail">
            <div className="detail-value">{pretestScore}</div>
            <div className="detail-label">Pre-Test Score</div>
          </div>
          <div className="result-detail">
            <div className="detail-value">{posttestScore}</div>
            <div className="detail-label">Post-Test Score</div>
          </div>
          <div className="result-detail">
            <div className="detail-value" style={{color: growth !== null ? (growth > 0 ? 'var(--success)' : growth === 0 ? 'var(--text)' : 'var(--danger)') : 'var(--text-light)'}}>
              {growth !== null ? (growth > 0 ? '+' : '') + growth : '-'}
            </div>
            <div className="detail-label">Pertumbuhan</div>
          </div>
        </div>
      </div>

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 20}}><Award size={18} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Detail Penilaian</h3>
        <ScoreBar label="Pre-Test" score={pretestScore} answered={pretestAnswered} total={15} />
        <ScoreBar label="Post-Test" score={posttestScore} answered={posttestAnswered} total={15} />
        <div style={{marginTop: 16}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
            <span style={{fontWeight: 600}}>Modul Dibaca</span>
            <span style={{fontWeight: 700, color: 'var(--primary)'}}>{readCount}/3</span>
          </div>
          <div className="progress-bar" style={{height: 10}}>
            <div className="progress-fill" style={{width: (readCount / 3 * 100) + '%'}} />
          </div>
        </div>
      </div>

      <div className="result-card fade-in">
        <h3 style={{marginBottom: 16}}>Keterangan</h3>
        <div style={{textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.8}}>
          <p><span style={{display: 'inline-block', width: 12, height: 12, background: 'var(--success)', borderRadius: 3, marginRight: 8}} /> <strong>Lulus:</strong> Nilai &ge; 70</p>
          <p><span style={{display: 'inline-block', width: 12, height: 12, background: 'var(--danger)', borderRadius: 3, marginRight: 8}} /> <strong>Belum Lulus:</strong> Nilai &lt; 70</p>
          <p style={{marginTop: 12}}>Kerjakan pre-test terlebih dahulu, pelajari materi, lalu kerjakan post-test untuk melihat perkembangan.</p>
        </div>
      </div>

      <div style={{textAlign: 'center', margin: '20px 0'}}>
        <button className="btn btn-danger" onClick={() => { if(window.confirm('Yakin ingin mereset semua data?')) resetAll(); }}>
          <Trash2 size={16} /> Reset Semua Data
        </button>
      </div>
    </div>
  );
}

function ScoreBar({ label, score, answered, total }) {
  const passed = score >= 70;
  return (
    <div style={{marginBottom: 16}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
        <span style={{fontWeight: 600}}>{label}</span>
        <span style={{fontWeight: 700, color: score > 0 ? (passed ? 'var(--success)' : 'var(--danger)') : 'var(--text-light)'}}>{score}/100</span>
      </div>
      <div className="progress-bar" style={{height: 10}}>
        <div className="progress-fill" style={{width: score + '%', background: score > 0 ? (passed ? 'var(--success)' : 'var(--danger)') : 'var(--border)'}} />
      </div>
      <div style={{fontSize: '0.8rem', color: 'var(--text-light)', marginTop: 4}}>
        {answered > 0 ? `${answered} soal terjawab` : 'Belum dikerjakan'}
        {score > 0 && (passed ? ' — Lulus' : ' — Target: 70')}
      </div>
    </div>
  );
}
