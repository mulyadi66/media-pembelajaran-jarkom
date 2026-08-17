import { useApp } from '../../context/AppContext';
import Quiz from '../../components/Quiz';
import { posttestKKAXI } from '../../data/kka-xi/posttestKKAXI';

export default function PostTestKKAXI() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={posttestKKAXI}
        storageKey="kka_xi_posttestAnswers"
        timeLimit={25}
        onScoreSubmit={(score) => saveQuizScore('kka_xi_posttest', score)}
      />
    </div>
  );
}
