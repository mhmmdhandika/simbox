// This gonna show in the first time user opened
// and user doesn't have one saved movie
import { ReactComponent as EmptyIcon } from '../img/empty-icon.svg';

function InitialDisplay() {
  return (
    <div className='relative'>
      <div className='max-w-xs absolute top-1/2 right-1/2 translate-y-1/2 translate-x-1/2 m-auto text-center'>
        <EmptyIcon width={280} className='ml-2.5' />
        <h2 className='m-5 text-xl text-slate-800'>No movies here</h2>
      </div>
    </div>
  );
}

export default InitialDisplay;
