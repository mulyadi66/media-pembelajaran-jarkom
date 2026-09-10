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
    const item = map.get(r.nis) || { nis: r.nis, nama: r.nama, values: {}, lastAt: null };
    item.nama = r.nama;
    item.values[r.modul] = r.nilai;
    if (r.created_at && (!item.lastAt || r.created_at > item.lastAt)) item.lastAt = r.created_at;
    map.set(r.nis, item);
  }
  return [...map.values()]
    .sort((a, b) => a.nis.localeCompare(b.nis))
    .map(item => {
      const vals = MODUL_META.map(m => item.values[m.key]);
      const done = vals.filter(v => v != null);
      const avg = done.length ? Math.round(done.reduce((a, b) => a + b, 0) / done.length) : null;
      return {
        nis: item.nis,
        nama: item.nama,
        vals,
        avg,
        count: done.length,
        predikat: predikat(avg),
      };
    });
}

function exportCSV(rows) {
  const cols = ['No', 'Nama', 'NIS', 'Modul 1', 'Modul 2', 'Modul 3', 'Rata-rata', 'Predikat'];
  const lines = rows.map((r, i) => [
    i + 1, r.nama, r.nis,
    r.vals[0] ?? '', r.vals[1] ?? '', r.vals[2] ?? '',
    r.avg == null ? '' : r.avg,
    r.avg == null ? '' : `${r.predikat.grade} (${r.avg})`,
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

  const verified = rows.reduce((a, r) => a + r.count, 0);
  const completed = rows.filter(r => r.count === MODUL_META.length).length;
  const examToken = getExamToken();

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
            <button className="btn btn-danger" onClick={handleReset} disabled={loading || !rows.length}>
              <Trash2 size={16} /> Reset
            </button>
            <button className="btn btn-secondary" onClick={() => exportCSV(rows)} disabled={!rows.length}>
              <Download size={16} /> CSV
            </button>
            <button className="btn btn-secondary" onClick={() => window.print()} disabled={!rows.length}>
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

        <div className="rekap-stats">
          <div className="rekap-stat"><span className="rs-num">{rows.length}</span><span>Siswa</span></div>
          <div className="rekap-stat"><span className="rs-num">{verified}</span><span>Nilai terkumpul</span></div>
          <div className="rekap-stat"><span className="rs-num">{completed}</span><span>Selesai 3 modul</span></div>
          <div className="rekap-stat"><span className="rs-num">{pendCount}</span><span>Menunggu sinkron</span></div>
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
                <th>No</th><th>Nama</th><th>NIS</th>
                <th>Modul 1</th><th>Modul 2</th><th>Modul 3</th>
                <th>Rata-rata</th><th>Predikat</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr><td colSpan={8} style={{ textAlign: 'center', padding: 30, color: 'var(--text-lighter)' }}>
                  Belum ada data. Siswa yang sudah submit Post Test modul akan muncul di sini.
                </td></tr>
              )}
              {rows.map((r, i) => (
                <tr key={r.nis}>
                  <td>{i + 1}</td>
                  <td style={{ fontWeight: 600 }}>{r.nama}</td>
                  <td className="rekap-nis">{r.nis}</td>
                  {r.vals.map((v, j) => (
                    <td key={j} className={v == null ? 'td-muted' : ''}>{v ?? '—'}</td>
                  ))}
                  <td className="td-avg">{r.avg == null ? '—' : r.avg}</td>
                  <td>
                    <span className="predikat-badge" data-grade={r.predikat.grade} style={{ display: 'inline-block' }}>
                      {r.avg == null ? '—' : r.predikat.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {rows.length > 0 && (
          <p className="rekap-foot">
            <UserCheck size={14} style={{ verticalAlign: 'middle' }} />
            {rows.length} siswa · rerata kelas{' '}
            <strong>{Math.round(rows.reduce((a, r) => a + (r.avg ?? 0), 0) / rows.length)}</strong>
          </p>
        )}

        <p className="sync-note no-print" style={{ marginTop: 16 }}>
          <CloudCog size={14} style={{ verticalAlign: 'middle' }} /> Retake dikunci server (NIS tidak bisa submit dua kali di modul yang sama).
        </p>
      </div>
    </div>
  );
}