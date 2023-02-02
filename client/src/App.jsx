import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className='text-center'>
<h1>workss app</h1>
  <Navbar/>
</div>
  )
}

export default App
