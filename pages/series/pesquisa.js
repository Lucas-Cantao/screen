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
        corpo.style.backgroundImage = `url(../../img/poster_series.jpg`;
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
  fetch(`https://api.themoviedb.org/3/search/tv?query=${input_request.value}&api_key=${apiKey}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      movies_requested = data.results
      if(movies_requested.length == 0){
        filmesDaPesquisa.innerHTML = '';
        search_result.style.opacity = '0';
        console.log('nenhum resultado disponível')
      }else{
        InserirDaPesquisaFilmesNaTela(movies_requested)
      }
    })
}


pesquisar.addEventListener('click', search)









const ElementoParaInserirFilmes = document.getElementById('filmes');

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
        corpo.style.background = `url('../../img/poster_series.jpg')`;
        corpo.style.backgroundAttachment = 'fixed';
        corpo.style.backgroundPosition = 'center';
        corpo.style.backgroundSize = '100% 100vh';
        corpo.style.backgroundRepeat = 'no-repeat';
      })
      
  
      
  
      ElementoParaInserirFilmes.appendChild(card);
    });
  }
  
  let movies = [];
  
  fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=pt-BR`)
    .then(response => response.json())
    .then(data => {
      movies = data.results.slice(0, 15); // Atribui o valor a movies, por exemplo (top 15 filmes populares)
      InserirFilmesNaTela(movies);
    })
    .catch(error => {
      console.error('Ocorreu um erro ao obter os filmes populares:', error);
  });



  document.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
      search()
    }
  })