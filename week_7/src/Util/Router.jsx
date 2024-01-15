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
import CartsHandler from "../Pages/CartsHandler";
const Router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Nav/>}>
            <Route index element={<Home/>}/>
            <Route path='product/:id' element={<Products/>}/>
            <Route path="/Cart" element={<CartsHandler/>}/>
            <Route path='/*' element={<NotFound/>}/>
        </Route>
    )
) 
export default Router;