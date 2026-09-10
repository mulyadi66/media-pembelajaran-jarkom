import { supabase, isSupabaseConfigured } from './supabase';

export { isSupabaseConfigured } from './supabase';

const K = {
  identity: 'jarkomlab_identity',
  history: 'jarkomlab_examHistory',
  submitted: 'jarkomlab_examSubmitted',
  pending: 'jarkomlab_pendingSync',
};

export const MODUL_META = [
  { key: 'mpk1_modul1_posttest', label: 'Modul 1' },
  { key: 'mpk1_modul2_posttest', label: 'Modul 2' },
  { key: 'mpk1_modul3_posttest', label: 'Modul 3' },
];

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
  saveJSON(K.identity, { nama: identity.nama.trim(), nis: identity.nis.trim() });
}

export function getIdentityError({ nama, nis }) {
  if (!nama || !nama.trim()) return 'Nama wajib diisi.';
  if (!nis || !String(nis).trim()) return 'NIS wajib diisi.';
  if (!/^\d{4,10}$/.test(String(nis).trim())) return 'NIS harus berupa angka 4–10 digit (tanpa spasi/titik).';
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
async function insertRecord(record) {
  if (!supabase) return { synced: false, rejected: false, reason: 'not-configured' };
  const { error } = await supabase
    .from('exam_results')
    .insert({ nis: record.nis, nama: record.nama, modul: record.modul, nilai: record.nilai });
  if (!error) return { synced: true };
  if (error.code === '23505' || /[Dd]uplicate/i.test(error.message || '')) {
    return { synced: false, rejected: true };
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
    .select('nis,nama,modul,nilai,created_at')
    .order('nis');
  return { data, error: error?.message };
}

function clearQuizStorage(key) {
  localStorage.removeItem(`jarkomlab_${key}`);
  localStorage.removeItem(`jarkomlab_${key}_mode`);
  localStorage.removeItem(`jarkomlab_${key}_order`);
  localStorage.removeItem(`jarkomlab_${key}_submitted`);
}

/** Hapus semua hasil ujian di perangkat ini (riwayat, kunci retake, antrian, skor). Identitas siswa tetap. */
export function clearExamLocal() {
  localStorage.removeItem(K.history);
  localStorage.removeItem(K.submitted);
  localStorage.removeItem(K.pending);
  for (const m of MODUL_META) clearQuizStorage(m.key);
  try {
    const scores = JSON.parse(localStorage.getItem('jarkomlab_scores') || '{}');
    for (const m of MODUL_META) delete scores[m.key];
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

export function getRekapPin() {
  const fromEnv = import.meta.env.VITE_REKAP_PIN;
  return (fromEnv && String(fromEnv).trim()) || '2468';
}

/** Token yang harus dimasukkan siswa agar soal Ujian (Post Test modul) bisa dibuka. */
export function getExamToken() {
  const fromEnv = import.meta.env.VITE_EXAM_TOKEN;
  return (fromEnv && String(fromEnv).trim()) || 'TKJ235';
}