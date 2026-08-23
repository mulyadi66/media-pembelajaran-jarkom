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
const WiringPuzzle = lazy(() => import('./pages/WiringPuzzle'));
const IPClassifier = lazy(() => import('./pages/IPClassifier'));

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

const Modul1MPK2 = lazy(() => import('./pages/mpk2/Modul1MPK2'));
const Modul2MPK2 = lazy(() => import('./pages/mpk2/Modul2MPK2'));
const Modul3MPK2 = lazy(() => import('./pages/mpk2/Modul3MPK2'));
const Modul4MPK2 = lazy(() => import('./pages/mpk2/Modul4MPK2'));
const Modul5MPK2 = lazy(() => import('./pages/mpk2/Modul5MPK2'));
const OSILayer = lazy(() => import('./pages/OSILayer'));
const DashboardMPK2 = lazy(() => import('./pages/mpk2/DashboardMPK2'));
const FlashcardPageMPK2 = lazy(() => import('./pages/mpk2/FlashcardPageMPK2'));
const GlossaryPageMPK2 = lazy(() => import('./pages/mpk2/GlossaryPageMPK2'));
const WorksheetPageMPK2 = lazy(() => import('./pages/mpk2/WorksheetPageMPK2'));
const PreTestMPK2 = lazy(() => import('./pages/mpk2/PreTestMPK2'));
const PostTestMPK2 = lazy(() => import('./pages/mpk2/PostTestMPK2'));
const ChallengePageMPK2 = lazy(() => import('./pages/mpk2/ChallengePageMPK2'));
const KasusMPK2 = lazy(() => import('./pages/mpk2/KasusMPK2'));
const HasilMPK2 = lazy(() => import('./pages/mpk2/HasilMPK2'));
const DashboardKKA = lazy(() => import('./pages/kka/DashboardKKA'));
const Elemen1KKA = lazy(() => import('./pages/kka/Elemen1'));
const Elemen2KKA = lazy(() => import('./pages/kka/Elemen2'));
const Elemen3KKA = lazy(() => import('./pages/kka/Elemen3'));
const Elemen4KKA = lazy(() => import('./pages/kka/Elemen4'));
const Elemen5KKA = lazy(() => import('./pages/kka/Elemen5'));
const FlashcardPageKKA = lazy(() => import('./pages/kka/FlashcardPageKKA'));
const ChallengePageKKA = lazy(() => import('./pages/kka/ChallengePageKKA'));
const PreTestKKA = lazy(() => import('./pages/kka/PreTestKKA'));
const PostTestKKA = lazy(() => import('./pages/kka/PostTestKKA'));
const HasilKKA = lazy(() => import('./pages/kka/HasilKKA'));
const KasusKKA = lazy(() => import('./pages/kka/KasusKKA'));
const WorksheetPageKKA = lazy(() => import('./pages/kka/WorksheetPageKKA'));
const GlossaryPageKKA = lazy(() => import('./pages/kka/GlossaryPageKKA'));
const CodeBlocksKKA = lazy(() => import('./pages/kka/CodeBlocksKKA'));
const AIorHumanKKA = lazy(() => import('./pages/kka/AIorHumanKKA'));

// KKA XI pages
const DashboardKKAXI = lazy(() => import('./pages/kka-xi/DashboardKKAXI'));
const Modul1KKAXI = lazy(() => import('./pages/kka-xi/Modul1KKAXI'));
const Modul2KKAXI = lazy(() => import('./pages/kka-xi/Modul2KKAXI'));
const Modul3KKAXI = lazy(() => import('./pages/kka-xi/Modul3KKAXI'));
const Modul4KKAXI = lazy(() => import('./pages/kka-xi/Modul4KKAXI'));
const FlashcardPageKKAXI = lazy(() => import('./pages/kka-xi/FlashcardPageKKAXI'));
const GlossaryPageKKAXI = lazy(() => import('./pages/kka-xi/GlossaryPageKKAXI'));
const ChallengePageKKAXI = lazy(() => import('./pages/kka-xi/ChallengePageKKAXI'));
const WorksheetPageKKAXI = lazy(() => import('./pages/kka-xi/WorksheetPageKKAXI'));
const PreTestKKAXI = lazy(() => import('./pages/kka-xi/PreTestKKAXI'));
const PostTestKKAXI = lazy(() => import('./pages/kka-xi/PostTestKKAXI'));
const KasusKKAXI = lazy(() => import('./pages/kka-xi/KasusKKAXI'));
const HasilKKAXI = lazy(() => import('./pages/kka-xi/HasilKKAXI'));

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
                <Route path="/kka" element={<DashboardKKA />} />
                <Route path="/kka/elemen1" element={<Elemen1KKA />} />
                <Route path="/kka/elemen2" element={<Elemen2KKA />} />
                <Route path="/kka/elemen3" element={<Elemen3KKA />} />
                <Route path="/kka/elemen4" element={<Elemen4KKA />} />
                <Route path="/kka/elemen5" element={<Elemen5KKA />} />
                <Route path="/kka/flashcard" element={<FlashcardPageKKA />} />
                <Route path="/kka/challenge" element={<ChallengePageKKA />} />
                <Route path="/kka/pretest" element={<PreTestKKA />} />
                <Route path="/kka/posttest" element={<PostTestKKA />} />
                <Route path="/kka/hasil" element={<HasilKKA />} />
                <Route path="/kka/kasus" element={<KasusKKA />} />
                <Route path="/kka/worksheet" element={<WorksheetPageKKA />} />
                <Route path="/kka/glossary" element={<GlossaryPageKKA />} />
                <Route path="/kka/codeblocks" element={<CodeBlocksKKA />} />
                <Route path="/kka/ai-human" element={<AIorHumanKKA />} />
                <Route path="/kka-xi" element={<DashboardKKAXI />} />
                <Route path="/kka-xi/modul1" element={<Modul1KKAXI />} />
                <Route path="/kka-xi/modul2" element={<Modul2KKAXI />} />
                <Route path="/kka-xi/modul3" element={<Modul3KKAXI />} />
                <Route path="/kka-xi/modul4" element={<Modul4KKAXI />} />
                <Route path="/kka-xi/flashcard" element={<FlashcardPageKKAXI />} />
                <Route path="/kka-xi/glossary" element={<GlossaryPageKKAXI />} />
                <Route path="/kka-xi/challenge" element={<ChallengePageKKAXI />} />
                <Route path="/kka-xi/worksheet" element={<WorksheetPageKKAXI />} />
                <Route path="/kka-xi/pretest" element={<PreTestKKAXI />} />
                <Route path="/kka-xi/posttest" element={<PostTestKKAXI />} />
                <Route path="/kka-xi/kasus" element={<KasusKKAXI />} />
                <Route path="/kka-xi/hasil" element={<HasilKKAXI />} />
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
                <Route path="/mpk1/wiring" element={<WiringPuzzle />} />
                <Route path="/mpk1/ipclassifier" element={<IPClassifier />} />
                <Route path="/mpk1/osi-layer" element={<OSILayer />} />
                <Route path="/mpk1/topologi-arsitektur" element={<OSILayer />} />
                <Route path="/mpk2" element={<DashboardMPK2 />} />
                <Route path="/mpk2/modul1" element={<Modul1MPK2 />} />
                <Route path="/mpk2/modul2" element={<Modul2MPK2 />} />
                <Route path="/mpk2/modul3" element={<Modul3MPK2 />} />
                <Route path="/mpk2/modul4" element={<Modul4MPK2 />} />
                <Route path="/mpk2/modul5" element={<Modul5MPK2 />} />
                <Route path="/mpk2/flashcard" element={<FlashcardPageMPK2 />} />
                <Route path="/mpk2/glossary" element={<GlossaryPageMPK2 />} />
                <Route path="/mpk2/worksheet" element={<WorksheetPageMPK2 />} />
                <Route path="/mpk2/pretest" element={<PreTestMPK2 />} />
                <Route path="/mpk2/posttest" element={<PostTestMPK2 />} />
                <Route path="/mpk2/challenge" element={<ChallengePageMPK2 />} />
                <Route path="/mpk2/kasus" element={<KasusMPK2 />} />
                <Route path="/mpk2/hasil" element={<HasilMPK2 />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AppProvider>
    </ErrorBoundary>
  );
}
