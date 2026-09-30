import { useCallback, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ClipboardCheck, Info, Trophy } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Quiz from '../components/Quiz';
import {
  PRETEST_MPK1,
  PRETEST_MPK1_SOAL_PER_MODUL,
  PRETEST_MPK1_TINGKAT,
  PRETEST_MPK1_SKOR_KEY,
  getPretestBySlug,
  getRataPretest,
  hitungTingkatSoal,
} from '../data/mpk1/pretestMPK1';

/**
 * Halaman pre-test per modul: /mpk1/pretest/:slug (mis. /mpk1/pretest/modul2).
 *
 * Berbeda dengan Post Test MPK 1, pre-test tidak memakai token guru dan tidak
 * terkunci di server — tujuannya diagnostik dan boleh diulang. Yang dihitung
 * ada dua: nilai per modul (`mpk1_modul{n}_pretest`) untuk halaman Hasil, dan
 * nilai agregat (`mpk1_pretest`) yang dipakai badge & leaderboard.
 */
export default function PreTestModulMPK1() {
  const { slug } = useParams();
  const bank = getPretestBySlug(slug);
  const { scores, saveQuizScore } = useApp();
  const [rataSnapshot, setRataSnapshot] = useState(null);

  const simpanNilai = useCallback((score) => {
    saveQuizScore(bank.key, score);
    // Rata-rata agregat dihitung ulang dari seluruh modul yang sudah selesai
    // supaya badge/leaderboard di halaman Hasil langsung sinkron.
    const berikut = { ...scores, [bank.key]: score };
    const { rata, selesai } = getRataPretest(berikut);
    saveQuizScore(PRETEST_MPK1_SKOR_KEY, rata ?? 0);
    setRataSnapshot({ rata, selesai });
  }, [bank, scores, saveQuizScore]);

  if (!bank) return <Navigate to="/mpk1/pretest" replace />;

  const posisi = PRETEST_MPK1.findIndex((b) => b.slug === bank.slug) + 1;
  const waktu = Math.ceil(bank.questions.length * 1.5);
  const tingkat = hitungTingkatSoal(bank.questions);

  return (
    <div className="content-section" style={{ maxWidth: 820, margin: '0 auto' }}>
      <div className="materi-card modul-posttest">
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>Pre-Test MPK 1 &mdash; {bank.label}: {bank.judul}</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Modul {posisi} dari {PRETEST_MPK1.length} &middot; {bank.desc}
            </p>
          </div>
        </div>
        <div className="info-box" style={{ margin: '12px 0 0' }}>
          <p>
            <Info size={14} /> {PRETEST_MPK1_SOAL_PER_MODUL} soal pilihan ganda
            ({tingkat.Mudah} mudah, {tingkat.Sedang} sedang, {tingkat.Sulit} sulit), waktu sekitar{' '}
            {waktu} menit. Kerjakan <strong>sebelum</strong> membaca modul ini sebagai bahan
            diagnose, bukan untuk dinilai. Boleh diulang dan tidak memerlukan token.
          </p>
        </div>
        <div className="pretest-tingkat-list" style={{ marginTop: 14 }}>
          {PRETEST_MPK1_TINGKAT.map(t => (
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
            <Trophy size={16} /> Rata-rata pre-test kamu dari {rataSnapshot.selesai} modul yang
            sudah dikerjakan: <strong>{rataSnapshot.rata}</strong>. Bandingkan dengan rata-rata
            Post Test di halaman <em>Hasil &amp; Sertifikat</em>.
          </div>
        )}
      </div>

      {/* key={bank.key} memaksa Quiz remount saat pindah modul lewat URL,
          supaya state soal/timer tidak mewarisi modul sebelumnya. */}
      <Quiz
        key={bank.key}
        questions={bank.questions}
        storageKey={bank.key}
        timeLimit={waktu}
        onScoreSubmit={simpanNilai}
      />

      <p style={{ textAlign: 'center', marginTop: 16 }}>
        <Link className="btn btn-secondary" to="/mpk1/pretest">
          <ArrowLeft size={16} /> Daftar Pre-Test MPK 1
        </Link>
      </p>
    </div>
  );
}
