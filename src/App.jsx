import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

const App = () => {
  return (
    <>
      <div>
        <div className="container">
          <Navbar/>
          <Hero/>
        </div>
      </div>
    </>
  )
}

export default App