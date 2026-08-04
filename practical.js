function checkLabText(text, lab){
  let clean=(text||'').toLowerCase().trim();
  let wordCount=clean.length?clean.split(/\s+/).length:0;
  let groups=lab.keywords||[];

  let hitGroups=[],missGroups=[];
  groups.forEach(group=>{
    let matched=group.some(syn=>clean.includes(syn.toLowerCase()));
    if(matched)hitGroups.push(group);
    else missGroups.push(group);
  });

  let hits=hitGroups.length;
  let total=groups.length||1;
  let miss=missGroups.map(g=>g.slice(0,2).join(' / '));

  let tooShort=wordCount<6;
  let passed=!tooShort&&hits>=total;
  let reviewable=!passed&&!tooShort&&hits>=Math.ceil(total/2);

  return{passed,reviewable,hits,miss};
}
