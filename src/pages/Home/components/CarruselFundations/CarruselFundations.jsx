import React,{useContext} from 'react'
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import logo1 from '../../../../images/logo1.png'
import { Context } from '../../../../store/appContext';
import './styles.css'


export function CarruselFundations() {
  const {store,actions}=useContext(Context)

    const breakPoints = [
        {width:100, itemsToShow:5},

    ]

  

    return (
    

<div>
    <div className='card' style={{height:'0px'}}></div>
    <h5 className= 'Title' >Descubre a quienes puedes ayudar</h5>
    <Carousel className = 'CarruselFundations' breakPoints={breakPoints}>
      <Link to='/Contact'>
        <img
            className="LogoFundacion"
            src={logo1}
            alt="Second slide"
          />
      </Link>
        {store.dataONG.map((ong)=>(
          <Link key={ong.id} to={`/profile/${ong.id}`}>
            <img
              className="LogoFundacion"
              src={ong.logo}
              alt="Second slide"
            />
          </Link>
        ))
      }
    
    
    </Carousel>
</div>

)
  }