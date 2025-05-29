import React from 'react'
import { useTranslation } from 'react-i18next';
import InfoCardWithGallery from '../../components/InfoCardWithGallery';
import tallu1 from '../../assets/Tallukanmaki1.png';
import tallu2 from '../../assets/Tallukanmaki2.jpg';
import tallu3 from '../../assets/Tallukanmaki3.png';

function Tallukanmaki() {
  const { t } = useTranslation();
  return (
    <InfoCardWithGallery mainImg={tallu1} galleryImgs={[tallu2, tallu3 ,tallu1,]}>
      <h1>{t('Talluh1')}</h1>  
      <h2>{t('Talluh2')}</h2>
      <p>{t('Talluh3')}</p>
      <p>{t('Tallup1')}</p>
      <p>{t('Tallup2')}</p>
      <p>{t('Tallup3')}</p>
      <p>{t('Tallup4')}</p>
      <p>{t('Tallup5')}</p>
      <p>{t('Tallup6')}</p>
      <h1>{t('Tallup7')}</h1>
      <p>{t('Tallup8')}</p>
      </InfoCardWithGallery>
  )
}
export default Tallukanmaki
