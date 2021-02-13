import React, {useState} from 'react';
import { render } from 'react-dom';
import Texts from './texts';
const Messages = ({setInputText,inputText, newMessage, setNewMessage, setContacts, contacts, contactMessages})=>{
    const sendDate=()=>{
           // e.preventDefault();
            const latest= new Date().toLocaleTimeString();
            setContacts(contacts.map(contact=>{
                    if(contact.name === contactMessages.name){
                        setNewMessage(!newMessage)
                        return {
                        ...contact, messages: [...contact.messages,[latest,"user"]], summary: latest,
                    }
                    
                }
                return contact;
                
                })
                )
          }
    
          const inputTextHandler = (e)=>{
            setInputText(e.target.value)
          }

          const submitMessageHandler = (e)=>{
            e.preventDefault();
            if (inputText){setContacts(contacts.map(contact=>{
                if(contact.name === contactMessages.name){
                    return {
                    ...contact, messages: [...contact.messages,[inputText,"user"]], summary: inputText,
                }
                
            }
            setInputText("")
            return contact;
            
            })
            )}
      } 
        

    return (
        <div className="messages">
           <div className= "contactName">{contactMessages.name}</div>
           <div className="text">
           {contacts.map(contact=>(
              contact.name === contactMessages.name ? 
               <Texts key={contact.name} messages={contact.messages} /> : ""
          ))}
          </div>
          <form>
            <input type="button" value="Send Date" className="submitButton" onClick={sendDate} />
            <input value={inputText} onChange={inputTextHandler} type="text" />
            <button onClick = {submitMessageHandler}type="submit">Enter</button>
        </form>
        </div>
        
)
}

export default Messages;