import { useState } from 'react';

const EVENTS = [
  { id: 1, distance: 5, type: 'Splice Loss', loss: 0.08, color: '#3b82f6', detected: false },
  { id: 2, distance: 10, type: 'Connector', loss: 0.15, color: '#eab308', detected: false },
  { id: 3, distance: 15, type: 'Break', loss: null, color: '#ef4444', detected: false },
];

const END_FIBER = 18;
const MAX_DIST = 20;
const VIEW_W = 500;
const VIEW_H = 200;

function generateTracePoints() {
  const pts = [];
  for (let x = 0; x <= VIEW_W; x++) {
    const dist = (x / VIEW_W) * MAX_DIST;
    let y;
    if (dist < 0.5) {
      y = 0;
    } else if (dist < 0.8) {
      const t = (dist - 0.5) / 0.3;
      y = 200 - t * 170;
    } else if (dist < 4.5) {
      const slope = (170 - 80) / (4.5 - 0.8);
      y = 200 - (170 - (dist - 0.8) * slope);
    } else if (dist < 5.5) {
      const dropY = 200 - 80;
      const t = (dist - 4.5) / 1.0;
      y = dropY + t * 15;
      y = 200 - (80 - t * 15);
    } else if (dist < 9.5) {
      const baseY = 200 - 95;
      const slope = 15 / 4;
      y = baseY + (dist - 5.5) * slope;
      y = 200 - (95 - (dist - 5.5) * slope);
    } else if (dist < 10.5) {
      const bumpY = 200 - 80;
      const t = (dist - 9.5) / 1.0;
      y = 200 - (80 - t * 10 * Math.sin(t * Math.PI));
    } else if (dist < 14.5) {
      const slope = 10 / 4;
      const base = 200 - 80;
      y = base + (dist - 10.5) * slope;
      y = 200 - (80 - (dist - 10.5) * slope);
    } else if (dist < 15.5) {
      const t = (dist - 14.5) / 1.0;
      y = 200 - (70 - t * 50);
    } else if (dist < 18) {
      const noise = Math.sin(dist * 20) * 3 + Math.sin(dist * 7) * 2;
      y = 200 - (20 + noise);
    } else {
      const noise = Math.sin(dist * 20) * 2;
      y = 200 - (8 + noise);
    }
    pts.push(`${x},${Math.max(0, Math.min(VIEW_H, Math.round(y)))}`);
  }
  return pts.join(' ');
}

function eventX(dist) {
  return (dist / MAX_DIST) * VIEW_W;
}

function distFromX(x) {
  return ((x - 30) / (VIEW_W - 60)) * MAX_DIST;
}

export default function OTDRTraceReader() {
  const [events, setEvents] = useState(EVENTS.map(e => ({ ...e, detected: false })));
  const [selectedTool, setSelectedTool] = useState('cursor');
  const [markers, setMarkers] = useState([]);
  const [autoAnalyzed, setAutoAnalyzed] = useState(false);

  const tracePoints = generateTracePoints();

  function handleSvgClick(e) {
    if (selectedTool !== 'marker') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * VIEW_W;
    const dist = ((x - 30) / (VIEW_W - 60)) * MAX_DIST;
    if (dist < 0 || dist > MAX_DIST) return;
    setMarkers(m => {
      const existing = m.find(mk => Math.abs(mk.dist - dist) < 0.5);
      if (existing) return m.filter(mk => mk.id !== existing.id);
      return [...m, { id: Date.now(), x: Math.round(x), dist: Math.round(dist * 10) / 10 }];
    });
  }

  function autoAnalyze() {
    setAutoAnalyzed(true);
    setEvents(EVENTS.map(e => ({ ...e, detected: true })));
  }

  function reset() {
    setEvents(EVENTS.map(e => ({ ...e, detected: false })));
    setMarkers([]);
    setAutoAnalyzed(false);
  }

  const detectedEvents = events.filter(e => e.detected);

  return (
    <div style={{ background: 'var(--sim-bg)', borderRadius: 12, padding: 24, color: 'var(--sim-text)' }}>
      <h4 style={{ margin: '0 0 16px', fontSize: 18 }}>OTDR Trace Reader</h4>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        <button onClick={() => setSelectedTool('cursor')} style={toolBtn(selectedTool === 'cursor')}>
          Cursor
        </button>
        <button onClick={() => setSelectedTool('marker')} style={toolBtn(selectedTool === 'marker')}>
          Marker
        </button>
        <button onClick={autoAnalyze} disabled={autoAnalyzed}
          style={{ ...toolBtn(true), background: autoAnalyzed ? 'var(--sim-btn)' : 'var(--sim-accent)', opacity: autoAnalyzed ? 0.5 : 1 }}>
          Auto Analyze
        </button>
        <button onClick={reset} style={toolBtn(false)}>Reset</button>
      </div>

      <div style={{ background: 'var(--sim-btn)', borderRadius: 10, padding: 12, marginBottom: 16 }}>
        <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} style={{ width: '100%', height: 'auto', cursor: selectedTool === 'marker' ? 'crosshair' : 'default' }}
          onClick={handleSvgClick}>
          <rect x={0} y={0} width={VIEW_W} height={VIEW_H} fill="#1e1e2e" rx={4} />

          {Array.from({ length: 11 }, (_, i) => (
            <g key={`grid-${i}`}>
              <line x1={0} y1={(VIEW_H / 10) * i} x2={VIEW_W} y2={(VIEW_H / 10) * i} stroke="#2d2d44" strokeWidth={0.5} />
              <line x1={(VIEW_W / 10) * i} y1={0} x2={(VIEW_W / 10) * i} y2={VIEW_H} stroke="#2d2d44" strokeWidth={0.5} />
            </g>
          ))}

          <polyline points={tracePoints} fill="none" stroke="#22c55e" strokeWidth={1.5} />

          {events.map(ev => (
            <g key={ev.id}>
              <line x1={eventX(ev.distance)} y1={0} x2={eventX(ev.distance)} y2={VIEW_H}
                stroke={autoAnalyzed ? ev.color : '#3b3b52'} strokeWidth={1} strokeDasharray="4,3" />
              {autoAnalyzed && (
                <circle cx={eventX(ev.distance)} cy={VIEW_H / 2} r={4} fill={ev.color} />
              )}
            </g>
          ))}

          {markers.map(mk => (
            <g key={mk.id}>
              <line x1={mk.x} y1={20} x2={mk.x} y2={VIEW_H - 20} stroke="#f59e0b" strokeWidth={1} strokeDasharray="3,3" />
              <rect x={mk.x - 24} y={5} width={48} height={16} rx={3} fill="#f59e0b" />
              <text x={mk.x} y={16} textAnchor="middle" fill="#000" fontSize={8} fontWeight={600}>
                {mk.dist} km
              </text>
            </g>
          ))}

          {Array.from({ length: 5 }, (_, i) => {
            const km = i * 5;
            return (
              <text key={`label-${i}`} x={eventX(km)} y={VIEW_H - 4} textAnchor="middle"
                fill="#94a3b8" fontSize={8}>{km}km</text>
            );
          })}
          <text x={4} y={14} fill="#94a3b8" fontSize={8}>dB</text>
        </svg>
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#3b82f6', display: 'inline-block' }} />
          Splice Loss
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
          Connector
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
          Break
        </div>
      </div>

      <div style={{ background: 'var(--sim-btn)', borderRadius: 10, padding: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Detected Events</div>
        {detectedEvents.length === 0 && (
          <div style={{ fontSize: 13, color: 'var(--sim-label)' }}>Klik "Auto Analyze" untuk mendeteksi event.</div>
        )}
        {detectedEvents.map(ev => (
          <div key={ev.id} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '8px 12px', marginBottom: 6, borderRadius: 6, background: 'var(--sim-bg)',
            borderLeft: `3px solid ${ev.color}`,
          }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{ev.type}</div>
              <div style={{ fontSize: 11, color: 'var(--sim-label)' }}>Distance: {ev.distance} km</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{ev.loss !== null ? `${ev.loss} dB` : '---'}</div>
            </div>
          </div>
        ))}
        {markers.length > 0 && (
          <div style={{ marginTop: 8, fontSize: 11, color: 'var(--sim-label)' }}>
            Markers: {markers.map(m => `${m.dist}km`).join(', ')}
          </div>
        )}
      </div>
    </div>
  );
}

function toolBtn(active) {
  return {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '6px 14px', borderRadius: 8, border: 'none', cursor: 'pointer',
    background: active ? 'var(--sim-accent)' : 'var(--sim-btn)',
    color: 'var(--sim-text)', fontSize: 13, fontWeight: 600,
  };
}
