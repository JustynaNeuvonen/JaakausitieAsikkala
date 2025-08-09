import React from 'react'
import { useTranslation } from 'react-i18next';
import InfoCardWithGallery from '../../components/InfoCardWithGallery';
import syrjan1 from '../../assets/Syrjansupat1.jpg';
import syrjan2 from '../../assets/Syrjansupat2.png'; 
import syrjan3 from '../../assets/Syrjansupat3.jpg';
import syrjan4 from '../../assets/Syrjansupat4.jpg';
import syrjan5 from '../../assets/Syrjansupat5.jpg';
import syrjan6 from '../../assets/Syrjansupat6.jpg';
import syrjan7 from '../../assets/Syrjansupat7.jpg';
import syrjan8 from '../../assets/Syrjansupat8.jpg';

function Syrjansupat() {
  const { t } = useTranslation();
  return (
    <InfoCardWithGallery mainImg={syrjan1} galleryImgs={[syrjan2, syrjan3, syrjan1,syrjan4, syrjan5, syrjan6, syrjan7, syrjan8]} title={t('Syrjansupat')}>
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
