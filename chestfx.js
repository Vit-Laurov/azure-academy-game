let chestAnimTimers=[];
function clearChestTimers(){chestAnimTimers.forEach(t=>clearTimeout(t));chestAnimTimers=[]}

const CHEST_TIER_DURATION={common:1800,epic:2250,legendary:3100};
const CHEST_TIER_IMPACT_PCT={common:0.59,epic:0.54,legendary:0.54};
const CHEST_TIER_CHIME_FREQ={common:660,epic:900,legendary:1180};

function rarityToTier(rarity){
  if(rarity==='legendary')return 'legendary';
  if(rarity==='rare'||rarity==='epic')return 'epic';
  return 'common';
}

function buildRevealHtml(reward){
  let html=`<div class="reveal-title">Chest opened!</div>`;
  html+=`<div class="reveal-gains">+${reward.xp} XP · +${reward.shards} 💎 Shards</div>`;
  if(reward.item){
    html+=`<div class="reveal-item ${reward.item.rarity}">${rarityLabel(reward.item.rarity)} drop: ${reward.item.name}</div>`;
  }else if(reward.alreadyOwned){
    html+=`<div class="reveal-item ${reward.rarity}">${rarityLabel(reward.rarity)} roll — already owned everything, converted to Shards next time</div>`;
  }else{
    html+=`<div class="muted-hint" style="margin-top:6px">No item this time — try again tomorrow.</div>`;
  }
  return html;
}

function bannerText(reward){
  if(reward.item)return `${rarityLabel(reward.item.rarity)} Reward`;
  if(reward.alreadyOwned)return `${rarityLabel(reward.rarity)} Roll`;
  return 'Chest Reward';
}

function openChestAnimation(reward){
  if(!reward)return;
  clearChestTimers();
  let overlay=document.getElementById('chest-overlay');
  let stage=document.getElementById('reward-stage');
  let itemEl=document.getElementById('reward-item');
  let bannerEl=document.getElementById('reward-banner');
  let reveal=document.getElementById('chest-reveal');
  let hint=document.querySelector('.chest-hint');
  if(!overlay||!stage||!reveal)return;

  let rarity=reward.rarity||'common';
  let tier=rarityToTier(rarity);
  let duration=CHEST_TIER_DURATION[tier];

  stage.className='reward-stage tier-'+tier;
  void stage.offsetWidth;

  if(itemEl){
    itemEl.innerHTML=reward.item?iconFor(reward.item.type):'◆';
  }
  if(bannerEl)bannerEl.textContent=bannerText(reward);

  reveal.className='chest-reveal';
  reveal.innerHTML='';
  if(hint)hint.classList.remove('show');

  overlay.classList.remove('hidden');
  requestAnimationFrame(()=>{
    overlay.classList.add('visible');
    stage.classList.add('play');
  });

  chestAnimTimers.push(setTimeout(()=>{
    let freq=CHEST_TIER_CHIME_FREQ[tier];
    if(typeof playChime==='function')playChime(freq,0.4);
  },Math.round(duration*CHEST_TIER_IMPACT_PCT[tier])));

  chestAnimTimers.push(setTimeout(()=>{
    reveal.innerHTML=buildRevealHtml(reward);
    reveal.classList.add('show');
    if(hint)hint.classList.add('show');
  },duration+300));
}

function previewChest(rarity){
  let pool=(AZURE_DB.loot||[]).filter(x=>x.rarity===rarity);
  let item=pool.length?pool[Math.floor(Math.random()*pool.length)]:null;
  openChestAnimation({
    xp:0,shards:0,rarity,item,
    alreadyOwned:!item,
    msg:'Preview only — no real reward granted'
  });
}

function closeChestAnimation(){
  let overlay=document.getElementById('chest-overlay');
  if(!overlay||overlay.classList.contains('hidden'))return;
  clearChestTimers();
  overlay.classList.remove('visible');
  setTimeout(()=>overlay.classList.add('hidden'),350);
  render();
}
