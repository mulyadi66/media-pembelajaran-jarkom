import { useApp } from '../../context/AppContext';
import Quiz from '../../components/Quiz';
import { posttestDKK } from '../../data/dkk/posttestDKK';

export default function PostTestDKK() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={posttestDKK}
        storageKey="dkk_posttestAnswers"
        timeLimit={25}
        onScoreSubmit={(score) => saveQuizScore('dkk_posttest', score)}
      />
    </div>
  );
}
