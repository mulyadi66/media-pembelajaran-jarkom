import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info } from 'lucide-react';
import ModulPostTest from '../../components/ModulPostTest';
import { KKA_XI_META } from '../../lib/examLib';
import { getUjianBySlug, UJIAN_KKA_XI } from '../../data/kka-xi/ujianKKAXI';

/**
 * Halaman ujian per modul: /kka-xi/ujian/:slug (mis. /kka-xi/ujian/modul3).
 *
 * Penting: `meta` dikirim HANYA untuk modul yang sedang dikerjakan, supaya
 * validasi NIS di server tidak memblokir siswa yang sudah menyelesaikan
 * modul sebelumnya dan lanjut ke modul berikutnya.
 */
export default function UjianModulKKAXI() {
  const { slug } = useParams();
  const bank = getUjianBySlug(slug);

  if (!bank) return <Navigate to="/kka-xi/ujian" replace />;

  const meta = KKA_XI_META.filter((m) => m.key === bank.key);
  const waktu = Math.ceil(bank.questions.length * 1.5);
  const posisi = UJIAN_KKA_XI.findIndex((b) => b.slug === bank.slug) + 1;

  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Ujian KKA XI — {bank.label}: {bank.judul}</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Modul {posisi} dari {UJIAN_KKA_XI.length} · {bank.desc}
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> {bank.questions.length} soal pilihan ganda, waktu sekitar {waktu} menit.
            Token dari guru wajib diisi, lalu identitas (Nama, NIS, Kelas). Nilai &amp; durasi pengerjaanmu
            tercatat otomatis untuk rekap guru. Ujian ini hanya bisa dikirim <strong>satu kali</strong>.
          </p>
        </div>
      </div>

      <ModulPostTest
        title={`Ujian KKA XI — ${bank.label}: ${bank.judul}`}
        questions={bank.questions}
        storageKey={bank.key}
        scoreKey={bank.key}
        meta={meta}
        kelasPlaceholder="Contoh: XI"
      />

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/kka-xi/ujian">
          <ArrowLeft size={16} /> Daftar Ujian KKA XI
        </Link>
      </p>
    </div>
  );
}
