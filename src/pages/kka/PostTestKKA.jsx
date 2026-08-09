import { useApp } from '../../context/AppContext';
import Quiz from '../../components/Quiz';
import { posttestKKA } from '../../data/kka/posttestKKA';

export default function PostTestKKA() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={posttestKKA}
        storageKey="kka_posttestAnswers"
        timeLimit={15}
        onScoreSubmit={(score) => saveQuizScore('kka_posttest', score)}
      />
    </div>
  );
}
