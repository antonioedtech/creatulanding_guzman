import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa'; // Usaremos un ícono de react-icons

/**
 * Componente para el widget del carrito.
 * Muestra un ícono y la cantidad total de ítems del carrito.
 * Solo es visible si hay al menos un ítem en el carrito.
 */
const CartWidget = () => {
    // Usamos el hook useContext para acceder a los datos del carrito
    const { totalQuantity } = useContext(CartContext);

    return (
        // El widget será un enlace a la futura página del carrito
        // y solo se mostrará si hay productos en él.
        <Link to="/cart" className="cart-widget" style={{ display: totalQuantity > 0 ? 'flex' : 'none' }}>
            <FaShoppingCart />
            <span className="item-count">
                {totalQuantity}
            </span>
        </Link>
    );
};

export default CartWidget;