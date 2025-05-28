import React from 'react'
import OmettaLogo from '../assets/OmettaLogo.png'
import { useTranslation } from 'react-i18next';

 
const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className='footer'>
      <h2>{t('Footer')}</h2>
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
