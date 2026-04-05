const loginBtn = document.getElementById('login-btn');
const altBtn = document.getElementById('alt-btn');

loginBtn.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  if(login === "je1nn" && password === "1234"){
    alert("ДОСТУП РАЗРЕШЕН");
  } else {
    alert("ОТКАЗ В ДОСТУПЕ");
  }
});

altBtn.addEventListener('click', () => {
  alert("ГОСТЕВОЙ ДОСТУП");
});
