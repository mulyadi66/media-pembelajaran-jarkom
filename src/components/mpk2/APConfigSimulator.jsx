import { useState } from 'react';

const steps = ['Scanning', 'Authenticating', 'Associating'];
const securityModes = ['Open', 'WPA2-PSK', 'WPA3-SAE'];
const channels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const bands = ['2.4 GHz', '5 GHz', 'Dual Band'];

function calcSuccessRate(security, password) {
  if (security === 'Open') return 100;
  if (security === 'WPA3-SAE') return password.length > 8 ? 95 : 70;
  if (security === 'WPA2-PSK') return password.length > 8 ? 88 : 65;
  return 50;
}

function calcSignal() { return -(Math.floor(Math.random() * 31) + 45); }

function calcIp() {
  return `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 254 + 1)}`;
}

export default function APConfigSimulator() {
  const [ssid, setSsid] = useState('Jaringan-SMK');
  const [channel, setChannel] = useState(6);
  const [security, setSecurity] = useState('WPA2-PSK');
  const [password, setPassword] = useState('');
  const [band, setBand] = useState('2.4 GHz');
  const [animStep, setAnimStep] = useState(-1);
  const [connected, setConnected] = useState(null);
  const [result, setResult] = useState(null);

  const startSimulation = () => {
    setAnimStep(0);
    setConnected(null);
    setResult(null);
    const successRate = calcSuccessRate(security, password);
    const willConnect = Math.random() * 100 < successRate;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i >= steps.length) {
        clearInterval(interval);
        setAnimStep(-1);
        const connectedFinal = willConnect;
        setConnected(connectedFinal);
        if (connectedFinal) {
          setResult({
            status: 'Connected',
            ssid,
            band,
            channel,
            security,
            ip: calcIp(),
            signal: calcSignal(),
          });
        } else {
          setResult({
            status: 'Failed',
            reason: security === 'Open' ? 'Channel interference' : 'Authentication failed — wrong password or incompatible security mode',
          });
        }
      } else {
        setAnimStep(i);
      }
    }, 500);
  };

  const reset = () => {
    setSsid('Jaringan-SMK');
    setChannel(6);
    setSecurity('WPA2-PSK');
    setPassword('');
    setBand('2.4 GHz');
    setAnimStep(-1);
    setConnected(null);
    setResult(null);
  };

  const labelStyle = { fontSize: 13, fontWeight: 600, marginBottom: 4, color: '#a5b4fc' };
  const inputStyle = {
    width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid #3d3d5c',
    background: '#16162a', color: 'var(--sim-text)', fontSize: 13, outline: 'none',
    boxSizing: 'border-box',
  };
  const selStyle = { ...inputStyle, cursor: 'pointer' };
  const cardStyle = {
    background: 'var(--sim-btn)', borderRadius: 10, padding: 16, marginBottom: 12,
  };

  return (
    <div style={{
      background: 'var(--sim-bg)', color: 'var(--sim-text)', borderRadius: 12, padding: 20,
      fontFamily: 'system-ui, sans-serif', maxWidth: 500,
    }}>
      <h3 style={{ margin: '0 0 16px', textAlign: 'center', color: 'var(--sim-accent)' }}>
        AP Config Simulator
      </h3>

      <div style={cardStyle}>
        <div style={{ marginBottom: 12 }}>
          <div style={labelStyle}>SSID</div>
          <input style={inputStyle} value={ssid} onChange={e => setSsid(e.target.value)} placeholder="Nama jaringan" />
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={labelStyle}>Channel</div>
            <select style={selStyle} value={channel} onChange={e => setChannel(Number(e.target.value))}>
              {channels.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <div style={labelStyle}>Band</div>
            <select style={selStyle} value={band} onChange={e => setBand(e.target.value)}>
              {bands.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>
        <div style={{ marginBottom: 12 }}>
          <div style={labelStyle}>Security</div>
          <select style={selStyle} value={security} onChange={e => setSecurity(e.target.value)}>
            {securityModes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        {security !== 'Open' && (
          <div style={{ marginBottom: 12 }}>
            <div style={labelStyle}>Password</div>
            <input style={inputStyle} type="password" value={password}
              onChange={e => setPassword(e.target.value)} placeholder="Min 8 karakter dianjurkan" />
          </div>
        )}
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={startSimulation} style={{
            flex: 1, background: 'var(--sim-accent)', color: 'var(--sim-text)', border: 'none', borderRadius: 6,
            padding: '10px', fontSize: 14, fontWeight: 600, cursor: 'pointer',
          }}>
            Simulasikan Koneksi
          </button>
          <button onClick={reset} style={{
            background: '#3d3d5c', color: 'var(--sim-text)', border: 'none', borderRadius: 6,
            padding: '10px 16px', fontSize: 13, cursor: 'pointer',
          }}>
            Reset
          </button>
        </div>
      </div>

      {animStep >= 0 && (
        <div style={cardStyle}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10, color: '#a5b4fc' }}>Progress</div>
          {steps.map((s, i) => (
            <div key={s} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0',
              opacity: i <= animStep ? 1 : 0.4, color: i <= animStep ? 'var(--sim-text)' : '#666',
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: i < animStep ? '#22c55e' : i === animStep ? '#eab308' : '#3d3d5c',
                transition: 'background 0.3s',
              }} />
              <span>
                {i < animStep ? '✅ ' : i === animStep ? '⏳ ' : '○ '}
                {s}...
              </span>
            </div>
          ))}
        </div>
      )}

      {result && (
        <div style={{
          ...cardStyle, border: `1px solid ${connected ? '#22c55e' : '#ef4444'}`,
        }}>
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, color: connected ? '#22c55e' : '#ef4444' }}>
            {connected ? '✓ Connected' : '✗ Failed'}
          </div>
          {connected ? (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px', fontSize: 13 }}>
                <span style={{ color: 'var(--sim-label)' }}>SSID:</span><span>{result.ssid}</span>
                <span style={{ color: 'var(--sim-label)' }}>Band:</span><span>{result.band}</span>
                <span style={{ color: 'var(--sim-label)' }}>Channel:</span><span>{result.channel}</span>
                <span style={{ color: 'var(--sim-label)' }}>Security:</span><span>{result.security}</span>
                <span style={{ color: 'var(--sim-label)' }}>IP Address:</span><span>{result.ip}</span>
                <span style={{ color: 'var(--sim-label)' }}>Signal:</span>
                <span style={{ color: result.signal >= -55 ? '#22c55e' : result.signal >= -65 ? '#eab308' : '#f97316' }}>
                  {result.signal} dBm
                </span>
              </div>
              <div style={{ marginTop: 8, height: 6, borderRadius: 3, background: '#16162a', overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: `${Math.min(100, Math.max(10, (result.signal + 75) / 30 * 100))}%`,
                  borderRadius: 3, background: result.signal >= -55 ? '#22c55e' : result.signal >= -65 ? '#eab308' : '#f97316',
                  transition: 'width 0.5s',
                }} />
              </div>
            </>
          ) : (
            <div style={{ fontSize: 13, color: 'var(--sim-label)' }}>{result.reason}</div>
          )}
        </div>
      )}
    </div>
  );
}
