import { useState } from 'react';
import { Bot, User, Sparkles, Trophy, RotateCcw, Zap, Lightbulb, Terminal } from 'lucide-react';
import { aiHumanRounds } from '../../data/kka/aiHumanGameKKA';

const BEST_KEY = 'kka_aihuman_best';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const loadBest = () => {
  try { return Number(localStorage.getItem(BEST_KEY)) || 0; } catch { return 0; }
};

export default function AIorHumanKKA() {
  const [screen, setScreen] = useState('start');
  const [rounds, setRounds] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [picked, setPicked] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [best, setBest] = useState(loadBest);

  const round = rounds[idx];
  const isLast = idx === rounds.length - 1;

  const start = () => {
    setRounds(shuffle(aiHumanRounds));
    setIdx(0);
    setScore(0);
    setStreak(0);
    setPicked(null);
    setCorrectCount(0);
    setScreen('play');
  };

  const pick = (choice) => {
    if (picked) return;
    setPicked(choice);
    const correct = choice === round.answer;
    if (correct) {
      const newStreak = streak + 1;
      const bonus = [2, 4, 6][Math.min(newStreak - 1, 2)];
      setScore(s => s + 10 + bonus);
      setStreak(newStreak);
      setCorrectCount(c => c + 1);
    } else {
      setStreak(0);
    }
  };

  const next = () => {
    if (isLast) {
      const finalScore = score;
      if (finalScore > best) {
        setBest(finalScore);
        localStorage.setItem(BEST_KEY, String(finalScore));
      }
      setScreen('end');
    } else {
      setIdx(i => i + 1);
      setPicked(null);
    }
  };

  if (screen === 'start') {
    return (
      <div className="content-section">
        <div className="materi-card fade-in aih-start">
          <div className="aih-logo"><Sparkles size={40} color="#8b5cf6" /></div>
          <h2 style={{ marginBottom: 8 }}>AI atau Manusia?</h2>
          <p style={{ color: 'var(--text-light)', maxWidth: 520, margin: '0 auto 20px' }}>
            Kamu akan melihat <strong>teks</strong> dan <strong>kode</strong>. Tebak apakah dibuat oleh
            <strong> AI</strong> atau <strong>manusia</strong>! Cocok untuk materi Literasi & Etika Kecerdasan Artifisial.
          </p>

          <div className="aih-tips">
            <p className="aih-tips-title"><Lightbulb size={16} /> Ciri teks buatan AI:</p>
            <ul>
              <li>Dibuka "Tentu!", "Berikut ini..." dan ditutup "Semoga membantu"</li>
              <li>Terlalu rapi, formal, tanpa salah ketik</li>
              <li>Tidak ada opini pribadi atau pengalaman nyata</li>
              <li>Kode penuh komentar yang menjelaskan hal jelas + nama panjang</li>
            </ul>
          </div>

          <button className="btn btn-primary" onClick={start} style={{ marginTop: 8 }}>
            <Zap size={16} /> Mulai (12 Ronde)
          </button>
          {best > 0 && <p style={{ marginTop: 12, fontSize: '0.85rem', color: 'var(--text-light)' }}><Trophy size={14} style={{ verticalAlign: 'middle' }} /> Skor terbaik kamu: <strong>{best}</strong></p>}
        </div>
      </div>
    );
  }

  if (screen === 'end') {
    return (
      <div className="content-section">
        <div className="materi-card fade-in aih-end">
          <Trophy size={52} color="#f59e0b" style={{ marginBottom: 12 }} />
          <h2 style={{ marginBottom: 8 }}>Permainan Selesai!</h2>
          <p className="aih-final-score">{score} poin</p>
          <p style={{ color: 'var(--text-light)' }}>
            Jawaban benar: <strong>{correctCount}</strong> dari {rounds.length} ronde
          </p>
          <p style={{ color: 'var(--text-light)' }}>
            10 poin per tebakan benar + bonus streak beruntun (2/4/6). Skor maksimal: <strong>186</strong>
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
            Skor terbaik: <strong>{best}</strong>
            {best === score && <span style={{ color: 'var(--success)' }}> (rekor baru!)</span>}
          </p>
          <div className="aih-actions">
            <button className="btn btn-primary" onClick={start}><RotateCcw size={16} /> Main Lagi</button>
            <button className="btn btn-secondary" onClick={() => setScreen('start')}>Kembali ke Petunjuk</button>
          </div>
        </div>
      </div>
    );
  }

  const correct = picked === round.answer;
  const showStreak = picked && correct;

  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <div className="aih-topbar">
          <div>
            <span className="aih-count">Ronde {idx + 1}/{rounds.length}</span>
            <span className={`aih-type ${round.type}`}>
              {round.type === 'kode' ? <><Terminal size={12} /> Kode</> : 'Teks'}
            </span>
          </div>
          <div className="aih-score"><Trophy size={14} /> {score} poin</div>
        </div>

        <div className="aih-streak">
          {showStreak && <span className="aih-streak-on"><Zap size={13} /> Streak {streak}x (+{[2, 4, 6][Math.min(streak - 1, 2)]})</span>}
        </div>

        <div className={`aih-content ${round.type === 'kode' ? 'aih-code' : 'aih-teks'}`}>
          {round.type === 'kode' ? (
            <pre className="code-block aih-codeblock">{round.content}</pre>
          ) : (
            <p>{round.content}</p>
          )}
        </div>

        <p className="aih-question">Menurut kamu, konten di atas dibuat oleh siapa?</p>

        <div className="aih-choices">
          <button className={`aih-choice ai-choice ${picked === 'ai' ? (correct ? 'correct' : 'wrong') : ''}`} onClick={() => pick('ai')} disabled={!!picked}>
            <Bot size={28} /> <span>Dibuat <strong>AI</strong></span>
          </button>
          <button className={`aih-choice human-choice ${picked === 'manusia' ? (correct ? 'correct' : 'wrong') : ''}`} onClick={() => pick('manusia')} disabled={!!picked}>
            <User size={28} /> <span>Dibuat <strong>Manusia</strong></span>
          </button>
        </div>

        {picked && (
          <div className={`aih-result ${correct ? 'success' : 'wrong'}`}>
            <p className="aih-result-title">
              {correct ? <><span className="cb-check">&#10003;</span> Benar! +{10 + (showStreak ? [2, 4, 6][Math.min(streak - 1, 2)] : 0)} poin</> : <><span>&#10007;</span> Salah! Jawabannya: {round.answer === 'ai' ? 'AI' : 'Manusia'}</>}
            </p>
            <p className="aih-result-sub">Kenapa? Ciri-cirinya:</p>
            <ul className="aih-signs">
              {round.signs.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
            <button className="btn btn-primary" onClick={next} style={{ marginTop: 12 }}>
              {isLast ? 'Lihat Hasil' : 'Lanjut'} <span style={{ marginLeft: 4 }}>&rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
