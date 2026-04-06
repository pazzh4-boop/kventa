const user = {
  login:"je1nn",
  password:"1234"
};

/* LOGIN */
document.getElementById('login-btn').onclick = () => {

  const login = document.getElementById('login').value;
  const pass = document.getElementById('password').value;

  if(login === user.login && pass === user.password){

    notify("ДОСТУП РАЗРЕШЕН","success");

    setTimeout(()=>{
      document.getElementById('auth').style.display="none";
      document.getElementById('main').style.display="block";
    },500);

  } else {
    notify("ОТКАЗ В ДОСТУПЕ","error");
  }
};

/* TABS */
document.querySelectorAll('#sidebar button').forEach(btn=>{
  btn.onclick=()=>{

    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('#sidebar button').forEach(b=>b.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');

  }
});

/* NOTIFY */
function notify(text,type){

  const el=document.createElement('div');
  el.textContent=text;
  el.style.padding="10px";
  el.style.background="rgba(0,0,0,0.6)";
  el.style.marginBottom="10px";

  document.getElementById('notifications').appendChild(el);

  setTimeout(()=>el.remove(),3000);
}
