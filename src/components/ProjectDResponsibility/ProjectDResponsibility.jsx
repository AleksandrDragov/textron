import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProjectDResponsibility.less';

function Responsibility({ descriptionKey }) {
  const { t } = useTranslation();
  return (
    <div className="project-description-wrapper">
      <h1 className="project-responsibility">{t('project.responsibilities')}</h1>
      <p className="project-description-text">{t(descriptionKey)}</p>
    </div>
  );
}

export default Responsibility;
