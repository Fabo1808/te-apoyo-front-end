import React, { useContext}from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../store/appContext'

const VolunteersList = () => {
    const {store, actions }= useContext(Context)
    const {activity_id} = useParams()
    const activity = store.activities.filter((activity)=>activity.id == activity_id)
    
    
    return (
        <div className ='container mt-5'>
            <h1>  Lista  de Voluntarios</h1>
         <h3> Evento: {activity[0].activity_name} </h3>
            
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Teléfono</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
      {activity[0].volunteers.map((voluntary, index)=>(
            <tr key= {voluntary.id}>
            <th scope="row">{index + 1}</th>
            <td>{voluntary.name}</td>
            <td>{voluntary.lastName}</td>
            <td>{voluntary.phone}</td>
            <td>{voluntary.email}</td>

          </tr>

      ))}
  
  </tbody>
</table>


        </div>
    )
}

export default VolunteersList

