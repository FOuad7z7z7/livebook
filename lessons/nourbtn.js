/* 📞 زر «كلّم الأستاذ نور» داخل الدروس – الكتاب الحي */
(function(){
 const FN='https://jrhzqgapywgdblujyrns.supabase.co/functions/v1/nour';
 let tok=null;try{tok=(JSON.parse(localStorage.getItem('livebook_v2'))||{}).tok}catch(e){}
 if(!tok)return;
 const show=()=>{
  const st=document.createElement('style');st.textContent=`#nbtn{position:fixed;left:14px;bottom:78px;z-index:120;border:0;border-radius:99px;padding:10px 16px 10px 12px;font-weight:900;font-size:1rem;font-family:inherit;color:#fff;cursor:pointer;background:linear-gradient(135deg,#1971c2,#15aabf);box-shadow:0 8px 20px rgba(25,113,194,.4);display:flex;align-items:center;gap:6px;animation:npl 2.4s infinite}#nbtn span{font-size:1.4rem}@keyframes npl{50%{transform:translateY(-3px)}}#nfr{position:fixed;inset:0;width:100%;height:100%;border:0;z-index:9999;background:#fff}@media print{#nbtn{display:none}}`;
  document.head.appendChild(st);
  const b=document.createElement('button');b.id='nbtn';b.innerHTML='<span>📞</span>الأستاذ نور';b.onclick=open;document.body.appendChild(b);
 };
 function ctx(){
  const b=document.getElementById('nbtn');if(b)b.style.visibility='hidden';
  let el=document.elementFromPoint(innerWidth/2,innerHeight*0.4);if(b)b.style.visibility='';
  while(el&&el!==document.body&&(el.innerText||'').trim().length<400)el=el.parentElement;
  let txt=((el||document.body).innerText||'').replace(/\n{2,}/g,'\n').trim();
  let h='';document.querySelectorAll('h1,h2,h3').forEach(x=>{if(x.offsetParent&&x.getBoundingClientRect().top<innerHeight*0.5&&x.innerText.trim())h=x.innerText.trim()});
  if(el&&el!==document.body){const x=el.querySelector('h1,h2,h3');if(x&&x.innerText.trim())h=x.innerText.trim()}
  return{t:h.slice(0,110),c:txt.slice(0,3000)};
 }
 function open(){
  const c=ctx();try{sessionStorage.setItem('lb_nour_ctx',c.c)}catch(e){}
  const s=(document.title||'').split('–')[0].trim();
  const f=document.createElement('iframe');f.id='nfr';f.allow='microphone; autoplay';
  f.src='nour.html?in=1&s='+encodeURIComponent(s)+'&t='+encodeURIComponent(c.t);document.body.appendChild(f);
 }
 addEventListener('message',e=>{if(e.origin===location.origin&&e.data==='nour-close'){const f=document.getElementById('nfr');if(f)f.remove()}});
 let ok=null;try{ok=sessionStorage.getItem('lb_nour_ok')}catch(e){}
 if(ok==='1'){document.readyState==='loading'?addEventListener('DOMContentLoaded',show):show();return}
 fetch(FN,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({check:1,token:tok})}).then(r=>r.json()).then(r=>{
  if(r.ok)try{sessionStorage.setItem('lb_nour_ok','1')}catch(e){}
  if(r.ok)document.readyState==='loading'?addEventListener('DOMContentLoaded',show):show();
 }).catch(()=>{});
})();
