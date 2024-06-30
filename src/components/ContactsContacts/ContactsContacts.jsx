import React from 'react'
import Icon from 'utils/Icon';
import './ContactsContacts.less';
export default function ContactsContacts() {
    
  return (
    
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
  )
}
