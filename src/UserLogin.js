import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Image, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';

function UserLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      onLogin(response.data.user);
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <Container className="login-container">
      <Row>
        <Col md={6} className="d-flex align-items-center">
          <Form onSubmit={handleSubmit} className="w-100">
            <h2>Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Col>
        <Col md={6} className="d-none d-md-block">
          <Image src="/assets/edificio.jpg" alt="Edificio" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default UserLogin;
