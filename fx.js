// fx.js — v16b pixel reward screens: LEVEL UP, DAY CLEARED, milestone toast
let lastSeenLevel=null;

function checkLevelUpFX(){
  let lvl=levelOf(S.xp);
  if(lastSeenLevel===null){lastSeenLevel=lvl;return}
  if(lvl>lastSeenLevel)showLevelUpFX(lvl);
  lastSeenLevel=lvl;
}

let fxHideTimer=null;
function openFxOverlay(html,onClose){
  let overlay=document.getElementById('fx-overlay');
  if(!overlay){if(onClose)onClose();return}
  if(fxHideTimer){clearTimeout(fxHideTimer);fxHideTimer=null} // a previous close must not hide this one
  overlay.innerHTML=html;
  overlay.classList.remove('hidden');
  overlay.onclick=function(){closeFxOverlay();if(onClose)onClose()};
  requestAnimationFrame(()=>overlay.classList.add('visible'));
}

function fxSparks(n){
  let out='';
  for(let i=0;i<n;i++){
    let a=(360/n)*i,d=90+(i%3)*28;
    out+=`<span class="fx-spark" style="--a:${a}deg;--d:${d}px;animation-delay:${(i%4)*0.08}s">${sprite('spark',15)}</span>`;
  }
  return out;
}

function showLevelUpFX(level){
  openFxOverlay(`
    <div class="fxp">
      <div class="fxp-rays"></div>
      <div class="fxp-burst">${fxSparks(12)}</div>
      <div class="fxp-title">LEVEL UP!</div>
      <div class="fxp-hero">${sprite(heroSpr('hero'),96)}</div>
      <div class="fxp-sub">LV ${level-1} &gt; LV ${level}</div>
      <div class="fxp-name">${escapeHtml(levelTitle())}</div>
      <div class="fxp-hint">TAP TO CONTINUE</div>
    </div>`);
  if(typeof playTune==='function')playTune([[523,.08],[659,.08],[784,.08],[1046,.25]]);
}

function showDailyCompleteFX(onDone){
  let gained=S.xp-(S.dayStartXP||0);
  openFxOverlay(`
    <div class="fxp day">
      <div class="fxp-burst">${fxSparks(16)}</div>
      <div class="fxp-burst b2">${fxSparks(10)}</div>
      <div class="fxp-title">DAY CLEARED!</div>
      <div class="fxp-hero">${sprite(heroSpr('hero'),96)}</div>
      <div class="fxp-sub">+${gained} XP TODAY</div>
      <div class="fxp-name">Streak ${S.streak} · see you tomorrow</div>
      <div class="fxp-hint">TAP TO OPEN THE CAMPAIGN CRATE</div>
    </div>`,onDone);
  if(typeof playTune==='function')playTune([[784,.1],[784,.1],[1046,.1],[1318,.3]]);
}

function closeFxOverlay(){
  let overlay=document.getElementById('fx-overlay');
  if(!overlay)return;
  overlay.onclick=null;
  overlay.classList.remove('visible');
  fxHideTimer=setTimeout(()=>{overlay.classList.add('hidden');overlay.innerHTML='';fxHideTimer=null},200);
}

let toastTimer=null;
function showAchievementToast(title,subtitle){
  let toast=document.getElementById('achievement-toast');
  if(!toast)return;
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.innerHTML=`
    <span class="ach-ic">${sprite('flame',24)}</span>
    <span class="ach-txt"><span class="ach-kicker">MILESTONE</span>
    <span class="ach-title">${escapeHtml(title)}</span>
    ${subtitle?`<span class="ach-sub">${escapeHtml(subtitle)}</span>`:''}</span>`;
  toast.classList.add('show');
  if(toastTimer)clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove('show'),4200);
}
