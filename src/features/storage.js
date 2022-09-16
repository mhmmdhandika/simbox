import swal from 'sweetalert';

let savedMovies = [];
const SAVED_MOVIES_KEY = 'SAVED_MOVIES';
const createLocalStorage = () => localStorage.setItem(SAVED_MOVIES_KEY, '[]');

const checkStorage = () => {
  if (typeof Storage !== 'undefined') {
    if (localStorage.getItem(SAVED_MOVIES_KEY) !== null) {
      savedMovies = JSON.parse(localStorage.getItem(SAVED_MOVIES_KEY));
    } else {
      createLocalStorage();
    }
  } else {
    swal({
      icon: 'warning',
      text: "Your browser doesn't support Web API",
    });
  }
};

const checkStoreMovie = imdbID => {
  if (savedMovies.includes(imdbID)) return true;
  return false;
};

const saveMovie = imdbID => {
  if (localStorage.getItem(SAVED_MOVIES_KEY) === null) {
    createLocalStorage();
  }

  if (checkStoreMovie(imdbID)) {
    swal({
      icon: 'warning',
      text: 'The movie has been already saved!',
      timer: 2000,
    });
  } else {
    savedMovies.push(imdbID);
    const parsedData = JSON.stringify(savedMovies);
    localStorage.setItem(SAVED_MOVIES_KEY, parsedData);
  }
};

export { savedMovies, checkStorage, saveMovie };
