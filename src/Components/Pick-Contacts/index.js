import { useState, useEffect, useDebugValue } from 'react';
import Loader from '../Utility/Loader';
import {fetchData, addHeader} from '../../Service/API';
import './style.scss';
import ContactCard from '../Utility/Contact-Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export default function PickContacts() {
  const {id} = useParams();
  const [ContactList, setContactList] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [groupMessageContactList, setGroupMessageContactList] = useState([]);
  const [conversationList, setConversationList] = useState([]);

  useEffect(()=> {
    fetchData('contacts').then(response => {
      let otherContacts = response.data.map(contact => {
        if(contact.id == id) {
          setSelectedContact(contact);
        }

        return contact;
      })
      setContactList(otherContacts);
    })
    fetchData('conversations').then(response => {
      setConversationList(response.data);
    })
  }, []);

  const ContactSelectEvent = id => {
     if(groupMessageContactList.indexOf(id) == -1) {
        groupMessageContactList.push(id);
     }

     setGroupMessageContactList([...groupMessageContactList]);
  };

  const showAllContact = () => {
     return ContactList.map(contact => <ContactCard
      select={ContactSelectEvent}
      name={contact.name}
      id={contact.id}
      key={contact.id}
      isSelected={groupMessageContactList.indexOf(contact.id) == -1 ? false: true}
    />)
  }

  const listConversation = () => {
      return conversationList.map((conversation) => {
        let lastMesssageExisist = !!conversation.last_message.length;

        return (
          <div className="Conversation-Container">
            <div className="left">
                Img
            </div>
            <div className="right">
                <span>{conversation.title}</span>
                <span>{lastMesssageExisist ? (conversation.last_message[0].id == id ? "You" : conversation.last_message[0].sender_name):""}</span>
                <span>{lastMesssageExisist ? (conversation.last_message[0].content) : ""}</span>
            </div>
          </div>
        )
    })
  }

  return (
    <div className="Contacts-Page-Container">
      {!selectedContact? <Loader />:
        <>
          <div className="title">Welcome {selectedContact.name}</div>
          {!conversationList.length ? <div className="no-conversation">You don't have any conversation</div> :
              listConversation()
          }
          <div className="title">Select contacts to message</div>
          {!ContactList.length ? <Loader />: showAllContact()}    
          {!groupMessageContactList.length ? "": <Link to="/signup" className="btn btn-primary">Continue</Link>}
        </>
      }
    </div>
  );
}

