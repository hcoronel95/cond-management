import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import UserLogin from './UserLogin';
import AdminPanel from './AdminPanel';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import NavigationBar from './navbar';
import Home from './Home';
import Contactos from './Contactos';
import './App.css'; // Importa el archivo CSS para la app

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="App">
      <NavigationBar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={!user ? <UserLogin onLogin={handleLogin} /> : <Navigate to="/dashboard" replace />} />
        <Route path="/admin/create-user" element={user && user.role === 'Admin' ? <AdminPanel /> : <Navigate to="/login" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route
          path="/dashboard"
          element={user ? (
            user.role === 'Admin' ? <AdminDashboard user={user} onLogout={handleLogout} /> : <UserDashboard user={user} onLogout={handleLogout} />
          ) : <Navigate to="/login" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
