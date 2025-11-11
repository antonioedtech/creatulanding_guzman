import React from 'react';
import Item from './Item'; // Componente Presentacional

const ItemList = ({ products }) => {
    return (
        <div className="item-list-grid">
            {/* Uso de Array.map() y la prop "key" */}
            {products.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemList;