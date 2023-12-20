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
    setElem(elem.sort((a,b)=>a.val.localeCompare(b.val)));
      
}
    else if(num%3===1){
    setElem(elem.sort((a,b)=>b.val.localeCompare(a.val)));

    }
    else{
        setElem(elem.sort((b,a)=>b.num-a.num)); 

    }
    num++
   setNum1(num)
    forceUpdate();
    console.log(num)
}
 function handleSubmit(e){
e.preventDefault();
setElem([...elem,{val:data,num:count}])
setData("")
let a=count;
a++;
setCount(a)

console.log(count)
 }  
  const handleDelete=(i)=>{
let a=[];
a=[...elem];
a.splice(i,1)
setElem([...a])
console.log(a[i])
  }
  const handleTaskchecked=(j,i)=>{
    
if(j){
setDone([elem[i].val,...done])
handleDelete(i)
console.log(i)
console.log(elem)
}else{
    console.log("fakse")
}
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
<Done tasks={done} func={handleDelete} funcCheck={handleTaskchecked}/>
<button className="cleanbtn"onClick={()=>setDone([])}>
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