import React,{useContext} from 'react'
import Carousel from 'react-elastic-carousel';
import {Cards} from '../'
import { Context } from '../../../../store/appContext';

import './styles.css'


export function CarruselEvents() {
    const {store, actions}= useContext(Context)
    
    
    const breakPoints = [
        {width:100, itemsToShow:3},
    ]

    return (
    

<div>
    <h5 className= 'Title' >Asiste a las Actividades de esta semana</h5>
    <Carousel className = 'CarruselEvent' breakPoints={breakPoints}>
        {store.activities.map((ong)=>(
            <Cards key={ong.id} id={ong.id}/>

        ))}
      
    </Carousel>
</div>

)
  }