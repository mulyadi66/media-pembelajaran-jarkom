import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Modul1 from './pages/Modul1';
import Modul2 from './pages/Modul2';
import Modul3 from './pages/Modul3';
import DragDropSubnet from './pages/DragDropSubnet';
import FlashcardPage from './pages/FlashcardPage';
import GlossaryPage from './pages/GlossaryPage';
import DeviceSimulator from './pages/DeviceSimulator';
import ChallengePage from './pages/ChallengePage';
import WorksheetPage from './pages/WorksheetPage';
import ModulAjarPage from './pages/ModulAjarPage';
import Kasus from './pages/Kasus';
import PreTest from './pages/PreTest';
import PostTest from './pages/PostTest';
import Hasil from './pages/Hasil';
import './App.css';

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/modul1" element={<Modul1 />} />
              <Route path="/modul2" element={<Modul2 />} />
              <Route path="/modul3" element={<Modul3 />} />
              <Route path="/flashcard" element={<FlashcardPage />} />
              <Route path="/simulator" element={<DeviceSimulator />} />
              <Route path="/dragdrop" element={<DragDropSubnet />} />
              <Route path="/challenge" element={<ChallengePage />} />
              <Route path="/kasus" element={<Kasus />} />
              <Route path="/pretest" element={<PreTest />} />
              <Route path="/posttest" element={<PostTest />} />
              <Route path="/worksheet" element={<WorksheetPage />} />
              <Route path="/modul-ajar" element={<ModulAjarPage />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="/hasil" element={<Hasil />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </ErrorBoundary>
  );
}
