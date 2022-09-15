import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiArrowBack as BackIcon } from 'react-icons/bi';
import { MovieContext } from '../App';
import { GoSearch } from 'react-icons/go';
import { searchMovies } from '../features/.';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { url, setSearchResult, setIsLoading } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => console.log(searchValue), [searchValue]);

  const handleSubmit = async e => {
    e.preventDefault();
    navigate('/search');
    setIsLoading(true);

    try {
      // TODO: try use useMemo to memoization
      const searchedMovies = await searchMovies(url, searchValue);
      setIsLoading(false);
      setSearchResult(searchedMovies?.Search);
    } catch (error) {
      // TODO: create a error element
      setIsLoading(false);
      throw new Error(error);
    }
  };

  return (
    <nav className='sticky top-0 p-4 bg-white'>
      <div className='w-full md:max-w-[97%] mx-auto grid items-center grid-cols-4'>
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
          <h1 className='col-span-2 text-center text-lg'>Details movie</h1>
        ) : (
          <form
            className='w-full col-span-2 flex m-auto bg-slate-200 px-3 py-1 rounded-md xl:max-w-[80%]'
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
