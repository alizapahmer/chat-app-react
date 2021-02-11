import React, { useState, useEffect } from 'react';
import Contacts from './components/contacts';
import Messages from './components/messages';

import './App.css';
function App(){
  const[newMessage, setNewMessage] = useState(false);
  const [contactMessages, setContactMessages] = useState({name: "Leanne Graham", messages: [],  sender: "", summary:""})
  const [contacts, setContacts]= useState([ 
  
  {name: "Leanne Graham", messages: [],  summary:""},
  {name: "Ervin Howell", messages: [], summary:""},
  {name: "Clementine Bauch", messages: [], summary:""},
  {name: "Patricia Lebsack", messages: [],staus :false, summary:""},
  {name: "Chelsey Dietrich", messages: [], summary:""},
  {name: "Mrs. Dennis Schulist", messages: [], summary:""},
  {name: "Kurtis Weissnat", messages: [] , summary:""},
  {name: "Nicholas Runolfsdottir V", messages: [], summary:""},
  {name: "Glenna Reichert", messages: [],   summary:""},
  {name: "Clementina DuBuque", messages: [],   summary:""}
])
const [firstState,setFirstState]=useState(true);
useEffect(()=>{
  if (firstState==false){
    setFirstState(true)
  setTimeout( () =>
  setContacts(contacts.map(contact=>{
  if(contact.name === contactMessages.name){
    return {  
    ...contact, messages: [...contact.messages,[contact.summary,"other"]],
}
}      
         return contact;
        }))
            ,1000)
}},[newMessage])


return (
  <div className="app"> 
    <div className= "contactDiv">
      {contacts.map(contact=>(
      <Contacts key={contacts.name} summary= {contact.summary} contact={contact} name={contact.name} setContactMessages={setContactMessages}/>
      ))}
    </div>
    <div className="messagesDiv">
    <Messages newMessage={newMessage} setNewMessage= {setNewMessage} contacts={contacts} setContacts={setContacts} contactMessages={contactMessages} />
    </div>
  </div>
);
}

export default App;
