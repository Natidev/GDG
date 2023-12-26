import Form from "./Form";
import Notes from "./Notes";
import './App.css'
import { useState } from "react";
import React, { useReducer } from 'react';
function Maincomp() {
    const [note,setNote]=useState([])
   // const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [show,setShow]=useState(true);

      let i=true;
    let handleSubmit=(data)=>{
   
    setNote([...note,data])
 
     } 
    return (
  <div>
      {show&&<Form submit={handleSubmit}/>}
      {!show&&<Notes noteList={note}/>}
      <button onClick={()=>{
        if(show){
          setShow(false)
        }else if(!show){
          setShow(true);
        }
      }
        
          }>+</button>
  </div>
    );
  }
  export default Maincomp;