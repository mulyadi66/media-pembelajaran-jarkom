import { useApp } from '../../context/AppContext';
import Badges from '../../components/Badges';
import { checkBadges } from '../../data/badges';
import Certificate from '../../components/Certificate';
import Leaderboard from '../../components/Leaderboard';
import { Trash2, Award, TrendingUp } from 'lucide-react';

export default function HasilKKAXI() {
  const { scores, modulesRead, resetAll, studentName, saveStudentName } = useApp();
  const pretestScore = scores.kka_xi_pretest || 0;
  const posttestScore = scores.kka_xi_posttest || 0;
  const pretestAnswered = Object.keys(JSON.parse(localStorage.getItem('jarkomlab_kka_xi_pretestAnswers') || '{}')).length;
  const posttestAnswered = Object.keys(JSON.parse(localStorage.getItem('jarkomlab_kka_xi_posttestAnswers') || '{}')).length;
  const growth = posttestScore > 0 && pretestScore > 0 ? posttestScore - pretestScore : null;
  const earnedBadges = checkBadges(scores, modulesRead);
  const passed = posttestScore >= 70;

  return (
    <div className="content-section">
      <div className="result-card fade-in">
        <h3 style={{marginBottom: 12}}>Nama Siswa</h3>
        <input type="text" className="calc-input" placeholder="Masukkan nama untuk sertifikat..."
          value={studentName} onChange={e => saveStudentName(e.target.value)}
          style={{maxWidth: 400, margin: '0 auto', display: 'block', padding: '10px 16px', border: '2px solid var(--border)', borderRadius: 10, fontFamily: 'inherit', fontSize: '0.95rem', textAlign: 'center'}} />
      </div>

      <div className="result-card fade-in">
        <h2 style={{marginBottom: 20}}><TrendingUp size={20} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Ringkasan Perkembangan KKA XI</h2>
        <div className="result-details" style={{marginTop: 0}}>
          <div className="result-detail">
            <div className="detail-value">{pretestScore}</div>
            <div className="detail-label">Pre-Test</div>
          </div>
          <div className="result-detail">
            <div className="detail-value">{posttestScore}</div>
            <div className="detail-label">Post-Test</div>
          </div>
          <div className="result-detail">
            <div className="detail-value" style={{color: growth !== null ? (growth > 0 ? 'var(--success)' : 'var(--danger)') : 'var(--text-light)'}}>
              {growth !== null ? (growth > 0 ? '+' : '') + growth : '-'}
            </div>
            <div className="detail-label">Pertumbuhan</div>
          </div>
        </div>
      </div>

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 16}}><Award size={18} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Pencapaian ({earnedBadges.length}/8)</h3>
        <Badges earnedIds={earnedBadges} />
      </div>

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <Leaderboard scores={scores} />
      </div>

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 20}}>Detail Penilaian</h3>
        <ScoreBar label="Pre-Test KKA XI" score={pretestScore} answered={pretestAnswered} />
        <ScoreBar label="Post-Test KKA XI" score={posttestScore} answered={posttestAnswered} />
        <div style={{marginTop: 16}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
            <span style={{fontWeight:600}}>Modul Dibaca</span>
            <span style={{fontWeight:700,color:'var(--primary)'}}>{Object.values(modulesRead).filter(Boolean).length}/4</span>
          </div>
          <div className="progress-bar" style={{height:10}}>
            <div className="progress-fill" style={{width: (Object.values(modulesRead).filter(Boolean).length / 4 * 100) + '%'}} />
          </div>
        </div>
      </div>

      {passed && (
        <div className="result-card fade-in">
          <h3 style={{marginBottom: 16}}><Award size={18} style={{color: 'var(--success)', verticalAlign: 'middle'}} /> Sertifikat</h3>
          <p style={{color: 'var(--text-light)', marginBottom: 16, fontSize: '0.9rem'}}>
            Kamu telah lulus post-test! Download sertifikat di bawah ini.
          </p>
          <Certificate studentName={studentName || 'Siswa'} score={posttestScore} module="KKA XI JarkomLab" />
        </div>
      )}

      <div style={{textAlign: 'center', margin: '20px 0'}}>
        <button className="btn btn-danger" onClick={() => { if(window.confirm('Yakin ingin mereset semua data?')) resetAll(); }}>
          <Trash2 size={16} /> Reset Semua Data
        </button>
      </div>
    </div>
  );
}

function ScoreBar({ label, score, answered }) {
  const passed = score >= 70;
  return (
    <div style={{marginBottom: 16}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <span style={{fontWeight:600}}>{label}</span>
        <span style={{fontWeight:700,color: score > 0 ? (passed ? 'var(--success)' : 'var(--danger)') : 'var(--text-light)'}}>{score}/100</span>
      </div>
      <div className="progress-bar" style={{height:10}}>
        <div className="progress-fill" style={{width: score + '%', background: score > 0 ? (passed ? 'var(--success)' : 'var(--danger)') : 'var(--border)'}} />
      </div>
      <div style={{fontSize:'0.8rem',color:'var(--text-light)',marginTop:4}}>
        {answered > 0 ? `${answered} soal terjawab` : 'Belum dikerjakan'}
        {score > 0 && (passed ? ' — Lulus' : ' — Target: 70')}
      </div>
    </div>
  );
}
