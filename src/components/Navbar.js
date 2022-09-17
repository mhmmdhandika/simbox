import { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiArrowBack as BackIcon } from 'react-icons/bi';
import { MovieContext } from '../App';
import { GoSearch } from 'react-icons/go';
import { searchMovies } from '../features/reqMovies';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { url, isError, setSearchResult, setIsLoading, setIsError } =
    useContext(MovieContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    navigate('/search');
    setIsLoading(true);
    setIsError({ ...isError, state: false });

    try {
      // TODO: try use useMemo to memoization
      const searchedMovies = await searchMovies(url, searchValue);
      if (searchedMovies === undefined) {
        handleSubmit(e);
      } else {
        setIsLoading(false);
        setIsError({ ...isError, state: false });
        setSearchResult(searchedMovies?.Search);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError({ state: true, msg: error.message });
      throw new Error(error);
    }
  };

  return (
    <nav className='sticky top-0 p-4 bg-white'>
      <div className='w-full md:max-w-[97%] mx-auto grid items-center grid-cols-10'>
        <button
          className={`${
            location.pathname === '/' ? 'invisible' : ''
          } hover:opacity-50`}
          onClick={() => {
            location.pathname === '/details' ? navigate(-1) : navigate('/');
          }}
        >
          <BackIcon size='1.5rem' />
        </button>
        {location.pathname === '/details' ? (
          <h1 className='col-start-3 col-span-6 text-center text-lg'>
            Details movie
          </h1>
        ) : (
          <form
            className='w-full col-start-3 col-span-6 flex m-auto bg-slate-200 px-3 py-1 rounded-md xl:max-w-[80%]'
            onSubmit={handleSubmit}
          >
            <input
              type='search'
              name='search-movie'
              id='search-movie'
              placeholder='Search movie'
              className='mr-2 bg-transparent outline-none w-full autofill:shadow-none search-input'
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              required
            />
            <button type='submit' className='active:opacity-50'>
              <GoSearch />
            </button>
          </form>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
