import { useState } from 'react';
import { Blocks, Play, RotateCcw, Lightbulb, Trophy, Lock, Plus, X, Terminal } from 'lucide-react';
import { codeblocksMissions } from '../../data/kka/codeblocksKKA';

const STORE_KEY = 'kka_codeblocks_progress';

function loadProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    return { completed: raw.completed || [], score: raw.score || 0 };
  } catch {
    return { completed: [], score: 0 };
  }
}

export default function CodeBlocksKKA() {
  const initial = loadProgress();
  const [completed, setCompleted] = useState(initial.completed);
  const [score, setScore] = useState(initial.score);
  const [levelIdx, setLevelIdx] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [status, setStatus] = useState('idle');
  const [showHint, setShowHint] = useState(false);

  const mission = codeblocksMissions[levelIdx];
  const blockById = Object.fromEntries(mission.blocks.map(b => [b.id, b]));
  const palette = mission.blocks.filter(b => !answer.includes(b.id));
  const allDone = completed.length === codeblocksMissions.length;
  const pointsFor = (n) => n === 0 ? 100 : n === 1 ? 75 : n === 2 ? 50 : 25;

  const persist = (comp, sc) => {
    setCompleted(comp);
    setScore(sc);
    localStorage.setItem(STORE_KEY, JSON.stringify({ completed: comp, score: sc }));
  };

  const goTo = (idx) => {
    setLevelIdx(idx);
    setAnswer([]);
    setAttempts(0);
    setStatus('idle');
    setShowHint(false);
  };

  const addBlock = (id) => {
    if (status === 'success') return;
    setAnswer(prev => [...prev, id]);
    setStatus('idle');
  };

  const removeBlock = (idx) => {
    if (status === 'success') return;
    setAnswer(prev => prev.filter((_, i) => i !== idx));
    setStatus('idle');
  };

  const insertBlock = (id, at) => {
    if (status === 'success') return;
    setAnswer(prev => [...prev.slice(0, at), id, ...prev.slice(at)]);
    setStatus('idle');
  };

  const moveBlock = (from, to) => {
    if (status === 'success') return;
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
    if (!data) return;
    if (data.src === 'palette') insertBlock(data.id, at);
    else moveBlock(data.index, at);
  };

  const run = () => {
    if (answer.length === 0) return;
    const ok = JSON.stringify(answer) === JSON.stringify(mission.correct);
    if (ok) {
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
    setAnswer([]);
    setAttempts(0);
    setStatus('idle');
    setShowHint(false);
  };

  const nextLevel = () => {
    if (levelIdx < codeblocksMissions.length - 1) goTo(levelIdx + 1);
    else setStatus('idle');
  };

  const locked = (idx) => !completed.includes(codeblocksMissions[idx].id) && idx > 0 && !completed.includes(codeblocksMissions[idx - 1].id);

  if (allDone) {
    return (
      <div className="content-section">
        <div className="materi-card fade-in cb-win">
          <Trophy size={56} color="#f59e0b" style={{ marginBottom: 12 }} />
          <h2 style={{ marginBottom: 8 }}>Selamat! Semua Misi Selesai!</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: 4 }}>
            Kamu telah menyusun <strong>5 program Python</strong> dengan benar.
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
        <h3><Blocks size={20} /> CodeBlocks Puzzle — KKA</h3>
        <p style={{ marginBottom: 20 }}>Susun blok kode Python dengan benar (seret, klik, atau atur ulang) untuk menyelesaikan setiap misi.</p>

        <div className="cb-scorebar">
          <span><Trophy size={14} /> Skor: <strong>{score}</strong></span>
          <span>Misi selesai: {completed.length}/{codeblocksMissions.length}</span>
        </div>

        <div className="cb-missions">
          {codeblocksMissions.map((m, i) => (
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

          <p className="cb-label">Kode yang kamu susun:</p>
          <div className="cb-code">
            {answer.length === 0 ? (
              <div className="cb-code-line muted"># susun blok di bawah untuk membentuk program</div>
            ) : (
              answer.map((id, i) => {
                const b = blockById[id];
                return (
                  <div className="cb-code-line" key={id + i} style={{ paddingLeft: b.indent * 28 }}>
                    {b.text}
                  </div>
                );
              })
            )}
          </div>

          <p className="cb-label">Console:</p>
          <div className="cb-console">
            {status === 'success' ? (
              <pre>{mission.output}</pre>
            ) : (
              <span className="muted">{status === 'wrong' ? 'Program belum menghasilkan output yang diminta...' : 'Klik "Jalankan" untuk melihat hasil'}</span>
            )}
          </div>

          <div className="cb-workspace">
            {answer.map((id, i) => (
              <div key={id + i} className="cb-slot" onDragOver={e => e.preventDefault()} onDrop={e => handleDrop(e, i)}>
                <div className={`cb-block cb-${blockById[id].type} cb-in-workspace`} draggable
                  onDragStart={e => handleDragStart(e, 'answer', id, i)}
                  onClick={() => removeBlock(i)} title="Klik untuk menghapus">
                  {blockById[id].text} <X size={13} className="cb-remove" />
                </div>
              </div>
            ))}
            {answer.length === 0 && <div className="cb-empty-hint">Seret atau klik blok dari kumpulan di bawah</div>}
            <div className="cb-slot cb-slot-add" onDragOver={e => e.preventDefault()} onDrop={e => handleDrop(e, answer.length)}>
              <Plus size={16} /> Tempatkan blok
            </div>
          </div>

          <p className="cb-label">Kumpulan blok (klik untuk menambah):</p>
          <div className="cb-palette">
            {palette.length === 0 && <span className="cb-palette-empty">Semua blok sudah digunakan</span>}
            {palette.map(b => (
              <div key={b.id} className={`cb-block cb-${b.type}`} draggable
                onDragStart={e => handleDragStart(e, 'palette', b.id, -1)}
                onClick={() => addBlock(b.id)}>
                {b.text}
              </div>
            ))}
          </div>

          {(status === 'wrong' || showHint) && (
            <div className={`cb-feedback ${status === 'success' ? 'success' : 'wrong'}`}>
              {status === 'success' ? (
                <><span className="cb-check">&#10003;</span> Misi berhasil! Output sesuai target.</>
              ) : (
                <>
                  <Lightbulb size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} />
                  <strong>Belum tepat.</strong> Coba perhatikan urutan, indentasi, dan titik dua.
                  {showHint && <p className="cb-hint">Petunjuk: {mission.hint}</p>}
                </>
              )}
            </div>
          )}

          {status === 'success' && (
            <div className="cb-success-banner">
              <span className="cb-check">&#10003;</span> Misi {mission.title} selesai!
            </div>
          )}

          <div className="cb-actions">
            <button className="btn btn-primary" onClick={run} disabled={answer.length === 0 || status === 'success'}>
              <Play size={16} /> Jalankan
            </button>
            <button className="btn btn-secondary" onClick={resetMission}>
              <RotateCcw size={16} /> Ulang Misi
            </button>
            {status === 'success' && levelIdx < codeblocksMissions.length - 1 && (
              <button className="btn btn-success" onClick={nextLevel}>
                Misi Berikutnya <span style={{ marginLeft: 4 }}>&rarr;</span>
              </button>
            )}
          </div>
        </div>

        <div className="cb-legend">
          <span><span className="cb-dot cb-statement" /> Perintah</span>
          <span><span className="cb-dot cb-loop" /> Perulangan</span>
          <span><span className="cb-dot cb-condition" /> Percabangan</span>
          <span><Terminal size={14} style={{ verticalAlign: 'middle' }} /> Console output</span>
        </div>
      </div>
    </div>
  );
}
