import { useEffect, useState, useCallback } from 'react';
import {
  ClipboardList,
  Lock,
  Download,
  Printer,
  RefreshCw,
  CloudOff,
  CloudCog,
  UserCheck,
  Trash2,
  KeyRound,
  Copy,
  Search,
  Users,
} from 'lucide-react';
import {
  fetchExamResults,
  syncPending,
  getExamHistory,
  MODUL_META,
  getRekapPin,
  getExamToken,
  isSupabaseConfigured,
  resetExamResults,
  clearExamLocal,
  getRoster,
  saveRoster,
  clearRoster,
  unlockCode,
} from '../lib/examLib';

function predikat(avg) {
  if (avg == null) return { grade: '—', label: '—' };
  if (avg >= 90) return { grade: 'A', label: 'A · Sangat Baik' };
  if (avg >= 80) return { grade: 'B', label: 'B · Baik' };
  if (avg >= 70) return { grade: 'C', label: 'C · Cukup' };
  if (avg >= 60) return { grade: 'D', label: 'D · Kurang' };
  return { grade: 'E', label: 'E · Perlu Bimbingan' };
}

function buildRows(raw) {
  const map = new Map();
  for (const r of raw) {
    if (!r.nis || !r.nama) continue;
    const item = map.get(String(r.nis)) || { nis: String(r.nis), nama: r.nama, kelas: '', values: {}, dur: {}, lastAt: null };
    item.nama = r.nama;
    if (r.kelas) item.kelas = r.kelas;
    item.values[r.modul] = r.nilai;
    if (r.durasi_detik != null) item.dur[r.modul] = Math.round(r.durasi_detik / 60);
    if (r.created_at && (!item.lastAt || r.created_at > item.lastAt)) item.lastAt = r.created_at;
    map.set(String(r.nis), item);
  }
  return [...map.values()]
    .sort((a, b) => a.nis.localeCompare(b.nis))
    .map(item => {
      const vals = MODUL_META.map(m => item.values[m.key]);
      const done = vals.filter(v => v != null);
      const avg = done.length ? Math.round(done.reduce((a, b) => a + b, 0) / done.length) : null;
      const dur = MODUL_META.map(m => item.dur[m.key] != null ? item.dur[m.key] : null);
      const durTotal = dur.some(d => d != null) ? dur.reduce((a, d) => a + (d || 0), 0) : null;
      const count = done.length;
      return {
        nis: item.nis,
        nama: item.nama,
        kelas: item.kelas || '',
        vals,
        dur,
        durTotal,
        avg,
        count,
        predikat: predikat(avg),
        status: count === MODUL_META.length ? 'selesai' : count > 0 ? 'sebagian' : 'belum',
      };
    });
}

/** Gabungkan baris hasil dengan roster guru; siswa roster yang belum mengerjakan
 *  muncul dengan status "belum". */
function mergeRoster(rows, roster) {
  const map = new Map(rows.map(r => [String(r.nis), r]));
  for (const s of roster || []) {
    const nis = String(s.nis);
    if (!map.has(nis)) {
      map.set(nis, {
        nis, nama: s.nama, kelas: s.kelas || '',
        vals: MODUL_META.map(() => null), dur: MODUL_META.map(() => null), durTotal: null,
        avg: null, count: 0, predikat: predikat(null), status: 'belum',
      });
    } else if (s.kelas && !map.get(nis).kelas) {
      map.get(nis).kelas = s.kelas;
    }
  }
  return [...map.values()].sort((a, b) => a.nis.localeCompare(b.nis));
}

/** Parse teks roster "NIS;Nama;Kelas" per baris → array siswa. */
function parseRosterText(text) {
  return (text || '').split(/\r?\n/)
    .map(l => l.trim()).filter(Boolean)
    .map(l => {
      const p = l.split(/[;,\t]/).map(s => s.trim());
      return { nis: p[0] || '', nama: p[1] || '', kelas: p[2] || '' };
    })
    .filter(s => /^\d{4,10}$/.test(s.nis) && s.nama);
}

function exportCSV(rows) {
  const cols = ['No', 'Nama', 'NIS', 'Kelas', 'Modul 1', 'Modul 2', 'Modul 3', 'Rata-rata', 'Predikat', 'Status', 'Durasi (mnt)'];
  const lines = rows.map((r, i) => [
    i + 1, r.nama, r.nis, r.kelas,
    r.vals[0] ?? '', r.vals[1] ?? '', r.vals[2] ?? '',
    r.avg == null ? '' : r.avg,
    r.avg == null ? '' : `${r.predikat.grade} (${r.avg})`,
    r.status === 'selesai' ? 'Selesai' : r.status === 'sebagian' ? 'Sebagian' : 'Belum',
    r.durTotal ?? '',
  ].join(';'));
  const csv = '\uFEFF' + [cols.join(';'), ...lines].join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'rekap-nilai-mpk1.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function RekapNilai() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem('rekapPinOk') === '1');
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [rows, setRows] = useState([]);
  const [source, setSource] = useState('server');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [unlockSel, setUnlockSel] = useState(null); // { nis, nama } daftar Kode Buka Akses
  const [q, setQ] = useState('');
  const [kelasSel, setKelasSel] = useState('');
  const [roster, setRoster] = useState(() => getRoster());
  const [rosterText, setRosterText] = useState('');
  const [rosterOpen, setRosterOpen] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setMessage('');
    if (isSupabaseConfigured) {
      const { data, error } = await fetchExamResults();
      if (error) {
        setMessage(`Gagal ambil data server: ${error}.`);
        setSource('local');
      } else {
        setRows(buildRows(data || []));
        setSource('server');
      }
      const pend = syncPending();
      pend.then(n => { if (n > 0) { setMessage(`Tersinkron ${n} hasil yang tertunda.`); load(); } }).catch(() => {});
    } else {
      setRows(buildRows(getExamHistory()));
      setSource('local');
    }
    setLoading(false);
  }, []);

  const pendCount = (() => {
    try { return JSON.parse(localStorage.getItem('jarkomlab_pendingSync') || '[]').length; }
    catch { return 0; }
  })();

  useEffect(() => {
    if (unlocked && isSupabaseConfigured) {
      const run = async () => {
        const synced = await syncPending();
        if (synced > 0) await load();
      };
      run();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlocked, load]);

  useEffect(() => {
    if (unlocked) load();
  }, [unlocked, load]);

  if (!unlocked) {
    const tryPin = (e) => {
      e.preventDefault();
      if (pin === getRekapPin()) {
        sessionStorage.setItem('rekapPinOk', '1');
        setUnlocked(true);
      } else {
        setPinError(true);
        setPin('');
      }
    };
    return (
      <div className="section-block" style={{ maxWidth: 440, margin: '60px auto' }}>
        <div className="materi-card rekap-pin-card">
          <div className="rekap-icon"><Lock size={28} /></div>
          <h2 style={{ textAlign: 'center', marginBottom: 6 }}>Khusus Guru</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: 20 }}>
            Masukkan PIN untuk membuka Rekap Nilai.
          </p>
          <form onSubmit={tryPin} noValidate>
            <input
              type="password" inputMode="numeric" autoFocus
              className="calc-input rekap-pin-input"
              placeholder="PIN"
              value={pin}
              maxLength={6}
              onChange={(e) => { setPin(e.target.value.replace(/[^\d]/g, '')); setPinError(false); }}
            />
            {pinError && <p className="identity-error">PIN salah. Coba lagi.</p>}
            <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
              <Lock size={16} /> Buka Rekap
            </button>
          </form>
        </div>
      </div>
    );
  }

  const effective = mergeRoster(rows, roster);
  const kelasList = [...new Set(effective.map(r => r.kelas).filter(Boolean))].sort();
  const baseRowset = kelasSel ? effective.filter(r => r.kelas === kelasSel) : effective;
  const verified = baseRowset.reduce((a, r) => a + r.count, 0);
  const completed = baseRowset.filter(r => r.count === MODUL_META.length).length;
  const examToken = getExamToken();

  const modulAvgs = MODUL_META.map((m, idx) => {
    const vals = baseRowset.map(r => r.vals[idx]).filter(v => v != null);
    return {
      label: m.label,
      avg: vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null,
      count: vals.length,
    };
  });

  const qNorm = q.trim().toLowerCase();
  const filtered = qNorm
    ? baseRowset.filter(r => r.nama.toLowerCase().includes(qNorm) || r.nis.toLowerCase().includes(qNorm))
    : baseRowset;

  const copyToken = async () => {
    try {
      await navigator.clipboard.writeText(examToken);
      setMessage('Token ujian disalin ke clipboard.');
    } catch {
      setMessage('Gagal menyalin token.');
    }
  };

  const handleReset = async () => {
    if (!rows.length) { setMessage('Tidak ada data untuk direset.'); return; }
    const pinInput = window.prompt('Reset akan menghapus SEMUA hasil ujian (server + perangkat ini).\nKetik PIN untuk melanjutkan:');
    if (pinInput === null) return;
    if (pinInput.trim() !== getRekapPin()) { setMessage('PIN salah — reset dibatalkan.'); return; }
    const sure = window.confirm('Hapus semua hasil ujian? Tindakan ini tidak bisa dibatalkan.');
    if (!sure) return;

    setLoading(true);
    setMessage('');
    if (isSupabaseConfigured && source !== 'local') {
      const res = await resetExamResults(pinInput.trim());
      if (!res.ok) {
        setMessage(`Reset server gagal: ${res.error}. Pastikan fungsi reset_exam_results sudah dibuat di Supabase (lihat supabase/schema.sql), lalu coba lagi.`);
        setLoading(false);
        return;
      }
      clearExamLocal();
      setMessage(res.deleted > 0
        ? `Reset selesai — ${res.deleted} baris dihapus dari server. Siswa bisa mengerjakan ulang.`
        : 'Reset selesai — server sudah kosong. Siswa bisa mengerjakan ulang.');
    } else {
      clearExamLocal();
      setMessage('Reset selesai pada perangkat ini (data lokal dihapus).');
    }
    await load();
    setLoading(false);
  };

  const applyRoster = () => {
    const list = parseRosterText(rosterText);
    if (!list.length) { setMessage('Roster kosong — format NIS;Nama;Kelas per baris.'); return; }
    setRoster(list);
    saveRoster(list);
    setRosterText('');
    setRosterOpen(false);
    setMessage(`Roster disimpan — ${list.length} siswa (tersimpan lokal di perangkat ini).`);
  };

  const deleteRoster = () => {
    setRoster([]);
    clearRoster();
    setMessage('Roster siswa dihapus.');
  };

  const copyUnlock = async (modul) => {
    if (!unlockSel) return;
    const code = unlockCode(unlockSel.nis, modul.key);
    try {
      await navigator.clipboard.writeText(code);
      setMessage(`Kode buka akses ${modul.label} (${code}) disalin.`);
    } catch {
      setMessage(`Kode buka akses ${modul.label}: ${code}`);
    }
  };

  return (
    <div className="section-block" style={{ maxWidth: 920, margin: '0 auto' }}>
      <div className="materi-card">
        <div className="rekap-header">
          <div>
            <h2 style={{ marginBottom: 4 }}><ClipboardList size={20} style={{ verticalAlign: 'middle' }} /> Rekap Nilai Ujian Modul</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
              MPK 1 · Perencanaan & Pengalamatan Jaringan · Kelas XI TJKT
            </p>
          </div>
          <div className="rekap-actions no-print">
            <button className="btn btn-secondary" onClick={() => setRosterOpen(o => !o)}>
              <Users size={16} /> Daftar Siswa{roster.length > 0 ? ` (${roster.length})` : ''}
            </button>
            <button className="btn btn-danger" onClick={handleReset} disabled={loading || !rows.length}>
              <Trash2 size={16} /> Reset
            </button>
            <button className="btn btn-secondary" onClick={() => exportCSV(filtered.length ? filtered : effective)} disabled={!effective.length}>
              <Download size={16} /> CSV
            </button>
            <button className="btn btn-secondary" onClick={() => window.print()} disabled={!effective.length}>
              <Printer size={16} /> Cetak
            </button>
            <button className="btn btn-secondary" onClick={load} disabled={loading}>
              <RefreshCw size={16} className={loading ? 'spin' : ''} /> Perbarui
            </button>
          </div>
        </div>

        <div className="exam-token-card">
          <KeyRound size={20} />
          <div className="exam-token-info">
            <strong>Token Ujian</strong>
            <span className="exam-token-value">{examToken}</span>
            <small>Bagikan token ini ke siswa agar mereka bisa membuka Post Test (Ujian) modul. Untuk mengganti, ubah VITE_EXAM_TOKEN di Vercel lalu redeploy.</small>
          </div>
          <button className="btn btn-secondary" onClick={copyToken} aria-label="Salin token ujian">
            <Copy size={16} /> Salin
          </button>
        </div>

        {rosterOpen && (
          <div className="rekap-roster no-print">
            <p className="roster-head">
              <Users size={14} /> Roster Siswa <small>— untuk melihat siapa yang belum mengerjakan. Tersimpan lokal di perangkat ini.</small>
            </p>
            <textarea
              className="roster-textarea" rows={5}
              value={rosterText}
              onChange={(e) => setRosterText(e.target.value)}
              placeholder={'Format satu baris per siswa: NIS;Nama;Kelas\n20241234;Ahmad Fauzi;XI TJKT 1\n20241235;Siti Aminah;XI TJKT 1'}
              aria-label="Daftar siswa NIS;Nama;Kelas"
            />
            <div className="roster-actions">
              <button className="btn btn-primary" onClick={applyRoster} disabled={!rosterText.trim()}>
                <UserCheck size={16} /> Terapkan Roster
              </button>
              <button className="btn btn-secondary" onClick={() => setRosterText('')}>Bersihkan</button>
              {roster.length > 0 && (
                <button className="btn btn-danger" onClick={deleteRoster}>
                  <Trash2 size={16} /> Hapus Roster
                </button>
              )}
            </div>
            {roster.length > 0 && (
              <p className="roster-hint">
                {roster.length} siswa tersimpan · siswa di roster yang belum mengerjakan tampil berstatus <strong>Belum</strong>.
              </p>
            )}
          </div>
        )}

        <div className="rekap-stats">
          <div className="rekap-stat"><span className="rs-num">{baseRowset.length}</span><span>Siswa</span></div>
          <div className="rekap-stat"><span className="rs-num">{verified}</span><span>Nilai terkumpul</span></div>
          <div className="rekap-stat"><span className="rs-num">{completed}</span><span>Selesai {MODUL_META.length} modul</span></div>
          <div className="rekap-stat"><span className="rs-num">{pendCount}</span><span>Menunggu sinkron</span></div>
        </div>

        <div className="rekap-modul-stats">
          {modulAvgs.map((m, i) => (
            <div className="rsm-item" key={i}>
              <span className="rsm-label">{m.label}</span>
              <span className={`rsm-avg ${m.avg == null ? 'muted' : ''}`}>
                {m.avg == null ? '—' : m.avg}
              </span>
              <span className="rsm-count">{m.count} nilai</span>
            </div>
          ))}
          <div className="rsm-item rsm-total">
            <span className="rsm-label">Rerata Kelas</span>
            <span className={`rsm-avg ${baseRowset.length ? '' : 'muted'}`}>
              {baseRowset.length ? Math.round(baseRowset.reduce((a, r) => a + (r.avg ?? 0), 0) / baseRowset.length) : '—'}
            </span>
            <span className="rsm-count">{baseRowset.length} siswa</span>
          </div>
        </div>

        <div className="rekap-toolbar no-print">
          <div className="rekap-search">
            <Search size={16} />
            <input
              type="search" value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Cari nama atau NIS…" aria-label="Cari siswa berdasarkan nama atau NIS"
            />
          </div>
          <select
            className="rekap-kelas-select"
            value={kelasSel}
            onChange={(e) => setKelasSel(e.target.value)}
            aria-label="Filter kelas"
          >
            <option value="">Semua kelas ({effective.length})</option>
            {kelasList.map(k => <option key={k} value={k}>{k}</option>)}
          </select>
          <span className="rekap-search-hint">
            {qNorm ? `${filtered.length} dari ${baseRowset.length} siswa` : `${baseRowset.length} siswa`}
          </span>
        </div>

        {source === 'local' && (
          <div className="pause-note no-print">
            <CloudOff size={16} />
            {isSupabaseConfigured
              ? 'Gagal terhubung ke server — menampilkan data lokal perangkat ini.'
              : 'Supabase belum dikonfigurasi — menampilkan hasil lokal perangkat ini. Untuk rekap terpusat, isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY lalu jalankan schema.sql.'}
          </div>
        )}
        {message && <div className="exam-status info no-print">{message}</div>}

        <div className="rekap-scroll">
          <table className="rekap-table">
            <thead>
              <tr>
                <th>No</th><th>Nama</th><th>NIS</th><th>Kelas</th>
                <th>Modul 1</th><th>Modul 2</th><th>Modul 3</th>
                <th>Rata-rata</th><th>Predikat</th><th>Status</th><th>Durasi</th><th>Akses</th>
              </tr>
            </thead>
            <tbody>
              {effective.length === 0 && (
                <tr><td colSpan={12} style={{ textAlign: 'center', padding: 30, color: 'var(--text-lighter)' }}>
                  Belum ada data. Siswa yang sudah submit Post Test modul akan muncul di sini.
                </td></tr>
              )}
              {effective.length > 0 && filtered.length === 0 && (
                <tr><td colSpan={12} style={{ textAlign: 'center', padding: 30, color: 'var(--text-lighter)' }}>
                  Tidak ada siswa yang cocok dengan pencarian/filter.
                </td></tr>
              )}
              {filtered.map((r, i) => (
                <tr key={r.nis} className={r.count === 0 ? 'row-belum' : ''}>
                  <td>{i + 1}</td>
                  <td style={{ fontWeight: 600 }}>{r.nama}</td>
                  <td className="rekap-nis">{r.nis}</td>
                  <td className="rekap-kelas">{r.kelas || '—'}</td>
                  {r.vals.map((v, j) => (
                    <td key={j} className={v == null ? 'td-muted' : ''}>
                      {v ?? '—'}
                      {r.dur[j] != null && <span className="modul-cell-sub">±{r.dur[j]} mnt</span>}
                    </td>
                  ))}
                  <td className="td-avg">{r.avg == null ? '—' : r.avg}</td>
                  <td>
                    <span className="predikat-badge" data-grade={r.predikat.grade} style={{ display: 'inline-block' }}>
                      {r.avg == null ? '—' : r.predikat.label}
                    </span>
                  </td>
                  <td><span className="status-badge" data-status={r.status}>
                    {r.status === 'selesai' ? 'Selesai' : r.status === 'sebagian' ? 'Sebagian' : 'Belum'}
                  </span></td>
                  <td className="td-dur">{r.durTotal != null ? `±${r.durTotal} mnt` : '—'}</td>
                  <td className="rekap-access">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => setUnlockSel({ nis: r.nis, nama: r.nama })}>
                      <KeyRound size={13} /> Buka Akses
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length > 0 && (
          <p className="rekap-foot">
            <UserCheck size={14} style={{ verticalAlign: 'middle' }} />
            {filtered.length} siswa · rerata kelas{' '}
            <strong>{Math.round(filtered.reduce((a, r) => a + (r.avg ?? 0), 0) / filtered.length)}</strong>
            {kelasSel && <> · filter: {kelasSel}</>}
          </p>
        )}

        <p className="sync-note no-print" style={{ marginTop: 16 }}>
          <CloudCog size={14} style={{ verticalAlign: 'middle' }} /> Retake dikunci server (NIS tidak bisa submit dua kali di modul yang sama).
        </p>

        {unlockSel && (
          <div className="unlock-modal-overlay" onClick={() => setUnlockSel(null)}>
            <div className="unlock-modal" role="dialog" aria-modal="true" aria-label="Kode buka akses" onClick={(e) => e.stopPropagation()}>
              <h3>Buka Akses Ujian</h3>
              <p>
                <strong>{unlockSel.nama}</strong> · NIS <strong>{unlockSel.nis}</strong>
                <br />Berikan kode sesuai modul yang terkunci. Siswa memasukkannya di layar "Ujian Dikunci".
              </p>
              {MODUL_META.map((m) => (
                <div key={m.key} className="unlock-row">
                  <span>{m.label}</span>
                  <code>{unlockCode(unlockSel.nis, m.key)}</code>
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => copyUnlock(m)} aria-label={`Salin kode ${m.label}`}>
                    <Copy size={13} /> Salin
                  </button>
                </div>
              ))}
              <button type="button" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', marginTop: 14 }} onClick={() => setUnlockSel(null)}>
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}