import  {useState} from "react";
import { NavLink } from "react-router-dom";
import debounce from "./debounce"

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  const debouncedSearch = debounce(searchText => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=68026e07f1d9513ae3e3ddacdfe4954b`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, 500);

  const handleSearch = event => {
    setSearchText(event.target.value);
    debouncedSearch(event.target.value);
  };

  return (
    <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <input type="text" placeholder="Search here..." value={searchText} onChange={handleSearch} />
      <div className="movies-container">
        {movies.map(movie => (
          <NavLink to={`movie/${movie.title}`}>
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
    </form>
  );
};

export default Search;
