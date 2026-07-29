import { useApp } from '../../context/AppContext';
import Quiz from '../../components/Quiz';
import { pretestMPK2 } from '../../data/mpk2/pretestMPK2';

export default function PreTestMPK2() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={pretestMPK2}
        storageKey="mpk2_pretestAnswers"
        timeLimit={15}
        onScoreSubmit={(score) => saveQuizScore('mpk2_pretest', score)}
      />
    </div>
  );
}