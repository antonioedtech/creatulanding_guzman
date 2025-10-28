import React from 'react';
import NavBar from './components/NavBar';
import Container from './components/Container'; 
// Importar App.css para los estilos
import './App.css'; 

function App() {
    // Definición del string de bienvenida a enviar como prop.
    const welcomeMessage = "Aquí verás tu catálogo.";

    return (
        <div className="App">
            {/* Renderizado del componente de navegación */}
            <NavBar />
            
            {/* Renderizado del componente contenedor */}
            {/* Prop 'greeting' pasada desde App (padre) a Container (hijo) */}
            <Container greeting={welcomeMessage} /> 
        </div>
    );
}

export default App;