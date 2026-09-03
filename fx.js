let lastSeenLevel=null;

function checkLevelUpFX(){
  let lvl=levelOf(S.xp);
  if(lastSeenLevel===null){lastSeenLevel=lvl;return}
  if(lvl>lastSeenLevel){
    showLevelUpFX(lvl);
  }
  lastSeenLevel=lvl;
}

function showLevelUpFX(level){
  let overlay=document.getElementById('fx-overlay');
  let flash=document.getElementById('fx-flash');
  let pulse=document.getElementById('fx-pulse');
  let content=document.getElementById('fx-content');
  if(!overlay||!content)return;

  pulse.className='fx-pulse';
  flash.className='fx-flash';
  content.innerHTML=`
    <div class="fx-level-text">LEVEL ${level}</div>
    <div class="fx-level-sub">${levelTitle()}</div>
    <div class="fx-hint">Click anywhere to continue</div>
  `;
  overlay.classList.remove('hidden');
  overlay.onclick=closeFxOverlay;
  requestAnimationFrame(()=>{
    overlay.classList.add('visible');
    flash.classList.add('show');
    pulse.classList.add('show');
    content.querySelector('.fx-level-text').classList.add('show');
    content.querySelector('.fx-level-sub').classList.add('show');
  });
  if(typeof playChime==='function')playChime(1046,0.5);
}

function showDailyCompleteFX(onDone){
  let overlay=document.getElementById('fx-overlay');
  let flash=document.getElementById('fx-flash');
  let pulse=document.getElementById('fx-pulse');
  let content=document.getElementById('fx-content');
  if(!overlay||!content){if(onDone)onDone();return}

  pulse.className='fx-pulse';
  flash.className='fx-flash';
  content.innerHTML=`
    <div class="fx-check">✓</div>
    <div class="fx-daily-title">Daily Campaign Complete</div>
    <div class="fx-hint">Click anywhere to continue</div>
  `;
  overlay.classList.remove('hidden');
  overlay.onclick=function(){closeFxOverlay();if(onDone)onDone()};
  requestAnimationFrame(()=>{
    overlay.classList.add('visible');
    pulse.style.color='var(--teal)';
    pulse.classList.add('show');
    content.querySelector('.fx-check').classList.add('show');
    content.querySelector('.fx-daily-title').classList.add('show');
  });
  if(typeof playChime==='function')playChime(880,0.5);
}

function closeFxOverlay(){
  let overlay=document.getElementById('fx-overlay');
  if(!overlay)return;
  overlay.classList.remove('visible');
  setTimeout(()=>overlay.classList.add('hidden'),300);
}

let toastTimer=null;
function showAchievementToast(title,subtitle){
  let toast=document.getElementById('achievement-toast');
  if(!toast)return;
  toast.classList.remove('show');
  void toast.offsetWidth;
  toast.innerHTML=`
    <div class="ach-kicker">🏆 Milestone</div>
    <div class="ach-title">${title}</div>
    ${subtitle?`<div class="ach-sub">${subtitle}</div>`:''}
  `;
  toast.classList.add('show');
  if(toastTimer)clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toast.classList.remove('show'),4200);
}
