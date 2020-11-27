import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesNowPlayingContext} from '../contexts/moviesNowPlayingContext'
import AddToWatchlist from '../components/buttons/addToWatchlist'

const MovieListPage = () => {
  const context = useContext(MoviesNowPlayingContext);
  const movies = context.movies.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Movies Now Playing"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchlist movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;