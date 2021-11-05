import React from 'react'
import Card from 'react-bootstrap/Card'
import img4 from '../../../../images/card1.jpg'
import './styles.css'


export function Cards() {

    return (
    
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={img4} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


)
  }
