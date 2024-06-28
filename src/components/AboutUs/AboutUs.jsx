import React from 'react';
import './AboutUs.less';
import { useTranslation } from 'react-i18next';
function AboutUs() {
  const{t} = useTranslation();
  return (
    <div className="aboutUs-container">
      <h1 className="aboutUs-title">{t('who_we_are.title')}</h1>
      <div className="aboutUs-text-wrapper">
<p className="aboutUs-text"> {`secrets.REACT_APP_PUBLIC_KEY`}
     
       {t('who_we_are.text')}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
