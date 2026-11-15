/* 🧑‍🏫 اسأل الأستاذ – مساعد ذكي داخل الدرس (الكتاب الحي) */
(function(){
 const ME=document.currentScript,SUBJ=ME.dataset.subject||'الرياضيات',GRADE=ME.dataset.grade||'';
 const FN='https://jrhzqgapywgdblujyrns.supabase.co/functions/v1/ustaz';
 let tok=null;try{tok=(JSON.parse(localStorage.getItem('livebook_v2'))||{}).tok}catch(e){}
 const st=document.createElement('style');st.textContent=`
#tfab{position:fixed;left:14px;bottom:78px;z-index:60;border:0;border-radius:99px;padding:10px 16px 10px 12px;font-weight:900;font-size:1rem;font-family:inherit;color:#fff;cursor:pointer;background:linear-gradient(135deg,#7048e8,#4c6ef5);box-shadow:0 8px 20px rgba(76,110,245,.45);display:flex;align-items:center;gap:6px;animation:tpulse 2.4s infinite}
#tfab span{font-size:1.5rem}@keyframes tpulse{50%{transform:translateY(-3px)}}
#tpan{position:fixed;inset:auto 0 0 0;height:78vh;z-index:61;background:#f8f9ff;border-radius:22px 22px 0 0;box-shadow:0 -10px 40px rgba(0,0,0,.25);display:flex;flex-direction:column;transform:translateY(105%);transition:transform .3s;direction:rtl;font-family:inherit}
#tpan.on{transform:none}
#tpan .th{display:flex;align-items:center;gap:10px;padding:10px 14px;background:linear-gradient(135deg,#7048e8,#4c6ef5);color:#fff;border-radius:22px 22px 0 0}
#tpan .th b{font-size:1.1rem}#tpan .th small{display:block;opacity:.85;font-weight:700}
#tpan .th .x{margin-right:auto;background:rgba(255,255,255,.2);border:0;color:#fff;border-radius:99px;padding:4px 12px;font-weight:800;font-size:1rem;font-family:inherit;cursor:pointer}
#tpan .th .snd{background:rgba(255,255,255,.2);border:0;color:#fff;border-radius:99px;padding:4px 10px;font-size:1.1rem;cursor:pointer}
#tmsgs{flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:8px}
.tm{max-width:88%;padding:9px 13px;border-radius:16px;line-height:1.9;font-weight:700;white-space:pre-wrap;font-size:1rem}
.tm.t{align-self:flex-start;background:#fff;border:2px solid #dbe4ff;border-radius:16px 16px 16px 4px}
.tm.k{align-self:flex-end;background:#4c6ef5;color:#fff;border-radius:16px 16px 4px 16px}
.tm.t .rd{border:0;background:#edf2ff;border-radius:99px;padding:0 10px;margin-top:4px;cursor:pointer;font-weight:800;font-size:.85rem;font-family:inherit}
.tdots{align-self:flex-start;background:#fff;border-radius:16px;padding:6px 14px;font-weight:900;letter-spacing:4px;color:#7048e8}
#tchips{display:flex;gap:6px;overflow-x:auto;padding:6px 10px}
#tchips button{flex:none;border:2px solid #bac8ff;background:#fff;color:#4263eb;border-radius:99px;padding:4px 12px;font-weight:800;font-size:.9rem;font-family:inherit;cursor:pointer}
#tbar{display:flex;gap:6px;padding:8px 10px 12px;border-top:1px solid #e9ecef;background:#fff}
#tin{flex:1;border:2px solid #dee2e6;border-radius:14px;padding:8px 10px;font-weight:700;font-size:1rem;font-family:inherit;resize:none;height:46px}
#tbar button{border:0;border-radius:14px;min-width:46px;font-size:1.3rem;cursor:pointer;background:#edf2ff}
#tbar #tsend{background:linear-gradient(135deg,#7048e8,#4c6ef5);color:#fff;font-weight:900;font-size:1rem;font-family:inherit;padding:0 14px}
#tmic.rec{background:#ff8787;animation:tpulse 1s infinite}
.tnote{font-size:.78rem;color:#868e96;text-align:center;padding:0 12px 6px}`;document.head.appendChild(st);
 const fab=document.createElement('button');fab.id='tfab';fab.innerHTML='<span>🧑‍🏫</span> اسأل الأستاذ';document.body.appendChild(fab);
 const pan=document.createElement('div');pan.id='tpan';pan.innerHTML=`<div class=th><span style="font-size:2rem">🧑‍🏫</span><div><b>الأستاذ الذكي</b><small id=tsub>اسألني عن هذا الدرس</small></div><button class=snd id=tsnd title="قراءة الردود بالصوت">🔊</button><button class=x id=tx>✕</button></div>
 <div id=tmsgs></div><div id=tchips></div><div class=tnote id=tnote></div><div id=tbar><textarea id=tin placeholder="اكتب سؤالك… أو اضغط 🎤 وتكلّم"></textarea><button id=tmic title="تكلّم">🎤</button><button id=tsend>أرسل</button></div>`;document.body.appendChild(pan);
 const $=id=>document.getElementById(id);let hist={},page=null,busy=false,voiceOn=true;
 function cur(){return document.querySelector('.page.on')}
 function ctxOf(p){const c=p.cloneNode(true);c.querySelectorAll('button,input,select,svg,canvas,script,style,.ttsb').forEach(x=>x.remove());return c.textContent.replace(/\s+/g,' ').trim().slice(0,2500)}
 function titleOf(p){const h=p.querySelector('h2');if(!h)return'الدرس';const c=h.cloneNode(true);c.querySelectorAll('.num,button').forEach(x=>x.remove());return c.textContent.trim()}
 /* الصوت */
 let V=null;function pickV(){if(!('speechSynthesis' in window))return;const L=speechSynthesis.getVoices().filter(v=>/^ar/i.test(v.lang));V=L.find(v=>/google/i.test(v.name))||L[0]||null}
 if('speechSynthesis' in window){pickV();speechSynthesis.addEventListener&&speechSynthesis.addEventListener('voiceschanged',pickV)}
 function clean(t){return t.replace(/(\d)\s*\/\s*(\d)/g,'$1 على $2').replace(/×/g,' ضرب ').replace(/÷/g,' قسمة ').replace(/=/g,' يساوي ').replace(/\+/g,' زائد ').replace(/(\d|\))\s*[−-]\s*(?=\d|\()/g,'$1 ناقص ').replace(/−/g,' ناقص ').replace(/°/g,' درجة ').replace(/%/g,' بالمئة ').replace(/√/g,' الجذر التربيعي ل ').replace(/²/g,' تربيع ').replace(/³/g,' تكعيب ').replace(/\^2/g,' تربيع ').replace(/\p{Extended_Pictographic}/gu,'').replace(/[*_#`]/g,'').replace(/\s+/g,' ').trim()}
 function speak(t){if(!voiceOn||!('speechSynthesis' in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(clean(t));u.lang=V?V.lang:'ar-SA';if(V)u.voice=V;u.rate=.95;speechSynthesis.speak(u)}
 function add(cls,t){const d=document.createElement('div');d.className='tm '+cls;d.textContent=t;if(cls==='t'){const b=document.createElement('button');b.className='rd';b.textContent='🔊 اسمع';b.onclick=()=>{const o=voiceOn;voiceOn=true;speak(t);voiceOn=o};d.appendChild(document.createElement('br'));d.appendChild(b)}$('tmsgs').appendChild(d);d.scrollIntoView({behavior:'smooth',block:'end'});return d}
 function trial(p,q){/* وضع تجريبي بدون ذكاء اصطناعي: يلخّص الدرس من الكتاب */
  const pick=s=>[...p.querySelectorAll(s)].map(e=>{const c=e.cloneNode(true);c.querySelectorAll('button,svg,canvas,input').forEach(x=>x.remove());return c.textContent.replace(/\s+/g,' ').trim()}).filter(x=>x.length>8);
  const L=pick('.law').slice(0,2),I=pick('.idea,.hint,.life').slice(0,2),P=pick(':scope > p').slice(0,2);
  let r='📘 خلاصة درس «'+titleOf(p)+'»:\n';if(P.length)r+='• '+P.join('\n• ')+'\n';if(L.length)r+='📐 القاعدة: '+L.join(' ، ')+'\n';if(I.length)r+='💡 '+I.join('\n💡 ')+'\n';
  r+='\n(وضع تجريبي: الأستاذ الذكي سيجيب عن سؤالك بالضبط عند تفعيله قريبًا 🙂 جرّب أمثلة الدرس التفاعلية فوق.)';return r}
 async function ask(q){if(busy||!q.trim())return;const p=cur();if(!p||p.id==='home'){add('t','افتح درسًا أولًا، ثم اسألني عنه 🙂');return}
  const H=hist[p.id]=hist[p.id]||[];add('k',q);H.push({r:'k',t:q});$('tin').value='';busy=true;const dd=document.createElement('div');dd.className='tdots';dd.textContent='•••';$('tmsgs').appendChild(dd);dd.scrollIntoView({block:'end'});
  let rep='';try{if(tok){const r=await fetch(FN,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:tok,subject:SUBJ,grade:GRADE,title:titleOf(p),ctx:ctxOf(p),history:H.slice(-12)})});const j=await r.json();
   if(j.reply)rep=j.reply;else if(j.err==='limit')rep='سألت أسئلة كثيرة اليوم يا بطل 🌟 نكمل غدًا إن شاء الله!';else if(j.err==='auth')rep='سجّل الدخول في التطبيق حتى أستطيع مساعدتك 🙂'}}catch(e){}
  if(!rep)rep=trial(p,q);dd.remove();add('t',rep);H.push({r:'t',t:rep});speak(rep);busy=false}
 function open(){page=cur();pan.classList.add('on');fab.style.display='none';$('tsub').textContent=page&&page.id!=='home'?'الدرس: '+titleOf(page):'اسألني عن أي درس';
  if(!$('tmsgs').children.length){const w='أهلًا! أنا الأستاذ الذكي 🧑‍🏫 اسألني أي شيء في هذا الدرس، وسأشرحه لك خطوة بخطوة، ثم أختبرك بسؤال صغير.';add('t',w)}
  $('tchips').innerHTML=['📖 اشرحلي الدرس ببساطة','✏️ أعطني مثالًا محلولًا','🎯 اختبرني بسؤال','🤔 ما الخطأ الشائع هنا؟'].map(c=>`<button>${c}</button>`).join('');$('tchips').querySelectorAll('button').forEach(b=>b.onclick=()=>ask(b.textContent.replace(/^\S+\s/,'')));
  $('tnote').textContent=tok?'':'سجّل الدخول في التطبيق ليعمل الأستاذ الذكي'}
 fab.onclick=open;$('tx').onclick=()=>{pan.classList.remove('on');fab.style.display='';try{speechSynthesis.cancel()}catch(e){}};
 $('tsnd').onclick=()=>{voiceOn=!voiceOn;$('tsnd').textContent=voiceOn?'🔊':'🔇';if(!voiceOn)try{speechSynthesis.cancel()}catch(e){}};
 $('tsend').onclick=()=>ask($('tin').value);$('tin').onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();ask($('tin').value)}};
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)$('tmic').style.display='none';else{let rec=null;$('tmic').onclick=()=>{if(rec){rec.stop();return}rec=new SR();rec.lang='ar-LY';rec.interimResults=true;$('tmic').classList.add('rec');try{speechSynthesis.cancel()}catch(e){}
  rec.onresult=e=>{let t='';for(const r of e.results)t+=r[0].transcript;$('tin').value=t;if(e.results[e.results.length-1].isFinal){rec.stop();ask(t)}};rec.onend=()=>{$('tmic').classList.remove('rec');rec=null};rec.onerror=()=>{$('tmic').classList.remove('rec');rec=null};rec.start()}}
 // يظهر الزر في صفحات الدروس فقط
 const sync=()=>{const p=cur();fab.style.visibility=p&&p.id!=='home'?'visible':'hidden';if(pan.classList.contains('on')&&p!==page){page=p;$('tsub').textContent=p&&p.id!=='home'?'الدرس: '+titleOf(p):'اسألني عن أي درس'}};
 new MutationObserver(sync).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});window.addEventListener('hashchange',sync);sync();
})();
