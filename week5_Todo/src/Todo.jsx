import "./Todo.css"
function Todo({task,func,funcCheck}){

    let b=task.map((str)=>{

    return(
        
        <div className="cont" key={str.num}>
          
            <p className="Task">
            
                     <li type>
                 <input className="checkBox" type="checkbox" onChange={(e)=>{
                    funcCheck(e.target.checked,str.num)
                 }}/>{str.val} 
                 <button className="rmv"onClick={()=>func(str.num)}>x</button>
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