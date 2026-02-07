import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}

export default App;
