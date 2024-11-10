import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

createApp(App).mount('#app')

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    }).catch((error) => {
      console.log('Error al registrar el Service Worker:', error);
    });
  }
}

