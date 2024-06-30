import React from 'react';

import Hero from 'components/Hero/Hero';
import AboutUs from 'components/AboutUs/AboutUs';
import Advantages from 'components/Advantages/Advantages';

import { useTranslation } from 'react-i18next';
function HomePage() {
  const{t} = useTranslation();
  return (
    <main className="home-container">
      <Hero PageTitle={t('header.home')} />
      <AboutUs />
      <Advantages />
    </main>
  );
}

export default HomePage;
