import React, { useState } from 'react'
import logo from '../assets/logo.png'
import menu_icon from '../assets/menu_icon.png'
import { Link } from 'react-router-dom'
import Dropdown from '../components/Dropdown'


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside (optional, for better UX)
  React.useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.dropdown-parent')) setDropdownOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);


  const[ mobileMenu, setMobileMen ] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMen(false) : setMobileMen(true);
  }


  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="" width="100px"/>
      </Link>
      <img src={menu_icon} alt="Menu" width="30px" className='menu-icon' onClick={toggleMenu} ></img>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='/jaakausi'>Jääkausi</Link></li>
        <li><Link to='/jaakausitie'>Jääkausitie</Link></li>
        <li
          className="dropdown-parent"
          onClick={e => {
            // Only toggle on mobile
            if (window.innerWidth <= 750) {
              e.stopPropagation();
              setDropdownOpen(open => !open);
            }
          }}
          onMouseEnter={() => window.innerWidth > 750 && setDropdownOpen(true)}
          onMouseLeave={() => window.innerWidth > 750 && setDropdownOpen(false)}
        >
          Paikkat
          {/* Show dropdown if open or on desktop hover */}
          {(dropdownOpen || window.innerWidth > 750) && <Dropdown />}
        </li>
        <li>Lang</li>
        <li><Link to='/tekijat'>Tekijät</Link></li>
      </ul>  
      
    </div>
  )
}

export default Navbar

