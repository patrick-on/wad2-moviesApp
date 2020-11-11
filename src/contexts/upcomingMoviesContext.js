import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getUpcomingMovies } from "../api/tmdb-api";

export const UpcomingMoviesContext = React.createContext(null)

const UpcomingMoviesContextProvider = props => {
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
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UpcomingMoviesContext.Provider
      value={{
        movies: movies,
        addToFavorites: addToFavorites
      }}
    >
      {props.children}
    </UpcomingMoviesContext.Provider>
  );
};

export default UpcomingMoviesContextProvider