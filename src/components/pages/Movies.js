import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/movies.css';

function Movies({ genreId }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=68026e07f1d9513ae3e3ddacdfe4954b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, [genreId]);

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <NavLink to={`/movie/${movie.id}`}>
        <div className="movie-card" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-details">
            <h2>{movie.title}</h2>
            <p>Language: {movie.original_language}</p>
            <p>Ratings: {movie.vote_average}</p>
          </div>
        </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Movies;
