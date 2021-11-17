import React,{useContext,useState} from 'react';
import { Context } from '../../store/appContext';
import { useHistory } from "react-router-dom";
import './styles.css'


import Button from 'react-bootstrap/Button'


export function SignUp() {
    const {store,actions} = useContext(Context);
	const history = useHistory();

    const [name,setName]=useState(undefined);
    const [description,setDescription]=useState(undefined);
    const [bank,setBank]=useState(undefined);
    const [rif,setRif]=useState(undefined);
    const [account,setAccount]=useState(undefined);
    const [website,setWebsite]=useState(undefined);
    const [password,setPassword]=useState(undefined);
    const [location,setLocation]=useState(undefined);

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
           actions.setLogo(response.secure_url)
        }else
            actions.setImage(response.secure_url)
     
    }

    const handleClick= async ()=>{
         const ongRegister={
             ong_name:name,
             password:password,
             location:location,
             image:store.img,
             logo:store.logo,
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
            actions.deleteLogoImg()
            actions.getONG()
            history.push("/");

        }

      
    }
	

    return (
        
        <div className=' w-75 container bg my-5  p-5 shadow-lg'>
            <div className= 'margen'></div>
            <div className=" row logoname ">
                <div className="col-auto" >
                    <label for="logo" className="container-logo">
                        {store.logo 
                        ? <img src={store.logo} alt='' className='logo'/>
                        :'logo'
                        }
                    </label>
                    <input 
                        id ='logo'
                        type ="file" 
                        className="hidden" 
                        rows="3"
                        onChange={e => uploadImage(e.target.files,'logo')}
                    />
                </div>
                <div className='col-8'>
                    <input 
                        type="text" 
                        className="input" 
                        placeholder="Nombre"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
            </div>

           <div className="mb-3">
                <label for="image" className="container-img">
                {store.img 
                    ? <img src={store.img} alt='' className='img'/>
                    :'image'
                }
                </label>
                <input 
                    id= 'image'
                    type ="file" 
                    className="hidden" 
                    rows="3"
                    onChange={e => uploadImage(e.target.files,'image')}
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control" 
                    placeholder="Descripción"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
                    
            </div>  
            <div className="mb-3 ">
           
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Ubicación'
                    onChange={e => setLocation(e.target.value)}
                    value={location}/>
            </div>
            <div className="mb-3">
               
                <input 
                    type ="email" 
                    className="form-control" 
                    rows="3"
                    placeholder='Website'
                    onChange={e => setWebsite(e.target.value)}
                    value={website}
                    />
            </div>

            <div className="mb-3 ">
                
                <p>Datos Bancarios</p>
                <div className='mb-1'>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder='Banco'
                        onChange={e => setBank(e.target.value)}
                        value={bank}
                        />       
                </div>
                <div className='mb-1'>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder='R.I.F'
                        onChange={e => setRif(e.target.value)}
                        value={rif}
                        />
                </div>
    
                <div>
                    
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder='N. Cuenta'
                            onChange={e => setAccount(e.target.value)}
                            value={account} 
                            />       
                </div>
                  
                
                
            </div>  
            <div className="mb-3 w-25" >
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
                    Registrarme
                </Button>
            </div> 
             

            
          
	    </div>
    )
}


