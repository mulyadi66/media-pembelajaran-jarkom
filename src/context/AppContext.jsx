import { createContext, useContext, useState, useEffect, useRef } from 'react';

const AppContext = createContext();

// oxlint-disable-next-line react/only-export-components
export const useApp = () => useContext(AppContext);

function safeParse(str, fallback) {
  try { return str ? JSON.parse(str) : fallback; } catch { return fallback; }
}

function getLocalDateStr(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function AppProvider({ children }) {
  const [scores, setScores] = useState(() => {
    const s = localStorage.getItem('jarkomlab_scores');
    return safeParse(s, {});
  });
  const [modulesRead, setModulesRead] = useState(() => {
    const s = localStorage.getItem('jarkomlab_modulesRead');
    return safeParse(s, {});
  });
  const [caseAnswers, setCaseAnswers] = useState(() => {
    const s = localStorage.getItem('jarkomlab_cases');
    return safeParse(s, {});
  });
  const [darkMode, setDarkMode] = useState(() => {
    const s = localStorage.getItem('jarkomlab_dark');
    return safeParse(s, false);
  });
  const [streak, setStreak] = useState(() => {
    const s = localStorage.getItem('jarkomlab_streak');
    return safeParse(s, { count: 0, lastDate: null });
  });
  const [studentName, setStudentName] = useState(() => {
    return localStorage.getItem('jarkomlab_name') || '';
  });

  // Persist
  useEffect(() => { localStorage.setItem('jarkomlab_scores', JSON.stringify(scores)); }, [scores]);
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
  const streakInitRef = useRef(false);
  useEffect(() => {
    if (streakInitRef.current) return;
    streakInitRef.current = true;
    const today = getLocalDateStr();
    if (streak.lastDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = getLocalDateStr(yesterday);
      if (streak.lastDate === yStr) {
        setStreak(prev => ({ count: (prev.count || 0) + 1, lastDate: today }));
      } else {
        setStreak({ count: 1, lastDate: today });
      }
    }
  }, [streak.lastDate]);

  const markModuleRead = (moduleId) => setModulesRead(prev => ({ ...prev, [moduleId]: true }));
  const saveQuizScore = (quizKey, score) => setScores(prev => ({ ...prev, [quizKey]: score }));
  const saveCaseAnswer = (caseId, text) => setCaseAnswers(prev => ({ ...prev, [caseId]: text }));
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const saveStudentName = (name) => setStudentName(name);

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const resetAll = () => {
    localStorage.clear();
    setScores({});
    setModulesRead({}); setCaseAnswers({});
    setStreak({ count: 0, lastDate: null }); setStudentName('');
  };

  return (
    <AppContext.Provider value={{
      scores, modulesRead, caseAnswers,
      darkMode, streak, studentName,
      markModuleRead, saveQuizScore, saveCaseAnswer,
      toggleDarkMode, saveStudentName, totalScore, resetAll
    }}>
      {children}
    </AppContext.Provider>
  );
}


