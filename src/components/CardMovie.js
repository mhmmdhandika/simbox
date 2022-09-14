import { FiTrash2 as TrashIcon } from 'react-icons/fi';

function CardMovie({ title, year, type, poster, imdbID }) {
  return (
    <article className='rounded-lg overflow-hidden'>
      <img src={poster} alt={`${title}'s poster`} className='aspect-[2/3]' />
      <div className='border rounded-b-lg p-4 text-sm'>
        <h1 className='text-xl mb-2'>{title}</h1>
        <p className='my-2'>Year: {year}</p>
        <p className='mt-2'>Type: {type}</p>
        <div className='flex justify-between mt-2 text-sm'>
          <button className='w-full border border-slate-400 rounded-md mr-1 py-1 px-2'>
            {window.innerWidth >= 1024 ? 'See details' : 'Details'}
          </button>
          <button className='border border-red-400 rounded-md py-1 px-2'>
            <TrashIcon />
          </button>
        </div>
      </div>
    </article>
  );
}
export default CardMovie;
