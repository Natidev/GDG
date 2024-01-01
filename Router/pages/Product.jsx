import img1 from '../src/resources/Images/samsung.jpg'
import grey from '../src/resources/Images/grey.webp'
import white from '../src/resources/Images/white.webp'
import scale from '../src/resources/Images/smartscale.webp'
import './Product.css'
function Product(){
  const images=[img1,grey,white,scale]
const products=images.map((img,index)=>{
  return(
<section key={index} className='singleProduct'>
<img src={img} width="300px" height="170px" alt="phone" /> 
<button>Add to cart</button>
</section>
       )
})
    return<section className='plist'>
{products}
    </section>
}
export default Product;