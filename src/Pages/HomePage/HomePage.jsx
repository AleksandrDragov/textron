import React from 'react';
import AboutUs from 'components/AboutUs/AboutUs';
import Hero from 'components/Hero/Hero';
import Advantages from 'components/Advantages/Advantages';
function HomePage() {
  return (
    <main className="home-container">
      <Hero PageTitle="Home" />
      <AboutUs />
      <Advantages />
    </main>
  );
}

export default HomePage;
