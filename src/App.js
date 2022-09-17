import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SharedLayout,
  Home,
  SearchedContainerMovies,
  NotFound,
  DetailsMovie,
} from './components/index';
import { checkStorage } from './features/storage';

const MovieContext = createContext(null);
const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const url = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

function App() {
  const [loadSavedMovies, setLoadMovies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [detailsMovie, setDetailsMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    state: false,
    msg: 'Something went wrong',
  });

  checkStorage();

  return (
    <>
      <BrowserRouter>
        <MovieContext.Provider
          value={{
            loadSavedMovies,
            url,
            searchResult,
            detailsMovie,
            isLoading,
            isError,
            setLoadMovies,
            setSearchResult,
            setDetailsMovie,
            setIsLoading,
            setIsError,
          }}
        >
          <Routes>
            <Route exact path='/' element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route
                exact
                path='/search'
                element={<SearchedContainerMovies />}
              />
              <Route exact path='/details' element={<DetailsMovie />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MovieContext };
