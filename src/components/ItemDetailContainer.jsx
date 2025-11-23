import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item, onAddToCart }) => {
    if (!item) return null;

    const [quantityAdded, setQuantityAdded] = useState(0);

    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'USD',
    }).format(item.price);

    return (
        <div className="item-detail-view">
            <div className="item-detail-content">
                <h2>{item.name}</h2>
                <p className="detail-description">{item.description}</p>
                <p className="detail-price">{formattedPrice}</p>
                <p className="detail-stock">Stock disponible: {item.stock}</p>
                
                {quantityAdded > 0 ? (
                    <Link to="/cart" className="go-to-cart-button">Terminar Compra</Link>
                ) : (
                    <ItemCount 
                        initial={1} 
                        stock={item.stock} 
                        onAdd={(quantity) => {
                            onAddToCart(quantity);
                            setQuantityAdded(quantity);
                        }} 
                    />
                )}
            </div>
        </div>
    );
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); 
    const { addItem } = useContext(CartContext);

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

    const handleOnAdd = (quantity) => {
        addItem(item, quantity);
    };

    return (
        <main className="item-detail-container">
            {loading ? (
                <p className="placeholder-text">Cargando detalle del producto...</p>
            ) : item ? (
                <ItemDetail item={item} onAddToCart={handleOnAdd} />
            ) : (
                <p className="placeholder-text">Producto no encontrado.</p>
            )}
        </main>
    );
};

export default ItemDetailContainer;