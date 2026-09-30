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

/** Semua kunci ujian di aplikasi — dipakai saat membersihkan data lokal. */
export const ALL_MODUL_META = [...MODUL_META, ...KKA_META, ...KKA_XI_META];

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
};

/**
 * Prefix untuk fungsi reset versi LAMA di server (yang masih cocok dengan
 * `like prefix || '%'`). Dipilih agar tetap tidak tumpang tindih:
 * 'kka_elemen' hanya mengenai KKA reguler, bukan 'kka_xi_...'.
 */
export const SUBJECT_LEGACY_PREFIX = { mpk1: 'mpk1_', kka: 'kka_elemen', kka_xi: 'kka_xi_' };

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

// ============ ROSTER SISWA (lokal saja, untuk rekap) ============
/** Kunci roster dipisah per mapel agar daftar siswa tiap pelajaran tidak tertimpa. */
function rosterKey(subject) {
  return subject && subject !== 'mpk1' ? `${K.roster}_${subject}` : K.roster;
}

/** Daftar siswa {nis, nama, kelas} — disimpan lokal guru, tidak dikirim ke server. */
export function getRoster(subject) {
  return loadJSON(rosterKey(subject), []);
}

export function saveRoster(list, subject) {
  saveJSON(rosterKey(subject), list.filter(s => s && s.nis && s.nama));
}

export function clearRoster(subject) {
  localStorage.removeItem(rosterKey(subject));
}

/** Token yang harus dimasukkan siswa agar soal Ujian (Post Test modul) bisa dibuka. */
export function getExamToken() {
  const fromEnv = import.meta.env.VITE_EXAM_TOKEN;
  return (fromEnv && String(fromEnv).trim()) || 'TKJ235';
}