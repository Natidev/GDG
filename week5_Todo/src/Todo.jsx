import "./Todo.css"
function Todo({task,func,funcCheck}){

    let b=task.map((str,index)=>{

    return(
        
        <div className="cont" key={index}>
            <p className="Task">
            
                     <li type>
                 <input className="checkBox" type="checkbox" onClick={(e)=>{
                    funcCheck(e.target.checked,index)
                    console.log(str)
                 }}/>{str} 
                 <button className="rmv"onClick={()=>func(index)}>
                 <img src="src\imgs\cross.png" width="15" height="15"/>
                 </button>
           </li> 
            </p>
            
        </div>
    
    )    
   })
    return (
    <div>
    {b}
    </div>)
}
export default Todo