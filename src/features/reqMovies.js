import { savedMovies } from './storage';

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;
let loadedMovies = [];

async function searchMovies(url, searchValue) {
  const fetchMovie = await fetch(`${url}s=${searchValue}`);
  if (!fetchMovie.ok) throw new Error(fetchMovie.statusText);

  const resp = await fetchMovie.text();
  if (resp.Response === 'False') throw new Error(resp.Error);

  if (resp.charAt(0) === '<') {
    searchMovies(url, searchValue);
  } else {
    const JSONParsed = JSON.parse(resp);
    return JSONParsed;
  }
}

async function getMovieDetails(url, imdbID) {
  const fetchMovie = await fetch(`${url}&r=json&i=${imdbID}`);
  const resp = await fetchMovie.text();

  if (resp.charAt(0) === '<') {
    getMovieDetails(url, imdbID);
  } else {
    const JSONParsed = JSON.parse(resp);
    return JSONParsed;
  }

  return resp;
}

let io;

// async function getMovieDetails2(url) {
//   const fetchMovie = await fetch(`${url}i=${imdbID}`)
//   const resp = await fetchMovie.text()

// }

const loadSavedMovies = async () => {
  const fetchMovie = await fetch(`${url}s=avengers`);
  const resp = await fetchMovie.text();
  io = resp;
  let i = JSON.parse(resp);
  // console.log(i.Search);

  // savedMovies.map(async imdbID => {
  //   const movie = await getMovieDetails(url, imdbID);
  //   loadedMovies.push(movie);
  // });
};

export { loadedMovies, searchMovies, getMovieDetails, loadSavedMovies };
