import React from 'react';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard({ user}) {
  return (
    <div className="admin-dashboard">
   
      <Container fluid>
        <Row>
          <Col md={3} className="sidebar">
            <h5>Menú</h5>
            <ButtonGroup vertical className="w-100">
              <Button as={Link} to="/dashboard" variant="outline-primary" className="text-left custom-button">
                Dashboard
              </Button>
              <Button as={Link} to="/alicuotas" variant="outline-primary" className="text-left custom-button">
                Alicuotas
              </Button>
              <Button as={Link} to="/ingreso-visitas" variant="outline-primary" className="text-left custom-button">
                Ingreso Visitas
              </Button>
              <Button as={Link} to="/comunicado" variant="outline-primary" className="text-left custom-button">
                Comunicado
              </Button>
              <Button as={Link} to="/admin/create-user" variant="outline-primary" className="text-left custom-button">
                Crear Nuevo Usuario
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={9} className="content">
            <h2>Bienvenido, {user.username}!</h2>
            {/* Contenido del dashboard del administrador */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;
