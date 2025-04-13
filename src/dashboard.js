import React from 'react';
import Menu from './menu'; // Importación correcta de Menu

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard">
      <Menu onLogout={onLogout} />
      <div className="content">
        <h1>Bienvenido, {user.username}</h1>
        {/* Aquí puedes agregar más componentes o datos personalizados para el usuario */}
      </div>
    </div>
  );
}

export default Dashboard;
