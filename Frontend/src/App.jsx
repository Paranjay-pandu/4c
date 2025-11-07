import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Hometest"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>  
        </Routes> 
      </Router>
    </>
  )
}

export default App
