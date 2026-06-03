import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Service'
import Contact from '../components/Contact'

export default function LandingPage() {
  return (
    <div className='bg-gray-100'>
        <Navbar/>
        <main>
          <Hero/>
          <About/>
          <Services/>
          <Contact/>
        </main>
    </div>
  )
}
