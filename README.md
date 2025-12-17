# 🛒  E-commerce Básico con React JS

Este proyecto es la implementación de un **E-commerce Frontend** completo, desarrollado en el contexto del curso de **React JS** de CoderHouse. El proyecto abarca desde la navegación y muestra de productos hasta la finalización de una compra con persistencia de datos.

## 🚀 Funcionalidades Implementadas

A lo largo del proyecto se han implementado diversas funcionalidades clave para un E-commerce moderno:

* **Ruteo Avanzado:** Implementación de **React Router DOM** para la navegación fluida entre vistas principales y dinámicas.
* **Vistas Dinámicas:**
    * **Catálogo Principal:** `/`
    * **Filtrado por Categoría:** `/category/:categoryId` (Un solo componente para múltiples categorías).
    * **Detalle del Ítem:** `/item/:itemId` (Carga información específica de un producto).
* **Manejo de Datos Asíncronos:** Carga de datos en tiempo real desde **Firestore** para el catálogo de productos y detalles, incluyendo indicadores de estado de carga (`loading`).
* **Integración con Firebase:** Conexión con **Firestore** (base de datos NoSQL en la nube) para obtener los productos y gestionar las órdenes de compra, reemplazando los datos mockeados.
* **Carrito de Compras (`CartContext`):** Gestión del estado del carrito de compras a través de `Context API` de React, permitiendo agregar, eliminar y vaciar productos de forma global en la aplicación.
* **Proceso de Checkout:** Formulario para la captura de datos del comprador y generación de una **orden de compra** que se almacena en Firestore.
* **Arquitectura Modular:** Clara división entre **Componentes Contenedores** (`ItemListContainer`, `ItemDetailContainer`) encargados de la lógica de negocio y **Componentes de Presentación** (`Item`, `ItemList`) encargados del *layout* y los estilos.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
| :--- | :--- |
| **React JS** | Librería principal para la construcción de la interfaz de usuario y manejo del estado. |
| **Vite** | Herramienta de *build* y servidor de desarrollo rápido. |
| **React Router DOM** | Gestión de navegación y rutas dinámicas. |
| **Firebase (Firestore)** | Base de datos NoSQL para la persistencia de productos y órdenes de compra. |
| **CSS (App.css)** | Estilizado global y por componentes. |
| **Variables de Entorno (.env)** | Para la gestión segura de las credenciales de Firebase. |
| **JavaScript (ES6+)** | Lógica de negocio y manejo de Promises. |

---

## 🚀 Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clonar el Repositorio**
    ```bash
    git clone https://github.com/antonioedtech/coderhouse-react-js.git
    cd coderhouse-react-js
    ```

2.  **Instalar Dependencias**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno**
    Este proyecto utiliza variables de entorno para gestionar las credenciales de Firebase.
    *   Crea una copia del archivo `.env.example` en la raíz del proyecto.
    *   Renombra la copia a `.env`.
    *   Abre el nuevo archivo `.env` y reemplaza los valores de ejemplo con tus propias credenciales de Firebase.

4.  **Ejecutar el Proyecto**
    Una vez configurado, puedes iniciar el servidor de desarrollo:
    ```bash
    npm run dev
    ```

---

Autor
Antonio Eduardo Guzmán Luque

LinkedIn: https://www.linkedin.com/in/tonyguzman/

GitHub: https://github.com/antonioedtech