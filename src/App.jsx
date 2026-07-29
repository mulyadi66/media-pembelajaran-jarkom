import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Portal from './pages/Portal';
import Dashboard from './pages/Dashboard';
import './App.css';

const Modul1 = lazy(() => import('./pages/Modul1'));
const Modul2 = lazy(() => import('./pages/Modul2'));
const Modul3 = lazy(() => import('./pages/Modul3'));
const DragDropSubnet = lazy(() => import('./pages/DragDropSubnet'));
const FlashcardPage = lazy(() => import('./pages/FlashcardPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const DeviceSimulator = lazy(() => import('./pages/DeviceSimulator'));
const ChallengePage = lazy(() => import('./pages/ChallengePage'));
const WorksheetPage = lazy(() => import('./pages/WorksheetPage'));
const ModulAjarPage = lazy(() => import('./pages/ModulAjarPage'));
const Kasus = lazy(() => import('./pages/Kasus'));
const PreTest = lazy(() => import('./pages/PreTest'));
const PostTest = lazy(() => import('./pages/PostTest'));
const Hasil = lazy(() => import('./pages/Hasil'));

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <BrowserRouter>
          <Suspense fallback={
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:'60vh',color:'var(--text-lighter)'}}>
              <div style={{textAlign:'center'}}>
                <div className="skeleton-pulse" style={{width:40,height:40,borderRadius:'50%',margin:'0 auto 16px',background:'var(--border)'}} />
                <p>Memuat...</p>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Portal />} />
              <Route element={<Layout />}>
                <Route path="/mpk1" element={<Dashboard />} />
                <Route path="/mpk1/modul1" element={<Modul1 />} />
                <Route path="/mpk1/modul2" element={<Modul2 />} />
                <Route path="/mpk1/modul3" element={<Modul3 />} />
                <Route path="/mpk1/flashcard" element={<FlashcardPage />} />
                <Route path="/mpk1/simulator" element={<DeviceSimulator />} />
                <Route path="/mpk1/dragdrop" element={<DragDropSubnet />} />
                <Route path="/mpk1/challenge" element={<ChallengePage />} />
                <Route path="/mpk1/kasus" element={<Kasus />} />
                <Route path="/mpk1/pretest" element={<PreTest />} />
                <Route path="/mpk1/posttest" element={<PostTest />} />
                <Route path="/mpk1/worksheet" element={<WorksheetPage />} />
                <Route path="/mpk1/modul-ajar" element={<ModulAjarPage />} />
                <Route path="/mpk1/glossary" element={<GlossaryPage />} />
                <Route path="/mpk1/hasil" element={<Hasil />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppProvider>
    </ErrorBoundary>
  );
}
