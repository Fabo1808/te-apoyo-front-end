import React from 'react'
import Form from 'react-bootstrap/Form'
import './styles.css'


export function ContactForm() {

    return (
    
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

  <button variant="primary" type="submit">
    Enviar
  </button>
</Form>
 

)
  }
