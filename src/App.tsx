import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import TookanPage from '@/pages/TookanPage';
import ProspeakAIPage from '@/pages/ProspeakAIPage';
import EspadonPage from '@/pages/EspadonPage';
import MantaPage from '@/pages/MantaPage';
import StayfluencePage from '@/pages/StayfluencePage';
import BeebuilderPage from '@/pages/BeebuilderPage';
import PiknicPage from '@/pages/PiknicPage';
import { LanguageProvider } from '@/context/LanguageContext';
import LanguageSwitch from '@/components/LanguageSwitch';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <LanguageSwitch />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tookan" element={<TookanPage />} />
          <Route path="/web-apps/tookan" element={<TookanPage />} />
          <Route path="/prospeak-ai" element={<ProspeakAIPage />} />
          <Route path="/espadon" element={<EspadonPage />} />
          <Route path="/manta" element={<MantaPage />} />
          <Route path="/stayfluence" element={<StayfluencePage />} />
          <Route path="/beebuilder" element={<BeebuilderPage />} />
          <Route path="/piknic" element={<PiknicPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
