import Product from "./Product"
import img1 from '../src/resources/Images/samsung.jpg'
import grey from '../src/resources/Images/grey.webp'
import white from '../src/resources/Images/white.webp'
import scale from '../src/resources/Images/smartscale.webp'
import { useParams } from "react-router-dom"
function Item({productlist}){
  let {Id}=useParams();
  console.log(Id)
    return <>
<Product productlist={[productlist.at(Id)] } show={true}/>
</>
}
export default Item;