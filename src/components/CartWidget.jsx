import React from 'react';

/**
 * Componente funcional para el widget del carrito de compras.
 * Muestra un icono de carrito y un contador de ítems.
 */
const CartWidget = () => {
    // Ícono y número de ítems
    const cartIcon = "🛒"; 
    const itemCount = 3; 

    return (
        <div className="cart-widget">
            {/* Uso className 'cart-icon' para aplicar estilos desde App.css */}
            <span className="cart-icon" role="img" aria-label="shopping cart">
                {cartIcon}
            </span>
            {/* El contador. */}
            <span className="item-count">
                {itemCount}
            </span>
        </div>
    );
};

export default CartWidget;