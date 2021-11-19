import React from 'react'
import img9 from '../../../../images/help-image-transp.png'
import './styles.css'



export function MainConcept() {

    return (

<div className="ContainerConcept container-fluid">
    <div className="row ">
        <div className="col-6 ">
            <div className="container">
                <div className='section'>
                    <div ClassName='title-section'>
                        <h3><u>QUIÉNES SOMOS</u></h3>
                    </div>
                    <div className="fs-5">
                        <p >1000 Voluntades es una Asociación Civil sin fines de lucro que busca canalizar todos los impulsos solidarios en acciones concretas. Por medio de esta plataforma buscamos conectar personas que están dispuestas a ayudar con aquellos que realmente lo necesitan.</p>
                    </div>
                </div>
                <div className="section">
                    <div ClassName='title-section'>
                        <h3><u>EL EQUIPO</u></h3>
                    </div>
                    <div className="fs-5">
                        <p>Está formado por un conjunto de jóvenes de variadas profesiones con vocación solidaria y experiencia en el campo social. Cada uno desde su área aplica sus habilidades para poder llevar a cabo este proyecto. Los que formamos parte de 1000 Voluntades creemos que se puede hacer algo para cambiar la realidad en la que vivimos. Estamos convencidos que todos los que somos conscientes de esta realidad y tenemos las herramientas para generar un cambio somos responsables de que ese cambio se haga realidad.</p>
                    </div>     
                </div>
                <div className="section">
                    <div ClassName='title-section'>
                        <h3><u>MISIÓN</u></h3>
                    </div>
                    <div className="fs-5">
                        <p>Ser intermediarios entre las necesidades de organizaciones expertas en ayudar, y personas con capacidad y voluntad de cubrirlas. Promover conciencia social y compromiso en la comunidad, teniendo como último fin el desarrollo integral de las personas más necesitadas.</p>
                    </div>
                </div>
                <div className="section">
                    <div ClassName='title-section'>   
                        <h3><u>VISIÓN</u></h3>
                    </div>
                    <div className="fs-5">
                        <p>Ser un sitio de referencia para quien quiere ayudar y para las organizaciones que necesitan ayuda, brindando un servicio simple y práctico.
                        </p>
                    </div>
                    </div>

                </div>
            
            </div>
            <div className="col-6">
                <img className="card-main" src={img9} alt="Card image cop"/>
            </div>
        </div>
    </div>
)}
