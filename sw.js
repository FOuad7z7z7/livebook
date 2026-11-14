const C='livebook-v43';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
// يجد الملف في الذاكرة (التنزيل أو التصفح السابق)، ويدعم الصوت المقطّع (Range) في سفاري
async function fromCache(r){let m=await caches.match(r,{ignoreVary:true});
 if(!m)m=await caches.match(r.url.split('#')[0],{ignoreSearch:/\.(mp3|png|jpg|svg|json)(\?|$)/.test(r.url),ignoreVary:true});
 if(!m&&r.mode==='navigate')m=(await caches.match('index.html'))||(await caches.match('./'));
 if(!m)return Response.error();
 const rg=r.headers.get('range');
 if(rg&&m.status===200&&m.type!=='opaque'){const b=await m.arrayBuffer(),x=/bytes=(\d*)-(\d*)/.exec(rg)||[];const s=+x[1]||0,e=x[2]?+x[2]:b.byteLength-1;
  return new Response(b.slice(s,e+1),{status:206,headers:{'Content-Type':m.headers.get('Content-Type')||'audio/mpeg','Content-Range':'bytes '+s+'-'+e+'/'+b.byteLength,'Content-Length':String(e-s+1),'Accept-Ranges':'bytes'}})}
 return m}
const save=(r,res)=>{if(res.ok&&res.status===200&&(r.url.startsWith(self.location.origin)||/cdnjs|jsdelivr|fonts/.test(r.url))){const cp=res.clone();caches.open(C).then(c=>c.put(r,cp))}return res};
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||/supabase/.test(r.url))return;
 const fresh=r.mode==='navigate'||/\.(html|json|js)(\?|$)/.test(r.url)||r.url.endsWith('/');
 e.respondWith((async()=>{
  const off=await caches.open('livebook-offline').then(c=>c.match(r.url.split('#')[0],{ignoreVary:true})).catch(()=>null);
  if(off&&!fresh)return fromCache(r);                       // صوت ومكتبات محفوظة: من الجوال مباشرة
  const net=fetch(r,fresh?{cache:'no-cache'}:{}).then(res=>save(r,res));
  if(off){const t=new Promise(ok=>setTimeout(()=>ok(null),3500));const x=await Promise.race([net.catch(()=>null),t]);if(x)return x;return fromCache(r)}  // إنترنت ضعيف: لا ننتظر طويلًا
  return net.catch(()=>fromCache(r))})())});
