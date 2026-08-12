import { useState, useEffect, useRef } from 'react';
import { Cable, Play, RotateCcw, Lightbulb, Trophy, Lock, X, CheckCircle2, BookOpen, AlarmClock } from 'lucide-react';
import { wiringMissions, wiringCables, standardsReference } from '../data/wiringPuzzle';

const STORE_KEY = 'mpk1_wiring_progress';

function loadProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    return { completed: raw.completed || [], score: raw.score || 0 };
  } catch {
    return { completed: [], score: 0 };
  }
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function CableChip({ id, filled, onClick, title }) {
  const c = wiringCables[id];
  return (
    <div className={`wpl-cable ${filled ? 'filled' : ''}`}
      style={{ '--wc': c.color }}
      onClick={onClick}
      title={title}>
      <span className="wpl-cable-bar" />
      <span className="wpl-cable-name">{c.name}</span>
      {filled && <X size={13} className="cb-remove" />}
    </div>
  );
}

export default function WiringPuzzle() {
  const initial = loadProgress();
  const [completed, setCompleted] = useState(initial.completed);
  const [score, setScore] = useState(initial.score);
  const [levelIdx, setLevelIdx] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState('idle');
  const [showHint, setShowHint] = useState(false);
  const [showRef, setShowRef] = useState(false);
  const [palette, setPalette] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef(null);

  const mission = wiringMissions[levelIdx];
  const allDone = completed.length === wiringMissions.length;
  const pointsFor = (n) => n === 0 ? 100 : n === 1 ? 75 : n === 2 ? 50 : 25;

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTimeLeft(0);
  };

  const persist = (comp, sc) => {
    setCompleted(comp);
    setScore(sc);
    localStorage.setItem(STORE_KEY, JSON.stringify({ completed: comp, score: sc }));
  };

  const goTo = (idx) => {
    resetTimer();
    setLevelIdx(idx);
    setAnswer([]);
    setAttempts(0);
    setStatus('idle');
    setShowHint(false);
    setPalette(shuffle(wiringMissions[idx].correct));
    if (wiringMissions[idx].timed) setTimeLeft(wiringMissions[idx].timeLimit);
  };

  const startTimer = () => {
    if (!mission.timed || timeLeft <= 0) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timerRef.current); setStatus('timeout'); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (levelIdx >= 0 && palette.length === 0) {
      setPalette(shuffle(mission.correct));
      if (mission.timed) setTimeLeft(mission.timeLimit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (status === 'idle' && mission.timed && timeLeft > 0 && timeLeft < mission.timeLimit) startTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer]);

  const addCable = (id) => {
    if (status === 'success' || status === 'timeout' || answer.length >= 8) return;
    setAnswer(prev => [...prev, id]);
    setStatus('idle');
    if (mission.timed && timeLeft === mission.timeLimit) startTimer();
  };

  const removeCable = (idx) => {
    if (status === 'success' || status === 'timeout') return;
    setAnswer(prev => prev.filter((_, i) => i !== idx));
    setStatus('idle');
  };

  const insertCable = (id, at) => {
    if (status === 'success' || status === 'timeout') return;
    setAnswer(prev => [...prev.slice(0, at), id, ...prev.slice(at)]);
    setStatus('idle');
  };

  const moveCable = (from, to) => {
    if (status === 'success' || status === 'timeout') return;
    setAnswer(prev => {
      const next = [...prev];
      const [item] = next.splice(from, 1);
      next.splice(to > from ? to - 1 : to, 0, item);
      return next;
    });
    setStatus('idle');
  };

  const handleDragStart = (e, src, id, index) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ src, id, index }));
  };

  const handleDrop = (e, at) => {
    e.preventDefault();
    let data;
    try { data = JSON.parse(e.dataTransfer.getData('text/plain')); } catch { return; }
    if (!data || status === 'success' || status === 'timeout') return;
    if (data.src === 'palette') insertCable(data.id, at);
    else moveCable(data.index, at);
  };

  const check = () => {
    if (answer.length !== 8) return;
    const ok = JSON.stringify(answer) === JSON.stringify(mission.correct);
    if (ok) {
      clearInterval(timerRef.current);
      persist([...new Set([...completed, mission.id])], score + pointsFor(attempts));
      setStatus('success');
    } else {
      const nextAttempts = attempts + 1;
      setAttempts(nextAttempts);
      setStatus('wrong');
      if (nextAttempts >= 3) setShowHint(true);
    }
  };

  const resetMission = () => {
    clearInterval(timerRef.current);
    setAnswer([]);
    setAttempts(0);
    setStatus('idle');
    setShowHint(false);
    setPalette(shuffle(mission.correct));
    if (mission.timed) setTimeLeft(mission.timeLimit);
  };

  const nextLevel = () => {
    if (levelIdx < wiringMissions.length - 1) goTo(levelIdx + 1);
  };

  const locked = (idx) =>
    !completed.includes(wiringMissions[idx].id) && idx > 0 && !completed.includes(wiringMissions[idx - 1].id);

  const formatTime = (s) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;
  const lowTime = mission.timed && timeLeft <= 10 && timeLeft > 0;

  if (allDone) {
    return (
      <div className="content-section">
        <div className="materi-card fade-in cb-win">
          <Trophy size={56} color="#f59e0b" style={{ marginBottom: 12 }} />
          <h2 style={{ marginBottom: 8 }}>Semua Misi Selesai!</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: 4 }}>
            Kamu menguasai urutan kabel <strong>T568A &amp; T568B</strong> serta kabel crossover.
          </p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
            Berlatihlah lagi untuk meraih skor sempurna.
          </p>
          <button className="btn btn-primary" onClick={() => { persist([], 0); goTo(0); }} style={{ marginTop: 16 }}>
            <RotateCcw size={16} /> Main Lagi dari Awal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0 }}><Cable size={20} /> Wiring Puzzle RJ-45</h3>
          <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '6px 12px' }} onClick={() => setShowRef(v => !v)}>
            <BookOpen size={14} /> {showRef ? 'Sembunyikan' : 'Lihat'} Standar Warna
          </button>
        </div>
        <p style={{ marginBottom: 16 }}>Susun 8 kabel sesuai urutan pin standar TIA/EIA-568. Klik atau seret kabel dari palet ke slot pin.</p>

        {showRef && (
          <div className="wpl-ref">
            <div className="table-responsive">
              <table className="materi-table">
                <thead><tr><th>Pin</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th></tr></thead>
                <tbody>
                  {standardsReference.map(s => (
                    <tr key={s.standard}>
                      <td><strong>{s.standard}</strong></td>
                      {s.order.map((id, i) => (
                        <td key={i}><span className="wpl-mini" style={{ '--wc': wiringCables[id].color }}>{wiringCables[id].short}</span></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="cb-scorebar">
          <span><Trophy size={14} /> Skor: <strong>{score}</strong></span>
          <span>Misi selesai: {completed.length}/{wiringMissions.length}</span>
          {mission.timed && status !== 'success' && (
            <span className={`wpl-timer ${lowTime ? 'low' : ''}`}><AlarmClock size={14} /> {formatTime(timeLeft)}</span>
          )}
        </div>

        <div className="cb-missions">
          {wiringMissions.map((m, i) => (
            <button key={m.id} className={`cb-chip ${i === levelIdx ? 'active' : ''} ${completed.includes(m.id) ? 'done' : ''} ${locked(i) ? 'locked' : ''}`}
              onClick={() => !locked(i) && goTo(i)} disabled={locked(i)}>
              {locked(i) ? <Lock size={12} /> : completed.includes(m.id) ? <span className="cb-check">&#10003;</span> : i + 1}
            </button>
          ))}
        </div>

        <div className="cb-mission-card">
          <div className="cb-mission-head">
            <span className="cb-mission-badge">{mission.title}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Poin jika benar: {pointsFor(attempts)}</span>
          </div>
          <p className="cb-mission-desc">{mission.mission}</p>

          <div className="wpl-board">
            <div className="wpl-board-head">
              <span>Ujung Kabel</span>
              <span className="wpl-connector">RJ-45</span>
            </div>
            <div className="cb-workspace wpl-slots">
              {answer.map((id, i) => (
                <div key={id + i} className="cb-slot wpl-slot" style={{ '--wc': wiringCables[id].color }}
                  onDragOver={e => e.preventDefault()} onDrop={e => handleDrop(e, i)}>
                  <span className="wpl-pin">{i + 1}</span>
                  <CableChip id={id} filled onClick={() => removeCable(i)} title="Klik untuk menghapus" />
                </div>
              ))}
              {answer.length < 8 && (
                <div className="cb-slot wpl-slot wpl-slot-empty" style={{ '--wc': '#94a3b8' }}
                  onDragOver={e => e.preventDefault()} onDrop={e => handleDrop(e, answer.length)}>
                  <span className="wpl-pin">{answer.length + 1}</span>
                  <span className="wpl-empty">Pin {answer.length + 1}</span>
                </div>
              )}
            </div>
            <div className="wpl-jacket" />
          </div>

          {mission.pair && (
            <p className="wpl-pair"><Lightbulb size={14} /> {mission.pair}</p>
          )}

          <p className="cb-label">Palet kabel (klik untuk menambah, atau seret):</p>
          <div className="cb-palette">
            {palette.length === 0 && <span className="cb-palette-empty">Semua kabel sudah digunakan</span>}
            {palette.map(cid => (
              <div key={cid} className="wpl-palette-item" draggable
                onDragStart={e => handleDragStart(e, 'palette', cid, -1)}
                onClick={() => addCable(cid)}>
                <CableChip id={cid} title="Klik untuk menambah" />
              </div>
            ))}
          </div>

          {(status === 'wrong' || status === 'timeout') && (
            <div className="cb-feedback wrong">
              {status === 'timeout' ? (
                <><AlarmClock size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /><strong>Waktu habis!</strong> Susun ulang dan coba lagi.</>
              ) : (
                <>
                  <Lightbulb size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                  <strong>Belum tepat.</strong> Periksa kembali urutan pin-nya.
                  {showHint && <p className="cb-hint">Petunjuk: {mission.tip}</p>}
                </>
              )}
            </div>
          )}

          {status === 'success' && (
            <div className="cb-success-banner">
              <CheckCircle2 size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Misi {mission.title} selesai! Urutan kabel benar.
            </div>
          )}

          <div className="cb-actions">
            <button className="btn btn-primary" onClick={check} disabled={answer.length !== 8 || status === 'success' || status === 'timeout'}>
              <Play size={16} /> Periksa Urutan
            </button>
            <button className="btn btn-secondary" onClick={resetMission}>
              <RotateCcw size={16} /> Ulang Misi
            </button>
            {status === 'success' && levelIdx < wiringMissions.length - 1 && (
              <button className="btn btn-success" onClick={nextLevel}>
                Misi Berikutnya <span style={{ marginLeft: 4 }}>&rarr;</span>
              </button>
            )}
          </div>
        </div>

        <div className="cb-legend">
          <span><span className="wpl-dot" style={{ background: '#f97316' }} /> Oranye</span>
          <span><span className="wpl-dot" style={{ background: '#22c55e' }} /> Hijau</span>
          <span><span className="wpl-dot" style={{ background: '#60a5fa' }} /> Biru</span>
          <span><span className="wpl-dot" style={{ background: '#92400e' }} /> Coklat</span>
          <span><Cable size={14} style={{ verticalAlign: 'middle' }} /> Strip = warna putih kombinasi</span>
        </div>
      </div>
    </div>
  );
}
