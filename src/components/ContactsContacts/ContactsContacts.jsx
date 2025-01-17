import React from 'react'
import Icon from 'utils/Icon';
import './ContactsContacts.less';
export default function ContactsContacts() {
    
  return (
    
      <div className="contacts-contacts">
        
        <span>
              <Icon
                id="phone"
                width={24}
                height={24}
                className="contacts-contacts-icon"
              />
            </span>
            <br />
          <a className="contacts-contacts-links" href="tel:+420608782526">
            <span className="contacts-contacts-text contacts-contacts-phone-text">+420 608 782 526</span>
          </a>{' '}
          <a className="contacts-contacts-links" href="tel:+420792468893">
            <span className="contacts-contacts-text">+420 792 468 893</span>
          </a>{' '}
          <br />
          <a
            className="contacts-contacts-links"
            href="mailto:textron@post.cz"
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
            <span className="contacts-contacts-text">textron@post.cz</span>
          </a>
          <br />
          <a
            className="contacts-contacts-links"
            target="_blank"
            href="https://www.google.com/maps/place/5.+kv%C4%9Btna+1007%2F3,+140+00+Praha+4-Nusle,+Czechia/@50.054241,14.439103,14z/data=!4m6!3m5!1s0x470b9536e8790f1d:0x1924201a4a438090!8m2!3d50.0542405!4d14.4391034!16s%2Fg%2F11rck59t79?hl=en&entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            <Icon
              id="location"
              width={24}
              height={24}
              className="contacts-contacts-icon"
            />
            <br />
            <span className="contacts-contacts-text">
              5 května 1007/3 140 00 Praha 4 - Nusle
            </span>
          </a>
        </div>
  )
}
