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
function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find(project => project.id === id);
  if (!project) {
    return <p>Project not found</p>;
  }
  
  return (
    <main className="project-details-container">
      <Hero PageTitle={project.name} />

      <div className="project-details-info">
        <div className="projectDetails-info-wrapper">
          <div className="project-description-wrapper">
            <h1 className="project-responsibility">Responsibilities</h1>
            <p className="project-description-text">{project.description}</p>
          </div>
          <div className="project-data-wrapper">
            <span>
              <Icon
                id="area-icon"
                width={80}
                height={80}
                className="projectData-icon"
              />
              <p className="projectData-text">{project.area} m² area</p>
            </span>
            <span>
              <Icon
                id="calendar"
                width={80}
                height={80}
                className="projectData-icon"
              />
              <p className="projectData-text">
                {project.days} days, implementation time
              </p>
            </span>
          </div>
        </div>
        <div className="project-details-gallery">
          <h1 className="projectDetails-gallery-title">Gallery</h1>
        <Swiper
        zoom={true}
        autoHeight={true}
        navigation={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="projectDetails-swiper"
       >
          {project.gallery.map((photo, index) => (
            <SwiperSlide key={index} >
            <img
              className='project-details-gallery-item'
              key={index}
              src={photo}
              alt={`${project.name} - ${index + 1}`}
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
