import { supabase, isSupabaseConfigured } from './supabase';

export { isSupabaseConfigured } from './supabase';

const K = {
  identity: 'jarkomlab_identity',
  history: 'jarkomlab_examHistory',
  submitted: 'jarkomlab_examSubmitted',
  pending: 'jarkomlab_pendingSync',
  roster: 'jarkomlab_roster',
};

export const MODUL_META = [
  { key: 'mpk1_modul1_posttest', label: 'Modul 1' },
  { key: 'mpk1_modul2_posttest', label: 'Modul 2' },
  { key: 'mpk1_modul3_posttest', label: 'Modul 3' },
];

/**
 * Ujian KKA dipecah per elemen (menggantikan Post Test biasa).
 * Kunci ini WAJIB sama dengan `key` di src/data/kka/ujianKKA.js karena dipakai
 * sebagai storageKey, scoreKey, dan kolom `modul` di Supabase.
 */
export const KKA_META = [
  { key: 'kka_elemen1_ujian', label: 'Elemen 1' },
  { key: 'kka_elemen2_ujian', label: 'Elemen 2' },
  { key: 'kka_elemen3_ujian', label: 'Elemen 3' },
  { key: 'kka_elemen4_ujian', label: 'Elemen 4' },
  { key: 'kka_elemen5_ujian', label: 'Elemen 5' },
];

/**
 * Ujian KKA XI dipecah per modul (menggantikan Post Test KKA XI).
 * Kunci WAJIB sama dengan `key` di src/data/kka-xi/ujianKKAXI.js karena dipakai
 * sebagai storageKey, scoreKey, dan kolom `modul` di Supabase.
 */
export const KKA_XI_META = [
  { key: 'kka_xi_modul1_ujian', label: 'Modul 1' },
  { key: 'kka_xi_modul2_ujian', label: 'Modul 2' },
  { key: 'kka_xi_modul3_ujian', label: 'Modul 3' },
  { key: 'kka_xi_modul4_ujian', label: 'Modul 4' },
];

/**
 * Ujian Tengah Semester (UTS) DKK. Post Test DKK lama sudah dihapus, jadi
 * hanya ada satu kunci: `dkk_uts`. Kunci ini WAJIB sama dengan `key` di
 * src/data/dkk/utsDKK.js karena dipakai sebagai storageKey, scoreKey, dan
 * kolom `modul` di Supabase.
 *
 * Prefix dipakai 'dkk_uts' (bukan 'dkk_') supaya `dkk_pretestAnswers` milik
 * Pre-Test tidak ikut terdeteksi sebagai ujian bertoken — Pre-Test sengaja
 * tidak memakai token dan boleh diulang.
 */
export const DKK_META = [
  { key: 'dkk_uts', label: 'UTS' },
];

/** Semua kunci ujian di aplikasi — dipakai saat membersihkan data lokal. */
export const ALL_MODUL_META = [...MODUL_META, ...KKA_META, ...KKA_XI_META, ...DKK_META];

/**
 * Kunci modul ujian per mata pelajaran — dipakai saat reset per mapel.
 *
 * PENTING: pakai DAFTAR KEY, bukan prefix. Prefix tidak bisa membedakan
 * 'kka' dari 'kka_xi_' karena 'kka_xi_modul1_ujian' sama-sama diawali 'kka_'.
 * Reset KKA reguler akan ikut menghapus nilai KKA XI kalau memakai awalan.
 */
export const SUBJECT_KEYS = {
  mpk1: MODUL_META.map(m => m.key),
  kka: KKA_META.map(m => m.key),
  kka_xi: KKA_XI_META.map(m => m.key),
  dkk: DKK_META.map(m => m.key),
};

/**
 * Prefix untuk fungsi reset versi LAMA di server (yang masih cocok dengan
 * `like prefix || '%'`). Dipilih agar tetap tidak tumpang tindih:
 * 'kka_elemen' hanya mengenai KKA reguler, bukan 'kka_xi_...'.
 */
export const SUBJECT_LEGACY_PREFIX = {
  mpk1: 'mpk1_',
  kka: 'kka_elemen',
  kka_xi: 'kka_xi_',
  dkk: 'dkk_uts',
};

/** Kunci modul ujian milik satu mapel. */
export function getSubjectKeys(subject) {
  return SUBJECT_KEYS[subject] || SUBJECT_KEYS.mpk1;
}

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ============ IDENTITAS ============
export function getIdentity() {
  const i = loadJSON(K.identity, null);
  return i && i.nama && i.nis ? i : null;
}

export function saveIdentity(identity) {
  saveJSON(K.identity, { nama: identity.nama.trim(), nis: identity.nis.trim(), kelas: (identity.kelas || '').trim() });
}

/** Hapus identitas siswa agar siswa lain bisa mengerjakan (perangkat bersama). */
export function clearIdentity() {
  localStorage.removeItem(K.identity);
}

export function getIdentityError({ nama, nis }) {
  if (!nama || !nama.trim()) return 'Nama wajib diisi.';
  if (!nis || !String(nis).trim()) return 'NIS wajib diisi.';
  if (!/^\d{4,12}$/.test(String(nis).trim())) return 'NIS harus berupa angka 4–12 digit (tanpa spasi/titik).';
  return null;
}

// ============ RIWAYAT & LOCK ============
export function getExamHistory() {
  return loadJSON(K.history, []);
}

export function getExamSubmitted() {
  return loadJSON(K.submitted, {});
}

export function isModulLocked(modul) {
  return Boolean(getExamSubmitted()[modul]);
}

export function hasAnySubmission() {
  return getExamHistory().length > 0;
}

// ============ SYNC KE SUPABASE ============
/** Insert dengan kolom lengkap; jika tabel belum dimigrasi (kolom belum ada,
 *  error 42703) → fallback ke kolom dasar agar submit tetap berhasil. */
async function insertRecord(record) {
  if (!supabase) return { synced: false, rejected: false, reason: 'not-configured' };

  const { error } = await supabase
    .from('exam_results')
    .insert({
      nis: record.nis,
      nama: record.nama,
      modul: record.modul,
      nilai: record.nilai,
      kelas: record.kelas || null,
      started_at: record.startedAt ? new Date(record.startedAt).toISOString() : null,
      finished_at: record.finishedAt ? new Date(record.finishedAt).toISOString() : null,
      durasi_detik: record.startedAt && record.finishedAt
        ? Math.max(0, Math.round((record.finishedAt - record.startedAt) / 1000))
        : null,
    });

  if (!error) return { synced: true };
  if (error.code === '23505' || /[Dd]uplicate/i.test(error.message || '')) {
    return { synced: false, rejected: true };
  }
  if (error.code === '42703') {
    const { error: err2 } = await supabase
      .from('exam_results')
      .insert({ nis: record.nis, nama: record.nama, modul: record.modul, nilai: record.nilai });
    if (!err2) return { synced: true };
    if (err2.code === '23505' || /[Dd]uplicate/i.test(err2.message || '')) {
      return { synced: false, rejected: true };
    }
    return { synced: false, rejected: false, reason: err2.message };
  }
  return { synced: false, rejected: false, reason: error.message };
}

function getPending() {
  return loadJSON(K.pending, []);
}

/**
 * Catat hasil ujian ke localStorage + kirim ke Supabase.
 * @returns {Promise<{status:'saved'|'queued'|'locked', message?:string}>}
 */
export async function addExamResult(record) {
  const history = getExamHistory();
  if (history.some(r => r.nis === record.nis && r.modul === record.modul)) {
    return { status: 'locked', message: 'NIS ini sudah terverifikasi pada modul tersebut.' };
  }

  const newHistory = [...history, record];
  saveJSON(K.history, newHistory);
  saveJSON(K.submitted, { ...getExamSubmitted(), [record.modul]: true });

  const res = await insertRecord(record);
  if (res.synced) return { status: 'saved' };
  if (res.rejected) {
    return { status: 'locked', message: 'NIS sudah terverifikasi server. Ujian terkunci.' };
  }
  if (!isSupabaseConfigured) return { status: 'queued', message: 'Disimpan lokal (Supabase belum dikonfigurasi).' };

  const pending = getPending();
  pending.push({ ...record, _queuedAt: Date.now() });
  saveJSON(K.pending, pending);
  return { status: 'queued', message: 'Lagi offline — hasil disimpan, akan dikirim saat online.' };
}

/** Kirim ulang antrian hasil yang belum ter-upload. @returns {Promise<number>} jumlah tersinkron */
export async function syncPending() {
  if (!supabase) return 0;
  const pending = getPending();
  if (!pending.length) return 0;

  const remaining = [];
  let synced = 0;
  for (const rec of pending) {
    const res = await insertRecord(rec);
    if (res.synced || res.rejected) synced += 1;
    else remaining.push(rec);
  }
  saveJSON(K.pending, remaining);
  return synced;
}

/** Ambil seluruh hasil ujian dari Supabase. @returns {Promise<Array|{error}>} */
export async function fetchExamResults() {
  if (!supabase) return { error: 'Supabase belum dikonfigurasi.' };
  const { data, error } = await supabase
    .from('exam_results')
    .select('nis,nama,modul,nilai,kelas,started_at,finished_at,durasi_detik,created_at')
    .order('nis');
  if (error && error.code === '42703') {
    // Tabel belum dimigrasi — ambil kolom dasar saja.
    const { data: d2, error: e2 } = await supabase
      .from('exam_results')
      .select('nis,nama,modul,nilai,created_at')
      .order('nis');
    return { data: d2, error: e2?.message };
  }
  return { data, error: error?.message };
}

/** Cek apakah NIS sudah pernah tercatat di server (untuk validasi identitas).
 *  @param {string} nis
 *  @param {string[]} [modulKeys] batasi hanya modul(mapel) tertentu. */
export async function findNisRecords(nis, modulKeys) {
  if (!supabase) return { error: 'not-configured', data: [] };
  let req = supabase
    .from('exam_results')
    .select('modul,nilai,created_at')
    .eq('nis', String(nis).trim())
    .order('created_at', { ascending: false });
  if (Array.isArray(modulKeys) && modulKeys.length) req = req.in('modul', modulKeys);
  const { data, error } = await req;
  return { data, error: error?.message };
}

function clearQuizStorage(key) {
  localStorage.removeItem(`jarkomlab_${key}`);
  localStorage.removeItem(`jarkomlab_${key}_mode`);
  localStorage.removeItem(`jarkomlab_${key}_order`);
  localStorage.removeItem(`jarkomlab_${key}_optorder`);
  localStorage.removeItem(`jarkomlab_${key}_submitted`);
  localStorage.removeItem(`jarkomlab_${key}_deadline`);
  localStorage.removeItem(`jarkomlab_${key}_unlocked`);
  localStorage.removeItem(`jarkomlab_${key}_startedAt`);
  localStorage.removeItem(`jarkomlab_${key}_warns`);
  // Hasil submit yang disimpan (skor akhir). Kalau tidak dihapus, siswa berikutnya
  // di perangkat bersama bisa membaca sisa nilai ujian sebelumnya.
  localStorage.removeItem(`jarkomlab_${key}_result`);
}

/** Hapus semua hasil ujian di perangkat ini (riwayat, kunci retake, antrian, skor). Identitas siswa tetap. */
export function clearExamLocal() {
  localStorage.removeItem(K.history);
  localStorage.removeItem(K.submitted);
  localStorage.removeItem(K.pending);
  for (const m of ALL_MODUL_META) clearQuizStorage(m.key);
  try {
    const scores = JSON.parse(localStorage.getItem('jarkomlab_scores') || '{}');
    for (const m of ALL_MODUL_META) delete scores[m.key];
    localStorage.setItem('jarkomlab_scores', JSON.stringify(scores));
  } catch { /* abaikan jika data korup */ }
}

/**
 * Hapus hasil ujian lokal milik SATU mata pelajaran saja, tanpa menyentuh mapel
 * lain. Dipakai tombol Reset di Rekap Nilai per mapel supaya nilai MPK 1 / mapel
 * lain di perangkat guru tidak ikut terhapus.
 * @param {string} subject 'mpk1' | 'kka' | 'kka_xi'
 */
export function clearExamLocalSubject(subject) {
  const keys = getSubjectKeys(subject);
  const milik = (modul) => keys.includes(String(modul || ''));

  saveJSON(K.history, getExamHistory().filter(r => !milik(r.modul)));
  saveJSON(K.pending, getPending().filter(r => !milik(r.modul)));

  const submitted = getExamSubmitted();
  for (const key of Object.keys(submitted)) if (milik(key)) delete submitted[key];
  saveJSON(K.submitted, submitted);

  for (const m of ALL_MODUL_META) if (milik(m.key)) clearQuizStorage(m.key);
  try {
    const scores = JSON.parse(localStorage.getItem('jarkomlab_scores') || '{}');
    for (const m of ALL_MODUL_META) if (milik(m.key)) delete scores[m.key];
    localStorage.setItem('jarkomlab_scores', JSON.stringify(scores));
  } catch { /* abaikan jika data korup */ }
}

/**
 * Hapus seluruh hasil ujian di server. Memvalidasi PIN server-side via fungsi
 * `reset_exam_results` (lihat supabase/schema.sql). @returns {Promise<{ok:boolean,error?:string,deleted?:number,localOnly?:boolean}>}
 */
export async function resetExamResults(pin) {
  if (!supabase) return { ok: true, localOnly: true, deleted: 0 };
  const { data, error } = await supabase.rpc('reset_exam_results', { pin: String(pin || '') });
  if (error) return { ok: false, error: error.message };
  return { ok: true, deleted: data ?? 0 };
}

/**
 * Hapus hasil ujian milik SATU mata pelajaran saja, tanpa menyentuh mapel lain.
 *
 * Memakai fungsi server `reset_exam_results_keys` yang menerima DAFTAR KEY
 * persis (lihat supabase/schema.sql) — paling aman, karena prefix tidak bisa
 * membedakan 'kka' dari 'kka_xi_'. Bila fungsi itu belum ada di database
 * (SQL Editor belum dijalankan ulang), jatuh ke `reset_exam_results_subject`
 * versi lama memakai prefix yang sudah disetel tidak tumpang tindih.
 * @param {string} subject 'mpk1' | 'kka' | 'kka_xi'
 */
export async function resetExamResultsSubject(pin, subject) {
  const keys = getSubjectKeys(subject);
  if (!supabase) return { ok: true, localOnly: true, deleted: 0 };

  const { data, error } = await supabase.rpc('reset_exam_results_keys', {
    pin: String(pin || ''),
    subject_keys: keys,
  });
  if (!error) return { ok: true, deleted: data ?? 0 };

  // Fungsi versi baru belum terpasang di database → coba yang lama.
  const notFound = error.code === '42883' || error.code === 'PGRST202' || /not found|does not exist/i.test(error.message || '');
  if (!notFound) return { ok: false, error: error.message };

  const legacy = await supabase.rpc('reset_exam_results_subject', {
    pin: String(pin || ''),
    subject_prefix: SUBJECT_LEGACY_PREFIX[subject] || SUBJECT_LEGACY_PREFIX.mpk1,
  });
  if (legacy.error) return { ok: false, error: legacy.error.message };
  return { ok: true, deleted: legacy.data ?? 0 };
}

export function getRekapPin() {
  const fromEnv = import.meta.env.VITE_REKAP_PIN;
  return (fromEnv && String(fromEnv).trim()) || '2468';
}

/** Kode buka akses untuk membuka ujian yang terkunci karena pelanggaran anti-contek.
 *  Dihitung dari NIS + modul + PIN guru → hanya guru yang bisa membuatnya (tombol
 *  "Buka Akses" di Rekap) dan diverifikasi di perangkat siswa tanpa server. */
export function unlockCode(nis, modulKey) {
  const secret = getRekapPin();
  const str = `${nis}:${modulKey}:${secret}`;
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = Math.imul(h, 33) + str.charCodeAt(i);
  return Math.abs(h).toString(36).toUpperCase().padStart(6, '0').slice(0, 6);
}

// ============ ROSTER / DATA SISWA ============
/** Kunci roster dipisah per mapel agar daftar siswa tiap pelajaran tidak tertimpa. */
function rosterKey(subject) {
  return subject && subject !== 'mpk1' ? `${K.roster}_${subject}` : K.roster;
}

/** Daftar siswa {nis, nama, kelas} — versi lokal (fallback offline). */
export function getRoster(subject) {
  return loadJSON(rosterKey(subject), []);
}

export function saveRoster(list, subject) {
  saveJSON(rosterKey(subject), list.filter(s => s && s.nis && s.nama));
}

export function clearRoster(subject) {
  localStorage.removeItem(rosterKey(subject));
}

/**
 * Cari data siswa dari tabel `siswa` di server untuk auto-fill identitas.
 *
 * Urutan sumber: server -> roster lokal -> null (siswa ketik manual).
 * Sengaja TIDAK pernah melempar error: migrasi SQL yang belum dijalankan atau
 * Supabase yang down harus membuat siswa ketik manual, bukan terkunci.
 *
 * Mapel spesifik didahulukan atas 'all' karena roster milik kelas: kelas yang
 * sama bisa punya daftar berbeda per pelajaran.
 *
 * @returns {Promise<{nis: string, nama: string, kelas: string}|null>}
 */
export async function findSiswa(nis, subject) {
  const bersih = String(nis || '').trim();
  if (!isSupabaseConfigured || !/^\d{4,12}$/.test(bersih)) return null;

  const mapel = subject ? String(subject) : 'all';
  try {
    const { data, error } = await supabase
      .from('siswa')
      .select('nis, mapel, nama, kelas')
      .eq('nis', bersih)
      .in('mapel', mapel === 'all' ? ['all'] : [mapel, 'all']);
    if (error || !Array.isArray(data) || data.length === 0) return null;

    const spesifik = data.find((r) => r.mapel === mapel);
    const row = spesifik || data[0];
    if (!row?.nama) return null;
    return { nis: row.nis, nama: row.nama, kelas: row.kelas || '' };
  } catch {
    return null;
  }
}

/** Cari di roster lokal perangkat ini (dipakai kalau server tidak terjangkau). */
export function findSiswaLokal(nis, subject) {
  const bersih = String(nis || '').trim();
  if (!bersih) return null;
  const s = getRoster(subject).find((x) => String(x.nis) === bersih);
  return s?.nama ? { nis: bersih, nama: s.nama, kelas: s.kelas || '' } : null;
}

/**
 * Guru mengirim roster ke server dari panel "Daftar Siswa" di Rekap Nilai,
 * supaya semua perangkat siswa bisa auto-fill dari NIS saja.
 *
 * SELALU menyimpan salinan lokal lebih dulu: kalau RPC-nya belum ada di
 * Supabase (blok SQL belum dijalankan), daftar tetap dipakai di perangkat
 * guru alih-alih hilang.
 *
 * @returns {Promise<{ok: boolean, message: string, synced?: number}>}
 */
export async function pushSiswa(list, subject) {
  const rows = (list || [])
    .filter((s) => /^\d{4,12}$/.test(String(s.nis || '').trim()) && String(s.nama || '').trim())
    .map((s) => ({
      nis: String(s.nis).trim(),
      nama: String(s.nama).trim(),
      kelas: String(s.kelas || '').trim(),
    }));
  if (!rows.length) return { ok: false, message: 'Tidak ada baris valid untuk dikirim (NIS 4-12 angka + nama wajib).' };

  saveRoster(rows, subject);

  if (!isSupabaseConfigured) {
    return { ok: false, message: `Tersimpan lokal saja (Supabase belum dikonfigurasi). ${rows.length} siswa.` };
  }
  try {
    const { data, error } = await supabase.rpc('set_siswa', {
      pin: getRekapPin(),
      p_subject: subject || 'all',
      p_rows: rows,
    });
    if (error) throw new Error(error.message);
    // RPC mengembalikan jumlah baris yang TERSIMPAN, yang bisa lebih kecil dari
    // jumlah dikirim kalau ada baris tidak valid lolos filter sisi klien.
    // `??` bukan `||` supaya angka 0 tidak diam-diam diartikan "semua tersimpan".
    const n = typeof data === 'number' ? data : rows.length;
    const base = `${n} siswa terkirim ke server. Siswa cukup ketik NIS saat ujian.`;
    return {
      ok: true,
      message: n < rows.length
        ? `${base} ${rows.length - n} baris tidak valid dilewati (NIS harus 4-12 angka).`
        : base,
      synced: n,
    };
  } catch (e) {
    return {
      ok: false,
      message: `Gagal kirim ke server: ${e?.message || 'tidak diketahui'}. Daftar tetap tersimpan di perangkat ini.`,
    };
  }
}

/** Hapus roster mapel ini di server (PIN divalidasi di fungsi SQL). */
export async function clearSiswaServer(subject) {
  if (!isSupabaseConfigured) return { ok: false, message: 'Supabase belum dikonfigurasi.' };
  try {
    const { error } = await supabase.rpc('clear_siswa', {
      pin: getRekapPin(),
      p_subject: subject || 'all',
    });
    if (error) throw new Error(error.message);
    return { ok: true, message: 'Daftar siswa di server sudah dihapus.' };
  } catch (e) {
    return { ok: false, message: `Gagal hapus di server: ${e?.message || 'tidak diketahui'}` };
  }
}

/** Token lama (semua mapel). Dipertahankan hanya sebagai fallback untuk MPK 1
 *  agar VITE_EXAM_TOKEN yang sudah terlanjur terpasang di Vercel tetap berlaku.
 *  @deprecated Pakai {@link loadExamToken} — token sudah per mapel dan punya masa berlaku. */
export function getExamToken() {
  const fromEnv = import.meta.env.VITE_EXAM_TOKEN;
  return (fromEnv && String(fromEnv).trim()) || 'TKJ235';
}

// ============ TOKEN UJIAN PER MAPEL + MASA BERLAKU ============

/**
 * Definisi token per mata pelajaran.
 *
 * `prefix` WAJIB tidak tumpang tindih dan harus cocok dengan kunci storage,
 * karena dipakai untuk memetakan modul -> mapel. Perhatikan 'kka_xi_':
 * prefix 'kka' akan membuat 'kka_xi_modul1_ujian' ikut terdeteksi sebagai KKA.
 * Maka prefix KKA reguler memakai 'kka_elemen' (tepat di titik pembeda) —
 * sama seperti SUBJECT_LEGACY_PREFIX di atas.
 *
 * `envToken` / `envExpires` adalah jalur cadangan ketika Supabase kosong/down,
 * jadi sistem tetap jalan walau blok SQL belum pernah dijalankan.
 */
export const EXAM_SUBJECTS = [
  {
    key: 'mpk1',
    label: 'MPK 1',
    fullLabel: 'MPK 1 — Perencanaan & Pengalamatan Jaringan',
    prefix: 'mpk1_',
    envToken: 'VITE_EXAM_TOKEN_MPK1',
    envExpires: 'VITE_EXAM_TOKEN_MPK1_EXPIRES',
    legacyEnvToken: 'VITE_EXAM_TOKEN',
    defaultToken: 'TKJ235',
  },
  {
    key: 'kka',
    label: 'KKA',
    fullLabel: 'KKA — Koding & Kecerdasan Artifisial',
    prefix: 'kka_elemen',
    envToken: 'VITE_EXAM_TOKEN_KKA',
    envExpires: 'VITE_EXAM_TOKEN_KKA_EXPIRES',
    legacyEnvToken: '',
    defaultToken: 'KKA235',
  },
  {
    key: 'kka_xi',
    label: 'KKA XI',
    fullLabel: 'KKA XI — Koding & Kecerdasan Artifisial XI',
    prefix: 'kka_xi_',
    envToken: 'VITE_EXAM_TOKEN_KKA_XI',
    envExpires: 'VITE_EXAM_TOKEN_KKA_XI_EXPIRES',
    legacyEnvToken: '',
    defaultToken: 'KXI235',
  },
  {
    key: 'dkk',
    label: 'DKK',
    fullLabel: 'DKK — Dasar Kompetensi Keahlian',
    prefix: 'dkk_uts',
    envToken: 'VITE_EXAM_TOKEN_DKK',
    envExpires: 'VITE_EXAM_TOKEN_DKK_EXPIRES',
    legacyEnvToken: '',
    defaultToken: 'DKK235',
  },
];

export function getSubjectMeta(subject) {
  return EXAM_SUBJECTS.find((s) => s.key === subject) || null;
}

/** Petakan kunci storage modul ke mapelnya. `null` kalau bukan ujian bertoken. */
export function subjectFromStorageKey(storageKey) {
  const k = String(storageKey || '');
  return EXAM_SUBJECTS.find((s) => k.startsWith(s.prefix))?.key || null;
}

/** `expires_at` null/kosong = tidak kedaluwarsa. String yang tidak bisa diparse
 *  dianggap TIDAK kedaluwarsa (lebih aman daripada mengunci semua siswa). */
export function isTokenExpired(expiresAt, now = Date.now()) {
  if (expiresAt == null || expiresAt === '') return false;
  const t = expiresAt instanceof Date ? expiresAt.getTime() : Date.parse(String(expiresAt));
  return Number.isFinite(t) && t <= now;
}

function envValue(name) {
  if (!name) return '';
  const v = import.meta.env[name];
  return v && String(v).trim() ? String(v).trim() : '';
}

/** Nilai cadangan tanpa server: env var per mapel -> env var lama -> default. */
function tokenFallback(subject) {
  const meta = getSubjectMeta(subject) || EXAM_SUBJECTS[0];
  const token = envValue(meta.envToken)
    || envValue(meta.legacyEnvToken)
    || meta.defaultToken;
  const source = envValue(meta.envToken) || envValue(meta.legacyEnvToken) ? 'env' : 'default';
  return {
    subject: meta.key,
    token,
    expiresAt: envValue(meta.envExpires) || null,
    source,
    error: null,
  };
}

/**
 * Ambil token + masa berlaku satu mapel. Urutan: tabel `exam_tokens` di server
 * -> env var -> hardcoded default. Tidak pernah melempar error, sehingga
 * kegagalan Supabase tidak bisa membuat halaman ujian blank.
 * @returns {Promise<{subject:string, token:string, expiresAt:string|null, source:'server'|'env'|'default', error:string|null}>}
 */
export async function loadExamToken(subject) {
  const fallback = tokenFallback(subject);
  if (!supabase) return fallback;

  try {
    const { data, error } = await supabase
      .from('exam_tokens')
      .select('subject, token, expires_at')
      .eq('subject', fallback.subject)
      .maybeSingle();

    if (error) return fallback; // termasuk 42P01 saat tabel belum dibuat
    if (data?.token) {
      return {
        subject: fallback.subject,
        token: String(data.token).trim(),
        expiresAt: data.expires_at || null,
        source: 'server',
        error: null,
      };
    }
    return fallback; // baris belum di-set -> pakai env/default
  } catch (e) {
    return { ...fallback, error: e?.message || 'Gagal memuat token dari server.' };
  }
}

function rpcErrorHint(error) {
  const msg = error?.message || '';
  if (/PIN salah|42501|permission denied/i.test(msg)) return 'PIN salah.';
  if (/PGRST202|42883|does not exist|not found/i.test(msg)) {
    return 'Fungsi ini belum ada di database. Jalankan blok exam_tokens di Supabase > SQL Editor.';
  }
  return msg || 'Gagal menyimpan ke server.';
}

/** Guru menyimpan/rotasi token + tanggal berlaku dari halaman Rekap Nilai. */
export async function saveExamToken(pin, subject, token, expiresAt) {
  if (!supabase) return { ok: false, error: 'Supabase belum dikonfigurasi — token hanya bisa diubah lewat SQL Editor.' };
  if (!getSubjectMeta(subject)) return { ok: false, error: 'Mata pelajaran tidak dikenal.' };

  const { error } = await supabase.rpc('set_exam_token', {
    pin: String(pin || ''),
    p_subject: subject,
    p_token: String(token || ''),
    p_expires_at: expiresAt || null,
  });
  if (error) return { ok: false, error: rpcErrorHint(error) };
  return { ok: true };
}

/** Hapus override server -> mapel ini kembali ke env var / default. */
export async function resetExamToken(pin, subject) {
  if (!supabase) return { ok: false, error: 'Supabase belum dikonfigurasi.' };
  if (!getSubjectMeta(subject)) return { ok: false, error: 'Mata pelajaran tidak dikenal.' };

  const { error } = await supabase.rpc('clear_exam_token', {
    pin: String(pin || ''),
    p_subject: subject,
  });
  if (error) return { ok: false, error: rpcErrorHint(error) };
  return { ok: true };
}

/** Format tanggal Indonesia yang enak dibaca guru, mis. "30 Sep 2026, 23.59". */
export function formatTokenExpiry(expiresAt) {
  if (!expiresAt) return 'Tanpa batas waktu';
  const d = expiresAt instanceof Date ? expiresAt : new Date(expiresAt);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleString('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  });
}

/** Ubah ISO string jadi nilai `datetime-local` (dipakai <input type="datetime-local">). */
export function toLocalInputValue(expiresAt) {
  if (!expiresAt) return '';
  const d = expiresAt instanceof Date ? expiresAt : new Date(expiresAt);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}