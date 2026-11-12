// engine.js — v16
// Game rules without any DOM access. The screen (app.js, bossfight.js) and, later, voice mode
// call into this file. Nothing here reads or writes the page; it only changes S and returns results.
const APP_VERSION='16';

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

// ---------- question pools ----------
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

function weaknessPool(){return (S.weakness||[]).map(w=>w.item).filter(q=>q&&q.q)}

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
  let picked=pool[Math.floor(Math.random()*pool.length)];
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
  let pool=(AZURE_DB.bank.heroic||[]).filter(q=>!b.usedIds.includes(q.id));
  if(!pool.length)pool=AZURE_DB.bank.heroic||[];
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
