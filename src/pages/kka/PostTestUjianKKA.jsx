import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info, Lock, CheckCircle2 } from 'lucide-react';
import { UJIAN_KKA, UJIAN_KKA_TOTAL, UJIAN_KKA_SOAL_PER_ELEMEN } from '../../data/kka/ujianKKA';
import { getExamHistory, isModulLocked } from '../../lib/examLib';

const ICON_COLOR = [
  ['#22c55e', '#16a34a'],
  ['#06b6d4', '#0891b2'],
  ['#f59e0b', '#d97706'],
  ['#ef4444', '#dc2626'],
  ['#8b5cf6', '#6d28d9'],
];

/** Landing /kka/ujian — siswa memilih elemen yang akan dikerjakan. */
export default function PostTestUjianKKA() {
  const history = getExamHistory();

  const hasil = (key) => history.find((h) => h.modul === key);
  const totalSelesai = UJIAN_KKA.filter((b) => hasil(b.key)).length;

  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Ujian KKA</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Koding dan Kecerdasan Artifisial — 5 ujian per elemen, total {UJIAN_KKA_TOTAL} soal.
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> Setiap elemen punya ujian sendiri berisi {UJIAN_KKA_SOAL_PER_ELEMEN} soal.
            Kerjakan satu per satu: token guru &rarr; identitas (Nama, NIS, Kelas) &rarr; soal + timer
            &rarr; submit. Nilai dan durasi tiap elemen tercatat otomatis di rekap guru, dan tiap
            elemen hanya bisa dikirim <strong>satu kali</strong>.
          </p>
        </div>
        {totalSelesai > 0 && (
          <div className="exam-status saved" style={{ marginTop: 12 }}>
            <CheckCircle2 size={16} /> {totalSelesai} dari {UJIAN_KKA.length} elemen sudah kamu kerjakan
            di perangkat ini.
          </div>
        )}
      </div>

      <div className="ujian-elemen-list">
        {UJIAN_KKA.map((b, i) => {
          const h = hasil(b.key);
          const terkunci = isModulLocked(b.key);
          return (
            <Link
              key={b.key}
              to={`/kka/ujian/${b.slug}`}
              className="ujian-elemen-card"
              aria-label={`Ujian ${b.label}: ${b.judul}`}
            >
              <div
                className="ujian-elemen-icon"
                style={{ background: `linear-gradient(135deg, ${ICON_COLOR[i][0]}, ${ICON_COLOR[i][1]})` }}
                aria-hidden="true"
              >
                {terkunci ? <CheckCircle2 size={20} /> : <Lock size={20} />}
              </div>
              <div className="ujian-elemen-body">
                <strong>{b.label}: {b.judul}</strong>
                <span>{b.desc}</span>
                <small>
                  {b.questions.length} soal · sekitar {Math.ceil(b.questions.length * 1.5)} menit
                  {h ? ` · nilai ${h.nilai}` : ''}
                </small>
              </div>
              {terkunci ? (
                <span className="status-badge" data-status="selesai">Selesai</span>
              ) : (
                <span className="status-badge" data-status="belum">Belum</span>
              )}
            </Link>
          );
        })}
      </div>

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/kka">
          <ArrowLeft size={16} /> Kembali ke Dashboard KKA
        </Link>
      </p>

      <style>{`
        .ujian-elemen-list { display: grid; gap: 12px; margin-top: 16px; }
        .ujian-elemen-card {
          display: flex; align-items: center; gap: 14px; padding: 14px 16px;
          background: var(--card-bg, #fff); border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px; text-decoration: none; color: inherit; transition: .15s;
        }
        .ujian-elemen-card:hover { transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,0,0,.08); }
        .ujian-elemen-icon {
          width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; color: #fff;
        }
        .ujian-elemen-body { display: flex; flex-direction: column; gap: 2px; flex: 1; min-width: 0; }
        .ujian-elemen-body strong { font-size: 0.95rem; }
        .ujian-elemen-body span { font-size: 0.82rem; color: var(--text-light); }
        .ujian-elemen-body small { font-size: 0.75rem; color: var(--text-lighter, #94a3b8); }
      `}</style>
    </div>
  );
}
