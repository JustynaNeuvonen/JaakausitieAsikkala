import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Dropdown from '../components/Dropdown'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="" width="100px"/>
      </Link>

      <ul>
        <li><Link to='/jaakausi'>Jääkausi</Link></li>
        <li><Link to='/jaakausitie'>Jääkausitie</Link></li>
        <li className="dropdown-parent">
          Paikkat
          <Dropdown />
        </li>
        <li>Lang</li>
        <li><Link to='/tekijat'>Tekijät</Link></li>
      </ul>  
    </div>
  )
}

export default Navbar
