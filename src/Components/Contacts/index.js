import { useState, useEffect } from 'react';
import Loader from '../Utility/Loader';
import {fetchData, addHeader} from '../../Service/API';
import './style.scss';
import ContactCard from '../Utility/Contact-Card';
import { Link } from 'react-router-dom';

export default function Contacts() {
  const [ContactList, setContactList] = useState([]);
  const [selectedContactId, setSelectedContact] = useState(null);

  useEffect(()=> {
    fetchData('contacts').then(response => {
      setContactList(response.data);
    })
  }, []);

  const ContactSelectEvent = id => {
    setSelectedContact(id);
    addHeader({"headerName":"user_id", "headerValue": id});
  };

  const showAllContact = () => {
     return ContactList.map(contact => <ContactCard select={ContactSelectEvent} name={contact.name} id={contact.id} key={contact.id}/>)
  }

  const pickUserSection = () => {

  }

  return (
    <div className="Contacts-Page-Container">
      <div className="title">Let us know who you are</div>
      {!ContactList.length ? <Loader />: showAllContact()}    
      {!selectedContactId ? "": <Link to={`/pick-people/${selectedContactId}`} className="btn btn-primary">Sign up</Link>}
    </div>
  );
}

