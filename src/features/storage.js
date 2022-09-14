// FIXME:
let savedMovies = null;
const SAVED_MOVIES_KEY = 'SAVED_MOVIES';

const checkStorage = () => {
  if (typeof Storage !== 'undefined') {
    if (localStorage.getItem(SAVED_MOVIES_KEY) !== null) {
      savedMovies = localStorage.getItem(SAVED_MOVIES_KEY);
    } else {
      savedMovies = [];
    }
  } else {
    // FIXME:
    throw new Error("Your browser doesn't support Web API");
  }
};

export { savedMovies, checkStorage };
