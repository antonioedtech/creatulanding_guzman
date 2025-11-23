import React from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

/**
 * Componente principal de la barra de navegación.
 * Contiene el logo, los enlaces de navegación y el CartWidget.
 */
const NavBar = () => {
    // Categorías para el menú:
    const categories = [
        { id: 1, name: "Todos", route: "/" },
        { id: 2, name: "Websites", route: "/category/websites" },
        { id: 3, name: "Marketing", route: "/category/marketing" },
        { id: 4, name: "Branding", route: "/category/branding" },
    ];

    return (
        <header className="nav-bar">
            {/* Logo o nombre de la tienda */}
            <div className="logo">
                <Link to="/">Mi Agencia Digital</Link>
            </div>

            {/* Enlaces de navegación */}
            <ul className="nav-links">
                {categories.map(cat => (
                    <li key={cat.id}>
                        {/* NavLink se usa para añadir un estilo 'activo' automáticamente si la ruta coincide */}
                        <NavLink 
                            to={cat.route} 
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            {cat.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            
            {/* El CartWidget ahora obtiene los datos del context por sí mismo */}
            <CartWidget />
        </header>
    );
};

export default NavBar;