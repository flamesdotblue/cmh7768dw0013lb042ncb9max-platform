import React from 'react';
import HeaderHero from './components/HeaderHero.jsx';
import AboutJourney from './components/AboutJourney.jsx';
import ProjectsProcess from './components/ProjectsProcess.jsx';
import ResumeContact from './components/ResumeContact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors duration-300">
      <HeaderHero />
      <main>
        <AboutJourney />
        <ProjectsProcess />
        <ResumeContact />
      </main>
    </div>
  );
}

export default App;
