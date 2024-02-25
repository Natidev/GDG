import { productList } from "../assets/data";
import './product.css'
import { Link } from "react-router-dom";
import Catagories from "./Catagories";
import Arrivals from "./Arrivals";
function Home(){
let producthtml=productList.map((item,index)=>{
    let path="/product/"+index;
    return <>
    <section className="products" key={index}> 
    <Link to={path}>
    <img src={item.pic} width="200px" height="300px" alt="anything" />
        <p>{item.info}</p>
        <p>Price: {item.price}$</p>
    </Link> 
    </section>
    </>
}
)
    return(
        <>
        <h2 className="text-center">
            Catagories
        </h2>
        {/* <p className=" bg-slate-50">
            Here are the Catagories of items you would be interested in
        </p> */}
        <Catagories/>
        <h2>
            Products
        </h2>
        <section className="grid grid-cols-3 xl:grid-cols-4 m-4" >
            {producthtml}
        </section>
        <h2>
            Latest Arrivals
        </h2>
        <Arrivals/>
        </>
    )
}
export default Home;