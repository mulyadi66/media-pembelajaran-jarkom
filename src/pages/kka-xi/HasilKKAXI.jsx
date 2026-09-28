import { useApp } from '../../context/AppContext';
import Badges from '../../components/Badges';
import { checkBadges } from '../../data/badges';
import Certificate from '../../components/Certificate';
import Leaderboard from '../../components/Leaderboard';
import { Trash2, Award, TrendingUp, ClipboardCheck } from 'lucide-react';
import { KKA_XI_META, getExamHistory } from '../../lib/examLib';
import { UJIAN_KKA_XI_SOAL_PER_MODUL } from '../../data/kka-xi/ujianKKAXI.js';

/** Jumlah jawaban tersimpan untuk sebuah quiz (aman terhadap data korup). */
function countAnswered(storageKey) {
  try {
    const raw = JSON.parse(localStorage.getItem(`jarkomlab_${storageKey}`) || '{}');
    return raw && typeof raw === 'object' ? Object.keys(raw).length : 0;
  } catch { return 0; }
}

export default function HasilKKAXI() {
  const MODULE_IDS = ['kka_xi_modul1', 'kka_xi_modul2', 'kka_xi_modul3', 'kka_xi_modul4'];
  const { scores, modulesRead, resetAll, studentName, saveStudentName } = useApp();
  const pretestScore = scores.kka_xi_pretest || 0;
  const pretestAnswered = countAnswered('kka_xi_pretestAnswers');

  // Ujian KKA XI per modul: nilai diambil dari riwayat ujian yang tersimpan di
  // perangkat ini (sumber yang sama dengan rekap guru), bukan dari pre/post-test.
  const history = getExamHistory();
  const ujianModul = KKA_XI_META.map(m => {
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
  const nilaiModul = ujianModul.filter(m => m.nilai != null).map(m => m.nilai);
  const jmlModul = nilaiModul.length;
  const rataModul = jmlModul ? Math.round(nilaiModul.reduce((a, b) => a + b, 0) / jmlModul) : null;
  const semuaModulSelesai = jmlModul === KKA_XI_META.length;
  const growth = rataModul != null && pretestScore > 0 ? rataModul - pretestScore : null;

  // Post-test KKA XI diganti Ujian KKA XI per modul, jadi badge "pencapaian
  // akhir" memakai rata-rata nilai ujian.
  const earnedBadges = checkBadges(scores, modulesRead, {
    pretestKey: 'kka_xi_pretest',
    moduleIds: MODULE_IDS,
    examAvg: rataModul,
    examDone: semuaModulSelesai,
  });

  const lulusUjian = semuaModulSelesai && rataModul >= 70;
  const passed = lulusUjian;
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
        <h2 style={{marginBottom: 20}}><TrendingUp size={20} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Ringkasan Perkembangan KKA XI</h2>
        <div className="result-details" style={{marginTop: 0}}>
          <div className="result-detail">
            <div className="detail-value">{pretestScore}</div>
            <div className="detail-label">Pre-Test</div>
          </div>
          <div className="result-detail">
            <div className="detail-value">{rataModul == null ? '—' : rataModul}</div>
            <div className="detail-label">Rata-rata Ujian</div>
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
        <Badges earnedIds={earnedBadges} examMode examName="Ujian KKA XI" />
      </div>

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <Leaderboard scores={scores} pretestKey="kka_xi_pretest" examAvg={rataModul} />
      </div>

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 20}}>Detail Penilaian</h3>
        <ScoreBar label="Pre-Test KKA XI" score={pretestScore} answered={pretestAnswered} />
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

      <div className="result-card fade-in" style={{textAlign: 'left'}}>
        <h3 style={{marginBottom: 6}}>
          <ClipboardCheck size={18} style={{color: 'var(--primary)', verticalAlign: 'middle'}} /> Ujian KKA XI per Modul
        </h3>
        <p style={{color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: 16}}>
          Ini nilai yang tercatat di rekap guru. Kerjakan di halaman <strong>Ujian KKA XI</strong> (butuh token guru).
        </p>
        {ujianModul.map(m => (
          <ScoreBar
            key={m.key}
            label={m.label}
            score={m.nilai}
            answered={m.nilai != null ? UJIAN_KKA_XI_SOAL_PER_MODUL : 0}
            suffix={m.durasi != null ? ` · ${m.durasi} mnt` : ''}
          />
        ))}
        <div className="rekap-modul-stats" style={{marginTop: 8}}>
          <div className="rsm-item rsm-total">
            <span className="rsm-label">Rerata {jmlModul}/{KKA_XI_META.length} modul</span>
            <span className={`rsm-avg ${rataModul == null ? 'muted' : ''}`}>{rataModul == null ? '—' : rataModul}</span>
            <span className="rsm-count">{lulusUjian ? 'Lulus ujian KKA XI' : semuaModulSelesai ? 'Belum mencapai 70' : 'Belum lengkap'}</span>
          </div>
        </div>
      </div>

      {passed && (
        <div className="result-card fade-in">
          <h3 style={{marginBottom: 16}}><Award size={18} style={{color: 'var(--success)', verticalAlign: 'middle'}} /> Sertifikat</h3>
          <p style={{color: 'var(--text-light)', marginBottom: 16, fontSize: '0.9rem'}}>
            Kamu telah menyelesaikan keempat modul Ujian KKA XI dengan rerata {rataModul}. Download sertifikat di bawah ini.
          </p>
          <Certificate studentName={studentName || 'Siswa'} score={rataModul ?? 0} module="KKA XI JarkomLab" title="Koding dan Kecerdasan Artifisial XI" />
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
