import { Loading as LoadingIcon } from '../img/.';

function Loading() {
  return (
    <div className='relative'>
      <div className='absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-[65%]'>
        <LoadingIcon width={180} />
        <h1 className='mt-2 text-lg text-center'>Loading...</h1>
      </div>
    </div>
  );
}
export default Loading;
