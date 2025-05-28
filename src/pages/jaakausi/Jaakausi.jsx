import React from 'react';
import Glaciation from '../../assets/Glaciation.png';
import { useTranslation } from 'react-i18next';
import './Jaakausi.css';

const Jaakausi = () => {
  const { t } = useTranslation();

  return (
    <div className="jaakausi-container">
      <h1 className="jaakausi-heading">{t('Jkh1')}</h1>
      <p className="jaakausi-paragraph">{t('Jkp1')}</p>
      <h1 className="jaakausi-heading">{t('Jkh2')}</h1>
      <p className="jaakausi-paragraph">{t('Jkp2')}</p>
      <div className="jaakausi-flex-row">
        <div className="jaakausi-flex-text">
          <h1 className="jaakausi-heading">{t('Jkh3')}</h1>
          <p className="jaakausi-paragraph">{t('Jkp3')}</p>
        </div>
        <div className="jaakausi-flex-image">
          <img src={Glaciation} alt="Glaciation" className="jaakausi-image" />
          <p className="jaakausi-image-caption">{t('Jkpic')}</p>
        </div>
      </div>
      <h1 className="jaakausi-heading">{t('Jkh4')}</h1>
      <p className="jaakausi-paragraph">{t('Jkp4')}</p>
      <h1 className="jaakausi-heading">{t('Jkh5')}</h1>
      <p className="jaakausi-paragraph">{t('Jkp5')}</p>
      <h1 className="jaakausi-heading">{t('Jkp6')}</h1>
      <p className="jaakausi-paragraph">{t('Jkp7')}</p>
    </div>
  );
};

export default Jaakausi;