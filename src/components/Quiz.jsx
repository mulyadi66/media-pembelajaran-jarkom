import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { CheckCircle, XCircle, ChevronLeft, ChevronRight, Clock, Award, RotateCcw, KeyRound, AlertTriangle, Lock, Maximize2 } from 'lucide-react';
import { getIdentity, unlockCode, isTokenExpired } from '../lib/examLib';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Sidik jari bank soal, disimpan bersama hasil agar layar hasil bisa tahu
 * kalau bank tempat siswa itu dihitung sudah berubah.
 *
 * Cakupannya harus TEXTS + ISI OPSI, bukan hanya kunci jawaban. Dulu hanya
 * `id:answer`, sehingga bank boleh diacak ulang atau teks soalnya ditulis ulang
 * pada indeks jawaban yang sama tanpa sidik jari berubah. Akibatnya review
 * jawaban lama menampilkan kunci dan penjelasan yang tidak lagi cocok dengan
 * pertanyaan yang dijawab siswa, tanpa peringatan apa pun.
 *
 * Sengaja tanpa crypto: ini bukan kontrol keamanan, hanya deteksi perubahan.
 */
/**
 * Permutasi indeks opsi: `perm[pos]` = indeks opsi ASLI yang ditampilkan di
 * posisi `pos`. Dipakai supaya huruf kunci tiap soal berbeda antar perangkat.
 *
 * Tanpa ini urutan soal sudah acak, tapi kunci hurufnya tetap sama di semua
 * perangkat (mis. soal "urutan proses bisnis" selalu A) — pola yang justru
 * paling gampang dihafal saat mau nyontek. Yang diacak hanya URUTAN ISI opsi;
 * teks opsi tidak pernah diubah, dan huruf yang tampil selalu dihitung ulang
 * dari posisinya, bukan dari prefiks `A. ` yang tersimpan di bank.
 */
function buildOptOrder(questions) {
  return questions.map(q => shuffleArray((q.options || []).map((_, i) => i)));
}

/** Permutasi hanya sah kalau tetap memakai setiap indeks tepat satu kali. */
function isPermutation(arr, len) {
  return Array.isArray(arr)
    && arr.length === len
    && new Set(arr).size === len
    && arr.every(i => Number.isInteger(i) && i >= 0 && i < len);
}

function bankFingerprint(questions) {
  return `${questions.length}|${questions
    .map((q) => {
      // WAJIB dipanggil dengan bank soal ASLI (urutan opsi asli), bukan dengan
      // `qs` yang sudah diacak per perangkat: sidik jari harus sama di semua
      // perangkat, kalau ikut-acak tiap siswa akan selalu melihat "bank soal
      // berubah" padahal bank-nya tidak pernah diedit guru.
      const opsi = (q.options || [])
        .map((o) => String(o).replace(/^[A-E]\.\s*/, '').trim())
        .join('~');
      return `${q.id ?? ''}:${q.answer}:${q.question}:${opsi}`;
    })
    .sort()
    .join('#')}`;
}

/**
 * @param {object} [examGate] Token gate. Kalau diberikan, siswa WAJIB memasukkan
 *   token dulu. Bentuknya:
 *   `{ loading?: boolean, token?: string, expiresAt?: string|null, subject?: string, label?: string }`
 *   `loading`WAJIB dihormati: sebelum token selesai dimuat, `token` masih kosong.
 *   Kalau gate di-render hanya saat `token` berisi, halaman akan sempat
 *   membuka soal tanpa token — dan timer ikut jalan sebelum ada verifikasi.
 *   Quiz tanpa `examGate` (pre-test, challenge) tidak punya gerbang sama sekali.
 */
export default function Quiz({ questions, storageKey, timeLimit, onScoreSubmit, examGate }) {
  const [shuffledQs] = useState(() => {
    const storedOrder = localStorage.getItem(`jarkomlab_${storageKey}_order`);
    if (storedOrder) {
      try {
        const order = JSON.parse(storedOrder);
        // Validasi juga isi order: bank soal bisa saja diedit/berkurang setelah
        // siswa menyimpan urutan. Order basi (indeks di luar jangkauan) akan
        // membuat questions[i] undefined → halaman crash, jadi acak ulang.
        const valid = Array.isArray(order)
          && order.length === questions.length
          && order.every(i => Number.isInteger(i) && i >= 0 && i < questions.length);
        if (valid) return order.map(i => questions[i]);
      } catch { /* order korup, acak ulang */ }
    }
    return shuffleArray(questions);
  });
  const [optOrders] = useState(() => {
    const key = `jarkomlab_${storageKey}_optorder`;
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const valid = Array.isArray(parsed)
          && parsed.length === questions.length
          && parsed.every((perm, i) => isPermutation(perm, (questions[i].options || []).length));
        if (valid) return parsed;
      } catch { /* order korup, acak ulang */ }
    }
    return buildOptOrder(questions);
  });
  const [answers, setAnswers] = useState(() => {
    const saved = localStorage.getItem(`jarkomlab_${storageKey}`);
    if (!saved) return {};
    try { return JSON.parse(saved) || {}; } catch { return {}; }
  });
  const [currentIdx, setCurrentIdx] = useState(0);
  const [submitted, setSubmitted] = useState(() => {
    return localStorage.getItem(`jarkomlab_${storageKey}_submitted`) === 'true';
  });
  const [secondsLeft, setSecondsLeft] = useState(() => {
    const raw = localStorage.getItem(`jarkomlab_${storageKey}_deadline`);
    const d = raw ? parseInt(raw, 10) : NaN;
    return Number.isFinite(d) && d > Date.now()
      ? Math.ceil((d - Date.now()) / 1000)
      : timeLimit * 60;
  });
  const [tokenOk, setTokenOk] = useState(() => localStorage.getItem(`jarkomlab_${storageKey}_unlocked`) === '1');
  const [token, setToken] = useState('');
  const [tokenError, setTokenError] = useState(false);
  const [tabWarns, setTabWarns] = useState(() => Number(localStorage.getItem(`jarkomlab_${storageKey}_warns`) || 0));
  const [unlockInput, setUnlockInput] = useState('');
  const [unlockError, setUnlockError] = useState(false);
  const [lockMode, setLockMode] = useState('none'); // none | fs (fullscreen) | pseudo (tanpa fullscreen)
  const lockModeRef = useRef('none');
  const timerRef = useRef(null);
  const locked = lockMode !== 'none';

  // Ujian resmi (ada gate token guru) baru "mulai" setelah token tervalidasi.
  // Quiz biasa (pre-test, challenge) tanpa gate langsung dianggap berjalan.
  // WAJIB dihitung sebelum efek timer: kalau tidak, hitungan mundur sudah
  // berjalan saat siswa masih di layar token, dan bisa auto-submit nilai 0
  // yang lalu mengunci modul secara permanen di server.
  //
  // Penentu gerbang adalah `gated` (ada objek gate), BUKAN `token` berisi —
  // supaya fase loading tetap menahan halaman dan tidak membuka soal.
  const gated = Boolean(examGate);
  const gateToken = gated ? String(examGate.token || '').trim() : '';
  const gateExpired = gated && !examGate.loading && isTokenExpired(examGate.expiresAt);
  const examStarted = !gated || tokenOk;

  const setLock = (mode) => { lockModeRef.current = mode; setLockMode(mode); };

  // Pelanggaran (pindah tab/keluar kunci) disimpan agar tidak hilang saat refresh
  useEffect(() => {
    localStorage.setItem(`jarkomlab_${storageKey}_warns`, String(tabWarns));
  }, [tabWarns, storageKey]);

  // Kunci layar: fullscreen + sembunyikan sidebar/topbar agar siswa tidak membuka materi lain
  useEffect(() => {
    document.documentElement.classList.toggle('exam-lock-active', locked);
    return () => document.documentElement.classList.remove('exam-lock-active');
  }, [locked]);

  useEffect(() => {
    const onFs = () => {
      const full = !!document.fullscreenElement;
      if (full) {
        setLock('fs'); // masuk fullscreen (mis. lewat pintasan browser)
      } else if (lockModeRef.current === 'fs') {
        if (!submitted) setTabWarns(w => w + 1);
        setLock('none'); // keluar fullscreen = pelanggaran
      }
    };
    document.addEventListener('fullscreenchange', onFs);
    return () => document.removeEventListener('fullscreenchange', onFs);
  }, [submitted]);

  // Keluar kunci layar (submit/retry) tanpa dihitung pelanggaran
  const forceUnlock = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => setLock('none'));
    setLock('none');
  };

  const toggleLock = async () => {
    if (lockMode === 'fs') { try { await document.exitFullscreen(); } catch { setLock('none'); } return; }
    if (lockMode === 'pseudo') {
      if (!submitted) setTabWarns(w => w + 1); // keluar dari kunci = pelanggaran
      setLock('none');
      return;
    }
    const el = document.documentElement;
    if (typeof el.requestFullscreen === 'function') {
      try {
        await el.requestFullscreen();
        setLock('fs'); // masuk fullscreen
        return;
      } catch { /* tak diizinkan → fallback pseudo di bawah */ }
    }
    setLock('pseudo'); // iPhone/iPad Safari: kunci tanpa dukungan fullscreen
  };

  // Kunci layar otomatis begitu token ujian lolos (dipanggil dalam gesture klik "Buka Soal")
  const autoLock = async () => {
    if (lockModeRef.current !== 'none') return;
    const el = document.documentElement;
    if (typeof el.requestFullscreen === 'function') {
      try {
        await el.requestFullscreen();
        setLock('fs');
        return;
      } catch { /* blokir browser → fallback pseudo */ }
    }
    setLock('pseudo');
  };

  // Opsi tiap soal ikut diacak sesuai permutasi yang tersimpan per perangkat.
  // `q.answer` (indeks di bank) harus dipetakan ulang ke posisi baru, kalau tidak
  // kunci akan bergeser dan penilaian jadi salah semua.
  const qs = useMemo(() => shuffledQs.map((sq) => {
    const perm = optOrders[questions.indexOf(sq)] || [];
    const bankOpts = sq.options || [];
    if (perm.length !== bankOpts.length) return sq;
    const newAnswer = perm.indexOf(sq.answer);
    return {
      ...sq,
      options: perm.map((orig) => bankOpts[orig]),
      answer: newAnswer === -1 ? sq.answer : newAnswer,
    };
  }), [shuffledQs, optOrders, questions]);
  const q = qs[currentIdx];
  const total = qs.length;
  const letters = ['A', 'B', 'C', 'D', 'E'];

  const handleSubmit = useCallback(() => {
    clearInterval(timerRef.current);
    localStorage.setItem(`jarkomlab_${storageKey}_submitted`, 'true');
    // Deadline harus dibuang saat submit (bukan hanya saat waktu habis). Kalau
    // tertinggal, attempt berikutnya akan mewarisi deadline lama — bisa langsung
    // habis dan auto-submit nilai 0.
    localStorage.removeItem(`jarkomlab_${storageKey}_deadline`);
    setSubmitted(true);
    forceUnlock();
    let correct = 0;
    qs.forEach((q, i) => { if (answers[i] === q.answer) correct++; });
    const score = Math.round((correct / total) * 100);
    // Skor WAJIB disimpan di perangkat. Kalau tidak, layar hasil menghitung
    // ulang dari bank soal setiap render, dan begitu bank diedit (kunci/level
    // diubah) siswa yang sudah submit lalu me-reload akan melihat nilai yang
    // BERBEDA dari nilai yang tersimpan di server/Rekap guru.
    try {
      localStorage.setItem(`jarkomlab_${storageKey}_result`, JSON.stringify({
        score,
        correct,
        total,
        fingerprint: bankFingerprint(questions),
      }));
    } catch { /* storage penuh/privat: layar hasil tetap jalan */ }
    if (onScoreSubmit) {
      const startedAt = Number(localStorage.getItem(`jarkomlab_${storageKey}_startedAt`) || 0) || null;
      onScoreSubmit(score, { startedAt, finishedAt: Date.now() });
    }
  }, [answers, qs, total, onScoreSubmit, storageKey, questions]);

  const submitRef = useRef(handleSubmit);
  useEffect(() => { submitRef.current = handleSubmit; }, [handleSubmit]);

  useEffect(() => {
    if (submitted || !timeLimit || !examStarted) return;
    const deadlineKey = `jarkomlab_${storageKey}_deadline`;
    let deadline = parseInt(localStorage.getItem(deadlineKey) || '0', 10);
    if (!Number.isFinite(deadline) || deadline <= 0) {
      deadline = Date.now() + timeLimit * 60 * 1000;
      localStorage.setItem(deadlineKey, String(deadline));
    }
    setSecondsLeft(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    timerRef.current = setInterval(() => {
      const left = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setSecondsLeft(left);
      if (left <= 0) {
        clearInterval(timerRef.current);
        localStorage.removeItem(deadlineKey);
        submitRef.current();
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [submitted, timeLimit, storageKey, examStarted]);

  useEffect(() => {
    localStorage.setItem(`jarkomlab_${storageKey}`, JSON.stringify(answers));
  }, [answers, storageKey]);

  useEffect(() => {
    if (!submitted) {
      localStorage.setItem(`jarkomlab_${storageKey}_order`, JSON.stringify(shuffledQs.map(q => questions.indexOf(q))));
      localStorage.setItem(`jarkomlab_${storageKey}_optorder`, JSON.stringify(optOrders));
    }
  }, [submitted, storageKey, shuffledQs, optOrders, questions]);

  // Peringatan anti-contek: monitor pindah tab / keluar saat ujian berlangsung
  useEffect(() => {
    if (submitted || !examStarted) return;
    const onVis = () => {
      if (document.hidden) setTabWarns(w => w + 1);
    };
    const onUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('beforeunload', onUnload);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('beforeunload', onUnload);
    };
  }, [submitted, examStarted]);

  // Catat waktu mulai ujian (untuk durasi pengerjaan di Rekap)
  useEffect(() => {
    if (submitted || !examStarted) return;
    const startedKey = `jarkomlab_${storageKey}_startedAt`;
    if (!localStorage.getItem(startedKey)) localStorage.setItem(startedKey, String(Date.now()));
  }, [submitted, examStarted, storageKey]);

  const selectOption = (idx) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [currentIdx]: idx }));
  };

  const handleRetry = () => {
    localStorage.removeItem(`jarkomlab_${storageKey}`);
    localStorage.removeItem(`jarkomlab_${storageKey}_submitted`);
    localStorage.removeItem(`jarkomlab_${storageKey}_order`);
    localStorage.removeItem(`jarkomlab_${storageKey}_optorder`);
    localStorage.removeItem(`jarkomlab_${storageKey}_deadline`);
    localStorage.removeItem(`jarkomlab_${storageKey}_startedAt`);
    localStorage.removeItem(`jarkomlab_${storageKey}_warns`);
    forceUnlock();
    setTabWarns(0);
    setUnlockInput('');
    setUnlockError(false);
    setAnswers({});
    setCurrentIdx(0);
    setSubmitted(false);
    setSecondsLeft(timeLimit * 60);
  };

  // Token ujian (diberikan guru) — wajib sebelum soal terbuka
  if (gated && !tokenOk && !submitted) {
    // Token masih diambil dari server (Supabase, lalu fallback env/default).
    // Jangan pernah merender soal di fase ini, termasuk kalau server lambat.
    if (examGate.loading) {
      return (
        <div className="quiz-token-gate" role="status" aria-live="polite">
          <KeyRound size={38} color="#6366f1" />
          <h2>Token Ujian</h2>
          <p className="quiz-token-hint">Memuat token ujian…</p>
        </div>
      );
    }

    const tryToken = (e) => {
      e.preventDefault();
      if (gateExpired) {
        setTokenError('expired');
        return;
      }
      if (gateToken && token.trim() === gateToken) {
        setTokenOk(true);
        localStorage.setItem(`jarkomlab_${storageKey}_unlocked`, '1');
        autoLock(); // kunci layar otomatis setelah token lolos
      } else {
        setTokenError('wrong');
        setToken('');
      }
    };

    const expiredLabel = examGate.expiresAt
      ? new Date(examGate.expiresAt).toLocaleString('id-ID', {
        day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
      })
      : null;

    return (
      <div className="quiz-token-gate">
        <KeyRound size={38} color="#6366f1" />
        <h2>Token Ujian</h2>
        <p className="quiz-token-hint">
          Masukkan token yang diberikan guru untuk membuka soal ujian
          {examGate.label ? <> <strong>{examGate.label}</strong></> : null}. Layar akan <strong>terkunci otomatis</strong> — keluar dari kunci layar akan dicatat.
        </p>

        {gateExpired && (
          <p className="token-expired-notice" role="alert">
            <AlertTriangle size={16} /> Token ujian sudah tidak berlaku
            {expiredLabel ? <> (batas mulai: {expiredLabel})</> : null}. Minta token baru ke guru.
          </p>
        )}

        {!gateExpired && (
          <form onSubmit={tryToken} noValidate>
            <input
              type="text" value={token} autoFocus
              className="calc-input quiz-token-input"
              placeholder="Token ujian"
              onChange={(e) => { setToken(e.target.value); setTokenError(false); }}
              aria-label="Token ujian"
              aria-invalid={Boolean(tokenError)}
            />
            {tokenError === 'wrong' && <p className="identity-error">Token salah. Minta token ke guru.</p>}
            <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
              <KeyRound size={16} /> Buka Soal
            </button>
          </form>
        )}
      </div>
    );
  }

  // Result screen
  if (submitted) {
    // Baca hasil yang tersimpan saat submit, bukan hitung ulang dari bank soal.
    // Fallback ke hitung ulang hanya untuk data lama yang belum punya _result.
    const saved = (() => {
      try {
        return JSON.parse(localStorage.getItem(`jarkomlab_${storageKey}_result`) || 'null');
      } catch { return null; }
    })();
    const correct = Number.isFinite(saved?.correct)
      ? saved.correct
      : qs.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0);
    const score = Number.isFinite(saved?.score)
      ? saved.score
      : Math.round((correct / (saved?.total || total)) * 100);
    const passed = score >= 70;
    // Sidik jari bank: berubah kalau kunci, teks soal, atau isi opsi diedit
    // guru. Dipakai untuk jujur memberi tahu siswa bahwa review per-soal sudah
    // tidak lagi cocok dengan soal yang tadi dijawab (nilai sendiri tetap yang
    // tersimpan saat submit).
    const bankChanged = Boolean(saved?.fingerprint) && saved.fingerprint !== bankFingerprint(questions);

    return (
      <div className="quiz-result fade-in">
        {bankChanged && (
          <div className="quiz-review" style={{
            marginBottom: 16, textAlign: 'left', padding: 12, borderRadius: 10,
            border: '2px solid var(--primary)', background: 'var(--bg-subtle, #fff)',
          }}>
            <strong>Catatan guru:</strong> bank soal untuk ujian ini sudah diperbarui
            setelah kamu mengumpulkan jawaban. <strong>Nilai {score} di atas tetap yang
            dihitung saat itu</strong> dan sudah tercatat di rapor, tetapi rincian
            benar/salah per soal di bawah mengikuti versi terbaru dan bisa tidak
            sesuai dengan soal yang tadi kamu kerjakan.
          </div>
        )}
        <div className={`result-circle ${passed ? 'pass' : 'fail'}`}>
          <div className="result-score">{score}</div>
          <div className="result-label">Nilai</div>
        </div>
        <div className="result-status">{passed ? 'Selamat! Kamu Lulus' : 'Belum Memenuhi Target'}</div>
        <p className="result-message">
          {passed ? 'Pemahamanmu sudah bagus! Silakan lanjut ke materi berikutnya.' : 'Target minimum adalah 70. Silakan ulangi materi dan coba lagi.'}
        </p>
        <div className="result-details">
          <div className="result-detail">
            <div className="detail-value" style={{color: 'var(--success)'}}>{correct}</div>
            <div className="detail-label">Benar</div>
          </div>
          <div className="result-detail">
            <div className="detail-value" style={{color: 'var(--danger)'}}>{total - correct}</div>
            <div className="detail-label">Salah</div>
          </div>
          <div className="result-detail">
            <div className="detail-value">{total}</div>
            <div className="detail-label">Total Soal</div>
          </div>
        </div>

        <div className="quiz-review" style={{marginTop: 24, textAlign: 'left'}}>
          <h3 style={{marginBottom: 12}}><Award size={18} style={{verticalAlign: 'middle'}} /> Review Jawaban</h3>
          {qs.map((q, i) => {
            const isCorrect = answers[i] === q.answer;
            return (
              <div key={i} className="review-item" style={{
                padding: 12, marginBottom: 10, borderRadius: 10,
                border: `2px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`,
                background: isCorrect ? '#ecfdf5' : '#fef2f2', cursor: 'pointer'
              }} onClick={() => { setCurrentIdx(i); }}
                role="button" tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setCurrentIdx(i); } }}
                aria-label={`Lihat soal ${i + 1}`}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 4}}>
                  <span style={{fontWeight: 700, fontSize: '0.85rem'}}>Soal {i + 1} — {q.level}</span>
                  {isCorrect ? <CheckCircle size={18} color="var(--success)" /> : <XCircle size={18} color="var(--danger)" />}
                </div>
                <p style={{fontSize: '0.82rem', color: 'var(--text-light)', margin: 0}}>
                  Jawaban: {letters[answers[i]] ?? '-'} | Kunci: {letters[q.answer]}
                </p>
                {q.explanation && (
                  <p style={{fontSize: '0.8rem', marginTop: 6, color: 'var(--text)', fontStyle: 'italic', background: 'white', padding: 8, borderRadius: 6}}>
                    {q.explanation}
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <div style={{textAlign: 'center', marginTop: 20, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap'}}>
          {gated ? (
            // Ujian resmi: submit hanya bisa satu kali (dikunci server & guru),
            // jadi jangan tawarkan "Ulangi" — attempt kedua akan ditolak dan
            // layar nilai justru tertutup kartu "sudah dikerjakan".
            <p className="exam-status saved" style={{ margin: 0 }}>
              <CheckCircle size={16} /> Ujian ini hanya bisa dikirim satu kali. Nilai di atas sudah tercatat untuk rapor guru.
            </p>
          ) : (
            <button className="btn btn-primary" onClick={handleRetry}><RotateCcw size={16} /> Ulangi</button>
          )}
        </div>
      </div>
    );
  }

  // Ujian terkunci setelah 3× pelanggaran (pindah tab/keluar kunci) — dibuka guru via Kode Buka Akses
  const identity = getIdentity();
  const blocked = !submitted && identity && identity.nis && tabWarns >= 3;
  if (blocked) {
    const expected = unlockCode(identity.nis, storageKey);
    const handleUnlock = (e) => {
      e.preventDefault();
      if (unlockInput.trim().toUpperCase() === expected) {
        setTabWarns(0);
        setUnlockError(false);
        setUnlockInput('');
      } else {
        setUnlockError(true);
        setUnlockInput('');
      }
    };
    return (
      <div className="quiz-locked" role="alertdialog" aria-modal="true" aria-label="Ujian dikunci">
        <div className="quiz-locked-icon"><Lock size={30} /></div>
        <h2>Ujian Dikunci</h2>
        <p>Terlalu sering pindah tab / keluar dari kunci layar (3×). Soal dikunci untuk mencegah kecurangan.</p>
        <p className="quiz-locked-hint">
          Minta <strong>Kode Buka Akses</strong> ke guru untuk NIS <strong>{identity.nis}</strong> — guru
          membukanya lewat tombol <em>"Buka Akses"</em> di halaman Rekap Nilai.
        </p>
        <form onSubmit={handleUnlock} noValidate>
          <input
            type="text" value={unlockInput} autoFocus
            className="calc-input quiz-token-input"
            placeholder="Kode buka akses dari guru"
            aria-label="Kode buka akses dari guru"
            autoComplete="off"
            onChange={(e) => { setUnlockInput(e.target.value.toUpperCase()); setUnlockError(false); }}
          />
          {unlockError && <p className="identity-error">Kode salah. Minta kode yang benar ke guru.</p>}
          <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
            <Lock size={16} /> Buka Akses
          </button>
        </form>
      </div>
    );
  }

  // Quiz in progress
  const timerM = Math.floor(secondsLeft / 60);
  const timerS = secondsLeft % 60;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="quiz-container">
      {locked && (
        <div className="lock-banner" role="status">
          <Lock size={15} />
          {lockMode === 'fs'
            ? <>Layar terkunci (fullscreen) — navigasi disembunyikan. Jangan tekan <strong>Esc</strong> selama ujian.</>
            : <>Layar terkunci — semua materi & navigasi lain disembunyikan.</>}
        </div>
      )}
      {tabWarns > 0 && (
        <div className={`quiz-tab-warning ${tabWarns >= 3 ? 'critical' : ''}`} role="alert">
          <AlertTriangle size={15} /> Pindah tab/keluar layar terdeteksi ({tabWarns}×) — soal akan dikunci otomatis setelah 3× dan hanya bisa dibuka guru.
        </div>
      )}
      <div className="quiz-header">
        <span className="quiz-progress-text">Soal {currentIdx + 1} dari {total}</span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button type="button" className="btn btn-secondary quiz-lock-btn" onClick={toggleLock}
            aria-pressed={locked} aria-label={locked ? 'Keluar dari kunci layar' : 'Kunci layar (fullscreen)'}>
            {locked ? <Lock size={16} /> : <Maximize2 size={16} />}
            {locked ? 'Terkunci' : 'Kunci Layar'}
          </button>
          <div className="quiz-timer">
            <Clock size={16} />
            <span>{timeLimit ? `${String(timerM).padStart(2, '0')}:${String(timerS).padStart(2, '0')}` : 'Tanpa Batas'}</span>
          </div>
        </div>
      </div>

      {lockMode === 'pseudo' && (
        <div className="lock-pseudo-bar" role="status">
          <Lock size={14} />
          <span>Kunci tanpa fullscreen aktif — menu & materi lain disembunyikan.</span>
          <button type="button" className="lock-pseudo-exit" onClick={toggleLock}>Keluar Kunci</button>
        </div>
      )}

      <div className="quiz-dots" role="tablist" aria-label="Navigasi soal">
        {qs.map((_, i) => (
          <button key={i}
            className={`quiz-dot ${i === currentIdx ? 'current' : ''} ${answers[i] !== undefined ? 'answered' : ''}`}
            onClick={() => setCurrentIdx(i)} role="tab" aria-selected={i === currentIdx}
            aria-label={`Soal ${i + 1}${answers[i] !== undefined ? ' (terjawab)' : ''}`}>
            {i + 1}
          </button>
        ))}
      </div>

      <div className="question-card fade-in" key={currentIdx}>
        <span className="question-number">Soal {currentIdx + 1}</span>
        <div className="question-level">{q.level}</div>
        <p className="question-text">{q.question}</p>
        <div className="options-list">
          {q.options.map((opt, i) => {
            const isSelected = answers[currentIdx] === i;
            return (
              <div key={i} className={`option-item ${isSelected ? 'selected' : ''}`} onClick={() => selectOption(i)}
                role="radio" aria-checked={isSelected} tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectOption(i); } }}
                aria-label={`${letters[i]}: ${opt.substring(3)}${isSelected ? ' (terpilih)' : ''}`}>
                <div className="option-letter">{letters[i]}</div>
                <span>{opt.substring(3)}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="quiz-nav">
        <button className="btn btn-secondary" onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))} disabled={currentIdx === 0}>
          <ChevronLeft size={16} /> Sebelumnya
        </button>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <span style={{fontSize:'0.85rem',color:'var(--text-light)'}}>
            {answeredCount}/{total} terjawab
          </span>
          <span style={{fontSize:'0.7rem',color:'var(--success)',fontWeight:600}}>
            Tersimpan
          </span>
        </div>
        {currentIdx === total - 1 ? (
          <button className="btn btn-success" onClick={handleSubmit} disabled={answeredCount < total}>
            <CheckCircle size={16} /> Selesai & Lihat Nilai
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => setCurrentIdx(Math.min(total - 1, currentIdx + 1))}>
            Selanjutnya <ChevronRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}