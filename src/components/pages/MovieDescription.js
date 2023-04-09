import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/md.css';

function MovieDescription() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=68026e07f1d9513ae3e3ddacdfe4954b&language=en-US`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div className="movie-description">
      <div className="poster-container">
         <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
      </div>
      <div className="details-container">
        <h2>{movie.title}</h2>
        <p>Language: {movie.original_language}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Runtime: {movie.runtime} minutes</p>
        <p>Ratings: {movie.vote_average}</p>
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDescription;
