export const products = [
    { id: 1, name: "Diseño Web Corporativo", description: "Landing page optimizada para SEO.", price: 450, category: "websites", stock: 10 },
    { id: 2, name: "Campaña de Ads (Meta)", description: "Gestión de publicidad en Facebook e Instagram.", price: 600, category: "marketing", stock: 5 },
    { id: 3, name: "Identidad Visual Premium", description: "Diseño de logo, paleta y guía de marca.", price: 300, category: "branding", stock: 8 },
    { id: 4, name: "Auditoría de SEO", description: "Análisis completo de la arquitectura web.", price: 200, category: "marketing", stock: 12 },
    { id: 5, name: "E-commerce con React", description: "Tienda online con carrito y checkout.", price: 950, category: "websites", stock: 3 },
];

/**
 * Función que simula un llamado a una API (Promise).
 * @param {string | undefined} categoryId - Categoría opcional para filtrar.
 * @returns {Promise<Array>} - Una promesa que resuelve el listado de productos.
 */
export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (categoryId) {
                const filteredProducts = products.filter(
                    (prod) => prod.category === categoryId
                );
                resolve(filteredProducts);
            } else {
                // Devuelve todos los productos
                resolve(products);
            }
        }, 1000); // Retardo de 1 segundo
    });
};

/**
 * Función que simula la búsqueda de un solo producto.
 * @param {number} id - ID del producto a buscar.
 * @returns {Promise<Object | undefined>} - Devuelve el producto encontrado.
 */
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find((prod) => prod.id === id);
            resolve(product);
        }, 1000); // Retardo de 1 segundo
    });
};