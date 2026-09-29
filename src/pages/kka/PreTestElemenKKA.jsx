import { useCallback, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info, Trophy } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import Quiz from '../../components/Quiz';
import {
  PRETEST_KKA,
  PRETEST_KKA_SOAL_PER_ELEMEN,
  PRETEST_KKA_TINGKAT,
  PRETEST_KKA_SKOR_KEY,
  getPretestBySlug,
  getRataPretest,
  hitungTingkatSoal,
} from '../../data/kka/pretestKKA';

/**
 * Halaman pre-test per elemen: /kka/pretest/:slug (mis. /kka/pretest/elemen2).
 *
 * Berbeda dengan Ujian KKA, pre-test tidak memakai token guru dan tidak
 * terkunci di server — tujuannya diagnostik dan boleh diulang. Yang dihitung
 * ada dua: nilai per elemen (`kka_elemen{n}_pretest`) untuk halaman Hasil, dan
 * nilai agregat (`kka_pretest`) yang dipakai badge & leaderboard.
 */
export default function PreTestElemenKKA() {
  const { slug } = useParams();
  const bank = getPretestBySlug(slug);
  const { scores, saveQuizScore } = useApp();
  const [rataSnapshot, setRataSnapshot] = useState(null);

  const simpanNilai = useCallback((score) => {
    saveQuizScore(bank.key, score);
    // Rata-rata agregat dihitung ulang dari seluruh elemen yang sudah selesai
    // supaya badge/leaderboard di halaman Hasil langsung sinkron.
    const berikut = { ...scores, [bank.key]: score };
    const { rata, selesai } = getRataPretest(berikut);
    saveQuizScore(PRETEST_KKA_SKOR_KEY, rata ?? 0);
    setRataSnapshot({ rata, selesai });
  }, [bank, scores, saveQuizScore]);

  if (!bank) return <Navigate to="/kka/pretest" replace />;

  const posisi = PRETEST_KKA.findIndex((b) => b.slug === bank.slug) + 1;
  const waktu = Math.ceil(bank.questions.length * 1.5);
  const tingkat = hitungTingkatSoal(bank.questions);

  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Pre-Test KKA &mdash; {bank.label}: {bank.judul}</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Elemen {posisi} dari {PRETEST_KKA.length} &middot; {bank.desc}
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> {PRETEST_KKA_SOAL_PER_ELEMEN} soal pilihan ganda
            ({tingkat.Mudah} mudah, {tingkat.Sedang} sedang, {tingkat.Sulit} sulit), waktu sekitar{' '}
            {waktu} menit. Kerjakan <strong>sebelum</strong> membaca elemen ini sebagai bahan
            diagnose, bukan untuk dinilai. Boleh diulang dan tidak memerlukan token.
          </p>
        </div>
        <div className="pretest-tingkat-list" style={{ marginTop: 14 }}>
          {PRETEST_KKA_TINGKAT.map(t => (
            <div key={t.diff} className="pretest-tingkat-item">
              <span className="pretest-tingkat-badge" style={{ background: t.color }}>
                {tingkat[t.diff]} soal
              </span>
              <div>
                <strong>{t.diff} &mdash; {t.level}</strong>
                <span>{t.desc}</span>
              </div>
            </div>
          ))}
        </div>
        {rataSnapshot && (
          <div className="exam-status saved" style={{ marginTop: 12 }}>
            <Trophy size={16} /> Rata-rata pre-test kamu dari {rataSnapshot.selesai} elemen yang
            sudah dikerjakan: <strong>{rataSnapshot.rata}</strong>. Bandingkan dengan rata-rata
            Ujian KKA di halaman <em>Hasil &amp; Sertifikat</em>.
          </div>
        )}
      </div>

      {/* key={bank.key} memaksa Quiz remount saat pindah elemen lewat URL,
          supaya state soal/timer tidak mewarisi elemen sebelumnya. */}
      <Quiz
        key={bank.key}
        questions={bank.questions}
        storageKey={bank.key}
        timeLimit={waktu}
        onScoreSubmit={simpanNilai}
      />

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/kka/pretest">
          <ArrowLeft size={16} /> Daftar Pre-Test KKA
        </Link>
      </p>
    </div>
  );
}
