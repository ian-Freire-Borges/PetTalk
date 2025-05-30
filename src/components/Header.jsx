import React from 'react';
import Logo from "../assets/9UbGzd-LogoMakr.png"
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link,useLocation } from 'react-router-dom';
import "./Header.css"

function Header() {
    const location = useLocation(); // usado para saber qual e a URL para adicionar estilo de borda
  return (
    <>
      {/* barra de navegaçao do header */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
         <Navbar.Brand as={Link} to="/" className="d-flex align-items-center me-5">
  <img
    src={Logo}
    alt="PetTalk Logo"
    width="80"
    height="80"
    className="d-inline-block align-top me-2"
  />
  <span className="fw-bold text-light">PetTalk</span>
</Navbar.Brand>

          {/* buttom de amburgue para telas bequenas*/}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* liks de navegaçao com reat router dom*/}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/"
              className={location.pathname === "/" ? "active" : ""}>Início</Nav.Link>
              <Nav.Link as={Link} to="/Planos"
               className={location.pathname === "/Planos" ? "active" : ""}>Planos</Nav.Link>
              <Nav.Link as={Link} to="/Depoimentos"
               className={location.pathname === "/Depoimentos" ? "active" : ""}>Depoimentos</Nav.Link>
               <Nav.Link as={Link} to="/Funcionalidades"
               className={location.pathname === "/Funcionalidades" ? "active" : ""}>Funcionalidades</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;