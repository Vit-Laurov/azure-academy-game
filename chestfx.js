let chestAnimTimers=[];
function clearChestTimers(){chestAnimTimers.forEach(t=>clearTimeout(t));chestAnimTimers=[]}

function spawnParticles(rarity){
  let host=document.getElementById('chest-particles');
  if(!host)return;
  host.innerHTML='';
  let color={common:'var(--common)',uncommon:'var(--uncommon)',rare:'var(--rare)',epic:'var(--epic)',legendary:'var(--legendary)'}[rarity]||'var(--amber)';
  let count=rarity==='legendary'?26:rarity==='epic'?20:rarity==='rare'?16:12;
  for(let i=0;i<count;i++){
    let el=document.createElement('div');
    el.className='chest-particle';
    let angle=(Math.PI*2*i)/count+(Math.random()*0.4-0.2);
    let dist=70+Math.random()*90;
    el.style.setProperty('--px',(Math.cos(angle)*dist)+'px');
    el.style.setProperty('--py',(Math.sin(angle)*dist)+'px');
    el.style.background=color;
    el.style.animationDelay=(Math.random()*0.12)+'s';
    host.appendChild(el);
  }
}

function rarityGlowClass(rarity){
  if(rarity==='rare')return 'glow-rare';
  if(rarity==='epic')return 'glow-epic';
  if(rarity==='legendary')return 'glow-legendary';
  return '';
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

function openChestAnimation(reward){
  if(!reward)return;
  clearChestTimers();
  let overlay=document.getElementById('chest-overlay');
  let icon=document.getElementById('chest-icon');
  let reveal=document.getElementById('chest-reveal');
  let hint=document.querySelector('.chest-hint');
  if(!overlay||!icon||!reveal)return;

  icon.className='chest-icon';
  icon.textContent='📦';
  reveal.className='chest-reveal';
  reveal.innerHTML='';
  if(hint)hint.classList.remove('show');
  document.getElementById('chest-particles').innerHTML='';

  overlay.classList.remove('hidden');
  requestAnimationFrame(()=>overlay.classList.add('visible'));

  chestAnimTimers.push(setTimeout(()=>{
    icon.classList.add('shaking');
  },50));

  chestAnimTimers.push(setTimeout(()=>{
    icon.classList.remove('shaking');
    icon.classList.add('opened');
    let glow=rarityGlowClass(reward.rarity);
    if(glow)icon.classList.add(glow);
    icon.textContent='🎁';
    spawnParticles(reward.rarity||'common');
  },1150));

  chestAnimTimers.push(setTimeout(()=>{
    reveal.innerHTML=buildRevealHtml(reward);
    reveal.classList.add('show');
    if(hint)hint.classList.add('show');
  },1650));
}

function closeChestAnimation(){
  let overlay=document.getElementById('chest-overlay');
  if(!overlay||overlay.classList.contains('hidden'))return;
  clearChestTimers();
  overlay.classList.remove('visible');
  setTimeout(()=>overlay.classList.add('hidden'),350);
  render();
}
