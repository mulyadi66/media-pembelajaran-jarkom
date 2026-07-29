import { useState, useCallback } from 'react';

const W = 400, H = 300;

function dist(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function calcSignal(d) {
  const raw = -20 - 20 * Math.log10(Math.max(d, 1) / 50);
  return Math.max(-90, Math.min(-30, raw));
}

function signalBars(dbm) {
  if (dbm >= -50) return 5;
  if (dbm >= -65) return 4;
  if (dbm >= -75) return 3;
  if (dbm >= -82) return 2;
  return 1;
}

function signalText(dbm) {
  if (dbm >= -50) return 'Excellent';
  if (dbm >= -65) return 'Good';
  if (dbm >= -75) return 'Fair';
  return 'Weak';
}

function statusColor(dbm) {
  if (dbm >= -50) return '#22c55e';
  if (dbm >= -65) return '#eab308';
  if (dbm >= -75) return '#f97316';
  return '#ef4444';
}

const containerStyle = {
  background: 'var(--sim-bg)', color: 'var(--sim-text)', borderRadius: 12, padding: 20,
  fontFamily: 'system-ui, sans-serif', maxWidth: 480,
};

const canvasWrap = {
  position: 'relative', width: W, height: H, margin: '0 auto',
  border: '1px solid var(--sim-btn)', borderRadius: 8, overflow: 'hidden',
  cursor: 'default', background: 'var(--sim-bg)',
};

const gridCanvas = {
  position: 'absolute', top: 0, left: 0, pointerEvents: 'none',
};

const row = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 };

export default function SignalStrengthVisualizer() {
  const [ap, setAp] = useState({ x: 100, y: 150 });
  const [client, setClient] = useState({ x: 300, y: 150 });
  const [drag, setDrag] = useState(null);

  const handleMouseDown = useCallback((e, target) => {
    e.preventDefault();
    setDrag(target);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!drag) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    x = Math.max(12, Math.min(W - 12, x));
    y = Math.max(12, Math.min(H - 12, y));
    if (drag === 'ap') setAp({ x, y });
    else setClient({ x, y });
  }, [drag]);

  const handleMouseUp = useCallback(() => setDrag(null), []);

  const reset = () => { setAp({ x: 100, y: 150 }); setClient({ x: 300, y: 150 }); };

  const d = dist(ap.x, ap.y, client.x, client.y);
  const dbm = calcSignal(d);
  const bars = signalBars(dbm);
  const status = signalText(dbm);
  const sColor = statusColor(dbm);

  return (
    <div style={containerStyle}>
      <h3 style={{ margin: '0 0 8px', textAlign: 'center', color: 'var(--sim-accent)' }}>
        Signal Strength Visualizer
      </h3>
      <div
        style={canvasWrap}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg width={W} height={H} style={gridCanvas}>
          <defs>
            <pattern id="grid" width={20} height={20} patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2a2a4a" strokeWidth={0.5} />
            </pattern>
          </defs>
          <rect width={W} height={H} fill="url(#grid)" />
        </svg>
        {/* AP */}
        <div
          onMouseDown={e => handleMouseDown(e, 'ap')}
          style={{
            position: 'absolute', left: ap.x - 12, top: ap.y - 12, width: 24, height: 24,
            borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 8, fontWeight: 700, color: 'var(--sim-text)',
            cursor: 'grab', border: '2px solid #60a5fa', zIndex: 2, userSelect: 'none',
          }}
        >
          AP
        </div>
        {/* Client */}
        <div
          onMouseDown={e => handleMouseDown(e, 'client')}
          style={{
            position: 'absolute', left: client.x - 12, top: client.y - 12, width: 24, height: 24,
            borderRadius: '50%', background: '#22c55e', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 7, fontWeight: 700, color: 'var(--sim-text)',
            cursor: 'grab', border: '2px solid #4ade80', zIndex: 2, userSelect: 'none',
          }}
        >
          Client
        </div>
        {/* Connection line */}
        <svg width={W} height={H} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
          <line x1={ap.x} y1={ap.y} x2={client.x} y2={client.y} stroke="#6366f1" strokeWidth={1.5} strokeDasharray="4 3" opacity={0.6} />
        </svg>
      </div>
      <div style={row}>
        <span style={{ fontSize: 13 }}>📏 Distance: <b>{d.toFixed(1)} m</b></span>
        <span style={{ fontSize: 13 }}>📶 Signal: <b style={{ color: sColor }}>{dbm.toFixed(1)} dBm</b></span>
      </div>
      <div style={{ ...row, marginTop: 4 }}>
        <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} style={{
              width: 6, height: 10 + i * 4, borderRadius: '0 0 3px 3px',
              background: i <= bars ? sColor : 'var(--sim-btn)', transition: 'background 0.2s',
            }} />
          ))}
          <span style={{ fontSize: 12, marginLeft: 6 }}>{bars}/5</span>
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: sColor }}>{status}</span>
      </div>
      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <button onClick={reset} style={{
          background: 'var(--sim-accent)', color: 'var(--sim-text)', border: 'none', borderRadius: 6,
          padding: '6px 20px', fontSize: 13, cursor: 'pointer',
        }}>
          Reset Positions
        </button>
      </div>
    </div>
  );
}
