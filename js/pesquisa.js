const apiKey = '5d93ad67ab4499fded984604a2f5c80b';
const filmesDaPesquisa = document.querySelector('.filmesDaPesquisa')
const corpo = document.querySelector('.body');
const search_result = document.querySelector('.search_result');
const pesquisar = document.querySelector('.cabecalho__pesquisa-lupa')


function InserirDaPesquisaFilmesNaTela(filmes) {
  filmesDaPesquisa.innerHTML = '';
  search_result.style.opacity = '1';
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
        corpo.style.backgroundImage = `url(${back})`;
        corpo.style.backgroundAttachment = 'fixed';
        corpo.style.backgroundPosition = 'center';
        corpo.style.backgroundSize = '100% 100vh';
        corpo.style.backgroundRepeat = 'no-repeat';
      });
      section.addEventListener('mouseout', () => {
        corpo.style.backgroundImage = `url(img/POSTER.jpg`;
        corpo.style.backgroundAttachment = 'fixed';
        corpo.style.backgroundPosition = 'center';
        corpo.style.backgroundSize = '100% 100vh';
        corpo.style.backgroundRepeat = 'no-repeat';
      })
      filmesDaPesquisa.appendChild(card);
    }
  });
}

const sem_resultado = document.querySelector('.sem_resultado')

const search = () => {
  const input_request = document.querySelector('.cabecalho__pesquisa-input');
  let movies_requested = []
  fetch(`https://api.themoviedb.org/3/search/movie?query=${input_request.value}&api_key=${apiKey}&language=pt-BR&adult=true`)
    .then(response => response.json())
    .then(data => {
      movies_requested = data.results
      if(movies_requested.length == 0){
        filmesDaPesquisa.innerHTML = '';
        search_result.style.opacity = '0';
        console.log('nenhum resultado disponível')
        sem_resultado.style.display = 'block';

      }else{
        sem_resultado.style.display = 'none';
        InserirDaPesquisaFilmesNaTela(movies_requested)
      }
    })
}


document.addEventListener('keypress', (event) => {
  if(event.key === 'Enter'){
    search()
  }
})

pesquisar.addEventListener('click', search)