/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
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
    "url": "images/icons/favicon-16x16.png",
    "revision": "7871324525ad162cf32078a4b77dd3fc"
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
    "url": "libs/material.min.css",
    "revision": "9ab85b48144d24908b4e455c2afb648c"
  },
  {
    "url": "manifest.json",
    "revision": "296b2a146da2c89f0cc852516d9c7a3f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
