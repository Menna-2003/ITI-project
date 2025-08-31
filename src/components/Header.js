import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="images/logo.png" alt="Arrow Design Logo" />
      </div>
      <i 
        className="fa-solid fa-bars bar-icon" 
        onClick={toggleMenu}
      ></i>
      <nav className={`nav ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#portfolio">PORTFOLIO</a></li>
          <li><a href="#team">OUR TEAM</a></li>
          <li><a href="#blog">NEWS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;