import React,{useContext,useState} from 'react';
import { Context } from '../../store/appContext';

import Button from 'react-bootstrap/Button'

export function SignUp() {
    const {store,actions} = useContext(Context)
    const [name,setName]=useState('');
    const [img,setImg]=useState('');
    const [description,setDescription]=useState('');
    const [banco,setBanco]=useState('');
    const [rif,setRif]=useState('');
    const [cuenta,setCuenta]=useState('');
	

    return (
        <div className='container text-start mt-5 text-secondary w-75'>
            <div className="mb-3 w-25">
            <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name_example"
                    onChange={e => setName(e.target.value)}
                    value={name}/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"></label>
                <input 
                    type ="file" 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    onChange={e => setImg(e.target.value)}
                    value={img}/>
            </div>
            <div class="mb-3">
                <textarea
                    class="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3" 
                    placeholder="Descripción"
                    onChange={e => setDescription(e.target.value)}
                    value={description}/>
                    
            </div>  
            <div class="mb-3 card">
                <div className='container p-4'>
                    <p>Datos Bancarios</p>
                    <div className='row d-flex align-items-center'>
                        <div className='col-1'>Banco:</div>
                        <div className='col-11'>
                            <input 
                                type="text" 
                                className="form-control" 
                                onChange={e => setBanco(e.target.value)}
                                value={banco}
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
                                onChange={e => setCuenta(e.target.value)}
                                value={cuenta} 
                                />
                        </div>
                            
                    </div>
                  
                </div>
                
            </div>  
            <div className=" mb-5">
                <Button variant="primary">
                    Enviar
                </Button>
            </div>
	    </div>
    )
}