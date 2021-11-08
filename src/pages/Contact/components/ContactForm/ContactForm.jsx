import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './styles.css'
import img from '../../../../images/homeimage2.jpg'


export function ContactForm() {

    return (
    <div className='container'>
      <div className='row mt-5 container'>
        <div className="col-6 text-secondary text-start">
          <h1 className=''>Contáctanos</h1>
          <div className='w-50'>
          <p>Llena este formulario para poder contactarte y ver cómo podermos trabajar juntos</p>
          </div>

          <img  className='w-75 rounded-3' src={img} alt="falta seleccionar imagen" />
        </div>
        <div className="col-6">
            <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="name" placeholder="Nombre" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Control type="lastname" placeholder="Apellido" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Correo" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control type="phone" placeholder="Teléfono" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={4} placeholder="Mensaje" />
        </Form.Group>

     
      <div className="d-grid">
        <Button variant="primary" size="lg">
          Enviar
        </Button>
      </div>
    </Form>
 
        </div>
      </div>
   

    </div>


)
  }
