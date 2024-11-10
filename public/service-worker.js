const CACHE_NAME = 'vue-pwa-v2'; // Nombre único para el cache
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/styles.css', // Incluye los archivos que necesitas en tu PWA
  '/assets/js/main.js',
  '/icons/icon-192x192.png', // También los íconos necesarios
  '/icons/icon-512x512.png'
];

// Instalar el service worker y cachear los archivos esenciales
self.addEventListener('install', (event) => {
  console.log('Service Worker: Instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Archivos cacheados durante la instalación');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar el service worker y eliminar cachés antiguos
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activado');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Eliminando cache antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Controlar las solicitudes de fetch, sirviendo los recursos desde el cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si el recurso está en cache, devolverlo
        return response || fetch(event.request);
      })
  );
});
