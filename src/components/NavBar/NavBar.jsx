import React,{useContext} from "react";
import { Link,NavLink, useHistory } from "react-router-dom";
import img6 from '../../images/logo1.png';
import { Context } from "../../store/appContext";
import './styles.css'

export function NavBar() {
    const {store,actions}=useContext(Context)
    const history= useHistory();

const singOff= ()=>{
    actions.deleteToken()
    history.push('/')

}
  
      return (
                <div className="container-fluid-navbar shadow-lg">
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
                                <button 
                                    className='Iniciar-Sesion-ONG' 
                                    onClick={()=>actions.onOffSignin()}
                                >
                                Mi ONG
                                </button>
                                <NavLink className='navlinkright' to="/signUp">
                                    <button type="button" className="btn btn-outline-primary">Registrar Mi ONG</button>
                                </NavLink>
                                </>

                            )}

                            {store.token && (
                                <>
                                <button
                                    type="button"
                                    className="Iniciar-Sesion-ONG mx-2"
                                    onClick={singOff}>Cerrar sesión
                                </button>
                                <button
                                    className="btn btn-primary mx-2"
                                    onClick={()=> actions.modalEvent()}
                                >Crear un Evento
                                </button>


                                </>
                            )}



                        </div>
                        {/* {store.token && (
                            <>
                            <h5 className='text-start mx-5'>
                                Bienvenido(a) {store.ONG}
                            </h5>


                            </>
                        )} */}

                </div>
            </div>

        );
}

