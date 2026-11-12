// chestfx.js — v16b "Data crate" reward animation (design: Truhla 2 · Datová bedna)
// Flow: crate warps in → terminal "decrypting loot.pkg" (longer for rarer loot) → glitch + crate splits
// → item appears in a hologram → console lines type out the reward. Tap = skip ahead, next tap = close.
let chestAnimTimers=[];
let chestStage=0; // 0 closed · 1 playing · 2 ready to close
let chestHideTimer=null;
function clearChestTimers(){chestAnimTimers.forEach(t=>clearTimeout(t));chestAnimTimers=[]}

const RARITY_COLOR={common:'#c2c3c7',uncommon:'#00e436',rare:'#29adff',epic:'#b873f5',legendary:'#ffec27'};
const RARITY_LIGHT={common:'#fff1e8',uncommon:'#9bffb0',rare:'#c2f0ff',epic:'#e0a8ff',legendary:'#fff6a8'};
const CHEST_DECRYPT_MS={common:1000,uncommon:1200,rare:1500,epic:1800,legendary:2300};
const CHEST_TUNES={
  common:[[523,.08],[659,.12]],
  uncommon:[[523,.08],[659,.08],[784,.14]],
  rare:[[523,.07],[659,.07],[784,.07],[1046,.16]],
  epic:[[523,.07],[659,.07],[784,.07],[1046,.07],[1318,.2]],
  legendary:[[523,.06],[659,.06],[784,.06],[1046,.06],[1318,.06],[1568,.08],[2093,.3]]
};

function rarityToTier(rarity){ // kept for older callers
  if(rarity==='legendary')return 'legendary';
  if(rarity==='rare'||rarity==='epic')return 'epic';
  return 'common';
}

function chestLines(reward,rarity){
  let label=rarityLabel(rarity).toUpperCase();
  let lines=[];
  if(reward.item){
    lines.push({c:'var(--px-green)',t:`> unlocked: ${reward.item.name} [${label}]`});
    lines.push({c:'var(--px-white)',t:`> effect: ${reward.item.effect}`});
  }else if(reward.alreadyOwned){
    lines.push({c:'var(--px-green)',t:`> ${label} roll · you already own everything`});
    lines.push({c:'var(--px-white)',t:'> item converted to nothing (for now)'});
  }else{
    lines.push({c:'var(--px-green)',t:'> no item in this package'});
    lines.push({c:'var(--px-white)',t:'> try again tomorrow'});
  }
  lines.push({c:'var(--px-yellow)',t:`> +${reward.xp} XP · +${reward.shards} shards`});
  if(reward.msg&&/preview/i.test(reward.msg))lines.push({c:'var(--px-grey)',t:'> preview only · nothing granted'});
  return lines;
}

function openChestAnimation(reward){
  if(!reward)return;
  clearChestTimers();
  let overlay=document.getElementById('chest-overlay');
  if(!overlay)return;
  if(chestHideTimer){clearTimeout(chestHideTimer);chestHideTimer=null}
  let rarity=(reward.item&&reward.item.rarity)||reward.rarity||'common';
  if(!RARITY_COLOR[rarity])rarity='common';
  let dec=CHEST_DECRYPT_MS[rarity];
  let icon=reward.item?iconFor(reward.item.type):sprite('shard',72);
  let lines=chestLines(reward,rarity).map((l,i)=>
    `<div class="cx-l" style="color:${l.c};animation-delay:${i*0.45}s">${escapeHtml(l.t)}</div>`).join('');

  overlay.innerHTML=`
    <div class="cx" style="--rc:${RARITY_COLOR[rarity]};--rl:${RARITY_LIGHT[rarity]};--dec:${dec}ms">
      <div class="cx-top">
        <span class="cx-chip">LOOT.PKG · INCOMING</span>
        <span class="cx-rar">${rarityLabel(rarity).toUpperCase()}</span>
      </div>
      <div class="cx-term">
        <div class="cx-cmd">&gt; decrypting loot.pkg<span class="cx-caret">_</span></div>
        <div class="cx-bar"><i></i></div>
      </div>
      <div class="cx-stage">
        <div class="cx-holo"><div class="cx-scan"></div><div class="cx-item">${icon}</div></div>
        <div class="cx-crate">
          <div class="cx-left">${sprite('crateL',100)}<i class="cx-led"></i><i class="cx-led b"></i></div>
          <div class="cx-right">${sprite('crateR',100)}</div>
        </div>
        <div class="cx-floor"></div>
      </div>
      <div class="cx-out">${lines}</div>
      <div class="cx-hint">TAP TO CONTINUE</div>
      <div class="cx-flash"></div>
    </div>`;

  overlay.classList.remove('hidden');
  chestStage=1;
  let cx=overlay.querySelector('.cx');
  requestAnimationFrame(()=>{
    overlay.classList.add('visible');
    cx.classList.add('in');
  });
  chestAnimTimers.push(setTimeout(()=>{
    cx.classList.add('open');
    if(typeof playTune==='function')playTune(CHEST_TUNES[rarity]);
  },350+dec));
  chestAnimTimers.push(setTimeout(()=>cx.classList.add('out'),350+dec+650));
  chestAnimTimers.push(setTimeout(()=>{cx.classList.add('done');chestStage=2},350+dec+650+lines.length*450+300));
}

function previewChest(rarity){
  let pool=(AZURE_DB.loot||[]).filter(x=>x.rarity===rarity);
  let item=pool.length?pool[Math.floor(Math.random()*pool.length)]:null;
  openChestAnimation({xp:0,shards:0,rarity,item,alreadyOwned:!item,msg:'Preview only — no real reward granted'});
}

function closeChestAnimation(){
  let overlay=document.getElementById('chest-overlay');
  if(!overlay||overlay.classList.contains('hidden'))return;
  if(chestStage===1){ // first tap while playing = skip to the result
    clearChestTimers();
    let cx=overlay.querySelector('.cx');
    if(cx)cx.classList.add('in','open','out','done','skip');
    chestStage=2;
    return;
  }
  clearChestTimers();
  chestStage=0;
  overlay.classList.remove('visible');
  chestHideTimer=setTimeout(()=>{overlay.classList.add('hidden');overlay.innerHTML='';chestHideTimer=null},200);
  render();
}
