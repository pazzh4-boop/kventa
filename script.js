const tabs = document.querySelectorAll('#sidebar button');

tabs.forEach(btn=>{
  btn.onclick = ()=>{

    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    tabs.forEach(b=>b.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  }
});

/* LOGIN ANIMATION */
document.getElementById('login-btn').onclick = ()=>{

  const btn = document.getElementById('login-btn');

  btn.innerText = "ПРОВЕРКА...";
  btn.disabled = true;

  document.body.classList.add("auth-loading");

  setTimeout(()=>{

    btn.innerText = "ДОСТУП РАЗРЕШЕН";

    setTimeout(()=>{

      document.getElementById('auth').classList.add("fade-out");

      setTimeout(()=>{
        document.getElementById('auth').style.display = "none";
        document.getElementById('main').style.display = "block";
      },400);

    },800);

  },1200);

};
