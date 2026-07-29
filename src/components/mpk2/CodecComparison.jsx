import { useState } from 'react';

const codecs = [
  { name: 'G.711', bitrate: '64 kbps', bandwidth: '87.2 kbps', mos: 4.1, latency: '1 ms', desc: 'Tidak kompresi, kualitas PSTN' },
  { name: 'G.729', bitrate: '8 kbps', bandwidth: '31.2 kbps', mos: 3.9, latency: '15 ms', desc: 'Kompresi tinggi, hemat bandwidth' },
  { name: 'G.722', bitrate: '48-64 kbps', bandwidth: '75.2 kbps', mos: 4.5, latency: '2 ms', desc: 'HD Voice, kualitas superior' },
  { name: 'G.726', bitrate: '32 kbps', bandwidth: '55.2 kbps', mos: 3.8, latency: '1 ms', desc: 'ADPCM, kompresi ringan' },
  { name: 'Opus', bitrate: '6-510 kbps', bandwidth: 'Varies', mos: 4.4, latency: '2.5 ms', desc: 'Open source, adaptif' },
];

const MOS_MIN = 1;
const MOS_MAX = 4.5;

function mosColor(mos) {
  const t = (mos - MOS_MIN) / (MOS_MAX - MOS_MIN);
  const r = Math.round(255 * (1 - t));
  const g = Math.round(255 * t);
  return `rgb(${r},${g},50)`;
}

export default function CodecComparison() {
  const [selected, setSelected] = useState(codecs.map(c => c.name));

  const toggle = (name) => {
    setSelected(prev => {
      if (prev.includes(name)) {
        if (prev.length <= 2) return prev;
        return prev.filter(n => n !== name);
      }
      if (prev.length >= 5) return prev;
      return [...prev, name];
    });
  };

  const selectedCodecs = codecs.filter(c => selected.includes(c.name));

  const bestQuality = selectedCodecs.reduce((a, b) => a.mos > b.mos ? a : b);
  const bestBandwidth = selectedCodecs.reduce((a, b) => {
    const aNum = parseFloat(a.bandwidth);
    const bNum = parseFloat(b.bandwidth);
    if (isNaN(aNum)) return b;
    if (isNaN(bNum)) return a;
    return aNum < bNum ? a : b;
  });

  const selStyle = (isSel) => ({
    background: 'var(--sim-btn)', borderRadius: 10, padding: 14,
    border: `1.5px solid ${isSel ? 'var(--sim-accent)' : '#3d3d5c'}`,
    opacity: isSel ? 1 : 0.45, cursor: 'pointer',
    transition: 'all 0.2s',
  });

  return (
    <div style={{
      background: 'var(--sim-bg)', color: 'var(--sim-text)', borderRadius: 12, padding: 20,
      fontFamily: 'system-ui, sans-serif', maxWidth: 520,
    }}>
      <h3 style={{ margin: '0 0 16px', textAlign: 'center', color: 'var(--sim-accent)' }}>
        Codec Comparison
      </h3>
      <div style={{ fontSize: 12, color: 'var(--sim-label)', textAlign: 'center', marginBottom: 14 }}>
        Klik codec untuk pilih/ubah — minimal 2, maksimal 5
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {codecs.map(c => {
          const isSel = selected.includes(c.name);
          return (
            <div key={c.name} style={selStyle(isSel)} onClick={() => toggle(c.name)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: isSel ? 'var(--sim-text)' : 'var(--sim-label)' }}>
                  {c.name}
                </span>
                <span style={{ fontSize: 11, color: '#a5b4fc' }}>
                  {c.bitrate}
                </span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--sim-label)', marginBottom: 6 }}>{c.desc}</div>
              <div style={{ display: 'flex', gap: 16, fontSize: 12, flexWrap: 'wrap' }}>
                <span>📶 {c.bandwidth}</span>
                <span>📊 MOS: <b style={{ color: mosColor(c.mos) }}>{c.mos}</b></span>
                <span>⏱ {c.latency}</span>
              </div>
            </div>
          );
        })}
      </div>

      {selectedCodecs.length > 0 && (
        <div style={{
          background: 'var(--sim-btn)', borderRadius: 10, padding: 16, marginTop: 14,
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#a5b4fc', marginBottom: 10 }}>
            📊 Perbandingan MOS
          </div>
          {selectedCodecs.map(c => {
            const pct = ((c.mos - MOS_MIN) / (MOS_MAX - MOS_MIN)) * 100;
            return (
              <div key={c.name + 'bar'} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 2 }}>
                  <span>{c.name}</span>
                  <span style={{ color: mosColor(c.mos), fontWeight: 600 }}>{c.mos}</span>
                </div>
                <div style={{ height: 14, borderRadius: 4, background: '#16162a', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', width: `${pct}%`, borderRadius: 4,
                    background: mosColor(c.mos), transition: 'width 0.4s',
                  }} />
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div style={{
        display: 'flex', gap: 12, marginTop: 14, fontSize: 13, flexWrap: 'wrap',
      }}>
        <div style={{
          background: 'var(--sim-btn)', borderRadius: 8, padding: '10px 14px', flex: 1, minWidth: 160,
        }}>
          <span style={{ color: 'var(--sim-label)' }}>Best Quality: </span>
          <span style={{ color: '#22c55e', fontWeight: 700 }}>{bestQuality.name}</span>
          <span style={{ color: 'var(--sim-label)' }}> (MOS {bestQuality.mos})</span>
        </div>
        <div style={{
          background: 'var(--sim-btn)', borderRadius: 8, padding: '10px 14px', flex: 1, minWidth: 160,
        }}>
          <span style={{ color: 'var(--sim-label)' }}>Best Bandwidth: </span>
          <span style={{ color: '#22c55e', fontWeight: 700 }}>{bestBandwidth.name}</span>
          <span style={{ color: 'var(--sim-label)' }}> ({bestBandwidth.bandwidth})</span>
        </div>
      </div>
    </div>
  );
}
