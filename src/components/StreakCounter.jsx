import { Flame } from 'lucide-react';

export default function StreakCounter({ streak = 0 }) {
  return (
    <div className="streak-counter">
      <Flame size={20} className={streak > 0 ? 'streak-fire' : ''} aria-hidden="true" />
      <div>
        <div className="streak-number">{streak}</div>
        <div className="streak-label">Hari Berturut</div>
      </div>
    </div>
  );
}
