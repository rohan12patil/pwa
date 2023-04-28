
const dataCacheName = 'pwa-data-v1';
const cacheName = 'cache-v5';
const filesToCache = [
  '/',
  '/index.html',
  'images/pwa-fast.png',
  'images/pwa-engaging.png',
  'libs/material.min.css',
  'libs/material.min.js',
  'videos/video1.mp4',
  'videos/video2.mp4',
];



self.addEventListener('install', function(e) {
  self.skipWaiting();
  console.log('2.Install::  [ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('3.Instal::  [ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache).then((result)=>{
        console.log('cache Result',result);
      });
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
