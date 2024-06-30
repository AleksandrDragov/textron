import React from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from 'data/projectsData';
import Hero from 'components/Hero/Hero';
import './ProjectDetails.less';
import { useTranslation } from 'react-i18next';
import ProjectDGallery from 'components/ProjectDGallery/ProjectDGallery';
import ProjectDResponsibility from 'components/ProjectDResponsibility/ProjectDResponsibility';
import ProjectDAreaTime from 'components/ProjectDAT/ProjectDAreaTime';
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
        <ProjectDResponsibility descriptionKey={project.descriptionKey} />
         <ProjectDAreaTime area={project.area} days={project.days}/>
        </div>
        <ProjectDGallery gallery={project.gallery} nameKey={project.nameKey} />
      </div>
    </main>
  );
}

export default ProjectDetails;
