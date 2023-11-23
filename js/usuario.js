
const logado = localStorage.getItem("logado")
const pesquisa = document.querySelector(".pesquisa")



if(logado == "logado"){

  const user = document.createElement("div")
  user.className = 'user';
  user.innerHTML = `Usuário: ${localStorage.getItem("usuario")}`
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
