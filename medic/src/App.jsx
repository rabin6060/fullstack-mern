import React from 'react'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Services from './components/Services'

export default function App() {
  return (
    <>
    <Navbar/>
    <main>
      <div id='home'>
        <Home/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div id='services'>
        <Services/>
      </div>
    </main>
    </>
  )
}
