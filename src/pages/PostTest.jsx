import { useApp } from '../context/AppContext';
import Quiz from '../components/Quiz';
import { posttestQuestions } from '../data/posttestQuestions';

export default function PostTest() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={posttestQuestions}
        storageKey="posttestAnswers"
        timeLimit={25}
        onScoreSubmit={(score) => saveQuizScore('posttest', score)}
      />
    </div>
  );
}
