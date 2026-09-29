import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info, CheckCircle2, Circle, TrendingUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import {
  PRETEST_KKA,
  PRETEST_KKA_TOTAL,
  PRETEST_KKA_SOAL_PER_ELEMEN,
  PRETEST_KKA_TINGKAT,
  getRataPretest,
} from '../../data/kka/pretestKKA';

const ICON_COLOR = [
  ['#22c55e', '#16a34a'],
  ['#06b6d4', '#0891b2'],
  ['#f59e0b', '#d97706'],
  ['#a855f7', '#7c3aed'],
  ['#ec4899', '#be185d'],
];

/** Landing /kka/pretest — siswa memilih elemen yang akan diuji pemahaman awalnya. */
export default function PreTestKKA() {
  const { scores } = useApp();
  const { rata, selesai } = getRataPretest(scores);

  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Pre-Test KKA</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Koding dan Kecerdasan Artifisial — 5 pre-test per elemen, total {PRETEST_KKA_TOTAL} soal.
            </p>
          </div>
        </div>

        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} />             Kerjakan pre-test <strong>sebelum</strong> membaca materi, satu untuk
            setiap elemen. Tujuannya mengukur pemahaman awal, jadi <strong>tidak ada nilai negatif</strong>
            &mdash; jawaban salah justru membantu kita tahu bagian mana yang perlu dipelajari lebih dalam.
            Boleh diulang kapan saja.
          </p>
        </div>

        {selesai > 0 && (
          <div className="exam-status saved" style={{ marginTop: 12 }}>
            <CheckCircle2 size={16} /> {selesai} dari {PRETEST_KKA.length} elemen sudah kamu kerjakan
            {rata !== null && <> — rata-rata <strong>{rata}</strong></>}.
          </div>
        )}

        <div className="pretest-tingkat-list" style={{ marginTop: 14 }}>
          {PRETEST_KKA_TINGKAT.map(t => (
            <div key={t.diff} className="pretest-tingkat-item">
              <span className="pretest-tingkat-badge" style={{ background: t.color }}>
                {PRETEST_KKA_SOAL_PER_ELEMEN / 3} soal
              </span>
              <div>
                <strong>{t.diff} &mdash; {t.level}</strong>
                <span>{t.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', margin: '8px 0 0' }}>
          <TrendingUp size={13} /> Tingkat kesulitan tiap soal akan tampil di atas soal
          tersebut saat kamu mulai mengerjakan.
        </p>
      </div>

      <div className="ujian-elemen-list">
        {PRETEST_KKA.map((b, i) => {
          const nilai = scores[b.key];
          const dikerjakan = nilai !== undefined;
          return (
            <Link
              key={b.key}
              to={`/kka/pretest/${b.slug}`}
              className="ujian-elemen-card"
              aria-label={`Pre-Test ${b.label}: ${b.judul}`}
            >
              <div
                className="ujian-elemen-icon"
                style={{ background: `linear-gradient(135deg, ${ICON_COLOR[i][0]}, ${ICON_COLOR[i][1]})` }}
                aria-hidden="true"
              >
                {dikerjakan ? <CheckCircle2 size={20} /> : <Circle size={20} />}
              </div>
              <div className="ujian-elemen-body">
                <strong>{b.label}: {b.judul}</strong>
                <span>{b.desc}</span>
                <small>
                  {b.questions.length} soal · sekitar {Math.ceil(b.questions.length * 1.5)} menit
                  {dikerjakan ? ` · nilai ${nilai}` : ''}
                </small>
              </div>
              {dikerjakan ? (
                <span className="status-badge" data-status="selesai">{nilai}</span>
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
    </div>
  );
}
