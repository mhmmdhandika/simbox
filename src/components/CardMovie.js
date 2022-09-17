import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../App';
import { FiTrash2 as TrashIcon, FiSave as SaveIcon } from 'react-icons/fi';
import { getMovieDetails } from '../features/reqMovies';
import { savedMovies, saveMovie } from '../features/storage';

function CardMovie({ title, year, type, poster, imdbID, typeCard }) {
  const navigate = useNavigate();
  const { url, isError, setIsLoading, setDetailsMovie, setIsError } =
    useContext(MovieContext);

  const getDetails = async imdbID => {
    setIsLoading(true);
    setIsError({ ...isError, state: false });

    try {
      let resp = await getMovieDetails(url, imdbID);

      if (typeof resp === 'object') {
        setIsLoading(false);
        setIsError({ ...isError, state: false });
        setDetailsMovie(resp);
      } else {
        await getDetails(imdbID);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError({ state: true, msg: error.message });
    }
  };

  const getParentImdbID = e => {
    const imdbID =
      e.target.parentElement.attributes.getNamedItem('data-imdbid').value;

    return imdbID;
  };

  const checkAlreadySavedInSearched = () => {
    // imdbID in this expression refers to this parameter
    if (savedMovies.includes(imdbID)) return true;
    return false;
  };

  return (
    <article className='text-slate-700 rounded-lg overflow-hidden'>
      <img
        src={poster}
        alt={`${title}'s poster`}
        className='border-2 rounded-t-lg aspect-[2/3]'
      />
      <div className='border-2 border-t-0 rounded-b-lg p-3 text-sm sm:p-4'>
        <h1 className='text-lg mb-2 md:text-xl'>{title}</h1>
        <p className='my-2'>Year: {year}</p>
        <p className='mt-2'>Type: {type}</p>
        <div data-imdbid={imdbID} className='flex justify-between mt-2 text-sm'>
          <button
            className='w-full text-slate-600 border border-slate-500 rounded-md mr-1 py-[0.20rem] sm:py-1 sm:px-2 hover:bg-slate-500 hover:text-white hover:font-bold'
            onClick={e => {
              getDetails(getParentImdbID(e));
              navigate('/details');
            }}
          >
            {window.innerWidth >= 1024 ? 'See details' : 'Details'}
          </button>
          <button
            className={`border rounded-md py-1 px-2 hover:text-white ${
              typeCard === 'searched'
                ? checkAlreadySavedInSearched()
                  ? 'text-slate-600 border-slate-500 bg-slate-200 hover:border-slate-500 hover:bg-slate-500'
                  : 'text-blue-600 bg-blue-200 border-blue-500 hover:bg-blue-500'
                : 'border-red-400 hover:bg-red-400'
            }`}
            onClick={e => {
              saveMovie(getParentImdbID(e));
            }}
          >
            {typeCard === 'searched' ? (
              <SaveIcon className='pointer-events-none' />
            ) : (
              <TrashIcon className='pointer-events-none' />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardMovie;
