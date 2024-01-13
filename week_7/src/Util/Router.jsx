import { Route,
    Routes,
    createBrowserRouter,
    createRoutesFromElements
        } from "react-router-dom";
import  Cart  from "../Pages/Cart";
import Home from "../Pages/Home"
import Products from "../Pages/Products";
import NotFound from "../Pages/Notfound";
import Nav from "./Nav";
import { useState } from "react";
import { productList } from "../assets/data";
const Router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Nav/>}>
            <Route index element={<Home/>}/>
            <Route path='product/:id' element={<Products/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Route>
    )
) 
export default Router;