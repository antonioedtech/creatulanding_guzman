import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList'; // Componente Presentacional
// Importaciones de Firestore
import { collection, getDocs, query, where } from 'firebase/firestore'; 
import { db } from '../firebase/config'; // Instancia de la base de datos

// Componente Contenedor para lista de ítems
const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 

    useEffect(() => {
        setLoading(true);
        
        // Referencia a la colección 'products'
        const productsRef = collection(db, 'products');

        // Define la consulta base (Query)
        const q = categoryId 
            // Agregamos un filtro 'where' para categoryId
            ? query(productsRef, where('category', '==', categoryId)) 
            // Si no existe, trae toda la colección
            : productsRef; 

        // Ejecuta la consulta asíncrona (Promise)
        getDocs(q)
            .then(snapshot => {
                // Mapea los documentos de Firestore al formato de React
                const productsData = snapshot.docs.map(doc => ({
                    // El ID del producto ahora es el ID del documento de Firestore
                    id: doc.id, 
                    ...doc.data() // El resto de los datos del documento
                }));
                setProducts(productsData);
            })
            .catch(error => {
                console.error("Error al cargar productos desde Firestore:", error);
            })
            .finally(() => {
                setLoading(false);
            });

    // Dependencia categoryId asegura que la consulta se rehaga al cambiar de ruta
    }, [categoryId]); 

    return (
        <main className="item-list-container">
            <h1 className="greeting-message">
                {greeting} {categoryId ? `(${categoryId.toUpperCase()})` : "Completo"}
            </h1>
            
            {loading ? (
                <p className="placeholder-text">Cargando productos desde la nube...</p>
            ) : products.length > 0 ? (
                <ItemList products={products} /> 
            ) : (
                <p className="placeholder-text">No hay productos disponibles en esta categoría.</p>
            )}
        </main>
    );
};

export default ItemListContainer;