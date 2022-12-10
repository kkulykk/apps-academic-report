import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import './App.css';
import MainPage from './pages/MainPage';
import StrategyPage from './pages/StrategyPage/StrategyPage';
import ScrollUpBtn from './components/ScrollUpBtn/ScrollUpBtn';
import IntroCampaignResPage from './pages/IntroCampaignResPage/IntroCampaignResPage';
import StructureChangesPage from './pages/StructureChangesPage/StructureChangesPage';
import StudentsWinsPage from './pages/StudentWinsPage/StudentsWinsPage';
import ProfessorsWinsPage from './pages/ProfessorsWinsPage/ProfessorsWinsPage';
import SocialProjectsPage from './pages/SocialProjectsPage';
import CertificateProgramsPage from './pages/CertificateProgramsPage/CertificateProgramsPage';
import SciencePage from './pages/SciencePage/SciencePage';
import RatingsPage from './pages/RatingsPage/RatingsPage';
import GraduatesPage from './pages/GraduatesPage';
import WhoWeArePage from './pages/WhoWeArePage/WhoWeArePage';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/strategy-goals" element={<StrategyPage />} />
      <Route path="/introductory-campaign-results" element={<IntroCampaignResPage />} />
      <Route path="/structure-changes" element={<StructureChangesPage />} />
      <Route path="/students-wins" element={<StudentsWinsPage />} />
      <Route path="/professors-wins" element={<ProfessorsWinsPage />} />
      <Route path="/social-projects" element={<SocialProjectsPage />} />
      <Route path="/certificate-programs" element={<CertificateProgramsPage />} />
      <Route path="/science" element={<SciencePage />} />
      <Route path="/ratings" element={<RatingsPage />} />
      <Route path="/graduates" element={<GraduatesPage />} />
      <Route path="/who-we-are" element={<WhoWeArePage />} />
    </Routes>
    <ScrollUpBtn />
    <Footer />
  </div>
);

export default App;
