import { useContext } from 'react';
import { ContainerMovies, CardMovie, Loading, Error } from '.';
import { MovieContext } from '../App';

function SearchedContainerMovies() {
  const { searchResult, isLoading, isError } = useContext(MovieContext);

  if (isLoading) {
    return <Loading />;
  } else if (isError.state) {
    return <Error />;
  }
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
