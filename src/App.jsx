import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import Portal from './pages/Portal';
import Dashboard from './pages/Dashboard';
import DashboardDKK from './pages/dkk/DashboardDKK';
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

// DKK pages
const Elemen1 = lazy(() => import('./pages/dkk/Elemen1'));
const Elemen2 = lazy(() => import('./pages/dkk/Elemen2'));
const Elemen3 = lazy(() => import('./pages/dkk/Elemen3'));
const Elemen4 = lazy(() => import('./pages/dkk/Elemen4'));
const FlashcardPageDKK = lazy(() => import('./pages/dkk/FlashcardPageDKK'));
const GlossaryPageDKK = lazy(() => import('./pages/dkk/GlossaryPageDKK'));
const WorksheetPageDKK = lazy(() => import('./pages/dkk/WorksheetPageDKK'));
const PreTestDKK = lazy(() => import('./pages/dkk/PreTestDKK'));
const PostTestDKK = lazy(() => import('./pages/dkk/PostTestDKK'));
const ChallengePageDKK = lazy(() => import('./pages/dkk/ChallengePageDKK'));
const KasusDKK = lazy(() => import('./pages/dkk/KasusDKK'));
const HasilDKK = lazy(() => import('./pages/dkk/HasilDKK'));

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
                <Route path="/dkk" element={<DashboardDKK />} />
                <Route path="/dkk/elemen1" element={<Elemen1 />} />
                <Route path="/dkk/elemen2" element={<Elemen2 />} />
                <Route path="/dkk/elemen3" element={<Elemen3 />} />
                <Route path="/dkk/elemen4" element={<Elemen4 />} />
                <Route path="/dkk/flashcard" element={<FlashcardPageDKK />} />
                <Route path="/dkk/glossary" element={<GlossaryPageDKK />} />
                <Route path="/dkk/worksheet" element={<WorksheetPageDKK />} />
                <Route path="/dkk/pretest" element={<PreTestDKK />} />
                <Route path="/dkk/posttest" element={<PostTestDKK />} />
                <Route path="/dkk/challenge" element={<ChallengePageDKK />} />
                <Route path="/dkk/kasus" element={<KasusDKK />} />
                <Route path="/dkk/hasil" element={<HasilDKK />} />
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
