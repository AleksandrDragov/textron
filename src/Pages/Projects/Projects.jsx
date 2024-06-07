import React from 'react';
import './Projects.less';
import { projectData } from './projectsData.js';
import Hero from 'components/Hero/Hero';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <main className="projects-container">
      <Hero PageTitle="Projects" />
      <div className="projects-wrapper">
        {projectData.map(
          project =>
            project.mainPhoto && (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="project-card"
              >
                <img
                  src={`${project.mainPhoto}`}
                  alt={project.name}
                  className="project-card-image"
                  
                />
                <div className="project-card-overlay">
                  <p className="project-text-overlay">{project.preTitle}</p>
                  <p className="projects-hint-text">Click to get information</p>
                </div>
              </Link>
            )
        )}
      </div>
    </main>
  );
}

export default Projects;