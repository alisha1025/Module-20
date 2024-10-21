import React from 'react';
import Navigation from './Navigation';

const Header = ({ setActiveSection }) => {
  return (
    <header>
      <h1>Your Name</h1>
      <Navigation setActiveSection={setActiveSection} />
    </header>
  );
};

export default Header;
