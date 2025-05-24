import React from 'react'
import{ Link } from 'react-router-dom'

const Dropdown = () => {
  return (
    <div className='Dropdown'>
        <ul>
            <li><Link to="/vaaksynjoki">Väaksynjoki</Link></li> 
            <li><Link to="/aurinkovuori">Aurinkovuori</Link></li>
            <li><Link to="/tallukanmaki">Tallukanmaki</Link></li>  
            <li><Link to="/syrjansupat">Syrjänsupat</Link></li> 
            <li><Link to="/pulkkilanharju">Pulkkilanharju</Link></li>
            <li><Link to="/kalkkinen">Kalkkinen</Link></li>
            <li><Link to="/vesivehmaankangas">Vesivehmaankangas</Link></li>
            
        </ul>
      
    </div>
  )
}

export default Dropdown
