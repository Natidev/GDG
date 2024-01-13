import { useParams } from "react-router-dom";
import { productList } from "../assets/data";
import './product.css'
function Products(){
    let {id}=useParams();
    let item=productList.at(id);
    return <>
    <section className="products">  
        <img src={item.pic}  alt="anything" />
        <p>{item.info}</p>
        <p>Price: {item.price}$</p>
    </section>
    </>
}export default Products;