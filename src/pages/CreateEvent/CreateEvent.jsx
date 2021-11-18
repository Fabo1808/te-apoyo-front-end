import React,{ useState, useContext}from 'react'
import { useHistory } from 'react-router'
import { Context } from '../../store/appContext'
import { Modal, Button } from 'react-bootstrap'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import './styles.css'

const CreateEvent = () => {
    const {store,actions} = useContext(Context)
    const [activityName,setActivityName]= useState(undefined)
    const [quota,setQuota]= useState(undefined)
    const [description,setDescription]= useState(undefined)
    const [date,setDate]= useState(undefined)
    const history= useHistory()

        
    const handleClose = () => {
       actions.modalEvent()
       actions.deleteImgEvent()
    }

    const uploadImage= async (files)=>{

        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','teapoyo-img')

        const query = await fetch(store.url_cloudinary , {
            method: "POST",
            body:data
        });

        let response= await query.json()
        if(query.ok){
            actions.setImgEvent(response.secure_url)
        }


}

const handleClick= async ()=>{
    const activityRegister={
        activity_name:activityName,
        image:store.imgEvent,
        description:description,
        date:date,
        quota:quota,
        
    }
    const query = await fetch(`${store.url_api}/activity` , {
        method: "POST",
        headers: {
            Authorization: `Bearer ${store.token}`,
            "content-type": "application/json"
        },
        body:JSON.stringify(activityRegister)
    });

    let response= await query.json()
    if(query.ok){
        actions.getONG()
        actions.getActivities()
        alert("El evento se creó con Exito")
        actions.modalEvent()
        history.push(`/`)
    }else if(response.msg){
        alert(response.msg)
        actions.onOffSignin()
    } else alert(response.message)

    


}





return (
     <div container w-75 >

    <Modal 
        show={store.modalEvent} 
        onHide={handleClose}
    >
    
    <Modal.Header closeButton>
    <h4>Ingresa el contenido del Evento.</h4>
    </Modal.Header>

  <div className="Body-Voluntario mt-1 ">
  <Modal.Body>
    
    

         <div className="modal-voluntario">
        <label  
            for='img' 
            className='container-input-file' 
            // styles={store.imgEvent
            // ?{backgroundImage:`url(${store.imgEvent})`}
            // :null}
            >
            {store.imgEvent 
                ? <img  className=" imgEvent" src={store.imgEvent} />
                :<div>
                    <CloudUploadIcon color="primary"  style={{ fontSize: 100 }}/>
                    <p>Click para subir Imagen de evento</p>
                </div>
            }
            
        </label>
            <input 
             id='img'
             type="file" 
             className='hidden'
             onChange={e => uploadImage(e.target.files)}
            />
              <div className="modales">
                  
                      <input className="imput" 
                        type='text' 
                        placeholder='Nombre del Evento' 
                        onChange={(e)=>setActivityName(e.target.value)}
                        value= {activityName}
                      />
                  
                  
                      <textarea className="imput h"
                         
                        placeholder='Descripción' 
                        onChange={(e)=>setDescription(e.target.value)}
                         value={description}
                        />
                  
                  <div className="campo-modal-voluntario ">
                      <input className=" sm "
                        type='text' 
                        placeholder='Cupos' 
                        onChange={(e)=>setQuota(e.target.value)}
                        value={quota}
                      />
                        <input className="sm  "
                        type='date' 
                        placeholder='Fecha' 
                        onChange={(e)=>setDate(e.target.value)}
                        value={date}
                      />
                  </div>
                 
                  </div>
                  <div className='mt-5'>
                    <Button ClassName="boton-piso-modal"  onClick={handleClick}>
                      Crear Evento
                    </Button>
                  </div>
                  
                </div>                          
         
        </Modal.Body>
    </div>

</Modal>
</div>



)
}




    

export default CreateEvent
