import React from 'react'
import { useTranslation } from 'react-i18next';
import logo from '../../assets/OmettaLogo.png';


const Tekijat = () => {
  const { t } = useTranslation();
  return (
    <div className="creditsContainer">
      <h1>{t('Creditsh1')}</h1>
      <p> J-P Palmu. Jääkausitie Asikkala Ice Age Route. 2001, Markpoint Oy, ISBN 951 -97789 - 4, ISSN 1458 – 2902</p>
      <p> https://visitpaijanne.fi/wp-content/uploads/2017/11/Asikkalan-j%C3%A4%C3%A4kausitie.pdf</p>
      <h1>{t('Creditsh2')}</h1>
      <p> Justyna Neuvonen Ometta Softworks</p>
      <p> https://www.ometta.fi/</p>
      <img src={logo} alt="Ometta Logo" style={{ width: '200px', height: 'auto' }} />
      <p> Ometta Softworks Oy is a Finnish software company that specializes in developing innovative and user-friendly applications for various platforms.</p>
      <h1>{t('Creditsh3')}</h1>
      <a href="https://www.flaticon.com/free-icons/languages" title="languages icons">Languages icons created by Pixel perfect - Flaticon</a>
      <a href="https://www.flaticon.com/free-icons/hamburger" title="hamburger icons">Hamburger icons created by Lizel Arina - Flaticon</a>
      <h1>{t('Creditsh4')}</h1>
      <p> Photo by Egor Kamelev: https://www.pexels.com/photo/close-up-photography-of-snowflake-813872/</p>
      <p> {t('Jkpic')} https://pl.wikipedia.org/wiki/Plik:Weichsel-W%C3%BCrm-Glaciation.png </p>
      <p> Visit Päijänne. 2023. Asikkalan jääkausitie. Avaliable:  https://visitpaijanne.fi/wp-content/uploads/2017/11/Asikkalan-j%C3%A4%C3%A4kausitie.pdf </p>
      <p> By kallerna - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=107451651</p>
      <p> <a href="https://pixabay.com/users/maaritjokinen-3642907/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1813536">Maarit Jokinen</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1813536">Pixabay</a></p>
      <p>kallerna, CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0, via Wikimedia Commons</p>
      <p>Fenny83, CC BY-SA 3.0 http://creativecommons.org/licenses/by-sa/3.0/, via Wikimedia Commons</p>
      <p> https://finna.fi/Record/lahdenmuseo.lkm-252438?sid=5016970928#details </p>
      <p> https://asikkala.fi/matkailu-ja-tapahtumat/asikkalan-jaatava-menneisyys/ </p>
      <p> http://weppi.gtk.fi/aineistot/mp-opas/suppa2.htm</p>
      <p> Kuva Visit Lahti https://www.outdooractive.fi/fi/poi/asikkala/syrjaensupat-asikkala/27734348/</p>
      <p> https://finna.fi/Record/lahdenmuseo.lkm-338346?sid=5017089137 </p>
      <p> Ximonic (Simo Räsänen), CC BY-SA 3.0 https://creativecommons.org/licenses/by-sa/3.0, via Wikimedia Commons </p>
      <p> https://www.visitlahti.fi/fi/nahtavyydet/syrjaensupat </p>

      <p>
        https://asikkala.fi/matkailu-ja-tapahtumat/asikkalan-jaatava-menneisyys/?fbclid=IwY2xjawKJoopleHRuA2FlbQIxMABicmlkETFzRUxONTZvMDZjYk1YYk9yAR6n-sNKpA21Y1W5yfH5scQ-uxK-AQSR-0RN4C20aIbU7GBib1HF4GCXJJBAVA_aem_Pj-7EUzze1YgNYL4r0aLWA
      </p>
    </div>
  )
}

export default Tekijat
