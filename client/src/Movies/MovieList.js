import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function MovieList(props) {
  const movies = props;

  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  //console.log(props.movie);
  const { url } = useRouteMatch();
  //console.log(url);

  return (
    <div className="movie-card">
      <Link to={`${url}movies/${props.movie.id}`}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </Link>
    </div>
  );
}
