
import React, {useState} from 'react';
import { render } from 'react-dom';
import Texts from './texts';

const Form = ({setInputText,inputText, newMessage, setNewMessage, setContacts, contacts, contactMessages})=>{
        
  const sendDate=()=>{
    const latest= new Date().toLocaleTimeString();
    setContacts(contacts.map(contact=>{
      if(contact.name === contactMessages.name){
        setNewMessage(!newMessage)
        return {
          ...contact, messages: [...contact.messages,[latest,"user"]], summary: latest,
        }
      }
      return contact;
    }))
}
    
  const inputTextHandler = (e)=>{
    setInputText(e.target.value)
      }

  const submitMessageHandler = (e)=>{
    e.preventDefault();
    if (inputText){
      setContacts(contacts.map(contact=>{
          if(contact.name === contactMessages.name){
            return {
             ...contact, messages: [...contact.messages,[inputText,"user"]], summary: inputText,
            }
          }
      setInputText("")
      return contact;
      }))
    }
  }
    return (
        <div className="buttons"> 
            <form>
                <input type="button" value="Send Date" className="submitButton" onClick={sendDate} />
                <input value={inputText} onChange={inputTextHandler} type="text" />
                <button onClick = {submitMessageHandler}type="submit">Enter</button>
            </form>
        </div>
    
)
}

        
export default Form;