import { useState } from 'react';
import { FileText, Printer, ChevronDown, ChevronUp } from 'lucide-react';
import { worksheetsMPK2 } from '../../data/mpk2/worksheetsMPK2';

export default function WorksheetPageMPK2() {
  const [activeModule, setActiveModule] = useState('modul1');
  const [openQ, setOpenQ] = useState({});

  const toggle = (id) => setOpenQ(prev => ({ ...prev, [id]: !prev[id] }));
  const modul = worksheetsMPK2[activeModule];

  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <h3><FileText size={20} /> Lembar Kerja Praktik MPK 2</h3>
        <p style={{marginBottom: 16}}>Soal latihan offline untuk setiap modul. Kerjakan di buku tulis, lalu cocokkan dengan pembahasan.</p>
        <button className="btn btn-secondary" onClick={() => window.print()} style={{marginBottom: 20}}>
          <Printer size={16} /> Cetak Lembar Kerja
        </button>

        <div className="ws-tabs">
          {Object.entries(worksheetsMPK2).map(([key, val]) => (
            <button key={key} className={`ws-tab ${activeModule === key ? 'active' : ''}`}
              onClick={() => { setActiveModule(key); setOpenQ({}); }}>
              {val.title}
            </button>
          ))}
        </div>

        <div className="ws-questions">
          {modul.questions.map((q, i) => (
            <div key={q.id} className="ws-question">
              <div className="ws-q-header" onClick={() => toggle(q.id)}>
                <span className="ws-q-num">Soal {i + 1}</span>
                <span className="ws-q-text">{q.question}</span>
                {openQ[q.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
              {openQ[q.id] && (
                <div className="ws-q-hint">
                  <strong>Petunjuk:</strong> {q.hint}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}