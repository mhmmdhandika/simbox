import { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../App';
import { ContainerMovies, CardMovie } from '.';
import {
  getMovieDetails,
  loadSavedMovies,
  loadedMovies,
} from '../features/reqMovies';
import { savedMovies } from '../features/storage';

function LoadContainerMovies() {
  const { url, setLoadMovies } = useContext(MovieContext);

  loadSavedMovies();

  return (
    <ContainerMovies>
      {loadedMovies.map(movie => {
        console.log(movie);
        return <h1>waw</h1>;
      })}
      {/* {i.map((movie, index) => {
        console.log(movie);

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
