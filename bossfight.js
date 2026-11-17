// bossfight.js — v16b JRPG battle (design: Boss 1 · JRPG souboj)
// Rules come from engine.js (engineBossStart/Check/Resolve). This file only draws, animates and talks.
let battleState=null;

// ---------- boss lines (fixed for now; phase 4 lets AI write them from your weak spots) ----------
function bossWeakTopic(){
  let counts={};
  (S.weakness||[]).forEach(w=>{let c=w.item&&w.item.category;if(c)counts[c]=(counts[c]||0)+1});
  let top=Object.keys(counts).sort((a,b)=>counts[b]-counts[a])[0];
  return top||null;
}
function pickLine(list){return list[Math.floor(Math.random()*list.length)]}
function bossLine(kind){
  let t=bossWeakTopic();
  if(kind==='start')return t?pickLine([`${t} again? You always stumble there.`,`I know your weak spot: ${t}.`,`Let's talk ${t}… if you dare.`])
                           :pickLine(['Your budget is MINE.','Over-provisioned and under-prepared!','Pay-as-you-go… straight to defeat.']);
  if(kind==='hurt')return pickLine(['Lucky hit.','Hmph. A scratch!','You read the docs, huh?','That one cost me.']);
  if(kind==='hit')return t?pickLine([`Ha! Study more ${t}.`,`${t} strikes again!`,'Wrong tool, hero!'])
                          :pickLine(['Wrong tool, hero!','That will show up on your bill.','Ha! Try again.']);
  if(kind==='won')return 'Nooo… my reserved instances…';
  if(kind==='lost')return 'Come back when you know your pricing.';
  return '';
}

function startBossFight(){
  if(!bossAvailable())return;
  battleState=engineBossStart();
  battleState.anim=null;
  battleState.taunt=bossLine('start');
  let overlay=document.getElementById('boss-overlay');
  if(!overlay)return;
  overlay.classList.remove('hidden');
  requestAnimationFrame(()=>overlay.classList.add('visible'));
  renderBossFight();
  if(typeof playTune==='function')playTune([[196,.12],[185,.12],[175,.3]]);
}

function selectBossAnswer(i){
  let b=battleState;
  if(!b||b.checked||b.over)return;
  b.selected=i;
  renderBossFight();
}

function checkBossAnswer(){
  let b=battleState;
  let r=engineBossCheck(b);
  if(!r)return;
  b.anim=r.correct?'hit':'ouch';
  b.taunt=bossLine(r.correct?'hurt':'hit');
  if(r.correct)playChime(880);else playChime(220,0.3);
  renderBossFight();

  setTimeout(()=>{
    if(battleState!==b)return; // fight closed during the animation
    engineBossResolve(b);
    b.anim=b.over?(b.over==='won'?'win':'lose'):null;
    if(b.over)b.taunt=bossLine(b.over);
    renderBossFight();
    if(b.over==='won'&&typeof playTune==='function')playTune([[523,.1],[659,.1],[784,.1],[1046,.1],[1318,.35]]);
    if(b.over==='lost'&&typeof playTune==='function')playTune([[392,.15],[330,.15],[262,.4]]);
  },1400);
}

function retryBossFight(){startBossFight()}

function closeBossFight(){
  let overlay=document.getElementById('boss-overlay');
  if(!overlay)return;
  overlay.classList.remove('visible');
  setTimeout(()=>overlay.classList.add('hidden'),200);
  battleState=null;
}

function claimBossVictory(){
  closeBossFight();
  if(typeof showDailyCompleteFX==='function')showDailyCompleteFX(()=>claimChest('campaign'));
  else claimChest('campaign');
}

function bossHearts(hp){
  let out='';
  for(let i=0;i<BOSS_MAX_HP;i++)out+=sprite(i<hp?'heart':'heartEmpty',28);
  return out;
}

function renderBossFight(){
  let b=battleState;
  let root=document.getElementById('boss-scene-content');
  if(!root||!b)return;
  let segs='';
  for(let i=0;i<BOSS_MAX_HP;i++)segs+=`<i class="${i<b.bossHP?'on':''}"></i>`;

  let bottom='';
  if(b.over==='won'){
    bottom=`<div class="bx-result win">
        <div class="bx-result-title">VICTORY!</div>
        <p>The Budget Golem is down. Your campaign crate is waiting.</p>
        <button type="button" class="btn btn-cta chest" onclick="claimBossVictory()">${sprite('chest',26)} CLAIM REWARD</button>
      </div>`;
  }else if(b.over==='lost'){
    bottom=`<div class="bx-result lose">
        <div class="bx-result-title">DEFEATED…</div>
        <p>The golem got you this time. The fight resets, your progress stays.</p>
        <div class="bx-actions">
          <button type="button" class="btn btn-ghost" onclick="closeBossFight()">RETREAT</button>
          <button type="button" class="btn btn-danger" onclick="retryBossFight()">TRY AGAIN</button>
        </div>
      </div>`;
  }else{
    let q=b.currentQuestion;
    let opts=q.a.map((x,i)=>{
      let cls=[];
      if(!b.checked&&b.selected===i)cls.push('sel');
      if(b.checked&&i===q.c)cls.push('ok');
      if(b.checked&&b.selected===i&&i!==q.c)cls.push('bad');
      let cur=!b.checked&&b.selected===i?`<span class="bx-cur">${sprite('play',10)}</span>`:'';
      return `<button type="button" class="bx-opt ${cls.join(' ')}" ${b.checked?'disabled':''} onclick="selectBossAnswer(${i})">${cur}<span class="bx-key">${'ABCD'[i]}</span><span>${escapeHtml(x)}</span></button>`;
    }).join('');
    bottom=`<div class="bx-q">${escapeHtml(q.q)}</div>
      <div class="bx-menu">${opts}</div>
      <div class="bx-actions">
        <button type="button" class="btn btn-ghost" onclick="closeBossFight()">RUN</button>
        <button type="button" class="btn btn-danger" ${b.selected===null||b.checked?'disabled':''} onclick="checkBossAnswer()">ATTACK!</button>
      </div>`;
  }

  root.innerHTML=`
    <div class="bx">
      <div class="bx-arena ${b.anim||''}">
        <div class="bx-plate">
          <div class="bx-plate-row"><span class="bx-name">BUDGET GOLEM</span><span>LV ${levelOf(S.xp)}</span></div>
          <div class="bx-hp">${segs}</div>
        </div>
        <div class="bx-stage">
        <div class="bx-band"></div><div class="bx-floor"></div>
        ${b.taunt?`<div class="bx-bubble" role="status">${escapeHtml(b.taunt)}</div>`:''}
        <div class="bx-boss"><div class="bx-boss-hit"><div class="bx-idle">${sprite('golemBig',176)}</div></div></div>
        <div class="bx-slash">${sprite('slash',120)}</div>
        <div class="bx-dmg">-1</div>
        <div class="bx-hero">${sprite(heroSpr('heroSword'),72)}</div>
        <div class="bx-hearts" aria-label="Your hearts: ${b.playerHP} of ${BOSS_MAX_HP}">${bossHearts(b.playerHP)}<span class="bx-ouch">-1</span></div>
        </div>
        <div class="bx-redflash"></div>
      </div>
      ${bottom}
    </div>`;
}
