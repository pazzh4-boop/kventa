/* LOGIN */
document.getElementById('login-btn').onclick = ()=>{
  document.getElementById('auth').style.display="none";
  document.getElementById('main').style.display="block";
  notify("Доступ разрешен");
};

/* TABS */
document.querySelectorAll('#sidebar button').forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  }
});

/* NOTIFY */
function notify(text){
  const el = document.createElement('div');
  el.className="notif";
  el.innerText=text;
  document.getElementById('notifications').appendChild(el);
  setTimeout(()=>el.remove(),3000);
}

/* STATE */
function setSystemState(state){
  document.body.setAttribute("data-state",state);
}

/* WINDOWS */
let zIndex=1000;

function createWindow(title, content){
  const win=document.createElement('div');
  win.className="window";
  win.style.top="150px";
  win.style.left="300px";

  win.innerHTML=`
    <div class="window-header">
      ${title}
      <span onclick="this.closest('.window').remove()">✕</span>
    </div>
    <div>${content}</div>
  `;

  document.getElementById('windows').appendChild(win);
}

/* AGENTS PRO */
const agents=[
  {name:"Agent #1",efficiency:80,risk:20},
  {name:"Agent #2",efficiency:60,risk:40}
];

function renderAgents(){
  const list=document.querySelector('.list');
  list.innerHTML="";
  agents.forEach(a=>{
    const el=document.createElement('div');
    el.className="agent";
    el.innerHTML=`${a.name}`;
    el.onclick=()=>createWindow(a.name,"Risk:"+a.risk);
    list.appendChild(el);
  });
}

/* MISSIONS PRO */
const missions=[
  {title:"Операция Тень",progress:20},
  {title:"Перехват",progress:10}
];

function renderMissions(){
  const c=document.getElementById('missions');
  c.innerHTML="<h2>ЗАДАНИЯ</h2>";
  missions.forEach(m=>{
    const el=document.createElement('div');
    el.className="mission-card";
    el.innerHTML=`${m.title}`;
    el.onclick=()=>createWindow(m.title,"Progress:"+m.progress);
    c.appendChild(el);
  });
}

/* INIT */
renderAgents();
renderMissions();
