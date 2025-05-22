import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

function Rootlayout() {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <Outlet /> 
      </div>
      <Footer />
    </div>
  )
}

export default Rootlayout
