
const logado = localStorage.getItem("logado")
const pesquisa = document.querySelector(".pesquisa")



if(logado == "logado"){

  const user = document.createElement("div")
  user.className = 'user';
  user.innerHTML = `${localStorage.getItem("usuario")} <img id='arrow_down' src='../../img/arrow_white.png' alt=''>`
  pesquisa.appendChild(user)
}
else{

  const login = document.createElement('a');
  login.href = 'pages/login.html';
  login.className = 'login';
  const p = document.createElement('p');
  p.innerHTML = 'Login';

  login.appendChild(p);
  pesquisa.appendChild(login);
}

const user = document.querySelector('.user')
const userLogout = document.querySelector('.usuario')
const userLogoutClick = document.querySelector('#exit_user')
const arrowLogout = document.querySelector('#arrow_down')

function showUser(){
  userLogout.classList.toggle('usuarioMostrando')
  arrowLogout.classList.toggle('arrowRotate')
}

user.addEventListener('click', showUser)


userLogoutClick.addEventListener('click', () => {
  localStorage.setItem('logado', 'nao_logado')
  window.location.assign('../../index.html')
})