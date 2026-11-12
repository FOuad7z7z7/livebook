const C='livebook-v29';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;
 const fresh=r.mode==='navigate'||/\.(html|json|js)(\?|$)/.test(r.url)||r.url.endsWith('/');
 e.respondWith(fetch(r,fresh?{cache:'no-cache'}:{}).then(res=>{if(res.ok&&(r.url.startsWith(self.location.origin)||/cdnjs|jsdelivr|fonts/.test(r.url))){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r)))});
