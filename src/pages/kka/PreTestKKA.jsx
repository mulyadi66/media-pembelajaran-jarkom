import { useApp } from '../../context/AppContext';
import Quiz from '../../components/Quiz';
import { pretestKKA } from '../../data/kka/pretestKKA';

export default function PreTestKKA() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={pretestKKA}
        storageKey="kka_pretestAnswers"
        timeLimit={15}
        onScoreSubmit={(score) => saveQuizScore('kka_pretest', score)}
      />
    </div>
  );
}
