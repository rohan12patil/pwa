importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);


workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );


workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );

} else {
  console.log(`! Workbox didn't load 😬`);
}


self.addEventListener('fetch',(event)=>{
  
  if(event.request.url === '/'){
    const staleWhileRevalidate = new workbox.strategies.StaleWhileRevalidate();
    event.respondWith(staleWhileRevalidate.handle({event}));
  }
});





/*
const dataCacheName = 'pwa-data-v1';
const cacheName = 'cache-v5';
const filesToCache = [
  '/',
  '/index.html',
  'images/pwa-fast.png',
  'libs/material.min.css',
  'libs/material.min.js'
];



self.addEventListener('install', function(e) {
  self.skipWaiting();
  console.log('2.Install::  [ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('3.Instal::  [ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});



self.addEventListener('activate', function(e) {
  console.log('4. Activate:: [ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('5. Activate:: [ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    }
    ));
  return self.clients.claim();
});



// Cache First Strategy
self.addEventListener('fetch',(event)=>{
  console.log('6. FETCH:: [ServiceWorker] Fetch');
  event.respondWith(caches.match(event.request)
    .then(cachedResponse =>{
      return cachedResponse || fetch(event.request)
    })
  );

});
*/