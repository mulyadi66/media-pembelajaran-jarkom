import { useState, useCallback } from 'react';

const W = 400, H = 300;
const SOURCE_TYPES = ['Microwave', 'Bluetooth', 'Cordless Phone', 'Neighbor WiFi'];

function randXY() {
  return { x: 30 + Math.random() * (W - 60), y: 30 + Math.random() * (H - 60) };
}

const containerStyle = {
  background: 'var(--sim-bg)', color: 'var(--sim-text)', borderRadius: 12, padding: 20,
  fontFamily: 'system-ui, sans-serif', maxWidth: 480,
};

const canvasWrap = {
  position: 'relative', width: W, height: H, margin: '0 auto',
  border: '1px solid var(--sim-btn)', borderRadius: 8, overflow: 'hidden',
  background: 'var(--sim-bg)',
};

const row = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 };

export default function InterferenceSimulator() {
  const [sources, setSources] = useState([]);
  const [nextType, setNextType] = useState(0);

  const addSource = useCallback(() => {
    if (sources.length >= 4) return;
    const type = SOURCE_TYPES[nextType % SOURCE_TYPES.length];
    setSources(prev => [...prev, { id: Date.now(), type, ...randXY() }]);
    setNextType(prev => prev + 1);
  }, [sources.length, nextType]);

  const removeSource = useCallback((id) => {
    setSources(prev => prev.filter(s => s.id !== id));
  }, []);

  const reset = () => { setSources([]); setNextType(0); };

  const count = sources.length;
  const quality = Math.max(0, 100 - count * 25);
  const qColor = quality > 70 ? '#22c55e' : quality > 40 ? '#eab308' : '#ef4444';

  return (
    <div style={containerStyle}>
      <h3 style={{ margin: '0 0 8px', textAlign: 'center', color: 'var(--sim-accent)' }}>
        Interference Simulator
      </h3>
      <div style={canvasWrap}>
        <svg width={W} height={H} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
          <defs>
            <pattern id="grid2" width={20} height={20} patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2a2a4a" strokeWidth={0.5} />
            </pattern>
          </defs>
          <rect width={W} height={H} fill="url(#grid2)" />
        </svg>
        {/* AP fixed top-left */}
        <div style={{
          position: 'absolute', left: 16, top: 16, width: 24, height: 24,
          borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 8, fontWeight: 700, color: 'var(--sim-text)',
          border: '2px solid #60a5fa', zIndex: 2,
        }}>AP</div>
        {/* Client fixed bottom-right */}
        <div style={{
          position: 'absolute', left: W - 40, top: H - 40, width: 24, height: 24,
          borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 7, fontWeight: 700, color: 'var(--sim-text)',
          border: '2px solid #4ade80', zIndex: 2,
        }}>Client</div>
        {/* Interference sources */}
        {sources.map(s => (
          <div key={s.id} onClick={() => removeSource(s.id)}
            style={{
              position: 'absolute', left: s.x - 12, top: s.y - 12, width: 24, height: 24,
              borderRadius: '50%', background: '#ef4444', display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 6, fontWeight: 700, color: 'var(--sim-text)',
              border: '2px solid #f87171', cursor: 'pointer', zIndex: 3, userSelect: 'none',
            }}
            title="Click to remove"
          >
            {s.type === 'Neighbor WiFi' ? 'WiFi' : s.type === 'Cordless Phone' ? 'Phone' : s.type === 'Microwave' ? 'M/W' : 'BT'}
          </div>
        ))}
        {sources.map(s => (
          <div key={'l' + s.id} style={{
            position: 'absolute', left: s.x - 44, top: s.y + 14, fontSize: 9, color: '#fca5a5',
            whiteSpace: 'nowrap', pointerEvents: 'none', textAlign: 'center', width: 88,
          }}>
            {s.type}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 10 }}>
        {SOURCE_TYPES.map(t => (
          <button key={t} onClick={addSource} disabled={sources.length >= 4} style={{
            background: sources.length >= 4 ? 'var(--sim-btn)' : 'var(--sim-accent)', color: 'var(--sim-text)',
            border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 12,
            cursor: sources.length >= 4 ? 'not-allowed' : 'pointer', opacity: sources.length >= 4 ? 0.5 : 1,
          }}>
            + {t}
          </button>
        ))}
      </div>
      <div style={row}>
        <span style={{ fontSize: 13 }}>Interference Sources: <b>{count}/4</b></span>
        <span style={{ fontSize: 13 }}>Signal Quality: <b style={{ color: qColor }}>{quality}%</b></span>
      </div>
      <div style={{ marginTop: 4, height: 12, background: 'var(--sim-btn)', borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ width: `${quality}%`, height: '100%', background: qColor, borderRadius: 6, transition: 'all 0.3s' }} />
      </div>
      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <button onClick={reset} style={{
          background: 'var(--sim-accent)', color: 'var(--sim-text)', border: 'none', borderRadius: 6,
          padding: '6px 20px', fontSize: 13, cursor: 'pointer',
        }}>
          Reset
        </button>
      </div>
    </div>
  );
}
