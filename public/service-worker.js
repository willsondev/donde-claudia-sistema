// Nombre de la versión del cache
const CACHE_NAME = 'my-app-cache-v2';  // Cambia a un nombre único si es necesario

// Archivos que deseas cachear
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/assets/js/main.js',
  // Otros recursos que deseas cachear
];

// Evento de instalación: almacenar los archivos en el cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Archivos cacheados durante la instalación');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de activación: eliminar caches antiguos
self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['v2'];  // Usa un nombre de versión único para tu cache
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);  // Eliminar caches antiguos
          }
        })
      );
    })
  );
});

// Evento de fetch: controlar las solicitudes y servir los archivos desde el cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si el recurso está en cache, devuelve ese recurso
        return response || fetch(event.request);
      })
  );
});
