import { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, Clock, Award, RotateCcw, BarChart3 } from 'lucide-react';

export default function Quiz({ questions, storageKey, timeLimit, onScoreSubmit }) {
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem(`jarkomlab_${storageKey}`);
    return saved ? JSON.parse(saved) : {};
  });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem(`jarkomlab_${storageKey}_submitted`) === 'true';
  });
  const [secondsLeft, setSecondsLeft] = useState(timeLimit * 60);
  const timerRef = useRef(null);

  const q = questions[currentIdx];
  const total = questions.length;
  const letters = ['A', 'B', 'C', 'D', 'E'];

  useEffect(() => {
    if (submitted || !timeLimit) return;
    timerRef.current = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [submitted, timeLimit]);

  useEffect(() => {
    localStorage.setItem(`jarkomlab_${storageKey}`, JSON.stringify(answers));
  }, [answers, storageKey]);

  const selectOption = (idx) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [currentIdx]: idx }));
  };

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    localStorage.setItem(`jarkomlab_${storageKey}_submitted`, 'true');
    setSubmitted(true);
    let correct = 0;
    questions.forEach((q, i) => { if (answers[i] === q.answer) correct++; });
    const score = Math.round((correct / total) * 100);
    onScoreSubmit(score);
  };

  const handleRetry = () => {
    localStorage.removeItem(`jarkomlab_${storageKey}`);
    localStorage.removeItem(`jarkomlab_${storageKey}_submitted`);
    setAnswers({});
    setCurrentIdx(0);
    setSubmitted(false);
    setSecondsLeft(timeLimit * 60);
  };

  const handleViewDetail = (idx) => {
    setCurrentIdx(idx);
  };

  // Result screen
  if (submitted) {
    let correct = 0;
    questions.forEach((q, i) => { if (answers[i] === q.answer) correct++; });
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

        {/* Review section */}
        <div className="quiz-review" style={{marginTop: '24px', textAlign: 'left'}}>
          <h3 style={{marginBottom: '12px'}}><Award size={18} style={{verticalAlign: 'middle'}} /> Review Jawaban</h3>
          {questions.map((q, i) => {
            const isCorrect = answers[i] === q.answer;
            return (
              <div key={i} className="review-item" style={{
                padding: '12px', marginBottom: '10px', borderRadius: '10px',
                border: `2px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`,
                background: isCorrect ? '#ecfdf5' : '#fef2f2', cursor: 'pointer'
              }} onClick={() => handleViewDetail(i)}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: '4px'}}>
                  <span style={{fontWeight: 700, fontSize: '0.85rem'}}>Soal {i + 1} — {q.level}</span>
                  {isCorrect
                    ? <CheckCircle size={18} color="var(--success)" />
                    : <XCircle size={18} color="var(--danger)" />
                  }
                </div>
                <p style={{fontSize: '0.82rem', color: 'var(--text-light)', margin: 0}}>
                  Jawaban kamu: {letters[answers[i]] ?? '-'} | Kunci: {letters[q.answer]}
                </p>
                {!isCorrect && (
                  <p style={{fontSize: '0.8rem', marginTop: '6px', color: 'var(--text)', fontStyle: 'italic'}}>
                    {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div style={{textAlign: 'center', marginTop: '20px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap'}}>
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
        <div className="quiz-timer">
          <Clock size={16} />
          <span>{timeLimit ? `${String(timerM).padStart(2, '0')}:${String(timerS).padStart(2, '0')}` : 'Tanpa Batas'}</span>
        </div>
      </div>

      {/* Progress dots */}
      <div className="quiz-dots">
        {questions.map((_, i) => (
          <button
            key={i}
            className={`quiz-dot ${i === currentIdx ? 'current' : ''} ${answers[i] !== undefined ? 'answered' : ''}`}
            onClick={() => setCurrentIdx(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="question-card fade-in" key={currentIdx}>
        <span className="question-number">Soal {currentIdx + 1}</span>
        <div className="question-level">{q.level}</div>
        <p className="question-text">{q.question}</p>
        <div className="options-list">
          {q.options.map((opt, i) => (
            <div
              key={i}
              className={`option-item ${answers[currentIdx] === i ? 'selected' : ''}`}
              onClick={() => selectOption(i)}
            >
              <div className="option-letter">{letters[i]}</div>
              <span>{opt.substring(3)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="quiz-nav">
        <button className="btn btn-secondary" onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0}>
          <ChevronLeft size={16} /> Sebelumnya
        </button>
        <div style={{fontSize: '0.85rem', color: 'var(--text-light)'}}>
          {answeredCount}/{total} terjawab
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
