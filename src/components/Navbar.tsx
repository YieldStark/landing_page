import React, { useState } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Logo size="medium" />
        </div>
        
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#app" className="navbar-link">App</a>
          </li>
          <li className="navbar-item">
            <a href="#swap" className="navbar-link">Swap</a>
          </li>
          <li className="navbar-item">
            <a href="#docs" className="navbar-link">Docs</a>
          </li>
          <li className="navbar-item">
            <a href="#support" className="navbar-link">Support</a>
          </li>
        </ul>
        
        <div className="navbar-actions">
          <a href="#app" className="navbar-button">Launch App</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;