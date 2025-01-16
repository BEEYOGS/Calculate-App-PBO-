const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/', '/index.html', '/manifest.json', 
  '/style.css', '/main.js', '/app.js', '/icon.png'
];

self.addEventListener('install', (event) =>
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch((error) => console.error('Caching failed:', error))
  )
);

self.addEventListener('fetch', (event) =>
  event.respondWith(
    caches.match(event.request).then(
      (response) => response || fetch(event.request)
    ).catch((error) => console.error('Fetch failed:', error))
  )
);
