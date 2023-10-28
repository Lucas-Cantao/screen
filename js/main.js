const ElementoParaInserirFilmes = document.getElementById('filmes');
export const listaDeFavoritos = [];

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
    section.style.background = `url(${posterPath})`
    section.dataset.movieId = movieId;

    ElementoParaInserirFilmes.appendChild(section);
  });
}

export {InserirFilmesNaTela}