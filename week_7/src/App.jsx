import './App.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Util/Router'
function App() {
  return (
    <>
<RouterProvider router={Router}/>
    </>
  )
}

export default App;
