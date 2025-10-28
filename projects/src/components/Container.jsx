import React from 'react';

/**
 * Componente Contenedor de la lista de ítems (ItemListContainer).
 * 🎯 Acepta una prop llamada 'greeting' para mostrar un mensaje de bienvenida.
 * * @param {object} props - Propiedades pasadas al componente.
 * @param {string} props.greeting - El mensaje de bienvenida.
 */
// Usamos la desestructuración para acceder a 'greeting' directamente.
const Container = ({ greeting }) => {
    return (
        <main className="item-list-container">
            {/* Mostrar mensaje de bienvenida recibido a través de la prop */}
            <h1 className="greeting-message">
                {greeting}
            </h1>
            
            {/* Placeholder para la futura lista de productos */}
            <p className="placeholder-text">
                Contenedor para el catálogo de productos.
            </p>
        </main>
    );
};

export default Container;