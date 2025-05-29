import React from 'react'
import { useTranslation } from 'react-i18next';
import InfoCardWithGallery from '../../components/InfoCardWithGallery';
import vaaksy1 from '../../assets/Vaaksy1.jpg';
import vaaksy2 from '../../assets/Vaaksy2.jpg';
import vaaksy3 from '../../assets/Vaaksy3.jpg';
import vaaksy4 from '../../assets/Vaaksy4.jpg';
import vaaksy5 from '../../assets/Vaaksy5.jpg';

function Vaaksynjoki() {
  const { t } = useTranslation();
  return (
    <InfoCardWithGallery mainImg={vaaksy1} galleryImgs={[vaaksy2, vaaksy3, vaaksy4, vaaksy5, vaaksy1]}>
      <h1>{t('Vaaksyh1')}</h1>  
      <h2>{t('Vaaksyh2')}</h2>
      <p>{t('Vaaksyh3')}</p>
      <p>{t('Vaaksyp1')}</p>
      <p>{t('Vaaksyp2')}</p>
      <p>{t('Vaaksyp3')}</p>
      <p>{t('Vaaksyp4')}</p>
      <p>{t('Vaaksyp5')}</p>
    </InfoCardWithGallery>
  )
}

export default Vaaksynjoki
