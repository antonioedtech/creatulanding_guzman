import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 1. Obtenemos el elemento raíz del DOM
const rootElement = document.getElementById('root');

// 2. Creamos el "root" de React y renderizamos la aplicación principal
ReactDOM.createRoot(rootElement).render(
    <App />
);