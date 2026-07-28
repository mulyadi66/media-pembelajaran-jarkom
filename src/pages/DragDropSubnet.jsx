import { useState, useCallback } from 'react';
import { Shuffle, CheckCircle, XCircle, RotateCcw, Network } from 'lucide-react';

const CHALLENGES = [
  {
    id: 1,
    title: 'Subnetting Dasar',
    description: 'Drag IP address ke subnet yang benar berdasarkan kebutuhan host.',
    subnets: [
      { name: 'Subnet A', need: '60 host', cidr: '/26', network: '192.168.1.0/26' },
      { name: 'Subnet B', need: '28 host', cidr: '/27', network: '192.168.1.64/27' },
      { name: 'Subnet C', need: '10 host', cidr: '/28', network: '192.168.1.96/28' },
    ],
    ips: [
      { ip: '192.168.1.15', correct: 0 },
      { ip: '192.168.1.45', correct: 0 },
      { ip: '192.168.1.80', correct: 1 },
      { ip: '192.168.1.100', correct: 2 },
      { ip: '192.168.1.30', correct: 0 },
      { ip: '192.168.1.70', correct: 1 },
    ]
  },
  {
    id: 2,
    title: 'Klasifikasi IP',
    description: 'Drag IP address ke kelas yang benar (A, B, atau C).',
    subnets: [
      { name: 'Kelas A', need: '1.0.0.0 - 126.x.x.x', cidr: '/8', network: 'Kelas A' },
      { name: 'Kelas B', need: '128.0.0.0 - 191.255.x.x', cidr: '/16', network: 'Kelas B' },
      { name: 'Kelas C', need: '192.0.0.0 - 223.255.255.x', cidr: '/24', network: 'Kelas C' },
    ],
    ips: [
      { ip: '10.0.0.1', correct: 0 },
      { ip: '172.16.0.1', correct: 1 },
      { ip: '192.168.1.1', correct: 2 },
      { ip: '126.255.255.255', correct: 0 },
      { ip: '191.255.0.1', correct: 1 },
      { ip: '223.255.255.0', correct: 2 },
    ]
  },
  {
    id: 3,
    title: 'CIDR & Host',
    description: 'Drag prefix CIDR ke jumlah host yang tepat.',
    subnets: [
      { name: '254 hosts', need: '1 subnet', cidr: '/24', network: '/24 = 254 host' },
      { name: '126 hosts', need: '2 subnet', cidr: '/25', network: '/25 = 126 host' },
      { name: '62 hosts', need: '4 subnet', cidr: '/26', network: '/26 = 62 host' },
      { name: '30 hosts', need: '8 subnet', cidr: '/27', network: '/27 = 30 host' },
    ],
    ips: [
      { ip: '/24', correct: 0 },
      { ip: '/25', correct: 1 },
      { ip: '/26', correct: 2 },
      { ip: '/27', correct: 3 },
      { ip: '/24', correct: 0 },
      { ip: '/26', correct: 2 },
    ]
  }
];

export default function DragDropSubnet() {
  const [challengeIdx, setChallengeIdx] = useState(0);
  const [placed, setPlaced] = useState({});
  const [draggedIP, setDraggedIP] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState({});

  const challenge = CHALLENGES[challengeIdx];
  const availableIPs = challenge.ips.filter((_, i) => !Object.values(placed).flat().includes(i));

  const handleDragStart = (ipIdx) => setDraggedIP(ipIdx);

  const handleDrop = useCallback((subnetIdx) => {
    if (submitted || draggedIP === null) return;
    setPlaced(prev => {
      const updated = { ...prev };
      Object.keys(updated).forEach(k => {
        updated[k] = updated[k].filter(i => i !== draggedIP);
      });
      if (!updated[subnetIdx]) updated[subnetIdx] = [];
      updated[subnetIdx] = [...updated[subnetIdx], draggedIP];
      return updated;
    });
    setDraggedIP(null);
  }, [draggedIP, submitted]);

  const handleRemove = (subnetIdx, ipIdx) => {
    if (submitted) return;
    setPlaced(prev => {
      const updated = { ...prev };
      updated[subnetIdx] = (updated[subnetIdx] || []).filter(i => i !== ipIdx);
      return updated;
    });
  };

  const handleSubmit = () => {
    const res = {};
    let correct = 0;
    challenge.ips.forEach((ipData, ipIdx) => {
      let placedIn = -1;
      Object.entries(placed).forEach(([sIdx, ips]) => {
        if (ips.includes(ipIdx)) placedIn = parseInt(sIdx);
      });
      const isCorrect = placedIn === ipData.correct;
      res[ipIdx] = isCorrect;
      if (isCorrect) correct++;
    });
    setResults(res);
    setSubmitted(true);
  };

  const handleReset = () => {
    setPlaced({});
    setDraggedIP(null);
    setSubmitted(false);
    setResults({});
  };

  const handleNext = () => {
    setChallengeIdx((challengeIdx + 1) % CHALLENGES.length);
    handleReset();
  };

  return (
    <div className="content-section">
      <div className="materi-card">
        <h3><Network size={18} /> Drag & Drop Subnetting</h3>
        <p>Latihan interaktif: drag IP address ke tempat yang benar!</p>

        {/* Challenge selector */}
        <div className="simulator-toolbar" style={{ marginTop: 16 }}>
          {CHALLENGES.map((c, i) => (
            <button key={c.id} className={`sim-btn ${i === challengeIdx ? 'active' : ''}`}
              onClick={() => { setChallengeIdx(i); handleReset(); }}>
              <Shuffle size={14} /> {c.title}
            </button>
          ))}
        </div>

        <div style={{ background: 'var(--bg)', borderRadius: 12, padding: 16, marginBottom: 16 }}>
          <strong>{challenge.title}</strong>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', margin: '4px 0 0' }}>{challenge.description}</p>
        </div>

        {/* Draggable IPs */}
        <div className="drag-drop-ips">
          <h4 style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: 8 }}>IP Addresses:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {availableIPs.map((ipData) => {
              const origIdx = challenge.ips.indexOf(ipData);
              return (
                <div key={origIdx}
                  className={`drag-ip ${submitted ? (results[origIdx] ? 'correct' : 'wrong') : ''}`}
                  draggable={!submitted}
                  onDragStart={() => handleDragStart(origIdx)}>
                  <span>{ipData.ip}</span>
                  {submitted && (
                    results[origIdx]
                      ? <CheckCircle size={14} color="var(--success)" />
                      : <XCircle size={14} color="var(--danger)" />
                  )}
                </div>
              );
            })}
            {availableIPs.length === 0 && !submitted && (
              <p style={{ color: 'var(--text-lighter)', fontSize: '0.85rem' }}>Semua IP sudah di-drag ke subnet!</p>
            )}
          </div>
        </div>

        {/* Drop zones */}
        <div className="drag-drop-zones" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginTop: 16 }}>
          {challenge.subnets.map((subnet, sIdx) => (
            <div key={sIdx}
              className={`drop-zone ${draggedIP !== null ? 'active' : ''}`}
              onDragOver={e => { e.preventDefault(); e.currentTarget.classList.add('over'); }}
              onDragLeave={e => e.currentTarget.classList.remove('over')}
              onDrop={e => { e.currentTarget.classList.remove('over'); handleDrop(sIdx); }}>
              <div className="drop-zone-header">
                <strong>{subnet.name}</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-lighter)' }}>{subnet.cidr}</span>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', margin: '4px 0 8px' }}>{subnet.need}</p>
              <div className="drop-zone-items">
                {(placed[sIdx] || []).map(ipIdx => {
                  const ipData = challenge.ips[ipIdx];
                  return (
                    <div key={ipIdx}
                      className={`drag-ip placed ${submitted ? (results[ipIdx] ? 'correct' : 'wrong') : ''}`}
                      onClick={() => handleRemove(sIdx, ipIdx)}>
                      <span>{ipData.ip}</span>
                      {submitted
                        ? (results[ipIdx] ? <CheckCircle size={14} /> : <XCircle size={14} />)
                        : <span style={{ cursor: 'pointer', color: 'var(--danger)' }}>×</span>
                      }
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
          {!submitted ? (
            <button className="btn btn-success" onClick={handleSubmit}
              disabled={Object.values(placed).flat().length < challenge.ips.length}>
              <CheckCircle size={16} /> Cek Jawaban
            </button>
          ) : (
            <>
              <button className="btn btn-primary" onClick={handleNext}><Shuffle size={16} /> Soal Berikutnya</button>
              <button className="btn btn-secondary" onClick={handleReset}><RotateCcw size={16} /> Ulangi</button>
            </>
          )}
        </div>

        {submitted && (
          <div className="info-box" style={{ marginTop: 16 }}>
            <strong>
              {Object.values(results).filter(Boolean).length} / {challenge.ips.length} Benar —
              {Object.values(results).filter(Boolean).length === challenge.ips.length
                ? ' Sempurna!' : ' Coba lagi ya!'}
            </strong>
          </div>
        )}
      </div>
    </div>
  );
}
