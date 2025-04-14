import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import { FaHome, FaFileInvoiceDollar, FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa';

function UserDashboard() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [userInfo, setUserInfo] = useState({
    nombre: 'Juan Pérez',
    apartamento: 'A-303',
    ultimoPago: '15/03/2023',
    saldoPendiente: '$120.000'
  });
  
  const [notificaciones, setNotificaciones] = useState([
    {
      id: 1,
      titulo: 'Mantenimiento de ascensores',
      fecha: '12/04/2023',
      descripcion: 'Se realizará mantenimiento de los ascensores el día 15 de abril de 8:00 AM a 12:00 PM.'
    },
    {
      id: 2,
      titulo: 'Asamblea general de residentes',
      fecha: '05/04/2023',
      descripcion: 'Se convoca a todos los residentes a la asamblea general el día 20 de abril a las 7:00 PM en el salón comunal.'
    },
    {
      id: 3,
      titulo: 'Pago de administración',
      fecha: '01/04/2023',
      descripcion: 'Recordamos a todos los residentes que el pago de la administración debe realizarse antes del día 10 de cada mes.'
    }
  ]);
  
  // Simulación de carga de datos
  useEffect(() => {
    // Aquí normalmente harías una llamada a la API
    console.log('Cargando datos del dashboard...');
  }, []);
  
  // Renderizar la sección activa
  const renderSection = () => {
    switch(activeSection) {
      case 'pagos':
        return (
          <div className="dashboard-section">
            <h2>Historial de Pagos</h2>
            <div className="payment-summary-card">
              <div className="payment-header">
                <h3>Resumen de Pagos</h3>
              </div>
              <div className="payment-details">
                <div className="payment-info">
                  <span className="label">Último pago:</span>
                  <span className="value">{userInfo.ultimoPago}</span>
                </div>
                <div className="payment-info">
                  <span className="label">Saldo pendiente:</span>
                  <span className="value highlight">{userInfo.saldoPendiente}</span>
                </div>
              </div>
            </div>
            
            <div className="payment-history">
              <h3>Movimientos Recientes</h3>
              <table className="payments-table">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Concepto</th>
                    <th>Monto</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15/03/2023</td>
                    <td>Administración Marzo</td>
                    <td>$150.000</td>
                    <td><span className="status paid">Pagado</span></td>
                  </tr>
                  <tr>
                    <td>15/02/2023</td>
                    <td>Administración Febrero</td>
                    <td>$150.000</td>
                    <td><span className="status paid">Pagado</span></td>
                  </tr>
                  <tr>
                    <td>15/01/2023</td>
                    <td>Administración Enero</td>
                    <td>$150.000</td>
                    <td><span className="status paid">Pagado</span></td>
                  </tr>
                  <tr>
                    <td>10/04/2023</td>
                    <td>Cuota extraordinaria</td>
                    <td>$120.000</td>
                    <td><span className="status pending">Pendiente</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      
      case 'avisos':
        return (
          <div className="dashboard-section">
            <h2>Avisos y Notificaciones</h2>
            
            <div className="notifications-container">
              {notificaciones.map(notificacion => (
                <div key={notificacion.id} className="notification-card">
                  <div className="notification-header">
                    <h3>{notificacion.titulo}</h3>
                    <span className="notification-date">{notificacion.fecha}</span>
                  </div>
                  <p className="notification-content">
                    {notificacion.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'perfil':
        return (
          <div className="dashboard-section">
            <h2>Mi Perfil</h2>
            
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-avatar">
                  <FaUser size={40} />
                </div>
                <h3>{userInfo.nombre}</h3>
                <p>Apartamento {userInfo.apartamento}</p>
              </div>
              
              <div className="profile-details">
                <div className="profile-info-row">
                  <span className="label">Correo electrónico:</span>
                  <span className="value">juanperez@email.com</span>
                </div>
                <div className="profile-info-row">
                  <span className="label">Teléfono:</span>
                  <span className="value">+57 300 123 4567</span>
                </div>
                <div className="profile-info-row">
                  <span className="label">Miembros de familia:</span>
                  <span className="value">3</span>
                </div>
              </div>
              
              <div className="profile-actions">
                <button className="edit-btn">Editar Perfil</button>
                <button className="change-password-btn">Cambiar Contraseña</button>
              </div>
            </div>
          </div>
        );
        
      default: // Inicio
        return (
          <div className="dashboard-section">
            <h2>Bienvenido, {userInfo.nombre}</h2>
            
            <div className="dashboard-cards">
              <div className="info-card">
                <div className="card-icon">
                  <FaHome />
                </div>
                <div className="card-content">
                  <h3>Apartamento</h3>
                  <p>{userInfo.apartamento}</p>
                </div>
              </div>
              
              <div className="info-card payments">
                <div className="card-icon">
                  <FaFileInvoiceDollar />
                </div>
                <div className="card-content">
                  <h3>Saldo Pendiente</h3>
                  <p>{userInfo.saldoPendiente}</p>
                </div>
              </div>
              
              <div className="info-card notices">
                <div className="card-icon">
                  <FaBell />
                </div>
                <div className="card-content">
                  <h3>Avisos Nuevos</h3>
                  <p>{notificaciones.length}</p>
                </div>
              </div>
            </div>
            
            <div className="recent-notices">
              <h3>Avisos Recientes</h3>
              <div className="notices-preview">
                {notificaciones.slice(0, 2).map(notificacion => (
                  <div key={notificacion.id} className="notice-item">
                    <h4>{notificacion.titulo}</h4>
                    <span className="notice-date">{notificacion.fecha}</span>
                    <p>{notificacion.descripcion.substring(0, 100)}...</p>
                    <button className="read-more" onClick={() => setActiveSection('avisos')}>
                      Leer más
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };
  
  return (
    <div className="user-dashboard-container">
      <div 
        className="building-background" 
        style={{ backgroundImage: `url('/images/edificio.png')` }}
      ></div>
      
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>Mi Condominio</h2>
        </div>
        <ul className="sidebar-menu">
          <li className={activeSection === 'inicio' ? 'active' : ''} onClick={() => setActiveSection('inicio')}>
            <FaHome /> Inicio
          </li>
          <li className={activeSection === 'pagos' ? 'active' : ''} onClick={() => setActiveSection('pagos')}>
            <FaFileInvoiceDollar /> Pagos
          </li>
          <li className={activeSection === 'avisos' ? 'active' : ''} onClick={() => setActiveSection('avisos')}>
            <FaBell /> Avisos
          </li>
          <li className={activeSection === 'perfil' ? 'active' : ''} onClick={() => setActiveSection('perfil')}>
            <FaUser /> Mi Perfil
          </li>
        </ul>
        <div className="sidebar-footer">
          <button className="logout-btn">
            <FaSignOutAlt /> Cerrar Sesión
          </button>
        </div>
      </div>
      
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
          <div className="user-info">
            <span>{userInfo.nombre}</span>
            <div className="user-avatar">
              <FaUser />
            </div>
          </div>
        </div>
        
        <div className="dashboard-content">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;