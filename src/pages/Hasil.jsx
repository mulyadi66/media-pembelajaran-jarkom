import { useApp } from '../context/AppContext';
import Badges from '../components/Badges';
import { checkBadges } from '../data/badges';
import Certificate from '../components/Certificate';
import Leaderboard from '../components/Leaderboard';
import { MODUL_POSTTEST_SOAL_PER_MODUL as MODUL_POSTTEST_SOAL } from '../data/modulPostTests';
import {
  PRETEST_MPK1,
  PRETEST_MPK1_SOAL_PER_MODUL,
  PRETEST_MPK1_SKOR_KEY,
  getNilaiPretest,
  getRataPretest,
} from '../data/mpk1/pretestMPK1';
import { Trash2, Award, TrendingUp, ClipboardCheck } from 'lucide-react';

export default function Hasil() {
  const MODULE_IDS = ['modul1', 'modul2', 'modul3', 'osi-layer'];
  const { scores, modulesRead, resetAll, studentName, saveStudentName } = useApp();
  // Pre-Test sudah dipecah per modul (30 soal tiap modul), jadi nilai
  //ammersnya dibaca dari helper, bukan dari kunci legacy "pretest".
  const pretestModul = getNilaiPretest(scores);
  const { rata: rataPretest, selesai: pretestSelesai } = getRataPretest(scores);
  const pretestScore = rataPretest ?? 0;
  const pretestAnswered = PRETEST_MPK1.filter(b => scores[b.key] !== undefined).length;
  // Post-Test campur (kunci score "posttest") sudah dihapus. Satu-satunya nilai
  // akhir MPK 1 sekarang adalah rerata tiga Post-Test per modul, sama seperti
  // KKA memakai rerata Ujian per elemen. Nilai "posttest" sisa di storage siswa
  // lama sengaja tidak dibaca supaya tidak resurrect jadi sertifikat.
  const modulTests = [
    { key: 'mpk1_modul1_posttest', label: 'Post Test Modul 1' },
    { key: 'mpk1_modul2_posttest', label: 'Post Test Modul 2' },
    { key: 'mpk1_modul3_posttest', label: 'Post Test Modul 3' },
  ];
  // `undefined` berarti belum dikerjakan; nilai 0 berarti sudah dikerjakan tapi
  // nilainya nol. Keduanya harus dibedakan agar rerata tidak salah hitung.
  const modulTestScores = modulTests.map(mt => ({
    ...mt,
    nilai: mt.key in scores ? Number(scores[mt.key]) : null,
  }));
  const nilaiModul = modulTestScores.filter(m => m.nilai !== null).map(m => m.nilai);
  const jmlModul = nilaiModul.length;
  const modulAvg = jmlModul ? Math.round(nilaiModul.reduce((a, b) => a + b, 0) / jmlModul) : null;
  const semuaModulSelesai = jmlModul === modulTests.length;
  const growth = modulAvg != null && pretestScore > 0 ? modulAvg - pretestScore : null;
  // examAvg selalu dikirim sebagai angka (0 saat belum ada yang dikerjakan) supaya
  // nilaiAkhir() di badges.js tidak pernah jatuh ke fallback scores.posttest lama.
  const earnedBadges = checkBadges(scores, modulesRead, {
    moduleIds: MODULE_IDS,
    pretestKey: PRETEST_MPK1_SKOR_KEY,
    examAvg: modulAvg ?? 0,
    examDone: semuaModulSelesai,
  });
  // Sertifikat: ketiga Post-Test per modul selesai dengan rerata minimal 70.
  const passed = semuaModulSelesai && modulAvg >= 70;
  const nilaiSertifikat = modulAvg ?? 0;
  const readCount = MODULE_IDS.filter(id => modulesRead[id]).length;

  return (
    <div className="content-section">
      {/* Student name input */}
      <div className="result-card fade-in">
        <h3 style={{marginBottom: 12}}>Nama Siswa</h3>
        <input type="text" className="calc-input" placeholder="Masukkan nama untuk sertifikat..."
          value={studentName} onChange={e => saveStudentName(e.target.value)}
          style={{maxWidth: 400, margin: '0 auto', display: 'block', padding: '10px 16px', border: '2px solid var(--border)', borderRadius: 10, fontFamily: 'inherit', fontSize: '0.95rem', textAlign: 'center'}} />
      </div>

      {/* Score summary */}
      <div className="result-card fade-in">
        <h2 style={{marginBottom: 20}}><TrendingUp size={20} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Ringkasan Perkembangan</h2>
        <div className="result-details" style={{marginTop: 0}}>
          <div className="result-detail">
            <div className="detail-value" style={{color: 'var(--primary)'}}>
              {pretestScore > 0 ? pretestScore : '-'}
            </div>
            <div className="detail-label">Pre-Test</div>
          </div>
          <div className="result-detail">
            <div className="detail-value" style={{color: 'var(--primary)'}}>
              {modulAvg ?? '-'}
            </div>
            <div className="detail-label">Rata-rata Post-Test</div>
          </div>
          <div className="result-detail">
            <div className="detail-value" style={{color: growth !== null ? (growth > 0 ? 'var(--success)' : 'var(--danger)') : 'var(--text-light)'}}>
              {growth !== null ? (growth > 0 ? '+' : '') + growth : '-'}
            </div>
            <div className="detail-label">Pertumbuhan</div>
          </div>
          <div className="result-detail">
            <div className="detail-value" style={{color: semuaModulSelesai ? 'var(--success)' : 'var(--text-light)'}}>
              {jmlModul}/{modulTests.length}
            </div>
            <div className="detail-label">Post-Test Selesai</div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 16}}><Award size={18} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Pencapaian ({earnedBadges.length}/8)</h3>
        <Badges earnedIds={earnedBadges} />
      </div>

      {/* Leaderboard */}
      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <Leaderboard scores={scores} pretestKey="mpk1_pretest" examAvg={modulAvg} />
      </div>

      {/* Detail */}
      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 20}}>Detail Penilaian</h3>
        <ScoreBar label={`Pre-Test MPK 1 (rata-rata ${pretestSelesai}/${PRETEST_MPK1.length} modul)`} score={pretestScore} answered={pretestAnswered} />
        {modulTestScores.map(mt => (
          <ScoreBar key={mt.key} label={mt.label} score={mt.nilai}
            answered={mt.nilai != null ? MODUL_POSTTEST_SOAL : 0} />
        ))}
        <div className="rekap-modul-stats" style={{marginTop: 8}}>
          <div className="rsm-item rsm-total">
            <span className="rsm-label">Rerata {jmlModul}/{modulTests.length} post-test modul</span>
            <span className={`rsm-avg ${modulAvg == null ? 'muted' : ''}`}>{modulAvg == null ? '—' : modulAvg}</span>
            <span className="rsm-count">
              {passed ? 'Lolos' : semuaModulSelesai ? 'Belum mencapai 70' : 'Belum lengkap'}
            </span>
          </div>
        </div>
        <div style={{marginTop: 16}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:8}}>
            <span style={{fontWeight:600}}>Modul Dibaca</span>
            <span style={{fontWeight:700,color:'var(--primary)'}}>{readCount}/{MODULE_IDS.length}</span>
          </div>
          <div className="progress-bar" style={{height:10}}>
            <div className="progress-fill" style={{width: (readCount / MODULE_IDS.length * 100) + '%'}} />
          </div>
        </div>
      </div>

      {/* Pre-Test per modul */}
      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 6}}>
          <ClipboardCheck size={18} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Pre-Test MPK 1 per Modul
        </h3>
        <p style={{color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: 16}}>
          Nilai pemahaman awal, dikerjakan di halaman <strong>Pre-Test</strong> sebelum belajar
          ({PRETEST_MPK1_SOAL_PER_MODUL} soal per modul, boleh diulang). Bandingkan dengan nilai
          Post-Test di atas untuk melihat how besar kemajuanmu.
        </p>
        {pretestModul.map(m => (
          <ScoreBar
            key={m.key}
            label={m.label}
            score={m.nilai}
            answered={m.nilai != null ? PRETEST_MPK1_SOAL_PER_MODUL : 0}
          />
        ))}
        <div className="rekap-modul-stats" style={{marginTop: 8}}>
          <div className="rsm-item rsm-total">
            <span className="rsm-label">Rerata {pretestSelesai}/{PRETEST_MPK1.length} pre-test modul</span>
            <span className={`rsm-avg ${rataPretest == null ? 'muted' : ''}`}>{rataPretest == null ? '—' : rataPretest}</span>
            <span className="rsm-count">
              {growth !== null ? (growth > 0 ? `Naik ${growth}` : growth === 0 ? 'Sama' : `Turun ${Math.abs(growth)}`) : 'Belum bisa dibandingkan'}
            </span>
          </div>
        </div>
      </div>

      {/* Certificate */}
      {passed && (
        <div className="result-card fade-in">
          <h3 style={{marginBottom: 16}}><Award size={18} style={{color: 'var(--success)', verticalAlign: 'middle'}} /> Sertifikat</h3>
          <p style={{color: 'var(--text-light)', marginBottom: 16, fontSize: '0.9rem'}}>
            Kamu telah menyelesaikan ketiga Post-Test modul dengan rerata {nilaiSertifikat}. Download sertifikat di bawah ini.
          </p>
          <Certificate studentName={studentName || 'Siswa'} score={nilaiSertifikat} module="JarkomLab" />
        </div>
      )}

      {/* Reset */}
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
