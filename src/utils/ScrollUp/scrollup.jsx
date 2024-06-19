import React, { useState, useEffect } from 'react';
import './scrollup.less';
import Icon from 'utils/Icon';

function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scrollUp-container ${isVisible ? 'visible' : ''}`}>
      {isVisible && (
        <button className="mail" onClick={handleUp}><Icon id='arrow-up' width={30} height={30}/></button>
      )}
    </div>
  );
}

export default ScrollUp;

