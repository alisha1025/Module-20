import React, { useState } from 'react';

const Navigation = ({ setActiveSection }) => {
  const [activeNav, setActiveNav] = useState('about'); // Default section

  const handleNavClick = (section) => {
    setActiveNav(section);
    setActiveSection(section);
  };

  return (
    <nav>
      <ul>
        <li className={activeNav === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About Me</li>
        <li className={activeNav === 'portfolio' ? 'active' : ''} onClick={() => handleNavClick('portfolio')}>Portfolio</li>
        <li className={activeNav === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</li>
        <li className={activeNav === 'resume' ? 'active' : ''} onClick={() => handleNavClick('resume')}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
