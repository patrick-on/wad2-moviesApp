import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchlist from '../components/buttons/addToWatchlist'

const NowPlayingMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowplaying.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Movies Now Playing"
      movies={movies}  /* Changed */
      action={(nowplaying) => {
        return <AddToWatchlist movie={nowplaying} />;
      }}
    />
  );
};

export default NowPlayingMovieListPage;