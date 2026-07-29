import { ALL_BADGES } from '../data/badges';

export default function Badges({ earnedIds = [] }) {
  return (
    <div className="badges-grid">
      {ALL_BADGES.map(b => {
        const earned = earnedIds.includes(b.id);
        return (
          <div key={b.id} className={`badge-item ${earned ? 'earned' : 'locked'}`}>
            <div className="badge-icon" style={{ background: earned ? b.color + '20' : '#f1f5f9', color: earned ? b.color : '#cbd5e1' }}>
              <b.icon size={20} />
            </div>
            <div className="badge-info">
              <strong>{b.label}</strong>
              <span>{b.desc}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
