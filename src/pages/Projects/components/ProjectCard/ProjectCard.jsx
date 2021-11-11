import React from 'react'
import img from '../../../../images/homeimage2.jpg'
import './styles.css'
import { Link } from 'react-router-dom'


export function ProjectCard({ong}) {

    return (

<div class="ProjectList ">
  <div class="row">
    <div class="col-4">
    <img  className='w-75 rounded-3' src={ong.logo} alt="falta seleccionar imagen" />
    </div>
    <div class="col-5">
        <div class="NameProjectCard">
            <strong>{ong.ong_name}</strong>
        </div>
        <div class="DescriptionProjectCard">
            <p>
                {ong.description}
            </p>
           

        </div>
        <div class="GoToProject">
        <Link 
          to={`profile/${ong.id}`} 
          class="btn btn-primary"
        >
          Ver Perfil
        </Link>
        </div>
    </div>

  </div>
</div>

)
  }