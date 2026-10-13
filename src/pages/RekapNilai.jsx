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
  FileSpreadsheet,
  ArrowUp,
  ArrowDown,
  ChevronsUpDown,
} from 'lucide-react';
import TokenUjianPanel from '../components/TokenUjianPanel';
import {
  fetchExamResults,
  syncPending,
  getExamHistory,
  MODUL_META,
  getRekapPin,
  isSupabaseConfigured,
  resetExamResultsSubject,
  clearExamLocalSubject,
  getRoster,
  unlockCode,
} from '../lib/examLib';
import RosterPanel from '../components/RosterPanel';
import { MODUL_POSTTEST_SOAL_PER_MODUL } from '../data/modulPostTests';

const SUBJECT = 'mpk1';

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
    // fetchExamResults() mengembalikan hasil SEMUA mapel, jadi wajib dibatasi
    // ke modul MPK 1. Tanpa filter ini, siswa KKA/DKK ikut muncul sebagai
    // baris kosong (semua modul null) di tabel Rekap MPK 1.
    if (!MODUL_META.some(m => m.key === r.modul)) continue;
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
        lastAt: item.lastAt || null,
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
        avg: null, count: 0, lastAt: null, predikat: predikat(null), status: 'belum',
      });
    } else if (s.kelas && !map.get(nis).kelas) {
      map.get(nis).kelas = s.kelas;
    }
  }
  return [...map.values()].sort((a, b) => a.nis.localeCompare(b.nis));
}

/** Format ISO timestamp menjadi tanggal-waktu lokal, mis. "12 Okt 2026, 14.30". */
function formatTanggal(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

const STATUS_LABEL = { selesai: 'Selesai', sebagian: 'Sebagian', belum: 'Belum' };

/** Ekspor .csv rapi (dipisah ';' supaya angka/umur tidak berubah jadi tanggal di Excel). */
function exportCSV(rows) {
  const cols = ['No', 'Nama', 'NIS', 'Kelas', ...MODUL_META.map(m => m.label), 'Rerata', 'Predikat', 'Status', 'Durasi Total (mnt)', 'Waktu Submit'];
  const lines = rows.map((r, i) => [
    i + 1, r.nama, r.nis, r.kelas,
    ...r.vals.map(v => (v == null ? '' : v)),
    r.avg ?? '',
    r.avg == null ? '' : predikat(r.avg).grade,
    STATUS_LABEL[r.status],
    r.durTotal ?? '',
    r.lastAt ? formatTanggal(r.lastAt) : '',
  ].join(';'));
  const csv = '\uFEFF' + [cols.join(';'), ...lines].join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'rekap-nilai-mpk1.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

/**
 * Ekspor .xlsx rapi (sheet "Rekap Nilai" + sheet "Ringkasan") memakai
 * write-excel-file (dimuat lazy supaya chunk hanya ter-download saat dipakai).
 * Sheet utama memakai shortcut objects+columns: tiap kolom punya `cell(r, i)`
 * yang mengembalikan objek sel (nilai + gaya). NIS dipaksa format teks (@)
 * supaya Excel tidak mengubahnya jadi angka.
 */
async function exportExcel(rows) {
  const { default: writeExcelFile, getSheetData } = await import('write-excel-file/browser');

  const header = (text) => ({
    value: text,
    fontWeight: 'bold',
    backgroundColor: '#4f46e5',
    textColor: '#ffffff',
    align: 'center',
    alignVertical: 'center',
    wrap: true,
  });

  const columns = [
    { header: header('No'), width: 5, cell: (r, i) => ({ value: i + 1, align: 'center' }) },
    { header: header('Nama'), width: 26, cell: (r) => ({ value: r.nama }) },
    {
      header: header('NIS'), width: 15,
      cell: (r) => ({ value: r.nis, type: String, format: '@' }),
    },
    { header: header('Kelas'), width: 13, cell: (r) => ({ value: r.kelas || '' }) },
    ...MODUL_META.map((m, idx) => ({
      header: header(m.label),
      width: 8,
      cell: (r) => {
        const v = r.vals[idx];
        return {
          value: v == null ? '' : v,
          align: 'center',
          fontWeight: v != null && v < 70 ? 'bold' : undefined,
          textColor: v != null && v < 70 ? '#b91c1c' : undefined,
        };
      },
    })),
    {
      header: header('Rerata'), width: 8,
      cell: (r) => ({ value: r.avg == null ? '' : r.avg, align: 'center', fontWeight: 'bold' }),
    },
    {
      header: header('Predikat'), width: 11,
      cell: (r) => ({ value: r.avg == null ? '' : predikat(r.avg).grade, align: 'center' }),
    },
    {
      header: header('Status'), width: 12,
      cell: (r) => ({ value: STATUS_LABEL[r.status], align: 'center' }),
    },
    {
      header: header('Durasi Total (mnt)'), width: 11,
      cell: (r) => ({ value: r.durTotal == null ? '' : r.durTotal, align: 'center' }),
    },
    {
      header: header('Waktu Submit'), width: 22,
      cell: (r) => (r.lastAt ? { value: new Date(r.lastAt), type: Date, format: 'dd/mm/yyyy hh:mm' } : { value: '' }),
    },
  ];

  // Sheet Ringkasan — dibangun sebagai sheetData (array baris) langsung.
  const intL = (v) => ({ value: v, fontWeight: 'bold', backgroundColor: '#eef2ff' });
  const title = (v) => ({ value: v, fontWeight: 'bold', fontSize: 14, backgroundColor: '#eef2ff' });
  const ringkasanData = [
    [title('Ringkasan Rekap Nilai Ujian MPK 1 — Perencanaan & Pengalamatan Jaringan'), null, null, null],
    [{ value: `Dibuat ${new Date().toLocaleString('id-ID')} · ${rows.length} siswa pada filter aktif`, textColor: '#6b7280' }, null, null, null],
    [],
    [intL('Modul'), intL('Jumlah Nilai'), intL('Rata-rata'), intL('Terendah / Tertinggi')],
    ...MODUL_META.map((m, idx) => {
      const vals = rows.map((r) => r.vals[idx]).filter((v) => v != null);
      if (!vals.length) return [m.label, 0, '', ''];
      return [
        m.label,
        vals.length,
        Math.round(vals.reduce((a, b) => a + b, 0) / vals.length),
        `${Math.min(...vals)} / ${Math.max(...vals)}`,
      ];
    }),
    [],
    [intL('Sebaran Predikat'), intL('Jumlah'), null, null],
    ...['A', 'B', 'C', 'D', 'E'].map((g) => [
      g,
      rows.filter((r) => r.avg != null && predikat(r.avg).grade === g).length,
      '',
      '',
    ]),
    [],
    [intL('Siswa yang sudah ujian'), rows.filter((r) => r.count > 0).length, null, null],
    [intL('Lolos rerata ≥ 70'), rows.filter((r) => r.count > 0 && r.avg >= 70).length, null, null],
  ];
  const ringkasanCols = [{ width: 24 }, { width: 13 }, { width: 12 }, { width: 22 }];

  const res = await writeExcelFile([
    { data: getSheetData(rows, columns), sheet: 'Rekap Nilai', columns, stickyRowsCount: 1, orientation: 'landscape' },
    { data: ringkasanData, sheet: 'Ringkasan', columns: ringkasanCols },
  ]);
  const blob = await res.toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'rekap-nilai-mpk1.xlsx';
  a.click();
  URL.revokeObjectURL(url);
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
  const [manualNis, setManualNis] = useState('');
  const [q, setQ] = useState('');
  const [kelasSel, setKelasSel] = useState('');
  const [statusSel, setStatusSel] = useState('');
  const [modulSel, setModulSel] = useState('');
  const [sort, setSort] = useState({ key: null, dir: 1 });
  const [roster, setRoster] = useState(() => getRoster(SUBJECT));
  const [rosterOpen, setRosterOpen] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setMessage('');
    if (isSupabaseConfigured) {
      const { data, error } = await fetchExamResults();
      if (error) {
        setMessage(`Gagal ambil data server: ${error}.`);
        setSource('local');
        setRows(buildRows(getExamHistory()));
      } else {
        setRows(buildRows(data || []));
        setSource('server');
      }
      // Sinkronkan hasil yang mengantri. Pesannya dipasang SETELAH reload ulang
      // selesai, karena load() memulai dengan setMessage('') — kalau dipasang
      // sebelum reload, teks "Tersinkron N…" langsung terhapus dan tak terlihat.
      syncPending()
        .then(async (n) => {
          if (n > 0) {
            await load();
            setMessage(`Tersinkron ${n} hasil yang tertunda.`);
          }
        })
        .catch(() => {});
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

  // --- Sortir kolom (klik header) ---
  // Nilai kosong selalu ke bawah apa pun arahnya, supaya siswa yang belum
  // ujian tidak "menang" saat diurutkan menurun.
  const STATUS_RANK = { selesai: 0, sebagian: 1, belum: 2 };
  const MODUL_INDEX = new Map(MODUL_META.map((m, idx) => [m.key, idx]));
  const sortVal = (r, key) => {
    if (key === 'nama') return r.nama.toLowerCase();
    if (key === 'nis') return r.nis;
    if (key === 'kelas') return (r.kelas || '').toLowerCase();
    if (key === 'rata') return r.avg;
    if (key === 'dur') return r.durTotal;
    if (key === 'status') return STATUS_RANK[r.status] ?? 3;
    const idx = MODUL_INDEX.get(key);
    return idx == null ? undefined : r.vals[idx];
  };
  const sorted = sort.key
    ? [...effective].sort((a, b) => {
      const av = sortVal(a, sort.key);
      const bv = sortVal(b, sort.key);
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * sort.dir;
      return String(av).localeCompare(String(bv)) * sort.dir;
    })
    : effective;

  const toggleSort = (key) => {
    setSort((s) => {
      if (s.key === key) return { key, dir: -s.dir };
      const numerik = key === 'rata' || key === 'dur' || MODUL_INDEX.has(key);
      return { key, dir: numerik ? -1 : 1 }; // nilai: tertinggi dulu
    });
  };

  let baseRowset = kelasSel ? sorted.filter(r => r.kelas === kelasSel) : sorted;
  if (statusSel) baseRowset = baseRowset.filter(r => r.status === statusSel);
  if (modulSel) baseRowset = baseRowset.filter(r => r.vals[MODUL_INDEX.get(modulSel)] != null);

  const verified = baseRowset.reduce((a, r) => a + r.count, 0);
  const done = baseRowset.filter(r => r.count > 0);
  const selesai = baseRowset.filter(r => r.status === 'selesai').length;
  const kelasAvg = done.length ? Math.round(done.reduce((a, r) => a + (r.avg ?? 0), 0) / done.length) : null;

  // Rata-rata per modul pada baris yang sedang difilter kelas.
  const modulAvgs = MODUL_META.map((m, idx) => {
    const vals = baseRowset.map(r => r.vals[idx]).filter(v => v != null);
    return {
      key: m.key,
      label: m.label,
      avg: vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null,
      count: vals.length,
    };
  });

  // Ringkasan: sebaran predikat, jumlah lolos, dan rerata per kelas.
  const predikatCount = ['A', 'B', 'C', 'D', 'E'].map(g => ({
    g, jml: done.filter(r => predikat(r.avg).grade === g).length,
  }));
  const lolosCount = done.filter(r => r.avg >= 70).length;
  const perKelas = kelasList.map(k => {
    const rowsK = baseRowset.filter(r => r.kelas === k);
    const doneK = rowsK.filter(r => r.count > 0);
    return {
      k,
      total: rowsK.length,
      n: doneK.length,
      rata: doneK.length ? Math.round(doneK.reduce((a, r) => a + (r.avg ?? 0), 0) / doneK.length) : null,
    };
  });

  // Header dinamis: tampilkan kelas yang benar-benar ada di data, bukan hardcode.
  const kelasLabel = kelasList.length ? kelasList.join(' · ') : 'Kelas XI TJKT';

  const qNorm = q.trim().toLowerCase();
  const filtered = qNorm
    ? baseRowset.filter(r => r.nama.toLowerCase().includes(qNorm) || r.nis.toLowerCase().includes(qNorm))
    : baseRowset;

  // Rerata di footer ikut baris yang terlihat (filter/pencarian), sejalan dengan
  // ekspor yang juga mengikuti tabel. `kelasAvg` tetap dipakai untuk statistik
  // tingkat kelas di blok ringkasan di atas.
  const filteredDone = filtered.filter(r => r.count > 0);
  const rerataTampil = filteredDone.length
    ? Math.round(filteredDone.reduce((a, r) => a + (r.avg ?? 0), 0) / filteredDone.length)
    : null;

  // Ekspor selalu mengikuti yang terlihat di tabel. Kalau tidak ada fallback ke
  // seluruh data: guru yang mengetik nama yang salah mengira dia mengexpor
  // semua siswa padahal hanya dapat 0 baris (atau sebaliknya).
  const doExportCSV = () => {
    if (!filtered.length) {
      setMessage('Tidak ada baris untuk diekspor — longgarkan pencarian atau filter kelas.');
      return;
    }
    exportCSV(filtered);
    setMessage(`CSV dibuat untuk ${filtered.length} siswa sesuai filter yang aktif.`);
  };

  const doExportExcel = async () => {
    if (!filtered.length) {
      setMessage('Tidak ada baris untuk diekspor — longgarkan pencarian atau filter kelas.');
      return;
    }
    setMessage('Menyiapkan file Excel…');
    try {
      await exportExcel(filtered);
      setMessage(`File Excel dibuat untuk ${filtered.length} siswa sesuai filter yang aktif.`);
    } catch (e) {
      setMessage(`Gagal membuat file Excel: ${e?.message || 'kesalahan tidak diketahui'}.`);
    }
  };

  const handleReset = async () => {
    if (!rows.length) { setMessage('Tidak ada data untuk direset.'); return; }
    const pinInput = window.prompt('Reset akan menghapus hasil Post Test MPK 1 saja (server + perangkat ini).\nNilai KKA / KKA XI / DKK / MPK 2 tidak ikut terhapus.\nKetik PIN untuk melanjutkan:');
    if (pinInput === null) return;
    if (pinInput.trim() !== getRekapPin()) { setMessage('PIN salah — reset dibatalkan.'); return; }
    const sure = window.confirm('Hapus semua hasil Ujian MPK 1 (3 modul)? Tindakan ini tidak bisa dibatalkan.');
    if (!sure) return;

    setLoading(true);
    setMessage('');
    const catatanSiswa = ' Siswa di perangkatnya harus menekan "Reset Identitas" agar bisa mengulang.';
    if (isSupabaseConfigured && source !== 'local') {
      const res = await resetExamResultsSubject(pinInput.trim(), SUBJECT);
      if (!res.ok) {
        setMessage(
          `Reset server gagal: ${res.error}. Jalankan blok reset_exam_results_keys di supabase/schema.sql (SQL Editor Supabase), lalu ulangi.`
        );
        setLoading(false);
        return;
      }
      setMessage(res.deleted > 0
        ? `Reset selesai — ${res.deleted} baris Ujian MPK 1 dihapus dari server.${catatanSiswa}`
        : `Reset selesai — server sudah kosong untuk Ujian MPK 1.${catatanSiswa}`);
    } else {
      setMessage(`Reset selesai pada perangkat ini (hasil Ujian MPK 1 di perangkat ini dihapus).${catatanSiswa}`);
    }
    // Server yang bersih belum cukup: kunci submit & riwayat lokal ikut
    // dibuang, kalau tidak tabel langsung terisi lagi dari data lokal dan
    // siswa di perangkat ini tetap terkunci.
    clearExamLocalSubject(SUBJECT);
    await load();
    setLoading(false);
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

  const openManual = () => {
    const nis = manualNis.trim();
    if (nis.length < 3) return;
    const found = baseRowset.find(r => String(r.nis) === nis);
    setUnlockSel({ nis, nama: found ? found.nama : `Siswa NIS ${nis}` });
  };

  const nKolom = 5 + MODUL_META.length + 4; // No/Nama/NIS/Kelas/Akses + 3 modul + rerata/predikat/status/waktu

  const thSort = (label, key) => {
    const aktif = sort.key === key;
    return (
      <th key={key} aria-sort={aktif ? (sort.dir === 1 ? 'ascending' : 'descending') : 'none'}>
        <button
          type="button"
          className={`rekap-sort-btn${aktif ? ' aktif' : ''}`}
          onClick={() => toggleSort(key)}
          aria-label={`Urutkan berdasarkan ${label}`}
        >
          <span>{label}</span>
          {aktif ? (sort.dir === 1 ? <ArrowUp size={12} /> : <ArrowDown size={12} />) : <ChevronsUpDown size={12} />}
        </button>
      </th>
    );
  };

  const cells = (r) => (
    <tr key={r.nis} className={r.count === 0 ? 'row-belum' : ''}>
      <td>{filtered.indexOf(r) + 1}</td>
      <td style={{ fontWeight: 600 }}>{r.nama}</td>
      <td className="rekap-nis">{r.nis}</td>
      <td className="rekap-kelas">{r.kelas || '—'}</td>
      <td className="rekap-access">
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setUnlockSel({ nis: r.nis, nama: r.nama })}>
          <KeyRound size={13} /> Buka Akses
        </button>
      </td>
      {r.vals.map((v, j) => (
        <td key={j} className={v == null ? 'td-muted' : ''}>
          {v ?? '—'}
          {r.dur[j] != null && <span className="modul-cell-sub">±{r.dur[j]} mnt</span>}
        </td>
      ))}
      <td className="td-avg">
        {r.avg == null ? '—' : (
          <>
            {r.avg} <span className="modul-cell-sub">({r.count}/{MODUL_META.length})</span>
          </>
        )}
      </td>
      <td>
        <span className="predikat-badge" data-grade={r.predikat.grade} style={{ display: 'inline-block' }}>
          {r.avg == null ? '—' : r.predikat.label}
        </span>
      </td>
      <td><span className="status-badge" data-status={r.status}>{STATUS_LABEL[r.status]}</span></td>
      <td className="td-dur">
        {r.durTotal == null ? '—' : `${r.durTotal} mnt`}
        <span className="modul-cell-sub">{formatTanggal(r.lastAt)}</span>
      </td>
    </tr>
  );

  return (
    <div className="section-block" style={{ maxWidth: 920, margin: '0 auto' }}>
      <div className="materi-card">
        <div className="rekap-header">
          <div>
            <h2 style={{ marginBottom: 4 }}><ClipboardList size={20} style={{ verticalAlign: 'middle' }} /> Rekap Nilai Ujian Modul</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
              MPK 1 · Perencanaan & Pengalamatan Jaringan · {kelasLabel} · {MODUL_META.length} modul x {MODUL_POSTTEST_SOAL_PER_MODUL} soal
            </p>
          </div>
          <div className="rekap-actions no-print">
            <button className="btn btn-secondary" onClick={() => setRosterOpen(o => !o)}>
              <Users size={16} /> Daftar Siswa{roster.length > 0 ? ` (${roster.length})` : ''}
            </button>
            <button className="btn btn-danger" onClick={handleReset} disabled={loading || !rows.length}>
              <Trash2 size={16} /> Reset MPK 1
            </button>
            <button className="btn btn-secondary" onClick={doExportCSV} disabled={!effective.length}>
              <Download size={16} /> CSV
            </button>
            <button className="btn btn-secondary" onClick={doExportExcel} disabled={!effective.length}>
              <FileSpreadsheet size={16} /> Excel
            </button>
            <button className="btn btn-secondary" onClick={() => window.print()} disabled={!effective.length}>
              <Printer size={16} /> Cetak
            </button>
            <button className="btn btn-secondary" onClick={load} disabled={loading}>
              <RefreshCw size={16} className={loading ? 'spin' : ''} /> Perbarui
            </button>
          </div>
        </div>

        <TokenUjianPanel onMessage={setMessage} subject="mpk1" />

        {rosterOpen && (
          <RosterPanel
            subject="mpk1"
            label="MPK 1"
            roster={roster}
            setRoster={setRoster}
            onMessage={setMessage}
          />
        )}

        <div className="rekap-stats">
          <div className="rekap-stat"><span className="rs-num">{baseRowset.length}</span><span>Siswa</span></div>
          <div className="rekap-stat"><span className="rs-num">{verified}</span><span>Nilai terkumpul</span></div>
          <div className="rekap-stat"><span className="rs-num">{selesai}</span><span>Lengkap {MODUL_META.length} modul</span></div>
          <div className="rekap-stat"><span className="rs-num">{pendCount}</span><span>Menunggu sinkron</span></div>
        </div>

        <div className="rekap-modul-stats">
          {modulAvgs.map((m) => (
            <div className="rsm-item" key={m.key}>
              <span className="rsm-label">{m.label}</span>
              <span className={`rsm-avg ${m.avg == null ? 'muted' : ''}`}>
                {m.avg == null ? '—' : m.avg}
              </span>
              <span className="rsm-count">{m.count} nilai</span>
            </div>
          ))}
          <div className="rsm-item rsm-total">
            <span className="rsm-label">Rerata kelas</span>
            <span className={`rsm-avg ${kelasAvg == null ? 'muted' : ''}`}>{kelasAvg == null ? '—' : kelasAvg}</span>
            <span className="rsm-count">{done.length} siswa sudah ujian</span>
          </div>
        </div>

        <div className="rekap-summary">
          <div className="rekap-summary-block">
            <span className="rs-label">Sebaran Predikat</span>
            <div className="rs-predikats">
              {predikatCount.map(p => (
                <span key={p.g} className="predikat-badge" data-grade={p.g} title={`${p.jml} siswa`}>
                  {p.g} — {p.jml}
                </span>
              ))}
            </div>
          </div>
          <div className="rekap-summary-block">
            <span className="rs-label">Lolos (rerata ≥ 70)</span>
            <span className="rs-big">
              {lolosCount}
              <small> / {done.length} siswa ujian{done.length ? ` (${Math.round((lolosCount / done.length) * 100)}%)` : ''}</small>
            </span>
          </div>
          <div className="rekap-summary-block">
            <span className="rs-label">Rata-rata per Kelas</span>
            <div className="rs-classes">
              {perKelas.length === 0 && <span className="muted">—</span>}
              {perKelas.map(pk => (
                <span key={pk.k} className="rs-class">
                  <strong>{pk.k}</strong>
                  <span className={`rs-class-avg ${pk.rata == null ? 'muted' : ''}`}>{pk.rata == null ? '—' : pk.rata}</span>
                  <small>{pk.n}/{pk.total} ujian</small>
                </span>
              ))}
            </div>
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
          <select
            className="rekap-kelas-select"
            value={statusSel}
            onChange={(e) => setStatusSel(e.target.value)}
            aria-label="Filter status pengerjaan"
          >
            <option value="">Semua status</option>
            <option value="selesai">Selesai ({MODUL_META.length} modul)</option>
            <option value="sebagian">Sebagian</option>
            <option value="belum">Belum ujian</option>
          </select>
          <select
            className="rekap-kelas-select"
            value={modulSel}
            onChange={(e) => setModulSel(e.target.value)}
            aria-label="Filter siswa yang sudah mengerjakan modul"
          >
            <option value="">Semua modul</option>
            {MODUL_META.map(m => <option key={m.key} value={m.key}>Sudah {m.label}</option>)}
          </select>
          <span className="rekap-search-hint">
            {qNorm ? `${filtered.length} dari ${baseRowset.length} siswa` : `${baseRowset.length} siswa`}
          </span>
        </div>

        <div className="rekap-unlock-manual no-print">
          <KeyRound size={14} />
          <input
            type="text" inputMode="numeric" value={manualNis}
            placeholder="NIS siswa yang ujiannya terkunci (belum tentu tampil di tabel), mis. 2903039"
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
              : 'Supabase belum dikonfigurasi — menampilkan hasil lokal perangkat ini. Untuk rekap terpusat, isi VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY lalu jalankan schema.sql.'}
          </div>
        )}
        {message && <div className="exam-status info no-print">{message}</div>}

        <div className="rekap-scroll">
          <table className="rekap-table">
            <thead>
              <tr>
                <th>No</th>
                {thSort('Nama', 'nama')}
                {thSort('NIS', 'nis')}
                {thSort('Kelas', 'kelas')}
                <th>Akses</th>
                {MODUL_META.map(m => thSort(m.label, m.key))}
                {thSort('Rata-rata', 'rata')}
                <th>Predikat</th>
                {thSort('Status', 'status')}
                {thSort('Durasi / Submit', 'dur')}
              </tr>
            </thead>
            <tbody>
              {effective.length === 0 && (
                <tr><td colSpan={nKolom} style={{ textAlign: 'center', padding: 30, color: 'var(--text-lighter)' }}>
                  Belum ada data. Siswa yang sudah submit Post Test modul akan muncul di sini.
                </td></tr>
              )}
              {effective.length > 0 && filtered.length === 0 && (
                <tr><td colSpan={nKolom} style={{ textAlign: 'center', padding: 30, color: 'var(--text-lighter)' }}>
                  Tidak ada siswa yang cocok dengan pencarian/filter.
                </td></tr>
              )}
              {filtered.map(cells)}
            </tbody>
          </table>
        </div>

        {filtered.length > 0 && (
          <p className="rekap-foot">
            <UserCheck size={14} style={{ verticalAlign: 'middle' }} />
            {filtered.length} siswa · rerata kelas <strong>{rerataTampil ?? '—'}</strong>
            {kelasSel && <> · filter: {kelasSel}</>}
          </p>
        )}

        <p className="sync-note no-print" style={{ marginTop: 16 }}>
          <CloudCog size={14} style={{ verticalAlign: 'middle' }} /> Retake dikunci server (NIS tidak bisa submit dua kali di modul yang sama).<br />
          <KeyRound size={14} style={{ verticalAlign: 'middle' }} /> <strong>Buka Akses</strong>: klik tombol di kolom Akses, atau ketik NIS siswa yang sedang terkunci di kotak <em>"Buat Kode Buka Akses"</em> di atas (siswa yang belum submit memang belum tampil di tabel).
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