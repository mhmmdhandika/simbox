import { savedMovies } from './storage';

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

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

export { searchMovies, getMovieDetails };
