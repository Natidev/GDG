import { NavLink,Outlet } from "react-router-dom"
import { useState } from "react";
import { productList } from "../assets/data";
import './Nav.css'
function Nav(){
    const [cart,setCart]=useState([]);
    return(
        <>
        <header className="nav">
            <nav>
                <NavLink className="NavLink" to='/'>Home</NavLink>
                <NavLink className="NavLink" to='/products'>Products</NavLink>
                <NavLink className="NavLink" to='/cart'>Cart</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        </>
    )
}export default Nav;
