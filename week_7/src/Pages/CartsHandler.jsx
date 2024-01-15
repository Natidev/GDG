import { productList } from "../assets/data"
import { useState } from "react"
import Cart from "./Cart";
function CartsHandler(){
const [items,setItems]= useState([]);
const handleAdd=(index)=>{
    setItems([...items,productList.at(index)])
    console.log(items)
    console.log(productList.at(index))
}
const handleRemove=(id1)=>{
    let a=[...items]
    setItems(a.filter((obj)=>obj.id!=id1))
}
return <Cart products={items} remove={handleRemove} addItem={handleAdd}/>
}
export default CartsHandler;