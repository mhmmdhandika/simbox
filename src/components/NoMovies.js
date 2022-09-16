import { EmptyIcon } from '../img/index';

function NoMovies() {
  return (
    <section className='relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[65%] '>
        <EmptyIcon width={230} />
        <h1 className='mt-2 text-lg text-center'>No movies here</h1>
      </div>
    </section>
  );
}
export default NoMovies;
