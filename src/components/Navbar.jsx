import React, { useState, useRef } from 'react'
import logo from '../assets/logo.png'
import menu_icon from '../assets/menu_icon.png'
import { Link } from 'react-router-dom'
import Dropdown from '../components/Dropdown'
import { useTranslation } from 'react-i18next';
import languageIcon from '../assets/language.png';


const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenu, setMobileMen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown when clicking outside (optional, for better UX)
  React.useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.dropdown-parent')) setDropdownOpen(false);
      // Close mobile menu if click outside
      if (mobileMenu && menuRef.current && !menuRef.current.contains(e.target) && !e.target.classList.contains('menu-icon')) {
        setMobileMen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [mobileMenu]);


  const toggleMenu = () => {
    setMobileMen((prev) => !prev);
  };

  const { i18n } = useTranslation();
 
const toggleLanguage = () => {
  const newLang = i18n.language === 'en' ? 'fi' : 'en';
  i18n.changeLanguage(newLang);
};
 const { t } = useTranslation(); 

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={logo} alt="" width="100px"/>
      </Link>
      <img src={menu_icon} alt="Menu" width="30px" className='menu-icon' onClick={toggleMenu} />
      <ul ref={menuRef} className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='/jaakausi'>{t('Nav1')}</Link></li>
        <li><Link to='/jaakausitie'>{t('Nav2')}</Link></li>
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
          {t('Nav3')}
          {/* Show dropdown if open or on desktop hover */}
          {(dropdownOpen || window.innerWidth > 750) && <Dropdown />}
        </li>
        <li>
        <button onClick={toggleLanguage} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}>
          <img src={languageIcon} alt="Language" width="20px" style={{ marginRight: '5px' }} />
          {i18n.language === 'en' ? 'FI' : 'EN'}
        </button>
        </li>
        <li><Link to='/tekijat'>{t('Nav4')}</Link></li>
      </ul>  
      
    </div>
  )
}

export default Navbar

