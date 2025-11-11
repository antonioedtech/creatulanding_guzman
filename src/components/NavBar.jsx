import React, { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget'; // Importación la carpeta 'components'

/**
 * Componente principal de la barra de navegación.
 * Contiene el logo, los enlaces de navegación y el CartWidget.
 */
const NavBar = () => {
    const [cartItemCount, setCartItemCount] = useState(4); 
    
    // Categorías para el menú:
    const categories = [
        { id: 1, name: "Todos", route: "/" },
        { id: 2, name: "Websites", route: "/category/websites" },
        { id: 3, name: "Marketing", route: "/category/marketing" },
        { id: 4, name: "Branding", route: "/category/branding" },
    ];

    return (
        // Utilizamos la etiqueta <nav> para la barra de navegación.
        <nav className="nav-bar">
            {/* Logo o nombre de la tienda */}
            <div className="logo">
                <a href="/">Mi Agencia Digital</a>
            </div>

            {/* Enlaces de navegación */}
            <ul className="nav-links">
                {categories.map(cat => (
                    <li key={cat.id}>
                        {/* NavLink se usa para añadir un estilo 'activo' automáticamente si la ruta coincide */}
                        <NavLink 
                            to={cat.route} 
                            className={({ isActive }) => isActive && cat.route !== '/' ? 'active-link' : ''}
                        >
                            {cat.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* CartWidget renderizado como componente hijo de NavBar. */}
            <div className="nav-widget">
                <CartWidget itemCount={cartItemCount}/>
            </div>
        </nav>
    );
};

export default NavBar;