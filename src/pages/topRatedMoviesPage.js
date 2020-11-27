import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {TopRatedMoviesContext} from '../contexts/topRatedMoviesContext'
import AddToWatchlist from '../components/buttons/addToWatchlist'

const MovieListPage = () => {
  const context = useContext(TopRatedMoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchlist movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;