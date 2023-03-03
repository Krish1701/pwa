var staticCacheName = "pwa";

self.addEventListener("install", function (e) {
e.waitUntil(
	caches.open(staticCacheName).then(function (cache) {
	return cache.addAll(["/"]);
	})
);
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/worker.js')
      .then((registration) => {
        console.log('Service Worker registration completed with scope: ',
          registration.scope)
      }, (err) => {
        console.log('Service Worker registration failed', err)
      })
    })
  } else {
    console.log('Service Workers not supported')
  }
  navigator.serviceWorker.register('/worker.js', {
    scope: '/notifications/'
  })
  {
    scope: '/notifications'
  }
  self.addEventListener('install', (event) => {
    //...
  });
  self.addEventListener('activate', (event) => {
    //...
  });
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) { //entry found in cache
            return response
          }
          return fetch(event.request)
        }
      )
    )
  })
  navigator.serviceWorker.ready.then((swRegistration) => {
    return swRegistration.sync.register('event1')
  });
  self.addEventListener('sync', (event) => {
    if (event.tag == 'event1') {
      event.waitUntil(doSomething())
    }
  })
  self.addEventListener('push', (event) => {
    console.log('Received a push event', event)
  
    const options = {
      title: 'I got a message for you!',
      body: 'Here is the body of the message',
      icon: '/img/icon-192x192.png',
      tag: 'tag-for-this-notification',
    }
  
    event.waitUntil(
      self.registration.showNotification(title, options)
    )
  })


self.addEventListener("fetch", function (event) {
console.log(event.request.url);

event.respondWith(
	caches.match(event.request).then(function (response) {
	return response || fetch(event.request);
	})
);
});
