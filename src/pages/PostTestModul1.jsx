import { Link } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info } from 'lucide-react';
import ModulPostTest from '../components/ModulPostTest';
import { modul1PostTest } from '../data/modulPostTests';

export default function PostTestModul1() {
  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Post Test Modul 1</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Evaluasi akhir materi Modul 1 — Peralatan Jaringan.
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
        title="Post Test Modul 1"
        questions={modul1PostTest}
        storageKey="mpk1_modul1_posttest"
        scoreKey="mpk1_modul1_posttest"
      />

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/mpk1/modul1">
          <ArrowLeft size={16} /> Kembali ke Materi Modul 1
        </Link>
      </p>
    </div>
  );
}