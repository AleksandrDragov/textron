import React from 'react';
import './Projects.less';
import Hero from 'components/Hero/Hero';
import { useTranslation } from 'react-i18next';
import ProjectCards from 'components/ProjectCard/ProjectCard';
function Projects() {
 const {t}= useTranslation()
  return (
    <main className="projects-container">
      <Hero PageTitle={t('header.projects')}/>
      <ProjectCards />
    </main>
  );
}

export default Projects;