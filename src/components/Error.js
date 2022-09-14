import { Warning } from '../img/index';

function Error({ msg }) {
  return (
    <div className='relative'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2'>
        <Warning width={270} />
        <h1 className='mt-2 text-lg text-center'>{msg}</h1>
      </div>
    </div>
  );
}
export default Error;
