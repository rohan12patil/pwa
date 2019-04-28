
const dataCacheName = 'pwa-data-v1';
const cacheName = 'cache-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/images/pwa-fast.png'
];




self.addEventListener('install', function(e) {
  console.log('2.Install::  [ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('3.Instal::  [ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});






//Update & replace cache files
self.addEventListener('activate',(event)=>{
  console.log('4. Activate:: [ServiceWorker] Activate');
})


// self.addEventListener('activate', function(e) {
//   console.log('4. Activate:: [ServiceWorker] Activate');
//   e.waitUntil(
//     caches.keys().then(function(keyList) {
//       return Promise.all(keyList.map(function(key) {
//         if (key !== cacheName && key !== dataCacheName) {
//           console.log('5. Activate:: [ServiceWorker] Removing old cache', key);
//           return caches.delete(key);
//         }
//       }));
//     }
//     ));
//   return self.clients.claim();
// });



// Cache First Strategy
self.addEventListener('fetch',(event)=>{
  console.log('6. FETCH:: [ServiceWorker] Fetch');
  event.respondWith(caches.match(event.request)
    .then(cachedResponse =>{
      return cachedResponse || fetch(event.request)
    })
  );

});




/*
self.addEventListener('fetch', function(e) {
  console.log('6.  [Service Worker] Fetch', e.request.url);
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});

*/
