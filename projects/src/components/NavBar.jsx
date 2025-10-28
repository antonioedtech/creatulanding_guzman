import React from 'react';
import CartWidget from './CartWidget'; // Importación la carpeta 'components'

/**
 * Componente principal de la barra de navegación.
 * Contiene el logo, los enlaces de navegación y el CartWidget.
 */
const NavBar = () => {
    return (
        // Utilizamos la etiqueta <nav> para la barra de navegación.
        <nav className="nav-bar">
            {/* Logo o nombre de la tienda */}
            <div className="logo">
                <a href="/">Mi Agencia Digital</a>
            </div>

            {/* Enlaces de navegación */}
            <ul className="nav-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#portafolio">Portafolio</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>

            {/* 🎯 CartWidget renderizado como componente hijo de NavBar. */}
            <div className="nav-widget">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;