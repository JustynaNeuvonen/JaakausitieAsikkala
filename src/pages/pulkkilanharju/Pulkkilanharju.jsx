import React from 'react'
import { useTranslation } from 'react-i18next';
import InfoCardWithGallery from '../../components/InfoCardWithGallery';
import pulkkilanharju1 from '../../assets/pulkkilanharju1.png';
import pulkkilanharju2 from '../../assets/pulkkilanharju2.jpg';
import pulkkilanharju3 from '../../assets/pulkkilanharju3.png';

function Pulkkilanharju() {
  const { t } = useTranslation();
  return (
    <InfoCardWithGallery mainImg={pulkkilanharju1} galleryImgs={[pulkkilanharju2, pulkkilanharju3, pulkkilanharju1,]}>
      <h1>{t('Ph1')}</h1>  
      <p>{t('Ph2')}</p>
      <p>{t('Pp1')}</p>
      <p>{t('Pp2')}</p>
      <p>{t('Pp3')}</p>
      <p>{t('Pp4')}</p>
      <p>{t('Pp5')}</p>
      <p>{t('Pp6')}</p> 
      
      </InfoCardWithGallery>
  )
  
}

export default Pulkkilanharju
