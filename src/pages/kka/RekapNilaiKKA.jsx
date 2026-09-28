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
  KKA_META,
  SUBJECT_PREFIX,
  getRekapPin,
  getExamToken,
  isSupabaseConfigured,
  resetExamResultsSubject,
  getRoster,
  saveRoster,
  clearRoster,
  unlockCode,
} from '../../lib/examLib';

const SUBJECT = 'kka';
const PIN_KEY = 'rekapPinKkaOk';

function predikat(nilai) {
  if (nilai == null) return { grade: '—', label: '—' };
  if (nilai >= 90) return { grade: 'A', label: 'A · Sangat Baik' };
  if (nilai >= 80) return { grade: 'B', label: 'B · Baik' };
  if (nilai >= 70) return { grade: 'C', label: 'C · Cukup' };
  if (nilai >= 60) return { grade: 'D', label: 'D · Kurang' };
  return { grade: 'E', label: 'E · Perlu Bimbingan' };
}

const [MODUL] = KKA_META;

/** Satu baris per NIS dari hasil ujian (server atau lokal). */
function buildRows(raw) {
  const map = new Map();
  for (const r of raw) {
    if (!r.nis || !r.nama) continue;
    if (!String(r.modul || '').startsWith(SUBJECT_PREFIX.kka)) continue; // abaikan mapel lain
    const nis = String(r.nis);
    const item = map.get(nis) || { nis, nama: r.nama, kelas: '', nilai: null, dur: null, at: null };
    item.nama = r.nama;
    if (r.kelas) item.kelas = r.kelas;
    if (item.nilai == null) item.nilai = r.nilai;
    if (r.durasi_detik != null) item.dur = Math.round(r.durasi_detik / 60);
    if (r.created_at && (!item.at || r.created_at > item.at)) item.at = r.created_at;
    map.set(nis, item);
  }
  return [...map.values()]
    .sort((a, b) => a.nis.localeCompare(b.nis))
    .map(item => ({
      ...item,
      predikat: predikat(item.nilai),
      status: item.nilai == null ? 'belum' : 'selesai',
    }));
}

/** Gabungkan hasil dengan roster guru; siswa roster yang belum ujian tampil "Belum". */
function mergeRoster(rows, roster) {
  const map = new Map(rows.map(r => [String(r.nis), r]));
  for (const s of roster || []) {
    const nis = String(s.nis);
    if (!map.has(nis)) {
      map.set(nis, {
        nis, nama: s.nama, kelas: s.kelas || '', nilai: null, dur: null, at: null,
        predikat: predikat(null), status: 'belum',
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
    .filter(s => /^\d{4,12}$/.test(s.nis) && s.nama);
}

function formatTanggal(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function exportCSV(rows) {
  const cols = ['No', 'Nama', 'NIS', 'Kelas', 'Ujian KKA', 'Predikat', 'Status', 'Durasi (mnt)', 'Waktu Submit'];
  const lines = rows.map((r, i) => [
    i + 1, r.nama, r.nis, r.kelas,
    r.nilai == null ? '' : r.nilai,
    r.nilai == null ? '' : `${r.predikat.grade} (${r.nilai})`,
    r.status === 'selesai' ? 'Selesai' : 'Belum',
    r.dur ?? '',
    r.at ? formatTanggal(r.at) : '',
  ].join(';'));
  const csv = '\uFEFF' + [cols.join(';'), ...lines].join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'rekap-nilai-kka.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function RekapNilaiKKA() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(PIN_KEY) === '1');
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [rows, setRows] = useState([]);
  const [source, setSource] = useState('server');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [unlockSel, setUnlockSel] = useState(null);
  const [manualNis, setManualNis] = useState('');
  const [q, setQ] = useState('');
  const [kelasSel, setKelasSel] = useState('');
  const [roster, setRoster] = useState(() => getRoster(SUBJECT));
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
        sessionStorage.setItem(PIN_KEY, '1');
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
            Masukkan PIN untuk membuka Rekap Nilai KKA.
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
  const done = baseRowset.filter(r => r.nilai != null);
  const kelasAvg = done.length ? Math.round(done.reduce((a, r) => a + r.nilai, 0) / done.length) : null;
  const lulus = done.filter(r => r.nilai >= 70).length;
  const tertinggi = done.length ? Math.max(...done.map(r => r.nilai)) : null;
  const examToken = getExamToken();

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

  const clearRosterSave = () => {
    setRoster([]);
    clearRoster(SUBJECT);
  };

  const handleReset = async () => {
    if (!rows.length) { setMessage('Tidak ada data untuk direset.'); return; }
    const pinInput = window.prompt('Reset akan menghapus hasil UJIAN KKA saja (server + perangkat ini).\nNilai MPK 1 / DKK / mapel lain tidak ikut terhapus.\nKetik PIN untuk melanjutkan:');
    if (pinInput === null) return;
    if (pinInput.trim() !== getRekapPin()) { setMessage('PIN salah — reset dibatalkan.'); return; }
    const sure = window.confirm('Hapus semua hasil Ujian KKA? Tindakan ini tidak bisa dibatalkan.');
    if (!sure) return;

    setLoading(true);
    setMessage('');
    if (isSupabaseConfigured && source !== 'local') {
      const res = await resetExamResultsSubject(pinInput.trim(), SUBJECT);
      if (!res.ok) {
        setMessage(
          `Reset server gagal: ${res.error}. Jalankan blok reset_exam_results_subject di supabase/schema.sql (SQL Editor Supabase), lalu ulangi.`
        );
        setLoading(false);
        return;
      }
      setMessage(res.deleted > 0
        ? `Reset selesai — ${res.deleted} baris Ujian KKA dihapus dari server. Siswa bisa mengerjakan ulang.`
        : 'Reset selesai — server sudah kosong untuk Ujian KKA. Siswa bisa mengerjakan ulang.');
    } else {
      setMessage('Reset selesai pada perangkat ini (data lokal dihapus).');
    }
    await load();
    setLoading(false);
  };

  const applyRoster = () => {
    const list = parseRosterText(rosterText);
    if (!list.length) { setMessage('Roster kosong — format NIS;Nama;Kelas per baris.'); return; }
    setRoster(list);
    saveRoster(list, SUBJECT);
    setRosterText('');
    setRosterOpen(false);
    setMessage(`Roster disimpan — ${list.length} siswa (tersimpan lokal di perangkat ini).`);
  };

  const copyUnlock = async () => {
    if (!unlockSel) return;
    const code = unlockCode(unlockSel.nis, MODUL.key);
    try {
      await navigator.clipboard.writeText(code);
      setMessage(`Kode buka akses Ujian KKA (${code}) disalin.`);
    } catch {
      setMessage(`Kode buka akses Ujian KKA: ${code}`);
    }
  };

  const openManual = () => {
    const nis = manualNis.trim();
    if (nis.length < 3) return;
    const found = baseRowset.find(r => String(r.nis) === nis);
    setUnlockSel({ nis, nama: found ? found.nama : `Siswa NIS ${nis}` });
  };

  return (
    <div className="section-block" style={{ maxWidth: 920, margin: '0 auto' }}>
      <div className="materi-card">
        <div className="rekap-header">
          <div>
            <h2 style={{ marginBottom: 4 }}><ClipboardList size={20} style={{ verticalAlign: 'middle' }} /> Rekap Nilai Ujian KKA</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
              Koding dan Kecerdasan Artifisial (KKA) · Kelas XI TJKT · 25 soal
            </p>
          </div>
          <div className="rekap-actions no-print">
            <button className="btn btn-secondary" onClick={() => setRosterOpen(o => !o)}>
              <Users size={16} /> Daftar Siswa{roster.length > 0 ? ` (${roster.length})` : ''}
            </button>
            <button className="btn btn-danger" onClick={handleReset} disabled={loading || !rows.length}>
              <Trash2 size={16} /> Reset KKA
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
            <small>Token yang sama dengan MPK 1. Bagikan ke siswa agar mereka bisa membuka Ujian KKA di halaman /kka/ujian.</small>
          </div>
          <button className="btn btn-secondary" onClick={copyToken} aria-label="Salin token ujian">
            <Copy size={16} /> Salin
          </button>
        </div>

        {rosterOpen && (
          <div className="rekap-roster no-print">
            <p className="roster-head">
              <Users size={14} /> Roster Siswa KKA <small>— untuk melihat siapa yang belum ujian. Tersimpan lokal di perangkat ini.</small>
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
                <button className="btn btn-danger" onClick={clearRosterSave}>
                  <Trash2 size={16} /> Hapus Roster
                </button>
              )}
            </div>
            {roster.length > 0 && (
              <p className="roster-hint">
                {roster.length} siswa tersimpan · siswa di roster yang belum ujian tampil berstatus <strong>Belum</strong>.
              </p>
            )}
          </div>
        )}

        <div className="rekap-stats">
          <div className="rekap-stat"><span className="rs-num">{baseRowset.length}</span><span>Siswa</span></div>
          <div className="rekap-stat"><span className="rs-num">{done.length}</span><span>Nilai terkumpul</span></div>
          <div className="rekap-stat"><span className="rs-num">{baseRowset.length - done.length}</span><span>Belum ujian</span></div>
          <div className="rekap-stat"><span className="rs-num">{pendCount}</span><span>Menunggu sinkron</span></div>
        </div>

        <div className="rekap-modul-stats">
          <div className="rsm-item">
            <span className="rsm-label">Rata-rata kelas</span>
            <span className={`rsm-avg ${kelasAvg == null ? 'muted' : ''}`}>
              {kelasAvg == null ? '—' : kelasAvg}
            </span>
            <span className="rsm-count">{done.length} nilai</span>
          </div>
          <div className="rsm-item">
            <span className="rsm-label">Lulus (≥ 70)</span>
            <span className={`rsm-avg ${lulus ? '' : 'muted'}`}>{lulus}</span>
            <span className="rsm-count">{done.length ? Math.round((lulus / done.length) * 100) : 0}% dari yang ujian</span>
          </div>
          <div className="rsm-item rsm-total">
            <span className="rsm-label">Nilai Tertinggi</span>
            <span className={`rsm-avg ${tertinggi == null ? 'muted' : ''}`}>{tertinggi ?? '—'}</span>
            <span className="rsm-count">{tertinggi == null ? 'belum ada' : 'nilai tertinggi'}</span>
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

        <div className="rekap-unlock-manual no-print">
          <KeyRound size={14} />
          <input
            type="text" inputMode="numeric" value={manualNis}
            placeholder="NIS siswa yang ujiannya terkunci, mis. 2903039"
            aria-label="NIS siswa terkunci untuk dibuatkan kode buka akses"
            onChange={(e) => { setManualNis(e.target.value.replace(/\D/g, '')); }}
            onKeyDown={(e) => { if (e.key === 'Enter') openManual(); }}
          />
          <button type="button" className="btn btn-secondary btn-sm" onClick={openManual} disabled={manualNis.length < 3}>
            <KeyRound size={13} /> Buat Kode Buka Akses
          </button>
        </div>

        {source === 'local' && (
          <div className="pause-note no-print">
            <CloudOff size={16} />
            {isSupabaseConfigured
              ? 'Gagal terhubung ke server — menampilkan data lokal perangkat ini.'
              : 'Supabase belum dikonfigurasi — menampilkan hasil lokal perangkat ini.'}
          </div>
        )}
        {message && <div className="exam-status info no-print">{message}</div>}

        <div className="rekap-scroll">
          <table className="rekap-table">
            <thead>
              <tr>
                <th>No</th><th>Nama</th><th>NIS</th><th>Kelas</th><th>Akses</th>
                <th>{MODUL.label}</th><th>Predikat</th><th>Status</th><th>Waktu Submit</th>
              </tr>
            </thead>
            <tbody>
              {effective.length === 0 && (
                <tr><td colSpan={9} style={{ textAlign: 'center', padding: 30, color: 'var(--text-lighter)' }}>
                  Belum ada data. Siswa yang sudah submit Ujian KKA akan muncul di sini.
                </td></tr>
              )}
              {effective.length > 0 && filtered.length === 0 && (
                <tr><td colSpan={9} style={{ textAlign: 'center', padding: 30, color: 'var(--text-lighter)' }}>
                  Tidak ada siswa yang cocok dengan pencarian/filter.
                </td></tr>
              )}
              {filtered.map((r, i) => (
                <tr key={r.nis} className={r.nilai == null ? 'row-belum' : ''}>
                  <td>{i + 1}</td>
                  <td style={{ fontWeight: 600 }}>{r.nama}</td>
                  <td className="rekap-nis">{r.nis}</td>
                  <td className="rekap-kelas">{r.kelas || '—'}</td>
                  <td className="rekap-access">
                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => setUnlockSel({ nis: r.nis, nama: r.nama })}>
                      <KeyRound size={13} /> Buka Akses
                    </button>
                  </td>
                  <td className={r.nilai == null ? 'td-muted' : ''}>
                    {r.nilai ?? '—'}
                    {r.dur != null && <span className="modul-cell-sub">±{r.dur} mnt</span>}
                  </td>
                  <td>
                    <span className="predikat-badge" data-grade={r.predikat.grade} style={{ display: 'inline-block' }}>
                      {r.nilai == null ? '—' : r.predikat.label}
                    </span>
                  </td>
                  <td><span className="status-badge" data-status={r.status}>
                    {r.status === 'selesai' ? 'Selesai' : 'Belum'}
                  </span></td>
                  <td className="td-dur">{formatTanggal(r.at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length > 0 && (
          <p className="rekap-foot">
            <UserCheck size={14} style={{ verticalAlign: 'middle' }} />
            {filtered.length} siswa · rerata kelas <strong>{kelasAvg ?? '—'}</strong>
            {kelasSel && <> · filter: {kelasSel}</>}
          </p>
        )}

        <p className="sync-note no-print" style={{ marginTop: 16 }}>
          <CloudCog size={14} style={{ verticalAlign: 'middle' }} /> Retake dikunci server (NIS tidak bisa submit dua kali untuk Ujian KKA).<br />
          <KeyRound size={14} style={{ verticalAlign: 'middle' }} /> <strong>Buka Akses</strong>: klik tombol di kolom Akses, atau ketik NIS siswa yang sedang terkunci di kotak <em>"Buat Kode Buka Akses"</em> di atas.
        </p>

        {unlockSel && (
          <div className="unlock-modal-overlay" onClick={() => setUnlockSel(null)}>
            <div className="unlock-modal" role="dialog" aria-modal="true" aria-label="Kode buka akses" onClick={(e) => e.stopPropagation()}>
              <h3>Buka Akses Ujian</h3>
              <p>
                <strong>{unlockSel.nama}</strong> · NIS <strong>{unlockSel.nis}</strong>
                <br />Siswa memasukkannya di layar "Ujian Dikunci".
              </p>
              <div className="unlock-row">
                <span>{MODUL.label}</span>
                <code>{unlockCode(unlockSel.nis, MODUL.key)}</code>
                <button type="button" className="btn btn-secondary btn-sm" onClick={copyUnlock} aria-label="Salin kode buka akses">
                  <Copy size={13} /> Salin
                </button>
              </div>
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
