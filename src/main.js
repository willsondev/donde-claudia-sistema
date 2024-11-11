// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import { Workbox } from 'workbox-window';

const app = createApp(App);
app.mount('#app');

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('Evento beforeinstallprompt disparado');
  event.preventDefault();
  deferredPrompt = event;

  const installButton = document.getElementById('install-button');
  if (installButton) {
    installButton.style.display = 'block';
    console.log('Botón de instalación mostrado');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const installButton = document.getElementById('install-button');
  if (installButton) {
    installButton.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const choiceResult = await deferredPrompt.userChoice;
        console.log(`El usuario ${choiceResult.outcome === 'accepted' ? 'aceptó' : 'rechazó'} la instalación`);
        deferredPrompt = null;
        installButton.style.display = 'none';
      } else {
        console.log('No se encontró deferredPrompt');
      }
    });
  }
});

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');
  wb.register()
    .then((registration) => {
      console.log('Service Worker registrado con éxito:', registration);
    })
    .catch((error) => {
      console.log('Error al registrar el Service Worker:', error);
    });
}
