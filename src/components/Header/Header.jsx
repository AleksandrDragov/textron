import './Header.less';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <NavLink to="/" className="header-logo">
        Building
      </NavLink>
      <div
        className={`BurgerIcon ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className={`burger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <nav className={`header-navigation ${menuOpen ? 'open' : ''}`}>
        <NavLink className="nav-item" to="/">
          home
        </NavLink>
        <NavLink className="nav-item" to="/services">
          services
        </NavLink>
        <NavLink className="nav-item" to="/projects">
          projects
        </NavLink>
        <NavLink className="nav-item" to="/contacts">
          contacts
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
