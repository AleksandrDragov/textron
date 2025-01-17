import React from 'react';
import { useState } from 'react';
import './ContactsMap.less';
import Loader from 'utils/Loader/Loader';
export default function ContactsMap() {
    const [isMapLoaded, setIsMapLoaded] = useState(false);
    const handleMapLoad = () => {
        setIsMapLoaded(true);
      };
  return (
    <div>
      <div className="contacts-map">
          {!isMapLoaded && (
            <div className="loader-container">
              <Loader />
            </div>
          )}
          <a href="https://www.gps.ie/">
            <iframe
              title="contacts-iframe"
              className="contacts-iframe-map"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5%20kv%C4%9Btna%201007/3%20140%2000%20Praha%204%20-%20Nusle+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              onLoad={handleMapLoad}
            ></iframe>
          </a>
        </div>
    </div>
  )
}
