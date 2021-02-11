import React, { useState, useEffect } from 'react';
import Contacts from './components/contacts';
import Messages from './components/messages';

import './App.css';
function App(){
  const[newMessage, setNewMessage] = useState(false);
  const [contactMessages, setContactMessages] = useState("Leanne Graham")
  const [contacts, setContacts]= useState([ 
  
    {name: "Leanne Graham", messages: [], staus: false, sender: "", summary:""},
  {name: "Ervin Howell", messages: [],staus: false, sender: "", summary:""},
  {name: "Clementine Bauch", messages: [],staus: false, sender: "", summary:""},
  {name: "Patricia Lebsack", messages: [],staus :false, sender: "", summary:""},
  {name: "Chelsey Dietrich", messages: [],staus:false, sender: "", summary:""},
  {name: "Mrs. Dennis Schulist", messages: [],staus:false, sender: "", summary:""},
  {name: "Kurtis Weissnat", messages: [], staus:false,sender: "", summary:""},
  {name: "Nicholas Runolfsdottir V", messages: [],staus:false, sender: "", summary:""},
  {name: "Glenna Reichert", messages: [], staus:false, sender: "", summary:""},
  {name: "Clementina DuBuque", messages: [], staus:false, sender: "", summary:""}
])
useEffect(()=>{
  setTimeout( () =>
setContacts(contacts.map(contact=>{
  if(contact.name === contactMessages){
    return {  
    ...contact, messages: [...contact.messages,[contact.summary,"other"]],
}
}      
         return contact;
        }))
            ,1000)
},[newMessage])



return (
  <div className="app"> 
    <div className= "contactDiv">
      {contacts.map(contact=>(
      <Contacts key={contacts.name} summary= {contact.summary} name={contact.name} setContactMessages={setContactMessages}/>
      ))}
    </div>
    <div className="messagesDiv">
    <Messages newMessage={newMessage} setNewMessage= {setNewMessage}contacts={contacts} setContacts={setContacts} contactMessages={contactMessages} />
    </div>
  </div>
);
}

export default App;
