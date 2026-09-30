import { useCallback, useEffect, useState } from 'react';
import {
  KeyRound, Copy, Check, Save, RotateCcw, ServerCog,
  TriangleAlert, CircleCheck, Clock,
} from 'lucide-react';
import {
  EXAM_SUBJECTS,
  loadExamToken,
  saveExamToken,
  resetExamToken,
  formatTokenExpiry,
  toLocalInputValue,
  isTokenExpired,
  getRekapPin,
} from '../lib/examLib';

const SOURCE_LABEL = {
  server: 'Server (Supabase)',
  env: 'Cadangan (VITE_EXAM_TOKEN*)',
  default: 'Bawaan aplikasi',
};

/** Ubah nilai `datetime-local` (waktu lokal peramban) menjadi ISO UTC. */
function inputToIso(value) {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

/**
 * Panel pengaturan token ujian per mata pelajaran.
 *
 * Hanya dirender di halaman yang PIN-nya sudah tervalidasi (Rekap Nilai).
 * Token disimpan di tabel `exam_tokens` (lihat supabase/schema.sql), jadi guru
 * bisa merotasi token + masa berlaku tanpa perlu deploy ulang. Kalau Supabase
 * belum dikonfigurasi atau blok SQL belum dijalankan, panel ini tetap tampil
 * read-only dari env var dan menjelaskan kendalanya — bukan diam-diam gagal.
 */
export default function TokenUjianPanel({ onMessage }) {
  const [rows, setRows] = useState(() =>
    EXAM_SUBJECTS.map((s) => ({
      subject: s.key,
      label: s.fullLabel,
      token: '',
      expiresAt: null,
      source: 'default',
      loading: true,
    }))
  );
  const [draft, setDraft] = useState({});
  const [busy, setBusy] = useState(null);
  const [copied, setCopied] = useState(null);

  const say = useCallback((msg) => { onMessage?.(msg); }, [onMessage]);

  const reload = useCallback(async () => {
    const loaded = await Promise.all(EXAM_SUBJECTS.map((s) => loadExamToken(s.key)));
    setRows(EXAM_SUBJECTS.map((s, i) => ({ subject: s.key, label: s.fullLabel, loading: false, ...loaded[i] })));
    setDraft((d) => {
      const next = { ...d };
      for (const r of loaded) {
        if (next[r.subject]?.token) continue; // jangan timpa yang sedang diedit
        next[r.subject] = { token: r.token, expiry: toLocalInputValue(r.expiresAt) };
      }
      return next;
    });
  }, []);

  useEffect(() => { reload(); }, [reload]);

  const edit = (subject, patch) => setDraft((d) => ({ ...d, [subject]: { ...d[subject], ...patch } }));

  const copy = async (subject, token) => {
    try {
      await navigator.clipboard.writeText(token);
      setCopied(subject);
      setTimeout(() => setCopied((c) => (c === subject ? null : c)), 1600);
    } catch {
      say('Gagal menyalin token — salin manual dari layar.');
    }
  };

  const save = async (subject) => {
    const form = draft[subject] || {};
    if (String(form.token || '').trim().length < 4) {
      say('Token minimal 4 karakter.');
      return;
    }
    setBusy(subject);
    const res = await saveExamToken(getRekapPin(), subject, form.token, inputToIso(form.expiry));
    setBusy(null);
    if (res.ok) {
      say(`Token ${EXAM_SUBJECTS.find((s) => s.key === subject)?.label} tersimpan.`);
      reload();
    } else {
      say(res.error);
    }
  };

  const revert = async (subject) => {
    setBusy(subject);
    const res = await resetExamToken(getRekapPin(), subject);
    setBusy(null);
    if (res.ok) {
      say(`Token ${EXAM_SUBJECTS.find((s) => s.key === subject)?.label} dikembalikan ke nilai bawaan.`);
      reload();
    } else {
      say(res.error);
    }
  };

  return (
    <section className="token-panel" aria-labelledby="token-panel-h">
      <div className="token-panel-head">
        <ServerCog size={18} />
        <div>
          <h3 id="token-panel-h">Token Ujian &amp; Masa Berlaku</h3>
          <p>
            Setiap mata pelajaran punya token sendiri, jadi mengacak token KKA tidak lagi
            mengubah MPK 1. Di bawah ini <strong>batas mulai</strong>: setelah lewat, siswa
            yang belum membuka soal tidak bisa memulai ujian. Siswa yang sudah masuk tetap
            bisa menyelesaikan — masa berlaku tidak memutus timer di tengah jalan.
          </p>
        </div>
      </div>

      {rows.map((r) => {
        const expired = isTokenExpired(r.expiresAt);
        return (
          <div className="token-row" key={r.subject}>
            <div className="token-row-main">
              <div className="token-row-title">
                <KeyRound size={16} />
                <strong>{r.label}</strong>
                <span className={`token-source ${r.source}`}>{SOURCE_LABEL[r.source] || r.source}</span>
                {expired && <span className="token-badge expired"><TriangleAlert size={12} /> Kedaluwarsa</span>}
                {!expired && r.expiresAt && (
                  <span className="token-badge"><Clock size={12} /> {formatTokenExpiry(r.expiresAt)}</span>
                )}
              </div>

              {r.loading ? (
                <p className="token-row-empty">Memuat…</p>
              ) : (
                <>
                  <div className="token-row-value">
                    <code>{r.token}</code>
                    <button
                      type="button"
                      className="btn-icon-sm"
                      onClick={() => copy(r.subject, r.token)}
                      aria-label={`Salin token ${r.label}`}
                    >
                      {copied === r.subject ? <Check size={15} /> : <Copy size={15} />}
                    </button>
                  </div>
                  <div className="token-row-edit">
                    {r.source !== 'server' && (
                      <p className="token-row-hint">
                        Token ini masih dari <strong>{SOURCE_LABEL[r.source]}</strong>. Simpan sekali di
                        sini untuk mengunci token di server — setelah itu bisa dirotasi tanpa deploy.
                      </p>
                    )}
                    <label>
                      <span>Token baru</span>
                      <input
                        type="text"
                        value={draft[r.subject]?.token ?? ''}
                        onChange={(e) => edit(r.subject, { token: e.target.value })}
                        className="calc-input"
                        placeholder="Minimal 4 karakter"
                      />
                    </label>
                    <label>
                      <span>Batas mulai (opsional)</span>
                      <input
                        type="datetime-local"
                        value={draft[r.subject]?.expiry ?? ''}
                        onChange={(e) => edit(r.subject, { expiry: e.target.value })}
                        className="calc-input"
                      />
                    </label>
                    <div className="token-row-actions">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => save(r.subject)}
                        disabled={busy === r.subject}
                      >
                        <Save size={15} /> {busy === r.subject ? 'Menyimpan…' : 'Simpan'}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => revert(r.subject)}
                        disabled={busy === r.subject || r.source !== 'server'}
                        title={r.source === 'server' ? 'Hapus token server, kembali ke env var/bawaan' : 'Belum ada token server untuk mapel ini'}
                      >
                        <RotateCcw size={15} /> Pakai bawaan
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}

      <p className="token-panel-foot">
        <CircleCheck size={14} /> Simpan di sini tidak perlu deploy. Bila tabel
        <code> exam_tokens</code> belum dibuat, jalankan blok <code>exam_tokens</code> di
        Supabase &rarr; SQL Editor (lihat <code>supabase/schema.sql</code>); sampai itu
        aplikasi tetap jalan memakai token bawaan.
      </p>
    </section>
  );
}