import React, { useState, useEffect } from 'react';
import "../../styles/genre.css";

function Genres({ onSelect }) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=68026e07f1d9513ae3e3ddacdfe4954b&language=en-US'
    )
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((error) => console.log(error));
  }, []);

  const handleGenreClick = (genreId) => {
    onSelect(genreId);
  };

  return (
    <div className="genres-container">
      <h2>Genres</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id} onClick={() => handleGenreClick(genre.id)}>
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;
