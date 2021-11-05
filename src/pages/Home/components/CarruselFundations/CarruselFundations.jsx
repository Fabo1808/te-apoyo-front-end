import React from 'react'
import Carousel from 'react-elastic-carousel';
import logo1 from '../../../../images/logo1.jpg'
import logo2 from '../../../../images/logo2.png'
import logo3 from '../../../../images/logo3.png'
import './styles.css'


export function CarruselFundations() {

    const breakPoints = [
        {width:100, itemsToShow:7},

    ]

  

    return (
    

<div>
    <h5 className= 'Title' >Descubre a quienes puedes ayudar</h5>
    <Carousel className = 'CarruselFundations' breakPoints={breakPoints}>
        
    <img
          className="LogoFundacion"
          src={logo1}
          alt="Second slide"
        />
    <img
          className="LogoFundacion"
          src={logo2}
          alt="Second slide"
        />
    <img
          className="LogoFundacion"
          src={logo3}
          alt="Second slide"
        />
    <img
          className="LogoFundacion"
          src={logo1}
          alt="Second slide"
        />
    <img
          className="LogoFundacion"
          src={logo2}
          alt="Second slide"
        />
    <img
          className="LogoFundacion"
          src={logo3}
          alt="Second slide"
        />
     <img
          className="LogoFundacion"
          src={logo1}
          alt="Second slide"
        />
    </Carousel>
</div>

)
  }