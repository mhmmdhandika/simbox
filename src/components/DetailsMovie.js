function DetailsMovie() {
  return (
    <section className='border border-red-300'>
      <img
        src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg'
        alt='just poster'
        className='aspect-[2/3]'
      />
      <div>
        <h1>title movie</h1>
        <p>Year</p>
        <p>Type</p>
        <p>Genre</p>
        <p>Director</p>
        <p>Writer</p>
        <p>Actors</p>
        <p>Plot</p>
        <p>Awards</p>
        <p>IMDB Rating</p>
      </div>
    </section>
  );
}
export default DetailsMovie;
