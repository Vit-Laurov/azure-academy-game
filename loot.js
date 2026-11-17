// loot.js — v16.13 (v16c1: pixel Loot Shop, BUY? YES/NO dialog, pixel item icons; v16d: Loot log icons, no emoji). Drop/effect rules unchanged.
function rarityLabel(r){return r==='legendary'?'Legendary':r==='epic'?'Epic':r==='rare'?'Rare':r==='uncommon'?'Uncommon':'Common'}
function ownedIds(){return S.collection||[]}
function itemById(id){return (AZURE_DB.loot||[]).find(x=>x.id===id)}
function effectValue(key){let total=0;(S.collection||[]).forEach(id=>{let it=itemById(id),e=it&&it.effectCode;if(e&&typeof e[key]==='number')total+=e[key]});return total}
function categoryXpBonus(cat){let total=0;(S.collection||[]).forEach(id=>{let it=itemById(id),e=it&&it.effectCode;if(e&&e.categoryXpBonus&&e.categoryXpBonus[cat])total+=e.categoryXpBonus[cat]});total+=masteryBonusForCategory(cat);return total}
function hasEffect(key){return (S.collection||[]).some(id=>{let it=itemById(id);return it&&it.effectCode&&it.effectCode[key]})}
function unlockedTitles(){return (S.collection||[]).map(itemById).filter(it=>it&&it.effectCode&&it.effectCode.title).map(it=>it.effectCode.title)}

const PET_LINES=[
  'Blorp!','I believe in your RBAC skills.','Tip: Cool tier is cheaper for rarely-read blobs.',
  "Don't forget today's streak!",'Squish squish.','One more question?','Almost exam-ready!',
  'Availability Zones are my favorite rooms.','You got this.'
];
const PET_CHEERS=[
  "You've got this!",'Doing great — keep going!','Believe in yourself!',
  'One step closer to AZ-900!','Nice work so far!','You can do this.','Stay sharp!','Proud of you!'
];
const PET_CONSOLE=[
  'Shake it off!','Next one is yours.',"I'll remember that one for you.",'Blorp… we got this.','Mistakes = XP for the brain.'
];
function petReactToAnswer(correct){
  if(!ownedPetName())return;
  // not on every answer, so it stays charming instead of noisy
  if(correct&&Math.random()>0.45)return;
  triggerPetReaction(correct?PET_CHEERS:PET_CONSOLE);
}
let petTimer=null;
function ownedPetName(){
  let found=(S.collection||[]).map(itemById).find(it=>it&&it.effectCode&&it.effectCode.pet);
  return found?found.effectCode.pet:null;
}
function initPetCompanion(){
  let el=document.getElementById('pet-companion');
  if(!el)return;
  if(!ownedPetName()){el.classList.add('hidden');if(petTimer){clearInterval(petTimer);petTimer=null}return}
  el.classList.remove('hidden');
  if(petTimer)return;
  petTimer=setInterval(petHop,40000+Math.random()*40000);
}
function triggerPetReaction(lines){
  let el=document.getElementById('pet-companion'),bubble=document.getElementById('pet-bubble');
  if(!el||!bubble||el.classList.contains('hidden'))return;
  bubble.textContent=lines[Math.floor(Math.random()*lines.length)];
  el.classList.add('hop');bubble.classList.add('show');
  setTimeout(()=>{el.classList.remove('hop');bubble.classList.remove('show')},2800);
}
function petHop(){triggerPetReaction(PET_LINES)}
function petClicked(){triggerPetReaction(PET_CHEERS)}
function themes(){let t=['default'];(S.collection||[]).forEach(id=>{let it=itemById(id);let th=it&&it.effectCode&&it.effectCode.theme;if(th&&!t.includes(th))t.push(th)});return t}
function applyTheme(){document.body.className='';if(S.activeTheme&&S.activeTheme!=='default')document.body.classList.add('theme-'+S.activeTheme)}


// ---------- themes (pixel palette; the colour lands in --accent / --theme-hi via body.theme-*) ----------
const themeSwatchColor={default:'#29adff',bastion:'#00e436',iac:'#b873f5',gryphon:'#ffa300',phoenix:'#ff004d'};
const themeLabel={default:'Default',bastion:'Bastion',iac:'Infrastructure as Code',gryphon:'Gryphon',phoenix:'Phoenix'};
function allThemes(){ // every theme in the game, with the item that unlocks it
  let out=[{id:'default',item:null}];
  (AZURE_DB.loot||[]).forEach(it=>{let th=it.effectCode&&it.effectCode.theme;if(th&&!out.some(x=>x.id===th))out.push({id:th,item:it})});
  return out;
}

// ---------- item icons: pixel sprites (pixelart.js), coloured by rarity through currentColor ----------
function iconFor(type,size){return itemSprite(type,size||48)}
const SHOP_RARITY_COLOR={common:'#c2c3c7',uncommon:'#00e436',rare:'#29adff',epic:'#b873f5',legendary:'#ffec27'};
function rarityColor(r){return SHOP_RARITY_COLOR[r]||SHOP_RARITY_COLOR.common}
function shardPrice(n,poor){return `<span class="ls-price ${poor?'poor':''}">${sprite('shard',14)}<b>${n}</b></span>`}
function stripLeadingEmoji(t){return String(t||'').replace(/^[^\w(+-]+\s*/,'')}
// v16d: Loot log lines get a pixel icon picked from the text (old saves still hold emoji, which are stripped)
function dropIcon(t){
  t=stripLeadingEmoji(t);
  if(/streak freeze/i.test(t))return 'freeze';
  if(/streak/i.test(t))return 'flame';
  if(/^lesson/i.test(t))return 'navLearn';
  if(/cleared/i.test(t))return 'cap';
  if(/mastery rank/i.test(t))return 'star';
  if(/^bought/i.test(t))return 'shard';
  return 'chest';
}
function dropLine(d){return `<div class="ls-log-l"><span class="ls-log-ic">${sprite(dropIcon(d),12)}</span>${escapeHtml(stripLeadingEmoji(d))}</div>`}

// ---------- shop page ----------
let lastBoughtId=null;
function freezeCost(){return AZURE_DB.streakFreezeCost||15}

function renderLoot(){
  const loot=AZURE_DB.loot||[],owned=ownedIds(),unlocked=themes();
  let shopkeeper=`<div class="q-explain ls-keeper">
      <div class="q-guide">${sprite('guide',38)}</div>
      <div class="q-bubble">${owned.length>=loot.length?'You own every item I sell. Respect, legend.':'Shards in, gear out. Every item works the moment you buy it.'}</div>
    </div>`;

  let themeTiles=allThemes().map(t=>{
    let has=unlocked.includes(t.id),active=(S.activeTheme||'default')===t.id,col=themeSwatchColor[t.id]||'#29adff';
    let state=active?'active':has?'':'locked';
    let sub=active?'ACTIVE':has?'TAP TO EQUIP':`${sprite('lock',10)} ${escapeHtml(t.item?t.item.name:'')}`;
    return `<button type="button" class="ls-theme ${state}" style="--tc:${col}" ${has&&!active?`onclick="setTheme('${t.id}')"`:'disabled'} aria-pressed="${active}">
      <span class="ls-swatch"><i></i><i></i><i></i><i></i><i></i></span>
      <span class="ls-theme-name">${themeLabel[t.id]||t.id}</span>
      <span class="ls-theme-sub">${sub}</span>
    </button>`;
  }).join('');

  let fc=freezeCost(),fPoor=S.shards<fc;
  let freeze=`<div class="ls-item" style="--rc:${rarityColor('rare')}">
      <div class="ls-slot">${iconFor('Consumable',44)}</div>
      <div class="ls-main">
        <div class="ls-name">Streak Freeze</div>
        <div class="ls-tags"><span class="ls-rar">CONSUMABLE</span><span class="ls-own">OWNED ×${S.streakFreezes||0}</span></div>
        <div class="ls-desc">Miss exactly one day and your streak survives. Used up automatically.</div>
        <div class="ls-buy">${shardPrice(fc,fPoor)}
          <button type="button" class="btn ${fPoor?'btn-ghost':'btn-primary'}" ${fPoor?'disabled':''} onclick="shopAsk('freeze')">${fPoor?`NEED ${fc-S.shards} MORE`:'BUY'}</button>
        </div>
      </div>
    </div>`;

  let items=loot.map(it=>{
    let has=owned.includes(it.id),poor=S.shards<it.cost,justBought=it.id===lastBoughtId;
    let buy;
    if(has)buy=`<span class="ls-owned">${sprite('check',14)} OWNED</span>`;
    else if(poor)buy=`${shardPrice(it.cost,true)}<span class="ls-need">${learnCells(S.shards,it.cost,8)}<b>NEED ${it.cost-S.shards}</b></span>`;
    else buy=`${shardPrice(it.cost,false)}<button type="button" class="btn btn-primary" onclick="shopAsk('item','${it.id}')">BUY</button>`;
    return `<div class="ls-item ${has?'owned':''} ${justBought?'just-bought':''} r-${it.rarity}" style="--rc:${rarityColor(it.rarity)}" data-id="${it.id}">
      <div class="ls-slot">${iconFor(it.type,44)}</div>
      <div class="ls-main">
        <div class="ls-name">${escapeHtml(it.name)}</div>
        <div class="ls-tags"><span class="ls-rar">${rarityLabel(it.rarity).toUpperCase()}</span><span class="ls-type">${escapeHtml(it.type).toUpperCase()}</span></div>
        <div class="ls-desc">${escapeHtml(it.desc)}</div>
        <div class="ls-effect">&gt; ${escapeHtml(it.effect)}</div>
        <div class="ls-buy">${buy}</div>
      </div>
    </div>`;
  }).join('');

  let drops=(S.drops||[]).slice(0,10);
  let log=drops.length
    ?drops.map(dropLine).join('')
    :'<div class="ls-log-l dim">&gt; no drops yet_</div>';

  return `
    <div class="page-header">
      <div><div class="page-title">LOOT SHOP</div><div class="page-subtitle">Spend Shards on gear with real effects.</div></div>
      <div class="ls-wallet" aria-label="${S.shards} Shards">${sprite('shard',18)}<b>${S.shards}</b></div>
    </div>
    ${shopkeeper}
    <section class="card">
      <div class="card-title">Themes</div>
      <div class="card-sub">Colour of your XP bar, map marker, pet and menu. Unlocked by items.</div>
      <div class="ls-themes">${themeTiles}</div>
    </section>
    <section class="card">
      <div class="card-title">Consumables</div>
      <div class="ls-grid">${freeze}</div>
    </section>
    <section class="card">
      <div class="card-title">Gear · ${owned.length}/${loot.length}</div>
      <div class="ls-grid">${items}</div>
    </section>
    <section class="card">
      <div class="card-title">Loot log</div>
      <div class="ls-log">${log}</div>
    </section>`;
}

function setTheme(t){S.activeTheme=t;saveState();render()}

// purchases (same rules as before; the dialog below calls these)
function buyLoot(id){
  let it=itemById(id);
  if(!it||ownedIds().includes(id)||S.shards<it.cost)return false;
  S.shards-=it.cost;
  S.collection.push(id);
  S.drops.unshift(`Bought: ${it.name}`);
  lastBoughtId=id;
  saveState();render();
  initPetCompanion();
  setTimeout(()=>{lastBoughtId=null},700);
  return true;
}
function buyStreakFreeze(){
  let cost=freezeCost();
  if(S.shards<cost)return false;
  S.shards-=cost;
  S.streakFreezes=(S.streakFreezes||0)+1;
  S.drops=S.drops||[];
  S.drops.unshift('Bought: Streak Freeze');
  saveState();render();
  return true;
}

// ---------- JRPG purchase dialog: BUY? YES / NO ----------
let shopDlg=null; // {kind:'item'|'freeze', id, step:'ask'|'done', sel:0}

function shopAsk(kind,id){
  if(kind==='item'){
    let it=itemById(id);
    if(!it||ownedIds().includes(id)||S.shards<it.cost)return;
  }else if(S.shards<freezeCost())return;
  shopDlg={kind,id:id||null,step:'ask',sel:0};
  if(typeof playChime==='function')playChime(660,0.08);
  drawShopDialog();
}
function shopDlgThing(){
  if(!shopDlg)return null;
  if(shopDlg.kind==='freeze')return {name:'Streak Freeze',cost:freezeCost(),type:'Consumable',rarity:'rare',effect:'Saves your streak once.'};
  return itemById(shopDlg.id);
}
function shopDlgOptions(){
  if(!shopDlg)return [];
  if(shopDlg.step==='ask')return [{label:'YES',act:'shopConfirm()'},{label:'NO',act:'closeShopDialog()'}];
  let it=shopDlgThing(),th=it&&it.effectCode&&it.effectCode.theme;
  if(th&&S.activeTheme!==th)return [{label:'EQUIP THEME',act:`shopEquip('${th}')`},{label:'LATER',act:'closeShopDialog()'}];
  return [{label:'OK',act:'closeShopDialog()'}];
}
function drawShopDialog(){
  let ov=document.getElementById('shop-overlay');
  if(!ov||!shopDlg)return;
  let it=shopDlgThing();
  if(!it){closeShopDialog();return}
  let col=rarityColor(it.rarity);
  let text=shopDlg.step==='ask'
    ?`<b>${escapeHtml(it.name)}</b> for ${sprite('shard',14)}<b>${it.cost}</b>?<span class="sd-after">You'll have ${S.shards-it.cost} Shards left.</span>`
    :`<span class="sd-got">GOT IT!</span><b>${escapeHtml(it.name)}</b> ${shopDlg.kind==='freeze'?`— you now hold ×${S.streakFreezes||0}.`:'is in your Collection.'}<span class="sd-after">&gt; ${escapeHtml(it.effect)}</span>`;
  let opts=shopDlgOptions().map((o,i)=>`<button type="button" class="sd-opt ${i===shopDlg.sel?'sel':''}" onclick="${o.act}" onpointerenter="if(event.pointerType==='mouse')shopDlgHover(${i})">
      <span class="sd-cur">${i===shopDlg.sel?sprite('play',8):''}</span>${o.label}</button>`).join('');
  ov.innerHTML=`<div class="sd" onclick="event.stopPropagation()">
      <div class="sd-stage ${shopDlg.step}" style="--rc:${col}">
        <div class="sd-item">${iconFor(it.type,72)}</div>
        ${shopDlg.step==='done'?'<i class="sd-spark a"></i><i class="sd-spark b"></i><i class="sd-spark c"></i>':''}
      </div>
      <div class="sd-box">
        <div class="sd-who">${sprite('guide',30)}<span>SHOPKEEPER</span></div>
        <div class="sd-text">${shopDlg.step==='ask'?'<span class="sd-q">BUY?</span>':''}${text}</div>
      </div>
      <div class="sd-menu" role="menu">${opts}</div>
    </div>`;
  ov.classList.remove('hidden');
  requestAnimationFrame(()=>ov.classList.add('visible'));
  let first=ov.querySelector('.sd-opt.sel');
  if(first&&first.focus)first.focus({preventScroll:true});
}
function shopDlgHover(i){if(shopDlg&&shopDlg.sel!==i){shopDlg.sel=i;drawShopDialog()}}
function shopConfirm(){
  if(!shopDlg||shopDlg.step!=='ask')return;
  let ok=shopDlg.kind==='freeze'?buyStreakFreeze():buyLoot(shopDlg.id);
  if(!ok){closeShopDialog();return}
  if(typeof playTune==='function')playTune([[988,.07],[1319,.07],[1568,.2]]);
  shopDlg.step='done';shopDlg.sel=0;
  drawShopDialog();
}
function shopEquip(th){setTheme(th);closeShopDialog()}
function closeShopDialog(){
  shopDlg=null;
  let ov=document.getElementById('shop-overlay');
  if(!ov)return;
  ov.classList.remove('visible');
  setTimeout(()=>{if(!shopDlg){ov.classList.add('hidden');ov.innerHTML=''}},160);
}
function shopDlgKey(e){
  if(!shopDlg)return;
  let n=shopDlgOptions().length;
  if(e.key==='Escape'){e.preventDefault();closeShopDialog()}
  else if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();shopDlg.sel=(shopDlg.sel+1)%n;drawShopDialog()}
  else if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();shopDlg.sel=(shopDlg.sel+n-1)%n;drawShopDialog()}
}
if(typeof document!=='undefined'&&document.addEventListener)document.addEventListener('keydown',shopDlgKey);
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
