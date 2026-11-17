// exam.js — v16.13 (v16d: pixel look — JRPG intro, dialogue-box questions, EXAM REPORT). Rules unchanged.
let examState=null;
let examTimerInterval=null;
let expandedExamAttempt=null;

function toggleExamAttempt(idx){
  expandedExamAttempt=expandedExamAttempt===idx?null:idx;
  render();
}

function examCfg(){return AZURE_DB.examConfig||{questionCount:10,timeLimitSeconds:600,passThreshold:0.7,domainDraw:{cloudConcepts:3,coreServices:4,govMgmt:3}}}

function drawExamQuestions(){
  let pool=AZURE_DB.examPool||[];
  let cfg=examCfg().domainDraw;
  function pick(trackFilter,n){
    let candidates=pool.filter(trackFilter);
    let shuffled=candidates.slice();
    for(let i=shuffled.length-1;i>0;i--){
      let j=Math.floor(Math.random()*(i+1));
      [shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];
    }
    return shuffled.slice(0,n);
  }
  let picked=[
    ...pick(q=>q.track==='cloudConcepts',cfg.cloudConcepts),
    ...pick(q=>q.track==='coreServices',cfg.coreServices),
    ...pick(q=>q.track==='securityGovernance'||q.track==='managementMonitoring',cfg.govMgmt)
  ];
  for(let i=picked.length-1;i>0;i--){
    let j=Math.floor(Math.random()*(i+1));
    [picked[i],picked[j]]=[picked[j],picked[i]];
  }
  return picked;
}

function startPracticeExam(){
  let cfg=examCfg();
  examState={
    questions:drawExamQuestions(),
    answers:{},
    current:0,
    timeLeft:cfg.timeLimitSeconds,
    finished:false,
    result:null
  };
  clearInterval(examTimerInterval);
  examTimerInterval=setInterval(()=>{
    if(!examState||examState.finished)return;
    examState.timeLeft--;
    updateExamTimerDisplay();
    if(examState.timeLeft<=0)submitExam();
  },1000);
  render();
}

function selectExamAnswer(i){
  if(!examState||examState.finished)return;
  examState.answers[examState.current]=i;
  render();
}

function examGoTo(idx){
  if(!examState||examState.finished)return;
  if(idx<0||idx>=examState.questions.length)return;
  examState.current=idx;
  render();
}
function examNext(){examGoTo(examState.current+1)}
function examPrev(){examGoTo(examState.current-1)}

function submitExam(){
  if(!examState||examState.finished)return;
  clearInterval(examTimerInterval);
  examState.finished=true;
  let cfg=examCfg();
  let byTrack={};
  let correctCount=0;
  examState.questions.forEach((q,i)=>{
    let userAns=examState.answers[i];
    let correct=userAns===q.c;
    if(correct)correctCount++;
    byTrack[q.track]=byTrack[q.track]||{correct:0,total:0};
    byTrack[q.track].total++;
    if(correct)byTrack[q.track].correct++;
  });
  let scorePct=correctCount/examState.questions.length;
  examState.result={
    correctCount,
    total:examState.questions.length,
    scorePct,
    passed:scorePct>=cfg.passThreshold,
    byTrack
  };
  S.history=S.history||{};
  S.history.exam=S.history.exam||[];
  S.history.exam.unshift({
    time:new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'}),
    correct:correctCount,total:examState.questions.length,pct:scorePct,
    passed:examState.result.passed,
    questions:examState.questions,answers:examState.answers
  });
  S.history.exam=S.history.exam.slice(0,10);
  saveState();
  render();
}

function exitPracticeExam(){
  clearInterval(examTimerInterval);
  examState=null;
  goTo('exam');
}

function updateExamTimerDisplay(){
  let el=document.getElementById('exam-timer');
  if(!el||!examState)return;
  let m=Math.floor(examState.timeLeft/60),s=examState.timeLeft%60;
  el.textContent=`${m}:${s<10?'0':''}${s}`;
  el.classList.toggle('low',examState.timeLeft<=60);
  let box=document.getElementById('exam-timer-box');
  if(box)box.classList.toggle('low',examState.timeLeft<=60);
}

// ======================================================================
// v16d — pixel look. Rules above (draw, timer, scoring, history) are unchanged.
// ======================================================================
const EXAM_TRACKS=[
  {id:'cloudConcepts',name:'Cloud Concepts'},
  {id:'coreServices',name:'Core Azure Services'},
  {id:'securityGovernance',name:'Security, Identity & Governance'},
  {id:'managementMonitoring',name:'Management & Monitoring'}
];
function examZone(id){return (typeof ZONE_META!=='undefined'&&ZONE_META[id])||{sprite:'zCloud',color:'#29adff'}}
function examAnswerText(q,i){return i!==null&&i!==undefined&&q.a[i]!==undefined?'ABCD'[i]+'. '+q.a[i]:'— (skipped)'}
function examReviewRows(questions,answers){
  return questions.map((q,i)=>{
    let userAns=answers[i];
    return questLogRow({ok:userAns===q.c,num:`Q${i+1}`,q:q.q,your:examAnswerText(q,userAns),right:'ABCD'[q.c]+'. '+q.a[q.c],e:q.e});
  }).join('');
}
function fmtClock(sec){sec=Math.max(0,sec|0);let m=Math.floor(sec/60),s=sec%60;return `${m}:${s<10?'0':''}${s}`}

function renderExamHistorySection(){
  let attempts=(S.history&&S.history.exam)||[];
  if(!attempts.length)return '';
  let rows=attempts.map((att,idx)=>{
    let open=expandedExamAttempt===idx;
    let pct=Math.round((att.pct||0)*100);
    return `<li class="ex-att ${att.passed?'ok':'bad'} ${open?'open':''}">
      <button type="button" class="ex-att-head" onclick="toggleExamAttempt(${idx})" aria-expanded="${open}">
        <span class="ql-mark">${att.passed?sprite('check',12)+'<b>PASS</b>':sprite('cross',10)+'<b>FAIL</b>'}</span>
        <span class="ex-att-t">${escapeHtml(att.time||'')}</span>
        <b class="ex-att-s">${att.correct}/${att.total} · ${pct}%</b>
        <span class="ex-att-c">${sprite(open?'up':'down',10)}</span>
      </button>
      ${open?`<ol class="ql-list">${examReviewRows(att.questions||[],att.answers||{})}</ol>`:''}
    </li>`;
  }).join('');
  return `<section class="card ql-card">
    <div class="ql-head"><span class="ql-ic">${sprite('navExam',20)}</span><div class="card-title">Practice Exam attempts</div><span class="ql-score">${attempts.length}</span></div>
    <ol class="ql-list ex-atts">${rows}</ol>
  </section>`;
}

function renderExamPage(){
  let html;
  if(!examState){
    html=renderExamIntro();
  }else if(examState.finished){
    html=renderExamResults();
  }else{
    html=renderExamQuestion();
  }
  mount('exam',html);
  updateExamTimerDisplay();
}

function renderExamIntro(){
  let cfg=examCfg();
  let mins=Math.round(cfg.timeLimitSeconds/60),d=cfg.domainDraw||{};
  let last=((S.history&&S.history.exam)||[])[0];
  let lastRow=last?`<div class="ex-last ${last.passed?'ok':'bad'}">
      <span class="ql-mark">${last.passed?sprite('check',12)+'<b>PASS</b>':sprite('cross',10)+'<b>FAIL</b>'}</span>
      <span>LAST TRY ${escapeHtml(last.time||'')}</span><b>${last.correct}/${last.total}</b>
    </div>
    <button type="button" class="btn btn-ghost ex-loglink" onclick="goTo('history')">ALL ATTEMPTS IN QUEST LOG ${sprite('play',10)}</button>`:'';
  return `
    <div class="page-header">
      <div><div class="page-title">PRACTICE EXAM</div><div class="page-subtitle">A scaled-down taste of the real AZ-900.</div></div>
    </div>
    <div class="q-box ex-intro">
      <span class="q-cat">EXAMINER</span>
      <div class="ex-intro-row">
        <span class="ex-intro-art">${sprite('guide',48)}</span>
        <div class="ex-intro-text">${cfg.questionCount} questions, ${mins} minutes. I stay silent until you hand in your paper — just like the real exam.</div>
      </div>
    </div>
    <section class="card">
      <div class="card-title">Rules</div>
      <div class="pf-sheet">
        ${profileStatRow('QUESTIONS',`${cfg.questionCount}`)}
        ${profileStatRow('TIME',`${sprite('hourglass',12)} ${mins} min`)}
        ${profileStatRow('PASS MARK',`${Math.round(cfg.passThreshold*100)}%`)}
        ${profileStatRow('FEEDBACK','after submit')}
        ${profileStatRow('DOMAINS',`${d.cloudConcepts||0} · ${d.coreServices||0} · ${d.govMgmt||0}`)}
      </div>
      <div class="ex-domkey">Cloud Concepts · Azure Services · Governance & Management, roughly the real AZ-900 split.</div>
      <div class="ls-effect ex-free">&gt; No XP, streak or Shards at stake. Unlimited attempts, new questions every time.</div>
    </section>
    <div class="home-cta"><button type="button" class="btn btn-cta" onclick="startPracticeExam()">${sprite('play',14)} START EXAM</button></div>
    ${lastRow}
  `;
}

function renderExamQuestion(){
  let q=examState.questions[examState.current];
  let selected=examState.answers[examState.current];
  let n=examState.questions.length,cur=examState.current;
  let answered=Object.keys(examState.answers).length;
  let ansHtml=q.a.map((x,i)=>{
    let cls=selected===i?'selected':'';
    return `<button type="button" class="q-opt ${cls}" onclick="selectExamAnswer(${i})" aria-pressed="${selected===i}">
      <span class="q-key">${'ABCD'[i]}</span><span class="q-opt-text">${escapeHtml(x)}</span>
    </button>`;
  }).join('');
  let pips=examState.questions.map((_,i)=>{
    let st=i===cur?'now':(examState.answers[i]!==undefined?'ans':'');
    return `<i class="${st}"></i>`;
  }).join('');
  let jump=examState.questions.map((_,i)=>{
    let st=i===cur?'cur':(examState.answers[i]!==undefined?'ans':'');
    return `<button type="button" class="ex-jbtn ${st}" onclick="examGoTo(${i})" aria-label="Question ${i+1}${examState.answers[i]!==undefined?', answered':''}" ${i===cur?'aria-current="true"':''}>${i+1}</button>`;
  }).join('');
  let last=cur===n-1;
  return `
    <div class="q-head ex-head">
      <div class="ex-timer" id="exam-timer-box">${sprite('hourglass',14)}<span id="exam-timer" class="ex-time">--:--</span></div>
      <div class="q-title">
        <div class="q-title-row"><span class="mode">PRACTICE EXAM</span><span>${cur+1}/${n}</span></div>
        <div class="q-pips ex-pips" style="grid-template-columns:repeat(${n},minmax(0,1fr))">${pips}</div>
      </div>
    </div>
    <div class="q-box">
      <span class="q-cat">QUESTION ${cur+1}</span>
      <div class="q-text">${escapeHtml(q.q)}</div>
      <span class="q-cursor">${sprite('play',8)}</span>
    </div>
    <div class="q-opts">${ansHtml}</div>
    <div class="q-actions">
      <button type="button" class="btn btn-ghost" ${cur===0?'disabled':''} onclick="examPrev()">${sprite('back',10)} PREV</button>
      ${last
        ?`<button type="button" class="btn btn-gold" onclick="submitExam()">SUBMIT</button>`
        :`<button type="button" class="btn btn-primary" onclick="examNext()">NEXT ${sprite('play',10)}</button>`}
    </div>
    <section class="card ex-map">
      <div class="ex-map-l"><span>JUMP TO</span><span>${answered}/${n} ANSWERED</span></div>
      <div class="ex-jump">${jump}</div>
      <button type="button" class="btn btn-ghost ex-endbtn" onclick="if(confirm('End this practice exam now and see your results?'))submitExam()">END EXAM NOW</button>
    </section>
  `;
}

function renderExamResults(){
  let r=examState.result,cfg=examCfg();
  let used=fmtClock(cfg.timeLimitSeconds-Math.max(0,examState.timeLeft));
  let doms=EXAM_TRACKS.map(t=>{
    let v=r.byTrack[t.id]||{correct:0,total:0},z=examZone(t.id);
    return `<div class="ex-dom ${v.total?'':'none'}" style="--zc:${z.color}">
      <span class="ex-dom-ic">${sprite(z.sprite,22)}</span>
      <div class="ex-dom-main">
        <div class="ex-dom-top"><span class="ex-dom-name">${t.name}</span><b>${v.total?`${v.correct}/${v.total}`:'—'}</b></div>
        <div class="ex-dom-bar">${v.total?learnCells(v.correct,v.total,v.total):'<span class="ex-dom-na">not drawn this time</span>'}</div>
      </div>
    </div>`;
  }).join('');
  let pct=Math.round(r.scorePct*100);
  return `
    <div class="page-header">
      <div><div class="page-title">EXAM REPORT</div><div class="page-subtitle">Practice Exam · time used ${used}</div></div>
    </div>
    <section class="card ex-banner ${r.passed?'pass':'fail'}" role="status">
      <span class="ex-ban-art">${r.passed?sprite('wTrophy',56):sprite('guide',56)}</span>
      <div class="ex-ban-main">
        <div class="ex-ban-title">${r.passed?'PASSED!':'NOT YET'}</div>
        <div class="ex-ban-score">${r.correctCount}/${r.total} · ${pct}%</div>
        <div class="ex-ban-cells">${learnCells(r.correctCount,r.total,r.total)}</div>
        <div class="ex-ban-sub">${r.passed?'Above the pass mark. Keep it up!':'Keep practicing — the review below shows what to brush up.'}</div>
      </div>
    </section>
    <section class="card">
      <div class="card-title">Domains</div>
      <div class="ex-doms">${doms}</div>
      <div class="ex-note">Pass mark here is ${Math.round(cfg.passThreshold*100)}% as an approximation — the real AZ-900 uses scaled scoring (700/1000), which doesn't map 1:1 to a raw percentage.</div>
    </section>
    <div class="q-actions ex-res-actions">
      <button type="button" class="btn btn-ghost" onclick="exitPracticeExam()">OVERVIEW</button>
      <button type="button" class="btn btn-primary" onclick="startPracticeExam()">TRY AGAIN</button>
    </div>
    <section class="card ql-card">
      <div class="ql-head"><span class="ql-ic">${sprite('navLog',20)}</span><div class="card-title">Review</div><span class="ql-score">${r.correctCount}/${r.total}</span></div>
      <ol class="ql-list">${examReviewRows(examState.questions,examState.answers)}</ol>
    </section>
  `;
}
