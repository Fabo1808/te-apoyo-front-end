import React,{useContext}from 'react'
import { Context } from '../../../../store/appContext';
import './styles.css'


export function Cards({id}) {
  const {store, actions}=useContext(Context);

  const activity= store.activities.filter((ong)=>ong.id=== id)
  

    return (
    
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={activity[0].image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{activity[0].activity_name}</h5>
    <p className="card-text">{activity[0].description}</p>
    <p className="card-text">{activity[0].date}</p>
    <p className="card-text">cupos:{activity[0].quota - activity[0].volunteers.length}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


)
  }
