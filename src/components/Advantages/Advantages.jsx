import React from 'react';
import './Advantages.less';
import Icon from 'utils/Icon';
import { useTranslation } from 'react-i18next';
function Advantages() {
  const {t} = useTranslation();
  return (
    <div className="advantages-container">
      <h1 className="advantages-title">{t('why_chose_us.title')}</h1>
      <div className="advantage-element-wrapper">
        <div className="advantages-text-wrapper">
          <Icon
            id="clock"
            width={100}
            height={100}
            className="advantages-icon"
          />
          <p className="advantages-main-text">
            {t('why_chose_us.text_1')}
          </p>
          <p className="advantages-secondary-text">
          {t('why_chose_us.sub_text_1')}
          </p>
        </div>
        <div className="advantages-text-wrapper">
          <Icon
            id="document"
            width={100}
            height={100}
            className="advantages-icon"
          />{' '}
          <p className="advantages-main-text">
          {t('why_chose_us.text_2')}
          </p>
          <p className="advantages-secondary-text">
          {t('why_chose_us.sub_text_2')}
          </p>
        </div>
        <div className="advantages-text-wrapper">
          <Icon
            id="constructing"
            width={100}
            height={100}
            className="advantages-icon"
          />
          <p className="advantages-main-text">
          {t('why_chose_us.text_3')}
          </p>
          <p className="advantages-secondary-text">
          {t('why_chose_us.sub_text_3')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
