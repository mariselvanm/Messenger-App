import { useState, useEffect } from 'react';
import Loader from '../Utility/Loader';
import {fetchData, addHeader} from '../../Service/API';
import './style.scss';
import ContactCard from '../Utility/Contact-Card';

export default function Contacts() {
  const [ContactList, setContactList] = useState([]);

  useEffect(()=> {
    fetchData('contacts').then(response => {
      setContactList(response.data);
    })
  }, []);

  const ContactSelectEvent = id => addHeader({"headerName":"user_id", "headerValue": id});

  const showAllContact = () => {
     return ContactList.map(contact => <ContactCard select={ContactSelectEvent} name={contact.name} id={contact.id} />)
  }

  return (
    <div className="Contacts-Page-Container">
      <div className="title">Let us know who you are</div>
      {!ContactList.length ? <Loader />: showAllContact()}    
    </div>
  );
}

