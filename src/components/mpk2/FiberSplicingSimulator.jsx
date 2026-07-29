import { useState } from 'react';

const STEPS = ['Persiapan', 'Penyelarasan', 'Arc Fusion', 'Estimasi Loss', 'Selesai'];

export default function FiberSplicingSimulator() {
  const [step, setStep] = useState(0);
  const [fiber1Pos, setFiber1Pos] = useState(50);
  const [fiber2Pos, setFiber2Pos] = useState(50);
  const [arcOn, setArcOn] = useState(false);
  const [arcDone, setArcDone] = useState(false);
  const [spliceLoss, setSpliceLoss] = useState(0);
  const [aligned, setAligned] = useState(false);
  const [spliced, setSpliced] = useState(false);

  const diff = Math.abs(fiber1Pos - fiber2Pos);
  const isAligned = diff <= 3;

  function resetAll() {
    setStep(0);
    setFiber1Pos(50);
    setFiber2Pos(50);
    setArcOn(false);
    setArcDone(false);
    setSpliceLoss(0);
    setAligned(false);
    setSpliced(false);
  }

  function startArc() {
    setArcOn(true);
    setTimeout(() => {
      setArcOn(false);
      setArcDone(true);
      setSpliced(true);
      const loss = 0.02 + (diff * 0.005);
      setSpliceLoss(Math.round(loss * 100) / 100);
    }, 2000);
  }

  function goToNextStep() {
    if (step === 1) {
      setAligned(true);
    }
    if (step === 2 && arcDone) {
      const loss = 0.02 + (diff * 0.005);
      setSpliceLoss(Math.round(loss * 100) / 100);
    }
    setStep(s => Math.min(s + 1, 4));
  }

  const barStyle = { height: 10, borderRadius: 5, transition: 'width 0.2s, background 0.3s' };
  const sectionStyle = { background: 'var(--sim-btn)', borderRadius: 10, padding: 20, marginBottom: 16 };
  const labelStyle = { fontSize: 13, color: 'var(--sim-label)', marginBottom: 4 };
  const valStyle = { fontSize: 14, fontWeight: 600, color: 'var(--sim-text)' };

  return (
    <div style={{ background: 'var(--sim-bg)', borderRadius: 12, padding: 24, color: 'var(--sim-text)' }}>
      <h4 style={{ margin: '0 0 16px', fontSize: 18 }}>Fiber Optic Fusion Splicing</h4>

      <div style={{ display: 'flex', gap: 6, marginBottom: 20, flexWrap: 'wrap' }}>
        {STEPS.map((s, i) => (
          <div key={i} style={{
            flex: 1, minWidth: 80, textAlign: 'center', padding: '6px 4px', borderRadius: 6,
            fontSize: 11, fontWeight: 600,
            background: i === step ? 'var(--sim-accent)' : i < step ? '#2d5a27' : 'var(--sim-btn)',
            color: i <= step ? 'var(--sim-text)' : '#666',
          }}>{s}</div>
        ))}
      </div>

      {step === 0 && (
        <div style={sectionStyle}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Persiapan</div>
          <ul style={{ fontSize: 14, lineHeight: 2, paddingLeft: 20, margin: '0 0 16px' }}>
            <li>Bersihkan serat optik dengan alcohol wipe</li>
            <li>Stripper selongsong pelindung serat (coating)</li>
            <li>Cleaver serat untuk mendapatkan ujung yang rata</li>
            <li>Masukkan serat ke dalam holder fusion splicer</li>
          </ul>
          <button onClick={() => setStep(1)} style={btnStyle(true)}>Mulai</button>
        </div>
      )}

      {step === 1 && (
        <div style={sectionStyle}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Penyelarasan (Alignment)</div>
          <div style={{ marginBottom: 16 }}>
            <div style={labelStyle}>Fiber 1 Core Position</div>
            <input type="range" min={0} max={100} value={fiber1Pos} onChange={e => setFiber1Pos(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--sim-accent)' }} />
            <div style={valStyle}>{fiber1Pos}</div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <div style={labelStyle}>Fiber 2 Core Position</div>
            <input type="range" min={0} max={100} value={fiber2Pos} onChange={e => setFiber2Pos(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--sim-accent)' }} />
            <div style={valStyle}>{fiber2Pos}</div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16,
            padding: 12, borderRadius: 8, background: 'var(--sim-bg)',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--sim-label)', marginBottom: 4 }}>
                <span>Fiber 1</span><span>{fiber1Pos}</span>
              </div>
              <div style={{ background: 'var(--sim-btn)', borderRadius: 5, height: 12, position: 'relative' }}>
                <div style={{ ...barStyle, width: `${fiber1Pos}%`, background: 'var(--sim-accent)' }} />
                <div style={{
                  position: 'absolute', right: `${100 - fiber2Pos}%`, top: -4, width: 4, height: 20,
                  background: '#f59e0b', borderRadius: 2,
                }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--sim-label)', marginTop: 4 }}>
                <span>Fiber 2</span><span>{fiber2Pos}</span>
              </div>
            </div>
            <div style={{
              padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600,
              background: isAligned ? 'var(--success)' : 'var(--danger)',
            }}>
              {isAligned ? 'Aligned' : 'Not Aligned'}
            </div>
          </div>
          <button onClick={goToNextStep} disabled={!isAligned}
            style={{ ...btnStyle(isAligned), opacity: isAligned ? 1 : 0.5, cursor: isAligned ? 'pointer' : 'not-allowed' }}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div style={sectionStyle}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Arc Fusion</div>
          <div style={{
            height: 120, background: 'var(--sim-bg)', borderRadius: 8, display: 'flex',
            alignItems: 'center', justifyContent: 'center', marginBottom: 16, position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 20, position: 'relative', zIndex: 1,
            }}>
              <div style={{ width: 60, height: 6, background: 'var(--sim-accent)', borderRadius: 3 }} />
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: arcOn
                  ? 'radial-gradient(circle, #ff6b35, #ff4500, #ff8c00)'
                  : arcDone ? 'var(--sim-accent)' : 'var(--sim-btn)',
                boxShadow: arcOn ? '0 0 40px #ff4500, 0 0 80px #ff6b35' : 'none',
                transition: 'all 0.3s',
              }} />
              <div style={{ width: 60, height: 6, background: 'var(--sim-accent)', borderRadius: 3 }} />
            </div>
            {arcOn && <style>{`@keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.2); } }`}</style>}
            {arcOn && <div style={{
              position: 'absolute', width: 80, height: 80, borderRadius: '50%',
              background: 'rgba(255,69,0,0.15)', animation: 'pulse 0.5s infinite',
            }} />}
          </div>
          <div style={{ textAlign: 'center', marginBottom: 16, fontSize: 14, color: 'var(--sim-label)' }}>
            {arcOn && 'Fusion in progress...'}
            {arcDone && 'Fusion complete!'}
            {!arcOn && !arcDone && 'Tekan Start Arc untuk memulai fusion'}
          </div>
          {!arcOn && !arcDone && (
            <button onClick={startArc} style={btnStyle(true)}>Start Arc</button>
          )}
          {arcDone && (
            <button onClick={goToNextStep} style={btnStyle(true)}>Next</button>
          )}
        </div>
      )}

      {step === 3 && (
        <div style={sectionStyle}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Estimasi Splice Loss</div>
          <div style={{ marginBottom: 16 }}>
            <div style={labelStyle}>Splice Loss</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: spliceLoss < 0.05 ? '#22c55e' : '#eab308' }}>
              {spliceLoss} dB
            </div>
          </div>
          <div style={{ background: 'var(--sim-bg)', borderRadius: 8, padding: 4, marginBottom: 16 }}>
            <div style={{
              height: 24, borderRadius: 6,
              background: spliceLoss < 0.05 ? '#22c55e' : '#eab308',
              width: `${Math.min((spliceLoss / 0.12) * 100, 100)}%`,
              transition: 'width 0.5s',
            }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 13, color: 'var(--sim-label)', marginBottom: 16 }}>
            <span>Alignment Diff: {diff}</span>
            <span>Rumus: 0.02 + ({diff} x 0.005)</span>
          </div>
          <button onClick={goToNextStep} style={btnStyle(true)}>Next</button>
        </div>
      )}

      {step === 4 && (
        <div style={sectionStyle}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: '#22c55e' }}>Splicing Selesai</div>
          <div style={{ display: 'grid', gap: 12, fontSize: 14, marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--sim-bg)', borderRadius: 6 }}>
              <span>Alignment</span><span style={{ color: '#22c55e' }}>OK</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--sim-bg)', borderRadius: 6 }}>
              <span>Arc Fusion</span><span style={{ color: '#22c55e' }}>Complete</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--sim-bg)', borderRadius: 6 }}>
              <span>Splice Loss</span><span style={{ fontWeight: 700 }}>{spliceLoss} dB</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: 'var(--sim-bg)', borderRadius: 6 }}>
              <span>Kualitas</span>
              <span style={{ color: spliceLoss < 0.05 ? '#22c55e' : '#eab308' }}>
                {spliceLoss < 0.05 ? 'Baik' : 'Cukup'}
              </span>
            </div>
          </div>
          <button onClick={resetAll} style={btnStyle(true)}>Ulangi</button>
        </div>
      )}
    </div>
  );
}

function btnStyle(active) {
  return {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '8px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
    background: active ? 'var(--sim-accent)' : 'var(--sim-btn)',
    color: 'var(--sim-text)', fontSize: 13, fontWeight: 600,
  };
}
