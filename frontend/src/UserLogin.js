import React, { useState } from 'react';
import './UserLogin.css';
import { FaArrowLeft } from 'react-icons/fa';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Aquí iría la llamada a tu API
      console.log('Iniciando sesión con:', username, password);
      // Si hay éxito, redireccionar
      // window.location.href = '/dashboard';
    } catch (err) {
      setError('Credenciales incorrectas. Por favor intente nuevamente.');
    }
  };

  return (
    <div className="login-page">
      <nav className="top-navbar">
        <div className="navbar-brand">Mi Condominio</div>
        <div className="navbar-links">
          <a href="/">Inicio</a>
          <a href="/contactos">Contactos</a>
          <a href="/login" className="active">Login</a>
        </div>
      </nav>

      <div className="login-container">
        <div className="login-card">
          <div className="card-left">
            <button className="back-button">
              <FaArrowLeft />
            </button>
            
            <h2 className="login-title">Login to system</h2>
            
            <p className="login-subtitle">
              Please enter your login information
              <br />or <a href="/register" className="register-link">click here</a> to registration
            </p>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />
              </div>
              
              <div className="input-group">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              
              <div className="remember-option">
                <label className="checkbox-container">
                  <input 
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <span className="checkbox-custom"></span>
                  Remember me
                </label>
              </div>
              
              <button type="submit" className="login-button">
                Log In
              </button>
            </form>
          </div>
          
          <div className="card-right">
            {/* Lado derecho con gradiente */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;