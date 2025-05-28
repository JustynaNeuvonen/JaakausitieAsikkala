import React from 'react'
import landing from '../../assets/landing.jpg'
import './Home.css'
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t } = useTranslation();
  
  return (
<div className="bigCard">
  <div className="cardSplit">
    <div className="cardText">
      <h1>{t('Hh1')}</h1>
      <p>{t('Hp')}</p>
    </div>
    <div className="cardPicture">
      <img src={landing} alt="" />
    </div>
  </div>
</div>

   
  )
}

export default Home
