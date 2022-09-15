import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTrash2 as TrashIcon, FiSave as SaveIcon } from 'react-icons/fi';
import { getMovieDetails } from '../features/.';
import { MovieContext } from '../App';

function CardMovie({ title, year, type, poster, imdbID, typeCard }) {
  const navigate = useNavigate();
  const { url, setIsLoading, setDetailsMovie } = useContext(MovieContext);

  const getImdbID = e => {
    const imdbid =
      e.target.parentElement.parentElement.parentElement.attributes.getNamedItem(
        'data-imdbid'
      ).value;

    return imdbid;
  };

  const getDetails = async imdbID => {
    setIsLoading(true);

    try {
      let resp = await getMovieDetails(url, imdbID);
      setIsLoading(false);
      setDetailsMovie(resp);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error);
    }
  };

  return (
    <article
      data-imdbid={imdbID}
      className='text-slate-700 rounded-lg overflow-hidden'
    >
      <img
        src={poster}
        alt={`${title}'s poster`}
        className='border-2 rounded-t-lg aspect-[2/3]'
      />
      <div className='border-2 border-t-0 rounded-b-lg p-4 text-sm'>
        <h1 className='text-xl mb-2'>{title}</h1>
        <p className='my-2'>Year: {year}</p>
        <p className='mt-2'>Type: {type}</p>
        <div className='flex justify-between mt-2 text-sm'>
          {/* FIXME: change onclick event in these button */}
          <button
            className='w-full border border-slate-500 rounded-md mr-1 py-1 px-2 hover:bg-slate-500 hover:text-white hover:font-bold'
            onClick={e => {
              getDetails(getImdbID(e));
              navigate('/details');
            }}
          >
            {window.innerWidth >= 1024 ? 'See details' : 'Details'}
          </button>
          <button
            className={`border rounded-md py-1 px-2 hover:text-white ${
              typeCard === 'searched'
                ? 'border-blue-500 hover:bg-blue-500'
                : 'border-red-400 hover:bg-red-400'
            }`}
          >
            {typeCard === 'searched' ? <SaveIcon /> : <TrashIcon />}
          </button>
        </div>
      </div>
    </article>
  );
}

export default CardMovie;
