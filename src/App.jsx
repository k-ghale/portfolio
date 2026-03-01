// import { useState } from 'react'
import './App.css'
import Home from "./pages/Home.jsx"

function App() {
  return (
    <>
      <nav className='text-red-500'>
        <li> Home</li>
        <li> about </li>
        <li> Contact</li>
        <li> Projects</li>
      </nav>
      <Home />
    </>
  )
}

export default App
