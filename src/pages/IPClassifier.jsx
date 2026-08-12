import { useState } from 'react';
import { Gauge, Zap, Trophy, RotateCcw, Lightbulb, Network, Hash, Globe, Ruler, Layers } from 'lucide-react';
import { ipRounds, ipTypeLabels } from '../data/ipClassifier';

const BEST_KEY = 'mpk1_ipclassifier_best';

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

const typeIcon = {
  kelas: Network,
  jenis: Globe,
  host: Hash,
  subnet: Layers,
};

const typeColor = {
  kelas: '#6366f1',
  jenis: '#0ea5e9',
  host: '#f59e0b',
  subnet: '#10b981',
};

export default function IPClassifier() {
  const [screen, setScreen] = useState('start');
  const [rounds, setRounds] = useState([]);
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [picked, setPicked] = useState(null);
  const [options, setOptions] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [best, setBest] = useState(loadBest);

  const round = rounds[idx];
  const isLast = idx === rounds.length - 1;

  const start = () => {
    const shuffled = shuffle(ipRounds);
    setRounds(shuffled);
    setIdx(0);
    setScore(0);
    setStreak(0);
    setPicked(null);
    setCorrectCount(0);
    setOptions(shuffle(shuffled[0].options));
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
      setOptions(shuffle(rounds[idx + 1].options));
    }
  };

  if (screen === 'start') {
    return (
      <div className="content-section">
        <div className="materi-card fade-in aih-start">
          <div className="aih-logo" style={{ background: 'linear-gradient(135deg,#14b8a6,#0d9488)', color: 'white' }}>
            <Gauge size={40} />
          </div>
          <h2 style={{ marginBottom: 8 }}>IP Quick Tap</h2>
          <p style={{ color: 'var(--text-light)', maxWidth: 520, margin: '0 auto 20px' }}>
            Uji kecepatanmu mengklasifikasikan <strong>IP address</strong>! Tebak <strong>kelas IP</strong>,
            <strong> private/public</strong>, jumlah <strong>usable host</strong>, dan hasil <strong>subnetting</strong>.
          </p>

          <div className="aih-tips">
            <p className="aih-tips-title"><Lightbulb size={16} /> Ingat cepat:</p>
            <ul>
              <li>Kelas A (1–126) /8, Kelas B (128–191) /16, Kelas C (192–223) /24</li>
              <li>Private: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16</li>
              <li>Usable host = 2^(32−prefix) − 2</li>
              <li>Jumlah subnet = 2^(prefix baru − prefix lama)</li>
            </ul>
          </div>

          <button className="btn btn-primary" onClick={start} style={{ marginTop: 8 }}>
            <Zap size={16} /> Mulai (22 Ronde)
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
            10 poin per tebakan benar + bonus streak beruntun (2/4/6). Skor maksimal: <strong>220</strong>
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
  const TypeIcon = typeIcon[round.type];

  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <div className="aih-topbar">
          <div>
            <span className="aih-count">Ronde {idx + 1}/{rounds.length}</span>
            <span className="aih-type" style={{ background: typeColor[round.type] + '22', color: typeColor[round.type] }}>
              <TypeIcon size={12} /> {ipTypeLabels[round.type]}
            </span>
          </div>
          <div className="aih-score"><Trophy size={14} /> {score} poin</div>
        </div>

        <div className="aih-streak">
          {showStreak && <span className="aih-streak-on"><Zap size={13} /> Streak {streak}x (+{[2, 4, 6][Math.min(streak - 1, 2)]})</span>}
        </div>

        <div className="ipt-question">
          <Ruler size={18} aria-hidden="true" />
          <h3>{round.q}</h3>
        </div>

        <div className="ipt-choices">
          {options.map(opt => (
            <button key={opt} className={`ipt-choice ${picked === opt ? (correct ? 'correct' : 'wrong') : ''}`}
              onClick={() => pick(opt)} disabled={!!picked}>
              {opt}
            </button>
          ))}
        </div>

        {picked && (
          <div className={`aih-result ${correct ? 'success' : 'wrong'}`}>
            <p className="aih-result-title">
              {correct ? <><span className="cb-check">&#10003;</span> Benar! +{10 + (showStreak ? [2, 4, 6][Math.min(streak - 1, 2)] : 0)} poin</>
                : <><span>&#10007;</span> Salah! Jawabannya: <strong>{round.answer}</strong></>}
            </p>
            <p className="aih-result-sub">Pembahasan: {round.info}</p>
            <button className="btn btn-primary" onClick={next} style={{ marginTop: 12 }}>
              {isLast ? 'Lihat Hasil' : 'Lanjut'} <span style={{ marginLeft: 4 }}>&rarr;</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
