import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../../../images/homeimage1.jpg'
import img2 from '../../../../images/homeimage2.jpg'
import img3 from '../../../../images/homeimage3.jpg'
import './styles.css'

export function MainImage() {

    return (
      <Carousel >
      <Carousel.Item className = 'MainImage'>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className = 'MainImage'>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className = 'MainImage'>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
    
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

)
  }