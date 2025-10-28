// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Forzar el puerto alternativo
    port: 3001, 
    // Forzar la escucha en todas las interfaces de red
    host: '0.0.0.0', 
  },
});