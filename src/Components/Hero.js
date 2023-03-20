import React from 'react'
// import photo from "../img/photogrid.png"
import  './myStyle.css';
function Hero() {
  return (
    <div className='hero'>  
    <div className='photo'>
      <img src="img/photogrid.png" alt="photogrid" />
    </div>
    <div>
    <h1>Online Experiences</h1>
    <p>Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
    </div>
    </div>
  )
}

export default Hero
