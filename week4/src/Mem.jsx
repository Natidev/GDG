import './Mem.css';
function Mem(){
    let Members=["Nathan Israel","Natinael Wondimagegnehu ",
               "Olbia Letta ","Temesgen Getye","Osman Hassan Ibrahim ",
                "Rahel Belay","Robel Teshome","Ruth Tadesse Gebretsadik",
                "Ruth Zenabu Yifru","Salahuddin Hafiz ","Salem Habte",
            "samual keleb endalew","Seid Yesuf ","solomon sheleme Emana",
        "surafel nigusiei " ];
    let returnable=Members.map((mem,num)=>{
        return (
        <p>
        {num+1} {mem}    
        </p>
        )
        
    })
    return (
       
       <div className="Mem">
        {returnable}
       </div>
    )
}
export default Mem;