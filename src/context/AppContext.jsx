import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [scores, setScores] = useState(() => {
    const saved = localStorage.getItem('jarkomlab_scores');
    return saved ? JSON.parse(saved) : {};
  });

  const [pretestAnswers, setPretestAnswers] = useState(() => {
    const saved = localStorage.getItem('jarkomlab_pretest');
    return saved ? JSON.parse(saved) : {};
  });

  const [posttestAnswers, setPosttestAnswers] = useState(() => {
    const saved = localStorage.getItem('jarkomlab_posttest');
    return saved ? JSON.parse(saved) : {};
  });

  const [modulesRead, setModulesRead] = useState(() => {
    const saved = localStorage.getItem('jarkomlab_modulesRead');
    return saved ? JSON.parse(saved) : {};
  });

  const [caseAnswers, setCaseAnswers] = useState(() => {
    const saved = localStorage.getItem('jarkomlab_cases');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => { localStorage.setItem('jarkomlab_scores', JSON.stringify(scores)); }, [scores]);
  useEffect(() => { localStorage.setItem('jarkomlab_pretest', JSON.stringify(pretestAnswers)); }, [pretestAnswers]);
  useEffect(() => { localStorage.setItem('jarkomlab_posttest', JSON.stringify(posttestAnswers)); }, [posttestAnswers]);
  useEffect(() => { localStorage.setItem('jarkomlab_modulesRead', JSON.stringify(modulesRead)); }, [modulesRead]);
  useEffect(() => { localStorage.setItem('jarkomlab_cases', JSON.stringify(caseAnswers)); }, [caseAnswers]);

  const markModuleRead = (moduleId) => {
    setModulesRead(prev => ({ ...prev, [moduleId]: true }));
  };

  const saveQuizScore = (quizKey, score) => {
    setScores(prev => ({ ...prev, [quizKey]: score }));
  };

  const saveQuizAnswers = (quizKey, answers) => {
    if (quizKey === 'pretest') setPretestAnswers(answers);
    else setPosttestAnswers(answers);
  };

  const saveCaseAnswer = (caseId, text) => {
    setCaseAnswers(prev => ({ ...prev, [caseId]: text }));
  };

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const resetAll = () => {
    localStorage.clear();
    setScores({});
    setPretestAnswers({});
    setPosttestAnswers({});
    setModulesRead({});
    setCaseAnswers({});
  };

  return (
    <AppContext.Provider value={{
      scores, pretestAnswers, posttestAnswers, modulesRead, caseAnswers,
      markModuleRead, saveQuizScore, saveQuizAnswers, saveCaseAnswer,
      totalScore, resetAll
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
