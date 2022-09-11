import { GoSearch } from 'react-icons/go';

function Navbar() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <nav>
      <div>
        <h1 className='hidden'>Simbox</h1>
        <form
          className='flex m-auto w-fit max-w-xs bg-slate-200 px-2 py-1 my-5 rounded-md'
          onSubmit={handleSubmit}
        >
          <input
            type='search'
            name='search-movie'
            id='search-movie'
            placeholder='Search movie'
            className='mr-2 bg-transparent outline-none'
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
