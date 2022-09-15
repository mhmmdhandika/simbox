import { Link } from 'react-router-dom';
import { NotFound as NotFoundIcon } from '../img';

function NotFound() {
  return (
    <section className='relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2'>
        <NotFoundIcon width={250} />
        {/* FIXME: style */}
        <Link
          to='/'
          className='block w-fit mt-5 mx-auto px-2 rounded-lg text-md text-center border border-slate-500'
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
export default NotFound;
