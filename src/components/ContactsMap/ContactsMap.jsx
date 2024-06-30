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
              src="https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=Senov%C3%A1%C5%BEn%C3%A9%20n%C3%A1m.%20987/15,%20110%2000%20Nov%C3%A9%20M%C4%9Bsto+(987)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              onLoad={handleMapLoad}
            ></iframe>
          </a>
        </div>
    </div>
  )
}
