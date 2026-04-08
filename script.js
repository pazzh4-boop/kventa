const tabs = document.querySelectorAll('#sidebar button');

tabs.forEach(btn=>{
  btn.onclick = ()=>{

    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    tabs.forEach(b=>b.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  }
});

/* LOGIN */
document.getElementById('login-btn').onclick = ()=>{
  document.getElementById('auth').style.display = "none";
  document.getElementById('main').style.display = "block";
};
