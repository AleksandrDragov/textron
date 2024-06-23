import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { partners } from '../../data/partnersData';
import './Partners.less';
import { useTranslation } from 'react-i18next';
SwiperCore.use([Autoplay]);

function Partners() {
  const {t}=useTranslation()
  return (
    <>
      <div className="partners-title-wrapper">
        <h1 className="partners-title">{t('partners.title')}</h1>
      </div>
      <div className="partners-container">
        <Swiper
          className="partners-contacts-swiper"
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {partners.map((item, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <span className="partners-gapping">{item}</span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Partners;
