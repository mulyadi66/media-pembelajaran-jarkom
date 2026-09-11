import { useState, useEffect, useRef, useCallback } from 'react';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, Clock, Award, RotateCcw, KeyRound, AlertTriangle, Lock, Maximize2 } from 'lucide-react';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz({ questions, storageKey, timeLimit, onScoreSubmit, examToken }) {
  const [shuffledQs] = useState(() => {
    const storedOrder = localStorage.getItem(`jarkomlab_${storageKey}_order`);
    if (storedOrder) {
      try {
        const order = JSON.parse(storedOrder);
        if (Array.isArray(order) && order.length === questions.length) return order.map(i => questions[i]);
      } catch { /* order korup, acak ulang */ }
    }
    return shuffleArray(questions);
  });
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem(`jarkomlab_${storageKey}`);
    if (!saved) return {};
    try { return JSON.parse(saved) || {}; } catch { return {}; }
  });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem(`jarkomlab_${storageKey}_submitted`) === 'true';
  });
  const [secondsLeft, setSecondsLeft] = useState(() => {
    const raw = localStorage.getItem(`jarkomlab_${storageKey}_deadline`);
    const d = raw ? parseInt(raw, 10) : NaN;
    return Number.isFinite(d) && d > Date.now()
      ? Math.ceil((d - Date.now()) / 1000)
      : timeLimit * 60;
  });
  const [tokenOk, setTokenOk] = useState(() => localStorage.getItem(`jarkomlab_${storageKey}_unlocked`) === '1');
  const [token, setToken] = useState('');
  const [tokenError, setTokenError] = useState(false);
  const [tabWarns, setTabWarns] = useState(0);
  const [lockMode, setLockMode] = useState('none'); // none | fs (fullscreen) | pseudo (tanpa fullscreen)
  const lockModeRef = useRef('none');
  const timerRef = useRef(null);
  const locked = lockMode !== 'none';

  const setLock = (mode) => { lockModeRef.current = mode; setLockMode(mode); };

  // Kunci layar: fullscreen + sembunyikan sidebar/topbar agar siswa tidak membuka materi lain
  useEffect(() => {
    document.documentElement.classList.toggle('exam-lock-active', locked);
    return () => document.documentElement.classList.remove('exam-lock-active');
  }, [locked]);

  useEffect(() => {
    const onFs = () => {
      const full = !!document.fullscreenElement;
      if (full) {
        setLock('fs'); // masuk fullscreen (mis. lewat pintasan browser)
      } else if (lockModeRef.current === 'fs') {
        if (!submitted) setTabWarns(w => w + 1);
        setLock('none'); // keluar fullscreen = pelanggaran
      }
    };
    document.addEventListener('fullscreenchange', onFs);
    return () => document.removeEventListener('fullscreenchange', onFs);
  }, [submitted]);

  // Keluar kunci layar (submit/retry) tanpa dihitung pelanggaran
  const forceUnlock = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => setLock('none'));
    setLock('none');
  };

  const toggleLock = async () => {
    if (lockMode === 'fs') { try { await document.exitFullscreen(); } catch { setLock('none'); } return; }
    if (lockMode === 'pseudo') {
      if (!submitted) setTabWarns(w => w + 1); // keluar dari kunci = pelanggaran
      setLock('none');
      return;
    }
    const el = document.documentElement;
    if (typeof el.requestFullscreen === 'function') {
      try {
        await el.requestFullscreen();
        setLock('fs'); // masuk fullscreen
        return;
      } catch { /* tak diizinkan → fallback pseudo di bawah */ }
    }
    setLock('pseudo'); // iPhone/iPad Safari: kunci tanpa dukungan fullscreen
  };

  const qs = shuffledQs;
  const q = qs[currentIdx];
  const total = qs.length;
  const letters = ['A', 'B', 'C', 'D', 'E'];

  const handleSubmit = useCallback(() => {
    clearInterval(timerRef.current);
    localStorage.setItem(`jarkomlab_${storageKey}_submitted`, 'true');
    setSubmitted(true);
    forceUnlock();
    let correct = 0;
    qs.forEach((q, i) => { if (answers[i] === q.answer) correct++; });
    const score = Math.round((correct / total) * 100);
    if (onScoreSubmit) {
      const startedAt = Number(localStorage.getItem(`jarkomlab_${storageKey}_startedAt`) || 0) || null;
      onScoreSubmit(score, { startedAt, finishedAt: Date.now() });
    }
  }, [answers, qs, total, onScoreSubmit, storageKey]);

  const submitRef = useRef(handleSubmit);
  useEffect(() => { submitRef.current = handleSubmit; }, [handleSubmit]);

  useEffect(() => {
    if (submitted || !timeLimit) return;
    const deadlineKey = `jarkomlab_${storageKey}_deadline`;
    let deadline = parseInt(localStorage.getItem(deadlineKey) || '0', 10);
    if (!Number.isFinite(deadline) || deadline <= 0) {
      deadline = Date.now() + timeLimit * 60 * 1000;
      localStorage.setItem(deadlineKey, String(deadline));
    }
    setSecondsLeft(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    timerRef.current = setInterval(() => {
      const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setSecondsLeft(left);
      if (left <= 0) {
        clearInterval(timerRef.current);
        localStorage.removeItem(deadlineKey);
        submitRef.current();
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [submitted, timeLimit, storageKey]);

  useEffect(() => {
    localStorage.setItem(`jarkomlab_${storageKey}`, JSON.stringify(answers));
  }, [answers, storageKey]);

  useEffect(() => {
    if (!submitted) {
      localStorage.setItem(`jarkomlab_${storageKey}_order`, JSON.stringify(shuffledQs.map(q => questions.indexOf(q))));
    }
  }, [submitted, storageKey, shuffledQs, questions]);

  // Peringatan anti-contek: monitor pindah tab / keluar saat ujian berlangsung
  const examStarted = Boolean(examToken && tokenOk) || !examToken;
  useEffect(() => {
    if (submitted || !examStarted) return;
    const onVis = () => {
      if (document.hidden) setTabWarns(w => w + 1);
    };
    const onUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('beforeunload', onUnload);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [submitted, examStarted]);

  // Catat waktu mulai ujian (untuk durasi pengerjaan di Rekap)
  useEffect(() => {
    if (submitted || !examStarted) return;
    const startedKey = `jarkomlab_${storageKey}_startedAt`;
    if (!localStorage.getItem(startedKey)) localStorage.setItem(startedKey, String(Date.now()));
  }, [submitted, examStarted, storageKey]);

  const selectOption = (idx) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [currentIdx]: idx }));
  };

  const handleRetry = () => {
    localStorage.removeItem(`jarkomlab_${storageKey}`);
    localStorage.removeItem(`jarkomlab_${storageKey}_submitted`);
    localStorage.removeItem(`jarkomlab_${storageKey}_order`);
    localStorage.removeItem(`jarkomlab_${storageKey}_deadline`);
    localStorage.removeItem(`jarkomlab_${storageKey}_startedAt`);
    forceUnlock();
    setTabWarns(0);
    setAnswers({});
    setCurrentIdx(0);
    setSubmitted(false);
    setSecondsLeft(timeLimit * 60);
  };

  // Token ujian (diberikan guru) — wajib sebelum soal terbuka
  if (examToken && !tokenOk && !submitted) {
    const tryToken = (e) => {
      e.preventDefault();
      if (token.trim() === String(examToken).trim()) {
        setTokenOk(true);
        localStorage.setItem(`jarkomlab_${storageKey}_unlocked`, '1');
      } else {
        setTokenError(true);
        setToken('');
      }
    };
    return (
      <div className="quiz-token-gate">
        <KeyRound size={38} color="#6366f1" />
        <h2>Token Ujian</h2>
        <p className="quiz-token-hint">
          Masukkan token yang diberikan guru untuk membuka soal ujian.
        </p>
        <form onSubmit={tryToken} noValidate>
          <input
            type="text" value={token} autoFocus
            className="calc-input quiz-token-input"
            placeholder="Token ujian"
            onChange={(e) => { setToken(e.target.value); setTokenError(false); }}
            aria-label="Token ujian"
          />
          {tokenError && <p className="identity-error">Token salah. Minta token ke guru.</p>}
          <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
            <KeyRound size={16} /> Buka Soal
          </button>
        </form>
      </div>
    );
  }

  // Result screen
  if (submitted) {
    let correct = 0;
    qs.forEach((q, i) => { if (answers[i] === q.answer) correct++; });
    const score = Math.round((correct / total) * 100);
    const passed = score >= 70;

    return (
      <div className="quiz-result fade-in">
        <div className={`result-circle ${passed ? 'pass' : 'fail'}`}>
          <div className="result-score">{score}</div>
          <div className="result-label">Nilai</div>
        </div>
        <div className="result-status">{passed ? 'Selamat! Kamu Lulus' : 'Belum Memenuhi Target'}</div>
        <p className="result-message">
          {passed ? 'Pemahamanmu sudah bagus! Silakan lanjut ke materi berikutnya.' : 'Target minimum adalah 70. Silakan ulangi materi dan coba lagi.'}
        </p>
        <div className="result-details">
          <div className="result-detail">
            <div className="detail-value" style={{color: 'var(--success)'}}>{correct}</div>
            <div className="detail-label">Benar</div>
          </div>
          <div className="result-detail">
            <div className="detail-value" style={{color: 'var(--danger)'}}>{total - correct}</div>
            <div className="detail-label">Salah</div>
          </div>
          <div className="result-detail">
            <div className="detail-value">{total}</div>
            <div className="detail-label">Total Soal</div>
          </div>
        </div>

        <div className="quiz-review" style={{marginTop: 24, textAlign: 'left'}}>
          <h3 style={{marginBottom: 12}}><Award size={18} style={{verticalAlign: 'middle'}} /> Review Jawaban</h3>
          {qs.map((q, i) => {
            const isCorrect = answers[i] === q.answer;
            return (
              <div key={i} className="review-item" style={{
                padding: 12, marginBottom: 10, borderRadius: 10,
                border: `2px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`,
                background: isCorrect ? '#ecfdf5' : '#fef2f2', cursor: 'pointer'
              }} onClick={() => { setCurrentIdx(i); }}
                role="button" tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCurrentIdx(i); } }}
                aria-label={`Lihat soal ${i + 1}`}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 4}}>
                  <span style={{fontWeight: 700, fontSize: '0.85rem'}}>Soal {i + 1} — {q.level}</span>
                  {isCorrect ? <CheckCircle size={18} color="var(--success)" /> : <XCircle size={18} color="var(--danger)" />}
                </div>
                <p style={{fontSize: '0.82rem', color: 'var(--text-light)', margin: 0}}>
                  Jawaban: {letters[answers[i]] ?? '-'} | Kunci: {letters[q.answer]}
                </p>
                {q.explanation && (
                  <p style={{fontSize: '0.8rem', marginTop: 6, color: 'var(--text)', fontStyle: 'italic', background: 'white', padding: 8, borderRadius: 6}}>
                    {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div style={{textAlign: 'center', marginTop: 20, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap'}}>
          <button className="btn btn-primary" onClick={handleRetry}><RotateCcw size={16} /> Ulangi</button>
        </div>
      </div>
    );
  }

  // Quiz in progress
  const timerM = Math.floor(secondsLeft / 60);
  const timerS = secondsLeft % 60;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="quiz-container">
      {locked && (
        <div className="lock-banner" role="status">
          <Lock size={15} />
          {lockMode === 'fs'
            ? <>Layar terkunci (fullscreen) — navigasi disembunyikan. Jangan tekan <strong>Esc</strong> selama ujian.</>
            : <>Layar terkunci — semua materi & navigasi lain disembunyikan.</>}
        </div>
      )}
      {tabWarns > 0 && (
        <div className={`quiz-tab-warning ${tabWarns >= 3 ? 'critical' : ''}`} role="alert">
          <AlertTriangle size={15} /> Pindah tab/keluar layar terdeteksi ({tabWarns}×) — ini dicatat dan bisa dianggap mencurangi ujian.
        </div>
      )}
      <div className="quiz-header">
        <span className="quiz-progress-text">Soal {currentIdx + 1} dari {total}</span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button type="button" className="btn btn-secondary quiz-lock-btn" onClick={toggleLock}
            aria-pressed={locked} aria-label={locked ? 'Keluar dari kunci layar' : 'Kunci layar (fullscreen)'}>
            {locked ? <Lock size={16} /> : <Maximize2 size={16} />}
            {locked ? 'Terkunci' : 'Kunci Layar'}
          </button>
          <div className="quiz-timer">
            <Clock size={16} />
            <span>{timeLimit ? `${String(timerM).padStart(2, '0')}:${String(timerS).padStart(2, '0')}` : 'Tanpa Batas'}</span>
          </div>
        </div>
      </div>

      {lockMode === 'pseudo' && (
        <div className="lock-pseudo-bar" role="status">
          <Lock size={14} />
          <span>Kunci tanpa fullscreen aktif — menu & materi lain disembunyikan.</span>
          <button type="button" className="lock-pseudo-exit" onClick={toggleLock}>Keluar Kunci</button>
        </div>
      )}

      <div className="quiz-dots" role="tablist" aria-label="Navigasi soal">
        {qs.map((_, i) => (
          <button key={i}
            className={`quiz-dot ${i === currentIdx ? 'current' : ''} ${answers[i] !== undefined ? 'answered' : ''}`}
            onClick={() => setCurrentIdx(i)} role="tab" aria-selected={i === currentIdx}
            aria-label={`Soal ${i + 1}${answers[i] !== undefined ? ' (terjawab)' : ''}`}>
            {i + 1}
          </button>
        ))}
      </div>

      <div className="question-card fade-in" key={currentIdx}>
        <span className="question-number">Soal {currentIdx + 1}</span>
        <div className="question-level">{q.level}</div>
        <p className="question-text">{q.question}</p>
        <div className="options-list">
          {q.options.map((opt, i) => {
            const isSelected = answers[currentIdx] === i;
            return (
              <div key={i} className={`option-item ${isSelected ? 'selected' : ''}`} onClick={() => selectOption(i)}
                role="radio" aria-checked={isSelected} tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectOption(i); }}
                aria-label={`${letters[i]}: ${opt.substring(3)}${isSelected ? ' (terpilih)' : ''}`}>
                <div className="option-letter">{letters[i]}</div>
                <span>{opt.substring(3)}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="quiz-nav">
        <button className="btn btn-secondary" onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0}>
          <ChevronLeft size={16} /> Sebelumnya
        </button>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <span style={{fontSize:'0.85rem',color:'var(--text-light)'}}>
            {answeredCount}/{total} terjawab
          </span>
          <span style={{fontSize:'0.7rem',color:'var(--success)',fontWeight:600}}>
            Tersimpan
          </span>
        </div>
        {currentIdx === total - 1 ? (
          <button className="btn btn-success" onClick={handleSubmit} disabled={answeredCount < total}>
            <CheckCircle size={16} /> Selesai & Lihat Nilai
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => setCurrentIdx(Math.min(total - 1, currentIdx + 1))}>
            Selanjutnya <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}