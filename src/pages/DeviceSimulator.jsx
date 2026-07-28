import { useState, useRef } from 'react';
import { Network, Monitor, Server, Wifi, Plus, Trash2, RefreshCw } from 'lucide-react';

const DEVICE_TYPES = [
  { type: 'pc', label: 'PC', icon: Monitor, color: '#06b6d4', defaultIP: true },
  { type: 'server', label: 'Server', icon: Server, color: '#f59e0b', defaultIP: false },
  { type: 'router', label: 'Router', icon: Network, color: '#6366f1', defaultIP: false },
  { type: 'ap', label: 'Access Point', icon: Wifi, color: '#8b5cf6', defaultIP: false },
];

function generateIP(base, idx) {
  const parts = base.split('.').map(Number);
  parts[3] = (parts[3] + idx) % 256;
  parts[2] += Math.floor((parts[3] + idx) / 256);
  return parts.join('.');
}

export default function DeviceSimulator() {
  const [devices, setDevices] = useState([]);
  const [baseNetwork, setBaseNetwork] = useState('192.168.1');
  const [cidr, setCidr] = useState(24);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [connections, setConnections] = useState([]);
  const canvasRef = useRef(null);
  const [dragging, setDragging] = useState(null);

  const addDevice = (type) => {
    const dev = DEVICE_TYPES.find(d => d.type === type);
    const ip = type === 'router' ? `${baseNetwork}.1` :
      type === 'ap' ? `${baseNetwork}.2` :
      type === 'server' ? `${baseNetwork}.10` :
      `${baseNetwork}.${100 + devices.length}`;
    setDevices(prev => [...prev, {
      id: Date.now(),
      type,
      label: `${dev.label} ${devices.filter(d => d.type === type).length + 1}`,
      x: 100 + Math.random() * 300,
      y: 80 + Math.random() * 200,
      ip,
      subnet: `255.255.255.${256 - Math.pow(2, 32 - cidr)}`,
      color: dev.color,
    }]);
  };

  const removeDevice = (id) => {
    setDevices(prev => prev.filter(d => d.id !== id));
    setConnections(prev => prev.filter(c => c.from !== id && c.to !== id));
    if (selectedDevice === id) setSelectedDevice(null);
  };

  const autoConnect = () => {
    if (devices.length < 2) return;
    const center = {
      x: devices.reduce((s, d) => s + d.x, 0) / devices.length,
      y: devices.reduce((s, d) => s + d.y, 0) / devices.length,
    };
    const newConns = [];
    const router = devices.find(d => d.type === 'router');
    devices.forEach(d => {
      if (d.id !== (router?.id || devices[0].id)) {
        newConns.push({ from: router?.id || devices[0].id, to: d.id });
      }
    });
    setConnections(newConns);
  };

  const regenerateIPs = () => {
    let idx = 0;
    setDevices(prev => prev.map(d => {
      const ip = d.type === 'router' ? `${baseNetwork}.1` :
        d.type === 'ap' ? `${baseNetwork}.2` :
        d.type === 'server' ? `${baseNetwork}.10` :
        `${baseNetwork}.${100 + idx++}`;
      return { ...d, ip };
    }));
  };

  const handleMouseDown = (id, e) => {
    e.stopPropagation();
    setSelectedDevice(id);
    setDragging({ id, offsetX: e.nativeEvent.offsetX, offsetY: e.nativeEvent.offsetY });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - dragging.offsetX;
    const y = e.clientY - rect.top - dragging.offsetY;
    setDevices(prev => prev.map(d => d.id === dragging.id ? { ...d, x, y } : d));
  };

  const handleMouseUp = () => setDragging(null);

  const selected = devices.find(d => d.id === selectedDevice);
  const mask = `255.255.255.${256 - Math.pow(2, 32 - cidr)}`;
  const totalHosts = Math.pow(2, 32 - cidr) - 2;

  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <h3><Network size={20} /> Simulasi Jaringan</h3>
        <p style={{marginBottom: 16}}>Drag device ke canvas, hubungkan, dan lihat IP scheme otomatis.</p>

        {/* Toolbar */}
        <div className="sim-toolbar">
          {DEVICE_TYPES.map(d => (
            <button key={d.type} className="btn btn-secondary" onClick={() => addDevice(d.type)}>
              <d.icon size={14} color={d.color} /> + {d.label}
            </button>
          ))}
          <button className="btn btn-secondary" onClick={autoConnect} title="Auto-connect all to router">
            <RefreshCw size={14} /> Auto Connect
          </button>
          <button className="btn btn-secondary" onClick={regenerateIPs} title="Regenerate all IPs">
            <RefreshCw size={14} /> Regen IP
          </button>
        </div>

        {/* Network config */}
        <div className="calc-grid" style={{marginBottom: 16}}>
          <div className="calc-input-group">
            <label>Base Network</label>
            <input type="text" value={baseNetwork} onChange={e => setBaseNetwork(e.target.value)} placeholder="192.168.1" />
          </div>
          <div className="calc-input-group">
            <label>CIDR</label>
            <select value={cidr} onChange={e => setCidr(Number(e.target.value))}>
              {[8,16,24,25,26,27,28,29,30].map(v => <option key={v} value={v}>/{v}</option>)}
            </select>
          </div>
        </div>

        <div className="info-box" style={{marginBottom:16}}>
          <strong>Info Jaringan</strong>
          <p>Mask: {mask} | Total Host: {totalHosts.toLocaleString()} | Network: {baseNetwork}.0/{cidr}</p>
        </div>

        {/* Canvas */}
        <div className="sim-canvas" ref={canvasRef}
          onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
          <svg width="100%" height="100%" style={{position:'absolute',top:0,left:0}}>
            {connections.map((c, i) => {
              const from = devices.find(d => d.id === c.from);
              const to = devices.find(d => d.id === c.to);
              if (!from || !to) return null;
              return <line key={i} x1={from.x + 30} y1={from.y + 30} x2={to.x + 30} y2={to.y + 30}
                stroke="#6366f1" strokeWidth="2" opacity="0.4" strokeDasharray="6,4" />;
            })}
          </svg>
          {devices.map(d => {
            const Icon = DEVICE_TYPES.find(t => t.type === d.type)?.icon || Monitor;
            return (
              <div key={d.id}
                className={`sim-device ${selectedDevice === d.id ? 'selected' : ''}`}
                style={{ left: d.x, top: d.y, borderColor: d.color }}
                onMouseDown={(e) => handleMouseDown(d.id, e)}>
                <Icon size={22} color={d.color} />
                <span className="sim-device-label">{d.label}</span>
                <span className="sim-device-ip">{d.ip}</span>
                <button className="sim-device-remove" onClick={(e) => { e.stopPropagation(); removeDevice(d.id); }}>
                  <Trash2 size={12} />
                </button>
              </div>
            );
          })}
          {devices.length === 0 && (
            <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',textAlign:'center',color:'var(--text-lighter)'}}>
              <Plus size={40} style={{marginBottom:8,opacity:0.3}} />
              <p>Klik tombol di atas untuk menambah device</p>
            </div>
          )}
        </div>
      </div>

      {/* Device detail panel */}
      {selected && (
        <div className="materi-card fade-in" style={{marginTop:16}}>
          <h3><Monitor size={18} /> Detail: {selected.label}</h3>
          <div className="calc-result">
            <div className="result-item"><span className="label">Tipe</span><span className="value">{selected.type.toUpperCase()}</span></div>
            <div className="result-item"><span className="label">IP Address</span><span className="value">{selected.ip}/{cidr}</span></div>
            <div className="result-item"><span className="label">Subnet Mask</span><span className="value">{mask}</span></div>
            <div className="result-item"><span className="label">Network</span><span className="value">{baseNetwork}.0</span></div>
            <div className="result-item"><span className="label">Broadcast</span><span className="value">{baseNetwork}.255</span></div>
            <div className="result-item"><span className="label">Gateway</span><span className="value">{baseNetwork}.1</span></div>
          </div>
        </div>
      )}

      {/* Device list */}
      {devices.length > 0 && (
        <div className="materi-card fade-in" style={{marginTop:16}}>
          <h3>Daftar Device ({devices.length})</h3>
          <div className="table-responsive">
            <table className="materi-table">
              <thead><tr><th>Label</th><th>Tipe</th><th>IP Address</th><th>Subnet</th><th>Aksi</th></tr></thead>
              <tbody>
                {devices.map(d => (
                  <tr key={d.id} style={{cursor:'pointer'}} onClick={() => setSelectedDevice(d.id)}>
                    <td><strong>{d.label}</strong></td>
                    <td style={{color:d.color}}>{d.type.toUpperCase()}</td>
                    <td>{d.ip}</td>
                    <td>{mask}</td>
                    <td><button className="btn btn-danger" style={{padding:'4px 8px',fontSize:'0.75rem'}} onClick={(e) => { e.stopPropagation(); removeDevice(d.id); }}>
                      <Trash2 size={12} />
                    </button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
