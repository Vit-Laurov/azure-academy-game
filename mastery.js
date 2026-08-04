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

function buyMasteryRank(trackId){
  let cost=masteryRankCost(trackId);
  if(S.shards<cost)return;
  S.shards-=cost;
  S.mastery=S.mastery||{};
  S.mastery[trackId]=masteryRank(trackId)+1;
  let t=trackById(trackId);
  let newRank=S.mastery[trackId];
  S.drops=S.drops||[];
  let tier=masteryTierLabel(newRank);
  S.drops.unshift(`⭐ ${t?t.name:trackId} Mastery Rank ${newRank}${tier?' — '+tier+'!':''} (+${(newRank*0.5).toFixed(1)}% XP)`);
  saveState();render();
}

function renderMastery(){
  let tracks=masteryTracks();
  let html=`
    <div class="page-header">
      <div><div class="page-title">Mastery</div><div class="page-subtitle">Spend Shards on permanent XP mastery per topic. No limit — keep climbing.</div></div>
      <div class="stat-row"><div class="stat-chip"><span class="dot" style="background:var(--amber)"></span>${S.shards} Shards</div></div>
    </div>
    <div class="loot-grid">
      ${tracks.map(t=>{
        let rank=masteryRank(t.id);
        let cost=masteryRankCost(t.id);
        let canAfford=S.shards>=cost;
        let tier=masteryTierLabel(rank);
        let bonus=(rank*0.5).toFixed(1);
        return `<div class="card">
          <div class="card-title">${t.icon} ${t.name}</div>
          <div class="card-sub">${(t.categories||[]).join(', ')}</div>
          <div class="grid" style="margin:14px 0">
            <div class="metric"><div class="metric-label">Rank</div><div class="metric-value">${rank}${tier?' · '+tier:''}</div></div>
            <div class="metric"><div class="metric-label">XP Bonus</div><div class="metric-value">+${bonus}%</div></div>
          </div>
          <div class="loot-effect">Next rank (${rank+1}): +0.5% XP — ${cost} 💎</div>
          <button class="btn ${canAfford?'btn-primary':'btn-ghost'}" ${canAfford?'':'disabled'} onclick="buyMasteryRank('${t.id}')">
            ${canAfford?'Rank Up':'Not enough Shards'}
          </button>
        </div>`;
      }).join('')}
    </div>
  `;
  return html;
}
