const ElementoParaInserirFilmes = document.getElementById('filmes');

function InserirFilmesNaTela(filmes) {
  ElementoParaInserirFilmes.innerHTML = '';
  filmes.forEach(movie => {
    const movieId = movie.id;
    const title = movie.title;
    const releaseYear = movie.release_date.split('-')[0];
    const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const rating = movie.vote_average.toFixed(1);
    const overview = movie.overview;

    const main = document.createElement('main');
    main.className = 'main';


    const section = document.createElement('section');
    section.className = 'cards';
    section.style.background = `url(${posterPath})`;
    section.style.backgroundSize = '170px 250px';
    section.dataset.movieId = movieId;


    const contents = document.createElement('div');
    contents.className = 'contents';

    const nota = document.createElement('div');
    nota.className = 'nota';
    const imgStar = document.createElement('img');
    imgStar.src = 'img/Star.svg';
    imgStar.width = '15';
    const nota_text = document.createElement('p');
    nota_text.className = 'nota-text';
    nota_text.innerHTML = `${rating}`;
    
    
    const favoritar = document.createElement('div');
    favoritar.className = 'favoritar';
    const imgFav = document.createElement('img');
    imgFav.className = 'imgFav';
    imgFav.src = 'img/Heart.svg';
    imgFav.width = '15';
    imgFav.style.cursor = 'pointer';
    const favoritar_text = document.createElement('p');
    favoritar_text.className = 'favoritar-text';
    favoritar_text.innerHTML = `Favoritar`;

    const back = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;


    main.addEventListener('mouseenter', () => {
      corpo.style.background = `url(${back})`;
    })
    main.addEventListener('mouseout', () => {
      corpo.style.background = `url(img/POSTER.jpg)`;
    })




    main.appendChild(section);
    nota.appendChild(imgStar);
    nota.appendChild(nota_text);
    favoritar.appendChild(imgFav);
    favoritar.appendChild(favoritar_text);
    contents.appendChild(nota);
    contents.appendChild(favoritar);
    main.appendChild(contents);
    ElementoParaInserirFilmes.appendChild(main);
  });
}

export {InserirFilmesNaTela}
