// mastery.js — v16.13 (v16c2: Mastery as a pixel skill tree; v16d: Loot log line without emoji). Rank rules unchanged:
// unlimited ranks, cost 12 * rank^1.6, +0.5 % XP per rank on the track's categories,
// titles Adept / Expert / Master / Grandmaster at ranks 5 / 10 / 20 / 40.
function masteryTracks(){return AZURE_DB.masteryTracks||[]}
function trackById(id){return masteryTracks().find(t=>t.id===id)}
function trackForCategory(cat){return masteryTracks().find(t=>(t.categories||[]).includes(cat))}
function masteryRank(trackId){return (S.mastery&&S.mastery[trackId])||0}

function masteryRankCost(trackId){
  let base=AZURE_DB.masteryBaseCost||12;
  let nextRank=masteryRank(trackId)+1;
  return Math.round(base*Math.pow(nextRank,1.6));
}
function masteryBonusPct(trackId){return masteryRank(trackId)*0.005}
function masteryBonusForCategory(cat){
  let t=trackForCategory(cat);
  return t?masteryBonusPct(t.id):0;
}
function masteryTierLabel(rank){
  if(rank>=40)return 'Grandmaster';
  if(rank>=20)return 'Master';
  if(rank>=10)return 'Expert';
  if(rank>=5)return 'Adept';
  return null;
}

// title badges, colours = rarity colours of the shop (uncommon / rare / epic / legendary)
const MASTERY_TIERS=[
  {rank:5,name:'Adept',color:'#00e436'},
  {rank:10,name:'Expert',color:'#29adff'},
  {rank:20,name:'Master',color:'#b873f5'},
  {rank:40,name:'Grandmaster',color:'#ffec27'}
];
// short column labels + zone look shared with Learn (ZONE_META in learn.js)
const MASTERY_SHORT={cloudConcepts:'CLOUD',coreServices:'CORE',securityGovernance:'SECURE',managementMonitoring:'MANAGE'};
function masteryZone(id){
  let z=(typeof ZONE_META!=='undefined'&&ZONE_META[id])||null;
  return z||{sprite:'zCloud',color:'#29adff'};
}

let masterySel=null;     // selected track id
let masteryJustRanked=null;

function selectMasteryTrack(id){masterySel=id;render()}

function buyMasteryRank(trackId){
  let cost=masteryRankCost(trackId);
  if(S.shards<cost)return false;
  S.shards-=cost;
  S.mastery=S.mastery||{};
  S.mastery[trackId]=masteryRank(trackId)+1;
  let t=trackById(trackId);
  let newRank=S.mastery[trackId];
  S.drops=S.drops||[];
  let tier=masteryTierLabel(newRank);
  S.drops.unshift(`${t?t.name:trackId} Mastery Rank ${newRank}${tier?' — '+tier+'!':''} (+${(newRank*0.5).toFixed(1)}% XP)`);
  let milestone=[5,10,20,40].includes(newRank);
  if(milestone&&typeof showAchievementToast==='function'){
    showAchievementToast(`${tier} Reached!`,`${t?t.name:trackId} · Rank ${newRank}`);
  }
  if(typeof playTune==='function')playTune(milestone?[[523,.08],[659,.08],[784,.08],[1047,.3]]:[[784,.06],[1047,.12]]);
  masterySel=trackId;masteryJustRanked=trackId;
  saveState();render();
  setTimeout(()=>{masteryJustRanked=null},700);
  return true;
}

// one column of the tree: zone at the bottom, then 4 segments of 5 cells with a badge on top of each
function masteryColumn(t){
  let rank=masteryRank(t.id),z=masteryZone(t.id),sel=t.id===masterySel;
  let steps=[0].concat(MASTERY_TIERS.map(x=>x.rank));
  let parts='';
  for(let i=MASTERY_TIERS.length-1;i>=0;i--){
    let tier=MASTERY_TIERS[i],lo=steps[i],hi=steps[i+1];
    let got=rank>=tier.rank;
    let on=Math.max(0,Math.min(5,Math.floor((rank-lo)/(hi-lo)*5)));
    let cells='';for(let c=0;c<5;c++)cells+=`<i class="${c<on?'on':''}"></i>`;
    parts+=`<span class="mt-badge ${got?'got':''}" style="--bc:${tier.color}" title="${tier.name} · rank ${tier.rank}">${sprite('medal',20)}</span>
      <span class="mt-seg" aria-hidden="true">${cells}</span>`;
  }
  let over=rank>40?`<span class="mt-over">+${rank-40}</span>`:'<span class="mt-over"></span>';
  let tier=masteryTierLabel(rank);
  return `<button type="button" class="mt-col ${sel?'sel':''} ${masteryJustRanked===t.id?'ranked':''}" style="--zc:${z.color}"
      onclick="selectMasteryTrack('${t.id}')" aria-pressed="${sel}" aria-label="${escapeHtml(t.name)}: rank ${rank}${tier?', '+tier:''}">
      ${over}${parts}
      <span class="mt-root">${sprite(z.sprite,30)}</span>
      <span class="mt-short">${MASTERY_SHORT[t.id]||escapeHtml(t.name).slice(0,6).toUpperCase()}</span>
      <span class="mt-rank">R${rank}</span>
    </button>`;
}

function masteryDetail(t){
  let rank=masteryRank(t.id),cost=masteryRankCost(t.id),poor=S.shards<cost,z=masteryZone(t.id);
  let tier=masteryTierLabel(rank);
  let next=MASTERY_TIERS.find(x=>x.rank>rank);
  let badges=MASTERY_TIERS.map(x=>`<span class="mt-title ${rank>=x.rank?'got':''}" style="--bc:${x.color}">
      ${sprite('medal',16)}<span><b>${x.name.toUpperCase()}</b><i>RANK ${x.rank}</i></span></span>`).join('');
  let buy=poor
    ?`${shardPrice(cost,true)}<span class="ls-need">${learnCells(S.shards,cost,8)}<b>NEED ${cost-S.shards}</b></span>`
    :`${shardPrice(cost,false)}<button type="button" class="btn btn-primary" onclick="buyMasteryRank('${t.id}')">RANK UP ${sprite('play',10)}</button>`;
  return `<section class="card mt-detail" style="--zc:${z.color}">
      <div class="lz-head">
        <span class="lz-icon">${sprite(z.sprite,30)}</span>
        <div class="lz-titles">
          <div class="card-title">${escapeHtml(t.name)}</div>
          <div class="mt-cats">${(t.categories||[]).map(escapeHtml).join(' · ')}</div>
        </div>
      </div>
      <div class="mt-stats">
        <div><span>RANK</span><b class="${masteryJustRanked===t.id?'pop':''}">${rank}</b></div>
        <div><span>TITLE</span><b>${tier?tier.toUpperCase():'—'}</b></div>
        <div><span>XP BONUS</span><b>+${(rank*0.5).toFixed(1)}%</b></div>
      </div>
      <div class="mt-titles">${badges}</div>
      <div class="ls-effect">&gt; Rank ${rank+1}: +0.5% XP on these topics${next?` · ${next.rank-rank} to ${next.name}`:''}</div>
      <div class="ls-buy mt-buy">${buy}</div>
    </section>`;
}

function renderMastery(){
  let tracks=masteryTracks();
  if(!tracks.length)return '<div class="empty-state">No mastery tracks.</div>';
  if(!masterySel||!trackById(masterySel))masterySel=tracks[0].id;
  let total=tracks.reduce((n,t)=>n+masteryRank(t.id),0);
  return `
    <div class="page-header">
      <div><div class="page-title">MASTERY</div><div class="page-subtitle">Spend Shards on permanent XP bonuses. No rank limit.</div></div>
      <div class="ls-wallet" aria-label="${S.shards} Shards">${sprite('shard',18)}<b>${S.shards}</b></div>
    </div>
    <section class="card mt-tree-card">
      <div class="card-title">Skill tree · ${total} ranks</div>
      <div class="card-sub">Tap a branch. Badges light up at ranks 5, 10, 20 and 40.</div>
      <div class="mt-tree">${tracks.map(masteryColumn).join('')}</div>
    </section>
    ${masteryDetail(trackById(masterySel))}`;
}
