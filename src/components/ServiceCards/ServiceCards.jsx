import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ServiceCards.less';
import { serviceCardsData } from 'data/servicesData';

function ServiceCards() {
  const { t } = useTranslation();
  
 
  const [flipped, setFlipped] = useState({});

  const handleFlip = (id) => {
    setFlipped((prevFlipped) => ({
      ...prevFlipped,
      [id]: !prevFlipped[id] 
    }));
  };

  return (
    <div className="service-card-container">
      {serviceCardsData.map((card) => (
        <div
          key={card.id}
          className="services-card-wrapper"
          onClick={() => handleFlip(card.id)} 
        >
          <div className={`service-card-inner ${flipped[card.id] ? 'flipped' : ''}`}>
            <img
              className="service-card-img"
              src={card.image}
              alt={t(card.descriptionKey)}
            />
          <p className="service-card-click">{t('services.click_text')}</p>
            <div className="service-card-back">
              {t(card.flippedTextKey)}
            </div>
          </div>
          <p className="service-card-text">{t(card.descriptionKey)}</p>


        </div>
      ))}
    </div>
  );
}

export default ServiceCards;
