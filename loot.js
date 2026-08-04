function rarityLabel(r){return r==='legendary'?'Legendary':r==='epic'?'Epic':r==='rare'?'Rare':r==='uncommon'?'Uncommon':'Common'}
function ownedIds(){return S.collection||[]}
function itemById(id){return (AZURE_DB.loot||[]).find(x=>x.id===id)}
function effectValue(key){let total=0;(S.collection||[]).forEach(id=>{let it=itemById(id),e=it&&it.effectCode;if(e&&typeof e[key]==='number')total+=e[key]});return total}
function categoryXpBonus(cat){let total=0;(S.collection||[]).forEach(id=>{let it=itemById(id),e=it&&it.effectCode;if(e&&e.categoryXpBonus&&e.categoryXpBonus[cat])total+=e.categoryXpBonus[cat]});total+=masteryBonusForCategory(cat);return total}
function hasEffect(key){return (S.collection||[]).some(id=>{let it=itemById(id);return it&&it.effectCode&&it.effectCode[key]})}
function themes(){let t=['default'];(S.collection||[]).forEach(id=>{let it=itemById(id);let th=it&&it.effectCode&&it.effectCode.theme;if(th&&!t.includes(th))t.push(th)});return t}
function applyTheme(){document.body.className='';if(S.activeTheme&&S.activeTheme!=='default')document.body.classList.add('theme-'+S.activeTheme)}

const themeSwatchColor={default:'#5B5FEF',bastion:'#4D9FFF',iac:'#B873F5',gryphon:'#F4B740',phoenix:'#EF5A6F'};
const themeLabel={default:'Default',bastion:'Bastion',iac:'Infrastructure as Code',gryphon:'Gryphon',phoenix:'Phoenix'};

const svgWrap=inner=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const ICON_SVGS={
  Weapon:svgWrap('<path d="M14 4 20 10 11 19 8 19 8 16 17 7"/><path d="M5 22 8 19"/><path d="M14 4 17 7"/>'),
  Armor:svgWrap('<path d="M12 3 6 6v5c0 5 3 8 6 10 3-2 6-5 6-10V6Z"/><path d="M9 9v4"/><path d="M15 9v4"/>'),
  Trinket:svgWrap('<path d="M6 9 12 3 18 9 12 21Z"/><path d="M6 9h12"/><path d="M9 9 12 21 15 9"/>'),
  Pet:svgWrap('<circle cx="12" cy="16" r="4"/><circle cx="6" cy="9" r="2"/><circle cx="11" cy="6" r="2"/><circle cx="17" cy="9" r="2"/>'),
  Ring:svgWrap('<circle cx="12" cy="15" r="6"/><path d="M9 9 12 3 15 9"/>'),
  Shield:svgWrap('<path d="M12 3 19 6v6c0 5-3 8-7 9-4-1-7-4-7-9V6Z"/><path d="M9 12l2 2 4-4"/>'),
  Boots:svgWrap('<path d="M8 3v9l-4 3v4h14v-3c0-2-2-3-4-4l-3-2V3Z"/><path d="M8 3h4"/>'),
  Amulet:svgWrap('<path d="M8 3c2 2 6 2 8 0"/><circle cx="12" cy="14" r="6"/><path d="M9 14 12 10 15 14 12 18Z"/>'),
  Companion:svgWrap('<path d="M6 10 4 4l5 3"/><path d="M18 10 20 4l-5 3"/><path d="M6 10c0-4 3-6 6-6s6 2 6 6c0 5-3 8-6 8s-6-3-6-8Z"/><circle cx="10" cy="10" r=".6" fill="currentColor"/><circle cx="14" cy="10" r=".6" fill="currentColor"/>'),
  Mount:svgWrap('<path d="M3 14c4-1 6-4 6-9 3 2 4 5 3 9 3-1 6-1 9 2-3 4-7 5-11 4-4-1-7-3-7-6Z"/>'),
  Title:svgWrap('<path d="M6 3h12v10l-6 4-6-4Z"/><path d="M9 3v5"/><path d="M15 3v5"/>'),
  Consumable:svgWrap('<path d="M12 2v20"/><path d="M4.5 6.5 19.5 17.5"/><path d="M19.5 6.5 4.5 17.5"/><path d="M12 5 9.5 7"/><path d="M12 5 14.5 7"/><path d="M12 19 9.5 17"/><path d="M12 19 14.5 17"/>')
};
function iconFor(type){return ICON_SVGS[type]||ICON_SVGS.Trinket}

function renderLoot(){
  const loot=AZURE_DB.loot||[],owned=ownedIds();
  let html=`
    <div class="page-header">
      <div><div class="page-title">Loot Shop</div><div class="page-subtitle">Spend Azure Shards on gear and bonuses</div></div>
      <div class="stat-row"><div class="stat-chip"><span class="dot" style="background:var(--amber)"></span>${S.shards} Shards</div></div>
    </div>
    <div class="card">
      <div class="card-title">Active theme</div>
      <div class="card-sub">Unlock new themes by collecting special items.</div>
      ${themes().map(t=>`<span class="theme-swatch ${S.activeTheme===t?'active':''}" onclick="setTheme('${t}')">
        <span class="swatch-dot" style="background:${themeSwatchColor[t]||'#888'}"></span>${themeLabel[t]||t}
      </span>`).join('')}
    </div>
    <div class="card">
      <div class="card-title">Streak Insurance</div>
      <div class="card-sub">Miss a day by accident? A Streak Freeze auto-protects your streak the next time you skip one day.</div>
      <div class="loot-grid">
        <div class="loot-card rare">
          <div class="loot-icon rare">${iconFor('Consumable')}</div>
          <div class="loot-name rare">Streak Freeze</div>
          <div class="loot-meta">
            <span class="loot-badge">Consumable</span>
            <span class="loot-badge mono">${AZURE_DB.streakFreezeCost||15} 💎</span>
          </div>
          <div class="loot-desc">Automatically saves your streak once if you miss exactly one day.</div>
          <div class="loot-effect">Currently owned: ${S.streakFreezes||0}</div>
          <button class="btn ${S.shards>=(AZURE_DB.streakFreezeCost||15)?'btn-primary':'btn-ghost'}" ${S.shards<(AZURE_DB.streakFreezeCost||15)?'disabled':''} onclick="buyStreakFreeze()">
            ${S.shards>=(AZURE_DB.streakFreezeCost||15)?'Buy':'Not enough Shards'}
          </button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Shop</div>
      <div class="loot-grid">
        ${loot.map(it=>{
          let has=owned.includes(it.id),canAfford=S.shards>=it.cost,justBought=it.id===lastBoughtId;
          return `<div class="loot-card ${it.rarity} ${has?'owned':''} ${justBought?'just-bought':''}" data-id="${it.id}">
            <div class="loot-icon ${it.rarity}">${iconFor(it.type)}</div>
            <div class="loot-name ${it.rarity}">${it.name}</div>
            <div class="loot-meta">
              <span class="loot-badge">${it.type}</span>
              <span class="loot-badge">${rarityLabel(it.rarity)}</span>
              <span class="loot-badge mono">${it.cost} 💎</span>
            </div>
            <div class="loot-desc">${it.desc}</div>
            <div class="loot-effect">${it.effect}</div>
            <button class="btn ${has?'btn-ghost':canAfford?'btn-primary':'btn-ghost'}" ${has||!canAfford?'disabled':''} onclick="buyLoot('${it.id}')">
              ${has?'Owned':canAfford?'Buy':'Not enough Shards'}
            </button>
          </div>`;
        }).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-title">Recent drops</div>
      ${(S.drops||[]).length?(S.drops||[]).slice(0,10).map(d=>`<div class="history-item ok" style="border-left-color:var(--amber)">${d}</div>`).join(''):'<div class="empty-state">No drops yet.</div>'}
    </div>
  `;
  return html;
}

let lastBoughtId=null;
function setTheme(t){S.activeTheme=t;saveState();render()}
function buyLoot(id){
  let it=itemById(id);
  if(!it||ownedIds().includes(id)||S.shards<it.cost)return;
  S.shards-=it.cost;
  S.collection.push(id);
  S.drops.unshift(`Bought: ${it.name}`);
  lastBoughtId=id;
  saveState();render();
  setTimeout(()=>{lastBoughtId=null},700);
}
function buyStreakFreeze(){
  let cost=AZURE_DB.streakFreezeCost||15;
  if(S.shards<cost)return;
  S.shards-=cost;
  S.streakFreezes=(S.streakFreezes||0)+1;
  S.drops=S.drops||[];
  S.drops.unshift('Bought: 🧊 Streak Freeze');
  saveState();render();
}
function rollFromTable(mode){
  let table=AZURE_DB.dropTables[mode];
  let r=Math.random()*100,acc=0;
  for(let row of table.rolls){acc+=row[1];if(r<=acc)return row[0]}
  return 'none';
}
function randomItemByRarity(r){
  let items=(AZURE_DB.loot||[]).filter(x=>x.rarity===r&&!ownedIds().includes(x.id));
  if(!items.length)return null;
  return items[Math.floor(Math.random()*items.length)];
}
function grantDrop(mode){
  let table=AZURE_DB.dropTables[mode];
  if(!table)return null;
  let xp=table.xp||0,sh=table.shards||0;
  if(mode==='easy')sh+=effectValue('easyClearShardBonus');
  if(mode==='heroic')sh+=effectValue('heroicClearShardBonus');
  if(mode==='campaign')sh+=effectValue('campaignShardBonus');
  S.xp+=xp;S.shards+=sh;
  let msg=`+${xp} XP, +${sh} Shards`;
  let rarity=rollFromTable(mode);
  let item=null,alreadyOwned=false;
  if(rarity&&rarity!=='none'){
    item=randomItemByRarity(rarity);
    if(item){S.collection.push(item.id);msg+=` · Drop: ${item.name}`}
    else{alreadyOwned=true;msg+=` · ${rarityLabel(rarity)} drop rolled, but you already own everything`}
  }else{
    msg+=' · No item dropped';
  }
  S.drops.unshift(msg);
  S.drops=S.drops.slice(0,30);
  return {msg,xp,shards:sh,rarity:rarity==='none'?null:rarity,item,alreadyOwned};
}
