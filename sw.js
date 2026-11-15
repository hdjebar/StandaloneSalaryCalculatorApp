// Service worker du calculateur de paie luxembourgeois.
// Rôle unique : garder une copie locale des fichiers de l'application pour l'usage hors ligne.
// Aucune ressource externe n'est mise en cache ni demandée : toutes les URL sont relatives
// au dossier de l'application (compatible avec un hébergement en sous-dossier).
const CACHE_NAME = 'lux-payroll-v3.5.0';
const APP_FILES = [
  './',
  './index.html',
  './calc.js',
  './params/params.js',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))
    )
  );
  self.clients.claim();
});

// On ne sert que les requêtes vers l'origine de l'application ; tout le reste est ignoré.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cached) => cached || fetch(event.request))
  );
});
