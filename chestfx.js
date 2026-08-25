let chestAnimTimers=[];
function clearChestTimers(){chestAnimTimers.forEach(t=>clearTimeout(t));chestAnimTimers=[]}

const CHEST_CLOSED_SVG=`<svg viewBox="0 0 100 100">
  <ellipse cx="50" cy="88" rx="34" ry="6" fill="#000" opacity="0.25"/>
  <path d="M18 55 Q50 20 82 55 L82 55 Q50 45 18 55Z" fill="#5B3A1E" stroke="#3D2612" stroke-width="2"/>
  <path d="M22 57 Q50 46 78 57" fill="none" stroke="#3D2612" stroke-width="2"/>
  <rect x="18" y="57" width="64" height="30" rx="3" fill="#7A4A26" stroke="#3D2612" stroke-width="2.5"/>
  <path d="M18 68h64M18 78h64" stroke="#3D2612" stroke-width="1.2" opacity="0.6"/>
  <rect x="16" y="60" width="6" height="24" fill="#C9A24B" stroke="#8A6A2A" stroke-width="1"/>
  <rect x="78" y="60" width="6" height="24" fill="#C9A24B" stroke="#8A6A2A" stroke-width="1"/>
  <rect x="42" y="52" width="16" height="16" rx="2" fill="#C9A24B" stroke="#8A6A2A" stroke-width="1.5"/>
  <circle cx="50" cy="60" r="3" fill="#3D2612"/>
</svg>`;

const CHEST_OPEN_SVG=`<svg viewBox="0 0 140 140">
  <ellipse cx="70" cy="120" rx="48" ry="8" fill="#000" opacity="0.25"/>
  <path d="M18 68 Q45 8 70 8 Q95 8 122 68" fill="#5B3A1E" stroke="#3D2612" stroke-width="2"/>
  <path d="M24 70 Q70 50 116 70" fill="none" stroke="#3D2612" stroke-width="2"/>
  <rect x="18" y="70" width="104" height="44" rx="4" fill="#7A4A26" stroke="#3D2612" stroke-width="3"/>
  <path d="M18 86h104M18 99h104" stroke="#3D2612" stroke-width="1.5" opacity="0.6"/>
  <rect x="60" y="78" width="20" height="16" rx="2" fill="#C9A24B" stroke="#8A6A2A" stroke-width="1.5"/>
  <circle cx="38" cy="76" r="10" fill="#FFD570"/>
  <circle cx="52" cy="70" r="9" fill="#F4B740"/>
  <circle cx="88" cy="72" r="10" fill="#F4B740"/>
  <circle cx="102" cy="78" r="9" fill="#FFD570"/>
  <circle cx="30" cy="90" r="7" fill="#F4B740"/>
  <circle cx="110" cy="92" r="7" fill="#FFD570"/>
  <path d="M65 55 73 74 81 55 73 46Z" fill="#F4B740" stroke="#C9962E" stroke-width="1.5"/>
  <path d="M40 58 47 73 54 58 47 50Z" fill="#4D9FFF" stroke="#2D6FCF" stroke-width="1.5"/>
  <path d="M92 56 99 72 106 56 99 48Z" fill="#EF5A6F" stroke="#C23652" stroke-width="1.5"/>
  <g stroke="#FFE9A8" stroke-width="2" stroke-linecap="round">
    <path d="M70 20v10M55 28l6 6M85 28l-6 6"/>
  </g>
  <circle cx="20" cy="40" r="2" fill="#FFE9A8"/>
  <circle cx="120" cy="45" r="2" fill="#FFE9A8"/>
  <circle cx="100" cy="24" r="1.5" fill="#FFE9A8"/>
</svg>`;

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
  icon.innerHTML=CHEST_CLOSED_SVG;
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
    icon.innerHTML=CHEST_OPEN_SVG;
    spawnParticles(reward.rarity||'common');
    let freq={common:660,uncommon:740,rare:830,epic:990,legendary:1180}[reward.rarity]||600;
    if(typeof playChime==='function')playChime(freq,0.4);
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
