import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Navbar></Navbar>
      Works
    </div>
  )
}

export default App
