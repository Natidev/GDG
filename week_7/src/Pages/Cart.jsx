import { productList } from "../assets/data";
import './Cart.css'
import btncross from "../assets/icons/cross.png"
import { useState } from "react";
function Cart(){
let cartelements=productList.map((obj,index)=>{
    return(
        <section className="cartlist" key={index}>
            <img src={obj.pic} alt="Picture of the product" /> 
            <span>
                <p>{obj.info}</p>
            </span>
            <span className="input">
                <input type="number" min="1" defaultValue="1"/>
            <button className="remove">
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
</section>
    )
}
export default Cart;