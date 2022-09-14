import { useContext } from 'react';
import { MovieContext } from '../App';
import { ContainerMovies, CardMovie } from '.';

function LoadContainerMovies() {
  const { searchResult } = useContext(MovieContext);

  return (
    <ContainerMovies>
      {searchResult.map(movie => {
        const { Title, Year, Type, Poster, imdbID } = movie;

        return (
          <CardMovie
            title={Title}
            year={Year}
            type={Type}
            poster={Poster}
            imdbID={imdbID}
            key={imdbID}
          />
        );
      })}
    </ContainerMovies>
  );
}
export default LoadContainerMovies;
