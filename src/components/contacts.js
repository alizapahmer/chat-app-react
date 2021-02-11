import React, {useState} from 'react';
import Messages from './messages';
const Contacts = ({contact, summary,  name, setContactMessages})=>{
    
    const contactMessageHandler =()=>{ 
        setContactMessages(contact) 
    }

    return (
        <div className= "contacts" onClick={contactMessageHandler}>
            <p>{name}</p>
            <p>{summary}</p>
        </div>
);

}
export default Contacts;