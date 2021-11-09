import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';
import img6 from '../../images/logo1.png'
import './styles.css'

export function NavBar() {
  
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
                            <NavLink className='navlinkright' to="/signIn">Iniciar sesión</NavLink>
                            <NavLink className='navlinkright' to="/signUp">
                                <button type="button" className="btn btn-outline-primary">Registrar Mi ONG</button>
                            </NavLink>
                            
                        </div>
                    </div>
                </div>
                
        );
}


