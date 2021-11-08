import React,{useContext,useState} from 'react';
import { Context } from '../../store/appContext';
import { useHistory } from "react-router-dom";


import Button from 'react-bootstrap/Button'


export function SignUp() {
    const {store,actions} = useContext(Context)
	const history = useHistory();

    const [name,setName]=useState('');
    const [urlImage,setUrlImage]=useState('');
    const [description,setDescription]=useState('');
    const [bank,setBank]=useState('');
    const [rif,setRif]=useState('');
    const [account,setAccount]=useState('');
    const [website,setWebsite]=useState('');
    const [logo,setLogo]=useState('');
    const [password,setPassword]=useState('');
    const [location,setLocation]=useState('');

    const uploadImage= async (files,direction)=>{
        
        const data = new FormData() 
        data.append('file',files[0])
        data.append('upload_preset','teapoyo-img')

        const query = await fetch(store.url_cloudinary , {
            method: "POST",
            body:data
        });
       
        let response= await query.json()
        if(direction==='logo'){
            setLogo(response.secure_url)
        }else
            setUrlImage(response.secure_url)
     
    }

    const handleClick= async ()=>{
         const ongRegister={
             ong_name:name,
             password:password,
             location:location,
             image:urlImage,
             logo:logo,
             rif:rif,
             website_address:website,
             description:description,
             bank:bank,
             account:account
         }
         const query = await fetch(`${store.url_api}/ong` , {
            method: "POST",
            headers: {
				"content-type": "application/json"
			},
            body:JSON.stringify(ongRegister)
        });
       
        let response= await query.json()
        if(response.message===false){
            alert("Algo ocurrió, puedes intentar de nuevo")
        }else{
            history.push("/signin");

        }

      
    }
	

    return (
        <div className='container text-start mt-5 text-secondary w-50'>
            <div className="mb-3 w-25">
            <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="name_example"
                    onChange={e => setName(e.target.value)}
                    value={name}/>
            </div>
            <div className="mb-3 w-25">
            <label for="exampleFormControlInput1" className="form-label">Ubicación</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Dirección"
                    onChange={e => setLocation(e.target.value)}
                    value={location}/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">imagen</label>
                <input 
                    type ="file" 
                    className="form-control" 
                    rows="3"
                    onChange={e => uploadImage(e.target.files,'image')}
                    />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">logo</label>
                <input 
                    type ="file" 
                    className="form-control" 
                    rows="3"
                    onChange={e => uploadImage(e.target.files,'logo')}
                    />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control" 
                    rows="3" 
                    placeholder="Descripción"
                    onChange={e => setDescription(e.target.value)}
                    value={description}/>
                    
            </div>  
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Website</label>
                <input 
                    type ="text" 
                    className="form-control" 
                    rows="3"
                    onChange={e => setWebsite(e.target.value)}
                    value={website}
                    />
            </div>
            <div className="mb-3 card">
                <div className='container p-4'>
                    <p>Datos Bancarios</p>
                    <div className='row d-flex align-items-center'>
                        <div className='col-1'>Banco:</div>
                        <div className='col-11'>
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={e => setBank(e.target.value)}
                                value={bank}
                                />
                        </div>
                            
                    </div>
                    <div className='row d-flex align-items-center'>
                        <div className='col-1'>RIF:</div>
                        <div className='col-11'>
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={e => setRif(e.target.value)}
                                value={rif}
                                />
                        </div>
                            
                    </div>
                    <div className='row d-flex align-items-center'>
                        <div className='col-1'>Cuenta:</div>
                        <div className='col-11'>
                            <input 
                                type="text" 
                                className="form-control"
                                onChange={e => setAccount(e.target.value)}
                                value={account} 
                                />
                        </div>
                            
                    </div>
                  
                </div>
                
            </div>  
            <div className="mb-3 w-25">
            <label for="exampleFormControlInput1" className="form-label">password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Ingresa una contraseña"
                    onChange={e => setPassword(e.target.value)}
                    value={password}/>
            </div>
            <div className=" mb-5">
                <Button variant="primary" onClick={handleClick}>
                    Enviar
                </Button>
            </div>
	    </div>
    )
}