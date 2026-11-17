// app.js — v16.13 (screens + input; v16d: sound unlock, Lab terminal, Quest log, pixel popups + menu). Game rules live in engine.js.

// ---------- sound (v16d fix) ----------
// iOS creates an AudioContext in the "suspended" state unless it is made inside a touch, and never
// starts it by itself. So: make + resume the context on the first touch/key (and play one silent
// sample, which is what really unlocks iOS), resume again before every sound and when the app comes
// back to the foreground. Every sound still goes through playChime/playTune, which check S.soundEnabled.
let audioCtx=null,audioUnlocked=false;
function getAudioCtx(){
  if(audioCtx)return audioCtx;
  let AC=typeof window!=='undefined'&&(window.AudioContext||window.webkitAudioContext);
  if(typeof AC!=='function')return null;
  try{audioCtx=new AC()}catch(e){audioCtx=null}
  return audioCtx;
}
function resumeAudio(){
  let ctx=audioCtx;
  if(!ctx||!ctx.resume||ctx.state==='running'||ctx.state==='closed')return Promise.resolve(ctx);
  try{let p=ctx.resume();return p&&p.then?p.then(()=>ctx,()=>ctx):Promise.resolve(ctx)}
  catch(e){return Promise.resolve(ctx)}
}
function unlockAudio(){
  let ctx=getAudioCtx();
  if(!ctx)return;
  resumeAudio();
  if(audioUnlocked)return;
  try{
    let buf=ctx.createBuffer(1,1,22050),src=ctx.createBufferSource();
    src.buffer=buf;src.connect(ctx.destination);
    if(src.start)src.start(0);else if(src.noteOn)src.noteOn(0);
    audioUnlocked=true;
  }catch(e){console.warn('Audio unlock failed',e)}
}
function initAudioUnlock(){
  if(typeof document==='undefined'||!document.addEventListener)return;
  ['pointerdown','touchend','keydown'].forEach(ev=>document.addEventListener(ev,unlockAudio,{capture:true,passive:true}));
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')resumeAudio()});
}
// run fn(ctx) once the context is running (a suspended context would swallow the notes)
function withAudio(fn){
  if(!S.soundEnabled)return;
  let ctx=getAudioCtx();
  if(!ctx)return;
  let go=()=>{try{fn(ctx)}catch(e){console.warn('Audio playback failed',e)}};
  if(ctx.state==='suspended')resumeAudio().then(go);
  else go();
}
function playChime(freq=880,duration=0.3){
  withAudio(ctx=>{
    const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime;
    o.frequency.value=freq;o.type='sine';
    g.gain.setValueAtTime(0.15,t);
    g.gain.exponentialRampToValueAtTime(0.001,t+duration);
    o.connect(g);g.connect(ctx.destination);
    o.start(t);o.stop(t+duration);
  });
}
// 8-bit style melody: notes = [[frequency, seconds], ...] played back to back with a square wave
function playTune(notes){
  if(!notes||!notes.length)return;
  withAudio(ctx=>{
    let t=ctx.currentTime+0.02;
    notes.forEach(([f,d])=>{
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.type='square';o.frequency.value=f;
      g.gain.setValueAtTime(0.06,t);
      g.gain.setValueAtTime(0.06,t+d*0.8);
      g.gain.linearRampToValueAtTime(0.0001,t+d);
      o.connect(g);g.connect(ctx.destination);
      o.start(t);o.stop(t+d+0.01);
      t+=d;
    });
  });
}
function toggleSound(){S.soundEnabled=!S.soundEnabled;saveState();render();if(S.soundEnabled)testSound()}
function testSound(){
  if(!S.soundEnabled){showToast('Sound effects are OFF. Switch them on first.');return}
  unlockAudio();
  playTune([[523,.08],[659,.08],[784,.08],[1047,.22]]);
}

function escapeHtml(str){
  return String(str||'').replace(/[&<>"']/g, ch => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[ch]));
}

function loadAdminOverrides(){
  try{
    const raw=localStorage.getItem('azureAcademyV13Config');
    if(!raw)return;
    const cfg=JSON.parse(raw);
    if(cfg.dropTables)AZURE_DB.dropTables=cfg.dropTables;
    if(cfg.loot)AZURE_DB.loot=cfg.loot;
  }catch(e){console.warn('Admin override load failed',e)}
}
loadAdminOverrides();

// Engine events -> UI
engineOn('milestone',m=>{if(typeof showAchievementToast==='function')showAchievementToast(`${m.day}-Day Streak!`,`+${m.shards} Shards`)});

let currentPage='quests';

function goTo(page){
  if(page==='quests')questScreen=null; // QUEST tab always lands on the map
  let changed=page!==currentPage;
  currentPage=page;
  document.querySelectorAll('.nav-item,.bn-item').forEach(n=>n.classList.toggle('active',n.dataset.page===page));
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  renderPage(page);
  closeMobileNav();
  if(changed&&typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0); // v16.10: a new page starts at the top
}
function toggleMobileNav(){
  let sb=document.getElementById('sidebar'),bd=document.getElementById('mobile-nav-backdrop');
  if(!sb||!bd)return;
  sb.classList.toggle('open');
  bd.classList.toggle('visible');
}
function closeMobileNav(){
  let sb=document.getElementById('sidebar'),bd=document.getElementById('mobile-nav-backdrop');
  if(!sb||!bd)return;
  sb.classList.remove('open');
  bd.classList.remove('visible');
}

function renderPage(page){
  newDay();applyTheme();maybeShowDailyFact();
  if(page==='quests')renderQuestsPage();
  else if(page==='shop')renderShopPage();
  else if(page==='exam')renderExamPage();
  else if(page==='learn')renderLearnPage();
  else if(page==='mastery')renderMasteryPage();
  else if(page==='collection')renderCollectionPage();
  else if(page==='profile')renderProfilePage();
  else if(page==='history')renderHistoryPage();
  refreshSidebar();
}
function render(){renderPage(currentPage);if(typeof checkLevelUpFX==='function')checkLevelUpFX()}
function mount(page,html){document.getElementById('page-'+page).innerHTML=html}

function msUntilMidnight(){
  let now=new Date();
  let next=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,0,0);
  return next-now;
}

function updateDayTimer(){
  let el=document.getElementById('day-timer');
  if(!el)return;
  let ms=msUntilMidnight();
  let h=Math.floor(ms/3600000),m=Math.floor((ms%3600000)/60000);
  el.innerHTML=`${sprite('hourglass',10)}<span>RESET IN ${h}H ${m}M</span>`;
  el.classList.toggle('urgent',h<2);
  let ht=document.getElementById('hud-timer');
  if(ht){ht.textContent=`${h}H ${m}M`;ht.classList.toggle('urgent',h<2&&!S.claimed.campaign)}
}

function updateChestBadge(){
  let el=document.getElementById('chest-badge');
  if(!el)return;
  let n=pendingChestCount();
  el.style.display=n>0?'flex':'none';
  el.textContent=n;
  let bn=document.getElementById('bn-chest-badge');
  if(bn){bn.textContent=n;bn.classList.toggle('show',n>0)}
}

// ---------- HUD (v16) ----------
function updateHud(){
  let lvl=levelOf(S.xp),into=S.xp-(lvl-1)*200,on=Math.floor(into/20);
  let set=(id,v)=>{let el=document.getElementById(id);if(el)el.textContent=v};
  set('hud-lvl','LV '+lvl);
  set('hud-name',(getProfile().name||'Hero').toUpperCase());
  let lootTitle=(typeof unlockedTitles==='function'&&unlockedTitles()[0])||null;
  set('hud-title',(lootTitle||levelTitle()).toUpperCase());
  set('hud-shards',S.shards);
  set('hud-streak',S.streak);
  let xp=document.getElementById('hud-xp');
  if(xp){
    let cells='';for(let i=0;i<10;i++)cells+=`<i class="${i<on?'on':''}"></i>`;
    xp.innerHTML=cells;
    xp.setAttribute('aria-valuenow',String(into));
  }
}
function initPixelChrome(){
  let put=(id,html)=>{let el=document.getElementById(id);if(el)el.innerHTML=html};
  put('hud-sprite',sprite(heroSpr('hero'),44));
  put('hud-shard-ic',sprite('shard',18));
  put('hud-flame-ic',sprite('flame',18));
  put('pet-sprite',sprite('blob',40));
  // v16d: every static pixel icon in index.html is a <span data-ic="name" data-size="n">
  document.querySelectorAll('[data-ic]').forEach(el=>{
    let n=el.dataset.ic;if(!SPRITES[n])return;
    el.innerHTML=sprite(n,parseInt(el.dataset.size,10)||(el.classList.contains('bn-ic')?20:18));
  });
}

const PROFILE_KEY='azureAcademyProfileV1';
function getProfile(){
  try{
    let raw=localStorage.getItem(PROFILE_KEY);
    if(raw)return JSON.parse(raw);
  }catch(e){}
  return {name:''};
}
function saveProfileData(p){
  try{localStorage.setItem(PROFILE_KEY,JSON.stringify(p))}catch(e){}
}
function setProfileName(name){
  let p=getProfile();p.name=(name||'').trim(); // keep other profile fields (avatar)
  saveProfileData(p);
  render();
}
// v16.14: hero look — 'm' (default, the original hero) or 'f'
function setHeroLook(look){
  let p=getProfile();p.avatar=look==='f'?'f':'m';
  saveProfileData(p);
  initPixelChrome();
  renderHeroCreatePick();
  render();
}
function toggleHeroLook(){setHeroLook(heroLook()==='f'?'m':'f')}
function renderHeroCreatePick(){
  let por=document.getElementById('hc-portrait-art');
  if(por)por.innerHTML=sprite(heroSpr('heroBig'),96);
  let look=heroLook();
  [['m','hc-look-m','hero'],['f','hc-look-f','heroF']].forEach(([k,id,spr])=>{
    let b=document.getElementById(id);if(!b)return;
    b.classList.toggle('sel',look===k);
    b.setAttribute('aria-pressed',look===k?'true':'false');
    let ic=b.querySelector('.hc-look-ic');if(ic)ic.innerHTML=sprite(spr,30);
  });
}
function saveProfileName(){
  let input=document.getElementById('profile-name-input');
  let name=input?input.value:'';
  setProfileName(name);
  closeProfileOnboarding();
  maybeShowWelcome();
}
function saveProfileSettingsName(){
  let input=document.getElementById('profile-settings-name-input');
  let name=input?input.value:'';
  setProfileName(name);
}
function closeProfileOnboarding(){
  let overlay=document.getElementById('profile-overlay');
  if(!overlay)return;
  overlay.classList.remove('visible');
  setTimeout(()=>overlay.classList.add('hidden'),300);
}
function maybeShowProfileOnboarding(){
  if(getProfile().name)return false;
  let overlay=document.getElementById('profile-overlay');
  if(!overlay)return false;
  renderHeroCreatePick();
  overlay.classList.remove('hidden');
  requestAnimationFrame(()=>overlay.classList.add('visible'));
  let input=document.getElementById('profile-name-input');
  if(input&&input.focus)setTimeout(()=>{try{input.focus({preventScroll:true})}catch(e){}},60);
  return true;
}

function refreshSidebar(){
  let stx=document.getElementById('streak-text');
  if(stx)stx.textContent=`${S.streak} DAY STREAK`;
  let sub=document.getElementById('streak-sub');
  if(sub){
    let next=nextStreakMilestone();
    let parts=[];
    if(next)parts.push(`<span>${next.day-S.streak} day${next.day-S.streak===1?'':'s'} to +${next.shards} ${sprite('shard',10)}</span>`);
    else parts.push(`<span>All milestones ${sprite('wTrophy',12)}</span>`);
    if((S.streakFreezes||0)>0)parts.push(`<span>${sprite('freeze',10)} ×${S.streakFreezes}</span>`);
    sub.innerHTML=parts.join('');
  }
  updateDayTimer();
  updateChestBadge();
  updateHud();
  updateSidebarHead();
}

// v16d: small pixel header in the MORE menu / desktop sidebar (replaces the old XP ring + initials mark)
function updateSidebarHead(){
  let lv=document.getElementById('sb-lv'),xp=document.getElementById('sb-xp'),nm=document.getElementById('sb-name');
  if(!lv&&!xp&&!nm)return;
  let level=levelOf(S.xp),into=S.xp-(level-1)*200;
  if(nm)nm.textContent=(getProfile().name||'Hero').toUpperCase();
  if(lv)lv.textContent=`LV ${level} · ${into}/200 XP`;
  if(xp)xp.innerHTML=learnCells(into,200,10);
}

const SIDEBAR_COLLAPSE_KEY='azureAcademySidebarCollapsed';
function toggleSidebarCollapse(){
  let sb=document.getElementById('sidebar');
  if(!sb)return;
  let collapsed=sb.classList.toggle('collapsed');
  try{localStorage.setItem(SIDEBAR_COLLAPSE_KEY,collapsed?'1':'0')}catch(e){}
}
function initSidebarCollapse(){
  let sb=document.getElementById('sidebar');
  if(!sb)return;
  try{
    if(localStorage.getItem(SIDEBAR_COLLAPSE_KEY)==='1')sb.classList.add('collapsed');
  }catch(e){}
}

// ======================================================================
// v16a — Home (world map) + quest screen (JRPG dialogue box)
// ======================================================================
let questScreen=null; // null = map, 'quiz' = current mode, 'review' = Weak Spot Review

const MAP_NODES={ // centre of each node in a 340x400 map
  easy:{x:62,y:344},normal:{x:186,y:280},heroic:{x:286,y:184},practical:{x:120,y:150},boss:{x:76,y:58}
};
const MAP_ROADS=[ // road from mode i to the next stop, as orthogonal points
  {after:'easy',pts:[[62,344],[62,280],[186,280]]},
  {after:'normal',pts:[[186,280],[286,280],[286,184]]},
  {after:'heroic',pts:[[286,184],[286,150],[120,150]]},
  {after:'practical',pts:[[120,150],[120,58],[76,58]]}
];
const MAP_DECO=[{s:'tree',x:250,y:330},{s:'tree',x:300,y:360},{s:'tree',x:220,y:90},{s:'tree',x:30,y:200},{s:'rock',x:160,y:370},{s:'rock',x:300,y:60}];

function modeDone(m){return st(m).count>=cfg(m).limit}
function currentMapMode(){
  if(!modeDone(S.mode))return S.mode;
  return modeOrder.find(m=>!modeDone(m))||null;
}
function pct(v,total){return (v/total*100).toFixed(2)+'%'}

function renderQuestsPage(){
  if(questScreen==='review'){mount('quests',renderReviewScreen());return}
  if(questScreen==='quiz'){mount('quests',renderQuestScreen());return}
  mount('quests',renderHome());
}

function renderHome(){
  let p=engineDailyProgress();
  let cur=currentMapMode();
  let roads=MAP_ROADS.map(r=>{
    let done=modeDone(r.after);
    let pts=r.pts.map(xy=>xy.join(',')).join(' ');
    return `<polyline points="${pts}" fill="none" stroke="${done?'#c2a46b':'#a08a5c'}" stroke-width="12" stroke-linecap="square" ${done?'':'stroke-dasharray="10 9"'}/>`;
  }).join('');
  let deco=MAP_DECO.map(d=>`<span class="map-deco" style="left:${pct(d.x,340)};top:${pct(d.y,400)};transform:translate(-50%,-50%)">${sprite(d.s,26)}</span>`).join('');

  let nodes=modeOrder.map(m=>{
    let pos=MAP_NODES[m],c=cfg(m),s=st(m),done=modeDone(m);
    let state=done?'done':m===cur?'current':'open';
    let chest=done&&!S.claimed[m]?`<span class="node-chest">${sprite('chest',26)}</span>`:'';
    let inner=done?`<span style="color:#000">${sprite('check',24)}</span>`:`<span class="node-count">${s.count}/${c.limit}</span>`;
    return `<button type="button" class="map-node ${state}" style="left:${pct(pos.x,340)};top:${pct(pos.y,400)}"
        onclick="mapNodeTap('${m}')" aria-label="${c.title}: ${s.count} of ${c.limit}${done?', complete':''}">${inner}${chest}</button>
      <span class="map-label" style="left:${pct(pos.x,340)};top:calc(${pct(pos.y,400)} + 9%)"><b>${c.short.toUpperCase()}</b></span>`;
  }).join('');

  let bp=MAP_NODES.boss;
  let bossState=p.bossDone?'done':p.bossReady?'ready':'';
  let bossInner=p.bossDone?`<span style="color:#000">${sprite('check',26)}</span>`:sprite('golem',44);
  nodes+=`<button type="button" class="map-node boss ${bossState}" style="left:${pct(bp.x,340)};top:${pct(bp.y,400)}"
      onclick="mapNodeTap('boss')" aria-label="Boss: ${p.bossDone?'defeated':p.bossReady?'ready to fight':'locked'}">${bossInner}</button>
    <span class="map-label" style="left:${pct(bp.x,340)};top:calc(${pct(bp.y,400)} + 11%)"><b style="color:${p.bossReady?'var(--px-red)':'var(--px-white)'}">${p.bossDone?'CLEARED':p.bossReady?'BOSS!':'BOSS'}</b></span>`;

  let hero='';
  if(cur){
    let hp=MAP_NODES[cur];
    hero=`<span class="map-hero" style="left:${pct(hp.x,340)};top:calc(${pct(hp.y,400)} - 7%)">${sprite(heroSpr('hero'),30)}</span>`;
  }else if(p.bossReady){
    hero=`<span class="map-hero" style="left:calc(${pct(bp.x,340)} + 15%);top:calc(${pct(bp.y,400)} + 2%)">${sprite(heroSpr('hero'),30)}</span>`;
  }

  // the one big button always says what to do next
  let cta;
  let unclaimed=modeOrder.find(m=>modeDone(m)&&!S.claimed[m]);
  if(unclaimed){
    cta=`<button type="button" class="btn btn-cta chest" onclick="claimChest('${unclaimed}')">${sprite('chest',26)} OPEN CHEST · ${cfg(unclaimed).short.toUpperCase()}</button>`;
  }else if(p.bossReady){
    cta=`<button type="button" class="btn btn-cta" onclick="startBossFight()">${sprite('golem',30)} FIGHT THE BOSS</button>`;
  }else if(p.bossDone){
    cta=`<button type="button" class="btn btn-cta done" disabled>${sprite('check',22)} DAY CLEARED</button>`;
  }else{
    let s=st(cur),c=cfg(cur);
    let verb=s.count?'CONTINUE':'START';
    cta=`<button type="button" class="btn btn-cta" onclick="openQuest('${cur}')"><span style="color:#fff1e8">${sprite('play',14)}</span> ${verb} · ${c.short.toUpperCase()} ${s.count}/${c.limit}</button>`;
  }

  let weak=weaknessPool().length;
  let tiles=`<div class="home-tiles">
      <button type="button" class="home-tile" onclick="openReview()" ${weak?'':'disabled'}>
        <b>WEAK SPOTS</b><span>${weak?`${weak} to retry · +8 XP each`:'Nothing to fix yet'}</span>
      </button>
      <button type="button" class="home-tile" onclick="goTo('exam')">
        <b>PRACTICE EXAM</b><span>10 questions · 10 min</span>
      </button>
    </div>`;

  return `
    <div class="home-top">
      <span class="home-world">DAY ${S.streak} · STREAK</span>
      <span class="home-progress">${p.stepsDone}/${p.stepsTotal} DONE</span>
    </div>
    <div class="map" role="group" aria-label="Today's quest map">
      <svg viewBox="0 0 340 400" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%" shape-rendering="crispEdges" aria-hidden="true">${roads}</svg>
      ${deco}${nodes}${hero}
    </div>
    <div class="home-cta">${cta}</div>
    ${tiles}`;
}

function mapNodeTap(m){
  if(m==='boss'){
    let p=engineDailyProgress();
    if(p.bossReady)startBossFight();
    else if(p.bossDone)showToast('Boss defeated today. Come back tomorrow!');
    else showToast('Finish all four quests to wake the boss.');
    return;
  }
  openQuest(m);
}

function openQuest(m){
  S.mode=m;saveState();
  if(currentPage!=='quests')goTo('quests'); // can be called from any page
  questScreen='quiz';
  render();
  if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0);
}
function backToMap(){
  questScreen=null;
  render();
  if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0);
}
function setMode(m){openQuest(m)} // kept for older calls

// ---------- shared pieces of the question screen ----------
function questHeader(title,right,pips){
  return `<div class="q-head">
    <button type="button" class="q-back" onclick="backToMap()" aria-label="Back to map">${sprite('back',14)}</button>
    <div class="q-title">
      <div class="q-title-row"><span class="mode">${title}</span><span>${right}</span></div>
      ${pips||''}
    </div>
  </div>`;
}
function questPips(mode){
  let c=cfg(mode),h=S.history[mode]||[],s=st(mode),cells='';
  for(let i=0;i<c.limit;i++){
    let cls=i<h.length?(h[i].correct?'ok':'bad'):i===s.count?'now':'';
    cells+=`<i class="${cls}"></i>`;
  }
  return `<div class="q-pips" style="grid-template-columns:repeat(${c.limit},minmax(0,1fr))">${cells}</div>`;
}
// One renderer for daily quiz and review, so both look and behave the same.
function questionBody(q,state,h){
  let opts=q.a.map((x,i)=>{ // let: Policy Shield may add a pop below
    let cls=[],mark='';
    if(!state.checked&&state.selected===i)cls.push('selected');
    if(state.checked){
      if(i===q.c){cls.push('correct');mark=`<span class="q-mark">${sprite('check',20)}</span>`}
      else if(i===state.selected){cls.push('wrong');mark='<span class="q-mark">MISS</span>'}
      else cls.push('dim');
    }
    let pop=state.checked&&state.correct&&i===q.c?`<span class="xp-pop">${h.xpText}</span>`:'';
    return `<button type="button" class="q-opt ${cls.join(' ')}" ${state.checked?'disabled':''} onclick="${h.onSelect}(${i})">
      <span class="q-key">${'ABCD'[i]}</span><span class="q-opt-text">${escapeHtml(x)}</span>${mark}${pop}
    </button>`;
  }).join('');

  let explain='';
  let ravenBadge=h.raven?`<span class="q-raven">SEEN BEFORE</span>`:'';
  if(state.checked&&!state.correct&&h.consolation){
    opts=opts.replace('<span class="q-mark">MISS</span>',`<span class="q-mark">MISS</span><span class="xp-pop">+${h.consolation} XP</span>`);
  }
  if(state.checked){
    let verdict=state.correct?'<span class="verdict ok">CORRECT!</span>':'<span class="verdict bad">NOT QUITE…</span>';
    let right=state.correct?'':`<span class="right-answer">${'ABCD'[q.c]}: ${escapeHtml(q.a[q.c])}</span>`;
    explain=`<div class="q-explain" role="status">
      <div class="q-guide">${sprite('guide',38)}</div>
      <div class="q-bubble">${verdict}${right}${escapeHtml(q.e)}</div>
    </div>`;
  }

  let actions=state.checked
    ?`<button type="button" class="btn btn-gold" onclick="${h.onNext}()">${h.nextLabel} ${sprite('play',10)}</button>`
    :`<button type="button" class="btn btn-primary" ${state.selected===null?'disabled':''} onclick="${h.onCheck}()">CHECK</button>`;

  return `<div class="q-box">
      <span class="q-cat">${escapeHtml((q.category||'').toUpperCase())}</span>${ravenBadge}
      <div class="q-text">${escapeHtml(q.q)}</div>
      ${state.checked?'':`<span class="q-cursor">${sprite('play',8,'')}</span>`}
    </div>
    <div class="q-opts">${opts}</div>
    ${explain}
    <div class="q-actions">${h.extraAction||''}${actions}</div>`;
}

function renderQuestScreen(){
  let m=S.mode,c=cfg(m),s=st(m);
  if(modeDone(m))return renderQuestClear(m);
  if(m==='practical'){
    return questHeader(c.title.toUpperCase(),`${s.count+1}/${c.limit}`,questPips(m))+renderLabCard();
  }
  choose(m);
  let q=s.currentQuestion;
  return questHeader(c.title.toUpperCase(),`${s.count+1}/${c.limit}`,questPips(m))+
    questionBody(q,s,{onSelect:'selectAnswer',onCheck:'checkAnswer',onNext:'finishQuest',nextLabel:'NEXT',xpText:`+${c.xp} XP`,
      raven:hasEffect('weakSummary')&&!s.checked&&S.weakness.some(w=>w.item&&w.item.id===q.id),
      consolation:hasEffect('wrongConsolationXp')?effectValue('wrongConsolationXp'):0});
}

function renderQuestClear(m){
  let c=cfg(m),h=S.history[m]||[],ok=h.filter(x=>x.correct).length;
  let next=modeOrder.find(x=>!modeDone(x));
  let chestBtn=!S.claimed[m]
    ?`<button type="button" class="btn btn-cta chest" onclick="claimChest('${m}')">${sprite('chest',26)} OPEN CHEST</button>`
    :`<div class="muted-hint" style="margin:6px 0 4px">Chest opened.</div>`;
  let nextBtn=next
    ?`<button type="button" class="btn btn-primary" onclick="openQuest('${next}')">NEXT: ${cfg(next).short.toUpperCase()}</button>`
    :engineDailyProgress().bossReady?`<button type="button" class="btn btn-danger" onclick="startBossFight()">FIGHT BOSS</button>`:'';
  return questHeader(c.title.toUpperCase(),`${c.limit}/${c.limit}`,questPips(m))+
    `<div class="card q-done">
      ${sprite(heroSpr('hero'),48)}
      <div class="big">QUEST CLEAR!</div>
      <div class="stats">${ok}/${h.length} correct · ${h.length-ok} added to review</div>
    </div>
    <div class="home-cta">${chestBtn}</div>
    <div class="q-actions"><button type="button" class="btn btn-ghost" onclick="backToMap()">MAP</button>${nextBtn}</div>`;
}

// ---------- daily quiz input (rules in engine.js) ----------
function selectAnswer(i){if(engineSelect(S.mode,i))render()}
function checkAnswer(){
  let r=engineCheck(S.mode);
  if(!r)return;
  if(r.correct)playChime(880);else playChime(220,0.25);
  render();
  petReactToAnswer(r.correct);
}
function finishQuest(){
  if(engineFinish(S.mode)){
    render();
    if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0);
  }
}

// ---------- Weak Spot Review ----------
function openReview(){
  if(!S.review.currentQuestion&&!engineReviewStart())return;
  if(currentPage!=='quests')goTo('quests');
  questScreen='review';
  render();
  if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0);
}
function chooseReview(){openReview()}
function renderReviewScreen(){
  let r=S.review;
  if(!r.currentQuestion&&weaknessPool().length)engineReviewStart();
  let left=weaknessPool().length;
  if(!r.currentQuestion){
    return questHeader('WEAK SPOTS','0 LEFT','')+
      `<div class="card q-done">${sprite('guide',48)}<div class="big">ALL CLEAR!</div><div class="stats">No weak spots left to review.</div></div>
      <div class="q-actions"><button type="button" class="btn btn-primary" onclick="backToMap()">MAP</button></div>`;
  }
  return questHeader('WEAK SPOTS',`${left} LEFT`,'')+
    questionBody(r.currentQuestion,r,{onSelect:'selectReviewAnswer',onCheck:'checkReviewAnswer',onNext:'nextReviewQuestion',nextLabel:'NEXT',xpText:'+8 XP',
      extraAction:'<button type="button" class="btn btn-ghost" onclick="backToMap()">STOP</button>'});
}
function selectReviewAnswer(i){if(engineReviewSelect(i))render()}
function checkReviewAnswer(){
  let r=engineReviewCheck();
  if(!r)return;
  if(r.correct)playChime(880);else playChime(220,0.25);
  render();
  petReactToAnswer(r.correct);
}
function nextReviewQuestion(){
  engineReviewNext();
  render();
  if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0);
}

function renderLabCard(){
  let s=st(),labs=AZURE_DB.labs,c=cfg();
  if(!s.currentId||!labs.some(l=>l.id===s.currentId)){
    let candidates=labs.filter(l=>!s.done.includes(l.id));
    if(!candidates.length){s.done=[];candidates=labs}
    let picked=candidates[Math.floor(Math.random()*candidates.length)];
    s.currentId=picked.id;
    s.notes='';s.checked=false;s.passed=false;s.reviewable=false;s.surrendered=false;s.feedback='';s.attempts=0;
    saveState();
  }
  let l=labs.find(x=>x.id===s.currentId);
  let attemptNote=(s.attempts||0)>=5&&!s.passed?'Attempt limit reached — you can give up and view the model answer.'
    :(s.attempts||0)>=3?'Hint unlocked.'
    :`Attempts: ${s.attempts||0} / 5`;

  // v16d: terminal look. The feedback text itself is built by checkLab/showHint/giveUpLab (unchanged)
  // and shown as console output; the command line above it only says which of the three produced it.
  let state=s.passed?'good':s.reviewable?'warn':'bad';
  let cmd=s.surrendered?'lab --give-up':/class="label">Hint</.test(s.feedback||'')?'lab --hint':`lab --check #${s.attempts||0}`;
  let out=s.feedback
    ?`<div class="lab-out ${state}" role="status"><div class="lab-l lab-run">$ ${cmd}</div><div class="lab-fb">${s.feedback}</div></div>`
    :`<div class="lab-out idle"><div class="lab-l lab-run">$ awaiting input…</div><div class="lab-l dim">Write your answer in your own words, then press CHECK.</div></div>`;

  let hintBtn=(s.attempts||0)>=(3-effectValue('hintReduction'))&&!s.passed?'<button type="button" class="btn btn-ghost" onclick="showHint()">HINT</button>':'';
  let giveUpBtn=(s.attempts||0)>=5&&!s.passed&&!s.surrendered?'<button type="button" class="btn btn-ghost lab-giveup" onclick="giveUpLab()">GIVE UP · 0 XP</button>':'';
  let contBtn=s.surrendered?'<button type="button" class="btn btn-primary" onclick="continueAfterGiveUp()">CONTINUE</button>':'';
  let reviewBtn=s.reviewable&&!s.passed?'<button type="button" class="btn btn-ghost lab-review" onclick="finishLab(true)">FINISH AFTER REVIEW · +35 XP</button>':'';

  return `<div class="lab-term">
    <div class="lab-bar"><span>${sprite('mTerm',14)} AZURE-LAB</span><span>${s.count+1}/${c.limit}</span></div>
    <div class="lab-screen">
      <div class="lab-cmd">&gt; explain ${escapeHtml(String(l.t).toLowerCase())}<span class="lab-caret">_</span></div>
      <div class="lab-task">${escapeHtml(l.d)}</div>
      <label class="lab-prompt" for="lab-input">&gt; your answer:</label>
      <textarea id="lab-input" class="lab-input" oninput="labInput(this.value)" placeholder="Write your explanation in 2-3 sentences..." spellcheck="true">${escapeHtml(s.notes||'')}</textarea>
      ${out}
      <div class="lab-l dim lab-attempts">// ${escapeHtml(attemptNote)}</div>
    </div>
  </div>
  <div class="lab-actions">
    <button type="button" class="btn btn-primary" onclick="checkLab()">CHECK</button>
    ${hintBtn}${giveUpBtn}${contBtn}
    <button type="button" class="btn btn-gold lab-finish" ${!s.checked||!s.passed?'disabled':''} onclick="finishLab(false)">FINISH · +${c.xp} XP</button>
    ${reviewBtn}
  </div>`;
}

function labInput(v){let s=st();s.notes=v;s.checked=false;s.passed=false;s.reviewable=false;s.surrendered=false;s.feedback='';saveState()}

function checkLab(){
  let s=st(),l=AZURE_DB.labs.find(x=>x.id===s.currentId),r=checkLabText(s.notes||'',l);
  s.attempts=(s.attempts||0)+1;
  s.checked=true;s.passed=r.passed;s.reviewable=r.reviewable;
  if(r.passed)s.feedback=`<span class="label">Good enough — ${r.hits}/${l.keywords.length} key ideas covered</span>Model answer: ${l.model}`;
  else if(r.reviewable)s.feedback=`<span class="label">Almost there</span>Missing ideas like: ${r.miss.slice(0,3).join(', ')}.<br><br>Model answer: ${l.model}`;
  else s.feedback=`<span class="label">Still too short</span>Try writing 2-3 connected sentences.<br><br>Model answer: ${l.model}`;
  saveState();render();
}

function showHint(){
  let s=st(),l=AZURE_DB.labs.find(x=>x.id===s.currentId);
  let showCount=Math.max(1,Math.ceil(l.keywords.length/2));
  let groups=l.keywords.slice(0,showCount).map(g=>g.slice(0,2).join(' / '));
  s.feedback=`<span class="label">Hint</span>Try to mention ideas like: <b>${groups.join(' • ')}</b> — plus a bit more in your own words.`;
  saveState();render();
}

function giveUpLab(){
  let s=st(),l=AZURE_DB.labs.find(x=>x.id===s.currentId);
  s.surrendered=true;
  s.feedback=`<span class="label">Quest surrendered — 0 XP</span>Model answer: ${l.model}`;
  saveState();render();
}

function continueAfterGiveUp(){
  let s=st(),l=AZURE_DB.labs.find(x=>x.id===s.currentId);
  S.history.practical.push({q:l.t,your:s.notes||'(no answer)',correctAnswer:l.model,correct:false,e:'Surrendered after 5 attempts.'});
  if(!s.done.includes(l.id))s.done.push(l.id);
  s.count++;
  s.currentId=null;s.notes='';s.checked=false;s.passed=false;s.reviewable=false;s.surrendered=false;s.feedback='';s.attempts=0;
  saveState();render();
}

function finishLab(reduced){
  let s=st(),l=AZURE_DB.labs.find(x=>x.id===s.currentId);
  if(reduced&&!s.reviewable)return;
  if(!reduced&&!s.passed)return;
  S.xp+=reduced?35:cfg().xp;
  S.shards+=reduced?1:cfg().shards;
  S.history.practical.push({q:l.t,your:s.notes,correctAnswer:l.model,correct:!reduced,e:reduced?'Finished after self-review.':'Completed.'});
  if(!s.done.includes(l.id))s.done.push(l.id);
  s.count++;
  s.currentId=null;s.notes='';s.checked=false;s.passed=false;s.reviewable=false;s.surrendered=false;s.feedback='';s.attempts=0;
  saveState();render();
}

function claimChest(mode){
  if(S.claimed[mode])return;
  let reward=grantDrop(mode);
  S.claimed[mode]=true;
  saveState();
  openChestAnimation(reward);
}


function resetCurrent(){
  let s=st();
  s.currentId=null;s.currentQuestion=null;s.selected=null;s.checked=false;s.correct=false;
  s.notes='';s.feedback='';s.passed=false;s.reviewable=false;s.surrendered=false;s.attempts=0;
  saveState();render();
}
function fullReset(){if(confirm('Are you sure you want to reset all progress? This action cannot be undone.')){S=defaultState();saveState();initPetCompanion();goTo('quests');maybeShowWelcome()}}

function exportProgress(){
  let payload=JSON.stringify(S,null,2);
  let blob=new Blob([payload],{type:'application/json'});
  let url=URL.createObjectURL(blob);
  let a=document.createElement('a');
  let stamp=new Date().toISOString().slice(0,10);
  a.href=url;
  a.download=`azure-academy-save-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importProgress(event){
  let file=event.target.files&&event.target.files[0];
  if(!file)return;
  let reader=new FileReader();
  reader.onload=function(){
    let parsed;
    try{parsed=JSON.parse(reader.result)}
    catch(e){alert('This file is not a valid Azure Academy save (invalid JSON).');event.target.value='';return}
    if(typeof parsed!=='object'||parsed===null||typeof parsed.xp!=='number'||!('collection' in parsed)){
      alert('This file does not look like an Azure Academy save file.');
      event.target.value='';
      return;
    }
    if(!confirm('Importing will overwrite your current progress in this browser. Continue?')){
      event.target.value='';
      return;
    }
    S=Object.assign(defaultState(),migrateState(parsed));
    saveState();
    event.target.value='';
    goTo('profile');
    alert('Progress imported successfully.');
  };
  reader.onerror=function(){alert('Could not read that file.');event.target.value=''};
  reader.readAsText(file);
}

function showToast(msg){
  let el=document.createElement('div');
  el.className='px-toast';
  el.setAttribute('role','status');
  el.textContent=String(msg||'').replace(/^[^\w(+-]+\s*/,''); // drop a leading emoji, the pixel bar has its own look
  document.body.appendChild(el);
  setTimeout(()=>el.classList.add('show'),10);
  setTimeout(()=>{el.classList.remove('show');setTimeout(()=>el.remove(),250)},3800);
}

function renderShopPage(){mount('shop',renderLoot())}
function renderLearnPage(){mount('learn',renderLearn())}
function renderMasteryPage(){mount('mastery',renderMastery())}

// ---------- v16c2: Collection = inventory (15 slots), tap a slot for the item card ----------
let collSel=null; // selected item id
function selectCollSlot(id){collSel=collSel===id?null:id;render()}

function collEffectLines(owned){
  return owned.map(itemById).filter(Boolean).map(it=>`<div class="ls-log-l">&gt; ${escapeHtml(it.name)}: ${escapeHtml(it.effect)}</div>`).join('');
}

function collItemCard(it,has){
  let th=it.effectCode&&it.effectCode.theme;
  let actions='';
  if(has&&th)actions=(S.activeTheme||'default')===th
    ?`<span class="ls-owned">${sprite('check',14)} THEME ACTIVE</span>`
    :`<button type="button" class="btn btn-primary" onclick="setTheme('${th}')">EQUIP THEME</button>`;
  else if(!has)actions=`${shardPrice(it.cost,S.shards<it.cost)}<button type="button" class="btn btn-ghost" onclick="goTo('shop')">LOOT SHOP ${sprite('play',10)}</button>`;
  return `<div class="ls-item r-${it.rarity} ${has?'':'cl-missing'}" style="--rc:${rarityColor(it.rarity)}">
      <div class="ls-slot">${iconFor(it.type,44)}${has?'':'<span class="cl-q">?</span>'}</div>
      <div class="ls-main">
        <div class="ls-name">${has?escapeHtml(it.name):'???'}</div>
        <div class="ls-tags"><span class="ls-rar">${rarityLabel(it.rarity).toUpperCase()}</span><span class="ls-type">${escapeHtml(it.type).toUpperCase()}</span></div>
        <div class="ls-desc">${has?escapeHtml(it.desc):'Not found yet. Drops from quest chests — or buy it in the Loot Shop.'}</div>
        ${has?`<div class="ls-effect">&gt; ${escapeHtml(it.effect)}</div>`:''}
        ${actions?`<div class="ls-buy">${actions}</div>`:''}
      </div>
    </div>`;
}

function renderCollectionPage(){
  const loot=AZURE_DB.loot||[],owned=ownedIds();
  if(collSel&&!itemById(collSel))collSel=null;
  let slots=loot.map(it=>{
    let has=owned.includes(it.id),sel=collSel===it.id;
    return `<button type="button" class="cl-slot ${has?'has':'missing'} ${sel?'sel':''} r-${it.rarity}" style="--rc:${rarityColor(it.rarity)}"
        onclick="selectCollSlot('${it.id}')" aria-pressed="${sel}" aria-label="${has?escapeHtml(it.name):'Unknown '+rarityLabel(it.rarity)+' item'}">
        ${iconFor(it.type,36)}${has?'':'<span class="cl-q">?</span>'}
      </button>`;
  }).join('');
  let selIt=collSel?itemById(collSel):null;
  let detail=selIt
    ?collItemCard(selIt,owned.includes(selIt.id))
    :`<div class="q-explain cl-hint"><div class="q-guide">${sprite('guide',38)}</div>
        <div class="q-bubble">${owned.length?'Tap a slot to inspect an item. Dark slots are still out there.':'Your bag is empty. Open quest chests or visit the Loot Shop.'}</div></div>`;
  let titles=unlockedTitles();
  let effects=owned.length
    ?collEffectLines(owned)+(titles.length?`<div class="ls-log-l">&gt; title equipped: ${titles.map(escapeHtml).join(', ')}</div>`:'')
    :'<div class="ls-log-l dim">&gt; no active effects_</div>';
  let html=`
    <div class="page-header">
      <div><div class="page-title">COLLECTION</div><div class="page-subtitle">Every item works the moment it lands in your bag.</div></div>
      <div class="ls-wallet cl-count" aria-label="${owned.length} of ${loot.length} items">${sprite('itTrinket',18)}<b>${owned.length}/${loot.length}</b></div>
    </div>
    <section class="card">
      <div class="card-title">Inventory</div>
      <div class="cl-grid">${slots}</div>
      <div class="cl-prog">${learnCells(owned.length,loot.length,15)}</div>
    </section>
    <div class="cl-detail">${detail}</div>
    <section class="card">
      <div class="card-title">Active effects</div>
      <div class="ls-log cl-effects">${effects}</div>
    </section>`;
  mount('collection',html);
}

// ---------- v16c2: Profile = hero, character sheet, game menu ----------
function profileStatRow(label,value,extra){
  return `<div class="pf-stat"><span class="pf-k">${label}</span><i class="pf-dots"></i><b class="pf-v">${value}</b>${extra||''}</div>`;
}
function menuRow(label,value,act,cls){
  return `<button type="button" class="pf-row ${cls||''}" onclick="${act}"><span class="pf-cur">${sprite('play',8)}</span><span class="pf-label">${label}</span>${value?`<span class="pf-val">${value}</span>`:''}</button>`;
}
function renderProfilePage(){
  let l=levelOf(S.xp),into=S.xp-(l-1)*200;
  let all=[...S.history.easy,...S.history.normal,...S.history.heroic,...S.history.practical];
  let totalAnswered=all.length,totalCorrect=all.filter(x=>x.correct).length;
  let name=getProfile().name||'';
  let lootTitle=(typeof unlockedTitles==='function'&&unlockedTitles()[0])||null;
  let title=lootTitle||levelTitle();
  let lessonsTotal=0;Object.values(AZURE_DB.learnContent||{}).forEach(t=>lessonsTotal+=(t.lessons||[]).length);
  let mRanks=(typeof masteryTracks==='function'?masteryTracks():[]).reduce((n,t)=>n+masteryRank(t.id),0);
  let light=document.documentElement.getAttribute('data-theme')==='light';
  let html=`
    <div class="page-header">
      <div><div class="page-title">HERO</div><div class="page-subtitle">Your character sheet and settings.</div></div>
    </div>
    <section class="card pf-hero">
      <div class="pf-portrait">${sprite(heroSpr('heroBig'),96)}<span class="pf-lv">LV ${l}</span></div>
      <div class="pf-id">
        <div class="pf-name">${escapeHtml(name||'Hero')}</div>
        <div class="pf-title">${escapeHtml(title).toUpperCase()}</div>
        <div class="pf-xp">${learnCells(into,200,20)}</div>
        <div class="pf-xp-l"><b>${into}/200 XP</b> to LV ${l+1} · ${S.xp} total</div>
      </div>
    </section>
    <section class="card">
      <div class="card-title">Stats</div>
      <div class="pf-sheet">
        ${profileStatRow('SHARDS',`${sprite('shard',14)} ${S.shards}`)}
        ${profileStatRow('STREAK',`${sprite('flame',14)} ${S.streak} ${S.streak===1?'day':'days'}`)}
        ${profileStatRow('FREEZES',`×${S.streakFreezes||0}`)}
        ${profileStatRow('TODAY',`${totalAnswered} answered`)}
        ${profileStatRow('ACCURACY',`${totalAnswered?Math.round(totalCorrect/totalAnswered*100):0}%`)}
        ${profileStatRow('GEAR',`${ownedIds().length}/${AZURE_DB.loot.length}`)}
        ${profileStatRow('LESSONS',`${(S.learnRead||[]).length}/${lessonsTotal}`)}
        ${profileStatRow('MASTERY',`${mRanks} ranks`)}
        ${profileStatRow('WEAK SPOTS',`${S.weakness.length}`)}
      </div>
    </section>
    <section class="card pf-menu">
      <div class="card-title">Menu</div>
      <div class="pf-group">HERO NAME</div>
      <div class="pf-namebox">
        <input id="profile-settings-name-input" type="text" value="${escapeHtml(name)}" placeholder="Your name" maxlength="40"
          onkeydown="if(event.key==='Enter'){saveProfileSettingsName()}" class="profile-name-input" aria-label="Hero name">
        <button type="button" class="btn btn-ghost" onclick="saveProfileSettingsName()">SAVE</button>
      </div>
      <div class="pf-list">
        ${menuRow('Hero look',heroLook()==='f'?'HEROINE':'HERO','toggleHeroLook()')}
      </div>
      <div class="pf-group">SYSTEM</div>
      <div class="pf-list">
        ${menuRow('Sound effects',S.soundEnabled?'ON':'OFF','toggleSound()',S.soundEnabled?'on':'')}
        ${menuRow('Test sound',S.soundEnabled?'PLAY':'OFF','testSound()','pf-test')}
        ${menuRow('Display',light?'DAY':'NIGHT','toggleLightMode()')}
      </div>
      <div class="pf-note pf-note-after">On iPhone, sounds follow the silent switch.</div>
      <div class="pf-group">FX PREVIEW</div>
      <div class="pf-list">
        ${menuRow('Common crate','','previewChest(\'common\')')}
        ${menuRow('Rare / Epic crate','','previewChest(\'rare\')')}
        ${menuRow('Legendary crate','','previewChest(\'legendary\')')}
      </div>
      <div class="pf-group">SAVE DATA</div>
      <div class="pf-note">Progress lives only in this browser. Export a backup before switching devices.</div>
      <div class="pf-list">
        ${menuRow('Export backup','.JSON','exportProgress()')}
        ${menuRow('Import backup','','document.getElementById(\'import-file\').click()')}
      </div>
      <input type="file" id="import-file" accept="application/json" style="display:none" onchange="importProgress(event)">
      <div class="pf-group danger">DANGER ZONE</div>
      <div class="pf-list">
        ${menuRow('Reset current quest','','resetCurrent()','warn')}
        ${menuRow('Reset all progress','','fullReset()','danger')}
      </div>
      <div class="pf-ver">APP v${APP_VERSION}</div>
    </section>
  `;
  mount('profile',html);
}

// ---------- v16d: History = QUEST LOG ----------
const MODE_SPRITE={easy:'itShield',normal:'mCompass',heroic:'itWeapon',practical:'mTerm'};
// One row look for every answered question: Quest log, Practice Exam report and exam attempts.
function questLogRow(o){ // {ok, num, q, your, right, e, raven}
  return `<li class="ql-row ${o.ok?'ok':'bad'}">
    <div class="ql-top">
      <span class="ql-mark">${o.ok?sprite('check',12)+'<b>CLEAR</b>':sprite('cross',10)+'<b>MISS</b>'}</span>
      ${o.num?`<span class="ql-num">${o.num}</span>`:''}
      ${o.raven?`<span class="ql-raven">${sprite('raven',14)}<b>RECURRING</b></span>`:''}
    </div>
    <div class="ql-q">${escapeHtml(o.q)}</div>
    ${o.raven?`<div class="ql-raven-note">Sentinel Raven: you've missed this one before — worth a closer look.</div>`:''}
    ${o.ok?'':`<div class="ql-l your">&gt; YOU: ${escapeHtml(o.your||'—')}</div>`}
    <div class="ql-l right">&gt; ANSWER: ${escapeHtml(o.right||'')}</div>
    ${o.e?`<div class="ql-e">${escapeHtml(o.e)}</div>`:''}
  </li>`;
}
function renderHistoryPage(){
  let showWeak=hasEffect('weakSummary');
  let weakIds=new Set((S.weakness||[]).map(w=>w.item&&w.item.id).filter(Boolean));
  let all=[],sections='';
  modeOrder.forEach(m=>{
    let h=S.history[m]||[];
    if(!h.length)return;
    all=all.concat(h);
    let ok=h.filter(x=>x.correct).length;
    let rows=h.map((x,i)=>questLogRow({ok:x.correct,num:`#${i+1}`,q:x.q,your:x.your,right:x.correctAnswer,e:x.e,
      raven:showWeak&&!!x.id&&weakIds.has(x.id)})).join('');
    sections+=`<section class="card ql-card">
      <div class="ql-head"><span class="ql-ic">${sprite(MODE_SPRITE[m]||'navQuest',22)}</span>
        <div class="card-title">${escapeHtml(cfg(m).title)}</div><span class="ql-score">${ok}/${h.length}</span></div>
      <ol class="ql-list">${rows}</ol>
    </section>`;
  });
  let exam=typeof renderExamHistorySection==='function'?renderExamHistorySection():'';
  let ok=all.filter(x=>x.correct).length;
  let summary=all.length?`<div class="ql-sum">
      <span><b>${all.length}</b>LOGGED</span><span class="ok"><b>${ok}</b>CLEAR</span><span class="bad"><b>${all.length-ok}</b>MISS</span>
    </div>`:'';
  let empty=!all.length&&!exam?`<div class="q-explain ql-empty"><div class="q-guide">${sprite('guide',38)}</div>
      <div class="q-bubble">No quests logged today yet. Every answer you give lands here — misses go straight to Weak Spots.</div></div>`:'';
  let html=`
    <div class="page-header">
      <div><div class="page-title">QUEST LOG</div><div class="page-subtitle">Today's answers. Misses are already waiting in Weak Spots.</div></div>
    </div>
    ${summary}${empty}${sections}${exam}`;
  mount('history',html);
}

function showAboutModal(){
  let overlay=document.getElementById('about-overlay');
  if(!overlay)return;
  closeMobileNav();
  overlay.classList.remove('hidden');
  requestAnimationFrame(()=>overlay.classList.add('visible'));
  let btn=overlay.querySelector&&overlay.querySelector('.sd-opt');
  if(btn&&btn.focus)setTimeout(()=>{try{btn.focus({preventScroll:true})}catch(e){}},60);
}
function closeAboutModal(){
  let overlay=document.getElementById('about-overlay');
  if(!overlay)return;
  overlay.classList.remove('visible');
  setTimeout(()=>overlay.classList.add('hidden'),300);
  if(!S.hasSeenWelcome){S.hasSeenWelcome=true;saveState()}
}
function maybeShowWelcome(){
  if(S.hasSeenWelcome)return;
  showAboutModal();
}

const LIGHT_MODE_KEY='azureAcademyLightMode';
function toggleLightMode(){
  let isLight=document.documentElement.getAttribute('data-theme')==='light';
  let next=isLight?'dark':'light';
  if(next==='light')document.documentElement.setAttribute('data-theme','light');
  else document.documentElement.removeAttribute('data-theme');
  try{localStorage.setItem(LIGHT_MODE_KEY,next)}catch(e){}
  syncThemeColor();
  render();
}
function initLightMode(){
  // v16.1: Night (dark) is the default pixel look; Day only when the player picked it
  let saved=null;
  try{saved=localStorage.getItem(LIGHT_MODE_KEY)}catch(e){}
  if(saved==='light')document.documentElement.setAttribute('data-theme','light');
  else document.documentElement.removeAttribute('data-theme');
  syncThemeColor();
}
function syncThemeColor(){
  let light=document.documentElement.getAttribute('data-theme')==='light';
  let meta=document.querySelector('meta[name="theme-color"]');
  if(meta&&meta.setAttribute)meta.setAttribute('content',light?'#efe6cf':'#0b1020');
}

initLightMode();
initPixelChrome();
goTo('quests');
initPetCompanion();
initSidebarCollapse();
initAudioUnlock();
if(!maybeShowProfileOnboarding())maybeShowWelcome();
setInterval(function(){
  if(S.day!==today()){render();}
  else{updateDayTimer();updateChestBadge();}
},30000);
