import { useState } from 'react';
import { Check, Shuffle, RefreshCw } from 'lucide-react';

const WIRE_COLORS = {
  'Putih-Oranye': '#ff9800',
  'Oranye': '#e65100',
  'Putih-Hijau': '#a5d6a7',
  'Hijau': '#2e7d32',
  'Biru': '#1565c0',
  'Putih-Biru': '#90caf9',
  'Coklat': '#4e342e',
  'Putih-Coklat': '#bcaaa4',
};

const T568B = ['Putih-Oranye', 'Oranye', 'Putih-Hijau', 'Biru', 'Putih-Biru', 'Hijau', 'Putih-Coklat', 'Coklat'];
const T568A = ['Putih-Hijau', 'Hijau', 'Putih-Oranye', 'Biru', 'Putih-Biru', 'Oranye', 'Putih-Coklat', 'Coklat'];

export default function CableCrimpingSimulator() {
  const [standard, setStandard] = useState('T568B');
  const correctOrder = standard === 'T568B' ? T568B : T568A;
  const [slots, setSlots] = useState(Array(8).fill(null));
  const [pool, setPool] = useState([...correctOrder].sort(() => Math.random() - 0.5));
  const [result, setResult] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  function reset() {
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);
    setSlots(Array(8).fill(null));
    setPool(shuffled);
    setResult(null);
    setShowAnswer(false);
  }

  function switchStandard(s) {
    setStandard(s);
    const order = s === 'T568B' ? T568B : T568A;
    setSlots(Array(8).fill(null));
    setPool([...order].sort(() => Math.random() - 0.5));
    setResult(null);
    setShowAnswer(false);
  }

  function dropToSlot(wire, slotIdx) {
    const newSlots = [...slots];
    if (newSlots[slotIdx]) {
      setPool(p => [...p, newSlots[slotIdx]]);
    }
    newSlots[slotIdx] = wire;
    setSlots(newSlots);
    setPool(p => p.filter(w => w !== wire));
    setResult(null);
  }

  function removeFromSlot(slotIdx) {
    const wire = slots[slotIdx];
    if (!wire) return;
    setPool(p => [...p, wire]);
    const newSlots = [...slots];
    newSlots[slotIdx] = null;
    setSlots(newSlots);
    setResult(null);
  }

  function check() {
    const filled = slots.every(s => s !== null);
    if (!filled) return;
    const correct = slots.every((w, i) => w === correctOrder[i]);
    setResult(correct);
  }

  return (
    <div className="crimping-sim" style={{ background: '#1e1e2e', borderRadius: 12, padding: 24, color: '#fff' }}>
      <h4 style={{ margin: '0 0 16px', fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
        🔌 Cable Crimping Simulator
      </h4>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <button onClick={() => switchStandard('T568B')} style={btnStyle(standard === 'T568B')}>T568B</button>
        <button onClick={() => switchStandard('T568A')} style={btnStyle(standard === 'T568A')}>T568A</button>
        <button onClick={reset} style={{ ...btnStyle(false), background: '#3b3b52' }}><Shuffle size={14} /> Acak</button>
        <button onClick={check} style={{ ...btnStyle(false), background: '#2563eb' }}><Check size={14} /> Periksa</button>
        <button onClick={() => setShowAnswer(a => !a)} style={{ ...btnStyle(false), background: '#6b21a8' }}><RefreshCw size={14} /> {showAnswer ? 'Sembunyi' : 'Lihat'}</button>
      </div>

      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 8 }}>Slot RJ45 (Pin 1-8)</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, background: '#2a2a3e', padding: 12, borderRadius: 8, border: '2px solid #4a4a6a', minWidth: 180 }}>
            {slots.map((wire, i) => (
              <div
                key={i}
                onClick={() => removeFromSlot(i)}
                onDragOver={e => e.preventDefault()}
                onDrop={e => { e.preventDefault(); const w = e.dataTransfer.getData('wire'); if (w) dropToSlot(w, i); }}
                style={{
                  padding: '8px 12px', borderRadius: 6, cursor: 'pointer',
                  background: wire ? WIRE_COLORS[wire] : '#3a3a52',
                  color: wire ? '#000' : '#666', fontSize: 13, fontWeight: 600,
                  border: showAnswer && (wire !== correctOrder[i]) ? '2px solid #ef4444' : '2px solid transparent',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  opacity: wire ? 1 : 0.5,
                }}
              >
                {wire ? <>{wire} <span style={{ fontSize: 10 }}>Pin {i + 1}</span></> : `Pin ${i + 1}`}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 13, color: '#94a3b8', marginBottom: 8 }}>Kabel Tersedia</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, background: '#2a2a3e', padding: 12, borderRadius: 8, minWidth: 170 }}>
            {pool.length === 0 && <span style={{ color: '#666', fontSize: 13 }}>Semua terpasang</span>}
            {pool.map(wire => (
              <div
                key={wire}
                draggable
                onDragStart={e => e.dataTransfer.setData('wire', wire)}
                style={{
                  padding: '8px 12px', borderRadius: 6, cursor: 'grab',
                  background: WIRE_COLORS[wire], color: '#000', fontSize: 13, fontWeight: 600,
                  border: '2px solid transparent',
                }}
              >{wire}</div>
            ))}
          </div>
        </div>
      </div>

      {result !== null && (
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, background: result ? '#166534' : '#7f1d1d', fontSize: 14 }}>
          {result ? 'Benar! Urutan kabel sesuai standar ' + standard : 'Salah. Coba lagi atau lihat jawaban.'}
        </div>
      )}

      {showAnswer && (
        <div style={{ marginTop: 12, padding: 12, borderRadius: 8, background: '#2d2d44', fontSize: 13 }}>
          Urutan benar: {correctOrder.map((w, i) => <span key={i} style={{ display: 'inline-block', background: WIRE_COLORS[w], color: '#000', padding: '2px 8px', borderRadius: 4, margin: 2, fontWeight: 600 }}>{w}</span>)}
        </div>
      )}
    </div>
  );
}

function btnStyle(active) {
  return {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '8px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
    background: active ? '#6366f1' : '#2d2d44',
    color: '#fff', fontSize: 13, fontWeight: 600,
  };
}
