import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img10 from '../../../../images/3.png'
import img11 from '../../../../images/5.png'
import img12 from '../../../../images/1.png'
import './styles.css'

export function MainImage() {

    return (
      <Carousel >
      <Carousel.Item className = 'MainImage'>
        <img
          className="d-block w-100"
          src={img10}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Promoción y sensibilización</h3>
          <p>Generación de cambios relacionados con los derechos humanos.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className = 'MainImage'>
        <img
          className="d-block w-100"
          src={img11}
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3>Ayuda humanitaria y de emergencia</h3>
          <p>Cobertura de necesidades básicas de personas en riesgo de pobreza o exclusión social.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className = 'MainImage'>
        <img
          className="d-block w-100"
          src={img12}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Acción social</h3>
          <p>Iniciativas sin ánimo de lucro que surgen en el seno de las comunidades.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

)
  }