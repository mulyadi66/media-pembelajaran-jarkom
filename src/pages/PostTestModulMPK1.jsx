import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info } from 'lucide-react';
import ModulPostTest from '../components/ModulPostTest';
import { MODUL_META } from '../lib/examLib';
import { getPostTestBySlug, MODUL_POSTTEST } from '../data/modulPostTests';

/**
 * Halaman post test per modul: /mpk1/posttest/:slug (mis. /mpk1/posttest/modul2).
 *
 * Penting: `meta` dikirim HANYA untuk modul yang sedang dikerjakan, supaya
 * validasi NIS di server tidak memblokir siswa yang sudah menyelesaikan modul
 * sebelumnya lalu lanjut ke modul berikutnya. Tanpa filter ini, meta default
 * berisi ketiga modul dan siswa akan selalu ditolak di modul 2 dan 3.
 */
export default function PostTestModulMPK1() {
  const { slug } = useParams();
  const bank = getPostTestBySlug(slug);

  if (!bank) return <Navigate to="/mpk1/posttest" replace />;

  const meta = MODUL_META.filter((m) => m.key === bank.key);
  const waktu = Math.ceil(bank.questions.length * 1.5);
  const posisi = MODUL_POSTTEST.findIndex((b) => b.slug === bank.slug) + 1;

  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>
              Post Test {bank.label} — {bank.judul}
            </h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Modul {posisi} dari {MODUL_POSTTEST.length} · {bank.desc}
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> {bank.questions.length} soal pilihan ganda, waktu sekitar {waktu} menit.
            Token dari guru wajib diisi, lalu identitas (Nama, NIS, Kelas). Nilai &amp; durasi
            pengerjaanmu tercatat otomatis untuk rekap guru. Post test ini hanya bisa dikirim{' '}
            <strong>satu kali</strong>.
          </p>
        </div>
      </div>

      <ModulPostTest
        title={`Post Test ${bank.label}`}
        questions={bank.questions}
        storageKey={bank.key}
        scoreKey={bank.key}
        meta={meta}
      />

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/mpk1/posttest">
          <ArrowLeft size={16} /> Daftar Post Test MPK 1
        </Link>
      </p>
    </div>
  );
}
