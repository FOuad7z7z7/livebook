const C='livebook-v9';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
 e.respondWith(fetch(r).then(res=>{if(res.ok&&(r.url.startsWith(self.location.origin)||/cdnjs|jsdelivr|fonts/.test(r.url))){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r)))});
