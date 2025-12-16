# 🛒  E-commerce Básico con React JS

Este proyecto es la implementación de un **E-commerce Frontend** desarrollado en el contexto del curso de **React JS** de CoderHouse, diseñado para demostrar habilidades en el manejo de componentes, ruteo avanzado, y gestión de estado asíncrono.

## 🚀 Funcionalidades Implementadas (Segunda Entrega)

El objetivo principal de este proyecto ha sido establecer una arquitectura escalable de componentes y la funcionalidad de **navegación dinámica**.

* **Ruteo Avanzado:** Implementación de **React Router DOM** para la navegación fluida entre vistas principales y dinámicas.
* **Vistas Dinámicas:**
    * **Catálogo Principal:** `/`
    * **Filtrado por Categoría:** `/category/:categoryId` (Un solo componente para múltiples categorías).
    * **Detalle del Ítem:** `/item/:itemId` (Carga información específica de un producto).
* **Manejo de Datos Asíncronos:** Simulación de peticiones a una API (backend) utilizando **Promises** y `setTimeout` para cargar el listado y el detalle de los productos, incluyendo estados de carga (`loading`).
* **Arquitectura Modular:** Clara división entre **Componentes Contenedores** (`ItemListContainer`, `ItemDetailContainer`) encargados de la lógica de negocio y **Componentes de Presentación** (`Item`, `ItemList`) encargados del *layout* y los estilos.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
| :--- | :--- |
| **React JS** | Librería principal para la construcción de la interfaz de usuario. |
| **Vite** | Herramienta de *build* y servidor de desarrollo rápido. |
| **React Router DOM** | Gestión de navegación y rutas dinámicas. |
| **CSS Modules (o App.css)** | Estilizado modular de los componentes. |
| **JavaScript (ES6+)** | Lógica de negocio y manejo de Promises. |

---

Autor
Antonio Eduardo Guzmán Luque

LinkedIn: https://www.linkedin.com/in/tonyguzman/

GitHub: https://github.com/antonioedtech