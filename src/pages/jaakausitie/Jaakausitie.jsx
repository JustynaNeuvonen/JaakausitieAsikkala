import React from 'react'
import jaakausitie from '../../assets/Jaakausitie.png'
import './Jaakausitie.css'
import { useTranslation } from 'react-i18next';
import aurinkovuori from '../../assets/Aurinkovuori1.jpg';
import vaaksy from '../../assets/Vaaksy1.jpg';
import syrjansupat from '../../assets/Syrjansupat1.jpg';
import tallukanmaki from '../../assets/Tallukanmaki1.jpg';
import pulkkilanharju from '../../assets/Pulkkilanharju1.png';
import kalkkinen from '../../assets/Kalkkinen1.jpg';
import vesivehmaankangas from '../../assets/Vesivehmaankangas1.jpg';
import { Link } from 'react-router-dom';

const Jaakausitie = () => {

  const { t } = useTranslation();
  
  return (
    <><div className="bigCard1">
      <div className="cardSplit1">
        <div className="cardText1">
          <h1>{t('Jth1')}</h1>
          <p>{t('Jtp1')}</p>
          <p>{t('Jtp2')}</p>
          <p>{t('Jtp3')}</p>
          <p>{t('Jtp4')}</p>
          <p>{t('Jtp5')}</p>
          <p>{t('Jtp6')}</p>
          <p>{t('Jtp7')}</p>

        </div>
        <div className="cardPicture1">
          <img src={jaakausitie} alt="" />
        </div>
      </div>
    </div>
    <div className="smallCardsGrid">
        {[
          {
            title: t('Card1Title'),
            desc: t('Card1Desc'),
            img: vaaksy,
            link: '/vaaksynjoki'
        
          },
          {
            title: t('Card2Title'),
            desc: t('Card2Desc'),
            img: aurinkovuori,
            link: '/aurinkovuori'
        
          },
          {
            title: t('Card3Title'),
            desc: t('Card3Desc'),
            img: tallukanmaki,
            link: '/tallukanmaki'
               
          },
          {
            title: t('Card4Title'),
            desc: t('Card4Desc'),
            img: syrjansupat,
            link: '/syrjansupat' 
             
          },
          {
            title: t('Card5Title'),
            desc: t('Card5Desc'),
            img: pulkkilanharju,
            link: '/pulkkilanharju'
             
          },
          {
            title: t('Card6Title'),
            desc: t('Card6Desc'),
            img: kalkkinen,
            link: '/kalkkinen'
            
          },
          {
            title: t('Card7Title'),
            desc: t('Card7Desc'),
            img: vesivehmaankangas,
            link:'/vesivehmaankangas' 
          }
        ].map((card, i) => (
          <div className="smallCard" key={i}>
            <div className="smallCardContent">
              <h1>{card.title}</h1>
              <p>{card.desc}</p>
              <Link to={card.link} className="readMoreBtn">{t('Button')}</Link>
            </div>
            <img src={card.img} alt={card.title} className="smallCardImg" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Jaakausitie