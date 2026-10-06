import { useState } from 'react';
import { Users, UserCheck, Trash, CloudUpload, CloudOff } from 'lucide-react';
import { saveRoster, clearRoster, pushSiswa, clearSiswaServer } from '../lib/examLib';

/** Parse teks roster "NIS;Nama;Kelas" per baris -> array siswa. */
function parseRosterText(text) {
  return (text || '').split(/\r?\n/)
    .map((l) => l.trim()).filter(Boolean)
    .map((l) => {
      const p = l.split(/[;,\t]/).map((s) => s.trim());
      return { nis: p[0] || '', nama: p[1] || '', kelas: p[2] || '' };
    })
    .filter((s) => /^\d{4,12}$/.test(s.nis) && s.nama);
}

/**
 * Panel "Daftar Siswa" untuk halaman Rekap Nilai.
 *
 * Dipakai bersama oleh MPK 1, KKA, KKA XI, dan DKK supaya tidak ada empat
 * versi yang perilakunya bisa berbeda.
 *
 * Dua tingkat penyimpanan, dan itu disengaja:
 *  1. Lokal (localStorage) — selalu dipakai. Daftar ini juga yang membuat siswa
 *     yang belum ujian tampil berstatus "Belum" di tabel rekap.
 *  2. Server (tabel `siswa`) — dipakai kalau guru menekan "Kirim ke Server".
 *     Setelah itu siswa di SEMUA perangkat cukup ketik NIS saat ujian dan nama
 *     plus kelasnya terisi otomatis.
 *
 * Kenaifan yang disengaja: gagal kirim ke server TIDAK menghapus daftar lokal,
 * dan tidak ada error yang membuat guru kehilangan daftarnya.
 */
export default function RosterPanel({ subject, label, roster, setRoster, onMessage }) {
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);

  const applyLokal = () => {
    const list = parseRosterText(text);
    if (!list.length) {
      onMessage('Daftar kosong — format satu baris per siswa: NIS;Nama;Kelas');
      return;
    }
    setRoster(list);
    saveRoster(list, subject);
    setText('');
    onMessage(`${list.length} siswa tersimpan di perangkat ini. Tekan "Kirim ke Server" supaya semua perangkat bisa lookup dari NIS.`);
  };

  const kirimServer = async () => {
    setBusy(true);
    try {
      const r = await pushSiswa(roster, subject);
      onMessage(r.message);
    } finally {
      setBusy(false);
    }
  };

  const hapusSemua = async () => {
    if (!window.confirm('Hapus daftar siswa ini dari perangkat ini DAN dari server?')) return;
    const r = await clearSiswaServer(subject);
    setRoster([]);
    clearRoster(subject);
    onMessage(r.ok ? r.message : `${r.message} Daftar lokal sudah dihapus.`);
  };

  return (
    <div className="rekap-roster no-print">
      <p className="roster-head">
        <Users size={14} /> Roster Siswa {label}{' '}
        <small>— untuk melihat siapa yang belum ujian, dan untuk auto-fill identitas dari NIS.</small>
      </p>
      <textarea
        className="roster-textarea" rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={'Format satu baris per siswa: NIS;Nama;Kelas\n20241234;Ahmad Fauzi;X TJKT 1\n20241235;Siti Aminah;X TJKT 1'}
        aria-label="Daftar siswa NIS;Nama;Kelas"
      />
      <div className="roster-actions">
        <button className="btn btn-primary" onClick={applyLokal} disabled={!text.trim()}>
          <UserCheck size={16} /> Terapkan Roster
        </button>
        <button className="btn btn-secondary" onClick={() => setText('')} disabled={!text}>Bersihkan</button>
        {/* Tombol server selalu dirender, disabled saat roster kosong. Kalau
            disembunyikan (roster.length > 0 jadi syarat), guru tidak pernah
            melihatnya dan menyangka fiturnya tidak ada. */}
        <button className="btn btn-secondary" onClick={kirimServer} disabled={busy || roster.length === 0}>
          <CloudUpload size={16} /> {busy ? 'Mengirim…' : 'Kirim ke Server'}
        </button>
        <button className="btn btn-danger" onClick={hapusSemua} disabled={busy}>
          <Trash size={16} /> Hapus dari Server + Lokal
        </button>
      </div>
      {roster.length > 0 ? (
        <p className="roster-hint">
          {roster.length} siswa tersimpan di perangkat ini · siswa yang belum ujian tampil berstatus{' '}
          <strong>Belum</strong>. Auto-fill identitas dari NIS baru berlaku di semua perangkat setelah tekan{' '}
          <strong>Kirim ke Server</strong>.
        </p>
      ) : (
        <p className="roster-hint">
          <CloudOff size={13} style={{ verticalAlign: 'middle' }} /> Belum ada roster. Tempel daftar
          <code> NIS;Nama;Kelas </code>di kotak di atas lalu tekan <strong>Terapkan Roster</strong>, baru{' '}
          <strong>Kirim ke Server</strong> aktif. Selama itu siswa tetap bisa ujian dengan mengetik nama
          sendiri, hanya tidak auto-terisi.
        </p>
      )}
    </div>
  );
}