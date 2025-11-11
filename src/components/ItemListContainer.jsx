import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import ItemList from './ItemList'; 
import { getProducts } from '../data/products';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 

    useEffect(() => {
        setLoading(true);
        
        getProducts(categoryId)
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error("Error al cargar productos:", error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, [categoryId]); 

    return (
        <main className="item-list-container">
            <h1 className="greeting-message">
                {greeting} {categoryId ? `(${categoryId.toUpperCase()})` : "Completo"}
            </h1>
            
            {loading ? (
                <p className="placeholder-text">Cargando productos...</p>
            ) : products.length > 0 ? (
                <ItemList products={products} /> 
            ) : (
                <p className="placeholder-text">No hay productos disponibles en esta categoría.</p>
            )}
        </main>
    );
};

export default ItemListContainer;