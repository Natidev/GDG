
import Routers from './utils/Routers'
import './App.css'
import { RouterProvider } from 'react-router-dom'
function App() {
 

  return (
  
    <>
    <RouterProvider router={Routers}/>
    </>
//     <BrowserRouter>

//     <main>
      
//   <Routes>
// <Route path='/' element={<Home/>}/>    
// <Route path="/Item" element={<Item/>}/>
// <Route path="*" element={<Notfound/>}/>
// </Routes>
//     </main>

//     </BrowserRouter>
  )
}

export default App
