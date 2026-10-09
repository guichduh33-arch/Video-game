// Service worker: makes Brooklyn Nights 3D and Spider-Man 2 installable and playable offline.
// The game page is fetched network-first (so updates arrive), everything else cache-first.
const CACHE = 'miles3d-v2';
const SHELL = ['./3d.html', './spiderman2.html', './index.html', './manifest.webmanifest', './manifest-sm2.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './models/xbot.glb', 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js', 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/loaders/GLTFLoader.js', 'https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/utils/BufferGeometryUtils.js'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isPage = url.origin === location.origin && (url.pathname.endsWith('.html') || url.pathname.endsWith('/'));
  if (isPage) {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match(url.pathname.includes('spiderman2') ? './spiderman2.html' : './3d.html'))));
  } else {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => { if (res.ok && (url.origin === location.origin || url.hostname === 'cdn.jsdelivr.net')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; })));
  }
});
