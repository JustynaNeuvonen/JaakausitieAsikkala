import React from 'react'
import OmettaLogo from '../assets/OmettaLogo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <h2>This is a non-profit initiative by Ometta Softworks.</h2>
      <div className='footerInfo'>
        <img src={OmettaLogo} alt="Ometta Logo" width="200px" />
        <div>
          <p>www.ometta.fi</p>
          <p>email: info@ometta.fi</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
