const SAVE_KEY='azureAcademyV14';
function defaultState(){
  const d=new Date().toDateString();
  return{
    version:'14',
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
    history:{easy:[],normal:[],heroic:[],practical:[]},
    daily:{
      easy:{count:0,done:[],current:null,currentId:null,currentQuestion:null,selected:null,checked:false,correct:false},
      normal:{count:0,done:[],current:null,currentId:null,currentQuestion:null,selected:null,checked:false,correct:false},
      heroic:{count:0,done:[],current:null,currentId:null,currentQuestion:null,selected:null,checked:false,correct:false},
      practical:{count:0,done:[],current:null,currentId:null,notes:'',checked:false,passed:false,reviewable:false,surrendered:false,feedback:'',attempts:0}
    }
  };
}
function loadState(){
  try{
    const s=JSON.parse(localStorage.getItem(SAVE_KEY));
    return s&&s.version==='14'?Object.assign(defaultState(),s):defaultState();
  }catch(e){
    return defaultState();
  }
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
