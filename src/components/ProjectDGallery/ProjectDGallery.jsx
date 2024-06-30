import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProjectDGallery.less';

function ProjectDGallery({ gallery, nameKey }) {
  const { t } = useTranslation();
  return (
    <div className="project-details-gallery">
      <h1 className="projectDetails-gallery-title">{t('project.gallery')}</h1>
      <Swiper
        zoom={true}
        autoHeight={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Zoom, Navigation, Pagination]}
        className="projectDetails-swiper"
      >
        {gallery.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              className="project-details-gallery-item"
              src={photo}
              alt={`${t(nameKey)} - ${index + 1}`}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProjectDGallery;
