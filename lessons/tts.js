/* 🗣️ قراءة الشرح بصوت الجوال (مجاني) – الكتاب الحي */
(function(){
 if(!('speechSynthesis' in window))return;
 const SEL='h2, :scope > p, .idea, .law, .hint, .warn, .life, .mis, .def, .note, .tip, .steps li, :scope > ul > li, :scope > ol > li';
 let V=null,cur=null,btn=null;
 function voice(){const L=speechSynthesis.getVoices().filter(v=>/^ar/i.test(v.lang));V=L.find(v=>/google/i.test(v.name))||L.find(v=>/ar[-_]SA/i.test(v.lang))||L[0]||null}
 voice();speechSynthesis.onvoiceschanged=voice;
 const st=document.createElement('style');st.textContent=`.ttsb{display:inline-flex;align-items:center;gap:6px;margin:4px 0 8px;border:0;border-radius:99px;padding:6px 14px;font:800 .95rem inherit;font-family:inherit;cursor:pointer;background:linear-gradient(135deg,#4dabf7,#1c7ed6);color:#fff;box-shadow:0 3px 0 #1864ab}.ttsb.on{background:linear-gradient(135deg,#ff8787,#e03131);box-shadow:0 3px 0 #a61e1e}.tts-hl{background:#fff3bf!important;outline:3px solid #fcc419;border-radius:8px;transition:background .2s}`;document.head.appendChild(st);
 function clean(t){return t.replace(/🔊\s*اسمع|🗣️[^\n]*/g,'').replace(/(\d)\s*\/\s*(\d)/g,'$1 على $2').replace(/×/g,' ضرب ').replace(/÷/g,' قسمة ').replace(/=/g,' يساوي ').replace(/\+/g,' زائد ').replace(/(\d|\))\s*[−-]\s*(?=\d|\()/g,'$1 ناقص ').replace(/[−]/g,' ناقص ').replace(/°/g,' درجة ').replace(/%/g,' بالمئة ').replace(/√/g,' الجذر التربيعي ل ').replace(/π/g,' باي ').replace(/²/g,' تربيع ').replace(/³/g,' تكعيب ').replace(/≈/g,' تقريبًا ').replace(/[<]/g,' أصغر من ').replace(/[>]/g,' أكبر من ').replace(/[←→⬅➡↺•·«»"()\[\]]/g,' ').replace(/\p{Extended_Pictographic}/gu,'').replace(/\s+/g,' ').trim()}
 function textOf(e){const c=e.cloneNode(true);c.querySelectorAll('button,input,select,svg,canvas,script,style,.ttsb,.num').forEach(x=>x.remove());c.querySelectorAll('sup').forEach(s=>{s.textContent=s.textContent==='2'?' تربيع ':s.textContent==='3'?' تكعيب ':' أس '+s.textContent+' '});return clean(c.textContent)}
 function stop(){speechSynthesis.cancel();document.querySelectorAll('.tts-hl').forEach(x=>x.classList.remove('tts-hl'));if(btn){btn.classList.remove('on');btn.innerHTML='🗣️ اقرأ لي الشرح'}cur=null;btn=null}
 function read(page,b){if(cur===page){stop();return}stop();cur=page;btn=b;b.classList.add('on');b.innerHTML='⏹️ إيقاف القراءة';
  const els=[...page.querySelectorAll(SEL)].filter(e=>!e.closest('.btns,.prob,.fb,.chips,.cards,.sl')&&e.offsetParent!==null&&textOf(e).length>1);let i=0;
  const next=()=>{if(cur!==page)return;document.querySelectorAll('.tts-hl').forEach(x=>x.classList.remove('tts-hl'));if(i>=els.length){stop();return}const e=els[i++];const t=textOf(e);
   e.classList.add('tts-hl');try{e.scrollIntoView({behavior:'smooth',block:'center'})}catch(_){}
   const u=new SpeechSynthesisUtterance(t);u.lang=V?V.lang:'ar-SA';if(V)u.voice=V;u.rate=0.92;u.onend=next;u.onerror=next;speechSynthesis.speak(u)};
  next()}
 function add(){document.querySelectorAll('.page').forEach(p=>{if(p.id==='home'||p.querySelector(':scope > .ttsb'))return;const h=p.querySelector('h2');if(!h)return;const b=document.createElement('button');b.className='ttsb';b.innerHTML='🗣️ اقرأ لي الشرح';b.onclick=()=>read(p,b);h.insertAdjacentElement('afterend',b)})}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',add);else add();
 window.addEventListener('hashchange',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});
 // يُوقف القراءة عند تبديل الصفحة داخل الكتاب
 new MutationObserver(()=>{if(cur&&!cur.classList.contains('on'))stop()}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});
})();
