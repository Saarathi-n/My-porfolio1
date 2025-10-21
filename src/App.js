import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesConfig = {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false },
    },
    interactivity: {
      events: { onhover: { enable: true, mode: 'repulse' } },
      modes: { repulse: { distance: 200, duration: 0.4 } },
    },
  };

  return (
    <Router>
      <div className="App">
        <Particles id="particles-js" options={particlesConfig} />
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/" className="nav-button">Home</Link>
            <Link to="/about" className="nav-button">About</Link>
            <Link to="/skills" className="nav-button">Skills</Link>
            <Link to="/projects" className="nav-button">Projects</Link>
            <Link to="/contact" className="nav-button">Contact</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;