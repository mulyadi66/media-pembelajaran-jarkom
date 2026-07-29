import { Moon, Sun } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useApp();

  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode} title={darkMode ? 'Mode Terang' : 'Mode Gelap'} aria-label={darkMode ? 'Mode Terang' : 'Mode Gelap'}>
      {darkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
