import React from 'react'
import { useTranslation } from 'react-i18next';
import InfoCardWithGallery from '../../components/InfoCardWithGallery';
import kalkkinen1 from '../../assets/Kalkkinen1.jpg';
import kalkkinen2 from '../../assets/Kalkkinen2.jpg';
import kalkkinen3 from '../../assets/Kalkkinen3.jpg';
import kalkkinen4 from '../../assets/Kalkkinen4.jpg';


function Kalkkinen() {
  const { t } = useTranslation();
  return (
    <InfoCardWithGallery mainImg={kalkkinen1} galleryImgs={[kalkkinen2,kalkkinen3, kalkkinen4, kalkkinen1]}>
      <h1>{t('Kh1')}</h1>  
      <p>{t('Kh2')}</p>
      <p>{t('Kp1')}</p>
      <p>{t('Kp2')}</p>
      <p>{t('Kp3')}</p>
      <p>{t('Kp4')}</p>
      <p>{t('Kp5')}</p>
      <p>{t('Kp6')}</p>
      <p>{t('Kp7')}</p>
      
      </InfoCardWithGallery>
  )
}

export default Kalkkinen
