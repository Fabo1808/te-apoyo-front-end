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
  <img className="card-img-top " src={activity[0].image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{activity[0].activity_name}</h5>
    <p className="card-text">{activity[0].description}</p>
    <p className="card-text">{activity[0].date}</p>
    <p className="card-text">cupos:{activity[0].quota - activity[0].volunteers.length}</p>
    
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
           quiero ser Voluntario
         </Button>
  
             
      
     } 

   
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gracias por tu interés en participar!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!show2 &&(
              <>
               <p>Registraremos tus datos y te contactaremos</p>
               <input 
                 type='text' 
                 placeholder='Nombre' 
                 onChange={(e)=> setName(e.target.value) }
                 value={name}
               />
               <input 
                 type='text' 
                 placeholder='Apellido' 
                 onChange={(e)=> setLastName(e.target.value) }
                 value={lastName}
                 />
               <input 
                 type='email' 
                 placeholder='Email' 
                 onChange={(e)=> setEmail(e.target.value) }
                 value={email}
               />
               <input 
                 type='text' 
                 placeholder='Telefono' 
                 onChange={(e)=> setPhone(e.target.value) }
                 value={phone}
               />
             
               </>

          )}
          {show2 &&(
            <p>Tus datos fueron Enviados, Pronto será contactado</p>
          )}
         

        </Modal.Body>
        <Modal.Footer>
          {!show2 &&(
            <>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
                   <Button variant="primary" onClick={handleClick}>
                   Enviar Datos
                 </Button>
                 </>
          )}
           {show2 &&(
                   <Button variant="primary" onClick={handleClose}>
                   Continuar
                 </Button>
          )}
          
         
        </Modal.Footer>
      </Modal>
     
  </div>
</div>


)
  }
