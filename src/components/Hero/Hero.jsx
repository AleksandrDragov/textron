import './Hero.less';
import React from 'react';
import PropTypes from 'prop-types';
export default function Hero({ PageTitle }) {
  return (
    <div className="hero-container">
      <div className="background-image"></div>
      <h1 className="hero-title">{PageTitle}</h1>
    </div>
  );
}

Hero.propTypes = {
  PageTitle: PropTypes.string.isRequired,
};
