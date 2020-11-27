import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getTopRatedMovies } from "../api/tmdb-api";

export const TopRatedMoviesContext = React.createContext(null)

const TopRatedMoviesContextProvider = props => {
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
    getTopRatedMovies().then(movies => {
      setMovies(movies);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TopRatedMoviesContext.Provider
      value={{
        movies: movies,
        addToFavorites: addToFavorites
      }}
    >
      {props.children}
    </TopRatedMoviesContext.Provider>
  );
};

export default TopRatedMoviesContextProvider