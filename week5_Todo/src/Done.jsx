import './Todo.css'
function Done({tasks,func,funcCheck}){
let taskList=tasks.map((str,index)=>{    
return (
           <div className='doneT'>
                <del>{str} </del> 
            </div>
    )
}
)  
return <>
{taskList}
</>;
}
export default Done;