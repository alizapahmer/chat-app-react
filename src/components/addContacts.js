import React, {useState} from 'react';

const Addcontact = ({toggle, contacts, setContacts})=>{
    const [firstName, setfirstname] = useState("");
    const [lastName, setlastname] = useState("");

    const fnHandler = (e)=>{
        setfirstname(e.target.value)
      };
      const lnHandler = (e)=>{
        setlastname(e.target.value)
      };

   
    const addContactHandler = (e)=>{
        e.preventDefault();
        const first = e.target.fn.value;
        const last = e.target.ln.value;
        
        const newContact= [...contacts]
        newContact.push({name: first + " " + last, messages: [], summary: ""})
        setContacts(newContact);
        setfirstname("")
        setlastname("")

    }
    return (

        <div className={toggle ? "newContact" : "hidden " + "newContact"}> 
        CREATE NEW CONTACT
            <form onSubmit={addContactHandler}>
                <input value={firstName} onChange={fnHandler} placeholder="first Name" type="text" name="fn" required/>
                <input value={lastName} onChange={lnHandler} placeholder= "Last Name" type="text" name="ln" required />
                <button className="todo-button" type="submit">Enter</button>
            </form>  
       </div>   
)
}

export default Addcontact;