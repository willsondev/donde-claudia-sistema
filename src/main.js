// main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';


const app = createApp(App);
app.mount('#app');

let deferredPrompt = null;

// Escuchar el evento beforeinstallprompt para mostrar el botón de instalación
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('Evento beforeinstallprompt disparado');
  // Prevenir que se muestre el banner por defecto
  event.preventDefault();
  deferredPrompt = event;

  const installButton = document.getElementById('install-button');
  if (installButton) {
    installButton.style.display = 'block';
    console.log('Botón de instalación mostrado');
  }
});

// Manejar el clic en el botón de instalación
document.addEventListener('DOMContentLoaded', () => {
  const installButton = document.getElementById('install-button');
  if (installButton) {
    installButton.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt(); // Mostrar el prompt de instalación
        const choiceResult = await deferredPrompt.userChoice;
        console.log(`El usuario ${choiceResult.outcome === 'accepted' ? 'aceptó' : 'rechazó'} la instalación`);
        deferredPrompt = null;
        installButton.style.display = 'none'; // Ocultar el botón después de la acción
      } else {
        console.log('No se encontró deferredPrompt');
      }
    });
  }
});


