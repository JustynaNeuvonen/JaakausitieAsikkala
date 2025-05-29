import React from 'react'
import { useTranslation } from 'react-i18next';
import InfoCardWithGallery from '../../components/InfoCardWithGallery';
import vesi1 from '../../assets/Vesivehmaankangas1.jpg';

function Vesivehmaankangas() {
 const { t } = useTranslation();
  return (
    <InfoCardWithGallery mainImg={vesi1} galleryImgs={[vesi1]}>
      <h1>{t('Vesih1')}</h1>  
      <p>{t('Vesih2')}</p>
      <p>{t('Vesip1')}</p>
      <p>{t('Vesip2')}</p>
      <p>{t('Vesip3')}</p>
      <p>{t('Vesip4')}</p>
      <p>{t('Vesip5')}</p>
      <p>{t('Vesip6')}</p>
      <p>{t('Vesip7')}</p>
    
      
      </InfoCardWithGallery>
  )
}

export default Vesivehmaankangas
