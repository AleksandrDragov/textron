import './Services.less';

import Hero from 'components/Hero/Hero';
import ServiceCards from 'components/ServiceCards/ServiceCards';
import React from 'react';

import { useTranslation } from 'react-i18next';

function Services() {
  const {t} = useTranslation()
  return (
    <>
      <div className="services-container">
        <Hero PageTitle={t('header.services')} />
        <ServiceCards/>
      </div>
    </>
  );
}

export default Services;
