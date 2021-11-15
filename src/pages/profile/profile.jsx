import React,{useContext} from 'react'
import { Context } from '../../store/appContext'
import { useParams} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { Cards } from '../Home/components';

const Profile = () => {
    const {store, actions}=useContext(Context);
    const {id}= useParams()
    
    
   
    
 const ONG= store.dataONG.filter((ong)=>ong.id.toString()=== id)

      console.log(ONG)
    const breakPoints = [
        {width:100, itemsToShow:3},
    ]

   
    return (
        <>
       
            
            <div>
                    <div>
                        ONG={ONG[0].ong_name} 
                    </div>
                    <div>
                        location = {ONG[0].location}
                    </div>
                    <div>

                image= {ONG[0].image}
                    </div>
                    <div>

                logo = {ONG[0].logo}
                    </div>

                    <div>

                website_address ={ONG[0].website_addrres}
                    </div>
                rif= {ONG[0].rif}
                bank= {ONG[0].bank}
                account= {ONG[0].account}
                description= {ONG[0].description}
                


        </div>
        
        <Carousel className = 'CarruselEvent' breakPoints={breakPoints}>
        {ONG[0].activities.map((activity)=>(
            <Cards key={activity.id} id={activity.id}/>

        ))}
      
    </Carousel>
    
        
        
       
        
        </>
    )

}

export default Profile
