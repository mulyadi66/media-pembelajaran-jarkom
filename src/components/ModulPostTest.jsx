import { useApp } from '../context/AppContext';
import Quiz from './Quiz';
import { ClipboardCheck } from 'lucide-react';

export default function ModulPostTest({ questions, storageKey, scoreKey, title }) {
  const { saveQuizScore } = useApp();

  return (
    <div className="materi-card modul-posttest" id={scoreKey}>
      <div className="mp-test-banner">
        <ClipboardCheck size={20} />
        <div>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-light)' }}>
            Kerjakan di akhir modul untuk mengukur pemahamanmu.
          </p>
        </div>
      </div>
      <Quiz
        questions={questions}
        storageKey={storageKey}
        timeLimit={15}
        onScoreSubmit={(score) => saveQuizScore(scoreKey, score)}
      />
    </div>
  );
}