
const dataCacheName = 'pwa-data-v1';
const cacheName = 'cache-v4';
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






//Update & replace cache files
/*
self.addEventListener('activate',(event)=>{
  console.log('4. Activate:: [ServiceWorker] Activate');
})
*/

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

