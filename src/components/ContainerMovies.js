function ContainerMovies(props) {
  return (
    <main>
      <div className='grid grid-cols-2 justify-center gap-2 px-3 mb-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6'>
        {props.children}
      </div>
    </main>
  );
}
export default ContainerMovies;
