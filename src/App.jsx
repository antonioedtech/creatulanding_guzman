import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

const NotFound = () => <div style={{ textAlign: 'center', padding: '50px' }}>
    <h1>404 | Página No Encontrada</h1>
    <p>La ruta a la que intentaste acceder no existe.</p>
</div>;

function App() {
    return (
        // Envolvemos toda la aplicación en el BrowserRouter
        <BrowserRouter>
            <div className="App">
                <NavBar />
                
                {/* Definimos el conjunto de rutas */}
                <Routes>
                    {/* 1. Catálogo Principal */}
                    <Route path="/" element={<ItemListContainer greeting={"Catálogo Principal"} />} />
                    
                    {/* 2. Catálogo Filtrado por Categoría (Ruta Dinámica) */}
                    <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos Filtrados"} />} />
                    
                    {/* 3. Vista en Detalle del Producto (Ruta Dinámica) */}
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    
                    {/* 4. Ruta 404 para errores de navegación */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;