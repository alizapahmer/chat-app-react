import React, {useState} from 'react';

const Texts = ({messages,contacts})=>{
    
    return (

        <div> 
        {messages.map(text=>{
            console.log(text);
               if (text){
                    return <p className={text[1]}>{text[0]}</p>;
}})}
       </div>   
)
 }
export default Texts;