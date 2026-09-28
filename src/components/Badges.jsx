import { ALL_BADGES } from '../data/badges';

/**
 * @param {string[]} earnedIds id badge yang sudah didapat
 * @param {boolean} examMode true kalau mapel memakai ujian per elemen sebagai
 *        pengganti post-test, sehingga label/desc badge akhir disesuaikan.
 * @param {string} examName nama ujian untuk ditampilkan, mis. "Ujian KKA"
 */
export default function Badges({ earnedIds = [], examMode = false, examName = 'ujian' }) {
  return (
    <div className="badges-grid">
      {ALL_BADGES.map(b => {
        const earned = earnedIds.includes(b.id);
        const label = examMode && b.examLabel ? b.examLabel : b.label;
        const desc = examMode && b.examDesc
          ? (typeof b.examDesc === 'function' ? b.examDesc(examName) : b.examDesc)
          : b.desc;
        return (
          <div key={b.id} className={`badge-item ${earned ? 'earned' : 'locked'}`}>
            <div className="badge-icon" style={{ background: earned ? b.color + '20' : '#f1f5f9', color: earned ? b.color : '#cbd5e1' }}>
              <b.icon size={20} />
            </div>
            <div className="badge-info">
              <strong>{label}</strong>
              <span>{desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
