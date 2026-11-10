/* =====================================================================
   الكتاب الحي – ميزات التفاعل والمتعة
   سؤال اليوم · تحدّي صديقك · وضع الامتحان · أخطائي · المتصدرون
   شخصيتي (أفاتار) · رحلتي في ليبيا · بطاقة الإنجاز · تقرير الأب · مكافأة من بابا
   ===================================================================== */
(function(){
const css=`
.fbar{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:10px 0}
.fbar button{background:#fff;border:none;border-radius:16px;padding:10px 4px;box-shadow:0 2px 10px #1e2a5a10;cursor:pointer;font-weight:800;font-size:.82rem;color:var(--ink);position:relative;line-height:1.4}
.fbar button i{display:block;font-style:normal;font-size:1.7rem;line-height:1.2}
.fbar button em{position:absolute;top:6px;left:6px;background:#e5484d;color:#fff;border-radius:10px;font-style:normal;font-size:.7rem;padding:0 6px}
.fbar button.done{background:#E6F7EA}
.fbar button.hot{background:linear-gradient(135deg,#FFE7C2,#fff)}
#fxo{position:fixed;inset:0;background:var(--bg);z-index:58;display:none;flex-direction:column}
#fxo.on{display:flex}
#fxo .fxt{display:flex;align-items:center;gap:10px;padding:12px 14px;background:var(--ink);color:#fff}
#fxo .fxt b{flex:1;font-size:1.05rem}
#fxo .fxt button{background:#ffffff22;border:none;color:#fff;border-radius:10px;padding:6px 12px;font-weight:800;cursor:pointer;font-family:inherit}
#fxo .fxb{flex:1;overflow:auto;padding:14px 16px 40px;max-width:720px;width:100%;margin:0 auto}
.qz .qq{font-weight:800;color:var(--ink);font-size:1.12rem;background:#fff;border-radius:18px;padding:16px;box-shadow:0 2px 10px #1e2a5a10;margin:8px 0;line-height:1.8}
.qz .qo{display:block;width:100%;text-align:right;background:#fff;border:2px solid var(--line);border-radius:14px;padding:12px 14px;margin:8px 0;font-weight:700;font-size:1rem;cursor:pointer;color:var(--ink)}
.qz .qo.ok{background:#E6F7EA;border-color:#2e9e5b}.qz .qo.no{background:#fde8e8;border-color:#d64545}
.qz .qh{display:flex;justify-content:space-between;align-items:center;font-weight:800;color:var(--soft);font-size:.9rem}
.qz .qbar{height:8px;background:#e9e5dc;border-radius:6px;overflow:hidden;margin:6px 0}.qz .qbar i{display:block;height:100%;background:var(--or);transition:width .4s}
.qz .tm{background:var(--ink);color:#fff;border-radius:10px;padding:1px 10px;direction:ltr}
.qz .tm.low{background:#d64545}
.big{font-size:3rem;font-weight:900;color:var(--ink);text-align:center;line-height:1.2}
.res{text-align:center;background:#fff;border-radius:22px;padding:20px;box-shadow:0 2px 10px #1e2a5a10;margin:10px 0}
.vs{display:grid;grid-template-columns:1fr auto 1fr;gap:8px;align-items:center;text-align:center}
.vs .p{background:#fff;border-radius:18px;padding:12px;box-shadow:0 2px 10px #1e2a5a10}.vs .p.win{outline:3px solid #f5b041}
.vs .p b{display:block;font-size:1.6rem;color:var(--ink)}
.mi{background:#fff;border-radius:16px;padding:12px 14px;margin:8px 0;box-shadow:0 2px 8px #1e2a5a0a}
.mi .q{font-weight:800;color:var(--ink)}.mi .a{font-size:.92rem;margin-top:4px}.mi .a .x{color:#d64545}.mi .a .v{color:#2e9e5b}
.mi .b{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap}.mi .b button{border:none;background:#EEF0FF;border-radius:10px;padding:4px 10px;font-weight:700;cursor:pointer;font-size:.82rem;font-family:inherit;color:var(--ink)}
.lbr{display:flex;align-items:center;gap:10px;background:#fff;border-radius:14px;padding:10px 12px;margin:6px 0}
.lbr .r{width:30px;height:30px;border-radius:50%;background:#EEF0FF;display:grid;place-items:center;font-weight:900;color:var(--ink)}
.lbr.me{outline:2px solid var(--or);background:#fff8f0}.lbr .pt{margin-right:auto;font-weight:900;color:var(--or)}
.avw{display:flex;justify-content:center}.avw svg{width:180px;height:180px;background:linear-gradient(#EEF0FF,#fff);border-radius:50%}
.avg{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 12px}.avg button{border:2px solid var(--line);background:#fff;border-radius:12px;padding:6px 10px;cursor:pointer;font-weight:700;font-family:inherit;color:var(--ink);font-size:.85rem}
.avg button.on{border-color:var(--or);background:#fff8f0}.avg button.lk{opacity:.45}
.avg .sw{width:34px;height:34px;padding:0;border-radius:50%}
.heroav{position:absolute;left:14px;top:14px;width:84px;height:84px;border-radius:50%;background:#ffffff22;cursor:pointer;border:3px solid #ffffff55;overflow:hidden}
.heroav svg{width:100%;height:100%}
.heroav::after{content:'✏️';position:absolute;bottom:-2px;left:-2px;font-size:.8rem;background:#fff;border-radius:50%;width:22px;height:22px;display:grid;place-items:center}
.map svg{width:100%;height:auto;background:linear-gradient(#e7f3ff,#fff6e6);border-radius:18px}
.goal{background:linear-gradient(135deg,#7048e8,#a78bfa);color:#fff;border-radius:18px;padding:14px;margin:10px 0}
.goal .bar{background:#ffffff40}.goal .bar i{background:#fde047}
.goal.done{background:linear-gradient(135deg,#16a34a,#4ade80)}
.wk7{display:flex;gap:4px;align-items:flex-end;height:70px;margin:8px 0}.wk7 div{flex:1;text-align:center;font-size:.7rem;color:var(--soft)}.wk7 i{display:block;background:var(--or);border-radius:6px 6px 0 0;margin:0 auto 2px;width:70%;min-height:3px}
@keyframes pulse{50%{transform:scale(1.15)}}.pulse{animation:pulse 1.2s infinite}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
const O=document.createElement('div');O.id='fxo';O.innerHTML='<div class="fxt"><b id="fxT"></b><button id="fxX">✕ إغلاق</button></div><div class="fxb" id="fxB"></div>';document.body.appendChild(O);
let onClose=null,timer=null;
function ov(t,html,close){clearInterval(timer);$('fxT').innerHTML=t;$('fxB').innerHTML=html||'';O.classList.add('on');$('fxB').scrollTop=0;onClose=close||null;return $('fxB')}
function ovClose(){clearInterval(timer);O.classList.remove('on');const f=onClose;onClose=null;f&&f();if(S.tok&&role()==='student'&&document.querySelector('.scr.on')&&document.querySelector('.scr.on').id==='s-home')renderHome()}
$('fxX').onclick=ovClose;
const ding=(ok)=>{try{const A=window.__ac||(window.__ac=new (window.AudioContext||window.webkitAudioContext)());const o=A.createOscillator(),g=A.createGain();o.frequency.value=ok?880:220;o.type=ok?'sine':'square';g.gain.setValueAtTime(.12,A.currentTime);g.gain.exponentialRampToValueAtTime(.001,A.currentTime+.3);o.connect(g);g.connect(A.destination);o.start();o.stop(A.currentTime+.3);if(ok)setTimeout(()=>ding2(),110)}catch(e){}};
const ding2=()=>{try{const A=window.__ac,o=A.createOscillator(),g=A.createGain();o.frequency.value=1320;g.gain.setValueAtTime(.1,A.currentTime);g.gain.exponentialRampToValueAtTime(.001,A.currentTime+.3);o.connect(g);g.connect(A.destination);o.start();o.stop(A.currentTime+.3)}catch(e){}};
function confetti(){const c=document.createElement('canvas');c.style.cssText='position:fixed;inset:0;z-index:90;pointer-events:none';c.width=innerWidth;c.height=innerHeight;document.body.appendChild(c);const x=c.getContext('2d');
 const P=Array.from({length:120},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.5,v:2+Math.random()*4,a:Math.random()*6,c:['#F28C38','#2329C9','#2e9e5b','#fde047','#e5484d','#7048e8'][Math.floor(Math.random()*6)]}));let n=0;
 (function f(){x.clearRect(0,0,c.width,c.height);P.forEach(p=>{p.y+=p.v;p.a+=.1;x.fillStyle=p.c;x.fillRect(p.x+Math.sin(p.a)*10,p.y,8,12)});if(++n<160)requestAnimationFrame(f);else c.remove()})()}

/* ---------------- البيانات الإضافية ---------------- */
const td=()=>today();
const isStu=()=>S.tok&&role()==='student';
function wkAdd(f,v){if(!isStu())return;S.wk=S.wk||{};const d=td();const w=S.wk[d]||(S.wk[d]={p:0,s:0});w[f]=(w[f]||0)+v;
 const ks=Object.keys(S.wk).sort();while(ks.length>60)delete S.wk[ks.shift()];save()}
window.dayAdd=p=>wkAdd('p',p);
window.secAdd=s=>wkAdd('s',s);
function addXP(n,why){if(!isStu()||!n)return;S.xp=(S.xp||0)+n;wkAdd('p',n);save();if(why)toast('⭐ +'+n+' '+why)}
window.extraProg=()=>({xp:S.xp||0,wk:S.wk||{},mist:S.mist||[],av:S.av||null,dq:S.dq||null,ex:S.ex||[],chl:S.chl||[],mapN:S.mapN||0});
window.mergeExtra=d=>{if(!d)return;S.xp=Math.max(S.xp||0,d.xp||0);
 S.wk=S.wk||{};Object.entries(d.wk||{}).forEach(([k,v])=>{const a=S.wk[k]||(S.wk[k]={p:0,s:0});a.p=Math.max(a.p||0,v.p||0);a.s=Math.max(a.s||0,v.s||0)});
 const m={};[...(d.mist||[]),...(S.mist||[])].forEach(x=>{if(!m[x.k]||m[x.k].t<x.t)m[x.k]=x});S.mist=Object.values(m).filter(x=>!x.del).sort((a,b)=>b.t-a.t).slice(0,150);
 if(!S.av&&d.av)S.av=d.av;if(d.dq&&(!S.dq||d.dq.d>S.dq.d))S.dq=d.dq;
 const ex={};[...(d.ex||[]),...(S.ex||[])].forEach(x=>ex[x.t]=x);S.ex=Object.values(ex).sort((a,b)=>b.t-a.t).slice(0,20);
 const ch={};[...(d.chl||[]),...(S.chl||[])].forEach(x=>ch[x.t]=x);S.chl=Object.values(ch).sort((a,b)=>b.t-a.t).slice(0,20);S.mapN=Math.max(S.mapN||0,d.mapN||0)};
const hashS=s=>{let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(36)};
const rng=seed=>{let a=seed>>>0||1;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}};
const shf=(arr,r)=>{const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor((r||Math.random)()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

/* ---------------- الأخطاء من الدروس ---------------- */
addEventListener('message',e=>{const d=e.data;if(!d||!d.qq||!cur||!isStu())return;const q=d.qq;if(!q.q||!q.o||q.r<0)return;const k=hashS(q.q+'|'+q.o.slice().sort().join('|'));S.mist=S.mist||[];
 const i=S.mist.findIndex(x=>x.k===k);
 if(d.lbt==='no'){const it={k,l:cur,q:q.q,o:q.o,r:q.r,w:q.w,t:Date.now(),n:1};if(i>=0){it.n=(S.mist[i].n||1)+1;S.mist.splice(i,1)}S.mist.unshift(it);S.mist=S.mist.slice(0,150);save()}
 else if(d.lbt==='ok'&&i>=0){S.mist.splice(i,1);save()}});

/* ---------------- بنك الأسئلة ---------------- */
const QB={};
async function bankOf(g){if(QB[g])return QB[g];try{const r=await fetch('lessons/qb-'+g+'.json');if(!r.ok)throw 0;QB[g]=(await r.json()).map(x=>({l:x[0],s:x[1],q:x[2],o:x[3],r:x[4]}));return QB[g]}catch(e){return null}}
const subName=id=>{for(const g of GRADES)for(const s of (g.subjects||[]))if(s.id===id)return s.icon+' '+s.name;return''};
const gName=id=>{const g=GRADES.find(x=>x.id===id);return g?g.name:''};

/* ---------------- مشغّل الأسئلة العام ---------------- */
function quiz(host,Q,o){o=o||{};let i=0,ok=0,t0=Date.now(),wrong=[],left=o.time||0;
 host.innerHTML='<div class="qz"><div class="qh"><span id="qzN"></span>'+(o.time||o.clock?'<span class="tm" id="qzT"></span>':'')+'</div><div class="qbar"><i id="qzB"></i></div><div id="qzQ"></div></div>';
 const tick=()=>{const el=$('qzT');if(!el)return;if(o.time){left=Math.max(0,o.time-Math.round((Date.now()-t0)/1000));el.textContent=Math.floor(left/60)+':'+String(left%60).padStart(2,'0');el.classList.toggle('low',left<30);if(!left)end()}else{const s=Math.round((Date.now()-t0)/1000);el.textContent=s+' ث'}};
 clearInterval(timer);if(o.time||o.clock){timer=setInterval(tick,500);tick()}
 let ended=false;function end(){if(ended)return;ended=true;clearInterval(timer);const sec=Math.round((Date.now()-t0)/1000);o.done&&o.done({ok,n:Q.length,sec,wrong,answered:i})}
 function show(){if(i>=Q.length)return end();const q=Q[i];$('qzN').textContent='السؤال '+(i+1)+' من '+Q.length;$('qzB').style.width=(i/Q.length*100)+'%';
  const ord=shf(q.o.map((x,j)=>j),o.seed?rng(o.seed+i*7):null);
  $('qzQ').innerHTML=(o.tag?'<div class="muted">'+o.tag(q)+'</div>':'')+'<div class="qq">'+esc(q.q)+'</div>'+ord.map(j=>'<button class="qo" data-j="'+j+'">'+esc(q.o[j])+'</button>').join('')+'<div id="qzF" class="muted" style="text-align:center;min-height:1.6em;font-weight:800"></div>';
  let dn=false;$('qzQ').querySelectorAll('.qo').forEach(b=>b.onclick=()=>{if(dn)return;dn=true;const j=+b.dataset.j,good=j===q.r;b.classList.add(good?'ok':'no');ding(good);
   if(!good){$('qzQ').querySelector('[data-j="'+q.r+'"]').classList.add('ok');wrong.push(Object.assign({w:j},q))}else ok++;o.each&&o.each(q,good,j);
   $('qzF').innerHTML=good?pickS(['✅ ممتاز!','✅ صحيح!','✅ أحسنت!','🔥 رائع!']):'❌ الإجابة الصحيحة باللون الأخضر';i++;setTimeout(show,good?700:1500)})}
 show();return{stop:()=>{ended=true;clearInterval(timer)}}}
const pickS=a=>a[Math.floor(Math.random()*a.length)];
function addWrongToMist(W){S.mist=S.mist||[];W.forEach(q=>{const k=hashS(q.q+'|'+q.o.slice().sort().join('|'));const i=S.mist.findIndex(x=>x.k===k);if(i>=0)S.mist.splice(i,1);S.mist.unshift({k,l:q.l,q:q.q,o:q.o,r:q.r,w:q.w,t:Date.now(),n:1})});S.mist=S.mist.slice(0,150);save()}
function rightMist(q){const k=hashS(q.q+'|'+q.o.slice().sort().join('|'));const i=(S.mist||[]).findIndex(x=>x.k===k);if(i>=0){S.mist.splice(i,1);save()}}

/* ================= 1) سؤال اليوم ================= */
async function daily(){const g=grade();const B=await bankOf(g.id);if(!B||!B.length){toast('سؤال اليوم غير متاح لهذا الصف بعد');return}
 const d=td(),r=rng(parseInt(hashS(d+g.id),36));const q=B[Math.floor(r()*B.length)];
 if(S.dq&&S.dq.d===d){ov('🎯 سؤال اليوم','<div class="res"><div class="big">'+(S.dq.ok?'✅':'💪')+'</div><b style="color:var(--ink)">'+(S.dq.ok?'أجبت صح اليوم!':'حاولت اليوم')+'</b><div class="muted">سلسلة سؤال اليوم: 🔥 '+(S.dq.st||0)+' يوم<br>ارجع بكرة لسؤال جديد ⏰</div></div><div class="qz"><div class="qq">'+esc(q.q)+'</div><div class="mi"><div class="a"><span class="v">✅ '+esc(q.o[q.r])+'</span></div></div></div>');return}
 const H=ov('🎯 سؤال اليوم','<div class="muted" style="text-align:center">سؤال واحد كل يوم · صح = ⭐ 20 نقطة · '+subName(q.s)+'</div><div id="dqH"></div>');
 quiz($('dqH'),[q],{done:res=>{const okk=res.ok===1;const y=new Date(Date.now()-DAY).toISOString().slice(0,10);const stk=okk?((S.dq&&S.dq.d===y&&S.dq.ok?(S.dq.st||0):0)+1):0;
  S.dq={d,ok:okk,st:stk};save();if(okk){addXP(20,'سؤال اليوم');confetti()}else{addWrongToMist(res.wrong);addXP(5,'للمحاولة')}
  H.insertAdjacentHTML('beforeend','<div class="res"><div class="big">'+(okk?'🎉':'💪')+'</div><b style="color:var(--ink)">'+(okk?'أحسنت! سلسلتك: 🔥 '+stk+' يوم':'لا بأس! أضفناه إلى «أخطائي» لتراجعه')+'</b><div class="muted">ارجع بكرة لسؤال جديد ⏰</div>'+(okk?'<button class="btn or w" id="dqS" style="margin-top:10px">📸 شارك إنجازك</button>':'')+'</div>');
  const sb=$('dqS');if(sb)sb.onclick=()=>shareCard({title:'سؤال اليوم ✅',big:'🔥 '+stk,line:stk>1?'سلسلة '+stk+' أيام متتالية!':'أجبت صح على سؤال اليوم'})}})}

/* ================= 2) تحدّي صديقك ================= */
const b64e=o=>btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
const b64d=s=>JSON.parse(decodeURIComponent(escape(atob(s.replace(/-/g,'+').replace(/_/g,'/')))));
const chQ=(B,seed,n)=>{const r=rng(seed);return shf(B.map((x,i)=>i),r).slice(0,n).map(i=>B[i])};
const appUrl=()=>location.origin+location.pathname;
async function challengeNew(){const g=grade();const B=await bankOf(g.id);if(!B||B.length<10){toast('التحدي غير متاح لهذا الصف بعد');return}
 const seed=Math.floor(Math.random()*2e9)+1;const Q=chQ(B,seed,10);
 const H=ov('⚔️ تحدّي صديقك','<div class="res"><div class="big">⚔️</div><b style="color:var(--ink)">10 أسئلة من كل مواد '+g.name+'</b><div class="muted">جاوب بسرعة وصح، ثم أرسل التحدي لصديقك على واتساب. هو يجاوب على نفس الأسئلة… ومن يفوز؟</div><button class="btn or w" id="chGo" style="margin-top:10px">ابدأ ⏱️</button></div>'+chHist());
 $('chGo').onclick=()=>quiz(H,Q,{clock:1,seed,tag:q=>subName(q.s),done:res=>{addWrongToMist(res.wrong);addXP(10+res.ok,'للتحدي');
  const me={n:S.user.name.split(' ')[0],s:res.ok,t:res.sec};const link=appUrl()+'?ch='+b64e({v:1,g:g.id,seed,a:me});
  S.chl=S.chl||[];S.chl.unshift({t:Date.now(),seed,me:res.ok,sec:res.sec,role:'a'});save();
  H.innerHTML='<div class="res"><div class="big">'+res.ok+'/10</div><div class="muted">في '+res.sec+' ثانية</div><b style="color:var(--ink);display:block;margin:8px 0">أرسل التحدي الآن لصديقك 👇</b>'+
   '<a class="btn wa w" style="display:block;text-decoration:none;text-align:center" target="_blank" rel="noopener" id="chWa">📲 أرسل على واتساب</a><button class="btn ln w" id="chCp" style="margin-top:8px">🔗 انسخ الرابط</button><button class="btn ln w" id="chSh" style="margin-top:8px">📸 بطاقة النتيجة</button></div>';
  const txt='⚔️ '+me.n+' يتحداك في «الكتاب الحي»!\nنتيجتي: '+res.ok+'/10 في '+res.sec+' ثانية 🔥\nجاوب على نفس الـ10 أسئلة وشوف مين يفوز 👇\n'+link;
  $('chWa').href='https://wa.me/?text='+encodeURIComponent(txt);$('chCp').onclick=()=>copy(link);$('chSh').onclick=()=>shareCard({title:'تحدّي الأصدقاء ⚔️',big:res.ok+'/10',line:'في '+res.sec+' ثانية · من يقدر يتغلب عليّ؟',text:txt})}})}
function chHist(){const L=(S.chl||[]).slice(0,5);if(!L.length)return'';return'<h2>آخر تحدياتك</h2>'+L.map(c=>'<div class="lbr"><span class="r">'+(c.role==='a'?'⚔️':c.res==='w'?'🏆':c.res==='l'?'😅':'🤝')+'</span><span>'+(c.vs?'ضد '+esc(c.vs)+' · ':'')+'نتيجتك '+c.me+'/10 · '+c.sec+' ث</span><span class="pt">'+fmtD(c.t)+'</span></div>').join('')}
async function challengeOpen(code){let C;try{C=b64d(code)}catch(e){toast('رابط التحدي غير صحيح');return}
 const B=await bankOf(C.g);if(!B){toast('تعذّر تحميل أسئلة التحدي، تأكد من الإنترنت');return}const Q=chQ(B,C.seed,10);const A=C.a||{n:'صديقك',s:0,t:0};
 const H=ov('⚔️ '+esc(A.n)+' يتحداك!','<div class="res"><div class="big">⚔️</div><b style="color:var(--ink);font-size:1.15rem">'+esc(A.n)+' يتحداك في '+gName(C.g)+'</b><div class="muted">نتيجته: <b>'+A.s+'/10</b> في <b>'+A.t+'</b> ثانية<br>10 أسئلة · الأكثر صحًا يفوز، وعند التعادل الأسرع</div><button class="btn or w" id="chGo" style="margin-top:10px">قبلت التحدي! ابدأ ⏱️</button></div>');
 $('chGo').onclick=()=>quiz(H,Q,{clock:1,seed:C.seed,tag:q=>subName(q.s),done:res=>{const win=res.ok>A.s||(res.ok===A.s&&res.sec<A.t),draw=res.ok===A.s&&res.sec===A.t;const R=draw?'d':win?'w':'l';
  if(isStu()){addWrongToMist(res.wrong);addXP(win?30:10,win?'فزت بالتحدي!':'للمشاركة');S.chl=S.chl||[];S.chl.unshift({t:Date.now(),seed:C.seed,me:res.ok,sec:res.sec,vs:A.n,res:R});save()}
  if(win)confetti();const myN=isStu()?S.user.name.split(' ')[0]:'أنا';
  const back=appUrl()+'?ch='+b64e({v:1,g:C.g,seed:C.seed,a:{n:myN,s:res.ok,t:res.sec}});
  const txt=(win?'🏆 غلبتك! ':'🔥 ')+'نتيجتي في تحديك: '+res.ok+'/10 في '+res.sec+' ثانية.\nتقدر تتغلب عليّ؟ 👇\n'+back;
  H.innerHTML='<div class="res"><div class="big">'+(draw?'🤝':win?'🏆':'😅')+'</div><b style="color:var(--ink);font-size:1.2rem">'+(draw?'تعادل!':win?'فزت على '+esc(A.n)+'!':esc(A.n)+' فاز هذه المرة')+'</b></div>'+
   '<div class="vs"><div class="p'+(win?' win':'')+'"><span class="muted">'+esc(myN)+'</span><b>'+res.ok+'/10</b><span class="muted">'+res.sec+' ث</span></div><b>VS</b><div class="p'+(!win&&!draw?' win':'')+'"><span class="muted">'+esc(A.n)+'</span><b>'+A.s+'/10</b><span class="muted">'+A.t+' ث</span></div></div>'+
   '<a class="btn wa w" style="display:block;text-decoration:none;text-align:center;margin-top:12px" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent(txt)+'">📲 أرسل نتيجتك وتحدّاه من جديد</a>'+
   (isStu()?'<button class="btn ln w" id="chSh" style="margin-top:8px">📸 بطاقة النتيجة</button>':'<div class="card" style="margin-top:12px;text-align:center"><b style="color:var(--ink)">🎁 أعجبك؟ في «الكتاب الحي» دروس تفاعلية لكل المنهج الليبي</b><div class="muted">سجّل مجانًا وجرّب 5 دروس في كل مادة</div><button class="btn or w" id="chReg" style="margin-top:8px">سجّل الآن مجانًا 🚀</button></div>');
  const sh=$('chSh');if(sh)sh.onclick=()=>shareCard({title:win?'فزت في التحدي 🏆':'تحدّي الأصدقاء ⚔️',big:res.ok+'/10',line:'ضد '+A.n+' ('+A.s+'/10)',text:txt});
  const rg=$('chReg');if(rg)rg.onclick=()=>{ovClose();openAuth('student');auMode='reg';auView()}}})}

/* ================= 3) وضع الامتحان ================= */
async function exam(){const g=grade();const B=await bankOf(g.id);if(!B||!B.length){toast('وضع الامتحان غير متاح لهذا الصف بعد');return}
 const subs=(g.subjects||[]).filter(s=>B.some(q=>q.s===s.id));let sel='all',n=20;const full=active();
 const H=ov('📝 وضع الامتحان','<div class="res"><div class="big">📝</div><b style="color:var(--ink)">امتحان تجريبي مثل الحقيقي</b><div class="muted">دقيقة لكل سؤال · بدون رجوع · النتيجة والأخطاء في الآخر</div></div>'+
  '<h2>المادة</h2><div class="avg" id="exS"><button data-s="all" class="on">📚 كل المواد</button>'+subs.map(s=>'<button data-s="'+s.id+'">'+s.icon+' '+s.name+'</button>').join('')+'</div>'+
  '<h2>عدد الأسئلة</h2><div class="avg" id="exN">'+[10,20,30].map(x=>'<button data-n="'+x+'" class="'+(x===20?'on':'')+(!full&&x>5?' lk':'')+'">'+x+' سؤال</button>').join('')+'</div>'+
  (full?'':'<div class="warn">🔒 بدون اشتراك تقدر تجرب امتحانًا قصيرًا من 5 أسئلة. اشترك للامتحان الكامل.</div>')+
  '<button class="btn or w" id="exGo">ابدأ الامتحان ⏱️</button>'+exHist());
 if(!full)n=5;
 H.querySelectorAll('#exS button').forEach(b=>b.onclick=()=>{sel=b.dataset.s;H.querySelectorAll('#exS button').forEach(x=>x.classList.toggle('on',x===b))});
 H.querySelectorAll('#exN button').forEach(b=>b.onclick=()=>{if(!full){openPay();return}n=+b.dataset.n;H.querySelectorAll('#exN button').forEach(x=>x.classList.toggle('on',x===b))});
 $('exGo').onclick=()=>{const pool=B.filter(q=>sel==='all'||q.s===sel);const Q=shf(pool).slice(0,Math.min(n,pool.length));
  quiz(H,Q,{time:Q.length*60,tag:q=>subName(q.s),done:res=>{addWrongToMist(res.wrong);addXP(res.ok*5,'من الامتحان');const pc=Math.round(res.ok/res.n*100);
   S.ex=S.ex||[];S.ex.unshift({t:Date.now(),s:res.ok,n:res.n,sub:sel});save();if(pc>=85)confetti();
   const by={};Q.forEach(q=>{by[q.s]=by[q.s]||{n:0,ok:0};by[q.s].n++});res.wrong.forEach(q=>{});Q.forEach(q=>{if(!res.wrong.includes(q)&&!res.wrong.some(w=>w.q===q.q))by[q.s].ok++});
   const lvl=pc>=90?'ممتاز 🌟':pc>=75?'جيد جدًا 👏':pc>=60?'جيد 👍':pc>=50?'مقبول 🙂':'يحتاج مراجعة 💪';
   H.innerHTML='<div class="res"><div class="big">'+pc+'%</div><b style="color:var(--ink);font-size:1.2rem">'+lvl+'</b><div class="muted">'+res.ok+' من '+res.n+' · الوقت '+Math.floor(res.sec/60)+':'+String(res.sec%60).padStart(2,'0')+(res.answered<res.n?' · ⏰ انتهى الوقت':'')+'</div></div>'+
    '<div class="card">'+Object.entries(by).map(([s,v])=>'<div class="sbj"><span class="n">'+subName(s)+'</span><div class="bar"><i style="width:'+Math.round(v.ok/v.n*100)+'%"></i></div><span class="p">'+v.ok+'/'+v.n+'</span></div>').join('')+'</div>'+
    (res.wrong.length?'<h2>❌ أخطاؤك ('+res.wrong.length+') — أُضيفت إلى «أخطائي»</h2>'+res.wrong.map(mHTML).join(''):'<div class="res">🎉 بدون أي خطأ!</div>')+
    '<button class="btn or w" id="exSh">📸 شارك نتيجتك</button><button class="btn ln w" id="exAg" style="margin-top:8px">🔁 امتحان جديد</button>';
   bindM(H);$('exSh').onclick=()=>shareCard({title:'امتحان '+(sel==='all'?'كل المواد':subName(sel).replace(/^\S+\s/,'')),big:pc+'%',line:lvl+' · '+res.ok+' من '+res.n});$('exAg').onclick=exam}})}}
function exHist(){const L=(S.ex||[]).slice(0,5);if(!L.length)return'';return'<h2>امتحاناتك السابقة</h2>'+L.map(x=>'<div class="lbr"><span class="r">📝</span><span>'+(x.sub==='all'?'كل المواد':subName(x.sub))+'</span><span class="pt">'+Math.round(x.s/x.n*100)+'%</span><span class="muted">'+fmtD(x.t)+'</span></div>').join('')}

/* ================= 4) أخطائي ================= */
function mHTML(m){const l=ALL[m.l];return'<div class="mi" data-k="'+(m.k||'')+'"><div class="muted" style="font-size:.78rem">'+(l?l.sub.icon+' '+esc(l.t):'')+(m.n>1?' · غلطت فيه '+m.n+' مرات':'')+'</div><div class="q">'+esc(m.q)+'</div><div class="a">'+(m.w>=0&&m.o[m.w]!=null?'<span class="x">❌ إجابتك: '+esc(m.o[m.w])+'</span><br>':'')+'<span class="v">✅ الصحيح: '+esc(m.o[m.r])+'</span></div>'+
 '<div class="b">'+(l?'<button data-ol="'+m.l+'">📖 افتح الدرس</button>':'')+(m.k?'<button data-del="'+m.k+'">🗑️ فهمته، احذفه</button>':'')+'</div></div>'}
function bindM(H){H.querySelectorAll('[data-ol]').forEach(b=>b.onclick=()=>{const l=ALL[b.dataset.ol];if(!l.free&&!active()){openPay();return}ovClose();openLesson(b.dataset.ol)});
 H.querySelectorAll('[data-del]').forEach(b=>b.onclick=()=>{S.mist=(S.mist||[]).filter(x=>x.k!==b.dataset.del);save();b.closest('.mi').remove();const c=$('mstC');if(c)c.textContent=S.mist.length})}
function mistakes(){const M=(S.mist||[]).filter(m=>!ALL[m.l]||ALL[m.l].grade===grade());let f='all';
 const draw=()=>{const L=M.filter(m=>f==='all'||(ALL[m.l]&&ALL[m.l].sub.id===f));
  $('mstL').innerHTML=L.length?L.map(mHTML).join(''):'<div class="res"><div class="big">🎉</div><b style="color:var(--ink)">لا توجد أخطاء هنا!</b><div class="muted">كل سؤال تغلط فيه في الدروس أو الامتحان يظهر هنا لتراجعه.</div></div>';bindM($('mstL'))};
 const subs=[...new Set(M.map(m=>ALL[m.l]&&ALL[m.l].sub).filter(Boolean))];
 const H=ov('❌ أخطائي','<div class="res" style="padding:14px"><b style="color:var(--ink)">عندك <span id="mstC">'+M.length+'</span> سؤال للمراجعة</b><div class="muted">راجعها قبل الامتحان. كل سؤال تجاوبه صح يختفي من القائمة ✨</div>'+(M.length?'<button class="btn or w" id="mstGo" style="margin-top:8px">🔁 راجع أخطائي الآن (+5 ⭐ لكل تصحيح)</button>':'')+'</div>'+
  (subs.length>1?'<div class="avg" id="mstF"><button data-f="all" class="on">الكل</button>'+subs.map(s=>'<button data-f="'+s.id+'">'+s.icon+' '+s.name+'</button>').join('')+'</div>':'')+'<div id="mstL"></div>');
 draw();H.querySelectorAll('#mstF button').forEach(b=>b.onclick=()=>{f=b.dataset.f;H.querySelectorAll('#mstF button').forEach(x=>x.classList.toggle('on',x===b));draw()});
 const g=$('mstGo');if(g)g.onclick=()=>{const Q=shf(M).slice(0,10);let fixed=0;quiz(H,Q,{tag:q=>q.n>1?'غلطت فيه '+q.n+' مرات':'',each:(q,good)=>{if(good){rightMist(q);fixed++}},done:res=>{addXP(fixed*5,'صحّحت '+fixed+' أخطاء');if(fixed===res.n&&res.n)confetti();
  H.innerHTML='<div class="res"><div class="big">'+fixed+'/'+res.n+'</div><b style="color:var(--ink)">'+(fixed?'صحّحت '+fixed+' من أخطائك! 💪':'لا بأس، راجع الدروس ثم حاول مرة أخرى')+'</b><div class="muted">باقي '+(S.mist||[]).length+' سؤال في القائمة</div><button class="btn or w" id="mstAg" style="margin-top:10px">📋 رجوع إلى أخطائي</button></div>';$('mstAg').onclick=mistakes}})}}

/* ================= 5) بطاقة الإنجاز ================= */
async function shareCard(o){const c=document.createElement('canvas');c.width=1080;c.height=1350;const x=c.getContext('2d');
 const gr=x.createLinearGradient(0,0,1080,1350);gr.addColorStop(0,'#1E2A5A');gr.addColorStop(1,'#2329C9');x.fillStyle=gr;x.fillRect(0,0,1080,1350);
 x.fillStyle='#ffffff10';for(let i=0;i<14;i++){x.beginPath();x.arc(Math.random()*1080,Math.random()*1350,40+Math.random()*120,0,7);x.fill()}
 try{await document.fonts.load('900 60px Cairo')}catch(e){}
 const img=new Image();img.src='data:image/svg+xml,'+encodeURIComponent(avatarSVG(S.av||{}));await new Promise(r=>{img.onload=r;img.onerror=r});
 x.fillStyle='#fff';x.beginPath();x.arc(540,330,190,0,7);x.fill();try{x.save();x.beginPath();x.arc(540,330,180,0,7);x.clip();x.drawImage(img,360,150,360,360);x.restore()}catch(e){}
 x.textAlign='center';x.direction='rtl';x.fillStyle='#fde047';x.font='900 56px Cairo, Tahoma';x.fillText(o.title||'',540,610);
 x.fillStyle='#fff';x.font='900 210px Cairo, Tahoma';x.fillText(o.big||'',540,850);
 x.font='800 50px Cairo, Tahoma';x.fillStyle='#e0e7ff';wrapT(x,o.line||'',540,950,920,64);
 x.font='800 54px Cairo, Tahoma';x.fillStyle='#fff';x.fillText((S.user&&S.user.name)||'',540,1110);
 x.font='700 38px Cairo, Tahoma';x.fillStyle='#c3cbe6';x.fillText(grade().name+' · ⭐ '+points()+' نقطة · 🔥 '+streak()+' يوم',540,1170);
 x.fillStyle='#F28C38';x.beginPath();x.roundRect?x.roundRect(240,1220,600,90,45):x.rect(240,1220,600,90);x.fill();x.fillStyle='#2a1600';x.font='900 44px Cairo, Tahoma';x.fillText('📗 الكتاب الحي',540,1280);
 c.toBlob(async b=>{const f=new File([b],'انجازي.png',{type:'image/png'});const txt=(o.text||('🏆 '+(o.title||'')+' '+(o.big||'')+' في تطبيق «الكتاب الحي»'))+'\n'+appUrl();
  if(navigator.canShare&&navigator.canShare({files:[f]})){try{await navigator.share({files:[f],text:txt});return}catch(e){if(e&&e.name==='AbortError')return}}
  const u=URL.createObjectURL(b);ask('📸 بطاقة إنجازك','<img src="'+u+'" style="width:100%;border-radius:14px"><a class="btn ln w" style="display:block;text-align:center;text-decoration:none;margin-top:8px" download="انجازي.png" href="'+u+'">⬇️ حفظ الصورة</a><a class="btn wa w" style="display:block;text-align:center;text-decoration:none;margin-top:8px" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent(txt)+'">📲 أرسل على واتساب</a><div class="muted" style="font-size:.8rem;margin-top:6px">احفظ الصورة ثم أضفها في الحالة (الستوري) 😎</div>',null,null)},'image/png')}
function wrapT(x,t,cx,y,w,lh){const ws=t.split(' ');let line='';ws.forEach(wd=>{const tt=line?line+' '+wd:wd;if(x.measureText(tt).width>w&&line){x.fillText(line,cx,y);y+=lh;line=wd}else line=tt});if(line)x.fillText(line,cx,y)}
window.shareCard=shareCard;

/* ================= 6) شخصيتي (أفاتار) ================= */
const SKIN=['#f6cfa8','#e8b48a','#c98b5e','#8d5a3b'],HAIRC=['#3b2516','#111111','#7a4a24','#c9a227'],SHIRT=['#2329C9','#2e9e5b','#e5484d','#7048e8','#f28c38','#0ea5e9'];
const HAIR=[['قصير',0],['مجعّد',0],['طويل',0],['حجاب',0]];
const ACC=[['cap','🎓 قبعة التخرج',100],['gl','👓 نظارة',300],['hp','🎧 سماعات',600],['bd','⭐ وسام النجمة',1000],['bag','🎒 حقيبة',1500],['crown','👑 تاج الأبطال',2500]];
function avatarSVG(a){a=a||{};const sk=SKIN[a.sk||0],hc=HAIRC[a.hc||0],sh=SHIRT[a.sh==null?0:a.sh],h=a.h||0,A=a.acc||{cap:1};
 const skD=sk==='#f6cfa8'?'#f2c39b':sk==='#e8b48a'?'#d9a074':sk==='#c98b5e'?'#b97a4e':'#7a4c30';let s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">';
 if(A.bag)s+='<rect x="12" y="88" width="26" height="30" rx="6" fill="#f28c38"/><rect x="16" y="96" width="18" height="8" rx="3" fill="#fbbf77"/>';
 if(h===2)s+='<path d="M34 56c-4 22 2 40 8 46h36c6-6 12-24 8-46z" fill="'+hc+'"/>';
 s+='<path d="M22 120c2-22 18-34 38-34s36 12 38 34z" fill="'+sh+'"/>';
 if(h===3)s+='<path d="M30 60c0-22 13-36 30-36s30 14 30 36c0 14-6 26-14 34H44c-8-8-14-20-14-34z" fill="#c2185b"/><path d="M26 120c4-20 16-30 34-30s30 10 34 30z" fill="#c2185b"/>';
 else s+='<path d="M48 86l12 16 12-16z" fill="#fff"/><path d="M57 92h6l2 22h-10z" fill="#fde047"/>';
 if(A.bd)s+='<path d="M80 98l2.5 5 5.5.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.5-.8z" fill="#fde047" stroke="#b45309" stroke-width=".8"/>';
 s+='<rect x="52" y="74" width="16" height="16" rx="6" fill="'+skD+'"/>';
 if(h!==3)s+='<ellipse cx="35" cy="60" rx="4.5" ry="7" fill="'+skD+'"/><ellipse cx="85" cy="60" rx="4.5" ry="7" fill="'+skD+'"/>';
 s+='<ellipse cx="60" cy="58" rx="'+(h===3?22:24)+'" ry="'+(h===3?24:26)+'" fill="'+sk+'"/>';
 if(h===0)s+='<path d="M36 52c0-16 10-24 24-24s24 8 24 24c-6-6-14-8-24-8s-18 2-24 8z" fill="'+hc+'"/>';
 if(h===1)s+='<g fill="'+hc+'">'+[38,46,54,62,70,78,82].map((xx,i)=>'<circle cx="'+xx+'" cy="'+(36+(i%2)*3+(xx<44||xx>78?8:0))+'" r="7"/>').join('')+'<circle cx="60" cy="31" r="8"/></g>';
 if(h===2)s+='<path d="M36 56c0-18 10-28 24-28s24 10 24 28c-4-10-12-14-24-14s-20 4-24 14z" fill="'+hc+'"/>';
 if(h===3)s+='<path d="M38 50c2-14 11-21 22-21s20 7 22 21c-6-5-13-7-22-7s-16 2-22 7z" fill="#e91e63"/>';
 s+='<ellipse cx="51" cy="60" rx="3" ry="3.6" fill="#2b1a10"/><ellipse cx="69" cy="60" rx="3" ry="3.6" fill="#2b1a10"/><circle cx="52" cy="59" r="1" fill="#fff"/><circle cx="70" cy="59" r="1" fill="#fff"/>';
 s+='<path d="M46 52q5-3 10 0M64 52q5-3 10 0" stroke="#3b2516" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M51 71q9 8 18 0" stroke="#b5533c" stroke-width="2.6" fill="none" stroke-linecap="round"/><circle cx="45" cy="68" r="3.5" fill="#f4a3a0" opacity=".55"/><circle cx="75" cy="68" r="3.5" fill="#f4a3a0" opacity=".55"/>';
 if(A.gl)s+='<g stroke="#111" stroke-width="2" fill="#ffffff55"><circle cx="51" cy="60" r="7"/><circle cx="69" cy="60" r="7"/><path d="M58 60h4M44 58l-8-3M76 58l8-3"/></g>';
 if(A.hp)s+='<path d="M33 60c0-20 12-32 27-32s27 12 27 32" stroke="#334155" stroke-width="5" fill="none"/><rect x="27" y="54" width="10" height="16" rx="4" fill="#e5484d"/><rect x="83" y="54" width="10" height="16" rx="4" fill="#e5484d"/>';
 if(A.crown)s+='<path d="M40 30l6-16 8 10 6-14 6 14 8-10 6 16z" fill="#fbbf24" stroke="#b45309" stroke-width="1.2"/><circle cx="60" cy="18" r="2.5" fill="#e5484d"/>';
 else if(A.cap)s+='<path d="M38 38q22-10 44 0v8q-22-8-44 0z" fill="#16183d"/><path d="M60 14l42 16-42 16-42-16z" fill="#1f2257"/><path d="M60 18l34 12-34 12-34-12z" fill="#2a2e75"/><circle cx="60" cy="30" r="3" fill="#ffc83d"/><path d="M60 30q24 2 30 4v18" stroke="#ffc83d" stroke-width="2.4" fill="none"/><path d="M87 50h6l1 10h-8z" fill="#ffc83d"/>';
 return s+'</svg>'}
window.avatarSVG=avatarSVG;
function avatarEd(){const a=S.av=S.av||{sk:0,h:0,hc:0,sh:0,acc:{cap:1}};a.acc=a.acc||{};const P=points();
 const H=ov('🧑‍🎓 شخصيتي','<div class="avw" id="avP"></div><div class="muted" style="text-align:center">⭐ '+P+' نقطة · اجمع نقاطًا أكثر لتفتح أدوات جديدة</div><div id="avO"></div>');
 const sw=(arr,k)=>arr.map((c,i)=>'<button class="sw'+((a[k]||0)===i?' on':'')+'" data-k="'+k+'" data-v="'+i+'" style="background:'+c+'"></button>').join('');
 const draw=()=>{$('avP').innerHTML=avatarSVG(a);
  $('avO').innerHTML='<h2>لون البشرة</h2><div class="avg">'+sw(SKIN,'sk')+'</div><h2>الشعر</h2><div class="avg">'+HAIR.map((x,i)=>'<button data-k="h" data-v="'+i+'" class="'+((a.h||0)===i?'on':'')+'">'+x[0]+'</button>').join('')+'</div>'+(a.h===3?'':'<div class="avg">'+sw(HAIRC,'hc')+'</div>')+
   '<h2>لون الزي</h2><div class="avg">'+sw(SHIRT,'sh')+'</div><h2>الإضافات</h2><div class="avg">'+ACC.map(([k,t,need])=>'<button data-acc="'+k+'" class="'+(a.acc[k]?'on ':'')+(P<need?'lk':'')+'">'+t+(P<need?' 🔒'+need:'')+'</button>').join('')+'</div>';
  $('avO').querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{a[b.dataset.k]=+b.dataset.v;save();draw()});
  $('avO').querySelectorAll('[data-acc]').forEach(b=>b.onclick=()=>{const it=ACC.find(x=>x[0]===b.dataset.acc);if(P<it[2]){toast('🔒 تحتاج '+it[2]+' نقطة (عندك '+P+')');return}a.acc[it[0]]=a.acc[it[0]]?0:1;if(it[0]==='crown'&&a.acc.crown)a.acc.cap=0;if(it[0]==='cap'&&a.acc.cap)a.acc.crown=0;save();draw()})};draw()}

/* ================= 7) رحلتي في ليبيا ================= */
const LY=[[11.56,33.17],[12.3,32.85],[13.2,32.9],[14.2,32.7],[15.1,32.4],[15.6,31.6],[16.6,31.2],[18.0,30.7],[19.0,30.3],[19.6,30.4],[20.1,31.0],[20.07,32.1],[20.6,32.5],[21.6,32.9],[22.6,32.76],[23.2,32.4],[23.97,32.08],[25.15,31.6],[24.85,30.5],[24.98,29.2],[25.0,22.0],[24.0,20.0],[24.0,19.5],[15.98,23.45],[14.2,22.6],[11.98,23.5],[11.5,24.3],[10.25,24.6],[9.9,25.4],[9.4,26.2],[9.85,27.5],[9.8,28.5],[9.5,30.23],[10.2,30.8],[10.3,31.7],[11.0,32.3]];
const CITIES=[['طرابلس',13.19,32.89,'العاصمة، وفيها السرايا الحمراء'],['الزاوية',12.73,32.76,'مدينة ساحلية غرب طرابلس'],['غريان',13.02,32.17,'عروس الجبل وبيوتها المحفورة تحت الأرض'],['نالوت',10.98,31.87,'قصرها القديم لتخزين الحبوب'],['غدامس',9.5,30.13,'لؤلؤة الصحراء ومدينة الأزقة المسقوفة'],['الخمس',14.26,32.65,'بجوارها آثار لبدة الكبرى'],['مصراتة',15.09,32.38,'مدينة التجارة والصناعة'],['سرت',16.59,31.2,'في منتصف ساحل ليبيا'],['هون',15.95,29.12,'من مدن الجفرة ونخيلها'],['البريقة',19.58,30.41,'ميناء النفط على خليج سرت'],['أجدابيا',20.22,30.76,'بوابة الجنوب الشرقي'],['بنغازي',20.07,32.12,'ثاني أكبر مدن ليبيا'],['البيضاء',21.75,32.76,'في قلب الجبل الأخضر'],['شحات',21.86,32.82,'آثار قورينا الإغريقية'],['درنة',22.64,32.76,'مدينة الشلال والياسمين'],['طبرق',23.96,32.08,'ميناء طبيعي في أقصى الشرق'],['جالو',21.55,29.03,'واحة في قلب الصحراء'],['الكفرة',23.31,24.18,'واحات الجنوب الشرقي البعيدة'],['سبها',14.43,27.04,'عاصمة الجنوب'],['أوباري',12.78,26.59,'بحيراتها وسط الرمال'],['غات',10.17,24.96,'جبال أكاكوس ورسومها الصخرية'],['مرزق',13.92,25.92,'بحر الرمال العظيم']];
const PJ=(lo,la)=>[(lo-9)*30+10,(33.6-la)*30+10];
function gradeProg(){const g=grade();const L=[];(g.subjects||[]).forEach(s=>(s.chapters||[]).forEach(c=>c.lessons.forEach(l=>L.push(l))));const n=L.filter(l=>S.stats[l.id]&&S.stats[l.id].opened).length;return{n,t:L.length}}
function litN(){const p=gradeProg();if(!p.t)return 1;return Math.max(1,Math.min(CITIES.length,1+Math.floor(p.n/p.t*(CITIES.length-1)+1e-9)))}
function mapView(){const p=gradeProg(),n=litN();const per=p.t/(CITIES.length-1);const need=n<CITIES.length?Math.max(1,Math.ceil(n*per)-p.n):0;
 const poly=LY.map(c=>PJ(...c).join(',')).join(' ');
 let svg='<svg viewBox="0 -28 510 470"><polygon points="'+poly+'" fill="#fde9c3" stroke="#c08a3e" stroke-width="2.5" stroke-linejoin="round"/><path d="M0 0H510V'+PJ(0,33.4)[1]+'" fill="none"/>';
 const pts=CITIES.map(c=>PJ(c[1],c[2]));svg+='<polyline points="'+pts.slice(0,n).map(p=>p.join(',')).join(' ')+'" fill="none" stroke="#F28C38" stroke-width="2.5" stroke-dasharray="6 5"/>';
 CITIES.forEach((c,i)=>{const [x,y]=pts[i],on=i<n;svg+='<g data-c="'+i+'" style="cursor:pointer"><circle cx="'+x+'" cy="'+y+'" r="'+(on?8:5)+'" fill="'+(on?'#fde047':'#cbd5e1')+'" stroke="'+(on?'#b45309':'#94a3b8')+'" stroke-width="2"'+(i===n-1?' class="pulse" style="transform-origin:'+x+'px '+y+'px"':'')+'/>'+(on?'<text x="'+x+'" y="'+(y-11)+'" font-size="12" font-weight="800" text-anchor="middle" fill="#1E2A5A" font-family="Cairo">'+c[0]+'</text>':'')+'</g>'});
 svg+='<text x="300" y="-8" font-size="14" fill="#3b82f6" text-anchor="middle" font-family="Cairo" font-weight="700">〰️ البحر المتوسط 〰️</text></svg>';
 const H=ov('🗺️ رحلتي في ليبيا','<div class="res" style="padding:12px"><b style="color:var(--ink)">أضأت '+n+' من '+CITIES.length+' مدينة ✨</b><div class="muted">كل ما تفتح دروسًا جديدة تضيء مدينة جديدة'+(need?' · المدينة التالية «'+CITIES[n][0]+'» بعد '+need+' دروس':' · 🏆 أضأت ليبيا كلها!')+'</div></div><div class="map">'+svg+'</div><div class="card" id="mapI" style="text-align:center"><b style="color:var(--ink)">اضغط على مدينة 👆</b></div><button class="btn or w" id="mapS">📸 شارك رحلتي</button>');
 H.querySelectorAll('[data-c]').forEach(g=>g.onclick=()=>{const i=+g.dataset.c,c=CITIES[i];$('mapI').innerHTML=i<n?'<b style="color:var(--ink)">📍 '+c[0]+'</b><div class="muted">'+c[3]+'</div>':'<b style="color:var(--ink)">🔒 '+c[0]+'</b><div class="muted">أكمل دروسًا أكثر لتصل إليها</div>'});
 $('mapS').onclick=()=>shareCard({title:'رحلتي في ليبيا 🗺️',big:n+'/'+CITIES.length,line:'وصلت إلى «'+CITIES[n-1][0]+'» في رحلة التعلم'})}

/* ================= 8) المتصدرون ================= */
const CITY_L=['طرابلس','بنغازي','مصراتة','الزاوية','البيضاء','سبها','طبرق','درنة','سرت','زليتن','الخمس','غريان','صبراتة','زوارة','أجدابيا','المرج','ترهونة','بني وليد','نالوت','يفرن','غدامس','الكفرة','أوباري','غات','مرزق','هون','جالو','العجيلات','صرمان','جنزور','تاجوراء','أخرى'];
function schoolForm(after){const u=S.user;ask('🏫 مدرستك','<p class="muted">اكتب اسم مدرستك ومدينتك لتنافس زملاءك ويظهر اسم مدرستك في الترتيب.</p><div class="fld"><label>اسم المدرسة</label><input id="scN" value="'+esc(u.school||'')+'" placeholder="مثال: مدرسة شهداء أبوسليم"></div><div class="fld"><label>المدينة</label><select id="scC">'+CITY_L.map(c=>'<option'+(u.city===c?' selected':'')+'>'+c+'</option>').join('')+'</select></div>','حفظ',
 async()=>{const n=$('scN').value.trim();if(n.length<3)return'اكتب اسم المدرسة';const r=await rpc('lb_set_profile',{p_token:S.tok,p_school:n,p_city:$('scC').value});if(r.err)return r.err;S.user=r.user;S.student=r.user;store();toast('✅ تم حفظ مدرستك');after&&after()})}
async function board(){push();let tab='sch';const H=ov('🏆 المتصدرون','<div class="muted" style="text-align:center">نقاط هذا الأسبوع (آخر 7 أيام) · '+grade().name+'</div><div class="tabs" id="lbT"><button data-t="sch" class="on">🏫 مدرستي</button><button data-t="top">🇱🇾 ليبيا</button><button data-t="schools">🏆 المدارس</button></div><div id="lbL" style="margin-top:10px"><div class="muted" style="text-align:center">⏳ جارٍ التحميل…</div></div>');
 await new Promise(r=>setTimeout(r,600));const r=await rpc('lb_board',{p_token:S.tok});if(r.err){$('lbL').innerHTML='<div class="warn">'+esc(r.err)+'</div>';return}
 const me=r.me||{};const medal=i=>['🥇','🥈','🥉'][i]||(i+1);
 const draw=()=>{const L=$('lbL');let h='<div class="res" style="padding:12px"><b style="color:var(--ink)">ترتيبك: '+(me.rank||'–')+' · نقاطك هذا الأسبوع ⭐ '+(me.pts||0)+'</b>'+(me.school?'<div class="muted">🏫 '+esc(me.school)+' · '+esc(me.city||'')+' <a href="#" id="lbE">تعديل</a></div>':'')+'</div>';
  if(tab==='sch'){if(!me.school)h+='<div class="card" style="text-align:center"><b style="color:var(--ink)">أضف مدرستك لتنافس زملاءك 🏫</b><button class="btn or w" id="lbA" style="margin-top:8px">إضافة مدرستي</button></div>';
   else h+=(r.sch||[]).map((x,i)=>'<div class="lbr'+(x.me?' me':'')+'"><span class="r">'+medal(i)+'</span><b style="color:var(--ink)">'+esc(x.n)+(x.me?' (أنت)':'')+'</b><span class="pt">⭐ '+x.p+'</span></div>').join('')+((r.sch||[]).length<2?'<div class="muted" style="text-align:center;margin-top:8px">ادعُ زملاءك في المدرسة ليتنافسوا معك 😉</div>':'')}
  if(tab==='top')h+=(r.top||[]).length?(r.top||[]).map((x,i)=>'<div class="lbr'+(x.me?' me':'')+'"><span class="r">'+medal(i)+'</span><span><b style="color:var(--ink)">'+esc(x.n)+'</b><br><span class="muted" style="font-size:.78rem">'+esc(x.s||'')+(x.c?' · '+esc(x.c):'')+'</span></span><span class="pt">⭐ '+x.p+'</span></div>').join(''):'<div class="muted" style="text-align:center">لا أحد في الترتيب بعد هذا الأسبوع… كن الأول! 🚀</div>';
  if(tab==='schools')h+=(r.schools||[]).length?(r.schools||[]).map((x,i)=>'<div class="lbr'+(x.me?' me':'')+'"><span class="r">'+medal(i)+'</span><span><b style="color:var(--ink)">'+esc(x.s)+'</b><br><span class="muted" style="font-size:.78rem">'+esc(x.c||'')+' · '+x.n+' طالب</span></span><span class="pt">⭐ '+x.p+'</span></div>').join(''):'<div class="muted" style="text-align:center">أضف مدرستك لتظهر هنا 🏫</div>';
  h+='<div class="muted" style="text-align:center;font-size:.78rem;margin-top:10px">يظهر الاسم الأول والحرف الأول من اسم الأب فقط حفاظًا على الخصوصية</div>';
  L.innerHTML=h;const a=$('lbA')||null;if(a)a.onclick=()=>schoolForm(board);const e=$('lbE');if(e)e.onclick=ev=>{ev.preventDefault();schoolForm(board)}};
 H.querySelectorAll('#lbT button').forEach(b=>b.onclick=()=>{tab=b.dataset.t;H.querySelectorAll('#lbT button').forEach(x=>x.classList.toggle('on',x===b));draw()});draw()}

/* ================= 9) الهدف والمكافأة ================= */
const GT={les:'دروس جديدة',pts:'نقطة',sub:'إنهاء مادة'};
function goalVal(goal,stats,xp){stats=stats||{};if(goal.type==='les')return Object.values(stats).filter(x=>x.opened).length;if(goal.type==='pts')return Object.values(stats).reduce((a,x)=>a+(x.ok||0)*10,0)+(xp||0);
 if(goal.type==='sub'){const s=grade().subjects.find(x=>x.id===goal.subj);return s?subjProg(s,stats):0}return 0}
function goalProg(goal,stats,xp){const v=goalVal(goal,stats,xp);const target=goal.type==='sub'?100:goal.n;const got=goal.type==='sub'?v:Math.max(0,v-(goal.base||0));return{got:Math.min(got,target),target,pc:Math.min(100,Math.round(got/target*100))}}
function goalText(goal){return goal.type==='sub'?'أنهِ مادة '+subName(goal.subj):goal.type==='les'?'افتح '+goal.n+' دروس جديدة':'اجمع '+goal.n+' نقطة'}
function goalBox(){const el=$('goalBox');if(!el)return;const goal=S.user&&S.user.goal;if(!goal||!goal.type){el.innerHTML='';return}
 const p=goalProg(goal,S.stats,S.xp);const done=p.pc>=100;
 el.innerHTML='<div class="goal'+(done?' done':'')+'"><b>🎁 مكافأة من '+esc(goal.by||'ولي الأمر')+'</b><div style="font-size:.95rem;margin:2px 0">'+esc(goalText(goal))+' ← وتحصل على: <b>'+esc(goal.reward||'مفاجأة')+'</b></div><div class="bar"><i style="width:'+p.pc+'%"></i></div><div style="font-size:.85rem;margin-top:4px">'+(done?'🎉 أنجزت الهدف! أخبر ولي أمرك 👇':p.got+' من '+p.target+(goal.type==='sub'?'%':''))+'</div>'+(done?'<a class="btn" style="background:#fff;color:#15803d;display:block;text-align:center;text-decoration:none;margin-top:8px" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent('🎉 أنجزت الهدف في الكتاب الحي: '+goalText(goal)+'\nحان وقت المكافأة: '+(goal.reward||'')+' 🎁')+'">📲 أخبر ولي أمرك على واتساب</a>':'')+'</div>';
 if(done&&!goal.done){goal.done=Date.now();rpc('lb_goal_done',{p_token:S.tok});confetti();addXP(50,'أنجزت هدف المكافأة')}}
function goalForm(k){const g=GRADES.find(x=>x.id===k.grade)||grade();const subs=(g.subjects||[]).filter(s=>!s.soon);
 ask('🎁 مكافأة لـ '+k.name,'<p class="muted">حدّد هدفًا لابنك ومكافأة تحفّزه. يظهر الهدف في تطبيقه مع شريط تقدّم، ويصلك هنا عندما ينجزه.</p>'+
  '<div class="fld"><label>الهدف</label><select id="gT"><option value="les">يفتح دروسًا جديدة</option><option value="pts">يجمع نقاطًا</option><option value="sub">ينهي مادة كاملة</option></select></div>'+
  '<div class="fld" id="gNf"><label>العدد</label><select id="gN"></select></div><div class="fld" id="gSf" style="display:none"><label>المادة</label><select id="gS">'+subs.map(s=>'<option value="'+s.id+'">'+s.icon+' '+s.name+'</option>').join('')+'</select></div>'+
  '<div class="fld"><label>المكافأة</label><input id="gR" placeholder="مثال: نطلع للبحر يوم الجمعة 🏖️" maxlength="80"></div>'+(k.goal?'<button class="btn ln w" id="gDel">🗑️ إلغاء الهدف الحالي</button>':''),'حفظ الهدف',
  async()=>{const t=$('gT').value,rw=$('gR').value.trim();if(rw.length<2)return'اكتب المكافأة';const P=k.progress||{};
   const goal={type:t,n:+$('gN').value||0,subj:t==='sub'?$('gS').value:null,reward:rw};goal.base=t==='sub'?0:goalVal(goal,P.stats,P.xp);
   const r=await rpc('lb_set_goal',{p_token:S.tok,p_child:k.id,p_goal:goal});if(r.err)return r.err;toast('✅ تم! سيرى ابنك الهدف في تطبيقه');await loadKids()});
 const fill=()=>{const t=$('gT').value;$('gNf').style.display=t==='sub'?'none':'';$('gSf').style.display=t==='sub'?'':'none';$('gN').innerHTML=(t==='les'?[3,5,10,20]:[200,500,1000,2000]).map(x=>'<option value="'+x+'">'+x+(t==='les'?' دروس':' نقطة')+'</option>').join('')};$('gT').onchange=fill;fill();
 const d=$('gDel');if(d)d.onclick=async()=>{const r=await rpc('lb_set_goal',{p_token:S.tok,p_child:k.id,p_goal:null});if(r.err)return toast(r.err);$('fm').classList.remove('on');toast('تم إلغاء الهدف');loadKids()}}

/* ================= 10) التقرير الأسبوعي ================= */
function weekData(P){const wk=(P&&P.wk)||{},L=(P&&P.log)||[];const days=[];for(let i=6;i>=0;i--){const d=new Date(Date.now()-i*DAY).toISOString().slice(0,10);days.push([d,wk[d]||{p:0,s:0}])}
 const since=Date.now()-7*DAY;const les=new Set(L.filter(x=>x.t>=since).map(x=>x.id));
 return{days,pts:days.reduce((a,x)=>a+(x[1].p||0),0),min:Math.round(days.reduce((a,x)=>a+(x[1].s||0),0)/60),act:days.filter(x=>x[1].p||x[1].s).length,les:les.size}}
function weekHTML(W){const mx=Math.max(1,...W.days.map(x=>x[1].s||0));const dn=['أحد','اثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت'];
 return'<div class="stat3"><div class="st3"><b>'+W.min+'</b><span>دقيقة</span></div><div class="st3"><b>'+W.les+'</b><span>درس</span></div><div class="st3"><b>'+W.act+'/7</b><span>أيام نشاط</span></div></div><div class="wk7">'+W.days.map(([d,v])=>'<div><i style="height:'+Math.round((v.s||0)/mx*50)+'px"></i>'+dn[new Date(d).getDay()]+'</div>').join('')+'</div>'}
function weekText(name,W,P){const M=((P&&P.mist)||[]).length;return'📊 التقرير الأسبوعي – الكتاب الحي\n👦 '+name+'\n⏱️ وقت التعلم: '+W.min+' دقيقة\n📚 دروس هذا الأسبوع: '+W.les+'\n📅 أيام النشاط: '+W.act+' من 7\n⭐ نقاط الأسبوع: '+W.pts+(M?'\n❌ أسئلة تحتاج مراجعة: '+M:'')+'\n'+(W.act>=5?'🌟 أسبوع ممتاز!':W.act>=3?'👍 أسبوع جيد':'💪 نحتاج نشاطًا أكثر الأسبوع القادم')}
function myReport(){const W=weekData({wk:S.wk,log:S.log});const txt=weekText(S.user.name,W,{mist:S.mist});
 ov('📊 تقريري الأسبوعي','<div class="card">'+weekHTML(W)+'</div><div class="card" style="white-space:pre-line;font-size:.92rem">'+esc(txt)+'</div><a class="btn wa w" style="display:block;text-align:center;text-decoration:none" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent(txt)+'">📲 أرسل التقرير لبابا أو ماما</a>')}

/* ================= الشاشة الرئيسية ================= */
window.funHome=function(){if(!isStu())return;const hero=document.querySelector('#s-home .hero');
 if(hero){let av=hero.querySelector('.heroav');if(!av){av=document.createElement('div');av.className='heroav';av.onclick=avatarEd;hero.appendChild(av);hero.style.paddingLeft='110px'}av.innerHTML=avatarSVG(S.av||{})}
 let gb=$('goalBox');if(!gb){gb=document.createElement('div');gb.id='goalBox';$('hPlan').after(gb)}goalBox();
 let fb=$('funBar');if(!fb){fb=document.createElement('div');fb.id='funBar';fb.className='fbar';gb.after(fb)}
 const dqDone=S.dq&&S.dq.d===td(),M=(S.mist||[]).filter(m=>!ALL[m.l]||ALL[m.l].grade===grade()).length,n=litN();
 fb.innerHTML='<button data-f="dq" class="'+(dqDone?'done':'hot')+'"><i>🎯</i>سؤال اليوم'+(dqDone?' ✓':'<em>جديد</em>')+'</button><button data-f="ch"><i>⚔️</i>تحدّي صديق</button><button data-f="ex"><i>📝</i>وضع الامتحان</button>'+
  '<button data-f="mi"><i>❌</i>أخطائي'+(M?'<em>'+M+'</em>':'')+'</button><button data-f="lb"><i>🏆</i>المتصدرون</button><button data-f="map"><i>🗺️</i>رحلتي '+n+'/'+CITIES.length+'</button>'+
  '<button data-f="av"><i>🧑‍🎓</i>شخصيتي</button><button data-f="rp"><i>📊</i>تقريري</button><button data-f="sh"><i>📸</i>شارك إنجازي</button>';
 const A={dq:daily,ch:challengeNew,ex:exam,mi:mistakes,lb:board,map:mapView,av:avatarEd,rp:myReport,sh:()=>shareCard({title:'إنجازي في الكتاب الحي',big:'⭐ '+points(),line:'🔥 '+streak()+' يوم متتالي · 🗺️ '+litN()+' مدينة'})};
 fb.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>A[b.dataset.f]());
 if(n>(S.mapN||0)){const was=S.mapN||0;S.mapN=n;save();if(was)setTimeout(()=>{toast('🗺️ أضأت مدينة جديدة: '+CITIES[n-1][0]+'!');confetti()},600)}};

/* ================= ولي الأمر ================= */
window.funParent=function(k){let box=$('pFun');if(!box){box=document.createElement('div');box.id='pFun';const ref=$('pSubj').closest('.card');ref.parentElement.insertBefore(box,ref)}
 if(!k){box.innerHTML='';return}const P=k.progress||{},W=weekData(P),goal=k.goal;
 let gh='';if(goal&&goal.type){const p=goalProg(goal,P.stats,P.xp);gh='<div class="goal'+(p.pc>=100?' done':'')+'"><b>🎁 الهدف: '+esc(goalText(goal))+'</b><div style="font-size:.9rem">المكافأة: '+esc(goal.reward||'')+'</div><div class="bar"><i style="width:'+p.pc+'%"></i></div><div style="font-size:.85rem;margin-top:4px">'+(p.pc>=100?'🎉 أنجز ابنك الهدف! حان وقت المكافأة':p.got+' من '+p.target+(goal.type==='sub'?'%':''))+'</div><button class="btn" style="background:#fff;color:#5b21b6;margin-top:8px;width:100%" id="pGoal">✏️ تعديل الهدف</button></div>'}
 else gh='<div class="card" style="text-align:center"><b style="color:var(--ink)">🎁 مكافأة من بابا</b><div class="muted">حدّد هدفًا لابنك (دروس، نقاط، أو مادة كاملة) ومكافأة يحصل عليها عند إنجازه.</div><button class="btn or w" id="pGoal" style="margin-top:8px">➕ حدّد هدفًا ومكافأة</button></div>';
 const txt=weekText(k.name,W,P);
 box.innerHTML=gh+'<h2>📅 هذا الأسبوع</h2><div class="card">'+weekHTML(W)+'<div class="muted" style="font-size:.85rem">⭐ '+W.pts+' نقطة هذا الأسبوع · ❌ '+((P.mist||[]).length)+' سؤال يحتاج مراجعة · 🗺️ '+avCities(P)+'</div><a class="btn wa w" style="display:block;text-align:center;text-decoration:none;margin-top:8px" target="_blank" rel="noopener" href="https://wa.me/?text='+encodeURIComponent(txt)+'">📲 شارك التقرير على واتساب</a></div>';
 $('pGoal').onclick=()=>goalForm(k)};
function avCities(P){return 'وصل إلى '+Math.max(1,(P&&P.mapN)||1)+' مدن في رحلة ليبيا'}

/* ================= رابط التحدي عند الفتح ================= */
const ch=new URLSearchParams(location.search).get('ch');
if(ch){try{history.replaceState(null,'',location.pathname)}catch(e){}setTimeout(()=>challengeOpen(ch),400)}
setTimeout(()=>{try{const on=document.querySelector('.scr.on');if(on&&on.id==='s-home')renderHome();if(on&&on.id==='s-parent')renderParent(true)}catch(e){}},0);
window.FUN={daily,challengeNew,challengeOpen,exam,mistakes,board,mapView,avatarEd,myReport,shareCard};
})();
