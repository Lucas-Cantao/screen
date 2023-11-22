import { InserirFilmesNaTela } from "./main.js";

export const apiKey = '5d93ad67ab4499fded984604a2f5c80b';
let movies = [];

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`)
  .then(response => response.json())
  .then(data => {
    movies = data.results.slice(0, 15); // Atribui o valor a movies, por exemplo (top 10 filmes populares)
    InserirFilmesNaTela(movies);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os filmes populares:', error);
  });

const home = document.querySelector('.cabecalho__titulo');
home.addEventListener('click', () => {
  InserirFilmesNaTela(movies);
  document.getElementById('cabecalho__checkbox').checked = false;
  document.querySelector('.card__lista-vazia').style.display = 'none';
});

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


const filmesDaPesquisa = document.querySelector('.filmesDaPesquisa')
const corpo = document.querySelector('.body');
const search_result = document.querySelector('.search_result');


const pesquisar = document.querySelector('.cabecalho__pesquisa-lupa')
function InserirDaPesquisaFilmesNaTela(filmes) {
  filmesDaPesquisa.innerHTML = '';
  search_result.style.display = 'block';
  filmes.forEach(movie => {
    if(movie.backdrop_path == null){
    }else{
      const movieId = movie.id;
      const title = movie.title;
      const releaseYear = movie.release_date.split('-')[0];
      const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      const rating = movie.vote_average.toFixed(1);
      const overview = movie.overview;
  
      const section = document.createElement('section');
      const card = document.createElement('div')
      card.className = 'card';
      section.className = 'cards';
      section.style.background = `url(${posterPath})`;
      section.style.backgroundSize = '170px 250px';
      section.dataset.movieId = movieId;
      
      card.appendChild(section);
      
  
  
      const back = `https://www.themoviedb.org/t/p/original/${movie.backdrop_path}`;
  
  
      section.addEventListener('mouseenter', () => {
        corpo.style.background = `url(${back})`;
        corpo.style.backgroundAttachment = 'fixed';
        corpo.style.backgroundPosition = 'center';
        corpo.style.backgroundSize = '100% 100vh';
        corpo.style.backgroundRepeat = 'no-repeat';
      });
      section.addEventListener('mouseout', () => {
        corpo.style.background = `url(img/POSTER.jpg)`;
        corpo.style.backgroundAttachment = 'fixed';
        corpo.style.backgroundPosition = 'center';
        corpo.style.backgroundSize = '100% 100vh';
        corpo.style.backgroundRepeat = 'no-repeat';
      })
  
      filmesDaPesquisa.appendChild(card);
    }
  });
}



const search = () => {
  const input_request = document.querySelector('.cabecalho__pesquisa-input');
  let movies_requested = []
  fetch(`https://api.themoviedb.org/3/search/movie?query=${input_request.value}&api_key=${apiKey}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      movies_requested = data.results
      if(movies_requested.length == 0){
        console.log('nenhum resultado disponível')
      }else{
        InserirDaPesquisaFilmesNaTela(movies_requested)
      }
    })
}


pesquisar.addEventListener('click', search)