import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info } from 'lucide-react';
import ModulPostTest from '../../components/ModulPostTest';
import { KKA_META } from '../../lib/examLib';
import { getUjianBySlug, UJIAN_KKA } from '../../data/kka/ujianKKA';

/**
 * Halaman ujian per elemen: /kka/ujian/:slug (mis. /kka/ujian/elemen3).
 *
 * Penting: `meta` dikirim HANYA untuk elemen yang sedang dikerjakan, supaya
 * validasi NIS di server tidak memblokir siswa yang sudah menyelesaikan
 * elemen sebelumnya dan lanjut ke elemen berikutnya.
 */
export default function UjianElemenKKA() {
  const { slug } = useParams();
  const bank = getUjianBySlug(slug);

  if (!bank) return <Navigate to="/kka/ujian" replace />;

  const meta = KKA_META.filter((m) => m.key === bank.key);
  const waktu = Math.ceil(bank.questions.length * 1.5);
  const posisi = UJIAN_KKA.findIndex((b) => b.slug === bank.slug) + 1;

  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Ujian KKA — {bank.label}: {bank.judul}</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Elemen {posisi} dari {UJIAN_KKA.length} · {bank.desc}
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
        title={`Ujian KKA — ${bank.label}: ${bank.judul}`}
        questions={bank.questions}
        storageKey={bank.key}
        scoreKey={bank.key}
        meta={meta}
      />

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/kka/ujian">
          <ArrowLeft size={16} /> Daftar Ujian KKA
        </Link>
      </p>
    </div>
  );
}
