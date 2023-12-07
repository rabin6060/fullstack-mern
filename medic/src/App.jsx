import React from 'react'
import About from './components/About'
import Booking from './components/Booking'
import Doctors from './components/Doctors'
import Footer from './components/Footer'
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
      <div id='doctors'>
        <Doctors/>
      </div>
      <div id='bookings'>
        <Booking/>
      </div>
    </main>
    <Footer/>
    </>
  )
}
