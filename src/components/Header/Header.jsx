import './Header.less';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header-container">
      <NavLink to="/" className="header-logo">
        Textron
      </NavLink>
      <div
        className={`BurgerIcon ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className={`burger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${menuOpen ? 'open' : ''}`}></div>
      </div>
      <nav
        className={`header-navigation ${menuOpen ? 'open' : ''}`}
        menuOpen={menuOpen}
      >
        <NavLink className="nav-item" to="/" onClick={closeMenu}>
          home
        </NavLink>
        <NavLink className="nav-item" to="/services" onClick={closeMenu}>
          services
        </NavLink>
        <NavLink className="nav-item" to="/projects" onClick={closeMenu}>
          projects
        </NavLink>
        <NavLink className="nav-item" to="/contacts" onClick={closeMenu}>
          contacts
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
