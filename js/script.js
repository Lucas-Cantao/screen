import { InserirFilmesNaTela } from "./main.js";

export const apiKey = '5d93ad67ab4499fded984604a2f5c80b';
let movies = [];

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`)
  .then(response => response.json())
  .then(data => {
    movies = data.results.slice(0, 20); // Atribui o valor a movies, por exemplo (top 10 filmes populares)
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


// https://api.themoviedb.org/3/search/movie?query=f&api_key=5d93ad67ab4499fded984604a2f5c80b&language=pt-BR