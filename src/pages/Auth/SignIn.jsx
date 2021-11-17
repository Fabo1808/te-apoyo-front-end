import React,{useContext, useState} from 'react';
import { useHistory } from 'react-router';
import { Context } from '../../store/appContext';
import { Modal } from 'react-bootstrap';


export function SignIn() {
    const {store,actions}=useContext(Context)
    const [name,setName]=useState(undefined);
    const [password,setPassword]=useState(undefined)
    const history= useHistory()


    const handleClose = () => actions.onOffSignin();
    const handleClick= async()=>{
        let query = await fetch(`${store.url_api}/login` , {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body:JSON.stringify({ong_name:name, password:password})

        });
        let response= await query.json()
        if(response.token){
            localStorage.setItem('ONG',response.ong_name)
            localStorage.setItem('token',response.token)
            localStorage.setItem('id',response.id)
            actions.onOffSignin()
            actions.setToken()
          
            history.push(`/profile/${response.id}`)

        }else alert(response.message)

}
return (
   
        <Modal
            show={store.onOffSignin}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
         <Modal.Header closeButton>
           <Modal.Title>Inicia Sesión</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         
        <div className="mb-3 row px-3 mt-5">
            <label for="staticEmail" className="col-sm-2 col-form-label">ONG</label>
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
            </div>
        </div>
        <div className="mb-3 row px-3">
            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input
                    type="password"
                    className="form-control"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    />
             </div>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto my-5">
            <button
                type="button"
                className="btn btn-success"
                onClick={handleClick}>
                Iniciar
            </button>
        </div>
       
        
          
         </Modal.Body>
        
       </Modal>
    )
 }