import React,{useContext} from 'react'
import { Context } from '../../store/appContext'
import { useParams} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { Cards } from '../Home/components';
import './styles.css'

const Profile = () => {
    const {store, actions}=useContext(Context);
    const {id}= useParams()
     
    const ONG= store.dataONG.filter((ong)=>ong.id.toString()=== id)
     
      console.log(ONG[0])

    const breakPoints = [
        {width:100, itemsToShow:3},
    ]

   
    return (
        <div className='container w-75'>
            <div className=' container-name'>

                <h2 className='name'>{ONG[0].ong_name}</h2>
            </div>
            <div className="position-relative">

            <img src={ONG[0].image} className='image'/>
            <button className='btn btn-secondary  btn-lg position-absolute top-100 start-100 translate-middle '>DONAR</button>
            </div>
            <div className='container-description margintop'>
                <p>{ONG[0].description}</p>
            </div>
            <div className='container-description'>
                <p>{ONG[0].location}</p>
            </div>
        
       
         
        
        <Carousel className = 'CarruselEvent' breakPoints={breakPoints}>
            {ONG[0].activities.map((activity)=>(
                <Cards key={activity.id} id={activity.id}/>

            ))}
      
       </Carousel>
    
        
        
       
        
        </div>
    )

}

export default Profile
