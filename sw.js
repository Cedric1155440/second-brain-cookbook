// Offline-Modus: App-Dateien werden beim ersten Öffnen gespeichert.
// Nach Änderungen an der App die Versionsnummer erhöhen, damit iPhones das Update laden.
const CACHE = "kochbuch-v4";
const LANG_FILES = ["en", "fr", "es", "it", "pt", "tr"].map(l => `./lang/${l}.js`);
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png", ...LANG_FILES];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // App-Seite: erst Netz (für Updates), sonst gespeicherte Version
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }
  // Alles andere (Icons, Schriften): gespeicherte Version, sonst Netz und merken
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && (url.origin === location.origin || url.host.includes("fonts."))) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }))
  );
});
