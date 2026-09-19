// Service worker — mise en cache pour un fonctionnement hors-ligne.
// Incrémenter CACHE_VERSION à chaque mise à jour de contenu notable
// pour forcer le rafraîchissement du cache chez les utilisateurs.
const CACHE_VERSION = "v2";
const CACHE_NAME = "habilitation-elec-" + CACHE_VERSION;

const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico",
  "/icons/favicon-16.png",
  "/icons/favicon-32.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-192.png",
  "/icons/icon-maskable-512.png",
  "/img/quiz-banner.png",
  "/B0/fiche.html", "/B0/memo.html", "/B0/quiz.html",
  "/H0/fiche.html", "/H0/memo.html", "/H0/quiz.html",
  "/BS/fiche.html", "/BS/memo.html", "/BS/quiz.html",
  "/B1/fiche.html", "/B1/memo.html", "/B1/quiz.html",
  "/B2/fiche.html", "/B2/memo.html", "/B2/quiz.html",
  "/BC-BR/fiche.html", "/BC-BR/memo.html", "/BC-BR/quiz.html"
];

self.addEventListener("install", function(event){
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(PRECACHE_URLS).catch(function(err){
        // Ne bloque pas l'installation si une ressource manque (chemin d'hébergement différent, etc.)
        console.warn("Précache partielle :", err);
      });
    })
  );
});

self.addEventListener("activate", function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(key){ return key.indexOf("habilitation-elec-") === 0 && key !== CACHE_NAME; })
            .map(function(key){ return caches.delete(key); })
      );
    }).then(function(){ return self.clients.claim(); })
  );
});

// Stratégie : réseau d'abord (contenu à jour si en ligne), repli sur le cache si hors-ligne.
self.addEventListener("fetch", function(event){
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then(function(response){
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function(cache){ cache.put(event.request, copy); });
        return response;
      })
      .catch(function(){
        return caches.match(event.request).then(function(cached){
          return cached || caches.match("/index.html");
        });
      })
  );
});
