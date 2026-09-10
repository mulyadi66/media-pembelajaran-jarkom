import { useState } from 'react';
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
  getExamToken,
  clearExamLocal,
  clearIdentity,
  findNisRecords,
  MODUL_META,
} from '../lib/examLib';
import { isSupabaseConfigured } from '../lib/supabase';

function IdentityForm({ initial, onSubmit, onCancel }) {
  const [nama, setNama] = useState(initial?.nama || '');
  const [nis, setNis] = useState(initial?.nis || '');
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const err = getIdentityError({ nama, nis });
    if (err) { setError(err); return; }
    setBusy(true);
    setError(null);
    try {
      await onSubmit({ nama: nama.trim(), nis: nis.trim() });
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
        <span>NIS (4–10 digit angka)</span>
        <input
          type="text" inputMode="numeric" value={nis}
          onChange={(e) => { setNis(e.target.value.replace(/[^\d]/g, '')); setError(null); }}
          placeholder="contoh: 20241234" maxLength={10}
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

export default function ModulPostTest({ questions, storageKey, scoreKey, title }) {
  const { saveQuizScore } = useApp();
  const [identity, setIdentity] = useState(() => getIdentity());
  const [locked, setLocked] = useState(() => isModulLocked(scoreKey));
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState(null);

  const handleIdentitySubmit = async (i) => {
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await findNisRecords(i.nis);
        if (!error && Array.isArray(data) && data.length > 0) {
          const modulLabel = MODUL_META.find(m => m.key === scoreKey)?.label || scoreKey;
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
              Kerjakan di akhir modul untuk mengukur pemahamanmu.
            </p>
          </div>
        </div>
        <IdentityForm
          initial={identity}
          onSubmit={handleIdentitySubmit}
          onCancel={identity ? () => setEditing(false) : undefined}
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

  const handleScore = async (score) => {
    const res = await addExamResult({ nis: identity.nis, nama: identity.nama, modul: scoreKey, nilai: score });
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
            Kerjakan di akhir modul untuk mengukur pemahamanmu.
          </p>
        </div>
      </div>

      <div className="identity-chip">
        <UserCircle size={20} />
        <span><strong>{identity.nama}</strong> <em>— NIS {identity.nis}</em></span>
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
        examToken={getExamToken()}
        onScoreSubmit={handleScore}
      />
      {!isSupabaseConfigured && (
        <p className="sync-note"><CloudCog size={14} /> Supabase belum dikonfigurasi — hasil tersimpan di perangkat ini dan tetap bisa rekapan lokal.</p>
      )}
    </div>
  );
}