// engine.js — v16.4
// Game rules without any DOM access. The screen (app.js, bossfight.js) and, later, voice mode
// call into this file. Nothing here reads or writes the page; it only changes S and returns results.
const APP_VERSION='16.14';

const config={
  easy:{title:'Easy Patrol',short:'Easy',icon:'🛡️',limit:10,xp:20,shards:1,goal:'Core definitions and concepts.',reward:'+20 XP / correct'},
  normal:{title:'Explorer Quest',short:'Normal',icon:'🧭',limit:8,xp:35,shards:2,goal:'Scenarios and choosing the right service.',reward:'+35 XP / correct'},
  heroic:{title:'Heroic Challenge',short:'Heroic',icon:'⚔️',limit:5,xp:60,shards:3,goal:'Harder scenarios closer to the real exam.',reward:'+60 XP / correct'},
  practical:{title:'Azure Lab',short:'Lab',icon:'🖥️',limit:2,xp:90,shards:4,goal:'Explain the concept in your own words.',reward:'+90 XP / +35 XP after review'}
};
const modeOrder=['easy','normal','heroic','practical'];
const QUIZ_MODES=['easy','normal','heroic']; // multiple-choice modes (voice-capable)

// ---------- tiny event hub: the engine announces, the UI decides how to show it ----------
const _engineListeners={};
function engineOn(evt,fn){(_engineListeners[evt]=_engineListeners[evt]||[]).push(fn)}
function engineEmit(evt,data){(_engineListeners[evt]||[]).forEach(fn=>{try{fn(data)}catch(e){console.warn('Engine listener failed',evt,e)}})}

// ---------- basic helpers (kept as globals: other files use them) ----------
function today(){return new Date().toDateString()}
function st(mode){return S.daily[mode||S.mode]}
function cfg(mode){return config[mode||S.mode]}
function levelOf(xp){return 1+Math.floor(xp/200)}
function levelTitle(){let l=levelOf(S.xp);return l>=30?'Azure Champion':l>=20?'Cloud Raider':l>=10?'Azure Adventurer':l>=5?'Resource Ranger':'Cloud Novice'}

// ---------- day rollover & streak ----------
function newDay(){
  if(S.day===today())return false;
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
  // v15 fix: Practice Exam history used to be wiped at midnight — it is kept now
  let examHistory=(S.history&&S.history.exam)||[];
  S.history={easy:[],normal:[],heroic:[],practical:[],exam:examHistory};
  S.claimed={easy:false,normal:false,heroic:false,campaign:false};
  checkStreakMilestone();
  saveState();
  return true;
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
      engineEmit('milestone',{day:m.day,shards:m.shards});
    }
  });
}

// ---------- question pools (v16.4 "deck") ----------
// Every bank works like a shuffled deck that carries over between days: a question is not served again
// until every other question of that bank has been seen. Easy/Normal "twins" (near-identical rewrites)
// count as seen together. Missed questions live only in Weak Spot Review, not in the daily pools.
const DECK_MODES=['easy','normal','heroic'];
let _twinMap=null; // id -> twin id in the other bank (easy <-> normal)

function _qWords(t){
  return new Set(String(t||'').toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w=>w.length>3));
}
function twinMap(){
  if(_twinMap)return _twinMap;
  _twinMap={};
  let easy=(AZURE_DB.bank.easy||[]).map(q=>({id:q.id,w:_qWords(q.q)}));
  (AZURE_DB.bank.normal||[]).forEach(n=>{
    let nw=_qWords(n.q),best=null,bestS=0;
    easy.forEach(e=>{
      let i=0;nw.forEach(x=>{if(e.w.has(x))i++});
      let sim=i/(nw.size+e.w.size-i||1);
      if(sim>bestS){bestS=sim;best=e.id}
    });
    if(bestS>=0.5&&!_twinMap[best]){_twinMap[n.id]=best;_twinMap[best]=n.id}
  });
  return _twinMap;
}
function bankOf(id){return String(id||'').split('_')[0]}
function seenList(m){
  S.seen=S.seen||{};
  if(!Array.isArray(S.seen[m]))S.seen[m]=[];
  return S.seen[m];
}
function markSeen(id){
  let m=bankOf(id);
  if(!DECK_MODES.includes(m))return;
  let list=seenList(m);
  if(!list.includes(id))list.push(id);
  let twin=twinMap()[id]; // its rewrite in the other bank is "seen" too
  if(twin){let t=seenList(bankOf(twin));if(!t.includes(twin))t.push(twin)}
}

function allq(m){
  m=m||S.mode;
  return [...(AZURE_DB.bank[m]||[])];
}

// Pick from the unseen part of the deck; when the deck is used up, start a new pass (today's picks stay excluded).
function deckPick(m,excludeIds){
  let pool=allq(m),ex=new Set(excludeIds||[]);
  let seen=new Set(seenList(m));
  let candidates=pool.filter(q=>!seen.has(q.id)&&!ex.has(q.id));
  if(!candidates.length){
    S.seen[m]=[]; // new pass through this bank
    candidates=pool.filter(q=>!ex.has(q.id));
    if(!candidates.length)candidates=pool;
  }
  return candidates[Math.floor(Math.random()*candidates.length)];
}

function choose(mode){
  mode=mode||S.mode;
  let s=st(mode);
  if(s.currentQuestion&&s.currentQuestion.q)return;
  let picked=deckPick(mode,s.done);
  s.currentId=picked.id;
  s.currentQuestion=JSON.parse(JSON.stringify(picked));
  s.selected=null;s.checked=false;s.correct=false;
  markSeen(picked.id); // counted as soon as it is shown, so reloading can't reroll it
  saveState();
}

function weaknessPool(){return (S.weakness||[]).map(w=>w.item).filter(q=>q&&q.q)}

// v16.9: saves keep a copy of each missed question. When the question bank is rewritten, those copies
// go stale (old wording, sometimes old broken answers). Swap them for the current version by id;
// drop entries whose question no longer exists. Unanswered "current" questions are refreshed the same way.
function questionById(id){
  let m=bankOf(id),list=(AZURE_DB.bank&&AZURE_DB.bank[m])||[];
  return list.find(q=>q.id===id)||null;
}
function refreshStoredQuestions(){
  let changed=false;
  if(Array.isArray(S.weakness)){
    let before=S.weakness.length;
    S.weakness=S.weakness.filter(w=>{
      if(!w||!w.item||!w.item.id)return false;
      let fresh=questionById(w.item.id);
      if(!fresh)return false;
      if(JSON.stringify(fresh)!==JSON.stringify(w.item)){w.item=JSON.parse(JSON.stringify(fresh));changed=true}
      return true;
    });
    if(S.weakness.length!==before)changed=true;
  }
  let fix=slot=>{
    if(!slot||!slot.currentQuestion||!slot.currentQuestion.id||slot.checked)return;
    let fresh=questionById(slot.currentQuestion.id);
    if(!fresh){slot.currentId=null;slot.currentQuestion=null;slot.selected=null;changed=true;return}
    if(JSON.stringify(fresh)!==JSON.stringify(slot.currentQuestion)){slot.currentQuestion=JSON.parse(JSON.stringify(fresh));slot.selected=null;changed=true}
  };
  DECK_MODES.forEach(m=>fix(S.daily&&S.daily[m]));
  fix(S.review);
  if(changed)saveState();
  return changed;
}

function pendingChestCount(){
  let n=0;
  modeOrder.forEach(m=>{if(st(m).count>=cfg(m).limit&&!S.claimed[m])n++});
  if(modeOrder.every(m=>st(m).count>=cfg(m).limit)&&!S.claimed.campaign)n++;
  return n;
}

// ---------- daily quiz flow ----------
function engineCurrentQuestion(mode){
  mode=mode||S.mode;
  if(!QUIZ_MODES.includes(mode))return null;
  if(st(mode).count>=cfg(mode).limit)return null;
  choose(mode);
  return st(mode).currentQuestion;
}

function engineSelect(mode,i){
  let s=st(mode);
  if(s.checked)return false;
  s.selected=i;
  saveState();
  return true;
}

// Returns {correct, correctIndex, question} or null when there is nothing to check.
function engineCheck(mode){
  let s=st(mode),q=s.currentQuestion;
  if(!q||s.selected===null||s.checked)return null;
  s.checked=true;
  s.correct=s.selected===q.c;
  if(!s.correct){
    let exists=S.weakness.some(w=>w.item&&w.item.id===q.id);
    if(!exists){
      S.weakness.unshift({mode:mode,item:q,missed:new Date().toISOString()});
      S.weakness=S.weakness.slice(0,30);
    }
  }else{
    S.weakness=S.weakness.filter(w=>!(w.item&&w.item.id===q.id));
  }
  saveState();
  return {correct:s.correct,correctIndex:q.c,question:q};
}

// Select + check in one go (voice mode answers this way).
function engineAnswer(mode,i){
  if(!engineSelect(mode,i))return null;
  return engineCheck(mode);
}

// Books the reward and moves on. Returns {xp, shards, modeDone} or null.
function engineFinish(mode){
  let s=st(mode),q=s.currentQuestion,c=cfg(mode);
  if(!q||!s.checked)return null;
  let xpBefore=S.xp,shardsBefore=S.shards;
  if(s.correct){
    let bonus=effectValue('xpBonusAll')+(mode==='easy'?effectValue('xpBonusEasy'):0)+categoryXpBonus(q.category);
    S.xp+=Math.round(c.xp*(1+bonus));
    S.shards+=c.shards;
  }else if(hasEffect('wrongConsolationXp')){
    S.xp+=effectValue('wrongConsolationXp');
  }
  S.history[mode].push({
    id:q.id,
    q:q.q,
    your:s.selected===null?'':('ABCD'[s.selected]+'. '+q.a[s.selected]),
    correctAnswer:'ABCD'[q.c]+'. '+q.a[q.c],
    correct:s.correct,
    e:q.e
  });
  if(!s.done.includes(q.id))s.done.push(q.id);
  s.count++;
  s.currentId=null;s.currentQuestion=null;s.selected=null;s.checked=false;s.correct=false;
  saveState();
  return {xp:S.xp-xpBefore,shards:S.shards-shardsBefore,modeDone:s.count>=c.limit};
}

// First multiple-choice mode that still has questions today (voice mode walks this).
function engineNextQuizMode(){
  return QUIZ_MODES.find(m=>st(m).count<cfg(m).limit)||null;
}

// Daily status as 5 steps: 4 modes + boss. Used by the UI now, by push notifications later.
function engineDailyProgress(){
  let modes=modeOrder.map(m=>({mode:m,count:st(m).count,limit:cfg(m).limit,done:st(m).count>=cfg(m).limit}));
  let modesDone=modes.filter(m=>m.done).length;
  let allModesDone=modesDone===modes.length;
  let bossDone=!!S.claimed.campaign;
  return {
    modes,
    stepsTotal:modes.length+1,
    stepsDone:modesDone+(bossDone?1:0),
    allModesDone,
    bossReady:allModesDone&&!bossDone,
    bossDone,
    pendingChests:pendingChestCount(),
    streak:S.streak
  };
}

// ---------- Weak Spot Review ----------
function engineReviewStart(){
  let r=S.review,pool=weaknessPool();
  if(!pool.length)return null;
  let todayStr=new Date().toDateString();
  let older=(S.weakness||[]).filter(w=>w.item&&w.item.q&&(!w.missed||new Date(w.missed).toDateString()!==todayStr)).map(w=>w.item);
  let choices=older.length?older:pool; // missed earlier first; today's misses only when nothing else is left
  if(choices.length>1&&r.lastId)choices=choices.filter(q=>q.id!==r.lastId);
  let picked=choices[Math.floor(Math.random()*choices.length)];
  r.lastId=picked.id;
  r.currentId=picked.id;
  r.currentQuestion=JSON.parse(JSON.stringify(picked));
  r.selected=null;r.checked=false;r.correct=false;
  saveState();
  return r.currentQuestion;
}
function engineReviewSelect(i){
  let r=S.review;
  if(r.checked)return false;
  r.selected=i;saveState();
  return true;
}
function engineReviewCheck(){
  let r=S.review,q=r.currentQuestion;
  if(!q||r.selected===null||r.checked)return null;
  r.checked=true;
  r.correct=r.selected===q.c;
  if(r.correct){
    S.weakness=S.weakness.filter(w=>!(w.item&&w.item.id===q.id));
    S.xp+=8;
  }
  saveState();
  return {correct:r.correct,correctIndex:q.c,question:q};
}
function engineReviewNext(){
  let r=S.review;
  r.currentId=null;r.currentQuestion=null;r.selected=null;r.checked=false;r.correct=false;
  saveState();
}

// ---------- Boss fight rules (animations stay in bossfight.js) ----------
const BOSS_MAX_HP=3;
function bossAvailable(){
  return modeOrder.every(m=>st(m).count>=cfg(m).limit)&&!S.claimed.campaign;
}
function engineBossStart(){
  let b={playerHP:BOSS_MAX_HP,bossHP:BOSS_MAX_HP,usedIds:[],currentQuestion:null,selected:null,checked:false,correct:false,over:null};
  engineBossNext(b);
  return b;
}
function engineBossNext(b){
  let all=AZURE_DB.bank.heroic||[];
  let today=new Set([...(S.history.heroic||[]).map(h=>h.id),...(st('heroic').done||[]),...b.usedIds]);
  let seen=new Set(seenList('heroic'));
  let pool=all.filter(q=>!today.has(q.id)&&!seen.has(q.id));
  if(!pool.length)pool=all.filter(q=>!today.has(q.id));
  if(!pool.length)pool=all.filter(q=>!b.usedIds.includes(q.id));
  if(!pool.length)pool=all;
  let q=pool[Math.floor(Math.random()*pool.length)];
  b.usedIds.push(q.id);
  b.currentQuestion=q;
  b.selected=null;b.checked=false;b.correct=false;
}
function engineBossCheck(b){
  if(!b||b.selected===null||b.checked||b.over)return null;
  b.checked=true;
  b.correct=b.selected===b.currentQuestion.c;
  if(b.correct)b.bossHP=Math.max(0,b.bossHP-1);
  else b.playerHP=Math.max(0,b.playerHP-1);
  return {correct:b.correct,correctIndex:b.currentQuestion.c};
}
// After the hit animation: decide win/lose or serve the next question. Returns b.over.
function engineBossResolve(b){
  if(b.bossHP<=0)b.over='won';
  else if(b.playerHP<=0)b.over='lost';
  else engineBossNext(b);
  return b.over;
}

// Public surface for new code (voice mode, sync, notifications).
const Engine={
  version:APP_VERSION,
  on:engineOn,
  currentQuestion:engineCurrentQuestion,
  select:engineSelect,
  check:engineCheck,
  answer:engineAnswer,
  finish:engineFinish,
  nextQuizMode:engineNextQuizMode,
  dailyProgress:engineDailyProgress,
  newDay:newDay,
  review:{start:engineReviewStart,select:engineReviewSelect,check:engineReviewCheck,next:engineReviewNext},
  boss:{available:bossAvailable,start:engineBossStart,check:engineBossCheck,resolve:engineBossResolve}
};

// run once at start-up, after the save is loaded and the question bank is in place
refreshStoredQuestions();
