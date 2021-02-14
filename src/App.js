import React, { useState, useEffect } from 'react';
import Contacts from './components/contacts';
import Messages from './components/messages';
import './App.css';
import Form from './components/form';
import Addcontact from './components/addContacts';

function App(){

  const [newMessage, setNewMessage] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [inputText, setInputText] = useState("");
  const [contactMessages, setContactMessages] = useState({name: "Leanne Graham", messages: [],  sender: "", summary:""})
  const [firstState,setFirstState]=useState(true);
  const [contacts, setContacts]= useState([ 
    {
      name: "Leanne Graham", 
    messages: [], 
     summary:""},
    {
      name: "Ervin Howell", 
    messages: [], 
    summary:""},
    
    {name: "Clementine Bauch",
     messages: [], 
     summary:""},
    {
      name: "Patricia Lebsack", 
      messages: [],
       summary:""},
    {
      name: "Chelsey Dietrich",
       messages: [],
        summary:""},
    {
      name: "Mrs. Dennis Schulist", 
      messages: [], 
      summary:""},
    {
      name: "Kurtis Weissnat", 
      messages: [] , 
      summary:""},
    {
      name: "Nicholas Runolfsdottir V",
       messages: [], 
       summary:""},
    {
      name: "Glenna Reichert", 
      messages: [],   
      summary:""},
    {
      name: "Clementina DuBuque", 
      messages: [],
      summary:""}
  ])

  useEffect(()=>{
    if (firstState==false){
      setTimeout( () =>
      setContacts(contacts.map(contact=>{
          if(contact.name === contactMessages.name){
            return {  
              ...contact, messages: [...contact.messages,[contact.summary,"other"]],
            }
          }      
      return contact;
    })) ,1000)
    } 
  setFirstState(false)},[newMessage])

  const toggleForm=()=>{
    setToggle(!toggle)
  }

  return (
    <div className="app"> 
      <div className={toggle ? "hidden" + "msgTitle" : "msgTitle"}>Messages
      <button onClick={toggleForm}>{toggle ? "Close" : "Create New Contact"}</button> 
      </div>
      <Addcontact toggle= {toggle} contacts={contacts} setContacts={setContacts} />
      <div className= "contactName">{contactMessages.name} </div>
      <div className= "contactDiv"> 
        {contacts.map(contact=>(
        <Contacts key={contacts.name} summary= {contact.summary} contact={contact} name={contact.name} setContactMessages={setContactMessages}/>
        ))}
      </div>
      <div className="messagesDiv">
        <Messages contacts={contacts} contactMessages={contactMessages} />
        <Form setInputText={setInputText}inputText = {inputText} newMessage={newMessage} setNewMessage= {setNewMessage} contacts={contacts} setContacts={setContacts} contactMessages={contactMessages} />
      </div>
    </div>
);
}

export default App;
