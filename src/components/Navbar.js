import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { BiArrowBack as BackIcon } from 'react-icons/bi';
import { MovieContext } from '../App';
import { GoSearch } from 'react-icons/go';
import { searchMovies } from '../features/.';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { url, setSearchResult, setIsLoading } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState(null);

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
      setIsLoading(false);
      throw new Error(error);
    }
  };

  return (
    <nav className='sticky top-0 p-4 bg-white'>
      <div className='w-full grid items-center grid-cols-4'>
        <Link
          to='/'
          className={`${
            location.pathname === '/' ? 'invisible' : ''
          } hover:opacity-50`}
        >
          <BackIcon size='1.5rem' />
        </Link>
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
            onChange={e => setSearchValue(e.target.value)}
            required
          />
          <button type='submit' className='active:opacity-50'>
            <GoSearch />
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
