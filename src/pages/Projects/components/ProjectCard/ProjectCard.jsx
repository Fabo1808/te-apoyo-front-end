import React from 'react'
import img from '../../../../images/homeimage2.jpg'
import './styles.css'


export function ProjectCard() {

    return (

<div class="ProjectList">
  <div class="row">
    <div class="col-4">
    <img  className='w-75 rounded-3' src={img} alt="falta seleccionar imagen" />
    </div>
    <div class="col-5">
        <div class="NameProjectCard">
            <strong>FUNDANA</strong>
        </div>
        <div class="DescriptionProjectCard">
            <p1>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quisquam nesciunt velit illo temporibus illum vitae aperiam, qui at veniam recusandae voluptatum eum quod doloremque. Dolorem eveniet quod officia minima.
            </p1>
        </div>
        <div class="GoToProject">
        <button type="button" class="btn btn-primary">Ver Perfil</button>
        </div>
    </div>

  </div>
</div>

)
  }