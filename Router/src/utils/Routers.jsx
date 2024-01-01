import { createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Notfound from "../../pages/Notfound";
import Navlayout from "../../pages/Navlayout";
const Routers=createBrowserRouter(
    
        createRoutesFromElements(
            <Route path="/" element={<Navlayout/>}>
                 <Route index element={<Home/>}/>
                  <Route path="/Product" element={<Product/>}/>
                  <Route path="*" element={<Notfound/>}/>
            </Route>
        )
    )

export default Routers;