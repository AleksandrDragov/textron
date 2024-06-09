import Icon from 'utils/Icon';
import React from 'react';

export default function Loader() {
  return (
    <div className="loading-container">
      <Icon
        id="textron-logo"
        width={150}
        height={150}
        className="loading-logo-icon"
      />
      <p className="loader-text"> Loading...</p>
    </div>
  );
}
