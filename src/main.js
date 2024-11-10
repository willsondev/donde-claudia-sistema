import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

createApp(App).mount('#app')

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    const swUrl = '/service-worker.js';  // Ruta correcta al service-worker.js

    navigator.serviceWorker.register(swUrl).then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    }).catch((error) => {
      console.log('Error al registrar el Service Worker:', error);
    });
  }
}
