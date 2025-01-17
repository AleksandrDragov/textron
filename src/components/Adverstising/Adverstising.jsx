import React from 'react';
import './Adverstising.less';
import { useTranslation } from 'react-i18next';
function Adverstising() {
 const {t}= useTranslation()
  return (
    <>
        <div className="adverstising-container">
          <h1 className='adverstising-title'>{t('adverstising.title')}</h1>
          <p className='adverstising-text'>{t('adverstising.text')}</p>
          <ul className='adverstising-list'>
            <li className="adverstising-item">{t('adverstising.item_1')}</li>
            <li className="adverstising-item">{t('adverstising.item_2')}</li>
            <li className="adverstising-item">{t('adverstising.item_3')}</li>
            <li className="adverstising-item">{t('adverstising.item_4')}</li>
            <li className="adverstising-item">{t('adverstising.item_5')}</li>
          </ul>
        </div>
    </>
  );
}

export default Adverstising;