import './Header.less';
import React, { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Icon from 'utils/Icon';
import LanguagesSwiper from 'languages/LanguageSelect/LangSelect';
import { useTranslation } from 'react-i18next';
import 'languages/i18n';
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const{t} = useTranslation();

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
          {t("header.home")}
        </NavLink>
        <NavLink className="nav-item" to="/services" onClick={closeMenu}>
        {t("header.services")}
        </NavLink>
        <NavLink className="nav-item" to="/projects" onClick={closeMenu}>
        {t("header.projects")}
        </NavLink>
        <NavLink className="nav-item" to="/contacts" onClick={closeMenu}>
        {t("header.contacts")}
        </NavLink> 
          
        <LanguagesSwiper/>
      </nav>
    </header>
  );
}

export default Header;

