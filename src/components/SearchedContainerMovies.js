import { useContext } from 'react';
import { ContainerMovies, CardMovie } from '.';
import { MovieContext } from '../App';

function SearchedContainerMovies() {
  const { searchResult } = useContext(MovieContext);

  // TODO: create loading

  return (
    <ContainerMovies>
      {searchResult?.map(movie => {
        const { Title, Year, Type, Poster, imdbID } = movie;

        return (
          <CardMovie
            title={Title}
            year={Year}
            type={Type}
            poster={Poster}
            imdbID={imdbID}
            typeCard='searched'
            key={imdbID}
          />
        );
      })}
    </ContainerMovies>
  );
}
export default SearchedContainerMovies;
