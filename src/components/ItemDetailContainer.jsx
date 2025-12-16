import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
// Importaciones de Firestore para un solo documento
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config'; // Instancia de la base de datos

// Componente Presentacional (estructura mínima para detalle)
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
            
            {/* Se incluye el componente contador (ItemCount) en la siguiente entrega */}
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
        
        // Crea referencia a un documento específico en la colección 'products'
        const itemRef = doc(db, 'products', itemId); 
        
        // Ejecuta la consulta asíncrona para obtener un solo documento
        getDoc(itemRef)
            .then(docSnapshot => {
                if (docSnapshot.exists()) {
                    // Si el documento existe, lo mapeamos
                    setItem({ id: docSnapshot.id, ...docSnapshot.data() });
                } else {
                    // El documento no existe (ej: ID mal escrito)
                    setItem(null);
                }
            })
            .catch(error => {
                console.error("Error al cargar detalle desde Firestore:", error);
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
                <p className="placeholder-text">Producto no encontrado o ID inválido.</p>
            )}
        </main>
    );
};

export default ItemDetailContainer;