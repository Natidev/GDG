import {
    createBrowserRouter,Route,createRoutesFromElements,
} from "react-router-dom";
import Home from '../src/Pages/Home'
import About from "../src/Pages/About";
import Contact from "../src/Pages/Contact";
const router=createBrowserRouter(
    createRoutesFromElements(
        <Route>
         <Route path="/" element={<Home/>}/>
         <Route path="/about*" element={<About/>}/>
         <Route path="/Contact*" element={<Contact/>}/>
        </Route>
    )
)
export default router;