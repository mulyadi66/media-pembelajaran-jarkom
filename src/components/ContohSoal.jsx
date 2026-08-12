import { useState } from 'react';
import { BookOpenCheck, CheckCircle2, ClipboardList, Eye, EyeOff, PenLine } from 'lucide-react';

export function ContohSoal({ data }) {
  const [open, setOpen] = useState({});
  return (
    <div className="contoh-soal-block">
      <h4 className="contoh-heading">
        <BookOpenCheck size={17} /> Contoh Soal &amp; Penyelesaian
      </h4>
      {data.map((s, i) => (
        <div className="contoh-soal" key={i}>
          <div className="contoh-soal-head">
            <span className="contoh-no">Soal {s.no || i + 1}</span>
            <button
              type="button"
              className="contoh-toggle"
              onClick={() => setOpen(o => ({ ...o, [i]: !o[i] }))}
              aria-expanded={!!open[i]}
            >
              {open[i] ? (
                <>
                  <EyeOff size={14} /> Sembunyikan
                </>
              ) : (
                <>
                  <Eye size={14} /> Lihat Penyelesaian
                </>
              )}
            </button>
          </div>
          <p className="contoh-soal-q">{s.soal}</p>
          {open[i] && (
            <div className="contoh-soal-a">
              <p className="contoh-soal-a-title">
                <CheckCircle2 size={14} /> Penyelesaian:
              </p>
              {typeof s.penyelesaian === 'string' ? (
                <p>{s.penyelesaian}</p>
              ) : (
                s.penyelesaian.map((line, j) => <p key={j}>{line}</p>)
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function Tugas({ data }) {
  const [done, setDone] = useState({});
  return (
    <div className="tugas-block">
      <h4 className="tugas-heading">
        <ClipboardList size={17} /> Tugas
      </h4>
      <ol className="tugas-list">
        {data.map((t, i) => (
          <li key={i} className={done[i] ? 'tugas-done' : ''}>
            <button
              type="button"
              className="tugas-check"
              onClick={() => setDone(d => ({ ...d, [i]: !d[i] }))}
              aria-label={done[i] ? 'Tandai belum selesai' : 'Tandai selesai'}
            >
              {done[i] ? <CheckCircle2 size={18} /> : <PenLine size={18} />}
            </button>
            <span>{t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
