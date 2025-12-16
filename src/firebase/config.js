import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Credenciales de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBim2OKG3z6nGLuOkOf0IsfYGzMHMlePKM",
  authDomain: "react-ecommerce-frontend-app.firebaseapp.com",
  projectId: "react-ecommerce-frontend-app",
  storageBucket: "react-ecommerce-frontend-app.firebasestorage.app",
  messagingSenderId: "18340684656",
  appId: "1:18340684656:web:b802722eb957d907a2a5b5"
};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore que usaremos para todas las consultas
export const db = getFirestore(app);