import React from 'react';
import { Link } from 'react-router-dom'; // Necesario para la navegación

const Item = ({ product }) => {
    // Formateo simple del precio
    const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'USD',
    }).format(product.price);

    return (
        // Envolvemos la tarjeta en el Link
        <div className="product-card">
            <h3>{product.name}</h3>
            <p className="category-tag">Categoría: {product.category}</p>
            <p className="product-price">{formattedPrice}</p>
            
            {/* Enlace a la vista en detalle usando el ID del producto */}
            <Link to={`/item/${product.id}`} className="detail-button">
                Ver Detalle
            </Link>
        </div>
    );
};

export default Item;