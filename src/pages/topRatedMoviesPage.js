import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchlist from '../components/buttons/addToWatchlist'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.toprated.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={movies}  /* Changed */
      action={(toprated) => {
        return <AddToWatchlist movie={toprated} />;
      }}
    />
  );
};

export default MovieListPage;