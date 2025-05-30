import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import slideImg1 from "../assets/alvan-nee-1VgfQdCuX-4-unsplash.jpg"
import slideImg2 from "../assets/alvan-nee-ZCHj_2lJP00-unsplash.jpg"
import slideImg3 from "../assets/flouffy-g2FtlFrc164-unsplash.jpg"
import slideImg4 from "../assets/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg"
import slideImg5 from "../assets/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Inicio.css"

const slides = [ // para as imagen e os texto da pagina de inicio
    {
        image: slideImg1,
        text: "Entenda o que seu pet sente de verdade"
    },
    {
        image: slideImg2,
        text: "A tecnologia que aproxima você do seu melhor amigo"
    },
    {
        image: slideImg3,
        text: "Descubra os sentimentos por trás de cada latido ou miado"
    },
    {
        image: slideImg4,
        text: "Mais do que um dispositivo, uma ponte emocional"
    },
    {
        image: slideImg5,
        text: "Transforme comportamento em conexão e cuidado"
    }
]


function Inicio() {
  const navigate = useNavigate();
    const [index, setIndex] = useState(0);
     const nextSlide = () => {
        if(index==4){
            setIndex(0)
        }else{
    setIndex((prev) => (prev + 1));}
  };
  return (
    <section className="hero py-5">
  <Container>
    <Row className="align-items-center">
      <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
        <h1 className="display-4 fw-bold">Conecte-se com seu pet como nunca antes</h1>
        <p className="lead mt-3">
          O <strong>PetTalk</strong> traduz os sentimentos do seu animal com base em sons e comportamentos.<br />
          Uma experiência única de conexão emocional, diretamente no seu celular.
        </p>
        <Button variant="info" className="btn btn-primary rounded-pill cta-btn"  onClick={() => navigate('/Funcionalidades')}>Descubra mais</Button>
      </Col>
      <Col md={6} className="text-center">
        <div className="slide-box">
          <img id="imgPet" src={slides[index].image} alt="Pet" className="img-fluid rounded mb-3" />
          <p className="fs-5">{slides[index].text}</p>
          <Button id="lideNextB" variant="info" className="btn btn-primary rounded-pill cta-btn" onClick={nextSlide}>➤</Button>
        </div>
      </Col>
    </Row>
  </Container>
</section>
  )
}

export default Inicio