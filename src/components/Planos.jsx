import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Planos() {
  const planos = [
    {
      nome: "PetTalk Mini",
      preco: "R$ 349,00/mês",
      descricao: "Plano básico com tradução dos sons e comportamentos do seu pet.",
      features: ["Tradução básica de sons", "Acesso mensal", "Suporte básico"],
    },
    {
      nome: "PetTalk Plus",
      preco: "R$ 499,00/mês",
      descricao: "Plano avançado com integração Alexa/Google Home e tradução avançada de sons.",
      features: ["Tradução avançada de sons", "Integração com Alexa/Google Home", "Acesso mensal", "Suporte premium"],
    },
  ];

    const wattCall = (planoNome) => {
    const telefone = "5571999842598"; 
    const mensagem = `Olá, eu gostaria de saber mais sobre o plano ${planoNome}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="planos" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Escolha o Plano Ideal para Você e Seu Pet</h2>
        <Row>
          {planos.map((plano, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="text-center shadow-sm" style={{ minHeight: '400px' }}>
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h3">{plano.nome}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{plano.preco}</Card.Subtitle>
                  <Card.Text>{plano.descricao}</Card.Text>
                  <ul className="list-unstyled">
                    {plano.features.map((feature, index) => (
                      <li key={index} className="d-flex align-items-center mb-2">
                        <i className="bi bi-check-circle text-success me-2" style={{ fontSize: '1.2rem' }}></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="info" className="mt-auto btn btn-primary rounded-pill cta-btn" onClick={()=>wattCall(plano.nome) }>Assinar Agora</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Planos;
