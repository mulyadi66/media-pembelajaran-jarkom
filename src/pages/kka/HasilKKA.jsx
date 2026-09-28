import { useApp } from '../../context/AppContext';
import Badges from '../../components/Badges';
import { checkBadges } from '../../data/badges';
import Certificate from '../../components/Certificate';
import Leaderboard from '../../components/Leaderboard';
import { Trash2, Award, TrendingUp, ClipboardCheck } from 'lucide-react';
import { KKA_META, getExamHistory } from '../../lib/examLib';
import { UJIAN_KKA_SOAL_PER_ELEMEN } from '../../data/kka/ujianKKA.js';

/** Jumlah jawaban tersimpan untuk sebuah quiz (aman terhadap data korup). */
function countAnswered(storageKey) {
  try {
    const raw = JSON.parse(localStorage.getItem(`jarkomlab_${storageKey}`) || '{}');
    return raw && typeof raw === 'object' ? Object.keys(raw).length : 0;
  } catch { return 0; }
}

export default function HasilKKA() {
  const MODULE_IDS = ['kka_elemen1', 'kka_elemen2', 'kka_elemen3', 'kka_elemen4', 'kka_elemen5'];
  const { scores, modulesRead, resetAll, studentName, saveStudentName } = useApp();
  const pretestScore = scores.kka_pretest || 0;
  const posttestScore = scores.kka_posttest || 0;
  const pretestAnswered = countAnswered('kka_pretestAnswers');
  const posttestAnswered = countAnswered('kka_posttestAnswers');
  const growth = posttestScore > 0 && pretestScore > 0 ? posttestScore - pretestScore : null;
  const earnedBadges = checkBadges(scores, modulesRead, {
    pretestKey: 'kka_pretest',
    posttestKey: 'kka_posttest',
    moduleIds: MODULE_IDS,
  });

  // Ujian KKA per elemen: nilai diambil dari riwayat ujian yang tersimpan di
  // perangkat ini (sumber yang sama dengan rekap guru), bukan dari pre/post-test.
  const history = getExamHistory();
  const ujianElemen = KKA_META.map(m => {
    const h = history.find(r => r.modul === m.key);
    return {
      key: m.key,
      label: m.label,
      nilai: h ? h.nilai : null,
      durasi: h && h.startedAt && h.finishedAt
        ? Math.max(1, Math.round((h.finishedAt - h.startedAt) / 60000))
        : null,
    };
  });
  const nilaiElemen = ujianElemen.filter(e => e.nilai != null).map(e => e.nilai);
  const jmlElemen = nilaiElemen.length;
  const rataElemen = jmlElemen ? Math.round(nilaiElemen.reduce((a, b) => a + b, 0) / jmlElemen) : null;
  const semuaElemenSelesai = jmlElemen === KKA_META.length;

  // Lulus bila post-test >= 70, atau bila kelima elemen ujian >= 70.
  const lulusPosttest = posttestScore >= 70;
  const lulusUjian = semuaElemenSelesai && rataElemen >= 70;
  const passed = lulusPosttest || lulusUjian;
  const nilaiSertifikat = lulusPosttest ? posttestScore : (rataElemen ?? 0);
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
        <h2 style={{marginBottom: 20}}><TrendingUp size={20} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Ringkasan Perkembangan KKA</h2>
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
        <Leaderboard scores={scores} pretestKey="kka_pretest" posttestKey="kka_posttest" />
      </div>

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 20}}>Detail Penilaian</h3>
        <ScoreBar label="Pre-Test KKA" score={pretestScore} answered={pretestAnswered} />
        <ScoreBar label="Post-Test KKA" score={posttestScore} answered={posttestAnswered} />
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

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 6}}>
          <ClipboardCheck size={18} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Ujian KKA per Elemen
        </h3>
        <p style={{color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: 16}}>
          Ini nilai yang tercatat di rekap guru. Kerjakan di halaman <strong>Ujian KKA</strong> (butuh token guru).
        </p>
        {ujianElemen.map(e => (
          <ScoreBar
            key={e.key}
            label={e.label}
            score={e.nilai}
            answered={e.nilai != null ? UJIAN_KKA_SOAL_PER_ELEMEN : 0}
            suffix={e.durasi != null ? ` · ${e.durasi} mnt` : ''}
          />
        ))}
        <div className="rekap-modul-stats" style={{marginTop: 8}}>
          <div className="rsm-item rsm-total">
            <span className="rsm-label">Rerata {jmlElemen}/{KKA_META.length} elemen</span>
            <span className={`rsm-avg ${rataElemen == null ? 'muted' : ''}`}>{rataElemen == null ? '—' : rataElemen}</span>
            <span className="rsm-count">{lulusUjian ? 'Lulus ujian KKA' : semuaElemenSelesai ? 'Belum mencapai 70' : 'Belum lengkap'}</span>
          </div>
        </div>
      </div>

      {passed && (
        <div className="result-card fade-in">
          <h3 style={{marginBottom: 16}}><Award size={18} style={{color: 'var(--success)', verticalAlign: 'middle'}} /> Sertifikat</h3>
          <p style={{color: 'var(--text-light)', marginBottom: 16, fontSize: '0.9rem'}}>
            {lulusPosttest
              ? 'Kamu telah lulus post-test! Download sertifikat di bawah ini.'
              : `Kamu telah menyelesaikan kelima elemen Ujian KKA dengan rerata ${rataElemen}. Download sertifikat di bawah ini.`}
          </p>
          <Certificate studentName={studentName || 'Siswa'} score={nilaiSertifikat} module="KKA JarkomLab" title="Koding dan Kecerdasan Artifisial (KKA)" />
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

function ScoreBar({ label, score, answered, suffix = '' }) {
  const nilai = score ?? 0;
  const passed = nilai >= 70;
  return (
    <div style={{marginBottom: 16}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <span style={{fontWeight:600}}>{label}</span>
        <span style={{fontWeight:700,color: nilai > 0 ? (passed ? 'var(--success)' : 'var(--danger)') : 'var(--text-light)'}}>{nilai}/100</span>
      </div>
      <div className="progress-bar" style={{height:10}}>
        <div className="progress-fill" style={{width: nilai + '%', background: nilai > 0 ? (passed ? 'var(--success)' : 'var(--danger)') : 'var(--border)'}} />
      </div>
      <div style={{fontSize:'0.8rem',color:'var(--text-light)',marginTop:4}}>
        {answered > 0 ? `${answered} soal terjawab${suffix}` : 'Belum dikerjakan'}
        {nilai > 0 && (passed ? ' — Lulus' : ' — Target: 70')}
      </div>
    </div>
  );
}
