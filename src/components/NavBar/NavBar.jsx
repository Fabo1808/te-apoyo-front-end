import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';
import img4 from '../../images/logo1.jpg'
import './styles.css'

export function NavBar() {
  
      return (
        <>
            <Navbar className='navbar'>
            <Container>
            <img className="LogoPrincipal" src={img4} alt="Card image cap"/>
            <Nav className="me-auto">
                <NavLink className='navlink' to="/"></NavLink>
                <NavLink className='navlink' to="/about">Conócenos</NavLink>
                <NavLink className='navlink' to="/howItWorks">Cómo Funciona</NavLink>
                <NavLink className='navlink' to="/projects">Proyectos</NavLink>
                <NavLink className='navlink' to="/contact">Contáctanos</NavLink>
                <NavLink className='navlink' to="/signIn">Iniciar sesión</NavLink>
                <NavLink className='navlink' to="/signUp">Registrar Mi ONG</NavLink>
                
                
            </Nav>
            </Container>
            </Navbar>
        </>
        );
}
