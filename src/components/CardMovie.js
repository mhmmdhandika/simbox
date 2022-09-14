import { FiTrash2 as TrashIcon, FiSave as SaveIcon } from 'react-icons/fi';

function CardMovie({ title, year, type, poster, typeCard }) {
  return (
    <article className='text-slate-700 rounded-lg overflow-hidden'>
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
          <button className='w-full border border-slate-500 rounded-md mr-1 py-1 px-2 hover:bg-slate-500 hover:text-white hover:font-bold'>
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
