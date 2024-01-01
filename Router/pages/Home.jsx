import img1 from '../src/resources/Images/samsung.jpg'
import grey from '../src/resources/Images/grey.webp'
import white from '../src/resources/Images/white.webp'
import scale from '../src/resources/Images/smartscale.webp'
function Home(){
  const images=[
    {
    pic:img1,
    info:"Samsung note 22 in black",
    price:700,
    stock:4
  },
  {
    pic:grey,
    info:"Samsung note 22 in grey",
    price:799,
    stock:5
  },{
  pic:white,
    info:"Samsung note 22 in black",
    price:700,
    stock:4
},
{
  pic:img1,
    info:"Redmi scale",
    price:99,
    stock:10
}
]

    return (
        <div>
          <em>This is a Home Page</em>
        </div>
    )
}
export default Home ;