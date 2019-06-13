importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "images/icons/android-chrome-512x512 copy 2.png",
    "revision": "df24b04bca37ad8b841f539fe9768679"
  },
  {
    "url": "images/icons/android-chrome-512x512 copy.png",
    "revision": "df24b04bca37ad8b841f539fe9768679"
  },
  {
    "url": "images/icons/android-chrome-512x512.png",
    "revision": "df24b04bca37ad8b841f539fe9768679"
  },
  {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "d3ad148090110cc8fd052f41ece13965"
  },
  {
    "url": "images/icons/browserconfig.xml",
    "revision": "a493ba0aa0b8ec8068d786d7248bb92c"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "7871324525ad162cf32078a4b77dd3fc"
  },
  {
    "url": "images/icons/favicon.ico",
    "revision": "ff4fd85bf04a843ffa9991be93c72d16"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "5e6e111148b44918a3807135439eceae"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "e13f386e811ca541971f72176bed306a"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "2a27e2ab23472833da1d8d5432ba6842"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "1f9721bbcbe653c7410747cf60ae3379"
  },
  {
    "url": "images/icons/icon-256x256.png",
    "revision": "626ad08320fc59cde82d3726a88b6fb9"
  },
  {
    "url": "images/icons/icon-32x32.png",
    "revision": "64f8fa3c52fa2a99087796fcdc731e4a"
  },
  {
    "url": "images/icons/mstile-144x144.png",
    "revision": "bd097b3c549de2d064a991d87250515d"
  },
  {
    "url": "images/icons/mstile-150x150.png",
    "revision": "6ce7c906db957f0503cfea2ca49b602e"
  },
  {
    "url": "images/icons/mstile-310x150.png",
    "revision": "5cda2a3f086619067cffabdebfac05fe"
  },
  {
    "url": "images/icons/mstile-310x310.png",
    "revision": "647372ed4b481e7d6666e198f42e3566"
  },
  {
    "url": "images/icons/mstile-70x70.png",
    "revision": "54a24722ae2530986a1bd049e17c50ec"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "cfa1f7d9b94ff6ea41c2b7a2a442268e"
  },
  {
    "url": "images/pwa-fast.png",
    "revision": "1bc1a9c609d778ea1a80893986e21b53"
  },
  {
    "url": "index.html",
    "revision": "b681315496cb413d42f439397ba0f021"
  },
  {
    "url": "libs/material.min.css",
    "revision": "9ab85b48144d24908b4e455c2afb648c"
  },
  {
    "url": "libs/material.min.js",
    "revision": "713af0c6ce93dbbce2f00bf0a98d0541"
  },
  {
    "url": "main.js",
    "revision": "c3b343ed9f9255aa838c32e35bc7a528"
  },
  {
    "url": "manifest.json",
    "revision": "296b2a146da2c89f0cc852516d9c7a3f"
  }
]);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );