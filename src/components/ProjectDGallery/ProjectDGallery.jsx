import React, { useState, useEffect } from 'react';
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
  
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeOverlay();
        } else if (event.key === 'ArrowRight') {
          goToNext();
        } else if (event.key === 'ArrowLeft') {
          goToPrev();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOverlayOpen]);

  const openOverlay = (index) => {
    setCurrentImageIndex(index);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
    );
  };

  const handleOverlayClick = (event) => {
    if (event.target.className === 'overlay') {
      closeOverlay();
    }
  };

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
              onClick={() => openOverlay(index)} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isOverlayOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="overlay-content">
            <span className="overlay-close" onClick={closeOverlay}>
              &times;
            </span>
            <button className="overlay-prev" onClick={goToPrev}>
              &#10094;
            </button>
            <img
              className="overlay-image"
              src={gallery[currentImageIndex]}
              alt={`Zoomed in ${currentImageIndex + 1}`}
            />
            <button className="overlay-next" onClick={goToNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDGallery;


