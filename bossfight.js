let battleState=null;
const BOSS_MAX_HP=3;

function bossAvailable(){
  return modeOrder.every(m=>st(m).count>=cfg(m).limit)&&!S.claimed.campaign;
}

function startBossFight(){
  if(!bossAvailable())return;
  battleState={
    playerHP:BOSS_MAX_HP,
    bossHP:BOSS_MAX_HP,
    usedIds:[],
    currentQuestion:null,
    selected:null,
    checked:false,
    correct:false,
    over:null
  };
  let overlay=document.getElementById('boss-overlay');
  if(!overlay)return;
  overlay.classList.remove('hidden');
  requestAnimationFrame(()=>overlay.classList.add('visible'));
  nextBossQuestion();
  renderBossFight();
}

function nextBossQuestion(){
  let b=battleState;
  let pool=(AZURE_DB.bank.heroic||[]).filter(q=>!b.usedIds.includes(q.id));
  if(!pool.length)pool=AZURE_DB.bank.heroic||[];
  let q=pool[Math.floor(Math.random()*pool.length)];
  b.usedIds.push(q.id);
  b.currentQuestion=q;
  b.selected=null;
  b.checked=false;
  b.correct=false;
}

function selectBossAnswer(i){
  let b=battleState;
  if(!b||b.checked||b.over)return;
  b.selected=i;
  renderBossFight();
}

function checkBossAnswer(){
  let b=battleState;
  if(!b||b.selected===null||b.checked||b.over)return;
  b.checked=true;
  let q=b.currentQuestion;
  b.correct=b.selected===q.c;
  if(b.correct){
    b.bossHP=Math.max(0,b.bossHP-1);
    playChime(880);
    triggerHitFlash('boss');
    triggerImpactFlash('hit-boss');
    triggerSlash();
  }else{
    b.playerHP=Math.max(0,b.playerHP-1);
    playChime(220,0.3);
    triggerHitFlash('player');
    triggerImpactFlash('hit-player');
    triggerSlash();
  }
  renderBossFight();

  setTimeout(()=>{
    if(b.bossHP<=0){
      b.over='won';
    }else if(b.playerHP<=0){
      b.over='lost';
    }else{
      nextBossQuestion();
    }
    renderBossFight();
    if(b.over)setTimeout(()=>{
      let sprite=document.getElementById('boss-sprite');
      if(!sprite)return;
      sprite.classList.add(b.over==='won'?'boss-defeat':'boss-victorious');
      let title=document.querySelector('.boss-result-title');
      if(title)setTimeout(()=>title.classList.add('show'),b.over==='won'?500:150);
    },50);
  },1400);
}

function triggerImpactFlash(cls){
  let el=document.getElementById('boss-impact-flash');
  if(!el)return;
  el.className='boss-impact-flash';
  void el.offsetWidth;
  el.classList.add(cls);
}

function triggerSlash(){
  let el=document.getElementById('boss-slash');
  if(!el)return;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
}

function triggerHitFlash(side){
  let el=document.getElementById(side==='boss'?'boss-sprite':'player-hp-block');
  if(!el)return;
  el.classList.add('hit-flash');
  setTimeout(()=>{if(el)el.classList.remove('hit-flash')},400);
}

function retryBossFight(){startBossFight()}

function closeBossFight(){
  let overlay=document.getElementById('boss-overlay');
  if(!overlay)return;
  overlay.classList.remove('visible');
  setTimeout(()=>overlay.classList.add('hidden'),300);
  battleState=null;
}

function claimBossVictory(){
  closeBossFight();
  if(typeof showDailyCompleteFX==='function'){
    showDailyCompleteFX(()=>claimChest('campaign'));
  }else{
    claimChest('campaign');
  }
}

function renderBossFight(){
  let b=battleState;
  let root=document.getElementById('boss-scene-content');
  if(!root||!b)return;

  let playerPct=Math.round((b.playerHP/BOSS_MAX_HP)*100);
  let bossPct=Math.round((b.bossHP/BOSS_MAX_HP)*100);

  let html=`
    <div class="boss-hp-row">
      <div class="hp-block" id="player-hp-block">
        <div class="hp-label">🧑 You</div>
        <div class="hp-bar"><div class="hp-fill player" style="width:${playerPct}%"></div></div>
      </div>
      <div class="boss-vs">VS</div>
      <div class="hp-block">
        <div class="hp-label">👑 Boss</div>
        <div class="hp-bar"><div class="hp-fill boss" style="width:${bossPct}%"></div></div>
      </div>
    </div>
    <div class="boss-sprite" id="boss-sprite">👑</div>
  `;

  if(b.over==='won'){
    html+=`<div class="boss-result win">
      <div class="boss-result-title">🏆 Victory!</div>
      <p>The boss has fallen. Your Daily Campaign Chest awaits.</p>
      <button class="btn btn-gold" onclick="claimBossVictory()">Open Campaign Chest</button>
    </div>`;
  }else if(b.over==='lost'){
    html+=`<div class="boss-result lose">
      <div class="boss-result-title">💀 Defeated...</div>
      <p>The boss got the better of you this time. Ready for a rematch?</p>
      <div class="btn-row" style="justify-content:center">
        <button class="btn btn-primary" onclick="retryBossFight()">Try Again</button>
        <button class="btn btn-ghost" onclick="closeBossFight()">Retreat</button>
      </div>
    </div>`;
  }else{
    let q=b.currentQuestion;
    let ansHtml=q.a.map((x,i)=>{
      let cls=[];
      if(b.selected===i)cls.push('selected');
      if(b.checked&&i===q.c)cls.push('correct');
      if(b.checked&&b.selected===i&&i!==q.c)cls.push('wrong');
      return `<button class="opt ${cls.join(' ')}" ${b.checked?'disabled':''} onclick="selectBossAnswer(${i})">
        <span class="opt-key">${'ABCD'[i]}</span><span>${x}</span>
      </button>`;
    }).join('');
    html+=`<div class="boss-question-card">
      <div class="boss-q-text">${q.q}</div>
      ${ansHtml}
      <button class="btn btn-primary" ${b.selected===null||b.checked?'disabled':''} onclick="checkBossAnswer()">⚔️ Attack</button>
    </div>`;
  }

  root.innerHTML=html;
}
