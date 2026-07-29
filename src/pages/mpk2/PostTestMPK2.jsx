import { useApp } from '../../context/AppContext';
import Quiz from '../../components/Quiz';
import { posttestMPK2 } from '../../data/mpk2/posttestMPK2';

export default function PostTestMPK2() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={posttestMPK2}
        storageKey="mpk2_posttestAnswers"
        timeLimit={25}
        onScoreSubmit={(score) => saveQuizScore('mpk2_posttest', score)}
      />
    </div>
  );
}