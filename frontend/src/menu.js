import React from 'react';

function Menu({ onLogout }) {
  return (
    <div className="menu">
      <button onClick={onLogout}>Logout</button>
      {/* Aquí puedes agregar más elementos del menú */}
    </div>
  );
}

export default Menu;
