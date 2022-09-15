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
const url = 'http://www.omdbapi.com/?apikey=e050880d&';

// create back to home
function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  checkStorage();

  return (
    <>
      <BrowserRouter>
        <MovieContext.Provider
          value={{
            url,
            searchResult,
            isLoading,
            setSearchResult,
            setIsLoading,
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
