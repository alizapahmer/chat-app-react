import React, {useState} from 'react';
import { render } from 'react-dom';
import Texts from './texts';
const Messages = ({newMessage, setNewMessage, setContacts, contacts,contactMessages})=>{
    const sendDate=()=>{
           // e.preventDefault();
            const latest= new Date().toLocaleTimeString()
            setContacts(contacts.map(contact=>{
                    //if the item i clicked on is the same as the one im looping through
                    if(contact.name === contactMessages){
                        setNewMessage(!newMessage)
                        return {
                        ...contact, messages: [...contact.messages,[latest,"user"]], summary: latest,
                    }
                    
                }

                return contact;
                
                })
                )
          }
    
          
    return (
        <div className="messages">
           <div className= "contactName">{contactMessages}</div>
           <ul className="text">
          {contacts.map(contact=>(
              contact.name === contactMessages ? 
               <Texts key={contact.name} messages={contact.messages} /> : ""
          ))}
          </ul>
            <input type="button" value="Send" className="submitButton" onClick={sendDate} />
        </div>
)
}

export default Messages;