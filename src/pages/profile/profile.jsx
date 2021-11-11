import React,{useContext} from 'react'
import { Context } from '../../store/appContext'
import { useParams } from 'react-router-dom';

const Profile = () => {
    const {store, actions}=useContext(Context);
    const {id}= useParams()
    
    const ONG= store.dataONG.filter((ong)=>ong.id.toString()=== id)
   
    return (
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
    )
}

export default Profile
