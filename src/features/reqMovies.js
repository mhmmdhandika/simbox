async function searchMovies(url, searchValue) {
  const fetchMovie = await fetch(`${url}s=${searchValue}`);
  if (!fetchMovie.ok) throw new Error(fetchMovie.statusText);

  const resp = await fetchMovie.json();
  if (resp.Response === 'False') throw new Error(resp.Error);

  return resp;
}

export { searchMovies };
