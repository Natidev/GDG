import { productList } from "../assets/data"
import { useState,useEffect } from "react"
import Cart from "./Cart";
import Products from "./Products";
function CartsHandler({showproduct}){
const [items,setItems]= useState([]);

if(showproduct){
    return <Products func1={handleAdd}/>
}else{
return <Cart products={productList} remove={func} />
}}
export default CartsHandler;