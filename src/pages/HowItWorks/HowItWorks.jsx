import React from 'react';
import CarTutorialUI from './CardTutorialUI.jsx'
import img1 from '../../images/7.png'
import img2 from '../../images/8.png'

export function HowItWorks() {
    const donar='QUIERO DONAR'
    const donar2= 'Si tienes algo que quieras dar'

    return (
        <div className = "container d-flex justify-content-center">
            <div className="row my-5 ">
                <div className="col-6 ">
                    <CarTutorialUI 
                    img={img1} 
                    d={'QUIERO DONAR'} 
                    d2={'Si tienes algo que quieras dar'}
                    i1={'Escoge una organización'}
                    i2={'Presiona el botón "Donar"'}
                    i3={'Envía el comprobante por correo'}

                    />
                </div>
                <div className="col-6 ">
                <CarTutorialUI 
                    img={img2} 
                    d={'QUIERO SER VOLUNTARIO'} 
                    d2={'Si deseas ayudar en una jornada'}
                    i1={'Escoge una organización'}
                    i2={'Selecciona un evento'}
                    i3={'Completa el formulario'}

                    />
                </div>

            </div>

      
      </div>
        
            
	    
    )
}