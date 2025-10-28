import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importa componente App
import './index.css'; // Importa estilos globales

// Punto de entrada de la aplicación React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renderiza el componente App */}
  </React.StrictMode>,
);