import React from 'react';
import { projectData } from '../../data/projectsData.js';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ProjectCard.less';

function ProjectCards() {
  const { t } = useTranslation();
  
  return (
    <div className="projects-wrapper">
      {projectData.map(
        project =>
          project.mainPhoto && (
            <Link key={project.id} to={`/project/${project.id}`} className="project-card">
              <img
                src={`${project.mainPhoto}`}
                alt={project.name}
                className="project-card-image"
              />
              <div className="project-card-overlay">
                <p className="project-text-overlay">{t(project.preTitleKey)}</p>
                <p className="projects-hint-text">{t('project.click_text')}</p>
              </div>
            </Link>
          )
      )}
    </div>
  );
}

export default ProjectCards;

