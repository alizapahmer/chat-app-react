import React, {useState} from 'react';

const Contacts = ({contact, summary,  name, setContactMessages})=>{
    
    const contactMessageHandler =()=>{ 
        setContactMessages(contact) 
    }

    return (
        <div className= "contacts" onClick={contactMessageHandler}>
            <p className= "userName">{name}</p>
            <p className= "summary">{summary}</p>
        </div>
);

}

export default Contacts;