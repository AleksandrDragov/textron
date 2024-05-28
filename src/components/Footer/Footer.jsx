import React from 'react';
import './Footer.less';
import Icon from 'components/Icon/Icon';
function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-work">
        <h2 className="footer-work-title">Working hours</h2>
        <p className="footer-work-text">
          Monday to Friday: 8-18 Saturday: 8-14
        </p>
      </div>
      <div className="footer-contacts">
        <a className="footer-contacts-links" href="tel:+380671234567">
          <span>
            <Icon
              id="phone"
              width={24}
              height={24}
              className="footer-contacts-icon"
            />
          </span>
          <span className="contacts-text"></span>+420 777 777 777
        </a>{' '}
        <br />
        <a className="footer-contacts-links" href="mailto:building@gmail.com">
          <span>
            <Icon
              id="mail"
              width={24}
              height={24}
              className="footer-contacts-icon"
            />
          </span>
          <span className="contacts-text"></span>building@gmail.com
        </a>
        <br />
        <a className="footer-contacts-links" href="https://shorturl.at/C1JJj">
          <Icon
            id="location"
            width={24}
            height={24}
            className="footer-contacts-icon"
          />
          <span className="contacts-text"></span>Senovážné nám. 987/15
        </a>
      </div>
      <div className="footer-social">
        <a href="https://shorturl.at/C1JJj" className="footer-social-link">
          <Icon
            id="facebook"
            width={30}
            height={30}
            className="footer-social-icon"
          />
        </a>
        <a href="https://shorturl.at/C1JJj" className="footer-social-link">
          <Icon id="instagram" width={30} height={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
