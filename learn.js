// learn.js — v16.13 (v16c1: Learn as worlds + quests; v16d: Loot log lines without emoji)
// Levels are "worlds", lesson tracks are "zones", lessons are "quests". Rules are unchanged:
// first opening of a lesson = +5 XP, clearing every Beginner lesson of a track = +20 XP / +5 Shards.
let expandedLesson=null;
let selectedTier=null;
let justReadLesson=null; // shows the +5 XP pop on the lesson that was just read

const TIER_META=[
  {id:'beginner',world:1,name:'Beginner',sprite:'wSprout',desc:'Start from zero. Core concepts explained with real-world analogies.'},
  {id:'intermediate',world:2,name:'Intermediate',sprite:'wBook',desc:'Building on the basics — more depth per topic.'},
  {id:'advanced',world:3,name:'Advanced',sprite:'wTarget',desc:'Exam-level nuance and edge cases.'},
  {id:'senior',world:4,name:'Senior',sprite:'wTrophy',desc:'Real-world scenarios and architecture trade-offs.'}
];
// zone sprite + colour per lesson track (keys of AZURE_DB.learnContent)
const ZONE_META={
  cloudConcepts:{sprite:'zCloud',color:'#29adff'},
  coreServices:{sprite:'zServer',color:'#00e436'},
  securityGovernance:{sprite:'zShield',color:'#ffa300'},
  managementMonitoring:{sprite:'zMonitor',color:'#ffec27'}
};
const LEARN_TRACK_BONUS={xp:20,shards:5};

function learnTracks(){return AZURE_DB.learnContent||{}}

function lessonById(id){
  for(let key in learnTracks()){
    let found=learnTracks()[key].lessons.find(l=>l.id===id);
    if(found)return found;
  }
  return null;
}

function trackLessons(key,tier){
  let t=learnTracks()[key];
  if(!t)return[];
  return tier?t.lessons.filter(l=>l.tier===tier):t.lessons;
}

function tierLessonCount(tier){
  let n=0;
  Object.keys(learnTracks()).forEach(k=>n+=trackLessons(k,tier).length);
  return n;
}

function tierReadCount(tier){
  let n=0;
  Object.keys(learnTracks()).forEach(k=>trackLessons(k,tier).forEach(l=>{if(isLessonRead(l.id))n++}));
  return n;
}

function isLessonRead(id){return (S.learnRead||[]).includes(id)}

// all lessons of a tier in reading order (zone by zone)
function tierLessonOrder(tier){
  let out=[];
  Object.keys(learnTracks()).forEach(k=>trackLessons(k,tier).forEach(l=>out.push(l.id)));
  return out;
}

function learnScrollTop(){if(typeof window!=='undefined'&&window.scrollTo)window.scrollTo(0,0)}

function selectTier(tier){
  if(tierLessonCount(tier)===0)return;
  selectedTier=tier;expandedLesson=null;justReadLesson=null;render();learnScrollTop();
}
function backToTiers(){selectedTier=null;expandedLesson=null;justReadLesson=null;render();learnScrollTop()}

function toggleLesson(id){
  expandedLesson=expandedLesson===id?null:id;
  justReadLesson=null;
  if(expandedLesson===id&&!isLessonRead(id)){justReadLesson=id;markLessonRead(id)}
  render();
  if(expandedLesson===id)scrollLessonIntoView(id);
}
// open the next lesson of this world (the next unread one if there is any after this)
function nextLesson(id){
  let order=tierLessonOrder(selectedTier),i=order.indexOf(id);
  let rest=order.slice(i+1);
  let next=rest.find(x=>!isLessonRead(x))||rest[0];
  if(next)toggleLesson(next);
  else backToTiers();
}
function scrollLessonIntoView(id){
  if(typeof document==='undefined')return;
  let el=document.getElementById('lesson-'+id);
  if(el&&el.scrollIntoView)el.scrollIntoView({block:'start'});
}

function markLessonRead(id){
  S.learnRead=S.learnRead||[];
  if(S.learnRead.includes(id))return;
  S.learnRead.push(id);
  S.xp+=5;
  S.drops=S.drops||[];
  S.drops.unshift(`Lesson complete: +5 XP`);
  let cleared=checkTrackCompletionBonus();
  saveState();
  if(cleared.length){
    if(typeof playTune==='function')playTune([[523,.09],[659,.09],[784,.09],[1047,.25]]);
    if(typeof showToast==='function')cleared.forEach(n=>showToast(`Zone cleared: ${n} — +${LEARN_TRACK_BONUS.xp} XP, +${LEARN_TRACK_BONUS.shards} Shards`));
  }
}

// returns the names of tracks that were cleared just now
function checkTrackCompletionBonus(){
  let cleared=[];
  Object.keys(learnTracks()).forEach(key=>{
    let lessons=trackLessons(key,'beginner');
    if(!lessons.length||!lessons.every(l=>isLessonRead(l.id)))return;
    let flagKey='learnBeginnerBonus_'+key;
    if(S[flagKey])return;
    S[flagKey]=true;
    S.xp+=LEARN_TRACK_BONUS.xp;S.shards+=LEARN_TRACK_BONUS.shards;
    S.drops.unshift(`Beginner cleared: ${learnTracks()[key].trackName} — +20 XP, +5 Shards`);
    cleared.push(learnTracks()[key].trackName);
  });
  return cleared;
}

// ---------- pieces ----------
function learnCells(done,total,n){
  n=n||10;
  let on=total?Math.round(done/total*n):0;
  if(done>0&&on===0)on=1;
  if(done<total&&on===n)on=n-1;
  let cells='';for(let i=0;i<n;i++)cells+=`<i class="${i<on?'on':''}"></i>`;
  return `<span class="lw-cells" role="progressbar" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}">${cells}</span>`;
}
function onKeyActivate(fn){return `onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();${fn}}"`}

function renderLearn(){
  return selectedTier?renderTierContent():renderTierPicker();
}

// ---------- world select ----------
function renderTierPicker(){
  let worlds=TIER_META.map((t,i)=>{
    let total=tierLessonCount(t.id),read=tierReadCount(t.id);
    let locked=total===0,cleared=!locked&&read===total;
    let state=locked?'locked':cleared?'cleared':'open';
    let chip=locked?`<span class="lw-chip locked">${sprite('lock',12)} COMING SOON</span>`
      :cleared?`<span class="lw-chip done">${sprite('check',12)} CLEARED</span>`
      :read?`<span class="lw-chip">CONTINUE</span>`:`<span class="lw-chip">START</span>`;
    let link=i<TIER_META.length-1?'<div class="lw-road" aria-hidden="true"></div>':'';
    let attrs=locked?'disabled aria-disabled="true"':`onclick="selectTier('${t.id}')"`;
    return `<button type="button" class="lw-world ${state}" ${attrs} aria-label="World ${t.world}: ${t.name}${locked?', coming soon':`, ${read} of ${total} lessons read`}">
        <span class="lw-icon">${sprite(t.sprite,44)}${locked?`<span class="lw-lock">${sprite('lock',22)}</span>`:''}</span>
        <span class="lw-info">
          <span class="lw-kicker">WORLD ${t.world}</span>
          <span class="lw-name">${t.name}</span>
          <span class="lw-desc">${t.desc}</span>
          ${locked?'':`<span class="lw-prog">${learnCells(read,total)}<b>${read}/${total}</b></span>`}
        </span>
        ${chip}
      </button>${link}`;
  }).join('');
  return `
    <div class="page-header">
      <div>
        <div class="page-title">LEARN</div>
        <div class="page-subtitle">Pick a world. Every new lesson = +5 XP.</div>
      </div>
    </div>
    <div class="lw-list">${worlds}</div>`;
}

// ---------- inside a world ----------
function renderTierContent(){
  let tier=selectedTier;
  let meta=TIER_META.find(t=>t.id===tier);
  let tracks=learnTracks();
  let total=tierLessonCount(tier),read=tierReadCount(tier);

  let html=`<div class="q-head">
      <button type="button" class="q-back" onclick="backToTiers()" aria-label="Back to worlds">${sprite('back',14)}</button>
      <div class="q-title">
        <div class="q-title-row"><span class="mode">WORLD ${meta.world} · ${meta.name.toUpperCase()}</span><span>${read}/${total}</span></div>
        <div class="lz-bar">${learnCells(read,total,20)}</div>
      </div>
    </div>`;

  Object.keys(tracks).forEach(key=>{
    let t=tracks[key],z=ZONE_META[key]||{sprite:'zCloud',color:'#29adff'};
    let lessons=trackLessons(key,tier);
    if(!lessons.length)return;
    let done=lessons.filter(l=>isLessonRead(l.id)).length;
    let allDone=done===lessons.length;
    let reward='';
    if(tier==='beginner'){
      reward=allDone
        ?`<div class="lz-reward done">${sprite('check',12)} ZONE CLEARED · +${LEARN_TRACK_BONUS.xp} XP · +${LEARN_TRACK_BONUS.shards} ${sprite('shard',12)}</div>`
        :`<div class="lz-reward">CLEAR ZONE: +${LEARN_TRACK_BONUS.xp} XP · +${LEARN_TRACK_BONUS.shards} ${sprite('shard',12)}</div>`;
    }
    html+=`<section class="card lz" style="--zc:${z.color}">
      <div class="lz-head">
        <span class="lz-icon">${sprite(z.sprite,30)}</span>
        <div class="lz-titles">
          <div class="card-title">${t.trackName}</div>
          <div class="lz-prog">${learnCells(done,lessons.length,lessons.length>12?12:lessons.length)}<b>${done}/${lessons.length}</b></div>
        </div>
      </div>
      ${reward}
      <ol class="lq-list">${lessons.map((l,i)=>renderLessonItem(l,i)).join('')}</ol>
    </section>`;
  });

  return html;
}

function renderLessonItem(l,i){
  let open=expandedLesson===l.id;
  let read=isLessonRead(l.id);
  let num=String(i+1).padStart(2,'0');
  let order=tierLessonOrder(selectedTier),last=order.indexOf(l.id)===order.length-1;
  let pop=open&&justReadLesson===l.id?'<span class="xp-pop">+5 XP</span>':'';
  return `<li class="lq ${open?'open':''} ${read?'read':''}" id="lesson-${l.id}">
    <button type="button" class="lq-head" onclick="toggleLesson('${l.id}')" aria-expanded="${open}">
      <span class="lq-box">${read?sprite('check',16):''}</span>
      <span class="lq-num">${num}</span>
      <span class="lq-title">${l.title}</span>
      <span class="lq-caret">${sprite('play',8)}</span>
      ${pop}
    </button>
    ${open?`<div class="lq-body">
      <p class="lq-hook">${l.hook}</p>
      ${l.body.map(p=>`<p>${p}</p>`).join('')}
      <div class="q-explain lq-take">
        <div class="q-guide">${sprite('guide',38)}</div>
        <div class="q-bubble"><span class="verdict ok">KEY TAKEAWAY</span>${l.takeaway}</div>
      </div>
      <div class="q-actions">
        <button type="button" class="btn btn-ghost" onclick="toggleLesson('${l.id}')">CLOSE</button>
        <button type="button" class="btn btn-gold" onclick="nextLesson('${l.id}')">${last?'WORLDS':'NEXT QUEST'} ${sprite('play',10)}</button>
      </div>
    </div>`:''}
  </li>`;
}
