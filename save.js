const SAVE_KEY='azureAcademyV14';
function defaultState(){
  const d=new Date().toDateString();
  return{
    version:'14',
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
    return s&&s.version==='14'?s:defaultState();
  }catch(e){
    return defaultState();
  }
}
function saveState(){localStorage.setItem(SAVE_KEY,JSON.stringify(S))}
let S=loadState();
