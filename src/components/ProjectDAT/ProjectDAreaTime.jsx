import React from 'react';
import Icon from 'utils/Icon';
import { useTranslation } from 'react-i18next';
import './ProjectDAreaTime.less';

function ProjectDAreaTime({ area, days }) {
  const { t } = useTranslation();
  return (
    <div className="project-data-wrapper">
      <span>
        <Icon
          id="area-icon"
          width={80}
          height={80}
          className="projectData-icon"
        />
        <p className="projectData-text">{area} m² {t('project.area')}</p>
      </span>
      <span>
        <Icon
          id="calendar"
          width={80}
          height={80}
          className="projectData-icon"
        />
        <p className="projectData-text">
          {days} {t('project.days')}
        </p>
      </span>
    </div>
  );
}

export default ProjectDAreaTime;
