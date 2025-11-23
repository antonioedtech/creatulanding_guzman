import React, { useState } from 'react';

/**
 * Componente contador para seleccionar la cantidad de un producto.
 * @param {number} stock - Stock máximo disponible.
 * @param {number} initial - Cantidad inicial (por defecto 1).
 * @param {function} onAdd - Función que se ejecuta al agregar al carrito.
 */
const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="item-count-container">
            <div className="controls">
                <button onClick={decrement} className="control-btn">-</button>
                <h4 className="quantity-display">{quantity}</h4>
                <button onClick={increment} className="control-btn">+</button>
            </div>
            <button className="add-to-cart-button" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;