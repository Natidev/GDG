import './Cart.css'
import btncross from "../assets/icons/cross.png"
function Cart({products,remove,addItem}){
let cartelements=products.map((obj,index)=>{
    return(
        <section className="cartlist" key={index}>
            <img src={obj.pic} alt="Picture of the product" /> 
            <span>
                <p>{obj.info}</p>
            </span>
            <span className="input">
                <input type="number" min="1" defaultValue="1"/>
            <button className="remove" onClick={remove(obj.id)}>
                <img src={btncross} width="5px" height="5px" alt="x" />
            </button>
            </span>
        </section>
    )
})
    return(
<section className="listofcartitems">
    {cartelements}
    <br />
    <button className="buy">Buy</button>
    <button onClick={()=>{
        
        addItem(1);
        }}>
        add
    </button>
</section>
    )
}
export default Cart;