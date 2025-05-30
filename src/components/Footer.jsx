import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css"

function Footer() {
  return (
    <footer className="bg-dark text-light py-1 mt-5">
      <Container>
        <Row>
          <Col className="text-md-start text-center">
            <p className="trademark-text">&copy; 2025 PetTalk. Todos os direitos reservados.</p>
          </Col>
          <Col className="text-md-end text-center">
            
            <a href="https://www.linkedin.com/in/ian-borges-796458294/" className="text-light me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"></i></a>.

            <a href="https://www.linkedin.com/in/ian-borges-796458294/" className="text-light me-3" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>

            <a href="https://www.linkedin.com/in/ian-borges-796458294/" className="text-light me-3" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>

          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;