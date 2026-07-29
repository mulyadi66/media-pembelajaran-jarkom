import { useApp } from '../../context/AppContext';
import Quiz from '../../components/Quiz';
import { pretestDKK } from '../../data/dkk/pretestDKK';

export default function PreTestDKK() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={pretestDKK}
        storageKey="dkk_pretestAnswers"
        timeLimit={15}
        onScoreSubmit={(score) => saveQuizScore('dkk_pretest', score)}
      />
    </div>
  );
}
