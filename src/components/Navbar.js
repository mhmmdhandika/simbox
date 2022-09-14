import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../App';
import { GoSearch } from 'react-icons/go';
import { searchMovies } from '../features/.';

function Navbar() {
  const navigate = useNavigate();
  let { url, setSearchResult, setIsLoading } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    navigate('/search');
    setIsLoading(true);

    try {
      const searchedMovies = await searchMovies(url, searchValue);
      console.log(searchedMovies);
      setIsLoading(false);
      setSearchResult(searchedMovies?.Search);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <nav className='sticky top-0 p-4 bg-white'>
      <div>
        <h1 className='hidden'>Simbox</h1>
        <form
          className='flex m-auto w-fit max-w-xs bg-slate-200 px-3 py-1 rounded-md md:min-w-[40%]'
          onSubmit={handleSubmit}
        >
          <input
            type='search'
            name='search-movie'
            id='search-movie'
            placeholder='Search movie'
            className='mr-2 bg-transparent outline-none w-full'
            onChange={e => setSearchValue(e.target.value)}
          />
          <button type='submit'>
            <GoSearch />
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
