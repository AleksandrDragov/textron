import React from 'react';
import './Footer.less';
import Icon from 'utils/Icon';
import { useTranslation } from 'react-i18next';
function Footer() {
 const {t}= useTranslation()
  return (
    <>
      <footer className="footer-container">
        <div className="footer-work">
          <h2 className="footer-work-title">{t('footer.wh_title')}</h2>
          <p className="footer-work-text">
          {t('footer.wh_text')}
          </p>
        </div>
        <div className="footer-contacts">
          <br />
          <a className="footer-contacts-links" href="tel:+420608782526">
            <span>
              <Icon
                id="phone"
                width={24}
                height={24}
                className="footer-contacts-icon"
                />
            </span>
            <span className="footer-contacts-text">+420 608 782 526</span>
          </a>
          <br />
          <a className="footer-contacts-links" href="tel:+420792468893">
            <span>
              <Icon
                id="phone"
                width={24}
                height={24}
                className="footer-contacts-icon"
                />
            </span>
            <span className="footer-contacts-text">+420 792 468 893</span>
          </a>
          <br />
          <a className="footer-contacts-links" href="mailto:textron@post.cz">
            <span>
              <Icon
                id="mail"
                width={24}
                height={24}
                className="footer-contacts-icon"
                />
            </span>
            <span className="footer-contacts-text">textron@post.cz</span>
          </a>
          <br />
          <a className="footer-contacts-links" target="_blank" href="https://www.google.com/maps/place/5.+kv%C4%9Btna+1007%2F3,+140+00+Praha+4-Nusle,+Czechia/@50.054241,14.439103,14z/data=!4m6!3m5!1s0x470b9536e8790f1d:0x1924201a4a438090!8m2!3d50.0542405!4d14.4391034!16s%2Fg%2F11rck59t79?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D">
            <Icon
              id="location"
              width={24}
              height={24}
              className="footer-contacts-icon"
              />
            <span className="footer-contacts-text">5 května 1007/3 140 00 Praha 4 - Nusle</span>
          </a>
          <br />
            <p className='ico'>IČO: 04138074</p>
            
        </div>
        <div className="footer-social">
          <a href="https://shorturl.at/C1JJj" className="footer-social-link">
            <Icon
              id="facebook"
              width={35}
              height={35}
              className="footer-social-icon facebook"
              />
          </a>
          <a href="https://shorturl.at/C1JJj" className="footer-social-link">
            <Icon
              id="instagram"
              width={35}
              height={35}
              className="footer-social-icon instagram"
              />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
