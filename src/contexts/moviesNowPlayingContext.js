import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getMoviesNowPlaying } from "../api/tmdb-api";

export const MoviesNowPlayingContext = React.createContext(null)

const MoviesNowPlayingContextProvider = props => {
  const [movies, setMovies] = useState([]);

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index])
      movies.splice(index, 1)
      return [...movies]
    });
  };
  useEffect(() => {
    getMoviesNowPlaying().then(movies => {
      setMovies(movies);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesNowPlayingContext.Provider
      value={{
        movies: movies,
        addToFavorites: addToFavorites
      }}
    >
      {props.children}
    </MoviesNowPlayingContext.Provider>
  );
};

export default MoviesNowPlayingContextProvider