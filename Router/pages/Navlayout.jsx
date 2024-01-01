import { Outlet,NavLink } from "react-router-dom";
import '../src/App.css'
function Navlayout(){
    return (
        <div className="layoutheader">
                <header>
    <nav>
    <NavLink className="Navlink" to="/">Home</NavLink>
    <NavLink className="Navlink" to="Product">Product</NavLink>
    </nav>
  </header>
  <main>
    <Outlet/>
  </main>
        </div>

  )
}export default Navlayout;