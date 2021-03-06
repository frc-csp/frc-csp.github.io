//This is the service worker with the Cache-first network

var CACHE = 'pwabuilder-precache';
var precacheFiles = [
  '/',
  '/index.html',
  '/scripts/index.js',
  '/css/index.css',
  '/match-scouting.html',
  '/scripts/match-scouting.js',
  '/pit-scouting.html',
  '/css/side-menu.css',
  '/scripts/side-menu.js',
  '/images/menu.png',
  '/images/di_logo.png',
  '/images/projectb_logo.png',
  '/images/frc_blue_field.png',
  '/images/frc_red_field.png',
  '/images/blue_cargo_ship.png',
  '/images/blue_levels.png',
  '/images/red_levels.png',
  '/scripts/scoutAuth.js',
  '/manifest.json',
  '/scripts/pwa/manup.min.js',
  '/scripts/pwa/pwabuilder-sw.js',
  '/scripts/pwa/pwabuilder-sw-register.js'
];

//Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', function(evt) {
  console.log('[PWA Builder] The service worker is being installed.');
  evt.waitUntil(precache().then(function() {
    console.log('[PWA Builder] Skip waiting on install');
    return self.skipWaiting();
  }));
});


//allow sw to control of current page
self.addEventListener('activate', function(event) {
  console.log('[PWA Builder] Claiming clients for current page');
  return event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(evt) {
  console.log('[PWA Builder] The service worker is serving the asset.'+ evt.request.url);
  evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
  evt.waitUntil(update(evt.request));
});


function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll(precacheFiles);
  });
}

function fromCache(request) {
  //we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  //this is where we call the server to get the newest version of the 
  //file to use the next time we show view
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

function fromServer(request){
  //this is the fallback if it is not in the cache to go to the server and get it
  return fetch(request).then(function(response){ return response });
}
