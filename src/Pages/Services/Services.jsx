import './Services.less';
import Hero from 'components/Hero/Hero';
import React from 'react';
import serviceImage from '../../images/services-image-1.png';
import { useTranslation } from 'react-i18next';
function Services() {
  const {t} = useTranslation()
  return (
    <>
      <div className="services-container">
        <Hero PageTitle={t('header.services')} />
        <div className="service-card-container">
          <div className="services-card-wrapper">
            <img
              className="service-card-img"
              src={serviceImage}
              alt="Reconstruction "
            />
            <p className="service-card-text">
             {t('services.description_1')}
            </p>
          </div>
          <div className="services-card-wrapper">
            <img
              className="service-card-img"
              src={serviceImage}
              alt="Reconstruction "
            />
            <p className="service-card-text">
            {t('services.description_2')}
            </p>
          </div>
          <div className="services-card-wrapper">
            <img
              className="service-card-img"
              src={serviceImage}
              alt="Reconstruction "
            />
            <p className="service-card-text">
            {t('services.description_3')}
            </p>
          </div>
          <div className="services-card-wrapper">
            <img
              className="service-card-img"
              src={serviceImage}
              alt="Reconstruction "
            />
            <p className="service-card-text">
            {t('services.description_4')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
