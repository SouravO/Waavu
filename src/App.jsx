import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import WebDesign from './pages/WebDesign';
import AppDevelopment from './pages/AppDevelopment';
import Consulting from './pages/Consulting';
import Training from './pages/Training';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Support from './pages/Support';
import TalentIdentification from './pages/TalentIdentification';
import ComprehensiveSupport from './pages/ComprehensiveSupport';
import ProfessionalTraining from './pages/ProfessionalTraining';
import MentorshipGuidance from './pages/MentorshipGuidance';

function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/consulting" element={<Consulting />} />
        <Route path="/services/training" element={<Training />} />
        <Route path="/services/talent-identification" element={<TalentIdentification />} />
        <Route path="/services/comprehensive-support" element={<ComprehensiveSupport />} />
        <Route path="/services/professional-training" element={<ProfessionalTraining />} />
        <Route path="/services/mentorship-guidance" element={<MentorshipGuidance />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
