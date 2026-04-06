const user = {
  login: "je1nn",
  password: "1234"
};

/* LOGIN */
document.getElementById('login-btn').onclick = () => {

  const login = document.getElementById('login').value;
  const pass = document.getElementById('password').value;

  if (login === user.login && pass === user.password) {

    document.getElementById('auth').style.display = "none";
    document.getElementById('main').style.display = "block";

    openTab("profile");
    notify("СИСТЕМА АКТИВИРОВАНА");

  } else {
    notify("НЕВЕРНЫЙ ДОСТУП");
  }
};

/* ГОСТЬ */
document.getElementById('guest-btn').onclick = () => {
  document.getElementById('auth').style.display = "none";
  document.getElementById('main').style.display = "block";
  openTab("profile");
};

/* TABS */
function openTab(tabName) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('#sidebar button').forEach(b => b.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  document.querySelector(`#sidebar button[data-tab="${tabName}"]`).classList.add('active');
}

/* CLICK */
document.querySelectorAll('#sidebar button').forEach(btn => {
  btn.onclick = () => openTab(btn.dataset.tab);
});

/* TERMINAL */
document.getElementById('terminal-input').addEventListener('keypress', e => {
  if (e.key === "Enter") {

    const val = e.target.value;
    const box = document.getElementById('terminal-box');

    box.innerHTML += `<div>> ${val}</div>`;

    if (val === "help") {
      box.innerHTML += `<div>commands: help, clear</div>`;
    }

    if (val === "clear") {
      box.innerHTML = "";
    }

    e.target.value = "";
  }
});

/* NOTIFY */
function notify(text) {
  const el = document.createElement('div');
  el.textContent = text;
  el.style.background = "rgba(0,0,0,0.7)";
  el.style.padding = "10px";
  el.style.marginBottom = "10px";

  document.getElementById('notifications').appendChild(el);

  setTimeout(() => el.remove(), 3000);
}
