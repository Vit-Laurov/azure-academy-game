// sw.js — v16.2 service worker
// Strategy: network first, cache as fallback. Online you always get the newest files;
// offline (tunnel, roaming, plane) the last good copy is served.
// It only touches files in its own folder, so another app in a sub-folder of the same site is left alone.
const APP_VERSION='16.11';
const CACHE='az-academy-v'+APP_VERSION;
const FONT_CACHE='az-academy-fonts';
const V='?v='+APP_VERSION;
const PRECACHE=[
  './',
  './index.html',
  './manifest.webmanifest',
  './style.css'+V,
  './pixel.css'+V,
  './database.js'+V,
  './save.js'+V,
  './engine.js'+V,
  './loot.js'+V,
  './mastery.js'+V,
  './chestfx.js'+V,
  './fx.js'+V,
  './dailyfact.js'+V,
  './learn.js'+V,
  './bossfight.js'+V,
  './exam.js'+V,
  './practical.js'+V,
  './pixelart.js'+V,
  './app.js'+V,
  './pwa.js'+V,
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];
const BASE=new URL('./',self.location).pathname;

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE)
      .then(c=>c.addAll(PRECACHE))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k.startsWith('az-academy-v')&&k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

function isOwnFile(url){
  if(url.origin!==self.location.origin)return false;
  if(!url.pathname.startsWith(BASE))return false;
  let rest=url.pathname.slice(BASE.length);
  return !rest.includes('/')||rest.startsWith('icons/'); // our folder + icons, never other apps' sub-folders
}
function isFont(url){
  return url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com';
}

self.addEventListener('fetch',event=>{
  let req=event.request;
  if(req.method!=='GET')return;
  let url=new URL(req.url);

  if(isFont(url)){
    // fonts never change: cache first
    event.respondWith(
      caches.open(FONT_CACHE).then(c=>c.match(req).then(hit=>hit||fetch(req).then(res=>{
        if(res.ok||res.type==='opaque')c.put(req,res.clone());
        return res;
      })))
    );
    return;
  }
  if(!isOwnFile(url))return;

  event.respondWith(
    fetch(req).then(res=>{
      if(res.ok){let copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}
      return res;
    }).catch(()=>caches.match(req).then(hit=>{
      if(hit)return hit;
      if(req.mode==='navigate')return caches.match('./index.html');
      return Response.error();
    }))
  );
});
