import React from 'react'
import Carousel from 'react-elastic-carousel';
import {Cards} from '../'
import './styles.css'


export function CarruselEvents() {

    const breakPoints = [
        {width:780, itemsToShow:3},
    ]

    return (
    

<div>
    <h5 className= 'Title' >Asiste a las Actividades de esta semana</h5>
    <Carousel className = 'CarruselEvent' breakPoints={breakPoints}>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
    </Carousel>
</div>

)
  }