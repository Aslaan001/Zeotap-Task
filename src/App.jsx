import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Main from "./components/Main"


//import Order from "./components/Order"


function App() {
 

  return (
   <BrowserRouter>
    
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/main" element={<Main/>}></Route>
    
    
    


   </Routes>
   
   </BrowserRouter>
  )
}

export default App
