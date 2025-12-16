import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Importaciones de Firestore
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    // Hooks y Context
    const { cart, total, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    
    // Estado para el formulario del comprador
    const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
    const [orderId, setOrderId] = useState(null); // Para mostrar el ID de orden

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    // Función principal para generar la orden
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Construir la Orden
        const newOrder = {
            buyer, // { name, phone, email }
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            })),
            total: total, // Tomado del CartContext
            date: serverTimestamp(), // Fecha de Firestore
        };

        try {
            // Guardar la orden en Firestore (colección 'orders')
            const docRef = await addDoc(collection(db, 'orders'), newOrder);
            
            // Éxito: Guardar el ID de orden, vaciar carrito y navegar
            setOrderId(docRef.id);
            clearCart(); // Vaciar el carrito después de la compra
            
        } catch (error) {
            console.error("Error al generar la orden: ", error);
            // Manejar errores de stock o conexión si es necesario
        }
    };

    // Mostrar mensaje de éxito y el ID de orden
    if (orderId) {
        return (
            <div className="checkout-success">
                <h2>¡Gracias por tu compra, {buyer.name}!</h2>
                <p>Tu orden ha sido registrada exitosamente.</p>
                <p className="order-id">
                    **ID de tu Orden:** **{orderId}**
                </p>
                <button onClick={() => navigate('/')}>Volver al Catálogo</button>
            </div>
        );
    }
    
    // Renderizar el formulario si el carrito tiene ítems
    if (cart.length === 0) {
        // Redirigir si el carrito está vacío y no hay ID de orden
        return (
            <div className="empty-cart-checkout">
                <h2>Tu carrito está vacío.</h2>
                <p>Por favor, añade productos para finalizar la compra.</p>
                <button onClick={() => navigate('/')}>Ir a Comprar</button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Finalizar Compra</h2>
            <p>Resumen del Pedido: {cart.length} productos | Total: ${total}</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre Completo"
                    onChange={handleChange}
                    value={buyer.name}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    onChange={handleChange}
                    value={buyer.phone}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    onChange={handleChange}
                    value={buyer.email}
                    required
                />
                
                <button type="submit" disabled={!buyer.name || !buyer.email}>
                    Generar Orden de Compra
                </button>
            </form>
        </div>
    );
};

export default Checkout;