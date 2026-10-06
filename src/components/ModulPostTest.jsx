import { useState, useEffect } from 'react';
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
  getIdentityError,
  isModulLocked,
  hasAnySubmission,
  addExamResult,
  loadExamToken,
  subjectFromStorageKey,
  clearExamLocal,
  clearIdentity,
  findNisRecords,
  getSubjectMeta,
  MODUL_META,
} from '../lib/examLib';
import { isSupabaseConfigured } from '../lib/supabase';

function IdentityForm({ initial, onSubmit, onCancel, kelasPlaceholder }) {
  const [nama, setNama] = useState(initial?.nama || '');
  const [nis, setNis] = useState(initial?.nis || '');
  const [kelas, setKelas] = useState(initial?.kelas || '');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const err = getIdentityError({ nama, nis });
    if (err) { setError(err); return; }
    setBusy(true);
    setError(null);
    try {
      await onSubmit({ nama: nama.trim(), nis: nis.trim(), kelas: kelas.trim() });
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
        Isi sebelum mengerjakan ujian. Nilai akan direkap atas nama ini.
      </p>
      <label className="identity-field">
        <span>Nama Lengkap</span>
        <input
          type="text" value={nama} onChange={(e) => { setNama(e.target.value); setError(null); }}
          placeholder="contoh: Ahmad Fauzi" autoComplete="name" autoFocus
        />
      </label>
      <label className="identity-field">
        <span>NIS (4–12 digit angka)</span>
        <input
          type="text" inputMode="numeric" value={nis}
          placeholder="contoh: 202412345678" maxLength={12}
          onChange={(e) => { setNis(e.target.value); setError(null); }}
        />
      </label>
      <label className="identity-field">
        <span>Kelas (opsional)</span>
        <input
          type="text" value={kelas}
          onChange={(e) => { setKelas(e.target.value); setError(null); }}
          placeholder={kelasPlaceholder} maxLength={40}
        />
      </label>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <button className="btn btn-primary" type="submit" style={{ marginLeft: 0 }} disabled={busy}>
          <BadgeCheck size={16} /> {busy ? 'Memeriksa…' : 'Simpan Identitas'}
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
  kelasPlaceholder = 'contoh: X TJKT 1',
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
          kelasPlaceholder={kelasPlaceholder}
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