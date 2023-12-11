let add_btn=document.getElementById("add");
let main_comp=document.getElementById("todo");
// let task=document.createElement("p");
// task.setAttribute("id","to-do")
let id=1;
add_btn.addEventListener("click",function(){
    let input=document.getElementById("new_task").value;
   let newElement=document.createElement("div");
   newElement.setAttribute("class","task to-do");
   newElement.setAttribute("id",`${id}`);
   console.log(newElement)
   newElement.innerHTML=`<p >${input}</p><button class="x" onclick=del(${id})>x</button>`
   console.log(newElement);
   main_comp.appendChild(newElement);
   id++;
})
function del(i){
let elem=document.getElementById(`${i}`);
elem.remove();
elem.innerHTML="";
}