import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info, Lock, CheckCircle2 } from 'lucide-react';
import {
  UJIAN_KKA_XI,
  UJIAN_KKA_XI_TOTAL,
  UJIAN_KKA_XI_SOAL_PER_MODUL,
} from '../../data/kka-xi/ujianKKAXI';
import { getExamHistory, isModulLocked } from '../../lib/examLib';

const ICON_COLOR = [
  ['#22c55e', '#16a34a'],
  ['#06b6d4', '#0891b2'],
  ['#f59e0b', '#d97706'],
  ['#ef4444', '#dc2626'],
];

/** Landing /kka-xi/ujian — siswa memilih modul yang akan dikerjakan. */
export default function UjianKKAXI() {
  const history = getExamHistory();

  const hasil = (key) => history.find((h) => h.modul === key);
  const totalSelesai = UJIAN_KKA_XI.filter((b) => hasil(b.key)).length;

  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Ujian KKA XI</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Koding dan Kecerdasan Artifisial XI — 4 ujian per modul, total {UJIAN_KKA_XI_TOTAL} soal.
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> Setiap modul punya ujian sendiri berisi {UJIAN_KKA_XI_SOAL_PER_MODUL} soal.
            Kerjakan satu per satu: token guru &rarr; identitas (Nama, NIS, Kelas) &rarr; soal + timer
            &rarr; submit. Nilai dan durasi tiap modul tercatat otomatis di rekap guru, dan tiap
            modul hanya bisa dikirim <strong>satu kali</strong>.
          </p>
        </div>
        {totalSelesai > 0 && (
          <div className="exam-status saved" style={{ marginTop: 12 }}>
            <CheckCircle2 size={16} /> {totalSelesai} dari {UJIAN_KKA_XI.length} modul sudah kamu
            kerjakan di perangkat ini.
          </div>
        )}
      </div>

      <div className="ujian-elemen-list">
        {UJIAN_KKA_XI.map((b, i) => {
          const h = hasil(b.key);
          const terkunci = isModulLocked(b.key);
          return (
            <Link
              key={b.key}
              to={`/kka-xi/ujian/${b.slug}`}
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
        <Link className="btn btn-secondary" to="/kka-xi">
          <ArrowLeft size={16} /> Kembali ke Dashboard KKA XI
        </Link>
      </p>
    </div>
  );
}
