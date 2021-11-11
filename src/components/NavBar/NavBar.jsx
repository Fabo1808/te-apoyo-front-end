import React,{useContext} from "react";
import { Link, NavLink,useHistory } from "react-router-dom";
import img6 from '../../images/logo1.png'
import './styles.css'
import { Context } from "../../store/appContext";

export function NavBar() {
    const {store,actions}=useContext(Context)
    const history= useHistory()

    const singOff= ()=>{
        actions.deleteToken()
        history.push('/')
    }
  
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-8">
                    <NavLink className='navlink' to="/">
                        <img className="LogoPrincipal" src={img6} alt="Card image cap"/>    
                    </NavLink>
                    <NavLink className='navlink' to="/about">Conócenos</NavLink>
                    <NavLink className='navlink' to="/howItWorks">Cómo Funciona</NavLink>
                    <NavLink className='navlink' to="/projects">Proyectos</NavLink>
                    <NavLink className='navlink' to="/contact">Contáctanos</NavLink>
                </div>
                <div className="col-4">
                    {!store.token && (
                        <>
                        <NavLink className='navlinkright' to="/signIn">Iniciar sesión</NavLink>
                        <NavLink className='navlinkright' to="/signUp">
                            <button type="button" className="btn btn-outline-primary">Registrar Mi ONG</button>
                        </NavLink>
                        </>
                    
                    )}

                    {store.token && (
                        <>
                        <button 
                            type="button" 
                            className="btn btn-outline-primary" 
                            onClick={singOff}>Cerrar sesión
                        </button>
                        <Link
                            to='/createEvent'
                            className="btn btn-primary mx-2" 
                        >Crear un Evento
                        </Link>

                        
                        </>
                    )}
                        
                        
                    
                </div>
                {store.token && (
                        <>
                        <h5 className='text-start mx-5'> 
                           Bienvenido(a)  {store.ONG}
                        </h5>
                        
                        
                        </>
                    )}
                        
            </div>
        </div>
            
    );
}


