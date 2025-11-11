import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../data/products';

const ItemDetail = ({ item }) => {
    if (!item) return null;

    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'USD',
    }).format(item.price);

    return (
        <div className="item-detail-view">
            <h2>{item.name}</h2>
            <p className="detail-description">{item.description}</p>
            <p className="detail-price">{formattedPrice}</p>
            <p className="detail-stock">Stock disponible: {item.stock}</p>
            
            <button className="add-to-cart-button">Añadir al Carrito</button> 
        </div>
    );
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true);

        const numericItemId = parseInt(itemId); 
        
        getProductById(numericItemId)
            .then(data => {
                setItem(data);
            })
            .catch(error => {
                console.error("Error al cargar detalle:", error);
                setItem(null);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [itemId]); 

    return (
        <main className="item-detail-container">
            {loading ? (
                <p className="placeholder-text">Cargando detalle del producto...</p>
            ) : item ? (
                <ItemDetail item={item} />
            ) : (
                <p className="placeholder-text">Producto no encontrado.</p>
            )}
        </main>
    );
};

export default ItemDetailContainer;