const loginBtn = document.getElementById('login-btn');
const guestBtn = document.getElementById('guest-btn');

loginBtn.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  if(login === "je1nn" && password === "1234"){
    alert("ДОСТУП РАЗРЕШЕН");
  } else {
    alert("ОТКАЗ В ДОСТУПЕ");
  }
});

guestBtn.addEventListener('click', () => {
  alert("ГОСТЕВОЙ ДОСТУП");
});
