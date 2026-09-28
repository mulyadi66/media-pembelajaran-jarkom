import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info } from 'lucide-react';
import ModulPostTest from '../../components/ModulPostTest';
import { KKA_META } from '../../lib/examLib';
import { posttestUjianKKA, POSTTEST_UJIAN_KKA_META } from '../../data/kka/posttestUjianKKA';

export default function PostTestUjianKKA() {
  const meta = KKA_META[0];
  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>{POSTTEST_UJIAN_KKA_META.title}</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Evaluasi akhir mata pelajaran Koding dan Kecerdasan Artifisial (Elemen 1–5).
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> {POSTTEST_UJIAN_KKA_META.jumlah} soal pilihan ganda (5 soal per elemen),
            token dari guru wajib diisi, lalu identitas (Nama, NIS, Kelas). Waktu{' '}
            {POSTTEST_UJIAN_KKA_META.waktu}. Nilai &amp; durasi pengerjaanmu tercatat otomatis untuk
            rekap guru.
          </p>
        </div>
      </div>

      <ModulPostTest
        title={POSTTEST_UJIAN_KKA_META.title}
        questions={posttestUjianKKA}
        storageKey={meta.key}
        scoreKey={meta.key}
        meta={KKA_META}
      />

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/kka">
          <ArrowLeft size={16} /> Kembali ke Dashboard KKA
        </Link>
      </p>
    </div>
  );
}
