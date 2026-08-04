function allFacts(){return AZURE_DB.dailyFacts||[]}

function shuffledIndices(n){
  let arr=[];
  for(let i=0;i<n;i++)arr.push(i);
  for(let i=arr.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(i+1));
    let tmp=arr[i];arr[i]=arr[j];arr[j]=tmp;
  }
  return arr;
}

function nextFact(){
  let facts=allFacts();
  if(!facts.length)return null;
  if(!S.factOrder||!S.factOrder.length||S.factPos>=S.factOrder.length){
    S.factOrder=shuffledIndices(facts.length);
    S.factPos=0;
  }
  let idx=S.factOrder[S.factPos];
  S.factPos=(S.factPos||0)+1;
  return facts[idx];
}

function maybeShowDailyFact(){
  if(S.lastFactShownDay===today())return;
  let fact=nextFact();
  if(!fact)return;
  S.lastFactShownDay=today();
  saveState();
  showDailyFactModal(fact);
}

function showDailyFactModal(fact){
  let overlay=document.getElementById('fact-overlay');
  let titleEl=document.getElementById('fact-title');
  let textEl=document.getElementById('fact-text');
  if(!overlay||!titleEl||!textEl)return;
  titleEl.textContent=fact.title;
  textEl.textContent=fact.text;
  overlay.classList.remove('hidden');
  requestAnimationFrame(()=>overlay.classList.add('visible'));
}

function closeDailyFactModal(){
  let overlay=document.getElementById('fact-overlay');
  if(!overlay)return;
  overlay.classList.remove('visible');
  setTimeout(()=>overlay.classList.add('hidden'),300);
}
