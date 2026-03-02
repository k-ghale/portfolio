// import { useState } from 'react'

import './App.css'
import Home from "./pages/Home.jsx"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
