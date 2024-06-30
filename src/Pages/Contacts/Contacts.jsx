import './Contacts.less';

import Hero from 'components/Hero/Hero';
import ContactsContacts from 'components/ContactsContacts/ContactsContacts';
import ContactsMap from 'components/ContactsMap/ContactsMap';

import { useTranslation } from 'react-i18next';
function Contacts() {
  
 const {t}= useTranslation()
  
  return (
    <>
      <main className="contacts-container">
        <Hero PageTitle={t('header.contacts')} />
        <ContactsContacts />
        <ContactsMap/>
      </main>
    </>
  );
}

export default Contacts;
