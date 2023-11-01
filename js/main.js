const ElementoParaInserirFilmes = document.getElementById('filmes');
const corpo = document.querySelector('.body')

function InserirFilmesNaTela(filmes) {
  ElementoParaInserirFilmes.innerHTML = '';
  filmes.forEach(movie => {
    const movieId = movie.id;
    const title = movie.title;
    const releaseYear = movie.release_date.split('-')[0];
    const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const rating = movie.vote_average.toFixed(1);
    const overview = movie.overview;

    const section = document.createElement('section');
    section.className = 'cards';
    section.style.background = `url(${posterPath})`;
    section.style.backgroundSize = '170px 250px';
    section.dataset.movieId = movieId;


    
    


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

    ElementoParaInserirFilmes.appendChild(section);
  });
}

export {InserirFilmesNaTela}