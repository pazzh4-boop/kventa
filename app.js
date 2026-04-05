const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;

  if(login === "je1nn" && password === "1234"){
    enterSystem();
  } else {
    alert("Неверные данные");
  }
});

function enterSystem(){
  document.getElementById('auth-screen').style.display = 'none';
}