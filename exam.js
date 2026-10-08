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
}

function renderExamHistorySection(){
  let attempts=(S.history&&S.history.exam)||[];
  if(!attempts.length)return '';
  let rows=attempts.map((att,idx)=>{
    let open=expandedExamAttempt===idx;
    let reviewHtml=!open?'':att.questions.map((q,i)=>{
      let userAns=att.answers[i];
      let correct=userAns===q.c;
      return `<div class="history-item ${correct?'ok':''}" style="margin-bottom:8px">
        <div class="history-q">${i+1}. ${q.q}</div>
        ${!correct?`<div class="history-row your">Your answer: ${userAns!==null&&userAns!==undefined?'ABCD'[userAns]+'. '+q.a[userAns]:'— (skipped)'}</div>`:''}
        <div class="history-row correct">Correct: ${'ABCD'[q.c]}. ${q.a[q.c]}</div>
        <div class="history-explain">${q.e}</div>
      </div>`;
    }).join('');
    return `<div class="lesson-item ${open?'open':''}">
      <div class="lesson-header" tabindex="0" role="button" onclick="toggleExamAttempt(${idx})" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleExamAttempt(${idx})}">
        <span class="lesson-check ${att.passed?'read':''}">${att.passed?'✓':'✗'}</span>
        <span class="lesson-title">${att.time} — ${att.correct}/${att.total} (${Math.round(att.pct*100)}%) ${att.passed?'Pass':'Not yet'}</span>
        <span class="lesson-caret">${open?'▲':'▼'}</span>
      </div>
      ${open?`<div class="lesson-body">${reviewHtml}</div>`:''}
    </div>`;
  }).join('');
  return `<div class="card"><div class="card-title">📝 Practice Exam attempts</div><div class="lesson-list">${rows}</div></div>`;
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
  let mins=Math.round(cfg.timeLimitSeconds/60);
  return `
    <div class="page-header">
      <div><div class="page-title">📝 Practice Exam</div><div class="page-subtitle">A scaled-down taste of the real AZ-900 exam experience.</div></div>
    </div>
    <div class="card">
      <div class="card-title">How this works</div>
      <div class="card-sub" style="margin-bottom:14px">
        ${cfg.questionCount} questions, drawn randomly and weighted to roughly match the real AZ-900 domain split (Cloud Concepts, Azure Services, Management & Governance).
        You'll have <b>${mins} minutes</b>. No answer feedback until you submit — just like the real thing. Pass mark: ${Math.round(cfg.passThreshold*100)}%.
      </div>
      <div class="loot-effect" style="margin-bottom:14px">This doesn't affect your daily streak, XP, or Shards — pure practice, unlimited attempts, different questions each time.</div>
      <button class="btn btn-primary" onclick="startPracticeExam()">Start Practice Exam</button>
    </div>
  `;
}

function renderExamQuestion(){
  let q=examState.questions[examState.current];
  let selected=examState.answers[examState.current];
  let ansHtml=q.a.map((x,i)=>{
    let cls=selected===i?'selected':'';
    return `<button class="opt ${cls}" onclick="selectExamAnswer(${i})">
      <span class="opt-key">${'ABCD'[i]}</span><span>${x}</span>
    </button>`;
  }).join('');
  let dots=examState.questions.map((_,i)=>{
    let st=i===examState.current?'current':(examState.answers[i]!==undefined?'answered':'');
    return `<span class="exam-dot ${st}" onclick="examGoTo(${i})"></span>`;
  }).join('');

  return `
    <div class="page-header">
      <div><div class="page-title">📝 Practice Exam</div><div class="page-subtitle">Question ${examState.current+1} of ${examState.questions.length}</div></div>
      <div class="stat-row"><div class="stat-chip exam-timer-chip"><span id="exam-timer">--:--</span></div></div>
    </div>
    <div class="exam-dots">${dots}</div>
    <div class="card quest-card">
      <div class="quest-q">${q.q}</div>
      ${ansHtml}
      <div class="btn-row" style="margin-top:16px">
        <button class="btn btn-ghost" ${examState.current===0?'disabled':''} onclick="examPrev()">← Previous</button>
        ${examState.current<examState.questions.length-1
          ?`<button class="btn btn-primary" onclick="examNext()">Next →</button>`
          :`<button class="btn btn-gold" onclick="submitExam()">Submit Exam</button>`}
      </div>
      <div style="margin-top:10px"><button class="btn btn-ghost" style="border-color:var(--red);font-size:12px" onclick="if(confirm('End this practice exam now and see your results?'))submitExam()">End exam now</button></div>
    </div>
  `;
}

function renderExamResults(){
  let r=examState.result;
  let trackNames={cloudConcepts:'Cloud Concepts',coreServices:'Core Azure Services',securityGovernance:'Security, Identity & Governance',managementMonitoring:'Management & Monitoring'};
  let breakdown=Object.entries(r.byTrack).map(([k,v])=>`
    <div class="metric"><div class="metric-label">${trackNames[k]||k}</div><div class="metric-value">${v.correct}/${v.total}</div></div>
  `).join('');

  let review=examState.questions.map((q,i)=>{
    let userAns=examState.answers[i];
    let correct=userAns===q.c;
    return `<div class="history-item ${correct?'ok':''}">
      <div class="history-q">${q.q}</div>
      ${!correct?`<div class="history-row your">Your answer: ${userAns!==undefined?'ABCD'[userAns]+'. '+q.a[userAns]:'— (skipped)'}</div>`:''}
      <div class="history-row correct">Correct: ${'ABCD'[q.c]}. ${q.a[q.c]}</div>
      <div class="history-explain">${q.e}</div>
    </div>`;
  }).join('');

  return `
    <div class="page-header">
      <div><div class="page-title">📝 Practice Exam — Results</div></div>
    </div>
    <div class="card">
      <div class="feedback-banner ${r.passed?'good':'bad'}">
        <div><span class="label">${r.passed?'✓ Pass':'✗ Not yet — keep practicing'}</span>${r.correctCount} / ${r.total} correct (${Math.round(r.scorePct*100)}%)</div>
      </div>
      <div class="card-sub" style="margin-top:10px">Pass mark here is ${Math.round(examCfg().passThreshold*100)}% as an approximation — the real AZ-900 uses scaled scoring (700/1000), which doesn't map 1:1 to a raw percentage.</div>
      <div class="grid" style="margin-top:16px">${breakdown}</div>
      <div class="btn-row" style="margin-top:16px">
        <button class="btn btn-primary" onclick="startPracticeExam()">Try again (new questions)</button>
        <button class="btn btn-ghost" onclick="exitPracticeExam()">Back to overview</button>
      </div>
    </div>
    <div class="card">
      <div class="card-title">Review</div>
      ${review}
    </div>
  `;
}
