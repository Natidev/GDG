import { productList } from "../assets/data";
function Arrivals(){
let newItems=productList.slice(0,3);
let csss="align-top"
let elem=newItems.map((a,index)=>{
    let str=index===1?" align-super":""
    const dcss="bg-slate-100 p-4 m-4 grid grid-cols-1 gap-1 h-fit"
    return <section className={dcss+str}>
    <img src={a.pic} className="w-52 h-60"/>
    <br/>
    <p className="">    {index}{a.info}</p>
    </section>
})
return <>
<section className="grid p-3 h-96 bg-slate-200 lg:grid-cols-3 gap-1 sm:grid-cols-1">
{elem}
</section>
</>
}
export default Arrivals;