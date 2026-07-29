import { useState, useEffect, useRef, useCallback } from 'react';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, Clock, Award, RotateCcw, Eye } from 'lucide-react';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Quiz({ questions, storageKey, timeLimit, onScoreSubmit, mode: initialMode }) {
  const [mode, setMode] = useState(initialMode || null); // null = not chosen, 'practice', 'exam'
  const [shuffledQs] = useState(() => shuffleArray(questions));
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem(`jarkomlab_${storageKey}`);
    return saved ? JSON.parse(saved) : {};
  });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem(`jarkomlab_${storageKey}_submitted`) === 'true';
  });
  const [showExplanation, setShowExplanation] = useState({});
  const [secondsLeft, setSecondsLeft] = useState(timeLimit * 60);
  const timerRef = useRef(null);

  const qs = mode === 'exam' ? shuffledQs : questions;
  const q = qs[currentIdx];
  const total = qs.length;
  const letters = ['A', 'B', 'C', 'D', 'E'];

  useEffect(() => {
    if (submitted || !timeLimit || mode !== 'exam') return;
    timerRef.current = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) { clearInterval(timerRef.current); handleSubmit(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [submitted, timeLimit, mode, handleSubmit]);

  useEffect(() => {
    localStorage.setItem(`jarkomlab_${storageKey}`, JSON.stringify(answers));
  }, [answers, storageKey]);

  const selectOption = (idx) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [currentIdx]: idx }));
    if (mode === 'practice') {
      setShowExplanation(prev => ({ ...prev, [currentIdx]: true }));
    }
  };

  const handleSubmit = useCallback(() => {
    clearInterval(timerRef.current);
    localStorage.setItem(`jarkomlab_${storageKey}_submitted`, 'true');
    setSubmitted(true);
    let correct = 0;
    qs.forEach((q, i) => { if (answers[i] === q.answer) correct++; });
    const score = Math.round((correct / total) * 100);
    onScoreSubmit(score);
  }, [answers, qs, total, onScoreSubmit, storageKey]);

  const handleRetry = () => {
    localStorage.removeItem(`jarkomlab_${storageKey}`);
    localStorage.removeItem(`jarkomlab_${storageKey}_submitted`);
    setAnswers({});
    setCurrentIdx(0);
    setSubmitted(false);
    setShowExplanation({});
    setSecondsLeft(timeLimit * 60);
    setMode(null);
  };

  // Mode selection
  if (!mode && !submitted) {
    return (
      <div className="quiz-mode-select">
        <h2>Pilih Mode</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: 24 }}>
          {storageKey.includes('pre') ? 'Pre-Test' : 'Post-Test'} — {questions.length} soal HOTS
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 500 }} role="radiogroup" aria-label="Pilih mode quiz">
          <button className="mode-card" onClick={() => setMode('practice')} role="radio" aria-checked={mode === 'practice'}>
            <Eye size={32} color="#6366f1" />
            <h3>Latihan</h3>
            <p>Tanpa timer, langsung lihat pembahasan setiap soal</p>
          </button>
          <button className="mode-card" onClick={() => setMode('exam')} role="radio" aria-checked={mode === 'exam'}>
            <Clock size={32} color="#ef4444" />
            <h3>Ujian</h3>
            <p>Timer {timeLimit} menit, soal diacak, nilai terekam</p>
          </button>
        </div>
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
              }} onClick={() => { setCurrentIdx(i); setShowExplanation(prev => ({...prev, [i]: true})); }}>
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
      <div className="quiz-header">
        <span className="quiz-progress-text">Soal {currentIdx + 1} dari {total}</span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {mode === 'exam' && (
            <div className="quiz-timer">
              <Clock size={16} />
              <span>{timeLimit ? `${String(timerM).padStart(2, '0')}:${String(timerS).padStart(2, '0')}` : 'Tanpa Batas'}</span>
            </div>
          )}
          {mode === 'practice' && (
            <div className="quiz-timer" style={{ background: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)', color: '#4338ca' }}>
              <Eye size={16} /> Latihan
            </div>
          )}
        </div>
      </div>

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

      <div className="question-card fade-in" key={currentIdx + (mode || '')}>
        <span className="question-number">Soal {currentIdx + 1}</span>
        <div className="question-level">{q.level}</div>
        <p className="question-text">{q.question}</p>
        <div className="options-list">
          {q.options.map((opt, i) => {
            const isSelected = answers[currentIdx] === i;
            const isCorrect = i === q.answer;
            const showResult = mode === 'practice' && showExplanation[currentIdx];
            let cls = '';
            if (isSelected) cls = 'selected';
            if (showResult && isCorrect) cls = 'correct';
            if (showResult && isSelected && !isCorrect) cls = 'wrong';

            return (
              <div key={i} className={`option-item ${cls}`} onClick={() => selectOption(i)}
                role="radio" aria-checked={isSelected} tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') selectOption(i); }}
                aria-label={`${letters[i]}: ${opt.substring(3)}${isSelected ? ' (terpilih)' : ''}`}>
                <div className="option-letter">{letters[i]}</div>
                <span>{opt.substring(3)}</span>
                {showResult && isCorrect && <CheckCircle size={16} color="var(--success)" style={{marginLeft: 'auto'}} aria-hidden="true" />}
                {showResult && isSelected && !isCorrect && <XCircle size={16} color="var(--danger)" style={{marginLeft: 'auto'}} aria-hidden="true" />}
              </div>
            );
          })}
        </div>

        {mode === 'practice' && showExplanation[currentIdx] && q.explanation && (
          <div className="info-box" style={{ marginTop: 16 }}>
            <strong><Award size={14} /> Pembahasan</strong>
            <p>{q.explanation}</p>
          </div>
        )}
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
          <button className="btn btn-success" onClick={handleSubmit} disabled={mode === 'exam' && answeredCount < total}>
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
