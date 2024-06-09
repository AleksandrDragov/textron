import React from 'react';
import icons from '../icons/sprite.svg'
const Icon = ({ id, width = 24, height = 24, className }) => (
  <svg className={className} width={width} height={height}>
     <use href={icons + '#' + id} />
  </svg>
);

export default Icon;
