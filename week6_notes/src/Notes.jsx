import './Notes.css'

function Notes({noteList}){
    let noteElements=noteList.map((elem)=>{
        return(
            <section className='notes'>
<h3>{elem.main}</h3>
<h4>{elem.sub}</h4>
<p className='content'>{elem.content}</p>
</section>
        )
    })
console.log(noteList)
return(
<div className='noteContainer'>
<h2>Notes</h2>
<div className="colums">
    {noteElements}
</div>
</div>
)
}
export default Notes;