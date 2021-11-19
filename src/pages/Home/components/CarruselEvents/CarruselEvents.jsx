import React,{useContext} from 'react'
import Carousel from 'react-elastic-carousel';
import {Cards} from '../'
import { Context } from '../../../../store/appContext';

import './styles.css'


export function CarruselEvents() {
    const {store, actions}= useContext(Context)
    
    
    const breakPoints = [
        {width:500, itemsToShow:4},
    ]

    return (
    

<div className='SeccionEventos'>
    <h3 className= 'Title' >Asiste a las próximas actividades </h3>
    <Carousel className = 'CarruselEvent' breakPoints={breakPoints}>
        {store.activities.map((activity)=>(
            <Cards key={activity.id} id={activity.id}/>

        ))}
      
    </Carousel>
</div>

)
  }