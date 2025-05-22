import React from 'react'
import landing from '../../assets/landing.jpg'
import './Home.css'


const Home = () => {
  return (
<div className="bigCard">
  <div className="cardSplit">
    <div className="cardText">
      <h1>Asikkalan Jääkausitie: Matka Ajassa</h1>
      <p>
        Asikkalan Jääkausitie opastaa matkailijoita Etelä-Päijänteen alueen dynaamisessa kehityksessä. Tämä 100 kilometrin pituinen reitti paljastaa jääkauden kiehtovan tarinan ja alueen järvien muodostumisen.
      </p>
    </div>
    <div className="cardPicture">
      <img src={landing} alt="" />
    </div>
  </div>
</div>

   
  )
}

export default Home
