import './App.css'
import { useState } from 'react';
const Form =({submit})=>{
    const [main,setMain]=useState("");
    const [sub,setSub]=useState("");
    const [content,setContent]=useState("");

    let b=[];
    return <main>
        <form action="" className="ttform" onSubmit={(e)=>{
             e.preventDefault()
             let note={
                main,
                sub,
                content
            }            
            submit(note)
            setMain("")
            setSub("")
            setContent("")
            }}>
            <h2>Take notes</h2>
            <input type="text" placeholder="Main" className='inptBox' value={main} onChange={(e)=>{
                setMain(e.target.value)
                }}/> <br />
            <input type="text" placeholder="SubTopic" value={sub} className='inptBox' onChange={(e)=>{
                setSub(e.target.value);
             
            }}/> <br />
            <textarea  cols="30" rows="10" onChange={(e)=>{
                setContent(e.target.value)
                           }}/> <br />
            <button type='submit'>save</button>
                    </form>
    </main>
}
export default Form;