function Catagories(){
    const a=[
        {name:"Electronics",
        rank: 1,
        pic:"tbd"},
        {name:"Clothings",
        rank: 2,
        pic:"sfg"},
        {name:"Utilities",
        rank: 4,
        pic:"tbd"},
    ]
    let c=a.map((elem)=>{
        return (
            <section className="bg-white p-4 m-8 rounded-lg">
                    <p className="text-xl text-stone-700 rounded-r-3xl bg-sky-100 ">{elem.rank}</p>
                    <p className="mt-2 mb-2">
                        {elem.name}
                    </p>
                    <img alt="Pic for the cata"/>
            </section>
        )
    })
    return<section className="flex justify-center"> 
    <div>
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl bg-slate-100 mb-32">
        {c}
    </section>
    </div>

    </section>
}
export default Catagories;