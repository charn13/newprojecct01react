import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import {Home, About, Login, Contact} from './Pages/index.js'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/aboutus" element={<About />} />
      
       <Route path='/Login' element={<Login />}/>
       <Route path='/Contact' element={<Contact />}/>
      
      </Routes>
       
      </Router>
    </>
  )
}

export default App
