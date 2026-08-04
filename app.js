const config={
  easy:{title:'Easy Patrol',short:'Easy',icon:'🛡️',limit:10,xp:20,shards:1,goal:'Core definitions and concepts.',reward:'+20 XP / correct'},
  normal:{title:'Explorer Quest',short:'Normal',icon:'🧭',limit:8,xp:35,shards:2,goal:'Scenarios and choosing the right service.',reward:'+35 XP / correct'},
  heroic:{title:'Heroic Challenge',short:'Heroic',icon:'⚔️',limit:5,xp:60,shards:3,goal:'Harder scenarios closer to the real exam.',reward:'+60 XP / correct'},
  practical:{title:'Azure Lab',short:'Lab',icon:'🧪',limit:2,xp:90,shards:4,goal:'Explain the concept in your own words.',reward:'+90 XP / +35 XP after review'}
};
const modeOrder=['easy','normal','heroic','practical'];

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

function today(){return new Date().toDateString()}
function st(mode){return S.daily[mode||S.mode]}
function cfg(mode){return config[mode||S.mode]}
function levelOf(xp){return 1+Math.floor(xp/200)}
function levelTitle(){let l=levelOf(S.xp);return l>=30?'Azure Champion':l>=20?'Cloud Raider':l>=10?'Azure Adventurer':l>=5?'Resource Ranger':'Cloud Novice'}

function newDay(){
  if(S.day===today())return;
  let y=new Date();y.setDate(y.getDate()-1);
  let wasYesterday=S.day===y.toDateString();
  let savedByFreeze=false;
  if(!wasYesterday){
    let y2=new Date();y2.setDate(y2.getDate()-2);
    if(S.day===y2.toDateString()&&(S.streakFreezes||0)>0){
      S.streakFreezes-=1;
      savedByFreeze=true;
      S.drops=S.drops||[];
      S.drops.unshift('🧊 Streak Freeze used — your streak was saved!');
    }
  }
  if(wasYesterday||savedByFreeze){
    S.streak=(S.streak||0)+1;
  }else{
    S.streak=1;
    S.streakMilestoneClaimed=0;
  }
  S.day=today();
  S.dayStartXP=S.xp;S.dayStartShards=S.shards;
  S.daily=defaultState().daily;
  S.history={easy:[],normal:[],heroic:[],practical:[]};
  S.claimed={easy:false,normal:false,heroic:false,campaign:false};
  checkStreakMilestone();
  saveState();
}

function nextStreakMilestone(){
  let ms=(AZURE_DB.streakMilestones||[]);
  return ms.find(m=>m.day>S.streak)||null;
}

function checkStreakMilestone(){
  let ms=AZURE_DB.streakMilestones||[];
  let claimed=S.streakMilestoneClaimed||0;
  ms.forEach(m=>{
    if(S.streak>=m.day&&claimed<m.day){
      S.shards=(S.shards||0)+m.shards;
      S.streakMilestoneClaimed=m.day;
      claimed=m.day;
      S.drops=S.drops||[];
      S.drops.unshift(`🔥 ${m.day}-day streak! +${m.shards} Shards`);
    }
  });
}

function allq(m){
  m=m||S.mode;
  let base=[...(AZURE_DB.bank[m]||[])];
  if((m==='normal'||m==='heroic')&&S.weakness.length){
    let baseIds=new Set(base.map(q=>q.id));
    let extra=S.weakness.map(w=>w.item).filter(x=>x&&x.a&&x.id&&!baseIds.has(x.id));
    let seen=new Set();
    extra=extra.filter(x=>{if(seen.has(x.id))return false;seen.add(x.id);return true});
    base=[...base,...extra.slice(0,5)];
  }
  return base;
}

function choose(mode){
  let s=st(mode),pool=allq(mode);
  if(s.currentQuestion&&s.currentQuestion.q)return;
  let candidates=pool.filter(q=>!s.done.includes(q.id));
  if(!candidates.length){s.done=[];candidates=pool}
  let picked=candidates[Math.floor(Math.random()*candidates.length)];
  s.currentId=picked.id;
  s.currentQuestion=JSON.parse(JSON.stringify(picked));
  s.selected=null;s.checked=false;s.correct=false;
  saveState();
}

let currentPage='quests';
function goTo(page){
  currentPage=page;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.page===page));
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  renderPage(page);
}

function renderPage(page){
  newDay();applyTheme();maybeShowDailyFact();
  if(page==='quests')renderQuestsPage();
  else if(page==='shop')renderShopPage();
  else if(page==='mastery')renderMasteryPage();
  else if(page==='collection')renderCollectionPage();
  else if(page==='profile')renderProfilePage();
  else if(page==='history')renderHistoryPage();
  refreshSidebar();
}
function render(){renderPage(currentPage)}
function mount(page,html){document.getElementById('page-'+page).innerHTML=html}

function pendingChestCount(){
  let n=0;
  modeOrder.forEach(m=>{if(st(m).count>=cfg(m).limit&&!S.claimed[m])n++});
  if(modeOrder.every(m=>st(m).count>=cfg(m).limit)&&!S.claimed.campaign)n++;
  return n;
}

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
  el.textContent=`⏳ Today's quests reset in ${h}h ${m}m`;
  el.classList.toggle('urgent',h<2);
}

function updateChestBadge(){
  let el=document.getElementById('chest-badge');
  if(!el)return;
  let n=pendingChestCount();
  el.style.display=n>0?'flex':'none';
  el.textContent=n;
}

function refreshSidebar(){
  document.getElementById('streak-text').textContent=S.streak+' day streak';
  let sub=document.getElementById('streak-sub');
  if(sub){
    let next=nextStreakMilestone();
    let parts=[];
    if(next)parts.push(`${next.day-S.streak} day${next.day-S.streak===1?'':'s'} to +${next.shards} shard milestone`);
    else parts.push('All milestones reached 🏆');
    if((S.streakFreezes||0)>0)parts.push(`🧊 x${S.streakFreezes}`);
    sub.textContent=parts.join(' · ');
  }
  updateDayTimer();
  updateChestBadge();
}

function renderQuestsPage(){
  let html=`
    <div class="page-header">
      <div>
        <div class="page-title">Daily Quests</div>
        <div class="page-subtitle">${today()}</div>
      </div>
      <div class="stat-row">
        <div class="stat-chip"><span class="dot" style="background:var(--accent)"></span>${S.xp} XP · Lvl ${levelOf(S.xp)}</div>
        <div class="stat-chip"><span class="dot" style="background:var(--amber)"></span>${S.shards} Shards</div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">Today's Path</div>
      <div class="card-sub">Complete all four modes to unlock the Daily Campaign Chest.</div>
      ${renderHexPath()}
    </div>

    ${renderActiveModeCard()}
  `;
  mount('quests',html);
}

function renderHexPath(){
  let nodes=modeOrder.map((m,i)=>{
    let s=st(m),c=cfg(m),done=s.count>=c.limit,active=S.mode===m;
    return `<div class="hex-node ${done?'done':''} ${active?'active':''}" onclick="setMode('${m}')">
        <div class="hex"><span class="hex-icon">${c.icon}</span><span class="hex-label">${c.short}</span></div>
        <span class="hex-progress">${s.count}/${c.limit}</span>
      </div>${i<modeOrder.length-1?'<div class="hex-link '+(done?'done':'')+'"></div>':''}`;
  }).join('');
  let allDone=modeOrder.every(m=>st(m).count>=cfg(m).limit);
  let bossLink=`<div class="hex-link ${allDone?'done':''}"></div>`;
  let bossNode=`<div class="hex-node boss ${allDone?'done':''} ${S.claimed.campaign?'done':''}">
      <div class="hex"><span class="hex-icon">👑</span><span class="hex-label">Boss</span></div>
      <span class="hex-progress">${S.claimed.campaign?'Done':allDone?'Ready':'Locked'}</span>
    </div>`;
  return `<div class="hexpath">${nodes}${bossLink}${bossNode}</div>`;
}

function renderActiveModeCard(){
  let s=st(),c=cfg();
  if(s.count>=c.limit){
    return renderDoneCard()+renderCampaignCard();
  }
  return S.mode==='practical'?renderLabCard():renderQuizCard();
}

function renderQuizCard(){
  choose();
  let s=st(),q=s.currentQuestion,c=cfg();
  let ansHtml=q.a.map((x,i)=>{
    let cls=[];
    if(s.selected===i)cls.push('selected');
    if(s.checked&&i===q.c)cls.push('correct');
    if(s.checked&&s.selected===i&&i!==q.c)cls.push('wrong');
    return `<button class="opt ${cls.join(' ')}" ${s.checked?'disabled':''} onclick="selectAnswer(${i})">
      <span class="opt-key">${'ABCD'[i]}</span><span>${x}</span>
    </button>`;
  }).join('');

  let feedback='';
  if(s.checked){
    if(s.correct){
      feedback=`<div class="feedback-banner good"><div><span class="label">✓ Correct</span>${q.e}</div></div>`;
    }else{
      feedback=`<div class="feedback-banner bad"><div><span class="label">✗ Incorrect — the right answer is ${'ABCD'[q.c]}: ${q.a[q.c]}</span>${q.e}</div></div>`;
    }
  }

  return `<div class="card quest-card">
    <span class="quest-tag">${c.icon} ${c.title} · ${s.count+1}/${c.limit}</span>
    <div class="quest-q">${q.q}</div>
    ${ansHtml}
    ${feedback||'<p class="muted-hint" style="margin-top:14px">Pick an answer A–D, then click Check.</p>'}
    <div class="btn-row">
      <button class="btn btn-primary" ${s.selected===null||s.checked?'disabled':''} onclick="checkAnswer()">Check answer</button>
      <button class="btn btn-gold" ${!s.checked?'disabled':''} onclick="finishQuest()">Finish quest${s.checked&&s.correct?' (+'+c.xp+' XP)':''}</button>
    </div>
  </div>`;
}

function selectAnswer(i){let s=st();if(s.checked)return;s.selected=i;saveState();render()}

function checkAnswer(){
  let s=st(),q=s.currentQuestion;
  if(s.selected===null||s.checked)return;
  s.checked=true;
  s.correct=s.selected===q.c;
  if(!s.correct){
    let exists=S.weakness.some(w=>w.item&&w.item.id===q.id);
    if(!exists){
      S.weakness.unshift({mode:S.mode,item:q,missed:new Date().toISOString()});
      S.weakness=S.weakness.slice(0,30);
    }
  }else{
    S.weakness=S.weakness.filter(w=>!(w.item&&w.item.id===q.id));
  }
  saveState();render();
}

function finishQuest(){
  let s=st(),q=s.currentQuestion;
  if(!s.checked)return;
  if(s.correct){
    let bonus=effectValue('xpBonusAll')+(S.mode==='easy'?effectValue('xpBonusEasy'):0)+categoryXpBonus(q.category);
    S.xp+=Math.round(cfg().xp*(1+bonus));
    S.shards+=cfg().shards;
  }else if(hasEffect('wrongConsolationXp')){
    S.xp+=effectValue('wrongConsolationXp');
  }
  S.history[S.mode].push({
    q:q.q,
    your:s.selected===null?'':('ABCD'[s.selected]+'. '+q.a[s.selected]),
    correctAnswer:'ABCD'[q.c]+'. '+q.a[q.c],
    correct:s.correct,
    e:q.e
  });
  if(!s.done.includes(q.id))s.done.push(q.id);
  s.count++;
  s.currentId=null;s.currentQuestion=null;s.selected=null;s.checked=false;s.correct=false;
  saveState();render();
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

  let feedbackHtml=s.feedback?`<div class="feedback-banner ${s.passed?'good':s.reviewable?'warn':'bad'}">${s.feedback}</div>`
    :'<p class="muted-hint">Write your answer in your own words, then click Check.</p>';

  return `<div class="card quest-card">
    <span class="quest-tag">${c.icon} ${c.title} · ${s.count+1}/${c.limit}</span>
    <div class="quest-q">${l.t}</div>
    <p class="muted-hint" style="margin-bottom:12px">${l.d}</p>
    <textarea oninput="labInput(this.value)" placeholder="Write your explanation in 2-3 sentences...">${s.notes||''}</textarea>
    ${feedbackHtml}
    <div class="btn-row">
      <button class="btn btn-primary" onclick="checkLab()">Check answer</button>
      ${(s.attempts||0)>=(3-effectValue('hintReduction'))&&!s.passed?'<button class="btn btn-ghost" onclick="showHint()">Show hint</button>':''}
      ${(s.attempts||0)>=5&&!s.passed&&!s.surrendered?'<button class="btn btn-ghost" onclick="giveUpLab()">Give up (0 XP)</button>':''}
      ${s.surrendered?'<button class="btn btn-primary" onclick="continueAfterGiveUp()">Continue</button>':''}
      <button class="btn btn-gold" ${!s.checked||!s.passed?'disabled':''} onclick="finishLab(false)">Finish (+${c.xp} XP)</button>
      ${s.reviewable&&!s.passed?'<button class="btn btn-ghost" onclick="finishLab(true)">Finish after review (+35 XP)</button>':''}
    </div>
    <p class="muted-hint" style="margin-top:12px">${attemptNote}</p>
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
  let groups=l.keywords.map(g=>g.slice(0,2).join(' / '));
  s.feedback=`<span class="label">Hint</span>Try to mention: <b>${groups.join(' • ')}</b>.`;
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

function renderDoneCard(){
  let h=S.history[S.mode]||[],wrong=h.filter(x=>!x.correct),c=cfg();
  let chest=!S.claimed[S.mode]
    ?`<div class="feedback-banner warn">⏳ Open your chest today — unclaimed chests are lost at midnight.</div><button class="btn btn-gold" onclick="claimChest('${S.mode}')">Open chest — ${c.title}</button>`
    :`<div class="feedback-banner good"><span class="label">Chest claimed</span></div>`;
  return `<div class="card">
    <div class="card-title">✅ ${c.title} complete</div>
    <div class="card-sub">${h.length} questions answered · ${wrong.length} to review</div>
    ${chest}
  </div>`;
}

function renderCampaignCard(){
  if(!modeOrder.every(m=>st(m).count>=cfg(m).limit))return'';
  let all=[...S.history.easy,...S.history.normal,...S.history.heroic,...S.history.practical];
  let total=all.length,correct=all.filter(x=>x.correct).length,acc=total?Math.round(correct/total*100):0;
  let gained=S.xp-(S.dayStartXP||0),shardsGained=S.shards-(S.dayStartShards||0);
  let title=acc>=95?'Azure Champion':acc>=80?'Cloud Raider':acc>=60?'Resource Ranger':'Cloud Apprentice';
  let chest=!S.claimed.campaign
    ?`<div class="feedback-banner warn">⏳ Claim your Campaign Chest today — it won't carry over to tomorrow.</div><button class="btn btn-gold" onclick="claimChest('campaign')">👑 Open Daily Campaign Chest</button>`
    :`<div class="feedback-banner good"><span class="label">Campaign chest claimed</span></div>`;
  return `<div class="card">
    <div class="card-title">👑 Daily Campaign complete</div>
    <div class="grid" style="margin:14px 0">
      <div class="metric"><div class="metric-label">Today's title</div><div class="metric-value" style="font-size:15px">${title}</div></div>
      <div class="metric"><div class="metric-label">Accuracy</div><div class="metric-value">${acc}%</div></div>
      <div class="metric"><div class="metric-label">Today's gain</div><div class="metric-value">+${gained} XP · +${shardsGained} 💎</div></div>
    </div>
    ${chest}
  </div>`;
}

function claimChest(mode){
  if(S.claimed[mode])return;
  let reward=grantDrop(mode);
  S.claimed[mode]=true;
  saveState();
  openChestAnimation(reward);
}

function setMode(m){S.mode=m;saveState();renderQuestsPage();refreshSidebar()}

function resetCurrent(){
  let s=st();
  s.currentId=null;s.currentQuestion=null;s.selected=null;s.checked=false;s.correct=false;
  s.notes='';s.feedback='';s.passed=false;s.reviewable=false;s.surrendered=false;s.attempts=0;
  saveState();render();
}
function fullReset(){if(confirm('Are you sure you want to reset all progress? This action cannot be undone.')){S=defaultState();saveState();goTo('quests')}}

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
    S=Object.assign(defaultState(),parsed);
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
  el.className='feedback-banner good';
  el.style.position='fixed';el.style.top='20px';el.style.right='20px';el.style.zIndex=999;el.style.maxWidth='320px';
  el.innerHTML=`<span class="label">Loot</span>${msg}`;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),4500);
}

function renderShopPage(){mount('shop',renderLoot())}
function renderMasteryPage(){mount('mastery',renderMastery())}

function renderCollectionPage(){
  const owned=ownedIds();
  let html=`
    <div class="page-header">
      <div><div class="page-title">Collection</div><div class="page-subtitle">${owned.length} / ${AZURE_DB.loot.length} items</div></div>
    </div>`;
  if(!owned.length){
    html+=`<div class="empty-state">No items yet. Open chests or visit the Loot Shop.</div>`;
  }else{
    html+=`<div class="loot-grid">${owned.map(id=>{
      let it=itemById(id);if(!it)return'';
      return `<div class="loot-card ${it.rarity}">
        <div class="loot-name ${it.rarity}">${it.name}</div>
        <div class="loot-meta"><span class="loot-badge">${it.type}</span><span class="loot-badge">${it.rarity}</span></div>
        <div class="loot-desc">${it.desc}</div>
        <div class="loot-effect">${it.effect}</div>
      </div>`;
    }).join('')}</div>`;
  }
  mount('collection',html);
}

function renderProfilePage(){
  let l=levelOf(S.xp),pct=Math.round(((S.xp%200)/200)*100);
  let all=[...S.history.easy,...S.history.normal,...S.history.heroic,...S.history.practical];
  let totalAnswered=all.length,totalCorrect=all.filter(x=>x.correct).length;
  let html=`
    <div class="page-header">
      <div><div class="page-title">Profile</div><div class="page-subtitle">${levelTitle()}</div></div>
    </div>
    <div class="card" style="display:flex;gap:18px;align-items:center">
      <div class="avatar-ring">${l}</div>
      <div style="flex:1">
        <div style="font-weight:600;font-size:16px;margin-bottom:2px">${levelTitle()}</div>
        <div class="muted-hint">Level ${l} · ${S.xp} XP total</div>
        <div class="level-track"><div class="level-fill" style="width:${pct}%"></div></div>
        <div class="muted-hint mono">${S.xp%200} / 200 XP to next level</div>
      </div>
    </div>
    <div class="grid">
      <div class="metric"><div class="metric-label">Azure Shards</div><div class="metric-value">${S.shards}</div></div>
      <div class="metric"><div class="metric-label">Current streak</div><div class="metric-value">${S.streak} 🔥</div></div>
      <div class="metric"><div class="metric-label">Answered today</div><div class="metric-value">${totalAnswered}</div></div>
      <div class="metric"><div class="metric-label">Accuracy today</div><div class="metric-value">${totalAnswered?Math.round(totalCorrect/totalAnswered*100):0}%</div></div>
      <div class="metric"><div class="metric-label">Collection</div><div class="metric-value">${ownedIds().length}/${AZURE_DB.loot.length}</div></div>
      <div class="metric"><div class="metric-label">Weak questions</div><div class="metric-value">${S.weakness.length}</div></div>
    </div>
    <div class="card">
      <div class="card-title">Settings</div>
      <div class="card-sub">Local settings and progress reset.</div>
      <div class="btn-row">
        <button class="btn btn-ghost" onclick="resetCurrent()">Reset current quest</button>
        <button class="btn btn-ghost" onclick="fullReset()" style="border-color:var(--red)">Reset all progress</button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Backup</div>
      <div class="card-sub">Your progress lives only in this browser. Export a backup file regularly, especially before switching devices or browsers.</div>
      <div class="btn-row">
        <button class="btn btn-primary" onclick="exportProgress()">Export progress (.json)</button>
        <button class="btn btn-ghost" onclick="document.getElementById('import-file').click()">Import progress</button>
        <input type="file" id="import-file" accept="application/json" style="display:none" onchange="importProgress(event)">
      </div>
    </div>
  `;
  mount('profile',html);
}

function renderHistoryPage(){
  let html=`
    <div class="page-header">
      <div><div class="page-title">Today's History</div><div class="page-subtitle">Review what you missed today</div></div>
    </div>`;
  let any=false;
  modeOrder.forEach(m=>{
    let h=S.history[m]||[];
    if(!h.length)return;
    any=true;
    html+=`<div class="card"><div class="card-title">${cfg(m).icon} ${cfg(m).title}</div>`;
    h.forEach(x=>{
      html+=`<div class="history-item ${x.correct?'ok':''}">
        <div class="history-q">${x.q}</div>
        ${!x.correct?`<div class="history-row your">Your answer: ${x.your||'—'}</div>`:''}
        <div class="history-row correct">Correct: ${x.correctAnswer}</div>
        <div class="history-explain">${x.e}</div>
      </div>`;
    });
    html+=`</div>`;
  });
  if(!any)html+=`<div class="empty-state">You haven't answered any questions today yet.</div>`;
  mount('history',html);
}

goTo('quests');
setInterval(function(){
  if(S.day!==today()){render();}
  else{updateDayTimer();updateChestBadge();}
},30000);
