import { useState } from 'react';

const TARGET_AZ = 135;
const TARGET_EL = 45;
const CX = 100, CY = 100, R = 80;

function azDiff(a, b) {
  const d = Math.abs(a - b);
  return Math.min(d, 360 - d);
}

function calcSignal(az, el) {
  const ad = azDiff(az, TARGET_AZ);
  const ed = Math.abs(el - TARGET_EL);
  return Math.max(0, Math.min(100, 100 - (ad * 1.5 + ed * 2)));
}

function signalLabel(s) {
  if (s >= 75) return 'Strong';
  if (s >= 50) return 'Fair';
  if (s >= 25) return 'Weak';
  return 'No Signal';
}

function signalColor(s) {
  if (s >= 75) return '#22c55e';
  if (s >= 50) return '#eab308';
  if (s >= 25) return '#f97316';
  return '#ef4444';
}

function polarToCart(cx, cy, r, deg) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const containerStyle = {
  background: '#1e1e2e', color: '#fff', borderRadius: 12, padding: 20,
  fontFamily: 'system-ui, sans-serif', maxWidth: 480,
};

const row = { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 10 };

const labelStyle = { fontSize: 11, color: '#94a3b8', textAlign: 'center' };

export default function AntennaAlignment() {
  const [azimuth, setAzimuth] = useState(0);
  const [elevation, setElevation] = useState(45);
  const [targetVisible, setTargetVisible] = useState(true);

  const signal = calcSignal(azimuth, elevation);
  const sLabel = signalLabel(signal);
  const sColor = signalColor(signal);
  const needleEnd = polarToCart(CX, CY, R * 0.75, azimuth);
  const targetPos = polarToCart(CX, CY, R * 0.65, TARGET_AZ);

  return (
    <div style={containerStyle}>
      <h3 style={{ margin: '0 0 8px', textAlign: 'center', color: '#6366f1' }}>
        Antenna Alignment
      </h3>

      {/* Compass */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
        <svg width={200} height={200} viewBox="0 0 200 200">
          {/* Outer ring */}
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="#334155" strokeWidth={2} />
          <circle cx={CX} cy={CY} r={R - 8} fill="none" stroke="#2a2a4a" strokeWidth={1} />

          {/* Tick marks every 30deg */}
          {Array.from({ length: 12 }, (_, i) => {
            const deg = i * 30;
            const outer = polarToCart(CX, CY, R - 4, deg);
            const inner = polarToCart(CX, CY, R - 14, deg);
            const labelPos = polarToCart(CX, CY, R - 22, deg);
            return (
              <g key={i}>
                <line x1={outer.x} y1={outer.y} x2={inner.x} y2={inner.y} stroke="#64748b" strokeWidth={1.5} />
                <text x={labelPos.x} y={labelPos.y} textAnchor="middle" dominantBaseline="central"
                  fill="#94a3b8" fontSize={9}>
                  {deg}°
                </text>
              </g>
            );
          })}

          {/* Cardinal labels */}
          {[{ d: 0, l: 'N' }, { d: 90, l: 'E' }, { d: 180, l: 'S' }, { d: 270, l: 'W' }].map(({ d, l }) => {
            const p = polarToCart(CX, CY, R + 14, d);
            return (
              <text key={l} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central"
                fill="#fff" fontSize={12} fontWeight={700}>
                {l}
              </text>
            );
          })}

          {/* Target marker */}
          {targetVisible && (
            <g>
              <circle cx={targetPos.x} cy={targetPos.y} r={5} fill="none" stroke="#22c55e" strokeWidth={1.5} opacity={0.5} />
              <text x={targetPos.x} y={targetPos.y - 12} textAnchor="middle" fill="#22c55e" fontSize={8} opacity={0.7}>
                Target
              </text>
            </g>
          )}

          {/* Elevation arc (inner) */}
          {elevation > 0 && (
            <circle cx={CX} cy={CY} r={R * 0.3 * (elevation / 90) + 8}
              fill="none" stroke="#6366f1" strokeWidth={1} strokeDasharray="3 3" opacity={0.4} />
          )}

          {/* Needle */}
          <line x1={CX} y1={CY} x2={needleEnd.x} y2={needleEnd.y}
            stroke="#6366f1" strokeWidth={2.5} strokeLinecap="round" />
          <circle cx={CX} cy={CY} r={4} fill="#6366f1" />

          {/* Center label */}
          <text x={CX} y={CY + 3} textAnchor="middle" dominantBaseline="central" fill="#fff" fontSize={7} fontWeight={600}>
            ANT
          </text>
        </svg>
      </div>

      {/* Values */}
      <div style={{ textAlign: 'center', margin: '4px 0 8px' }}>
        <span style={{ fontSize: 20, fontWeight: 700, color: '#6366f1' }}>{azimuth}°</span>
        <span style={{ fontSize: 13, color: '#94a3b8', margin: '0 8px' }}>Az</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: '#6366f1' }}>{elevation}°</span>
        <span style={{ fontSize: 13, color: '#94a3b8' }}>El</span>
      </div>

      {/* Azimuth control */}
      <div style={labelStyle}>Azimuth</div>
      <div style={row}>
        <button onClick={() => setAzimuth(a => ((a - 5) % 360 + 360) % 360)} style={{
          background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6,
          width: 36, height: 36, fontSize: 18, cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>◀</button>
        <input type="range" min={0} max={360} value={azimuth}
          onChange={e => setAzimuth(Number(e.target.value))}
          style={{ width: 200, accentColor: '#6366f1' }} />
        <button onClick={() => setAzimuth(a => ((a + 5) % 360 + 360) % 360)} style={{
          background: '#6366f1', color: '#fff', border: 'none', borderRadius: 6,
          width: 36, height: 36, fontSize: 18, cursor: 'pointer', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>▶</button>
      </div>

      {/* Elevation control */}
      <div style={{ ...labelStyle, marginTop: 8 }}>Elevation</div>
      <div style={row}>
        <span style={{ fontSize: 12, color: '#94a3b8' }}>0°</span>
        <input type="range" min={0} max={90} value={elevation}
          onChange={e => setElevation(Number(e.target.value))}
          style={{ width: 200, accentColor: '#6366f1' }} />
        <span style={{ fontSize: 12, color: '#94a3b8' }}>90°</span>
      </div>

      {/* Signal meter */}
      <div style={{ marginTop: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 2 }}>
          <span>Signal: <b style={{ color: sColor }}>{signal.toFixed(0)}%</b></span>
          <span style={{ color: sColor, fontWeight: 700 }}>{sLabel}</span>
        </div>
        <div style={{ height: 14, background: '#334155', borderRadius: 7, overflow: 'hidden' }}>
          <div style={{ width: `${signal}%`, height: '100%', background: sColor, borderRadius: 7, transition: 'width 0.2s' }} />
        </div>
      </div>

      {/* Target info */}
      <div style={{ fontSize: 11, color: '#94a3b8', textAlign: 'center', marginTop: 6 }}>
        Target: {TARGET_AZ}° Az, {TARGET_EL}° El
        <label style={{ marginLeft: 8, cursor: 'pointer' }}>
          <input type="checkbox" checked={targetVisible} onChange={e => setTargetVisible(e.target.checked)} /> show
        </label>
      </div>
    </div>
  );
}
