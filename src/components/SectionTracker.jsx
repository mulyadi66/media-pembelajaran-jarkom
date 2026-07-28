import { useState, useEffect } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const STORAGE_KEY = 'jarkomlab_sectionProgress';

function loadProgress() {
  const s = localStorage.getItem(STORAGE_KEY);
  return s ? JSON.parse(s) : {};
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function SectionTracker({ moduleId, sections }) {
  const [progress, setProgress] = useState(() => loadProgress());

  const moduleProgress = progress[moduleId] || {};

  const toggle = (sectionId) => {
    const updated = {
      ...progress,
      [moduleId]: {
        ...moduleProgress,
        [sectionId]: !moduleProgress[sectionId],
      },
    };
    setProgress(updated);
    saveProgress(updated);
  };

  const completedCount = sections.filter(s => moduleProgress[s.id]).length;
  const pct = Math.round((completedCount / sections.length) * 100);

  return (
    <div className="section-tracker">
      <div className="st-header">
        <span className="st-title">Progress Materi</span>
        <span className="st-count">{completedCount}/{sections.length} ({pct}%)</span>
      </div>
      <div className="progress-bar" style={{height:6, marginBottom:12}}>
        <div className="progress-fill" style={{width: pct + '%'}} />
      </div>
      <div className="st-list">
        {sections.map(s => (
          <div key={s.id} className={`st-item ${moduleProgress[s.id] ? 'done' : ''}`} onClick={() => toggle(s.id)}>
            {moduleProgress[s.id] ?
              <CheckCircle size={16} color="var(--success)" /> :
              <Circle size={16} color="var(--text-lighter)" />
            }
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
