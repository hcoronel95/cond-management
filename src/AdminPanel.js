import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Image, Alert } from 'react-bootstrap';
import './AdminPanel.css';

function AdminPanel() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      const response = await axios.post('http://localhost:5000/register', { username, password, role });
      setSuccessMessage(response.data.message);
      setUsername('');
      setPassword('');
      setRole('User');

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); 
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response) {
        setError(error.response.data.message); 
      } else {
        setError('An unexpected error occurred.'); 
      }
    }
  };

  return (
    <Container fluid className="admin-panel-container">
      <Row className="h-100">
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Image src="/assets/edificio.jpg" alt="Edificio" fluid className="admin-image" /> 
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div className="form-container">
            <h2>Create New User</h2>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>} 
            <Form onSubmit={handleCreateUser}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Control as="select" value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Create User
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPanel;
