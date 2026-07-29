import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
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
          </Suspense>
        </BrowserRouter>
      </AppProvider>
    </ErrorBoundary>
  );
}
