const closed_eye = document.querySelector('.closed_eye')
const opened_eye = document.querySelector('.opened_eye')
const pass = document.querySelector('#pass')
const eyes = document.querySelector('.eyes')

let mostrando = false

function showPw(){
  if(mostrando == false){
    closed_eye.style.display = 'none';
    opened_eye.style.display = 'block';
    pass.type = 'text';
    mostrando = true;
  }else{
    closed_eye.style.display = 'block';
    opened_eye.style.display = 'none';
    pass.type = 'password';
    mostrando = false;
  }
}



eyes.addEventListener('click', showPw)