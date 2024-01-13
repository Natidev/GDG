import { productList } from "../assets/data";
import './product.css'
import { Link } from "react-router-dom";
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
        <section className="container">
            {producthtml}
        </section>
        
        </>
    )
}
export default Home;