import Icon from 'utils/Icon';
import React from 'react';
import './Loader.less'
export default function Loader() {
  return (
    <div className="loading-container">
      <Icon
        id="textron-logo"
        width={120}
        height={100}
        className="loading-logo-icon"
      />
      <p className="loader-text">Loading...</p>
    </div>
  );
}
