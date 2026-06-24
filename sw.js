// A simple Service Worker to satisfy PWA install requirements
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // This empty fetch handler is required by Chrome to trigger the install prompt
});
