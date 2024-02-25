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
                <NavLink className="NavLink cartlink" to='/cart'>Cart</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer className=" fixed bottom-1 left-0 right-0 m-4 bg-white">
            End of the page
        </footer>
        </>
    )
}export default Nav;
