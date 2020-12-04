import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchlist from '../components/buttons/addToWatchlist'

const UpcomingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}  /* Changed */
      action={(upcoming) => {
        return <AddToWatchlist movie={upcoming} />;
      }}
    />
  );
};

export default UpcomingMovieListPage;