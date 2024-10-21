import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  const [activeSection, setActiveSection] = useState('about'); // Default to 'About Me'

  return (
    <div>
      <Header setActiveSection={setActiveSection} />
      <main>
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'portfolio' && <Portfolio />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
