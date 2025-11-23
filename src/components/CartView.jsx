import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartView = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);

    // Calcular el total
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Formateador de moneda
    const formatCurrency = (value) => new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'USD',
    }).format(value);

    if (cart.length === 0) {
        return (
            <div className="cart-view-empty">
                <h1>Tu carrito está vacío</h1>
                <p>No has agregado productos todavía.</p>
                <Link to="/" className="detail-button">Ir al Catálogo</Link>
            </div>
        );
    }

    return (
        <div className="cart-view-container">
            <h1>Resumen de tu Compra</h1>
            <div className="cart-items-list">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-info">
                            <h3>{item.name}</h3>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio Unitario: {formatCurrency(item.price)}</p>
                            <p>Subtotal: {formatCurrency(item.price * item.quantity)}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="remove-item-btn">
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h2>Total de la Compra: {formatCurrency(total)}</h2>
                <div className="cart-actions">
                    <button onClick={clearCart} className="clear-cart-btn">
                        Vaciar Carrito
                    </button>
                    <Link to="/checkout" className="checkout-btn detail-button">
                        Finalizar Compra
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartView;