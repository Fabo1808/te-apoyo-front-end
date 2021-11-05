import React from 'react'
import Card from 'react-bootstrap/Card'
import img4 from '../../../../images/card1.jpg'
import './styles.css'


export function CardTutorial() {

    return (
  
<div className="CardTutorialSteps" style={{width: '21rem'}}>
  <img className="card-img-top" src={img4} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
</div>


)
  }




