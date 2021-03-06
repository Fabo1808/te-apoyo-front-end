import React,{useContext, useState}from 'react'
import { Context } from '../../../../store/appContext';
import './styles.css'
import { Modal, Button } from 'react-bootstrap';
import{Link, useLocation}  from 'react-router-dom'

export function Cards({id}) {
  const location =useLocation()
  const {store, actions}=useContext(Context);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [name, setName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [phone, setPhone] = useState(undefined);

   
  const handleClose = () => {
    setShow(false);
    setShow2(false)
  }
  const handleShow = () => setShow(true);
  const handleClick= async()=>{
    let data = {
      name:name,
      lastName:lastName,
      email:email,
      phone:phone,
      activity_id: activity[0].id
    }
    let query = await fetch(`${store.url_api}/voluntary` , {
      method: "POST",
      headers: {
          "content-type": "application/json"
      },
      body:JSON.stringify(data)

  });
  let response= await query.json()
    if(query.ok){
      actions.getONG()
      actions.getActivities()
      setShow2(true)
      setName(undefined)
      setLastName(undefined)
      setPhone(undefined)
      setEmail(undefined)
    }else alert(response.message)
   
  }


  const activity= store.activities.filter((activity)=>activity.id=== id)
  

    return (
      
    
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" style={{height: '200px'}} src={activity[0].image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{activity[0].activity_name}</h5>
    <div className="description-container">
        <p className="card-text">{activity[0].description}</p>
    </div>
    <p className="card-text-date">{activity[0].date}</p>
    <p className="card-text-cupons">cupos:{activity[0].quota - activity[0].volunteers.length}</p>
    
     {location.pathname  === `/profile/${store.id}`
        ? <Link
             to={`/volunteers/${activity[0].id}`}
             className='btn btn-primary'
          
          >
            lista de  Voluntario
          </Link>
        : <Button 
            variant="primary" 
            onClick={activity[0].quota - activity[0].volunteers.length > 0 
                     ? handleShow 
                     : ()=> { alert("Cupos agotados")} }
          >
           Quiero ser voluntario
         </Button>
  
             
      
     } 

   
      

      <Modal show={show} onHide={handleClose}>
    
          <Modal.Header className="cerradoo" closeButton>
          <h4>Gracias por tu inter??s en participar!</h4>
          </Modal.Header>

        <div className="Body-Voluntario mt-3 px-2">
        <Modal.Body>
          
          {!show2 &&(
              <>
               <p className='px-1'>Registra tus datos y te contactaremos pronto.</p>

               <div className="modal-voluntario">
                    <div className="modales">
                        <div className="campo-modal-voluntario">
                            <input className="imput-campo-modal-voluntario" 
                              type='text' 
                              placeholder='Nombre' 
                              onChange={(e)=> setName(e.target.value) }
                              value={name}
                            />
                        </div>
                        <div className="campo-modal-voluntario">
                            <input className="imput-campo-modal-voluntario"
                              type='text' 
                              placeholder='Apellido' 
                              onChange={(e)=> setLastName(e.target.value) }
                              value={lastName}
                              />
                        </div>
                        <div className="campo-modal-voluntario">
                            <input className="imput-campo-modal-voluntario"
                              type='email' 
                              placeholder='Email' 
                              onChange={(e)=> setEmail(e.target.value) }
                              value={email}
                            />
                        </div>
                        <div class="campo-modal-voluntario">
                            <input className="imput-campo-modal-voluntario"
                              type='text' 
                              placeholder='Telefono' 
                              onChange={(e)=> setPhone(e.target.value) }
                              value={phone}
                            />
                          </div>
                        </div>
                        <div className='mt-5'>
                          <Button ClassName="boton-piso-modal"  onClick={handleClick}>
                            Enviar datos
                          </Button>
                        </div>
                        
                      </div>                          
               </>
           
           

          )}

        
          {show2 &&(
            <p>Tus datos fueron Enviados, Pronto ser?? contactado</p>
          )}
         

        </Modal.Body>
      </div>
      
      </Modal>
  </div>
</div>


)
  }
