import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';

createApp(App).mount('#app');

// Verificar si estamos en producción
if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    // Usar un nombre único para el service worker
    const swUrl = '/nueva-app/service-worker.js';  // Asegúrate de que esta ruta sea única


    // Verifica si ya hay un service worker registrado
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        if (registration.active && registration.active.scriptURL.includes('service-worker.js')) {
          // Si ya está registrado, no hacer nada
          console.log('Service Worker ya registrado');
        } else {
          // Si no está registrado, registra el nuevo service worker
          navigator.serviceWorker.register(swUrl).then((registration) => {
            console.log('Service Worker registrado con éxito:', registration);
          }).catch((error) => {
            console.log('Error al registrar el Service Worker:', error);
          });
        }
      });
    });
  }
}
