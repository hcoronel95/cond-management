import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'; // Importa el archivo CSS

function NavigationBar({ user, onLogout }) {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Condominio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/contactos">Contactos</Nav.Link>
          </Nav>
          <Nav>
            {!user && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            {user && user.role === 'Admin' && (
              <Nav.Link as={Link} to="/admin/create-user">Admin</Nav.Link>
            )}
            {user && (
              <Button variant="outline-light" onClick={onLogout} className="nav-button">Logout</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
