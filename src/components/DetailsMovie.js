import { useContext } from 'react';
import { MovieContext } from '../App';
import { Loading } from '.';

function DetailsMovie() {
  const { detailsMovie, isLoading } = useContext(MovieContext);

  const filtered = (({
    Director,
    Writer,
    Actors,
    Year,
    Type,
    Genre,
    Plot,
    Awards,
    imdbRating,
  }) => ({
    Director,
    Writer,
    Actors,
    Year,
    Type,
    Genre,
    Plot,
    Awards,
    imdbRating,
  }))(detailsMovie);

  const detailsMovieAsArray = Object.entries(filtered);

  return isLoading ? (
    <Loading />
  ) : (
    <div className='grid mx-auto sm:max-w-[90%] lg:grid-cols-2 lg:mt-3'>
      <img
        src={detailsMovie.Poster}
        alt={detailsMovie.Title}
        className='aspect-[2/3] justify-self-center lg:row-span-2 lg:h-full'
      />
      <h1 className='my-4 font-semibold text-3xl text-center'>
        {detailsMovie.Title}
      </h1>
      <table className='mx-5 mb-5'>
        <tbody>
          {detailsMovieAsArray.map((item, index) => {
            return (
              <tr className='border-y text-left' key={index}>
                <th className='py-2 align-top'>{item[0]}</th>
                <td className='pl-2 py-2'>{item[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default DetailsMovie;
