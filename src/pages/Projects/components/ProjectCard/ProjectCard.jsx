import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import img6 from '../../../../images/logo1.png';


export function ProjectCard({ong}) {

  return (
    <div className=" card-h shadow-lg mb-5" >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={ong.logo} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="">
            <h2 className="card-title">{ong.ong_name}</h2>
            <p className="card-text fs-5"> {ong.description}</p>
            <p className="card-text"><small>{ong.activities.length}  Eventos publicados</small></p>
            <Link 
          to={`profile/${ong.id}`} 
          class="btn btn-primary btn-lg"
        >
          Ver Perfil
        </Link>
          </div>
        </div>
      </div>
    </div>




)
  }