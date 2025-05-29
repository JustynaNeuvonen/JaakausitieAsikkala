import React from 'react'
import { useTranslation } from 'react-i18next';
import InfoCardWithGallery from '../../components/InfoCardWithGallery';
import syrjan1 from '../../assets/Syrjansupat1.jpg';
import syrjan2 from '../../assets/Syrjansupat2.png'; 
import syrjan3 from '../../assets/Syrjansupat3.jpg';

function Syrjansupat() {
  const { t } = useTranslation();
  return (
    <InfoCardWithGallery mainImg={syrjan1} galleryImgs={[syrjan2, syrjan3, syrjan1,]}>
      <h1>{t('Sh1')}</h1>  
      <p>{t('Sh2')}</p>
      <p>{t('Sp1')}</p>
      <p>{t('Sp2')}</p>
      <h1>{t('Sh3')}</h1>
      <p>{t('Sp3')}</p>
      <p>{t('Sp4')}</p>
      
      </InfoCardWithGallery>
  )
}

export default Syrjansupat
