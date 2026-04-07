const user = { login:"je1nn", password:"1234" };

/* LOGIN */
document.getElementById('login-btn').onclick = ()=>{
  if(login.value===user.login && password.value===user.password){
    auth.style.display="none";
    main.style.display="block";
    openTab("profile");
  }
};

/* TABS */
function openTab(tab){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(tab).classList.add('active');
}

/* SELECT AGENT */
function selectAgent(e,name,status,role,level,img){

  document.querySelectorAll('.agent-card').forEach(c=>c.classList.remove('active'));
  e.currentTarget.classList.add('active');

  agent-details.innerHTML=`
    <h3>${name}</h3>
    <p>${status}</p>
    <p>${role}</p>
    <p>LVL ${level}</p>
    <button onclick="openAgent('${name}','${status}','${role}')">Открыть окно</button>
  `;
}

/* WINDOWS */
function openAgent(name,status,role){
  const win=document.createElement('div');
  win.className="window";
  win.innerHTML=`
    <div class="window-header">
      <b>${name}</b>
      <span onclick="this.parentElement.parentElement.remove()">✕</span>
    </div>
    ${status}<br>${role}
  `;
  windows.appendChild(win);
  makeDraggable(win);
}

function openMission(title,desc,status){
  const win=document.createElement('div');
  win.className="window";
  win.innerHTML=`
    <div class="window-header">
      <b>${title}</b>
      <span onclick="this.parentElement.parentElement.remove()">✕</span>
    </div>
    ${desc}<br>${status}
  `;
  windows.appendChild(win);
  makeDraggable(win);
}

/* DRAG */
function makeDraggable(win){
  let x=0,y=0,down=false;
  win.onmousedown=e=>{
    down=true;
    x=e.clientX-win.offsetLeft;
    y=e.clientY-win.offsetTop;
  };
  document.onmouseup=()=>down=false;
  document.onmousemove=e=>{
    if(!down)return;
    win.style.left=(e.clientX-x)+"px";
    win.style.top=(e.clientY-y)+"px";
  };
}

/* SCANNER */
function scanPerson(){
  scan-result.innerHTML="Сканирование...";
  setTimeout(()=>{
    scan-result.innerHTML="Объект найден";
  },1000);
}

/* TERMINAL */
terminal-input.addEventListener('keydown',e=>{
  if(e.key==="Enter"){
    terminal-box.innerHTML+=`<div>> ${terminal-input.value}</div>`;
    terminal-input.value="";
  }
});
