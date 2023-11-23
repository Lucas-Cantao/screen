const ElementoParaInserirFilmes = document.getElementById('filmes');
const corpo = document.querySelector('.body')
const apiKey = '5d93ad67ab4499fded984604a2f5c80b';


function InserirFilmesNaTela(filmes) {
  filmes.forEach(movie => {
    const movieId = movie.id;
    const title = movie.title;
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
      corpo.style.background = `url('img/POSTER.jpg')`;
      corpo.style.backgroundAttachment = 'fixed';
      corpo.style.backgroundPosition = 'center';
      corpo.style.backgroundSize = '100% 100vh';
      corpo.style.backgroundRepeat = 'no-repeat';
    })
    

    

    ElementoParaInserirFilmes.appendChild(card);
  });
}

let movies = [];

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`)
  .then(response => response.json())
  .then(data => {
    movies = data.results.slice(0, 9); // Atribui o valor a movies, por exemplo (top 15 filmes populares)
    InserirFilmesNaTela(movies);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os filmes populares:', error);
});

fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR`)
  .then(response => response.json())
  .then(data => {
    movies = data.results.slice(0, 9); // Atribui o valor a movies, por exemplo (top 15 filmes populares)
    InserirFilmesNaTela(movies);
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os filmes populares:', error);
});



