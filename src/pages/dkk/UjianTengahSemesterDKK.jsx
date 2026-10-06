import { Link } from 'react-router-dom';
import { CalendarClock, Info } from 'lucide-react';
import ModulPostTest from '../../components/ModulPostTest';
import { DKK_META } from '../../lib/examLib';
import { utsDKK, UTS_DKK_SOAL } from '../../data/dkk/utsDKK';

const WAKTU = Math.max(10, Math.ceil(UTS_DKK_SOAL * 1.5));

/**
 * Ujian Tengah Semester DKK: /dkk/uts
 *
 * Alurnya sama dengan Ujian KKA — identitas -> token -> soal -> submit sekali.
 * Satu bank untuk seluruh topik, jadi hanya ada satu `modul` di server
 * (`dkk_uts`) dan retake langsung dikunci untuk NIS tersebut.
 */
export default function UjianTengahSemesterDKK() {
  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <CalendarClock size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Ujian Tengah Semester DKK</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Ujian komprehensif &middot; {UTS_DKK_SOAL} soal &middot; sekitar {WAKTU} menit
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> Materi yang diuji: proses bisnis, K3LH, kewirausahaan,
            perakitan komputer, dan cara setting IP address pada komputer berbasis
            Windows. Isi identitas dulu, lalu masukkan token dari guru untuk membuka soal.
            Nilai dan durasi pengerjaan tercatat otomatis untuk rekap guru, dan ujian ini
            hanya bisa dikirim <strong>satu kali</strong>.
          </p>
        </div>
      </div>

      <ModulPostTest
        title="Ujian Tengah Semester DKK"
        questions={utsDKK}
        storageKey={DKK_META[0].key}
        scoreKey={DKK_META[0].key}
        meta={DKK_META}
        examLabel="UTS"
        subtitle="Ujian tengah semester — menguji seluruh materi DKK sekaligus."
      />

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/dkk">
          <CalendarClock size={16} /> Kembali ke Dashboard DKK
        </Link>
      </p>
    </div>
  );
}