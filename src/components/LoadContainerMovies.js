import { useEffect, useRef, useContext } from 'react';
import { MovieContext } from '../App';
import { ContainerMovies, CardMovie } from '.';
import { getMovieDetails } from '../features/reqMovies';
import { savedMovies } from '../features/storage';

function LoadContainerMovies() {
  const { url } = useContext(MovieContext);

  return (
    <ContainerMovies>
      {/* {loadSavedMovies.map(movie => {
        console.log(movie);
      })} */}
      {/* {i.map(imdbIDSaved => {
        const resp = getMovieDetails(url, imdbIDSaved);

        // if (resp?.charAt(0) === '<') {
        // console.log(resp);
        // } else {
        // const { Title, Year, Type, Poster, imdbID } = resp;
        console.log(resp);
        // }

        // return (
        //   <CardMovie
        //     title={Title}
        //     year={Year}
        //     type={Type}
        //     poster={Poster}
        //     imdbID={imdbID}
        //     typeCard='searched'
        //     key={imdbID}
        //   />
        // );
      })} */}
      {/* {loaded.length === 0 ? console.log('hai') : console.log('kaga')} */}
      {/* {savedMovies.map(movie => console.log(movie))} */}
      {/* {movies.map((movie, index) => {
        console.log(true);

        const { Title, Year, Type, Poster, imdbID } = movie;

        return (
          <CardMovie
            title={Title}
            year={Year}
            type={Type}
            poster={Poster}
            imdbID={imdbID}
            typeCard='searched'
            key={index}
          />
        );
      })} */}
    </ContainerMovies>
  );
}

export default LoadContainerMovies;
