// save.js — v15
// Persistence layer. One rule above all: an existing save is migrated, never thrown away.
const SAVE_KEY='azureAcademyV14';            // storage key stays the same so existing saves are found
const SAVE_SCHEMA=15;                         // bump this + add a step to MIGRATIONS when the save shape changes
const SAVE_BACKUP_PREFIX='azureAcademyBackup_'; // raw copies taken before any migration / on unreadable data

function defaultState(){
  const d=new Date().toDateString();
  return{
    version:'14',          // legacy marker, kept for older tools (admin_guide, imports)
    schema:SAVE_SCHEMA,
    hasSeenWelcome:false,
    day:d,
    mode:'easy',
    xp:0,
    shards:0,
    streak:1,
    streakFreezes:0,
    streakMilestoneClaimed:0,
    mastery:{},
    lastFactShownDay:null,
    factOrder:[],
    factPos:0,
    soundEnabled:true,
    learnRead:[],
    review:{currentId:null,currentQuestion:null,selected:null,checked:false,correct:false},
    dayStartXP:0,
    dayStartShards:0,
    collection:[],
    drops:[],
    claimed:{easy:false,normal:false,heroic:false,campaign:false},
    activeTheme:'default',
    weakness:[],
    history:{easy:[],normal:[],heroic:[],practical:[],exam:[]},
    daily:{
      easy:{count:0,done:[],current:null,currentId:null,currentQuestion:null,selected:null,checked:false,correct:false},
      normal:{count:0,done:[],current:null,currentId:null,currentQuestion:null,selected:null,checked:false,correct:false},
      heroic:{count:0,done:[],current:null,currentId:null,currentQuestion:null,selected:null,checked:false,correct:false},
      practical:{count:0,done:[],current:null,currentId:null,notes:'',checked:false,passed:false,reviewable:false,surrendered:false,feedback:'',attempts:0}
    }
  };
}

// Each step takes a save at schema N-1 and returns it at schema N. Never delete player data here.
const MIGRATIONS={
  15:function(s){
    // v14 -> v15: guarantee every nested container exists (old saves crashed on missing ones)
    let def=defaultState();
    s.history=Object.assign({},def.history,s.history||{});
    if(!Array.isArray(s.history.exam))s.history.exam=[];
    s.daily=Object.assign({},def.daily,s.daily||{});
    Object.keys(def.daily).forEach(m=>{s.daily[m]=Object.assign({},def.daily[m],s.daily[m]||{})});
    s.claimed=Object.assign({},def.claimed,s.claimed||{});
    s.review=Object.assign({},def.review,s.review||{});
    s.mastery=s.mastery||{};
    return s;
  }
};

function backupRawSave(raw,tag){
  try{
    let key=SAVE_BACKUP_PREFIX+tag;
    if(!localStorage.getItem(key))localStorage.setItem(key,raw); // keep the FIRST copy, never overwrite it
  }catch(e){console.warn('Backup failed',e)}
}

function looksLikeSave(s){
  return s&&typeof s==='object'&&typeof s.xp==='number';
}

function migrateState(s){
  let from=typeof s.schema==='number'?s.schema:14; // saves before v15 had no schema field
  for(let v=from+1;v<=SAVE_SCHEMA;v++){
    if(MIGRATIONS[v])s=MIGRATIONS[v](s);
    s.schema=v;
  }
  return s;
}

function loadState(){
  let raw=null;
  try{raw=localStorage.getItem(SAVE_KEY)}catch(e){return defaultState()}
  if(!raw)return defaultState();
  let parsed;
  try{parsed=JSON.parse(raw)}
  catch(e){
    // unreadable save: keep a copy so it can be recovered by hand, then start fresh
    backupRawSave(raw,'unreadable');
    console.error('Save unreadable, backed up',e);
    return defaultState();
  }
  if(!looksLikeSave(parsed)){
    backupRawSave(raw,'unrecognised');
    return defaultState();
  }
  let from=typeof parsed.schema==='number'?parsed.schema:14;
  if(from<SAVE_SCHEMA)backupRawSave(raw,'schema'+from);
  let migrated=migrateState(parsed);
  return Object.assign(defaultState(),migrated);
}

function saveState(){
  try{
    localStorage.setItem(SAVE_KEY,JSON.stringify(S));
  }catch(e){
    console.error('Save failed',e);
    if(typeof showToast==='function')showToast('⚠️ Progress could not be saved (storage full or unavailable). Export a backup soon.');
  }
}

let S=loadState();
saveState(); // persist the migrated shape right away (the original is kept in the backup key)
