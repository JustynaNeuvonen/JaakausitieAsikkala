import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" width="100px"/>
      <ul>
        <Link to='/'><li>Home </li></Link>
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
