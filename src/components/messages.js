import React, {useState} from 'react';
import { render } from 'react-dom';
import Texts from './texts';

const Messages = ({contacts, contactMessages})=>{
    

  return (
    <div className="messages">
    
           {contacts.map(contact=>(
              contact.name === contactMessages.name ? 
              <Texts key={contact.name} messages={contact.messages} /> : ""
            ))}
          </div>
        
)
}

export default Messages;