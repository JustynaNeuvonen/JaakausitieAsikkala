import React from 'react'
import { useTranslation } from 'react-i18next';
import aurinkovuori1 from '../../assets/Aurinkovuori1.jpg';
import aurinkovuori2 from '../../assets/Aurinkovuori2.jpg';
import aurinkovuori3 from '../../assets/Aurinkovuori3.jpg';
import InfoCardWithGallery from '../../components/InfoCardWithGallery';

function Aurinkovuori() {
  const { t } = useTranslation();
  return (
    <InfoCardWithGallery mainImg={aurinkovuori1} galleryImgs={[aurinkovuori2,aurinkovuori3 , aurinkovuori1 ,]}>
      <h1>{t('Aurinkoh1')}</h1>  
      <h2>{t('Aurinkoh2')}</h2>
      <p>{t('Aurinkoh3')}</p>
      <p>{t('Aurinkop1')}</p>
      <p>{t('Aurinkop2')}</p>
      <p>{t('Aurinkop3')}</p>
      <p>{t('Aurinkop4')}</p>
      <p>{t('Aurinkop5')}</p>
      <p>{t('Aurinkop6')}</p>
      <p>{t('Aurinkop7')}</p>
      </InfoCardWithGallery>
  )
}

export default Aurinkovuori
