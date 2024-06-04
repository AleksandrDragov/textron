import React from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from 'Pages/Projects/projectsData';
import Hero from 'components/Hero/Hero';
import './ProjectDetails.less';
function ProjectDetails() {
  const { id } = useParams();
  const project = projectData.find(project => project.id === id);
  console.log(project);
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-details-container">
      <Hero PageTitle={project.name} />

      <div className="project-details-info">
        <div className="project-description-wrapper">
          <h1 className="project-responsibility">Responsibilities</h1>
          <p className="project-description-text">{project.description}</p>
        </div>
        <div className="project-data-wrapper">
          <p>{project.area} m² area</p>
          <p>{project.days} days, implementation time</p>
        </div>
        <div className="project-details-gallery">
          {project.gallery.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${project.name} - ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
