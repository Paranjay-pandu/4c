// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Hometest"
import Birthday from "./pages/Birthday"
import MousePointer from './components/MousePointer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MousePointer/>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path="/birthday" element = {<Birthday/>}></Route>
        </Routes> 
      </Router>
    </>
  )
}

export default App
