import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
//import {Button} from '../components/Button'
//import {Dropdown} from '../components/Dropdown'
//import { useState } from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="" width="100px"/>
      </Link>

      <ul>
        <Link to='/jaakausi'><li>Jääkausi</li></Link>
        <Link to='/jaakausitie'><li>Jääkausitie</li></Link>
        <button>Paikkat</button>
        <button>Lang</button>
        <Link to='/tekijat'><li>Tekijät</li></Link> 
        </ul>  
    </div>
  )
}

export default Navbar
