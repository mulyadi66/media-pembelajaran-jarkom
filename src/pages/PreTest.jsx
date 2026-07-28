import { useApp } from '../context/AppContext';
import Quiz from '../components/Quiz';
import { pretestQuestions } from '../data/pretestQuestions';
import { ClipboardCheck } from 'lucide-react';

export default function PreTest() {
  const { saveQuizScore } = useApp();

  return (
    <div className="content-section">
      <Quiz
        questions={pretestQuestions}
        storageKey="pretestAnswers"
        timeLimit={15}
        onScoreSubmit={(score) => saveQuizScore('pretest', score)}
      />
    </div>
  );
}
