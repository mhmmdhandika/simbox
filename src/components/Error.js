import { useContext } from 'react';
import { Warning } from '../img/index';
import { MovieContext } from '../App';

function Error() {
  const {
    isError: { msg },
  } = useContext(MovieContext);

  return (
    <div className='relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-center'>
        <Warning width={270} />
        <h1 className='mt-2'>{msg}</h1>
        <h2 className='mt-2'>Please try again</h2>
      </div>
    </div>
  );
}
export default Error;
