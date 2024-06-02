import './Contacts.less';
import React, { useState } from 'react';
import Icon from 'components/Icon/Icon';
import Hero from 'components/Hero/Hero';
import Loader from 'components/Loader/Loader';
function Contacts() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };
  return (
    <>
      <div className="contacts-container">
        <Hero PageTitle="Contacts" />
        <div className="contacts-contacts">
          <a className="contacts-contacts-links" href="tel:+380671234567">
            <span>
              <Icon
                id="phone"
                width={24}
                height={24}
                className="contacts-contacts-icon"
              />
            </span>
            <br />
            <span className="contacts-contacts-text">+420 777 777 777</span>
          </a>{' '}
          <br />
          <a
            className="contacts-contacts-links"
            href="mailto:building@gmail.com"
          >
            <span>
              <Icon
                id="mail"
                width={24}
                height={24}
                className="contacts-contacts-icon"
              />
            </span>
            <br />
            <span className="contacts-contacts-text">building@gmail.com</span>
          </a>
          <br />
          <a
            className="contacts-contacts-links"
            href="https://shorturl.at/C1JJj"
          >
            <Icon
              id="location"
              width={24}
              height={24}
              className="contacts-contacts-icon"
            />
            <br />
            <span className="contacts-contacts-text">
              Senovážné nám. 987/15
            </span>
          </a>
        </div>

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
    </>
  );
}

export default Contacts;
