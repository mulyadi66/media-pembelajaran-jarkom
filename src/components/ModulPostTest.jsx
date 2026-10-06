import { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import Quiz from './Quiz';
import {
  ClipboardCheck,
  BadgeCheck,
  UserCircle,
  Pencil,
  RefreshCw,
  CloudOff,
  CloudCog,
} from 'lucide-react';
import {
  getIdentity,
  saveIdentity,
  isModulLocked,
  hasAnySubmission,
  addExamResult,
  loadExamToken,
  subjectFromStorageKey,
  clearExamLocal,
  clearIdentity,
  findNisRecords,
  findSiswa,
  findSiswaLokal,
  getSubjectMeta,
  MODUL_META,
} from '../lib/examLib';
import { isSupabaseConfigured } from '../lib/supabase';

function IdentityForm({ initial, onSubmit, onCancel, subject }) {
  const [nis, setNis] = useState(initial?.nis || '');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const [lookup, setLookup] = useState({ status: 'idle', ketemu: null });

  /**
   * Cari siswa dari NIS. Dipanggil otomatis saat mengetik (debounce) dan saat
   * submit — siswa hanya mengetik NIS, tidak ada isian manual nama/kelas.
   *
   * `reqRef` dipakai sebagai token antibatal: mengetik NIS lagi dengan cepat
   * bisa membuat dua lookup tumpang tindih, dan respons yang telat milik NIS
   * LAMA harus dibuang, bukan menimpa hasil yang lebih baru.
   */
  const reqRef = useRef(0);
  const debounceRef = useRef(null);
  useEffect(() => () => clearTimeout(debounceRef.current), []);

  const cariSiswa = async (angka) => {
    const req = ++reqRef.current;
    const bersih = String(angka || '').trim();
    if (!/^\d{4,12}$/.test(bersih)) {
      setLookup({ status: 'idle', ketemu: null });
      return null;
    }
    setLookup({ status: 'loading', ketemu: null });
    // Server dulu, roster lokal perangkat ini sebagai cadangan saat offline.
    const data = (await findSiswa(bersih, subject)) || findSiswaLokal(bersih, subject);
    if (req !== reqRef.current) return null;
    if (data) {
      setLookup({ status: 'found', ketemu: { ...data, nis: bersih } });
      return data;
    }
    setLookup({ status: 'missing', ketemu: null });
    return null;
  };

  const jadwalCari = (v) => {
    clearTimeout(debounceRef.current);
    const bersih = (v || '').trim();
    if (/^\d{4,12}$/.test(bersih)) {
      debounceRef.current = setTimeout(() => cariSiswa(bersih), 400);
    } else {
      setLookup({ status: 'idle', ketemu: null });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    const nisFinal = nis.trim();

    // Siswa berhak lanjut HANYA kalau NIS-nya terdaftar di daftar siswa. Kalau
    // tidak ada, blokir dan arahkan menghubungi guru — tidak ada isian manual.
    // Tombol Lanjut memang disabled saat belum ditemukan, tapi guard tetap ada:
    // siswa bisa menekan Enter sebelum pencarian selesai, dan hasil lookup yang
    // dipakai adalah hasilNYA, bukan state React yang belum ter-render.
    setBusy(true);
    let data = null;
    try {
      if (lookup.status === 'found' && lookup.ketemu?.nis === nisFinal) {
        data = lookup.ketemu;
      } else {
        data = await cariSiswa(nisFinal);
      }
      if (!data) {
        setError('NIS tidak terdaftar di daftar siswa. Silakan hubungi guru — ujian baru bisa dimulai kalau NIS sudah didaftarkan.');
        return;
      }
      await onSubmit({ nis: data.nis, nama: data.nama, kelas: data.kelas || '' });
    } catch (e2) {
      setError(e2?.message || 'Gagal menyimpan identitas. Coba lagi.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="identity-form" onSubmit={submit} noValidate>
      <h3 style={{ marginBottom: 4 }}>Identitas Siswa</h3>
      <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: 16 }}>
        Ketik NIS dulu — nama &amp; kelas dicari otomatis dari daftar siswa. Ujian hanya bisa
        dimulai untuk NIS yang sudah terdaftar.
      </p>
      <label className="identity-field">
        <span>NIS (4–12 digit angka)</span>
        <input
          type="text" inputMode="numeric" value={nis}
          placeholder="contoh: 202412345678" maxLength={12} autoFocus
          autoComplete="off"
          onChange={(e) => {
            setNis(e.target.value);
            setError(null);
            // NIS diubah → status FIND/MISSING dibuang supaya tombol Lanjut
            // nonaktif sampai pencarian untuk NIS baru selesai.
            jadwalCari(e.target.value);
          }}
        />
      </label>
      {lookup.status === 'loading' && (
        <p style={{ color: 'var(--text-light)', fontSize: '0.8rem', margin: '0 0 8px' }} role="status">
          Mencari data siswa…
        </p>
      )}
      {lookup.status === 'found' && (
        <p className="identity-found" role="status">
          <BadgeCheck size={14} /> NIS terdaftar — <strong>{lookup.ketemu.nama}</strong>
          {lookup.ketemu.kelas && <> · Kelas {lookup.ketemu.kelas}</>}. Lanjut untuk memasukkan token ujian.
        </p>
      )}
      {lookup.status === 'missing' && (
        <p className="identity-block" role="alert">
          NIS <strong>{nis.trim()}</strong> tidak terdaftar di daftar siswa. Silakan hubungi
          guru untuk didaftarkan — ujian baru bisa dimulai setelah NIS terdaftar.
        </p>
      )}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <button className="btn btn-primary" type="submit" style={{ marginLeft: 0 }} disabled={busy || lookup.status !== 'found'}>
          <BadgeCheck size={16} /> {busy ? 'Memeriksa…' : 'Lanjut ke Token Ujian'}
        </button>
        {onCancel && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Batal</button>
        )}
      </div>
      {error && <p className="identity-error">{error}</p>}
    </form>
  );
}

export default function ModulPostTest({
  questions,
  storageKey,
  scoreKey,
  title,
  meta = MODUL_META,
  examLabel = 'Ujian',
  subtitle = 'Kerjakan di akhir modul untuk mengukur pemahamanmu.',
}) {
  const { saveQuizScore } = useApp();
  const [identity, setIdentity] = useState(() => getIdentity());
  const [locked, setLocked] = useState(() => isModulLocked(scoreKey));
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState(null);

  // Token ujian diambil dari server per mapel (dengan fallback env var), lalu
  // diteruskan ke Quiz sebagai `examGate`. `loading` wajib true sampai selesai:
  // sebelum token tiba, gerbang harus tetap menutup halaman.
  const examSubject = subjectFromStorageKey(storageKey);
  const [examGate, setExamGate] = useState(() => (
    examSubject ? { loading: true, token: '', expiresAt: null, subject: examSubject } : null
  ));

  useEffect(() => {
    if (!examSubject) { setExamGate(null); return; }
    let alive = true;
    loadExamToken(examSubject).then((t) => {
      if (!alive) return;
      setExamGate({
        loading: false,
        token: t.token,
        expiresAt: t.expiresAt,
        subject: t.subject,
        // Label diambil dari EXAM_SUBJECTS, bukan daftar if-else. Daftar if-else
        // diam-diam jatuh ke cabang terakhir begitu ada mapel baru — DKK pernah
        // tampil sebagai "Ujian KKA XI" karena tanda tangannya belum ditambah.
        label: `${getSubjectMeta(t.subject)?.label || 'Ujian'} — ${examLabel}`,
      });
    });
    return () => { alive = false; };
  }, [examSubject, examLabel]);

  const handleIdentitySubmit = async (i) => {
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await findNisRecords(i.nis, meta.map(m => m.key));
        if (!error && Array.isArray(data) && data.length > 0) {
          const modulLabel = meta.find(m => m.key === scoreKey)?.label || scoreKey;
          throw new Error(
            `NIS ${i.nis} sudah terverifikasi di server pada ${modulLabel} — tidak bisa mengerjakan ulang. Bila ini perangkat bersama, gunakan tombol "Reset Identitas".`
          );
        }
      } catch (err) {
        if (err && err.message && err.message.includes('sudah terverifikasi')) throw err;
        // Kegagalan jaringan → biarkan siswa tetap bisa mengerjakan (menangani offline).
      }
    }
    saveIdentity(i);
    setIdentity(i);
    setEditing(false);
    setStatus(null);
  };

  const handleResetIdentity = () => {
    const sure = window.confirm(
      'Reset identitas akan menghapus identitas & hasil ujian di perangkat ini, supaya siswa lain bisa mengerjakan ulang. Lanjutkan?'
    );
    if (!sure) return;
    clearExamLocal();
    clearIdentity();
    setIdentity(null);
    setEditing(false);
    setLocked(false);
    setStatus(null);
  };

  if (!identity || editing) {
    return (
      <div className="materi-card modul-posttest" id={scoreKey}>
        <div className="mp-test-banner">
          <ClipboardCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>{title}</h3>
            <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              {subtitle}
            </p>
          </div>
        </div>
        <IdentityForm
          initial={identity}
          onSubmit={handleIdentitySubmit}
          onCancel={identity ? () => setEditing(false) : undefined}
          subject={examSubject}
        />
      </div>
    );
  }

  if (locked) {
    return (
      <div className="materi-card modul-posttest locked" id={scoreKey}>
        <div className="mp-test-banner">
          <BadgeCheck size={20} />
          <div>
            <h3 style={{ margin: 0 }}>{title}</h3>
            <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Ujian ini sudah dikerjakan & terverifikasi atas nama{' '}
              <strong>{identity.nama}</strong> (NIS {identity.nis}). Retake tidak diizinkan.
            </p>
          </div>
          <button type="button" className="identity-reset" onClick={handleResetIdentity}>
            <RefreshCw size={14} /> Reset Identitas
          </button>
        </div>
      </div>
    );
  }

  const handleScore = async (score, meta = {}) => {
    const res = await addExamResult({
      nis: identity.nis,
      nama: identity.nama,
      kelas: identity.kelas || '',
      modul: scoreKey,
      nilai: score,
      startedAt: meta.startedAt || null,
      finishedAt: meta.finishedAt || null,
    });
    if (res.status === 'locked') { setLocked(true); setStatus(res); return; }
    saveQuizScore(scoreKey, score);
    setStatus(res);
  };

  const today = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="materi-card modul-posttest" id={scoreKey}>
      <div className="mp-test-banner">
        <ClipboardCheck size={20} />
        <div>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
            {subtitle}
          </p>
        </div>
      </div>

      <div className="identity-chip">
        <UserCircle size={20} />
        <span>
          <strong>{identity.nama}</strong> <em>— NIS {identity.nis}</em>
          {identity.kelas && <em className="identity-kelas"> · {identity.kelas}</em>}
        </span>
        {!hasAnySubmission() && (
          <button type="button" className="identity-edit" onClick={() => setEditing(true)} aria-label="Ubah identitas">
            <Pencil size={14} /> Ubah
          </button>
        )}
        <button type="button" className="identity-reset" onClick={handleResetIdentity} aria-label="Reset identitas (ganti siswa)">
          <RefreshCw size={14} /> Reset Identitas
        </button>
      </div>

      {status && (
        <div className={`exam-status ${status.status}`} role="status">
          {status.status === 'saved' && <><BadgeCheck size={16} /> Nilai terkirim & terverifikasi ({today}).</>}
          {status.status === 'queued' && <><CloudOff size={16} /> {status.message} Nilai tersimpan ({today}).</>}
          {status.status === 'locked' && <><BadgeCheck size={16} /> {status.message}</>}
        </div>
      )}

      <Quiz
        questions={questions}
        storageKey={storageKey}
        timeLimit={Math.max(10, Math.ceil(questions.length * 1.5))}
        examGate={examGate}
        onScoreSubmit={handleScore}
      />
      {!isSupabaseConfigured && (
        <p className="sync-note"><CloudCog size={14} /> Supabase belum dikonfigurasi — hasil tersimpan di perangkat ini dan tetap bisa rekapan lokal.</p>
      )}
    </div>
  );
}