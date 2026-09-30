import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info, Lock, CheckCircle2 } from 'lucide-react';
import {
  MODUL_POSTTEST,
  MODUL_POSTTEST_SOAL_PER_MODUL,
  MODUL_POSTTEST_TOTAL,
} from '../data/modulPostTests';
import { getExamHistory, isModulLocked } from '../lib/examLib';

const ICON_COLOR = [
  ['#22c55e', '#16a34a'],
  ['#06b6d4', '#0891b2'],
  ['#f59e0b', '#d97706'],
  ['#ef4444', '#dc2626'],
];

/**
 * Landing /mpk1/posttest — siswa memilih modul yang akan diuji.
 *
 * Post-Test adalah ujian bertoken: token guru -> identitas -> soal + timer ->
 * submit sekali. Retake dikunci server, jadi status "Selesai" di bawah dibaca
 * dari local submission lock (isModulLocked), bukan dari nilai di storage.
 */
export default function PostTestMPK1() {
  const history = getExamHistory();

  const hasil = (key) => history.find((h) => h.modul === key);
  const totalSelesai = MODUL_POSTTEST.filter((b) => isModulLocked(b.key)).length;

  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Post Test MPK 1</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Perencanaan &amp; Pengalamatan Jaringan — 3 post test per modul, total{' '}
              {MODUL_POSTTEST_TOTAL} soal.
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> Setiap modul punya post test sendiri berisi{' '}
            {MODUL_POSTTEST_SOAL_PER_MODUL} soal bertingkat HOTS (C2–C6). Kerjakan satu per satu: token
            guru &rarr; identitas (Nama, NIS, Kelas) &rarr; soal + timer &rarr; submit. Nilai dan durasi
            tiap modul tercatat otomatis di rekap guru, dan tiap modul hanya bisa dikirim{' '}
            <strong>satu kali</strong>. Sertifikat terbit bila ketiga modul selesai dengan rerata
            &ge; 70.
          </p>
        </div>
        {totalSelesai > 0 && (
          <div className="exam-status saved" style={{ marginTop: 12 }}>
            <CheckCircle2 size={16} /> {totalSelesai} dari {MODUL_POSTTEST.length} modul sudah kamu
            kerjakan di perangkat ini.
          </div>
        )}
      </div>

      <div className="ujian-elemen-list">
        {MODUL_POSTTEST.map((b, i) => {
          const h = hasil(b.key);
          const selesai = isModulLocked(b.key);
          return (
            <Link
              key={b.key}
              to={`/mpk1/posttest/${b.slug}`}
              className="ujian-elemen-card"
              aria-label={`Post Test ${b.label}: ${b.judul}`}
            >
              <div
                className="ujian-elemen-icon"
                style={{ background: `linear-gradient(135deg, ${ICON_COLOR[i][0]}, ${ICON_COLOR[i][1]})` }}
                aria-hidden="true"
              >
                {selesai ? <CheckCircle2 size={20} /> : <Lock size={20} />}
              </div>
              <div className="ujian-elemen-body">
                <strong>
                  {b.label}: {b.judul}
                </strong>
                <span>{b.desc}</span>
                <small>
                  {b.questions.length} soal · sekitar {Math.ceil(b.questions.length * 1.5)} menit
                  {h ? ` · nilai ${h.nilai}` : ''}
                </small>
              </div>
              {selesai ? (
                <span className="status-badge" data-status="selesai">
                  Selesai
                </span>
              ) : (
                <span className="status-badge" data-status="belum">
                  Belum
                </span>
              )}
            </Link>
          );
        })}
      </div>

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/mpk1">
          <ArrowLeft size={16} /> Kembali ke Dashboard MPK 1
        </Link>
      </p>
    </div>
  );
}
