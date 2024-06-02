import './Services.less';
import Hero from 'components/Hero/Hero';
import React from 'react';
import serviceImage from '../../images/services-image-1.png';
function Services() {
  return (
    <>
      <div className="services-container">
        <Hero PageTitle="Services" />
        <div className="services-card-wrapper">
          <img
            className="service-card-img"
            src={serviceImage}
            alt="Reconstruction "
          />
          <p className="service-card-text">
            Reconstruction of apartment buildings
          </p>
        </div>
        <div className="services-card-wrapper">
          <img
            className="service-card-img"
            src={serviceImage}
            alt="Reconstruction "
          />
          <p className="service-card-text">
            Reconstruction of apartment buildings
          </p>
        </div>
        <div className="services-card-wrapper">
          <img
            className="service-card-img"
            src={serviceImage}
            alt="Reconstruction "
          />
          <p className="service-card-text">
            Reconstruction of apartment buildings
          </p>
        </div>
        <div className="services-card-wrapper">
          <img
            className="service-card-img"
            src={serviceImage}
            alt="Reconstruction "
          />
          <p className="service-card-text">
            Reconstruction of apartment buildings
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
