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
    <h5 className= 'Title' >Asiste a las actividades de esta semana</h5>
    <Carousel className = 'CarruselEvent' breakPoints={breakPoints}>
        {store.activities.map((activity)=>(
            <Cards key={activity.id} id={activity.id}/>

        ))}
      
    </Carousel>
</div>

)
  }