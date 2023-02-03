import React from "react";
import "./MovieContainer.css";
import Movie from '../Movie/Movie';

const MovieContainer = ({movies, selectMovie}) => {
  const allMovies = movies.map((movie)=> {
    return (
      <Movie 
        id={movie.id}
        key={movie.id}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        title={movie.title}
        average_rating={movie.average_rating}
        release_date={movie.release_date}
        selectMovie={selectMovie}
      />
    )
  })


 return (
  <section className="all-movies-view">
    {allMovies}
  </section>
 )
}

export default MovieContainer;