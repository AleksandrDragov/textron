import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useParams } from 'react-router-dom';
import { projectData } from 'data/projectsData';
import Hero from 'components/Hero/Hero';
import './ProjectDetails.less';
import Icon from 'utils/Icon';
import { useTranslation } from 'react-i18next';

function ProjectDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const project = projectData.find(project => project.id === id);

  if (!project) {
    return <p>{t('errors.projectNotFound')}</p>;
  }

  return (
    <main className="project-details-container">
      <Hero PageTitle={t(project.nameKey)} />
      <div className="project-details-info">
        <div className="projectDetails-info-wrapper">
          <div className="project-description-wrapper">
            <h1 className="project-responsibility">{t('project.responsibilities')}</h1>
            <p className="project-description-text">{t(project.descriptionKey)}</p>
          </div>
          <div className="project-data-wrapper">
            <span>
              <Icon
                id="area-icon"
                width={80}
                height={80}
                className="projectData-icon"
              />
              <p className="projectData-text">{project.area} m² {t('project.area')}</p>
            </span>
            <span>
              <Icon
                id="calendar"
                width={80}
                height={80}
                className="projectData-icon"
              />
              <p className="projectData-text">
                {project.days} {t('project.days')}
              </p>
            </span>
          </div>
        </div>
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
            {project.gallery.map((photo, index) => (
              <SwiperSlide key={index}>
                <img
                  className="project-details-gallery-item"
                  src={photo}
                  alt={`${t(project.nameKey)} - ${index + 1}`}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
