import { useState, useEffect, useRef } from 'react';
import { Zap, Clock, Trophy, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import { challengeKKAXI } from '../../data/kka-xi/challengeKKAXI';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ChallengePageKKAXI() {
  const [mode, setMode] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [results, setResults] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(120);
  const [selectedCount, setSelectedCount] = useState(10);
  const timerRef = useRef(null);
  const inputRef = useRef(null);
  const finishGameRef = useRef(null);

  const startGame = () => {
    const qs = shuffle(challengeKKAXI).slice(0, selectedCount);
    setQuestions(qs);
    setCurrentIdx(0);
    setUserAnswer('');
    setResults([]);
    setTimeLeft(totalTime);
    setMode('playing');
  };

  useEffect(() => {
    if (mode !== 'playing') return;
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { finishGameRef.current(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [mode]);

  useEffect(() => {
    if (mode === 'playing' && inputRef.current) inputRef.current.focus();
  }, [currentIdx, mode]);

  const submitAnswer = () => {
    const q = questions[currentIdx];
    const isCorrect = q.accept.some(a => a.toLowerCase().trim() === userAnswer.toLowerCase().trim());
    setResults(prev => [...prev, { question: q.q, userAnswer, correctAnswer: q.answer, isCorrect }]);
    setUserAnswer('');
    if (currentIdx + 1 >= questions.length) {
      finishGameRef.current();
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };
  finishGameRef.current = () => {
    clearInterval(timerRef.current);
    setResults(prev => {
      const remaining = questions.slice(currentIdx + 1).map(q => ({
        question: q.q, userAnswer: '-', correctAnswer: q.answer, isCorrect: false
      }));
      return [...prev, ...remaining];
    });
    setMode('done');
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setMode(null);
    setResults([]);
    setCurrentIdx(0);
    setTimeLeft(0);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') submitAnswer();
  };

  const formatTime = (s) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  if (!mode) {
    return (
      <div className="content-section">
        <div className="materi-card fade-in" style={{textAlign:'center', maxWidth: 600, margin: '0 auto'}}>
          <h3><Zap size={20} /> Latihan Cepat KKA XI</h3>
          <p style={{marginBottom: 24, color:'var(--text-light)'}}>
            Uji kecepatanmu menjawab pertanyaan seputar Literasi Digital, Algoritma, dan Web Development!
          </p>
          <div className="calc-grid" style={{marginBottom: 20}}>
            <div className="calc-input-group">
              <label>Jumlah Soal</label>
              <select value={selectedCount} onChange={e => setSelectedCount(Number(e.target.value))}>
                {[5, 10, 15, 20, 30].map(n => <option key={n} value={n}>{n} soal</option>)}
              </select>
            </div>
            <div className="calc-input-group">
              <label>Batas Waktu (detik)</label>
              <select value={totalTime} onChange={e => setTotalTime(Number(e.target.value))}>
                {[30, 60, 90, 120, 180, 300].map(n => <option key={n} value={n}>{n} detik</option>)}
              </select>
            </div>
          </div>
          <button className="btn btn-primary" onClick={startGame} style={{fontSize:'1rem', padding:'12px 32px'}}>
            <Zap size={18} /> Mulai!
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'playing') {
    const q = questions[currentIdx];
    const progress = ((currentIdx) / questions.length) * 100;
    return (
      <div className="content-section">
        <div className="materi-card fade-in" style={{maxWidth:700, margin:'0 auto'}}>
          <div className="challenge-header">
            <div className="quiz-timer" style={{background: timeLeft < 20 ? 'linear-gradient(135deg,#fecaca,#fca5a5)' : undefined, color: timeLeft < 20 ? '#991b1b' : undefined}}>
              <Clock size={16} /> {formatTime(timeLeft)}
            </div>
            <span style={{fontWeight:700, fontSize:'0.9rem'}}>{currentIdx + 1} / {questions.length}</span>
          </div>
          <div className="progress-bar" style={{height:6, marginBottom:20}}>
            <div className="progress-fill" style={{width: progress + '%'}} />
          </div>
          <div className="challenge-question">{q.q}</div>
          <div style={{display:'flex', gap:10, marginTop:16}}>
            <input ref={inputRef} type="text" className="calc-input" style={{flex:1, padding:'12px 16px', fontSize:'1rem'}}
              placeholder="Ketik jawaban lalu Enter..."
              value={userAnswer} onChange={e => setUserAnswer(e.target.value)}
              onKeyDown={handleKey} />
            <button className="btn btn-primary" onClick={submitAnswer}>OK</button>
          </div>
        </div>
      </div>
    );
  }

  const correct = results.filter(r => r.isCorrect).length;
  const score = Math.round((correct / results.length) * 100);
  const timeUsed = totalTime - timeLeft;
  const speedBonus = Math.max(0, Math.round(((totalTime - timeUsed) / totalTime) * 30));
  const finalScore = Math.min(100, score + speedBonus);

  return (
    <div className="content-section">
      <div className="materi-card fade-in" style={{maxWidth:700, margin:'0 auto'}}>
        <div style={{textAlign:'center', marginBottom:20}}>
          <Trophy size={40} style={{color: finalScore >= 70 ? 'var(--success)' : 'var(--danger)'}} />
          <h3 style={{marginTop:8}}>Hasil Latihan Cepat</h3>
        </div>
        <div className="result-details" style={{gridTemplateColumns:'repeat(4,1fr)', marginBottom:20}}>
          <div className="result-detail">
            <div className="detail-value" style={{color:'var(--primary)'}}>{finalScore}</div>
            <div className="detail-label">Skor Akhir</div>
          </div>
          <div className="result-detail">
            <div className="detail-value" style={{color:'var(--success)'}}>{correct}</div>
            <div className="detail-label">Benar</div>
          </div>
          <div className="result-detail">
            <div className="detail-value">{formatTime(timeUsed)}</div>
            <div className="detail-label">Waktu</div>
          </div>
          <div className="result-detail">
            <div className="detail-value" style={{color:'var(--accent)'}}>+{speedBonus}</div>
            <div className="detail-label">Bonus Speed</div>
          </div>
        </div>
        <h4 style={{marginBottom:12}}>Detail Jawaban</h4>
        <div style={{display:'flex', flexDirection:'column', gap:8}}>
          {results.map((r, i) => (
            <div key={i} style={{padding: '10px 14px', borderRadius: 8,
              border: `2px solid ${r.isCorrect ? 'var(--success)' : 'var(--danger)'}`,
              background: r.isCorrect ? '#ecfdf522' : '#fef2f222', fontSize: '0.85rem'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontWeight:600}}>{r.question}</span>
                {r.isCorrect ? <CheckCircle size={16} color="var(--success)" /> : <XCircle size={16} color="var(--danger)" />}
              </div>
              {!r.isCorrect && (
                <div style={{marginTop:4, color:'var(--text-light)', fontSize:'0.82rem'}}>
                  Jawabanmu: <strong>{r.userAnswer || '-'}</strong> | Benar: <strong>{r.correctAnswer}</strong>
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{textAlign:'center', marginTop:20}}>
          <button className="btn btn-primary" onClick={reset}><RotateCcw size={16} /> Coba Lagi</button>
        </div>
      </div>
    </div>
  );
}
