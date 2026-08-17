import { useApp } from '../../context/AppContext';
import Quiz from '../../components/Quiz';
import { pretestKKAXI } from '../../data/kka-xi/pretestKKAXI';

export default function PreTestKKAXI() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={pretestKKAXI}
        storageKey="kka_xi_pretestAnswers"
        timeLimit={15}
        onScoreSubmit={(score) => saveQuizScore('kka_xi_pretest', score)}
      />
    </div>
  );
}
