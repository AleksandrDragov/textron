import React from 'react';
import './AboutUs.less';
import { useTranslation } from 'react-i18next';
function AboutUs() {
  const{t} = useTranslation();
  return (
    <div className="aboutUs-container">
      <h1 className="aboutUs-title">{t('who_we_are.title')}</h1>
      <div className="aboutUs-text-wrapper">
<div className="aboutUs-text"> 
      <p className='aboutUs-paragraph'> {t('who_we_are.text_1')}</p>  <br />
      <p className='aboutUs-paragraph'> {t('who_we_are.text_2')}</p>  <br />
      <p className='aboutUs-paragraph'> {t('who_we_are.text_3')}</p>  <br />
      <p className='aboutUs-paragraph'> {t('who_we_are.text_4')}</p>  <br />
      <p className='aboutUs-paragraph'> {t('who_we_are.text_5')}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
