import React, {useState} from 'react';

const Texts = ({messages})=>{
    
    return (

        <div> 
        {messages.map(text=>{
               if (text){
                    return <p className={text[1]}>{text[0]}</p>;
}})}
       </div>   
)
 }
export default Texts;