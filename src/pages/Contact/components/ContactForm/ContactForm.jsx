import React,{useState,useContext}from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './styles.css'
import img from '../../../../images/logo1.png'
import { Context } from '../../../../store/appContext'
import { useHistory } from 'react-router-dom'

export function ContactForm() {
  const {store,actions}= useContext(Context)
   const [name, setName] = useState(undefined)
   const [lastName, setLastName] = useState(undefined)
   const [email, setEmail] = useState(undefined)
   const [message, setMessage] = useState(undefined)
   const [phone, setPhone] = useState(undefined)
   const history= useHistory();
   const fecha = new Date();
   const day = fecha.getDate();
   const year = fecha.getFullYear();
   const month = fecha.getMonth() + 1; 

 const handleClick = async()=>{
   let data = {
     name:name,
     lastName:lastName,
     phone:phone,
     email:email,
     message:message,
     date:`${day}/${month}/${year}`
   }
    const query = await fetch(`${store.url_api}/contact`,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
     const response = await query.json()
    if (query.ok){
      alert(response.message)
      history.push('/')
    } else alert(response.message)
     
 }



    return (
    <div className='container'>
      <div className='row mt-5 container'>
        <div className="col-6  text-start">
          <h1 className=''>Contáctanos</h1>
          <div className='w-75'>
          <p className='fs-4'>Llena este formulario para poder contactarte y ver cómo podermos trabajar juntos</p>
          </div>

          <img  className='w-50 rounded-3' src={img} alt="falta seleccionar imagen" />
        </div>
        <div className="col-6 mt-5">
            <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="name" placeholder="Nombre" onChange={(e)=>setName(e.target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Control type="lastname" placeholder="Apellido" onChange={(e)=>setLastName(e.target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Correo"  onChange={(e)=>setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control type="phone" placeholder="Teléfono"  onChange={(e)=>setPhone(e.target.value)}/>
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={4} placeholder="Mensaje"  onChange={(e)=>setMessage(e.target.value)}/>
        </Form.Group>

     
      <div className="d-grid">
        <Button variant="primary" size="lg" onClick={handleClick}>
          Enviar
        </Button>
      </div>
    </Form>
 
        </div>
      </div>
   

    </div>


)
  }
