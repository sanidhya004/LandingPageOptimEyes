import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>
    <div className='fixed top-0 z-10'>
    <NavBar/>
    </div>
  
      <HomePage/>
    </div>
  )
}

export default App
