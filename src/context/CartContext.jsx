import React, { useState, createContext } from 'react';

// Crea el contexto
export const CartContext = createContext();

// Componente Provider
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    /**
     * Agrega un item al carrito. Si ya existe, actualiza la cantidad.
     */
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            // Si ya está, actualiza la cantidad
            setCart(cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                }
                return prod;
            }));
        } else {
            // Si no está, lo agrega
            setCart([...cart, { ...item, quantity }]);
        }
    };

    /**
     * Remueve un item del carrito.
     */
    const removeItem = (itemId) => {
        setCart(cart.filter(prod => prod.id !== itemId));
    };

    /**
     * Limpia todo el carrito.
     */
    const clearCart = () => {
        setCart([]);
    };

    /**
     * Verifica si un item ya está en el carrito.
     */
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    // Calcula el total de items en el carrito
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ 
            cart, 
            addItem, 
            removeItem, 
            clearCart,
            totalQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
};