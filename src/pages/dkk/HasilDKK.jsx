import { useApp } from '../../context/AppContext';
import Badges from '../../components/Badges';
import { checkBadges } from '../../data/badges';
import Certificate from '../../components/Certificate';
import Leaderboard from '../../components/Leaderboard';
import { Trash2, Award, TrendingUp } from 'lucide-react';

export default function HasilDKK() {
  const MODULE_IDS = ['dkk_elemen1', 'dkk_elemen2', 'dkk_elemen3', 'dkk_elemen4'];
  const { scores, modulesRead, resetAll, studentName, saveStudentName } = useApp();
  const pretestScore = scores.dkk_pretest || 0;
  const utsScore = scores.dkk_uts || 0;
  const pretestAnswered = countAnswered('jarkomlab_dkk_pretestAnswers');
  const utsAnswered = countAnswered('jarkomlab_dkk_uts');
  const growth = utsScore > 0 && pretestScore > 0 ? utsScore - pretestScore : null;
  const earnedBadges = checkBadges(scores, modulesRead, {
    pretestKey: 'dkk_pretest',
    posttestKey: 'dkk_uts',
    moduleIds: MODULE_IDS,
  });
  const passed = utsScore >= 70;
  const readCount = MODULE_IDS.filter(id => modulesRead[id]).length;

  return (
    <div className="content-section">
      <div className="result-card fade-in">
        <h3 style={{marginBottom: 12}}>Nama Siswa</h3>
        <input type="text" className="calc-input" placeholder="Masukkan nama untuk sertifikat..."
          value={studentName} onChange={e => saveStudentName(e.target.value)}
          style={{maxWidth: 400, margin: '0 auto', display: 'block', padding: '10px 16px', border: '2px solid var(--border)', borderRadius: 10, fontFamily: 'inherit', fontSize: '0.95rem', textAlign: 'center'}} />
      </div>

      <div className="result-card fade-in">
        <h2 style={{marginBottom: 20}}><TrendingUp size={20} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Ringkasan Perkembangan DKK</h2>
        <div className="result-details" style={{marginTop: 0}}>
          <div className="result-detail">
            <div className="detail-value">{pretestScore}</div>
            <div className="detail-label">Pre-Test</div>
          </div>
          <div className="result-detail">
            <div className="detail-value">{utsScore}</div>
            <div className="detail-label">UTS</div>
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
        <Leaderboard scores={scores} pretestKey="dkk_pretest" posttestKey="dkk_uts" />
      </div>

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 20}}>Detail Penilaian</h3>
        <ScoreBar label="Pre-Test DKK" score={pretestScore} answered={pretestAnswered} />
        <ScoreBar label="UTS DKK" score={utsScore} answered={utsAnswered} />
        <div style={{marginTop: 16}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
            <span style={{fontWeight:600}}>Elemen Dibaca</span>
            <span style={{fontWeight:700,color:'var(--primary)'}}>{readCount}/{MODULE_IDS.length}</span>
          </div>
          <div className="progress-bar" style={{height:10}}>
            <div className="progress-fill" style={{width: (readCount / MODULE_IDS.length * 100) + '%'}} />
          </div>
        </div>
      </div>

      {passed && (
        <div className="result-card fade-in">
          <h3 style={{marginBottom: 16}}><Award size={18} style={{color: 'var(--success)', verticalAlign: 'middle'}} /> Sertifikat</h3>
          <p style={{color: 'var(--text-light)', marginBottom: 16, fontSize: '0.9rem'}}>
            Kamu telah lulus Ujian Tengah Semester! Download sertifikat di bawah ini.
          </p>
          <Certificate studentName={studentName || 'Siswa'} score={utsScore} module="DKK JarkomLab" />
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

/**
 * Hitung jumlah soal terjawab. Bentuk data berbeda antar bank:
 * Quiz biasa (Pre-Test) menyimpan objek `{index: answer}`, sedangkan
 * ModulPostTest (UTS) menyimpan array jawaban langsung. Count keduanya di sini
 * supaya tidak ada halaman yang lagi baca storage dengan asumsi bentuk lain.
 */
function countAnswered(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || 'null');
    if (Array.isArray(data)) return data.filter(v => v != null).length;
    if (data && typeof data === 'object') return Object.keys(data).length;
  } catch { /* storage rusak: anggap belum dikerjakan */ }
  return 0;
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
