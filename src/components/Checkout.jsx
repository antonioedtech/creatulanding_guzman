import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Importaciones de Firestore
import { collection, addDoc, serverTimestamp, writeBatch, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    // Hooks y Context
    const { cart, total, clearCart } = useContext(CartContext);
    const navigate = useNavigate();
    
    // Estado para el formulario del comprador
    const [buyer, setBuyer] = useState({ name: '', phone: '', email: '' });
    const [orderId, setOrderId] = useState(null); // Para mostrar el ID de orden
    const [orderTotal, setOrderTotal] = useState(0); // 1. Estado para guardar el total de la orden

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };

    // Función principal para generar la orden
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Recalcular el total en el momento de la sumisión para asegurar consistencia
        const finalOrderTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

        // Construir la Orden
        const newOrder = {
            buyer, // { name, phone, email }
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            })),
            total: finalOrderTotal, // Usar el total recalculado
            date: serverTimestamp(), // Fecha de Firestore
        };

        try {
            // Iniciar un Lote de Escritura (Batch)
            const batch = writeBatch(db);
            const ordersRef = collection(db, 'orders');

            // Array para verificar el stock
            const outOfStock = [];

            // Por cada item en el carrito, verificar y actualizar stock
            for (const item of cart) {
                const productRef = doc(db, 'products', item.id);
                const productDoc = await getDoc(productRef);

                if (productDoc.data().stock >= item.quantity) {
                    // Si hay stock, restar la cantidad y añadir la operación al batch
                    batch.update(productRef, {
                        stock: productDoc.data().stock - item.quantity
                    });
                } else {
                    // Si no hay stock, añadir al array de fuera de stock
                    outOfStock.push(item);
                }
            }

            if (outOfStock.length > 0) {
                // Si hay productos sin stock, no continuar y avisar al usuario
                alert(`Lo sentimos, no hay stock suficiente para: ${outOfStock.map(i => i.name).join(', ')}`);
                return; // Detener la ejecución
            }

            // Añadir la creación de la nueva orden al batch
            const orderDocRef = doc(ordersRef); // Crea una referencia con un ID automático
            batch.set(orderDocRef, newOrder);
            
            // Ejecutar todas las operaciones del batch
            await batch.commit();

            // Éxito: Guardar el ID de orden y vaciar carrito
            setOrderId(orderDocRef.id);
            setOrderTotal(finalOrderTotal); // 4. Guardar el total en el estado local
            clearCart(); // Vaciar el carrito después de la compra
        } catch (error) {
            console.error("Error al generar la orden: ", error);
            alert("Hubo un error al procesar tu orden. Por favor, inténtalo de nuevo.");
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
                <p className="order-total">
                    **Monto Total:** **${orderTotal}**
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
        <div className="checkout-page">
            {/* Sección 1: Resumen de la Compra */}
            <div className="checkout-summary">
                <h2 className="section-title">Resumen de tu Compra</h2>
                {cart.map(item => (
                    <div key={item.id} className="summary-item">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>${item.price * item.quantity}</span>
                    </div>
                ))}
                <p className="summary-total">Total a Pagar: ${total}</p>
            </div>
            
            {/* Sección 2: Formulario de Contacto */}
            <form onSubmit={handleSubmit} className="checkout-form">
                <h2 className="section-title">Datos de Contacto</h2>
                <input className="form-input" type="text" name="name" placeholder="Nombre Completo" onChange={handleChange} value={buyer.name} required />
                <input className="form-input" type="tel" name="phone" placeholder="Teléfono" onChange={handleChange} value={buyer.phone} required />
                <input className="form-input" type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} value={buyer.email} required />
                
                <button type="submit" className="submit-order-btn" disabled={!buyer.name || !buyer.email}>
                    Generar Orden de Compra
                </button>
            </form>
        </div>
    );
};

export default Checkout;