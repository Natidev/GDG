/*import { useState } from "react";
import Todo from "./Todo";
 function Form(){
    const [data,setData]=useState("");
let todo=["Something"] 
const [list1,setList11]=useState()
function format(data){
    todo.push(data)
    console.log(todo)
    var viewer=todo.map((str)=>{
        tag=(<p>
{str}
</p>)
return ({
key:index,
dt:tag
}
)
    })
    setList11(viewer)
}
    return(

    <>
    <div>
        {list1}
    </div>
    
   <form onSubmit={(e)=>{
e.preventDefault();
format(data);
   }}>

     <input type="text" 
     value={data}
     onChange={(e)=>{
     setData(e.target.value)
}}/>
<button type="submit">+</button>

      
   </form>
   
   </>
        
    )
}
export default Form;*/
import { useState } from "react";
import React, { useReducer } from 'react';
import Todo from "./Todo";
import Done from "./Done"
function Form({}){ 
let values=[]
const [data,setData]=useState();
const [, forceUpdate] = useReducer(x => x + 1, 0);
const [elem,setElem]=useState([])
const [done,setDone]=useState([])
const [count,setCount]=useState(0)
const [num1,setNum1]=useState(0)
function sorts(){
    let num=num1;
    if(num%3===0){
    setElem(elem.sort((a,b)=>a.localeCompare(b)));
}
    else if(num%3===1){
    setElem(elem.sort((a,b)=>b.localeCompare(a)));
    }
    num++
    setNum1(num)
    forceUpdate();
    console.log(num)
}
let a=count;
    function handleSubmit(e){
e.preventDefault();
setElem([...elem,data])
a=a+1;
setCount(a);
setData("")
}  
    const handleDelete=(i)=>{
let a=[];
a=[...elem];
a.splice(i,1)
setElem([...a])
}
    const handleTaskchecked=(j,i)=>{
setDone([elem[i],...done])
handleDelete(i)
console.log(i)
console.log(elem)
    }

   return(<>
    <table>
      <tr>
        <td>
<div className='main'>  
    <h3>To do</h3>
    <button className="sortBtn"onClick={sorts}>
    <img src="src\imgs\sort.png" width="15" height="15"/>
    </button>
    <Todo task={elem} func={handleDelete} funcCheck={handleTaskchecked}/>
   <form action="" onSubmit={(e)=>{
        e.preventDefault();
        handleSubmit(e,values);
    }}>
        <input type="text" className="inptBox"value={data} onChange={(e)=>{
            e.preventDefault();
         setData(e.target.value);
        }} />
        <button type="submit" className="addBTN">+</button>
    </form>


    </div>
        </td>
        <td>
<div className='main done1' >
    <h3>Finished tasks</h3>
<Done tasks={done}/>
<button className="cleanbtn" onClick={()=>setDone([])}>
    <img src="src\imgs\clean.png" width="25" height="25"/>
</button>
    </div>
        </td>
      </tr>
    </table>
       
    </>
    

)
}
export default Form;