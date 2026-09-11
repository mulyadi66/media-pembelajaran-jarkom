import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info } from 'lucide-react';
import ModulPostTest from '../components/ModulPostTest';
import { modul3PostTest } from '../data/modulPostTests';

export default function PostTestModul3() {
  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Post Test Modul 3</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Evaluasi akhir materi Modul 3 — Pengalamatan Jaringan.
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> 25 soal pilihan ganda, token dari guru wajib diisi, lalu identitas
            (Nama, NIS, Kelas). Waktu ±1,5 menit/soal. Nilai &amp; durasi pengerjaanmu tercatat otomatis
            untuk rekap guru.
          </p>
        </div>
      </div>

      <ModulPostTest
        title="Post Test Modul 3"
        questions={modul3PostTest}
        storageKey="mpk1_modul3_posttest"
        scoreKey="mpk1_modul3_posttest"
      />

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/mpk1/modul3">
          <ArrowLeft size={16} /> Kembali ke Materi Modul 3
        </Link>
      </p>
    </div>
  );
}