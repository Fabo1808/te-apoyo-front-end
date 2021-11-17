import React,{useContext} from 'react'
import { Context } from '../../store/appContext'
import { useParams} from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { Cards } from '../Home/components';
import './styles.css'
import { Modal, Button } from 'react-bootstrap';

const Profile = () => {
    const {store, actions}=useContext(Context);
    const {id}= useParams()
    const handleClose = () => actions.modalDonar();
     
    const ONG= store.dataONG.filter((ong)=>ong.id.toString()=== id)
     
      console.log(ONG[0])

    const breakPoints = [
        {width:200, itemsToShow:3},
    ]

   
    return (
        <div className='container w-75'>
            <div className=' container-name'>

                <h2 className='name'>{ONG[0].ong_name}</h2>
            </div>
            <div className="position-relative">

            <img src={ONG[0].image} className='image'/>
            <button 
                className='btn btn-secondary  btn-lg position-absolute top-100 start-100 translate-middle '
                onClick={()=>actions.modalDonar()}
                >DONAR</button>
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
       
       <Modal
         size="md"
        show={store.modalDonar}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        
        

        <div className=' container d-flex justify-content-center row'>
            <img  className=" logo-profile" src={ONG[0].logo} alt={ONG[0].ong_name} />
        </div>
        <Modal.Body>
        <div className='py-5' >

                <h5>Datos Bancarios:</h5>
                <h6>Banco:</h6>
                <p>{ONG[0].bank}</p>
                <h6>Cuenta:</h6>
                <p>{ONG[0].account}</p>
                <h6>RIF:</h6>
                <p>{ONG[0].rif}</p>
        </div>
            </Modal.Body>

         <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      
      
      </Modal>
        
        
       
        
        </div>
    )

}

export default Profile
