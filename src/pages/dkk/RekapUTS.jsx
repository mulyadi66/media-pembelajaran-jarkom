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
import TokenUjianPanel from '../../components/TokenUjianPanel';
import {
  fetchExamResults,
  syncPending,
  getExamHistory,
  DKK_META,
  getRekapPin,
  isSupabaseConfigured,
  resetExamResultsSubject,
  clearExamLocalSubject,
  getRoster,
  saveRoster,
  clearRoster,
  unlockCode,
} from '../../lib/examLib';
import { UTS_DKK_SOAL } from '../../data/dkk/utsDKK.js';

const SUBJECT = 'dkk';
const PIN_KEY = 'rekapPinDkkOk';
const KOLOM = DKK_META; // satu bank soal: seluruh topik diuji dalam satu ujian
const TOTAL_MODUL = KOLOM.length;

function predikat(nilai) {
  if (nilai == null) return { grade: '—', label: '—' };
  if (nilai >= 90) return { grade: 'A', label: 'A · Sangat Baik' };
  if (nilai >= 80) return { grade: 'B', label: 'B · Baik' };
  if (nilai >= 70) return { grade: 'C', label: 'C · Cukup' };
  if (nilai >= 60) return { grade: 'D', label: 'D · Kurang' };
  return { grade: 'E', label: 'E · Perlu Bimbingan' };
}

/** Baris kosong untuk satu siswa. */
function kosong(nis, nama, kelas) {
  const el = {};
  for (const k of KOLOM) el[k.key] = { nilai: null, dur: null };
  return { nis, nama, kelas: kelas || '', el, at: null };
}

/** Satu baris per NIS dari hasil ujian (server atau lokal). */
function buildRows(raw) {
  const map = new Map();
  for (const r of raw) {
    if (!r.nis || !r.nama) continue;
    // Hanya kunci UTS DKK yang punya kolom tabel. Pakai daftar key, bukan
    // sekadar prefix, supaya sisa data lama (`dkk_posttest`) tidak muncul
    // sebagai siswa hantu berstatus "Belum".
    if (!KOLOM.some(k => k.key === r.modul)) continue;
    const nis = String(r.nis);
    const item = map.get(nis) || kosong(nis, r.nama, r.kelas);
    item.nama = r.nama;
    if (r.kelas) item.kelas = r.kelas;
    if (r.nilai != null) item.el[r.modul].nilai = r.nilai;
    if (r.durasi_detik != null) item.el[r.modul].dur = Math.round(r.durasi_detik / 60);
    if (r.created_at && (!item.at || r.created_at > item.at)) item.at = r.created_at;
    map.set(nis, item);
  }
  return [...map.values()].map(ringkas).sort((a, b) => a.nis.localeCompare(b.nis));
}

/** Hitung rerata, total durasi, dan status per siswa. */
function ringkas(item) {
  const nilai = KOLOM.map(k => item.el[k.key].nilai).filter(v => v != null);
  const dur = KOLOM.map(k => item.el[k.key].dur).filter(v => v != null);
  const jml = nilai.length;
  return {
    ...item,
    jml,
    // Satu bank soal = satu nilai, jadi "rerata" sama dengan nilai UTS itu
    // sendiri. Kolomnya tetap dipertahankan supaya guru accustomed.
    rata: jml ? Math.round(nilai.reduce((a, b) => a + b, 0) / jml) : null,
    durTotal: dur.length ? dur.reduce((a, b) => a + b, 0) : null,
    status: jml === 0 ? 'belum' : jml === TOTAL_MODUL ? 'selesai' : 'sebagian',
  };
}

/** Gabungkan hasil dengan roster guru; siswa roster yang belum ujian tampil "Belum". */
function mergeRoster(rows, roster) {
  const map = new Map(rows.map(r => [String(r.nis), r]));
  for (const s of roster || []) {
    const nis = String(s.nis);
    if (!map.has(nis)) map.set(nis, ringkas(kosong(nis, s.nama, s.kelas)));
    else if (s.kelas && !map.get(nis).kelas) map.get(nis).kelas = s.kelas;
  }
  return [...map.values()].sort((a, b) => a.nis.localeCompare(b.nis));
}

/** Parse teks roster "NIS;Nama;Kelas" per baris -> array siswa. */
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

const STATUS_LABEL = { selesai: 'Selesai', sebagian: 'Sebagian', belum: 'Belum' };

function exportCSV(rows) {
  const cols = ['No', 'Nama', 'NIS', 'Kelas', ...KOLOM.map(k => k.label), 'Status', 'Durasi (mnt)', 'Waktu Submit'];
  const lines = rows.map((r, i) => [
    i + 1, r.nama, r.nis, r.kelas,
    ...KOLOM.map(k => (r.el[k.key].nilai == null ? '' : r.el[k.key].nilai)),
    STATUS_LABEL[r.status],
    r.durTotal ?? '',
    r.at ? formatTanggal(r.at) : '',
  ].join(';'));
  const csv = '\uFEFF' + [cols.join(';'), ...lines].join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'rekap-nilai-uts-dkk.csv';
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function RekapUTS() {
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
        setRows(buildRows(getExamHistory()));
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
            Masukkan PIN untuk membuka Rekap Nilai UTS DKK.
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
  const done = baseRowset.filter(r => r.jml > 0);
  const selesai = baseRowset.filter(r => r.status === 'selesai').length;
  const kelasAvg = done.length ? Math.round(done.reduce((a, r) => a + r.rata, 0) / done.length) : null;

  // Nilai rata-rata per topik pada baris yang sedang difilter kelas.
  const perTopik = KOLOM.map(k => {
    const vals = baseRowset.map(r => r.el[k.key].nilai).filter(v => v != null);
    return { key: k.key, label: k.label, jml: vals.length, rata: vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null };
  });

  const qNorm = q.trim().toLowerCase();
  const filtered = qNorm
    ? baseRowset.filter(r => r.nama.toLowerCase().includes(qNorm) || r.nis.toLowerCase().includes(qNorm))
    : baseRowset;

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

  const clearRosterSave = () => {
    setRoster([]);
    clearRoster(SUBJECT);
  };

  const handleReset = async () => {
    if (!rows.length) { setMessage('Tidak ada data untuk direset.'); return; }
    const pinInput = window.prompt('Reset akan menghapus hasil UTS DKK saja (server + perangkat ini).\nNilai MPK 1 / KKA / mapel lain tidak ikut terhapus.\nKetik PIN untuk melanjutkan:');
    if (pinInput === null) return;
    if (pinInput.trim() !== getRekapPin()) { setMessage('PIN salah — reset dibatalkan.'); return; }
    const sure = window.confirm('Hapus semua hasil UTS DKK? Tindakan ini tidak bisa dibatalkan.');
    if (!sure) return;

    setLoading(true);
    setMessage('');
    const catatanSiswa = ' Siswa di perangkatnya harus menekan "Reset Identitas" agar bisa mengulang.';
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
        ? `Reset selesai — ${res.deleted} baris UTS DKK dihapus dari server.${catatanSiswa}`
        : `Reset selesai — server sudah kosong untuk UTS DKK.${catatanSiswa}`);
    } else {
      setMessage(`Reset selesai pada perangkat ini (hasil UTS DKK di perangkat ini dihapus).${catatanSiswa}`);
    }
    // Server yang bersih belum cukup: kunci submit & riwayat lokal ikut
    // dibuang, kalau tidak tabel langsung terisi lagi dari data lokal dan
    // siswa di perangkat ini tetap terkunci.
    clearExamLocalSubject(SUBJECT);
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

  const copyUnlock = async (key) => {
    if (!unlockSel) return;
    const kode = unlockCode(unlockSel.nis, key);
    const label = (KOLOM.find(k => k.key === key) || {}).label || 'UTS';
    try {
      await navigator.clipboard.writeText(kode);
      setMessage(`Kode buka akses ${label} (${kode}) disalin.`);
    } catch {
      setMessage(`Kode buka akses ${label}: ${kode}`);
    }
  };

  const openManual = () => {
    const nis = manualNis.trim();
    if (nis.length < 3) return;
    const found = baseRowset.find(r => String(r.nis) === nis);
    setUnlockSel({ nis, nama: found ? found.nama : `Siswa NIS ${nis}` });
  };

  const nKolom = 5 + KOLOM.length + 3; // No/Nama/NIS/Kelas/Akses + kolom UTS + rerata/status/waktu
  const cells = (r) => (
    <tr key={r.nis} className={r.status === 'belum' ? 'row-belum' : ''}>
      <td>{effective.indexOf(r) + 1}</td>
      <td style={{ fontWeight: 600 }}>{r.nama}</td>
      <td className="rekap-nis">{r.nis}</td>
      <td className="rekap-kelas">{r.kelas || '—'}</td>
      <td className="rekap-access">
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setUnlockSel({ nis: r.nis, nama: r.nama })}>
          <KeyRound size={13} /> Buka
        </button>
      </td>
      {KOLOM.map(k => {
        const c = r.el[k.key];
        return (
          <td key={k.key} className={c.nilai == null ? 'td-muted' : ''}>
            {c.nilai ?? '—'}
            {c.dur != null && <span className="modul-cell-sub">±{c.dur} mnt</span>}
          </td>
        );
      })}
      <td className="rekap-rata">
        {r.rata == null ? '—' : (
          <span className="predikat-badge" data-grade={predikat(r.rata).grade} style={{ display: 'block' }}>
            {predikat(r.rata).grade} · {r.rata}
          </span>
        )}
      </td>
      <td><span className="status-badge" data-status={r.status}>{STATUS_LABEL[r.status]}</span></td>
      <td className="td-dur">
        {r.durTotal == null ? '—' : `${r.durTotal} mnt`}
        <span className="modul-cell-sub">{formatTanggal(r.at)}</span>
      </td>
    </tr>
  );

  return (
    <div className="section-block" style={{ maxWidth: 1040, margin: '0 auto' }}>
      <div className="materi-card">
        <div className="rekap-header">
          <div>
            <h2 style={{ marginBottom: 4 }}><ClipboardList size={20} style={{ verticalAlign: 'middle' }} /> Rekap Nilai UTS DKK</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
              Dasar Kompetensi Keahlian (DKK) · Kelas XI TJKT · {UTS_DKK_SOAL} soal
            </p>
          </div>
          <div className="rekap-actions no-print">
            <button className="btn btn-secondary" onClick={() => setRosterOpen(o => !o)}>
              <Users size={16} /> Daftar Siswa{roster.length > 0 ? ` (${roster.length})` : ''}
            </button>
            <button className="btn btn-danger" onClick={handleReset} disabled={loading || !rows.length}>
              <Trash2 size={16} /> Reset UTS
            </button>
            <button className="btn btn-secondary" onClick={doExportCSV} disabled={!effective.length}>
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

        <TokenUjianPanel onMessage={setMessage} />

        {rosterOpen && (
          <div className="rekap-roster no-print">
            <p className="roster-head">
              <Users size={14} /> Roster Siswa DKK <small>— untuk melihat siapa yang belum ujian. Tersimpan lokal di perangkat ini.</small>
            </p>
            <textarea
              className="roster-textarea" rows={5}
              value={rosterText}
              onChange={(e) => setRosterText(e.target.value)}
              placeholder={'Format satu baris per siswa: NIS;Nama;Kelas\n20241234;Ahmad Fauzi;X TJKT 1\n20241235;Siti Aminah;X TJKT 1'}
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
          <div className="rekap-stat"><span className="rs-num">{selesai}</span><span>Sudah ujian</span></div>
          <div className="rekap-stat"><span className="rs-num">{baseRowset.length - done.length}</span><span>Belum ujian</span></div>
          <div className="rekap-stat"><span className="rs-num">{pendCount}</span><span>Menunggu sinkron</span></div>
        </div>

        <div className="rekap-modul-stats">
          {perTopik.map(m => (
            <div className="rsm-item" key={m.key}>
              <span className="rsm-label">{m.label}</span>
              <span className={`rsm-avg ${m.rata == null ? 'muted' : ''}`}>{m.rata == null ? '—' : m.rata}</span>
              <span className="rsm-count">{m.jml} nilai</span>
            </div>
          ))}
          <div className="rsm-item rsm-total">
            <span className="rsm-label">Rata-rata kelas</span>
            <span className={`rsm-avg ${kelasAvg == null ? 'muted' : ''}`}>{kelasAvg == null ? '—' : kelasAvg}</span>
            <span className="rsm-count">{done.length} siswa sudah ujian</span>
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
                {KOLOM.map(k => <th key={k.key}>{k.label}</th>)}
                <th>Predikat</th><th>Status</th><th>Durasi / Submit</th>
              </tr>
            </thead>
            <tbody>
              {effective.length === 0 && (
                <tr><td colSpan={nKolom} style={{ textAlign: 'center', padding: 30, color: 'var(--text-lighter)' }}>
                  Belum ada data. Siswa yang sudah submit UTS DKK akan muncul di sini.
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
            {filtered.length} siswa · rata-rata kelas <strong>{kelasAvg ?? '—'}</strong>
            {kelasSel && <> · filter: {kelasSel}</>}
          </p>
        )}

        <p className="sync-note no-print" style={{ marginTop: 16 }}>
          <CloudCog size={14} style={{ verticalAlign: 'middle' }} /> Retake dikunci server (satu NIS tidak bisa submit dua kali untuk UTS DKK).<br />
          <KeyRound size={14} style={{ verticalAlign: 'middle' }} /> <strong>Buka Akses</strong>: klik tombol di kolom Akses, atau ketik NIS siswa yang sedang terkunci di kotak <em>&quot;Buat Kode Buka Akses&quot;</em> di atas.
        </p>

        {unlockSel && (
          <div className="unlock-modal-overlay" onClick={() => setUnlockSel(null)}>
            <div className="unlock-modal" role="dialog" aria-modal="true" aria-label="Kode buka akses" onClick={(e) => e.stopPropagation()}>
              <h3>Buka Akses Ujian</h3>
              <p>
                <strong>{unlockSel.nama}</strong> · NIS <strong>{unlockSel.nis}</strong>
                <br />Siswa memasukkannya di layar &quot;Ujian Dikunci&quot; pada ujian yang terkunci.
              </p>
              {KOLOM.map(k => (
                <div className="unlock-row" key={k.key}>
                  <span>{k.label}</span>
                  <code>{unlockCode(unlockSel.nis, k.key)}</code>
                  <button type="button" className="btn btn-secondary btn-sm" onClick={() => copyUnlock(k.key)} aria-label={`Salin kode buka akses ${k.label}`}>
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
