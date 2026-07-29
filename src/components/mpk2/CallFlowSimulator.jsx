import { useState, useRef } from 'react';

const callSteps = [
  { name: 'Idle', desc: 'Telepon dalam keadaan diam (on-hook)', icon: '☎️' },
  { name: 'Off Hook', desc: 'Pengguna mengangkat gagang telepon', icon: '📞' },
  { name: 'Dial Tone', desc: 'PSTN/fxs mengirim nada sambung', icon: '🔊' },
  { name: 'Dialing', desc: 'Pengguna menekan nomor tujuan', icon: '🔢' },
  { name: 'SIP Invite', desc: 'SIP INVITE dikirim ke server VoIP', icon: '📤' },
  { name: 'Ringing', desc: 'Tujuan menerima panggilan — berdering', icon: '🔔' },
  { name: 'Connected', desc: 'Panggilan tersambung — RTP stream berjalan', icon: '🟢' },
  { name: 'Hang Up', desc: 'Salah satu pihak menutup telepon — SIP BYE', icon: '🔴' },
];

export default function CallFlowSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [autoPlaying, setAutoPlaying] = useState(false);
  const timerRef = useRef(null);

  const startAutoPlay = () => {
    setAutoPlaying(true);
    setCurrentStep(0);
    let i = 0;
    timerRef.current = setInterval(() => {
      i++;
      if (i >= callSteps.length) {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setAutoPlaying(false);
      } else {
        setCurrentStep(i);
      }
    }, 1500);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setAutoPlaying(false);
  };

  const goTo = (idx) => {
    if (autoPlaying) stopAutoPlay();
    setCurrentStep(Math.max(0, Math.min(callSteps.length - 1, idx)));
  };

  const timelineStyle = {
    position: 'relative', paddingLeft: 36, marginBottom: 16,
  };

  const lineStyle = {
    position: 'absolute', left: 12, top: 0, bottom: 0, width: 2,
    background: '#3d3d5c', borderRadius: 1,
  };

  const btnStyle = (disabled) => ({
    background: disabled ? '#2d2d44' : '#6366f1',
    color: disabled ? '#666' : '#fff',
    border: 'none', borderRadius: 6,
    padding: '8px 16px', fontSize: 13, fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
  });

  return (
    <div style={{
      background: '#1e1e2e', color: '#fff', borderRadius: 12, padding: 20,
      fontFamily: 'system-ui, sans-serif', maxWidth: 500,
    }}>
      <h3 style={{ margin: '0 0 16px', textAlign: 'center', color: '#6366f1' }}>
        VoIP Call Flow Simulator
      </h3>

      <div style={timelineStyle}>
        <div style={lineStyle} />
        {callSteps.map((step, i) => {
          const isCurrent = i === currentStep;
          const isDone = i < currentStep;
          const isFuture = i > currentStep;
          return (
            <div key={step.name} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0',
              cursor: 'pointer', opacity: isFuture ? 0.4 : 1,
            }} onClick={() => goTo(i)}>
              <div style={{
                position: 'absolute', left: 4,
                width: 18, height: 18, borderRadius: '50%',
                background: isCurrent ? '#6366f1' : isDone ? '#22c55e' : '#2d2d44',
                border: `2px solid ${isCurrent ? '#818cf8' : isDone ? '#22c55e' : '#3d3d5c'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, color: '#fff', zIndex: 1,
                transition: 'all 0.3s',
              }}>
                {isDone ? '✓' : isCurrent ? '▶' : ''}
              </div>
              <div style={{
                marginLeft: 12, flex: 1, padding: '8px 12px', borderRadius: 8,
                background: isCurrent ? '#6366f1' : 'transparent',
                transition: 'all 0.3s',
              }}>
                <div style={{
                  fontSize: 13, fontWeight: 600,
                  color: isCurrent ? '#fff' : isDone ? '#22c55e' : '#94a3b8',
                }}>
                  {step.icon} {step.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{
        background: '#2d2d44', borderRadius: 10, padding: 14, marginBottom: 14,
        minHeight: 40,
      }}>
        <div style={{ fontSize: 13, color: '#a5b4fc', marginBottom: 4 }}>
          {callSteps[currentStep].icon} Langkah {currentStep + 1}/{callSteps.length}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>
          {callSteps[currentStep].desc}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button style={btnStyle(currentStep === 0)} onClick={() => goTo(currentStep - 1)} disabled={currentStep === 0}>
          ← Previous
        </button>
        <button style={btnStyle(currentStep === callSteps.length - 1)} onClick={() => goTo(currentStep + 1)} disabled={currentStep === callSteps.length - 1}>
          Next →
        </button>
        <div style={{ flex: 1 }} />
        <button onClick={autoPlaying ? stopAutoPlay : startAutoPlay} style={{
          background: autoPlaying ? '#ef4444' : '#22c55e',
          color: '#fff', border: 'none', borderRadius: 6,
          padding: '8px 16px', fontSize: 13, fontWeight: 600, cursor: 'pointer',
        }}>
          {autoPlaying ? '⏹ Stop' : '▶ Auto Play'}
        </button>
      </div>
    </div>
  );
}
