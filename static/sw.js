// Self-unregistering service worker.
// Replaces the previous gatsby-plugin-offline service worker. On activate,
// silently clears its caches and unregisters itself — no client.navigate /
// reload, so users don't see a forced refresh. The current page may serve
// from cache one last time; the next visit is clean.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
      .then(() => self.registration.unregister())
  );
});
