import React from 'react'
import { Container, Row, Col,Button} from 'react-bootstrap';
  import { useNavigate } from 'react-router-dom';

const Funcionalidades = () => {
    const navigate = useNavigate();
  return (
    <section id="funcionalidades" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Funcionalidades do PetTalk</h2>
        <Row>
          <Col md={4} className="mb-4">
            <div className="feature-card d-flex flex-column align-items-center justify-content-between p-4" style={{ height: '100%' }}>
              <i className="bi bi-translate" style={{ fontSize: '3rem', color: '#007bff' }}></i>
              <h3 className="mt-3">Tradução de Sons</h3>
              <p className="text-center">
                Entenda o que seu pet está tentando comunicar com a tradução precisa dos seus sons, seja um latido, miado, rosnado ou outros.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="feature-card d-flex flex-column align-items-center justify-content-between p-4" style={{ height: '100%' }}>
              <i className="bi bi-gear" style={{ fontSize: '3rem', color: '#007bff' }}></i>
              <h3 className="mt-3">Integração com Dispositivos Inteligentes</h3>
              <p className="text-center">
                Conecte o PetTalk ao seu dispositivo Alexa ou Google Home para interagir de forma ainda mais inteligente com seu pet.
              </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="feature-card d-flex flex-column align-items-center justify-content-between p-4" style={{ height: '100%' }}>
              <i className="bi bi-chat-dots" style={{ fontSize: '3rem', color: '#007bff' }}></i>
              <h3 className="mt-3">Comunique-se com seu Pet</h3>
              <p className="text-center">
                Comunique-se de maneira mais eficiente, sabendo exatamente o que seu pet precisa ou está tentando expressar.
              </p>
            </div>
          </Col>
        </Row>
        <div className="text-center mt-4">
                    <Button variant="info" className="btn btn-primary rounded-pill cta-btn"  onClick={() => navigate('/Planos')}>Para Planos</Button>
                  </div>
      </Container>
    </section>
  )
}

export default Funcionalidades;