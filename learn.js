let expandedLesson=null;
let selectedTier=null;

const TIER_META=[
  {id:'beginner',name:'Beginner',icon:'🌱',desc:'Start from zero. Core concepts explained with real-world analogies.'},
  {id:'intermediate',name:'Intermediate',icon:'📘',desc:'Building on the basics — more depth per topic.'},
  {id:'advanced',name:'Advanced',icon:'🎯',desc:'Exam-level nuance and edge cases.'},
  {id:'senior',name:'Senior',icon:'🏆',desc:'Real-world scenarios and architecture trade-offs.'}
];

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

function selectTier(tier){
  if(tierLessonCount(tier)===0)return;
  selectedTier=tier;expandedLesson=null;render();
}
function backToTiers(){selectedTier=null;render()}

function toggleLesson(id){
  expandedLesson=expandedLesson===id?null:id;
  if(expandedLesson===id&&!isLessonRead(id))markLessonRead(id);
  render();
}

function markLessonRead(id){
  S.learnRead=S.learnRead||[];
  if(S.learnRead.includes(id))return;
  S.learnRead.push(id);
  S.xp+=5;
  S.drops=S.drops||[];
  S.drops.unshift(`📖 Lesson complete: +5 XP`);
  checkTrackCompletionBonus();
  saveState();
}

function checkTrackCompletionBonus(){
  Object.keys(learnTracks()).forEach(key=>{
    let lessons=trackLessons(key,'beginner');
    if(!lessons.length||!lessons.every(l=>isLessonRead(l.id)))return;
    let flagKey='learnBeginnerBonus_'+key;
    if(S[flagKey])return;
    S[flagKey]=true;
    S.xp+=20;S.shards+=5;
    S.drops.unshift(`🎓 Beginner cleared: ${learnTracks()[key].trackName} — +20 XP, +5 Shards`);
  });
}

function renderLearn(){
  return selectedTier?renderTierContent():renderTierPicker();
}

function renderTierPicker(){
  let html=`
    <div class="page-header">
      <div>
        <div class="page-title">Learn</div>
        <div class="page-subtitle">Pick a level to start reading.</div>
      </div>
    </div>
    <div class="tier-grid">
      ${TIER_META.map(t=>{
        let total=tierLessonCount(t.id),read=tierReadCount(t.id);
        let locked=total===0;
        return `<div class="tier-card ${locked?'locked':''}" ${locked?'':`tabindex="0" role="button" onclick="selectTier('${t.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectTier('${t.id}')}"`}>
          <div class="tier-icon">${t.icon}</div>
          <div class="tier-name">${t.name}</div>
          <div class="tier-desc">${t.desc}</div>
          ${locked?'<div class="tier-badge">🔒 Coming soon</div>':`<div class="tier-badge available">${read} / ${total} read</div>`}
        </div>`;
      }).join('')}
    </div>
  `;
  return html;
}

function renderTierContent(){
  let tier=selectedTier;
  let meta=TIER_META.find(t=>t.id===tier);
  let tracks=learnTracks();
  let totalLessons=0,totalRead=0;
  Object.keys(tracks).forEach(k=>{
    let lessons=trackLessons(k,tier);
    totalLessons+=lessons.length;
    totalRead+=lessons.filter(l=>isLessonRead(l.id)).length;
  });

  let html=`
    <div class="page-header">
      <div>
        <div class="page-title">${meta.icon} Learn — ${meta.name}</div>
        <div class="page-subtitle"><a href="#" onclick="backToTiers();return false" style="color:var(--accent-bright)">← Back to levels</a></div>
      </div>
      <div class="stat-row"><div class="stat-chip"><span class="dot" style="background:var(--teal)"></span>${totalRead} / ${totalLessons} read</div></div>
    </div>
  `;

  Object.keys(tracks).forEach(key=>{
    let t=tracks[key];
    let lessons=trackLessons(key,tier);
    if(!lessons.length)return;
    let read=lessons.filter(l=>isLessonRead(l.id)).length;
    let allDone=read===lessons.length;
    html+=`<div class="card">
      <div class="card-title">${t.icon} ${t.trackName} ${allDone?'· <span style="color:var(--teal)">🎓 Cleared</span>':''}</div>
      <div class="card-sub">${read} / ${lessons.length} lessons read</div>
      <div class="lesson-list">
        ${lessons.map(l=>renderLessonItem(l)).join('')}
      </div>
    </div>`;
  });

  return html;
}

function renderLessonItem(l){
  let open=expandedLesson===l.id;
  let read=isLessonRead(l.id);
  return `<div class="lesson-item ${open?'open':''}">
    <div class="lesson-header" tabindex="0" role="button" onclick="toggleLesson('${l.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleLesson('${l.id}')}">
      <span class="lesson-check">${read?'✓':'○'}</span>
      <span class="lesson-title">${l.title}</span>
      <span class="lesson-caret">${open?'▲':'▼'}</span>
    </div>
    ${open?`<div class="lesson-body">
      <p class="lesson-hook">${l.hook}</p>
      ${l.body.map(p=>`<p>${p}</p>`).join('')}
      <div class="lesson-takeaway">💡 ${l.takeaway}</div>
    </div>`:''}
  </div>`;
}
