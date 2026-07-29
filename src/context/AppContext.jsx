import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

// oxlint-disable-next-line react/only-export-components
export const useApp = () => useContext(AppContext);

function getToday() { return new Date().toISOString().split('T')[0]; }

export function AppProvider({ children }) {
  const [scores, setScores] = useState(() => {
    const s = localStorage.getItem('jarkomlab_scores');
    return s ? JSON.parse(s) : {};
  });
  const [pretestAnswers, setPretestAnswers] = useState(() => {
    const s = localStorage.getItem('jarkomlab_pretest');
    return s ? JSON.parse(s) : {};
  });
  const [posttestAnswers, setPosttestAnswers] = useState(() => {
    const s = localStorage.getItem('jarkomlab_posttest');
    return s ? JSON.parse(s) : {};
  });
  const [modulesRead, setModulesRead] = useState(() => {
    const s = localStorage.getItem('jarkomlab_modulesRead');
    return s ? JSON.parse(s) : {};
  });
  const [caseAnswers, setCaseAnswers] = useState(() => {
    const s = localStorage.getItem('jarkomlab_cases');
    return s ? JSON.parse(s) : {};
  });
  const [darkMode, setDarkMode] = useState(() => {
    const s = localStorage.getItem('jarkomlab_dark');
    return s ? JSON.parse(s) : false;
  });
  const [streak, setStreak] = useState(() => {
    const s = localStorage.getItem('jarkomlab_streak');
    return s ? JSON.parse(s) : { count: 0, lastDate: null };
  });
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem('jarkomlab_name') || '';
  });

  // Persist
  useEffect(() => { localStorage.setItem('jarkomlab_scores', JSON.stringify(scores)); }, [scores]);
  useEffect(() => { localStorage.setItem('jarkomlab_pretest', JSON.stringify(pretestAnswers)); }, [pretestAnswers]);
  useEffect(() => { localStorage.setItem('jarkomlab_posttest', JSON.stringify(posttestAnswers)); }, [posttestAnswers]);
  useEffect(() => { localStorage.setItem('jarkomlab_modulesRead', JSON.stringify(modulesRead)); }, [modulesRead]);
  useEffect(() => { localStorage.setItem('jarkomlab_cases', JSON.stringify(caseAnswers)); }, [caseAnswers]);
  useEffect(() => { localStorage.setItem('jarkomlab_dark', JSON.stringify(darkMode)); }, [darkMode]);
  useEffect(() => { localStorage.setItem('jarkomlab_streak', JSON.stringify(streak)); }, [streak]);
  useEffect(() => { localStorage.setItem('jarkomlab_name', studentName); }, [studentName]);

  // Dark mode class
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Streak tracking
  useEffect(() => {
    const today = getToday();
    if (streak.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = yesterday.toISOString().split('T')[0];
      if (streak.lastDate === yStr) {
        setStreak(prev => ({ count: prev.count + 1, lastDate: today }));
      } else {
        setStreak({ count: 1, lastDate: today });
      }
    }
  }, [streak.lastDate]);

  const markModuleRead = (moduleId) => setModulesRead(prev => ({ ...prev, [moduleId]: true }));
  const saveQuizScore = (quizKey, score) => setScores(prev => ({ ...prev, [quizKey]: score }));
  const saveQuizAnswers = (quizKey, answers) => {
    if (quizKey === 'pretest') setPretestAnswers(answers);
    else setPosttestAnswers(answers);
  };
  const saveCaseAnswer = (caseId, text) => setCaseAnswers(prev => ({ ...prev, [caseId]: text }));
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const saveStudentName = (name) => setStudentName(name);

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const resetAll = () => {
    localStorage.clear();
    setScores({}); setPretestAnswers({}); setPosttestAnswers({});
    setModulesRead({}); setCaseAnswers({});
    setStreak({ count: 0, lastDate: null }); setStudentName('');
  };

  return (
    <AppContext.Provider value={{
      scores, pretestAnswers, posttestAnswers, modulesRead, caseAnswers,
      darkMode, streak, studentName,
      markModuleRead, saveQuizScore, saveQuizAnswers, saveCaseAnswer,
      toggleDarkMode, saveStudentName, totalScore, resetAll
    }}>
      {children}
    </AppContext.Provider>
  );
}


