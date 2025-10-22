
import React from 'react';
import Galaxy from './Galaxy';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center" style={{ position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <Galaxy />
      </div>
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          Hi, I'm <span className="text-cyan-400">Saarathi</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8">
          A passionate Frontend React Engineer specializing in building beautiful, functional, and user-centric web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-cyan-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-slate-700 text-white font-semibold px-8 py-3 rounded-md hover:bg-slate-600 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
