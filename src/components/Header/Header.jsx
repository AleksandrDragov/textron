import './Header.less';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Icon from 'utils/Icon';
import LangSelect from 'utils/LanguagesSwiper/LangSelect';
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
        <Icon
          id="textron-logo"
          width={150}
          height={150}
          className="header-logo-icon"
        />
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
        data-menu-open={menuOpen}  
      >
        <NavLink className="nav-item" to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink className="nav-item" to="/services" onClick={closeMenu}>
          Services
        </NavLink>
        <NavLink className="nav-item" to="/projects" onClick={closeMenu}>
          Projects
        </NavLink>
        <NavLink className="nav-item" to="/contacts" onClick={closeMenu}>
          Contacts
        </NavLink> 
          
        <LangSelect/>
      </nav>
    </header>
  );
}

export default Header;

